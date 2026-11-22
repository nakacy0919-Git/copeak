'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const fromRoot=x=>fs.readFileSync(path.resolve(__dirname,'..',x),'utf8');
const code={
  library:fromRoot('js/japeak-my-storage.js'),
  editor:fromRoot('js/japeak-my.js'),
  i18n:fromRoot('js/japeak-my-i18n.js'),
  responsive:fromRoot('js/japeak-practice-v6.js'),
  app:fromRoot('js/japeak-app.js'),
  top:fromRoot('japeak-top.html'),
  my:fromRoot('japeak-my.html'),
  practice:fromRoot('japeak.html'),
  css:fromRoot('css/japeak-practice-v6.css'),
  photoCss:fromRoot('css/japeak-v5.css')
};
function fakeWindow(){
  const storage=new Map();
  return {localStorage:{
    getItem:key=>storage.has(key)?storage.get(key):null,
    setItem:(key,val)=>storage.set(key,val)
  },indexedDB:null,location:{search:''}};
}
function loadLibrary(window){
  vm.runInNewContext(code.library,{window});
  return window.JapeakMyLibrary;
}
test('all new scripts and existing speech engine parse',()=>{
  for(const key of ['library','editor','i18n','responsive','app'])assert.doesNotThrow(()=>new vm.Script(code[key]),key);
});
test('29 language labels render instructions without changing Japanese target',()=>{
  const window={};
  vm.runInNewContext(code.i18n,{window});
  const locale=window.JapeakMyI18n;
  assert.equal(locale.codes.length,29);
  for(const lang of locale.codes){
    for(const key of ['my','create','read','folders','title','body','save','start','language'])
      assert.ok(locale.t(lang,key),lang+' '+key);
  }
  assert.match(locale.t('id','create'),/materi/);
  assert.match(code.app,/recognition\.lang = 'ja-JP'/);
  assert.match(code.app,/uiOnlyLanguages/);
});
test('personal library supports create, edit, move, rename and safe folder delete',async()=>{
  const db=loadLibrary(fakeWindow());
  const folder=await db.saveFolder('学校');
  const lesson=await db.saveLesson({title:'自己紹介',japanese:'わたしは高校生です。',folderId:folder.id,note:'挨拶'});
  assert.match(lesson.id,/^my_/);
  assert.equal((await db.getLesson(lesson.id)).japanese,'わたしは高校生です。');
  await db.saveFolder('友だち',folder.id);
  assert.equal((await db.listFolders())[0].name,'友だち');
  const other=await db.saveFolder('生活');
  await db.moveLesson(lesson.id,other.id);
  assert.equal((await db.getLesson(lesson.id)).folderId,other.id);
  const edit=await db.saveLesson({...lesson,id:lesson.id,title:'自己紹介 2',folderId:other.id});
  assert.equal(edit.title,'自己紹介 2');
  await db.deleteFolder(other.id);
  assert.equal((await db.getLesson(lesson.id)).folderId,null);
  assert.equal((await db.listLessons()).length,1);
});
test('practice scores persist locally with only lesson id / percentage / time',async()=>{
  const window=fakeWindow(),db=loadLibrary(window);
  const lesson=await db.saveLesson({title:'テスト',japanese:'こんにちは'});
  await db.savePracticeResult(lesson.id,90);
  const rows=await db.listPracticeResults(lesson.id);
  assert.equal(rows.length,1);
  assert.equal(rows[0].accuracy,90);
  assert.equal(rows[0].lessonId,lesson.id);
  assert.equal(rows[0].transcript,undefined);
  assert.ok(window.localStorage.getItem('japeak:personal:v1:records'));
});
test('invalid Japanese lessons and unsupported local audio are rejected',async()=>{
  const db=loadLibrary(fakeWindow());
  await assert.rejects(()=>db.saveLesson({title:'空',japanese:'  '}));
  await assert.rejects(()=>db.saveLesson({title:'音声',japanese:'こんにちは',audioBlob:{size:1}}),/音声ファイルを保存できません/);
});
test('my lesson adapter keeps Japanese as the only target and text is escaped',async()=>{
  const db=loadLibrary(fakeWindow());
  const lesson=await db.saveLesson({title:'My lesson',japanese:'<img src=x onerror=alert(1)>こんにちは'});
  const adapted=db.asPracticeLesson(lesson);
  assert.equal(adapted.myLesson,true);
  assert.equal(adapted.target_speech,lesson.japanese);
  assert.match(code.app,/if \(lesson\.myLesson\) return escapeHtml\(lesson\.japanese/);
  assert.match(code.app,/currentLesson\?\.myLesson/);
});
test('top includes exactly three main entrances',()=>{
  assert.match(code.top,/class="start-btn start-school"/);
  assert.match(code.top,/class="start-btn start-life"/);
  assert.match(code.top,/class="start-btn start-my"/);
  assert.match(code.top,/href="japeak-my\.html"/);
});
test('tablet split / mobile anchored buttons / score modal / backdrop are defined',()=>{
  assert.match(code.css,/#jpk-v6-script-column/);
  assert.match(code.css,/#jpk-v6-score-column/);
  assert.match(code.css,/@media\(max-width:699px\)/);
  assert.match(code.css,/position:fixed/);
  assert.doesNotMatch(code.responsive,/getElementById\('jpk-v6-stop'\)|createElement\('button'\);stop/);
  assert.match(code.responsive,/button\.dataset\.action=finishing\?'stop':'start'/);
  assert.doesNotMatch(code.app,/意味を確認/);
  assert.doesNotMatch(code.app,/JapeakPracticeView\?\.onInterim\(accuracy\)/);
  assert.match(code.css,/grid-template-columns:minmax\(0,1\.45fr\) minmax\(285px,\.7fr\)/);
  assert.match(code.responsive,/jpk-v6-result/);
  assert.match(code.responsive,/jpk-v6-main-arc/);
  assert.match(code.photoCss,/japeak-bg-portrait/);
});
test('90 percent celebration, manual completion and lesson results are wired',()=>{
  assert.match(code.app,/accuracy!==null && accuracy>=90/);
  assert.match(code.app,/manualStopRequested/);
  assert.match(code.app,/JapeakPracticeControls/);
  assert.match(code.responsive,/savePracticeResult\(id,score,mode\)/);
  assert.match(code.app,/awaitingFinish=true/);
});
test('local personal materials and 29-language scripts load before practice app',()=>{
  const script=x=>code.practice.indexOf('src="'+x+'"');
  assert.ok(script('js/japeak-my-storage.js?v=20261122-1')>0);
  assert.ok(script('js/japeak-my-storage.js?v=20261122-1')<script('js/japeak-app.js?v=20261122-10'));
  assert.ok(script('js/japeak-practice-v6.js?v=20261122-10')>script('js/japeak-app.js?v=20261122-10'));
  assert.match(code.practice,/css\/japeak-practice-v6.css/);
  assert.match(code.my,/id="jp-editor"/);
  assert.match(code.my,/id="jp-add-folder"/);
  assert.match(code.my,/id="jp-lesson-list"/);
});


test('iPad microphone remains reusable when learner finishes lesson one and switches to lesson two',()=>{
  const app=code.app;
  const lifecycle=app.slice(app.indexOf('function clearSpeechStartWatchdog()'),app.indexOf('function getPracticeUnits('));
  const setup=app.slice(app.indexOf('function setupSpeechRecognition()'),app.indexOf('function calculateCurrentLessonAccuracy('));
  assert.ok(lifecycle.startsWith('function clearSpeechStartWatchdog()'));
  assert.ok(setup.startsWith('function setupSpeechRecognition()'));
  const nodes=new Map([
    ['mic-btn',{disabled:false,onclick:null,innerHTML:'',textContent:''}],
    ['voice-output',{textContent:''}],
    ['acc-output',{innerText:'',className:''}],
    ['japeak-recognition-status',{textContent:''}]
  ]);
  const records=[];
  let silentStart=false;
  const instances=[];
  class SpeechRecognition{
    constructor(){this.lang='';this.interimResults=false;this.continuous=false;instances.push(this);}
    start(){
      if(silentStart){silentStart=false;return;}
      this.onstart?.();
    }
    stop(){this.onend?.();}
    abort(){this.onend?.();}
    say(sentence){this.onresult?.({results:[{0:{transcript:sentence},isFinal:true}]});}
  }
  const window={
    SpeechRecognition,webkitSpeechRecognition:SpeechRecognition,
    JapeakPracticeView:{
      onStarting(){nodes.get('mic-btn').disabled=false;},
      onStart(){nodes.get('mic-btn').disabled=false;},
      onStop(score,id){records.push({score,id});},
      onWaiting(){nodes.get('mic-btn').disabled=false;},
      onError(){nodes.get('mic-btn').disabled=false;},
      refreshLabels(){nodes.get('mic-btn').disabled=false;},
      reset(){nodes.get('mic-btn').disabled=false;}
    },speechSynthesis:{speaking:false}
  };
  const context={
    window,SpeechRecognition,document:{getElementById:id=>nodes.get(id)},
    $:id=>nodes.get(id),
    navigator:{userAgent:'iPad',platform:'iPad',maxTouchPoints:5},
    console,setTimeout,clearTimeout,URL,
    japeakSpeech:{},currentAudio:null,pendingAudioUrl:null,currentLesson:{id:'one'},
    currentLang:'ja',sentenceMode:false,isRecording:false,hasCelebrated:false,
    recordingStartPending:false,awaitingFinish:false,manualStopRequested:false,
    speechSessionId:0,speechStartWatchdog:null,recognition:null,recognitionFailed:false,
    recentSpeechText:'',isSwapped:false,
    calculateCurrentLessonAccuracy:()=>78,resetMicButton:()=>{},
    jpkText:(key,fallback)=>fallback,
    setRecognitionStatus:message=>{nodes.get('japeak-recognition-status').textContent=message},
    playSuccessSound:()=>{},fireConfetti:()=>{}
  };
  vm.createContext(context);
  vm.runInContext(lifecycle+'\n'+setup,context);
  const mic=nodes.get('mic-btn');
  context.setupSpeechRecognition();
  mic.onclick();
  const first=instances.at(-1);
  first.say('こんにちは');
  assert.equal(nodes.get('voice-output').textContent,'こんにちは');
  mic.onclick();
  assert.equal(records.length,1);
  assert.equal(records[0].id,'one');

  context.stopCurrentPractice();
  context.currentLesson={id:'two'};
  context.setupSpeechRecognition();
  assert.equal(first.onend,null,'old lesson events must be detached');
  assert.equal(mic.disabled,false,'mic must be reusable after switching');
  mic.onclick();
  const second=instances.at(-1);
  second.say('ありがとうございます');
  assert.equal(nodes.get('voice-output').textContent,'ありがとうございます');
  mic.onclick();
  assert.equal(records.length,2);
  assert.equal(records[1].id,'two');

  // A missing iPad onstart must not permanently disable the only recording button.
  context.stopCurrentPractice();
  context.currentLesson={id:'three'};
  context.setupSpeechRecognition();
  silentStart=true;
  mic.onclick();
  assert.equal(mic.disabled,false);
  mic.onclick(); // cancel stuck startup and re-arm without reloading the page
  assert.equal(mic.disabled,false);
  mic.onclick();
  instances.at(-1).say('おはようございます');
  assert.equal(nodes.get('voice-output').textContent,'おはようございます');
  mic.onclick();
  assert.equal(records.at(-1).id,'three');
  context.stopCurrentPractice();
});


test('V9 English practice translations cover prompts, context headings and microphone states',()=>{
  const source=fromRoot('js/japeak-practice-ui-v9.js');
  assert.doesNotThrow(()=>new vm.Script(source));
  const nodes=new Map([
    ['jpk-v9-subtitle',{textContent:''}],
    ['jpk-v9-menu',{textContent:''}],
    ['jpk-v9-copeak',{textContent:''}],
    ['jpk-v9-model-label',{textContent:''}],
    ['jpk-v9-slow-label',{textContent:''}],
    ['jpk-v9-context-label',{textContent:''}],
    ['jpk-v9-translation-label',{textContent:''}],
    ['jpk-v9-voice-label',{textContent:''}],
    ['jpk-v9-language-label',{textContent:''}]
  ]);
  const document={
    getElementById:id=>nodes.get(id)||null,
    querySelector:()=>null,
    documentElement:{lang:'ja'}
  };
  let lang='en';
  const window={JapeakPracticeLanguage:()=>lang};
  vm.runInNewContext(source,{window,document});
  const ui=window.JapeakPracticeUI;
  assert.equal(ui.t('voicePrompt'),'Press Start reading to begin.');
  assert.equal(ui.t('statusReady',{language:'ja-JP'}),'Recognition language: ja-JP (availability depends on your device).');
  assert.match(ui.t('statusStartTimeout'),/timed out/i);
  assert.match(ui.t('errorNoSpeech'),/speech/i);
  assert.equal(ui.t('context'),'When to use it');
  assert.equal(ui.t('translation'),'Meaning');
  ui.apply();
  assert.equal(nodes.get('jpk-v9-subtitle').textContent,'Japanese Speaking Practice');
  assert.equal(nodes.get('jpk-v9-context-label').textContent,'When to use it');
  assert.equal(nodes.get('jpk-v9-translation-label').textContent,'Meaning');
  assert.equal(nodes.get('jpk-v9-voice-label').textContent,'Your transcript');
  assert.equal(nodes.get('jpk-v9-menu').textContent,'◀ Menu');
  assert.equal(document.documentElement.lang,'en');
  lang='ja';ui.apply();
  assert.equal(nodes.get('jpk-v9-context-label').textContent,'いつ使うの？');
  assert.equal(ui.t('voicePrompt'),'音読開始を押してください');
});

test('V9 context stays expanded, empty ornaments are removed and new assets load in order',()=>{
  const view=fromRoot('js/japeak-practice-v6.js');
  const css=fromRoot('css/japeak-practice-v9.css');
  assert.match(view,/notes=document\.createElement\('section'\)/);
  assert.match(view,/notes\.append\(heading,side\)/);
  assert.doesNotMatch(view,/createElement\('details'\)/);
  assert.match(css,/#jpk-v6-script-column::before/);
  assert.match(css,/#jpk-v6-score-column::after/);
  assert.match(css,/content:none!important;display:none!important/);
  assert.match(css,/#jpk-v9-brand h1/);
  const cssIndex=code.practice.indexOf('css/japeak-practice-v9.css');
  assert.ok(cssIndex>code.practice.indexOf('css/japeak-practice-v6.css'));
  const i18n=code.practice.indexOf('js/japeak-practice-ui-v9.js');
  const app=code.practice.indexOf('js/japeak-app.js?v=20261122-10');
  assert.ok(i18n>0 && i18n<app);
  assert.match(code.app,/jpkText\('voicePrompt'/);
  assert.match(code.app,/jpkText\('statusReady'/);
  assert.match(code.app,/JapeakPracticeUI\?\.apply\(\)/);
});
