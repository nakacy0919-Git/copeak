// ==========================================
// Japeak アプリケーションロジック (完全統合版)
// ==========================================
let allJapeakData = [];
// すべてのカテゴリデータを結合する
if (typeof japeakData !== 'undefined') allJapeakData = allJapeakData.concat(japeakData);
if (typeof japeakConversationData !== 'undefined') allJapeakData = allJapeakData.concat(japeakConversationData);
if (typeof japeakClassData !== 'undefined') allJapeakData = allJapeakData.concat(japeakClassData);
if (typeof japeakParagraphsData !== 'undefined') allJapeakData = allJapeakData.concat(japeakParagraphsData);
if (typeof japeakHealthData !== 'undefined') allJapeakData = allJapeakData.concat(japeakHealthData);
if (typeof japeakLunchData !== 'undefined') allJapeakData = allJapeakData.concat(japeakLunchData);
if (typeof japeakEventsData !== 'undefined') allJapeakData = allJapeakData.concat(japeakEventsData);
if (typeof japeakCommutingData !== 'undefined') allJapeakData = allJapeakData.concat(japeakCommutingData);
if (typeof japeakClubsData !== 'undefined') allJapeakData = allJapeakData.concat(japeakClubsData);
if (typeof japeakOfficeData !== 'undefined') allJapeakData = allJapeakData.concat(japeakOfficeData);
if (typeof japeakTeachersData !== 'undefined') allJapeakData = allJapeakData.concat(japeakTeachersData);
if (typeof japeakTroublesData !== 'undefined') allJapeakData = allJapeakData.concat(japeakTroublesData);
if (typeof japeakBreakData !== 'undefined') allJapeakData = allJapeakData.concat(japeakBreakData);

let currentIndex = 0; 
let currentLesson = null;
let currentLang = 'en'; 
let recognition;
let isRecording = false;
let hasCelebrated = false; 

let isSwapped = false;

const langCodeMap = {
    'en': 'en-US', 'pt': 'pt-BR', 'zh-CN': 'zh-CN', 'tl': 'fil-PH', 
    'vi': 'vi-VN', 'es': 'es-ES', 'ne': 'ne-NP', 'id': 'id-ID'
};

const urlParams = new URLSearchParams(window.location.search);
const targetId = urlParams.get('id');
const urlLang = urlParams.get('lang');

if (urlLang) currentLang = urlLang;

if (targetId) {
    const foundIndex = allJapeakData.findIndex(item => item.id === targetId);
    if (foundIndex !== -1) currentIndex = foundIndex;
}
if (allJapeakData.length > 0) currentLesson = allJapeakData[currentIndex];

const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

function playSuccessSound() {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    osc.type = 'sine'; 
    osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); 
    osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1); 
    osc.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.2); 
    osc.frequency.setValueAtTime(1046.50, audioCtx.currentTime + 0.3); 
    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.5);
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 1.5);
}

function fireConfetti() {
    if (typeof confetti !== 'undefined') {
        confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 }, colors: ['#eab308', '#b91c1c', '#1e3a5f', '#166534', '#ffffff'] });
    }
}

