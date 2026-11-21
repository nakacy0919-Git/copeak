/* Read-only filters for Copeak materials. Do not infer school or exam level from article title. */
(function(root,factory){
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;
  if(root)root.CopeakLessonTaxonomy=api;
})(typeof window!=='undefined'?window:null,function(){
  'use strict';
  const CERT=Object.freeze({'5級':1,'4級':2,'3級':3,'準2級':4,'準2級プラス':5,'2級':6,'準1級':7,'1級':8});
  const GRADE=Object.freeze({'中1':1,'中2':2,'中3':3,'高1':4,'高2':5,'高3':6});
  const CEFR=Object.freeze({A1:1,A2:2,B1:3,B2:4,C1:5,C2:6});
  const LABELS=Object.freeze({sample:'サンプル',original:'Copeakオリジナル',personal:'自作教材',classroom:'Classroom',new_horizon:'New Horizon'});
  function source(l){
    if(!l)return 'personal';
    if(l.classroomSource===true||l.classroomAssignmentId||l.folderId==='__copeak_classroom__')return 'classroom';
    if(l.folderId==='__samples__'||String(l.title||'').includes('(sample)')||String(l.title||'').includes('(NCC課題)'))return 'sample';
    if(/^new[\s_-]*horizon/i.test(String(l.series||l.textbookSeries||l.sourceSeries||''))||String(l.folderId||'').startsWith('__new_horizon_'))return 'new_horizon';
    if(l.copeakLibrary===true||(String(l.folderId||'').startsWith('__copeak_')&&l.folderId!=='__copeak_classroom__'))return 'original';
    if(l.isPreset===true)return 'sample';
    return 'personal';
  }
  function grades(l){
    const label=String(l?.schoolLevel||l?.gradeId||'');
    let values=[...label.matchAll(/(中|高)([123])/g)].map(m=>m[1]+m[2]);
    if(values.length===2&&/[-〜～~–]/.test(label)){
      const a=GRADE[values[0]],b=GRADE[values[1]];
      if(a&&b&&a<b)values=Object.keys(GRADE).filter(x=>GRADE[x]>=a&&GRADE[x]<=b);
    }
    return [...new Set(values.filter(x=>Object.hasOwn(GRADE,x)))];
  }
  function certification(l){
    const label=String(l?.levelLabel||'');
    const values=label.match(/準2級プラス|準2級|準1級|[1-5]級/g)||[];
    const shorthand=[...label.matchAll(/([1-5])\s*[〜～~-]\s*([1-5])級/g)];
    for(const match of shorthand)for(const n of [match[1],match[2]])values.push(n+'級');
    return [...new Set(values.filter(x=>Object.hasOwn(CERT,x)))];
  }
  function cefr(l){return [...new Set((String(l?.cefr||'').toUpperCase().match(/A1|A2|B1|B2|C1|C2/g)||[]))];}
  function matches(l,f={}){
    return (!f.source||f.source==='all'||source(l)===f.source)
      &&(!f.grade||f.grade==='all'||grades(l).includes(f.grade))
      &&(!f.cert||f.cert==='all'||certification(l).includes(f.cert))
      &&(!f.cefr||f.cefr==='all'||cefr(l).includes(f.cefr));
  }
  function rank(l,type){
    const values=type==='grade'?grades(l):type==='cert'?certification(l):cefr(l);
    const order=type==='grade'?GRADE:type==='cert'?CERT:CEFR;
    return values.length?Math.min(...values.map(x=>order[x])):Infinity;
  }
  return {source,grades,certification,cefr,matches,rank,LABELS};
});
