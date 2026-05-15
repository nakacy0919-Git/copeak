// ==========================================
// storage.js: データのローカル保存 (IndexedDB) と管理
// ==========================================

const dbName = "CopeakDB";
const storeName = "CustomLessons";
let db;
let currentCustomLesson = null;
let editingLessonId = null; 

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

function editLesson(event, id) {
    event.stopPropagation();
    const transaction = db.transaction([storeName], "readonly");
    const store = transaction.objectStore(storeName);
    const request = store.get(id);
    
    request.onsuccess = () => {
        const lesson = request.result;
        if (!lesson) return;
        
        document.getElementById('customTitle').value = lesson.title;
        document.getElementById('customLang').value = lesson.lang;
        document.getElementById('customEng').value = lesson.eng;
        document.getElementById('customJpn').value = lesson.jpn || "";
        
        // セキュリティ上、ファイルinputは空にしておきます
        document.getElementById('customAudio').value = "";
        
        editingLessonId = id;
        
        // ボタンとマークの表示を更新
        const btn = document.getElementById('saveMaterialBtn');
        const cancelBtn = document.getElementById('cancelEditBtn');
        const audioMark = document.getElementById('audioRegisteredMark');
        
        if(btn) {
            btn.innerHTML = "Update Material (更新)";
            btn.classList.replace('bg-emerald-800', 'bg-blue-600');
            btn.classList.replace('hover:bg-emerald-900', 'hover:bg-blue-700');
        }
        if(cancelBtn) {
            cancelBtn.classList.remove('hidden');
        }
        if(audioMark) {
            // 音声が既に存在する場合は、安心マークを表示！
            if (lesson.audioBlob) {
                audioMark.classList.remove('hidden');
            } else {
                audioMark.classList.add('hidden');
            }
        }
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (typeof showMsg === 'function') showMsg("✏️ 編集モードに入りました（既存の音声は保持されています）");
    };
}

function cancelEdit(isSilent = false) {
    document.getElementById("customMaterialForm").reset();
    document.getElementById('customAudio').value = ""; // ファイル選択状態もリセット
    editingLessonId = null;

    const btn = document.getElementById('saveMaterialBtn');
    const cancelBtn = document.getElementById('cancelEditBtn');
    const audioMark = document.getElementById('audioRegisteredMark');

    if(btn) {
        btn.innerHTML = "Save to Library";
        btn.classList.replace('bg-blue-600', 'bg-emerald-800');
        btn.classList.replace('hover:bg-blue-700', 'hover:bg-emerald-900');
    }
    if(cancelBtn) {
        cancelBtn.classList.add('hidden');
    }
    if(audioMark) {
        audioMark.classList.add('hidden');
    }

    if (!isSilent && typeof showMsg === 'function') {
        showMsg("キャンセルして新規作成モードに戻りました");
    }
}

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

    const transaction = db.transaction([storeName], "readwrite");
    const store = transaction.objectStore(storeName);

    if (editingLessonId) {
        const getReq = store.get(editingLessonId);
        getReq.onsuccess = () => {
            const lesson = getReq.result;
            lesson.title = title;
            lesson.eng = engText;
            lesson.jpn = jpnText;
            lesson.lang = selectedLang;
            lesson.langName = selectedLangName;
            
            // 新しい音声が選択された場合のみ上書き
            if (audioFile) lesson.audioBlob = audioFile;
            
            store.put(lesson);
            finishSaveProcess(transaction, "✅ 教材を更新しました！");
        };
    } else {
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
        store.add(lessonData);
        finishSaveProcess(transaction, "✅ 教材を保存しました！");
    }
}

