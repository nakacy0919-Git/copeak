// ==========================================
// storage.js: データのローカル保存 (IndexedDB) と管理
// ==========================================

const dbName = "CopeakDB";
const storeName = "CustomLessons";
let db;

// 現在学習中の教材データを保持するグローバル変数
let currentCustomLesson = null;

// 1. データベースの初期化
const initDB = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, 1);
        
        request.onupgradeneeded = (e) => {
            db = e.target.result;
            if (!db.objectStoreNames.contains(storeName)) {
                db.createObjectStore(storeName, { keyPath: "id", autoIncrement: true });
            }
        };
        
        request.onsuccess = (e) => {
            db = e.target.result;
            resolve();
        };
        
        request.onerror = (e) => {
            console.error("IndexedDB Error:", e);
            reject(e);
        };
    });
};

// 2. 新しい教材を保存する
async function saveCustomLesson() {
    const title = document.getElementById("customTitle").value.trim();
    const engText = document.getElementById("customEng").value.trim();
    const jpnText = document.getElementById("customJpn").value.trim();
    const audioFile = document.getElementById("customAudio").files[0];
    
    // 選択された言語のコードと表示名を取得
    const langSelect = document.getElementById("customLang");
    const selectedLang = langSelect.value;
    const selectedLangName = langSelect.options[langSelect.selectedIndex].text;

    // 入力チェック
    if (!title || !engText) {
        if (typeof showMsg === 'function') showMsg("⚠️ タイトルとテキストは必須です");
        return;
    }

    // 保存するデータの形
    const lessonData = {
        title: title,
        eng: engText,
        jpn: jpnText,
        audioBlob: audioFile || null,
        lang: selectedLang,         // 言語コード (例: en-US, id-ID, ne-NP)
        langName: selectedLangName, // 言語の表示名
        createdAt: new Date().getTime()
    };

    const transaction = db.transaction([storeName], "readwrite");
    const store = transaction.objectStore(storeName);
    store.add(lessonData);

    transaction.oncomplete = () => {
        if (typeof showMsg === 'function') showMsg("✅ 教材を端末に保存しました！");
        document.getElementById("customMaterialForm").reset();
        loadSavedLessons();
    };
}

// 3. 保存された教材一覧を読み込んで画面に表示する
function loadSavedLessons() {
    const transaction = db.transaction([storeName], "readonly");
    const store = transaction.objectStore(storeName);
    const request = store.getAll();

    request.onsuccess = () => {
        const lessons = request.result;
        // 新しい順（降順）に並び替え
        lessons.sort((a, b) => b.createdAt - a.createdAt);
        
        const listContainer = document.getElementById("savedLessonsList");
        listContainer.innerHTML = ""; 

        // データが0件の場合
        if (lessons.length === 0) {
            listContainer.innerHTML = `
                <div class="text-gray-500 text-center py-8 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                    <p class="mb-2 text-3xl">📂</p>
                    <p>まだ保存された教材はありません。</p>
                    <p class="text-sm mt-1">上のフォームから最初の教材を追加してみましょう！</p>
                </div>`;
            return;
        }

        // データがある場合はカード型のリストを生成
        lessons.forEach(lesson => {
            const date = new Date(lesson.createdAt).toLocaleDateString();
            const hasAudio = lesson.audioBlob ? '🎵 音声あり' : '📄 テキストのみ';
            const langDisplay = lesson.langName || '🇺🇸 英語 (アメリカ)'; // 古いデータ用のフォールバック
            
            const div = document.createElement("div");
            div.className = "p-4 bg-white border border-gray-200 hover:border-blue-400 rounded-xl cursor-pointer shadow-sm hover:shadow transition group flex justify-between items-center";
            
            div.innerHTML = `
                <div class="flex-1 overflow-hidden pr-4">
                    <h3 class="font-bold text-lg text-gray-800 group-hover:text-blue-600 truncate transition-colors">${lesson.title}</h3>
                    <p class="text-sm text-gray-500 truncate mt-1">${lesson.eng}</p>
                    <div class="flex gap-3 mt-2 text-xs font-semibold text-gray-400 items-center">
                        <span class="bg-gray-100 px-2 py-0.5 rounded text-gray-600">${langDisplay}</span>
                        <span>🗓 ${date}</span>
                        <span class="${lesson.audioBlob ? 'text-blue-500' : ''}">${hasAudio}</span>
                    </div>
                </div>
                <button onclick="deleteLesson(event, ${lesson.id})" class="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition" title="削除">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </button>
            `;
            
            div.onclick = (e) => {
                if(e.target.closest('button')) return;
                startCustomLesson(lesson);
            };
            
            listContainer.appendChild(div);
        });
    };
}

// 4. 教材を削除する
function deleteLesson(event, id) {
    event.stopPropagation(); 
    
    if(!confirm("本当にこの教材を削除しますか？")) return;
    
    const transaction = db.transaction([storeName], "readwrite");
    const store = transaction.objectStore(storeName);
    store.delete(id);
    
    transaction.oncomplete = () => {
        if (typeof showMsg === 'function') showMsg("🗑 教材を削除しました");
        loadSavedLessons(); 
    };
}

// 5. 学習をスタートするためのデータ引き渡し
function startCustomLesson(lesson) {
    currentCustomLesson = lesson; 
    
    if (typeof openLearningScreen === 'function') {
        openLearningScreen(lesson);
    }
}

// アプリ起動時の処理
window.addEventListener('DOMContentLoaded', async () => {
    try {
        await initDB(); 
        loadSavedLessons(); 
    } catch (e) {
        console.error("DB Initialization Failed", e);
        alert("エラー: お使いのブラウザはデータ保存機能(IndexedDB)に対応していないか、制限されています。");
    }
});