// 🌟 音声読み上げ（MP3とAIのハイブリッド機能）
function playExampleAudio() {
    if (!currentLesson) return;
    
    // ① 反転モード（外国語学習）の時は、その言語のネイティブAI音声を再生する
    if (isSwapped) {
        window.speechSynthesis.cancel(); 
        const textToSpeak = currentLesson.translations[currentLang] || currentLesson.translations['en'];
        const targetLangCode = langCodeMap[currentLang] || 'en-US';
        
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.lang = targetLangCode; 
        utterance.rate = 0.95;    
        utterance.pitch = 1.0;
        
        const voices = window.speechSynthesis.getVoices();
        let bestVoice = null;
        const langPrefix = targetLangCode.split('-')[0];
        
        bestVoice = voices.find(v => v.lang === targetLangCode && (v.name.includes('Google') || v.name.includes('Premium')));
        if (!bestVoice) bestVoice = voices.find(v => v.lang.startsWith(langPrefix) && (v.name.includes('Google') || v.name.includes('Premium')));
        if (!bestVoice) bestVoice = voices.find(v => v.lang === targetLangCode);
        if (!bestVoice) bestVoice = voices.find(v => v.lang.startsWith(langPrefix));

        if (bestVoice) {
            utterance.voice = bestVoice;
            window.speechSynthesis.speak(utterance);
        } else {
            alert(`【音声データが見つかりません】\nお使いの端末（ブラウザ）には ${targetLangCode} の音声データが入っていません。\n\n💡 Google Chromeブラウザを使用してください。`);
        }
        return;
    }

    // ② 通常モード（日本語学習）の時は、用意したMP3ファイルを再生する
    const audioPath = currentLesson.audio || `audio/${currentLesson.id}.mp3`;
    const audioObj = new Audio(audioPath);
    
    // 🌟 MP3ファイルが見つからなかった場合の安全装置（AI音声で代用）
    audioObj.onerror = () => {
        console.warn("MP3ファイルが見つかりません。代わりにAI音声を再生します:", audioPath);
        window.speechSynthesis.cancel();
        
        const textToSpeak = currentLesson.target_speech || currentLesson.japanese;
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.lang = 'ja-JP'; 
        utterance.rate = 0.85; 
        
        const voices = window.speechSynthesis.getVoices();
        let bestVoice = voices.find(v => v.name === 'Google 日本語' || v.name === 'Google Japanese');
        if (!bestVoice) bestVoice = voices.find(v => v.lang === 'ja-JP' && (v.name.includes('Kyoko') || v.name.includes('Otoya') || v.name.includes('Hattori')));
        if (!bestVoice) bestVoice = voices.find(v => v.lang === 'ja-JP' && (v.name.includes('Nanami') || v.name.includes('Keita')));
        
        if (bestVoice) utterance.voice = bestVoice;
        window.speechSynthesis.speak(utterance);
    };

    // MP3が存在すれば再生！
    audioObj.play();
}

if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}

document.addEventListener('DOMContentLoaded', () => {
    if (!currentLesson) {
        alert("エラー：教材データが見つかりません。");
        return;
    }

    renderLesson();
    setupSpeechRecognition();

    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
        langSelect.value = currentLang;
        langSelect.addEventListener('change', (e) => {
            currentLang = e.target.value;
            renderLesson();
            if(recognition && !isRecording) setupSpeechRecognition(); 
        });
    }

    const btnPlayAudio = document.getElementById('btn-play-audio');
    if (btnPlayAudio) btnPlayAudio.onclick = playExampleAudio;

    document.getElementById('btn-prev').onclick = () => {
        if (currentIndex > 0) {
            currentIndex--;
            currentLesson = allJapeakData[currentIndex];
            renderLesson();
            history.replaceState(null, '', `?id=${currentLesson.id}&lang=${currentLang}`); 
        }
    };
    document.getElementById('btn-next').onclick = () => {
        if (currentIndex < allJapeakData.length - 1) {
            currentIndex++;
            currentLesson = allJapeakData[currentIndex];
            renderLesson();
            history.replaceState(null, '', `?id=${currentLesson.id}&lang=${currentLang}`); 
        }
    };
});

window.toggleLanguageSwap = function() {
    isSwapped = !isSwapped;
    
    const swapBtn = document.getElementById('btn-swap-lang');
    if (isSwapped) {
        swapBtn.classList.replace('bg-[#eab308]', 'bg-[#1e3a5f]');
        swapBtn.classList.replace('hover:bg-[#ca8a04]', 'hover:bg-[#172a45]');
    } else {
        swapBtn.classList.replace('bg-[#1e3a5f]', 'bg-[#eab308]');
        swapBtn.classList.replace('hover:bg-[#172a45]', 'hover:bg-[#ca8a04]');
    }

    renderLesson();
    if(recognition && !isRecording) setupSpeechRecognition(); 
};

