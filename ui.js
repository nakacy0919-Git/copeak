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
// ★修正: 共有リンク生成機能 (短縮APIを廃止し、安全な直接リンクをコピー)
// ==========================================
async function generateShareLink() {
    if (!currentCustomLesson) return;
    
    const baseUrl = window.location.origin + window.location.pathname;
    
    const paramsConfig = {
        title: currentCustomLesson.title.replace('🔗 ', ''),
        eng: currentCustomLesson.eng,
        lang: currentCustomLesson.lang || 'en-US'
    };

    const savedFormUrl = localStorage.getItem('copeak_teacher_form_url');
    if (savedFormUrl) {
        paramsConfig.form = savedFormUrl;
    }
    
    const params = new URLSearchParams(paramsConfig);
    const longUrl = `${baseUrl}?${params.toString()}`;
    
    try {
        // 安全に長いURLをそのままクリップボードにコピー
        await navigator.clipboard.writeText(longUrl);
        
        if (typeof showMsg === 'function') {
            if (savedFormUrl) {
                showMsg("🔗 【成績送信付き】リンクをコピーしました！");
            } else {
                showMsg("🔗 リンクをコピーしました！");
            }
        }
    } catch (err) {
        if (typeof showMsg === 'function') showMsg("⚠️ リンクのコピーに失敗しました");
    }
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
    // ★修正: index.htmlの正しいID (bigAccValue, bigWpmValue) に合わせました
    const scoreText = document.getElementById('bigAccValue') ? document.getElementById('bigAccValue').innerText : '--%';
    const wpmText = document.getElementById('bigWpmValue') ? document.getElementById('bigWpmValue').innerText : '--';
    
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
        if (typeof showMsg === 'function') showMsg("⚠️ 振り返りを入力してください");
        return;
    }

    const finalSubmitBtn = document.getElementById('finalSubmitBtn');
    finalSubmitBtn.disabled = true;
    finalSubmitBtn.innerHTML = "⏳ 送信中...";

    // index.htmlの正しいIDからデータを抽出
    const accuracy = document.getElementById('bigAccValue') ? document.getElementById('bigAccValue').innerText.replace('%', '') : '0';
    const wpm = document.getElementById('bigWpmValue') ? document.getElementById('bigWpmValue').innerText : '0';
    const comp = document.getElementById('bigCompValue') ? document.getElementById('bigCompValue').innerText.replace('%', '') : '0';
    const playCount = currentCustomLesson.history ? currentCustomLesson.history.length : 1;

    let modeStr = 'Read';
    if (currentMode === 'shadowing') modeStr = 'Shadowing';
    if (currentMode === 'memo') modeStr = 'Vanish';
    if (currentMode === 'paced') modeStr = 'Paced';

    // ★追加: 現在開いている教材のタイトルを取得し、共有マーク(🔗 )があれば綺麗に取り除く
    const lessonTitle = currentCustomLesson.title.replace('🔗 ', '');

    // 不要なパラメータ(?usp=...)を切り捨てて、純粋な受信用URLを作る
    let cleanFormUrl = currentCustomLesson.formUrl.split('?')[0]; 
    let postUrl = cleanFormUrl.replace('/viewform', '/formResponse');

    // 固有のentry.IDをマッピング（新しい教材名用のIDを追加）
    const formData = new URLSearchParams();
    formData.append('entry.755665088', profile.class);
    formData.append('entry.70481568', profile.number);
    formData.append('entry.1056156063', profile.name);
    formData.append('entry.1259267878', lessonTitle); // ★新設された「教材名」欄にタイトルを自動注入！
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
        if (typeof showMsg === 'function') showMsg("🚀 成績と内省を先生に送信しました！");
        closeReflectionModal();
        
        // 提出ボタンを隠す（2重送信防止）
        const triggerBtn = document.getElementById('submitScoreTriggerBtn');
        if(triggerBtn) triggerBtn.classList.add('hidden');
        
    } catch (error) {
        alert("⚠️ 送信に失敗しました。電波の良いところで再度お試しください。");
    } finally {
        finalSubmitBtn.disabled = false;
        finalSubmitBtn.innerHTML = "<span>🚀</span> この内容で送信する";
    }
}

// ==========================================
// ★追加: 先生用設定 (フォームURL) の保存と読み込み
// ==========================================

