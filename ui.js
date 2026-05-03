// ==========================================
// ui.js: 画面切り替えとモード設定
// ==========================================

let engFontSize = 32; 
let jpnFontSize = 20;
let recFontSize = 32;
let targetTextArray = [];
let currentMode = 'reading'; 

function showMsg(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.innerText = message;
    toast.classList.add('show-toast');
    setTimeout(() => toast.classList.remove('show-toast'), 3000);
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
    if (audioPlayer) { audioPlayer.pause(); audioPlayer.src = ""; }
    
    currentCustomLesson = null;
    if (typeof loadSavedLessons === 'function') loadSavedLessons(); 
    switchScreen('homeScreen');
}

function openLearningScreen(lesson) {
    document.getElementById('learningTitle').innerText = lesson.title;
    
    const engHtml = lesson.eng.replace(/([.?!])\s+/g, "$1<br><br>");
    document.getElementById('engContainer').innerHTML = engHtml;
    
    const jpnWrapper = document.getElementById('jpnWrapper');
    if (lesson.jpn && lesson.jpn.trim() !== "") {
        jpnWrapper.classList.remove('hidden');
        document.getElementById('jpnContainer').innerHTML = lesson.jpn.replace(/([。？！])\s*/g, "$1<br>");
    } else {
        jpnWrapper.classList.add('hidden');
    }

    const audioContainer = document.getElementById('audioContainer');
    const audioPlayer = document.getElementById('audioPlayer');
    if (lesson.audioBlob) {
        audioContainer.classList.remove('hidden');
        audioPlayer.src = URL.createObjectURL(lesson.audioBlob);
    } else {
        audioContainer.classList.add('hidden');
        audioPlayer.src = "";
    }

    setLearningMode('reading');
    
    // ★重要バグ修正：正規表現の中に \s (スペース) を追加しました！これで単語ごとに正しく分割されます。
    targetTextArray = lesson.eng.toLowerCase().replace(/[^a-z0-9\u00C0-\u017F\u0900-\u097F\s]/gi, '').split(/\s+/).filter(w => w);
    
    switchScreen('learningScreen');

    const mainScrollArea = document.getElementById('mainScrollArea');
    if (mainScrollArea) mainScrollArea.scrollTop = 0;
}

function setLearningMode(mode) {
    if (typeof isMainRecording !== 'undefined' && isMainRecording) {
        if (typeof toggleRecording === 'function') toggleRecording();
    }

    currentMode = mode;
    const tabR = document.getElementById('tabReading');
    const tabS = document.getElementById('tabShadowing');
    const btnText = document.getElementById('micBtnText');
    
    const targetTextWrapper = document.getElementById('targetTextWrapper'); 
    const yourVoiceWrapper = document.getElementById('yourVoiceWrapper');
    const jpnWrapper = document.getElementById('jpnWrapper');

    if (mode === 'reading') {
        tabR.className = "px-10 py-2 rounded-sm font-bold text-sm transition-all duration-200 bg-stone-800 text-white uppercase tracking-wider shadow-md";
        tabS.className = "px-10 py-2 rounded-sm font-bold text-sm transition-all duration-200 text-stone-500 hover:text-stone-800 uppercase tracking-wider";
        btnText.innerText = "START READING";
        
        targetTextWrapper.style.display = 'flex'; 
        yourVoiceWrapper.className = "w-full md:w-1/2 p-6 bg-white rounded-sm border-l-4 border-stone-800 shadow-sm iron-border-sm flex flex-col min-h-[300px] transition-all duration-300";
        
        if (currentCustomLesson && currentCustomLesson.jpn && currentCustomLesson.jpn.trim() !== "") {
            jpnWrapper.classList.remove('hidden');
        }
    } else {
        tabS.className = "px-10 py-2 rounded-sm font-bold text-sm transition-all duration-200 bg-stone-800 text-white uppercase tracking-wider shadow-md";
        tabR.className = "px-10 py-2 rounded-sm font-bold text-sm transition-all duration-200 text-stone-500 hover:text-stone-800 uppercase tracking-wider";
        btnText.innerText = "START SHADOWING";
        
        targetTextWrapper.style.display = 'none'; 
        yourVoiceWrapper.className = "w-full max-w-4xl mx-auto p-6 md:p-10 bg-white rounded-sm border-l-4 border-stone-800 shadow-sm iron-border-sm flex flex-col min-h-[400px] transition-all duration-300";
    }

    resetLearningState();
}

function resetLearningState() {
    if (typeof finalTranscript !== 'undefined') finalTranscript = '';
    if (typeof accumulatedTranscript !== 'undefined') accumulatedTranscript = '';
    
    const recDisplay = document.getElementById('recognizedTextDisplay');
    recDisplay.innerHTML = "※Press START to begin";
    recDisplay.style.color = "#a8a29e"; 
    
    const accEl = document.getElementById('hudAccValue');
    accEl.innerText = "0%";
    accEl.className = "font-bold text-2xl text-emerald-400 serif-font";
    document.getElementById('hudWpmValue').innerText = "0";
    
    const btn = document.getElementById('micBtn');
    if (btn) {
        btn.classList.remove('bg-stone-800', 'animate-pulse');
        btn.classList.add('bg-emerald-800');
    }
}

function changeFontSize(type, step) {
    if (type === 'eng') {
        engFontSize = Math.max(16, Math.min(80, engFontSize + step));
        document.getElementById('engContainer').style.fontSize = engFontSize + 'px';
    } else if (type === 'jpn') {
        jpnFontSize = Math.max(12, Math.min(60, jpnFontSize + step));
        document.getElementById('jpnContainer').style.fontSize = jpnFontSize + 'px';
    } else if (type === 'rec') {
        recFontSize = Math.max(16, Math.min(80, recFontSize + step));
        document.getElementById('recognizedTextDisplay').style.fontSize = recFontSize + 'px';
    }
}