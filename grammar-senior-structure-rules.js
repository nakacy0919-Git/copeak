/* Explicit, cautious structure rules. All displayed spans are source substrings. */
(function(root,factory){const a=factory();if(typeof module==='object'&&module.exports)module.exports=a;if(root)root.CopeakSeniorStructureRules=a;})(typeof window==='undefined'?globalThis:window,function(){'use strict';
const verbs=/\b(let|lets|make|makes|made|have|has|had|get|gets|got|keep|keeps|kept|call|calls|called|name|names|named|elect|elected|find|finds|found|consider|considered|leave|leaves|left|see|sees|saw|watch|watches|watched|hear|hears|heard|notice|noticed|feel|feels|felt|want|wants|wanted|allow|allows|allowed|expect|expects|expected|ask|asks|asked|tell|tells|told|persuade|persuaded|remind|reminded|advise|advised|help|helps|helped|force|forced|encourage|encouraged|order|ordered|invite|invited|teach|taught|give|gives|gave|show|shows|showed|send|sends|sent|lend|lent|offer|offered|promise|promised|buy|bought|take|takes|took|cost|costs|pay|paid)\b/gi;
const svoc=new Set('let lets make makes made have has had get gets got keep keeps kept call calls called name names named elect elected find finds found consider considered leave leaves left see sees saw watch watches watched hear hears heard notice noticed feel feels felt want wants wanted allow allows allowed expect expects expected ask asks asked tell tells told persuade persuaded remind reminded advise advised help helps helped force forced encourage encouraged order ordered invite invited teach taught'.split(' '));
const ditrans=new Set('give gives gave show shows showed send sends sent tell tells told lend lent teach taught offer offered promise promised buy bought take takes took cost costs pay paid ask asks asked'.split(' '));
const complementVerbs=new Set('laugh run cry smile join use choose check carry read think change sing dance swim jump knock play be feel study leave improve bring buy learn teach practice make go get see hear watch notice walk open close lock eat drink write paint draw explain help show tell sit stand wait work cross enter keep find taste become grow know have try start finish solve arrive clean call listen share send do fly move'.split(' '));
const presentParticiples=new Set('playing reading running walking standing waiting sitting laughing crying singing sleeping studying working watching writing swimming shaking growing learning cooking painting building living trying improving practicing making being called flying'.split(' '));
const adjectives=new Set('happy nervous clean open closed ready quiet safe exhausted honest better excited asleep awake alive comfortable anxious angry proud interesting exciting worried tired afraid beautiful correct possible necessary difficult easy hard important useful glad sad empty silent available disappointed responsible confident president lucky strange sweet bright warm cool unusual clear calm pleased relaxed helpful wonderful nice healthy sick busy confident'.split(' '));
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

function infinitive(sentence,meta){
 const title=String(meta.title||''),s=tidy(sentence);
 if(!/^HS-05-/.test(meta.id||''))return null;
 const marker=/\bto\s+[A-Za-z]+/gi;
 const good=new Set('answer arrive ask avoid be become begin buy call carry change check choose clean close come complete cook decide do explain fall feel find finish follow forget get give go greet guide have hear help improve invite join keep know learn leave listen live look love make meet miss move open pass play practice prepare protect read receive remember reply return ride run save say see sell send show sing sit solve speak spend stand start stay stop study submit succeed swim trust take talk teach tell thank think travel try understand use visit wait wake walk watch win work write welcome enjoy'.split(' '));
 let positions=[...s.matchAll(marker)].filter(x=>good.has(x[0].split(/\s+/)[1].toLowerCase())).map(x=>x.index);
 // Distinguish preposition 'to school' from to-infinitives.
 let at=positions[positions.length-1];
 if(at===undefined){
  // With no unambiguous target, do not impose an unverified sentence pattern.
  return output([seg(s,'文全体・重要表現','basic')],title||'不定詞の用法を意識',);
 }
 const firstTo=positions[0];
 const make=(parts,note,relation=null)=>({segments:parts.filter(Boolean),note,relation,confidence:'verified'});
 let before=s.slice(0,at).trim(),after=s.slice(at).trim();
 if(/副詞的用法：結果/.test(title)&&/\bonly$/i.test(before)){
  before=before.replace(/\bonly$/i,'').trim();
  after='only '+after;
 }
 if(/主語になるto不定詞/.test(title)&&s.startsWith('To ')){
  const m=s.match(/^(To\s+.+?)\s+(takes|requires|is|are|was|were|can|will|should|may|might)\s+(.+)$/i);
  if(m)return make([seg(m[1],'主語 S（to不定詞句）','phrase'),seg(m[2]+' '+m[3],'述語部分','basic')],'to不定詞全体が主語');
  return make([seg(s,'主語となるto不定詞を含む文','phrase')],'文頭のto不定詞が主語になる');
 }
 if(/be動詞の説明語句になるto不定詞/.test(title)){
  const m=s.match(/^(.+?)\s+(is|are|was|were)\s+(to\s+.+)$/i);
  if(m)return make([seg(m[1],'主語 S','subject'),seg(m[2],'動詞 V','focus'),seg(m[3],'補語 C（to不定詞）','complement')],'be動詞の後ろのto不定詞が主語の内容を説明');
 }
 if(/it＋to不定詞：主語/.test(title)&&/^It\b/i.test(s)){
  const m=before.match(/^(It)\s+(.+)$/i);
  if(m)return make([seg(m[1],'仮主語 it','subject'),seg(m[2],'主節の中心','basic'),seg(after,'真主語（to不定詞）','phrase')],'後ろのto不定詞が実際の主語');
 }
 if(/it＋to不定詞：目的語/.test(title)){
  const m=before.match(/^(.*?)\s+\b(it)\s+(.+)$/i);
  if(m&&m[1]&&m[3])return make([seg(m[1],'文の前半','basic'),seg(m[2],'仮目的語 O','object'),seg(m[3],'補語 C','complement'),seg(after,'真目的語を説明','phrase')],'it が仮目的語で、to不定詞が内容を説明');
 }
 if(/独立不定詞/.test(title)){
  const comma=s.indexOf(',');
  if(comma>0)return make([seg(s.slice(0,comma),'文全体への前置き','phrase'),seg(s.slice(comma+1),'主節','clause')],'独立不定詞は文全体に対する前置き表現');
 }
 if(/疑問詞＋to不定詞/.test(title)){
  const m=before.match(/\b(what|which(?:\s+\w+){0,2}|when|where|how|who|whether)(?:\s+\w+){0,2}$/i);
  if(m){const head=before.slice(0,before.length-m[0].length);
   return make([seg(head,'文の前半','basic'),seg(m[0]+' '+after,'疑問詞＋to不定詞のまとまり','phrase')],'疑問詞とto不定詞全体で名詞の働き');
  }
 }
 if(/名詞を修飾/.test(title)){
  const head=before.split(/\s+/).at(-1);
  return make([seg(before,'名詞を含む前半','basic'),seg(after,'名詞を修飾するto不定詞','phrase')],
   'to不定詞が直前の名詞の内容・役割を説明',
   head?{sourceText:after,targetText:head,label:'名詞を修飾'}:null);
 }
 if(/目的語になるto不定詞/.test(title)){
  return make([seg(before,'文の前半','basic'),seg(after,'目的語 O（to不定詞）','phrase')],'to不定詞全体が動詞の目的語になる');
 }
 if(/be＋to不定詞/.test(title)){
  const conditional=s.match(/^(If\s+.+?),\s+(.+)$/i);
  if(conditional)return make([seg(conditional[1],'条件節（be＋to）','clause'),seg(conditional[2],'主節','clause')],'条件節にある be ＋ to不定詞に注目');
  return make([seg(before,'主語・be動詞','basic'),seg(after,'be＋to構文の動詞句','phrase')],'be ＋ to不定詞が予定・命令などを表す');
 }
 if(/to不定詞の否定/.test(title)){
  const notBefore=before.match(/\bnot\s*$/i);
  if(notBefore){
   const front=before.slice(0,before.length-notBefore[0].length);
   return make([seg(front,'文の前半','basic'),seg('not '+after,'否定のto不定詞','phrase')],'not をto不定詞の直前に置いて否定');
  }
 }
 if(/too .+ to|可能性・難易度を表す形容詞|そのほかの形容詞/.test(title)){
  return make([seg(before,'主語・動詞・形容詞','basic'),seg(after,'形容詞に続くto不定詞','phrase')],'to不定詞が形容詞の意味を補う');
 }
 if(/副詞的用法|結果・判断|完了形の不定詞|come . get|seem . appear|そのほかの/.test(title)){
  return make([seg(before,'文の前半','basic'),seg(after,'ポイントとなるto不定詞','phrase')],
   /完了形/.test(title)?'to have ＋ 過去分詞のまとまり':/副詞的用法/.test(title)?'to不定詞が目的・理由・結果を表す':'to不定詞をひとまとまりで読む');
 }
 // Default for this chapter: accurately identify the to phrase without guessing SVO roles.
 return make([seg(before,'文の前半','basic'),seg(after,'to不定詞のまとまり','phrase')],title||'to不定詞の働きを意識');
}


function participle(sentence,meta){
 if(!/^HS-07-/.test(meta.id||''))return null;
 const title=String(meta.title||''),raw=tidy(sentence);
 const make=(xs,note,relation=null)=>({segments:xs.filter(Boolean),note,relation,confidence:'verified'});
 const comma=raw.indexOf(',');
 if(/目的語説明型の分詞/.test(title)){
  const svoc=imperative(raw,title)||complex(raw,title);
  if(svoc&&svoc.segments.some(x=>x.kind==='complement'))return svoc;
 }
 if(/付帯状況のwith/.test(title)){
  const m=raw.match(/^(.+?)\s+(with\s+.+)$/i);
  if(m)return make([seg(m[1],'主節・動作','basic'),seg(m[2],'付帯状況（with＋O＋C）','phrase')],
    'withの後ろで同時に起こる状態を説明');
 }
 if(/分詞構文|独立分詞構文|分詞構文を使った慣用表現/.test(title)){
  const pieces=raw.split(',').map(x=>x.trim()).filter(Boolean);
  if(pieces.length===3&&/現在分詞|分詞構文/.test(title)){
   return make([seg(pieces[0],'主語など','subject'),seg(pieces[1],'挿入された分詞句','phrase'),seg(pieces[2],'主節の述語','basic')],
      '分詞句を挟んで、主語と述語がつながる');
  }
  if(comma>0){
   const first=raw.slice(0,comma),second=raw.slice(comma+1);
   const firstClause=/^(?:I|You|He|She|We|They|The|Our|My|His|Her|A|An)\s/i.test(first)&&
     /(?:was|were|is|are|had|closed|stopped|sat|ran|used|looked|worked|displayed|entered|told)\b/i.test(first);
   const firstKind=firstClause?'主節':'分詞構文・独立句';
   const secondKind=firstClause?'分詞句':'主節';
   return make([seg(first,firstKind,firstClause?'clause':'phrase'),seg(second,secondKind,firstClause?'phrase':'clause')],
     /独立/.test(title)?'独立分詞構文は主節と異なる主語を持つ場合がある':'分詞構文は主節の時間・理由・状況などを補足する');
  }
  const ing=raw.match(/\b(?:playing|humming|running|speaking|walking|standing|knowing|having|noticing|looking|working|waiting|watching|reading|laughing|throwing)\b/i);
  if(ing&&ing.index>1)return make([seg(raw.slice(0,ing.index),'主節の中心','basic'),seg(raw.slice(ing.index),'分詞による修飾句','phrase')],
    '分詞が主節の動作に状況を付け加える');
  return make([seg(raw,'分詞構文を含む文','phrase')],'分詞構文の境界を意識して読む');
 }
 if(/現在分詞による名詞の修飾|過去分詞による名詞の修飾/.test(title)){
  const part=raw.match(/\b(?:standing|waiting|sleeping|carrying|crying|taken|written|made|fallen|broken|running|used|painted|stolen|built|surprised|lost|covered)\b/i);
  if(!part)return make([seg(raw,'名詞を修飾する分詞を含む文','phrase')],'分詞が前後の名詞を説明する');
  const before=raw.slice(0,part.index),middle=raw.slice(part.index);
  const headBefore=before.trim().split(/\s+/).at(-1);
  const afterWord=middle.slice(part[0].length).trim().split(/\s+/)[0];
  const preposed=/^(?:A|An|The|My|Our|His|Her)\s*$/i.test(before);
  const link=preposed&&afterWord?
   {sourceText:part[0],targetText:afterWord,label:'直後の名詞を修飾'}:
   headBefore?{sourceText:part[0],targetText:headBefore,label:'名詞を修飾'}:null;
  if(preposed)return make([seg(before,'限定詞','basic'),seg(part[0],/過去/.test(title)?'過去分詞':'現在分詞','phrase'),seg(middle.slice(part[0].length),'名詞と文の続き','basic')],
    '分詞が直後の名詞を修飾する',link);
  const rest=middle.slice(part[0].length);
  const stop=rest.match(/\s+(?=(?:is|are|was|were|look|looks|tastes|taste|seems|seem|became|become)\s)/i);
  if(stop){
   const end=part.index+part[0].length+stop.index;
   return make([seg(before,'被修飾名詞を含む部分','subject'),seg(raw.slice(part.index,end),'名詞を修飾する分詞句','phrase'),seg(raw.slice(end),'主節の述語','basic')],
     '分詞句が前の名詞を説明する',headBefore?{sourceText:raw.slice(part.index,end).trim(),targetText:headBefore,label:'名詞を修飾'}:null);
  }
  return make([seg(before,'前の部分','basic'),seg(part[0],'名詞を修飾する分詞','phrase'),seg(rest,'後ろの部分','basic')],
   '分詞が名詞を修飾する',link);
 }
 if(/感情を表す現在分詞・過去分詞/.test(title)){
  const x=raw.match(/\b(?:surprising|surprised|confusing|confused|exciting|excited|interesting|interested|exhausted|bored|boring|worried|disappointed)\b/i);
  if(x)return make([seg(raw.slice(0,x.index),'文の前半','basic'),seg(x[0],'感情を表す分詞・形容詞','phrase'),seg(raw.slice(x.index+x[0].length),'後ろの部分','basic')],
   '現在分詞は感情を起こすもの、過去分詞は感じる側を表すことが多い');
 }
 if(/説明型に使われる分詞/.test(title)){
  const m=raw.match(/\b(?:kept|remained|stayed|got|is|are|was|were)\s+(\w+(?:ing|ed)|standing|locked|damaged|soaked)\b/i);
  if(m)return make([seg(raw.slice(0,m.index),'主語など','basic'),seg(m[0],'動詞＋分詞のまとまり','focus'),seg(raw.slice(m.index+m[0].length),'残りの説明','basic')],
    '分詞が主語の状態や動作の継続を説明する');
 }
 if(/動詞句の修飾/.test(title)){
  const x=raw.match(/\b(?:preparing|humming|running|decorating|hiking|exhausted|frozen|encouraged|surrounded|covered|sleeping|standing)\b/i);
  if(x)return make([seg(raw.slice(0,x.index),'主節の中心','basic'),seg(raw.slice(x.index),'動詞句を補足する分詞','phrase')],
    '分詞が動作の様子や付帯状況を表す');
 }
 return make([seg(raw,'分詞の働きに注目する文','phrase')],title||'分詞の働きに注目');
}

function relative(sentence,meta){
 if(!/^HS-09-/.test(meta.id||''))return null;
 const title=String(meta.title||''),s=tidy(sentence);
 const emit=(parts,note,relation=null)=>({segments:parts.filter(Boolean),note,relation,confidence:'verified'});
 if(/関係代名詞の省略/.test(title)){
  const patterns={
   'HS-09-169-01':['The book','I bought yesterday','is interesting'],
   'HS-09-169-02':['The girl','we met at the station','is my cousin'],
   'HS-09-169-03':['This is the photo','I took in Kyoto'],
   'HS-09-169-04':['The music','you played','was beautiful'],
   'HS-09-169-05':['The advice','my teacher gave me','changed my mind']
  };
  const chunks=patterns[meta.id];
  if(chunks&&chunks.join(' ')===s){
   const antecedent=chunks[0].split(/\s+/).at(-1);
   return emit(chunks.map((p,i)=>seg(p,i===0?'先行詞を含む部分':i===1?'関係代名詞が省略された修飾節':'主節の述語',
    i===1?'clause':'basic')),'目的格の関係代名詞が省略され、名詞を後ろから修飾する',
    {sourceText:chunks[1],targetText:antecedent,label:'名詞を修飾'});
  }
  return emit([seg(s,'関係詞が省略された文','phrase')],
   '名詞の直後に関係代名詞を省略した修飾節が続く');
 }
 if(/that節/.test(title)){
  if(/^That\s/i.test(s))return emit([seg(s,'that節を含む文','clause')],'that節は主語・目的語・補語・名詞の説明として働く');
  const m=s.match(/\bthat\b/i);
  if(m&&m.index>0){
   const front=s.slice(0,m.index),clause=s.slice(m.index);
   const be=front.match(/^(.+?)\s+(is|are|was|were)\s*$/i);
   if(be)return emit([seg(be[1],'主語 S','subject'),seg(be[2],'動詞 V','focus'),seg(clause,'補語 C（that節）','clause')],'that節全体が補語になる');
   return emit([seg(front,'主節・先行する名詞','basic'),seg(clause,'内容を表すthat節','clause')],'that節全体で一つの内容を表す');
  }
 }
 if(/if \/ whether節/.test(title)){
  const m=s.match(/\b(?:whether|if)\b/i);
  if(m){
   const prior=s.slice(0,m.index),clause=s.slice(m.index);
   return emit([seg(prior,'前の部分','basic'),seg(clause,/\bto\s+\w+/i.test(clause)?'〜かどうかの名詞相当句':'〜かどうかの名詞節','clause')],
    'if / whether は「〜かどうか」を表す名詞節・句。条件のifとは異なる');
  }
 }
 if(/wh節/.test(title)){
  const m=s.match(/\b(?:what|who|which|where|when|why|how)\b/i);
  if(m){
   if(m.index===0){
    const main=s.match(/\b(?:encouraged|surprised|made|matters|is|was|seems)\b/i);
    if(main&&main.index>m[0].length+4){
     return emit([seg(s.slice(0,main.index),'主語 S（wh節）','clause'),seg(s.slice(main.index),'主節の述語','basic')],'間接疑問の節全体が主語');
    }
    return emit([seg(s,'wh節が主語になる文','clause')],'whで始まるまとまりが主語の働きをする');
   }
   return emit([seg(s.slice(0,m.index),'主節','basic'),seg(s.slice(m.index),'間接疑問の名詞節','clause')],'疑問詞で始まる節が一つの名詞の働きをする');
  }
 }
 if(/複合関係詞/.test(title)){
  const comma=s.indexOf(',');
  if(comma>0){
   return emit([seg(s.slice(0,comma),'譲歩などを表す節','clause'),seg(s.slice(comma+1),'主節','clause')],
    '複合関係詞の譲歩表現は主節と分けて読む');
  }
  const first=s.match(/^(Whoever|Whatever|Whichever)\b/i);
  if(first){
   const m=s.match(/\s+(can|will|would|should|must|may|might|is|are|was|were)\s/i);
   if(m)return emit([seg(s.slice(0,m.index),'主語になる節','clause'),seg(s.slice(m.index),'主節の述語','basic')],'複合関係代名詞の節が主語');
  }
  const m=s.match(/\b(?:whoever|whatever|whichever|wherever|whenever)\b/i);
  if(m)return emit([seg(s.slice(0,m.index),'主節・動詞','basic'),seg(s.slice(m.index),/wherever|whenever/i.test(m[0])?'場所・時を表す節':'名詞相当のまとまり','clause')],
    '複合関係詞のまとまり全体の働きを意識する');
  return emit([seg(s,'複合関係詞を含む文','clause')],'複合関係詞の働きを確認する');
 }
 if(/非制限用法|文全体を受けるwhich/.test(title)){
  const internal=s.match(/^(.+?),\s+(.+?),\s+(.+)$/);
  if(internal&&/\b(?:who|whom|whose|which|where|when)\b/i.test(internal[2])){
   const antecedent=internal[1].split(/\s+/).at(-1);
   return emit([
    seg(internal[1],'先行詞を含む部分','basic'),
    seg(internal[2],'非制限用法の関係詞節','clause'),
    seg(internal[3],'主節の続き','basic')
   ],'カンマに挟まれた関係詞節が、先行詞の補足情報を加える',
   {sourceText:internal[2],targetText:antecedent,label:'名詞・時などを補足'});
  }
  const comma=s.indexOf(',');
  if(comma>0){
   const earlier=s.slice(0,comma),later=s.slice(comma+1);
   const head=earlier.trim().split(/\s+/).at(-1);
   const whole=/文全体を受けるwhich/.test(title);
   return emit([seg(earlier,'主節','clause'),seg(later,'非制限用法の関係詞節','clause')],
     whole?'whichは前の文全体を受ける':'カンマに続く関係詞節が補足情報を加える',
     {sourceText:later,targetText:whole?earlier:(head||earlier),label:whole?'前の文全体を補足':'名詞を補足'});
  }
 }
 if(/関係/.test(title)||/制限用法/.test(title)){
  const rx=/\b(who|whom|whose|which|that|where|when|why)\b/gi;
  const matches=[...s.matchAll(rx)];
  const chosen=matches.find(m=>m.index>0)||matches[0];
  if(chosen&&chosen.index>0){
   let start=chosen.index;
   const pre=s.slice(0,start);
   const withPrep=pre.match(/\b(?:to|in|with|for|of)\s*$/i);
   if(withPrep)start=pre.length-withPrep[0].length;
   const prior=s.slice(0,start),after=s.slice(start);
   const head=prior.replace(/[,.\s]+$/,'').split(/\s+/).at(-1);
   const relation=head&&head.length>1?{sourceText:chosen[0],targetText:head,label:'先行する名詞を修飾'}:null;
   // With no verified end boundary, do not label the entire tail a relative clause.
   const label=/(?:which|who|whose|whom|that|where|when|why)/i.test(chosen[0])?'関係詞を含む後続部分':'後ろのまとまり';
   return emit([seg(prior,'先行詞を含む部分','basic'),seg(after,label,'phrase')],
     '関係詞が先行する名詞を説明する。節の境界が不明な場合は断定しない',relation);
  }
 }
 return emit([seg(s,'節のまとまりを確認する文','clause')],title||'関係詞・名詞節の働きを確認する');
}

function get(sentence,meta={}){
 const t=String(meta.title||'');
 return infinitive(sentence,meta)||participle(sentence,meta)||relative(sentence,meta)||coordination(sentence)||imperative(sentence,t)||existential(sentence,t)||complex(sentence,t)||linking(sentence,meta)||null;
}
return Object.freeze({get,isRisky:risk});
});
