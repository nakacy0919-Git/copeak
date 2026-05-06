// ==========================================
// speech.js: 文字起こし、照合、および内容理解度とSLAフィードバック
// ==========================================

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let mainRecognition;
let isMainRecording = false;
let accumulatedTranscript = ''; 
let currentInterim = '';        
let recordStartTime = 0;

if (window.SpeechRecognition) {
    mainRecognition = new SpeechRecognition();
    mainRecognition.interimResults = true; 
    mainRecognition.continuous = true;     

    mainRecognition.onerror = (e) => {
        if (e.error === 'not-allowed' || e.error === 'denied') {
            isMainRecording = false;
            updateMicButtonUI();
            if (typeof stopPacedReading === 'function') stopPacedReading(); // エラー時はカラオケ停止
            const audioPlayer = document.getElementById('audioPlayer');
            if (audioPlayer) audioPlayer.pause();
            if (typeof showMsg === 'function') showMsg("⚠️ マイクが拒否されました");
        }
    };

    mainRecognition.onresult = (e) => {
        let fullTranscript = '';

        for (let i = 0; i < e.results.length; i++) {
            fullTranscript += e.results[i][0].transcript + ' ';
        }

        accumulatedTranscript = fullTranscript;
        currentInterim = ''; 

        processSpeechMatch(accumulatedTranscript, false); 
    };

    mainRecognition.onend = () => {
        if (isMainRecording) {
            try { mainRecognition.start(); } catch(err) {}
        }
    };
}

function toggleRecording() {
    if (!mainRecognition) {
        if (typeof showMsg === 'function') showMsg("お使いのブラウザは音声認識に非対応です");
        return;
    }

    const audioPlayer = document.getElementById('audioPlayer');

    // ★ 録音を【終了】する時の処理
    if (isMainRecording) {
        isMainRecording = false;
        mainRecognition.stop();
        
        if (currentMode === 'shadowing' && audioPlayer) audioPlayer.pause();
        
        // カラオケ機能のタイマーを止める
        if (typeof stopPacedReading === 'function') stopPacedReading();

        updateMicButtonUI();
        if (currentInterim !== '') {
            accumulatedTranscript += currentInterim + ' ';
            currentInterim = '';
        }
        
        processSpeechMatch(accumulatedTranscript, true); 
        if (typeof showResultState === 'function') showResultState();

    // ★ 録音を【開始】する時の処理
    } else {
        recordStartTime = Date.now();
        isMainRecording = true;
        
        accumulatedTranscript = '';
        currentInterim = '';
        document.getElementById('recognizedTextDisplay').innerHTML = "Listening... (話してください)";
        document.getElementById('recognizedTextDisplay').style.color = "#292524"; 

        if (typeof showRecordingState === 'function') showRecordingState();
        
        // ★Pacedモードなら、カラオケタイマーをスタート
        if (typeof startPacedReading === 'function' && currentMode === 'paced') {
            startPacedReading();
        }

        const targetLang = currentCustomLesson.lang || 'en-US';
        mainRecognition.lang = targetLang;

        if (currentMode === 'shadowing' && currentCustomLesson.audioBlob && audioPlayer) {
            audioPlayer.play().then(() => {
                setTimeout(() => {
                    try {
                        mainRecognition.start();
                        updateMicButtonUI();
                        processSpeechMatch("", false); 
                    } catch(e) {
                        isMainRecording = false;
                        updateMicButtonUI();
                        if (typeof stopPacedReading === 'function') stopPacedReading();
                    }
                }, 300); 
            }).catch(e => {
                mainRecognition.start();
                updateMicButtonUI();
                processSpeechMatch("", false); 
            });
        } else {
            try {
                mainRecognition.start();
                updateMicButtonUI();
                processSpeechMatch("", false); 
            } catch(e) {
                isMainRecording = false;
                updateMicButtonUI();
                if (typeof stopPacedReading === 'function') stopPacedReading();
            }
        }
    }
}

function updateMicButtonUI() {
    const btn = document.getElementById('micBtn');
    const txt = document.getElementById('micBtnText');
    if (!btn || !txt) return;

    if (isMainRecording) {
        btn.classList.remove('bg-emerald-800');
        btn.classList.add('bg-stone-800', 'animate-pulse');
        txt.innerText = "FINISH (終了して結果を見る)";
    } else {
        btn.classList.remove('bg-stone-800', 'animate-pulse');
        btn.classList.add('bg-emerald-800');
        
        if (currentMode === 'shadowing') {
            txt.innerText = accumulatedTranscript.trim() ? "RETRY SHADOWING" : "START SHADOWING";
        } else if (currentMode === 'memo') {
            txt.innerText = accumulatedTranscript.trim() ? "RETRY VANISH" : "START VANISH";
        } else if (currentMode === 'paced') {
            txt.innerText = accumulatedTranscript.trim() ? "RETRY PACED" : "START PACED";
        } else {
            txt.innerText = accumulatedTranscript.trim() ? "RETRY READING" : "START READING";
        }
    }
}

