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

function renderTargetText() {
    if (!currentCustomLesson) return;
    const engContainer = document.getElementById('engContainer');
    let text = currentCustomLesson.eng;

    if (currentMode === 'paced') engContainer.classList.add('karaoke-active');
    else engContainer.classList.remove('karaoke-active');

    const words = text.split(/(\s+)/); 
    const processedWords = words.map((word, index) => {
        if (word.trim() === "") return word; 

        let finalWord = word;

        if (currentMode === 'memo' && currentMemoLevel > 0) {
            const threshold = currentMemoLevel * 0.2; 
            let hash = 0;
            for (let i = 0; i < word.length; i++) hash = word.charCodeAt(i) + ((hash << 5) - hash);
            const pseudoRandom = Math.abs(hash + index * 137) % 100 / 100;

            if (pseudoRandom < threshold) {
                finalWord = word.replace(/[a-zA-Z0-9\u00C0-\u017F\u0900-\u097F']+/g, match => {
                    return `<span class="bg-stone-300 text-transparent rounded-sm select-none">${match}</span>`;
                });
            }
        }

        return `<span class="pace-word">${finalWord}</span>`;
    });

    engContainer.innerHTML = processedWords.join('').replace(/([.?!]["']?)<\/span>\s+/g, "$1</span><br><br>");
}

function updateTargetWpm(val) {
    targetWpm = parseInt(val);
    const display = document.getElementById('targetWpmDisplay');
    if (display) display.innerText = targetWpm + " WPM";
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
            currentWordEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
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

    if (currentMode !== 'shadowing') {
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

    if (currentMode !== 'shadowing') {
        yourVoiceWrapper.style.display = 'flex';
        yourVoiceWrapper.className = "w-full lg:w-1/2 p-4 md:p-8 bg-white rounded-sm border-l-4 border-stone-800 shadow-sm iron-border-sm flex flex-col transition-all duration-300 relative z-10 opacity-100 pointer-events-auto flex-1 min-h-[250px] md:min-h-[400px]";
        
        targetTextWrapper.style.display = 'flex';
        targetTextWrapper.className = "w-full lg:w-1/2 flex flex-col gap-4 md:gap-6 transition-all duration-300 relative z-10 bg-transparent p-0 backdrop-blur-none border-none shadow-none flex-1 min-h-[250px] md:min-h-[400px]";
    }
}

function setLearningMode(mode) {
    if (typeof isMainRecording !== 'undefined' && isMainRecording) {
        if (typeof toggleRecording === 'function') toggleRecording();
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

    if(tabR) tabR.className = (mode === 'reading') ? activeClass : inactiveClass;
    if(tabP) tabP.className = (mode === 'paced') ? activeClass : inactiveClass;
    if(tabM) tabM.className = (mode === 'memo') ? activeClass : inactiveClass;
    if(tabS) tabS.className = (mode === 'shadowing') ? activeClass : inactiveClass;

    if (mode === 'reading') {
        btnText.innerText = "START READING";
        if (vanishControls) vanishControls.classList.add('hidden');
        if (pacedControls) pacedControls.classList.add('hidden');
        currentMemoLevel = 0;
    } else if (mode === 'paced') {
        btnText.innerText = "START PACED";
        if (vanishControls) vanishControls.classList.add('hidden');
        if (pacedControls) pacedControls.classList.remove('hidden');
        currentMemoLevel = 0;
    } else if (mode === 'memo') {
        btnText.innerText = "START VANISH";
        if (vanishControls) vanishControls.classList.remove('hidden');
        if (pacedControls) pacedControls.classList.add('hidden');
        if (currentMemoLevel === 0) updateMemoLevel(1); 
    } else {
        btnText.innerText = "START SHADOWING";
        if (vanishControls) vanishControls.classList.add('hidden');
        if (pacedControls) pacedControls.classList.add('hidden');
        currentMemoLevel = 0;
    }

    resetLearningState();
}

function resetLearningState() {
    if (typeof finalTranscript !== 'undefined') finalTranscript = '';
    if (typeof accumulatedTranscript !== 'undefined') accumulatedTranscript = '';
    
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
    if (!currentCustomLesson || !currentCustomLesson.history || currentCustomLesson.history.length === 0) return;

    const ctx = document.getElementById('progressChart').getContext('2d');
    if (progressChartInstance) progressChartInstance.destroy();

    const labels = currentCustomLesson.history.map((log, index) => {
        let modeStr = '📖 音読';
        if (log.mode === 'shadowing') modeStr = '🎧 シャドーイング';
        if (log.mode === 'memo') modeStr = '🧠 暗記';
        if (log.mode === 'paced') modeStr = '⚡️ ペース音読';
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

function openModeGuide() {
    const modal = document.getElementById('modeGuideModal');
    if (modal) modal.classList.remove('hidden');
}

function closeModeGuide() {
    const modal = document.getElementById('modeGuideModal');
    if (modal) modal.classList.add('hidden');
}

// ==========================================
// ★追加: 共有リンク生成機能 (魔法のリンク)
// ==========================================
function generateShareLink() {
    if (!currentCustomLesson) return;
    
    const baseUrl = window.location.origin + window.location.pathname;
    const params = new URLSearchParams({
        title: currentCustomLesson.title.replace('🔗 ', ''), 
        eng: currentCustomLesson.eng,
        lang: currentCustomLesson.lang || 'en-US'
    });
    
    const shareUrl = `${baseUrl}?${params.toString()}`;
    
    navigator.clipboard.writeText(shareUrl).then(() => {
        showMsg("🔗 共有リンクをコピーしました！Classroom等に貼り付けてください");
    }).catch(err => {
        showMsg("⚠️ リンクのコピーに失敗しました");
    });
}

// ==========================================
// ★追加: AI音声 (Text-to-Speech) コントロール
// ==========================================
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
// ==========================================
// ★追加: 生徒成績管理 & Googleフォーム自動送信システム
// ==========================================

// 結果画面が表示されたときに、提出ボタンを出すか出さないか制御する（showResultState内に追記する代わりにここで検知）
const originalShowResultState = showResultState;
showResultState = function() {
    originalShowResultState(); // 元々の結果表示処理を実行
    
    const submitBtn = document.getElementById('submitScoreTriggerBtn');
    if (!submitBtn) return;

    // 現在の教材にformUrl（提出先）が設定されている場合のみ、送信ボタンを表示する
    if (currentCustomLesson && currentCustomLesson.formUrl) {
        submitBtn.classList.remove('hidden');
    } else {
        submitBtn.classList.add('hidden');
    }
};

// 1. 提出ボタンが押されたときの処理
function openReflectionWrapper() {
    // 端末にプロフィール（クラス・番号・名前）が保存されているか確認
    const savedProfile = localStorage.getItem('copeak_student_profile');
    
    if (!savedProfile) {
        // 保存されていなければ、先にプロフィール登録モーダルを開く
        document.getElementById('studentProfileModal').classList.remove('hidden');
    } else {
        // 保存されていれば、振り返り入力モーダルを開く
        openReflectionModal();
    }
}

// 2. 生徒プロフィールの保存
function saveStudentProfile() {
    const cls = document.getElementById('studentClassInput').value.trim();
    const num = document.getElementById('studentNumInput').value.trim();
    const name = document.getElementById('studentNameInput').value.trim();

    if (!cls || !num || !name) {
        alert("すべての項目を入力してください。");
        return;
    }

    const profile = { class: cls, number: num, name: name };
    localStorage.setItem('copeak_student_profile', JSON.stringify(profile));
    
    // プロフィールモーダルを閉じ、振り返りモーダルへ進む
    document.getElementById('studentProfileModal').classList.add('hidden');
    openReflectionModal();
}

// 3. 振り返りモーダルを開き、現在のスコアをプレビュー表示
function openReflectionModal() {
    const scoreText = document.getElementById('resultScore') ? document.getElementById('resultScore').innerText : '--%';
    const wpmText = document.getElementById('resultWpm') ? document.getElementById('resultWpm').innerText : '--';
    
    let modeStr = '📖 Read';
    if (currentMode === 'shadowing') modeStr = '🎧 Shadowing';
    if (currentMode === 'memo') modeStr = '🧠 Vanish';
    if (currentMode === 'paced') modeStr = '⚡️ Paced';

    document.getElementById('submitScorePreview').innerText = `Accuracy: ${scoreText} / Speed: ${wpmText} WPM`;
    document.getElementById('submitModePreview').innerText = modeStr;
    document.getElementById('reflectionInput').value = ""; // 入力欄をリセット
    
    document.getElementById('reflectionModal').classList.remove('hidden');
}

function closeReflectionModal() {
    document.getElementById('reflectionModal').classList.add('hidden');
}

// 4. 【最重要】Googleフォームへのデータ裏口自動送信（POST）
async function submitScoreToForm() {
    if (!currentCustomLesson || !currentCustomLesson.formUrl) return;

    const profile = JSON.parse(localStorage.getItem('copeak_student_profile'));
    if (!profile) return;

    const reflection = document.getElementById('reflectionInput').value.trim();
    if (!reflection) {
        alert("練習の振り返りを入力してください（先生に送信されます）。");
        return;
    }

    const finalSubmitBtn = document.getElementById('finalSubmitBtn');
    finalSubmitBtn.disabled = true;
    finalSubmitBtn.innerText = "⏳ 送信中...";

    // データの抽出
    const accuracy = document.getElementById('resultScore') ? document.getElementById('resultScore').innerText.replace('%', '') : '0';
    const wpm = document.getElementById('resultWpm') ? document.getElementById('resultWpm').innerText : '0';
    const comp = document.getElementById('resultComp') ? document.getElementById('resultComp').innerText.replace('%', '') : '0';
    const playCount = currentCustomLesson.history ? currentCustomLesson.history.length : 1;

    let modeStr = 'Read';
    if (currentMode === 'shadowing') modeStr = 'Shadowing';
    if (currentMode === 'memo') modeStr = 'Vanish';
    if (currentMode === 'paced') modeStr = 'Paced';

    // 先生のフォームURLを、送信専用の「formResponse」URLに変形する
    let postUrl = currentCustomLesson.formUrl.replace('/viewform', '/formResponse');

    // 先生から取得した固有のentry.IDをマッピング
    const formData = new URLSearchParams();
    formData.append('entry.755665088', profile.class);
    formData.append('entry.70481568', profile.number);
    formData.append('entry.1056156063', profile.name);
    formData.append('entry.145428349', accuracy);
    formData.append('entry.928123739', wpm);
    formData.append('entry.1611039041', comp);
    formData.append('entry.1534604696', modeStr);
    formData.append('entry.695903918', playCount);
    formData.append('entry.80945765', reflection);

    try {
        // Googleのサーバーに直接POST送信
        await fetch(postUrl, {
            method: 'POST',
            mode: 'no-cors', // クロスドメイン制限を回避する魔法のオプション
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: formData.toString()
        });

        // no-corsモードは成功を検知できない仕様のため、送信を試みたら成功とみなす
        showMsg("🚀 成績と内省を先生に送信しました！");
        closeReflectionModal();
        
        // 提出ボタンを隠す（2重送信防止）
        if(document.getElementById('submitScoreTriggerBtn')) {
            document.getElementById('submitScoreTriggerBtn').classList.add('hidden');
        }
    } catch (error) {
        alert("⚠️ 送信に失敗しました。電波の良いところで再度お試しください。");
    } finally {
        finalSubmitBtn.disabled = false;
        finalSubmitBtn.innerHTML = "<span>🚀</span> この内容で送信する";
    }
}