// ページ読み込み時に、保存されているフォームURLを復元する
window.addEventListener('DOMContentLoaded', () => {
    const savedFormUrl = localStorage.getItem('copeak_teacher_form_url');
    const inputEl = document.getElementById('teacherFormUrlInput');
    if (savedFormUrl && inputEl) {
        inputEl.value = savedFormUrl;
    }
});

// 保存ボタンが押されたときの処理
function saveTeacherFormUrl() {
    const inputUrl = document.getElementById('teacherFormUrlInput').value.trim();
    
    if (inputUrl === "") {
        // 空欄で保存した場合は登録解除
        localStorage.removeItem('copeak_teacher_form_url');
        if (typeof showMsg === 'function') showMsg("🗑️ 成績回収フォームの登録を解除しました");
        return;
    }

    if (!inputUrl.includes('docs.google.com/forms/')) {
        alert("⚠️ 正しいGoogleフォームのURLを入力してください。");
        return;
    }

    // ローカルストレージに保存
    localStorage.setItem('copeak_teacher_form_url', inputUrl);
    if (typeof showMsg === 'function') showMsg("✅ 成績回収フォームのURLを保存しました！");
}
// ==========================================
// ★追加: 教員モード (Teacher Mode) の制御
// ==========================================

// ページ読み込み時に状態を復元（先生の端末は常にオンにしておくため）
window.addEventListener('DOMContentLoaded', () => {
    const isTeacherMode = localStorage.getItem('copeak_teacher_mode') === 'true';
    const area = document.getElementById('teacherModeArea');
    if (area) {
        area.style.display = isTeacherMode ? 'flex' : 'none';
    }
});

// フッターの秘密のボタンが押されたときの処理
function toggleTeacherMode() {
    const area = document.getElementById('teacherModeArea');
    if (!area) return;

    if (area.style.display === 'none' || area.style.display === '') {
        // パスワードの代わりに、確認アラートで生徒の誤操作を防ぐ
        const confirmOpen = confirm("教員用の教材作成・設定メニューを開きますか？\n（生徒には操作させないでください）");
        if (confirmOpen) {
            area.style.display = 'flex';
            localStorage.setItem('copeak_teacher_mode', 'true');
            if (typeof showMsg === 'function') showMsg("🔓 教員モードをオンにしました");
        }
    } else {
        area.style.display = 'none';
        localStorage.setItem('copeak_teacher_mode', 'false');
        if (typeof showMsg === 'function') showMsg("🔒 教員モードをオフにしました（生徒用画面）");
    }
}

