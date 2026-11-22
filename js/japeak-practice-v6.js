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
/* Essential reading controls translated for all 29 instruction languages. */
const extraCore={
  tl:['Simulan ang pagbabasa','Tapusin ang pagbabasa','Subukan muli','Tapusin ang aralin','Pagkakatugma ng pagkilala'],
  th:['เริ่มอ่านออกเสียง','จบการอ่าน','ลองอีกครั้ง','จบบทเรียน','ความตรงของการรู้จำ'],
  my:['စတင်ဖတ်ရန်','ဖတ်ခြင်းပြီးဆုံး','ထပ်စမ်းရန်','သင်ခန်းစာပြီးဆုံး','အသံမှတ်မိမှုတူညီမှု'],
  km:['ចាប់ផ្តើមអាន','បញ្ចប់ការអាន','សាកល្បងម្ដងទៀត','បញ្ចប់មេរៀន','ការផ្គូផ្គងសំឡេង'],
  ne:['पढ्न सुरु गर्नुहोस्','पढाइ सक्नुहोस्','फेरि प्रयास गर्नुहोस्','पाठ समाप्त गर्नुहोस्','पहिचान मिलान'],
  mn:['Уншиж эхлэх','Уншиж дуусгах','Дахин оролдох','Хичээл дуусгах','Танилтын тохирол'],
  si:['කියවීම අරඹන්න','කියවීම අවසන්','නැවත උත්සාහ කරන්න','පාඩම අවසන්','හඳුනාගැනීමේ ගැලපීම'],
  bn:['পড়া শুরু করুন','পড়া শেষ করুন','আবার চেষ্টা করুন','পাঠ শেষ করুন','শনাক্তকরণের মিল'],
  fr:['Commencer la lecture','Terminer la lecture','Réessayer','Terminer la leçon','Correspondance vocale'],
  ru:['Начать чтение','Закончить чтение','Попробовать снова','Завершить урок','Совпадение распознавания'],
  uk:['Почати читати','Закінчити читання','Спробувати знову','Завершити урок','Збіг розпізнавання'],
  hi:['पढ़ना शुरू करें','पढ़ना समाप्त करें','फिर से कोशिश करें','पाठ समाप्त करें','पहचान मिलान'],
  ur:['پڑھنا شروع کریں','پڑھنا ختم کریں','دوبارہ کوشش کریں','سبق ختم کریں','آواز کی شناخت کی مطابقت'],
  ar:['ابدأ القراءة','إنهاء القراءة','حاول مرة أخرى','إنهاء الدرس','تطابق التعرف على الصوت'],
  de:['Lesen starten','Lesen beenden','Erneut versuchen','Lektion beenden','Erkennungsübereinstimmung'],
  it:['Inizia a leggere','Termina lettura','Riprova','Termina lezione','Corrispondenza vocale'],
  tr:['Okumaya başla','Okumayı bitir','Tekrar dene','Dersi bitir','Tanıma eşleşmesi'],
  ms:['Mula membaca','Tamat membaca','Cuba lagi','Tamat pelajaran','Padanan pengecaman'],
  uz:['O‘qishni boshlash','O‘qishni tugatish','Qayta urinish','Darsni tugatish','Tanib olish mosligi'],
  fa:['شروع خواندن','پایان خواندن','تلاش دوباره','پایان درس','تطابق تشخیص گفتار']
};
for(const [code,values] of Object.entries(extraCore)){
  const [start,stop,retry,finish,score]=values;
  supplemental[code]={...supplemental.en,start,stop,retry,finish,score};
}