function renderLesson() {
    document.getElementById('lesson-title').innerHTML = `<span>🗣️</span> ${currentLesson.title}`;
    document.getElementById('context-text').innerText = currentLesson.context[currentLang] || currentLesson.context['en'];
    
    const pureText = currentLesson.japanese.replace(/<[^>]*>?/gm, ''); 
    const textLength = pureText.length;
    const isLongText = textLength >= 20;

    const layoutContainer = document.getElementById('layout-container');
    const mainPane = document.getElementById('main-pane');
    const sidePane = document.getElementById('side-pane');
    const sentenceContainer = document.getElementById('sentence-container');

    if (layoutContainer && mainPane && sidePane && sentenceContainer) {
        if (isLongText) {
            layoutContainer.className = "max-w-[1400px] w-[95%] mx-auto mt-6 flex flex-col gap-6 transition-all duration-500";
            mainPane.className = "w-full flex flex-col bg-[#fdfcf8] rounded-sm wa-border overflow-hidden transition-all duration-500";
            sidePane.className = "w-full grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500";
        } else {
            layoutContainer.className = "max-w-[1400px] w-[95%] mx-auto mt-6 flex flex-col lg:flex-row gap-6 transition-all duration-500";
            mainPane.className = "w-full lg:w-[65%] flex flex-col bg-[#fdfcf8] rounded-sm wa-border overflow-hidden transition-all duration-500";
            sidePane.className = "w-full lg:w-[35%] flex flex-col gap-6 transition-all duration-500";
        }

        const transContainer = document.getElementById('translation-text');
        transContainer.innerHTML = '';
        sentenceContainer.innerHTML = ''; 

        const jpLines = currentLesson.ruby.hiragana.split('<br>');
        const roLines = currentLesson.ruby.romaji.split('<br>');
        
        const rawTrans = currentLesson.translations[currentLang] || currentLesson.translations['en'];
        const transSentences = rawTrans.match(/.*?[.?!。？！]+(?:\s+|$)|.+$/g) || [rawTrans];

        if (!isSwapped) {
            transSentences.forEach((sentence, idx) => {
                const span = document.createElement('span');
                span.id = `trans-span-${idx}`;
                span.className = "transition-all duration-300 px-1 rounded-sm";
                span.innerText = sentence;
                transContainer.appendChild(span);
            });

            jpLines.forEach((jpLine, index) => {
                const roLine = roLines[index] || ''; 
                const block = document.createElement('div');
                block.id = `reading-block-${index}`;
                block.className = "flex flex-col gap-1 md:gap-2 items-start w-full cursor-pointer hover:bg-stone-100 p-3 md:p-4 rounded-md transition-all duration-300 border-2 border-transparent relative group"; 
                
                const jpSizeClass = isLongText ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl";
                const roSizeClass = isLongText ? "text-lg md:text-xl" : "text-xl md:text-2xl";

                block.innerHTML = `
                    <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded-full border border-emerald-200 flex items-center gap-1"><span>👆</span> 意味を確認</div>
                    <div class="${jpSizeClass} leading-[1.8] text-stone-800 font-bold mincho-font">${jpLine.trim()}</div>
                    <div class="${roSizeClass} text-stone-500 font-medium mincho-font">${roLine.trim()}</div>
                `;

                block.onclick = () => {
                    jpLines.forEach((_, i) => {
                        const b = document.getElementById(`reading-block-${i}`);
                        if (b) b.classList.remove('bg-emerald-50', 'border-emerald-200');
                        const s = document.getElementById(`trans-span-${i}`);
                        if (s) s.classList.remove('bg-[#eab308]', 'text-white', 'shadow-sm', 'font-bold');
                    });
                    block.classList.add('bg-emerald-50', 'border-emerald-200');
                    const targetSpan = document.getElementById(`trans-span-${index}`);
                    if (targetSpan) targetSpan.classList.add('bg-[#eab308]', 'text-white', 'shadow-sm', 'font-bold');
                };
                sentenceContainer.appendChild(block);
            });

        } else {
            const rawJpText = currentLesson.japanese;
            const jpSentences = rawJpText.match(/.*?[。？！]+(?:\s+|$)|.+$/g) || [rawJpText];

            jpSentences.forEach((sentence, idx) => {
                const span = document.createElement('span');
                span.id = `trans-span-${idx}`;
                span.className = "transition-all duration-300 px-1 rounded-sm";
                span.innerText = sentence;
                transContainer.appendChild(span);
            });

            transSentences.forEach((sentence, index) => {
                const block = document.createElement('div');
                block.id = `reading-block-${index}`;
                block.className = "flex flex-col gap-1 md:gap-2 items-start w-full cursor-pointer hover:bg-stone-100 p-3 md:p-4 rounded-md transition-all duration-300 border-2 border-transparent relative group"; 
                
                const flSizeClass = isLongText ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl";

                block.innerHTML = `
                    <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded-full border border-emerald-200 flex items-center gap-1"><span>👆</span> 意味を確認</div>
                    <div class="${flSizeClass} leading-relaxed text-stone-800 font-bold sans-serif">${sentence.trim()}</div>
                `;

                block.onclick = () => {
                    transSentences.forEach((_, i) => {
                        const b = document.getElementById(`reading-block-${i}`);
                        if (b) b.classList.remove('bg-emerald-50', 'border-emerald-200');
                        const s = document.getElementById(`trans-span-${i}`);
                        if (s) s.classList.remove('bg-[#eab308]', 'text-white', 'shadow-sm', 'font-bold');
                    });
                    block.classList.add('bg-emerald-50', 'border-emerald-200');
                    const targetSpan = document.getElementById(`trans-span-${index}`);
                    if (targetSpan) targetSpan.classList.add('bg-[#eab308]', 'text-white', 'shadow-sm', 'font-bold');
                };
                sentenceContainer.appendChild(block);
            });
        }
    }

    document.getElementById('voice-output').innerHTML = '※「話す」ボタンを押してください';
    const accOutput = document.getElementById('acc-output');
    accOutput.innerText = '0%';
    accOutput.className = "text-4xl font-black text-[#1e3a5f] mincho-font mt-1";
}