function processSpeechMatch(spokenText, isFinalResult = false) {
    if (typeof targetTextArray === 'undefined' || targetTextArray.length === 0) return;
    const recDisplay = document.getElementById('recognizedTextDisplay');

    if (!spokenText && isMainRecording) {
        return; 
    }

    const spokenOriginalWords = spokenText.split(/\s+/).filter(w => w);
    let matchCount = 0;
    let htmlOutput = [];
    let searchIndex = 0; 

    spokenOriginalWords.forEach((originalWord) => {
        let cleanSpoken = originalWord.toLowerCase().replace(/[^a-z0-9\u00C0-\u017F\u0900-\u097F]/gi, '');
        if (!cleanSpoken) { htmlOutput.push(originalWord); return; }

        let isMatched = false;
        let foundIndex = -1;
        let lookaheadLimit = Math.min(searchIndex + 10, targetTextArray.length);
        
        for (let i = searchIndex; i < lookaheadLimit; i++) {
            if (targetTextArray[i] === cleanSpoken) {
                foundIndex = i;
                break;
            }
        }

        if (foundIndex !== -1) {
            isMatched = true;
            matchCount++;
            searchIndex = foundIndex + 1; 
        }

        if (isMatched) {
            htmlOutput.push(`<span class="matched-word">${originalWord}</span>`);
        } else {
            htmlOutput.push(`<span class="unmatched-word">${originalWord}</span>`);
        }
    });

    recDisplay.innerHTML = htmlOutput.join(' ');
    
    if (isMainRecording || isFinalResult) {
        recDisplay.scrollTop = recDisplay.scrollHeight;
    }

    const validTargetWordCount = targetTextArray.length;
    const percentage = validTargetWordCount === 0 ? 0 : Math.round((matchCount / validTargetWordCount) * 100);
    const currentAccuracy = percentage > 100 ? 100 : percentage;

    let currentWpm = 0;
    if (recordStartTime > 0 && spokenOriginalWords.length > 0) {
        let elapsedMinutes = (Date.now() - recordStartTime) / 60000;
        if (elapsedMinutes < 0.01) elapsedMinutes = 0.01; 
        currentWpm = Math.round(spokenOriginalWords.length / elapsedMinutes);
    }

    let targetWpmToUse = (typeof targetWpm !== 'undefined') ? targetWpm : 130;
    let wpmRatio = Math.min(currentWpm / targetWpmToUse, 1.0); 
    let comprehensionScore = Math.round((currentAccuracy * 0.6) + (wpmRatio * 100 * 0.4));
    if (comprehensionScore > 100) comprehensionScore = 100;

    if (isFinalResult) {
        document.getElementById('bigAccValue').innerText = `${currentAccuracy}%`;
        document.getElementById('bigWpmValue').innerText = currentWpm;
        
        const compEl = document.getElementById('bigCompValue');
        compEl.innerText = `${comprehensionScore}%`;
        
        if (comprehensionScore >= 80) compEl.className = "text-5xl md:text-6xl font-bold text-yellow-400 serif-font";
        else if (comprehensionScore >= 50) compEl.className = "text-5xl md:text-6xl font-bold text-amber-500 serif-font";
        else compEl.className = "text-5xl md:text-6xl font-bold text-red-400 serif-font";

        if (currentCustomLesson) {
            const todayStr = new Date().toLocaleDateString();
            const logData = {
                date: todayStr,
                mode: currentMode,
                score: currentAccuracy,
                wpm: currentWpm,
                comp: comprehensionScore,
                timestamp: new Date().getTime()
            };

            if (typeof savePracticeLog === 'function') {
                savePracticeLog(currentCustomLesson.id, logData, () => {
                    updateHistoryUI();
                });
            } else {
                updateHistoryUI(); 
            }
        }
    }
}

function updateHistoryUI() {
    if (!currentCustomLesson) return;
    
    let history = currentCustomLesson.history || [];
    let totalReads = history.length;
    
    const iconsHtml = history.map(log => {
        let icon = '📖';
        let titleText = '音読';
        if (log.mode === 'shadowing') { icon = '🎧'; titleText = 'シャドーイング'; }
        if (log.mode === 'memo') { icon = '🧠'; titleText = '暗記'; }
        if (log.mode === 'paced') { icon = '⚡️'; titleText = 'ペース音読'; }
        
        return `<span class="text-2xl drop-shadow-md" title="${titleText}">${icon}</span>`;
    }).join('');
    
    const iconContainer = document.getElementById('practiceIconsContainer');
    if (iconContainer) iconContainer.innerHTML = iconsHtml;

    let isConsecutive = false;
    let daysSinceLastPractice = 0;

    if (totalReads > 1) {
        const lastLog = history[totalReads - 2]; 
        const lastDate = new Date(lastLog.timestamp);
        const todayDate = new Date();
        
        const diffTime = Math.abs(todayDate - lastDate);
        daysSinceLastPractice = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        
        if (daysSinceLastPractice === 1 || daysSinceLastPractice === 0) {
            isConsecutive = true;
        }
    }

    let adviceMsg = `<strong class="text-emerald-800 text-base">現在 ${totalReads}回目 の練習です！</strong><br>`;

    if (totalReads < 5) {
        adviceMsg += `SLA（第二言語習得論）の研究では、同じ文章を <strong>5〜7回</strong> 反復することで脳内の神経回路が繋がり、「自動化」が始まると言われています。あと <strong>${5 - totalReads}回</strong> 繰り返すと、英語を英語のまま処理する感覚が掴めてきます！`;
    } else if (totalReads >= 5 && isConsecutive) {
        adviceMsg += `🔥 素晴らしい反復です！「分散学習（Spacing Effect）」の効果により、脳内でこの回路がスムーズに動き、長期記憶に定着し始めています。`;
    } else {
        adviceMsg += `すでに脳内で回路は構築されています！${daysSinceLastPractice > 1 ? `（前回から${daysSinceLastPractice}日ぶりですね）` : ''}少し日数が空いてから「思い出す」プロセスを入れることで、記憶はより強固なものになります。`;
    }

    const adviceContainer = document.getElementById('slaAdviceText');
    if (adviceContainer) adviceContainer.innerHTML = adviceMsg;
}