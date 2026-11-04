/* Progressive enhancement for the alternate Copeak grammar-training prototype. */
(function(){
'use strict';
const root=document.getElementById('gtRoot');
if(!root)return;
let current=null,scoreObserver=null,frameId=0,cleanupTimer=0,lastScore=null;
const reduce=()=>!!(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches);
const svg=String.raw`<svg viewBox="0 0 200 112" aria-hidden="true"><defs><linearGradient id="gtAuroraGradient" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stop-color="#2875c9"/><stop offset="54%" stop-color="#32b9cc"/><stop offset="100%" stop-color="#67dfb9"/></linearGradient></defs><path class="gt-a-base" d="M 18 100 A 82 82 0 0 1 182 100" pathLength="100"/><path class="gt-a-halo" d="M 18 100 A 82 82 0 0 1 182 100" pathLength="100"/><path class="gt-a-fill" d="M 18 100 A 82 82 0 0 1 182 100" pathLength="100"/></svg><div class="gt-a-particles" aria-hidden="true"></div>`;
function draw(g,value){
 const dash=Math.max(0,Math.min(100,value)).toFixed(2)+' 100';
 g.querySelector('.gt-a-fill').style.strokeDasharray=dash;
 g.querySelector('.gt-a-halo').style.strokeDasharray=dash;
}
function clearFx(g){
 if(frameId)cancelAnimationFrame(frameId);frameId=0;
 if(cleanupTimer)clearTimeout(cleanupTimer);cleanupTimer=0;
 g.classList.remove('is-achieved','is-blooming');
 g.querySelector('.gt-a-particles').replaceChildren();
}
function celebrate(g){
 if(reduce())return;
 g.classList.remove('is-blooming');void g.offsetWidth;g.classList.add('is-blooming');
 const layer=g.querySelector('.gt-a-particles'),fragment=document.createDocumentFragment();
 const colors=['#4cc5d9','#5bdbb7','#d3ecff','#e6ca81','#d3baff','#fff'];
 for(let i=0;i<26;i++){
  const p=document.createElement('span');p.className='gt-a-piece';
  p.style.left=(13+(i*39)%75)+'%';
  p.style.setProperty('--gt-a-color',colors[i%colors.length]);
  p.style.setProperty('--gt-a-drift',((i*43)%155-76)+'px');
  p.style.setProperty('--gt-a-rot',((i%2?-1:1)*(170+i*23%360))+'deg');
  p.style.setProperty('--gt-a-delay',((i*29)%260)+'ms');
  fragment.appendChild(p);
 }
 layer.replaceChildren(fragment);
 cleanupTimer=window.setTimeout(()=>{g.classList.remove('is-blooming');layer.replaceChildren();cleanupTimer=0;},2500);
}
function sync(g){
 if(g!==current||!g.isConnected)return;
 const raw=g.firstChild&&g.firstChild.nodeType===3?g.firstChild.textContent.trim():'';
 const n=Number(raw.replace('%',''));
 if(!raw||!Number.isFinite(n)){
  if(lastScore!==null){clearFx(g);draw(g,0);}
  lastScore=null;return;
 }
 const value=Math.max(0,Math.min(100,n));
 if(value===lastScore)return;
 lastScore=value;clearFx(g);
 if(reduce())draw(g,value);
 else{
  draw(g,0);const start=performance.now();
  function tick(now){
   const t=Math.min(1,(now-start)/1100);
   draw(g,value*(1-Math.pow(1-t,3)));
   frameId=t<1?requestAnimationFrame(tick):0;
  }
  frameId=requestAnimationFrame(tick);
 }
 g.classList.toggle('is-achieved',value>=90);
 if(value>=90)celebrate(g);
}
function enhance(){
 const g=root.querySelector('#gtAccuracy');
 if(!g||g===current)return;
 if(scoreObserver){scoreObserver.disconnect();scoreObserver=null;}
 if(current)clearFx(current);
 current=g;lastScore=null;
 g.classList.add('gt-aurora-gauge');
 g.insertAdjacentHTML('beforeend',svg);
 g.setAttribute('role','meter');g.setAttribute('aria-label','Accuracy 音声認識の単語一致率');
 g.setAttribute('aria-valuemin','0');g.setAttribute('aria-valuemax','100');
 const t=g.firstChild;
 if(t&&t.nodeType===3){
  scoreObserver=new MutationObserver(()=>{sync(g);const raw=t.textContent.trim();const n=Number(raw.replace('%',''));if(Number.isFinite(n)){g.setAttribute('aria-valuenow',String(n));}else g.removeAttribute('aria-valuenow');});
  scoreObserver.observe(t,{characterData:true});
 }
 sync(g);
}
new MutationObserver(enhance).observe(root,{childList:true});
enhance();
})();
