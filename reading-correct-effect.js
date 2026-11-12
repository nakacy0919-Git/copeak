/* Same Correct! visual language as Copeak Study grammar training. */
(function(root){
 'use strict';
 let timer=0;
 function celebrate(){
  const layer=document.getElementById('readingSuccessCelebration');
  if(!layer)return;
  const reduced=typeof root.matchMedia==='function'&&root.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced)return;
  if(timer){clearTimeout(timer);timer=0}
  layer.hidden=true; // reset animation before every new correct answer
  void layer.offsetWidth;
  layer.hidden=false;
  timer=setTimeout(()=>{layer.hidden=true;timer=0},960);
 }
 function clear(){
  if(timer)clearTimeout(timer);
  timer=0;
  const layer=document.getElementById('readingSuccessCelebration');
  if(layer)layer.hidden=true;
 }
 root.CopeakReadingEffects=Object.freeze({celebrate,clear});
})(window);