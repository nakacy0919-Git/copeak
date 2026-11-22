/* Japeak V6 responsive Japanese reading workspace.
   Score is recognition text agreement, not a phonetic pronunciation examination. */
(function(root){
'use strict';
const $=id=>document.getElementById(id);
const SCORE_ARC=100;
let initialized=false,modal=null,previousFocus=null;
const local=key=>root.JapeakMyI18n?.t(root.JapeakPracticeLanguage?.()||'ja',key)||key;
const supplemental={
  ja:{start:'音読開始',stop:'音読終了',retry:'もう一度読む',finish:'学習を終える',score:'認識一致率',transcript:'文字起こし',notes:'場面・翻訳を見る',recorded:'学習記録を保存しました',savedTemporary:'学習記録はこの端末に保存されます',empty:'声が認識されませんでした。もう一度お試しください。'},
  en:{start:'Start reading',stop:'Finish reading',retry:'Try again',finish:'Finish lesson',score:'Recognition match',transcript:'Your transcript',notes:'Context and meaning',recorded:'Practice result saved',savedTemporary:'Saved on this device',empty:'No speech recognized. Please try again.'},
  id:{start:'Mulai membaca',stop:'Selesai membaca',retry:'Coba lagi',finish:'Selesai belajar',score:'Kecocokan ucapan',transcript:'Hasil transkripsi',notes:'Situasi dan arti',recorded:'Hasil latihan disimpan',savedTemporary:'Tersimpan di perangkat ini',empty:'Suara tidak dikenali. Coba lagi.'},
  vi:{start:'Bắt đầu đọc',stop:'Kết thúc đọc',retry:'Thử lại',finish:'Kết thúc bài',score:'Độ khớp nhận dạng',transcript:'Nội dung ghi âm',notes:'Ngữ cảnh và ý nghĩa',recorded:'Đã lưu kết quả',savedTemporary:'Lưu trên thiết bị này',empty:'Chưa nhận dạng được giọng nói.'},
  ko:{start:'낭독 시작',stop:'낭독 종료',retry:'다시 읽기',finish:'학습 마치기',score:'음성 인식 일치율',transcript:'인식된 문장',notes:'상황과 의미',recorded:'학습 기록 저장됨',savedTemporary:'이 기기에 저장됩니다',empty:'음성이 인식되지 않았습니다.'},
  'zh-CN':{start:'开始朗读',stop:'结束朗读',retry:'再试一次',finish:'结束学习',score:'识别匹配率',transcript:'语音转文字',notes:'场景与释义',recorded:'学习记录已保存',savedTemporary:'保存在此设备',empty:'未识别到语音。'},
  'zh-TW':{start:'開始朗讀',stop:'結束朗讀',retry:'再讀一次',finish:'結束學習',score:'辨識吻合率',transcript:'語音轉文字',notes:'情境與意思',recorded:'學習紀錄已儲存',savedTemporary:'儲存在此裝置',empty:'沒有辨識到語音。'},
  pt:{start:'Começar leitura',stop:'Terminar leitura',retry:'Tentar novamente',finish:'Concluir',score:'Correspondência de voz',transcript:'Transcrição',notes:'Contexto e significado',recorded:'Resultado salvo',savedTemporary:'Salvo neste dispositivo',empty:'Fala não reconhecida.'},
  es:{start:'Empezar lectura',stop:'Terminar lectura',retry:'Intentar de nuevo',finish:'Finalizar',score:'Coincidencia de voz',transcript:'Transcripción',notes:'Contexto y significado',recorded:'Resultado guardado',savedTemporary:'Guardado en este dispositivo',empty:'No se reconoció la voz.'}
};
function label(key){const lang=root.JapeakPracticeLanguage?.()||'ja';return (supplemental[lang]||supplemental.en)[key]||supplemental.en[key]||key;}
function arcSvg(value,labelText,compact=false){
  const percent=Number.isFinite(value)?Math.min(100,Math.max(0,Math.round(value))):null;
  const dash=percent===null?0:percent;
  const fill=percent===null?'#9aafb3':percent>=90?'#11866e':percent>=60?'#cf9950':'#a95b4f';
  const w=compact?'232':'260';
  return '<svg viewBox="0 0 260 156" role="img" aria-label="'+labelText+'" width="'+w+'" height="156">'+
    '<path d="M25 125 A105 105 0 0 1 235 125" fill="none" stroke="#dfe8e6" stroke-width="17" stroke-linecap="round" pathLength="100"/>'+
    '<path id="'+(compact?'jpk-v6-popup-arc':'jpk-v6-main-arc')+'" d="M25 125 A105 105 0 0 1 235 125" fill="none" stroke="'+fill+'" stroke-width="17" stroke-linecap="round" pathLength="100" stroke-dasharray="'+dash+' 100"/>'+
    '<text id="'+(compact?'jpk-v6-popup-number':'jpk-v6-main-number')+'" x="130" y="112" text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-weight="900" font-size="44" fill="#173958">'+
    (percent===null?'—':percent+'%')+'</text>'+
    '<text x="130" y="145" text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-size="12" font-weight="800" fill="#536f76">'+labelText+'</text></svg>';
}
function updateGauge(accuracy){
  const number=$('jpk-v6-main-number'),arc=$('jpk-v6-main-arc');
  if(!number||!arc)return;
  const score=Number.isFinite(accuracy)?Math.max(0,Math.min(100,Math.round(accuracy))):null;
  number.textContent=score===null?'—':score+'%';
  arc.setAttribute('stroke-dasharray',(score??0)+' 100');
  arc.setAttribute('stroke',score===null?'#9aafb3':score>=90?'#11866e':score>=60?'#cf9950':'#a95b4f');
}
function buttons(recording,awaiting=false){
  const start=$('mic-btn'),stop=$('jpk-v6-stop');
  if(start){start.disabled=recording||awaiting;start.setAttribute('aria-label',label('start'));start.textContent='● '+label('start');}
  if(stop){stop.disabled=!recording&&!awaiting;stop.setAttribute('aria-label',label('stop'));stop.textContent='■ '+label('stop');}
  const consolePanel=$('jpk-v6-score-column');
  if(consolePanel)consolePanel.dataset.recording=recording?'true':awaiting?'waiting':'false';
}
function openResult(score,successSaved){
  if(!modal)return;
  previousFocus=document.activeElement;
  $('jpk-v6-popup-visual').innerHTML=arcSvg(score,label('score'),true);
  $('jpk-v6-result-message').textContent=score===null?label('empty'):(successSaved?label('recorded'):label('savedTemporary'));
  $('jpk-v6-retry').textContent='↻ '+label('retry');
  $('jpk-v6-finish').textContent=label('finish');
  modal.hidden=false;
  document.body.classList.add('jpk-v6-result-open');
  $('jpk-v6-retry').focus();
}
function closeResult(){
  if(!modal)return;
  modal.hidden=true;document.body.classList.remove('jpk-v6-result-open');
  if(previousFocus?.isConnected)previousFocus.focus();
}
async function recorded(score,id,mode){
  let persisted=false;
  try {
    if(Number.isFinite(score) && id && root.JapeakMyLibrary) {
      await root.JapeakMyLibrary.savePracticeResult(id,score,mode);
      persisted=root.JapeakMyLibrary.getStorageMode()!=='temporary';
    }
  }catch(err){console.warn('Could not store Japeak practice result:',err);}
  if(root.matchMedia?.('(max-width:699px)').matches){
    openResult(score,persisted);
  }else{
    const status=$('japeak-recognition-status');
    if(status)status.textContent=(score===null?label('empty'):(score+'% — '+(persisted?label('recorded'):label('savedTemporary'))));
  }
}
function init(){
  const pane=$('main-pane'),side=$('side-pane');
  if(!pane||!side||pane.children.length<3)return;
  document.body.classList.add('jpk-v6-study');
  const old=Array.from(pane.children);
  const left=document.createElement('section');left.id='jpk-v6-script-column';left.setAttribute('aria-label','日本語の音読本文');
  const right=document.createElement('section');right.id='jpk-v6-score-column';right.setAttribute('aria-label','音声認識と操作');
  left.append(old[0],old[1]);right.append(old[2]);
  const notes=document.createElement('details');notes.id='jpk-v6-notes';
  const summary=document.createElement('summary');summary.textContent=label('notes');
  notes.append(summary,side);left.append(notes);
  pane.replaceChildren(left,right);
  const controls=$('mic-btn')?.parentElement;
  if(!controls)return;
  const card=$('acc-output')?.parentElement;
  if(card)card.id='jpk-v6-original-score';
  const chart=document.createElement('div');chart.id='jpk-v6-score-chart';chart.className='jpk-v6-score-chart';
  chart.innerHTML='<span class="jpk-v6-mark">認識一致率 · RECOGNITION</span>'+arcSvg(null,label('score'));
  right.prepend(chart);
  const stop=document.createElement('button');stop.type='button';stop.id='jpk-v6-stop';stop.className='jpk-v6-stop';
  stop.textContent='■ '+label('stop');stop.disabled=true;
  controls.append(stop);
  const mainButton=$('mic-btn');
  if(mainButton)mainButton.textContent='● '+label('start');
  const voice=$('voice-output');
  if(voice){const transcription=voice.parentElement;transcription.id='jpk-v6-transcript-box';const line=transcription.querySelector('div');if(line)line.textContent=label('transcript');}
  // Native dialog-like result overlay, also usable on iPhone Safari.
  modal=document.createElement('div');
  modal.id='jpk-v6-result';modal.className='jpk-v6-result';modal.hidden=true;
  modal.innerHTML='<section role="dialog" aria-modal="true" aria-labelledby="jpk-v6-result-title" tabindex="-1" class="jpk-v6-result-dialog">'+
    '<p class="jpk-v6-crest">✿ JAPEAK ✿</p><h2 id="jpk-v6-result-title">'+label('score')+'</h2>'+
    '<div id="jpk-v6-popup-visual"></div><p id="jpk-v6-result-message" role="status"></p>'+
    '<div class="jpk-v6-result-actions"><button type="button" id="jpk-v6-retry" class="jpk-v6-repeat">'+label('retry')+'</button>'+
    '<button type="button" id="jpk-v6-finish" class="jpk-v6-end">'+label('finish')+'</button></div></section>';
  document.body.append(modal);
  $('jpk-v6-finish').addEventListener('click',closeResult);
  $('jpk-v6-retry').addEventListener('click',()=>{
    closeResult();
    if(mainButton && !mainButton.disabled)mainButton.click();
  });
  document.addEventListener('keydown',e=>{
    if(!modal.hidden && e.key==='Escape'){e.preventDefault();closeResult();}
    if(!modal.hidden && e.key==='Tab'){
      const b1=$('jpk-v6-retry'),b2=$('jpk-v6-finish');
      if(e.shiftKey && document.activeElement===b1){e.preventDefault();b2.focus();}
      else if(!e.shiftKey && document.activeElement===b2){e.preventDefault();b1.focus();}
    }
  });
  stop.addEventListener('click',()=>root.JapeakPracticeControls?.finish?.());
  buttons(false);
  initialized=true;
}
root.JapeakPracticeView={
  buttons,
  reset(){
    if(!initialized)return;
    buttons(false);
    updateGauge(null);closeResult();
    const end=$('jpk-v6-stop');if(end)end.textContent='■ '+label('stop');
    const start=$('mic-btn');if(start)start.textContent='● '+label('start');
  },
  onStart(){buttons(true);updateGauge(null);},
  onInterim(score){if(initialized)updateGauge(score);},
  onWaiting(){buttons(false,true);},
  onError(){buttons(false);},
  onStop(score,lessonId,mode){
    buttons(false);updateGauge(score);
    if(Number.isFinite(score)) void recorded(score,lessonId,mode);
    else openResult(null,false);
  },
  refreshLabels(){
    if(!initialized)return;
    const stop=$('jpk-v6-stop'),start=$('mic-btn');
    if(stop)stop.textContent='■ '+label('stop');
    if(start)start.textContent='● '+label('start');
    const notes=document.querySelector('#jpk-v6-notes summary');if(notes)notes.textContent=label('notes');
    const transcript=document.querySelector('#jpk-v6-transcript-box > div:first-child');if(transcript)transcript.textContent=label('transcript');
    const chart=$('jpk-v6-score-chart');if(chart)chart.innerHTML='<span class="jpk-v6-mark">JAPEAK · RECOGNITION</span>'+arcSvg(null,label('score'));
  }
};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);
else init();
})(window);
