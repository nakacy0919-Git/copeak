#!/usr/bin/env node
'use strict';
// Generate the published-only index. This never releases, merges or deploys.
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const dir=path.join(root,'data/reading/entrance');
const manifest=JSON.parse(fs.readFileSync(path.join(dir,'manifest.json'),'utf8'));
const statuses=new Set(['reviewed','published']);
const source=JSON.stringify([manifest.sets.map(s=>[s.id,s.file]),manifest.release?.published||null]);
let hash=2166136261;
for(let i=0;i<source.length;i++)hash=Math.imul(hash^source.charCodeAt(i),16777619);
const signature=source.length+'-'+(hash>>>0);
const sets=[],lessons=[];
for(const item of manifest.sets){
 if(!/^L(0[1-9]|1[0-5])-\d{3}$/.test(item.id)||
    item.file!=='data/reading/entrance/'+item.id+'.json')throw Error('Invalid lesson location '+item.id);
 const lesson=JSON.parse(fs.readFileSync(path.join(root,item.file),'utf8'));
 if(lesson.id!==item.id)throw Error('Lesson ID mismatch '+item.id);
 if(!statuses.has(lesson.status))continue; // Drafts are never indexed.
 if(lesson.category_id!==lesson.id.slice(0,3)||
    !manifest.levels.some(l=>l.id===lesson.level_id)||
    !(lesson.level_ids||[lesson.level_id]).every(id=>manifest.levels.some(l=>l.id===id))||
    !Array.isArray(lesson.questions)||!lesson.questions.length||
    !Array.isArray(lesson.vocabulary)||!Array.isArray(lesson.grammar)||
    !Array.isArray(lesson.paraphrases))throw Error('Invalid public lesson '+item.id);
 sets.push({
  id:item.id,file:item.file,category_id:lesson.category_id,level_id:lesson.level_id,
  level_ids:lesson.level_ids||[lesson.level_id],title:lesson.title,title_ja:lesson.title_ja,
  word_count:lesson.word_count,question_count:lesson.questions.length,status:lesson.status
 });
 lessons.push({
  id:item.id,
  vocabulary:lesson.vocabulary.map(v=>({term:v.term,ja:v.ja})),
  grammar:lesson.grammar.map(g=>({explanation_ja:g.explanation_ja})),
  paraphrases:lesson.paraphrases.map(p=>({rewrite:p.rewrite}))
 });
}
const write=(name,data)=>fs.writeFileSync(path.join(dir,name),JSON.stringify(data)+'\n');
write('catalog-index.json',{
 version:1,manifest_signature:signature,sets,
 practice_corpus_file:'data/reading/entrance/practice-corpus.json'
});
write('practice-corpus.json',{version:1,lessons});
console.log('COPEAK_READING_INDEX '+JSON.stringify({
 indexed_public:sets.length,registered:manifest.sets.length,
 drafts_excluded:manifest.sets.length-sets.length,signature
}));
