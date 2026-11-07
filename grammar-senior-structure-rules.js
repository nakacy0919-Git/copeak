/* Explicit, cautious structure rules. All displayed spans are source substrings. */
(function(root,factory){const a=factory();if(typeof module==='object'&&module.exports)module.exports=a;if(root)root.CopeakSeniorStructureRules=a;})(typeof window==='undefined'?globalThis:window,function(){'use strict';
const verbs=/\b(let|lets|make|makes|made|have|has|had|get|gets|got|keep|keeps|kept|call|calls|called|name|names|named|elect|elected|find|finds|found|consider|considered|leave|leaves|left|see|sees|saw|watch|watches|watched|hear|hears|heard|notice|noticed|feel|feels|felt|want|wants|wanted|allow|allows|allowed|expect|expects|expected|ask|asks|asked|tell|tells|told|persuade|persuaded|remind|reminded|advise|advised|help|helps|helped|force|forced|encourage|encouraged|order|ordered|invite|invited|teach|taught|give|gives|gave|show|shows|showed|send|sends|sent|lend|lent|offer|offered|promise|promised|buy|bought|take|takes|took|cost|costs|pay|paid)\b/gi;
const svoc=new Set('let lets make makes made have has had get gets got keep keeps kept call calls called name names named elect elected find finds found consider considered leave leaves left see sees saw watch watches watched hear hears heard notice noticed feel feels felt want wants wanted allow allows allowed expect expects expected ask asks asked tell tells told persuade persuaded remind reminded advise advised help helps helped force forced encourage encouraged order ordered invite invited teach taught'.split(' '));
const ditrans=new Set('give gives gave show shows showed send sends sent tell tells told lend lent teach taught offer offered promise promised buy bought take takes took cost costs pay paid ask asks asked'.split(' '));
const complementVerbs=new Set('laugh run cry smile join use choose check carry read think change sing dance swim jump knock play be feel study leave improve bring buy learn teach practice make go get see hear watch notice walk open close lock eat drink write paint draw explain help show tell sit stand wait work cross enter keep find taste become grow know have try start finish solve arrive clean call listen share send do fly move'.split(' '));
const presentParticiples=new Set('playing reading running walking standing waiting sitting laughing crying singing sleeping studying working watching writing swimming shaking growing learning cooking painting building living trying improving practicing making being called'.split(' '));
const adjectives=new Set('happy nervous clean open closed ready quiet safe honest better excited asleep awake alive comfortable anxious angry proud interesting exciting worried tired afraid beautiful correct possible necessary difficult easy hard important useful glad sad empty silent available disappointed responsible confident president lucky strange sweet bright warm cool unusual clear calm pleased relaxed helpful wonderful nice healthy sick busy confident'.split(' '));
const seg=(s,label,kind)=>{const text=String(s||'').trim().replace(/[.!?]+$/,'');return text?{text,label,kind}:null};
const output=(parts,note)=>({segments:parts.filter(Boolean),note,relation:null,confidence:'verified'});
const tidy=s=>String(s||'').trim().replace(/[.!?]+$/,'').trim();
function parseOC(rest,mode){
 const words=tidy(rest).split(/\s+/);if(words.length<2)return null;
 const lower=words.map(x=>x.toLowerCase().replace(/[.,!?]+$/,''));
 let split=-1;
 // If O is a pronoun followed by an adjective and an infinitive, adjective belongs to C.
 if(['me','you','him','her','us','them','it','everyone','someone','anyone','himself','herself','yourself'].includes(lower[0])&&adjectives.has(lower[1]))split=1;
 if(split<0&&(mode==='to'||mode==='mixed')){
  split=lower.findIndex((w,i)=>i>0&&w==='to'&&complementVerbs.has(lower[i+1]));
 }
 if(split<0&&mode!=='to'){
  const pp=new Set('cut repaired fixed written broken closed open painted found made known taken finished stolen damaged soaked called left'.split(' '));
  split=lower.findIndex((w,i)=>i>0&&(complementVerbs.has(w)||presentParticiples.has(w)||pp.has(w))&&
    (i===1||words.slice(0,i).length<=7));
 }
 if(split<0&&mode!=='to'&&adjectives.has(lower[lower.length-1]))split=lower.length-1;
 if(split<0&&mode!=='to'&&/^[A-Z][a-z]{2,}$/.test(words[words.length-1]))split=words.length-1;
 if(split<1||split>7)return null;
 const object=words.slice(0,split).join(' ');
 let compWords=words.slice(split),tail=null;
 const timeIndex=compWords.findIndex((w,i)=>i>0&&/^(?:yesterday|today|tomorrow|tonight)$/i.test(w));
 if(timeIndex>0){tail=compWords.slice(timeIndex).join(' ');compWords=compWords.slice(0,timeIndex);}
 const complement=compWords.join(' ');
 if(!object||!complement)return null;
 return {object,complement,tail};
}
function imperative(text,title){
 const s=tidy(text);
 let match=s.match(/^(Let['’]s)\s+(.+)$/i);
 if(match)return output([seg(match[1],'勧誘表現','focus'),seg(match[2],'動詞句','phrase')],'Let’s + 動詞の原形で勧誘');
 const isCommand=/命令文|禁止の命令|丁寧な命令|使役構文：let/.test(title)||/^(?:Please |Don['’]t |Never |Let me )/i.test(s);
 if(!isCommand)return null;
 match=s.match(/^(Please\s+)?(Don['’]t\s+|Never\s+)?(Let|Close|Open|Take|Read|Write|Check|Try|Be|Look|Wait|Speak|Go|Come|Tell|Ask|Give|Show|Stop|Help|Keep|Listen|Use|Send|Do|Make|Have|Bring|Share|Pass|Call)\b\s*(.*)$/i);
 if(!match)return null;
 const [,please,negative,verb,rest]=match;
 const bits=[please?seg(please,'丁寧表現','modifier'):null,negative?seg(negative,'否定・禁止','modifier'):null,seg(verb,'動詞 V','focus')];
 if(rest){
  const oc=/^(?:let|make|have|keep)$/i.test(verb)?parseOC(rest,'mixed'):null;
  if(oc)bits.push(seg(oc.object,'目的語 O','object'),seg(oc.complement,'補語 C','complement'),oc.tail?seg(oc.tail,'修飾語 M','modifier'):null);
  else bits.push(seg(rest,/^be$/i.test(verb)?'補語・説明':'後ろのまとまり','basic'));
 }
 return output(bits,/^let$/i.test(verb)&&bits.some(b=>b?.kind==='complement')?'let ＋ O ＋ 動詞の原形（SVOC）':'命令文：主語 you は省略');
}
function existential(text,title){
 const s=tidy(text),m=s.match(/^(There)\s+(is|are|was|were|isn't|aren't|wasn't|weren't)\s+(.+)$/i);
 if(!m)return null;
 const location=m[3].match(/^(.+?)\s+((?:in|at|near|behind|under|on|beside|between|by|around|outside|inside)\s+.+)$/i);
 return output([seg(m[1],'導入語','basic'),seg(m[2],'動詞 V','focus'),seg(location?location[1]:m[3],'主語 S（存在するもの）','subject'),location?seg(location[2],'場所など M','modifier'):null],'There ＋ be動詞 ＋ 主語の存在構文');
}
function getVerb(s){
 for(const m of s.matchAll(verbs)){
  const front=s.slice(0,m.index).trim();
  if(!front||front.length>90||/[.!?,;]\s+[A-Z]/.test(front)||/\b(?:that|who|which|when|because|if)\b/i.test(front))continue;
  if(/^Please$|^Never$|^Don['’]t$/i.test(front)||/\bto$/i.test(front))continue;
  const aux=front.match(/^(.*?)\s+((?:will|would|can|could|should|shall|may|might|must|do|does|did|have|has|had)(?:\s+not)?)(?:\s+(always|never))?$/i);
  let subject=front,verb=m[0];
  if(aux&&aux[1]){subject=aux[1].trim();verb=aux[2]+(aux[3]?' '+aux[3]:'')+' '+m[0]}
  if(!subject||/^(?:Please|Never|Let['’]s)$/i.test(subject))continue;
  return {subject,verb,w:m[0].toLowerCase(),rest:s.slice(m.index+m[0].length).trim()};
 }
 return null;
}
function complex(sentence,title){
 const s=tidy(sentence);if(/^(?:If|When|Because|Although|As|Unless|Whether|What|Who|Where|Why|How|Would|Could|Can|Will|Do|Does|Did|Had|Were|Should)\b/i.test(s))return null;
 if(/,\s+(?:so|but|and|or)\b/i.test(s))return null;
 if(/(?:[.!?]\s+[A-Z])|^["“]/.test(s))return null;
 const x=getVerb(s);if(!x||!x.rest)return null;
 const {subject,verb,w,rest}=x;
 // "give a book to her" contains only one direct object, not two.
 if(/(?:授与|to・for|前置詞)/.test(title)&&/^(?:give|gives|gave|show|shows|showed|send|sends|sent|buy|bought|made|make|makes|offer|offered|tell|told|explain|explained)$/.test(w)){
  const m=rest.match(/^(.+?)\s+((?:to|for)\s+.+)$/i);
  if(m&&m[1].split(/\s+/).length<=8)return output([seg(subject,'主語 S','subject'),seg(verb,'動詞 V','focus'),seg(m[1],'目的語 O','object'),seg(m[2],'相手・受け手（前置詞句）','modifier')],'to / for 以下は目的語 O₂ ではなく前置詞句');
 }
 // Perfect tense is not the causative verb have: "have already finished" must keep V together.
 if(/^(?:have|has|had)$/i.test(w)&&/^(?:already|never|just|recently|finally|always|often)\s+(?:\w+ed|seen|done|known|gone|made|taken|written|been|left|bought|found|got|read)\b/i.test(rest))return null;
 if(ditrans.has(w)){
  const m=rest.match(/^(me|you|him|her|us|them|my\s+\w+|your\s+\w+|his\s+\w+|her\s+\w+|our\s+\w+|their\s+\w+)\s+(.+)$/i);
  if(m&&(/^(?:a|an|the|some|another|two|three|four|five|all|that|this|\d+)\b/i.test(m[2])||
      /(?:第4文型|授与|take・cost|レポート文の発展)/.test(title)||/^that\b/i.test(m[2]))){
   return output([seg(subject,'主語 S','subject'),seg(verb,'動詞 V','focus'),seg(m[1],'目的語 O₁','object'),seg(m[2],/^that\b/i.test(m[2])?'目的語 O₂（節）':'目的語 O₂','object')],'第4文型：O₁が人・相手、O₂が物・内容');
  }
 }
 if(svoc.has(w)){
  // 'have' as perfect auxiliary or possession is not causative SVOC.
  if(/^(?:have|has|had)$/i.test(w)&&!/使役|第5文型|目的語説明型/.test(title))return null;
  const mode=/^(?:want|wants|wanted|allow|allows|allowed|expect|expects|expected|ask|asks|asked|tell|tells|told|persuade|persuaded|remind|reminded|advise|advised|force|forced|encourage|encouraged|order|ordered|invite|invited)$/.test(w)?'to':
   /^(?:let|lets|make|makes|made|have|has|had|see|sees|saw|watch|watches|watched|hear|hears|heard|notice|noticed|feel|feels|felt)$/.test(w)?'bare':'mixed';
  const oc=parseOC(rest,mode);
  if(oc){
   // Avoid treating a noun modified by a participle as SVOC outside structural topics.
   const isSVOCcontext=/(?:第5文型|目的語説明型|使役|知覚|tell・ask|want・allow|persuade|説明語句|it＋to不定詞)/.test(title);
   const clearNonfinite=/^(?:to\s+\w+|\w+ing\b|\w+ed\b|join\b|run\b|cry\b|laugh\b|check\b|carry\b|use\b|choose\b|read\b|explain\b|knock\b|think\b|feel\b|change\b|open\b|close\b|improve\b|study\b|be\b)/i.test(oc.complement);
   if(isSVOCcontext||/^it$/i.test(oc.object)&&adjectives.has(oc.complement.split(/\s+/)[0].toLowerCase())||clearNonfinite&&/^(?:let|make|makes|made|have|had|has|see|saw|watch|watched|hear|heard|feel|felt|notice|noticed|keep|kept|find|found|want|wants|asked|told)$/i.test(w)){
    return output([seg(subject,'主語 S','subject'),seg(verb,'動詞 V','focus'),seg(oc.object,'目的語 O','object'),seg(oc.complement,'補語 C','complement'),oc.tail?seg(oc.tail,'修飾語 M','modifier'):null],
      /^(?:let|lets)$/i.test(w)?'let ＋ O ＋ 動詞の原形（SVOC）。OがCの動作をする':'第5文型：O と C の間に主語・述語の関係がある');
   }
  }
 }
 return null;
}
const risk=(sentence,meta,diagram)=>{
 const parts=diagram?.segments||[];
 if(!parts.length)return true;
 if(parts.some(p=>p.kind==='subject'&&/^(?:Please|Don't|Don’t|Never|Let's|Let’s|There|I'm|I’m)$/i.test(p.text)))return true;
 if(parts.some(p=>p.kind==='object'&&/\b(?:to|for)\s+[^ ]+\s*$/i.test(p.text)))return true;
 const structural=/第5文型|目的語説明型|使役|知覚|tell・ask|want・allow|persuade|第4文型|授与|take・cost/.test(String(meta.title||''));
 if(structural&&parts.some(p=>p.kind==='object'&&p.text.split(/\s+/).length>=4))return true;
 if(parts.some(p=>p.kind==='object'&&p.text.split(/\s+/).length>=9))return true;
 if(/^There\s+(?:is|are|was|were)\b/i.test(sentence)&&parts.some(p=>p.kind==='subject'&&p.text==='There'))return true;
 return false;
};
function coordination(sentence){
 const s=tidy(sentence),m=s.match(/^(.+?),\s+(so|but|and|or)\s+(.+)$/i);
 if(!m)return null;
 return output([
  seg(m[1],'前半の節','clause'),
  seg(m[2]+' '+m[3],m[2].toLowerCase()==='so'?'結果の節':'後半の節','clause')
 ],'2つの節のつながりを意識して読む');
}

function linking(sentence,meta){
 const s=tidy(sentence);
 const m=s.match(/^(.+?)\s+(am|is|are|was|were|smell|smells|smelled|taste|tastes|tasted|sound|sounds|sounded|look|looks|looked|feel|feels|felt|become|becomes|became|remain|remains|remained|seem|seems|seemed|appear|appears|appeared|grow|grows|grew)\s+(.+)$/i);
 if(!m||!m[1]||m[1].split(/\s+/).length>7)return null;
 // Do not mistake a complement inside an earlier SVOC or subordinate clause for the main predicate.
 if(/\b(?:will|would|can|could|should|may|might|must|do|does|did|have|has|had|make|made|makes|said|told|asked|found|knew|knows|thought|when|who|which|because|if|that)\b/i.test(m[1]))return null;
 const words=m[3].split(/\s+/),adverbs=new Set('still very really rather quite too so unusually particularly extremely extremely fairly pretty almost truly totally'.split(' '));
 let index=0;
 while(index<words.length&&adverbs.has(words[index].toLowerCase()))index++;
 if(!adjectives.has(words[index]?.toLowerCase()))return null;
 let end=index+1;
 // Keep adjective complements intact; any remaining time or place phrase is M.
 while(end<words.length&&/^(?:enough|to)$/i.test(words[end])&&end<index+3)end++;
 const comp=words.slice(0,end).join(' ');
 const tail=words.slice(end).join(' ');
 return output([
  seg(m[1],'主語 S','subject'),seg(m[2],'動詞 V','focus'),
  seg(comp,'補語 C','complement'),tail?seg(tail,'修飾語 M','modifier'):null
 ],'第2文型（SVC）：補語Cが主語Sの状態・性質を説明');
}

function get(sentence,meta={}){
 const t=String(meta.title||'');
 return coordination(sentence)||imperative(sentence,t)||existential(sentence,t)||complex(sentence,t)||linking(sentence,meta)||null;
}
return Object.freeze({get,isRisky:risk});
});
