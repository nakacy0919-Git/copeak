import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const root=new URL('../',import.meta.url);
const read=p=>fs.readFileSync(new URL(p,root),'utf8');
const ctx={};vm.runInNewContext(read('vocabulary-quality.js'),ctx);
const audit=ctx.CopeakVocabularyQuality;
const raw=JSON.parse(read('data/v8-diagnostic-800.json')).questions;
const overrides=JSON.parse(read('data/v8-1-focus-overrides.json')).overrides;
const changed=new Map(overrides.map(x=>[x.id,x]));
const bank=raw.map(x=>changed.has(x.id)?{...x,highlight_en:changed.get(x.id).focus_en,meaning_ja:changed.get(x.id).meaning_ja,meaning_en:changed.get(x.id).meaning_en}:x);
const active=bank.filter(x=>x.highlight_en.trim().split(/\s+/).length<=4||changed.has(x.id));
const report=audit.audit(bank,active);
assert.equal(report.pass,true,'real candidate data should pass the structural audit');
assert.equal(report.candidates,800);
assert.equal(report.active,505);
assert.equal(report.calibrated,0,'do not claim external validation');
const broken=structuredClone(bank);
broken[0].example_en='broken fragment';
assert.equal(audit.audit(broken,active).pass,false,'partial sentence is detected');
const duplicate=structuredClone(bank);
duplicate[0].distractor_ids=[duplicate[0].distractor_ids[0],duplicate[0].distractor_ids[0],duplicate[0].distractor_ids[2]];
assert.equal(audit.audit(duplicate,active).pass,false,'duplicated distractor is detected');
const result=audit.evidence({answers:[
{id:'CK1-001',level:1,correct:false,unknown:true},
{id:'CK2-001',level:2,correct:true},
{id:'CK3-001',level:3,correct:false},
{id:'CK4-001',level:4,correct:true}
],range:[2,6]});
assert.equal(result.provisional,true);assert.equal(result.calibrated,false);
assert.equal(result.uniqueFamilies,4);
assert.equal(result.coveredLevels,4);
assert(result.cautions.includes('WIDE_ESTIMATE'));
console.log('PASS vocabulary QA: 800 candidates/505 active, structural errors flagged, model limitations disclosed.');
