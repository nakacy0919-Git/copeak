/* Copeak Entrance Exam session helpers — independent of the speech recognizer.
   A category pool is built from the same normalized 4-choice questions as category mode. */
(function(root,factory){
 'use strict';
 const api=factory();
 if(typeof module==='object'&&module.exports)module.exports=api;
 if(root)root.CopeakExamSessions=api;
})(typeof window!=='undefined'?window:null,function(){
 'use strict';
 const KEY='copeak_grammar_exam_sessions_v1',MAX_HISTORY=80;
 function clampCount(requested,available){
  const max=Math.max(0,Math.floor(Number(available)||0));
  if(!max)return 0;
  const count=Number(requested);
  return Number.isFinite(count)?Math.min(max,Math.max(1,Math.floor(count))):Math.min(20,max);
 }
 function accuracy(correct,answered){return answered?Math.round(100*correct/answered):0;}
 function shuffled(values,random=Math.random){
  const output=values.slice();
  for(let i=output.length-1;i>0;i--){
   const r=Math.max(0,Math.min(0.999999999,Number(random())||0));
   const j=Math.floor(r*(i+1));
   [output[i],output[j]]=[output[j],output[i]];
  }
  return output;
 }
 function select(pools,requested,random=Math.random){
  // Distinct IDs even if a data set is accidentally repeated.
  const seen=new Set();
  const groups=(pools||[]).map(group=>{
   const questions=[];
   for(const q of group.questions||[]){
    if(!q?.id||seen.has(q.id))continue;
    seen.add(q.id);questions.push(q);
   }
   return {id:group.id,questions};
  }).filter(group=>group.questions.length);
  const total=groups.reduce((sum,g)=>sum+g.questions.length,0);
  const count=clampCount(requested,total);
  if(!count)return [];
  const taken=new Set(),chosen=[];
  // When the requested count permits it, guarantee at least one question
  // from every selected nonempty grammar category.
  if(count>=groups.length){
   for(const group of shuffled(groups,random)){
    const q=shuffled(group.questions,random)[0];
    taken.add(q.id);chosen.push(q);
   }
  }
  const remaining=groups.flatMap(g=>g.questions).filter(q=>!taken.has(q.id));
  chosen.push(...shuffled(remaining,random).slice(0,count-chosen.length));
  return shuffled(chosen,random);
 }
 function safeHistory(storage){
  try{
   const data=JSON.parse(storage.getItem(KEY)||'[]');
   if(!Array.isArray(data))return [];
   return data.filter(r=>r&&typeof r==='object'&&typeof r.id==='string').slice(0,MAX_HISTORY);
  }catch{return [];}
 }
 function saveHistory(storage,session){
  const items=safeHistory(storage).filter(r=>r.id!==session.id);
  items.unshift({...session});
  try{storage.setItem(KEY,JSON.stringify(items.slice(0,MAX_HISTORY)));}catch(_){}
  return items.slice(0,MAX_HISTORY);
 }
 function describe(session){
  const answered=Math.max(0,Number(session?.answered)||0);
  const correct=Math.min(answered,Math.max(0,Number(session?.correct)||0));
  return {...session,answered,correct,rate:accuracy(correct,answered)};
 }
 return Object.freeze({KEY,clampCount,accuracy,select,safeHistory,saveHistory,describe});
});
