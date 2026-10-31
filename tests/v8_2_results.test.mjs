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
for(const name of ['Summary','Review','Details']){
 assert(html.includes('id="vcTab'+name+'"'));
 assert(html.includes('id="vcPanel'+name+'"'));
}
for(const name of ['vcReviewChunk','vcReviewSentence','vcReviewMeaning','vcReviewSentenceJa','vcReviewPrev','vcReviewNext','vcReviewListen','vcReviewRecord','vcReviewPlayback']){
 assert(html.includes('id="'+name+'"'),name);
}
assert(html.includes('vocabulary-check.js?v=8.2.0'));
assert(css.includes('body.vc-is-result #vcResult')&&css.includes('overflow:hidden'),'result shell should not scroll');
assert(css.includes('.vc-result-tabs')&&css.includes('.vc-review-card'));
assert(js.includes("root.speechSynthesis.speak(u)"),'TTS');
assert(js.includes("navigator.mediaDevices.getUserMedia({audio:true,video:false})"),'mic');
assert(js.includes("new root.MediaRecorder(stream)"),'record');
assert(js.includes("new root.Audio(reviewAudioUrl)"),'recording replay');
assert(js.includes("getTracks().forEach(t=>t.stop())"),'mic cleanup');
assert(js.includes("URL.revokeObjectURL(reviewAudioUrl)"),'recording cleanup');
assert(js.includes("nextTarget(session.answers,session.estimate)"),'adaptive engine preserved');
const translation=JSON.parse(read('data/v8-2-example-ja.json'));
const questions=JSON.parse(read('data/v8-diagnostic-800.json')).questions;
const questionMap=new Map(questions.map(q=>[q.id,q]));
assert.equal(translation.items.length,40);
for(const item of translation.items){
  assert.equal(questionMap.get(item.id)?.example_en,item.source_example_en,'English sentence changed');
  assert(item.example_ja.trim().length>=8);
}
for(const level of [2,4,6,8]){
 assert(core.nextTarget([{level,correct:false}],{theta:7.9})<level);
}
console.log('PASS v8.2: tabbed one-screen results, TTS, private microphone replay, 40 Japanese sentence drafts, unchanged adaptive diagnostic.');
