/* Copeak Story Theater — isolated from Classroom and its score database. */
(function () {
'use strict';
const $=id=>document.getElementById(id);
const state={stories:[],story:null,index:0,japanese:false,sequence:false,audio:null,token:0,recognition:null,
  progress:{},tab:'words',questions:[],qIndex:0,score:0,answered:false,studyTab:'words',checkIndex:0,checkChoice:null,readingStartedAt:0,readingTranscript:'',readingRun:0};
const Recognition=window.SpeechRecognition||window.webkitSpeechRecognition;
const roles={S:'Subject / 主語',V:'Verb / 動詞',O:'Object / 目的語',C:'Complement / 補語',M:'Modifier / 修飾語'};
const key='copeak_story_theater_progress_v1';
const esc=v=>String(v==null?'':v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const norm=v=>String(v||'').toLowerCase().replace(/[^a-z0-9\s']/g,' ').replace(/\s+/g,' ').trim();
const tokenize=v=>norm(v).split(' ').filter(Boolean);
function distance(a,b){let prev=Array.from({length:b.length+1},(_,i)=>i);for(let i=0;i<a.length;i++){let next=[i+1];for(let j=0;j<b.length;j++)next.push(Math.min(next[j]+1,prev[j+1]+1,prev[j]+(a[i]===b[j]?0:1)));prev=next;}return prev[b.length];}
function status(message){$('narrationStatus').textContent=message;}
function save(completed=false){if(!state.story)return;const p=state.progress[state.story.id]||{};p.scene=state.index;p.lastOpened=Date.now();if(completed)p.completed=true;state.progress[state.story.id]=p;try{localStorage.setItem(key,JSON.stringify(state.progress));}catch(_){}}
function readProgress(){try{const p=JSON.parse(localStorage.getItem(key)||'{}');if(p&&typeof p==='object'&&!Array.isArray(p))state.progress=p;}catch(_){}}
function cancelMic(){const r=state.recognition;state.recognition=null;state.readingRun++;if(r)try{r.abort();}catch(_){}$('micIndicator').classList.remove('is-listening');$('finishReading').hidden=true;$('startReading').disabled=false;}
function stop(reset=true){state.token++;if(state.audio){try{state.audio.pause();state.audio.removeAttribute('src');state.audio.load();}catch(_){}state.audio=null;}if('speechSynthesis'in window)window.speechSynthesis.cancel();if(reset)state.sequence=false;$('playNarration').classList.remove('st-active');$('playNarration').textContent='▶ 物語を聞く';$('playNarration').setAttribute('aria-pressed','false');}
function view(name){['catalog','reader','review'].forEach(k=>$(k+'View').hidden=k!==name);$('showCatalog').hidden=name==='catalog';window.scrollTo(0,0);}
function cards(){
  const host=$('storyCards');host.replaceChildren();
  state.stories.forEach((s,i)=>{
    const b=document.createElement('button');b.type='button';b.className='st-card';b.dataset.storyId=s.id;
    const cover=s.scenes?.[0]?.image||'',fallback=s.id==='the-box-of-letters'?'assets/story-theater/the-box-of-letters/cover.svg':'';
    const completed=Boolean(state.progress[s.id]?.completed),number=String(i+1).padStart(2,'0');
    b.setAttribute('aria-label',s.title+'、英語レベル'+s.level+'。物語を開く');
    b.innerHTML='<span class="st-card-art"><img src="'+esc(cover)+'" alt="'+esc(s.title+' の物語の場面')+'" loading="lazy" decoding="async"><span class="st-card-number">'+number+'</span></span>'+
      '<span class="st-card-copy"><span class="st-card-eyebrow">ENGLISH LEVEL '+esc(s.level)+' · '+esc(s.cefr)+'</span>'+
      '<strong class="st-card-title" lang="en">'+esc(s.title)+'</strong><span class="st-card-ja">'+esc(s.subtitle)+'</span>'+
      '<span class="st-card-description" lang="en">'+esc(s.description)+'</span>'+
      '<span class="st-card-meta">'+s.scenes.length+' SCENES · ORIGINAL STORY</span>'+
      '<span class="st-card-cta">'+(completed?'✓ 読了済み・もう一度読む':'物語を開く')+'<span class="st-card-cta-arrow" aria-hidden="true">↗</span></span></span>';
    const img=b.querySelector('img');
    img.addEventListener('error',()=>{if(fallback&&!img.dataset.usedFallback){img.dataset.usedFallback='true';img.src=fallback;}else{img.hidden=true;}});
    b.addEventListener('click',()=>open(s));host.append(b);
  });
}
async function populateAmbientReel(){
  const host=$('ambientReel');if(!host)return;
  const images=state.stories.flatMap(story=>story.scenes.map(scene=>scene.image)).filter(path=>typeof path==='string'&&/^assets\\/story-theater\\/[a-z0-9-]+\\/scene-\\d+\\.(webp|png|jpg|svg)$/i.test(path));
  const verified=await Promise.all(images.slice(0,24).map(src=>new Promise(resolve=>{
    const test=new Image();test.onload=()=>resolve(src);test.onerror=()=>resolve(null);test.src=src;
  })));
  const available=[...new Set(verified.filter(Boolean))].slice(0,12);
  host.replaceChildren();
  available.forEach((src,i)=>{
    const img=document.createElement('img');img.className='st-ambient-shot';img.src=src;img.alt='';img.decoding='async';
    img.style.animationDuration=(available.length*9)+'s';img.style.animationDelay=(-i*9)+'s';host.append(img);
  });
}
function open(story){stop();cancelMic();state.story=story;$('readerView').dataset.storyId=story.id;const previous=Number(state.progress[story.id]?.scene);state.index=Number.isInteger(previous)?Math.max(0,Math.min(previous,story.scenes.length-1)):0;state.japanese=false;
$('toggleJapanese').textContent='🇯🇵 和訳';$('toggleJapanese').setAttribute('aria-pressed','false');$('storyTitle').textContent=story.title;$('storySubtitle').textContent=story.subtitle;$('storyLevel').textContent='ENGLISH LEVEL '+story.level+' · '+story.cefr;view('reader');scene();save();}
function underline(text){const holder=$('sceneEnglish');holder.replaceChildren();const candidates=state.story.vocab.flatMap((w,i)=>[w.term,...(Array.isArray(w.forms)?w.forms:[])].map(term=>({term,index:i}))).filter(x=>/^[a-z ]+$/i.test(x.term)).sort((a,b)=>b.term.length-a.term.length);
if(!candidates.length){holder.textContent=text;return;}const lookup=new Map(candidates.map(x=>[x.term.toLowerCase(),x.index]));const pattern=new RegExp('\\b(?:'+candidates.map(x=>x.term.replace(/ /g,'\\s+')).join('|')+')\\b','gi');
let cursor=0,match;while((match=pattern.exec(text))!==null){if(match.index>cursor)holder.append(document.createTextNode(text.slice(cursor,match.index)));const b=document.createElement('button');b.type='button';b.className='st-word';b.textContent=match[0];b.dataset.wordIndex=String(lookup.get(match[0].toLowerCase()));b.setAttribute('aria-label',match[0]+' の解説');holder.append(b);cursor=pattern.lastIndex;}if(cursor<text.length)holder.append(document.createTextNode(text.slice(cursor)));}
function scene(){const s=state.story.scenes[state.index],img=$('sceneImage'),idx=state.index;$('sceneProgressText').textContent=(idx+1)+' / '+state.story.scenes.length+' scenes';$('sceneProgressBar').style.width=Math.round((idx+1)/state.story.scenes.length*100)+'%';$('sceneCaption').textContent='SCENE '+String(idx+1).padStart(2,'0');$('sceneDescription').textContent=s.alt;img.alt=s.alt;img.hidden=false;$('imageFallback').hidden=true;
img.onload=()=>{if(state.index===idx){img.hidden=false;$('imageFallback').hidden=true;}};img.onerror=()=>{if(state.index===idx){img.hidden=true;$('imageFallback').hidden=false;}};img.src=s.image;underline(s.text);$('sceneJapanese').textContent=s.ja;$('sceneJapanese').hidden=!state.japanese;$('previousScene').disabled=idx===0;$('nextScene').textContent=idx===state.story.scenes.length-1?'復習へ ›':'次の場面 ›';$('practiceFeedback').hidden=true;showStudyPanel();renderSidePanel();status('準備完了');}
function changeScene(index,continueAudio=false){if(!state.story||index<0)return;if(index>=state.story.scenes.length){review('words');return;}stop(!continueAudio);cancelMic();state.index=index;scene();save();if(continueAudio)narrate();}
function completeAudio(token){if(token!==state.token)return;state.audio=null;if(state.sequence){if(state.index+1===state.story.scenes.length){save(true);review('words');}else changeScene(state.index+1,true);}else{$('playNarration').classList.remove('st-active');$('playNarration').textContent='▶ 物語を聞く';$('playNarration').setAttribute('aria-pressed','false');status('読み上げ完了');}}
function browserVoice(token){if(token!==state.token)return;state.audio=null;if(!('speechSynthesis'in window)){state.sequence=false;status('音声再生に対応していません');return;}const u=new SpeechSynthesisUtterance(state.story.scenes[state.index].text);u.lang='en-US';u.rate=.88;u.onend=()=>completeAudio(token);u.onerror=()=>{if(token===state.token){state.sequence=false;status('音声を再生できませんでした');$('playNarration').classList.remove('st-active');}};status('ブラウザ音声で読み上げ中');window.speechSynthesis.speak(u);}
function narrate(){if(!state.story)return;cancelMic();stop(false);const token=state.token,s=state.story.scenes[state.index];$('playNarration').classList.add('st-active');$('playNarration').textContent='■ 再生を停止';$('playNarration').setAttribute('aria-pressed','true');status('MP3を読み込み中');const a=new Audio();state.audio=a;let failed=false;const fallback=()=>{if(failed||token!==state.token)return;failed=true;try{a.pause();}catch(_){}browserVoice(token);};a.onended=()=>completeAudio(token);a.onerror=fallback;a.preload='auto';a.src=s.audio;try{const p=a.play();if(p&&p.then)p.then(()=>{if(token===state.token)status('MP3ナレーション再生中');}).catch(fallback);}catch(_){fallback();}}
function dialog(title,html){stop();cancelMic();$('dialogTitle').textContent=title;$('dialogContent').innerHTML=html;if(!$('studyDialog').open)$('studyDialog').showModal();}
function word(index){const w=state.story.vocab[index];if(!w)return;dialog('Vocabulary / 語彙解説','<div class="st-definition"><strong lang="en">'+esc(w.term)+'</strong><small>'+esc(w.pos)+'</small><p><b>'+esc(w.ja)+'</b></p><p>'+esc(w.detail)+'</p><p><em lang="en">'+esc(w.example)+'</em></p></div><div class="st-dialog-tools"><button type="button" data-word-sound="'+index+'">🔊 発音を聞く</button><button type="button" data-word-practice="'+index+'">🎙️ 発音を練習</button></div><p id="wordPracticeResult" role="status" aria-live="polite"></p>');}
function vocabulary(){dialog('Vocabulary & Expressions / 語彙・熟語','<div class="st-word-grid">'+state.story.vocab.map((w,i)=>'<button type="button" class="st-word-tile" data-word-open="'+i+'"><b lang="en">'+esc(w.term)+'</b><small>'+esc(w.pos)+'</small><span>'+esc(w.ja)+'</span></button>').join('')+'</div>');}
function grammar(){const g=state.story.scenes[state.index].grammar;const html=g.parts.map(p=>{const role=roles[p.role]?p.role:'M';return '<div class="st-grammar-part" data-role="'+role+'"><b>'+esc(roles[role])+'</b><span lang="en">'+esc(p.value)+'</span></div>';}).join('');dialog('Grammar Visualizer / 文法構造','<p class="st-grammar-focus" lang="en">'+esc(g.focus)+'</p><div class="st-grammar-parts">'+html+'</div><div class="st-grammar-note">'+esc(g.note)+'</div><p style="font-size:.76rem;color:#7189a1">S＝主語、V＝動詞、O＝目的語、C＝補語、M＝修飾語（学習用の簡略表示）</p>');}
function recognize(expected,callback){if(!Recognition){callback(null,'このブラウザでは音声認識が使えません（対応ブラウザでお試しください）。');return;}stop();cancelMic();const r=new Recognition();state.recognition=r;r.lang='en-US';r.continuous=false;r.interimResults=false;r.maxAlternatives=1;const start=Date.now();let settled=false;r.onresult=e=>{if(state.recognition!==r||settled)return;settled=true;callback({text:e.results[0][0].transcript,expected,seconds:Math.max(1,(Date.now()-start)/1000)},null);};r.onerror=e=>{if(state.recognition!==r||settled)return;settled=true;callback(null,'認識エラー: '+String(e.error||'unknown')+'。マイクの許可を確認してください。');};r.onend=()=>{if(state.recognition!==r)return;state.recognition=null;$('startReading').textContent='🎙️ この場面を音読';if(!settled)callback(null,'音声を認識できませんでした。もう一度お試しください。');};try{r.start();}catch(_){state.recognition=null;callback(null,'マイクを開始できませんでした。');}}

function posInfo(w){const p=w.pos||'';if(p.includes('形容'))return {type:'adj',icon:'🟦',short:'Adj.',label:'形容詞'};
if(p.includes('動詞')&&!p.includes('助動'))return {type:'verb',icon:'🟥',short:'V',label:p};
if(p.includes('名詞')&&!p.includes('代名'))return {type:'noun',icon:'🟩',short:'N',label:p};
return {type:'adv',icon:'🟪',short:p.includes('句')?'Exp.':p.includes('助動')?'Aux.':'Adv.',label:p};}
function highlightVocab(){const text=norm(state.story.scenes[state.index].text);
const used=state.story.vocab.filter(w=>[w.term,...(w.forms||[])].some(t=>text.includes(norm(t))));
return [...used,...state.story.vocab.filter(w=>!used.includes(w))].slice(0,6);}
function wordCard(w){const i=state.story.vocab.indexOf(w),p=posInfo(w);return '<div class="st-side-word"><button type="button" class="st-side-details" data-side-word="'+i+'"><b lang="en">'+esc(w.term)+'</b></button><button type="button" class="st-side-sound" data-side-sound="'+i+'" aria-label="'+esc(w.term)+'を発音">🔊</button><span class="st-pos-chip" data-pos="'+p.type+'" title="'+esc(p.label)+'">'+p.icon+' '+p.short+'</span><span class="st-side-meaning">'+esc(w.ja)+'</span></div>';}
function showStudyPanel(){$('readingPanel').hidden=true;$('studyDefault').hidden=false;$('micIndicator').classList.remove('is-listening');}
function renderSidePanel(){if(!state.story)return;document.querySelectorAll('[data-study-tab]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.studyTab===state.studyTab)));
const host=$('sideContent');if(state.studyTab==='words'){const words=highlightVocab();host.innerHTML='<p class="st-side-intro">この場面の重要語を中心に確認。🔊で発音、語句を押すと詳しい解説。</p><div class="st-side-vocab-grid">'+words.map(wordCard).join('')+'</div>';return;}
if(state.studyTab==='phrases'){const phrases=state.story.vocab.filter(w=>/(句|定型|表現|助動)/.test(w.pos));host.innerHTML='<p class="st-side-intro">物語で使われる表現やフレーズを確認しましょう。</p><div class="st-side-vocab-grid">'+phrases.map(wordCard).join('')+'</div>';return;}
const q=state.story.questions[state.checkIndex%state.story.questions.length];const chosen=state.checkChoice;
host.innerHTML='<p class="st-side-intro">STORY CHECK · '+(state.checkIndex+1)+' / '+state.story.questions.length+'</p><div class="st-check-item"><p class="st-check-prompt" lang="en">'+esc(q.question)+'</p><div class="st-check-options">'+q.options.map((opt,i)=>'<button type="button" data-check-choice="'+i+'" '+(chosen!==null?'disabled':'')+' class="'+(chosen!==null?(i===q.answer?'is-correct':i===chosen?'is-wrong':''):'')+'">'+esc(opt)+'</button>').join('')+'</div>'+(chosen!==null?'<p class="st-check-explain">'+(chosen===q.answer?'✓ 正解！ ':'正解を確認しましょう。 ')+esc(q.explanation)+'</p><button type="button" class="st-check-next" data-check-next>次の問題へ ›</button>':'')+'</div>';}
function transcriptView(finalText,interim=''){const box=$('readingTranscript');box.replaceChildren();if(finalText)box.append(document.createTextNode(finalText));if(interim){if(finalText)box.append(document.createTextNode(' '));const span=document.createElement('span');span.className='st-transcript-interim';span.textContent=interim;box.append(span);}if(!finalText&&!interim)box.textContent='聞き取った英文をここに表示します。';}
function finishReadingResult(error){$('micIndicator').classList.remove('is-listening');$('finishReading').hidden=true;$('retryReading').hidden=false;$('startReading').disabled=false;
const transcript=state.readingTranscript.trim();if(!transcript){$('readingLiveStatus').textContent=error||'音声を認識できませんでした。マイクを確認して再挑戦してください。';$('readingScore').hidden=true;return;}
const expected=tokenize(state.story.scenes[state.index].text),actual=tokenize(transcript);
const accuracy=Math.max(0,Math.round((1-distance(expected,actual)/Math.max(expected.length,1))*100));
const seconds=Math.max(1,(performance.now()-state.readingStartedAt)/1000);
const wpm=Math.round(actual.length*60/seconds);
$('readingTranscript').textContent=transcript;
$('readingAccuracy').textContent=accuracy+'%';$('readingWpm').textContent=wpm+' wpm';
$('readingRank').textContent=accuracy>=90?'A':accuracy>=75?'B':accuracy>=60?'C':'RETRY';
$('readingScore').hidden=false;$('readingLiveStatus').textContent=error?'一部認識エラーが発生しました。結果を確認してください。':'音読完了！ 結果を確認しましょう。';}
function finishSceneReading(){const r=state.recognition;if(!r)return;$('readingLiveStatus').textContent='文字起こしを確定しています…';$('finishReading').disabled=true;try{r.stop();}catch(_){state.recognition=null;finishReadingResult();}}
function practiceScene(){if(!state.story)return;stop();cancelMic();$('studyDefault').hidden=true;$('readingPanel').hidden=false;$('retryReading').hidden=true;$('readingScore').hidden=true;$('finishReading').hidden=false;$('finishReading').disabled=false;
$('readingLiveStatus').textContent='マイクを準備しています…';state.readingTranscript='';transcriptView('');$('startReading').disabled=true;
if(!Recognition){$('readingLiveStatus').textContent='このブラウザは音声認識に対応していません。Chromeなどの対応環境でお試しください。';$('finishReading').hidden=true;$('retryReading').hidden=false;return;}
if(!window.isSecureContext){$('readingLiveStatus').textContent='音読認識にはHTTPSで開く必要があります。';$('finishReading').hidden=true;$('retryReading').hidden=false;return;}
const run=++state.readingRun,rec=new Recognition();state.recognition=rec;rec.lang='en-US';rec.interimResults=true;rec.continuous=true;rec.maxAlternatives=1;state.readingStartedAt=performance.now();let finalText='',interimText='',errorText='';
rec.onstart=()=>{if(state.recognition!==rec||run!==state.readingRun)return;state.readingStartedAt=performance.now();$('micIndicator').classList.add('is-listening');$('readingLiveStatus').textContent='認識中：英文を自然な速さで読み上げてください。';};
rec.onresult=e=>{if(state.recognition!==rec||run!==state.readingRun)return;finalText='';interimText='';
for(let i=0;i<e.results.length;i++){const result=e.results[i],part=result[0]?.transcript||'';if(result.isFinal)finalText+=(finalText?' ':'')+part.trim();else interimText+=(interimText?' ':'')+part.trim();}
state.readingTranscript=finalText;transcriptView(finalText,interimText);};
rec.onerror=e=>{if(state.recognition!==rec||run!==state.readingRun)return;const code=String(e.error||'unknown');
errorText=code==='not-allowed'||code==='service-not-allowed'?'マイクが許可されていません。ブラウザの設定でマイクを許可してください。':code==='no-speech'?'音声を検出できませんでした。周囲の騒音やマイクを確認してください。':'音声認識エラー: '+code;
$('readingLiveStatus').textContent=errorText;};
rec.onend=()=>{if(state.recognition!==rec||run!==state.readingRun)return;state.recognition=null;state.readingTranscript=[finalText,interimText].filter(Boolean).join(' ').trim();finishReadingResult(errorText);};
try{rec.start();}catch(e){state.recognition=null;$('finishReading').hidden=true;$('retryReading').hidden=false;$('startReading').disabled=false;$('readingLiveStatus').textContent='マイクを開始できませんでした。アクセス許可をご確認ください。';}
}
function practiceWord(i){const w=state.story.vocab[i],el=$('wordPracticeResult');if(!w)return;if(el)el.textContent='🎙️ '+w.term+' と発音してください。';recognize(w.term.replace(/\.\.\./g,' '),(r,error)=>{const out=$('wordPracticeResult');if(out)out.textContent=error||('認識結果: '+r.text+(norm(r.text)===norm(r.expected)?' ✓ 一致しました':' · もう一度練習しましょう'));});}
function speakWord(i){const w=state.story.vocab[i];if(!w)return;stop();cancelMic();if(!('speechSynthesis'in window)){const result=$('wordPracticeResult');if(result)result.textContent='音声合成非対応です';else status('音声合成非対応です');return;}const u=new SpeechSynthesisUtterance(w.term.replace(/\.\.\./g,' '));u.lang='en-US';u.rate=.8;window.speechSynthesis.speak(u);}
function shuffle(items){const a=items.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function makeVocabQuiz(){return shuffle(state.story.vocab).slice(0,Math.min(6,state.story.vocab.length)).map(w=>{const opts=shuffle([w.ja,...shuffle(state.story.vocab.filter(v=>v.term!==w.term)).slice(0,3).map(v=>v.ja)]);return {question:'“'+w.term+'” の意味は？',options:opts,answer:opts.indexOf(w.ja),explanation:w.detail};});}
function review(tab){stop();cancelMic();if(!state.story)return;if(state.index===state.story.scenes.length-1)save(true);view('review');$('reviewTitle').textContent=state.story.title+' · Review';tabChange(tab||'words');}
function tabChange(tab){state.tab=tab;document.querySelectorAll('[data-review-tab]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.reviewTab===tab)));if(tab==='words'){$('reviewContent').innerHTML='<div class="st-word-grid">'+state.story.vocab.map((w,i)=>'<button class="st-word-tile" type="button" data-review-word="'+i+'"><b lang="en">'+esc(w.term)+'</b><small>'+esc(w.pos)+'</small><span>'+esc(w.ja)+'</span></button>').join('')+'</div>';return;}state.questions=tab==='vocabQuiz'?makeVocabQuiz():state.story.questions;state.qIndex=0;state.score=0;state.answered=false;quiz();}
function quiz(){const host=$('reviewContent');if(state.qIndex>=state.questions.length){host.innerHTML='<div class="st-quiz-counter">RESULT</div><h2>'+state.score+' / '+state.questions.length+' 正解</h2><p>解説を読み直して、もう一度挑戦できます。</p><button type="button" class="st-next-quiz" data-restart>もう一度挑戦</button>';return;}const q=state.questions[state.qIndex];host.innerHTML='<div class="st-quiz-counter">QUESTION '+(state.qIndex+1)+' / '+state.questions.length+'</div><p class="st-quiz-question">'+esc(q.question)+'</p><div class="st-quiz-options">'+q.options.map((option,i)=>'<button type="button" data-choice="'+i+'">'+esc(option)+'</button>').join('')+'</div><div id="answerExplanation" hidden></div>';}
function answer(i){if(state.answered)return;state.answered=true;const q=state.questions[state.qIndex],correct=i===q.answer;if(correct)state.score++;$('reviewContent').querySelectorAll('[data-choice]').forEach(b=>{const k=Number(b.dataset.choice);b.disabled=true;if(k===q.answer)b.classList.add('is-correct');else if(k===i)b.classList.add('is-wrong');});const out=$('answerExplanation');out.hidden=false;out.className='st-answer-explanation';out.innerHTML='<strong>'+(correct?'✓ 正解！':'正解と解説を確認しましょう')+'</strong><p>'+esc(q.explanation)+'</p><button class="st-next-quiz" type="button" data-next>'+(state.qIndex+1===state.questions.length?'結果を見る':'次の問題へ ›')+'</button>';}
$('showCatalog').addEventListener('click',()=>{stop();cancelMic();view('catalog');cards();});
$('backToCatalog').addEventListener('click',()=>{stop();cancelMic();view('catalog');cards();});
$('previousScene').addEventListener('click',()=>changeScene(state.index-1));
$('nextScene').addEventListener('click',()=>changeScene(state.index+1));
$('playNarration').addEventListener('click',()=>{if(state.sequence){stop();status('停止しました');}else{state.sequence=true;narrate();}});
$('pauseNarration').addEventListener('click',()=>{stop();status('停止しました');});
$('toggleJapanese').addEventListener('click',function(){state.japanese=!state.japanese;$('sceneJapanese').hidden=!state.japanese;this.textContent=state.japanese?'🇯🇵 和訳OFF':'🇯🇵 和訳';this.setAttribute('aria-pressed',String(state.japanese));});
$('openGrammar').addEventListener('click',grammar);
$('startReading').addEventListener('click',practiceScene);
$('finishReading').addEventListener('click',finishSceneReading);
$('retryReading').addEventListener('click',practiceScene);
$('returnToStudy').addEventListener('click',()=>{cancelMic();showStudyPanel();renderSidePanel();});
document.querySelectorAll('[data-study-tab]').forEach(b=>b.addEventListener('click',()=>{state.studyTab=b.dataset.studyTab;state.checkChoice=null;renderSidePanel();}));
$('sideContent').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
if(b.hasAttribute('data-side-word'))word(Number(b.dataset.sideWord));
else if(b.hasAttribute('data-side-sound'))speakWord(Number(b.dataset.sideSound));
else if(b.hasAttribute('data-check-choice')){if(state.checkChoice!==null)return;state.checkChoice=Number(b.dataset.checkChoice);renderSidePanel();}
else if(b.hasAttribute('data-check-next')){state.checkIndex=(state.checkIndex+1)%state.story.questions.length;state.checkChoice=null;renderSidePanel();}
});
$('sceneEnglish').addEventListener('click',e=>{const b=e.target.closest('[data-word-index]');if(b)word(Number(b.dataset.wordIndex));});
$('replayStory').addEventListener('click',()=>{stop();cancelMic();state.index=0;view('reader');scene();save();});
$('closeStudyDialog').addEventListener('click',()=>{cancelMic();$('studyDialog').close();});
$('studyDialog').addEventListener('close',cancelMic);
$('studyDialog').addEventListener('click',function(e){if(e.target===this)this.close();});
$('dialogContent').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.hasAttribute('data-word-open'))word(Number(b.dataset.wordOpen));else if(b.hasAttribute('data-word-sound'))speakWord(Number(b.dataset.wordSound));else if(b.hasAttribute('data-word-practice'))practiceWord(Number(b.dataset.wordPractice));});
document.querySelectorAll('[data-review-tab]').forEach(b=>b.addEventListener('click',()=>tabChange(b.dataset.reviewTab)));
$('reviewContent').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.hasAttribute('data-review-word'))word(Number(b.dataset.reviewWord));else if(b.hasAttribute('data-choice'))answer(Number(b.dataset.choice));else if(b.hasAttribute('data-next')){state.qIndex++;state.answered=false;quiz();}else if(b.hasAttribute('data-restart'))tabChange(state.tab);});
document.addEventListener('keydown',e=>{if($('readerView').hidden||$('studyDialog').open||e.altKey||e.ctrlKey||e.metaKey)return;if(e.target&&/INPUT|TEXTAREA|SELECT/.test(e.target.tagName))return;if(e.key==='ArrowRight'){e.preventDefault();changeScene(state.index+1);}else if(e.key==='ArrowLeft'){e.preventDefault();changeScene(state.index-1);}});
window.addEventListener('pagehide',()=>{stop();cancelMic();});
(async()=>{readProgress();try{const res=await fetch('./data/story-theater-stories.json',{cache:'no-store'});if(!res.ok)throw Error('HTTP '+res.status);const d=await res.json();if(!Array.isArray(d.stories)||!d.stories.length)throw Error('教材形式が不正です');state.stories=d.stories.filter(s=>s&&s.id&&Array.isArray(s.scenes)&&s.scenes.length&&Array.isArray(s.vocab)&&Array.isArray(s.questions));cards();populateAmbientReel();const wanted=new URLSearchParams(location.search).get('story');const selected=state.stories.find(s=>s.id===wanted);if(selected)open(selected);}catch(err){$('loadError').hidden=false;$('loadError').textContent='ストーリーを読み込めませんでした: '+err.message;}})();
})();
