/* Standalone regression: node tests/reading-selection-freeze.test.cjs
   No third-party packages and no deployment are needed. */
'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const {performance}=require('node:perf_hooks');
const sandbox={window:{}};
vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../reading-practice-engine.js'),'utf8'),sandbox,{filename:'reading-practice-engine.js',timeout:5000});
const engine=sandbox.window.CopeakReadingPractice;
assert.ok(engine?.build,'Practice engine should expose build()');

const makeLesson=i=>({
 id:'L'+i,
 paragraphs:[{id:'p'+i,sentences:[{en:'The students share ideas and learn from reading together.'}]}],
 vocabulary:Array.from({length:50},(_,j)=>({
  term:j===0?'students':'word'+i+'_'+j,
  ja:j===0?'生徒たち':'意味'+i+'_'+j,
  definition:'definition '+i+' '+j,synonym:''
 })),
 grammar:Array.from({length:4},(_,j)=>({
  focus:'students',explanation_ja:'説明'+i+' '+j,paragraph_id:'p'+i,sentence_index:0
 })),
 paraphrases:Array.from({length:4},(_,j)=>({
  source:'reading',rewrite:'rewrite '+i+' '+j,explanation_ja:'言い換えの説明'
 })),
 discourse:[],cloze:[]
});
// A small legacy reference proves saved answer indices retain their meaning.
const uniq=items=>[...new Set(items.map(x=>String(x||'').trim()).filter(Boolean))];
const seedOf=str=>{
 let h=2166136261;
 for(const c of String(str))h=Math.imul(h^c.charCodeAt(0),16777619);
 return h>>>0;
};
const mix=(list,key)=>{
 const a=[...list];let s=seedOf(key)||1;
 for(let i=a.length-1;i>0;i--){
  s=(Math.imul(1664525,s)+1013904223)>>>0;
  const j=s%(i+1);[a[i],a[j]]=[a[j],a[i]];
 }
 return a;
};
function legacyOptions(correct,pool,key){
 let distract=mix(uniq(pool).filter(x=>x.toLowerCase()!==correct.toLowerCase()),key+':pool')
  .filter((x,i,a)=>a.findIndex(y=>y.toLowerCase()===x.toLowerCase())===i).slice(0,3);
 for(const v of ['本文の主張と反対のことを述べている','別の話題についての説明である','ここでは原因を示さず結論だけを述べる'])
  if(distract.length<3&&v!==correct&&!distract.includes(v))distract.push(v);
 const options=mix([correct,...distract.slice(0,3)],key+':order');
 return {options,answer:options.indexOf(correct)};
}
const tiny=Array.from({length:4},(_,i)=>makeLesson(i));
const choices=engine.build(tiny[0],'vocab',tiny,'en-ja');
const pool=tiny.flatMap(x=>x.vocabulary).map(v=>v.ja);
choices.forEach((q,i)=>{
 const expected=legacyOptions(tiny[0].vocabulary[i].ja,pool,tiny[0].id+':vocab:en-ja:'+i);
 assert.deepEqual(Array.from(q.options),Array.from(expected.options),'Choice order changed for question '+i);
 assert.equal(q.answer,expected.answer,'Correct index changed for question '+i);
});
// Opening a passage must not perform a quadratic scan over a 455-lesson corpus.
const full=Array.from({length:455},(_,i)=>makeLesson(i));
const start=performance.now();
const bank=engine.build(full[0],'vocab',full,'en-ja');
const elapsed=Math.round(performance.now()-start);
assert.equal(bank.length,50);
assert.ok(bank.every(q=>q.options.length===4&&Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4));
assert.ok(elapsed<10000,'455-lesson vocabulary build too slow: '+elapsed+'ms');
console.log('Reading regression OK: saved option order preserved; 455-lesson quiz generated in '+elapsed+'ms');