function setupSpeechRecognition() {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!window.SpeechRecognition) return;

    recognition = new SpeechRecognition();
    recognition.lang = !isSwapped ? 'ja-JP' : (langCodeMap[currentLang] || 'en-US'); 
    recognition.interimResults = true;
    recognition.continuous = true;

    const voiceOutput = document.getElementById('voice-output');
    const accOutput = document.getElementById('acc-output');
    const micBtn = document.getElementById('mic-btn');

    recognition.onstart = () => {
        isRecording = true;
        hasCelebrated = false; 
        micBtn.innerHTML = "<span>⏹</span> 停止 (Stop)";
        micBtn.className = "flex-1 w-full flex items-center justify-center gap-3 py-4 bg-stone-700 hover:bg-stone-800 text-white rounded-sm font-black text-xl shadow-inner tracking-widest";
        voiceOutput.innerHTML = '<span class="text-stone-400 text-base">聞いています...</span>';
        accOutput.innerText = "0%";
    };

    recognition.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) finalTranscript += event.results[i][0].transcript;
            else interimTranscript += event.results[i][0].transcript;
        }

        const currentText = finalTranscript || interimTranscript;
        voiceOutput.innerHTML = currentText; 

        if (currentText.length > 0) {
            let accuracy = 0;

            if (!isSwapped) {
                // 🌟 【修正ポイント】target_speechがない場合でも強制的にひらがなを作る
                const rawTarget = currentLesson.target_speech || currentLesson.japanese;
                
                const normSpoken = normalizeJapaneseText(currentText, currentLesson.ruby.hiragana);
                const normTarget = normalizeJapaneseText(rawTarget, currentLesson.ruby.hiragana);
                
                const score1 = calculateJapaneseAccuracy(currentText, currentLesson.japanese);
                const score2 = calculateJapaneseAccuracy(normSpoken, normTarget);
                
                accuracy = Math.max(score1, score2); 
            } else {
                const punctuationRegex = /[\s.,?!¿¡。、！？「」'"]/g;
                const targetText = currentLesson.translations[currentLang] || currentLesson.translations['en'];
                const cleanSpoken = currentText.toLowerCase().replace(punctuationRegex, "");
                const cleanTarget = targetText.toLowerCase().replace(punctuationRegex, "");
                accuracy = calculateJapaneseAccuracy(cleanSpoken, cleanTarget);
            }

            accOutput.innerText = `${accuracy}%`;
            
            if(accuracy >= 80) {
                accOutput.className = "text-4xl font-black text-green-600 mincho-font mt-1";
                if (!hasCelebrated) {
                    hasCelebrated = true;
                    playSuccessSound();
                    fireConfetti();
                    
                    // 🌟 【追加】紙吹雪が出たら自動で録音を停止し、ボタンをリセットする！
                    recognition.stop();
                }
            }
            else if (accuracy >= 50) accOutput.className = "text-4xl font-black text-yellow-600 mincho-font mt-1";
            else accOutput.className = "text-4xl font-black text-[#1e3a5f] mincho-font mt-1";
        }
    };

    recognition.onerror = () => { isRecording = false; resetMicButton(micBtn); };
    recognition.onend = () => { isRecording = false; resetMicButton(micBtn); };
    micBtn.onclick = () => { isRecording ? recognition.stop() : recognition.start(); };
}