function label(key){const lang=root.JapeakPracticeLanguage?.()||'ja';return (supplemental[lang]||supplemental.en)[key]||supplemental.en[key]||key;}
function arcSvg(value,labelText,compact=false){
  const percent=Number.isFinite(value)?Math.min(100,Math.max(0,Math.round(value))):null;
  const prefix=compact?'jpk-v6-popup':'jpk-v6-main';
  const hue=percent===null?'emerald':percent>=90?'emerald':percent>=60?'gold':'coral';
  const dash=percent===null?0:percent;
  const gradients={
    emerald:['#66e9c8','#17ae91','#087665'],
    gold:['#ffe0a4','#e8af54','#a97031'],
    coral:['#ffc2a1','#e7836a','#ac4e52']
  };
  const defs=Object.keys(gradients).map(key=>{
    const stops=gradients[key];
    return '<linearGradient id="'+prefix+'-'+key+'" x1="0%" y1="0%" x2="100%" y2="15%">'+
      '<stop offset="0%" stop-color="'+stops[0]+'"/>'+
      '<stop offset="52%" stop-color="'+stops[1]+'"/>'+
      '<stop offset="100%" stop-color="'+stops[2]+'"/></linearGradient>';
  }).join('');
  const path='M27 145 A123 123 0 0 1 273 145';
  const scoreText=percent===null?'—':String(percent);
  const labelSafe=String(labelText).replace(/[&<>"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[char]));
  return '<svg class="jpk-v8-gauge" viewBox="0 0 300 198" role="img" aria-label="'+labelSafe+'" width="340" height="225">'+
    '<defs>'+defs+'<linearGradient id="'+prefix+'-track" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#ebf3ef"/><stop offset="100%" stop-color="#d8e5e1"/></linearGradient></defs>'+
    '<path d="'+path+'" fill="none" stroke="url(#'+prefix+'-track)" stroke-width="23" stroke-linecap="round"/>'+
    '<path id="'+prefix+'-arc" d="'+path+'" fill="none" stroke="url(#'+prefix+'-'+hue+')" stroke-width="23" stroke-linecap="round" pathLength="100" stroke-dasharray="'+dash+' 100" class="jpk-v8-progress"/>'+
    '<path id="'+prefix+'-shine" d="'+path+'" fill="none" stroke="#fff" stroke-opacity=".32" stroke-width="4" stroke-linecap="round" pathLength="100" stroke-dasharray="'+dash+' 100" transform="translate(0,-5)"/>'+
    '<text x="150" y="130" text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-weight="900" fill="#163b50">'+
      '<tspan id="'+prefix+'-number" font-size="65">'+scoreText+'</tspan>'+
      '<tspan id="'+prefix+'-percent" font-size="25" dy="-21" visibility="'+(percent===null?'hidden':'visible')+'">%</tspan>'+
    '</text><text class="jpk-v8-gauge-caption" x="150" y="187" text-anchor="middle" font-family="Noto Sans JP, sans-serif" font-size="12" font-weight="800" fill="#55747b">'+labelSafe+'</text></svg>';
}
function updateGauge(accuracy){
  const number=$('jpk-v6-main-number'),percent=$('jpk-v6-main-percent');
  const arc=$('jpk-v6-main-arc'),shine=$('jpk-v6-main-shine');
  if(!number||!arc||!percent||!shine)return;
  const score=Number.isFinite(accuracy)?Math.max(0,Math.min(100,Math.round(accuracy))):null;
  number.textContent=score===null?'—':String(score);
  percent.setAttribute('visibility',score===null?'hidden':'visible');
  arc.setAttribute('stroke-dasharray',(score??0)+' 100');
  shine.setAttribute('stroke-dasharray',(score??0)+' 100');
  arc.setAttribute('stroke',score===null?'url(#jpk-v6-main-emerald)':score>=90?'url(#jpk-v6-main-emerald)':score>=60?'url(#jpk-v6-main-gold)':'url(#jpk-v6-main-coral)');
  const svg=arc.closest('svg');
  if(svg)svg.setAttribute('aria-label',label('score')+(score===null?'':': '+score+'%'));
}
function buttons(recording,awaiting=false){
  const button=$('mic-btn');
  const finishing=recording||awaiting;
  if(button){
    button.removeAttribute('aria-busy');
    button.disabled=!(root.SpeechRecognition||root.webkitSpeechRecognition);
    button.dataset.action=finishing?'stop':'start';
    button.setAttribute('aria-pressed',finishing?'true':'false');
    button.setAttribute('aria-label',label(finishing?'stop':'start'));
    button.textContent=(finishing?'■ ':'● ')+label(finishing?'stop':'start');
  }
  const panel=$('jpk-v6-score-column');
  if(panel)panel.dataset.recording=recording?'true':awaiting?'waiting':'false';
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
  // Context and translation are always visible; no disclosure click is required.
  const notes=document.createElement('section');notes.id='jpk-v6-notes';notes.className='jpk-v9-notes';
  notes.setAttribute('aria-label',label('notes'));
  const heading=document.createElement('h3');heading.className='jpk-v9-notes-heading';heading.textContent=label('notes');
  notes.append(heading,side);left.append(notes);
  pane.replaceChildren(left,right);
  const controls=$('mic-btn')?.parentElement;
  if(!controls)return;
  const card=$('acc-output')?.parentElement;
  if(card)card.id='jpk-v6-original-score';
  const chart=document.createElement('div');chart.id='jpk-v6-score-chart';chart.className='jpk-v6-score-chart';
  chart.innerHTML='<span class="jpk-v6-mark">JAPEAK · RECOGNITION</span>'+arcSvg(null,label('score'));
  right.prepend(chart);
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
  buttons(false);
  initialized=true;
  root.JapeakPracticeUI?.apply();
}
root.JapeakPracticeView={
  buttons,
  reset(){
    if(!initialized)return;
    buttons(false);
    updateGauge(null);
    closeResult();
  },
  onStarting(){
    const button=$('mic-btn'),panel=$('jpk-v6-score-column');
    if(button){
      button.disabled=false;
      button.dataset.action='starting';
      button.setAttribute('aria-busy','true');
      button.setAttribute('aria-label',label('start'));
      button.textContent='… '+label('start');
    }
    if(panel)panel.dataset.recording='starting';
    updateGauge(null);
  },
  onStart(){
    const button=$('mic-btn');
    if(button)button.removeAttribute('aria-busy');
    buttons(true);
    updateGauge(null);
  },
  // Transcription remains live; the gauge is updated only after the learner ends the reading.
  onInterim(){},
  onWaiting(){buttons(false,true);},
  onError(){buttons(false);updateGauge(null);},
  onStop(score,lessonId,mode){
    buttons(false);
    updateGauge(score);
    if(Number.isFinite(score))void recorded(score,lessonId,mode);
    else openResult(null,false);
  },
  refreshLabels(){
    if(!initialized)return;
    const panel=$('jpk-v6-score-column');
    if(panel?.dataset.recording==='starting')this.onStarting();
    else buttons(panel?.dataset.recording==='true',panel?.dataset.recording==='waiting');
    const notes=document.querySelector('#jpk-v6-notes .jpk-v9-notes-heading');
    if(notes)notes.textContent=label('notes');
    const notesPanel=$('jpk-v6-notes');
    if(notesPanel)notesPanel.setAttribute('aria-label',label('notes'));
    const transcript=document.querySelector('#jpk-v6-transcript-box > div:first-child');
    if(transcript)transcript.textContent=label('transcript');
    const mark=document.querySelector('#jpk-v6-score-chart .jpk-v6-mark');
    if(mark)mark.textContent='JAPEAK · RECOGNITION';
    const caption=document.querySelector('#jpk-v6-score-chart .jpk-v8-gauge-caption');
    if(caption)caption.textContent=label('score');
    root.JapeakPracticeUI?.apply();
  }
};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);
else init();
})(window);
