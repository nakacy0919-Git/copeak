/* Copeak Grammar Aurora — visual enhancement only. The existing score is authoritative. */
(function(){
'use strict';
const number=document.getElementById('gtScoreNumber');
const arc=document.getElementById('gtScoreArc');
const halo=document.getElementById('gtScoreHalo');
const panel=document.getElementById('gtScorePanel');
const layer=document.getElementById('gtCelebration');
if(!number||!arc||!panel||!layer)return;
let frameId=0,clearTimer=0,lastValue=null;
const reduced=()=>!!(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches);
const draw=value=>{
 const dash=Math.max(0,Math.min(100,value)).toFixed(2)+' 100';
 arc.style.strokeDasharray=dash;
 if(halo)halo.style.strokeDasharray=dash;
};
function cleanup(){
 if(frameId){cancelAnimationFrame(frameId);frameId=0;}
 if(clearTimer){clearTimeout(clearTimer);clearTimer=0;}
 layer.replaceChildren();
 panel.classList.remove('is-achieved','is-blooming');
}
function celebrate(){
 if(reduced())return;
 panel.classList.remove('is-blooming');
 void panel.offsetWidth;
 panel.classList.add('is-blooming');
 const colors=['#62d4e4','#55d4b3','#b2e9ff','#f6d982','#c5b2f4','#fff'];
 const fragment=document.createDocumentFragment();
 for(let i=0;i<28;i++){
  const piece=document.createElement('span');
  piece.className='gt-confetti-piece';
  piece.style.left=(14+(i*37)%72)+'%';
  piece.style.setProperty('--gt-particle-color',colors[i%colors.length]);
  piece.style.setProperty('--gt-drift',((i*41)%171-85)+'px');
  piece.style.setProperty('--gt-spin',((i%2?-1:1)*(170+(i*29)%390))+'deg');
  piece.style.setProperty('--gt-delay',((i*23)%290)+'ms');
  fragment.appendChild(piece);
 }
 layer.replaceChildren(fragment);
 clearTimer=window.setTimeout(()=>{
  layer.replaceChildren();panel.classList.remove('is-blooming');clearTimer=0;
 },2700);
}
function sync(){
 const raw=(number.textContent||'').trim();
 const n=Number(raw.replace('%',''));
 if(!raw||raw==='—'||!Number.isFinite(n)){
  if(lastValue!==null){cleanup();draw(0);}
  lastValue=null;
  return;
 }
 const value=Math.max(0,Math.min(100,n));
 if(value===lastValue)return;
 cleanup();
 lastValue=value;
 const duration=1100,begin=performance.now();
 if(reduced())draw(value);
 else{
  draw(0);
  function step(time){
   const t=Math.min(1,(time-begin)/duration);
   draw(value*(1-Math.pow(1-t,3)));
   frameId=t<1?requestAnimationFrame(step):0;
  }
  frameId=requestAnimationFrame(step);
 }
 panel.classList.toggle('is-achieved',value>=90);
 if(value>=90)celebrate();
}
new MutationObserver(sync).observe(number,{childList:true,characterData:true,subtree:true});
sync();
})();
