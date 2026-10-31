/* Copeak Chunk Vocabulary Check: standalone local-only prototype.
   NOT a standardized CEFR/Eiken test; difficulties are provisional.
   Deliberately does not access CopeakDB, Classroom, Firebase, Supabase or audio. */
(function (root) {
  'use strict';
  const KEY = 'copeak_chunk_diagnosis_v1';
  const BANK_MANIFEST = 'data/chunks-v7-manifest.json';
  const DIAGNOSTIC = 'data/v8-diagnostic-800.json';
  const V8_LEVELS = Object.freeze({
    ja:['中学初級・英検5級を参考','中学中級・英検4級を参考','中学卒業・英検3級を参考','高校中級・英検準2級を参考','高校上級・英検準2級プラスを参考','高校卒業・英検2級を参考','大学中級・英検準1級を参考','大学上級・英検1級を参考'],
    en:['Beginner secondary / Eiken Grade 5 reference','Intermediate secondary / Eiken Grade 4 reference','Secondary completion / Eiken Grade 3 reference','Upper secondary / Eiken Pre-2 reference','Upper secondary advanced / Eiken Pre-2 Plus reference','Upper secondary completion / Eiken Grade 2 reference','University intermediate / Eiken Pre-1 reference','University advanced / Eiken Grade 1 reference']
  });
  const COUNTS = Object.freeze({quick:25,deep:70});
  const clamp=(x,min,max)=>Math.max(min,Math.min(max,x));
  const LANGUAGES = {
    ja:{back:'← ホーム',title:'文脈を読み解く、語彙力の診断。',intro:'例文の中のチャンクを理解できるか。正誤に応じて難易度が変わる適応型診断です。',chunks:'学習チャンク数',levels:'暫定レベル数',modes:'診断モード',chooseMode:'診断モードを選ぶ',quick:'Quick 診断',quickDetail:'25問・短時間で今の力を確認',deep:'Deep 診断',deepDetail:'70問・より詳しく推定',lastResult:'前回の診断結果',important:'重要：',caveat:'問題の難易度は検証中です。結果は学習のための暫定目安で、英検・CEFRの公式判定ではありません。履歴はこのブラウザにのみ保存されます。',question:'例文の強調されたチャンクに最も近い意味を選んでください。',unknown:'わからない',next:'次の問題へ →',quit:'診断を中断する（結果は保存しない）',adaptive:'正誤によって難易度が変わります',correctFeedback:'正解！',wrongFeedback:'正解：',unknownFeedback:'今回は「わからない」を選びました。正解：',soundOn:'効果音 ON',soundOff:'効果音 OFF',autoNext:'自動で次の問題へ',answerWrong:'残念！',answerRight:'正解！',answerUnknown:'わからない',completed:'診断完了',resultTitle:'現在のチャンク語彙力',estimated:'推定レベル（暫定）',estimateRange:'推定の幅',notCertified:'参考値・公式認定ではありません',correct:'正解',unknownCount:'わからない',mode:'モード',breakdown:'出題レベルごとの結果',review:'復習したいチャンク',resultNote:'診断結果はこのブラウザにのみ保存されます。ホーム画面に戻るとレベルが表示されます。',backHome:'Copeak ホームへ',restart:'もう一度診断する',errorTitle:'問題を読み込めませんでした',prototype:'診断レベルは検証中',noReview:'今回の復習項目はありません',quitConfirm:'回答途中の診断を終了しますか？（結果は保存されません）',saveError:'ブラウザに結果を保存できませんでした。ホーム画面への表示は更新されない可能性があります。',lastLabel:'前回',latest:'暫定レベル',loading:'問題バンクを読み込んでいます。',invalidData:'問題データが不完全です。ファイルの再配置を確認してください。',networkError:'Live ServerなどのWebサーバーを使用してください。data/chunks-v7-manifest.json を読み込めません。'},
    en:{back:'← Home',title:'Understand English in context.',intro:'Read the example sentence and choose the meaning of the highlighted chunk. Difficulty adapts as you go.',chunks:'Learning chunks',levels:'Provisional levels',modes:'Check modes',chooseMode:'Choose a mode',quick:'Quick Check',quickDetail:'25 questions · a short estimate',deep:'Deep Check',deepDetail:'70 questions · a more detailed estimate',lastResult:'Your previous result',important:'Important: ',caveat:'Difficulty estimates are being evaluated. Results are provisional learning indicators, not official CEFR or Eiken scores. History is saved only in this browser.',question:'Choose the meaning of the highlighted chunk in the sentence.',unknown:"I don't know",next:'Next question →',quit:'End without saving',adaptive:'Difficulty adapts to your answers',correctFeedback:'Correct!',wrongFeedback:'Correct answer: ',unknownFeedback:'You chose “I don’t know.” Answer: ',soundOn:'Sound ON',soundOff:'Sound OFF',autoNext:'Next question automatically',answerWrong:'Not quite',answerRight:'Correct!',answerUnknown:'Not sure',completed:'Check complete',resultTitle:'Your current chunk vocabulary',estimated:'Estimated level (provisional)',estimateRange:'Estimated range',notCertified:'For learning only · not certified',correct:'Correct',unknownCount:"Don't know",mode:'Mode',breakdown:'Results by item level',review:'Chunks to review',resultNote:'Your result is saved only in this browser and will appear on the Copeak home screen.',backHome:'Copeak home',restart:'Check again',errorTitle:'Cannot load questions',prototype:'Provisional level assessment',noReview:'No items to review this time',quitConfirm:'Leave this incomplete check without saving?',saveError:'Unable to save in this browser. The home-screen level may not update.',lastLabel:'Last checked',latest:'Provisional level',loading:'Loading questions…',invalidData:'The question bank is incomplete. Please check the installed files.',networkError:'Use a local web server such as Live Server. Could not load data/chunks-v7-manifest.json.'}
  };
  LANGUAGES.ja.currentLevel='現在の推定レベル';LANGUAGES.en.currentLevel='Current estimated level';
  LANGUAGES.ja.provisional='暫定・学習用';LANGUAGES.en.provisional='Provisional · learning use';
  LANGUAGES.ja.previousLevel='ひとつ前';LANGUAGES.en.previousLevel='Previous';
  LANGUAGES.ja.attempts='受検回数';LANGUAGES.en.attempts='Attempts';
  LANGUAGES.ja.recentAccuracy='直近の正答率';LANGUAGES.en.recentAccuracy='Latest accuracy';
  LANGUAGES.ja.trend='成長の記録';LANGUAGES.en.trend='Progress over time';
  LANGUAGES.ja.noHistory='診断するとレベルの推移がここに表示されます';LANGUAGES.en.noHistory='Complete a check to see your progress here';
  LANGUAGES.ja.oneHistory='初回の結果';LANGUAGES.en.oneHistory='First result';
  LANGUAGES.ja.modeNote='例文で理解を確認し、成長を記録します。';LANGUAGES.en.modeNote='Read in context and track your learning.';
  LANGUAGES.ja.correctChunk='正解のチャンク';LANGUAGES.en.correctChunk='Correct chunk';
  Object.assign(LANGUAGES.ja,{
    v8Intro:'診断用候補800件（各レベル100件）から出題します。既存5,000件は学習用として保持。',
    v8EvidenceTitle:'判定の根拠と限界',v8GuidanceTitle:'次に学習するとよい領域',
    v8LevelReference:'学習段階の参考（未校正）',v8Export:'匿名の試行回答CSVを保存',
    v8PilotNote:'CSVは本人が操作したときだけ端末内に保存されます。氏名・メール・日時は含みません。',
    v8Insufficient:'このレベルの回答数が少ないため、得意・不得意を判断できません。',
    v8LowConfidence:'これは統計的に校正された信頼度ではありません。英検の取得級や学年を断定するものではありません。'
  });
  Object.assign(LANGUAGES.en,{
    v8Intro:'Checks use 800 diagnostic candidates (100 per level). The full 5,000-item learning bank is preserved.',
    v8EvidenceTitle:'Evidence and limits',v8GuidanceTitle:'Recommended review',
    v8LevelReference:'Learning-stage reference (not calibrated)',v8Export:'Save anonymous pilot-response CSV',
    v8PilotNote:'The CSV downloads to your device only on request. It excludes names, emails and timestamps.',
    v8Insufficient:'Too few answers in this level to classify strengths or weaknesses.',
    v8LowConfidence:'Not a statistically calibrated confidence rating. This is not a certified Eiken or school-grade result.'
  });
  // A 4-option multiple-choice model with a fixed 24% guessing floor.
  // MAP estimate with a conservative prior; used ONLY as an uncalibrated prototype.
  const probability=(ability,level)=>0.24+0.72/(1+Math.exp(-1.2*(ability-level)));
  function posterior(history, prior=4.4) {
    const values=[]; let total=0;
    for(let x=1;x<=8.00001;x+=0.05){
      const theta=Math.min(8,Number(x.toFixed(2)));
      let log=-0.5*Math.pow((theta-prior)/1.75,2);
      for(const item of history){const p=probability(theta,item.level);log+=item.correct?Math.log(p):Math.log1p(-p);}
      values.push({theta,log});
    }
    const maximum=Math.max(...values.map(v=>v.log));
    for(const item of values){item.weight=Math.exp(item.log-maximum);total+=item.weight;}
    let mean=0;for(const item of values)mean+=item.theta*item.weight/total;
    let sum=0,lower=1,upper=8,hadLower=false;
    for(const item of values){sum+=item.weight/total;if(!hadLower&&sum>=0.1){lower=item.theta;hadLower=true}if(sum>=0.9){upper=item.theta;break}}
    return {theta:mean,level:clamp(Math.round(mean),1,8),range:[clamp(Math.floor(lower),1,8),clamp(Math.ceil(upper),1,8)]};
  }
  function similarity(a,b){
    const compact=s=>String(s).replace(/[\s\-–・、,.;:()（）〜～]/g,'').toLowerCase();
    a=compact(a);b=compact(b);
    if(a===b||a.includes(b)||b.includes(a))return 1;
    const tokens=s=>new Set(Array.from({length:Math.max(0,s.length-1)},(_,i)=>s.slice(i,i+2)));
    const A=tokens(a),B=tokens(b),overlap=[...A].filter(k=>B.has(k)).length;
    return overlap/Math.max(1,A.size+B.size-overlap);
  }
  function validateBank(payload){
    const arr=payload?.questions;
    if(payload?.schemaVersion!==3||!Array.isArray(arr)||arr.length<1600||payload.calibration!=='teacher-review-required')throw new Error('Invalid contextual chunk bank');
    const seen=new Set(),counts=Array(8).fill(0);
    for(const q of arr){
      const chunk=q.chunk?.trim(),example=q.example_en?.trim(),highlight=q.highlight_en?.trim();
      if(!/^CK[1-8]-\d{3}$/.test(q.id)||seen.has(q.id)||!Number.isInteger(q.level)||q.level<1||q.level>8||!chunk||!q.meaning_ja?.trim()||!q.meaning_en?.trim()||!example||!highlight||!example.toLowerCase().includes(highlight.toLowerCase()))throw new Error('Invalid contextual item: '+q.id);
      seen.add(q.id);counts[q.level-1]++;
    }
    if(counts.some(n=>n<200))throw new Error('Not enough items at each level');
    return arr;
  }
  function pickQuestion(bank,used,target,priorUsed=[],random=Math.random,usedFamilies=new Set()){
    // Every diagnostic candidate is one independent family by default.
    // No repeat of the same family within a check; previous items are discouraged.
    const fresh=bank.filter(q=>!used.has(q.id)&&(!q.family_id||!usedFamilies.has(q.family_id)));
    const candidates=fresh.length?fresh:bank.filter(q=>!used.has(q.id));
    if(!candidates.length)return null;
    let best=null,bestScore=Infinity;
    for(const q of candidates){
      const score=Math.abs(q.level-target)*1.25+(priorUsed.includes(q.id)?2.2:0)+random()*0.85;
      if(score<bestScore){bestScore=score;best=q;}
    }
    return best;
  }
  function makeOptions(item,bank,language='ja',random=Math.random){
    const key=language==='ja'?'meaning_ja':'meaning_en';
    const answer=item[key];
    // v8: stable, dual-language checked candidate distractors; teacher review still pending.
    if(Array.isArray(item.distractor_ids)){
      const lookup=new Map(bank.map(q=>[q.id,q]));
      const foils=item.distractor_ids.map(id=>lookup.get(id));
      if(foils.length!==3||foils.some(q=>!q)||new Set([answer,...foils.map(q=>q[key])]).size!==4){
        throw new Error('Invalid v8 distractor set for '+item.id);
      }
      const options=[{text:answer,correct:true},...foils.map(q=>({text:q[key],correct:false}))];
      for(let i=options.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[options[i],options[j]]=[options[j],options[i]];}
      return options;
    }
    // Distractors use a comparable vocabulary level but must have different meanings;
    // a character-overlap filter avoids near-duplicate meanings in the same item.
    const pool=bank.filter(q=>q.id!==item.id&&Math.abs(q.level-item.level)<=1)
      .map(q=>({meaning:q[key],distance:similarity(q[key],answer),level:q.level,random:random()}))
      .filter(q=>q.distance<0.36)
      .sort((a,b)=>Math.abs(a.level-item.level)-Math.abs(b.level-item.level)||a.random-b.random);
    const picked=[];
    for(const c of pool){if(picked.length===3)break;if(picked.some(p=>similarity(p.meaning,c.meaning)>0.35))continue;picked.push(c);}
    if(picked.length!==3)throw new Error('Cannot create distinct answer choices');
    const items=[{text:answer,correct:true},...picked.map(p=>({text:p.meaning,correct:false}))];
    for(let i=items.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[items[i],items[j]]=[items[j],items[i]];}
    return items;
  }
  function validateV8(payload,original){
    const arr=payload?.questions;
    if(payload?.schemaVersion!==1||payload?.calibration!=='uncalibrated-teacher-review-required'||!Array.isArray(arr)||arr.length!==800)throw new Error('V8 diagnostic candidate bank invalid');
    const sourceIds=new Set(original.map(q=>q.id)), seen=new Set(),families=new Set(),counts=Array(8).fill(0);
    for(const q of arr){
      if(!sourceIds.has(q.id)||seen.has(q.id)||!q.family_id||families.has(q.family_id)||q.v8_status!=='CANDIDATE_NOT_REVIEWED')throw new Error('V8 candidate mismatch: '+q.id);
      if(!Array.isArray(q.distractor_ids)||q.distractor_ids.length!==3||new Set([q.id,...q.distractor_ids]).size!==4||q.distractor_ids.some(id=>!sourceIds.has(id)))throw new Error('V8 choice IDs invalid: '+q.id);
      seen.add(q.id);families.add(q.family_id);counts[q.level-1]++;
    }
    if(counts.some(n=>n!==100)||arr.some(q=>q.distractor_ids.some(id=>!seen.has(id))))throw new Error('V8 diagnostic level/choice coverage invalid');
    return arr;
  }
  function evidenceFor(summary){
    const answers=Array.isArray(summary.answers)?summary.answers:[];
    const ids=new Set(answers.map(a=>a.family_id||a.id));
    const levels=new Set(answers.map(a=>a.level));
    const coverage=Array.from(levels).sort((a,b)=>a-b);
    const results=[];
    for(let lv=1;lv<=8;lv++){
      const sample=answers.filter(a=>a.level===lv);
      if(sample.length>=4)results.push({level:lv,count:sample.length,correct:sample.filter(a=>a.correct).length,accuracy:sample.filter(a=>a.correct).length/sample.length});
    }
    return {uniqueFamilies:ids.size,coveredLevels:coverage,perLevel:results,
      weakest:results.filter(x=>x.accuracy<0.6).sort((a,b)=>a.accuracy-b.accuracy).slice(0,3)};
  }
  function makePilotCSV(summary){
    // Deliberately excludes timestamps, learner name, profile, device and browser data.
    const header=['diagnostic_version','mode','item_id','level','correct','unknown','response_ms'];
    const safe=(value)=>String(value).replace(/^[=+@-]/,'');
    const records=(summary?.answers||[]).map(a=>['v8',summary.mode,a.id,a.level,Number(Boolean(a.correct)),Number(Boolean(a.unknown)),Math.max(0,Math.min(120000,Number(a.ms)||0))].map(safe).join(','));
    return '\ufeff'+[header.join(','),...records].join('\r\n');
  }
  function loadHistory(){try{const a=JSON.parse(localStorage.getItem(KEY)||'[]');return Array.isArray(a)?a.filter(x=>x?.version===1&&['copeak-chunks-prototype-2026-10','copeak-chunks-context-2026-10'].includes(x.bank)&&Number.isInteger(x.level)&&x.level>=1&&x.level<=8).slice(0,40):[]}catch(_){return []}}
  function saveSummary(summary){try{localStorage.setItem(KEY,JSON.stringify([summary,...loadHistory()].slice(0,40)));return true}catch(_){return false}}
  const CORE=Object.freeze({KEY,COUNTS,probability,posterior,similarity,validateBank,validateV8,evidenceFor,makePilotCSV,pickQuestion,makeOptions});
  root.CopeakChunkCore=CORE;
  if(typeof document==='undefined')return;
  let bank=[],currentSession=null,lang='ja',mode='quick',lastResult=null;
  // Short feedback is intentional: choice -> clear visual/audio response -> next item.
  const AUTO_DELAY = Object.freeze({correct:680,wrong:2200,unknown:2000});
  const SOUND_KEY = 'copeak_vocab_sound_v1';
  let soundEnabled=true, advanceTimer=null, audioContext=null;
  try { soundEnabled=localStorage.getItem(SOUND_KEY)!=='off'; } catch (_) { /* storage may be blocked */ }
  function cancelAdvance(){if(advanceTimer!==null){clearTimeout(advanceTimer);advanceTimer=null;}}
  function updateSoundButton(){
    const button=$('vcSound');if(!button)return;
    button.setAttribute('aria-pressed',String(soundEnabled));
    $('vcSoundIcon').textContent=soundEnabled?'♫':'♪';
    $('vcSoundLabel').textContent=text(soundEnabled?'soundOn':'soundOff');
    button.title=$('vcSoundLabel').textContent;button.setAttribute('aria-label',button.title);
  }
  function feedbackSound(correct,unknown){
    if(!soundEnabled || unknown)return;
    try{
      const Context=root.AudioContext||root.webkitAudioContext;
      if(!Context)return;
      if(!audioContext)audioContext=new Context();
      if(audioContext.state==='suspended')audioContext.resume().catch(()=>{});
      const now=audioContext.currentTime;
      const notes=correct?[[650,0,.085],[890,.075,.135]]:[[260,0,.11],[190,.13,.16]];
      for(const [hz,offset,duration] of notes){
        const oscillator=audioContext.createOscillator(),volume=audioContext.createGain(),start=now+offset;
        oscillator.type=correct?'sine':'triangle';oscillator.frequency.setValueAtTime(hz,start);
        volume.gain.setValueAtTime(.0001,start);volume.gain.exponentialRampToValueAtTime(correct?.065:.045,start+.015);
        volume.gain.exponentialRampToValueAtTime(.0001,start+duration);
        oscillator.connect(volume);volume.connect(audioContext.destination);
        oscillator.start(start);oscillator.stop(start+duration+.02);
      }
    }catch(_){/* Browsers may block audio; never interrupt the test. */}
  }
  function flashAnswer(session){
    const status=session.responded,flash=$('vcAnswerFlash');if(!status)return;
    flash.classList.toggle('is-correct',status.correct);
    flash.classList.toggle('is-wrong',!status.correct);
    $('vcAnswerMark').textContent=status.correct?'○':'×';
    setText($('vcAnswerTitle'),text(status.correct?'answerRight':status.unknown?'answerUnknown':'answerWrong'));
    const correction=$('vcCorrectionBlock');correction.hidden=status.correct;
    setText($('vcCorrectionLabel'),text('correctChunk'));
    setText($('vcCorrectionChunk'),session.item.chunk);
    setText($('vcCorrectionMeaning'),lang==='ja'?session.item.meaning_ja:session.item.meaning_en);
    setText($('vcAutoNext'),text('autoNext'));
    flash.hidden=false;
  }
  function clearFlash(){const flash=$('vcAnswerFlash');if(!flash)return;flash.hidden=true;flash.classList.remove('is-correct','is-wrong');}

  const $=id=>document.getElementById(id);
  const text=(key)=>LANGUAGES[lang][key]||key;
  function setText(el,str){if(el)el.textContent=str;}
  const show=(id)=>{for(const k of ['vcIntro','vcQuiz','vcResult','vcError'])$(k).hidden=k!==id;document.body.classList.toggle('vc-is-quiz',id==='vcQuiz');};
  function readLanguage(){
    const query=new URLSearchParams(location.search).get('ui');
    let saved=null;try{saved=localStorage.getItem('copeak_lang')}catch(_){/* no storage */}
    return query==='ja'||query==='en'?query:(saved==='ja'||!saved?'ja':'en');
  }
  function translate(){
    document.documentElement.lang=lang; $('vcUILanguage').value=lang;updateSoundButton();
    for(const element of document.querySelectorAll('[data-t]'))setText(element,text(element.dataset.t));
    if(currentSession)renderQuestion();else if(lastResult)renderResult(lastResult);
    else displayLast();
  }
  function drawTrend(target,history){
    if(!target)return;
    target.replaceChildren();
    const recent=history.slice(0,8).reverse();
    if(!recent.length){const empty=document.createElement('p');empty.className='vc-trend-empty';empty.textContent=text('noHistory');target.appendChild(empty);return;}
    const NS='http://www.w3.org/2000/svg';
    const svg=document.createElementNS(NS,'svg');svg.setAttribute('viewBox','0 0 540 120');svg.setAttribute('preserveAspectRatio','none');svg.setAttribute('role','img');
    svg.setAttribute('aria-label',text('trend')+': '+recent.map(r=>'Lv.'+r.level).join(' → '));
    const points=recent.map((r,i)=>({x:recent.length===1?270:30+480*i/(recent.length-1),y:105-(r.level-1)*12.5,level:r.level}));
    for(const lv of [2,4,6,8]){const line=document.createElementNS(NS,'line');let y=105-(lv-1)*12.5;for(const [k,v] of Object.entries({x1:12,x2:529,y1:y,y2:y,stroke:'#e6edf8','stroke-width':1}))line.setAttribute(k,v);svg.appendChild(line)}
    if(points.length>1){
      const area=document.createElementNS(NS,'path');const d=points.map((p,i)=>(i?'L':'M')+p.x+','+p.y).join(' ');
      area.setAttribute('d',d+' L'+points[points.length-1].x+',112 L'+points[0].x+',112 Z');area.setAttribute('fill','#dbeafe');area.setAttribute('opacity','.7');svg.appendChild(area);
      const path=document.createElementNS(NS,'path');path.setAttribute('d',d);path.setAttribute('stroke','#4377ee');path.setAttribute('stroke-width','3.5');path.setAttribute('stroke-linejoin','round');path.setAttribute('fill','none');svg.appendChild(path);
    }
    for(const p of points){const c=document.createElementNS(NS,'circle');c.setAttribute('cx',p.x);c.setAttribute('cy',p.y);c.setAttribute('r','5');c.setAttribute('fill','#4a73df');c.setAttribute('stroke','white');c.setAttribute('stroke-width','2');svg.appendChild(c)}
    target.appendChild(svg);
    const copy=document.createElement('div');copy.className='vc-trend-axis';
    const a=document.createElement('span');a.textContent=recent.length===1?text('oneHistory'):new Date(recent[0].at).toLocaleDateString(lang==='ja'?'ja-JP':'en-US');
    const b=document.createElement('span');b.textContent=new Date(recent[recent.length-1].at).toLocaleDateString(lang==='ja'?'ja-JP':'en-US');
    if(recent.length>1)copy.append(a,b);else copy.append(a);target.appendChild(copy);
  }
  function displayLast(){
    const history=loadHistory(),last=history[0],prev=history[1];
    setText($('vcDashboardLevel'),last?'Lv.'+last.level:'—');
    setText($('vcDashboardPrevious'),prev?'Lv.'+prev.level:'—');
    setText($('vcDashboardCount'),String(history.length)+(history.length===40?'+':''));
    setText($('vcDashboardAccuracy'),last&&last.total?Math.round(last.correct/last.total*100)+'%':'—');
    const delta=$('vcDashboardDelta');delta.hidden=!prev;
    if(prev){const diff=last.level-prev.level;delta.textContent=diff>0?'↗ +'+diff:diff<0?'↘ '+diff:'→ ±0';delta.classList.toggle('is-down',diff<0)}
    setText($('vcTrendNote'),history.length>1?(lang==='ja'?'直近'+Math.min(8,history.length)+'回':'Last '+Math.min(8,history.length)):'');
    drawTrend($('vcTrendGraph'),history);
    const old=$('vcLast');if(old)old.hidden=true;
  }
  function renderQuestion(){
    const session=currentSession;if(!session)return;
    const q=session.item,choices=session.options;
    setText($('vcModeName'),`${session.mode==='quick'?'⚡ Quick':'📊 Deep'} · ${session.total} ${lang==='ja'?'問':'questions'}`);
    setText($('vcQuestionLevel'),`Lv.${q.level} / 8`);
    setText($('vcNumber'),`${session.answers.length+1} / ${session.total}`);
    $('vcProgressFill').style.width=`${100*session.answers.length/session.total}%`;
    // Render the actual sentence using text nodes, never HTML from the bank.
    const phrase=$('vcPhrase'),raw=q.example_en,needle=q.highlight_en;
    const at=raw.toLowerCase().indexOf(needle.toLowerCase());
    phrase.replaceChildren();
    if(at>=0){phrase.appendChild(document.createTextNode(raw.slice(0,at)));const mark=document.createElement('mark');mark.className='vc-target-chunk';mark.textContent=raw.slice(at,at+needle.length);phrase.appendChild(mark);phrase.appendChild(document.createTextNode(raw.slice(at+needle.length)))}
    else phrase.textContent=raw;
    const el=$('vcOptions');el.replaceChildren();
    for(const [i,choice] of choices.entries()){
      const btn=document.createElement('button');btn.type='button';btn.className='vc-option';btn.disabled=Boolean(session.responded);
      btn.dataset.index=String(i);const keyboard=document.createElement('span');keyboard.className='vc-key';keyboard.textContent=String(i+1);
      const meaning=document.createElement('span');meaning.textContent=choice.text;btn.append(keyboard,meaning);
      if(session.responded){if(choice.correct)btn.classList.add('correct');else if(session.responded.index===i)btn.classList.add('wrong');}
      btn.addEventListener('click',()=>submit(i));el.appendChild(btn);
    }
    const done=Boolean(session.responded);$('vcUnknown').disabled=done;$('vcUnknown').hidden=done;
    $('vcFeedback').hidden=!done;
    if(done){
      const answer=choices.find(c=>c.correct).text;
      setText($('vcFeedback'),session.responded.correct?text('correctFeedback'):(session.responded.unknown?text('unknownFeedback'):text('wrongFeedback'))+(!session.responded.correct?answer:''));
      flashAnswer(session);
    }else clearFlash();
  }
  function nextQuestion(){
    cancelAdvance();clearFlash();
    const session=currentSession;if(!session)return;
    // Eight broad-range probes precede adaptive selection. They are not an Eiken equating process.
    const probes=[4,2,6,1,8,3,7,5];
    const target=session.answers.length<8?probes[session.answers.length]:
      clamp(Math.round(session.estimate.theta+(session.lastCorrect===null?0:session.lastCorrect?0.4:-0.4)),1,8);
    const priorUsed=loadHistory().slice(0,5).flatMap(result=>Array.isArray(result.itemIds)?result.itemIds:[]);
    const item=pickQuestion(bank,session.used,target,priorUsed,Math.random,session.usedFamilies);
    if(!item){showError('Question pool exhausted');return;}
    session.item=item;session.used.add(item.id);if(item.family_id)session.usedFamilies.add(item.family_id);session.options=makeOptions(item,bank,lang);session.responded=null;session.started=performance.now();
    renderQuestion();
  }
  function begin(nextMode){
    cancelAdvance();clearFlash();
    mode=nextMode;
    const total=COUNTS[mode];if(!bank.length){showError(text('networkError'));return;}
    const previous=loadHistory()[0]?.estimate;
    const prior=Number.isFinite(previous)?clamp((previous+4.4)/2,1,8):4.4;
    currentSession={mode,total,used:new Set(),usedFamilies:new Set(),answers:[],estimate:posterior([],prior),prior,item:null,responded:null,lastCorrect:null,started:0,options:[]};
    lastResult=null;show('vcQuiz');nextQuestion();window.scrollTo({top:0,behavior:'instant'});
  }
  function submit(index){
    const session=currentSession;if(!session||session.responded)return;
    const choice=index===null?null:session.options[index];if(index!==null&&!choice)return;
    const correct=Boolean(choice?.correct);const unknown=index===null;
    const response={id:session.item.id,level:session.item.level,family_id:session.item.family_id||session.item.id,correct,unknown,ms:Math.round(performance.now()-session.started)};
    session.answers.push(response);session.lastCorrect=correct;
    session.estimate=posterior(session.answers,session.prior);
    session.responded={index,correct,unknown};renderQuestion();
    feedbackSound(correct,unknown);
    const thisQuestion=session.item.id;
    advanceTimer=setTimeout(()=>{
      advanceTimer=null;
      // Clicking, navigation or a new session must never advance a stale question.
      if(currentSession!==session||!session.responded||session.item.id!==thisQuestion)return;
      if(session.answers.length>=session.total)finish();else nextQuestion();
    },correct?AUTO_DELAY.correct:unknown?AUTO_DELAY.unknown:AUTO_DELAY.wrong);
  }
  function finish(){
    cancelAdvance();clearFlash();
    const s=currentSession;if(!s||s.answers.length!==s.total)return;
    const est=s.estimate;
    const summary={version:1,bank:'copeak-chunks-context-2026-10',at:new Date().toISOString(),mode:s.mode,total:s.total,
      correct:s.answers.filter(a=>a.correct).length,unknown:s.answers.filter(a=>a.unknown).length,
      level:est.level,estimate:Number(est.theta.toFixed(2)),range:est.range,answers:s.answers.map(a=>({id:a.id,level:a.level,correct:a.correct,unknown:a.unknown,ms:a.ms})),
      itemIds:s.answers.map(a=>a.id),diagnosticVersion:'v8',selectionPolicy:'800-provisional-distinct-family-probes',provisional:true};
    const saved=saveSummary(summary);
    lastResult=summary;currentSession=null;show('vcResult');renderResult(summary);
    if(!saved){const p=document.createElement('p');p.className='vc-note';p.textContent=text('saveError');$('vcResult').appendChild(p);}
    window.dispatchEvent(new Event('copeak:vocabulary-updated'));window.scrollTo({top:0,behavior:'instant'});
  }
  function renderResult(s){
    const levelLabel=V8_LEVELS[lang][clamp(s.level,1,8)-1];
    setText($('vcV8Reference'),text('v8LevelReference')+': '+levelLabel);
    const e=evidenceFor(s);
    const actual=s.answers.filter(a=>a.family_id).length;
    setText($('vcV8Evidence'),lang==='ja'?
      `独立した表現ファミリー：${e.uniqueFamilies}種類／${s.total}問。出題済みレベル：${e.coveredLevels.map(n=>'Lv.'+n).join('、')}。同一表現の文脈違いは同一診断で重複させない設計です。`:
      `${e.uniqueFamilies} expression families / ${s.total} questions; sampled levels: ${e.coveredLevels.map(n=>'Lv.'+n).join(', ')}. Family reuse is prevented within a session.`);
    const weakest=e.weakest;
    setText($('vcV8Guidance'),weakest.length?(lang==='ja'?
      `重点復習の候補：${weakest.map(x=>'Lv.'+x.level+'（'+x.correct+'/'+x.count+'）').join('、')}。ただし4問以上解いたレベルだけを参考表示しています。`:
      `Potential review focus: ${weakest.map(x=>'Lv.'+x.level+' ('+x.correct+'/'+x.count+')').join(', ')}. Only levels with at least 4 answers are included.`):text('v8Insufficient'));
    setText($('vcV8Limit'),text('v8LowConfidence'));
    setText($('vcScoreLevel'),`Lv.${s.level}`);setText($('vcRange'),`Lv.${s.range[0]}–${s.range[1]}`);
    setText($('vcRight'),`${s.correct} / ${s.total}`);setText($('vcSkip'),String(s.unknown));setText($('vcResultMode'),s.mode==='quick'?'Quick':'Deep');
    const output=$('vcBreakdown');output.replaceChildren();
    for(let level=1;level<=8;level++){
      const subset=s.answers.filter(a=>a.level===level);if(!subset.length)continue;
      const entry=document.createElement('div'),heading=document.createElement('strong'),sub=document.createElement('span');
      heading.textContent=`Lv.${level}`;sub.textContent=`${subset.filter(a=>a.correct).length} / ${subset.length}`;entry.append(heading,sub);output.appendChild(entry);
    }
    const review=$('vcReview');review.replaceChildren();const ids=new Set();
    for(const a of s.answers){
      if(a.correct||ids.has(a.id))continue;ids.add(a.id);const q=bank.find(x=>x.id===a.id);if(!q)continue;
      const li=document.createElement('li'),label=document.createElement('b'),meaning=document.createElement('span'),example=document.createElement('small');label.textContent=q.chunk;meaning.textContent=lang==='ja'?q.meaning_ja:q.meaning_en;example.textContent=q.example_en||'';example.lang='en';li.append(label,meaning,example);review.appendChild(li);
      if(ids.size>=12)break;
    }
    if(!review.children.length){const li=document.createElement('li');li.textContent=text('noReview');review.appendChild(li)}
    const past=loadHistory();drawTrend($('vcResultTrendGraph'),past);
    const previous=past[1];const diff=previous?s.level-previous.level:null;
    setText($('vcResultDelta'),diff===null?'':diff>0?'↗ +'+diff:diff<0?'↘ '+diff:'→ ±0');
  }
  function showError(message){show('vcError');setText($('vcErrorMessage'),message)}
  function registerEvents(){
    $('vcQuick').addEventListener('click',()=>begin('quick'));$('vcDeep').addEventListener('click',()=>begin('deep'));
    $('vcUnknown').addEventListener('click',()=>submit(null));
    $('vcSound').addEventListener('click',()=>{
      soundEnabled=!soundEnabled;
      try{localStorage.setItem(SOUND_KEY,soundEnabled?'on':'off')}catch(_){}
      updateSoundButton();
    });
    $('vcQuit').addEventListener('click',()=>{if(!confirm(text('quitConfirm')))return;cancelAdvance();clearFlash();currentSession=null;show('vcIntro');displayLast();});
    $('vcRestart').addEventListener('click',()=>{cancelAdvance();clearFlash();lastResult=null;show('vcIntro');displayLast()});
    $('vcPilotExport').addEventListener('click',()=>{
      if(!lastResult)return;
      const blob=new Blob([makePilotCSV(lastResult)],{type:'text/csv;charset=utf-8'});
      const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='copeak_v8_anonymous_pilot.csv';document.body.appendChild(a);a.click();a.remove();
      setTimeout(()=>URL.revokeObjectURL(url),1500);
    });
    $('vcUILanguage').addEventListener('change',()=>{
      // Switching language while answering must not change the selected answer.
      // Recompute visible choices only before a question is answered.
      if(currentSession&&!currentSession.responded)currentSession.options=makeOptions(currentSession.item,bank,$('vcUILanguage').value);
      lang=$('vcUILanguage').value;translate();
    });
    document.addEventListener('keydown',event=>{
      if(!currentSession||currentSession.responded||event.altKey||event.metaKey||event.ctrlKey)return;
      if(/^[1-4]$/.test(event.key)){event.preventDefault();submit(Number(event.key)-1)}
      else if(event.key==='0'){event.preventDefault();submit(null)}
    });
  }
  async function readOriginalBank(){
    const indexResponse=await fetch(BANK_MANIFEST,{cache:'no-store'});
    if(!indexResponse.ok)throw new Error('Manifest HTTP '+indexResponse.status);
    const manifest=await indexResponse.json();
    const names=manifest?.shards;
    if(manifest?.schemaVersion!==3 || manifest?.totalQuestions!==5000 || !Array.isArray(names) || names.length!==8)throw new Error('Invalid 5,000-item manifest');
    const chunks=await Promise.all(names.map(async (name,index)=>{
      if(name!==`chunks-v7-level-${index+1}.json`)throw new Error('Invalid shard name '+name);
      const response=await fetch('data/'+name,{cache:'no-store'});
      if(!response.ok)throw new Error('Shard HTTP '+response.status+': '+name);
      const payload=await response.json();
      if(payload?.schemaVersion!==3||payload?.level!==index+1||payload?.calibration!=='teacher-review-required'||!Array.isArray(payload.questions)||payload.questions.length!==625||payload.questions.some(q=>q.level!==index+1))throw new Error('Invalid shard: '+name);
      return payload.questions;
    }));
    const questions=chunks.flat();
    if(questions.length!==5000)throw new Error('Learning bank item count mismatch');
    const order=manifest.originalIdOrder;
    if(!Array.isArray(order)||order.length!==5000||new Set(order).size!==5000)throw new Error('Invalid original ordering');
    const byId=new Map(questions.map(q=>[q.id,q]));
    if(byId.size!==5000)throw new Error('Duplicate learning items');
    const ordered=order.map(id=>byId.get(id));
    if(ordered.some(q=>!q))throw new Error('Missing learning items');
    return validateBank({schemaVersion:3,calibration:'teacher-review-required',questions:ordered});
  }
  async function boot(){
    lang=readLanguage();translate();registerEvents();
    try{
      const [original,diagnosticResponse]=await Promise.all([
        readOriginalBank(),fetch(DIAGNOSTIC,{cache:'no-store'})]);
      if(!diagnosticResponse.ok)throw new Error('Diagnostic HTTP '+diagnosticResponse.status);
      const diagnosis=await diagnosticResponse.json();
      bank=validateV8(diagnosis,original);
      displayLast();
    }catch(err){console.warn('[Copeak vocab] Failed to read test bank',err);showError(text('networkError')+' ('+err.message+')')}
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})(typeof window!=='undefined'?window:globalThis);
