#!/usr/bin/env node
// Copeak bilingual QA revision. Deliberately excludes Vercel deployment.
// The source sentence and the Japanese chunk meaning must both agree with
// an approved frame; unmatched source sentences remain visibly unreviewed.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const load=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const save=(p,obj)=>fs.writeFileSync(path.join(root,p),JSON.stringify(obj,null,2)+'\n','utf8');
const frame=load('data/ja-quality-templates-v1.json').templates;
const sourcePaths=Array.from({length:8},(_,i)=>'data/chunks-v7-level-'+(i+1)+'.json');
const shards=sourcePaths.map(load);
const diag=load('data/v8-diagnostic-800.json');
const glossary=load('data/v8-2-example-ja.json');
const override=load('data/v8-1-focus-overrides.json');
const overrides=new Map(override.overrides.map(x=>[x.id,x]));
const all=shards.flatMap(x=>x.questions);
const byId=new Map(all.map(x=>[x.id,x]));
assert.equal(all.length,5000);
assert.equal(byId.size,5000);
assert.equal(diag.questions.length,800);
assert.equal(glossary.items.length,800);
assert.equal(new Set(glossary.items.map(x=>x.id)).size,800);

const edits={
  'CK1-001':['おはようございます、みなさん！私たちの授業は9時に始まります。','おはようございます'],
  'CK1-002':['これらの本を運ぶのを手伝ってくれて、本当にありがとうございます。','本当にありがとうございます'],
  'CK1-003':['またあとでね、ケン。楽しい午後を過ごしてね！','またあとでね'],
  'CK1-004':['今日は元気ですか。うれしそうですね。','元気ですか'],
  'CK1-005':['はじめまして、マリア。私はハナです。','はじめまして'],
  'CK1-006':['こちらに来て、この絵を見てください。','こちらに来て'],
  'CK1-007':['先生に名前を呼ばれたら、座ってもいいですよ。','座って'],
  'CK1-008':['音楽が始まったら、立ち上がってください。','立ち上がって'],
  'CK1-101':['新しく入った生徒には親切にしてください。','親切に'],
  'CK1-122':['少々お待ちください。ノートが必要なのです。','少々お待ちください'],
  'CK1-623':['オンラインワークショップについての情報を集めてください。','情報を集めて'],
  'CK2-041':['できるだけ早く返信してください。','できるだけ早く'],
  'CK2-162':['私たちと一緒に来ませんか。','一緒に来'],
  'CK2-166':['無事に着いたら、私に電話してください。','電話して'],
  'CK2-329':['授業内の発表を15分間練習します。','発表を15分間練習'],
  'CK2-330':['短い要約を15分間練習します。','短い要約を15分間練習'],
  'CK2-513':['オンラインワークショップについて忘れずに質問してください。','質問して'],
  'CK2-516':['科学フェアについて忘れずに質問してください。','質問して'],
  'CK2-612':['私はゲスト講師について誰かに尋ねるよう頼まれました。','誰かに尋ねる'],
  'CK3-094':['気をつけて！床がぬれています。','気をつけて'],
  'CK4-001':['優れたリーダーは、落ち着いて問題に対処しなければなりません。','問題に対処'],
  'CK4-002':['すべての答えをインターネットに頼るわけにはいきません。','インターネットに頼る'],
  'CK4-004':['どの生徒もクラスの話し合いに貢献できます。','話し合いに貢献'],
  'CK4-005':['睡眠不足は集中力の低下につながることがあります。','につながる'],
  'CK4-006':['練習を重ねることで、さらに自信がつくことがあります。','自信がつく'],
  'CK4-007':['学習上の困難の中には、指示が不明確なことから生じるものがあります。','から生じる'],
  'CK4-066':['私たちは紙のワークシートの代わりにタブレットを使いました。','の代わりに'],
  'CK4-070':['事務室を通して申請することができます。','申請する'],
  'CK4-092':['彼女は故郷についてスピーチをしました。','スピーチをしました'],
  'CK6-099':['その学校は駅のすぐ近くにあります。','すぐ近くに'],
  'CK6-239':['その研究では、語学力と地域差の関係を分析する予定です。','関係を分析'],
  'CK7-001':['教師は生徒一人ひとりの学習スタイルを考慮に入れる必要があります。','考慮に入れる'],
  'CK7-002':['新たな証拠によって、当初の結論に疑問が生じるかもしれません。','疑問が生じる'],
  'CK7-003':['その調査結果は、その前提に疑問を投げかけています。','疑問を投げかけ'],
  'CK7-004':['最近の研究結果は、以前の説明に疑問を投げかけています。','疑問を投げかけ'],
  'CK7-005':['新しいデータは、長期的な傾向をより広い視野で捉える助けとなります。','広い視野で捉える'],
  'CK7-006':['私たちの委員会は来週、提案を提出する予定です。','提案を提出'],
  'CK7-007':['人気のない考えを実行に移すには勇気が必要です。','実行に移す'],
  'CK7-211':['この調査は、一般に広まっている見方の根底にある前提に異議を唱えるかもしれません。','前提に異議を唱える'],
  'CK7-213':['この調査は、掲げられた目標の根底にある前提に異議を唱えるかもしれません。','前提に異議を唱える'],
  'CK7-214':['この調査は、規制の枠組みの根底にある前提に異議を唱えるかもしれません。','前提に異議を唱える'],
  'CK7-217':['この調査は、公式説明の根底にある前提に異議を唱えるかもしれません。','前提に異議を唱える'],
  'CK7-219':['この調査は、提案された改革の根底にある前提に異議を唱えるかもしれません。','前提に異議を唱える'],
  'CK7-220':['この調査は、研究手法の根底にある前提に異議を唱えるかもしれません。','前提に異議を唱える'],
  'CK7-378':['本研究は、批判的な検討を通じて、一般的に信じられている前提に潜む未検証の仮定を明らかにしようとしています。','未検証の仮定を明らかに'],
  'CK7-405':['本研究は、批判的な検討を通じて研究方法を評価するための基準を策定しようとしています。','基準を策定'],
  'CK8-001':['一貫した研究結果は、その理論の信頼性を高める可能性があります。','信頼性を高める'],
  'CK8-002':['教育危機を乗り越えるには、発想の枠組みを根本的に変える必要があるかもしれません。','発想の枠組みを根本的に変える'],
  'CK8-003':['私たちはこの問題に、利用できるあらゆる資源を投入しなければなりません。','あらゆる資源を投入'],
  'CK8-004':['伝統的な指導者は、今も地域の意思決定に強い影響力を持っています。','強い影響力を持って'],
  'CK8-005':['中小企業は突然の価格変動に翻弄されることがあります。','翻弄される'],
  'CK8-006':['警告を無視することは、リスクを受け入れるのと同じことです。','同じこと'],
  'CK8-007':['その議論全体は、1つの前提に基づいているようです。','前提に基づいて'],
  'CK8-008':['その提案は、限られた証拠を根拠としているようです。','根拠として'],
  'CK8-009':['補償は危険の程度に見合ったものであるべきです。','見合った'],
  'CK8-010':['その事業は政策全体の大きな変化を象徴しているのかもしれません。','象徴して'],
  'CK8-011':['この傾向は、より根深い社会問題の兆候かもしれません。','兆候'],
  'CK8-012':['対応しないことは、敗北を認めるのと同じことです。','同じこと'],
  'CK8-092':['繰り返し出された警告を無視することは、過失に等しいでしょう。','過失に等しい'],
  'CK8-401':['本研究は、批判的な検討を通じて、手続きの公正さに関する異なる考え方を調整しようとしています。','異なる考え方を調整'],
  'CK8-404':['本研究は、批判的な検討を通じて、認識上の正義に関する異なる考え方を調整しようとしています。','異なる考え方を調整'],
  'CK8-426':['本研究は、批判的な検討を通じて、手続きの公正さが政治にもたらす影響を精査しようとしています。','政治にもたらす影響を精査'],
  'CK8-480':['本研究は、批判的な検討を通じて、政策に関する語りの根底にある競合する利害を探ろうとしています。','競合する利害を探'],
};
for(const [id,[ja,focus]] of Object.entries(edits)){
  assert(ja.includes(focus),id+' focus not in Japanese manual revision');
  assert(byId.has(id),id+' missing from source bank');
}
function getScaffold(q){
  const sentence=String(q.example_en),phrase=String(q.highlight_en);
  const i=sentence.toLowerCase().indexOf(phrase.toLowerCase());
  if(i<0)throw new Error('English chunk absent from sentence: '+q.id);
  return sentence.slice(0,i)+'{CHUNK}'+sentence.slice(i+phrase.length);
}
function deriveFocus(sentence,meaning) {
  const s=String(meaning||'').trim().replace(/[〜～]/g,'');
  if(s.length>=2&&sentence.includes(s))return s;
  for(let n=1;n<Math.min(5,s.length-2);n++)if(sentence.includes(s.slice(0,-n)))return s.slice(0,-n);
  return '';
}
const changeSummary={total:5000,manuallyCorrected:0,structureBasedCorrected:0,preservedEditorial:0,untouchedMachineDraft:0,supportedTemplates:Object.keys(frame).length,sourceExampleNotChanged:true,manualByLevel:{},structuralByLevel:{},remainingByLevel:{}};
let manualExamples=[],templatedExamples=[],remains=[];
for(const q of all){
  const oldEnglish=q.example_en;
  if(edits[q.id]){
    q.example_ja=edits[q.id][0];
    q.focus_ja=edits[q.id][1];
    q.translation_status='assistant_semantically_checked_draft';
    changeSummary.manuallyCorrected++;
    changeSummary.manualByLevel[q.level]=(changeSummary.manualByLevel[q.level]||0)+1;
    if(manualExamples.length<12)manualExamples.push([q.id,q.example_en,q.example_ja]);
  }else if(q.translation_status==='existing_editorial_draft'){
    changeSummary.preservedEditorial++;
  }else{
    const key=getScaffold(q),t=frame[key];
    if(t && /^[^〜～]+(?:する|す|く|ぐ|む|ぶ|つ|ぬ|る|える|ける|できる|である|なる|れる|せる|う|させる|ない)$/.test(q.meaning_ja)){
      const newJa=t.replace('{v}',q.meaning_ja);
      assert(!newJa.includes('{v}'),q.id+' placeholder retained');
      q.example_ja=newJa;
      q.focus_ja=q.meaning_ja;
      q.translation_status='structure_based_draft_needs_review';
      changeSummary.structureBasedCorrected++;
      changeSummary.structuralByLevel[q.level]=(changeSummary.structuralByLevel[q.level]||0)+1;
      if(templatedExamples.length<24 && (q.id.endsWith('199')||q.id.endsWith('351')||q.id.endsWith('601')||templatedExamples.length<12))
        templatedExamples.push([q.id,q.example_en,q.example_ja]);
    }else{
      changeSummary.untouchedMachineDraft++;
      changeSummary.remainingByLevel[q.level]=(changeSummary.remainingByLevel[q.level]||0)+1;
      if(remains.length<10)remains.push([q.id,q.example_en,q.example_ja]);
    }
  }
  assert.equal(oldEnglish,q.example_en,q.id+' English sentence mutated');
  assert(typeof q.example_ja==='string' && /[ぁ-んァ-ヶ一-龠]/.test(q.example_ja),q.id+' Japanese invalid');
  assert(!q.focus_ja||q.example_ja.includes(q.focus_ja),q.id+' focus mismatch');
}
const glossaryById=new Map(glossary.items.map(x=>[x.id,x]));
for(const diagQ of diag.questions){
  const target=glossaryById.get(diagQ.id),study=byId.get(diagQ.id);
  assert(target && study,'Diagnostic Japanese ID not found: '+diagQ.id);
  if(diagQ.example_en===study.example_en){
    target.example_ja=study.example_ja;
    target.translation_status=study.translation_status;
    const o=overrides.get(diagQ.id);
    target.focus_ja=o?deriveFocus(target.example_ja,o.meaning_ja):study.focus_ja;
  }else{
    // CK7-153 has a separate English sentence and correct, pre-existing Japanese gloss.
    assert.equal(diagQ.id,'CK7-153','Unexpected diagnostic-vs-study English change: '+diagQ.id);
    assert.equal(target.source_example_en,diagQ.example_en);
  }
  assert.equal(target.source_example_en,diagQ.example_en,'English-Japanese association changed: '+diagQ.id);
  assert(target.example_ja && /[ぁ-んァ-ヶ一-龠]/.test(target.example_ja));
  assert(!target.focus_ja||target.example_ja.includes(target.focus_ja));
}
assert.equal(changeSummary.manuallyCorrected+changeSummary.structureBasedCorrected+changeSummary.preservedEditorial+changeSummary.untouchedMachineDraft,5000);
for(let i=0;i<8;i++)save(sourcePaths[i],shards[i]);
glossary.bankId='copeak-ja-translation-quality-audit-v1';
glossary.status='MIXED_DRAFT_SEMANTIC_QA_IN_PROGRESS';
glossary.description='800 sentence translations: editorial, assistant-checked, reconstructed using aligned meanings and unreviewed machine drafts. All categories remain draft until full teacher verification.';
save('data/v8-2-example-ja.json',glossary);
const result={
  date:'2026-11-01',...changeSummary,
  diagnosticTranslated:glossary.items.length,
  diagnosticAlignedFocus:glossary.items.filter(x=>x.focus_ja).length,
  diagnosticStatuses:Object.fromEntries([...new Set(glossary.items.map(x=>x.translation_status))].map(k=>[k,glossary.items.filter(x=>x.translation_status===k).length])),
  manualExamples,templatedExamples,remains,
  semanticallyVerifiedByTeacher:0,
  productionReady:false,
  remainingWarning:'Frame and manually repaired drafts still require a teacher to review semantics; other untranslated inaccuracies may remain.'
};
save('data/ja-quality-audit-v1-report.json',result);
console.log('PASS QA DRAFT:',JSON.stringify(result));
