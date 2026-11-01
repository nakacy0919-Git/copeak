import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=name=>fs.readFileSync(path.join(root,name),'utf8');
const html=read('vocabulary-check.html'),css=read('vocabulary-check.css'),js=read('vocabulary-check.js');
new vm.Script(js);
vm.runInThisContext(js);
const core=globalThis.CopeakChunkCore;
assert.equal(core.KEY,'copeak_chunk_diagnosis_v1');
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(a=>a[1]);
assert.equal(ids.length,new Set(ids).size,'duplicate IDs');
const refs=[...js.matchAll(/\$\('([^']+)'\)/g)].map(a=>a[1]);
assert(refs.filter(id=>!ids.includes(id)).every(id=>id==='vcLast'),'missing required DOM IDs');
for(const name of ['Summary','Review']){
 assert(html.includes('id="vcTab'+name+'"'));
 assert(html.includes('id="vcPanel'+name+'"'));
}
for(const name of ['vcReviewChunk','vcReviewSentence','vcReviewMeaning','vcReviewSentenceJa','vcReviewPrev','vcReviewNext','vcReviewSentenceButton','vcReviewRecord','vcReadTranscript','vcReadPercent','vcGaugeProgress']){
 assert(html.includes('id="'+name+'"'),name);
}
assert(html.includes('vocabulary-check.js?v=8.4.0'));
assert(css.includes('body.vc-is-result #vcResult')&&css.includes('overflow:hidden'),'result shell should not scroll');
assert(css.includes('.vc-result-tabs')&&css.includes('.vc-review-card'));






assert(js.includes("nextTarget(session.answers,session.estimate)"),'adaptive engine preserved');
assert(js.includes('new Constructor()') && js.includes('rec.onresult=event=>'),'SpeechRecognition');
assert(js.includes('vcSchoolLevel'),'visible school/Eiken level');
assert(!html.includes('vcPilotExport')&&!html.includes('vcTabDetails'),'dev UI removed');
assert(html.includes('vocabulary-reading.js?v=8.4.0'),'matching module');
const translation=JSON.parse(read('data/v8-2-example-ja.json'));
const questions=JSON.parse(read('data/v8-diagnostic-800.json')).questions;
const questionMap=new Map(questions.map(q=>[q.id,q]));
assert.equal(translation.items.length,800);
assert.equal(new Set(translation.items.map(item=>item.id)).size,800);
for(const item of translation.items){
  assert.equal(questionMap.get(item.id)?.example_en,item.source_example_en,'English sentence changed');
  assert(item.example_ja.trim().length>=8);
}
for(const level of [2,4,6,8]){
 assert(core.nextTarget([{level,correct:false}],{theta:7.9})<level);
}
console.log('PASS v8.3: two-tab results, read-aloud scoring, 800 Japanese sentence drafts, unchanged adaptive diagnostic.');
