/* Copeak Chunk Vocabulary Check: standalone local-only prototype.
   NOT a standardized CEFR/Eiken test; difficulties are provisional.
   Uses browser-provided text-to-speech and speech recognition; no Classroom/CopeakDB writes.
   v8.1: focused expression overrides and response-by-response adaptive selection. */
(function (root) {
  'use strict';
  const KEY = 'copeak_chunk_diagnosis_v1';
  const BANK_MANIFEST = 'data/chunks-v7-manifest.json';
  const DIAGNOSTIC = 'data/v8-diagnostic-800.json';
  const FOCUS = 'data/v8-1-focus-overrides.json';
  const SENTENCE_JA = 'data/v8-2-example-ja.json';
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
    v8Intro:'診断用候補800件を監査し、短い重要表現に絞った問題から出題します。長い未確認表現は一時保留。既存5,000件は保持。',
    v8EvidenceTitle:'判定の根拠と限界',v8GuidanceTitle:'次に学習するとよい領域',
    v8LevelReference:'学習段階の参考（未校正）',v8Export:'匿名の試行回答CSVを保存',
    v8PilotNote:'CSVは本人が操作したときだけ端末内に保存されます。氏名・メール・日時は含みません。',
    v8Insufficient:'このレベルの回答数が少ないため、得意・不得意を判断できません。',
    v8LowConfidence:'これは統計的に校正された信頼度ではありません。英検の取得級や学年を断定するものではありません。v8とv8.1では出題範囲が異なるため履歴のレベルを直接比較できません。'
  });
  Object.assign(LANGUAGES.en,{
    v8Intro:'A focused subset of 800 candidate questions is used. Long, unreviewed targets are withheld. The full 5,000-item learning bank is preserved.',
    v8EvidenceTitle:'Evidence and limits',v8GuidanceTitle:'Recommended review',
    v8LevelReference:'Learning-stage reference (not calibrated)',v8Export:'Save anonymous pilot-response CSV',
    v8PilotNote:'The CSV downloads to your device only on request. It excludes names, emails and timestamps.',
    v8Insufficient:'Too few answers in this level to classify strengths or weaknesses.',
    v8LowConfidence:'Not a statistically calibrated confidence rating or a certified Eiken/grade result. v8 and v8.1 use different item pools; their levels are not directly comparable.'
  });
  // Learner-first start screen. Keep technical bank stats off the public-facing landing.
  Object.assign(LANGUAGES.ja,{
    title:'あなたの語彙力、まず測ってみよう。',
    intro:'例文の中の重要な英語表現を理解できるか。回答に合わせて難易度が変わる語彙診断です。',
    ctaQuick:'25問で診断する',ctaQuickSub:'まずはこちら · Quick 診断',
    ctaDeep:'もっと詳しく診断する',ctaDeepSub:'70問 · Deep 診断',
    loadingFriendly:'問題を準備しています…',readyFriendly:'準備完了。下のボタンから始められます。',
    levelStart:'基礎',levelEnd:'発展',notYet:'未診断',
    levelEmpty:'診断を受けると、ここに推定レベルが表示されます。',
    levelDescription:'あなたの学習記録に基づく目安です。'
  });
  Object.assign(LANGUAGES.en,{
    title:'Find your current vocabulary level.',
    intro:'Understand key English expressions in context. Questions adapt to your answers.',
    ctaQuick:'Check in 25 questions',ctaQuickSub:'Recommended · Quick Check',
    ctaDeep:'Get a deeper assessment',ctaDeepSub:'70 questions · Deep Check',
    loadingFriendly:'Preparing questions…',readyFriendly:'Ready. Choose a check to begin.',
    levelStart:'Foundation',levelEnd:'Advanced',notYet:'Not checked',
    levelEmpty:'Complete a check to see your estimated level here.',
    levelDescription:'A provisional guide based on your local learning history.'
  });
  LANGUAGES.ja.technicalDetails='診断の詳しい情報を見る';
  LANGUAGES.en.technicalDetails='View assessment details';
  Object.assign(LANGUAGES.ja,{
    landingEyebrow:'英語の語彙力診断',lastLevelLabel:'前回の診断レベル',historyDetails:'これまでの記録を見る',
    historyWarning:'問題構成が違う診断回のレベルは直接比較できません。',aboutAssessment:'この診断について',
    title:'あなたの語彙力、何レベル？',intro:'例文を読んで、意味を選ぶだけ！今の実力を楽しくチェック。',
    ctaQuick:'診断スタート！',ctaQuickSub:'25問でさくっとチェック',
    ctaDeep:'もっと詳しく診断',ctaDeepSub:'じっくり70問',
    levelDescription:'前回の診断結果です。',
    caveat:'この結果は語彙学習の目安です。英検・CEFRの公式判定ではありません。履歴はブラウザ内にのみ保存されます。',
    estimated:'推定レベル',resultTitle:'あなたの診断結果'
  });
  Object.assign(LANGUAGES.en,{
    landingEyebrow:'VOCABULARY LEVEL CHECK',lastLevelLabel:'Your last level',historyDetails:'See your progress',
    historyWarning:'Levels from checks using different question pools are not directly comparable.',
    aboutAssessment:'About this check',title:'What is your vocabulary level?',
    intro:'Read a sentence, choose the meaning, and discover your current level!',
    ctaQuick:'Start my check!',ctaQuickSub:'Quick check · 25 questions',
    ctaDeep:'Try a deeper check',ctaDeepSub:'70 questions',
    levelDescription:'Your most recent estimated result.',
    caveat:'This is a learning estimate, not an official Eiken or CEFR assessment. History is stored only in this browser.',
    estimated:'Estimated level',resultTitle:'Your check result'
  });
  // Compact, tabbed results and opt-in read-aloud practice.
  Object.assign(LANGUAGES.ja,{
    tabSummary:'結果を見る',tabReview:'復習・音読',tabDetails:'詳しい分析',
    resultInsight:'あなたの学習ヒント',correctRatio:'正解 / 出題',
    reviewFocus:'今回の重要表現',reviewMeaning:'下線表現の意味',
    reviewListen:'お手本を聞く',reviewRecord:'音読を録音',reviewStop:'録音を終了',
    reviewPlayback:'録音を聞く',detailReference:'診断の参考情報',
    reviewReady:'お手本を聞いて、自分でも音読してみましょう。',
    reviewListening:'例文を読み上げています。',
    reviewRecording:'録音中。もう一度押すと終了します。',
    reviewRecorded:'録音できました。「録音を聞く」で確認できます。',
    reviewMicDenied:'マイクを使えません。ブラウザの許可設定を確認してください。',
    reviewMicUnsupported:'このブラウザは録音機能に対応していません。',
    reviewTtsUnsupported:'このブラウザは音声読み上げに対応していません。',
    reviewNoItems:'今回、復習が必要なチャンクはありません！',
    reviewNoRecording:'録音がありません。',
    reviewAudioError:'音声を再生できませんでした。音声設定を確認してください。',
    reviewPlayRecording:'自分の音読を再生しています。',
    reviewSentenceJa:'例文の日本語訳'
  });
  Object.assign(LANGUAGES.en,{
    tabSummary:'Result',tabReview:'Review & read',tabDetails:'Details',
    resultInsight:'Your learning tip',correctRatio:'Correct / Asked',
    reviewFocus:'Key expression',reviewMeaning:'Meaning of the highlighted expression',
    reviewListen:'Hear the model',reviewRecord:'Record my reading',reviewStop:'Stop recording',
    reviewPlayback:'Play my reading',detailReference:'About this estimate',
    reviewReady:'Listen to the sentence, then read it aloud.',
    reviewListening:'Reading the example sentence.',
    reviewRecording:'Recording. Press again to stop.',
    reviewRecorded:'Recorded! Play your reading to check.',
    reviewMicDenied:'Microphone unavailable. Check browser permissions.',
    reviewMicUnsupported:'Recording is not supported in this browser.',
    reviewTtsUnsupported:'Speech playback is not available in this browser.',
    reviewNoItems:'No chunks to review this time!',
    reviewNoRecording:'No recording available.',
    reviewAudioError:'Unable to play audio. Check device sound settings.',
    reviewPlayRecording:'Playing your reading.',
    reviewSentenceJa:'Japanese sentence translation'
  });
  Object.assign(LANGUAGES.ja,{
    tabSummary:'診断結果',tabReview:'復習・音読',
    review:'復習・例文音読',reviewRecord:'音読スタート',reviewStop:'音読を終了',
    reviewMeaning:'チャンクの意味',reviewReady:'',reviewListening:'',
    readingAccuracy:'音読一致率',recognizedWords:'認識された英語',
    readNoSpeech:'声を認識できませんでした。もう一度試してください。',
    readUnsupported:'この端末のブラウザでは音声認識を利用できません。',
    readMicDenied:'マイクが利用できません。Safariなどの設定を確認してください。',
    readNetworkError:'音声認識サービスに接続できません。',
    readListening:'● 音声認識中…',readRetry:'もう一度音読',
    levelIntro:'英語レベルの目安'
  });
  Object.assign(LANGUAGES.en,{
    tabSummary:'Your result',tabReview:'Review & read',
    review:'Read aloud',reviewRecord:'Start reading',reviewStop:'Stop reading',
    reviewMeaning:'Expression meaning',reviewReady:'',reviewListening:'',
    readingAccuracy:'Word match',recognizedWords:'Recognized words',
    readNoSpeech:'No speech recognized. Please try again.',
    readUnsupported:'Speech recognition is unavailable in this browser.',
    readMicDenied:'Microphone unavailable. Please check browser permissions.',
    readNetworkError:'Speech recognition service unavailable.',
    readListening:'● Listening…',readRetry:'Read again',
    levelIntro:'Estimated vocabulary level'
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
  // v8.1: Unreviewed long highlights are NOT silently shortened. Where a short
  // focus is offered, its Japanese and English answer meaning must be replaced
  // together. Original 800 items and the 5,000-item study bank remain unchanged.
  function prepareFocusedBank(original, payload){
    if(!Array.isArray(original)||original.length!==800||
       payload?.schemaVersion!==1||payload?.calibration!=='uncalibrated-teacher-review-required'||
       !Array.isArray(payload.overrides))throw new Error('Invalid v8.1 focus review payload');
    const map=new Map(original.map(q=>[q.id,q]));
    const changes=new Map();
    for(const change of payload.overrides){
      const src=map.get(change?.id);
      if(!src||changes.has(change.id)||change.review_status!=='EDITORIAL_CANDIDATE_NEEDS_TEACHER_REVIEW')throw new Error('Invalid focus ID '+change?.id);
      const focus=String(change.focus_en||'').trim();
      const words=focus.split(/\s+/).length;
      const raw=src.example_en.toLowerCase();
      const at=raw.indexOf(focus.toLowerCase());
      const originalAt=src.highlight_en.toLowerCase().indexOf(focus.toLowerCase());
      const beginning=at===0||/[^a-z]/.test(raw[at-1]);
      const ending=at>=0&&(at+focus.length===raw.length||/[^a-z]/.test(raw[at+focus.length]));
      if(words<2||words>5||at<0||originalAt<0||!beginning||!ending||
         String(change.meaning_ja||'').trim().length<2||
         String(change.meaning_en||'').trim().length<2)throw new Error('Invalid focus phrase '+change.id);
      changes.set(change.id,change);
    }
    const all=original.map(q=>{
      const change=changes.get(q.id);
      return change?{...q,chunk:change.focus_en,highlight_en:change.focus_en,
        meaning_ja:change.meaning_ja,meaning_en:change.meaning_en,
        focus_status:'EDITORIAL_CANDIDATE_NEEDS_TEACHER_REVIEW',focus_source_id:q.id}:q;
    });
    const byId=new Map(all.map(q=>[q.id,q]));
    const active=all.filter(q=>q.highlight_en.trim().split(/\s+/).length<=4||changes.has(q.id));
    const levels=Array(8).fill(0);
    for(const q of active){
      levels[q.level-1]++;
      if(q.highlight_en.trim().split(/\s+/).length>5)throw new Error('Overlong active target');
      for(const key of ['meaning_ja','meaning_en']){
        const labels=[q[key],...q.distractor_ids.map(id=>byId.get(id)?.[key])];
        if(labels.some(v=>!v)||new Set(labels).size!==4)throw new Error('Ambiguous focus options '+q.id+'/'+key);
      }
    }
    if(levels.some(n=>n<35)||active.length<400)throw new Error('Insufficient focused diagnostic coverage');
    return {all,active,stats:{total:original.length,selected:active.length,held:original.length-active.length,
      revised:changes.size,levelCounts:levels}};
  }
  // Every answered question affects the next question immediately, including
  // Q1-Q8. One miss leads to a lower target; a correct answer leads higher.
  // This is a provisional heuristic until empirical item calibration exists.
  function nextTarget(answers,estimate){
    if(!answers.length)return 4;
    const last=answers[answers.length-1];
    const center=clamp(Math.round(estimate.theta),1,8);
    return last.correct ? clamp(Math.max(center,last.level+1),1,8)
      : clamp(Math.min(center,last.level-1),1,8);
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
    const records=(summary?.answers||[]).map(a=>['v8.1',summary.mode,a.id,a.level,Number(Boolean(a.correct)),Number(Boolean(a.unknown)),Math.max(0,Math.min(120000,Number(a.ms)||0))].map(safe).join(','));
    return '\ufeff'+[header.join(','),...records].join('\r\n');
  }
  function loadHistory(){try{const a=JSON.parse(localStorage.getItem(KEY)||'[]');return Array.isArray(a)?a.filter(x=>x?.version===1&&['copeak-chunks-prototype-2026-10','copeak-chunks-context-2026-10'].includes(x.bank)&&Number.isInteger(x.level)&&x.level>=1&&x.level<=8).slice(0,40):[]}catch(_){return []}}
  function saveSummary(summary){try{localStorage.setItem(KEY,JSON.stringify([summary,...loadHistory()].slice(0,40)));return true}catch(_){return false}}
  const CORE=Object.freeze({KEY,COUNTS,probability,posterior,similarity,validateBank,validateV8,prepareFocusedBank,nextTarget,evidenceFor,makePilotCSV,pickQuestion,makeOptions});
  root.CopeakChunkCore=CORE;
  if(typeof document==='undefined')return;
  let bank=[],optionBank=[],currentSession=null,lang='ja',mode='quick',lastResult=null;
  let activeResultTab='summary',reviewSummary=null,reviewIndex=0,reviewItems=[];
  let reviewRecognition=null,reviewToken=0,reviewFinal='',reviewInterim='',reviewStarting=false;
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
  const show=(id)=>{if(id!=='vcResult')stopReviewMedia();for(const k of ['vcIntro','vcQuiz','vcResult','vcError'])$(k).hidden=k!==id;document.body.classList.toggle('vc-is-quiz',id==='vcQuiz');document.body.classList.toggle('vc-is-result',id==='vcResult');};
  function readLanguage(){
    const query=new URLSearchParams(location.search).get('ui');
    let saved=null;try{saved=localStorage.getItem('copeak_lang')}catch(_){/* no storage */}
    return query==='ja'||query==='en'?query:(saved==='ja'||!saved?'ja':'en');
  }
  function translate(){
    document.documentElement.lang=lang; $('vcUILanguage').value=lang;updateSoundButton();
    for(const element of document.querySelectorAll('[data-t]'))setText(element,text(element.dataset.t));
    if($('vcLoadState'))setText($('vcLoadState'),bank.length?text('readyFriendly'):text('loadingFriendly'));
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
    setText($('vcDashboardLevel'),last?'Lv.'+last.level:text('notYet'));
    const levelGraph=$('vcLevelScale');
    if(levelGraph){
      const level=last?clamp(last.level,1,8):0;
      levelGraph.querySelectorAll('[data-level]').forEach(cell=>{
        const number=Number(cell.dataset.level);
        cell.classList.toggle('is-achieved',Boolean(level)&&number<=level);
        cell.classList.toggle('is-current',Boolean(level)&&number===level);
      });
      levelGraph.setAttribute('aria-label',last?
        (lang==='ja'?'推定レベル ': 'Estimated level ')+level+' / 8':
        text('levelEmpty'));
    }
    setText($('vcLevelDescription'),last?text('levelDescription'):text('levelEmpty'));
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
    // v8.1: genuinely adaptive from question 2, not a fixed eight-question staircase.
    const target=nextTarget(session.answers,session.estimate);
    const priorUsed=loadHistory().slice(0,5).flatMap(result=>Array.isArray(result.itemIds)?result.itemIds:[]);
    const item=pickQuestion(bank,session.used,target,priorUsed,Math.random,session.usedFamilies);
    if(!item){showError('Question pool exhausted');return;}
    session.item=item;session.used.add(item.id);if(item.family_id)session.usedFamilies.add(item.family_id);session.options=makeOptions(item,optionBank,lang);session.responded=null;session.started=performance.now();
    renderQuestion();
  }
  function begin(nextMode){
    cancelAdvance();clearFlash();
    mode=nextMode;
    const total=COUNTS[mode];if(!bank.length){showError(text('networkError'));return;}
    // Preserve history for progress, but do not let a previous high/low score
    // predetermine the next check. A fresh run begins at the same prior.
    const prior=4.4;
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
      itemIds:s.answers.map(a=>a.id),diagnosticVersion:'v8.1',selectionPolicy:'v8.1-focused-conditional-adaptive',provisional:true};
    const saved=saveSummary(summary);
    lastResult=summary;currentSession=null;show('vcResult');renderResult(summary);setResultTab('summary');
    if(!saved){const p=document.createElement('p');p.className='vc-note';p.textContent=text('saveError');$('vcResult').appendChild(p);}
    window.dispatchEvent(new Event('copeak:vocabulary-updated'));window.scrollTo({top:0,behavior:'instant'});
  }
  function renderResult(s){
    const gradeJa=['中学初級 · 英検5級相当','中学中級 · 英検4級相当','中学卒業程度 · 英検3級相当',
      '高校中級 · 英検準2級相当','高校上級 · 英検準2級プラス相当','高校卒業程度 · 英検2級相当',
      '大学中級 · 英検準1級相当','大学上級 · 英検1級相当'];
    const gradeEn=['Eiken Grade 5 equivalent','Eiken Grade 4 equivalent','Eiken Grade 3 equivalent',
      'Eiken Pre-2 equivalent','Eiken Pre-2 Plus equivalent','Eiken Grade 2 equivalent',
      'Eiken Pre-1 equivalent','Eiken Grade 1 equivalent'];
    setText($('vcSchoolLevel'),(lang==='ja'?gradeJa:gradeEn)[clamp(s.level,1,8)-1]);
    const e=evidenceFor(s);
    const actual=s.answers.filter(a=>a.family_id).length;
    const weakest=e.weakest;
    const incorrect=s.answers.filter(a=>!a.correct).length;
    setText($('vcV8Guidance'),incorrect===0?
      (lang==='ja'?'すばらしい！全問正解です。次はさらに難しい表現に挑戦しましょう。':'Excellent! All answers are correct. Try a deeper challenge next.'):
      (lang==='ja'?'復習したい表現が'+incorrect+'件あります。「復習・音読」で例文を声に出して練習しましょう。':
       'You have '+incorrect+' expressions to review. Practice the sentences on the Review & read tab.'));
    setText($('vcScoreLevel'),`Lv.${s.level}`);setText($('vcRange'),`Lv.${s.range[0]}–${s.range[1]}`);
    setText($('vcRight'),`${s.correct} / ${s.total}`);setText($('vcSkip'),String(s.unknown));setText($('vcResultMode'),s.mode==='quick'?'Quick':'Deep');
    const output=$('vcBreakdown');output.replaceChildren();
    for(let level=1;level<=8;level++){
      const subset=s.answers.filter(a=>a.level===level);if(!subset.length)continue;
      const entry=document.createElement('div'),heading=document.createElement('strong'),sub=document.createElement('span');
      heading.textContent=`Lv.${level}`;sub.textContent=`${subset.filter(a=>a.correct).length} / ${subset.length}`;entry.append(heading,sub);output.appendChild(entry);
    }
    updateReviewItems(s);
    const past=loadHistory();drawTrend($('vcResultTrendGraph'),past);
    const previous=past[1];const diff=previous?s.level-previous.level:null;
    setText($('vcResultDelta'),diff===null?'':diff>0?'↗ +'+diff:diff<0?'↘ '+diff:'→ ±0');
  }

  // Copeak-style ordered LCS matching; score is recognized-word agreement.
  function stopReviewMedia(){
    reviewToken++;
    try{root.speechSynthesis?.cancel()}catch(_){}
    const r=reviewRecognition;reviewRecognition=null;reviewStarting=false;
    if(r){r.onend=null;r.onerror=null;r.onresult=null;try{r.abort()}catch(_){}}
    const label=$('vcReviewRecordLabel');if(label)setText(label,text('reviewRecord'));
    $('vcReviewRecord')?.classList.remove('is-recording');
    if($('vcReviewRecord'))$('vcReviewRecord').disabled=false;
  }
  function highlightReview(target,item){
    const sentence=String(item.example_en||''),focus=String(item.highlight_en||'');
    const at=sentence.toLowerCase().indexOf(focus.toLowerCase());
    target.replaceChildren();
    if(!focus||at<0){target.textContent=sentence;return}
    target.appendChild(document.createTextNode(sentence.slice(0,at)));
    const mark=document.createElement('mark');mark.textContent=sentence.slice(at,at+focus.length);
    target.appendChild(mark,document.createTextNode(sentence.slice(at+focus.length)));
  }
  function renderReviewCard(){
    const available=reviewItems.length>0,item=available?reviewItems[reviewIndex]:null;
    setText($('vcReviewCount'),available?String(reviewIndex+1)+' / '+reviewItems.length:'0 / 0');
    $('vcReviewPrev').disabled=!available||reviewIndex===0;
    $('vcReviewNext').disabled=!available||reviewIndex>=reviewItems.length-1;
    $('vcReviewSentenceButton').disabled=!available;
    $('vcReviewRecord').disabled=!available;
    $('vcReadingFeedback').hidden=true;
    $('vcReadTranscript').replaceChildren();
    $('vcGaugeProgress').style.strokeDasharray='0 100';
    setText($('vcReadPercent'),'0%');
    setText($('vcReviewStatus'),'');
    if(!item){
      setText($('vcReviewChunk'),lang==='ja'?'復習する表現はありません！':'No expressions to review!');
      $('vcReviewSentence').replaceChildren();
      setText($('vcReviewMeaning'),'');
      $('vcReviewSentenceJa').hidden=true;
      return;
    }
    setText($('vcReviewChunk'),item.highlight_en||item.chunk);
    highlightReview($('vcReviewSentence'),item);
    setText($('vcReviewMeaning'),lang==='ja'?item.meaning_ja:item.meaning_en);
    const translation=String(item.example_ja||'').trim();
    $('vcReviewSentenceJa').hidden=!translation;
    if(translation)setText($('vcReviewSentenceJa'),translation);
  }
  function updateReviewItems(summary){
    if(reviewSummary!==summary){stopReviewMedia();reviewSummary=summary;reviewIndex=0}
    const used=new Set();
    // Put missed chunks first, then allow practice of every sentence from the check.
    const answers=summary.answers||[];
    reviewItems=[...answers.filter(a=>!a.correct),...answers.filter(a=>a.correct)].map(a=>{
      if(used.has(a.id))return null;used.add(a.id);
      return bank.find(q=>q.id===a.id)||null;
    }).filter(Boolean);
    reviewIndex=clamp(reviewIndex,0,Math.max(0,reviewItems.length-1));
    if(activeResultTab==='review')renderReviewCard();
  }
  function setResultTab(next){
    if(!['summary','review'].includes(next))return;
    if(activeResultTab==='review'&&next!=='review')stopReviewMedia();
    activeResultTab=next;
    for(const [key,suffix] of [['summary','Summary'],['review','Review']]){
      const selected=next===key,tab=$('vcTab'+suffix),panel=$('vcPanel'+suffix);
      tab.setAttribute('aria-selected',String(selected));
      tab.classList.toggle('is-active',selected);
      tab.tabIndex=selected?0:-1;
      panel.hidden=!selected;
    }
    if(next==='review')renderReviewCard();
  }
  function moveReview(delta){
    if(!reviewItems.length)return;
    const next=clamp(reviewIndex+delta,0,reviewItems.length-1);
    if(next===reviewIndex)return;
    stopReviewMedia();reviewIndex=next;renderReviewCard();
  }
  function speakReview(){
    const item=reviewItems[reviewIndex];if(!item)return;
    if(!root.speechSynthesis||!root.SpeechSynthesisUtterance){
      setText($('vcReviewStatus'),text('reviewTtsUnsupported'));return;
    }
    stopReviewMedia();
    try{
      const utterance=new root.SpeechSynthesisUtterance(item.example_en);
      utterance.lang='en-US';utterance.rate=.86;
      const voices=root.speechSynthesis.getVoices?.()||[];
      const voice=voices.find(v=>v.lang?.toLowerCase().startsWith('en')&&v.localService)||
        voices.find(v=>v.lang?.toLowerCase().startsWith('en'));
      if(voice)utterance.voice=voice;
      utterance.onerror=()=>setText($('vcReviewStatus'),text('reviewAudioError'));
      root.speechSynthesis.speak(utterance);
      setText($('vcReviewStatus'),'');
    }catch(_){setText($('vcReviewStatus'),text('reviewAudioError'))}
  }
  function displayReadingMatch(sentence,transcript){
    const scoring=root.CopeakVocabularyReading;
    if(!scoring||!transcript.trim())return;
    const report=scoring.score(sentence,transcript);
    $('vcReadingFeedback').hidden=false;
    $('vcGaugeProgress').style.strokeDasharray=String(report.percent)+' 100';
    setText($('vcReadPercent'),String(report.percent)+'%');
    const container=$('vcReadTranscript');container.replaceChildren();
    for(const word of report.wordMatches){
      const span=document.createElement('span');
      span.className=word.matched?'vc-word-match':'vc-word-miss';
      span.textContent=word.value;
      container.appendChild(span);
    }
  }
  function toggleReviewRecord(){
    if(reviewRecognition){
      try{reviewRecognition.stop()}catch(_){}
      return;
    }
    const item=reviewItems[reviewIndex];if(!item)return;
    const Constructor=root.SpeechRecognition||root.webkitSpeechRecognition;
    if(!Constructor||!root.CopeakVocabularyReading){
      setText($('vcReviewStatus'),text('readUnsupported'));return;
    }
    stopReviewMedia();
    const token=reviewToken;
    reviewFinal='';reviewInterim='';
    $('vcReadingFeedback').hidden=true;
    $('vcReadTranscript').replaceChildren();
    $('vcGaugeProgress').style.strokeDasharray='0 100';
    const rec=new Constructor();reviewRecognition=rec;
    rec.lang='en-US';rec.continuous=false;rec.interimResults=true;rec.maxAlternatives=1;
    rec.onstart=()=>{
      if(token!==reviewToken)return;
      $('vcReviewRecord').classList.add('is-recording');
      setText($('vcReviewRecordLabel'),text('reviewStop'));
      setText($('vcReviewStatus'),text('readListening'));
    };
    rec.onresult=event=>{
      if(token!==reviewToken||activeResultTab!=='review')return;
      let finals='',interims='';
      for(let i=0;i<event.results.length;i++){
        const result=event.results[i],value=String(result?.[0]?.transcript||'').trim();
        if(!value)continue;
        if(result.isFinal)finals+=(finals?' ':'')+value;
        else interims+=(interims?' ':'')+value;
      }
      reviewFinal=finals;reviewInterim=interims;
      displayReadingMatch(item.example_en,(finals+' '+interims).trim());
    };
    rec.onerror=event=>{
      if(token!==reviewToken)return;
      const kind=event?.error||'';
      setText($('vcReviewStatus'),kind==='not-allowed'||kind==='service-not-allowed'?
        text('readMicDenied'):kind==='network'?text('readNetworkError'):
        kind==='no-speech'?text('readNoSpeech'):text('readNoSpeech'));
    };
    rec.onend=()=>{
      if(token!==reviewToken)return;
      reviewRecognition=null;
      $('vcReviewRecord').classList.remove('is-recording');
      setText($('vcReviewRecordLabel'),text('readRetry'));
      const heard=(reviewFinal+' '+reviewInterim).trim();
      if(heard){
        displayReadingMatch(item.example_en,heard);
        setText($('vcReviewStatus'),'');
      } else if(!$('vcReviewStatus').textContent){
        setText($('vcReviewStatus'),text('readNoSpeech'));
      }
    };
    try{rec.start()}catch(_){
      reviewRecognition=null;
      setText($('vcReviewStatus'),text('readMicDenied'));
    }
  }
  function showError(message){show('vcError');setText($('vcErrorMessage'),message)}
  function registerEvents(){
    $('vcQuick').addEventListener('click',()=>begin('quick'));$('vcDeep').addEventListener('click',()=>begin('deep'));
    $('vcUnknown').addEventListener('click',()=>submit(null));
    for(const [name,key] of [['Summary','summary'],['Review','review']]){
      const tab=$('vcTab'+name);
      tab.addEventListener('click',()=>setResultTab(key));
      tab.addEventListener('keydown',event=>{
        if(!['ArrowLeft','ArrowRight'].includes(event.key))return;
        event.preventDefault();
        const next=key==='summary'?'review':'summary';
        setResultTab(next);$('vcTab'+next[0].toUpperCase()+next.slice(1)).focus();
      });
    }
    $('vcReviewPrev').addEventListener('click',()=>moveReview(-1));
    $('vcReviewNext').addEventListener('click',()=>moveReview(1));
    $('vcReviewSentenceButton').addEventListener('click',speakReview);
    $('vcReviewRecord').addEventListener('click',toggleReviewRecord);
    $('vcSound').addEventListener('click',()=>{
      soundEnabled=!soundEnabled;
      try{localStorage.setItem(SOUND_KEY,soundEnabled?'on':'off')}catch(_){}
      updateSoundButton();
    });
    $('vcQuit').addEventListener('click',()=>{if(!confirm(text('quitConfirm')))return;cancelAdvance();clearFlash();currentSession=null;show('vcIntro');displayLast();});
    $('vcRestart').addEventListener('click',()=>{cancelAdvance();clearFlash();lastResult=null;show('vcIntro');displayLast()});
    $('vcUILanguage').addEventListener('change',()=>{
      // Switching language while answering must not change the selected answer.
      // Recompute visible choices only before a question is answered.
      if(currentSession&&!currentSession.responded)currentSession.options=makeOptions(currentSession.item,optionBank,$('vcUILanguage').value);
      lang=$('vcUILanguage').value;translate();
    });
    root.addEventListener('pagehide',stopReviewMedia);
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
      const [original,diagnosticResponse,focusResponse]=await Promise.all([
        readOriginalBank(),fetch(DIAGNOSTIC,{cache:'no-store'}),fetch(FOCUS,{cache:'no-store'})]);
      if(!diagnosticResponse.ok)throw new Error('Diagnostic HTTP '+diagnosticResponse.status);
      if(!focusResponse.ok)throw new Error('Focus HTTP '+focusResponse.status);
      const diagnosis=await diagnosticResponse.json();
      const all=validateV8(diagnosis,original);
      const prepared=prepareFocusedBank(all,await focusResponse.json());
      bank=prepared.active;optionBank=prepared.all;
      // Optional draft translations: never attach to a changed English sentence.
      try{
        const resp=await fetch(SENTENCE_JA,{cache:'no-store'});
        if(resp.ok){
          const payload=await resp.json();
          if(payload?.schemaVersion===1&&Array.isArray(payload.items)){
            const lookup=new Map(payload.items.map(x=>[x.id,x]));
            for(const item of bank){
              const ja=lookup.get(item.id);
              if(ja&&ja.source_example_en===item.example_en&&typeof ja.example_ja==='string')
                item.example_ja=ja.example_ja;
            }
          }
        }
      }catch(_){/* The vocabulary test works even without draft sentence translations. */}
      root.CopeakVocabularyFocusStats=Object.freeze(prepared.stats);
      $('vcQuick').disabled=false;
      $('vcDeep').disabled=false;
      setText($('vcLoadState'),text('readyFriendly'));
      displayLast();
    }catch(err){console.warn('[Copeak vocab] Failed to read test bank',err);showError(text('networkError')+' ('+err.message+')')}
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})(typeof window!=='undefined'?window:globalThis);
