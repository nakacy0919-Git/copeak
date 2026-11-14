#!/usr/bin/env node
'use strict';
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..'),dir=path.join(root,'data/reading/entrance'),mfPath=path.join(dir,'manifest.json');
const read=p=>JSON.parse(fs.readFileSync(p,'utf8')),write=(p,data)=>fs.writeFileSync(p,JSON.stringify(data)+'\n');
const m=read(mfPath),approved=new Set(m.release?.approved_ids||[]),levels=new Map(m.levels.map(l=>[l.id,l.words]));
const oldCount=28,ids=new Set(),fingerprints=new Set(),passed=[],held=[],groups=new Map(m.categories.map(c=>[c.id,[]]));
const nonempty=x=>typeof x==='string'&&x.trim().length>0;
const choices=opts=>Array.isArray(opts)&&opts.length===4&&opts.every(nonempty)&&new Set(opts).size===4;
const termIn=(text,term)=>new RegExp('(^|[^a-z])'+term.replace(/[.*+?^$(){}|[\]\\]/g,'\\$&')+'($|[^a-z])','i').test(text);
const words=text=>text.trim().split(/\s+/).filter(Boolean).length,validId=/^L(0[1-9]|1[0-5])-\d{3}$/;
if(!Array.isArray(m.sets)||approved.size!==455)throw Error('Release allowlist must contain exactly 455 approved IDs');
for(const item of m.sets){
 if(!validId.test(item.id)||ids.has(item.id)||item.file!=='data/reading/entrance/'+item.id+'.json')throw Error('Invalid manifest item '+item.id);
 ids.add(item.id);if(!approved.has(item.id))continue;
 let d;const errs=[];
 try{d=read(path.join(root,item.file));}catch(e){held.push({id:item.id,errors:['invalid JSON: '+e.message]});continue;}
 const old=d.status==='published'||d.status==='reviewed';
 const paragraphs=d.paragraphs||[],sentences=paragraphs.flatMap(p=>p.sentences||[]),text=sentences.map(s=>s.en||'').join(' '),band=levels.get(d.level_id),actual=words(text);
 const pid=new Set(paragraphs.map(p=>p.id)),sentence=(p,n)=>paragraphs.find(x=>x.id===p)?.sentences?.[n]?.en||'';
 if(d.id!==item.id||d.category_id!==item.id.slice(0,3)||!groups.has(d.category_id)||!d.original||!nonempty(d.title)||!nonempty(d.title_ja))errs.push('metadata');
 if(!band||actual!==d.word_count||actual<band[0]||actual>band[1]||!(d.level_ids||[d.level_id]).every(id=>{const b=levels.get(id);return b&&actual>=b[0]&&actual<=b[1];}))errs.push('word count / level '+actual);
 if(!sentences.length||sentences.some(s=>!nonempty(s.en)||!nonempty(s.ja))||pid.size!==paragraphs.length)errs.push('translations / paragraph IDs');
 if(!Array.isArray(d.source_links)||!d.source_links.length||d.source_links.some(s=>!nonempty(s.title)||!s.url?.startsWith('https://')))errs.push('source link shape');
 const q=d.questions||[];
 if((old?q.length<1:q.length!==10)||new Set(q.map(x=>x.id)).size!==q.length||q.some(x=>!nonempty(x.prompt)||!choices(x.options)||!Number.isInteger(x.answer)||x.answer<0||x.answer>3||!nonempty(x.explanation_ja)||!x.paragraph_ids?.length||x.paragraph_ids.some(p=>!pid.has(p))))errs.push('comprehension');
 if(!old){
  const vocab=d.vocabulary||[],minimum=d.level_id==='eiken-3'?20:40;
  if(vocab.length<minimum||new Set(vocab.map(x=>String(x.term).toLowerCase())).size!==vocab.length||vocab.some(x=>!['term','ja','definition','synonym'].every(k=>nonempty(x[k]))||!termIn(text,x.term)))errs.push('vocabulary');
  if((d.grammar||[]).length<4||d.grammar.some(x=>!nonempty(x.focus)||!sentence(x.paragraph_id,x.sentence_index).includes(x.focus)||!nonempty(x.explanation_ja)))errs.push('grammar');
  if((d.discourse||[]).length<4||d.discourse.some(x=>!nonempty(x.expression)||!nonempty(x.role_ja)||!paragraphs.find(p=>p.id===x.paragraph_id)?.sentences.some(s=>s.en.includes(x.expression))))errs.push('discourse');
  if((d.paraphrases||[]).length<4||d.paraphrases.some(x=>!sentences.some(s=>s.en===x.source)||!nonempty(x.rewrite)||!nonempty(x.explanation_ja)))errs.push('paraphrases');
  if((d.cloze||[]).length<4||d.cloze.some(x=>!nonempty(x.answer)||!sentence(x.paragraph_id,x.sentence_index).includes(x.answer)||!choices(x.options)||!x.options.includes(x.answer)||!nonempty(x.explanation_ja)))errs.push('cloze');
 }
 const fp=crypto.createHash('sha256').update(text.toLowerCase().trim().replace(/\s+/g,' ')).digest('hex');
 if(fingerprints.has(fp))errs.push('duplicate exact English text');
 if(errs.length){if(old)throw Error('Existing public lesson regression: '+item.id+' '+errs.join('; '));held.push({id:item.id,errors:errs});continue;}
 fingerprints.add(fp);
 const published=old?d:{...d,editorial_status:d.status,status:'published',release_note:'User-approved release; automated structural validation only, human editorial review pending.'};
 passed.push({item,old,words:actual});groups.get(d.category_id).push(published);
 if(!old)write(path.join(root,item.file),published);
}
if(passed.filter(x=>x.old).length!==oldCount)throw Error('Existing publication count changed unexpectedly');
if(passed.length<=oldCount)throw Error('No new lesson passed checks');
m.sets=passed.map(x=>x.item);m.release_bundles=[];
for(const [id,items] of groups){if(!items.length)continue;const name='release-bundle-'+id+'.json';write(path.join(dir,name),items);m.release_bundles.push('data/reading/entrance/'+name);}
const report={requested:approved.size,published:passed.length,previous:oldCount,newly_published:passed.length-oldCount,held,by_category:Object.fromEntries([...groups].map(([id,items])=>[id,items.length])),words:passed.reduce((n,x)=>n+x.words,0),human_editorial_review:'pending for new lessons'};
write(path.join(dir,'release-report.json'),report);
m.release={...m.release,report:'data/reading/entrance/release-report.json',published:passed.length,held:held.length};
write(mfPath,m);
console.log('COPEAK_READING_RELEASE '+JSON.stringify(report));
