// ==========================================
// ui.js: 画面切り替え、モード設定、およびグラフ描画
// ==========================================

const isMobile = window.innerWidth < 768;
let engFontSize = isMobile ? 18 : 24; 
let jpnFontSize = isMobile ? 14 : 16;
let recFontSize = isMobile ? 18 : 24; 

let targetTextArray = [];
let currentMode = 'reading'; 
let currentMemoLevel = 0; // 暗記モードのレベル（0は通常表示）
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

// レベルに応じたボタンの装飾と、テキストの再描画
function updateMemoLevel(level) {
    currentMemoLevel = level;
    
    for (let i = 1; i <= 5; i++) {
        const btn = document.getElementById('lvlBtn' + i);
        if (!btn) continue;
        if (i === level) {
            btn.className = "flex-1 py-1.5 md:py-2 rounded-sm bg-stone-800 text-white font-bold text-xs transition shadow-sm";
        } else {
            btn.className = "flex-1 py-1.5 md:py-2 rounded-sm bg-stone-200 text-stone-600 hover:bg-stone-300 font-bold text-xs transition";
        }
    }
    renderTargetText(); 
}

// 指定された暗記レベルに応じて単語を灰色の箱（虫食い）化する
function renderTargetText() {
    if (!currentCustomLesson) return;
    const engContainer = document.getElementById('engContainer');
    let text = currentCustomLesson.eng;

    if (currentMemoLevel > 0 && currentMode === 'memo') {
        const threshold = currentMemoLevel * 0.2; // Lv1=20%, Lv5=100%
        const words = text.split(/(\s+)/); 
        
        const maskedWords = words.map((word, index) => {
            if (word.trim() === "") return word; 

            // 擬似乱数で常に同じ場所が空欄になるようにする
            let hash = 0;
            for (let i = 0; i < word.length; i++) hash = word.charCodeAt(i) + ((hash << 5) - hash);
            const pseudoRandom = Math.abs(hash + index * 137) % 100 / 100;

            if (pseudoRandom < threshold) {
                // 文字を透明にして背景を灰色に塗る（ドラッグ選択でのカンニングも防止）
                const maskedWord = word.replace(/[a-zA-Z0-9\u00C0-\u017F\u0900-\u097F']+/g, match => {
                    return `<span class="bg-stone-300 text-transparent rounded-sm select-none">${match}</span>`;
                });
                return maskedWord;
            }
            return word;
        });
        text = maskedWords.join('');
    }

    engContainer.innerHTML = text.replace(/([.?!])\s+/g, "$1<br><br>");
}

function showPreReadingState() {
    document.body.classList.remove('immersive-mode');

    const targetTextWrapper = document.getElementById('targetTextWrapper'); 
    const yourVoiceWrapper = document.getElementById('yourVoiceWrapper');
    const resultScoreBoard = document.getElementById('resultScoreBoard');
    const mainPane = document.getElementById('mainLearningPane');
    const sidebar = document.getElementById('playlistSidebar');
    const toggleBtn = document.getElementById('toggleJpnBtn');

    if (mainPane) mainPane.className = "w-full lg:w-[78%] flex flex-col h-full bg-[#faf8f5] rounded-sm iron-border overflow-hidden relative transition-all duration-500";
    if (sidebar) sidebar.style.display = 'flex';

    if (toggleBtn && currentCustomLesson && currentCustomLesson.jpn) {
        toggleBtn.classList.remove('hidden');
    }

    resultScoreBoard.style.display = 'none'; 
    renderTargetText(); 

    if (currentMode === 'reading' || currentMode === 'memo') {
        targetTextWrapper.style.display = 'flex';
        targetTextWrapper.className = "w-full flex flex-col gap-4 md:gap-6 transition-all duration-300 relative z-10 bg-transparent p-0 backdrop-blur-none shadow-none border-none";
        yourVoiceWrapper.style.display = 'none';
    } else {
        targetTextWrapper.style.display = 'none'; 
        yourVoiceWrapper.style.display = 'flex';
        yourVoiceWrapper.className = "w-full max-w-4xl mx-auto p-4 md:p-10 bg-white rounded-sm border-l-4 border-stone-800 shadow-sm iron-border-sm flex flex-col min-h-[300px] md:min-h-[400px] transition-all duration-300 opacity-100 relative z-10";
    }
}

