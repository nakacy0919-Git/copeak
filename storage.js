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
        document.getElementById('customJpn').value = lesson.jpn || "";
        const formUrlInput = document.getElementById('customFormUrl');
        if (formUrlInput) formUrlInput.value = lesson.formUrl || "";
        
        // セキュリティ上、ファイルinputは空にしておきます
        document.getElementById('customAudio').value = "";
        const memoInput = document.getElementById('customMemoImage');
        if(memoInput) memoInput.value = "";
        
        // 🌟 追加：教材のタイプによってUIを切り替えてデータを流し込む
        if (lesson.type === 'dialogue') {
            if (typeof toggleMaterialType === 'function') toggleMaterialType('dialogue');
            const container = document.getElementById('dialogueLinesContainer');
            if (container) {
                container.innerHTML = ''; // 入力枠を一旦リセット
                if (lesson.dialogue && lesson.dialogue.length > 0) {
                    lesson.dialogue.forEach(d => {
                        if (typeof addDialogueLine === 'function') addDialogueLine(d.speaker, d.text);
                    });
                } else {
                    if (typeof addDialogueLine === 'function') { addDialogueLine('A', ''); addDialogueLine('B', ''); }
                }
            }
        } else {
            if (typeof toggleMaterialType === 'function') toggleMaterialType('standard');
            document.getElementById('customEng').value = lesson.eng || "";
        }
        
        // 🌟 追加：メモ画像を読み込んでプレビュー表示する
        const memoPreview = document.getElementById('memoImagePreview');
        const imageMark = document.getElementById('imageRegisteredMark');
        if (lesson.memoImage) {
            window.currentMemoImageBase64 = lesson.memoImage;
            if (memoPreview) {
                memoPreview.src = lesson.memoImage;
                memoPreview.classList.remove('hidden');
            }
            if (imageMark) imageMark.classList.remove('hidden');
        } else {
            window.currentMemoImageBase64 = null;
            if (memoPreview) {
                memoPreview.src = "";
                memoPreview.classList.add('hidden');
            }
            if (imageMark) imageMark.classList.add('hidden');
        }
        
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
            if (lesson.audioBlob) {
                audioMark.classList.remove('hidden');
            } else {
                audioMark.classList.add('hidden');
            }
        }
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (typeof showMsg === 'function') showMsg("✏️ 編集モードに入りました（既存の音声や画像は保持されています）");
    };
}

