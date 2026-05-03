// ==========================================
// storage.js: データのローカル保存 (IndexedDB) と管理
// ==========================================

const dbName = "CopeakDB";
const storeName = "CustomLessons";
let db;
let currentCustomLesson = null;

const initDB = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, 1);
        request.onupgradeneeded = (e) => {
            db = e.target.result;
            if (!db.objectStoreNames.contains(storeName)) {
                db.createObjectStore(storeName, { keyPath: "id", autoIncrement: true });
            }
        };
        request.onsuccess = (e) => { db = e.target.result; resolve(); };
        request.onerror = (e) => reject(e);
    });
};

async function saveCustomLesson() {
    const title = document.getElementById("customTitle").value.trim();
    const engText = document.getElementById("customEng").value.trim();
    const jpnText = document.getElementById("customJpn").value.trim();
    const audioFile = document.getElementById("customAudio").files[0];
    
    const langSelect = document.getElementById("customLang");
    const selectedLang = langSelect.value;
    const selectedLangName = langSelect.options[langSelect.selectedIndex].text;

    if (!title || !engText) {
        if (typeof showMsg === 'function') showMsg("⚠️ タイトルとテキストは必須です");
        return;
    }

    const lessonData = {
        title: title, 
        eng: engText, 
        jpn: jpnText,
        audioBlob: audioFile || null,
        lang: selectedLang, 
        langName: selectedLangName,
        history: [], 
        createdAt: new Date().getTime()
    };

    const transaction = db.transaction([storeName], "readwrite");
    const store = transaction.objectStore(storeName);
    store.add(lessonData);

    transaction.oncomplete = () => {
        if (typeof showMsg === 'function') showMsg("✅ 教材を保存しました！");
        document.getElementById("customMaterialForm").reset();
        loadSavedLessons();
    };
}

// ★変更: コールバック(onComplete)を受け取り、DB保存完了後にUI更新を行えるようにしました
function savePracticeLog(lessonId, logData, onComplete) {
    const transaction = db.transaction([storeName], "readwrite");
    const store = transaction.objectStore(storeName);
    const getReq = store.get(lessonId);
    
    getReq.onsuccess = () => {
        const lesson = getReq.result;
        if (!lesson.history) lesson.history = [];
        lesson.history.push(logData);
        lesson.lastPracticed = new Date().getTime(); 
        
        store.put(lesson);
        currentCustomLesson = lesson; 
        
        // 保存完了後にコールバック関数を実行
        if (onComplete) onComplete();
    };
}

function loadSavedLessons() {
    const transaction = db.transaction([storeName], "readonly");
    const store = transaction.objectStore(storeName);
    const request = store.getAll();

    request.onsuccess = () => {
        const lessons = request.result;
        lessons.sort((a, b) => b.createdAt - a.createdAt);
        
        const homeList = document.getElementById("savedLessonsList");
        const sidebarList = document.getElementById("sidebarLessonList");

        if (homeList) homeList.innerHTML = ""; 
        if (sidebarList) sidebarList.innerHTML = "";

        if (lessons.length === 0) {
            if (homeList) homeList.innerHTML = `<div class="text-gray-400 text-center py-10 bg-white rounded-2xl border border-dashed border-gray-300 col-span-full"><p class="text-4xl mb-2">📂</p><p class="font-bold">まだ教材がありません</p></div>`;
            if (sidebarList) sidebarList.innerHTML = `<p class="text-center text-sm text-gray-400 mt-4">空っぽです</p>`;
            return;
        }

        lessons.forEach(lesson => {
            const date = new Date(lesson.createdAt).toLocaleDateString();
            const hasAudioIcon = lesson.audioBlob ? '🎵' : '📄';
            const langDisplay = lesson.langName || '🇺🇸 English (US)';
            
            const playCount = lesson.history ? lesson.history.length : 0;
            const badgeHtml = playCount > 0 ? `<span class="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-[10px] font-black">★ ${playCount}回</span>` : '';

            if (homeList) {
                const homeCard = document.createElement("div");
                homeCard.className = "p-5 bg-white border border-gray-100 hover:border-emerald-700 rounded-sm cursor-pointer shadow-sm hover:shadow-md transition group flex justify-between items-center";
                homeCard.innerHTML = `
                    <div class="flex-1 overflow-hidden pr-4">
                        <div class="flex items-center gap-2">
                            <h3 class="font-extrabold text-lg text-stone-800 group-hover:text-emerald-800 truncate transition-colors">${lesson.title}</h3>
                            ${badgeHtml}
                        </div>
                        <p class="text-sm text-stone-400 truncate mt-1 font-medium">${lesson.eng}</p>
                        <div class="flex gap-2 mt-3 text-[11px] font-bold text-stone-500 items-center">
                            <span class="bg-stone-100 px-2 py-1 rounded-sm text-stone-600">${langDisplay.split(' ')[0]}</span>
                            <span class="bg-emerald-50 text-emerald-600 px-2 py-1 rounded-sm">${hasAudioIcon}</span>
                        </div>
                    </div>
                    <button onclick="deleteLesson(event, ${lesson.id})" class="p-3 text-stone-300 hover:text-red-500 hover:bg-red-50 rounded-sm transition" title="削除">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                `;
                homeCard.onclick = (e) => { if(!e.target.closest('button')) startCustomLesson(lesson); };
                homeList.appendChild(homeCard);
            }

            if (sidebarList) {
                const isActive = (currentCustomLesson && currentCustomLesson.id === lesson.id) ? "sidebar-active" : "";
                const sideCard = document.createElement("div");
                sideCard.className = `p-3 bg-white border border-stone-200 hover:border-emerald-700 rounded-sm cursor-pointer shadow-sm transition group ${isActive}`;
                sideCard.innerHTML = `
                    <div class="flex justify-between items-center">
                        <h4 class="font-bold text-sm text-stone-800 group-hover:text-emerald-800 truncate">${lesson.title}</h4>
                    </div>
                    <div class="flex gap-2 mt-1.5 text-[10px] font-bold text-stone-400 items-center">
                        <span class="bg-[#faf8f5] px-1.5 py-0.5 rounded-sm border border-stone-200">${langDisplay.split(' ')[0]}</span>
                        <span class="${lesson.audioBlob ? 'text-emerald-600' : ''}">${hasAudioIcon}</span>
                        ${playCount > 0 ? `<span class="text-yellow-600 ml-auto">★${playCount}</span>` : ''}
                    </div>
                `;
                sideCard.onclick = () => startCustomLesson(lesson);
                sidebarList.appendChild(sideCard);
            }
        });
    };
}

function deleteLesson(event, id) {
    event.stopPropagation(); 
    if(!confirm("本当にこの教材を削除しますか？")) return;
    const transaction = db.transaction([storeName], "readwrite");
    const store = transaction.objectStore(storeName);
    store.delete(id);
    transaction.oncomplete = () => { showMsg("🗑 削除しました"); loadSavedLessons(); };
}

function startCustomLesson(lesson) {
    currentCustomLesson = lesson; 
    loadSavedLessons(); 
    if (typeof openLearningScreen === 'function') openLearningScreen(lesson);
}

window.addEventListener('DOMContentLoaded', async () => {
    try { await initDB(); loadSavedLessons(); } 
    catch (e) { alert("エラー: 保存機能が利用できません。"); }
});