// 🌟 【修正ポイント】正しく強化された最新のフィルターだけを残しました
function normalizeJapaneseText(text, rubyHtml) {
    if (!text) return "";
    let normalized = text;
    
    // 英字の全角化
    normalized = normalized.replace(/[A-Za-z]/g, function(s) { return String.fromCharCode(s.charCodeAt(0) + 0xFEE0); });
    
    // カタカナをひらがなに変換
    normalized = normalized.replace(/[\u30a1-\u30f6]/g, function(match) { return String.fromCharCode(match.charCodeAt(0) - 0x60); });
    
    // 数字のひらがな変換
    normalized = normalized.replace(/[0-9０-９]+/g, function(match) {
        const numStr = match.replace(/[０-９]/g, s => String.fromCharCode(s.charCodeAt(0) - 0xFEE0));
        const num = parseInt(numStr, 10);
        const numMap = {'0':'ぜろ', '1':'いち', '2':'に', '3':'さん', '4':'よん', '5':'ご', '6':'ろく', '7':'なな', '8':'はち', '9':'きゅう'};
        if (num >= 10 && num <= 99) {
            const tens = Math.floor(num / 10);
            const ones = num % 10;
            let res = '';
            if(tens === 1) res += 'じゅう';
            else if(tens > 1) res += numMap[tens] + 'じゅう';
            if(ones > 0) res += numMap[ones];
            return res;
        }
        if (num >= 0 && num <= 9) return numMap[num];
        return match; 
    });

    // ルビデータの抽出精度を向上
    if (rubyHtml) {
        const regex = /<ruby>\s*([^<]+?)\s*<rt>\s*([^<]+?)\s*<\/rt>\s*<\/ruby>/g;
        let match;
        while ((match = regex.exec(rubyHtml)) !== null) {
            const kanji = match[1].trim();
            const kana = match[2].trim();
            normalized = normalized.split(kanji).join(kana);
        }
    }

    // AIが勝手に変換しがちな漢字リスト
    const commonReplacements = {
        "私":"わたし", "僕":"ぼく", "俺":"おれ", "何":"なに",
        "行く":"いく", "来る":"くる", "食べる":"たべる", "飲む":"のむ",
        "言う":"いう", "話す":"はなす", "見る":"みる", "聞く":"きく",
        "有難う":"ありがとう", "御座います":"ございます", "下さい":"ください", 
        "済みません":"すみません", "御免なさい":"ごめんなさい", "良い":"いい", 
        "無い":"ない", "時":"とき", "事":"こと", "物":"もの", "人":"ひと", "所":"ところ",
        "今日":"きょう", "明日":"あした", "昨日":"きのう", "一緒":"いっしょ",
        "太郎":"たろう", "度":"ど", "熱":"ねつ", "分":"ふん", "半":"はん", "頁":"ぺーじ", "歳":"さい",
        "分かる":"わかる", "解る":"わかる", "判る":"わかる", "居る":"いる"
    };
    for (let [k, v] of Object.entries(commonReplacements)) { 
        normalized = normalized.split(k).join(v); 
    }
    
    return normalized.replace(/[\s 、。！？!?]/g, "");
}

function resetMicButton(btn) {
    btn.innerHTML = "<span>🎙</span> 話す (Start Speaking)";
    btn.className = "flex-1 w-full flex items-center justify-center gap-3 py-4 bg-[#b91c1c] hover:bg-[#991b1b] text-white rounded-sm font-black text-xl shadow-md border-b-4 border-[#7f1d1d] active:border-b-0 active:translate-y-1 transition-all tracking-widest";
}

function calculateJapaneseAccuracy(cleanSpoken, cleanTarget) {
    if (cleanSpoken.length === 0) return 0;
    const distance = levenshteinDistance(cleanSpoken, cleanTarget);
    const maxLength = Math.max(cleanSpoken.length, cleanTarget.length);
    let accuracy = ((maxLength - distance) / maxLength) * 100;
    return Math.max(0, Math.round(accuracy));
}

function levenshteinDistance(a, b) {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) matrix[i][j] = matrix[i - 1][j - 1];
            else matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
        }
    }
    return matrix[b.length][a.length];
}