// ==========================================
// ui.js: 画面切り替え、モード設定、およびグラフ描画
// ==========================================

const isMobile = window.innerWidth < 768;
let engFontSize = isMobile ? 18 : 24; 
let jpnFontSize = isMobile ? 14 : 16;
let recFontSize = isMobile ? 18 : 24; 

let targetTextArray = [];
let currentMode = 'reading'; 
let currentMemoLevel = 0; 
let progressChartInstance = null;

let targetWpm = 120;
let pacedInterval = null;
let currentPaceIndex = 0;

function showMsg(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.innerText = message;
    toast.classList.add('show-toast');
    setTimeout(() => toast.classList.remove('show-toast'), 3000);
}


// ==========================================
// ★ Mic Health Sensor
// speech.js の認識状態を音読中だけ表示する。
// ※ 実音量ではなく SpeechRecognition の状態センサー。
// ==========================================
const MIC_HEALTH_SENSOR_ID = 'micHealthSensor';
let micHealthHideTimer = null;

function ensureMicHealthSensor() {
    if (!document.getElementById('micHealthSensorStyle')) {
        const style = document.createElement('style');
        style.id = 'micHealthSensorStyle';
        style.textContent = `
            #micHealthSensor{position:fixed;top:max(12px,env(safe-area-inset-top));left:50%;transform:translateX(-50%) translateY(-8px);z-index:20010;max-width:calc(100vw - 7rem);min-width:min(280px,calc(100vw - 7rem));padding:10px 14px;border-radius:9999px;border:1px solid rgba(120,113,108,.22);background:rgba(255,255,255,.96);box-shadow:0 8px 28px rgba(28,25,23,.16);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;gap:10px;opacity:0;visibility:hidden;pointer-events:none;transition:opacity .2s ease,transform .2s ease,visibility .2s ease;font-family:inherit}
            #micHealthSensor.is-visible{opacity:1;visibility:visible;transform:translateX(-50%) translateY(0)}
            #micHealthSensor .mic-health-icon{flex:0 0 auto;font-size:16px;line-height:1}
            #micHealthSensor .mic-health-text{min-width:0;color:#292524;font-size:12px;font-weight:800;line-height:1.35;text-align:left;white-space:normal}
            #micHealthSensor .mic-health-bars{height:16px;display:flex;align-items:center;gap:2px;flex:0 0 auto}
            #micHealthSensor .mic-health-bar{display:block;width:3px;height:5px;border-radius:9999px;background:currentColor;opacity:.45;transform-origin:center}
            #micHealthSensor[data-state="checking"],#micHealthSensor[data-state="finalizing"]{color:#57534e;border-color:rgba(120,113,108,.28)}
            #micHealthSensor[data-state="ready"],#micHealthSensor[data-state="voice"],#micHealthSensor[data-state="recognizing"],#micHealthSensor[data-state="done"]{color:#047857;border-color:rgba(16,185,129,.34);background:rgba(236,253,245,.97)}
            #micHealthSensor[data-state="warning"],#micHealthSensor[data-state="reconnecting"]{color:#b45309;border-color:rgba(245,158,11,.38);background:rgba(255,251,235,.97)}
            #micHealthSensor[data-state="error"]{color:#b91c1c;border-color:rgba(239,68,68,.38);background:rgba(254,242,242,.98)}
            #micHealthSensor[data-state="voice"] .mic-health-bar,#micHealthSensor[data-state="recognizing"] .mic-health-bar{animation:copeakMicBars .7s ease-in-out infinite alternate;opacity:.95}
            #micHealthSensor[data-state="checking"] .mic-health-bar,#micHealthSensor[data-state="reconnecting"] .mic-health-bar,#micHealthSensor[data-state="finalizing"] .mic-health-bar{animation:copeakMicPulse 1s ease-in-out infinite}
            #micHealthSensor .mic-health-bar:nth-child(2){animation-delay:.12s}#micHealthSensor .mic-health-bar:nth-child(3){animation-delay:.24s}
            @keyframes copeakMicBars{from{height:5px}to{height:15px}}@keyframes copeakMicPulse{0%,100%{opacity:.3;transform:scaleY(.65)}50%{opacity:.9;transform:scaleY(1.35)}}
            @media(min-width:768px){#micHealthSensor{top:22px;max-width:min(620px,calc(100vw - 10rem));padding:11px 18px}#micHealthSensor .mic-health-text{font-size:13px}}
            @media(prefers-reduced-motion:reduce){#micHealthSensor,#micHealthSensor .mic-health-bar{animation:none!important;transition:none!important}}
        `;
        document.head.appendChild(style);
    }

    let sensor = document.getElementById(MIC_HEALTH_SENSOR_ID);
    if (!sensor) {
        sensor = document.createElement('div');
        sensor.id = MIC_HEALTH_SENSOR_ID;
        sensor.setAttribute('role', 'status');
        sensor.setAttribute('aria-live', 'polite');
        sensor.setAttribute('aria-atomic', 'true');
        sensor.dataset.state = 'idle';
        sensor.innerHTML = `
            <span class="mic-health-icon" aria-hidden="true">🎙️</span>
            <span class="mic-health-bars" aria-hidden="true"><span class="mic-health-bar"></span><span class="mic-health-bar"></span><span class="mic-health-bar"></span></span>
            <span class="mic-health-text">マイクを確認しています…</span>
        `;
        document.body.appendChild(sensor);
    }
    return sensor;
}

function updateMicHealthSensor(state, message = '') {
    const sensor = ensureMicHealthSensor();
    if (micHealthHideTimer) clearTimeout(micHealthHideTimer);

    const messages = {
        checking: 'マイクを確認しています…',
        ready: 'マイク接続OK・音読を始めてください',
        voice: '声を検出しました',
        recognizing: '音声を認識しています ✓',
        warning: '音声認識を確認しています…',
        reconnecting: '音声認識を再接続しています…',
        finalizing: '音声を確定しています…',
        done: '音声認識完了 ✓',
        error: '音声認識に問題が発生しました'
    };

    const icon = state === 'error'
        ? '🔴'
        : (state === 'warning' || state === 'reconnecting')
            ? '🟠'
            : ['ready', 'voice', 'recognizing', 'done'].includes(state)
                ? '🟢'
                : '🎙️';

    sensor.dataset.state = state || 'checking';
    sensor.querySelector('.mic-health-icon').textContent = icon;
    sensor.querySelector('.mic-health-text').textContent = message || messages[state] || '';
    sensor.classList.add('is-visible');
}

function hideMicHealthSensor(force = false) {
    const sensor = document.getElementById(MIC_HEALTH_SENSOR_ID);
    if (!sensor) return;

    if (micHealthHideTimer) clearTimeout(micHealthHideTimer);

    const state = sensor.dataset.state || '';
    const delay = !force && state === 'done' ? 900 : (!force && state === 'error' ? 2200 : 0);

    const hide = () => {
        sensor.classList.remove('is-visible');
        sensor.dataset.state = 'idle';
        micHealthHideTimer = null;
    };

    if (delay) micHealthHideTimer = setTimeout(hide, delay);
    else hide();
}

window.updateMicHealthSensor = updateMicHealthSensor;
window.hideMicHealthSensor = hideMicHealthSensor;


