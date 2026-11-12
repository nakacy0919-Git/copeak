/* Copeak Reading Ink v1: black ink on the passage, not the answers.
   Shared between study and exam, saved locally per lesson + exercise.
   Pencil/pen/mouse draws; fingers scroll unless "finger drawing" is selected.
   Coordinates are relative to each paragraph; reflow may require alignment review. */
(function(root){
 'use strict';
 const MAX_STROKES=220,MAX_POINTS=900,MAX_DOC_BYTES=750000;
 const $=id=>document.getElementById(id);
 const clamp=(v,lo,hi)=>Math.max(lo,Math.min(hi,v));
 const validKey=s=>/^[a-z0-9_-]{1,100}$/i.test(String(s||''));
 const storageKey=key=>'copeak-reading-ink-v1:'+key;
 const cache=new Map(),views=[];
 const blank=()=>({version:1,seq:0,paragraphs:Object.create(null),layouts:Object.create(null)});
 function clean(raw){
  const doc=blank();
  if(!raw||raw.version!==1||typeof raw!=='object')return doc;
  for(const [index,items] of Object.entries(raw.paragraphs||{})){
   if(!/^\d{1,3}$/.test(index)||!Array.isArray(items))continue;
   doc.paragraphs[index]=items.slice(-MAX_STROKES).filter(s=>
    s&&Array.isArray(s.points)&&s.points.length>0&&s.points.length<=MAX_POINTS
   ).map(s=>({
    seq:Number.isSafeInteger(s.seq)&&s.seq>0?s.seq:0,
    points:s.points.filter(p=>Array.isArray(p)&&p.length===2&&p.every(n=>typeof n==='number'&&Number.isFinite(n))).slice(0,MAX_POINTS)
     .map(p=>[clamp(p[0],0,1),clamp(p[1],0,1)])
   })).filter(s=>s.points.length);
   for(const s of doc.paragraphs[index])doc.seq=Math.max(doc.seq,s.seq);
  }
  if(raw.layouts&&typeof raw.layouts==='object'){
   for(const [index,size] of Object.entries(raw.layouts)){
    if(!/^\d{1,3}$/.test(index))continue;
    if(Array.isArray(size)&&size.length===2&&size.every(n=>Number.isFinite(n)&&n>0))
     doc.layouts[index]=size;
   }
  }
  return doc;
 }
 function read(key){
  if(cache.has(key))return cache.get(key);
  let result=blank();
  try{result=clean(JSON.parse(localStorage.getItem(storageKey(key))||'null'))}catch(_){}
  cache.set(key,result);
  return result;
 }
 function save(key,view){
  if(!key)return;
  const value=JSON.stringify(read(key));
  try{
   if(value.length>MAX_DOC_BYTES)throw Error('size-limit');
   localStorage.setItem(storageKey(key),value);
   if(view)view.notice('書き込みを保存しました',false);
  }catch(_){
   if(view)view.notice('端末に保存できません。空き容量を確認してください。',true);
  }
 }
 function createSurface({name,rootId,scrollId,toggleId,panelId,paragraphClass}){
  const rootEl=$(rootId),scroll=$(scrollId),toggle=$(toggleId),panel=$(panelId);
  if(!rootEl||!scroll||!toggle||!panel)return null;
  let key='',doc=blank(),mode='off',open=false,visible=true,finger=false,active=null;
  let overlays=[],observer=null,saveTimer=0,history=[];
  const status=panel.querySelector('.ink-save-status');
  const tool=action=>panel.querySelector('[data-ink-action="'+action+'"]');
  function notice(message,isError){
   if(!status)return;
   status.textContent=message;
   status.classList.toggle('ink-error',!!isError);
  }
  function setControls(){
   toggle.setAttribute('aria-expanded',String(open));
   toggle.classList.toggle('ink-on',open&&mode!=='off');
   panel.hidden=!open;
   for(const action of ['pen','eraser']){
    const btn=tool(action);
    if(btn)btn.setAttribute('aria-pressed',String(mode===action));
   }
   const vis=tool('visibility');
   if(vis){vis.setAttribute('aria-pressed',String(visible));vis.textContent=visible?'非表示':'表示する';}
   const input=tool('finger');if(input)input.checked=finger;
   const info=panel.querySelector('.ink-tip');
   if(info)info.textContent=finger?'指でも書き込みます。スクロールするときは「終了」を押してください。':'ペンで書き込み、指でスクロールできます。';
   rootEl.classList.toggle('ink-enabled',open&&visible&&mode!=='off');
   rootEl.classList.toggle('ink-hidden',!visible);
   rootEl.classList.toggle('ink-eraser',mode==='eraser');
  }
  function persist(immediate=false){
   if(!key)return;
   if(saveTimer)clearTimeout(saveTimer);
   saveTimer=0;
   if(immediate)save(key,{notice});
   else saveTimer=setTimeout(()=>{saveTimer=0;save(key,{notice})},260);
  }
  function draw(overlay){
   const {canvas,index}=overlay,w=canvas.clientWidth,h=canvas.clientHeight;
   if(!w||!h)return;
   const dpr=clamp(root.devicePixelRatio||1,1,2);
   const bw=Math.max(1,Math.round(w*dpr)),bh=Math.max(1,Math.round(h*dpr));
   if(canvas.width!==bw||canvas.height!==bh){canvas.width=bw;canvas.height=bh;}
   const ctx=canvas.getContext('2d');
   if(!ctx)return;
   ctx.setTransform(bw/w,0,0,bh/h,0,0);
   ctx.clearRect(0,0,w,h);
   ctx.strokeStyle='#191919';ctx.fillStyle='#191919';
   ctx.lineWidth=2.2;ctx.lineCap='round';ctx.lineJoin='round';
   for(const stroke of (doc.paragraphs[index]||[])){
    const points=stroke.points;
    if(points.length===1){
     const [x,y]=points[0];ctx.beginPath();ctx.arc(x*w,y*h,1.2,0,Math.PI*2);ctx.fill();continue;
    }
    ctx.beginPath();
    points.forEach(([x,y],i)=>i?ctx.lineTo(x*w,y*h):ctx.moveTo(x*w,y*h));
    ctx.stroke();
   }
  }
  function redraw(){
   for(const overlay of overlays)draw(overlay);
  }
  function point(canvas,event){
   const rect=canvas.getBoundingClientRect();
   if(!rect.width||!rect.height)return null;
   return [clamp((event.clientX-rect.left)/rect.width,0,1),
    clamp((event.clientY-rect.top)/rect.height,0,1)];
  }
  function appendPoint(stroke,canvas,event){
   if(stroke.points.length>=MAX_POINTS)return;
   const p=point(canvas,event);if(!p)return;
   const prev=stroke.points[stroke.points.length-1];
   if(prev&&Math.hypot((p[0]-prev[0])*canvas.clientWidth,(p[1]-prev[1])*canvas.clientHeight)<1.3)return;
   stroke.points.push(p);
  }
  function erase(overlay,event){
   const p=point(overlay.canvas,event);if(!p)return;
   const list=doc.paragraphs[overlay.index]||[];
   const width=overlay.canvas.clientWidth,height=overlay.canvas.clientHeight;
   // Test the drawn line segments, not just sampled points, so a long
   // underline can be erased by touching its middle.
   const distance=(x,y,a,b)=>{
    const ax=a[0]*width,ay=a[1]*height,bx=b[0]*width,by=b[1]*height;
    const dx=bx-ax,dy=by-ay;
    const t=clamp(((x-ax)*dx+(y-ay)*dy)/(dx*dx+dy*dy||1),0,1);
    return Math.hypot(x-(ax+t*dx),y-(ay+t*dy));
   };
   const px=p[0]*width,py=p[1]*height;
   const hit=list.findIndex(stroke=>stroke.points.some((point,i,arr)=>
    i===0?Math.hypot(px-point[0]*width,py-point[1]*height)<14:
    distance(px,py,arr[i-1],point)<14));
   if(hit<0)return;
   const [removed]=list.splice(hit,1);
   history.push({kind:'erase',index:overlay.index,stroke:removed,at:hit});
   draw(overlay);persist();
  }
  function down(overlay,event){
   if(!open||!visible||mode==='off')return;
   if(event.button!==undefined&&event.button!==0)return;
   if(active)return;
   const pointerType=event.pointerType||'mouse';
   if(pointerType==='touch'&&!finger){
    active={kind:'scroll',id:event.pointerId,y:event.clientY};
   }else if(mode==='eraser'){
    active={kind:'erase',id:event.pointerId};
    erase(overlay,event);
   }else{
    const list=doc.paragraphs[overlay.index]||(doc.paragraphs[overlay.index]=[]);
    if(list.length>=MAX_STROKES){
     notice('この段落の書き込みが上限に達しました。消しゴムや戻すを使ってください。',true);
     return;
    }
    const stroke={seq:++doc.seq,points:[]};
    appendPoint(stroke,overlay.canvas,event);
    list.push(stroke);
    if(!doc.layouts[overlay.index]){
     doc.layouts[overlay.index]=[overlay.canvas.clientWidth,overlay.canvas.clientHeight];
    }
    history.push({kind:'add',index:overlay.index,seq:stroke.seq});
    active={kind:'pen',id:event.pointerId,stroke,overlay};
    draw(overlay);
   }
   try{overlay.canvas.setPointerCapture(event.pointerId)}catch(_){}
   if(event.cancelable)event.preventDefault();
   event.stopPropagation?.();
  }
  function move(overlay,event){
   if(!active||active.id!==event.pointerId)return;
   if(active.kind==='scroll'){
    scroll.scrollTop-=event.clientY-active.y;
    active.y=event.clientY;
   }else if(active.kind==='erase')erase(overlay,event);
   else if(active.kind==='pen'){
    const events=typeof event.getCoalescedEvents==='function'?event.getCoalescedEvents():[];
    for(const e of events)appendPoint(active.stroke,active.overlay.canvas,e);
    appendPoint(active.stroke,active.overlay.canvas,event);
    draw(active.overlay);
   }
   if(event.cancelable)event.preventDefault();
   event.stopPropagation?.();
  }
  function end(event){
   if(!active||active.id!==event.pointerId)return;
   const wasPen=active.kind==='pen';
   active=null;
   if(wasPen)persist(true);
   if(event.cancelable)event.preventDefault();
   event.stopPropagation?.();
  }
  function detach(){
   if(saveTimer){clearTimeout(saveTimer);saveTimer=0;save(key,{notice});}
   if(observer)observer.disconnect();
   observer=null;active=null;
   for(const o of overlays)o.canvas.remove();
   overlays=[];
  }
  function sync(lessonId,exercise){
   if(!validKey(lessonId)||!validKey(exercise))return;
   const next=lessonId+':'+exercise;
   const changed=next!==key;
   detach();
   if(changed){key=next;doc=read(key);history=[];open=false;mode='off';visible=true;finger=false;}
   const paras=[...rootEl.querySelectorAll(paragraphClass)];
   for(let i=0;i<paras.length;i++){
    const paragraph=paras[i];
    paragraph.classList.add('ink-annotatable');
    const canvas=document.createElement('canvas');
    canvas.className='reading-ink-canvas';
    canvas.setAttribute('aria-hidden','true');
    paragraph.appendChild(canvas);
    const overlay={canvas,index:String(i)};
    overlays.push(overlay);
    canvas.addEventListener('pointerdown',e=>down(overlay,e));
    canvas.addEventListener('pointermove',e=>move(overlay,e));
    canvas.addEventListener('pointerup',end);
    canvas.addEventListener('pointercancel',end);
    canvas.addEventListener('contextmenu',e=>{if(open&&mode!=='off')e.preventDefault();});
   }
   if(typeof ResizeObserver!=='undefined'){
    observer=new ResizeObserver(()=>redraw());
    for(const p of paras)observer.observe(p);
   }
   setControls();
   // A layout change can reflow text: annotate in a stable pane width for accuracy.
   for(const o of overlays){
    const previous=doc.layouts[o.index];
    if(previous&&Math.abs(o.canvas.clientWidth-previous[0])>previous[0]*.12){
     notice('表示幅が変わったため、線の位置をご確認ください。',true);
     break;
    }
   }
   redraw();
  }
  function undo(){
   if(!key)return;
   const item=history.pop();
   if(item){
    const list=doc.paragraphs[item.index]||[];
    if(item.kind==='add'){
     const at=list.findIndex(s=>s.seq===item.seq);
     if(at>=0)list.splice(at,1);
    }else if(item.kind==='erase')list.splice(clamp(item.at,0,list.length),0,item.stroke);
   }else{
    let target=null;
    for(const [i,strokes] of Object.entries(doc.paragraphs)){
     for(const stroke of strokes)if(!target||stroke.seq>target.stroke.seq)target={i,stroke};
    }
    if(!target){notice('戻す書き込みはありません。',false);return;}
    const list=doc.paragraphs[target.i];list.splice(list.indexOf(target.stroke),1);
   }
   redraw();persist(true);
  }
  function finish(){
   open=false;mode='off';active=null;
   setControls();persist(true);
  }
  toggle.addEventListener('click',()=>{
   if(open){finish();return;}
   open=true;mode='pen';visible=true;setControls();
   notice('書き込みはこの端末に自動保存されます。',false);
  });
  panel.addEventListener('click',event=>{
   const btn=event.target.closest?.('[data-ink-action]');
   if(!btn)return;
   switch(btn.dataset.inkAction){
    case 'pen':mode='pen';visible=true;break;
    case 'eraser':mode='eraser';visible=true;break;
    case 'undo':undo();break;
    case 'visibility':visible=!visible;if(!visible)mode='off';else mode='pen';break;
    case 'done':finish();return;
   }
   setControls();
  });
  tool('finger')?.addEventListener('change',event=>{finger=!!event.target.checked;setControls();});
  return {sync,finish,undo,notice,getKey:()=>key,debug:()=>({key,mode,open,strokes:Object.values(doc.paragraphs).reduce((n,arr)=>n+arr.length,0)})};
 }
 function init(){
  if(root.CopeakReadingInk)return root.CopeakReadingInk;
  const study=createSurface({name:'study',rootId:'passage',scrollId:'passageScroll',toggleId:'inkStudyToggle',panelId:'inkStudyPanel',paragraphClass:'.paragraph'});
  const exam=createSurface({name:'exam',rootId:'examPassage',scrollId:'examPassageScroll',toggleId:'inkExamToggle',panelId:'inkExamPanel',paragraphClass:'.exam-paragraph'});
  if(study)views.push(study);
  if(exam)views.push(exam);
  const api={syncStudy:(id,mode)=>study?.sync(id,mode||'questions'),
   syncExam:(id,mode)=>exam?.sync(id,mode||'questions'),
   pauseExam:()=>exam?.finish(),
   pauseStudy:()=>study?.finish(),
   diagnostics:()=>({study:study?.debug(),exam:exam?.debug()}),
   _validate:clean
  };
  root.CopeakReadingInk=Object.freeze(api);
  root.addEventListener('pagehide',()=>{for(const view of views)view.finish();});
  return api;
 }
 // Access-gated boot: only available after the reading application has loaded.
 init();
})(window);
