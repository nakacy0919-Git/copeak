/* Copeak Grammar progress: unique questions or sentences studied on this device.
   Never interprets a skipped read-aloud mission as a completed reading. */
(function(root,factory){
 'use strict';
 const api=factory();
 if(typeof module==='object'&&module.exports)module.exports=api;
 if(root)root.CopeakGrammarProgress=api;
})(typeof window!=='undefined'?window:null,function(){
 'use strict';
 const formats={
  entrance:/^(?:A\d{2}|B\d{2})-\d{2}-\d{2}$/,
  senior:/^HS-\d{2}-.+-\d{2}$/,
  junior:/^J[1-3]-\d{2}-\d{2}$/
 };
 function attempted(mode,record){
  if(!record||typeof record!=='object')return false;
  return mode==='entrance'?Number(record.mcAttempts)>0:Number(record.readingAttempts)>0;
 }
 function mastered(mode,record){
  if(!record||typeof record!=='object')return false;
  return mode==='entrance'?Number(record.mcCorrect)>0:Number(record.cleared)>=5;
 }
 function summarize(records,mode,total,opts){
  const expected=Math.max(0,Number(total)||0);
  const ids=opts?.ids?new Set(opts.ids):null;
  const prefix=opts?.prefix?String(opts.prefix)+'-':null;
  const all=records&&typeof records==='object'?records:{};
  let studied=0,completed=0;
  for(const [id,record] of Object.entries(all)){
   if(!formats[mode]?.test(id))continue;
   if(prefix&&!id.startsWith(prefix))continue;
   if(ids&&!ids.has(id))continue;
   if(!attempted(mode,record))continue;
   studied++;
   if(mastered(mode,record))completed++;
  }
  studied=Math.min(studied,expected);completed=Math.min(completed,studied);
  const exact=expected?100*studied/expected:0;
  const percent=expected?Math.min(100,exact):0;
  const rate=percent>0&&percent<1?percent.toFixed(1):String(Math.round(percent));
  return Object.freeze({studied,completed,total:expected,percent,rate});
 }
 function overall(records,mode,total){return summarize(records,mode,total);}
 function category(records,mode,id,total){return summarize(records,mode,total,{prefix:id});}
 function unit(records,mode,items){
  const ids=(items||[]).filter(Boolean).map(x=>typeof x==='string'?x:x.id).filter(Boolean);
  return summarize(records,mode,ids.length,{ids});
 }
 return Object.freeze({overall,category,unit});
});