function showRecordingState() {
    document.body.classList.add('immersive-mode');

    const targetTextWrapper = document.getElementById('targetTextWrapper'); 
    const yourVoiceWrapper = document.getElementById('yourVoiceWrapper');
    const jpnWrapper = document.getElementById('jpnWrapper');
    const resultScoreBoard = document.getElementById('resultScoreBoard');
    const mainPane = document.getElementById('mainLearningPane');
    const sidebar = document.getElementById('playlistSidebar');
    const toggleBtn = document.getElementById('toggleJpnBtn');

    if (mainPane) mainPane.className = "w-full flex flex-col h-full bg-[#faf8f5] rounded-sm iron-border overflow-hidden relative transition-all duration-500";
    if (sidebar) sidebar.style.display = 'none';

    if (jpnWrapper) jpnWrapper.classList.add('hidden');
    if (toggleBtn) toggleBtn.classList.add('hidden');
    
    if(toggleBtn) {
        toggleBtn.innerText = '🌐 訳を表示';
        toggleBtn.classList.remove('bg-emerald-50', 'text-emerald-700', 'border-emerald-200');
    }

    resultScoreBoard.style.display = 'none'; 

    if (currentMode === 'reading' || currentMode === 'memo') {
        yourVoiceWrapper.style.display = 'flex';
        yourVoiceWrapper.className = "absolute inset-0 z-0 opacity-20 pointer-events-none p-4 md:p-14 flex flex-col overflow-hidden transition-all duration-700 bg-transparent border-none shadow-none";
        
        targetTextWrapper.style.display = 'flex';
        targetTextWrapper.className = "relative z-10 w-full flex-1 flex flex-col gap-4 md:gap-6 transition-all duration-700 bg-white/85 backdrop-blur-xl p-4 md:p-14 rounded-xl md:rounded-2xl shadow-2xl border border-stone-200";
    } else {
        targetTextWrapper.style.display = 'none'; 
        yourVoiceWrapper.style.display = 'flex';
        yourVoiceWrapper.className = "w-full max-w-5xl mx-auto p-4 md:p-12 bg-white rounded-sm border-l-4 border-stone-800 shadow-sm iron-border-sm flex flex-col min-h-[300px] md:min-h-[400px] transition-all duration-300 opacity-100 relative z-10";
    }
}

function showResultState() {
    document.body.classList.remove('immersive-mode');

    const targetTextWrapper = document.getElementById('targetTextWrapper'); 
    const yourVoiceWrapper = document.getElementById('yourVoiceWrapper');
    const resultScoreBoard = document.getElementById('resultScoreBoard');
    const mainPane = document.getElementById('mainLearningPane');
    const sidebar = document.getElementById('playlistSidebar');
    const toggleBtn = document.getElementById('toggleJpnBtn');

    if (mainPane) mainPane.className = "w-full lg:w-[78%] flex flex-col h-full bg-[#faf8f5] rounded-sm iron-border overflow-hidden relative transition-all duration-500";
    if (sidebar) sidebar.style.display = 'flex';
    
    if (toggleBtn && currentCustomLesson && currentCustomLesson.jpn) {
        toggleBtn.classList.remove('hidden');
    }

    resultScoreBoard.style.display = 'flex';

    if (currentMode === 'reading' || currentMode === 'memo') {
        yourVoiceWrapper.style.display = 'flex';
        yourVoiceWrapper.className = "w-full lg:w-1/2 p-4 md:p-8 bg-white rounded-sm border-l-4 border-stone-800 shadow-sm iron-border-sm flex flex-col transition-all duration-300 relative z-10 opacity-100 pointer-events-auto flex-1 min-h-[250px] md:min-h-[400px]";
        
        targetTextWrapper.style.display = 'flex';
        targetTextWrapper.className = "w-full lg:w-1/2 flex flex-col gap-4 md:gap-6 transition-all duration-300 relative z-10 bg-transparent p-0 backdrop-blur-none border-none shadow-none flex-1 min-h-[250px] md:min-h-[400px]";
    }
}

