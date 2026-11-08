import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';

const base=new URL('../',import.meta.url);
const html=readFileSync(new URL('new-horizon-3.html',base),'utf8');
const audit=readFileSync(new URL('new-horizon-audit.js',base),'utf8');
const sentences=readFileSync(new URL('study-grade3-sentences.js',base),'utf8');
const expansion=readFileSync(new URL('study-grade3-expansion.js',base),'utf8');
const source=html.match(/^const DATASETS = (.+);$/m);
assert.ok(source,'Grade 3 source data missing');
const DATASETS=JSON.parse(source[1]);
const warnings=[];
const ctx=vm.createContext({window:{},DATASETS,console:{warn:(...args)=>warnings.push(args.join(' '))}});
vm.runInContext(audit,ctx,{filename:'new-horizon-audit.js',timeout:5000});
vm.runInContext(sentences,ctx,{filename:'study-grade3-sentences.js',timeout:5000});
vm.runInContext(expansion,ctx,{filename:'study-grade3-expansion.js',timeout:10000});
const CATALOG=vm.runInContext('SECTION_CATALOG',ctx);
const PRACTICE=vm.runInContext('SECTION_PRACTICE',ctx);
const categories=['vocab','listening','meaning','grammar','speaking','spelling','ordering','reading'];
const report={sections:0,questions:0,perMode:Object.fromEntries(categories.map(x=>[x,0]))},issues=[];

for(const [unit,parts] of Object.entries(CATALOG)){
 const expected=unit==='0'?1:4;
 if(parts.length!==expected)issues.push('Unit '+unit+' has '+parts.length+' parts, not '+expected);
 for(const sec of parts){
  report.sections++;
  const pool=PRACTICE[unit]?.[sec.id];
  if(!pool){issues.push(sec.id+' missing practice');continue}
  for(const mode of categories){
   const arr=pool[mode]||[];
   report.perMode[mode]+=arr.length;report.questions+=arr.length;
   if(arr.length<10)issues.push(sec.id+' '+mode+' has only '+arr.length);
   if(new Set(arr.map(x=>x.id)).size!==arr.length)issues.push(sec.id+' '+mode+' duplicates IDs');
   if(mode==='spelling'&&arr.some(x=>!x.word||!x.jp||!/^[a-z]{3,}$/.test(x.word)))issues.push(sec.id+' bad spelling target');
   if(mode==='vocab'&&arr.some(x=>!x.word||!x.jp||!x.source))issues.push(sec.id+' missing vocab source label');
   if(mode==='ordering'&&arr.some(x=>!Array.isArray(x.answer)||x.answer.length<4))issues.push(sec.id+' bad ordering sequence');
   if(mode==='speaking'&&arr.some(x=>!x.en||!x.jp))issues.push(sec.id+' incomplete speaking prompt');
   if(mode==='grammar'&&arr.some(x=>!x.sentence.includes('___')))issues.push(sec.id+' missing grammar gap');
   if(mode==='reading'&&arr.some(x=>(x.en.match(/[.!?](?:\s|$)/g)||[]).length<2))issues.push(sec.id+' insufficient reading text');
   if(['listening','meaning','grammar','reading'].includes(mode))for(const item of arr){
    if(!Array.isArray(item.choices)||item.choices.length!==4)issues.push(item.id+' must have four choices');
    else if(new Set(item.choices).size!==4)issues.push(item.id+' repeated choices');
    if(item.correct!==0)issues.push(item.id+' incorrect answer index');
   }
  }
 }
}
issues.push(...warnings);
assert.equal(report.sections,25,'all 24 Grade 3 sections + Unit 0 required');
assert.deepEqual(issues,[],'Quality issues:\n'+issues.join('\n'));
assert.match(html,/study-grade3-sentences\.js[\s\S]*study-grade3-expansion\.js/);
assert.match(html,/function sectionTabs\(\)/);
assert.match(html,/function spellingChoices\(it\)/);
assert.doesNotMatch(html,/function recognizeHandwriting\(/);
assert.match(html,/copeak-study-grade3-progress\.json/);

// Check the actual inline JavaScript, not just supplemental modules.
for(const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)){
 if(/\bsrc\s*=/.test(match[1]))continue;
 new vm.Script(match[2],{filename:'new-horizon-3.html:inline.js'});
}

// Spelling never shows a second legitimate target or an identical distractor.
const spellSource=html.slice(html.indexOf('function spellingChoices(it)'),html.indexOf('function spellView(it)'));
const randomSource=html.slice(html.indexOf('function randomOrder(a)'),html.indexOf('function baseHead()'));
const control=vm.createContext({state:{unit:3,section:'u3-part1',category:'spelling',index:0,optionKey:null,optionOrder:null,slotBags:{},done:false,choice:-1},allItems:()=>[],esc:x=>x,Math});
vm.runInContext(spellSource+'\n'+randomSource,control);
for(const [unit,parts] of Object.entries(CATALOG))for(const sec of parts){
 const p=PRACTICE[unit][sec.id];
 control.allItems=()=>p.vocab;
 for(const x of p.spelling){
  const choices=vm.runInContext('spellingChoices('+JSON.stringify(x)+')',control);
  assert.equal(choices.length,4,'four spelling options required: '+x.word);
  assert.equal(new Set(choices).size,4,'duplicate spelling options: '+x.word);
  assert.equal(choices[0],x.word,'original answer not first before shuffling');
 }
}
// Four answer slots should rotate evenly across a full set of questions.
const slotCounts=[0,0,0,0];
control.state.category='grammar';control.state.slotBags={};
for(let i=0;i<20;i++){
 control.state.index=i;control.state.optionKey=null;
 const html=vm.runInContext("mcChoices({id:'t-'+state.index},['correct','wrong-a','wrong-b','wrong-c'],0,'')",control);
 const flags=[...html.matchAll(/data-is="(yes|no)"/g)].map(x=>x[1]);
 assert.equal(flags.length,4);
 slotCounts[flags.indexOf('yes')]++;
}
assert.deepEqual(slotCounts,[5,5,5,5],'correct-answer positions must be balanced');
console.log(JSON.stringify({...report,choicePositions:slotCounts},null,2));
