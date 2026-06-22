// ==========================================
// Japeak アプリケーションロジック (URL連携 & AI音声対応)
// ==========================================
let allJapeakData = [];
if (typeof japeakData !== 'undefined') allJapeakData = allJapeakData.concat(japeakData);
if (typeof japeakConversationData !== 'undefined') allJapeakData = allJapeakData.concat(japeakConversationData);
if (typeof japeakClassData !== 'undefined') allJapeakData = allJapeakData.concat(japeakClassData);
if (typeof japeakHealthData !== 'undefined') allJapeakData = allJapeakData.concat(japeakHealthData);
if (typeof japeakLunchData !== 'undefined') allJapeakData = allJapeakData.concat(japeakLunchData);
if (typeof japeakBreakData !== 'undefined') allJapeakData = allJapeakData.concat(japeakBreakData);
if (typeof japeakClubsData !== 'undefined') allJapeakData = allJapeakData.concat(japeakClubsData);
if (typeof japeakTeachersData !== 'undefined') allJapeakData = allJapeakData.concat(japeakTeachersData);
if (typeof japeakCommutingData !== 'undefined') allJapeakData = allJapeakData.concat(japeakCommutingData);
if (typeof japeakTroublesData !== 'undefined') allJapeakData = allJapeakData.concat(japeakTroublesData);
if (typeof japeakEventsData !== 'undefined') allJapeakData = allJapeakData.concat(japeakEventsData);
if (typeof japeakOfficeData !== 'undefined') allJapeakData = allJapeakData.concat(japeakOfficeData);

let currentIndex = 0; 
let currentLesson = null;
let currentLang = 'en'; 
let recognition;
let isRecording = false;
let hasCelebrated = false; 

// URLパラメータから ID と 言語 を取得
const urlParams = new URLSearchParams(window.location.search);
const targetId = urlParams.get('id');
const urlLang = urlParams.get('lang');

if (urlLang) currentLang = urlLang;

// targetId があればそのフレーズを探す、なければ最初のフレーズ
if (targetId) {
    const foundIndex = allJapeakData.findIndex(item => item.id === targetId);
    if (foundIndex !== -1) currentIndex = foundIndex;
}
if (allJapeakData.length > 0) currentLesson = allJapeakData[currentIndex];

// お祝い用サウンド
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

// 🌟 AI音声（Text-to-Speech）再生機能
function playExampleAudio() {
    if (!currentLesson) return;
    window.speechSynthesis.cancel(); // 連続再生を防ぐ
    
    // ターゲットの読み仮名（ひらがな）または元の日本語を取得
    const textToSpeak = currentLesson.target_speech || currentLesson.japanese;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    
    utterance.lang = 'ja-JP'; // 日本語に設定
    utterance.rate = 0.85;    // 学習者向けに少しだけゆっくり
    utterance.pitch = 1.0;
    
    window.speechSynthesis.speak(utterance);
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
        });
    }

    // 音声再生ボタンのイベント
    const btnPlayAudio = document.getElementById('btn-play-audio');
    if (btnPlayAudio) {
        btnPlayAudio.onclick = playExampleAudio;
    }

    document.getElementById('btn-prev').onclick = () => {
        if (currentIndex > 0) {
            currentIndex--;
            currentLesson = allJapeakData[currentIndex];
            renderLesson();
            history.replaceState(null, '', `?id=${currentLesson.id}&lang=${currentLang}`); // URLを更新
        }
    };
    document.getElementById('btn-next').onclick = () => {
        if (currentIndex < allJapeakData.length - 1) {
            currentIndex++;
            currentLesson = allJapeakData[currentIndex];
            renderLesson();
            history.replaceState(null, '', `?id=${currentLesson.id}&lang=${currentLang}`); // URLを更新
        }
    };
});

function renderLesson() {
    document.getElementById('lesson-title').innerHTML = `<span>🗣️</span> ${currentLesson.title}`;
    document.getElementById('main-text-jp').innerHTML = currentLesson.ruby.hiragana;
    document.getElementById('main-text-ro').innerText = currentLesson.ruby.romaji;
    document.getElementById('context-text').innerText = currentLesson.context[currentLang] || currentLesson.context['en'];
    document.getElementById('translation-text').innerText = currentLesson.translations[currentLang] || currentLesson.translations['en'];
    
    document.getElementById('voice-output').innerHTML = '※「話す」ボタンを押してください';
    const accOutput = document.getElementById('acc-output');
    accOutput.innerText = '0%';
    accOutput.className = "text-4xl font-black text-[#1e3a5f] mincho-font mt-1";
}

function setupSpeechRecognition() {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!window.SpeechRecognition) return;

    recognition = new SpeechRecognition();
    recognition.lang = 'ja-JP'; 
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
            const score1 = calculateJapaneseAccuracy(currentText, currentLesson.japanese);
            const score2 = calculateJapaneseAccuracy(currentText, currentLesson.target_speech);
            const accuracy = Math.max(score1, score2);

            accOutput.innerText = `${accuracy}%`;
            
            if(accuracy >= 80) {
                accOutput.className = "text-4xl font-black text-green-600 mincho-font mt-1";
                if (!hasCelebrated) {
                    hasCelebrated = true;
                    playSuccessSound();
                    fireConfetti();
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

function resetMicButton(btn) {
    btn.innerHTML = "<span>🎙</span> 話す (Start Speaking)";
    btn.className = "flex-1 w-full flex items-center justify-center gap-3 py-4 bg-[#b91c1c] hover:bg-[#991b1b] text-white rounded-sm font-black text-xl shadow-md border-b-4 border-[#7f1d1d] active:border-b-0 active:translate-y-1 transition-all tracking-widest";
}

function calculateJapaneseAccuracy(spoken, target) {
    const cleanSpoken = spoken.replace(/[\s 、。！？!?]/g, "");
    const cleanTarget = target.replace(/[\s 、。！？!?]/g, "");
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