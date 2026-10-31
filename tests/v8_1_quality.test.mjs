import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
vm.runInThisContext(fs.readFileSync(path.join(root,'vocabulary-check.js'),'utf8'));
const core=globalThis.CopeakChunkCore;
const json=(name)=>JSON.parse(fs.readFileSync(path.join(root,'data',name),'utf8'));
const manifest=json('chunks-v7-manifest.json');
assert.equal(manifest.totalQuestions,5000);
const all5000=manifest.shards.flatMap((name,i)=>{
  const shard=json(name);
  assert.equal(shard.level,i+1);
  assert.equal(shard.questions.length,625);
  return shard.questions;
});
const byId=new Map(all5000.map(q=>[q.id,q]));
assert.equal(byId.size,5000);
const source=core.validateBank({schemaVersion:3,calibration:'teacher-review-required',
  questions:manifest.originalIdOrder.map(id=>byId.get(id))});
const initial=core.validateV8(json('v8-diagnostic-800.json'),source);
const p=json('v8-1-focus-overrides.json');
const result=core.prepareFocusedBank(initial,p);
assert.equal(result.all.length,800);
assert.equal(result.active.length,505);
assert.equal(result.stats.revised,80);
assert.equal(result.stats.held,295);
assert.deepEqual(result.stats.levelCounts,[85,70,61,60,63,58,55,53]);
assert.equal(new Set(result.active.map(q=>q.family_id)).size,505);
for(const q of result.active){
  assert(q.highlight_en.split(/\s+/).length<=5);
  assert(q.example_en.toLowerCase().includes(q.highlight_en.toLowerCase()));
  for(const lang of ['ja','en']){
    const options=core.makeOptions(q,result.all,lang,()=>0.4);
    assert.equal(options.length,4);
    assert.equal(options.filter(x=>x.correct).length,1);
    assert.equal(new Set(options.map(x=>x.text)).size,4);
  }
}
assert.equal(core.nextTarget([],core.posterior([])),4);
for(let level=2;level<=8;level++){
  assert(core.nextTarget([{level,correct:false}],{theta:7.9})<level);
}
for(let level=1;level<8;level++){
  assert(core.nextTarget([{level,correct:true}],{theta:1.1})>level);
}
let completed=0;
for(const total of [25,70])for(const scenario of ['correct','wrong','alternating','hard']){
  const answers=[],used=new Set(),families=new Set();
  for(let i=0;i<total;i++){
    const target=core.nextTarget(answers,core.posterior(answers,4.4));
    const item=core.pickQuestion(result.active,used,target,[],()=>0.37,families);
    assert(item);assert(!used.has(item.id));assert(!families.has(item.family_id));
    used.add(item.id);families.add(item.family_id);
    answers.push({id:item.id,level:item.level,family_id:item.family_id,
      correct:scenario==='correct'||(scenario==='alternating'&&i%2===0)||(scenario==='hard'&&item.level>=7),
      unknown:false,ms:1000});
  }
  assert.equal(families.size,total);
  assert.equal(core.evidenceFor({answers}).uniqueFamilies,total);
  const csv=core.makePilotCSV({answers,mode:total===25?'quick':'deep'});
  assert(csv.includes('v8.1'));assert.equal(csv.split('\r\n').length,total+1);
  completed++;
}
const invalid=structuredClone(p);
invalid.overrides[0].focus_en='this text is not in the original sentence';
assert.throws(()=>core.prepareFocusedBank(initial,invalid));
assert.equal(core.KEY,'copeak_chunk_diagnosis_v1');
assert(fs.readFileSync(path.join(root,'vocabulary-check.html'),'utf8').includes('vocabulary-check.js?v=8.1'));
console.log('PASS v8.1:',result.active.length,'focused items;',completed,'full diagnosis scenarios; adaptive from question 2; history preserved.');