// ==========================================
// ★追加: オープニング スプラッシュスクリーン (音声なし・豪華アニメーション完全版)
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    // 1. アニメーション用のCSSを裏側で生成して追加
    const style = document.createElement('style');
    style.innerHTML = `
        /* 全体の登場・ワープアニメーション */
        @keyframes splashEntrance {
            0% { opacity: 0; transform: translateY(40px) scale(0.9); filter: blur(10px); }
            100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        @keyframes warpExit {
            0% { transform: scale(1); opacity: 1; filter: blur(0); }
            20% { transform: scale(0.95); opacity: 1; filter: blur(0); } /* 一瞬引くタメ */
            100% { transform: scale(6); opacity: 0; filter: blur(20px); visibility: hidden; } /* 手前にワープ */
        }
        .animate-splash-entrance {
            animation: splashEntrance 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) 0.1s forwards;
        }
        .warp-animation {
            animation: warpExit 1.2s cubic-bezier(0.7, 0, 0.2, 1) forwards;
            pointer-events: none;
        }

        /* 先生ご指定のテキストアニメーション */
        .mach-anim-text {
            display: inline-block;
            font-size: 2rem; /* スマホでもはみ出さないサイズに微調整 */
            font-weight: 900;
            color: white;
            position: relative;
            font-family: 'Lora', serif; /* Copeakのブランドフォントに合わせる */
            text-shadow: 0 4px 15px rgba(0,0,0,0.5);
        }
        @media (min-width: 768px) {
            .mach-anim-text { font-size: 3rem; } /* PCでは大きく */
        }
        .mach-anim-text span {
            display: inline-block;
            animation: mach-text-fade-up 1s cubic-bezier(0.2, 0.8, 0.2, 1) both;
            /* スプラッシュ全体の登場を少し待ってから文字を出し始める (+0.5s) */
            animation-delay: calc(0.5s + (var(--char-index) * 0.05s));
        }
        @keyframes mach-text-fade-up {
            0% { opacity: 0; transform: translateY(20px); filter: blur(5px); }
            100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
    `;
    document.head.appendChild(style);

    // 2. スプラッシュ画面のHTML要素を裏側で組み立てる
    const splash = document.createElement('div');
    splash.id = 'dynamicSplashScreen';
    splash.className = 'fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden transition-colors duration-1000';
    splash.style.background = 'radial-gradient(circle at center, #0f172a 0%, #020617 100%)';
    
    splash.innerHTML = `
        <div class="absolute inset-0 z-0 flex items-center justify-center opacity-40 pointer-events-none">
            <div class="w-[40rem] h-[40rem] bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div class="absolute w-[30rem] h-[30rem] bg-blue-500/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
        </div>

        <div id="splashContent" class="relative z-10 flex flex-col items-center opacity-0 animate-splash-entrance">
            <img src="logo.png" alt="Copeak Logo" class="w-40 md:w-56 mb-4 drop-shadow-2xl">
            
            <p class="text-emerald-400 font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-6 opacity-80">English Shadowing Platform</p>
            
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

    // 3. ボタンを押した時の「吸い込まれる」処理（音声なし）
    document.getElementById('enterCopeakBtn').addEventListener('click', () => {
        // ワープアニメーションを発動
        splash.classList.add('warp-animation');
        
        // 1.2秒後（吸い込まれ終わった後）に、この画面自体を完全に消去して軽くする
        setTimeout(() => {
            splash.remove();
        }, 1200);
    });
});
// ==========================================
// ★追加: フルスクリーン予行練習機能 (動的生成版・スクロール完璧対応)
// ==========================================
let fsAiUtterance = null;
let isFsAudioPlaying = false;

function openFullscreenPreview() {
    if (!currentCustomLesson) return;
    
    // 1. もし古いHTMLの残骸があれば完全に破壊（重複バグの絶対防止）
    const oldOverlay = document.getElementById('fullscreenPreviewOverlay');
    if (oldOverlay) oldOverlay.remove();

    // 2. JavaScriptが「完璧なフルスクリーン画面」をゼロから組み立てる
    const overlay = document.createElement('div');
    overlay.id = 'fullscreenPreviewOverlay';
    // PCでもiPadでも絶対に画面全体を覆い、スクロールを内包する最強CSS
    overlay.className = 'fixed top-0 left-0 w-full h-full z-[9999] bg-[#faf8f5] flex flex-col transition-all duration-300 opacity-0 overflow-hidden';
    
    overlay.innerHTML = `
        <div class="flex items-center justify-between p-4 md:p-6 border-b border-stone-200 bg-white shadow-sm shrink-0 z-10">
            <button onclick="closeFullscreenPreview()" class="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-stone-100 hover:bg-stone-300 text-stone-600 font-bold text-xl transition shadow-inner border border-stone-200">✕</button>
            <h2 id="fsTitleDisplay" class="text-base md:text-xl font-bold text-stone-800 serif-font truncate px-4 flex-1 text-center">Preview</h2>
            <div class="flex gap-2">
                <button id="fsAiVoiceBtn" onclick="toggleFsAIVoice()" class="px-3 md:px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs md:text-sm font-bold rounded-sm shadow-md transition flex items-center gap-1">🤖 <span class="hidden sm:inline">AI音声</span></button>
                <button id="fsOriginalAudioBtn" onclick="toggleFsOriginalAudio()" class="hidden px-3 md:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs md:text-sm font-bold rounded-sm shadow-md transition flex items-center gap-1">▶️ <span class="hidden sm:inline">お手本再生</span></button>
            </div>
        </div>
        
        <div class="flex-1 overflow-y-auto p-6 md:p-12 lg:p-20 relative z-0" style="-webkit-overflow-scrolling: touch;">
            <div id="fsEngContainer" class="text-2xl md:text-4xl leading-relaxed md:leading-[2.5] text-stone-800 font-medium serif-font max-w-5xl mx-auto"></div>
            <div id="fsJpnContainer" class="text-base md:text-xl text-stone-500 max-w-5xl mx-auto border-t-2 border-dashed border-stone-300 pt-8 mt-8 hidden leading-relaxed"></div>
            <div class="h-48 md:h-64 w-full shrink-0"></div> 
        </div>
    `;
    document.body.appendChild(overlay);

    // 3. データの流し込み
    document.getElementById('fsTitleDisplay').innerText = currentCustomLesson.title ? currentCustomLesson.title.replace('🔗 ', '') : 'Preview';
    
    const engText = (currentCustomLesson.eng || "").replace(/([.?!]["']?)\s+/g, "$1<br><br>");
    document.getElementById('fsEngContainer').innerHTML = engText;
    
    const jpnContainer = document.getElementById('fsJpnContainer');
    if (currentCustomLesson.jpn && currentCustomLesson.jpn.trim() !== "") {
        jpnContainer.innerHTML = currentCustomLesson.jpn.replace(/([。？！])\s*/g, "$1<br><br>");
        jpnContainer.classList.remove('hidden');
    } else {
        jpnContainer.classList.add('hidden');
    }
    
    const audioBtn = document.getElementById('fsOriginalAudioBtn');
    const audioPlayer = document.getElementById('audioPlayer');
    if (currentCustomLesson.audioBlob || (audioPlayer && audioPlayer.src && audioPlayer.src !== "" && !audioPlayer.src.endsWith(window.location.host + "/"))) {
        audioBtn.classList.remove('hidden');
    }
    
    // 4. 裏画面のスクロールをロックし、アニメーションでフワッと表示
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => {
        overlay.classList.remove('opacity-0');
        overlay.classList.add('opacity-100');
    });
}

function closeFullscreenPreview() {
    const overlay = document.getElementById('fullscreenPreviewOverlay');
    if (!overlay) return;
    
    // 音声の停止
    if (window.speechSynthesis.speaking) window.speechSynthesis.cancel();
    const audioPlayer = document.getElementById('audioPlayer');
    if (audioPlayer) audioPlayer.pause();
    isFsAudioPlaying = false;
    
    // アニメーションで消してから、DOM（裏側）から完全に消し去る
    overlay.classList.remove('opacity-100');
    overlay.classList.add('opacity-0');
    setTimeout(() => {
        overlay.remove(); 
        document.body.style.overflow = ''; // スクロールロック解除
    }, 300);
}

function toggleFsAIVoice() {
    if (!currentCustomLesson) return;
    const btn = document.getElementById('fsAiVoiceBtn');
    
    const audioPlayer = document.getElementById('audioPlayer');
    if (audioPlayer) {
        audioPlayer.pause();
        isFsAudioPlaying = false;
        document.getElementById('fsOriginalAudioBtn').innerHTML = '▶️ <span class="hidden sm:inline">お手本再生</span>';
    }

    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        btn.innerHTML = '🤖 <span class="hidden sm:inline">AI音声</span>';
        btn.classList.remove('bg-red-600', 'hover:bg-red-700');
        btn.classList.add('bg-purple-600', 'hover:bg-purple-700');
        return;
    }

    fsAiUtterance = new SpeechSynthesisUtterance(currentCustomLesson.eng);
    fsAiUtterance.lang = currentCustomLesson.lang || 'en-US';
    fsAiUtterance.rate = 0.9; 
    
    fsAiUtterance.onend = () => {
        btn.innerHTML = '🤖 <span class="hidden sm:inline">AI音声</span>';
        btn.classList.remove('bg-red-600', 'hover:bg-red-700');
        btn.classList.add('bg-purple-600', 'hover:bg-purple-700');
    };

    window.speechSynthesis.speak(fsAiUtterance);
    btn.innerHTML = '⏹ <span class="hidden sm:inline">AI停止</span>';
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
        aiBtn.innerHTML = '🤖 <span class="hidden sm:inline">AI音声</span>';
        aiBtn.classList.remove('bg-red-600', 'hover:bg-red-700');
        aiBtn.classList.add('bg-purple-600', 'hover:bg-purple-700');
    }

    if (isFsAudioPlaying) {
        audioPlayer.pause();
        btn.innerHTML = '▶️ <span class="hidden sm:inline">お手本再生</span>';
        btn.classList.remove('bg-red-600', 'hover:bg-red-700');
        btn.classList.add('bg-blue-600', 'hover:bg-blue-700');
        isFsAudioPlaying = false;
    } else {
        audioPlayer.play();
        btn.innerHTML = '⏹ <span class="hidden sm:inline">再生停止</span>';
        btn.classList.remove('bg-blue-600', 'hover:bg-blue-700');
        btn.classList.add('bg-red-600', 'hover:bg-red-700');
        isFsAudioPlaying = true;
        
        audioPlayer.onended = () => {
            btn.innerHTML = '▶️ <span class="hidden sm:inline">お手本再生</span>';
            btn.classList.remove('bg-red-600', 'hover:bg-red-700');
            btn.classList.add('bg-blue-600', 'hover:bg-blue-700');
            isFsAudioPlaying = false;
        };
    }
}