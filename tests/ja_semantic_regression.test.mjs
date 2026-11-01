import fs from 'node:fs';
import assert from 'node:assert/strict';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const all=Array.from({length:8},(_,i)=>read('data/chunks-v7-level-'+(i+1)+'.json').questions).flat();
const diagnostic=read('data/v8-diagnostic-800.json').questions;
const gloss=read('data/v8-2-example-ja.json').items;
const report=read('data/ja-quality-audit-v1-report.json');
const queue=read('data/ja-quality-review-queue.json');
const byId=new Map(all.map(q=>[q.id,q]));
const byGloss=new Map(gloss.map(q=>[q.id,q]));
assert.equal(all.length,5000);
assert.equal(diagnostic.length,800);
assert.equal(gloss.length,800);
assert.equal(queue.items.length,report.untouchedMachineDraft);
assert.equal(queue.diagnosticItems,gloss.filter(q=>q.translation_status==='machine_draft_needs_review').length);
assert(queue.items.every(x=>byId.get(x.id)?.translation_status==='machine_draft_needs_review'));
assert.equal(report.manuallyCorrected+report.structureBasedCorrected+report.preservedEditorial+report.untouchedMachineDraft,5000);
for(const q of diagnostic)assert.equal(byGloss.get(q.id)?.source_example_en,q.example_en);
const cases={
 'CK1-005':['はじめまして','ハナ'],
 'CK1-014':['6時前'],
 'CK1-017':['正午'],
 'CK1-018':['10時'],
 'CK2-008':['英語を話すのが得意'],
 'CK4-066':['の代わりに','タブレット'],
 'CK7-003':['前提に疑問'],
 'CK7-078':['改革を求める議論'],
 'CK8-006':['同じこと'],
 'CK8-156':['無効']
};
for(const [id,fragments] of Object.entries(cases)){
 const q=byId.get(id);
 assert(q,id+' missing');
 for(const part of fragments)assert(q.example_ja.includes(part),id+' regression: '+part);
 const d=byGloss.get(id);
 if(d)assert.equal(d.example_ja,q.example_ja);
}
const suspicious=all.filter(q=>q.translation_status==='machine_draft_needs_review'&&
 (/お問い合わせ|ご宿泊者|サイトマップ|タンタル|引数|ニース|セーフガードをリラックス|[a-zA-Z]{3,}/.test(q.example_ja)
 ||q.example_ja.length>q.example_en.length*2.5));
assert.deepEqual(suspicious.map(x=>x.id),[]);
console.log('PASS Japanese bilingual QA regression and review queue.');
