/*
 * Copeak vocabulary diagnosis integrity audit.
 * Checks structural quality of candidate items and describes evidence.
 * It does NOT calibrate item difficulty or equate Copeak levels to Eiken/CEFR.
 */
(function(root){
'use strict';
const strip=s=>String(s||'').normalize('NFKC').replace(/[\s　・、,.!?…;:（）()\-\u2013]/g,'').toLocaleLowerCase();
const key=id=>typeof id==='string'&&/^CK[1-8]-\d{3}$/.test(id);
function audit(all=[],active=[]){
 const flags=[],seen=new Set(),examples=new Set(),byId=new Map(all.map(x=>[x.id,x]));
 const levelCounts=Array(8).fill(0);
 const add=(code,id)=>{if(flags.length<200)flags.push({code,id})};
 for(const x of all){
   if(!key(x?.id)||seen.has(x.id))add('DUPLICATE_OR_INVALID_ID',x?.id);
   seen.add(x.id);
   if(!Number.isInteger(x.level)||x.level<1||x.level>8)add('BAD_LEVEL',x.id);
   else levelCounts[x.level-1]++;
   if(!x.example_en||!/[.!?]["']?$/.test(x.example_en.trim())||x.example_en.trim().split(/\s+/).length<5)add('INCOMPLETE_SENTENCE',x.id);
   if(!x.highlight_en||!x.example_en?.toLowerCase().includes(x.highlight_en.toLowerCase()))add('HIGHLIGHT_NOT_IN_SENTENCE',x.id);
   const sentence=strip(x.example_en);
   if(examples.has(sentence))add('DUPLICATED_SENTENCE',x.id);
   examples.add(sentence);
   const foils=x.distractor_ids;
   if(!Array.isArray(foils)||foils.length!==3||new Set([x.id,...foils]).size!==4||foils.some(id=>!byId.has(id)))add('INVALID_DISTRACTORS',x.id);
   else for(const locale of ['meaning_ja','meaning_en']){
     const options=[x[locale],...foils.map(id=>byId.get(id)?.[locale])].map(strip);
     if(options.some(x=>!x)||new Set(options).size!==4)add('AMBIGUOUS_OPTIONS_'+locale,x.id);
   }
 }
 const activeFamilies=new Set(),activeIssues=[];
 for(const x of active){
   if(!byId.has(x.id)||activeFamilies.has(x.family_id))activeIssues.push(x.id);
   activeFamilies.add(x.family_id);
 }
 return {pass:flags.length===0&&activeIssues.length===0,issues:flags,activeIssues,
  candidates:all.length,active:active.length,levelCounts,
  calibrated:all.filter(x=>x.calibrated===true&&x.v8_status!=='CANDIDATE_NOT_REVIEWED').length};
}
function evidence(summary){
 if(!summary||!Array.isArray(summary.answers))return null;
 const answers=summary.answers,levels=new Set(answers.map(a=>a.level)),families=new Set(answers.map(a=>a.family_id||a.id));
 const range=summary.range||[1,8];
 const width=Math.max(0,Number(range[1])-Number(range[0]));
 const unknown=answers.filter(a=>a.unknown).length;
 const firstHalf=answers.filter((_,i)=>i%2===0);
 const secondHalf=answers.filter((_,i)=>i%2===1);
 const accuracy=items=>items.length?items.filter(x=>x.correct).length/items.length:null;
 const splitA=accuracy(firstHalf),splitB=accuracy(secondHalf);
 const splitGap=splitA==null||splitB==null?null:Math.round(Math.abs(splitA-splitB)*100);
 const cautions=[];
 if(width>=3)cautions.push('WIDE_ESTIMATE');
 if(unknown>=Math.ceil(answers.length/4))cautions.push('MANY_UNKNOWN');
 if(splitGap!==null&&splitGap>=25)cautions.push('SPLIT_DISAGREEMENT');
 return {total:answers.length,uniqueFamilies:families.size,coveredLevels:levels.size,
  width,unknown,splitGap,range:[Number(range[0]),Number(range[1])],cautions,
  provisional:true,calibrated:false};
}
root.CopeakVocabularyQuality=Object.freeze({audit,evidence});
})(typeof window!=='undefined'?window:globalThis);
