/* Grade 3 original practice expansion — independent practice, not a verbatim textbook transcript.
 * Run after GRADE3_ORIGINAL_SENTENCES and the audited base DATASETS have loaded.
 */
const SECTION_CATALOG=Object.create(null),SECTION_PRACTICE=Object.create(null);
(function buildGrade3Practice(){
'use strict';
const AUDIT=window.COPEAK_NH_AUDIT?.grade3||{};
const MAP={0:[['review','Unit 0 復習',6]],1:[['part1','Part 1',10],['part2','Part 2',11],['rt1','Read and Think 1',13],['rt2','Read and Think 2',15]],2:[['part1','Part 1',20],['part2','Part 2',21],['rt1','Read and Think 1',23],['rt2','Read and Think 2',25]],3:[['part1','Part 1',32],['part2','Part 2',33],['rt1','Read and Think 1',35],['rt2','Read and Think 2',37]],4:[['part1','Part 1',52],['part2','Part 2',53],['rt1','Read and Think 1',55],['rt2','Read and Think 2',57]],5:[['part1','Part 1',62],['part2','Part 2',63],['rt1','Read and Think 1',65],['rt2','Read and Think 2',67]],6:[['part1','Part 1',78],['part2','Part 2',79],['rt1','Read and Think 1',81],['rt2','Read and Think 2',83]]};
const SENTENCES=Object.create(null);let section='';
for(const line of GRADE3_ORIGINAL_SENTENCES.split(/\r?\n/)){
 const row=line.trim();if(!row)continue;
 if(row.startsWith('@')){section=row.slice(1);SENTENCES[section]=[];continue}
 const bar=row.indexOf('|');if(bar<=0||!section)throw Error('Invalid Grade 3 source row '+row);
 const marked=row.slice(0,bar),m=marked.match(/\[\[([^\]]+)\]\]/);
 if(!m)throw Error('Missing grammar target '+row);
 SENTENCES[section].push({en:marked.replace(/\[\[([^\]]+)\]\]/g,'$1'),jp:row.slice(bar+1),target:m[1]});
}
const grammarOptions={
 have:['has','having','have to'],has:['have','having','has to'],Have:['Has','Having','Have to'],
 Has:['Have','Having','Has to'],can:['cans','can to','canning'],is:['are','am','be'],were:['was','are','be'],
 am:['is','are','be'],want:['wants','wanting','to want'],wants:['want','wanting','to want'],
 know:['knows','knowing','to know'],knows:['know','knowing','to know'],wonder:['wonders','wondering','to wonder'],
 remember:['remembers','remembering','to remember'],means:['mean','meaning','to mean'],
 'since':['for','during','until'],'for':['since','during','until'],
 living:['live','lives','to living'],working:['work','works','to working'],
 studying:['study','studies','to studying'],helping:['help','helps','to helping'],
 waiting:['wait','waits','to waiting'],riding:['ride','rides','to riding'],
 standing:['stand','stands','to standing'],carrying:['carry','carries','to carrying'],
 wearing:['wear','wears','to wearing'],playing:['play','plays','to playing'],
 speaking:['speak','speaks','to speaking'],
 cut:['cuts','cutting','to cutting'],injured:['injuring','injure','to injured'],
 protected:['protecting','protects','to protecting'],written:['writing','writes','to written'],
 saved:['saving','saves','to saved'],sent:['sending','sends','to sent'],
 broadcast:['broadcasting','broadcasts','to broadcast'],damaged:['damaging','damages','to damaged'],
 rescued:['rescuing','rescues','to rescued'],shown:['showing','shows','to shown'],
 donated:['donating','donates','to donated'],printed:['printing','prints','to printed'],
 affected:['affecting','affects','to affected'],
 who:['which','whose','where'],that:['who','whose','where'],
 were:['was','am','will be'],wish:['wishes','wishing','to wish'],
 had:['has','having','to have'],knew:['knows','knowing','to know'],
 worked:['will work','working','to work'],organized:['will organize','organizing','to organize'],
 could:['can to','could to','cans'],shared:['will share','sharing','to share'],
 stopped:['will stop','stopping','to stop'],imported:['will import','importing','to import'],
 lived:['will live','living','to live'],studied:['will study','studying','to study'],
 compared:['will compare','comparing','to compare'],cooperated:['will cooperate','cooperating','to cooperate'],
 listened:['will listen','listening','to listen'],invited:['will invite','inviting','to invite'],
 plays:['play','playing','to play'],asked:['ask','asking','to asked'],
 enjoyed:['enjoys','enjoying','to enjoy'],do:['does','doing','to do'],
 can:['cans','can to','canning'],has:['have','having','to have'],
 want:['wants','wanting','to want']
};
// A few less common text-supported subject-verb forms can be formed unambiguously.
function grammaticalChoices(target){
 const options=grammarOptions[target]||grammarOptions[target.toLowerCase()];
 if(options)return [target,...options];
 if(/^[a-z]+s$/i.test(target))return [target,target.slice(0,-1),'to '+target,'is '+target];
 if(/^[a-z]+ed$/i.test(target))return [target,'to '+target,'is '+target,'will '+target];
 throw Error('Missing human-reviewed answer forms: '+target);
}
const tokenize=en=>en.match(/[A-Za-z]+(?:['’][A-Za-z]+)?|\d+(?:,\d+)*|[.,!?]/g)||[];
function multipleChoice(correct,alternatives,index){
 const choices=[correct];
 for(let k=1;k<=alternatives.length&&choices.length<4;k++){
  const candidate=alternatives[(index+k)%alternatives.length];
  if(candidate&&!choices.includes(candidate))choices.push(candidate);
 }
 if(choices.length<4)throw Error('Not enough distinct choices');
 return choices;
}
const tags=['vocab','listening','meaning','grammar','speaking','spelling','ordering','reading'];
function relatedVocabulary(unit,section){
 const key=unit+':'+section.title;
 const result=[],used=new Set();
 function put(word,jp,status){
  const w=String(word||'').replace(/\(s\)|\(ed\)/gi,'').trim(),norm=w.toLowerCase();
  if(!w||!jp||used.has(norm))return;
  used.add(norm);result.push({word:w,jp,source:status});
 }
 const exact=AUDIT[key]?.words||[];
 for(const w of exact)put(w.en,w.ja,'教科書 New Words（照合済み）');
 // Related verified words from the same unit, explicitly labelled as related review words.
 for(const [sectionKey,v] of Object.entries(AUDIT)){
  if(!sectionKey.startsWith(unit+':')||sectionKey===key)continue;
  for(const w of v.words)put(w.en,w.ja,'Unit関連の復習語・別Part掲載（照合済み）');
 }
 for(const word of DATASETS[unit]?.vocab||[])put(word.word,word.jp,'Unitテーマの追加・復習語');
 return result;
}
for(const [unit,sections] of Object.entries(MAP)){
 SECTION_CATALOG[unit]=[];
 SECTION_PRACTICE[unit]=Object.create(null);
 for(const [code,title,page] of sections){
  const id=unit==='0'?'u0-review':'u'+unit+'-'+code;
  const rows=SENTENCES[id];
  if(!rows||rows.length!==10)throw Error('Ten original Grade 3 cards required for '+id);
  const bookEntry=AUDIT[unit+':'+title];
  const sec={id,code,title,pageStart:page,pageEnd:page+(code.startsWith('rt')?1:0),
   reviewed:!!bookEntry?.words?.length,bookWordCount:bookEntry?.words?.length||0};
  SECTION_CATALOG[unit].push(sec);
  const pool=Object.fromEntries(tags.map(cat=>[cat,[]]));
  SECTION_PRACTICE[unit][id]=pool;
  const words=relatedVocabulary(unit,sec);
  for(const v of words.slice(0,10)){
   pool.vocab.push({id:id+'-v'+pool.vocab.length,word:v.word,jp:v.jp,source:v.source,page});
  }
  for(const v of words.filter(x=>/^[a-z]{3,}$/i.test(x.word)).slice(0,10)){
   pool.spelling.push({id:id+'-sp'+pool.spelling.length,word:v.word.toLowerCase(),jp:v.jp,page});
  }
  const translations=rows.map(x=>x.jp);
  for(let k=0;k<rows.length;k++){
   const c=rows[k],next=rows[(k+1)%rows.length],qid=id+'-'+(k+1);
   const gram=grammaticalChoices(c.target);
   const choices=multipleChoice(c.jp,translations,k);
   const sentence=c.en.replace(c.target,'___');
   if(!sentence.includes('___'))throw Error('Grammar target missing from '+qid);
   pool.listening.push({id:qid+'-l',tts:c.en,prompt:'聞こえた英文の意味',choices,correct:0,page});
   pool.meaning.push({id:qid+'-m',en:c.en,prompt:'英文の意味は？',choices,correct:0,page});
   pool.grammar.push({id:qid+'-g',sentence,choices:gram,correct:0,
     explain:'正解：'+c.target+'。全文：'+c.en,page});
   pool.speaking.push({id:qid+'-s',en:c.en,jp:c.jp,page});
   pool.ordering.push({id:qid+'-o',jp:c.jp,answer:tokenize(c.en),page});
   // Two original statements, one question about an explicitly identifiable detail.
   const asksSecond=k%3===1,focus=asksSecond?next:c;
   const readingChoices=multipleChoice(focus.jp,translations,(k+5)%rows.length);
   pool.reading.push({id:qid+'-r',label:title+'・オリジナル短文',en:c.en+' '+next.en,
     jp:c.jp+' '+next.jp,
     question:asksSecond?'2文目で述べられている内容は？':'1文目の内容と一致するものは？',
     choices:readingChoices,correct:0,sourceQuestion:false,page});
  }
  for(const cat of tags)if(pool[cat].length<10)console.warn('Underfilled '+id+' '+cat+': '+pool[cat].length);
 }
}
})();