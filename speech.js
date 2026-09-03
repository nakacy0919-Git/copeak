// ==========================================
// speech.js: 文字起こし、照合、および内容理解度とSLAフィードバック
// ==========================================

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let mainRecognition;
let isMainRecording = false;
let accumulatedTranscript = ''; 
let currentInterim = '';        
let recordStartTime = 0;


// ==========================================
// ★ 多言語対応: 音声認識結果・教材本文の共通分割 / 正規化
// ==========================================
function getCurrentLessonLang() {
    return (typeof currentCustomLesson !== 'undefined' && currentCustomLesson && currentCustomLesson.lang)
        ? currentCustomLesson.lang
        : 'en-US';
}

function normalizeSpeechToken(token, lang = 'en-US') {
    if (!token) return '';

    let normalized = token.normalize('NFKC');

    try {
        normalized = normalized.toLocaleLowerCase(lang);
    } catch (e) {
        normalized = normalized.toLowerCase();
    }

    // Unicodeの文字・結合文字・数字のみを判定対象にする。
    // apostrophe / hyphen は英語等でASR表記揺れが起こりやすいため比較時には除去。
    normalized = normalized
        .replace(/[’'\-‐‑‒–—―]/g, '')
        .replace(/[^\p{L}\p{M}\p{N}]/gu, '');

    return normalized;
}

function segmentSpeechText(text, lang = 'en-US') {
    const sourceText = String(text || '');
    if (!sourceText) return [];

    // 現行ブラウザでは Intl.Segmenter を第一選択。
    // 日本語・中国語・韓国語・タイ語など、空白で単語が分かれない言語にも対応する。
    if (typeof Intl !== 'undefined' && typeof Intl.Segmenter === 'function') {
        try {
            const segmenter = new Intl.Segmenter(lang, { granularity: 'word' });
            return Array.from(segmenter.segment(sourceText)).map(item => ({
                text: item.segment,
                isWord: item.isWordLike === true,
                normalized: item.isWordLike === true ? normalizeSpeechToken(item.segment, lang) : ''
            }));
        } catch (e) {
            console.warn('Intl.Segmenter fallback:', e);
        }
    }

    // fallback: 日本語・中国語・韓国語・タイ語は1文字単位、それ以外は空白単位。
    const hasNoSpaceScript = /[\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af\u0e00-\u0e7f]/u.test(sourceText);

    if (hasNoSpaceScript) {
        return Array.from(sourceText).map(char => {
            const normalized = normalizeSpeechToken(char, lang);
            return {
                text: char,
                isWord: normalized !== '',
                normalized
            };
        });
    }

    return sourceText.split(/(\s+)/).map(part => {
        const normalized = normalizeSpeechToken(part, lang);
        return {
            text: part,
            isWord: normalized !== '',
            normalized
        };
    });
}

function getLessonTargetTokens() {
    if (typeof currentCustomLesson === 'undefined' || !currentCustomLesson) return [];

    const lang = getCurrentLessonLang();
    const tokens = [];

    if (currentCustomLesson.type === 'dialogue' && Array.isArray(currentCustomLesson.dialogue)) {
        currentCustomLesson.dialogue.forEach(line => {
            segmentSpeechText(line && line.text ? line.text : '', lang).forEach(segment => {
                if (segment.isWord && segment.normalized) tokens.push(segment.normalized);
            });
        });
    } else {
        segmentSpeechText(currentCustomLesson.eng || '', lang).forEach(segment => {
            if (segment.isWord && segment.normalized) tokens.push(segment.normalized);
        });
    }

    return tokens;
}

function refreshRecognitionTargetTextArray() {
    const multilingualTargets = getLessonTargetTokens();

    // ui.js の targetTextArray が存在する場合は同じ配列へ反映する。
    // これにより旧来の英語用生成処理が残っていても、録音開始時に正しい多言語配列へ更新される。
    if (typeof targetTextArray !== 'undefined') {
        targetTextArray = multilingualTargets;
    }

    return multilingualTargets;
}

function escapeSpeechHtml(text) {
    return String(text || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

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

        const targetLang = getCurrentLessonLang();
        mainRecognition.lang = targetLang;

        // ★ 多言語対応: 録音開始時に教材本文を言語別に再分割して採点ターゲットを更新
        refreshRecognitionTargetTextArray();

        // ★修正: audioBlob（ファイル）だけでなく、audioUrl（リンク）がある場合も再生対象にする
        const hasAudio = currentCustomLesson.audioBlob || currentCustomLesson.audioUrl;

        if (currentMode === 'shadowing' && hasAudio && audioPlayer) {
            audioPlayer.currentTime = 0; // ★修正: 毎回必ず「最初(0秒)から」再生させる
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
    const recDisplay = document.getElementById('recognizedTextDisplay');
    if (!recDisplay) return;

    const lang = getCurrentLessonLang();

    // ★ ui.js側の旧targetTextArrayに依存せず、現在教材から毎回安全に取得する
    //    取得できない場合のみ既存targetTextArrayへフォールバックする。
    let scoringTargetArray = getLessonTargetTokens();
    if (scoringTargetArray.length === 0 && typeof targetTextArray !== 'undefined') {
        scoringTargetArray = targetTextArray
            .map(token => normalizeSpeechToken(token, lang))
            .filter(Boolean);
    }

    if (scoringTargetArray.length === 0) return;

    if (!spokenText && isMainRecording) {
        return;
    }

    // ★ 多言語対応: 認識結果も同じ言語・同じルールで分割
    const spokenSegments = segmentSpeechText(spokenText, lang);
    const spokenWordSegments = spokenSegments.filter(segment => segment.isWord && segment.normalized);

    let matchCount = 0;
    let htmlOutput = [];
    let searchIndex = 0;

    spokenSegments.forEach(segment => {
        // 空白・句読点等は元の表示をそのまま維持
        if (!segment.isWord || !segment.normalized) {
            htmlOutput.push(escapeSpeechHtml(segment.text));
            return;
        }

        const cleanSpoken = segment.normalized;
        let isMatched = false;
        let foundIndex = -1;
        const lookaheadLimit = Math.min(searchIndex + 10, scoringTargetArray.length);

        for (let i = searchIndex; i < lookaheadLimit; i++) {
            if (scoringTargetArray[i] === cleanSpoken) {
                foundIndex = i;
                break;
            }
        }

        if (foundIndex !== -1) {
            isMatched = true;
            matchCount++;
            searchIndex = foundIndex + 1;
        }

        const safeOriginal = escapeSpeechHtml(segment.text);
        if (isMatched) {
            htmlOutput.push(`<span class="matched-word">${safeOriginal}</span>`);
        } else {
            htmlOutput.push(`<span class="unmatched-word">${safeOriginal}</span>`);
        }
    });

    // 日本語・中国語なども元の空白・句読点配置を維持して表示
    recDisplay.innerHTML = htmlOutput.join('');

    if (isMainRecording || isFinalResult) {
        recDisplay.scrollTop = recDisplay.scrollHeight;
    }

    const validTargetWordCount = scoringTargetArray.length;
    const percentage = validTargetWordCount === 0 ? 0 : Math.round((matchCount / validTargetWordCount) * 100);
    const currentAccuracy = percentage > 100 ? 100 : percentage;

    // 英語では従来どおり word/minute。
    // 空白区切りでない言語では Intl.Segmenter の word-like unit/minute として内部計算する。
    let currentWpm = 0;
    if (recordStartTime > 0 && spokenWordSegments.length > 0) {
        let elapsedMinutes = (Date.now() - recordStartTime) / 60000;
        if (elapsedMinutes < 0.01) elapsedMinutes = 0.01;
        currentWpm = Math.round(spokenWordSegments.length / elapsedMinutes);
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

        // 👇👇👇 追加：共同モード通信中なら、確定したスコアを相手に送信 👇👇👇
        if (typeof sendMyResultToPartner === 'function') {
            sendMyResultToPartner(currentAccuracy, currentWpm);
        }
       // 👆👆👆 追加ここまで 👆👆👆

       // 👇👇👇 【ここから追加】クエストモードなら合否判定のド派手な演出を出す 👇👇👇
        if (typeof evaluateQuestResult === 'function') {
            evaluateQuestResult(currentAccuracy, currentWpm);
        }
        // 👆👆👆 【ここまで追加】 👆👆👆
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

    // 🌟 修正ポイント：challenge.html（特設会場）など、辞書がない環境でのクラッシュを防ぐ防護壁
    if (typeof dynamicDict === 'undefined') return;

    const langKey = window.currentAppLang || 'ja';
    const dict = dynamicDict[langKey];
    if (!dict) return;

    let adviceMsg = `<strong class="text-emerald-800 text-base">${dict.fb_count.replace('{n}', totalReads)}</strong><br>`;

    if (totalReads < 5) {
        adviceMsg += dict.fb_under5.replace('{n}', 5 - totalReads);
    } else if (totalReads >= 5 && isConsecutive) {
        adviceMsg += dict.fb_good;
    } else {
        if (daysSinceLastPractice > 1) {
            adviceMsg += dict.fb_done_days.replace('{n}', daysSinceLastPractice);
        } else {
            adviceMsg += dict.fb_done_today;
        }
    }

    const adviceContainer = document.getElementById('slaAdviceText');
    if (adviceContainer) adviceContainer.innerHTML = adviceMsg;
}