import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const base=new URL('../',import.meta.url);
const html=readFileSync(new URL('new-horizon-1.html',base),'utf8');
const auditSource=readFileSync(new URL('new-horizon-audit.js',base),'utf8');
const expansion=readFileSync(new URL('study-grade1-expansion.js',base),'utf8');
const sourceMatch=html.match(/^const DATASETS = (.+);$/m);
assert.ok(sourceMatch,'Grade 1 source data must exist');
const DATASETS=JSON.parse(sourceMatch[1]);
const warnings=[];
const ctx=vm.createContext({window:{},console:{warn:(...a)=>warnings.push(a.join(' '))}});
vm.runInContext(auditSource,ctx,{timeout:5000});
vm.runInContext(expansion,ctx,{timeout:10000});
const SECTION_CATALOG=vm.runInContext('SECTION_CATALOG',ctx);
const SECTION_PRACTICE=vm.runInContext('SECTION_PRACTICE',ctx);
const cats=['vocab','listening','meaning','grammar','speaking','spelling','ordering','reading'];
const stats={sections:0,questions:0,categories:Object.fromEntries(cats.map(c=>[c,0]))};
const issues=[];

for(const [unit,sections] of Object.entries(SECTION_CATALOG)){
  const expected=unit==='0'?1:3;
  if(sections.length!==expected)issues.push('Unit '+unit+': wrong Part count '+sections.length);
  for(const sec of sections){
    stats.sections++;
    const pool=SECTION_PRACTICE[unit]?.[sec.id];
    if(!pool){issues.push(sec.id+': missing pool');continue}
    for(const cat of cats){
      const arr=pool[cat]||[];
      stats.questions+=arr.length;
      stats.categories[cat]+=arr.length;
      if(arr.length<10)issues.push(sec.id+' '+cat+' only '+arr.length);
      const ids=arr.map(x=>x.id);
      if(new Set(ids).size!==ids.length)issues.push(sec.id+' '+cat+' duplicate IDs');
      if(cat==='speaking'&&arr.some(x=>!x.en||!x.jp))issues.push(sec.id+': incomplete speaking items');
      if(cat==='spelling'&&arr.some(x=>!x.word||!x.jp||!/^[a-z]{3,}$/.test(x.word)))issues.push(sec.id+': bad spelling items');
      if(cat==='ordering'&&arr.some(x=>!Array.isArray(x.answer)||x.answer.length<3))issues.push(sec.id+': bad ordering');
      if(['listening','meaning','grammar','reading'].includes(cat)){
        for(const x of arr){
          if(!Array.isArray(x.choices)||x.choices.length<3||x.choices.length>4)issues.push(x.id+': bad answer count');
          else if(new Set(x.choices).size!==x.choices.length)issues.push(x.id+': repeated answer');
          if(x.correct!==0)issues.push(x.id+': incorrect answer key');
        }
      }
      if(cat==='grammar'&&arr.some(x=>!x.sentence.includes('___')))issues.push(sec.id+': broken grammar cloze');
      if(cat==='reading'&&arr.some(x=>(x.en.match(/[.!?](?:\s|$)/g)||[]).length<2))issues.push(sec.id+': insufficient reading passage');
    }
  }
}
if(warnings.length)issues.push(...warnings);
assert.equal(stats.sections,31,'Unit 0 and all Parts 1–3 of Units 1–10 required');
assert.match(html,/study-grade1-expansion\.js/,'expanded bank must load before grade1 app');
assert.match(html,/function sectionTabs\(\)/,'Part selection must be functional');
assert.doesNotMatch(html,/function recognizeHandwriting\(/,'spelling must not require OCR');
assert.match(html,/function spellingChoices\(it\)/,'spelling choices must be implemented');
assert.deepEqual(issues,[],'QA issues:\n'+issues.join('\n'));

const spellingSource=html.slice(html.indexOf('function spellingChoices(it)'),html.indexOf('function spellView(it)'));
const randomSource=html.slice(html.indexOf('function randomOrder(arr)'),html.indexOf('function baseHead()'));
const mock={state:{unit:1,section:'u1-part1',category:'spelling',index:0,optionKey:null,optionOrder:null,slotBags:{},done:false,choice:-1},esc:x=>x,allItems:()=>[],Math};
const qctx=vm.createContext(mock);
vm.runInContext(spellingSource+'\n'+randomSource,qctx,{timeout:1000});
for(const [unit,sections] of Object.entries(SECTION_CATALOG))for(const sec of sections)for(const w of SECTION_PRACTICE[unit][sec.id].spelling){
  qctx.allItems=()=>SECTION_PRACTICE[unit][sec.id].vocab;
  const result=vm.runInContext('spellingChoices('+JSON.stringify(w)+')',qctx);
  assert.equal(result.length,4,'four spelling choices needed: '+w.word);
  assert.equal(new Set(result).size,4,'spelling choices must differ: '+w.word);
  assert.equal(result[0],w.word);
}
qctx.state.category='grammar';qctx.state.slotBags={};
const counts=[0,0,0,0];
for(let i=0;i<16;i++){
  qctx.state.index=i;qctx.state.optionKey=null;
  const markup=vm.runInContext("mcChoices({id:'balance-'+state.index},['yes','no1','no2','no3'],0,'')",qctx);
  const match=[...markup.matchAll(/<button class="choice"[^>]*data-is="(yes|no)"/g)].map(m=>m[1]);
  assert.equal(match.length,4);
  counts[match.indexOf('yes')]++;
}
assert.deepEqual(counts,[4,4,4,4],'correct-answer positions must be balanced');
console.log(JSON.stringify({...stats,choicePositionSample:counts},null,2));