function finishSaveProcess(transaction, msg) {
    transaction.oncomplete = () => {
        if (typeof showMsg === 'function') showMsg(msg);
        cancelEdit(true); 
        loadSavedLessons();
    };
}

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
                    <div class="flex flex-col md:flex-row gap-1">
                        <button onclick="editLesson(event, ${lesson.id})" class="p-2 md:p-3 text-stone-300 hover:text-blue-600 hover:bg-blue-50 rounded-sm transition" title="編集">
                            <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                        </button>
                        <button onclick="deleteLesson(event, ${lesson.id})" class="p-2 md:p-3 text-stone-300 hover:text-red-500 hover:bg-red-50 rounded-sm transition" title="削除">
                            <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                        </button>
                    </div>
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
    if(!confirm("本当にこの教材を削除しますか？\n（学習記録もすべて消去されます）")) return;
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

// ==========================================
// ★追加機能: 魔法のリンク (URLパラメータ) の受け取り処理
// ==========================================
function checkUrlParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('eng')) {
        const title = urlParams.get('title') || 'Shared Lesson';
        const engText = urlParams.get('eng');
        const lang = urlParams.get('lang') || 'en-US';

        // ブラウザのURLバーからパラメータを消す（リロード時の無限ループ追加を防止）
        window.history.replaceState({}, document.title, window.location.pathname);

        // データベースを開いて重複チェックと保存を行う
        const transaction = db.transaction([storeName], "readwrite");
        const store = transaction.objectStore(storeName);
        const request = store.getAll();

        request.onsuccess = () => {
            const lessons = request.result;
            const sharedTitle = "🔗 " + title;
            
            // 既に同じタイトルかつ同じ英文の教材がLibraryにあるかチェック
            const existingLesson = lessons.find(l => l.title === sharedTitle && l.eng === engText);

            if (existingLesson) {
                // すでに持っている場合は、それを開く
                if (typeof showMsg === 'function') showMsg("この共有教材はすでにLibraryにあります");
                startCustomLesson(existingLesson);
            } else {
                // 新しい教材としてデータベースに正式に追加！
                const newLessonData = {
                    title: sharedTitle, 
                    eng: engText, 
                    jpn: "先生からの共有教材です。", 
                    audioBlob: null,
                    lang: lang, 
                    langName: "🌐 Shared Material",
                    history: [], 
                    createdAt: new Date().getTime()
                };
                
                const addReq = store.add(newLessonData);
                addReq.onsuccess = (e) => {
                    newLessonData.id = e.target.result; // DBが割り振った新しいIDをセット
                    
                    if (typeof showMsg === 'function') showMsg("📥 共有教材をLibraryに追加しました！");
                    
                    loadSavedLessons(); 
                    startCustomLesson(newLessonData); 
                };
            }
        };
    }
}

// アプリ起動時の処理（URLチェックを最後に追加）
window.addEventListener('DOMContentLoaded', async () => {
    try { 
        await initDB(); 
        
        injectPresetLessons(); // ★追加：ここでサンプル教材の補充スイッチをオンにします！
        
        loadSavedLessons(); 
        checkUrlParameters(); // ← URLにデータがあればここで保存処理が走ります
    } 
    catch (e) { alert("エラー: 保存機能が利用できません。"); }
});

