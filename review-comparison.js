/* Copeak result comparison overlay, independently loaded after app-bundle.js */
(function(){
'use strict';
let overlay=null,opener=null,previousOverflow='',chosen=null,missed=[],textSize=21;
const query=(q,root=document)=>root.querySelector(q);
function create(tag,cls,text){const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e}
function cloneReadable(source){
 const holder=create('div','cp-review-copy');
 Array.from(source.childNodes).forEach(n=>holder.appendChild(n.cloneNode(true)));
 holder.querySelectorAll('*').forEach(n=>{
  n.removeAttribute('id');n.removeAttribute('tabindex');
  Array.from(n.attributes).forEach(a=>{if(a.name.slice(0,2).toLowerCase()==='on')n.removeAttribute(a.name)});
  if(n.matches('a[href],button,input,select,textarea')){n.removeAttribute('href');n.setAttribute('aria-hidden','true')}
 });
 return holder;
}
function displayWord(token){
 const t=String(token||'');
 const number=t.match(/^__num_(.*?)__$/);
 if(number)return number[1];
 const alias=t.match(/^__(.*?)__$/);
 return alias?alias[1].replace(/_/g,' '):t;
}
function checkMissed(){
 try{
  if(typeof getLessonTargetTokens!=='function'||typeof alignSpeechTokens!=='function'||typeof buildSpeechComparisonUnits!=='function')return [];
  const target=getLessonTargetTokens();
  if(!Array.isArray(target)||target.length>1500||!target.length)return [];
  const lang=typeof getCurrentLessonLang==='function'?getCurrentLessonLang():'en-US';
  const transcript=typeof accumulatedTranscript==='string'?accumulatedTranscript:'';
  const spoken=buildSpeechComparisonUnits(transcript,lang).map(v=>v.token);
  if(spoken.length>1500)return [];
  const same=alignSpeechTokens(spoken,target).matchedTargetIndexes;
  const list=[];
  for(let i=0;i<target.length&&list.length<80;i++){
   if(same.has(i))continue;
   const word=String(target[i]);
   if(word)list.push({index:i,token:word,word:displayWord(word),words:target.slice(Math.max(0,i-4),Math.min(target.length,i+5)).map(displayWord)});
  }
  return list;
 }catch(e){console.warn('[Copeak Review] missing word comparison failed',e);return []}
}
function setView(view){
 if(!overlay)return;
 overlay.dataset.view=view;
 overlay.querySelectorAll('[data-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mode===view)));
}
function zoom(delta){
 textSize=Math.max(15,Math.min(32,textSize+delta));
 if(overlay)overlay.style.setProperty('--review-font',textSize+'px');
}
function readContext(){
 if(!chosen||!('speechSynthesis' in window))return;
 window.speechSynthesis.cancel();
 const u=new SpeechSynthesisUtterance(chosen.words.join(' '));
 u.lang=typeof getCurrentLessonLang==='function'?getCurrentLessonLang():'en-US';
 u.rate=.85;
 window.speechSynthesis.speak(u);
}
function close(){
 if(!overlay)return;
 document.removeEventListener('keydown',keys,true);
 overlay.remove();overlay=null;chosen=null;missed=[];
 document.body.classList.remove('cp-review-lock');
 document.body.style.overflow=previousOverflow;
 if(opener&&opener.isConnected)opener.focus({preventScroll:true});
 opener=null;
}
function practice(){
 if(typeof window.openMissingWordsModal!=='function')return;
 const wanted=chosen?chosen.word:'';
 close();
 window.openMissingWordsModal();
 if(!wanted||typeof window.startMissingWordPractice!=='function'||typeof currentMissingWords==='undefined')return;
 const at=currentMissingWords.findIndex(w=>String(w).toLowerCase()===wanted.toLowerCase());
 if(at>=0)window.startMissingWordPractice(at);
}
function selectWord(item){
 chosen=item;
 if(!overlay)return;
 overlay.querySelectorAll('[data-word-index]').forEach(b=>b.setAttribute('aria-pressed',String(item&&Number(b.dataset.wordIndex)===item.index)));
 const area=query('[data-context]',overlay),listen=query('[data-listen]',overlay);
 area.replaceChildren();
 if(!item){area.textContent='語句を選ぶと前後の文脈を確認できます。';listen.disabled=true;return}
 item.words.forEach((w,i)=>{
  const node=create(w===item.word?'mark':'span','',w);
  area.appendChild(node);if(i<item.words.length-1)area.append(' ');
 });
 listen.disabled=false;
}
function renderMissed(){
 missed=checkMissed();
 const list=query('[data-list]',overlay);
 query('[data-count]',overlay).textContent=missed.length?('（最大'+missed.length+'件）'):'（候補なし）';
 if(!missed.length)list.appendChild(create('span','cp-review-context','該当する候補はありません。'));
 missed.forEach(item=>{
  const button=create('button','cp-review-word',item.word);
  button.type='button';button.dataset.wordIndex=item.index;
  button.setAttribute('aria-pressed','false');
  button.addEventListener('click',()=>selectWord(item));
  list.appendChild(button);
 });
 selectWord(missed[0]||null);
}
function keys(e){
 if(!overlay)return;
 if(e.key==='Escape'){e.preventDefault();close();return}
 if(e.key!=='Tab')return;
 const nodes=Array.from(overlay.querySelectorAll('button:not([disabled]),[tabindex="0"]')).filter(n=>n.getClientRects().length);
 if(!nodes.length)return;
 if(e.shiftKey&&document.activeElement===nodes[0]){e.preventDefault();nodes[nodes.length-1].focus()}
 if(!e.shiftKey&&document.activeElement===nodes[nodes.length-1]){e.preventDefault();nodes[0].focus()}
}
function open(){
 if(overlay||!document.body.classList.contains('result-layout-active'))return;
 const voice=query('#recognizedTextDisplay'),target=query('#engContainer');
 if(!voice||!target)return;
 opener=query('#cpReviewOpenBtn')||document.activeElement;
 textSize=window.matchMedia('(max-width:650px)').matches?18:21;
 overlay=create('div','cp-review-overlay');
 overlay.id='cpReviewDialog';overlay.setAttribute('role','dialog');overlay.setAttribute('aria-modal','true');
 overlay.setAttribute('aria-labelledby','cpReviewTitle');overlay.dataset.view='both';
 overlay.style.setProperty('--review-font',textSize+'px');
 overlay.innerHTML="<div class=\"cp-review-dialog\">\n<header class=\"cp-review-head\"><div><h2 id=\"cpReviewTitle\">音読をじっくり照合</h2><p>文字起こしと原文を拡大して、読みの違いを確認します。</p></div><button type=\"button\" class=\"cp-review-btn close\" data-close aria-label=\"閉じる\">×</button></header>\n<div class=\"cp-review-toolbar\"><div class=\"cp-review-modes\" role=\"group\" aria-label=\"表示切り替え\"><button data-mode=\"both\" aria-pressed=\"true\" type=\"button\">両方を比較</button><button data-mode=\"voice\" aria-pressed=\"false\" type=\"button\">音読結果</button><button data-mode=\"target\" aria-pressed=\"false\" type=\"button\">原文のみ</button></div><span class=\"cp-review-toolbar-note\">中央のバーを動かすと幅を調整できます</span><div class=\"cp-review-zoom\"><button type=\"button\" class=\"cp-review-btn\" data-zoom=\"-2\" aria-label=\"文字を小さくする\">A−</button><button type=\"button\" class=\"cp-review-btn\" data-zoom=\"2\" aria-label=\"文字を大きくする\">A＋</button></div></div>\n<div class=\"cp-review-panes\" data-panes><section class=\"cp-review-panel cp-review-voice\" aria-label=\"文字起こし\"><div class=\"cp-review-panel-head\"><strong>YOUR VOICE</strong><small>音声認識結果</small></div><div class=\"cp-review-body\" data-voice></div></section><div class=\"cp-review-resizer\" role=\"separator\" tabindex=\"0\" data-resizer aria-label=\"左右の幅を変える\" aria-valuemin=\"28\" aria-valuemax=\"72\" aria-valuenow=\"50\" aria-orientation=\"vertical\"></div><section class=\"cp-review-panel cp-review-target\" aria-label=\"教材の原文\"><div class=\"cp-review-panel-head\"><strong class=\"target\">TARGET TEXT</strong><small>教材スクリプト</small></div><div class=\"cp-review-body target\" data-target></div></section></div>\n<div class=\"cp-review-missing\"><strong>未発話・認識されなかった可能性のある語句 <span data-count></span></strong><small>音声認識から推定した候補です。実際には発話していても認識されない場合があります。</small><div class=\"cp-review-list\" data-list></div><div class=\"cp-review-context-row\"><div class=\"cp-review-context\" data-context>語句を選ぶと前後の文脈を確認できます。</div><button type=\"button\" class=\"cp-review-btn\" data-listen>🔊 前後を聞く</button><button type=\"button\" class=\"cp-review-btn primary\" data-practice>🎙 部分練習</button></div></div>\n<footer class=\"cp-review-footer\"><small>この比較・練習は提出済みの音読点数を変更しません。</small><button type=\"button\" class=\"cp-review-btn\" data-close>比較画面を閉じる</button></footer></div>";
 query('[data-voice]',overlay).appendChild(cloneReadable(voice));
 query('[data-target]',overlay).appendChild(cloneReadable(target));
 overlay.addEventListener('click',e=>{
  if(e.target===overlay||e.target.closest('[data-close]')){close();return}
  const mode=e.target.closest('[data-mode]');
  if(mode){setView(mode.dataset.mode);return}
  const change=e.target.closest('[data-zoom]');
  if(change){zoom(Number(change.dataset.zoom));return}
  if(e.target.closest('[data-listen]')){readContext();return}
  if(e.target.closest('[data-practice]')){practice();return}
 });
 const grip=query('[data-resizer]',overlay),panes=query('[data-panes]',overlay);
 const updateSplit=n=>{
  const pct=Math.max(28,Math.min(72,n));
  panes.style.setProperty('--review-split',pct+'%');
  grip.setAttribute('aria-valuenow',String(Math.round(pct)));
 };
 grip.addEventListener('pointerdown',e=>{
  if(window.innerWidth<=650||overlay.dataset.view!=='both')return;
  e.preventDefault();grip.setPointerCapture(e.pointerId);
 });
 grip.addEventListener('pointermove',e=>{
  if(!grip.hasPointerCapture(e.pointerId))return;
  const rect=panes.getBoundingClientRect();
  updateSplit((e.clientX-rect.left)/rect.width*100);
 });
 grip.addEventListener('keydown',e=>{
  if(e.key==='ArrowLeft'||e.key==='ArrowRight'){
   e.preventDefault();
   updateSplit(Number(grip.getAttribute('aria-valuenow'))+(e.key==='ArrowLeft'?-5:5));
  }
 });
 document.addEventListener('keydown',keys,true);
 previousOverflow=document.body.style.overflow;
 document.body.classList.add('cp-review-lock');
 document.body.style.overflow='hidden';
 document.body.appendChild(overlay);
 renderMissed();
 query('[data-close]',overlay).focus({preventScroll:true});
}
function init(){
 const button=query('#cpReviewOpenBtn');
 if(!button)return;
 button.addEventListener('click',open);
 window.CopeakComparisonReview={open,close};
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
else init();
})();