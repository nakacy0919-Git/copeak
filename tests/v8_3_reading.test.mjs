import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const dir=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=name=>fs.readFileSync(path.join(dir,name),'utf8');
const html=read('vocabulary-check.html'),css=read('vocabulary-check.css'),
  page=read('vocabulary-check.js'),module=read('vocabulary-reading.js');
new vm.Script(page);new vm.Script(module);
vm.runInThisContext(module);
const s=globalThis.CopeakVocabularyReading;
const cases=[
  ["We ride the subway","We ride the subway",100],
  ["We ride the subway","We ride school",50],
  ["Teachers can play a role","Teachers can play",60],
  ["I can't go to school","I can not go to school",100],
  ["He'll go there","he will go there",100],
  ["We are ready","",0]
];
for(const [sentence,recognized,expected] of cases){
  const result=s.score(sentence,recognized);
  assert.equal(result.percent,expected,sentence);
  assert(result.percent>=0&&result.percent<=100);
}
assert.equal(s.score('We ride the subway','We ride school').wordMatches.filter(x=>!x.matched).length,1);
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
assert.equal(ids.length,new Set(ids).size);
const requested=[...page.matchAll(/\$\('([^']+)'\)/g)].map(m=>m[1]);
assert(requested.filter(id=>!ids.includes(id)).every(id=>id==='vcLast'),'missing DOM element');
assert(html.includes('vocabulary-reading.js?v=8.4.0'));
assert(html.includes('vocabulary-check.js?v=8.4.0'));
assert(html.includes('vocabulary-check.css?v=8.4.0'));
for(const id of ['vcSchoolLevel','vcReviewSentenceButton','vcReviewSentence',
  'vcReviewRecord','vcReadingFeedback','vcReadPercent','vcGaugeProgress','vcReadTranscript']){
  assert(html.includes('id="'+id+'"'),id);
}
for(const id of ['vcTabSummary','vcTabReview'])assert(html.includes('id="'+id+'"'));
for(const id of ['vcTabDetails','vcPanelDetails','vcPilotExport','vcReviewPlayback','vcReviewListen']){
  assert(!html.includes('id="'+id+'"'),id+' should be absent');
}
assert(css.includes('vc-word-match')&&css.includes('vc-word-miss'));
assert(page.includes('SpeechRecognition||root.webkitSpeechRecognition'));
assert(page.includes("rec.onresult=event=>"));
assert(page.includes("text('readingAccuracy')")||html.includes('data-t="readingAccuracy"'));
assert(page.includes("nextTarget(session.answers,session.estimate)"));
assert(page.includes("const KEY = 'copeak_chunk_diagnosis_v1'"));
assert(!page.includes('new root.MediaRecorder('));
console.log('PASS Copeak v8.3: Copeak-style LCS recognition, word colors, semicircle gauge, 2 tabs, Eiken-equivalent labels, history/adaptive preserved.');
