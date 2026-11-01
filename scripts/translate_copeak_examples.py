#!/usr/bin/env python3
"""One-off draft translation backfill for Copeak's 5,000 contextual English examples.

Requires an Argos Translate en->ja model. This generates machine DRAFTS, not
teacher-verified translations. Fails closed if any row is missing/misaligned.
"""
import json
import re
import sys
from pathlib import Path
from collections import Counter

ROOT=Path(__file__).resolve().parents[1]
DATA=ROOT/"data"
SHARDS=[DATA/f"chunks-v7-level-{i}.json" for i in range(1,9)]
DIAG=DATA/"v8-diagnostic-800.json"
GLOSSES=DATA/"v8-2-example-ja.json"

def japanese(s):
    return bool(re.search(r"[\u3040-\u30ff\u3400-\u9fff]",s or ""))

def infer_focus(translation, meaning):
    """Only attach an underline when the Japanese string is actually present."""
    meaning=str(meaning or "").replace("〜","").replace("～","").strip()
    if len(meaning)<2: return ""
    if meaning in translation:return meaning
    # Progressive suffix trimming is for inflected verbs such as 訪れる/訪れ.
    for end in range(1,min(5,len(meaning)-1)):
        stem=meaning[:-end]
        if len(stem)>=3 and stem in translation:return stem
    return ""

def main():
    try:
        from argostranslate import package, translate
    except ImportError as e:
        raise SystemExit("argostranslate is required: "+str(e))
    package.update_package_index()
    choices=[p for p in package.get_available_packages() if p.from_code=="en" and p.to_code=="ja"]
    if not choices:raise SystemExit("No Argos en->ja model available")
    model_path=choices[-1].download()
    package.install_from_path(model_path)
    print("Installed Argos en->ja model:",choices[-1],flush=True)

    shards=[json.loads(p.read_text(encoding="utf-8")) for p in SHARDS]
    examples=[q for shard in shards for q in shard["questions"]]
    if len(examples)!=5000 or len({q["id"] for q in examples})!=5000:
        raise SystemExit("The study bank must have exactly 5,000 unique IDs")
    diag=json.loads(DIAG.read_text(encoding="utf-8"))
    gloss=json.loads(GLOSSES.read_text(encoding="utf-8"))
    if len(diag["questions"])!=800:raise SystemExit("The diagnostic must have 800 examples")
    previous={x["id"]:x for x in gloss["items"]}
    if len(previous)<41:raise SystemExit("Existing Japanese editorial drafts missing")
    originals={q["id"]:q for q in examples}
    if not all(q["id"] in originals for q in diag["questions"]):
        raise SystemExit("Diagnostic has unrecognized IDs")

    translations={}
    source_by_id={}
    status=Counter()
    flagged=[]
    # Include the one diagnostic sentence that differs from the original source.
    tasks={q["example_en"] for q in examples}|{q["example_en"] for q in diag["questions"]}
    print("Distinct English examples:",len(tasks),flush=True)
    for index,source in enumerate(sorted(tasks),start=1):
        # Keep human-authored draft translations only on exact English matches.
        old=next((x for x in previous.values()
                  if x.get("source_example_en")==source and japanese(x.get("example_ja",""))),None)
        if old:
            translated=old["example_ja"].strip()
            kind="existing_editorial_draft"
        else:
            translated=translate.translate(source,"en","ja").strip()
            kind="machine_draft_needs_review"
        if not japanese(translated) or len(translated)<3:
            raise SystemExit("Translation failed for English: "+source+" => "+translated)
        translations[source]=(translated,kind)
        status[kind]+=1
        if any(x in translated for x in ["<unk>","&quot;","[UNK]"]):
            flagged.append(source)
        if index%250==0:
            print(f"Translated {index}/{len(tasks)} examples",flush=True)

    for shard in shards:
        for q in shard["questions"]:
            ja,kind=translations[q["example_en"]]
            q["example_ja"]=ja
            q["focus_ja"]=infer_focus(ja,q.get("meaning_ja",""))
            q["translation_status"]=kind
    output=[]
    for q in diag["questions"]:
        old=previous.get(q["id"])
        source=q["example_en"]
        ja,kind=translations[source]
        focus=old.get("focus_ja","") if old and old.get("source_example_en")==source else ""
        if not focus or focus not in ja:
            focus=infer_focus(ja,q.get("meaning_ja",""))
        output.append({"id":q["id"],"source_example_en":source,
                       "example_ja":ja,"focus_ja":focus,
                       "translation_status":kind})
    if len(output)!=800 or len({x["id"] for x in output})!=800:
        raise SystemExit("Diagnostic translation count/uniqueness failure")
    if any(not japanese(x["example_ja"]) for x in output):
        raise SystemExit("A Japanese translation is missing")
    if any(x["source_example_en"]!=q["example_en"]
           for x,q in zip(output,diag["questions"])):
        raise SystemExit("Translation source mismatches diagnostic")
    for p,shard in zip(SHARDS,shards):
        p.write_text(json.dumps(shard,ensure_ascii=False,separators=(",",":"))+"\n",encoding="utf-8")
    gloss["items"]=output
    gloss["bankId"]="copeak-v8-4-japanese-translations-full-800-draft"
    gloss["status"]="MACHINE_DRAFT_REQUIRES_TEACHER_REVIEW"
    gloss["description"]="All 800 diagnostic sentences have Japanese drafts. Most are offline machine translations; teacher review required before claiming publication-quality accuracy."
    GLOSSES.write_text(json.dumps(gloss,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    report={
      "study_total":5000,"diagnostic_total":800,"unique_source_examples":len(tasks),
      "translation_origin_counts":dict(status),
      "study_with_ja":sum(bool(q.get("example_ja")) for shard in shards for q in shard["questions"]),
      "diagnostic_with_ja":sum(bool(q["example_ja"]) for q in output),
      "study_focus_aligned":sum(bool(q["focus_ja"]) for shard in shards for q in shard["questions"]),
      "diagnostic_focus_aligned":sum(bool(q["focus_ja"]) for q in output),
      "suspicious_machine_output_english":flagged,
      "status":"drafts_not_yet_editorially_reviewed",
    }
    (DATA/"ja-backfill-v8-4-report.json").write_text(json.dumps(report,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print("TRANSLATION REPORT",json.dumps(report,ensure_ascii=False),flush=True)
    for q in diag["questions"][:5]:
        print(q["id"],q["example_en"]," => ",next(x["example_ja"] for x in output if x["id"]==q["id"]),flush=True)
    print("PASS: complete translations for all 5,000 source + 800 diagnostic records",flush=True)

if __name__=="__main__":
    main()
