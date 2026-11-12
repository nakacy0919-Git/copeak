/* Copeak Reading Practice Engine – question banks from original authored lesson data.
   No answer is inferred from external material; wrong options are drawn from other authored entries. */
(function(root){
 'use strict';
 const labels={questions:'読解',vocab:'語彙',grammar:'文法',discourse:'論理',paraphrase:'言い換え',cloze:'穴埋め'};
 const modes=Object.keys(labels);
 const uniq=items=>[...new Set(items.map(x=>String(x||'').trim()).filter(Boolean))];
 const seedOf=str=>{let h=2166136261;for(const c of String(str)){h=Math.imul(h^c.charCodeAt(0),16777619)}return h>>>0};
 const mix=(list,key)=>{const a=[...list];let s=seedOf(key)||1;for(let i=a.length-1;i>0;i--){s=(Math.imul(1664525,s)+1013904223)>>>0;const j=s%(i+1);[a[i],a[j]]=[a[j],a[i]]}return a};
 const passageSentences=l=>l.paragraphs.flatMap((p,pi)=>p.sentences.map((s,si)=>({paragraphId:p.id,sentenceIndex:si,text:s.en,pi})));
 function locate(l,phrase,paragraphId,preferredIndex){
   const term=String(phrase||'').split('...')[0].trim();
   if(!term)return null;
   let pool=passageSentences(l);
   if(paragraphId)pool=pool.filter(p=>p.paragraphId===paragraphId);
   if(Number.isInteger(preferredIndex))pool=pool.filter(p=>p.sentenceIndex===preferredIndex);
   let hit=pool.find(p=>p.text.includes(term));
   if(!hit)hit=pool.find(p=>p.text.toLowerCase().includes(term.toLowerCase()));
   if(!hit&&preferredIndex!==undefined)return locate(l,term,paragraphId);
   return hit?{paragraphId:hit.paragraphId,sentenceIndex:hit.sentenceIndex,phrase:term}:null;
 }
 function options(correct,pool,key){
   let distract=mix(uniq(pool).filter(x=>x!==correct),key+':pool').slice(0,3);
   // The authored bank normally supplies 3+ distractors; this guards very small sets.
   const fallback=['本文の主張と反対のことを述べている','別の話題についての説明である','ここでは原因を示さず結論だけを述べる'];
   for(const v of fallback)if(distract.length<3&&v!==correct&&!distract.includes(v))distract.push(v);
   const arr=mix([correct,...distract.slice(0,3)],key+':order');
   return {options:arr,answer:arr.indexOf(correct)};
 }
 function build(l,mode,allLessons,direction){
  const corpus=Array.isArray(allLessons)&&allLessons.length?allLessons:[l];
  if(mode==='vocab'){
   const entries=l.vocabulary||[];
   const dir=['en-ja','ja-en','definition'].includes(direction)?direction:'en-ja';
   const dest=v=>dir==='en-ja'?v.ja:v.term;
   const pool=corpus.flatMap(x=>x.vocabulary||[]).map(dest);
   return entries.map((v,i)=>{
    const focus=locate(l,v.term);
    const q=options(dest(v),pool,l.id+':vocab:'+dir+':'+i);
    return {id:'v-'+dir+'-'+i,mode,index:i,prompt:dir==='en-ja'?'「'+v.term+'」の意味として最も適切なものは？':dir==='ja-en'?'「'+v.ja+'」に対応する英単語は？':'次の英英定義に合う単語は？',subprompt:dir==='definition'?v.definition:'',...q,explanation:'日本語：'+v.ja+' ／ 英英定義：'+v.definition+(v.synonym?' ／ 類義語：'+v.synonym:''),source:focus,sourceText:v.term,sourceStyle:'underline'};
   });
  }
  if(mode==='cloze'){
    return (l.cloze||[]).map((q,i)=>({
     id:'c-'+i,mode,index:i,prompt:'左の本文【'+(i+1)+'】に入る最も適切な表現を選びなさい。',
     subprompt:'第'+((l.paragraphs||[]).findIndex(p=>p.id===q.paragraph_id)+1)+'段落',
     options:[...q.options],answer:q.options.indexOf(q.answer),explanation:q.explanation_ja,
     source:locate(l,q.answer,q.paragraph_id,q.sentence_index),sourceText:q.answer,sourceStyle:'mask',
    }));
  }
  if(mode==='discourse'){
   const bank=['However','Therefore','For example','In addition','Nevertheless','In contrast','As a result','Meanwhile','Similarly','Rather than','although','because','yet','but','so','also'];
   return (l.discourse||[]).map((d,i)=>{
    const source=locate(l,d.expression,d.paragraph_id);
    const reviewed=(l.cloze||[]).find(q=>q.answer.toLowerCase()===d.expression.toLowerCase()&&q.paragraph_id===d.paragraph_id);
    const correct=d.expression;
    const pool=reviewed?reviewed.options:[...bank,...corpus.flatMap(x=>(x.discourse||[]).map(y=>y.expression))];
    const answer=options(correct,pool,l.id+':discourse:'+i);
    return {id:'d-'+i,mode,index:i,prompt:'本文【'+(i+1)+'】に入る接続表現を選びなさい。',
     subprompt:'前後の内容の論理関係に注目しましょう。',...answer,explanation:d.role_ja+' ／ 正解：'+correct,
     source,sourceText:correct,sourceStyle:'mask'};
   });
  }
  if(mode==='paraphrase'){
   const corpusRewrites=corpus.flatMap(x=>(x.paraphrases||[]).map(p=>p.rewrite));
   return (l.paraphrases||[]).map((p,i)=>{
    const correct=p.rewrite;
    const ans=options(correct,corpusRewrites,l.id+':paraphrase:'+i);
    return {id:'p-'+i,mode,index:i,prompt:'左の英文の下線部と最も近い意味の表現を選びなさい。',
     subprompt:'Underlined expression: '+p.source,...ans,explanation:p.explanation_ja+' ／ 言い換え：'+p.rewrite,
     source:locate(l,p.source),sourceText:p.source,sourceStyle:'underline'};
   });
  }
  if(mode==='grammar'){
   const corpusExplanations=corpus.flatMap(x=>(x.grammar||[]).map(g=>g.explanation_ja));
   const classify=x=>{const t=String(x);
    for(const [re,k] of [[/関係代名詞|関係節|which|who/i,'relative'],[/動名詞/,'gerund'],[/副詞節|if節|when節|条件節/,'conditional'],[/分詞構文|現在分詞|過去分詞/,'participial'],[/間接疑問|whether|what節/,'interrogative'],[/受動態/,'passive'],[/同格|that節/,'that'],[/比較|not.*as|rather than/,'comparison'],[/不定詞/,'infinitive']])if(re.test(t))return k;
    return 'general';
   };
   return (l.grammar||[]).map((g,i)=>{
    const correct=g.explanation_ja,key=classify(correct);
    const others=corpusExplanations.filter(x=>x!==correct&&classify(x)!==key);
    const fallback=corpusExplanations.filter(x=>x!==correct);
    const ans=options(correct,others.length>=3?others:fallback,l.id+':grammar:'+i);
    return {id:'g-'+i,mode,index:i,prompt:'左の英文の下線部の文法的な働きとして最も適切な説明は？',
     subprompt:'Underlined expression: '+g.focus,...ans,explanation:g.explanation_ja,
     source:locate(l,g.focus,g.paragraph_id,g.sentence_index)||locate(l,g.focus,g.paragraph_id),sourceText:g.focus,sourceStyle:'underline'};
   });
  }
  return [];
 }
 function evidence(lesson,q){
   const stop=new Set('which what where when how why whose that this these those were was are have does there best statement following according passage paragraph meaning main writer study about from with their into have much should would could for and the many some'.split(' '));
   const tokens=(q.prompt+' '+(q.options?.[q.answer]||'')).toLowerCase().match(/[a-z]{3,}/g)||[];
   const target=tokens.filter(x=>!stop.has(x));
   const pids=q.paragraph_ids||[];
   const candidates=passageSentences(lesson).filter(x=>pids.includes(x.paragraphId));
   if(!candidates.length)return null;
   const ranked=candidates.map(p=>{
    const lower=p.text.toLowerCase();const n=target.reduce((a,w)=>a+(lower.includes(w)?1:0),0);
    return {p,score:n};
   }).sort((a,b)=>b.score-a.score);
   const best=ranked[0]?.p;
   if(!best)return null;
   return {paragraphId:best.paragraphId,sentenceIndex:best.sentenceIndex,phrase:best.text};
 }
 root.CopeakReadingPractice=Object.freeze({build,locate,evidence,labels,modes});
})(window);