// ==========================================
// ★変更: 常にサンプルを表示する（足りないものだけ自動補充）
// ==========================================
async function injectPresetLessons() {
    // 1. まず現在のMy Libraryのデータをすべて取得する
    const getExistingLessons = () => {
        return new Promise((resolve) => {
            const tx = db.transaction([storeName], "readonly");
            const store = tx.objectStore(storeName);
            const req = store.getAll();
            req.onsuccess = () => resolve(req.result);
        });
    };

    const existingLessons = await getExistingLessons();

    // 2. 常に表示させたいサンプル教材のリスト
    const presetDataList = [
        {
            title: "🍎 Steve Jobs - Stanford Speech",
            eng: "I am honored to be with you today at your commencement from one of the finest universities in the world. I never graduated from college. Truth be told, this is the closest I've ever gotten to a college graduation. Today I want to tell you three stories from my life. That's it. No big deal. Just three stories.",
            jpn: "本日は、世界最高峰の大学の一つである皆さんの卒業式に同席でき、大変光栄に思います。私は大学を卒業したことがありません。実を言うと、これが私にとって最も大学の卒業式に近づいた瞬間です。今日は、私の人生から3つの物語をお話ししたいと思います。それだけです。大したことではありません。ただの3つの物語です。",
            lang: "en-US",
            langName: "🇺🇸 English (US)",
            audioPath: './audio/jobs.mp3', // 後でダウンロードするファイルの場所
            history: [],
            createdAt: Date.now()
        },
        {
            title: "🕊️ Malala Yousafzai - UN Speech",
            eng: "Dear friends, on the 9th of October 2012, the Taliban shot me on the left side of my forehead. They shot my friends too. They thought that the bullets would silence us. But they failed.",
            jpn: "親愛なる友人たちへ。2012年10月9日、タリバンは私の額の左側を撃ちました。私の友人たちも撃たれました。彼らは銃弾で私たちを沈黙させられると考えたのです。しかし、彼らは失敗しました。",
            lang: "en-US",
            langName: "🇺🇸 English (US)",
            audioPath: './audio/malala.mp3',
            history: [],
            createdAt: Date.now() - 1000 
        },
        {
            title: "🌍 Introduction to SDGs",
            eng: "The Sustainable Development Goals are a call for action by all countries to promote prosperity while protecting the planet. They recognize that ending poverty must go hand-in-hand with strategies that build economic growth and address a range of social needs including education, health, social protection, and job opportunities, while tackling climate change and environmental protection.",
            jpn: "持続可能な開発目標（SDGs）は、地球を保護しながら繁栄を促進するための、すべての国による行動への呼びかけです。貧困を終わらせるには、気候変動や環境保護に取り組みながら、教育、健康、社会的保護、雇用の機会など、さまざまな社会的ニーズに対処し、経済成長を構築する戦略と連携しなければならないことを認識しています。",
            lang: "en-US",
            langName: "🇺🇸 English (US)",
            audioPath: './audio/sdgs.mp3',
            history: [],
            createdAt: Date.now() - 2000
        },
        {
            title: "☀️ The North Wind and the Sun",
            eng: "The North Wind and the Sun had a quarrel about which of them was the stronger. While they were disputing with much heat and bluster, a Traveler passed along the road wrapped in a cloak.",
            jpn: "北風と太陽が、どちらが強いかで言い争いをしていました。彼らが熱く激しく議論していると、マントに包まった旅人が道を通りかかりました。",
            lang: "en-US",
            langName: "🇺🇸 English (US)",
            audioPath: './audio/northwind.mp3',
            history: [],
            createdAt: Date.now() - 3000
        }
    ];

    // 3. 現在のLibraryに「無い」サンプルだけを絞り込む（タイトルで判定）
    const presetsToAdd = presetDataList.filter(preset => 
        !existingLessons.some(lesson => lesson.title === preset.title)
    );

    // 全てのサンプルがすでに揃っている場合は、ここで処理を終了（無駄な通信を防ぐ）
    if (presetsToAdd.length === 0) return;

    // 4. 足りないサンプルの音声だけをダウンロード（Fetch）する
    const fetchAudioBlob = async (path) => {
        try {
            const response = await fetch(path);
            if (response.ok) return await response.blob();
            return null;
        } catch (e) {
            return null;
        }
    };

    for (let preset of presetsToAdd) {
        preset.audioBlob = await fetchAudioBlob(preset.audioPath);
        delete preset.audioPath; // IndexedDBに入れる前に不要なパス情報を消す
    }

    // 5. データの準備が整ったら、データベースに一気に追加保存する
    const writeTx = db.transaction([storeName], "readwrite");
    const writeStore = writeTx.objectStore(storeName);

    presetsToAdd.forEach(preset => writeStore.add(preset));
    
    writeTx.oncomplete = () => {
        loadSavedLessons(); // 画面を更新してサンプルを表示
        if (typeof showMsg === 'function') showMsg(`📚 サンプル教材を ${presetsToAdd.length} 件追加しました！`);
    };
}