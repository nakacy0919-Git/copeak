import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const dir=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
vm.runInThisContext(fs.readFileSync(path.join(dir,'vocabulary-check.js'),'utf8'));
const core=globalThis.CopeakChunkCore;
assert.equal(core.KEY,'copeak_chunk_diagnosis_v1');
const manifest=JSON.parse(fs.readFileSync(path.join(dir,'data/chunks-v7-manifest.json'),'utf8'));
assert.equal(manifest.totalQuestions,5000);
assert.equal(manifest.shards.length,8);
const pieces=manifest.shards.flatMap((n,i)=>{
  assert.equal(n,`chunks-v7-level-${i+1}.json`);
  const shard=JSON.parse(fs.readFileSync(path.join(dir,'data',n),'utf8'));
  assert.equal(shard.level,i+1);assert.equal(shard.questions.length,625);
  return shard.questions;
});
const map=new Map(pieces.map(q=>[q.id,q]));
assert.equal(map.size,5000);
assert.equal(manifest.originalIdOrder.length,5000);
const original={schemaVersion:3,calibration:'teacher-review-required',questions:manifest.originalIdOrder.map(id=>map.get(id))};
assert(original.questions.every(Boolean));
const v8=JSON.parse(fs.readFileSync(path.join(dir,'data/v8-diagnostic-800.json'),'utf8'));
const source=core.validateBank(original);
assert.equal(source.length,5000);
const qs=core.validateV8(v8,source);
assert.equal(qs.length,800);
const fam=new Set(qs.map(q=>q.family_id));assert.equal(fam.size,800);
const lookup=new Map(qs.map(q=>[q.id,q]));
for(const q of qs){
  assert.equal(q.v8_status,'CANDIDATE_NOT_REVIEWED');
  for(const locale of ['ja','en']){
    const options=core.makeOptions(q,qs,locale,()=>0.42);
    assert.equal(options.length,4);assert.equal(options.filter(c=>c.correct).length,1);
    assert.equal(new Set(options.map(c=>c.text)).size,4);
    for(const fid of q.distractor_ids)assert(lookup.has(fid));
  }
}
const targets=[4,2,6,1,8,3,7,5];
for(const total of [25,70]){
  const used=new Set(),families=new Set(),answers=[];
  for(let i=0;i<total;i++){
    const estimate=core.posterior(answers);
    const target=i<8?targets[i]:Math.max(1,Math.min(8,Math.round(estimate.theta)));
    const q=core.pickQuestion(qs,used,target,[],Math.random,families);
    assert(q);assert(!used.has(q.id));assert(!families.has(q.family_id));
    used.add(q.id);families.add(q.family_id);
    answers.push({id:q.id,level:q.level,family_id:q.family_id,correct:i%3!==0,unknown:i%9===0,ms:1300});
  }
  assert.equal(used.size,total);assert.equal(families.size,total);
  assert.equal(new Set(answers.slice(0,8).map(a=>a.level)).size,8);
  const e=core.evidenceFor({answers});assert.equal(e.uniqueFamilies,total);
  const csv=core.makePilotCSV({mode:total===25?'quick':'deep',answers});
  assert.equal(csv.split('\r\n').length,total+1);assert(!/2026|email|student|timestamp/i.test(csv));
  const post=core.posterior(answers);assert(post.level>=1&&post.level<=8);
}
assert.throws(()=>core.validateV8({...v8,questions:v8.questions.slice(1)},source));
assert.throws(()=>core.validateV8({...v8,questions:[...v8.questions.slice(0,799),v8.questions[0]]},source));
console.log('PASS v8: 5,000 unchanged source; 800 candidate validation; 1,600 bilingual question-choice test sets; broad probes; Quick 25 / Deep 70; independent families; privacy export; history key preserved.');
