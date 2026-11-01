import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const load=(p)=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const all=Array.from({length:8},(_,i)=>load('data/chunks-v7-level-'+(i+1)+'.json'));
const bank=all.flatMap(shard=>shard.questions);
const diagnostic=load('data/v8-diagnostic-800.json').questions;
const translations=load('data/v8-2-example-ja.json').items;
const report=load('data/ja-backfill-v8-4-report.json');
const hasJapanese=s=>/[\u3040-\u30ff\u3400-\u9fff]/.test(String(s||''));

assert.equal(bank.length,5000);
assert.equal(new Set(bank.map(x=>x.id)).size,5000);
assert.equal(diagnostic.length,800);
assert.equal(translations.length,800);
assert.equal(new Set(translations.map(x=>x.id)).size,800);
assert.equal(report.study_with_ja,5000);
assert.equal(report.diagnostic_with_ja,800);
for(const shard of all){
  assert.equal(shard.questions.length,625);
  assert(shard.questions.every(x=>hasJapanese(x.example_ja)));
  assert(shard.questions.every(x=>x.translation_status));
}
const glossary=new Map(translations.map(x=>[x.id,x]));
for(const q of diagnostic){
  const gloss=glossary.get(q.id);
  assert(gloss,q.id+' translation missing');
  assert.equal(gloss.source_example_en,q.example_en,q.id+' mismatch');
  assert(hasJapanese(gloss.example_ja),q.id+' untranslated');
  assert(!gloss.focus_ja||gloss.example_ja.includes(gloss.focus_ja));
}
const machine=translations.filter(x=>x.translation_status==='machine_draft_needs_review');
assert.equal(machine.length,759);
console.log('PASS: 5000/5000 study translations and 800/800 diagnostic translations exist, machine drafts require teacher review.');
