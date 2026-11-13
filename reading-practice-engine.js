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
   let distract=mix(uniq(pool).filter(x=>x.toLowerCase()!==correct.toLowerCase()),key+':pool').filter((x,i,a)=>a.findIndex(y=>y.toLowerCase()===x.toLowerCase())===i).slice(0,3);
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
    const authored=(l.cloze||[]).map((q,i)=>({
     id:'c-'+i,mode,index:i,prompt:'左の本文【'+(i+1)+'】に入る最も適切な表現を選びなさい。',
     subprompt:'第'+((l.paragraphs||[]).findIndex(p=>p.id===q.paragraph_id)+1)+'段落',
     options:[...q.options],answer:q.options.indexOf(q.answer),explanation:q.explanation_ja,
     source:locate(l,q.answer,q.paragraph_id,q.sentence_index),sourceText:q.answer,sourceStyle:'mask',
    }));
    // Older sets offered only 2 cloze questions. Supplement from checked
    // vocabulary actually present in the original passage.
    const used=new Set(authored.map(x=>x.source?x.source.paragraphId+':'+x.source.sentenceIndex:''));
    const entries=uniq((l.vocabulary||[]).map(v=>v.term)).filter(t=>t.length>=5&&!['however','therefore','because','although','nevertheless','instead','moreover'].includes(t.toLowerCase()));
    const candidates=mix(entries,l.id+':supplemental-cloze');
    const fullPool=corpus.flatMap(x=>(x.vocabulary||[]).map(v=>v.term));
    const extra=[];
    for(const term of candidates){
      if(authored.length+extra.length>=10)break;
      const source=locate(l,term);if(!source)continue;
      const sentence=passageSentences(l).find(x=>x.paragraphId===source.paragraphId&&x.sentenceIndex===source.sentenceIndex)?.text||'';
      const pos=sentence.toLowerCase().indexOf(term.toLowerCase());
      if(pos<0)continue;
      const before=sentence[pos-1]||'',after=sentence[pos+term.length]||'';
      if(/[a-z]/i.test(before)||/[a-z]/i.test(after))continue;
      const key=source.paragraphId+':'+source.sentenceIndex;
      if(used.has(key))continue;
      const usable=fullPool.filter(w=>w.toLowerCase()!==term.toLowerCase()&&w.length>=Math.max(4,term.length-5)&&w.length<=term.length+5);
      if(uniq(usable).length<3)continue;
      const ans=options(term,usable,l.id+':cloze-extra:'+key);
      const index=authored.length+extra.length;
      extra.push({id:'cx-'+extra.length,mode,index,
       prompt:'左の本文【'+(index+1)+'】に入る最も適切な語句を選びなさい。',
       subprompt:'第'+((l.paragraphs||[]).findIndex(p=>p.id===source.paragraphId)+1)+'段落',
       ...ans,explanation:'本文では「'+term+'」が文脈に合います。該当文を読み直して確かめましょう。',
       source,sourceText:term,sourceStyle:'mask'});
      used.add(key);
    }
    return [...authored,...extra];
  }
  if(mode==='discourse'){
   const bank=['However','Therefore','For example','In addition','Nevertheless','In contrast','As a result','Meanwhile','Similarly','Rather than','although','because','yet','but','so','also'];
   return (l.discourse||[]).map((d,i)=>{
    const source=locate(l,d.expression,d.paragraph_id);
    const reviewed=(l.cloze||[]).find(q=>q.answer.toLowerCase()===d.expression.toLowerCase()&&q.paragraph_id===d.paragraph_id);
    const correct=d.expression;
    // Different logical functions produce unambiguous exam-style distractors.
    const group=t=>{
      const x=t.trim().toLowerCase();
      if(['however','nevertheless','yet','but','although','in contrast','on the other hand','rather than','instead'].includes(x))return 'contrast';
      if(['therefore','as a result','consequently','so','thus','hence'].includes(x))return 'result';
      if(['for example','for instance','such as'].includes(x))return 'example';
      if(['in addition','moreover','furthermore','also','besides'].includes(x))return 'addition';
      if(['because','since','because of'].includes(x))return 'reason';
      if(['meanwhile','afterwards','then','as soon as'].includes(x))return 'time';
      if(['similarly','likewise'].includes(x))return 'similarity';
      if(['in other words','that is'].includes(x))return 'restatement';
      return 'other';
    };
    const correctGroup=group(correct);
    const broad=[...new Set([...(reviewed?.options||[]),...bank,'Because','Meanwhile','In other words','Similarly'])];
    const candidates=mix(broad.filter(x=>x.toLowerCase()!==correct.toLowerCase()&&group(x)!==correctGroup),l.id+':dgroups:'+i);
    const distinct=[],used=new Set([correctGroup]);
    for(const x of candidates){const grp=group(x);if(used.has(grp))continue;used.add(grp);distinct.push(x);if(distinct.length===3)break;}
    const answer=options(correct,distinct,l.id+':discourse:'+i);
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
    return {id:'p-'+i,mode,index:i,prompt:'本文の下線部と同じ意味になる英文表現を選びなさい。',
     subprompt:'本文の英文を読み、意味が変わらない言い換えを選んでください。',...ans,explanation:p.explanation_ja+' ／ 言い換え：'+p.rewrite,
     source:locate(l,p.source),sourceText:p.source,sourceStyle:'underline'};
   });
  }
  if(mode==='grammar'){
    // Answer choices are short grammatical functions; detailed explanations
    // remain hidden until the student submits an answer.
    const roles=[
      ['indirect','間接疑問・疑問詞を含む名詞節'],
      ['relative','関係代名詞による名詞の修飾'],
      ['relative-adverb','関係副詞による場所・時などの説明'],
      ['passive','受動態（〜される）'],
      ['conditional','条件を表す節'],
      ['time','時を表す副詞節'],
      ['comparison','比較・対比の表現'],
      ['negation','否定・部分否定の表現'],
      ['gerund','動名詞の用法'],
      ['infinitive','to不定詞の用法'],
      ['means','手段を表す表現'],
      ['concession','譲歩を表す節'],
      ['noun','名詞節・内容を示すthat節'],
      ['coordination','接続詞による語句・節の並列'],
      ['participle','分詞による修飾'],
      ['cause','理由・結果を表す構文'],
      ['emphasis','強調・限定を表す表現']
    ];
    function category(g){
      const x=String(g.explanation_ja||'').toLowerCase(),f=String(g.focus||'').toLowerCase();
      if(['時を表す副詞節','時を示す副詞節','when＋'].some(t=>x.includes(t)))return 'time';
      if(['not mean that','誤解を明確に否定','誤った解釈を排除','not ... by itself','部分否定'].some(t=>x.includes(t)))return 'negation';
      if(x.includes('however')&&x.includes('接続副詞'))return 'comparison';
      if(['間接疑問','疑問詞を含む'].some(t=>x.includes(t)))return 'indirect';
      if(['関係副詞','whereが','whereは','whereで始まる関係'].some(t=>x.includes(t)))return 'relative-adverb';
      if(['関係代名詞','関係詞節','継続用法','whoが'].some(t=>x.includes(t)))return 'relative';
      if(x.includes('動名詞'))return 'gerund';
      if(x.includes('to不定詞')||x.includes('不定詞'))return 'infinitive';
      if(x.includes('受動態')||x.includes('受身'))return 'passive';
      if(['条件節','if節','条件を表','仮定法','仮定的'].some(t=>x.includes(t)))return 'conditional';
      if(['譲歩','although','even though'].some(t=>x.includes(t)))return 'concession';
      if(['部分否定','not necessarily','not always'].some(t=>x.includes(t)))return 'negation';
      if(['比較','対比','rather than','not a but b','not only'].some(t=>x.includes(t)))return 'comparison';
      if(['手段','by＋','by+','without＋','without+'].some(t=>x.includes(t)))return 'means';
      if(['名詞節','that節','同格'].some(t=>x.includes(t)))return 'noun';
      if(['分詞構文','現在分詞','過去分詞'].some(t=>x.includes(t)))return 'participle';
      if(['接続詞','並列','動詞describeとcommunicate'].some(t=>x.includes(t)))return 'coordination';
      if(['理由・原因','理由を示す接続詞'].some(t=>x.includes(t)))return 'cause';
      if(['因果関係','理由を示','結果を示'].some(t=>x.includes(t)))return 'cause';
      if(['限定','強調','対象の範囲'].some(t=>x.includes(t)))return 'emphasis';
      if(f.includes('not necessarily')||f.includes('not always'))return 'negation';
      if(f.includes('rather than')||f.includes('not only'))return 'comparison';
      if(f.includes('where '))return 'relative-adverb';
      return 'emphasis';
    }
    return (l.grammar||[]).map((g,i)=>{
      const kind=category(g),correct=roles.find(r=>r[0]===kind)[1];
      const ans=options(correct,roles.filter(r=>r[0]!==kind).map(r=>r[1]),l.id+':grammar-v2:'+i);
      return {id:'g2-'+i,mode,index:i,
       prompt:'下線部の文法・構文上の働きとして、最も適切なものを選びなさい。',
       subprompt:'本文の一文と下線部を確認してください。',
       ...ans,explanation:g.explanation_ja,
       source:locate(l,g.focus,g.paragraph_id,g.sentence_index)||locate(l,g.focus,g.paragraph_id),
       sourceText:g.focus,sourceStyle:'underline'};
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