// ==========================================
// ★多言語対応: 音声認識・採点用ターゲットの共通生成
// speech.js と同じ Intl.Segmenter / Unicode 正規化方針で targetTextArray を作る
// ==========================================
function normalizeUiTargetToken(token, lang = 'en-US') {
    if (!token) return '';

    let normalized = String(token).normalize('NFKC');

    try {
        normalized = normalized.toLocaleLowerCase(lang);
    } catch (e) {
        normalized = normalized.toLowerCase();
    }

    // speech.js と同じく、文字・結合文字・数字だけを比較対象にする。
    // apostrophe / hyphen は ASR の表記揺れを吸収するため比較時には除去する。
    return normalized
        .replace(/[’'\-‐-‒–—―]/g, '')
        .replace(/[^\p{L}\p{M}\p{N}]/gu, '');
}

function segmentUiTargetText(text, lang = 'en-US') {
    const sourceText = String(text || '');
    if (!sourceText) return [];

    // speech.js が読み込み済みなら、その分割ロジックをそのまま再利用する。
    if (typeof segmentSpeechText === 'function') {
        try {
            return segmentSpeechText(sourceText, lang).map(segment => ({
                text: segment.text,
                isWord: segment.isWord === true,
                normalized: segment.normalized || ''
            }));
        } catch (e) {
            console.warn('segmentSpeechText fallback:', e);
        }
    }

    // speech.js が未読込でも ui.js 単体で同じ考え方の分割ができるようにする。
    if (typeof Intl !== 'undefined' && typeof Intl.Segmenter === 'function') {
        try {
            const segmenter = new Intl.Segmenter(lang || 'en-US', { granularity: 'word' });
            return Array.from(segmenter.segment(sourceText)).map(item => {
                const normalized = item.isWordLike === true
                    ? normalizeUiTargetToken(item.segment, lang)
                    : '';

                return {
                    text: item.segment,
                    isWord: item.isWordLike === true && normalized !== '',
                    normalized
                };
            });
        } catch (e) {
            console.warn('Intl.Segmenter target fallback:', e);
        }
    }

    // 古いブラウザ向け fallback。
    // 日本語・中国語・韓国語・タイ語は文字単位、それ以外は空白単位で分割する。
    const hasNoSpaceScript = /[\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af\u0e00-\u0e7f]/u.test(sourceText);

    if (hasNoSpaceScript) {
        return Array.from(sourceText).map(char => {
            const normalized = normalizeUiTargetToken(char, lang);

            return {
                text: char,
                isWord: normalized !== '',
                normalized
            };
        });
    }

    return sourceText.split(/(\s+)/).map(part => {
        const normalized = normalizeUiTargetToken(part, lang);

        return {
            text: part,
            isWord: normalized !== '',
            normalized
        };
    });
}

function buildMultilingualTargetTextArray(lesson) {
    if (!lesson) return [];

    const lang = lesson.lang || 'en-US';
    const tokens = [];

    const addTextTokens = (text) => {
        segmentUiTargetText(text || '', lang).forEach(segment => {
            if (segment.isWord && segment.normalized) {
                tokens.push(segment.normalized);
            }
        });
    };

    if (lesson.type === 'dialogue' && Array.isArray(lesson.dialogue)) {
        lesson.dialogue.forEach(line => addTextTokens(line && line.text ? line.text : ''));
    } else {
        addTextTokens(lesson.eng || '');
    }

    return tokens;
}

function switchScreen(screenId) {
    document.querySelectorAll('.screen').forEach(el => {
        el.style.display = 'none';
        el.classList.remove('active');
    });

    const targetScreen = document.getElementById(screenId);
    targetScreen.style.display = 'flex'; 
    if (screenId === 'learningScreen') targetScreen.style.display = 'block';
    targetScreen.classList.add('active');
    window.scrollTo(0, 0);
}

function backToHome() {
    if (typeof isMainRecording !== 'undefined' && isMainRecording) {
        if (typeof toggleRecording === 'function') toggleRecording();
    }

    const audioPlayer = document.getElementById('audioPlayer');
    if (audioPlayer) {
        audioPlayer.pause();
        audioPlayer.src = "";
    }
    
    currentCustomLesson = null;

    if (typeof loadSavedLessons === 'function') loadSavedLessons(); 

    switchScreen('homeScreen');
}

function openLearningScreen(lesson) {
    document.getElementById('learningTitle').innerText = lesson.title;
    
    document.getElementById('engContainer').style.fontSize = engFontSize + 'px';
    document.getElementById('recognizedTextDisplay').style.fontSize = recFontSize + 'px';
    
    const jpnWrapper = document.getElementById('jpnWrapper');
    const toggleBtn = document.getElementById('toggleJpnBtn');
    
    if (lesson.jpn && lesson.jpn.trim() !== "") {
        toggleBtn.classList.remove('hidden'); 
        jpnWrapper.classList.add('hidden');   
        
        toggleBtn.innerText = '🌐 訳を表示';
        toggleBtn.classList.remove('bg-emerald-50', 'text-emerald-700', 'border-emerald-200');
        
        document.getElementById('jpnContainer').innerHTML = lesson.jpn.replace(/([。？！])\s*/g, "$1<br>");
        document.getElementById('jpnContainer').style.fontSize = jpnFontSize + 'px';
    } else {
        toggleBtn.classList.add('hidden');
        jpnWrapper.classList.add('hidden');
    }

    const audioContainer = document.getElementById('audioContainer');
    const audioPlayer = document.getElementById('audioPlayer');
    
    if (lesson.audioBlob) {
        audioContainer.classList.remove('hidden');
        audioPlayer.src = URL.createObjectURL(lesson.audioBlob);
    } else if (lesson.audioUrl) {
        audioContainer.classList.remove('hidden');
        audioPlayer.src = lesson.audioUrl;
    } else {
        audioContainer.classList.add('hidden');
        audioPlayer.src = "";
    }

    setLearningMode('reading');
    
    // 🌟 多言語対応: 音声認識・採点用ターゲットを教材言語に合わせて生成
    // speech.js の segmentSpeechText() が利用できる場合は同じ分割・正規化ロジックを使う。
    // 読み込み順などで未定義の場合は ui.js 側のフォールバック処理を使う。
    targetTextArray = buildMultilingualTargetTextArray(lesson);
    
    switchScreen('learningScreen');

    const mainScrollArea = document.getElementById('mainScrollArea');
    if (mainScrollArea) mainScrollArea.scrollTop = 0;
}

function toggleTranslation() {
    if (!currentCustomLesson || !currentCustomLesson.jpn) return;

    const jpnWrapper = document.getElementById('jpnWrapper');
    const btn = document.getElementById('toggleJpnBtn');
    
    if (jpnWrapper.classList.contains('hidden')) {
        jpnWrapper.classList.remove('hidden');
        btn.innerText = '🌐 訳を隠す';
        btn.classList.add('bg-emerald-50', 'text-emerald-700', 'border-emerald-200');
    } else {
        jpnWrapper.classList.add('hidden');
        btn.innerText = '🌐 訳を表示';
        btn.classList.remove('bg-emerald-50', 'text-emerald-700', 'border-emerald-200');
    }
}

function updateMemoLevel(level) {
    currentMemoLevel = parseInt(level); // 数値として確実に処理する
    
    // 古いボタンUI用のコード（念のため残していますが、画面には出ません）
    for (let i = 1; i <= 5; i++) {
        const btn = document.getElementById('lvlBtn' + i);
        if (!btn) continue;

        if (i === currentMemoLevel) {
            btn.className = "flex-1 py-1.5 md:py-2 rounded-sm bg-stone-800 text-white font-bold text-xs transition shadow-sm";
        } else {
            btn.className = "flex-1 py-1.5 md:py-2 rounded-sm bg-stone-200 text-stone-600 hover:bg-stone-300 font-bold text-xs transition";
        }
    }

    // ★抜け落ちていた処理：ドロップダウンの表示を現在のレベルに合わせる
    const selectEl = document.getElementById('vanishLevelSelect');
    if (selectEl) selectEl.value = currentMemoLevel;

    // ★抜け落ちていた処理：テキストの再描画
    renderTargetText(); 
} 

// ★追加: PacedのWPM数値を更新し、ドロップダウンとも連動させる
function updateTargetWpm(val) {
    targetWpm = parseInt(val);
    
    // 古い表示用（念のため残す）
    const display = document.getElementById('targetWpmDisplay');
    if (display) display.innerText = targetWpm + " WPM";

    // ドロップダウンの表示を現在のWPMに合わせる
    const selectEl = document.getElementById('pacedWpmSelect');
    if (selectEl) selectEl.value = targetWpm;
}


// ==========================================
// ★多言語Vanish対応: 言語ごとの単語境界をブラウザ標準APIで取得
// ==========================================
function segmentTextForVanish(text, lang = 'en-US') {
    const sourceText = String(text || '');
    if (!sourceText) return [];

    // Intl.Segmenter が利用できるブラウザでは、英語だけでなく
    // 日本語・中国語・韓国語・タイ語なども言語に応じた単位で分割する
    if (typeof Intl !== 'undefined' && typeof Intl.Segmenter === 'function') {
        try {
            const segmenter = new Intl.Segmenter(lang || 'en-US', { granularity: 'word' });

            const rawSegments = Array.from(segmenter.segment(sourceText)).map(item => ({
                text: item.segment,
                isWord: item.isWordLike === true
            }));

            // ハイフン等でつながった語（例: well-known / teman-teman）は
            // 従来のVanishと同じく、できるだけ1つの消去単位として扱う
            const mergedSegments = [];

            for (let i = 0; i < rawSegments.length; i++) {
                const current = rawSegments[i];

                if (
                    current.isWord &&
                    i + 2 < rawSegments.length &&
                    /^[\-‐-‒–—]$/u.test(rawSegments[i + 1].text) &&
                    rawSegments[i + 2].isWord
                ) {
                    let mergedText = current.text;

                    while (
                        i + 2 < rawSegments.length &&
                        /^[\-‐-‒–—]$/u.test(rawSegments[i + 1].text) &&
                        rawSegments[i + 2].isWord
                    ) {
                        mergedText += rawSegments[i + 1].text + rawSegments[i + 2].text;
                        i += 2;
                    }

                    mergedSegments.push({
                        text: mergedText,
                        isWord: true
                    });

                } else {
                    mergedSegments.push(current);
                }
            }

            return mergedSegments;

        } catch (e) {
            console.warn('Intl.Segmenter fallback:', e);
        }
    }

    // フォールバック1: スペース区切りがある言語
    if (/\s/u.test(sourceText)) {
        return sourceText.split(/(\s+)/u).map(part => ({
            text: part,
            isWord: /[\p{L}\p{M}\p{N}]/u.test(part)
        }));
    }

    // フォールバック2: 日本語・中国語など、スペースがない文章は文字単位で処理
    return Array.from(sourceText).map(char => ({
        text: char,
        isWord: /[\p{L}\p{M}\p{N}]/u.test(char)
    }));
}

function renderTargetText() {
    if (!currentCustomLesson) return;

    const engContainer = document.getElementById('engContainer');
    
    if (currentMode === 'paced') {
        engContainer.classList.add('karaoke-active');
    } else {
        engContainer.classList.remove('karaoke-active');
    }

    let finalHtml = "";

    // 🌟 テキスト描画処理
    // Read / Paced は従来処理を維持し、Vanish のときだけ多言語分割を使用する
    const processWords = (text) => {

        // Vanish以外は既存の表示・Paced挙動をそのまま維持
        if (currentMode !== 'memo' || currentMemoLevel <= 0) {
            const words = text.split(/(\s+)/);

            return words.map(word => {
                if (word.trim() === "") return word;
                return `<span class="pace-word">${word}</span>`;
            }).join('').replace(/([.?!]["']?)<\/span>\s+/g, "$1</span><br><br>");
        }

        // Vanish時はブラウザ標準の多言語単語分割を使用
        const lang = currentCustomLesson.lang || 'en-US';
        const segments = segmentTextForVanish(text, lang);
        const threshold = currentMemoLevel * 0.2;
        let wordIndex = 0;

        return segments.map((segment, segmentIndex) => {
            const segmentText = segment.text;

            // 空白・句読点などは消さない
            if (!segment.isWord) {
                // 文末記号と閉じ引用符が別segmentになるケースにも対応
                const prevText = segmentIndex > 0 ? segments[segmentIndex - 1].text : '';
                const nextText = segmentIndex + 1 < segments.length ? segments[segmentIndex + 1].text : '';
                const isSentenceEnd = /^[.?!。！？؟۔।॥]$/u.test(segmentText);
                const isClosingQuote = /^["'”’»」』】）》〉]$/u.test(segmentText);
                const nextIsClosingQuote = /^["'”’»」』】）》〉]$/u.test(nextText);
                const prevIsSentenceEnd = /^[.?!。！？؟۔।॥]$/u.test(prevText);

                if (isSentenceEnd && !nextIsClosingQuote) {
                    return `${segmentText}<br><br>`;
                }

                if (isClosingQuote && prevIsSentenceEnd) {
                    return `${segmentText}<br><br>`;
                }

                return segmentText;
            }

            const index = wordIndex++;
            let hash = 0;

            for (let i = 0; i < segmentText.length; i++) {
                hash = segmentText.charCodeAt(i) + ((hash << 5) - hash);
            }

            const pseudoRandom = Math.abs(hash + index * 137) % 100 / 100;
            let finalWord = segmentText;

            if (pseudoRandom < threshold) {
                finalWord = `<span class="bg-stone-300 text-transparent rounded-sm select-none">${segmentText}</span>`;
            }

            return `<span class="pace-word">${finalWord}</span>`;
        }).join('');
    };

    // 🌟 分岐: 会話文か、標準テキストか
    if (currentCustomLesson.type === 'dialogue' && currentCustomLesson.dialogue) {

        currentCustomLesson.dialogue.forEach(line => {
            finalHtml += `<div class="mb-4 flex flex-col md:flex-row gap-2 md:gap-4 items-start">`;

            // 話者バッジ（音声判定のターゲットにはならない）
            if (line.speaker) {
                finalHtml += `<div class="bg-emerald-600/20 text-emerald-800 font-bold px-3 py-1 rounded border border-emerald-500/30 text-sm md:text-base shrink-0 mt-1 w-24 md:w-32 text-center truncate" title="${line.speaker}">${line.speaker}</div>`;
            }

            // セリフ部分（音声判定のターゲットになる）
            finalHtml += `<div class="flex-1">${processWords(line.text)}</div></div>`;
        });

    } else {
        finalHtml = processWords(currentCustomLesson.eng);
    }

    engContainer.innerHTML = finalHtml;
}

function openWpmGuide() {
    const modal = document.getElementById('wpmGuideModal');
    if (modal) modal.classList.remove('hidden');
}

function closeWpmGuide() {
    const modal = document.getElementById('wpmGuideModal');
    if (modal) modal.classList.add('hidden');
}

function startPacedReading() {
    stopPacedReading(); 
    currentPaceIndex = 0;

    const words = document.querySelectorAll('.pace-word');
    if (words.length === 0) return;

    const msPerWord = 60000 / targetWpm;

    pacedInterval = setInterval(() => {

        if (currentPaceIndex > 0 && currentPaceIndex <= words.length) {
            const prevWord = words[currentPaceIndex - 1];

            prevWord.classList.remove('paced-highlight');
            prevWord.classList.add('paced-read');
            prevWord.style.transition = 'none'; 
        }
        
        if (currentPaceIndex < words.length) {
            const currentWordEl = words[currentPaceIndex];
            
            currentWordEl.style.transition = `background-position ${msPerWord}ms linear`;
            void currentWordEl.offsetWidth; 
            currentWordEl.classList.add('paced-highlight');

            currentWordEl.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            
            currentPaceIndex++;

        } else {
            stopPacedReading(); 
        }

    }, msPerWord);
}

function stopPacedReading() {
    if (pacedInterval) {
        clearInterval(pacedInterval);
        pacedInterval = null;
    }

    document.querySelectorAll('.pace-word').forEach(el => {
        el.classList.remove('paced-highlight', 'paced-read');
        el.style.transition = '';
    });
}


// ==========================================
// ★ 録音前
// ==========================================
function showPreReadingState() {
    document.body.classList.remove('immersive-mode');

    hideMicHealthSensor();

    const targetTextWrapper = document.getElementById('targetTextWrapper'); 
    const yourVoiceWrapper = document.getElementById('yourVoiceWrapper');
    const resultScoreBoard = document.getElementById('resultScoreBoard');
    const mainPane = document.getElementById('mainLearningPane');
    const sidebar = document.getElementById('playlistSidebar');
    const toggleBtn = document.getElementById('toggleJpnBtn');
    
    const micBtn = document.getElementById('micBtn');

    const oldBtnContainer = document.getElementById('missingWordsBtnContainer');
    if (oldBtnContainer) oldBtnContainer.remove();

    const oldModal = document.getElementById('missingWordsModal');
    if (oldModal) oldModal.remove();

    // ★追加: 中止ボタンを隠す
    const cancelBtn = document.getElementById('cancelRecordingBtn');
    if (cancelBtn) cancelBtn.style.display = 'none';

    const previewBtn = document.querySelector('button[onclick="openFullscreenPreview()"]');
    if (previewBtn) previewBtn.style.display = '';

    const finishBtn = document.getElementById('fullscreenFinishBtn');
    if (finishBtn) finishBtn.style.display = 'none';

    if (micBtn) micBtn.style.display = '';

    const engContainer = document.getElementById('engContainer');

    if (engContainer) {
        engContainer.style.overflowY = '';
        engContainer.style.flex = '';
        engContainer.style.height = '';
    }

    if (targetTextWrapper && targetTextWrapper.firstElementChild) {
        targetTextWrapper.firstElementChild.style.flex = '';
        targetTextWrapper.firstElementChild.style.height = '';
        targetTextWrapper.firstElementChild.style.minHeight = '';
    }

    if (mainPane) {
        mainPane.className = "w-full lg:w-[78%] flex flex-col h-full bg-[#faf8f5] rounded-sm iron-border overflow-hidden relative transition-all duration-500";
    }

    if (sidebar) {
        sidebar.style.display = 'flex';
    }

    if (toggleBtn && currentCustomLesson && currentCustomLesson.jpn) {
        toggleBtn.classList.remove('hidden');
    }

    resultScoreBoard.style.display = 'none'; 

    renderTargetText(); 

    if (currentMode !== 'shadowing') {
        targetTextWrapper.style.display = 'flex';
        targetTextWrapper.className = "w-full flex flex-col gap-4 md:gap-6 transition-all duration-300 relative z-10 bg-transparent p-0 backdrop-blur-none shadow-none border-none";
        yourVoiceWrapper.style.display = 'none';

    } else {
        targetTextWrapper.style.display = 'none'; 
        yourVoiceWrapper.style.display = 'flex';
        yourVoiceWrapper.className = "w-full max-w-4xl mx-auto p-4 md:p-10 bg-white rounded-sm border-l-4 border-stone-800 shadow-sm iron-border-sm flex flex-col min-h-[300px] md:min-h-[400px] transition-all duration-300 opacity-100 relative z-10";
    }
}


// ==========================================
// ★ 録音中
// ==========================================
function showRecordingState() {
    document.body.classList.add('immersive-mode');

    ensureMicHealthSensor();

    const targetTextWrapper = document.getElementById('targetTextWrapper'); 
    const yourVoiceWrapper = document.getElementById('yourVoiceWrapper');
    const jpnWrapper = document.getElementById('jpnWrapper');
    const resultScoreBoard = document.getElementById('resultScoreBoard');
    const mainPane = document.getElementById('mainLearningPane');
    const sidebar = document.getElementById('playlistSidebar');
    const toggleBtn = document.getElementById('toggleJpnBtn');
    
    const micBtn = document.getElementById('micBtn'); 

    const oldBtnContainer = document.getElementById('missingWordsBtnContainer');
    if (oldBtnContainer) oldBtnContainer.remove();

    const oldModal = document.getElementById('missingWordsModal');
    if (oldModal) oldModal.remove();

    // ★追加: 左上のキャンセル（中止）ボタンを生成・表示
    let cancelBtn = document.getElementById('cancelRecordingBtn');

    if (!cancelBtn) {
        cancelBtn = document.createElement('button');
        cancelBtn.id = 'cancelRecordingBtn';
        cancelBtn.innerHTML = "✕";
        cancelBtn.title = "音読を中止する";
        cancelBtn.onclick = cancelRecording;
        document.body.appendChild(cancelBtn);
    }

    // 左上に完全固定するスタイル
    cancelBtn.className = "fixed top-3 left-3 md:top-6 md:left-6 z-[20000] w-10 h-10 md:w-12 md:h-12 bg-white hover:bg-red-50 text-stone-500 hover:text-red-600 font-bold text-xl md:text-2xl rounded-full shadow-xl border border-stone-200 flex items-center justify-center transition-all transform hover:scale-105 cursor-pointer";
    cancelBtn.style.display = 'flex';

    const previewBtn = document.querySelector('button[onclick="openFullscreenPreview()"]');
    if (previewBtn) previewBtn.style.display = 'none';

    if (mainPane) {
        mainPane.className = "w-full flex flex-col h-full bg-[#faf8f5] rounded-sm iron-border overflow-hidden relative transition-all duration-500";
    }

    if (sidebar) {
        sidebar.style.display = 'none';
    }

    if (jpnWrapper) {
        jpnWrapper.classList.add('hidden');
    }

    if (toggleBtn) {
        toggleBtn.classList.add('hidden');
    }

    resultScoreBoard.style.display = 'none'; 

    if (currentMode !== 'shadowing') {

        yourVoiceWrapper.style.display = 'none'; 

        if (micBtn) {
            micBtn.style.display = 'none';
        }

        targetTextWrapper.style.display = 'flex';

        targetTextWrapper.className = "fixed inset-0 z-[9999] w-full h-[100dvh] flex flex-col bg-[#faf8f5] p-2 md:p-8 lg:p-16 overflow-y-auto transition-all duration-500 shadow-2xl";
        
        const engContainer = document.getElementById('engContainer');

        if (engContainer) {
            engContainer.style.overflowY = 'visible';
            engContainer.style.flex = 'none';
            engContainer.style.height = 'auto';
        }
        
        if (targetTextWrapper.firstElementChild) {
            targetTextWrapper.firstElementChild.style.flex = 'none';
            targetTextWrapper.firstElementChild.style.height = 'auto';
            targetTextWrapper.firstElementChild.style.minHeight = '80vh';
        }

        let finishBtn = document.getElementById('fullscreenFinishBtn');

        if (!finishBtn) {
            finishBtn = document.createElement('button');
            finishBtn.id = 'fullscreenFinishBtn';

            finishBtn.onclick = () => {
                if (typeof toggleRecording === 'function') {
                    toggleRecording();
                }
            };
            
            if (targetTextWrapper.firstElementChild) {
                targetTextWrapper.firstElementChild.appendChild(finishBtn);
            } else {
                targetTextWrapper.appendChild(finishBtn);
            }
        }
        
        finishBtn.innerHTML = "⏹ 音読を提出する (Submit)";
        finishBtn.className = "mt-16 mb-8 mx-auto px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-bold text-lg md:text-xl rounded-full shadow-xl transform hover:scale-105 transition-all flex items-center justify-center gap-3 w-[90%] md:w-auto shrink-0 cursor-pointer";
        finishBtn.style.display = 'flex';
        
        targetTextWrapper.scrollTop = 0;

    } else {
        targetTextWrapper.style.display = 'none'; 
        yourVoiceWrapper.style.display = 'flex';

        yourVoiceWrapper.className = "w-full max-w-5xl mx-auto p-4 md:p-12 bg-white rounded-sm border-l-4 border-stone-800 shadow-sm iron-border-sm flex flex-col min-h-[300px] md:min-h-[400px] transition-all duration-300 opacity-100 relative z-10";

        if (micBtn) {
            micBtn.style.display = '';
        }
    }
}


// ==========================================
// ★ 結果画面
// ==========================================
function showResultState() {
    hideMicHealthSensor();

    if (window.isCopeakCanceling) {
        window.isCopeakCanceling = false;

        if (currentCustomLesson && currentCustomLesson.history) {

            while (
                currentCustomLesson.history.length >
                (window.historyLengthBeforeCancel || 0)
            ) {
                currentCustomLesson.history.pop();
            }

            if (typeof saveLessons === 'function') {
                saveLessons();
            }
        }

        if (typeof resetLearningState === 'function') {
            resetLearningState();
        }

        return;
    }

    document.body.classList.remove('immersive-mode');

    const targetTextWrapper = document.getElementById('targetTextWrapper'); 
    const yourVoiceWrapper = document.getElementById('yourVoiceWrapper');
    const resultScoreBoard = document.getElementById('resultScoreBoard');
    const mainPane = document.getElementById('mainLearningPane');
    const sidebar = document.getElementById('playlistSidebar');
    const toggleBtn = document.getElementById('toggleJpnBtn');
    
    const micBtn = document.getElementById('micBtn');

    const cancelBtn = document.getElementById('cancelRecordingBtn');
    if (cancelBtn) cancelBtn.style.display = 'none';

    const previewBtn = document.querySelector('button[onclick="openFullscreenPreview()"]');
    if (previewBtn) previewBtn.style.display = 'none';

    const finishBtn = document.getElementById('fullscreenFinishBtn');
    if (finishBtn) finishBtn.style.display = 'none';

    if (micBtn) micBtn.style.display = '';

    const engContainer = document.getElementById('engContainer');

    if (engContainer) {
        engContainer.style.overflowY = '';
        engContainer.style.flex = '';
        engContainer.style.height = '';
    }

    if (targetTextWrapper && targetTextWrapper.firstElementChild) {
        targetTextWrapper.firstElementChild.style.flex = '';
        targetTextWrapper.firstElementChild.style.height = '';
        targetTextWrapper.firstElementChild.style.minHeight = '';
    }

    if (mainPane) {
        mainPane.className = "w-full flex flex-col h-full bg-[#faf8f5] rounded-sm iron-border overflow-hidden relative transition-all duration-500";
    }

    if (sidebar) {
        sidebar.style.display = 'none';
    }
    
    if (toggleBtn && currentCustomLesson && currentCustomLesson.jpn) {
        toggleBtn.classList.remove('hidden');
    }

    resultScoreBoard.style.display = 'flex';

    const accEl = document.getElementById('bigAccValue');
    const wpmEl = document.getElementById('bigWpmValue');

    if (accEl && wpmEl) {
        const accVal = parseInt(accEl.innerText.replace('%', '')) || 0;
        const wpmVal = parseInt(wpmEl.innerText) || 0;
        
        accEl.classList.remove('score-firework');
        wpmEl.classList.remove('score-firework');

        void accEl.offsetWidth;
        void wpmEl.offsetWidth;

        if (accVal >= 80 && wpmVal >= 95) {
            setTimeout(() => {
                accEl.classList.add('score-firework');
                wpmEl.classList.add('score-firework');
            }, 300);
        }
    }

    if (currentMode !== 'shadowing') {

        yourVoiceWrapper.style.display = 'flex';

        yourVoiceWrapper.className = "w-full lg:w-1/2 p-4 md:p-8 bg-white rounded-sm border-l-4 border-stone-800 shadow-sm iron-border-sm flex flex-col transition-all duration-300 relative z-10 opacity-100 pointer-events-auto flex-1 min-h-[250px] md:min-h-[400px]";
        
        targetTextWrapper.style.display = 'flex';

        targetTextWrapper.className = "w-full lg:w-1/2 flex flex-col gap-4 md:gap-6 transition-all duration-300 relative z-10 bg-transparent p-0 backdrop-blur-none border-none shadow-none flex-1 min-h-[250px] md:min-h-[400px]";

        const oldBtnContainer = document.getElementById('missingWordsBtnContainer');

        if (oldBtnContainer) {
            oldBtnContainer.remove();
        }

        const btnContainer = document.createElement('div');

        btnContainer.id = 'missingWordsBtnContainer';
        btnContainer.className = 'absolute bottom-4 left-4 md:bottom-8 md:left-8 z-[100]';
        
        btnContainer.innerHTML = `
            <button onclick="openMissingWordsModal()" class="px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full md:rounded-sm text-[11px] md:text-xs transition shadow-lg flex items-center gap-1.5 transform hover:scale-105 duration-200 border border-orange-400">
                <span class="text-sm leading-none">⚠️</span> 
                <span class="hidden md:inline">未発話・認識されなかった語彙リスト</span>
                <span class="md:hidden">未発話リスト</span>
            </button>
        `;

        if (mainPane) {
            mainPane.appendChild(btnContainer);
        }
    }
}

function setLearningMode(mode) {

    if (typeof isMainRecording !== 'undefined' && isMainRecording) {
        if (typeof toggleRecording === 'function') {
            toggleRecording();
        }
    }

    currentMode = mode;

    const tabR = document.getElementById('tabReading');
    const tabP = document.getElementById('tabPaced');
    const tabM = document.getElementById('tabMemo');
    const tabS = document.getElementById('tabShadowing');
    
    const btnText = document.getElementById('micBtnText');
    const vanishControls = document.getElementById('vanishModeControls');
    const pacedControls = document.getElementById('pacedModeControls'); 
    
    const activeClass = "flex-1 px-1 md:px-4 py-2 rounded-sm font-bold text-[10px] md:text-sm transition-all duration-200 bg-stone-800 text-white uppercase tracking-wider shadow-md whitespace-nowrap";

    const inactiveClass = "flex-1 px-1 md:px-4 py-2 rounded-sm font-bold text-[10px] md:text-sm transition-all duration-200 text-stone-500 hover:text-stone-800 uppercase tracking-wider whitespace-nowrap";

    if (tabR) {
        tabR.className = (mode === 'reading') ? activeClass : inactiveClass;
    }

    if (tabP) {
        tabP.className = (mode === 'paced') ? activeClass : inactiveClass;
    }

    if (tabM) {
        tabM.className = (mode === 'memo') ? activeClass : inactiveClass;
    }

    if (tabS) {
        tabS.className = (mode === 'shadowing') ? activeClass : inactiveClass;
    }

    if (mode === 'reading') {

        btnText.innerText = "START READING";

        if (vanishControls) {
            vanishControls.classList.add('hidden');
        }

        if (pacedControls) {
            pacedControls.classList.add('hidden');
        }

        currentMemoLevel = 0;

    } else if (mode === 'paced') {

        btnText.innerText = "START PACED";

        if (vanishControls) {
            vanishControls.classList.add('hidden');
        }

        if (pacedControls) {
            pacedControls.classList.remove('hidden');
        }

        currentMemoLevel = 0;

    } else if (mode === 'memo') {

        btnText.innerText = "START VANISH";

        if (vanishControls) {
            vanishControls.classList.remove('hidden');
        }

        if (pacedControls) {
            pacedControls.classList.add('hidden');
        }

        if (currentMemoLevel === 0) {
            updateMemoLevel(1); 
        }

    } else {

        btnText.innerText = "START SHADOWING";

        if (vanishControls) {
            vanishControls.classList.add('hidden');
        }

        if (pacedControls) {
            pacedControls.classList.add('hidden');
        }

        currentMemoLevel = 0;
    }

    resetLearningState();
}

function resetLearningState() {

    if (typeof finalTranscript !== 'undefined') {
        finalTranscript = '';
    }

    if (typeof accumulatedTranscript !== 'undefined') {
        accumulatedTranscript = '';
    }
    
    stopPacedReading(); 

    const recDisplay = document.getElementById('recognizedTextDisplay');

    recDisplay.innerHTML = "※Press START to begin";
    recDisplay.style.color = "#a8a29e"; 
    
    showPreReadingState();
    
    const btn = document.getElementById('micBtn');

    if (btn) {
        btn.classList.remove('bg-stone-800', 'animate-pulse');
        btn.classList.add('bg-emerald-800');
    }
}

function changeFontSize(type, step) {
    if (type === 'eng') {
        engFontSize = Math.max(12, Math.min(80, engFontSize + step));
        document.getElementById('engContainer').style.fontSize = engFontSize + 'px';

    } else if (type === 'jpn') {
        jpnFontSize = Math.max(10, Math.min(60, jpnFontSize + step));
        document.getElementById('jpnContainer').style.fontSize = jpnFontSize + 'px';

    } else if (type === 'rec') {
        recFontSize = Math.max(12, Math.min(80, recFontSize + step));
        document.getElementById('recognizedTextDisplay').style.fontSize = recFontSize + 'px';
    }
}

function openChartModal() {
    document.getElementById('chartModal').classList.remove('hidden');
    renderChart();
}

function closeChartModal() {
    document.getElementById('chartModal').classList.add('hidden');
}

function renderChart() {

    if (
        !currentCustomLesson ||
        !currentCustomLesson.history ||
        currentCustomLesson.history.length === 0
    ) {

        if (typeof showMsg === 'function') {
            showMsg("📝 まだ学習履歴がありません");
        }

        return;
    }

    const ctx = document.getElementById('progressChart').getContext('2d');

    if (progressChartInstance) {
        progressChartInstance.destroy();
    }

    const labels = currentCustomLesson.history.map((log, index) => {
        let modeStr = '📖 音読';

        if (log.mode === 'shadowing') {
            modeStr = '🎧 シャドーイング';
        }

        if (log.mode === 'memo') {
            modeStr = '🧠 暗記';
        }

        if (log.mode === 'paced') {
            modeStr = '⚡️ ペース音読';
        }

        return [`${index + 1}回目 (${modeStr})`, log.date];
    });
    
    const accData = currentCustomLesson.history.map(log => log.score);
    const wpmData = currentCustomLesson.history.map(log => log.wpm);
    const compData = currentCustomLesson.history.map(log => log.comp);

    progressChartInstance = new Chart(ctx, {
        type: 'line',

        data: {
            labels: labels,

            datasets: [
                {
                    label: 'Comprehension (理解度 %)',
                    data: compData,
                    borderColor: '#facc15',
                    backgroundColor: 'rgba(250, 204, 21, 0.2)',
                    borderWidth: 4,
                    tension: 0.3,
                    fill: true,
                    yAxisID: 'y',
                    pointRadius: 6,
                    pointHoverRadius: 8
                },

                {
                    label: 'Accuracy (正確さ %)',
                    data: accData,
                    borderColor: '#34d399',
                    borderWidth: 3,
                    tension: 0.3,
                    yAxisID: 'y',
                    pointRadius: 6,
                    pointHoverRadius: 8
                },

                {
                    label: 'WPM (スピード)',
                    data: wpmData,
                    borderColor: '#60a5fa',
                    borderWidth: 3,
                    borderDash: [5, 5],
                    tension: 0.3,
                    yAxisID: 'y1',
                    pointRadius: 6,
                    pointHoverRadius: 8
                }
            ]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false, 

            interaction: {
                mode: 'index',
                intersect: false
            },

            onClick: (e, elements) => {

                if (elements.length > 0) {
                    const dataIndex = elements[0].index;

                    closeChartModal(); 
                    
                    const savedProfile = localStorage.getItem('copeak_student_profile');

                    if (!savedProfile) {
                        document.getElementById('studentProfileModal').classList.remove('hidden');
                    } else {
                        selectHistoryLog(dataIndex);
                    }
                }
            },

            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    min: 0,
                    max: 100,

                    title: {
                        display: true,
                        text: 'Percentage (%)',
                        color: '#78716c',
                        font: {
                            weight: 'bold'
                        }
                    }
                },

                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    min: 0,

                    title: {
                        display: true,
                        text: 'Words Per Minute (WPM)',
                        color: '#78716c',
                        font: {
                            weight: 'bold'
                        }
                    },

                    grid: {
                        drawOnChartArea: false
                    }
                }
            },

            plugins: {
                tooltip: {
                    callbacks: {
                        title: (context) => {
                            return context[0].label.replace(',', ' ');
                        }
                    }
                }
            }
        }
    });
}

function openModeGuide() {
    const modal = document.getElementById('modeGuideModal');

    if (modal) {
        modal.classList.remove('hidden');
    }
}

function closeModeGuide() {
    const modal = document.getElementById('modeGuideModal');

    if (modal) {
        modal.classList.add('hidden');
    }
}

async function generateShareLink() {

    if (!currentCustomLesson) return;
    
    const baseUrl = window.location.origin + window.location.pathname;
    
    const paramsConfig = {
        title: currentCustomLesson.title.replace('🔗 ', ''),
        eng: currentCustomLesson.eng,
        lang: currentCustomLesson.lang || 'en-US'
    };

    if (currentCustomLesson.jpn) {
        paramsConfig.jpn = currentCustomLesson.jpn;
    }

    if (currentCustomLesson.audioUrl) {
        paramsConfig.audioUrl = currentCustomLesson.audioUrl;
    }

    const savedFormUrl = localStorage.getItem('copeak_teacher_form_url');
    const formUrl = currentCustomLesson.formUrl || savedFormUrl || '';

    if (formUrl) {
        paramsConfig.form = formUrl;
    }

    if (currentCustomLesson.type === 'dialogue' && currentCustomLesson.dialogue) {
        paramsConfig.type = 'dialogue';
        paramsConfig.dialogue = JSON.stringify(currentCustomLesson.dialogue);
    }
    
    const params = new URLSearchParams(paramsConfig);
    const longUrl = `${baseUrl}?${params.toString()}`;
    
    try {

        await navigator.clipboard.writeText(longUrl);

        if (typeof showMsg === 'function') {

            if (formUrl) {
                showMsg("🔗 【成績送信付き】リンクをコピーしました！");
            } else {
                showMsg("🔗 リンクをコピーしました！");
            }
        }

    } catch (err) {

        if (typeof showMsg === 'function') {
            showMsg("⚠️ リンクのコピーに失敗しました");
        }
    }
}

let aiUtterance = null;

function toggleAIVoice() {

    if (!currentCustomLesson) return;
    
    const btn = document.getElementById('aiVoiceBtn');
    
    if (window.speechSynthesis.speaking) {

        window.speechSynthesis.cancel();

        btn.innerHTML = '🤖 AI音声を再生';
        btn.classList.remove('bg-red-600', 'hover:bg-red-700');
        btn.classList.add('bg-purple-600', 'hover:bg-purple-700');

        return;
    }

    aiUtterance = new SpeechSynthesisUtterance(currentCustomLesson.eng);

    aiUtterance.lang = currentCustomLesson.lang || 'en-US';
    aiUtterance.rate = 0.9; 
    
    aiUtterance.onend = () => {
        btn.innerHTML = '🤖 AI音声を再生';
        btn.classList.remove('bg-red-600', 'hover:bg-red-700');
        btn.classList.add('bg-purple-600', 'hover:bg-purple-700');
    };

    window.speechSynthesis.speak(aiUtterance);
    
    btn.innerHTML = '⏹ AI音声を停止';
    btn.classList.remove('bg-purple-600', 'hover:bg-purple-700');
    btn.classList.add('bg-red-600', 'hover:bg-red-700');
}

let selectedLogToSubmit = null; 

const originalShowResultState = showResultState;

showResultState = function() {

    originalShowResultState(); 
    
    const submitBtn = document.getElementById('submitScoreTriggerBtn');

    if (!submitBtn) return;

    if (currentCustomLesson && currentCustomLesson.formUrl) {
        submitBtn.classList.remove('hidden');
    } else {
        submitBtn.classList.add('hidden');
    }
};

function openReflectionWrapper() {
    const savedProfile = localStorage.getItem('copeak_student_profile');
    
    if (!savedProfile) {
        document.getElementById('studentProfileModal').classList.remove('hidden');
    } else {
        openHistorySelectModal();
    }
}

function saveStudentProfile() {

    const cls = document.getElementById('studentClassInput').value.trim();
    const num = document.getElementById('studentNumInput').value.trim();
    const name = document.getElementById('studentNameInput').value.trim();

    if (!cls || !num || !name) {
        alert("すべての項目を入力してください。");
        return;
    }

    const profile = {
        class: cls,
        number: num,
        name: name
    };

    localStorage.setItem('copeak_student_profile', JSON.stringify(profile));
    
    document.getElementById('studentProfileModal').classList.add('hidden');

    openHistorySelectModal(); 
}

function openHistorySelectModal() {

    const oldModal = document.getElementById('historySelectModal');

    if (oldModal) {
        oldModal.remove();
    }

    const modal = document.createElement('div');

    modal.id = 'historySelectModal';
    modal.className = 'fixed inset-0 z-[10000] bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm';
    
    let historyHtml = '';

    if (
        !currentCustomLesson ||
        !currentCustomLesson.history ||
        currentCustomLesson.history.length === 0
    ) {

        historyHtml = `<p class="text-center text-stone-400 py-8 text-sm">練習履歴がまだありません。</p>`;

    } else {

        const reversedHistory = [...currentCustomLesson.history].reverse();

        reversedHistory.forEach((log, index) => {

            const originalIndex = currentCustomLesson.history.length - 1 - index;

            let modeStr = '📖 音読';

            if (log.mode === 'shadowing') {
                modeStr = '🎧 シャドー';
            }

            if (log.mode === 'memo') {
                modeStr = '🧠 暗記';
            }

            if (log.mode === 'paced') {
                modeStr = '⚡️ ペース';
            }

            historyHtml += `
                <div onclick="selectHistoryLog(${originalIndex})" class="p-3 mb-2 bg-stone-50 hover:bg-emerald-50 border border-stone-200 hover:border-emerald-500 rounded-sm cursor-pointer transition flex justify-between items-center group text-left">
                    <div>
                        <div class="font-bold text-stone-800 text-xs md:text-sm group-hover:text-emerald-900">${originalIndex + 1}回目: ${modeStr} <span class="text-stone-400 font-normal text-[10px] ml-1">${log.date || ''}</span></div>
                        <div class="text-[11px] text-stone-500 mt-1">Accuracy: <span class="font-bold text-stone-700">${log.score}%</span> / Speed: <span class="font-bold text-stone-700">${log.wpm} WPM</span> / Comp: <span class="font-bold text-stone-700">${log.comp}%</span></div>
                    </div>
                    <span class="text-stone-400 group-hover:text-emerald-600 font-bold text-xs shrink-0 pl-2">選択 ➔</span>
                </div>
            `;
        });
    }

    modal.innerHTML = `
        <div class="bg-white rounded-sm max-w-md w-full p-5 flex flex-col max-h-[80vh] shadow-xl border border-stone-300">
            <div class="flex justify-between items-center mb-3 border-b border-stone-200 pb-2">
                <h3 class="font-black text-base md:text-lg text-stone-800 flex items-center gap-2">📋 提出する成績の選択</h3>
                <button onclick="closeHistorySelectModal()" class="text-stone-400 hover:text-stone-600 text-lg font-bold">✕</button>
            </div>

            <p class="text-[11px] text-stone-500 mb-3 text-left leading-relaxed">過去のすべての練習履歴（今回の結果を含む）が表示されています。先生に送信したい回をタップしてください。</p>

            <div class="flex-1 overflow-y-auto pr-1">
                ${historyHtml}
            </div>

            <button onclick="closeHistorySelectModal()" class="mt-4 w-full py-2 bg-stone-100 hover:bg-stone-200 text-stone-600 font-bold rounded-sm text-xs transition">閉じる</button>
        </div>
    `;

    document.body.appendChild(modal);
}

function closeHistorySelectModal() {

    const modal = document.getElementById('historySelectModal');

    if (modal) {
        modal.remove();
    }
}

function selectHistoryLog(index) {

    if (!currentCustomLesson || !currentCustomLesson.history) return;

    selectedLogToSubmit = currentCustomLesson.history[index];
    selectedLogToSubmit.displayIndex = index + 1; 
    
    closeHistorySelectModal();

    openReflectionModal(); 
}

function openReflectionModal() {

    if (!selectedLogToSubmit) return;

    const scoreText = `${selectedLogToSubmit.score}%`;
    const wpmText = `${selectedLogToSubmit.wpm}`;
    
    let modeStr = '📖 Read';

    if (selectedLogToSubmit.mode === 'shadowing') {
        modeStr = '🎧 Shadowing';
    }

    if (selectedLogToSubmit.mode === 'memo') {
        modeStr = '🧠 Vanish';
    }

    if (selectedLogToSubmit.mode === 'paced') {
        modeStr = '⚡️ Paced';
    }

    document.getElementById('submitScorePreview').innerText =
        `【選択中: 第 ${selectedLogToSubmit.displayIndex} 回目の記録】 Accuracy: ${scoreText} / Speed: ${wpmText} WPM`;

    document.getElementById('submitModePreview').innerText = modeStr;

    document.getElementById('reflectionInput').value = ""; 
    
    document.getElementById('reflectionModal').classList.remove('hidden');
}

function closeReflectionModal() {

    document.getElementById('reflectionModal').classList.add('hidden');

    selectedLogToSubmit = null; 
}

async function submitScoreToForm() {

    if (!currentCustomLesson || !currentCustomLesson.formUrl || !selectedLogToSubmit) return;

    const profile = JSON.parse(
        localStorage.getItem('copeak_student_profile')
    );

    if (!profile) return;

    const reflection = document.getElementById('reflectionInput').value.trim();

    if (!reflection) {

        if (typeof showMsg === 'function') {
            showMsg("⚠️ 振り返りを入力してください");
        }

        return;
    }

    const finalSubmitBtn = document.getElementById('finalSubmitBtn');

    finalSubmitBtn.disabled = true;
    finalSubmitBtn.innerHTML = "⏳ 送信中...";

    const accuracy = String(selectedLogToSubmit.score);
    const wpm = String(selectedLogToSubmit.wpm);
    const comp = String(selectedLogToSubmit.comp || 0);
    const targetPlayCount = String(selectedLogToSubmit.displayIndex);

    let modeStr = 'Read';

    if (selectedLogToSubmit.mode === 'shadowing') {
        modeStr = 'Shadowing';
    }

    if (selectedLogToSubmit.mode === 'memo') {
        modeStr = 'Vanish';
    }

    if (selectedLogToSubmit.mode === 'paced') {
        modeStr = 'Paced';
    }

    const lessonTitle = currentCustomLesson.title.replace('🔗 ', '');

    let cleanFormUrl = currentCustomLesson.formUrl.split('?')[0]; 
    let postUrl = cleanFormUrl.replace('/viewform', '/formResponse');

    const formData = new URLSearchParams();

    formData.append('entry.755665088', profile.class);
    formData.append('entry.70481568', profile.number);
    formData.append('entry.1056156063', profile.name);
    formData.append('entry.1259267878', lessonTitle); 
    formData.append('entry.222722906', currentCustomLesson.eng || '');
    formData.append('entry.145428349', accuracy);
    formData.append('entry.928123739', wpm);
    formData.append('entry.1611039041', comp);
    formData.append('entry.1534604696', modeStr);
    formData.append('entry.695903918', targetPlayCount);
    formData.append('entry.80945765', reflection);

    try {

        await fetch(postUrl, {
            method: 'POST',
            mode: 'no-cors', 
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData.toString()
        });

        if (typeof showMsg === 'function') {
            showMsg("🚀 選択した成績と内省を先生に送信しました！");
        }

        closeReflectionModal();
        
        const triggerBtn = document.getElementById('submitScoreTriggerBtn');

        if (triggerBtn) {
            triggerBtn.classList.add('hidden');
        }
        
    } catch (error) {

        alert("⚠️ 送信に失敗しました。電波の良いところで再度お試しください。");

    } finally {

        finalSubmitBtn.disabled = false;
        finalSubmitBtn.innerHTML = "<span>🚀</span> この内容で送信する";
    }
}


// ==========================================
// ★ 教師フォームURL
// ==========================================
window.addEventListener('DOMContentLoaded', () => {

    const savedFormUrl = localStorage.getItem('copeak_teacher_form_url');
    const inputEl = document.getElementById('teacherFormUrlInput');

    if (savedFormUrl && inputEl) {
        inputEl.value = savedFormUrl;
    }
});

function saveTeacherFormUrl() {

    const inputUrl = document.getElementById('teacherFormUrlInput').value.trim();
    
    if (inputUrl === "") {

        localStorage.removeItem('copeak_teacher_form_url');

        if (typeof showMsg === 'function') {
            showMsg("🗑️ 成績回収フォームの登録を解除しました");
        }

        return;
    }

    if (!inputUrl.includes('docs.google.com/forms/')) {

        alert("⚠️ 正しいGoogleフォームのURLを入力してください。");

        return;
    }

    localStorage.setItem('copeak_teacher_form_url', inputUrl);

    if (typeof showMsg === 'function') {
        showMsg("✅ 成績回収フォームのURLを保存しました！");
    }
}


// ==========================================
// ★ Teacher Mode
// ==========================================
window.addEventListener('DOMContentLoaded', () => {

    const isTeacherMode =
        localStorage.getItem('copeak_teacher_mode') === 'true';

    const area = document.getElementById('teacherModeArea');

    if (area) {
        area.style.display = isTeacherMode ? 'flex' : 'none';
    }
});

function toggleTeacherMode() {

    const area = document.getElementById('teacherModeArea');

    if (!area) return;

    if (area.style.display === 'none' || area.style.display === '') {

        const confirmOpen = confirm(
            "教員用の教材作成・設定メニューを開きますか？\n（生徒には操作させないでください）"
        );

        if (confirmOpen) {

            area.style.display = 'flex';

            localStorage.setItem('copeak_teacher_mode', 'true');

            if (typeof showMsg === 'function') {
                showMsg("🔓 教員モードをオンにしました");
            }
        }

    } else {

        area.style.display = 'none';

        localStorage.setItem('copeak_teacher_mode', 'false');

        if (typeof showMsg === 'function') {
            showMsg("🔒 教員モードをオフにしました（生徒用画面）");
        }
    }
}


// ==========================================
// ★ Splash Screen
// ==========================================
window.addEventListener('DOMContentLoaded', () => {

    const style = document.createElement('style');

    style.innerHTML = `
        @keyframes splashEntrance {
            0% { opacity: 0; transform: translateY(40px) scale(0.9); filter: blur(10px); }
            100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }

        @keyframes warpExit {
            0% { transform: scale(1); opacity: 1; filter: blur(0); }
            20% { transform: scale(0.95); opacity: 1; filter: blur(0); }
            100% { transform: scale(6); opacity: 0; filter: blur(20px); visibility: hidden; }
        }

        .animate-splash-entrance {
            animation: splashEntrance 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) 0.1s forwards;
        }

        .warp-animation {
            animation: warpExit 1.2s cubic-bezier(0.7, 0, 0.2, 1) forwards;
            pointer-events: none;
        }

        .mach-anim-text {
            display: inline-block;
            font-size: 2rem;
            font-weight: 900;
            color: white;
            position: relative;
            font-family: 'Lora', serif;
            text-shadow: 0 4px 15px rgba(0,0,0,0.5);
        }

        @media (min-width: 768px) {
            .mach-anim-text {
                font-size: 3rem;
            }
        }

        .mach-anim-text span {
            display: inline-block;
            animation: mach-text-fade-up 1s cubic-bezier(0.2, 0.8, 0.2, 1) both;
            animation-delay: calc(0.5s + (var(--char-index) * 0.05s));
        }

        @keyframes mach-text-fade-up {
            0% {
                opacity: 0;
                transform: translateY(20px);
                filter: blur(5px);
            }

            100% {
                opacity: 1;
                transform: translateY(0);
                filter: blur(0);
            }
        }
    `;

    document.head.appendChild(style);

    const splash = document.createElement('div');

    splash.id = 'dynamicSplashScreen';

    splash.className =
        'fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden transition-colors duration-1000';

    splash.style.background =
        'radial-gradient(circle at center, #0f172a 0%, #020617 100%)';
    
    splash.innerHTML = `
        <div class="absolute inset-0 z-0 flex items-center justify-center opacity-40 pointer-events-none">
            <div class="w-[40rem] h-[40rem] bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div class="absolute w-[30rem] h-[30rem] bg-blue-500/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
        </div>

        <div id="splashContent" class="relative z-10 flex flex-col items-center opacity-0 animate-splash-entrance">
            <img src="logo.png" alt="Copeak Logo" class="w-40 md:w-56 mb-4 drop-shadow-2xl">

            <p class="text-emerald-400 font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-6 opacity-80">
                English Shadowing Platform
            </p>

            <div class="mach-anim-text mb-12 text-center" role="text" aria-label="Welcome to Copeak!">
                <span style="--char-index: 0;">W</span><span style="--char-index: 1;">e</span><span style="--char-index: 2;">l</span><span style="--char-index: 3;">c</span><span style="--char-index: 4;">o</span><span style="--char-index: 5;">m</span><span style="--char-index: 6;">e</span>
                <span style="--char-index: 7; margin-left: 0.4em;">t</span><span style="--char-index: 8;">o</span>
                <span style="--char-index: 9; margin-left: 0.4em; color: #34d399;">C</span><span style="--char-index: 10; color: #34d399;">o</span><span style="--char-index: 11; color: #34d399;">p</span><span style="--char-index: 12; color: #34d399;">e</span><span style="--char-index: 13; color: #34d399;">a</span><span style="--char-index: 14; color: #34d399;">k</span><span style="--char-index: 15; color: #34d399;">!</span>
            </div>

            <button id="enterCopeakBtn" class="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white rounded-full backdrop-blur-md font-bold text-lg md:text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] flex items-center gap-3 group">
                <span class="tracking-widest">ENTER COPEAK</span>
                <span class="group-hover:translate-x-1 transition-transform">➔</span>
            </button>
        </div>
    `;

    document.body.appendChild(splash);

    document.getElementById('enterCopeakBtn').addEventListener('click', () => {

        splash.classList.add('warp-animation');

        setTimeout(() => {
            splash.remove();
        }, 1200);
    });
});

let fsAiUtterance = null;
let isFsAudioPlaying = false;

window.isFsImageShowing = false; 

function openFullscreenPreview() {

    if (!currentCustomLesson) return;
    
    const oldOverlay = document.getElementById('fullscreenPreviewOverlay');

    if (oldOverlay) {
        oldOverlay.remove();
    }

    const overlay = document.createElement('div');

    overlay.id = 'fullscreenPreviewOverlay';

    overlay.className =
        'fixed top-0 left-0 w-full h-[100dvh] z-[9999] bg-[#faf8f5] flex flex-col transition-all duration-300 opacity-0 overflow-hidden';
    
    overlay.innerHTML = `
        <div class="flex items-center justify-between p-4 md:p-6 border-b border-stone-200 bg-white shadow-sm shrink-0 z-20">

            <div class="flex items-center gap-3">

                <button onclick="closeFullscreenPreview()" class="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-stone-100 hover:bg-stone-300 text-stone-600 font-bold text-xl transition shadow-inner border border-stone-200">
                    ✕
                </button>

                <button id="fsToggleImageBtn" onclick="toggleFsMemoImage()" class="hidden px-3 py-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 font-bold rounded-sm text-xs transition border border-emerald-200 shadow-sm flex items-center gap-1.5 whitespace-nowrap">
                    🖼️ <span class="hidden sm:inline">画像 OFF</span>
                </button>

            </div>

            <h2 id="fsTitleDisplay" class="text-base md:text-xl font-bold text-stone-800 serif-font truncate px-4 flex-1 text-center">
                Preview
            </h2>

            <div class="flex gap-2">

                <button id="fsAiVoiceBtn" onclick="toggleFsAIVoice()" class="px-3 md:px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs md:text-sm font-bold rounded-sm shadow-md transition flex items-center gap-1">
                    🤖 <span class="hidden sm:inline">AI音声</span>
                </button>

                <button id="fsOriginalAudioBtn" onclick="toggleFsOriginalAudio()" class="hidden px-3 md:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs md:text-sm font-bold rounded-sm shadow-md transition flex items-center gap-1">
                    ▶️ <span class="hidden sm:inline">お手本再生</span>
                </button>

            </div>

        </div>

        <div class="flex-1 flex overflow-hidden w-full max-w-[1600px] mx-auto">

            <div id="fsImagePane" class="w-1/2 h-full bg-stone-100 border-r border-stone-200 p-4 md:p-8 hidden flex-col justify-center items-center transition-all duration-300">

                <img id="fsMemoImageDisplay" src="" alt="Memo" class="w-full h-full object-contain drop-shadow-sm rounded-md">

            </div>

            <div id="fsTextPane" class="w-full h-full overflow-y-auto p-6 md:p-12 lg:p-16 pb-40 transition-all duration-300 relative" style="-webkit-overflow-scrolling: touch;">

                <div id="fsEngContainer" class="text-2xl md:text-4xl leading-relaxed md:leading-[2.5] text-stone-800 font-medium serif-font max-w-4xl mx-auto"></div>

                <div id="fsJpnContainer" class="text-base md:text-xl text-stone-500 max-w-4xl mx-auto border-t-2 border-dashed border-stone-300 pt-8 mt-8 hidden leading-relaxed"></div>

                <div class="h-48 md:h-64 w-full shrink-0"></div> 

            </div>

        </div>
    `;

    document.body.appendChild(overlay);

    document.getElementById('fsTitleDisplay').innerText =
        currentCustomLesson.title
            ? currentCustomLesson.title.replace('🔗 ', '')
            : 'Preview';
    
    const fsToggleBtn = document.getElementById('fsToggleImageBtn');
    const fsImageDisplay = document.getElementById('fsMemoImageDisplay');
    
    if (currentCustomLesson.memoImage) {

        fsImageDisplay.src = currentCustomLesson.memoImage;

        fsToggleBtn.classList.remove('hidden');

        window.isFsImageShowing = false; 

        window.toggleFsMemoImage();

    } else {

        fsToggleBtn.classList.add('hidden');

        window.isFsImageShowing = true; 

        window.toggleFsMemoImage();
    }

    let engHtml = "";

    if (
        currentCustomLesson.type === 'dialogue' &&
        currentCustomLesson.dialogue
    ) {

        currentCustomLesson.dialogue.forEach(line => {

            engHtml += `<div class="mb-6 flex flex-col md:flex-row gap-2 md:gap-6 items-start">`;

            if (line.speaker) {

                engHtml +=
                    `<div class="bg-emerald-600/20 text-emerald-800 font-bold px-4 py-2 rounded-lg border border-emerald-500/30 text-lg md:text-2xl shrink-0 mt-2 w-32 md:w-48 text-center truncate" title="${line.speaker}">${line.speaker}</div>`;
            }

            engHtml +=
                `<div class="flex-1">${(line.text || "").replace(/([.?!]["']?)\s+/g, "$1<br><br>")}</div></div>`;
        });

    } else {

        engHtml =
            (currentCustomLesson.eng || "")
                .replace(
                    /([.?!]["']?)\s+/g,
                    "$1<br><br>"
                );
    }

    document.getElementById('fsEngContainer').innerHTML = engHtml;
    
    const jpnContainer = document.getElementById('fsJpnContainer');

    if (
        currentCustomLesson.jpn &&
        currentCustomLesson.jpn.trim() !== ""
    ) {

        jpnContainer.innerHTML =
            currentCustomLesson.jpn.replace(
                /([。？！])\s*/g,
                "$1<br><br>"
            );

        jpnContainer.classList.remove('hidden');

    } else {

        jpnContainer.classList.add('hidden');
    }
    
    const audioBtn = document.getElementById('fsOriginalAudioBtn');
    const audioPlayer = document.getElementById('audioPlayer');

    if (
        currentCustomLesson.audioBlob ||
        (
            audioPlayer &&
            audioPlayer.src &&
            audioPlayer.src !== "" &&
            !audioPlayer.src.endsWith(
                window.location.host + "/"
            )
        )
    ) {

        audioBtn.classList.remove('hidden');
    }
    
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {

        overlay.classList.remove('opacity-0');
        overlay.classList.add('opacity-100');
    });
}

window.toggleFsMemoImage = function() {

    window.isFsImageShowing = !window.isFsImageShowing;
    
    const imgPane = document.getElementById('fsImagePane');
    const txtPane = document.getElementById('fsTextPane');
    const btn = document.getElementById('fsToggleImageBtn');
    
    if (!imgPane || !txtPane || !btn) return;

    if (window.isFsImageShowing) {

        imgPane.classList.remove('hidden');
        imgPane.classList.add('flex');

        txtPane.classList.remove('w-full');
        txtPane.classList.add('w-1/2');
        
        btn.innerHTML =
            '🖼️ <span class="hidden sm:inline">画像 OFF</span>';

        btn.classList.replace('bg-emerald-100', 'bg-stone-200');
        btn.classList.replace('text-emerald-700', 'text-stone-600');
        btn.classList.replace('border-emerald-200', 'border-stone-300');

    } else {

        imgPane.classList.add('hidden');
        imgPane.classList.remove('flex');

        txtPane.classList.remove('w-1/2');
        txtPane.classList.add('w-full');
        
        btn.innerHTML =
            '🖼️ <span class="hidden sm:inline">画像 ON</span>';

        btn.classList.replace('bg-stone-200', 'bg-emerald-100');
        btn.classList.replace('text-stone-600', 'text-emerald-700');
        btn.classList.replace('border-stone-300', 'border-emerald-200');
    }
};

function closeFullscreenPreview() {

    const overlay = document.getElementById('fullscreenPreviewOverlay');

    if (!overlay) return;
    
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }

    const audioPlayer = document.getElementById('audioPlayer');

    if (audioPlayer) {
        audioPlayer.pause();
    }

    isFsAudioPlaying = false;
    
    overlay.classList.remove('opacity-100');
    overlay.classList.add('opacity-0');

    setTimeout(() => {
        overlay.remove(); 
        document.body.style.overflow = '';
    }, 300);
}

function toggleFsAIVoice() {

    if (!currentCustomLesson) return;

    const btn = document.getElementById('fsAiVoiceBtn');
    
    const audioPlayer = document.getElementById('audioPlayer');

    if (audioPlayer) {
        audioPlayer.pause();

        isFsAudioPlaying = false;

        document.getElementById('fsOriginalAudioBtn').innerHTML =
            '▶️ <span class="hidden sm:inline">お手本再生</span>';
    }

    if (window.speechSynthesis.speaking) {

        window.speechSynthesis.cancel();

        btn.innerHTML =
            '🤖 <span class="hidden sm:inline">AI音声</span>';

        btn.classList.remove('bg-red-600', 'hover:bg-red-700');
        btn.classList.add('bg-purple-600', 'hover:bg-purple-700');

        return;
    }

    fsAiUtterance = new SpeechSynthesisUtterance(
        currentCustomLesson.eng
    );

    fsAiUtterance.lang =
        currentCustomLesson.lang || 'en-US';

    fsAiUtterance.rate = 0.9; 
    
    fsAiUtterance.onend = () => {

        btn.innerHTML =
            '🤖 <span class="hidden sm:inline">AI音声</span>';

        btn.classList.remove('bg-red-600', 'hover:bg-red-700');
        btn.classList.add('bg-purple-600', 'hover:bg-purple-700');
    };

    window.speechSynthesis.speak(fsAiUtterance);

    btn.innerHTML =
        '⏹ <span class="hidden sm:inline">AI停止</span>';

    btn.classList.remove('bg-purple-600', 'hover:bg-purple-700');
    btn.classList.add('bg-red-600', 'hover:bg-red-700');
}

function toggleFsOriginalAudio() {

    const audioPlayer = document.getElementById('audioPlayer');
    const btn = document.getElementById('fsOriginalAudioBtn');

    if (!audioPlayer) return;

    if (window.speechSynthesis.speaking) {

        window.speechSynthesis.cancel();

        const aiBtn = document.getElementById('fsAiVoiceBtn');

        aiBtn.innerHTML =
            '🤖 <span class="hidden sm:inline">AI音声</span>';

        aiBtn.classList.remove('bg-red-600', 'hover:bg-red-700');
        aiBtn.classList.add('bg-purple-600', 'hover:bg-purple-700');
    }

    if (isFsAudioPlaying) {

        audioPlayer.pause();

        btn.innerHTML =
            '▶️ <span class="hidden sm:inline">お手本再生</span>';

        btn.classList.remove('bg-red-600', 'hover:bg-red-700');
        btn.classList.add('bg-blue-600', 'hover:bg-blue-700');

        isFsAudioPlaying = false;

    } else {

        audioPlayer.play();

        btn.innerHTML =
            '⏹ <span class="hidden sm:inline">再生停止</span>';

        btn.classList.remove('bg-blue-600', 'hover:bg-blue-700');
        btn.classList.add('bg-red-600', 'hover:bg-red-700');

        isFsAudioPlaying = true;
        
        audioPlayer.onended = () => {

            btn.innerHTML =
                '▶️ <span class="hidden sm:inline">お手本再生</span>';

            btn.classList.remove('bg-red-600', 'hover:bg-red-700');
            btn.classList.add('bg-blue-600', 'hover:bg-blue-700');

            isFsAudioPlaying = false;
        };
    }
}


// ==========================================
// ★追加・改修: 未発話語彙リストと個別発音練習機能（爆速判定・サウンド・大文字維持 対応版）
// ==========================================

// 🌟 1. 心地よい正解サウンドを生成する関数
function playMwSuccessSound() {

    try {

        const AudioContext =
            window.AudioContext ||
            window.webkitAudioContext;

        if (!AudioContext) return;

        const ctx =
            new AudioContext();
        
        // ピロン♪ という明るい和音（A5, C#6, E6）を鳴らす
        [880, 1108.73, 1318.51].forEach((freq, i) => { 

            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'sine';
            osc.frequency.value = freq;

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(ctx.currentTime + i * 0.05);

            gain.gain.setValueAtTime(
                0.2,
                ctx.currentTime + i * 0.05
            );

            gain.gain.exponentialRampToValueAtTime(
                0.001,
                ctx.currentTime + i * 0.05 + 0.5
            );

            osc.stop(
                ctx.currentTime + i * 0.05 + 0.5
            );
        });

    } catch (e) {

        console.log("Audio not supported");
    }
}

let currentMissingWords = [];
let currentMissingWordIndex = 0;
let mwRecognition = null;
let isMissingWordRecording = false;


// ==========================================
// 未発話リスト専用SpeechRecognition
// ==========================================
if (
    typeof window.SpeechRecognition === 'function' ||
    typeof window.webkitSpeechRecognition === 'function'
) {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

    mwRecognition =
        new SpeechRecognition();

    mwRecognition.continuous = false;
    
    // 【レスポンス高速化】途中経過をリアルタイムで取得する
    mwRecognition.interimResults = true; 

    mwRecognition.onresult = (event) => {

        const targetWord =
            currentMissingWords[
                currentMissingWordIndex
            ].toLowerCase();

        const feedbackEl =
            document.getElementById('mwFeedback');

        const wordDisplayEl =
            document.getElementById('mwTargetWord');

        // 🌟 同音異義語（文脈なしの単語発音時にAIが誤変換しやすい語）の救済リスト
        const homophones = {

            "to": ["two", "too", "to"],
            "two": ["to", "too", "two"],
            "too": ["to", "two", "too"],

            "for": ["four", "for"],
            "four": ["for", "four"],

            "there": ["their", "they're", "there"],
            "their": ["there", "they're", "their"],
            "they're": ["there", "their", "they're"],

            "i": ["eye", "i"],
            "eye": ["i", "eye"],

            "be": ["bee", "be"],
            "bee": ["be", "bee"],

            "know": ["no", "know"],
            "no": ["know", "no"],

            "here": ["hear", "here"],
            "hear": ["here", "hear"],

            "right": ["write", "right"],
            "write": ["right", "write"],

            "sea": ["see", "sea"],
            "see": ["sea", "see"],

            "sun": ["son", "sun"],
            "son": ["sun", "son"],

            "one": ["won", "one"],
            "won": ["one", "won"],

            "a": ["uh", "ah", "a"]
        };

        // ターゲット単語が救済リストにあればその配列を、
        // なければターゲット単語のみを許可リストとする
        const acceptableWords =
            homophones[targetWord] ||
            [targetWord];

        // 話している途中のテキストも含めてリアルタイムで判定ループ
        for (
            let i = event.resultIndex;
            i < event.results.length;
            i++
        ) {

            const rawTranscript =
                event.results[i][0]
                    .transcript
                    .toLowerCase();
            
            // 🌟 修正ポイント:
            // \s を追加してスペースを消さずに残し、
            // 単語ごとに配列に分割する
            const spokenWords =
                rawTranscript
                    .replace(
                        /[^a-z0-9\u00C0-\u017F\u0900-\u097F\s']/gi,
                        ''
                    )
                    .split(/\s+/)
                    .filter(w => w);

            // 「部分一致」ではなく独立単語として完全一致
            const isMatch =
                spokenWords.some(
                    w =>
                        acceptableWords.includes(w)
                );

            if (isMatch) {

                mwRecognition.stop(); 

                playMwSuccessSound();
                
                feedbackEl.innerHTML =
                    `<span class="text-emerald-600 text-2xl font-black inline-block">✨ CLEAR!</span> <span class="text-xs text-stone-400 block mt-1">(Recognized: ${rawTranscript})</span>`;
                
                if (wordDisplayEl) {

                    wordDisplayEl.classList.add(
                        'text-emerald-600'
                    );

                    wordDisplayEl.style.transform =
                        "scale(1.2)";

                    setTimeout(() => {
                        wordDisplayEl.style.transform =
                            "scale(1)";
                    }, 300);
                }

                isMissingWordRecording = false;

                updateMwMicBtnUI();

                return;

            } else if (event.results[i].isFinal) {

                feedbackEl.innerHTML =
                    `<span class="text-orange-500 text-lg">❌ Close...</span> <span class="text-xs text-stone-400 block mt-1">(Recognized: ${rawTranscript})</span>`;

                isMissingWordRecording = false;

                updateMwMicBtnUI();
            }
        }
    };

    mwRecognition.onerror = (event) => {

        const feedbackEl =
            document.getElementById('mwFeedback');

        if (feedbackEl) {
            feedbackEl.innerHTML =
                `<span class="text-red-500">エラーが発生しました</span>`;
        }

        isMissingWordRecording = false;

        updateMwMicBtnUI();
    };

    mwRecognition.onend = () => {

        isMissingWordRecording = false;

        updateMwMicBtnUI();
    };
}

function openMissingWordsModal() {

    const oldModal =
        document.getElementById(
            'missingWordsModal'
        );

    if (oldModal) {
        oldModal.remove();
    }

    if (
        !currentCustomLesson ||
        !currentCustomLesson.eng
    ) {
        return;
    }

    // 🌟 【大文字・小文字の維持】
    const originalWords =
        currentCustomLesson.eng
            .replace(
                /[^a-zA-Z0-9\u00C0-\u017F\u0900-\u097F\s']/g,
                ''
            )
            .split(/\s+/)
            .filter(w => w);

    // 認識された音声テキストを抽出
    const recDisplay =
        document.getElementById(
            'recognizedTextDisplay'
        );

    const spokenText =
        (
            recDisplay &&
            !recDisplay.innerText.includes('※')
        )
            ? recDisplay.innerText
                .toLowerCase()
                .replace(
                    /[^a-z0-9\u00C0-\u017F\u0900-\u097F\s']/gi,
                    ''
                )
            : '';

    const spokenWords =
        spokenText
            .split(/\s+/)
            .filter(w => w);

    // 小文字同士で比較しつつ、表示用には元の単語を残す
    const missingWords =
        originalWords.filter(
            word =>
                !spokenWords.includes(
                    word.toLowerCase()
                )
        );
    
    // 大文字小文字の違いによる重複を防ぐ
    const uniqueMap =
        new Map();

    missingWords.forEach(w => {

        if (!uniqueMap.has(w.toLowerCase())) {
            uniqueMap.set(
                w.toLowerCase(),
                w
            );
        }
    });

    currentMissingWords =
        Array.from(
            uniqueMap.values()
        );

    const modal =
        document.createElement(
            'div'
        );

    modal.id =
        'missingWordsModal';

    modal.className =
        'fixed inset-0 z-[10000] bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in';

    document.body.appendChild(
        modal
    );

    renderMissingWordsListView();
}


// ==========================================
// リスト表示モード
// ==========================================
function renderMissingWordsListView() {

    const modal =
        document.getElementById(
            'missingWordsModal'
        );

    if (!modal) return;

    let listHtml = '';

    if (
        currentMissingWords.length === 0
    ) {

        listHtml =
            `<p class="text-sm text-emerald-600 font-bold py-8 text-center">🎉 素晴らしい！すべての単語が完璧に認識されています。</p>`;

    } else {

        listHtml =
            `<div class="flex flex-wrap gap-2 max-h-[35vh] overflow-y-auto p-1 border border-stone-100 bg-stone-50 rounded-sm p-3 text-left">`;

        currentMissingWords.forEach(
            (word, index) => {

                listHtml +=
                    `<span onclick="startMissingWordPractice(${index})" class="px-2.5 py-1.5 bg-white border border-stone-300 rounded-sm text-xs font-bold text-stone-700 shadow-sm cursor-pointer hover:bg-emerald-50 hover:border-emerald-400 hover:text-emerald-800 transition-colors active:scale-95 flex items-center gap-1" title="タップして練習する">🎯 ${word}</span>`;
            }
        );

        listHtml +=
            `</div>`;
    }

    modal.innerHTML = `
        <div class="bg-white rounded-sm max-w-md w-full p-6 flex flex-col shadow-xl border border-stone-300 transform scale-100 transition-transform">

            <div class="flex justify-between items-center mb-3 border-b border-stone-200 pb-2 text-left">

                <h3 class="font-black text-base md:text-lg text-orange-800 flex items-center gap-1.5">
                    ⚠️ 未発話・認識されなかった語彙
                </h3>

                <button onclick="closeMissingWordsModal()" class="text-stone-400 hover:text-stone-600 text-lg font-bold">
                    ✕
                </button>

            </div>

            <p class="text-[11px] text-stone-500 mb-4 text-left leading-relaxed">
                スクリプト内には存在しますが、今回の音声認識で聞き取れなかった単語です（計 ${currentMissingWords.length} 語）。<br>
                <strong class="text-emerald-700 bg-emerald-50 px-1 mt-1 inline-block">
                    💡 単語をタップすると個別発音練習ができます。
                </strong>
            </p>
            
            ${listHtml}
            
            <button onclick="closeMissingWordsModal()" class="mt-5 w-full py-2.5 bg-stone-800 hover:bg-stone-900 text-white font-bold rounded-sm text-xs transition shadow-sm">
                閉じる
            </button>

        </div>
    `;
}


// ==========================================
// ドリル練習モード開始
// ==========================================
function startMissingWordPractice(index) {

    currentMissingWordIndex =
        index;

    renderMissingWordPracticeView();
}


// ==========================================
// ドリル練習モードUI
// ==========================================
function renderMissingWordPracticeView() {

    const modal =
        document.getElementById(
            'missingWordsModal'
        );

    if (!modal) return;

    const word =
        currentMissingWords[
            currentMissingWordIndex
        ];

    const escapedWord =
        word.replace(
            /'/g,
            "\\'"
        );

    const isFirst =
        currentMissingWordIndex === 0;

    const isLast =
        currentMissingWordIndex ===
        currentMissingWords.length - 1;

    modal.innerHTML = `
        <div class="bg-white rounded-sm max-w-md w-full p-6 flex flex-col shadow-xl border border-stone-300">

            <div class="flex justify-between items-center mb-4 border-b border-stone-200 pb-2">

                <button onclick="renderMissingWordsListView()" class="text-stone-500 hover:text-stone-800 font-bold text-xs flex items-center gap-1">
                    ◀ リストへ戻る
                </button>

                <span class="text-xs font-bold text-stone-400 tracking-widest">
                    ${currentMissingWordIndex + 1} / ${currentMissingWords.length}
                </span>

                <button onclick="closeMissingWordsModal()" class="text-stone-400 hover:text-stone-600 text-lg font-bold">
                    ✕
                </button>

            </div>

            <div class="text-center py-6">

                <p class="text-[10px] text-stone-400 font-bold tracking-widest uppercase mb-1">
                    Target Word
                </p>

                <h3 class="text-4xl md:text-5xl font-black text-stone-800 mb-6 serif-font tracking-tight transition-all duration-300" id="mwTargetWord">
                    ${word}
                </h3>

                <div class="flex justify-center gap-3 md:gap-4 mb-4">

                    <button onclick="speakWord('${escapedWord}')" class="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold rounded-full transition text-sm flex items-center gap-1.5 border border-stone-300 shadow-sm">
                        🔊 お手本
                    </button>

                    <button onclick="toggleMissingWordMic()" id="mwMicBtn" class="px-6 py-2.5 bg-stone-800 hover:bg-stone-700 text-white font-bold rounded-full transition text-sm flex items-center gap-1.5 shadow-md">
                        🎤 発音する
                    </button>

                </div>

                <div id="mwFeedback" class="h-12 flex flex-col items-center justify-center text-sm font-bold text-stone-500">
                    マイクボタンを押して発音してください
                </div>

            </div>

            <div class="flex justify-between mt-2 pt-4 border-t border-stone-100">

                <button onclick="navMissingWord(-1)" class="px-5 py-2.5 bg-stone-100 text-stone-600 font-bold rounded-sm text-xs transition ${isFirst ? 'opacity-30 cursor-not-allowed' : 'hover:bg-stone-200'}" ${isFirst ? 'disabled' : ''}>
                    ◀ 前の単語
                </button>

                <button onclick="navMissingWord(1)" class="px-5 py-2.5 bg-emerald-600 text-white font-bold rounded-sm text-xs transition shadow-sm ${isLast ? 'opacity-30 cursor-not-allowed' : 'hover:bg-emerald-700'}" ${isLast ? 'disabled' : ''}>
                    次の単語 ▶
                </button>

            </div>

        </div>
    `;
}

function navMissingWord(dir) {

    if (isMissingWordRecording) {
        toggleMissingWordMic();
    }

    currentMissingWordIndex +=
        dir;

    if (currentMissingWordIndex < 0) {
        currentMissingWordIndex = 0;
    }

    if (
        currentMissingWordIndex >=
        currentMissingWords.length
    ) {
        currentMissingWordIndex =
            currentMissingWords.length - 1;
    }

    renderMissingWordPracticeView();
}

function toggleMissingWordMic() {

    if (!mwRecognition) {

        alert(
            "このブラウザは音声認識に対応していません。"
        );

        return;
    }

    if (isMissingWordRecording) {

        mwRecognition.stop();

    } else {

        const feedbackEl =
            document.getElementById(
                'mwFeedback'
            );

        const wordDisplayEl =
            document.getElementById(
                'mwTargetWord'
            );

        // 再録音時に文字の色とアニメーションを元に戻す
        if (wordDisplayEl) {
            wordDisplayEl.classList.remove(
                'text-emerald-600'
            );

            wordDisplayEl.style.transform =
                "scale(1)";
        }
        
        if (feedbackEl) {
            feedbackEl.innerHTML =
                `<span class="text-blue-500 animate-pulse text-lg">Listening...</span>`;
        }
        
        if (
            currentCustomLesson &&
            currentCustomLesson.lang
        ) {

            mwRecognition.lang =
                currentCustomLesson.lang;

        } else {

            mwRecognition.lang =
                'en-US';
        }
        
        try {

            mwRecognition.start();

            isMissingWordRecording =
                true;

        } catch (e) {

            isMissingWordRecording =
                false;
        }
    }

    updateMwMicBtnUI();
}

function updateMwMicBtnUI() {

    const btn =
        document.getElementById(
            'mwMicBtn'
        );

    if (!btn) return;

    if (isMissingWordRecording) {

        btn.innerHTML =
            `⏹ 停止する`;

        btn.classList.replace(
            'bg-stone-800',
            'bg-red-600'
        );

        btn.classList.replace(
            'hover:bg-stone-700',
            'hover:bg-red-700'
        );

    } else {

        btn.innerHTML =
            `🎤 発音する`;

        btn.classList.replace(
            'bg-red-600',
            'bg-stone-800'
        );

        btn.classList.replace(
            'hover:bg-red-700',
            'hover:bg-stone-700'
        );
    }
}

function closeMissingWordsModal() {

    if (isMissingWordRecording) {

        try {
            mwRecognition.stop();
        } catch (e) {}

        isMissingWordRecording =
            false;
    }

    const modal =
        document.getElementById(
            'missingWordsModal'
        );

    if (modal) {
        modal.remove();
    }
}

function speakWord(word) {

    if ('speechSynthesis' in window) {

        window.speechSynthesis.cancel();

        const utterance =
            new SpeechSynthesisUtterance(
                word
            );

        utterance.lang =
            (
                currentCustomLesson &&
                currentCustomLesson.lang
            )
                ? currentCustomLesson.lang
                : 'en-US';

        utterance.rate =
            0.9;

        window.speechSynthesis.speak(
            utterance
        );
    }
}


// ==========================================
// ★追加: 録音を途中でキャンセルして結果を残さずに戻る機能
// ==========================================
window.historyLengthBeforeCancel = 0; 

function cancelRecording() {

    window.isCopeakCanceling =
        true;

    window.historyLengthBeforeCancel =
        (
            currentCustomLesson &&
            currentCustomLesson.history
        )
            ? currentCustomLesson.history.length
            : 0;

    if (typeof toggleRecording === 'function') {
        toggleRecording(); 
    }

    if (typeof resetLearningState === 'function') {
        resetLearningState();
    }
}


// ==========================================
// ★追加: Sound Questからの引き継ぎデータ（Transfer）を受け取る
// ==========================================
window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {

        const sqDataStr =
            sessionStorage.getItem(
                'copeak_sq_transfer'
            );

        if (sqDataStr) {

            sessionStorage.removeItem(
                'copeak_sq_transfer'
            );
            
            try {

                const sqData =
                    JSON.parse(
                        sqDataStr
                    );

                const pseudoLesson = {
                    id: "sq_" + Date.now(),
                    title: sqData.title,
                    eng: sqData.eng,
                    jpn: sqData.jpn,
                    lang: "en-US",
                    target: "custom"
                };
                
                currentCustomLesson =
                    pseudoLesson;

                if (
                    typeof openLearningScreen ===
                    'function'
                ) {

                    openLearningScreen(
                        pseudoLesson
                    );

                    if (
                        typeof showMsg ===
                        'function'
                    ) {

                        showMsg(
                            "🎯 Sound Questの発音課題を引き継ぎました！"
                        );
                    }
                }

            } catch (e) {

                console.error(
                    "Sound Quest 連携エラー:",
                    e
                );
            }
        }

    }, 800); 
});