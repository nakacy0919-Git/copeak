
(function(){
  'use strict';
  var catalog = Array.isArray(window.NCC_LIBRARY) ? window.NCC_LIBRARY : [];
  if (!catalog.length) return;
  var active = catalog[0];
  var rankingId = active.id;
  var quizIndex = 0;
  var quizCorrect = 0;
  var quizLocked = false;
  var quizFinished = false;
  var lastReading = null;
  var unsubscribeRankings = null;
  var synthesizing = false;
  var speechParts = [];
  var speechPartIndex = 0;
  var season = 'ncc2-2026-11';
  var db = (typeof challengeDb !== 'undefined') ? challengeDb : null;
  function el(id){ return document.getElementById(id); }
  function safe(s){ return String(s == null ? '' : s).replace(/[&<>"']/g,function(x){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x];});}
  function status(msg){ var n=el('nccStatusText'); if(n) n.textContent=msg; }
  function identify(){
    var n=el('display-player-name');
    if(n) n.textContent=(window.nccProfile && window.nccProfile.name)||'未登録';
  }
  function getId(){
    var key='ncc2ParticipantId', id='';
    try{ id=localStorage.getItem(key)||''; if(!/^[a-zA-Z0-9-]{16,90}$/.test(id)){
      id=(window.crypto&&crypto.randomUUID)?crypto.randomUUID():'ncc-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
      localStorage.setItem(key,id);
    }}catch(e){ id='session-'+Math.random().toString(36).slice(2); }
    return id;
  }
  function renderCards(){
    var grid=el('nccGenreGrid');
    if(!grid)return;
    grid.innerHTML=catalog.map(function(g){
      return '<button class="ncc-card" type="button" data-genre="'+safe(g.id)+'" data-art="'+safe(g.icon)+'" style="--genre-glow:'+safe(g.accent)+'" aria-label="'+safe(g.title)+' に挑戦">'+
        '<div><span class="ncc-type">'+safe(g.genre)+'</span><h4>'+safe(g.title)+'</h4><div class="ncc-jp">'+safe(g.jaTitle)+'</div><div class="ncc-tagline">'+safe(g.tagline)+'</div></div>'+
        '<div class="ncc-cardfooter"><span>'+safe(g.duration)+' · '+safe(g.level)+'</span><b>READ →</b></div></button>';
    }).join('');
    grid.addEventListener('click',function(ev){
      var card=ev.target.closest('[data-genre]');
      if(card) window.selectChallengeGenre(card.getAttribute('data-genre'));
    });
  }
  function updateModal(){
    var jp=el('nccJapaneseText');if(jp)jp.textContent=active.jp;
    var exp=el('englishExplanations');
    if(exp)exp.innerHTML=active.vocab.map(function(a){
      return '<article style="border:1px solid #ffffff22;background:#1b2b44;border-radius:12px;padding:12px 15px;margin:8px 0">'+
        '<strong style="color:#f4d99d;display:block;font-size:17px">'+safe(a[0])+'</strong>'+
        '<span style="color:#f2f6ff;font-size:13px">'+safe(a[1])+'</span>'+
        '<small style="color:#b4c3d8;display:block;margin-top:4px">'+safe(a[2])+'</small></article>';
    }).join('');
    var pair=el('japaneseTranslationForPair');if(pair)pair.textContent=active.jp;
    var original=el('nccOriginalExcerpt');if(original)original.textContent=active.eng;
    if(exp)exp.classList.remove('hidden');
    if(pair)pair.classList.add('hidden');
    var toggle=el('toggleTranslationBtn');if(toggle)toggle.textContent='🇯🇵 和訳を表示';
    var title=el('expTitle');if(title)title.textContent='Vocabulary & Key Expressions';
  }
  function resetQuiz(){
    quizIndex=0;quizCorrect=0;quizLocked=false;quizFinished=false;
    renderQuiz();
  }
  function renderQuiz(){
    var root=el('nccQuizZone');if(!root)return;
    if(quizFinished){
      root.innerHTML='<div class="ncc-quiz-score">✓ CHECK QUIZ COMPLETED — '+quizCorrect+' / '+active.quiz.length+' correct</div>'+
        '<p class="ncc-quiz-feedback">理解度チェックは音読ランキングの得点とは別です。復習してもう一度挑戦できます。</p>'+
        '<button type="button" class="ncc-btn-secondary" id="nccQuizRetry">クイズにもう一度挑戦</button>';
      el('nccQuizRetry').onclick=resetQuiz;return;
    }
    var q=active.quiz[quizIndex];
    root.innerHTML='<div style="display:flex;justify-content:space-between;gap:9px;align-items:center"><h3>✦ Understanding Check</h3><small style="color:#b2c4df">'+(quizIndex+1)+' / '+active.quiz.length+'</small></div>'+
      '<p class="ncc-quiz-q">'+safe(q.q)+'</p><div class="ncc-quiz-grid">'+q.options.map(function(x,i){return '<button class="ncc-quiz-option" type="button" data-choice="'+i+'">'+String.fromCharCode(65+i)+'. '+safe(x)+'</button>';}).join('')+'</div>'+
      '<div class="ncc-quiz-feedback" id="nccQuizFeedback" aria-live="polite"></div><button class="ncc-btn-primary ncc-quiz-hidden" id="nccQuizNext" type="button">次の問題へ →</button>';
    root.querySelectorAll('[data-choice]').forEach(function(btn){
      btn.onclick=function(){
        if(quizLocked)return;
        quizLocked=true;
        var chosen=Number(btn.getAttribute('data-choice'));
        if(chosen===q.answer)quizCorrect++;
        root.querySelectorAll('[data-choice]').forEach(function(b){
          b.disabled=true;
          var c=Number(b.getAttribute('data-choice'));
          if(c===q.answer)b.classList.add('correct');
          else if(c===chosen)b.classList.add('wrong');
        });
        el('nccQuizFeedback').textContent=(chosen===q.answer?'✓ Correct! ':'答えは '+String.fromCharCode(65+q.answer)+'。')+' '+q.why;
        el('nccQuizNext').classList.remove('ncc-quiz-hidden');
        el('nccQuizNext').textContent=quizIndex===active.quiz.length-1?'結果を確認 →':'次の問題へ →';
      };
    });
    el('nccQuizNext').onclick=function(){
      if(!quizLocked)return;
      if(quizIndex===active.quiz.length-1)quizFinished=true;
      else quizIndex++;
      quizLocked=false;renderQuiz();
    };
  }
  function stopNarration(){
    synthesizing=false;speechParts=[];speechPartIndex=0;
    if(window.speechSynthesis)window.speechSynthesis.cancel();
    var p=el('nccTtsPlay');if(p)p.textContent='▶ モデル音声を再生';
  }
  function speakOne(){
    if(!synthesizing || !window.speechSynthesis)return;
    if(speechPartIndex>=speechParts.length){stopNarration();return;}
    var u=new SpeechSynthesisUtterance(speechParts[speechPartIndex++]);
    u.lang='en-US';u.rate=parseFloat((el('nccTtsSpeed')||{}).value||'0.86');
    u.pitch=1;u.volume=1;
    var voices=window.speechSynthesis.getVoices();
    var v=voices.find(function(x){return /^en(-US)?$/i.test(x.lang) && /natural|samantha|aria|jenny|google/i.test(x.name);}) ||
      voices.find(function(x){return /^en/i.test(x.lang);});
    if(v)u.voice=v;
    u.onend=function(){if(synthesizing)speakOne();};
    u.onerror=function(){stopNarration();status('音声を再生できませんでした。端末の読み上げ設定をご確認ください。');};
    window.speechSynthesis.speak(u);
  }
  function playNarration(){
    if(!('speechSynthesis' in window)){status('この端末では読み上げが使えません。');return;}
    if(typeof isMainRecording!=='undefined' && isMainRecording){status('録音を終了してからモデル音声を再生してください。');return;}
    stopNarration();
    speechParts=active.eng.match(/[^.!?]+[.!?]+|[^.!?]+$/g)||[active.eng];
    synthesizing=true;speechPartIndex=0;
    var p=el('nccTtsPlay');if(p)p.textContent='♪ 再生中';
    speakOne();
  }
  window.nccPlayNarration=playNarration;
  window.nccStopNarration=stopNarration;
  window.openNccRegistration=function(){
    window.nccRegisterOnly=true;
    var p=window.nccProfile||{};
    if(el('entryName'))el('entryName').value=p.name||'';
    if(el('entryGrade'))el('entryGrade').value=p.grade||'';
    if(el('entryPref'))el('entryPref').value=p.pref||'';
    if(el('entrySchool'))el('entrySchool').value=p.school||'';
    el('entryModal').classList.remove('hidden');
    setTimeout(function(){el('entryName').focus();},70);
  };
  window.saveProfileAndSubmit=function(){
    var name=String(el('entryName').value||'').trim();
    if(name.length<2 || name.length>18){status('ニックネームは2〜18文字で入力してください。');alert('ニックネームを2〜18文字で入力してください。');return;}
    var p={name:name,grade:el('entryGrade')?el('entryGrade').value:'',pref:el('entryPref')?el('entryPref').value:'',school:el('entrySchool')?el('entrySchool').value.trim().slice(0,50):'',participantId:getId()};
    window.nccProfile=p;
    try{localStorage.setItem('nccProfile',JSON.stringify(p));}catch(e){}
    identify();
    el('entryModal').classList.add('hidden');
    status(name+' さん、エントリー登録しました！');
    var submitAfter=!window.nccRegisterOnly && !!lastReading;
    window.nccRegisterOnly=false;
    if(submitAfter)window.sendDataToFirebase();
  };
  window.selectChallengeGenre=function(id){
    if(typeof isMainRecording!=='undefined' && isMainRecording){alert('先に音読を終了してください。');return;}
    var next=catalog.find(function(x){return x.id===id;});
    if(!next)return;
    active=next;rankingId=next.id;lastReading=null;stopNarration();
    try{
      currentCustomLesson={id:'ncc2-'+season+'-'+next.id,title:next.title,lang:'en-US',eng:next.eng,history:[],skipLocalHistory:true};
      if(typeof targetTextArray!=='undefined')targetTextArray=next.eng.toLowerCase().replace(/[^a-z0-9\s]/g,'').split(/\s+/).filter(Boolean);
      if(typeof targetWpm!=='undefined')targetWpm=110;
      if(typeof currentMode!=='undefined')currentMode='reading';
      if(typeof currentMemoLevel!=='undefined')currentMemoLevel=0;
    }catch(e){console.error('Lesson selection error',e);}
    var paragraphs=next.eng.split(/\n+/);
    el('engContainer').innerHTML=paragraphs.map(function(p){return '<p>'+safe(p)+'</p>';}).join('');
    if(el('nccStageTitle'))el('nccStageTitle').textContent=next.title;
    if(el('nccStageSubtitle'))el('nccStageSubtitle').textContent=next.genre+' · '+next.jaTitle+' · '+next.tone;
    if(el('nccSceneTitle'))el('nccSceneTitle').textContent=next.title;
    if(el('nccSceneSub'))el('nccSceneSub').textContent=next.tagline;
    if(el('nccScene'))el('nccScene').style.setProperty('--genre-glow',next.accent);
    if(el('nccQuizHeader'))el('nccQuizHeader').textContent=next.title;
    updateModal();resetQuiz();
    if(typeof showPreReadingState==='function')showPreReadingState();
    var voice=el('recognizedTextDisplay');
    if(voice)voice.textContent='STARTを押して音読してください。';
    if(el('submitChallengeBtn')){el('submitChallengeBtn').disabled=false;el('submitChallengeBtn').textContent='🚀 全国ランキングに記録を送信';}
    if(typeof enterArena==='function')enterArena();
    if(el('rankGenreSelect'))el('rankGenreSelect').value=rankingId;
    window.fetchArenaData(true);
    window.scrollTo({top:0,behavior:'smooth'});
    status('ジャンルを選択しました。和訳・語彙・クイズを確認してから挑戦できます。');
  };
  window.handleScoreSubmit=function(){
    if(!lastReading || lastReading.challengeId!==active.id){alert('先に音読チャレンジを完了してください。');return;}
    if(!window.nccProfile || !window.nccProfile.name){window.nccRegisterOnly=false;el('entryModal').classList.remove('hidden');return;}
    window.sendDataToFirebase();
  };
  window.sendDataToFirebase=async function(){
    if(!db){status('ランキングサーバーに接続できません。時間をおいて再試行してください。');return;}
    if(!lastReading || lastReading.challengeId!==active.id){status('この作品の音読結果がありません。');return;}
    if(!window.nccProfile || !window.nccProfile.name){window.handleScoreSubmit();return;}
    var p=window.nccProfile;
    var btn=el('submitChallengeBtn');
    if(btn){btn.disabled=true;btn.textContent='送信中…';}
    var row={
      challengeId:active.id,season:season,participantId:p.participantId||getId(),
      name:p.name,grade:p.grade||'',pref:p.pref||'',
      acc:lastReading.acc,wpm:lastReading.wpm,comp:lastReading.performance,
      readingPerformance:lastReading.performance,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      source:'ncc2-client-asr'
    };
    try{
      await db.collection('challenge_scores_v2').add(row);
      if(btn)btn.textContent='✓ 記録を送信しました';
      status('記録を送信しました。全国ランキングはリアルタイムで更新されます。');
      window.fetchArenaData(true);
    }catch(e){
      console.error('NCC ranking write failed',e);
      if(btn){btn.disabled=false;btn.textContent='送信を再試行';}
      status('ランキングへの送信に失敗しました。接続と書き込み権限をご確認ください。');
    }
  };
  function rankPoints(d){
    var p=Number(d.readingPerformance);
    if(!Number.isFinite(p))p=Number(d.comp)||0;
    return Math.max(0,Math.min(100,p));
  }
  function renderRanks(rows){
    var box=el('leaderboard-container');
    if(!box)return;
    var unique=new Map();
    rows.forEach(function(d){
      if(d.season!==season || d.challengeId!==rankingId)return;
      var key=d.participantId||('legacy:'+d.name+':'+d.pref);
      var old=unique.get(key);
      if(!old || rankPoints(d)>rankPoints(old) || (rankPoints(d)===rankPoints(old)&&Number(d.acc)>Number(old.acc)))unique.set(key,d);
    });
    var sorted=Array.from(unique.values()).sort(function(a,b){
      return rankPoints(b)-rankPoints(a)||Number(b.acc||0)-Number(a.acc||0)||Number(b.wpm||0)-Number(a.wpm||0);
    });
    var top=sorted.slice(0,20);
    box.innerHTML=top.length?top.map(function(d,i){
      return '<div class="ncc-rank"><b>'+((i<3)?['🥇','🥈','🥉'][i]:String(i+1))+'</b>'+
        '<div class="ncc-rank-body"><strong>'+safe(d.name||'Anonymous')+'</strong><small>'+safe(d.pref||'全国')+' · ACC '+Math.round(Number(d.acc)||0)+'% · '+Math.round(Number(d.wpm)||0)+' WPM</small></div>'+
        '<span class="ncc-rank-score">'+rankPoints(d)+'<small style="font-size:10px;color:#9db3cf"> /100</small></span></div>';
    }).join(''):'<p class="ncc-helptext" style="padding:25px;text-align:center">このジャンルの記録はまだありません。<br>あなたが最初のチャレンジャーになろう！</p>';
    if(el('rankParticipants'))el('rankParticipants').textContent=String(sorted.length)+' participants / 表示対象最大500件';
    var latest=rows.filter(function(d){return d.season===season&&d.challengeId===rankingId;}).sort(function(a,b){
      var ta=a.timestamp&&a.timestamp.toMillis?a.timestamp.toMillis():0;
      var tb=b.timestamp&&b.timestamp.toMillis?b.timestamp.toMillis():0;
      return tb-ta;
    }).slice(0,4);
    var ticker=el('live-ticker-content');
    if(ticker){
      ticker.innerHTML=latest.length?latest.map(function(d){return '<span style="margin:0 24px">✦ '+safe(d.name)+' さんが '+rankPoints(d)+' pt を記録！</span>';}).join(''):
        '<span style="margin:0 24px">新しい全国チャレンジがスタートしました。最初の記録をお待ちしています。</span>';
    }
  }
  function setLive(ok,message){
    var x=el('liveStatus');
    if(x){x.classList.toggle('connected',!!ok);x.textContent=ok?'● LIVE RANKING':'○ '+(message||'OFFLINE');}
  }
  window.fetchArenaData=function(force){
    if(!db){setLive(false,'UNAVAILABLE');return;}
    if(unsubscribeRankings){try{unsubscribeRankings();}catch(e){}unsubscribeRankings=null;}
    setLive(false,'CONNECTING');
    if(el('leaderboard-container'))el('leaderboard-container').innerHTML='<p class="ncc-helptext" style="padding:24px">ランキングに接続しています…</p>';
    try{
      unsubscribeRankings=db.collection('challenge_scores_v2').where('challengeId','==',rankingId).limit(500).onSnapshot(
        function(snapshot){setLive(true);renderRanks(snapshot.docs.map(function(d){return d.data();}));},
        function(err){
          console.error('NCC live subscribe failed',err);
          setLive(false,'OFFLINE');
          if(el('leaderboard-container'))el('leaderboard-container').textContent='ランキングに接続できません。更新ボタンから再試行してください。';
        }
      );
    }catch(e){console.error(e);setLive(false,'OFFLINE');}
  };
  window.nccRankGenreChanged=function(v){rankingId=v;window.fetchArenaData(true);};
  var oldShowResult=window.showResultState;
  if(typeof oldShowResult==='function'){
    window.showResultState=function(){
      oldShowResult();
      var a=Number.parseInt((el('bigAccValue')||{}).textContent)||0;
      var w=Number.parseInt((el('bigWpmValue')||{}).textContent)||0;
      var p=Number.parseInt((el('bigCompValue')||{}).textContent)||0;
      lastReading={challengeId:active.id,acc:Math.max(0,Math.min(100,a)),wpm:Math.max(0,w),performance:Math.max(0,Math.min(100,p))};
      if(el('nccResultNote'))el('nccResultNote').textContent='Reading Performanceは正しく読めた語数と時間から計算した音読指標です。内容理解クイズとは別です。';
      stopNarration();
    };
  }
  document.addEventListener('visibilitychange',function(){if(document.hidden)stopNarration();});
  window.addEventListener('beforeunload',function(){if(unsubscribeRankings)unsubscribeRankings();stopNarration();});
  document.addEventListener('DOMContentLoaded',function(){
    document.body.classList.add('ncc-v2');
    identify();
    renderCards();
    var rg=el('rankGenreSelect');
    if(rg){
      rg.innerHTML=catalog.map(function(g){return '<option value="'+safe(g.id)+'">'+safe(g.title)+'</option>';}).join('');
      rg.value=rankingId;
      rg.addEventListener('change',function(){window.nccRankGenreChanged(rg.value);});
    }
    if(el('nccTtsPlay'))el('nccTtsPlay').onclick=playNarration;
    if(el('nccTtsStop'))el('nccTtsStop').onclick=stopNarration;
    if(el('nccRegisterButton'))el('nccRegisterButton').onclick=window.openNccRegistration;
    if(el('nccNicknameButton'))el('nccNicknameButton').onclick=window.openNccRegistration;
    if(el('nccRankRefresh'))el('nccRankRefresh').onclick=function(){window.fetchArenaData(true);};
    if(el('nccQuizZone'))el('nccQuizZone').innerHTML='<div class="ncc-helptext">ジャンルを選ぶとクイズが表示されます。</div>';
    window.fetchArenaData(true);
    status('ジャンルを選んで、物語の世界へ。');
  });
})();
