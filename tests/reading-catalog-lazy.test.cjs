'use strict';
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const read=f=>JSON.parse(fs.readFileSync(path.join(root,f),'utf8'));
const m=read('data/reading/entrance/manifest.json');
const index=read('data/reading/entrance/catalog-index.json');
const corpus=read('data/reading/entrance/practice-corpus.json');
const src=JSON.stringify([m.sets.map(s=>[s.id,s.file]),m.release?.published||null]);
let hash=2166136261;
for(let i=0;i<src.length;i++)hash=Math.imul(hash^src.charCodeAt(i),16777619);

test('the catalog is current and never includes draft lessons',()=>{
 assert.equal(index.manifest_signature,src.length+'-'+(hash>>>0));
 const approved=m.sets.map(item=>({item,lesson:read(item.file)}))
  .filter(x=>x.lesson.status==='published'||x.lesson.status==='reviewed');
 assert.deepEqual(index.sets.map(x=>x.id),approved.map(x=>x.item.id));
 assert.equal(corpus.lessons.length,approved.length);
 for(let i=0;i<approved.length;i++){
  const {item,lesson}=approved[i],summary=index.sets[i],mini=corpus.lessons[i];
  assert.equal(summary.id,item.id);
  assert.equal(summary.file,item.file);
  assert.equal(summary.title,lesson.title);
  assert.equal(summary.title_ja,lesson.title_ja);
  assert.equal(summary.question_count,lesson.questions.length);
  assert.equal(summary.word_count,lesson.word_count);
  assert.deepEqual(summary.level_ids,lesson.level_ids||[lesson.level_id]);
  assert.equal(mini.id,item.id);
 }
});

test('compact corpus preserves quiz options, order and correct answer indices',()=>{
 const sandbox={window:{}};
 vm.runInNewContext(fs.readFileSync(path.join(root,'reading-practice-engine.js'),'utf8'),sandbox);
 const engine=sandbox.window.CopeakReadingPractice;
 const full=index.sets.map(item=>read(item.file));
 // Compare against the actual old full-corpus sequence for several lessons.
 for(const lesson of [full[0],full[Math.floor(full.length/2)],full.at(-1)]){
  for(const mode of ['vocab','grammar','paraphrase']){
   for(const direction of mode==='vocab'?['en-ja','ja-en','definition']:['en-ja']){
    const before=engine.build(lesson,mode,full,direction);
    const after=engine.build(lesson,mode,corpus.lessons,direction);
    assert.deepEqual(JSON.parse(JSON.stringify(after)),JSON.parse(JSON.stringify(before)),
     lesson.id+' '+mode+' '+direction);
   }
  }
 }
});

test('catalog opening does not download all 455 lesson files',()=>{
 const ui=fs.readFileSync(path.join(root,'reading-entrance.js'),'utf8');
 const beginning=ui.slice(ui.indexOf('async function init(){'),ui.indexOf("$('categoryFilter').addEventListener"));
 assert.match(beginning,/catalog-index\.json/);
 assert.doesNotMatch(beginning,/for\s*\(\s*let offset|Promise\.allSettled|fetch\(item\.file/);
 const access=fs.readFileSync(path.join(root,'reading-access.js'),'utf8');
 const entry=access.slice(access.indexOf('async function revealStudio'),access.indexOf("form.addEventListener"));
 assert.equal((entry.match(/await loadScript\(/g)||[]).length,2);
});
