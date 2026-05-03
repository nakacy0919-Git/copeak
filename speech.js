// ==========================================
// speech.js: 途切れない文字起こし ＆ 順序通りの正確な照合
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
            const audioPlayer = document.getElementById('audioPlayer');
            if (audioPlayer) audioPlayer.pause();
            if (typeof showMsg === 'function') showMsg("⚠️ マイクが拒否されました");
        }
    };

    mainRecognition.onresult = (e) => {
        let interimTranscript = '';
        let newlyFinalized = '';

        for (let i = e.resultIndex; i < e.results.length; i++) {
            if (e.results[i].isFinal) {
                newlyFinalized += e.results[i][0].transcript + ' ';
            } else {
                interimTranscript += e.results[i][0].transcript;
            }
        }

        if (newlyFinalized !== '') {
            accumulatedTranscript += newlyFinalized;
        }
        currentInterim = interimTranscript;

        const fullSpokenText = accumulatedTranscript + currentInterim;
        processSpeechMatch(fullSpokenText);
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
    const jpnWrapper = document.getElementById('jpnWrapper');

    if (isMainRecording) {
        isMainRecording = false;
        mainRecognition.stop();
        
        if (currentMode === 'shadowing' && audioPlayer) audioPlayer.pause();
        if (currentMode === 'reading' && currentCustomLesson && currentCustomLesson.jpn) {
            if (jpnWrapper) jpnWrapper.classList.remove('hidden');
        }

        updateMicButtonUI();
        if (currentInterim !== '') {
            accumulatedTranscript += currentInterim + ' ';
            currentInterim = '';
        }
        processSpeechMatch(accumulatedTranscript); 
    } else {
        recordStartTime = Date.now();
        isMainRecording = true;
        accumulatedTranscript = '';
        currentInterim = '';
        
        document.getElementById('recognizedTextDisplay').style.color = "#292524"; 

        const targetLang = currentCustomLesson.lang || 'en-US';
        mainRecognition.lang = targetLang;

        if (currentMode === 'reading' && jpnWrapper && !jpnWrapper.classList.contains('hidden')) {
            jpnWrapper.classList.add('hidden');
        }

        if (currentMode === 'shadowing' && currentCustomLesson.audioBlob && audioPlayer) {
            audioPlayer.play().then(() => {
                setTimeout(() => {
                    try {
                        mainRecognition.start();
                        updateMicButtonUI();
                        processSpeechMatch(""); 
                    } catch(e) {
                        isMainRecording = false;
                        updateMicButtonUI();
                    }
                }, 300); 
            }).catch(e => {
                mainRecognition.start();
                updateMicButtonUI();
                processSpeechMatch(""); 
            });
        } else {
            try {
                mainRecognition.start();
                updateMicButtonUI();
                processSpeechMatch(""); 
            } catch(e) {
                isMainRecording = false;
                updateMicButtonUI();
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
        txt.innerText = "STOP RECORDING";
    } else {
        btn.classList.remove('bg-stone-800', 'animate-pulse');
        btn.classList.add('bg-emerald-800');
        
        if (currentMode === 'shadowing') {
            txt.innerText = accumulatedTranscript.trim() ? "RETRY SHADOWING" : "START SHADOWING";
        } else {
            txt.innerText = accumulatedTranscript.trim() ? "RETRY READING" : "START READING";
        }
    }
}

function processSpeechMatch(spokenText) {
    if (typeof targetTextArray === 'undefined' || targetTextArray.length === 0) return;
    const recDisplay = document.getElementById('recognizedTextDisplay');

    if (!spokenText && isMainRecording) {
        recDisplay.innerHTML = "Listening... (話してください)";
        return;
    }

    const spokenOriginalWords = spokenText.split(/\s+/).filter(w => w);
    let matchCount = 0;
    let htmlOutput = [];
    
    // スコア計算のために、ターゲットテキストのどこまで読んだかを追跡
    let searchIndex = 0; 

    spokenOriginalWords.forEach((originalWord) => {
        let cleanSpoken = originalWord.toLowerCase().replace(/[^a-z0-9\u00C0-\u017F\u0900-\u097F]/gi, '');
        if (!cleanSpoken) { htmlOutput.push(originalWord); return; }

        let isMatched = false;
        let foundIndex = -1;
        
        // 言い直しを考慮し、現在の位置から10単語先までを探す
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
    
    // 自動スクロール
    recDisplay.scrollTop = recDisplay.scrollHeight;

    // ★ Score (Accuracy) の計算
    const validTargetWordCount = targetTextArray.length;
    const percentage = validTargetWordCount === 0 ? 0 : Math.round((matchCount / validTargetWordCount) * 100);
    const currentScore = percentage > 100 ? 100 : percentage;

    const accEl = document.getElementById('hudAccValue');
    accEl.innerText = `${currentScore}%`;

    if (currentScore >= 80) accEl.className = "font-bold text-2xl text-emerald-400 serif-font";
    else if (currentScore >= 50) accEl.className = "font-bold text-2xl text-amber-500 serif-font";
    else accEl.className = "font-bold text-2xl text-stone-300 serif-font";

    // WPM 計算
    if (recordStartTime > 0 && spokenOriginalWords.length > 0) {
        let elapsedMinutes = (Date.now() - recordStartTime) / 60000;
        if (elapsedMinutes < 0.01) elapsedMinutes = 0.01; 
        document.getElementById('hudWpmValue').innerText = Math.round(spokenOriginalWords.length / elapsedMinutes);
    }
}