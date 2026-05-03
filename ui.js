// ==========================================
// ui.js: 画面切り替え、モード設定、およびグラフ描画
// ==========================================

let engFontSize = 24; 
let jpnFontSize = 16;
let recFontSize = 24; 
let targetTextArray = [];
let currentMode = 'reading'; 

let progressChartInstance = null;

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
    
    renderTargetText();
    
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
    targetTextArray = lesson.eng.toLowerCase().replace(/[^a-z0-9\u00C0-\u017F\u0900-\u097F\s]/gi, '').split(/\s+/).filter(w => w);
    
    switchScreen('learningScreen');

    const mainScrollArea = document.getElementById('mainScrollArea');
    if (mainScrollArea) mainScrollArea.scrollTop = 0;
}

function renderTargetText() {
    if (!currentCustomLesson) return;
    const engContainer = document.getElementById('engContainer');
    engContainer.innerHTML = currentCustomLesson.eng.replace(/([.?!])\s+/g, "$1<br><br>");
}

function showPreReadingState() {
    const targetTextWrapper = document.getElementById('targetTextWrapper'); 
    const yourVoiceWrapper = document.getElementById('yourVoiceWrapper');
    const jpnWrapper = document.getElementById('jpnWrapper');
    const resultScoreBoard = document.getElementById('resultScoreBoard');

    resultScoreBoard.style.display = 'none'; 
    renderTargetText(); 

    if (currentMode === 'reading') {
        targetTextWrapper.style.display = 'flex';
        targetTextWrapper.className = "w-full flex flex-col gap-6 transition-all duration-300 relative z-10 bg-transparent p-0 backdrop-blur-none shadow-none border-none";
        yourVoiceWrapper.style.display = 'none';
        
        if (jpnWrapper && currentCustomLesson && currentCustomLesson.jpn) {
            jpnWrapper.classList.add('hidden'); 
        }
    } else {
        targetTextWrapper.style.display = 'none'; 
        yourVoiceWrapper.style.display = 'flex';
        yourVoiceWrapper.className = "w-full max-w-4xl mx-auto p-6 md:p-10 bg-white rounded-sm border-l-4 border-stone-800 shadow-sm iron-border-sm flex flex-col min-h-[400px] transition-all duration-300 opacity-100 relative z-10";
    }
}

function showRecordingState() {
    const targetTextWrapper = document.getElementById('targetTextWrapper'); 
    const yourVoiceWrapper = document.getElementById('yourVoiceWrapper');
    const jpnWrapper = document.getElementById('jpnWrapper');
    const resultScoreBoard = document.getElementById('resultScoreBoard');

    resultScoreBoard.style.display = 'none'; 

    if (currentMode === 'reading') {
        yourVoiceWrapper.style.display = 'flex';
        yourVoiceWrapper.className = "absolute inset-0 z-0 opacity-40 pointer-events-none p-4 md:p-8 flex flex-col overflow-hidden transition-all duration-700 bg-transparent border-none shadow-none";
        
        targetTextWrapper.style.display = 'flex';
        targetTextWrapper.className = "relative z-10 w-full lg:w-[85%] mx-auto flex flex-col gap-6 transition-all duration-700 bg-white/85 backdrop-blur-md p-8 md:p-10 rounded-xl shadow-2xl border border-white/60";
        
        if (jpnWrapper) jpnWrapper.classList.add('hidden'); 
    }
}

function showResultState() {
    const targetTextWrapper = document.getElementById('targetTextWrapper'); 
    const yourVoiceWrapper = document.getElementById('yourVoiceWrapper');
    const resultScoreBoard = document.getElementById('resultScoreBoard');

    resultScoreBoard.style.display = 'flex';

    if (currentMode === 'reading') {
        yourVoiceWrapper.style.display = 'flex';
        yourVoiceWrapper.className = "w-full md:w-1/2 p-6 md:p-8 bg-white rounded-sm border-l-4 border-stone-800 shadow-sm iron-border-sm flex flex-col transition-all duration-300 relative z-10 opacity-100 pointer-events-auto flex-1";
        
        targetTextWrapper.style.display = 'flex';
        targetTextWrapper.className = "w-full md:w-1/2 flex flex-col gap-6 transition-all duration-300 relative z-10 bg-transparent p-0 backdrop-blur-none border-none shadow-none flex-1";
    }
}

function setLearningMode(mode) {
    if (typeof isMainRecording !== 'undefined' && isMainRecording) {
        if (typeof toggleRecording === 'function') toggleRecording();
    }

    currentMode = mode;
    const tabR = document.getElementById('tabReading');
    const tabS = document.getElementById('tabShadowing');
    const btnText = document.getElementById('micBtnText');
    
    if (mode === 'reading') {
        tabR.className = "px-10 py-2 rounded-sm font-bold text-sm transition-all duration-200 bg-stone-800 text-white uppercase tracking-wider shadow-md";
        tabS.className = "px-10 py-2 rounded-sm font-bold text-sm transition-all duration-200 text-stone-500 hover:text-stone-800 uppercase tracking-wider";
        btnText.innerText = "START READING";
    } else {
        tabS.className = "px-10 py-2 rounded-sm font-bold text-sm transition-all duration-200 bg-stone-800 text-white uppercase tracking-wider shadow-md";
        tabR.className = "px-10 py-2 rounded-sm font-bold text-sm transition-all duration-200 text-stone-500 hover:text-stone-800 uppercase tracking-wider";
        btnText.innerText = "START SHADOWING";
    }

    resetLearningState();
}

function resetLearningState() {
    if (typeof finalTranscript !== 'undefined') finalTranscript = '';
    if (typeof accumulatedTranscript !== 'undefined') accumulatedTranscript = '';
    
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

function openChartModal() {
    document.getElementById('chartModal').classList.remove('hidden');
    renderChart();
}

function closeChartModal() {
    document.getElementById('chartModal').classList.add('hidden');
}

// ★ 変更: グラフに「音読かシャドーイングか」のラベルを追加
function renderChart() {
    if (!currentCustomLesson || !currentCustomLesson.history || currentCustomLesson.history.length === 0) return;

    const ctx = document.getElementById('progressChart').getContext('2d');
    
    if (progressChartInstance) {
        progressChartInstance.destroy();
    }

    // ★ ラベルにモード名（音読/シャドーイング）を追記
    const labels = currentCustomLesson.history.map((log, index) => {
        const modeStr = log.mode === 'shadowing' ? '🎧 シャドーイング' : '📖 音読';
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
                    yAxisID: 'y'
                },
                {
                    label: 'Accuracy (正確さ %)',
                    data: accData,
                    borderColor: '#34d399', 
                    borderWidth: 3,
                    tension: 0.3,
                    yAxisID: 'y'
                },
                {
                    label: 'WPM (スピード)',
                    data: wpmData,
                    borderColor: '#60a5fa', 
                    borderWidth: 3,
                    borderDash: [5, 5], 
                    tension: 0.3,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    min: 0,
                    max: 100,
                    title: { display: true, text: 'Percentage (%)', color: '#78716c', font: { weight: 'bold' } }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    min: 0,
                    title: { display: true, text: 'Words Per Minute (WPM)', color: '#78716c', font: { weight: 'bold' } },
                    grid: { drawOnChartArea: false }
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