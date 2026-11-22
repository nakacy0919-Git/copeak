/* Japeak practice chrome: translate instructions without changing Japanese study text. */
(function(root){
'use strict';
const copy={
  ja:{
    subtitle:'にほんご スピーキング れんしゅう',menu:'◀ メニュー',copeak:'Copeakへ',
    model:'お手本をきく',slow:'ゆっくり',context:'いつ使うの？',translation:'どんな意味？',
    notes:'場面・翻訳',voiceHeading:'文字起こし',language:'言語',
    favoriteOff:'☆ お気に入り',favoriteOn:'★ お気に入り',
    favoriteAdd:'お気に入りに追加',favoriteRemove:'お気に入りから削除',
    previous:'前の教材',next:'次の教材',qr:'JapeakのページをQRコードで共有',
    voicePrompt:'音読開始を押してください',voiceListening:'聞いています...',
    voiceUnsupported:'この端末・ブラウザでは音声認識を利用できません。別のブラウザをお試しください。',
    voiceInitFailed:'音声認識を初期化できませんでした。端末設定を確認してください。',
    voiceStartFailed:'音声認識を開始できませんでした。もう一度お試しください。',
    voiceStartTimeout:'マイクの起動を確認できませんでした。もう一度音読開始を押してください。',
    voiceUnknown:'音声認識でエラーが発生しました。もう一度お試しください。',
    statusUnsupported:'音声認識：このブラウザでは利用できません',
    statusInitFailed:'音声認識：初期化できませんでした',
    statusReady:'認識する言語：{language}（対応状況は端末によって異なります）',
    statusListening:'認識中：{language}',
    statusError:'音声認識のエラー：{code}',
    statusFinished:'認識終了：{language}',
    statusNoSpeech:'音声が聞き取れませんでした。もう一度「音読開始」を押してください。',
    statusReceived:'音声を受け取りました。「音読終了」で採点します。',
    statusNoScore:'音声を認識できませんでした。もう一度お試しください。',
    statusStartFirst:'まず「音読開始」を押してください。',
    statusCanceled:'マイクの準備を中止しました。もう一度お試しください。',
    statusStarting:'マイクを起動しています…',
    statusStartTimeout:'音声認識の開始がタイムアウトしました。再度お試しください。',
    statusStartFailed:'マイクを起動できませんでした。もう一度「音読開始」を押してください。',
    errorNotAllowed:'マイクまたは音声認識が許可されていません。端末とブラウザの設定を確認してください。',
    errorService:'この端末では音声認識サービスを利用できません。別のブラウザをお試しください。',
    errorCapture:'マイクが見つかりません。接続やマイクの設定を確認してください。',
    errorNoSpeech:'声が聞き取れませんでした。静かな場所でもう一度お試しください。',
    errorNetwork:'通信エラーが発生しました。インターネット接続を確認してください。',
    errorLanguage:'選択した言語の音声認識は、この端末では利用できません。',
    errorAborted:'音声認識を中断しました。',
    sentenceOne:'1文ずつ練習',sentenceFull:'全文を練習',sentenceCount:'全 {count} 文',
    sentenceProgress:'{current} / {total} 文',
    scoreHelp:'音声認識された言葉とお手本の一致度です。発音そのものの評価ではありません。'
  },
  en:{
    subtitle:'Japanese Speaking Practice',menu:'◀ Menu',copeak:'Copeak',
    model:'Listen to model',slow:'Slow playback',context:'When to use it',translation:'Meaning',
    notes:'Context and meaning',voiceHeading:'Your transcript',language:'Language',
    favoriteOff:'☆ Favorite',favoriteOn:'★ Saved',
    favoriteAdd:'Add to favorites',favoriteRemove:'Remove from favorites',
    previous:'Previous lesson',next:'Next lesson',qr:'Share Japeak with a QR code',
    voicePrompt:'Press Start reading to begin.',voiceListening:'Listening…',
    voiceUnsupported:'Speech recognition is not available in this browser. Please try another browser.',
    voiceInitFailed:'Speech recognition could not start. Check your device settings.',
    voiceStartFailed:'Could not start speech recognition. Please try again.',
    voiceStartTimeout:'Microphone did not respond. Tap Start reading to try again.',
    voiceUnknown:'Speech recognition failed. Please try again.',
    statusUnsupported:'Speech recognition is not supported in this browser.',
    statusInitFailed:'Speech recognition could not be initialized.',
    statusReady:'Recognition language: {language} (availability depends on your device).',
    statusListening:'Listening in {language}…',
    statusError:'Speech recognition error: {code}',
    statusFinished:'Recognition ended: {language}.',
    statusNoSpeech:'No speech was detected. Tap Start reading to try again.',
    statusReceived:'Speech captured. Tap Finish reading to see your score.',
    statusNoScore:'No speech was recognized. Please try again.',
    statusStartFirst:'Tap Start reading first.',
    statusCanceled:'Microphone startup was canceled. Please try again.',
    statusStarting:'Starting the microphone…',
    statusStartTimeout:'Speech recognition timed out. Please try again.',
    statusStartFailed:'Could not start the microphone. Tap Start reading to retry.',
    errorNotAllowed:'Microphone or speech recognition access is blocked. Check browser and device permissions.',
    errorService:'Speech recognition is unavailable on this device. Try another browser.',
    errorCapture:'Microphone not found. Check your device and connection.',
    errorNoSpeech:'No speech detected. Try again in a quieter place.',
    errorNetwork:'Network error. Check your internet connection.',
    errorLanguage:'This device does not support recognition in the selected language.',
    errorAborted:'Speech recognition was canceled.',
    sentenceOne:'Practice one sentence',sentenceFull:'Practice full text',
    sentenceCount:'{count} sentences',sentenceProgress:'Sentence {current} / {total}',
    scoreHelp:'Matches recognized words with the model text; it does not assess pronunciation.'
  }
};
function language(){
  return root.JapeakPracticeLanguage?.()||
    root.document?.getElementById('lang-select')?.value||'ja';
}
function t(key,vars){
  const selected=language();
  let phrase=(copy[selected]||copy.en)[key]||copy.en[key]||copy.ja[key]||key;
  if(vars)phrase=phrase.replace(/\{([a-zA-Z]+)\}/g,(_,name)=>String(vars[name]??''));
  return phrase;
}
function set(id,key){
  const el=document.getElementById(id);
  if(el)el.textContent=t(key);
}
function apply(){
  set('jpk-v9-subtitle','subtitle');
  set('jpk-v9-menu','menu');
  set('jpk-v9-copeak','copeak');
  set('jpk-v9-model-label','model');
  set('jpk-v9-slow-label','slow');
  set('jpk-v9-context-label','context');
  set('jpk-v9-translation-label','translation');
  set('jpk-v9-voice-label','voiceHeading');
  set('jpk-v9-language-label','language');
  const note=document.querySelector('#jpk-v6-notes .jpk-v9-notes-heading');
  if(note)note.textContent=t('notes');
  const favorite=document.getElementById('btn-lesson-favorite');
  if(favorite){
    const pressed=favorite.getAttribute('aria-pressed')==='true';
    favorite.textContent=t(pressed?'favoriteOn':'favoriteOff');
    favorite.title=t(pressed?'favoriteRemove':'favoriteAdd');
    favorite.setAttribute('aria-label',favorite.title);
  }
  const audio=document.getElementById('btn-play-audio');
  if(audio){audio.title=t('model');audio.setAttribute('aria-label',t('model'));}
  const slow=document.getElementById('btn-play-slow');
  if(slow){slow.title=t('slow');slow.setAttribute('aria-label',t('slow'));}
  const prev=document.getElementById('btn-prev');
  if(prev)prev.setAttribute('aria-label',t('previous'));
  const next=document.getElementById('btn-next');
  if(next)next.setAttribute('aria-label',t('next'));
  const qr=document.querySelector('.japeak-qr-button');
  if(qr){qr.title=t('qr');qr.setAttribute('aria-label',t('qr'));}
  const score=document.querySelector('#jpk-v6-original-score [title]');
  if(score)score.title=t('scoreHelp');
  document.documentElement.lang=language();
  const script=document.getElementById('sentence-container');
  if(script)script.lang='ja';
}
root.JapeakPracticeUI={t,apply,language};
})(window);