function cancelEdit(isSilent = false) {
    document.getElementById("customMaterialForm").reset();
    document.getElementById('customAudio').value = ""; 
    
    // 🌟 追加：画像プレビューと保存データのクリア
    const memoInput = document.getElementById('customMemoImage');
    if(memoInput) memoInput.value = "";
    window.currentMemoImageBase64 = null;
    const memoPreview = document.getElementById('memoImagePreview');
    if (memoPreview) {
        memoPreview.src = "";
        memoPreview.classList.add('hidden');
    }
    const imageMark = document.getElementById('imageRegisteredMark');
    if (imageMark) imageMark.classList.add('hidden');

    editingLessonId = null;

    // 🌟 追加：キャンセル時は標準モードに戻す
    if (typeof toggleMaterialType === 'function') toggleMaterialType('standard');

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
    const jpnText = document.getElementById("customJpn").value.trim();
    const formUrl = document.getElementById("customFormUrl")?.value.trim() || "";
    const audioFile = document.getElementById("customAudio").files[0];
    
    const langSelect = document.getElementById("customLang");
    const selectedLang = langSelect.value;
    const selectedLangName = langSelect.options[langSelect.selectedIndex].text;

    // 🌟 追加：モードに応じてデータを取得する
    let engText = "";
    let lessonType = window.currentMaterialType || 'standard';
    let dialogueData = [];

    if (lessonType === 'standard') {
        engText = document.getElementById("customEng").value.trim();
        if (!title || !engText) {
            if (typeof showMsg === 'function') showMsg("⚠️ タイトルとテキストは必須です");
            return;
        }
    } else {
        // 会話文モードの場合
        const speakers = document.querySelectorAll('.dialogue-speaker');
        const texts = document.querySelectorAll('.dialogue-text');
        for (let i = 0; i < speakers.length; i++) {
            const spk = speakers[i].value.trim();
            const txt = texts[i].value.trim();
            if (spk || txt) {
                dialogueData.push({ speaker: spk, text: txt });
                // リストのプレビュー表示用にテキストを結合しておく
                engText += `${spk ? spk + ': ' : ''}${txt} `; 
            }
        }
        if (!title || dialogueData.length === 0) {
            if (typeof showMsg === 'function') showMsg("⚠️ タイトルと少なくとも1つのセリフが必要です");
            return;
        }
    }

    const transaction = db.transaction([storeName], "readwrite");
    const store = transaction.objectStore(storeName);

    if (editingLessonId) {
        const getReq = store.get(editingLessonId);
        getReq.onsuccess = () => {
            const lesson = getReq.result;
            lesson.title = title;
            lesson.eng = engText; // リスト表示用
            lesson.jpn = jpnText;
            lesson.formUrl = formUrl || null;
            lesson.lang = selectedLang;
            lesson.langName = selectedLangName;
            
            // 🌟 追加：会話文データとメモ画像を保存
            lesson.type = lessonType;
            lesson.dialogue = dialogueData;
            lesson.memoImage = window.currentMemoImageBase64 || null; 
            
            if (audioFile) lesson.audioBlob = audioFile;
            
            store.put(lesson);
            finishSaveProcess(transaction, "✅ 教材を更新しました！");
        };
    } else {
        const lessonData = {
            title: title, 
            eng: engText, // リスト表示用
            jpn: jpnText,
            formUrl: formUrl || null,
            audioBlob: audioFile || null,
            lang: selectedLang, 
            langName: selectedLangName,
            type: lessonType, // 教材の種類
            dialogue: dialogueData, // 会話データ
            memoImage: window.currentMemoImageBase64 || null, // 🌟 追加：メモ画像
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
            // 🌟 画像アイコンも表示するように追加
            const hasImageIcon = lesson.memoImage ? '<span class="bg-purple-50 text-purple-600 px-2 py-1 rounded-sm ml-1">🖼️</span>' : '';
            
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
                            ${hasImageIcon}
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
                        ${hasImageIcon}
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

async function checkUrlParameters() {
    const urlParams = new URLSearchParams(window.location.search);

    // ★ Quick Share: ?l=XXXXXXXXXX
    if (urlParams.has('l')) {
        const shareId = urlParams.get('l')?.trim();
        if (!shareId) return;

        try {
            // まず端末内に同じQuick Share教材があるか確認
            const lessons = await new Promise((resolve, reject) => {
                const tx = db.transaction([storeName], "readonly");
                const req = tx.objectStore(storeName).getAll();
                req.onsuccess = () => resolve(req.result);
                req.onerror = () => reject(req.error);
            });

            const existingLesson = lessons.find(lesson => lesson.sourceShareId === shareId);

            // すでに保存済みならAppwriteへアクセスしない
            if (existingLesson) {
                window.history.replaceState({}, document.title, window.location.pathname);
                if (typeof showMsg === 'function') showMsg("このQuick Share教材はすでにLibraryにあります");
                startCustomLesson(existingLesson);
                return;
            }

            if (typeof window.fetchQuickShareLesson !== 'function') {
                throw new Error("quickshare_not_ready");
            }

            // Appwriteから取得
            const result = await window.fetchQuickShareLesson(shareId);

            // quickshare.jsが { ok:false, reason:"..." } を返す場合
            if (result?.ok === false) {
                throw new Error(result.reason || "quickshare_failed");
            }

            // { ok:true, lesson:{...} } と lesson直返しの両方に対応
            const cloudLesson = result?.lesson || result;
            if (!cloudLesson) throw new Error("not_found");

            // Dialogue復元
            let dialogueData = [];
            if (cloudLesson.dialogueJson) {
                try {
                    dialogueData = JSON.parse(cloudLesson.dialogueJson);
                } catch (e) {
                    console.error("Dialogue parse error", e);
                }
            } else if (Array.isArray(cloudLesson.dialogue)) {
                dialogueData = cloudLesson.dialogue;
            }

            const newLessonData = {
                title: "🔗 " + (cloudLesson.title || "Shared Lesson"),
                eng: cloudLesson.eng || "",
                jpn: cloudLesson.jpn || "",
                audioBlob: null,
                audioUrl: null,
                lang: cloudLesson.lang || "en-US",
                langName: "🌐 Shared Material",
                formUrl: cloudLesson.formUrl || null,
                type: cloudLesson.type || "standard",
                dialogue: dialogueData,
                memoImage: null,
                sourceShareId: shareId,
                history: [],
                createdAt: Date.now()
            };

            // IndexedDBへ保存
            const newId = await new Promise((resolve, reject) => {
                const tx = db.transaction([storeName], "readwrite");
                const req = tx.objectStore(storeName).add(newLessonData);
                req.onsuccess = e => resolve(e.target.result);
                req.onerror = () => reject(req.error);
            });

            newLessonData.id = newId;

            // URLから ?l=... を消す
            window.history.replaceState({}, document.title, window.location.pathname);

            if (typeof showMsg === 'function') {
                showMsg("📥 Quick Share教材をLibraryに追加しました！");
            }

            loadSavedLessons();
            startCustomLesson(newLessonData);

        } catch (e) {
            console.error("Quick Share receive error:", e);

            const errorText = `${e?.message || ""} ${e?.reason || ""}`.toLowerCase();

            let message = "Quick Share教材を読み込めませんでした";

            if (errorText.includes("expired")) {
                message = "このQuick Shareリンクは期限切れです";
            } else if (
                errorText.includes("not_found") ||
                errorText.includes("not found")
            ) {
                message = "共有教材が見つかりません";
            }

            if (typeof showMsg === 'function') showMsg(message);
        }

        return;
    }

    // ★ Classic Share: ここから下は従来機能
    if (urlParams.has('eng')) {
        const title = urlParams.get('title') || 'Shared Lesson';
        const engText = urlParams.get('eng');
        const lang = urlParams.get('lang') || 'en-US';
        const formUrl = urlParams.get('form') || null;
        const audioUrl = urlParams.get('audioUrl') || null;
        const jpnText = urlParams.get('jpn') || "先生からの共有教材です。";

        const lessonType = urlParams.get('type') || 'standard';
        let dialogueData = [];

        if (urlParams.has('dialogue')) {
            try {
                dialogueData = JSON.parse(urlParams.get('dialogue'));
            } catch(e) {
                console.error("Dialogue parse error");
            }
        }

        window.history.replaceState({}, document.title, window.location.pathname);

        const transaction = db.transaction([storeName], "readwrite");
        const store = transaction.objectStore(storeName);
        const request = store.getAll();

        request.onsuccess = () => {
            const lessons = request.result;
            const sharedTitle = "🔗 " + title;
            const existingLesson = lessons.find(
                l => l.title === sharedTitle && l.eng === engText
            );

            if (existingLesson) {
                existingLesson.formUrl = formUrl;
                if (audioUrl) existingLesson.audioUrl = audioUrl;
                if (urlParams.has('jpn')) existingLesson.jpn = jpnText;

                existingLesson.type = lessonType;
                if (dialogueData.length > 0) {
                    existingLesson.dialogue = dialogueData;
                }

                store.put(existingLesson);

                if (typeof showMsg === 'function') {
                    showMsg("この共有教材はすでにLibraryにあります");
                }

                startCustomLesson(existingLesson);

            } else {
                const newLessonData = {
                    title: sharedTitle,
                    eng: engText,
                    jpn: jpnText,
                    audioBlob: null,
                    audioUrl: audioUrl,
                    lang: lang,
                    langName: "🌐 Shared Material",
                    formUrl: formUrl,
                    type: lessonType,
                    dialogue: dialogueData,
                    memoImage: null,
                    history: [],
                    createdAt: Date.now()
                };

                const addReq = store.add(newLessonData);

                addReq.onsuccess = e => {
                    newLessonData.id = e.target.result;

                    if (typeof showMsg === 'function') {
                        showMsg("📥 共有教材をLibraryに追加しました！");
                    }

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
            title: "🍎 (sample) Steve Jobs - Stanford Speech",
            eng: "I am honored to be with you today at your commencement from one of the finest universities in the world. I never graduated from college. Truth be told, this is the closest I've ever gotten to a college graduation. Today I want to tell you three stories from my life. That's it. No big deal. Just three stories.",
            jpn: "本日は、世界最高峰の大学の一つである皆さんの卒業式に同席でき、大変光栄に思います。私は大学を卒業したことがありません。実を言うと、これが私にとって最も大学の卒業式に近づいた瞬間です。今日は、私の人生から3つの物語をお話ししたいと思います。それだけです。大したことではありません。ただの3つの物語です。",
            lang: "en-US",
            langName: "🇺🇸 English (US)",
            audioPath: './audio/jobs.mp3', // 後でダウンロードするファイルの場所
            history: [],
            createdAt: Date.now()
        },
        {
            title: "🕊️ (sample) Malala Yousafzai - UN Speech",
            eng: "On the 9th of October 2012, the Taliban shot me on the left side of my forehead. They shot my friends too. They thought that the bullets would silence us. But they failed.",
            jpn: "2012年10月9日、タリバンは私の額の左側を撃ちました。私の友人たちも撃たれました。彼らは銃弾で私たちを沈黙させられると考えたのです。しかし、彼らは失敗しました。",
            lang: "en-US",
            langName: "🇺🇸 English (US)",
            audioPath: './audio/malala.mp3',
            history: [],
            createdAt: Date.now() - 1000 
        },
        {
            title: "🌍 (sample) Introduction to SDGs",
            eng: "The Sustainable Development Goals are a call for action by all countries to promote prosperity while protecting the planet. They recognize that ending poverty must go hand-in-hand with strategies that build economic growth and address a range of social needs including education, health, social protection, and job opportunities, while tackling climate change and environmental protection.",
            jpn: "持続可能な開発目標（SDGs）は、地球を保護しながら繁栄を促進するための、すべての国による行動への呼びかけです。貧困を終わらせるには、気候変動や環境保護に取り組みながら、教育、健康、社会的保護、雇用の機会など、さまざまな社会的ニーズに対処し、経済成長を構築する戦略と連携しなければならないことを認識しています。",
            lang: "en-US",
            langName: "🇺🇸 English (US)",
            audioPath: './audio/sdgs.mp3',
            history: [],
            createdAt: Date.now() - 2000
        },
        {
            title: "☀️ (sample) The North Wind and the Sun",
            eng: "The North Wind and the Sun had a quarrel about which of them was the stronger. While they were disputing with much heat and bluster, a Traveler passed along the road wrapped in a cloak.",
            jpn: "北風と太陽が、どちらが強いかで言い争いをしていました。彼らが熱く激しく議論していると、マントに包まった旅人が道を通りかかりました。",
            lang: "en-US",
            langName: "🇺🇸 English (US)",
            audioPath: './audio/northwind.mp3',
            history: [],
            createdAt: Date.now() - 3000
        },
        {
            id: "arena-task-taylor-01",
            title: "🏆 (NCC課題) Taylor Swift NYU Speech 2022",
            eng: `My experience has been that my mistakes led to the best things in my life. And being embarrassed when you mess up is part of the human experience. Getting back up, dusting yourself off, and seeing who still wants to hang out with you afterwards and laugh about it, that's a gift. The times I was told no, or wasn't included, wasn't chosen, didn't win, didn't make the cut... looking back, it really feels like those moments were as important, if not more crucial, than the moments I was told yes. I'm trying to tell you that losing things doesn't just mean losing. A lot of the time when we lose things, we gain things too.\n\nSometimes the right thing to do is to throw out the old schools of thought in the name of progress and reform. Sometimes the right thing to do is to sit and listen to the wisdom of those who have come before us. How will you know what the right choice is in these crucial moments? You won't. How do I give advice to this many people about their life choices? I won't. The scary news is you're on your own now. But the cool news is you're on your own now.\n\nI leave you with this: We are led by our gut instincts, our intuition, our desires and fears, our scars and our dreams. And you will screw it up sometimes. So will I. And when I do, you will most likely read about it on the internet anyway. Hard things will happen to us. We will recover. We will learn from it. We will grow more resilient because of it. And as long as we are fortunate enough to be breathing, we will breathe in, breathe through, breathe deep, and breathe out.`,
            jpn: `私の経験上、間違いが人生の最高の物事につながりました。失敗して恥ずかしい思いをすることは、人間の経験の一部です。立ち上がり、土埃を払い落とし、その後でも誰が自分と一緒にいて笑い合ってくれるかを確認すること、それは神様からの贈り物です。私が「ノー」と言われたとき、仲間に入れてもらえなかったとき、選ばれなかったとき、勝てなかったとき、合格しなかったとき…振り返ってみると、そうした瞬間は、「イエス」と言われた瞬間と同じくらい、あるいはそれ以上に重要だったと心から感じます。私が伝えたいのは、失うことは単に失うことだけを意味しないということです。多くの場合、私たちは何かを失うとき、同時に何かを得ているのです。\n\n進歩と改革の名の下に、古い考え方を捨てるのが正しいこともあります。また、先人たちの知恵に腰を下ろして耳を傾けるのが正しいこともあります。このような重要な瞬間に、どうやって正しい選択が分かるのでしょうか？ 分かりません。こんなに多くの人たちの人生の選択について、どうやってアドバイスをすればいいのでしょうか？ しません。怖いお知らせは、皆さんはもう自分一人だということです。でも、素晴らしいお知らせは、皆さんはもう自分一人だということです。\n\n最後にこの言葉を残します。私たちは、直感や直観、欲望や恐れ、傷跡や夢に導かれています。そして、皆さんも時に失敗するでしょう。私も失敗します。そして私が失敗したときは、どうせ皆さんはインターネットでそれを読むことになるでしょう。私たちにはつらいことも起こります。しかし、私たちは立ち直ります。そこから学びます。そこからさらに強い回復力を身につけます。そして、息をする幸運に恵まれている限り、私たちは息を吸い、息を通し、深く息をし、そして息を吐きます。`,
            lang: "en-US",
            langName: "🇺🇸 English (US)",
            audioPath: "taylor.mp3", 
            history: [],
            createdAt: Date.now()
        },
        {
            title: "🗣️ (sample) Conversation: New Job",
            type: "dialogue", 
            eng: "Nick: How's the new job going, Mackenzie? Mackenzie: I'm finding it hard, actually. Nick: Are things hectic there? Mackenzie: Not really. The workload's probably lighter than in my last job. It's the overall atmosphere that's the problem. Nick: What's wrong with it? Mackenzie: Everyone's extremely competitive, and there's constant tension between teams, especially among the managers. Nick: That sounds tough.",
            jpn: "ニック: 新しい仕事の調子はどう、マッケンジー？\nマッケンジー: 実は、結構大変なんだよね。\nニック: あちこちバタバタして忙しい感じ？\nマッケンジー: いや、そうでもないかな。仕事量はたぶん前の仕事より少ないくらい。問題なのは、全体の雰囲気なんだ。\nニック: 雰囲気の何が悪いの？\nマッケンジー: みんなものすごく競争心が強くて、チーム間に常に緊張感があるんだよ。特にマネージャーたちの間でね。\nニック: それはきつそうだね。",
            lang: "en-US",
            langName: "🇺🇸 English (US)",
            audioPath: './audio/conversation.mp3', 
            dialogue: [
                { speaker: "Nick", text: "How's the new job going, Mackenzie?" },
                { speaker: "Mackenzie", text: "I'm finding it hard, actually." },
                { speaker: "Nick", text: "Are things hectic there?" },
                { speaker: "Mackenzie", text: "Not really. The workload's probably lighter than in my last job. It's the overall atmosphere that's the problem." },
                { speaker: "Nick", text: "What's wrong with it?" },
                { speaker: "Mackenzie", text: "Everyone's extremely competitive, and there's constant tension between teams, especially among the managers." },
                { speaker: "Nick", text: "That sounds tough." }
            ],
            history: [],
            createdAt: Date.now() - 5000 
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