// 3つのモード（タブ）の切り替え制御
function setLearningMode(mode) {
    if (typeof isMainRecording !== 'undefined' && isMainRecording) {
        if (typeof toggleRecording === 'function') toggleRecording();
    }

    currentMode = mode;
    const tabR = document.getElementById('tabReading');
    const tabM = document.getElementById('tabMemo');
    const tabS = document.getElementById('tabShadowing');
    const btnText = document.getElementById('micBtnText');
    const vanishControls = document.getElementById('vanishModeControls');
    
    const activeClass = "flex-1 px-2 md:px-6 py-2 rounded-sm font-bold text-[10px] md:text-sm transition-all duration-200 bg-stone-800 text-white uppercase tracking-wider shadow-md whitespace-nowrap";
    const inactiveClass = "flex-1 px-2 md:px-6 py-2 rounded-sm font-bold text-[10px] md:text-sm transition-all duration-200 text-stone-500 hover:text-stone-800 uppercase tracking-wider whitespace-nowrap";

    tabR.className = (mode === 'reading') ? activeClass : inactiveClass;
    tabM.className = (mode === 'memo') ? activeClass : inactiveClass;
    tabS.className = (mode === 'shadowing') ? activeClass : inactiveClass;

    if (mode === 'reading') {
        btnText.innerText = "START READING";
        vanishControls.classList.add('hidden');
        currentMemoLevel = 0;
    } else if (mode === 'memo') {
        btnText.innerText = "START VANISH";
        vanishControls.classList.remove('hidden');
        if (currentMemoLevel === 0) updateMemoLevel(1); // デフォルトをLv1に
    } else {
        btnText.innerText = "START SHADOWING";
        vanishControls.classList.add('hidden');
        currentMemoLevel = 0;
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
    if (!currentCustomLesson || !currentCustomLesson.history || currentCustomLesson.history.length === 0) return;

    const ctx = document.getElementById('progressChart').getContext('2d');
    if (progressChartInstance) progressChartInstance.destroy();

    const labels = currentCustomLesson.history.map((log, index) => {
        let modeStr = '📖 音読';
        if (log.mode === 'shadowing') modeStr = '🎧 シャドーイング';
        if (log.mode === 'memo') modeStr = '🧠 暗記';
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
                { label: 'Comprehension (理解度 %)', data: compData, borderColor: '#facc15', backgroundColor: 'rgba(250, 204, 21, 0.2)', borderWidth: 4, tension: 0.3, fill: true, yAxisID: 'y' },
                { label: 'Accuracy (正確さ %)', data: accData, borderColor: '#34d399', borderWidth: 3, tension: 0.3, yAxisID: 'y' },
                { label: 'WPM (スピード)', data: wpmData, borderColor: '#60a5fa', borderWidth: 3, borderDash: [5, 5], tension: 0.3, yAxisID: 'y1' }
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false, },
            scales: {
                y: { type: 'linear', display: true, position: 'left', min: 0, max: 100, title: { display: true, text: 'Percentage (%)', color: '#78716c', font: { weight: 'bold' } } },
                y1: { type: 'linear', display: true, position: 'right', min: 0, title: { display: true, text: 'Words Per Minute (WPM)', color: '#78716c', font: { weight: 'bold' } }, grid: { drawOnChartArea: false } }
            },
            plugins: { tooltip: { callbacks: { title: (context) => { return context[0].label.replace(',', ' '); } } } }
        }
    });
}