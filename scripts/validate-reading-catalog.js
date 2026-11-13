#!/usr/bin/env node
'use strict';
// Validate draft reading lessons. This script never publishes or deploys.
const fs=require('fs');
const path=require('path');
const root=path.resolve(__dirname,'..');
const manifest=JSON.parse(fs.readFileSync(path.join(root,'data/reading/entrance/manifest.json'),'utf8'));
const args=process.argv.slice(2);
const all=args.includes('--all');
const explicit=args.find(v=>v.startsWith('--ids='));
const requested=explicit?new Set(explicit.slice(6).split(',')):null;
const levels=new Map(manifest.levels.map(x=>[x.id,x.words]));
const categories=new Set(manifest.categories.map(x=>x.id));
const errors=[],summary=[],allIds=new Set();
const escapeRegExp=s=>s.replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&');
const inText=(all,term)=>new RegExp('(^|[^a-z])'+escapeRegExp(term)+'($|[^a-z])','i').test(all);
const fail=(id,msg)=>errors.push(id+': '+msg);
for(const file of manifest.sets){
 const id=file.id;
 if(allIds.has(id))fail(id,'duplicate ID');
 allIds.add(id);
 if(!file.file.startsWith('data/reading/entrance/')||file.file.includes('..')){fail(id,'bad file path');continue;}
 const absolute=path.join(root,file.file);
 if(!fs.existsSync(absolute)){fail(id,'missing JSON');continue;}
 let d;
 try{d=JSON.parse(fs.readFileSync(absolute,'utf8'));}catch(e){fail(id,'invalid JSON');continue;}
 if(requested&&!requested.has(id))continue;
 if(!all&&!requested&&d.status!=='draft')continue;
 const passage=(d.paragraphs||[]).flatMap(p=>p.sentences||[]);
 const textAll=passage.map(x=>x.en||'').join(' ');
 const words=textAll.trim().split(/\s+/).filter(Boolean).length;
 const band=levels.get(d.level_id);
 const pids=new Set((d.paragraphs||[]).map(p=>p.id));
 const sentence=(pid,idx)=>d.paragraphs?.find(x=>x.id===pid)?.sentences?.[idx]?.en||'';
 if(d.id!==id||d.category_id!==id.slice(0,3)||!categories.has(d.category_id))fail(id,'ID/category mismatch');
 if(!['draft','reviewed','published'].includes(d.status))fail(id,'bad status');
 if(!d.original||!d.title||!d.title_ja)fail(id,'missing required metadata');
 if(!band||words<band[0]||words>band[1]||words!==d.word_count)fail(id,'word count/level mismatch '+words);
 if(!passage.length||passage.some(x=>!x.en||!x.ja))fail(id,'missing translation');
 if(!Array.isArray(d.source_links)||!d.source_links.length||!d.source_links.every(x=>x.title&&x.url?.startsWith('https://')))fail(id,'sources missing');
 const minimumVocabulary=d.level_id==='eiken-3'?20:40;
 if((d.vocabulary||[]).length<minimumVocabulary)fail(id,'too few vocabulary entries (minimum '+minimumVocabulary+')');
 for(const v of d.vocabulary||[])if(!v.term||!v.ja||!v.definition||!v.synonym||!inText(textAll,v.term))fail(id,'vocabulary: '+v.term);
 if((d.questions||[]).length<10)fail(id,'expected at least 10 reading questions');
 if(d.question_bank_version===2&&(d.questions||[]).length<20)fail(id,'expanded bank requires at least 20 reading questions');
 for(const q of d.questions||[])if(!q.prompt||q.options?.length!==4||new Set(q.options).size!==4||!Number.isInteger(q.answer)||q.answer<0||q.answer>3||!q.explanation_ja||!q.paragraph_ids?.length||!q.paragraph_ids.every(p=>pids.has(p)))fail(id,'reading question: '+q.id);
 if(d.question_bank_version===2){
  if((d.vocabulary_questions||[]).length<20)fail(id,'expanded bank requires at least 20 vocabulary-in-context questions');
  const seen=new Set();
  for(const q of d.vocabulary_questions||[]){
   if(seen.has(q.id))fail(id,'duplicate vocabulary question '+q.id);seen.add(q.id);
   if(!q.term||!inText(textAll,q.term)||!q.prompt||q.options?.length!==4||new Set(q.options).size!==4||!Number.isInteger(q.answer)||q.answer<0||q.answer>3||!q.explanation_ja||!q.paragraph_ids?.length||!q.paragraph_ids.every(p=>pids.has(p)))fail(id,'bad context vocabulary question '+q.id);
  }
 }
 if((d.grammar||[]).length<4)fail(id,'expected >=4 grammar notes');
 for(const g of d.grammar||[])if(!sentence(g.paragraph_id,g.sentence_index).includes(g.focus||'__missing__')||!g.explanation_ja)fail(id,'grammar: '+g.focus);
 if((d.discourse||[]).length<4)fail(id,'expected >=4 discourse items');
 for(const x of d.discourse||[])if(!d.paragraphs.find(p=>p.id===x.paragraph_id)?.sentences.some(s=>s.en.includes(x.expression))||!x.role_ja)fail(id,'discourse: '+x.expression);
 if((d.paraphrases||[]).length<4)fail(id,'expected >=4 paraphrases');
 for(const x of d.paraphrases||[])if(!textAll.includes(x.source)||!x.rewrite||!x.explanation_ja)fail(id,'paraphrase: '+x.source);
 if((d.cloze||[]).length<4)fail(id,'expected >=4 cloze items');
 for(const x of d.cloze||[])if(!sentence(x.paragraph_id,x.sentence_index).includes(x.answer)||x.options?.length!==4||new Set(x.options).size!==4||!x.options.includes(x.answer)||!x.explanation_ja)fail(id,'cloze: '+x.answer);
 summary.push({id,words,status:d.status,vocabulary:d.vocabulary?.length,questions:d.questions?.length});
}
const byCategory=manifest.categories.map(x=>({id:x.id,label:x.label,registered:manifest.sets.filter(s=>s.id.startsWith(x.id+'-')).length,target:30}));
console.log(JSON.stringify({goal:450,registered:manifest.sets.length,remaining:450-manifest.sets.length,checked:summary.length,errors:errors.length,byCategory,lessons:summary},null,2));
if(errors.length){for(const e of errors)console.error(e);process.exitCode=1;}
