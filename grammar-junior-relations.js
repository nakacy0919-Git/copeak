/* Explicit, pedagogically reviewed links for Copeak's own junior grammar diagrams.
   These arrows explain modification, comparison and sentence-clause relationships.
   No guessing from arbitrary text; only use a diagram already matched to its source sentence. */
(function(root,factory){'use strict';const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;if(root)root.CopeakJuniorRelations=api;})(typeof window!=='undefined'?window:(typeof globalThis!=='undefined'?globalThis:null),function(){'use strict';
 const OVERRIDES={
  'J1-01-08':{from:3,to:2,label:'場所を説明'},
  'J2-04-06':{from:3,to:1,label:'動作の時',targetText:'kept talking'},
  'J2-06-05':{from:3,to:2,label:'頻度を説明'},
  'J3-01-01':{from:3,to:1,label:'継続期間'},
  'J3-01-08':{from:0,to:3,label:'期間を尋ねる'},
  'J2-03-02':{from:3,to:1,label:'移動の目的'},
  'J2-03-04':{from:3,to:2,label:'名詞を説明'},
  'J2-03-06':{from:3,to:2,label:'感情の理由'},
  'J2-03-08':{from:3,to:2,label:'名詞を説明'},
  'J2-04-04':{from:3,to:2,label:'good の内容'},
  'J2-04-05':{from:3,to:2,label:'interested の対象'},
  'J2-04-07':{from:1,to:0,label:'感謝の理由'},
  'J3-03-01':{from:2,to:1,label:'boy を説明',targetText:'the boy'},
  'J3-03-04':{from:3,to:2,label:'目的語の動作'},
  'J3-04-05':{from:0,to:1,label:'仮定の条件'},
  'J3-04-06':{from:0,to:1,label:'仮定の条件'}
 };
 function closest(parts,start,rx){
  for(let i=start-1;i>=0;i--)if(rx.test(parts[i].label))return i;
  return -1;
 }
 function relation(diagram){
  if(!diagram||!Array.isArray(diagram.segments))return null;
  const parts=diagram.segments;
  let link=OVERRIDES[diagram.id];
  if(!link){
   // FACTBOOK's 説明ルール: a postposed clause or participle explains the noun before it.
   const nounClause=parts.findIndex(p=>/関係詞節|分詞句|名詞修飾/.test(p.label));
   if(nounClause>=0){
    const head=closest(parts,nounClause,/^(?:S|O[12]?|C)(?:・|$)/);
    if(head>=0)link={from:nounClause,to:head,label:'前の名詞を説明'};
   }
  }
  if(!link){
   // Subordinate adverbial clause modifies the main clause as a whole.
   const subordinate=parts.findIndex(p=>/理由節|条件節|時の節|譲歩節|目的節|仮定節/.test(p.label));
   const main=parts.findIndex((p,i)=>i!==subordinate&&/主節/.test(p.label));
   if(subordinate>=0&&main>=0){
    const type=parts[subordinate].label;
    link={from:subordinate,to:main,label:/条件/.test(type)?'条件を説明':/時の節/.test(type)?'時を説明':/理由/.test(type)?'理由を説明':/譲歩/.test(type)?'譲歩の関係':/目的/.test(type)?'目的を説明':'仮定の条件'};
   }
  }
  if(!link){
   const compare=parts.findIndex(p=>/比較対象|範囲/.test(p.label));
   if(compare>=0){
    const head=closest(parts,compare,/^C|比較級|最上級/);
    if(head>=0)link={from:compare,to:head,label:'比較・範囲の関係'};
   }
  }
  if(!link){
   // Transparent adverb/prepositional modifiers: connect to the explicit main verb.
   const mod=parts.findIndex(p=>/^(?:時|場所|方向|対象|行為者|期間|起点|理由|修飾)(?:・|$)/.test(p.label));
   if(mod>=0){
    const verb=closest(parts,mod,/^V(?:・|$)|進行形|現在完了|受動態/);
    if(verb>=0){
     const type=parts[mod].label;
     link={from:mod,to:verb,label:/^時/.test(type)?'時を説明':/^場所/.test(type)?'場所を説明':/^期間|^起点/.test(type)?'時間のつながり':/^行為者/.test(type)?'動作主を説明':/^方向/.test(type)?'方向を説明':'動詞を詳しく説明'};
    }
   }
  }
  if(!link)return null;
  const {from,to,label}=link;
  if(!Number.isInteger(from)||!Number.isInteger(to)||from===to||!parts[from]||!parts[to])return null;
  return Object.freeze({
   from,to,label,
   sourceText:parts[from].text,
   targetText:link.targetText||parts[to].text
  });
 }
 return Object.freeze({get:relation});
});
