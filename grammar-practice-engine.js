/* Grammar-only GCC parity helpers. Does not alter normal Copeak or vocabulary scoring. */
(function(root){
'use strict';
// Normalize numerals for grammar speaking only. Safari may transcribe "fifty" as
// "50", or "one hundred and five" as "105". Compare the numerical VALUE,
// but preserve the recognizer's original words in colored transcript feedback.
const SMALL=Object.freeze({zero:0,one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,eleven:11,twelve:12,thirteen:13,fourteen:14,fifteen:15,sixteen:16,seventeen:17,eighteen:18,nineteen:19});
const TENS=Object.freeze({twenty:20,thirty:30,forty:40,fifty:50,sixty:60,seventy:70,eighty:80,ninety:90});
const ORD=Object.freeze({first:1,second:2,third:3,fourth:4,fifth:5,sixth:6,seventh:7,eighth:8,ninth:9,tenth:10,eleventh:11,twelfth:12,thirteenth:13,fourteenth:14,fifteenth:15,sixteenth:16,seventeenth:17,eighteenth:18,nineteenth:19,twentieth:20,thirtieth:30,fortieth:40,fiftieth:50,sixtieth:60,seventieth:70,eightieth:80,ninetieth:90});
const SCALE=Object.freeze({thousand:1000,million:1000000,billion:1000000000});
const YEAR_PREFIX=Object.freeze({seventeen:1700,eighteen:1800,nineteen:1900,twenty:2000});
const own=(obj,key)=>Object.prototype.hasOwnProperty.call(obj,key);
function rawWords(text){
 return String(text||'').toLowerCase().replace(/[’']/g,'')
  .replace(/\b\d{1,3}(?:,\d{3})+\b/g,match=>match.replace(/,/g,''))
  .replace(/(\d(?:\.\d+)?)\s*%/g,'$1 percent')
  .match(/\d+(?:\.\d+)?(?:st|nd|rd|th)?|[a-z]+/g)||[];
}
function numericKey(value,ordinal=false){
 const numeric=Number(value);
 return '@number:'+ (Number.isFinite(numeric)&&Number.isSafeInteger(numeric)||Number.isFinite(numeric)&&String(value).includes('.')?String(numeric):String(value))+(ordinal?':ordinal':'');
}
function literalNumber(token){
 const match=/^(\d+(?:\.\d+)?)(st|nd|rd|th)?$/.exec(token);
 return match?numericKey(match[1],!!match[2]):null;
}
function cardinalValue(token){
 return own(SMALL,token)?SMALL[token]:own(TENS,token)?TENS[token]:null;
}
function numberPhrase(tokens,start){
 // "twenty twenty-six" and "nineteen ninety-nine" are common year readings.
 const prefix=YEAR_PREFIX[tokens[start]];
 const next=cardinalValue(tokens[start+1]);
 if(prefix!==undefined&&next!==null&&next>=10){
  let value=next,end=start+2;
  if(next>=20&&next%10===0&&end<tokens.length&&own(SMALL,tokens[end])&&SMALL[tokens[end]]>0&&SMALL[tokens[end]]<10){
   value+=SMALL[tokens[end]];end++;
  }
  return {end,key:numericKey(prefix+value)};
 }
 let total=0,group=0,seen=false,ordinal=false,previous='start',i=start;
 if(tokens[i]==='a'&&(tokens[i+1]==='hundred'||own(SCALE,tokens[i+1]))){
  group=1;seen=true;previous='unit';i++;
 }
 for(;i<tokens.length;i++){
  const word=tokens[i],small=cardinalValue(word),ord=own(ORD,word)?ORD[word]:null;
  if(word==='point'){
   if(!seen)break;
   let j=i+1,decimals='';
   while(j<tokens.length){
    const digit=own(SMALL,tokens[j])?SMALL[tokens[j]]:null;
    if(digit===null||digit>9)break;
    decimals+=String(digit);j++;
   }
   if(!decimals)break;
   return {end:j,key:numericKey(String(total+group)+'.'+decimals)};
  }
  if(word==='and'){
   if(!['hundred','scale'].includes(previous)||cardinalValue(tokens[i+1])===null&&!own(ORD,tokens[i+1]))break;
   previous='and';continue;
  }
  if(word==='hundred'||word==='hundredth'){
   if(!seen||!['unit','tens'].includes(previous))break;
   group*=100;previous='hundred';if(word==='hundredth'){ordinal=true;i++;break;}continue;
  }
  const scale=own(SCALE,word)?SCALE[word]:word==='thousandth'?1000:null;
  if(scale!==null){
   if(!seen||!['unit','tens','hundred'].includes(previous))break;
   total+=group*scale;group=0;previous='scale';
   if(word.endsWith('th')){ordinal=true;i++;break;}
   continue;
  }
  if(small===null&&ord===null)break;
  const number=ord===null?small:ord;
  if(previous==='unit'||previous==='ordinal')break;
  if(previous==='tens'&&!(number>0&&number<10))break;
  if(previous==='tens')group+=number;
  else group+=number;
  seen=true;previous=ord!==null?'ordinal':number>=20&&number%10===0?'tens':'unit';
  if(ord!==null){ordinal=true;i++;break;}
 }
 return seen?{end:i,key:numericKey(total+group,ordinal)}:null;
}
function units(text){
 const tokens=rawWords(text),result=[];
 for(let i=0;i<tokens.length;){
  const raw=tokens[i],literal=literalNumber(raw);
  if(literal){result.push({key:literal,display:[raw]});i++;continue;}
  const phrase=numberPhrase(tokens,i);
  if(phrase&&phrase.end>i){
   result.push({key:phrase.key,display:tokens.slice(i,phrase.end)});
   i=phrase.end;continue;
  }
  result.push({key:raw,display:[raw]});i++;
 }
 return result;
}
function words(text){return units(text).map(part=>part.key);}
function score(sentence,spoken){
 const expected=units(sentence),heard=units(spoken),n=expected.length,m=heard.length;
 const dp=Array.from({length:n+1},()=>new Uint16Array(m+1));
 for(let i=0;i<=n;i++)dp[i][0]=i;
 for(let j=0;j<=m;j++)dp[0][j]=j;
 for(let i=1;i<=n;i++)for(let j=1;j<=m;j++)dp[i][j]=Math.min(dp[i-1][j]+1,dp[i][j-1]+1,dp[i-1][j-1]+(expected[i-1].key===heard[j-1].key?0:1));
 const matched=new Set();let i=n,j=m;
 while(i||j){
  if(i&&j&&dp[i][j]===dp[i-1][j-1]+(expected[i-1].key===heard[j-1].key?0:1)){
   if(expected[i-1].key===heard[j-1].key)matched.add(j-1);i--;j--;
  }else if(i&&dp[i][j]===dp[i-1][j]+1)i--;else j--;
 }
 return {
  percent:n?Math.max(0,Math.min(100,Math.round(100*(1-dp[n][m]/n)))):100,
  matchCount:matched.size,targetCount:n,errorCount:dp[n][m],
  wordMatches:heard.flatMap((part,index)=>part.display.map(value=>({value,matched:matched.has(index)})))
 };
}
function createFeedback(win){
 let context=null,enabled=true;
 try{enabled=win.localStorage?.getItem('copeak-grammar-sounds')!=='off';}catch(_){}
 function tone(kind='tap'){
  if(!enabled)return;
  try{
   const Audio=win.AudioContext||win.webkitAudioContext;if(!Audio)return;
   if(!context||context.state==='closed')context=new Audio();
   if(context.state==='suspended')context.resume().catch(()=>{});
   const notes=kind==='100'?[523,659,784,1046]:kind==='90'?[493,659,880]:kind==='80'?[440,554,659]:kind==='retry'?[392,440]:kind==='next'?[587,784]:kind==='rise'?[330,392,440,523]:[523,659];
   notes.forEach((hz,i)=>{
    const t=context.currentTime+i*(kind==='tap'?.055:.09),osc=context.createOscillator(),gain=context.createGain();
    osc.type='sine';osc.frequency.value=hz;
    gain.gain.setValueAtTime(.0001,t);gain.gain.exponentialRampToValueAtTime(kind==='tap'?.018:.025,t+.017);
    gain.gain.exponentialRampToValueAtTime(.0001,t+.17);
    osc.connect(gain);gain.connect(context.destination);osc.start(t);osc.stop(t+.20);
   });
  }catch(_){/* Optional feedback must never block the microphone. */}
 }
 return {tone,get enabled(){return enabled;},toggle(){enabled=!enabled;try{win.localStorage?.setItem('copeak-grammar-sounds',enabled?'on':'off');}catch(_){}return enabled;}};
}
root.CopeakGrammarPractice=Object.freeze({score,words,createFeedback});
})(typeof window!=='undefined'?window:globalThis);
