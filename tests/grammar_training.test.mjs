import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=(name)=>fs.readFileSync(path.join(root,name),'utf8');
const json=(name)=>JSON.parse(read(name));

test('combined menu preserves vocabulary diagnosis while exposing four courses',()=>{
 const home=read('copeak-home.js'),html=read('vocabulary-grammar.html'),script=read('vocabulary-grammar.js');
 assert.match(home,/vocabulary-grammar\.html\?ui=/);
 assert.match(script,/vocabulary-check\.html\?ui=ja/);
 assert.match(script,/grammar-middle\.json/);
 assert.match(script,/grammar-highschool-index\.json/);
 assert.match(script,/grammar-university-manifest\.json/);
 assert.match(html,/vocabulary-reading\.js/);
 assert.match(html,/vocabulary-grammar\.js/);
 assert.doesNotThrow(()=>new Function(script));
});

test('entrance-exam grammar bank contains 1840 unique complete questions in 115 topic groups',()=>{
 const manifest=json('data/grammar-university-manifest.json');
 assert.equal(manifest.total_questions,1840);
 assert.equal(manifest.point_count,115);
 assert.equal(manifest.categories.length,10);
 const all=[],points=new Set();
 for(const area of manifest.categories){
   const questions=json(area.file).questions;
   assert.equal(questions.length,area.count,area.id);
   for(const p of area.points){points.add(p.id);assert.equal(questions.filter(q=>q.point_id===p.id).length,p.count,p.id);}
   for(const q of questions){
     assert.equal(q.category_id,area.id,q.id);
     assert(Object.hasOwn(q.options,q.answer),q.id);
     assert.equal(new Set(Object.values(q.options)).size,4,q.id);
     assert.equal(Object.keys(q.wrong_choice_explanations_jp).length,3,q.id);
     for(const key of ['id','stem_en','answer_sentence_jp','explanation_jp','extra_example_en','extra_example_jp'])
       assert(String(q[key]||'').trim(),q.id+' '+key);
   }
   all.push(...questions);
 }
 assert.equal(all.length,1840);
 assert.equal(points.size,115);
 assert.equal(new Set(all.map(q=>q.id)).size,1840);
});

test('all 18 high-school chapters load; 366 grammar points and 1830 bilingual examples',()=>{
 const manifest=json('data/grammar-highschool-index.json');
 assert.equal(manifest.sections.length,18);
 const sources=new Map();
 let points=0,examples=0;const ids=new Set();
 for(const meta of manifest.sections){
   if(!sources.has(meta.file))sources.set(meta.file,json(meta.file));
   const section=sources.get(meta.file).sections.find(x=>x.id===meta.id);
   assert(section,meta.id);
   points+=section.points.length;
   for(const p of section.points)for(const e of p.examples){
     assert(e.id&&e.en&&e.ja,e.id);
     assert(!ids.has(e.id),'duplicate '+e.id);
     ids.add(e.id);examples++;
   }
 }
 assert.equal(points,366);
 assert.equal(examples,1830);
 assert.equal(examples,manifest.total_examples);
});

test('junior-high grammar covers three school years and 57 bilingual model sentences',()=>{
 const data=json('data/grammar-middle.json');
 assert.deepEqual(data.sections.map(s=>s.id),['JH1','JH2','JH3']);
 const units=data.sections.flatMap(s=>s.points);
 assert.equal(units.length,19);
 const examples=units.flatMap(p=>p.examples);
 assert.equal(examples.length,57);
 assert(examples.every(e=>e.id&&e.en&&e.ja));
 assert.equal(new Set(examples.map(e=>e.id)).size,57);
});

test('reading stages match established thresholds and local scores',()=>{
 const script=read('vocabulary-grammar.js');
 assert.match(script,/stageThresholds=\[80,90,90,95,100\]/);
 assert.match(script,/CopeakVocabularyReading\?\.score/);
 assert.match(script,/localStorage\.setItem/);
 assert.match(script,/record\.stage=/);
 const vercel=json('vercel.json');
 assert.equal(vercel.git.deploymentEnabled,false);
});