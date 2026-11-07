/* Copeak Senior Grammar Visual Guide: conservative, FACT-based structure segmentation.
 * Never modifies original reading, model audio, masked spans, or scoring text.
 * For ambiguous structures use a neutral "まとまり" label instead of asserting a wrong S/V/O.
 */
(function(root,factory){'use strict';const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;if(root)root.CopeakSeniorVisual=api;})(typeof window!=='undefined'?window:(typeof globalThis!=='undefined'?globalThis:null),function(){'use strict';
const FRONT=/^(If|Unless|When|While|Although|Though|Because|Before|After|Once|Whenever|Wherever|Even if|Even though|As soon as|As long as)\b/i;
const DEPEND=/\b(because|although|though|while|whereas|unless|until|whenever|once|if|as soon as|as long as)\b/i;
const AUX=new Set(('am is are was were be been being have has had do does did will would can could may might must shall should ought').split(' '));
const LINK=new Set(('am is are was were be been being seem seems seemed become becomes became look looks looked feel feels felt sound sounds sounded appear appears appeared remain remains stayed stay taste tastes smelled smell grow grew get got').split(' '));
const FINITE=new Set(('ask asks asked answer answers answered arrive arrives arrived become becomes became begin begins began believe believes believed belong belongs belonged bring brings brought build builds built buy buys bought call calls called change changes changed choose chooses chose come comes came continue continues continued cost costs create creates created decide decides decided delay delays delayed depend depends depended die dies died discuss discusses discussed eat eats ate enjoy enjoys enjoyed explain explains explained fall falls fell feel feels felt find finds found finish finishes finished follow follows followed forget forgets forgot freeze freezes froze get gets got give gives gave go goes went grow grows grew happen happens happened hate hates hated hear hears heard help helps helped hold holds held hope hopes hoped improve improves improved include includes included join joins joined keep keeps kept know knows knew land lands landed learn learns learned leave leaves left lend lends lent let lets like likes liked live lives lived look looks looked lose loses lost love loves loved make makes made mean means meant meet meets met move moves moved need needs needed offer offers offered open opens opened own owns owned pass passes passed pay pays paid play plays played prefer prefers preferred practice practices practiced promise promises promised put puts read reads reach reaches reached realize realizes realized remain remains remained remember remembers remembered remind reminds reminded repeat repeats repeated return returns returned run runs ran say says said see sees saw seem seems seemed send sends sent set sets show shows showed sing sings sang sit sits sat sleep sleeps slept smile smiles smiled sound sounds sounded speak speaks spoke spend spends spent stand stands stood start starts started stay stays stayed stop stops stopped study studies studied surprise surprises surprised take takes took talk talks talked teach teaches taught tell tells told think thinks thought throw throws threw touch touches touched travel travels traveled try tries tried turn turns turned understand understands understood use uses used visit visits visited wait waits waited walk walks walked want wants wanted watch watches watched win wins won work works worked worry worries worried write writes wrote').split(' '));
const PREP=new Set(('about above across after against along among around at before behind below beneath beside between beyond by during for from in inside into near of on onto out outside over since through throughout to toward towards under until up upon with within without').split(' '));
const TIME=new Set(('today tomorrow yesterday tonight now then always often usually sometimes never already just still recently soon earlier later daily weekly').split(' '));
const DET=new Set(('a an the my your his her its our their this that these those some any each every many much few little several no one two three four five').split(' '));
const REL=new Set(('who whom whose which that where when why').split(' '));
const VERBING=/^[a-z]{3,}ing$/i;
const wordTokens=s=>[...s.matchAll(/[A-Za-z]+(?:['’][A-Za-z]+)?|\d+(?:\.\d+)?/g)].map(m=>({t:m[0],w:m[0].toLowerCase(),start:m.index,end:m.index+m[0].length}));
function emit(text,tokens,a,b,label,kind){
 if(a>=b||!tokens[a]||!tokens[b-1])return null;
 const str=text.slice(tokens[a].start,tokens[b-1].end).trim();
 return str?{text:str,label,kind}:null;
}
function range(text,a,b,label,kind){const str=text.slice(a,b).trim().replace(/[,;]\s*$/,'').trim();return str?{text:str,label,kind}:null;}
function point(title,hint,kind){
 const clean=String(title||'').replace(/^FACT\s*\d+\s*[・·.:-]\s*/,'');
 if(kind==='clause')return '節の境界と主節との関係を意識して音読';
 if(kind==='relative')return '関係詞節は直前の名詞を説明する';
 if(/仮定法|ifを使わない仮定/.test(clean))return '仮定の部分と結果の部分を分けて読む';
 if(/不定詞/.test(clean))return 'to不定詞のまとまりと働きに注目';
 if(/動名詞/.test(clean))return '動詞-ingのまとまりが文のどこで働くか';
 if(/受動態/.test(clean))return 'be動詞と過去分詞をひとまとまりで読む';
 if(/比較/.test(clean))return '比較する対象と比較表現のまとまりに注目';
 if(/現在完了|過去完了|未来完了|完了進行/.test(clean))return '完了形の動詞のまとまりと時間の関係';
 if(/節|接続詞|関係詞/.test(clean))return '節の始まりと終わりを意識する';
 if(/前置詞/.test(clean))return '前置詞から始まるまとまりに注目';
 if(hint&&String(hint).length<=38)return String(hint).replace(/\s*\/\s*/g,'・');
 return clean.length<=35?clean:'主語・動詞と重要表現のつながりを意識';
}
function hasFinite(list){return list.some(t=>AUX.has(t.w)||FINITE.has(t.w)||/^[a-z]{3,}(?:ed|ies)$/.test(t.w));}
function finiteIndex(tokens,after=0){
 for(let i=after;i<tokens.length;i++){
  const w=tokens[i].w,prev=tokens[i-1]?.w||'';
  if(prev==='to')continue;
  if(w==='that'&&i===0)continue;
  if(AUX.has(w)||FINITE.has(w))return i;
  if(/^[a-z]{3,}(?:ed|ies)$/.test(w)&&i>0)return i;
 }
 return -1;
}
function verbEnd(tokens,start){
 let i=start+1;
 if(AUX.has(tokens[start].w)){
  if(['not','never','always','often','already','just','still','really','usually'].includes(tokens[i]?.w))i++;
  if(['to','be','been','being','have','had','has','going','able'].includes(tokens[i]?.w))i++;
  if(['to','be','been','being','have','had'].includes(tokens[i]?.w))i++;
  if(tokens[i]&&(FINITE.has(tokens[i].w)||VERBING.test(tokens[i].w)||/ed$/.test(tokens[i].w)||['known','seen','done','made','told','given','taken','written','built','born','gone','read','got','found','left'].includes(tokens[i].w)))i++;
  if(tokens[i]&&VERBING.test(tokens[i].w)&&['be','been','being'].includes(tokens[i-1]?.w))i++;
 }
 return Math.min(i,tokens.length);
}
function neutralFocus(text,core,meta){
 const focus=core?.focusRanges?.(text,{title:meta.title||'',hint:meta.hint||''})||[];
 const best=focus.find(f=>f.start>=0&&f.end<=text.length&&text.slice(f.start,f.end).trim());
 const end=text.replace(/[.!?]+\s*$/,'').length;
 if(best&&best.start<best.end){
  const parts=[
   range(text,0,best.start,'前のまとまり','basic'),
   range(text,best.start,best.end,'注目表現','focus'),
   range(text,best.end,end,'後ろのまとまり','basic')
  ].filter(Boolean);
  if(parts.length>1)return parts;
 }
 return [{text:text.slice(0,end),label:'文全体',kind:'basic'}];
}
function splitSubjectModifiers(text,tokens,v){
 const subj=tokens.slice(0,v);
 // A postposed participle takes priority over a preposition nested inside that participial phrase.
 const participle=subj.findIndex((t,i)=>i>=1&&['waiting','standing','sitting','reading','sleeping','written','taken','built','running','living','wearing','speaking','working'].includes(t.w));
 const idx=participle>=0?participle:subj.findIndex((t,i)=>i>=1&&['near','under','on','in','at','from','with','behind','beside','between','who','which','that'].includes(t.w));
 if(idx<0||idx===v-1)return [emit(text,tokens,0,v,'主語 S','subject')].filter(Boolean);
 const head=emit(text,tokens,0,idx,'主語 S','subject');
 const tail=emit(text,tokens,idx,v,'名詞を修飾','phrase');
 return [head,tail].filter(Boolean);
}
function analyze(sentence,meta){
 const text=String(sentence||'').trim();
 const tokens=wordTokens(text),title=String(meta.title||''),hint=String(meta.hint||''),core=meta.core;
 if(!tokens.length)return null;
 const trimmed=text.replace(/[.!?]+\s*$/,'');
 const simpleReturn=(parts,note,link=null,confidence='high')=>({segments:parts.filter(Boolean),note:note||point(title,hint),relation:link,confidence});
 // Fronted subordinator with a comma, only if the second half has a subject and verb.
 const comma=text.indexOf(',');
 if(FRONT.test(text)&&comma>0&&comma<text.length-4&&hasFinite(wordTokens(text.slice(comma+1)))){
  const subordinate=range(text,0,comma,'条件・時などの副詞節','clause');
  const main=range(text,comma+1,trimmed.length,'主節','subject');
  if(subordinate&&main){
   const marker=text.match(FRONT)?.[1].toLowerCase();
   const relation={sourceText:subordinate.text,targetText:main.text,label:marker.includes('if')||marker==='unless'?'条件を説明':marker==='because'?'理由を説明':marker==='although'||marker==='though'?'譲歩の関係':'時・状況を説明'};
   return simpleReturn([subordinate,main],point(title,hint,'clause'),relation);
  }
 }
 // Postposed adverbial clause: because / if / although etc; retain the whole clause.
 const tail=text.slice(1).match(DEPEND);
 if(tail){
  const start=tail.index+1,sub=wordTokens(text.slice(start+tail[0].length));
  if(start>7&&sub.length>=2&&hasFinite(sub)){
   const left=range(text,0,start,'主節','subject'),right=range(text,start,trimmed.length,'副詞節','clause');
   if(left&&right)return simpleReturn([left,right],point(title,hint,'clause'),{sourceText:right.text,targetText:left.text,label:'主節の条件・理由・時を説明'});
  }
 }
 // Relative clauses with clear main-clause finite verbs.
 const relativeAt=tokens.findIndex((t,i)=>i>0&&i<tokens.length-3&&REL.has(t.w)&&(t.w!=='that'||/関係詞|関係代名詞|修飾|関係副詞/.test(title)));
 if(relativeAt>0&&(/関係|修飾|分詞|文型/.test(title)||/関係/.test(hint))){
  const root=tokens.findIndex((t,i)=>i>relativeAt+2&&['is','are','was','were','will','would','can','could','has','have','had','seems','became'].includes(t.w));
  if(root>relativeAt+2&&tokens[root+1]){
   const head=emit(text,tokens,0,relativeAt,'主語 S','subject');
   const clause=emit(text,tokens,relativeAt,root,'関係詞節','clause');
   const verb=emit(text,tokens,root,verbEnd(tokens,root),'動詞 V','focus');
   const tail=emit(text,tokens,verbEnd(tokens,root),tokens.length,'補語・残り','basic');
   if(head&&clause&&verb)return simpleReturn([head,clause,verb,tail],point(title,hint,'relative'),{sourceText:clause.text,targetText:head.text,label:'直前の名詞を修飾'});
  }
 }
 // "That ...", "Whether ..." and "What ..." beginning the sentence: subject clause.
 if(/^(That|Whether|What)\b/i.test(text)&&/主語|節|名詞節/.test(title)){
  const v=tokens.findIndex((t,i)=>i>=3&&['surprised','made','is','are','was','were','takes','matters','seems','became'].includes(t.w));
  if(v>=3){
   const subj=emit(text,tokens,0,v,'主語となる節','clause'),verb=emit(text,tokens,v,verbEnd(tokens,v),'動詞 V','focus'),rest=emit(text,tokens,verbEnd(tokens,v),tokens.length,'後ろの要素','basic');
   if(subj&&verb)return simpleReturn([subj,verb,rest],'節全体が主語の働きをする');
  }
 }
 // Questions/imperatives have non-SVO surface order; do not assign misleading roles.
 if(/^(?:What|Who|Whom|Whose|Which|Where|When|Why|How)\b/i.test(text)||/^(?:Are|Is|Was|Were|Do|Does|Did|Can|Could|Will|Would|Should|Shall|May|Have|Has|Had)\b/i.test(text)){
  const prefix=tokens[0],leading=emit(text,tokens,0,1,/^(?:What|Who|Whom|Whose|Which|Where|When|Why|How)$/i.test(prefix.t)?'疑問詞':'疑問の語順','focus');
  const rest=emit(text,tokens,1,tokens.length,'後ろのまとまり','basic');
  return simpleReturn([leading,rest],point(title,hint));
 }
 // Subject and finite verb, with confidence limited to recognizable verb forms.
 const v=finiteIndex(tokens);
 if(v<=0||v>10)return simpleReturn(neutralFocus(text,core,meta),point(title,hint),null,'limited');
 const startSubject=tokens[0].w;
 // The to-infinitive or gerund can itself be a complete subject.
 const subject=/^(to|reading|learning|studying|working|speaking|watching|playing|having|being)$/.test(startSubject)&&/主語|動名詞|不定詞/.test(title)
  ?[emit(text,tokens,0,v,'主語 S（句）','phrase')]
  :splitSubjectModifiers(text,tokens,v);
 const ve=verbEnd(tokens,v),mainVerb=tokens[v].w;
 const verb=emit(text,tokens,v,ve,'動詞 V','focus');
 if(!verb)return simpleReturn(neutralFocus(text,core,meta),point(title,hint),null,'limited');
 const after=tokens.length-ve;const parts=[...subject,verb];
 if(after>0){
  const remainder=tokens.slice(ve);
  const first=remainder[0].w;
  if(first==='that'||first==='whether'||(['what','how','why','where','when'].includes(first)&&/節|間接疑問|レポート|話法/.test(title))){
   parts.push(emit(text,tokens,ve,tokens.length,'目的語となる節','clause'));
  }else if((PREP.has(first)&&first!=='to')||TIME.has(first)||['every','last','next','this'].includes(first)&&/^(?:day|week|month|year|summer|winter|spring|autumn|fall|morning|evening|night|friday|sunday|monday)$/i.test(remainder[1]?.w||'')){
   parts.push(emit(text,tokens,ve,tokens.length,'修飾語 M','modifier'));
  }else{
   let split=-1;
   for(let i=ve+1;i<tokens.length;i++){
    const t=tokens[i].w;
    if((PREP.has(t)&&t!=='of'&&t!=='to')||TIME.has(t)||['every','last','next'].includes(t)&&/^(?:day|week|month|year|summer|winter|spring|autumn|fall|morning|evening|night)$/i.test(tokens[i+1]?.w||'')){split=i;break;}
   }
   // Relative clause attached to the noun in an object or complement.
   if(/関係/.test(title)){
    const rel=remainder.findIndex((t,i)=>i>=1&&REL.has(t.w));
    if(rel>=1){
     const head=emit(text,tokens,ve,ve+rel,LINK.has(mainVerb)?'補語 C':'目的語 O',LINK.has(mainVerb)?'complement':'object');
     const clause=emit(text,tokens,ve+rel,tokens.length,'関係詞節','clause');
     if(head&&clause){
      parts.push(head,clause);
      return simpleReturn(parts,point(title,hint,'relative'),{sourceText:clause.text,targetText:head.text,label:'直前の名詞を修飾'});
     }
    }
   }
   const linking=LINK.has(mainVerb)||['is','are','am','was','were'].includes(mainVerb);
   // A transfer verb with a pronoun recipient and subsequent noun phrase.
   if(/第4文型|授与|SVOO|人\s*\+\s*物/.test(title)&&['give','gives','gave','send','sent','show','showed','tell','told','lend','lent','offer','offered','buy','bought','make','made'].includes(mainVerb)&&remainder.length>=3){
    const target=remainder.findIndex((t,i)=>i>0&&DET.has(t.w));
    if(target>0){
     parts.push(emit(text,tokens,ve,ve+target,'目的語 O₁','object'));
     parts.push(emit(text,tokens,ve+target,tokens.length,'目的語 O₂','object'));
     return simpleReturn(parts,point(title,hint));
    }
   }
   const role=/不定詞|動名詞|節/.test(title)&&/^to\b/.test(first)?'目的語 O':linking?'補語 C':'目的語 O';
   const roleKind=/不定詞|動名詞|節/.test(title)&&/^to\b/.test(first)?'phrase':linking?'complement':'object';
   if(split>ve&&split<tokens.length){
    parts.push(emit(text,tokens,ve,split,role,roleKind));
    parts.push(emit(text,tokens,split,tokens.length,'修飾語 M','modifier'));
   }else{
    parts.push(emit(text,tokens,ve,tokens.length,role,roleKind));
   }
  }
 }
 const rel=subject.length>1?{sourceText:subject[1].text,targetText:subject[0].text,label:'名詞を修飾'}:null;
 return simpleReturn(parts,point(title,hint),rel);
}
function get(id,sentence,meta={}){
 if(!/^HS-\d{2}-(?:\d{3}|EX-[A-Z])-\d{2}$/.test(String(id||'')))return null;
 const text=String(sentence||'').trim();if(!text)return null;
 const result=analyze(text,meta);if(!result?.segments?.length)return null;
 // Every segment must quote a substring of the untouched sentence (no inserted brackets).
 if(result.segments.some(p=>!p.text||!text.includes(p.text)))return null;
 return Object.freeze({id,segments:result.segments,note:result.note,relation:result.relation,confidence:result.confidence});
}
return Object.freeze({get});
});
