#!/usr/bin/env python3
"""Local preflight for Copeak Study entrance-reading parallel authoring.

No dependencies outside Python's standard library.
The shared remote ledger is on branch coord/reading-450-registry.
This script checks local files; it cannot reserve an ID on GitHub.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
from pathlib import Path

ARTICLE_ID = re.compile(r"^L(0[1-9]|1[0-5])-\d{3}$")


def read_json(path: Path):
    return json.loads(path.read_text(encoding="utf-8"))


def english(article: dict) -> str:
    return " ".join(
        sentence["en"]
        for paragraph in article.get("paragraphs", [])
        for sentence in paragraph.get("sentences", [])
    )


def source_sentence(article: dict, paragraph_id: str, index: int) -> str:
    for paragraph in article.get("paragraphs", []):
        if paragraph.get("id") == paragraph_id:
            sentences = paragraph.get("sentences", [])
            if isinstance(index, int) and 0 <= index < len(sentences):
                return sentences[index].get("en", "")
    return ""


def fail(errors: list[str], label: str, message: str):
    errors.append(f"{label}: {message}")


def check_lesson(article: dict, item_id: str, levels: dict, errors: list[str]):
    prefix = item_id
    text = english(article)
    paragraphs = article.get("paragraphs", [])
    sentences = [s for p in paragraphs for s in p.get("sentences", [])]
    words = len(text.split())
    if article.get("id") != item_id or article.get("category_id") != item_id[:3]:
        fail(errors, prefix, "embedded ID or category does not match filename")
    if article.get("original") is not True or article.get("status") != "draft":
        fail(errors, prefix, "new content must be original and status=draft")
    range_ = levels.get(article.get("level_id"))
    if not range_ or not range_[0] <= words <= range_[1]:
        fail(errors, prefix, f"word count {words} outside level range {range_}")
    if article.get("word_count") != words:
        fail(errors, prefix, f"stored word_count differs from {words}")
    if len(paragraphs) < 5 or len(sentences) < 20:
        fail(errors, prefix, "requires at least 5 paragraphs and 20 sentences")
    if any(not s.get("en", "").strip() or not s.get("ja", "").strip() for s in sentences):
        fail(errors, prefix, "missing English sentence or Japanese translation")
    vocab = article.get("vocabulary", [])
    minimum = 20 if article.get("level_id") == "eiken-3" else 40
    if len(vocab) < minimum:
        fail(errors, prefix, f"only {len(vocab)} vocabulary items; need {minimum}")
    terms = set()
    for v in vocab:
        term = v.get("term", "")
        if any(not v.get(key) for key in ("term", "ja", "synonym", "definition")):
            fail(errors, prefix, f"incomplete vocabulary entry: {term!r}")
        if term.lower() in terms:
            fail(errors, prefix, f"duplicate vocabulary term: {term}")
        terms.add(term.lower())
        if term and not re.search(r"(?<![a-z])" + re.escape(term) + r"(?![a-z])", text, re.I):
            fail(errors, prefix, f"vocabulary not found in source: {term}")
    questions = article.get("questions", [])
    if len(questions) != 10:
        fail(errors, prefix, f"expected 10 reading questions, found {len(questions)}")
    paragraph_ids = {p.get("id") for p in paragraphs}
    seen_question_ids = set()
    for q in questions:
        opts = q.get("options", [])
        answer = q.get("answer")
        if (not q.get("prompt") or len(opts) != 4 or len(set(opts)) != 4
            or not isinstance(answer, int) or answer not in range(4)
            or not q.get("explanation_ja")):
            fail(errors, prefix, f"malformed four-choice question {q.get('id')}")
        if not q.get("paragraph_ids") or not set(q["paragraph_ids"]) <= paragraph_ids:
            fail(errors, prefix, f"invalid question references {q.get('id')}")
        if q.get("id") in seen_question_ids:
            fail(errors, prefix, f"duplicate question ID {q.get('id')}")
        seen_question_ids.add(q.get("id"))
    for field in ("grammar", "discourse", "paraphrases", "cloze"):
        if len(article.get(field, [])) != 4:
            fail(errors, prefix, f"expected 4 {field} exercises")
    for g in article.get("grammar", []):
        if not g.get("focus") or g["focus"] not in source_sentence(
            article, g.get("paragraph_id", ""), g.get("sentence_index", -1)
        ) or not g.get("explanation_ja"):
            fail(errors, prefix, f"invalid grammar reference {g.get('focus')}")
    for d in article.get("discourse", []):
        if not d.get("role_ja") or not any(
            d.get("expression", "") in s.get("en", "")
            for p in paragraphs if p.get("id") == d.get("paragraph_id")
            for s in p.get("sentences", [])
        ):
            fail(errors, prefix, f"invalid discourse reference {d.get('expression')}")
    for p in article.get("paraphrases", []):
        if (p.get("source") not in [s.get("en") for s in sentences]
                or not p.get("rewrite") or not p.get("explanation_ja")):
            fail(errors, prefix, "invalid paraphrase")
    for c in article.get("cloze", []):
        options = c.get("options", [])
        answer = c.get("answer")
        if (not answer or answer not in source_sentence(
                article, c.get("paragraph_id", ""), c.get("sentence_index", -1))
            or len(options) != 4 or len(set(options)) != 4
            or options.count(answer) != 1 or not c.get("explanation_ja")):
            fail(errors, prefix, f"invalid cloze: {answer}")
    if not article.get("source_links") or any(
        not src.get("url", "").startswith("https://")
        for src in article.get("source_links", [])
    ):
        fail(errors, prefix, "source links must be HTTPS")


def audit(root: Path, manifest: dict, ledger: dict, selected: list[str]) -> list[str]:
    errors = []
    items = manifest.get("sets", [])
    ids = [item.get("id") for item in items]
    id_set = set(ids)
    accepted = ledger.get("accepted_ids", [])
    if len(ids) != len(id_set):
        fail(errors, "manifest", "duplicate registered IDs")
    if len(accepted) != len(set(accepted)) or set(accepted) != id_set:
        fail(errors, "ledger", "accepted_ids and manifest IDs disagree")
    if ledger.get("registered_total") != len(ids):
        fail(errors, "ledger", "registered_total and manifest length disagree")
    reservations = ledger.get("reservations", [])
    reservation_ids = [r.get("id") for r in reservations]
    if len(reservation_ids) != len(set(reservation_ids)):
        fail(errors, "ledger", "duplicate reservations")
    if set(reservation_ids) & id_set:
        fail(errors, "ledger", "reserved IDs already accepted")
    levels = {l["id"]: l["words"] for l in manifest.get("levels", [])}
    seen_fingerprints = {}
    indexed = {}
    for item in items:
        id_ = item.get("id", "")
        rel_path = item.get("file", "")
        if not ARTICLE_ID.fullmatch(id_):
            fail(errors, "manifest", f"bad ID {id_}")
            continue
        if rel_path != f"data/reading/entrance/{id_}.json":
            fail(errors, "manifest", f"incorrect file path for {id_}")
            continue
        path = root / rel_path
        if not path.is_file():
            fail(errors, id_, f"missing file {rel_path}")
            continue
        try:
            article = read_json(path)
        except (ValueError, OSError) as exc:
            fail(errors, id_, f"invalid JSON: {exc}")
            continue
        indexed[id_] = article
        if article.get("id") != id_:
            fail(errors, id_, "article ID mismatch")
        normalized = " ".join(english(article).lower().split())
        fingerprint = hashlib.sha256(normalized.encode("utf-8")).hexdigest()
        if fingerprint in seen_fingerprints:
            fail(errors, id_, f"exact English text duplicate of {seen_fingerprints[fingerprint]}")
        else:
            seen_fingerprints[fingerprint] = id_
    for id_ in selected:
        if id_ not in indexed:
            fail(errors, id_, "selected ID missing from manifest or filesystem")
        else:
            check_lesson(indexed[id_], id_, levels, errors)
    return errors


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", type=Path, default=Path("."))
    parser.add_argument("--manifest", default="data/reading/entrance/manifest.json")
    parser.add_argument("--ledger", default="docs/reading-450-ledger.json")
    parser.add_argument("--ids", default="", help="Comma-separated lesson IDs; defaults to recovered set")
    args = parser.parse_args()
    root = args.root.resolve()
    manifest = read_json(root / args.manifest)
    ledger = read_json(root / args.ledger)
    recovered = ledger.get("parallel_conflict", {}).get("recoveries", [])
    selected = [id_.strip() for id_ in args.ids.split(",") if id_.strip()]
    if not selected:
        selected = [item["to_id"] for item in recovered]
    errors = audit(root, manifest, ledger, selected)
    if errors:
        for error in errors:
            print("ERROR:", error, file=sys.stderr)
        print(f"FAILED: {len(errors)} errors", file=sys.stderr)
        return 1
    print(f"PASS: {len(manifest['sets'])} unique registered IDs, "
          f"{len(selected)} strict lessons, no exact English text duplicates")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
