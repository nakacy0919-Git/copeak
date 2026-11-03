/*
 * Copeak Vocabulary Review v2
 * Device-only schedule for full-sentence reading. A correct reading is evidence
 * of reading practice, NOT proof of lexical recall or long-term retention.
 * 1,3,7,14,30-day intervals are configurable heuristics, not a validated SRS.
 */
(function(root){
'use strict';
const VERSION=2,INTERVALS=[1,3,7,14,30],MAX_ITEMS=1200,DAY=86400000;
const validId=id=>typeof id==='string'&&/^CK[1-8]-\d{3}$/.test(id);
const validDate=s=>typeof s==='string'&&Number.isFinite(Date.parse(s));
const clone=o=>JSON.parse(JSON.stringify(o));
function initial(){return {version:VERSION,items:{},skipFor:''};}
function safeItem(x){
  if(!x||typeof x!=='object')return null;
  const n=(val,max=9999)=>Math.min(max,Math.max(0,Number(val)||0));
  return {step:n(x.step,INTERVALS.length),dueAt:validDate(x.dueAt)?x.dueAt:'',
    lastDiagnosisAt:validDate(x.lastDiagnosisAt)?x.lastDiagnosisAt:'',
    lastMissAt:validDate(x.lastMissAt)?x.lastMissAt:'',
    lastReadAt:validDate(x.lastReadAt)?x.lastReadAt:'',
    lastCorrectDiagnosisAt:validDate(x.lastCorrectDiagnosisAt)?x.lastCorrectDiagnosisAt:'',
    readings:n(x.readings),passes:n(x.passes),mistakes:n(x.mistakes),
    lapses:n(x.lapses),lastAccuracy:x.lastAccuracy==null?null:Math.min(100,Math.max(0,Number(x.lastAccuracy)||0)),
    confirmedAfterMiss:Boolean(x.confirmedAfterMiss)};
}
function normalize(input,history=[],now=Date.now()){
  let state=initial();
  if(input&&input.version===VERSION&&input.items&&typeof input.items==='object'){
    state.skipFor=typeof input.skipFor==='string'?input.skipFor.slice(0,100):'';
    for(const [id,item] of Object.entries(input.items).slice(-MAX_ITEMS)){
      if(validId(id)){const safe=safeItem(item);if(safe)state.items[id]=safe;}
    }
  }else if(input&&Array.isArray(input.completed)){
    // v1 migration: prior 80% passes remain known, but require a new check
    // before they can count as retained. The pass date was not stored in v1.
    state.skipFor=typeof input.skippedAt==='string'?input.skippedAt:'';
    const recent=new Map();
    for(const run of history){
      if(!validDate(run?.at))continue;
      for(const a of run.answers||[]){
        if(validId(a?.id)&&(!recent.has(a.id)||recent.get(a.id)<run.at))recent.set(a.id,run.at);
      }
    }
    for(const id of input.completed.slice(-MAX_ITEMS)){
      if(!validId(id))continue;
      state.items[id]={...safeItem({}),step:1,dueAt:new Date(now).toISOString(),
        lastDiagnosisAt:recent.get(id)||'',passes:1,readings:1};
    }
  }
  return state;
}
function reconcile(state,history=[],now=Date.now()){
  const data=normalize(state,history,now);
  const chronological=(Array.isArray(history)?history:[]).filter(r=>validDate(r?.at))
    .sort((a,b)=>Date.parse(a.at)-Date.parse(b.at));
  for(const run of chronological){
    for(const ans of (run.answers||[])){
      const id=ans?.id;
      if(!validId(id))continue;
      let item=data.items[id]||safeItem({});
      if(item.lastDiagnosisAt && Date.parse(item.lastDiagnosisAt)>=Date.parse(run.at))continue;
      const wasMissed=item.mistakes>0;
      item.lastDiagnosisAt=run.at;
      if(!ans.correct){
        if(item.step>0)item.lapses++;
        item.step=0;
        item.dueAt=run.at;
        item.lastMissAt=run.at;
        item.confirmedAfterMiss=false;
        item.mistakes++;
      }else if(wasMissed&&(!item.lastMissAt||Date.parse(run.at)>Date.parse(item.lastMissAt))){
        item.lastCorrectDiagnosisAt=run.at;
        item.confirmedAfterMiss=true;
        // Do not treat a multiple-choice success as a reading exercise.
      }
      data.items[id]=item;
    }
  }
  const ids=Object.keys(data.items);
  if(ids.length>MAX_ITEMS){
    const keep=ids.sort((a,b)=>{
      const item=data.items;const timestamp=x=>Date.parse(item[x].lastDiagnosisAt||item[x].lastReadAt)||0;
      return timestamp(b)-timestamp(a);
    }).slice(0,MAX_ITEMS);
    for(const id of ids)if(!keep.includes(id))delete data.items[id];
  }
  return data;
}
function applyReading(state,id,accuracy,now=Date.now()){
  const data=normalize(state,[],now);
  if(!validId(id)||!Number.isFinite(accuracy)||!data.items[id])return data;
  const item=data.items[id];
  item.readings++;
  item.lastAccuracy=Math.min(100,Math.max(0,Math.round(accuracy)));
  item.lastReadAt=new Date(now).toISOString();
  if(accuracy>=80){
    item.passes++;
    const due=!item.dueAt||Date.parse(item.dueAt)<=now;
    if(!item.step||due){
      item.step=Math.min(INTERVALS.length,item.step+1);
      const days=INTERVALS[Math.max(0,item.step-1)];
      item.dueAt=new Date(now+DAY*days).toISOString();
    }
  }else if(item.step>0&&(!item.dueAt||Date.parse(item.dueAt)<=now)){
    // An unsuccessful due reading needs more practice. ASR may make errors;
    // the learner may always skip or retry without losing history.
    item.step=0;
    item.dueAt=new Date(now).toISOString();
  }
  return data;
}
function dueItems(state,now=Date.now(),limit=20){
  const data=normalize(state);
  return Object.entries(data.items)
    .filter(([,x])=>x.mistakes>0&&(!x.step||!x.dueAt||Date.parse(x.dueAt)<=now))
    .sort((a,b)=>{
      if((a[1].step===0)!==(b[1].step===0))return a[1].step===0?-1:1;
      return (Date.parse(a[1].dueAt)||0)-(Date.parse(b[1].dueAt)||0);
    }).slice(0,Math.max(0,limit)).map(([id,x])=>({id,...clone(x)}));
}
function metrics(state,now=Date.now()){
  const items=Object.values(normalize(state).items).filter(x=>x.mistakes>0);
  const pending=items.filter(x=>!x.step||!x.dueAt||Date.parse(x.dueAt)<=now);
  const scheduled=items.filter(x=>x.step>0&&x.dueAt&&Date.parse(x.dueAt)>now);
  const nextDue=scheduled.map(x=>x.dueAt).sort()[0]||null;
  return {tracked:items.length,due:pending.length,scheduled:scheduled.length,
    practiced:items.filter(x=>x.passes>0).length,
    laterCorrect:items.filter(x=>x.confirmedAfterMiss).length,
    lapsed:items.filter(x=>x.lapses>0).length,nextDue};
}
function levelAnalysis(history=[]){
  const groups=Array.from({length:8},(_,i)=>({level:i+1,questions:0,correct:0,wrong:0}));
  for(const result of (Array.isArray(history)?history:[]).slice(0,5)){
    for(const a of result.answers||[]){
      const lv=Number(a.level);
      if(!Number.isInteger(lv)||lv<1||lv>8)continue;
      const group=groups[lv-1];group.questions++;
      if(a.correct)group.correct++;else group.wrong++;
    }
  }
  return groups.filter(x=>x.questions>0);
}
root.CopeakVocabularyReview=Object.freeze({VERSION,INTERVALS,initial,normalize,reconcile,applyReading,dueItems,metrics,levelAnalysis});
})(typeof window!=='undefined'?window:globalThis);
