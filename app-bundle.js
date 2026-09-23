// ==========================================
// storage.js: データのローカル保存 (IndexedDB) と管理
// ==========================================

const dbName = "CopeakDB";
const storeName = "CustomLessons";
let db;
let currentCustomLesson = null;
let editingLessonId = null; 

const LIBRARY_FOLDERS_KEY = 'copeak_library_folders';
const UNFILED_FOLDER_ID = '__unfiled__';
const SAMPLE_FOLDER_ID = '__samples__';

let currentLibraryFolderId = null;
let pendingMoveLessonId = null;

function getLibraryFolders() {
    let folders = [];

    try {
        folders = JSON.parse(
            localStorage.getItem(LIBRARY_FOLDERS_KEY) || '[]'
        );

        if (!Array.isArray(folders)) folders = [];
    } catch (e) {
        folders = [];
    }

    // ★ Copeak標準のサンプルフォルダを必ず用意
    if (!folders.some(folder => folder.id === SAMPLE_FOLDER_ID)) {
        folders.unshift({
            id: SAMPLE_FOLDER_ID,
            name: 'サンプル教材',
            system: true
        });

        localStorage.setItem(
            LIBRARY_FOLDERS_KEY,
            JSON.stringify(folders)
        );
    }

    return folders;
}

function saveLibraryFolders(folders) {
    localStorage.setItem(LIBRARY_FOLDERS_KEY, JSON.stringify(folders));
}

function escapeLibraryHtml(text) {
    return String(text || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function createLibraryFolder() {
    const name = prompt('新しいフォルダ名を入力してください');
    if (!name || !name.trim()) return;

    const folders = getLibraryFolders();

    folders.push({
        id: `folder_${Date.now()}`,
        name: name.trim()
    });

    saveLibraryFolders(folders);
    currentLibraryFolderId = null;
    loadSavedLessons();
}

function openLibraryRoot() {
    currentLibraryFolderId = null;
    loadSavedLessons();
}

function openLibraryFolder(folderId) {
    currentLibraryFolderId = folderId;
    loadSavedLessons();
}

function renameLibraryFolder(event, folderId) {
    event.stopPropagation();

    const folders = getLibraryFolders();
    const folder = folders.find(f => f.id === folderId);
    if (!folder) return;

    const name = prompt('フォルダ名を変更', folder.name);
    if (!name || !name.trim()) return;

    folder.name = name.trim();
    saveLibraryFolders(folders);
    loadSavedLessons();
}

function deleteLibraryFolder(event, folderId) {
    event.stopPropagation();

    const folders = getLibraryFolders();
    const folder = folders.find(f => f.id === folderId);
    if (!folder) return;

    if (!confirm(`「${folder.name}」を削除しますか？\n中の教材は「未整理」へ移動します。`)) return;

    const tx = db.transaction([storeName], 'readwrite');
    const store = tx.objectStore(storeName);
    const req = store.getAll();

    req.onsuccess = () => {
        req.result.forEach(lesson => {
            if (lesson.folderId === folderId) {
                lesson.folderId = null;
                store.put(lesson);
            }
        });
    };

    tx.oncomplete = () => {
        saveLibraryFolders(folders.filter(f => f.id !== folderId));

        if (currentLibraryFolderId === folderId) {
            currentLibraryFolderId = null;
        }

        loadSavedLessons();
    };
}

function openMoveLessonModal(event, lessonId) {
    event.stopPropagation();

    pendingMoveLessonId = lessonId;

    const select = document.getElementById('moveLessonFolderSelect');
    const modal = document.getElementById('moveLessonModal');
    if (!select || !modal) return;

    const folders = getLibraryFolders();

    select.innerHTML =
        `<option value="">📂 未整理</option>` +
        folders.map(folder =>
            `<option value="${folder.id}">📁 ${escapeLibraryHtml(folder.name)}</option>`
        ).join('');

    const tx = db.transaction([storeName], 'readonly');
    const req = tx.objectStore(storeName).get(lessonId);

    req.onsuccess = () => {
        select.value = req.result?.folderId || '';
        modal.classList.remove('hidden');
    };
}

function closeMoveLessonModal() {
    pendingMoveLessonId = null;
    document.getElementById('moveLessonModal')?.classList.add('hidden');
}

function confirmMoveLesson() {
    if (!pendingMoveLessonId) return;

    const select = document.getElementById('moveLessonFolderSelect');
    const folderId = select?.value || null;

    const tx = db.transaction([storeName], 'readwrite');
    const store = tx.objectStore(storeName);
    const req = store.get(pendingMoveLessonId);

    req.onsuccess = () => {
        const lesson = req.result;
        if (!lesson) return;

        lesson.folderId = folderId;
        store.put(lesson);
    };

    tx.oncomplete = () => {
        closeMoveLessonModal();
        loadSavedLessons();

        if (typeof showMsg === 'function') {
            showMsg('📁 教材を移動しました');
        }
    };
}

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
        
const formContent = document.getElementById('acc-form-content');
const formIcon = document.getElementById('acc-form-icon');

if (formContent && !formContent.classList.contains('is-open')) {
    formContent.classList.add('is-open');
    if (formIcon) formIcon.textContent = '－';
}

setTimeout(() => {
    document.getElementById('customMaterialForm')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}, 350);

if (typeof showMsg === 'function') {
    showMsg("✏️ 編集する教材を開きました");
}
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
            folderId: null,
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

    if (!lesson) {
        if (onComplete) onComplete();
        return;
    }

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

        if (homeList) {
            homeList.innerHTML = "";
            renderHomeLibrary(lessons, homeList);
        }

        if (sidebarList) {
            sidebarList.innerHTML = "";

            if (lessons.length === 0) {
                sidebarList.innerHTML =
                    `<p class="text-center text-sm text-gray-400 mt-4">空っぽです</p>`;
            } else {
                lessons.forEach(lesson => {
                    const hasAudioIcon = lesson.audioBlob ? '🎵' : '📄';
                    const hasImageIcon = lesson.memoImage
                        ? '<span class="bg-purple-50 text-purple-600 px-2 py-1 rounded-sm ml-1">🖼️</span>'
                        : '';

                    const langDisplay = lesson.langName || '🇺🇸 English (US)';
                    const playCount = lesson.history ? lesson.history.length : 0;
                    const isActive =
                        (currentCustomLesson && currentCustomLesson.id === lesson.id)
                            ? "sidebar-active"
                            : "";

                    const sideCard = document.createElement("div");

                    sideCard.className =
                        `p-3 bg-white border border-stone-200 hover:border-emerald-700 rounded-sm cursor-pointer shadow-sm transition group ${isActive}`;

                    sideCard.innerHTML = `
                        <div class="flex justify-between items-center">
                            <h4 class="font-bold text-sm text-stone-800 group-hover:text-emerald-800 truncate">
                                ${lesson.title}
                            </h4>
                        </div>

                        <div class="flex gap-2 mt-1.5 text-[10px] font-bold text-stone-400 items-center">
                            <span class="bg-[#faf8f5] px-1.5 py-0.5 rounded-sm border border-stone-200">
                                ${langDisplay.split(' ')[0]}
                            </span>
                            <span class="${lesson.audioBlob ? 'text-emerald-600' : ''}">
                                ${hasAudioIcon}
                            </span>
                            ${hasImageIcon}
                            ${playCount > 0
                                ? `<span class="text-yellow-600 ml-auto">★${playCount}</span>`
                                : ''}
                        </div>
                    `;

                    sideCard.onclick = () => startCustomLesson(lesson);
                    sidebarList.appendChild(sideCard);
                });
            }
        }
    };
}

function renderHomeLibrary(lessons, homeList) {
    const folders = getLibraryFolders();

    const title = document.getElementById('libraryViewTitle');
    const hint = document.getElementById('libraryViewHint');
    const backBtn = document.getElementById('libraryBackBtn');

    if (currentLibraryFolderId === null) {
        if (title) title.textContent = 'Library';
        if (hint) hint.textContent = 'フォルダを選んで教材を開きます';
        if (backBtn) {
            backBtn.classList.add('hidden');
            backBtn.classList.remove('flex');
        }

        folders.forEach(folder => {
            const count = lessons.filter(
                lesson => lesson.folderId === folder.id
            ).length;

            const folderCard = document.createElement('div');

            folderCard.className =
                'p-5 bg-white border border-stone-200 hover:border-emerald-700 rounded-sm cursor-pointer shadow-sm hover:shadow-md transition flex items-center justify-between gap-3';

            folderCard.innerHTML = `
                <div class="flex items-center gap-4 min-w-0">
                    <div class="text-4xl shrink-0">📁</div>

                    <div class="min-w-0">
                        <h3 class="font-extrabold text-base md:text-lg text-stone-800 truncate">
                            ${escapeLibraryHtml(folder.name)}
                        </h3>
                        <p class="text-xs text-stone-400 mt-1">
                            ${count} 教材
                        </p>
                    </div>
                </div>

                <div class="flex items-center gap-1 shrink-0">
                    <button type="button"
                        onclick="renameLibraryFolder(event, '${folder.id}')"
                        class="w-10 h-10 flex items-center justify-center text-stone-400 hover:text-blue-600 hover:bg-blue-50 rounded-sm"
                        title="フォルダ名を変更">
                        ✏️
                    </button>

                    <button type="button"
                        onclick="deleteLibraryFolder(event, '${folder.id}')"
                        class="w-10 h-10 flex items-center justify-center text-stone-400 hover:text-red-600 hover:bg-red-50 rounded-sm"
                        title="フォルダを削除">
                        🗑
                    </button>
                </div>
            `;

            folderCard.onclick = e => {
                if (!e.target.closest('button')) {
                    openLibraryFolder(folder.id);
                }
            };

            homeList.appendChild(folderCard);
        });

        const unfiledCount = lessons.filter(
            lesson => !lesson.folderId
        ).length;

        const unfiledCard = document.createElement('div');

        unfiledCard.className =
            'p-5 bg-stone-50 border border-dashed border-stone-300 hover:border-emerald-700 rounded-sm cursor-pointer transition flex items-center justify-between';

        unfiledCard.innerHTML = `
            <div class="flex items-center gap-4">
                <div class="text-4xl">📂</div>
                <div>
                    <h3 class="font-extrabold text-base md:text-lg text-stone-700">
                        未整理
                    </h3>
                    <p class="text-xs text-stone-400 mt-1">
                        ${unfiledCount} 教材
                    </p>
                </div>
            </div>
        `;

        unfiledCard.onclick = () =>
            openLibraryFolder(UNFILED_FOLDER_ID);

        homeList.appendChild(unfiledCard);
        return;
    }

    let selectedLessons = [];
    let folderName = '未整理';

    if (currentLibraryFolderId === UNFILED_FOLDER_ID) {
        selectedLessons = lessons.filter(lesson => !lesson.folderId);
    } else {
        const folder = folders.find(
            f => f.id === currentLibraryFolderId
        );

        if (!folder) {
            currentLibraryFolderId = null;
            loadSavedLessons();
            return;
        }

        folderName = folder.name;

        selectedLessons = lessons.filter(
            lesson => lesson.folderId === currentLibraryFolderId
        );
    }

    if (title) title.textContent = folderName;
    if (hint) hint.textContent = `${selectedLessons.length} 教材`;
    if (backBtn) {
        backBtn.classList.remove('hidden');
        backBtn.classList.add('flex');
    }

    if (selectedLessons.length === 0) {
        homeList.innerHTML = `
            <div class="col-span-full text-center py-12 bg-white border border-dashed border-stone-300 rounded-sm">
                <div class="text-4xl mb-3">📭</div>
                <p class="font-bold text-stone-500">このフォルダは空です</p>
            </div>
        `;
        return;
    }

    selectedLessons.forEach(lesson => {
        createHomeLessonCard(lesson, homeList);
    });
}

function createHomeLessonCard(lesson, homeList) {
    const hasAudioIcon = lesson.audioBlob ? '🎵' : '📄';

    const hasImageIcon = lesson.memoImage
        ? '<span class="bg-purple-50 text-purple-600 px-2 py-1 rounded-sm ml-1">🖼️</span>'
        : '';

    const langDisplay =
        lesson.langName || '🇺🇸 English (US)';

    const playCount =
        lesson.history ? lesson.history.length : 0;

    const badgeHtml = playCount > 0
        ? `<span class="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-[10px] font-black">★ ${playCount}回</span>`
        : '';

    const homeCard = document.createElement("div");

    homeCard.className =
        "p-5 bg-white border border-gray-100 hover:border-emerald-700 rounded-sm cursor-pointer shadow-sm hover:shadow-md transition group flex justify-between items-center";

    homeCard.innerHTML = `
        <div class="flex-1 overflow-hidden pr-3">
            <div class="flex items-center gap-2">
                <h3 class="font-extrabold text-lg text-stone-800 group-hover:text-emerald-800 truncate transition-colors">
                    ${lesson.title}
                </h3>
                ${badgeHtml}
            </div>

            <p class="text-sm text-stone-400 truncate mt-1 font-medium">
                ${lesson.eng}
            </p>

            <div class="flex gap-2 mt-3 text-[11px] font-bold text-stone-500 items-center">
                <span class="bg-stone-100 px-2 py-1 rounded-sm text-stone-600">
                    ${langDisplay.split(' ')[0]}
                </span>
                <span class="bg-emerald-50 text-emerald-600 px-2 py-1 rounded-sm">
                    ${hasAudioIcon}
                </span>
                ${hasImageIcon}
            </div>
        </div>

        <div class="flex flex-col md:flex-row gap-1 shrink-0">

            <button onclick="openMoveLessonModal(event, ${lesson.id})"
                class="p-2 md:p-3 text-stone-300 hover:text-emerald-700 hover:bg-emerald-50 rounded-sm transition"
                title="フォルダを移動">
                📁
            </button>

            <button onclick="editLesson(event, ${lesson.id})"
                class="p-2 md:p-3 text-stone-300 hover:text-blue-600 hover:bg-blue-50 rounded-sm transition"
                title="編集">
                ✏️
            </button>

            <button onclick="deleteLesson(event, ${lesson.id})"
                class="p-2 md:p-3 text-stone-300 hover:text-red-500 hover:bg-red-50 rounded-sm transition"
                title="削除">
                🗑
            </button>

        </div>
    `;

    homeCard.onclick = e => {
        if (!e.target.closest('button')) {
            startCustomLesson(lesson);
        }
    };

    homeList.appendChild(homeCard);
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
        // ==========================================
// Past Practice Bonus
// 過去の音読回数 × 10SP
// 初回のみ
// ==========================================

if (
    window.CopeakRewardsStorage
        ?.importPastPracticeBonus
) {

    const bonusResult =
        await window
            .CopeakRewardsStorage
            .importPastPracticeBonus(
                db,
                storeName
            );


    if (
        bonusResult?.imported &&
        bonusResult.bonusSP > 0
    ) {

        if (
            typeof showMsg ===
            "function"
        ) {

            showMsg(
                `🎁 Past Practice Bonus！ ${bonusResult.pastReads}回 × 10SP = +${bonusResult.bonusSP} SP`
            );
        }
    }
}
        
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
     // ★ (sample) 教材は最初から「サンプル教材」フォルダへ
    presetDataList.forEach(preset => {
        if (preset.title && preset.title.includes('(sample)')) {
            preset.folderId = SAMPLE_FOLDER_ID;
            preset.isPreset = true;
        }
    });

        // ★ 既存ユーザーのサンプル教材も「サンプル教材」へ自動移動
    const sampleLessonsToMove = existingLessons.filter(lesson =>
        lesson.title &&
        lesson.title.includes('(sample)') &&
        lesson.folderId !== SAMPLE_FOLDER_ID
    );

    if (sampleLessonsToMove.length > 0) {
        await new Promise((resolve, reject) => {
            const tx = db.transaction([storeName], 'readwrite');
            const store = tx.objectStore(storeName);

            sampleLessonsToMove.forEach(lesson => {
                lesson.folderId = SAMPLE_FOLDER_ID;
                lesson.isPreset = true;
                store.put(lesson);
            });

            tx.oncomplete = resolve;
            tx.onerror = () => reject(tx.error);
            tx.onabort = () => reject(tx.error);
        });
    }

    // 3. 現在のLibraryに「無い」サンプルだけを絞り込む（タイトルで判定）
    const presetsToAdd = presetDataList.filter(preset => 
        !existingLessons.some(lesson => lesson.title === preset.title)
    );

    // 全てのサンプルがすでに揃っている場合は、ここで処理を終了（無駄な通信を防ぐ）
    if (presetsToAdd.length === 0) {
    if (sampleLessonsToMove.length > 0) {
        loadSavedLessons();
    }
    return;
}

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


// ==========================================
// ★ Mic Health Sensor
// speech.js の認識状態を音読中だけ表示する。
// ※ 実音量ではなく SpeechRecognition の状態センサー。
// ==========================================
const MIC_HEALTH_SENSOR_ID = 'micHealthSensor';
let micHealthHideTimer = null;

function ensureMicHealthSensor() {
    if (!document.getElementById('micHealthSensorStyle')) {
        const style = document.createElement('style');
        style.id = 'micHealthSensorStyle';
        style.textContent = `
            #micHealthSensor{position:fixed;top:max(12px,env(safe-area-inset-top));left:50%;transform:translateX(-50%) translateY(-8px);z-index:20010;max-width:calc(100vw - 7rem);min-width:min(280px,calc(100vw - 7rem));padding:10px 14px;border-radius:9999px;border:1px solid rgba(120,113,108,.22);background:rgba(255,255,255,.96);box-shadow:0 8px 28px rgba(28,25,23,.16);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;gap:10px;opacity:0;visibility:hidden;pointer-events:none;transition:opacity .2s ease,transform .2s ease,visibility .2s ease;font-family:inherit}
            #micHealthSensor.is-visible{opacity:1;visibility:visible;transform:translateX(-50%) translateY(0)}
            #micHealthSensor .mic-health-icon{flex:0 0 auto;font-size:16px;line-height:1}
            #micHealthSensor .mic-health-text{min-width:0;color:#292524;font-size:12px;font-weight:800;line-height:1.35;text-align:left;white-space:normal}
            #micHealthSensor .mic-health-bars{height:16px;display:flex;align-items:center;gap:2px;flex:0 0 auto}
            #micHealthSensor .mic-health-bar{display:block;width:3px;height:5px;border-radius:9999px;background:currentColor;opacity:.45;transform-origin:center}
            #micHealthSensor[data-state="checking"],#micHealthSensor[data-state="finalizing"]{color:#57534e;border-color:rgba(120,113,108,.28)}
            #micHealthSensor[data-state="ready"],#micHealthSensor[data-state="voice"],#micHealthSensor[data-state="recognizing"],#micHealthSensor[data-state="done"]{color:#047857;border-color:rgba(16,185,129,.34);background:rgba(236,253,245,.97)}
            #micHealthSensor[data-state="warning"],#micHealthSensor[data-state="reconnecting"]{color:#b45309;border-color:rgba(245,158,11,.38);background:rgba(255,251,235,.97)}
            #micHealthSensor[data-state="error"]{color:#b91c1c;border-color:rgba(239,68,68,.38);background:rgba(254,242,242,.98)}
            #micHealthSensor[data-state="voice"] .mic-health-bar,#micHealthSensor[data-state="recognizing"] .mic-health-bar{animation:copeakMicBars .7s ease-in-out infinite alternate;opacity:.95}
            #micHealthSensor[data-state="checking"] .mic-health-bar,#micHealthSensor[data-state="reconnecting"] .mic-health-bar,#micHealthSensor[data-state="finalizing"] .mic-health-bar{animation:copeakMicPulse 1s ease-in-out infinite}
            #micHealthSensor .mic-health-bar:nth-child(2){animation-delay:.12s}#micHealthSensor .mic-health-bar:nth-child(3){animation-delay:.24s}
            @keyframes copeakMicBars{from{height:5px}to{height:15px}}@keyframes copeakMicPulse{0%,100%{opacity:.3;transform:scaleY(.65)}50%{opacity:.9;transform:scaleY(1.35)}}
            @media(min-width:768px){#micHealthSensor{top:22px;max-width:min(620px,calc(100vw - 10rem));padding:11px 18px}#micHealthSensor .mic-health-text{font-size:13px}}
            @media(prefers-reduced-motion:reduce){#micHealthSensor,#micHealthSensor .mic-health-bar{animation:none!important;transition:none!important}}
        `;
        document.head.appendChild(style);
    }

    let sensor = document.getElementById(MIC_HEALTH_SENSOR_ID);
    if (!sensor) {
        sensor = document.createElement('div');
        sensor.id = MIC_HEALTH_SENSOR_ID;
        sensor.setAttribute('role', 'status');
        sensor.setAttribute('aria-live', 'polite');
        sensor.setAttribute('aria-atomic', 'true');
        sensor.dataset.state = 'idle';
        sensor.innerHTML = `
            <span class="mic-health-icon" aria-hidden="true">🎙️</span>
            <span class="mic-health-bars" aria-hidden="true"><span class="mic-health-bar"></span><span class="mic-health-bar"></span><span class="mic-health-bar"></span></span>
            <span class="mic-health-text">マイクを確認しています…</span>
        `;
        document.body.appendChild(sensor);
    }
    return sensor;
}

function updateMicHealthSensor(state, message = '') {
    const sensor = ensureMicHealthSensor();
    if (micHealthHideTimer) clearTimeout(micHealthHideTimer);

    const messages = {
        checking: 'マイクを確認しています…',
        ready: 'マイク接続OK・音読を始めてください',
        voice: '声を検出しました',
        recognizing: '音声を認識しています ✓',
        warning: '音声認識を確認しています…',
        reconnecting: '音声認識を再接続しています…',
        finalizing: '音声を確定しています…',
        done: '音声認識完了 ✓',
        error: '音声認識に問題が発生しました'
    };

    const icon = state === 'error'
        ? '🔴'
        : (state === 'warning' || state === 'reconnecting')
            ? '🟠'
            : ['ready', 'voice', 'recognizing', 'done'].includes(state)
                ? '🟢'
                : '🎙️';

    sensor.dataset.state = state || 'checking';
    sensor.querySelector('.mic-health-icon').textContent = icon;
    sensor.querySelector('.mic-health-text').textContent = message || messages[state] || '';
    sensor.classList.add('is-visible');
}

function hideMicHealthSensor(force = false) {
    const sensor = document.getElementById(MIC_HEALTH_SENSOR_ID);
    if (!sensor) return;

    if (micHealthHideTimer) clearTimeout(micHealthHideTimer);

    const state = sensor.dataset.state || '';
    const delay = !force && state === 'done' ? 900 : (!force && state === 'error' ? 2200 : 0);

    const hide = () => {
        sensor.classList.remove('is-visible');
        sensor.dataset.state = 'idle';
        micHealthHideTimer = null;
    };

    if (delay) micHealthHideTimer = setTimeout(hide, delay);
    else hide();
}

window.updateMicHealthSensor = updateMicHealthSensor;
window.hideMicHealthSensor = hideMicHealthSensor;


// ==========================================
// ★多言語対応: 音声認識・採点用ターゲットの共通生成
// speech.js と同じ Intl.Segmenter / Unicode 正規化方針で targetTextArray を作る
// ==========================================
function normalizeUiTargetToken(token, lang = 'en-US') {
    if (!token) return '';

    let normalized = String(token).normalize('NFKC');

    try {
        normalized = normalized.toLocaleLowerCase(lang);
    } catch (e) {
        normalized = normalized.toLowerCase();
    }

    // speech.js と同じく、文字・結合文字・数字だけを比較対象にする。
    // apostrophe / hyphen は ASR の表記揺れを吸収するため比較時には除去する。
    return normalized
        .replace(/[’'\-‐-‒–—―]/g, '')
        .replace(/[^\p{L}\p{M}\p{N}]/gu, '');
}

function segmentUiTargetText(text, lang = 'en-US') {
    const sourceText = String(text || '');
    if (!sourceText) return [];

    // speech.js が読み込み済みなら、その分割ロジックをそのまま再利用する。
    if (typeof segmentSpeechText === 'function') {
        try {
            return segmentSpeechText(sourceText, lang).map(segment => ({
                text: segment.text,
                isWord: segment.isWord === true,
                normalized: segment.normalized || ''
            }));
        } catch (e) {
            console.warn('segmentSpeechText fallback:', e);
        }
    }

    // speech.js が未読込でも ui.js 単体で同じ考え方の分割ができるようにする。
    if (typeof Intl !== 'undefined' && typeof Intl.Segmenter === 'function') {
        try {
            const segmenter = new Intl.Segmenter(lang || 'en-US', { granularity: 'word' });
            return Array.from(segmenter.segment(sourceText)).map(item => {
                const normalized = item.isWordLike === true
                    ? normalizeUiTargetToken(item.segment, lang)
                    : '';

                return {
                    text: item.segment,
                    isWord: item.isWordLike === true && normalized !== '',
                    normalized
                };
            });
        } catch (e) {
            console.warn('Intl.Segmenter target fallback:', e);
        }
    }

    // 古いブラウザ向け fallback。
    // 日本語・中国語・韓国語・タイ語は文字単位、それ以外は空白単位で分割する。
    const hasNoSpaceScript = /[\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af\u0e00-\u0e7f]/u.test(sourceText);

    if (hasNoSpaceScript) {
        return Array.from(sourceText).map(char => {
            const normalized = normalizeUiTargetToken(char, lang);

            return {
                text: char,
                isWord: normalized !== '',
                normalized
            };
        });
    }

    return sourceText.split(/(\s+)/).map(part => {
        const normalized = normalizeUiTargetToken(part, lang);

        return {
            text: part,
            isWord: normalized !== '',
            normalized
        };
    });
}

function buildMultilingualTargetTextArray(lesson) {
    if (!lesson) return [];

    const lang = lesson.lang || 'en-US';
    const tokens = [];

    const addTextTokens = (text) => {
        segmentUiTargetText(text || '', lang).forEach(segment => {
            if (segment.isWord && segment.normalized) {
                tokens.push(segment.normalized);
            }
        });
    };

    if (lesson.type === 'dialogue' && Array.isArray(lesson.dialogue)) {
        lesson.dialogue.forEach(line => addTextTokens(line && line.text ? line.text : ''));
    } else {
        addTextTokens(lesson.eng || '');
    }

    return tokens;
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

function toggleMobileLibrary(forceClose = false) {
    const sidebar = document.getElementById('playlistSidebar');
    if (!sidebar) return;

    if (forceClose) {
        sidebar.classList.remove('mobile-open');
        return;
    }

    sidebar.classList.toggle('mobile-open');
}

function backToHome() {
    toggleMobileLibrary(true);
    if (typeof isMainRecording !== 'undefined' && isMainRecording) {
        if (typeof toggleRecording === 'function') toggleRecording();
    }

    const audioPlayer = document.getElementById('audioPlayer');
    if (audioPlayer) {
        audioPlayer.pause();
        audioPlayer.src = "";
    }
    
    currentCustomLesson = null;

    if (typeof loadSavedLessons === 'function') loadSavedLessons(); 

    switchScreen('homeScreen');
}

function openLearningScreen(lesson) {
    toggleMobileLibrary(true);
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
    } else if (lesson.audioUrl) {
        audioContainer.classList.remove('hidden');
        audioPlayer.src = lesson.audioUrl;
    } else {
        audioContainer.classList.add('hidden');
        audioPlayer.src = "";
    }

    setLearningMode('reading');
    
    // 🌟 多言語対応: 音声認識・採点用ターゲットを教材言語に合わせて生成
    // speech.js の segmentSpeechText() が利用できる場合は同じ分割・正規化ロジックを使う。
    // 読み込み順などで未定義の場合は ui.js 側のフォールバック処理を使う。
    targetTextArray = buildMultilingualTargetTextArray(lesson);
    
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
    currentMemoLevel = parseInt(level); // 数値として確実に処理する
    
    // 古いボタンUI用のコード（念のため残していますが、画面には出ません）
    for (let i = 1; i <= 5; i++) {
        const btn = document.getElementById('lvlBtn' + i);
        if (!btn) continue;

        if (i === currentMemoLevel) {
            btn.className = "flex-1 py-1.5 md:py-2 rounded-sm bg-stone-800 text-white font-bold text-xs transition shadow-sm";
        } else {
            btn.className = "flex-1 py-1.5 md:py-2 rounded-sm bg-stone-200 text-stone-600 hover:bg-stone-300 font-bold text-xs transition";
        }
    }

    // ★抜け落ちていた処理：ドロップダウンの表示を現在のレベルに合わせる
    const selectEl = document.getElementById('vanishLevelSelect');
    if (selectEl) selectEl.value = currentMemoLevel;

    // ★抜け落ちていた処理：テキストの再描画
    renderTargetText(); 
} 

// ★追加: PacedのWPM数値を更新し、ドロップダウンとも連動させる
function updateTargetWpm(val) {
    targetWpm = parseInt(val);
    
    // 古い表示用（念のため残す）
    const display = document.getElementById('targetWpmDisplay');
    if (display) display.innerText = targetWpm + " WPM";

    // ドロップダウンの表示を現在のWPMに合わせる
    const selectEl = document.getElementById('pacedWpmSelect');
    if (selectEl) selectEl.value = targetWpm;
}


// ==========================================
// ★多言語Vanish対応: 言語ごとの単語境界をブラウザ標準APIで取得
// ==========================================
function segmentTextForVanish(text, lang = 'en-US') {
    const sourceText = String(text || '');
    if (!sourceText) return [];

    // Intl.Segmenter が利用できるブラウザでは、英語だけでなく
    // 日本語・中国語・韓国語・タイ語なども言語に応じた単位で分割する
    if (typeof Intl !== 'undefined' && typeof Intl.Segmenter === 'function') {
        try {
            const segmenter = new Intl.Segmenter(lang || 'en-US', { granularity: 'word' });

            const rawSegments = Array.from(segmenter.segment(sourceText)).map(item => ({
                text: item.segment,
                isWord: item.isWordLike === true
            }));

            // ハイフン等でつながった語（例: well-known / teman-teman）は
            // 従来のVanishと同じく、できるだけ1つの消去単位として扱う
            const mergedSegments = [];

            for (let i = 0; i < rawSegments.length; i++) {
                const current = rawSegments[i];

                if (
                    current.isWord &&
                    i + 2 < rawSegments.length &&
                    /^[\-‐-‒–—]$/u.test(rawSegments[i + 1].text) &&
                    rawSegments[i + 2].isWord
                ) {
                    let mergedText = current.text;

                    while (
                        i + 2 < rawSegments.length &&
                        /^[\-‐-‒–—]$/u.test(rawSegments[i + 1].text) &&
                        rawSegments[i + 2].isWord
                    ) {
                        mergedText += rawSegments[i + 1].text + rawSegments[i + 2].text;
                        i += 2;
                    }

                    mergedSegments.push({
                        text: mergedText,
                        isWord: true
                    });

                } else {
                    mergedSegments.push(current);
                }
            }

            return mergedSegments;

        } catch (e) {
            console.warn('Intl.Segmenter fallback:', e);
        }
    }

    // フォールバック1: スペース区切りがある言語
    if (/\s/u.test(sourceText)) {
        return sourceText.split(/(\s+)/u).map(part => ({
            text: part,
            isWord: /[\p{L}\p{M}\p{N}]/u.test(part)
        }));
    }

    // フォールバック2: 日本語・中国語など、スペースがない文章は文字単位で処理
    return Array.from(sourceText).map(char => ({
        text: char,
        isWord: /[\p{L}\p{M}\p{N}]/u.test(char)
    }));
}

function renderTargetText() {
    if (!currentCustomLesson) return;

    const engContainer = document.getElementById('engContainer');
    
    if (currentMode === 'paced') {
        engContainer.classList.add('karaoke-active');
    } else {
        engContainer.classList.remove('karaoke-active');
    }

    let finalHtml = "";

    // 🌟 テキスト描画処理
    // Read / Paced は従来処理を維持し、Vanish のときだけ多言語分割を使用する
    const processWords = (text) => {

        // Vanish以外は既存の表示・Paced挙動をそのまま維持
        if (currentMode !== 'memo' || currentMemoLevel <= 0) {
            const words = text.split(/(\s+)/);

            return words.map(word => {
                if (word.trim() === "") return word;
                return `<span class="pace-word">${word}</span>`;
            }).join('').replace(/([.?!]["']?)<\/span>\s+/g, "$1</span><br><br>");
        }

        // Vanish時はブラウザ標準の多言語単語分割を使用
        const lang = currentCustomLesson.lang || 'en-US';
        const segments = segmentTextForVanish(text, lang);
        const threshold = currentMemoLevel * 0.2;
        let wordIndex = 0;

        return segments.map((segment, segmentIndex) => {
            const segmentText = segment.text;

            // 空白・句読点などは消さない
            if (!segment.isWord) {
                // 文末記号と閉じ引用符が別segmentになるケースにも対応
                const prevText = segmentIndex > 0 ? segments[segmentIndex - 1].text : '';
                const nextText = segmentIndex + 1 < segments.length ? segments[segmentIndex + 1].text : '';
                const isSentenceEnd = /^[.?!。！？؟۔।॥]$/u.test(segmentText);
                const isClosingQuote = /^["'”’»」』】）》〉]$/u.test(segmentText);
                const nextIsClosingQuote = /^["'”’»」』】）》〉]$/u.test(nextText);
                const prevIsSentenceEnd = /^[.?!。！？؟۔।॥]$/u.test(prevText);

                if (isSentenceEnd && !nextIsClosingQuote) {
                    return `${segmentText}<br><br>`;
                }

                if (isClosingQuote && prevIsSentenceEnd) {
                    return `${segmentText}<br><br>`;
                }

                return segmentText;
            }

            const index = wordIndex++;
            let hash = 0;

            for (let i = 0; i < segmentText.length; i++) {
                hash = segmentText.charCodeAt(i) + ((hash << 5) - hash);
            }

            const pseudoRandom = Math.abs(hash + index * 137) % 100 / 100;
            let finalWord = segmentText;

            if (pseudoRandom < threshold) {
                finalWord = `<span class="bg-stone-300 text-transparent rounded-sm select-none">${segmentText}</span>`;
            }

            return `<span class="pace-word">${finalWord}</span>`;
        }).join('');
    };

    // 🌟 分岐: 会話文か、標準テキストか
    if (currentCustomLesson.type === 'dialogue' && currentCustomLesson.dialogue) {

        currentCustomLesson.dialogue.forEach(line => {
            finalHtml += `<div class="mb-4 flex flex-col md:flex-row gap-2 md:gap-4 items-start">`;

            // 話者バッジ（音声判定のターゲットにはならない）
            if (line.speaker) {
                finalHtml += `<div class="bg-emerald-600/20 text-emerald-800 font-bold px-3 py-1 rounded border border-emerald-500/30 text-sm md:text-base shrink-0 mt-1 w-24 md:w-32 text-center truncate" title="${line.speaker}">${line.speaker}</div>`;
            }

            // セリフ部分（音声判定のターゲットになる）
            finalHtml += `<div class="flex-1">${processWords(line.text)}</div></div>`;
        });

    } else {
        finalHtml = processWords(currentCustomLesson.eng);
    }

    engContainer.innerHTML = finalHtml;
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

            currentWordEl.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            
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


// ==========================================
// ★ 録音前
// ==========================================
function showPreReadingState() {

    document.body.classList.remove(
    'result-layout-active'
);

    document.body.classList.remove(
    'immersive-mode',
    'recording-layout-active'
);

    hideMicHealthSensor();

    const targetTextWrapper = document.getElementById('targetTextWrapper'); 
    const yourVoiceWrapper = document.getElementById('yourVoiceWrapper');
    const resultScoreBoard = document.getElementById('resultScoreBoard');
    const mainPane = document.getElementById('mainLearningPane');
    const sidebar = document.getElementById('playlistSidebar');
    const toggleBtn = document.getElementById('toggleJpnBtn');
    
    const micBtn = document.getElementById('micBtn');

    const oldBtnContainer = document.getElementById('missingWordsBtnContainer');
    if (oldBtnContainer) oldBtnContainer.remove();

    const oldModal = document.getElementById('missingWordsModal');
    if (oldModal) oldModal.remove();

    // ★追加: 中止ボタンを隠す
    const cancelBtn = document.getElementById('cancelRecordingBtn');
    if (cancelBtn) cancelBtn.style.display = 'none';

    const previewBtn = document.querySelector('button[onclick="openFullscreenPreview()"]');
    if (previewBtn) previewBtn.style.display = '';

    const finishBtn = document.getElementById('fullscreenFinishBtn');
    if (finishBtn) finishBtn.style.display = 'none';

    if (micBtn) micBtn.style.display = '';

    const engContainer = document.getElementById('engContainer');

    if (engContainer) {
        engContainer.style.overflowY = '';
        engContainer.style.flex = '';
        engContainer.style.height = '';
    }

    if (targetTextWrapper && targetTextWrapper.firstElementChild) {
        targetTextWrapper.firstElementChild.style.flex = '';
        targetTextWrapper.firstElementChild.style.height = '';
        targetTextWrapper.firstElementChild.style.minHeight = '';
    }

    if (mainPane) {
        mainPane.className = "w-full lg:w-[78%] flex flex-col h-full bg-[#faf8f5] rounded-sm iron-border overflow-hidden relative transition-all duration-500";
    }

    if (sidebar) {
        sidebar.style.display = 'flex';
    }

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

    document.body.classList.remove(
    'result-layout-active'
);

    document.body.classList.add(
        'immersive-mode'
    );

    document.body.classList.add(
        'recording-layout-active'
    );


    ensureMicHealthSensor();


    const targetTextWrapper =
        document.getElementById(
            'targetTextWrapper'
        );


    const yourVoiceWrapper =
        document.getElementById(
            'yourVoiceWrapper'
        );


    const learningContentArea =
        document.getElementById(
            'learningContentArea'
        );


    const jpnWrapper =
        document.getElementById(
            'jpnWrapper'
        );


    const resultScoreBoard =
        document.getElementById(
            'resultScoreBoard'
        );


    const mainPane =
        document.getElementById(
            'mainLearningPane'
        );


    const sidebar =
        document.getElementById(
            'playlistSidebar'
        );


    const toggleBtn =
        document.getElementById(
            'toggleJpnBtn'
        );


    const micBtn =
        document.getElementById(
            'micBtn'
        );


    const oldBtnContainer =
        document.getElementById(
            'missingWordsBtnContainer'
        );


    if (
        oldBtnContainer
    ) {

        oldBtnContainer.remove();
    }


    const oldModal =
        document.getElementById(
            'missingWordsModal'
        );


    if (
        oldModal
    ) {

        oldModal.remove();
    }


    // ==========================================
    // 左上キャンセルボタン
    // ==========================================
    let cancelBtn =
        document.getElementById(
            'cancelRecordingBtn'
        );


    if (
        !cancelBtn
    ) {

        cancelBtn =
            document.createElement(
                'button'
            );


        cancelBtn.id =
            'cancelRecordingBtn';


        cancelBtn.innerHTML =
            "✕";


        cancelBtn.title =
            "音読を中止する";


        cancelBtn.onclick =
            cancelRecording;


        document.body.appendChild(
            cancelBtn
        );
    }


    cancelBtn.className =
        "fixed top-3 left-3 " +
        "md:top-6 md:left-6 " +
        "z-[20000] " +
        "w-10 h-10 md:w-12 md:h-12 " +
        "bg-white hover:bg-red-50 " +
        "text-stone-500 hover:text-red-600 " +
        "font-bold text-xl md:text-2xl " +
        "rounded-full shadow-xl " +
        "border border-stone-200 " +
        "flex items-center justify-center " +
        "transition-all transform " +
        "hover:scale-105 cursor-pointer";


    cancelBtn.style.display =
        'flex';


    const previewBtn =
        document.querySelector(
            'button[onclick="openFullscreenPreview()"]'
        );


    if (
        previewBtn
    ) {

        previewBtn.style.display =
            'none';
    }


    if (
        mainPane
    ) {

        mainPane.className =
            "w-full flex flex-col h-full " +
            "bg-[#faf8f5] rounded-sm " +
            "iron-border overflow-hidden " +
            "relative transition-all duration-500";
    }


    if (
        sidebar
    ) {

        sidebar.style.display =
            'none';
    }


    if (
        jpnWrapper
    ) {

        jpnWrapper.classList.add(
            'hidden'
        );
    }


    if (
        toggleBtn
    ) {

        toggleBtn.classList.add(
            'hidden'
        );
    }


    if (
        resultScoreBoard
    ) {

        resultScoreBoard.style.display =
            'none';
    }


    // ==========================================
    // READ / PACED / VANISH
    // ==========================================
    if (
        currentMode !==
            'shadowing'
    ) {


        // ==========================================
        // Target Text
        // ==========================================
        targetTextWrapper.style.display =
            'flex';


        targetTextWrapper.className =
            "w-full flex flex-col gap-3 min-h-0";


        // ==========================================
        // Your Voice
        // ==========================================
        yourVoiceWrapper.style.display =
            'flex';


        yourVoiceWrapper.className =
            "w-full bg-white rounded-xl " +
            "border border-stone-300 " +
            "border-l-4 border-l-emerald-700 " +
            "shadow-lg flex flex-col min-h-0";


        // ==========================================
        // 通常STARTボタンは録音中は隠す
        // ==========================================
        if (
            micBtn
        ) {

            micBtn.style.display =
                'none';
        }


        // ==========================================
        // Target Text本文
        // ==========================================
        const engContainer =
            document.getElementById(
                'engContainer'
            );


        if (
            engContainer
        ) {

            engContainer.style.overflowY =
                'auto';


            engContainer.style.flex =
                '1 1 auto';


            engContainer.style.height =
                'auto';


            engContainer.style.minHeight =
                '0';
        }


        if (
            targetTextWrapper
                .firstElementChild
        ) {

            targetTextWrapper
                .firstElementChild
                .style.flex =
                    '1 1 auto';


            targetTextWrapper
                .firstElementChild
                .style.height =
                    'auto';


            targetTextWrapper
                .firstElementChild
                .style.minHeight =
                    '0';
        }


        // ==========================================
        // Submitボタン
        // ==========================================
        let finishBtn =
            document.getElementById(
                'fullscreenFinishBtn'
            );


        if (
            !finishBtn
        ) {

            finishBtn =
                document.createElement(
                    'button'
                );


            finishBtn.id =
                'fullscreenFinishBtn';


            finishBtn.onclick =
                () => {

                    if (
                        typeof toggleRecording ===
                            'function'
                    ) {

                        toggleRecording();
                    }
                };
        }


        // ==========================================
       // ★重要
// SubmitをTarget Text本文（engContainer）の
// 一番最後へ配置する
        // ==========================================
        if (
    engContainer &&
    finishBtn.parentElement !==
        engContainer
) {

    engContainer.appendChild(
        finishBtn
    );
}


        finishBtn.innerHTML =
            "⏹ 音読を提出する (Submit)";


        finishBtn.className =
    "w-[94%] max-w-xl mx-auto " +
    "mt-10 mb-5 " +
    "px-6 py-4 " +
    "bg-red-600 hover:bg-red-700 " +
    "text-white font-bold " +
    "text-base md:text-lg " +
    "rounded-full shadow-xl " +
    "transition-all " +
    "flex items-center justify-center " +
    "gap-3 cursor-pointer";


        finishBtn.style.display =
            'flex';


        // ==========================================
        // 開始時は本文先頭
        // ==========================================
        if (
            engContainer
        ) {

            engContainer.scrollTop =
                0;
        }


    // ==========================================
    // SHADOWING
    // ==========================================
    } else {


        document.body.classList.remove(
            'recording-layout-active'
        );


        targetTextWrapper.style.display =
            'none';


        yourVoiceWrapper.style.display =
            'flex';


        yourVoiceWrapper.className =
            "w-full max-w-5xl mx-auto " +
            "p-4 md:p-12 bg-white " +
            "rounded-sm border-l-4 " +
            "border-stone-800 shadow-sm " +
            "iron-border-sm flex flex-col " +
            "min-h-[300px] md:min-h-[400px] " +
            "transition-all duration-300 " +
            "opacity-100 relative z-10";


        const finishBtn =
            document.getElementById(
                'fullscreenFinishBtn'
            );


        if (
            finishBtn
        ) {

            finishBtn.style.display =
                'none';
        }


        if (
            micBtn
        ) {

            micBtn.style.display =
                '';
        }
    }
}

// ==========================================
// ★ 結果画面
// ==========================================
function showResultState() {
    hideMicHealthSensor();

    if (window.isCopeakCanceling) {
        window.isCopeakCanceling = false;

        if (currentCustomLesson && currentCustomLesson.history) {

            while (
                currentCustomLesson.history.length >
                (window.historyLengthBeforeCancel || 0)
            ) {
                currentCustomLesson.history.pop();
            }

            if (typeof saveLessons === 'function') {
                saveLessons();
            }
        }

        if (typeof resetLearningState === 'function') {
            resetLearningState();
        }

        return;
    }

    document.body.classList.remove(
    'immersive-mode',
    'recording-layout-active'
);

document.body.classList.toggle(
    'result-layout-active',
    currentMode !== 'shadowing'
);

    const targetTextWrapper = document.getElementById('targetTextWrapper'); 
    const yourVoiceWrapper = document.getElementById('yourVoiceWrapper');
    const resultScoreBoard = document.getElementById('resultScoreBoard');
    const mainPane = document.getElementById('mainLearningPane');
    const sidebar = document.getElementById('playlistSidebar');
    const toggleBtn = document.getElementById('toggleJpnBtn');
    
    const micBtn = document.getElementById('micBtn');

    const cancelBtn = document.getElementById('cancelRecordingBtn');
    if (cancelBtn) cancelBtn.style.display = 'none';

    const previewBtn = document.querySelector('button[onclick="openFullscreenPreview()"]');
    if (previewBtn) previewBtn.style.display = 'none';

    const finishBtn = document.getElementById('fullscreenFinishBtn');
    if (finishBtn) finishBtn.style.display = 'none';

    if (micBtn) micBtn.style.display = '';

    const engContainer = document.getElementById('engContainer');

    if (engContainer) {
        engContainer.style.overflowY = '';
        engContainer.style.flex = '';
        engContainer.style.height = '';
    }

    if (targetTextWrapper && targetTextWrapper.firstElementChild) {
        targetTextWrapper.firstElementChild.style.flex = '';
        targetTextWrapper.firstElementChild.style.height = '';
        targetTextWrapper.firstElementChild.style.minHeight = '';
    }

    if (mainPane) {
        mainPane.className = "w-full flex flex-col h-full bg-[#faf8f5] rounded-sm iron-border overflow-hidden relative transition-all duration-500";
    }

    if (sidebar) {
        sidebar.style.display = 'none';
    }
    
    if (toggleBtn && currentCustomLesson && currentCustomLesson.jpn) {
        toggleBtn.classList.remove('hidden');
    }

    resultScoreBoard.style.display = 'flex';

    const accEl = document.getElementById('bigAccValue');
    const wpmEl = document.getElementById('bigWpmValue');

    if (accEl && wpmEl) {
        const accVal = parseInt(accEl.innerText.replace('%', '')) || 0;
        const wpmVal = parseInt(wpmEl.innerText) || 0;
        
        accEl.classList.remove('score-firework');
        wpmEl.classList.remove('score-firework');

        void accEl.offsetWidth;
        void wpmEl.offsetWidth;

        if (accVal >= 80 && wpmVal >= 95) {
            setTimeout(() => {
                accEl.classList.add('score-firework');
                wpmEl.classList.add('score-firework');
            }, 300);
        }
    }

    if (currentMode !== 'shadowing') {

        yourVoiceWrapper.style.display = 'flex';

        yourVoiceWrapper.className = "w-full lg:w-1/2 p-4 md:p-8 bg-white rounded-sm border-l-4 border-stone-800 shadow-sm iron-border-sm flex flex-col transition-all duration-300 relative z-10 opacity-100 pointer-events-auto flex-1 min-h-[250px] md:min-h-[400px]";
        
        targetTextWrapper.style.display = 'flex';

        targetTextWrapper.className = "w-full lg:w-1/2 flex flex-col gap-4 md:gap-6 transition-all duration-300 relative z-10 bg-transparent p-0 backdrop-blur-none border-none shadow-none flex-1 min-h-[250px] md:min-h-[400px]";

        const oldBtnContainer = document.getElementById('missingWordsBtnContainer');

        if (oldBtnContainer) {
            oldBtnContainer.remove();
        }

        const btnContainer = document.createElement('div');

btnContainer.id = 'missingWordsBtnContainer';

btnContainer.className =
    'mt-2 flex items-center';

btnContainer.innerHTML = `
    <button
        onclick="openMissingWordsModal()"
        class="
            px-3 py-2
            bg-orange-50
            hover:bg-orange-100
            text-orange-700
            font-bold
            rounded-lg
            text-[10px] md:text-xs
            transition
            flex items-center
            gap-1.5
            border border-orange-200
        "
    >
        <span>⚠️</span>
        <span class="hidden md:inline">
            未発話・認識されなかった語彙リスト
        </span>
        <span class="md:hidden">
            未発話リストを見る
        </span>
    </button>
`;

const feedbackArea =
    document.getElementById(
        'slaAdviceContainer'
    );

const feedbackContent =
    feedbackArea
        ? feedbackArea.querySelector('div')
        : null;

if (feedbackContent) {

    feedbackContent.appendChild(
        btnContainer
    );

} else if (mainPane) {

    mainPane.appendChild(
        btnContainer
    );
}
    }
}

function setLearningMode(mode) {

    if (typeof isMainRecording !== 'undefined' && isMainRecording) {
        if (typeof toggleRecording === 'function') {
            toggleRecording();
        }
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

    if (tabR) {
        tabR.className = (mode === 'reading') ? activeClass : inactiveClass;
    }

    if (tabP) {
        tabP.className = (mode === 'paced') ? activeClass : inactiveClass;
    }

    if (tabM) {
        tabM.className = (mode === 'memo') ? activeClass : inactiveClass;
    }

    if (tabS) {
        tabS.className = (mode === 'shadowing') ? activeClass : inactiveClass;
    }

    if (mode === 'reading') {

        btnText.innerText = "START READING";

        if (vanishControls) {
            vanishControls.classList.add('hidden');
        }

        if (pacedControls) {
            pacedControls.classList.add('hidden');
        }

        currentMemoLevel = 0;

    } else if (mode === 'paced') {

        btnText.innerText = "START PACED";

        if (vanishControls) {
            vanishControls.classList.add('hidden');
        }

        if (pacedControls) {
            pacedControls.classList.remove('hidden');
        }

        currentMemoLevel = 0;

    } else if (mode === 'memo') {

        btnText.innerText = "START VANISH";

        if (vanishControls) {
            vanishControls.classList.remove('hidden');
        }

        if (pacedControls) {
            pacedControls.classList.add('hidden');
        }

        if (currentMemoLevel === 0) {
            updateMemoLevel(1); 
        }

    } else {

        btnText.innerText = "START SHADOWING";

        if (vanishControls) {
            vanishControls.classList.add('hidden');
        }

        if (pacedControls) {
            pacedControls.classList.add('hidden');
        }

        currentMemoLevel = 0;
    }

    resetLearningState();
}

function resetLearningState() {

    if (typeof finalTranscript !== 'undefined') {
        finalTranscript = '';
    }

    if (typeof accumulatedTranscript !== 'undefined') {
        accumulatedTranscript = '';
    }
    
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

    if (
        !currentCustomLesson ||
        !currentCustomLesson.history ||
        currentCustomLesson.history.length === 0
    ) {

        if (typeof showMsg === 'function') {
            showMsg("📝 まだ学習履歴がありません");
        }

        return;
    }

    const ctx = document.getElementById('progressChart').getContext('2d');

    if (progressChartInstance) {
        progressChartInstance.destroy();
    }

    const labels = currentCustomLesson.history.map((log, index) => {
        let modeStr = '📖 音読';

        if (log.mode === 'shadowing') {
            modeStr = '🎧 シャドーイング';
        }

        if (log.mode === 'memo') {
            modeStr = '🧠 暗記';
        }

        if (log.mode === 'paced') {
            modeStr = '⚡️ ペース音読';
        }

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
                    yAxisID: 'y',
                    pointRadius: 6,
                    pointHoverRadius: 8
                },

                {
                    label: 'Accuracy (正確さ %)',
                    data: accData,
                    borderColor: '#34d399',
                    borderWidth: 3,
                    tension: 0.3,
                    yAxisID: 'y',
                    pointRadius: 6,
                    pointHoverRadius: 8
                },

                {
                    label: 'WPM (スピード)',
                    data: wpmData,
                    borderColor: '#60a5fa',
                    borderWidth: 3,
                    borderDash: [5, 5],
                    tension: 0.3,
                    yAxisID: 'y1',
                    pointRadius: 6,
                    pointHoverRadius: 8
                }
            ]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false, 

            interaction: {
                mode: 'index',
                intersect: false
            },

            onClick: (e, elements) => {

                if (elements.length > 0) {
                    const dataIndex = elements[0].index;

                    closeChartModal(); 
                    
                    const savedProfile = localStorage.getItem('copeak_student_profile');

                    if (!savedProfile) {
                        document.getElementById('studentProfileModal').classList.remove('hidden');
                    } else {
                        selectHistoryLog(dataIndex);
                    }
                }
            },

            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    min: 0,
                    max: 100,

                    title: {
                        display: true,
                        text: 'Percentage (%)',
                        color: '#78716c',
                        font: {
                            weight: 'bold'
                        }
                    }
                },

                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    min: 0,

                    title: {
                        display: true,
                        text: 'Words Per Minute (WPM)',
                        color: '#78716c',
                        font: {
                            weight: 'bold'
                        }
                    },

                    grid: {
                        drawOnChartArea: false
                    }
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

function openModeGuide() {
    const modal = document.getElementById('modeGuideModal');

    if (modal) {
        modal.classList.remove('hidden');
    }
}

function closeModeGuide() {
    const modal = document.getElementById('modeGuideModal');

    if (modal) {
        modal.classList.add('hidden');
    }
}

async function generateShareLink() {

    if (!currentCustomLesson) return;
    
    const baseUrl = window.location.origin + window.location.pathname;
    
    const paramsConfig = {
        title: currentCustomLesson.title.replace('🔗 ', ''),
        eng: currentCustomLesson.eng,
        lang: currentCustomLesson.lang || 'en-US'
    };

    if (currentCustomLesson.jpn) {
        paramsConfig.jpn = currentCustomLesson.jpn;
    }

    if (currentCustomLesson.audioUrl) {
        paramsConfig.audioUrl = currentCustomLesson.audioUrl;
    }

    const savedFormUrl = localStorage.getItem('copeak_teacher_form_url');
    const formUrl = currentCustomLesson.formUrl || savedFormUrl || '';

    if (formUrl) {
        paramsConfig.form = formUrl;
    }

    if (currentCustomLesson.type === 'dialogue' && currentCustomLesson.dialogue) {
        paramsConfig.type = 'dialogue';
        paramsConfig.dialogue = JSON.stringify(currentCustomLesson.dialogue);
    }
    
    const params = new URLSearchParams(paramsConfig);
    const longUrl = `${baseUrl}?${params.toString()}`;
    
    try {

        await navigator.clipboard.writeText(longUrl);

        if (typeof showMsg === 'function') {

            if (formUrl) {
                showMsg("🔗 【成績送信付き】リンクをコピーしました！");
            } else {
                showMsg("🔗 リンクをコピーしました！");
            }
        }

    } catch (err) {

        if (typeof showMsg === 'function') {
            showMsg("⚠️ リンクのコピーに失敗しました");
        }
    }
}

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

let selectedLogToSubmit = null; 

const originalShowResultState = showResultState;

showResultState = function() {

    originalShowResultState(); 
    
    const submitBtn = document.getElementById('submitScoreTriggerBtn');

    if (!submitBtn) return;

    if (currentCustomLesson && currentCustomLesson.formUrl) {
        submitBtn.classList.remove('hidden');
    } else {
        submitBtn.classList.add('hidden');
    }
};

function openReflectionWrapper() {
    const savedProfile = localStorage.getItem('copeak_student_profile');
    
    if (!savedProfile) {
        document.getElementById('studentProfileModal').classList.remove('hidden');
    } else {
        openHistorySelectModal();
    }
}

function saveStudentProfile() {

    const cls = document.getElementById('studentClassInput').value.trim();
    const num = document.getElementById('studentNumInput').value.trim();
    const name = document.getElementById('studentNameInput').value.trim();

    if (!cls || !num || !name) {
        alert("すべての項目を入力してください。");
        return;
    }

    const profile = {
        class: cls,
        number: num,
        name: name
    };

    localStorage.setItem('copeak_student_profile', JSON.stringify(profile));
    
    document.getElementById('studentProfileModal').classList.add('hidden');

    openHistorySelectModal(); 
}

function openHistorySelectModal() {

    const oldModal = document.getElementById('historySelectModal');

    if (oldModal) {
        oldModal.remove();
    }

    const modal = document.createElement('div');

    modal.id = 'historySelectModal';
    modal.className = 'fixed inset-0 z-[10000] bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm';
    
    let historyHtml = '';

    if (
        !currentCustomLesson ||
        !currentCustomLesson.history ||
        currentCustomLesson.history.length === 0
    ) {

        historyHtml = `<p class="text-center text-stone-400 py-8 text-sm">練習履歴がまだありません。</p>`;

    } else {

        const reversedHistory = [...currentCustomLesson.history].reverse();

        reversedHistory.forEach((log, index) => {

            const originalIndex = currentCustomLesson.history.length - 1 - index;

            let modeStr = '📖 音読';

            if (log.mode === 'shadowing') {
                modeStr = '🎧 シャドー';
            }

            if (log.mode === 'memo') {
                modeStr = '🧠 暗記';
            }

            if (log.mode === 'paced') {
                modeStr = '⚡️ ペース';
            }

            historyHtml += `
                <div onclick="selectHistoryLog(${originalIndex})" class="p-3 mb-2 bg-stone-50 hover:bg-emerald-50 border border-stone-200 hover:border-emerald-500 rounded-sm cursor-pointer transition flex justify-between items-center group text-left">
                    <div>
                        <div class="font-bold text-stone-800 text-xs md:text-sm group-hover:text-emerald-900">${originalIndex + 1}回目: ${modeStr} <span class="text-stone-400 font-normal text-[10px] ml-1">${log.date || ''}</span></div>
                        <div class="text-[11px] text-stone-500 mt-1">Accuracy: <span class="font-bold text-stone-700">${log.score}%</span> / Speed: <span class="font-bold text-stone-700">${log.wpm} WPM</span> / Comp: <span class="font-bold text-stone-700">${log.comp}%</span></div>
                    </div>
                    <span class="text-stone-400 group-hover:text-emerald-600 font-bold text-xs shrink-0 pl-2">選択 ➔</span>
                </div>
            `;
        });
    }

    modal.innerHTML = `
        <div class="bg-white rounded-sm max-w-md w-full p-5 flex flex-col max-h-[80vh] shadow-xl border border-stone-300">
            <div class="flex justify-between items-center mb-3 border-b border-stone-200 pb-2">
                <h3 class="font-black text-base md:text-lg text-stone-800 flex items-center gap-2">📋 提出する成績の選択</h3>
                <button onclick="closeHistorySelectModal()" class="text-stone-400 hover:text-stone-600 text-lg font-bold">✕</button>
            </div>

            <p class="text-[11px] text-stone-500 mb-3 text-left leading-relaxed">過去のすべての練習履歴（今回の結果を含む）が表示されています。先生に送信したい回をタップしてください。</p>

            <div class="flex-1 overflow-y-auto pr-1">
                ${historyHtml}
            </div>

            <button onclick="closeHistorySelectModal()" class="mt-4 w-full py-2 bg-stone-100 hover:bg-stone-200 text-stone-600 font-bold rounded-sm text-xs transition">閉じる</button>
        </div>
    `;

    document.body.appendChild(modal);
}

function closeHistorySelectModal() {

    const modal = document.getElementById('historySelectModal');

    if (modal) {
        modal.remove();
    }
}

function selectHistoryLog(index) {

    if (!currentCustomLesson || !currentCustomLesson.history) return;

    selectedLogToSubmit = currentCustomLesson.history[index];
    selectedLogToSubmit.displayIndex = index + 1; 
    
    closeHistorySelectModal();

    openReflectionModal(); 
}

function openReflectionModal() {

    if (!selectedLogToSubmit) return;

    const scoreText = `${selectedLogToSubmit.score}%`;
    const wpmText = `${selectedLogToSubmit.wpm}`;
    
    let modeStr = '📖 Read';

    if (selectedLogToSubmit.mode === 'shadowing') {
        modeStr = '🎧 Shadowing';
    }

    if (selectedLogToSubmit.mode === 'memo') {
        modeStr = '🧠 Vanish';
    }

    if (selectedLogToSubmit.mode === 'paced') {
        modeStr = '⚡️ Paced';
    }

    document.getElementById('submitScorePreview').innerText =
        `【選択中: 第 ${selectedLogToSubmit.displayIndex} 回目の記録】 Accuracy: ${scoreText} / Speed: ${wpmText} WPM`;

    document.getElementById('submitModePreview').innerText = modeStr;

    document.getElementById('reflectionInput').value = ""; 
    
    document.getElementById('reflectionModal').classList.remove('hidden');
}

function closeReflectionModal() {

    document.getElementById('reflectionModal').classList.add('hidden');

    selectedLogToSubmit = null; 
}

async function submitScoreToForm() {

    if (!currentCustomLesson || !currentCustomLesson.formUrl || !selectedLogToSubmit) return;

    const profile = JSON.parse(
        localStorage.getItem('copeak_student_profile')
    );

    if (!profile) return;

    const reflection = document.getElementById('reflectionInput').value.trim();

    if (!reflection) {

        if (typeof showMsg === 'function') {
            showMsg("⚠️ 振り返りを入力してください");
        }

        return;
    }

    const finalSubmitBtn = document.getElementById('finalSubmitBtn');

    finalSubmitBtn.disabled = true;
    finalSubmitBtn.innerHTML = "⏳ 送信中...";

    const accuracy = String(selectedLogToSubmit.score);
    const wpm = String(selectedLogToSubmit.wpm);
    const comp = String(selectedLogToSubmit.comp || 0);
    const targetPlayCount = String(selectedLogToSubmit.displayIndex);

    let modeStr = 'Read';

    if (selectedLogToSubmit.mode === 'shadowing') {
        modeStr = 'Shadowing';
    }

    if (selectedLogToSubmit.mode === 'memo') {
        modeStr = 'Vanish';
    }

    if (selectedLogToSubmit.mode === 'paced') {
        modeStr = 'Paced';
    }

    const lessonTitle = currentCustomLesson.title.replace('🔗 ', '');

    let cleanFormUrl = currentCustomLesson.formUrl.split('?')[0]; 
    let postUrl = cleanFormUrl.replace('/viewform', '/formResponse');

    const formData = new URLSearchParams();

    formData.append('entry.755665088', profile.class);
    formData.append('entry.70481568', profile.number);
    formData.append('entry.1056156063', profile.name);
    formData.append('entry.1259267878', lessonTitle); 
    formData.append('entry.222722906', currentCustomLesson.eng || '');
    formData.append('entry.145428349', accuracy);
    formData.append('entry.928123739', wpm);
    formData.append('entry.1611039041', comp);
    formData.append('entry.1534604696', modeStr);
    formData.append('entry.695903918', targetPlayCount);
    formData.append('entry.80945765', reflection);

    try {

        await fetch(postUrl, {
            method: 'POST',
            mode: 'no-cors', 
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData.toString()
        });

        if (typeof showMsg === 'function') {
            showMsg("🚀 選択した成績と内省を先生に送信しました！");
        }

        closeReflectionModal();
        
        const triggerBtn = document.getElementById('submitScoreTriggerBtn');

        if (triggerBtn) {
            triggerBtn.classList.add('hidden');
        }
        
    } catch (error) {

        alert("⚠️ 送信に失敗しました。電波の良いところで再度お試しください。");

    } finally {

        finalSubmitBtn.disabled = false;
        finalSubmitBtn.innerHTML = "<span>🚀</span> この内容で送信する";
    }
}


// ==========================================
// ★ 教師フォームURL
// ==========================================
window.addEventListener('DOMContentLoaded', () => {

    const savedFormUrl = localStorage.getItem('copeak_teacher_form_url');
    const inputEl = document.getElementById('teacherFormUrlInput');

    if (savedFormUrl && inputEl) {
        inputEl.value = savedFormUrl;
    }
});

function saveTeacherFormUrl() {

    const inputUrl = document.getElementById('teacherFormUrlInput').value.trim();
    
    if (inputUrl === "") {

        localStorage.removeItem('copeak_teacher_form_url');

        if (typeof showMsg === 'function') {
            showMsg("🗑️ 成績回収フォームの登録を解除しました");
        }

        return;
    }

    if (!inputUrl.includes('docs.google.com/forms/')) {

        alert("⚠️ 正しいGoogleフォームのURLを入力してください。");

        return;
    }

    localStorage.setItem('copeak_teacher_form_url', inputUrl);

    if (typeof showMsg === 'function') {
        showMsg("✅ 成績回収フォームのURLを保存しました！");
    }
}


// ==========================================
// ★ Teacher Mode
// ==========================================
window.addEventListener('DOMContentLoaded', () => {

    const isTeacherMode =
        localStorage.getItem('copeak_teacher_mode') === 'true';

    const area = document.getElementById('teacherModeArea');

    if (area) {
        area.style.display = isTeacherMode ? 'flex' : 'none';
    }
});

function toggleTeacherMode() {

    const area = document.getElementById('teacherModeArea');

    if (!area) return;

    if (area.style.display === 'none' || area.style.display === '') {

        const confirmOpen = confirm(
            "教員用の教材作成・設定メニューを開きますか？\n（生徒には操作させないでください）"
        );

        if (confirmOpen) {

            area.style.display = 'flex';

            localStorage.setItem('copeak_teacher_mode', 'true');

            if (typeof showMsg === 'function') {
                showMsg("🔓 教員モードをオンにしました");
            }
        }

    } else {

        area.style.display = 'none';

        localStorage.setItem('copeak_teacher_mode', 'false');

        if (typeof showMsg === 'function') {
            showMsg("🔒 教員モードをオフにしました（生徒用画面）");
        }
    }
}


// ==========================================
// ★ Splash Screen
// ==========================================
window.addEventListener('DOMContentLoaded', () => {

    const style = document.createElement('style');

    style.innerHTML = `
        @keyframes splashEntrance {
            0% { opacity: 0; transform: translateY(40px) scale(0.9); filter: blur(10px); }
            100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }

        @keyframes warpExit {
            0% { transform: scale(1); opacity: 1; filter: blur(0); }
            20% { transform: scale(0.95); opacity: 1; filter: blur(0); }
            100% { transform: scale(6); opacity: 0; filter: blur(20px); visibility: hidden; }
        }

        .animate-splash-entrance {
            animation: splashEntrance 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) 0.1s forwards;
        }

        .warp-animation {
            animation: warpExit 1.2s cubic-bezier(0.7, 0, 0.2, 1) forwards;
            pointer-events: none;
        }

        .mach-anim-text {
            display: inline-block;
            font-size: 2rem;
            font-weight: 900;
            color: white;
            position: relative;
            font-family: 'Lora', serif;
            text-shadow: 0 4px 15px rgba(0,0,0,0.5);
        }

        @media (min-width: 768px) {
            .mach-anim-text {
                font-size: 3rem;
            }
        }

        .mach-anim-text span {
            display: inline-block;
            animation: mach-text-fade-up 1s cubic-bezier(0.2, 0.8, 0.2, 1) both;
            animation-delay: calc(0.5s + (var(--char-index) * 0.05s));
        }

        @keyframes mach-text-fade-up {
            0% {
                opacity: 0;
                transform: translateY(20px);
                filter: blur(5px);
            }

            100% {
                opacity: 1;
                transform: translateY(0);
                filter: blur(0);
            }
        }
    `;

    document.head.appendChild(style);

    const splash = document.createElement('div');

    splash.id = 'dynamicSplashScreen';

    splash.className =
        'fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden transition-colors duration-1000';

    splash.style.background =
        'radial-gradient(circle at center, #0f172a 0%, #020617 100%)';
    
    splash.innerHTML = `
        <div class="absolute inset-0 z-0 flex items-center justify-center opacity-40 pointer-events-none">
            <div class="w-[40rem] h-[40rem] bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div class="absolute w-[30rem] h-[30rem] bg-blue-500/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
        </div>

        <div id="splashContent" class="relative z-10 flex flex-col items-center opacity-0 animate-splash-entrance">
            <img src="logo.png" alt="Copeak Logo" class="w-40 md:w-56 mb-4 drop-shadow-2xl">

            <p class="text-emerald-400 font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-6 opacity-80">
                English Shadowing Platform
            </p>

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

    document.getElementById('enterCopeakBtn').addEventListener('click', () => {

        splash.classList.add('warp-animation');

        setTimeout(() => {
            splash.remove();
        }, 1200);
    });
});

let fsAiUtterance = null;
let isFsAudioPlaying = false;

window.isFsImageShowing = false; 

function openFullscreenPreview() {

    if (!currentCustomLesson) return;
    
    const oldOverlay = document.getElementById('fullscreenPreviewOverlay');

    if (oldOverlay) {
        oldOverlay.remove();
    }

    const overlay = document.createElement('div');

    overlay.id = 'fullscreenPreviewOverlay';

    overlay.className =
        'fixed top-0 left-0 w-full h-[100dvh] z-[9999] bg-[#faf8f5] flex flex-col transition-all duration-300 opacity-0 overflow-hidden';
    
    overlay.innerHTML = `
        <div class="flex items-center justify-between p-4 md:p-6 border-b border-stone-200 bg-white shadow-sm shrink-0 z-20">

            <div class="flex items-center gap-3">

                <button onclick="closeFullscreenPreview()" class="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-stone-100 hover:bg-stone-300 text-stone-600 font-bold text-xl transition shadow-inner border border-stone-200">
                    ✕
                </button>

                <button id="fsToggleImageBtn" onclick="toggleFsMemoImage()" class="hidden px-3 py-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 font-bold rounded-sm text-xs transition border border-emerald-200 shadow-sm flex items-center gap-1.5 whitespace-nowrap">
                    🖼️ <span class="hidden sm:inline">画像 OFF</span>
                </button>

            </div>

            <h2 id="fsTitleDisplay" class="text-base md:text-xl font-bold text-stone-800 serif-font truncate px-4 flex-1 text-center">
                Preview
            </h2>

            <div class="flex gap-2">

                <button id="fsAiVoiceBtn" onclick="toggleFsAIVoice()" class="px-3 md:px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs md:text-sm font-bold rounded-sm shadow-md transition flex items-center gap-1">
                    🤖 <span class="hidden sm:inline">AI音声</span>
                </button>

                <button id="fsOriginalAudioBtn" onclick="toggleFsOriginalAudio()" class="hidden px-3 md:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs md:text-sm font-bold rounded-sm shadow-md transition flex items-center gap-1">
                    ▶️ <span class="hidden sm:inline">お手本再生</span>
                </button>

            </div>

        </div>

        <div class="flex-1 flex overflow-hidden w-full max-w-[1600px] mx-auto">

            <div id="fsImagePane" class="w-1/2 h-full bg-stone-100 border-r border-stone-200 p-4 md:p-8 hidden flex-col justify-center items-center transition-all duration-300">

                <img id="fsMemoImageDisplay" src="" alt="Memo" class="w-full h-full object-contain drop-shadow-sm rounded-md">

            </div>

            <div id="fsTextPane" class="w-full h-full overflow-y-auto p-6 md:p-12 lg:p-16 pb-40 transition-all duration-300 relative" style="-webkit-overflow-scrolling: touch;">

                <div id="fsEngContainer" class="text-2xl md:text-4xl leading-relaxed md:leading-[2.5] text-stone-800 font-medium serif-font max-w-4xl mx-auto"></div>

                <div id="fsJpnContainer" class="text-base md:text-xl text-stone-500 max-w-4xl mx-auto border-t-2 border-dashed border-stone-300 pt-8 mt-8 hidden leading-relaxed"></div>

                <div class="h-48 md:h-64 w-full shrink-0"></div> 

            </div>

        </div>
    `;

    document.body.appendChild(overlay);

    document.getElementById('fsTitleDisplay').innerText =
        currentCustomLesson.title
            ? currentCustomLesson.title.replace('🔗 ', '')
            : 'Preview';
    
    const fsToggleBtn = document.getElementById('fsToggleImageBtn');
    const fsImageDisplay = document.getElementById('fsMemoImageDisplay');
    
    if (currentCustomLesson.memoImage) {

        fsImageDisplay.src = currentCustomLesson.memoImage;

        fsToggleBtn.classList.remove('hidden');

        window.isFsImageShowing = false; 

        window.toggleFsMemoImage();

    } else {

        fsToggleBtn.classList.add('hidden');

        window.isFsImageShowing = true; 

        window.toggleFsMemoImage();
    }

    let engHtml = "";

    if (
        currentCustomLesson.type === 'dialogue' &&
        currentCustomLesson.dialogue
    ) {

        currentCustomLesson.dialogue.forEach(line => {

            engHtml += `<div class="mb-6 flex flex-col md:flex-row gap-2 md:gap-6 items-start">`;

            if (line.speaker) {

                engHtml +=
                    `<div class="bg-emerald-600/20 text-emerald-800 font-bold px-4 py-2 rounded-lg border border-emerald-500/30 text-lg md:text-2xl shrink-0 mt-2 w-32 md:w-48 text-center truncate" title="${line.speaker}">${line.speaker}</div>`;
            }

            engHtml +=
                `<div class="flex-1">${(line.text || "").replace(/([.?!]["']?)\s+/g, "$1<br><br>")}</div></div>`;
        });

    } else {

        engHtml =
            (currentCustomLesson.eng || "")
                .replace(
                    /([.?!]["']?)\s+/g,
                    "$1<br><br>"
                );
    }

    document.getElementById('fsEngContainer').innerHTML = engHtml;
    
    const jpnContainer = document.getElementById('fsJpnContainer');

    if (
        currentCustomLesson.jpn &&
        currentCustomLesson.jpn.trim() !== ""
    ) {

        jpnContainer.innerHTML =
            currentCustomLesson.jpn.replace(
                /([。？！])\s*/g,
                "$1<br><br>"
            );

        jpnContainer.classList.remove('hidden');

    } else {

        jpnContainer.classList.add('hidden');
    }
    
    const audioBtn = document.getElementById('fsOriginalAudioBtn');
    const audioPlayer = document.getElementById('audioPlayer');

    if (
        currentCustomLesson.audioBlob ||
        (
            audioPlayer &&
            audioPlayer.src &&
            audioPlayer.src !== "" &&
            !audioPlayer.src.endsWith(
                window.location.host + "/"
            )
        )
    ) {

        audioBtn.classList.remove('hidden');
    }
    
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {

        overlay.classList.remove('opacity-0');
        overlay.classList.add('opacity-100');
    });
}

window.toggleFsMemoImage = function() {

    window.isFsImageShowing = !window.isFsImageShowing;
    
    const imgPane = document.getElementById('fsImagePane');
    const txtPane = document.getElementById('fsTextPane');
    const btn = document.getElementById('fsToggleImageBtn');
    
    if (!imgPane || !txtPane || !btn) return;

    if (window.isFsImageShowing) {

        imgPane.classList.remove('hidden');
        imgPane.classList.add('flex');

        txtPane.classList.remove('w-full');
        txtPane.classList.add('w-1/2');
        
        btn.innerHTML =
            '🖼️ <span class="hidden sm:inline">画像 OFF</span>';

        btn.classList.replace('bg-emerald-100', 'bg-stone-200');
        btn.classList.replace('text-emerald-700', 'text-stone-600');
        btn.classList.replace('border-emerald-200', 'border-stone-300');

    } else {

        imgPane.classList.add('hidden');
        imgPane.classList.remove('flex');

        txtPane.classList.remove('w-1/2');
        txtPane.classList.add('w-full');
        
        btn.innerHTML =
            '🖼️ <span class="hidden sm:inline">画像 ON</span>';

        btn.classList.replace('bg-stone-200', 'bg-emerald-100');
        btn.classList.replace('text-stone-600', 'text-emerald-700');
        btn.classList.replace('border-stone-300', 'border-emerald-200');
    }
};

function closeFullscreenPreview() {

    const overlay = document.getElementById('fullscreenPreviewOverlay');

    if (!overlay) return;
    
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }

    const audioPlayer = document.getElementById('audioPlayer');

    if (audioPlayer) {
        audioPlayer.pause();
    }

    isFsAudioPlaying = false;
    
    overlay.classList.remove('opacity-100');
    overlay.classList.add('opacity-0');

    setTimeout(() => {
        overlay.remove(); 
        document.body.style.overflow = '';
    }, 300);
}

function toggleFsAIVoice() {

    if (!currentCustomLesson) return;

    const btn = document.getElementById('fsAiVoiceBtn');
    
    const audioPlayer = document.getElementById('audioPlayer');

    if (audioPlayer) {
        audioPlayer.pause();

        isFsAudioPlaying = false;

        document.getElementById('fsOriginalAudioBtn').innerHTML =
            '▶️ <span class="hidden sm:inline">お手本再生</span>';
    }

    if (window.speechSynthesis.speaking) {

        window.speechSynthesis.cancel();

        btn.innerHTML =
            '🤖 <span class="hidden sm:inline">AI音声</span>';

        btn.classList.remove('bg-red-600', 'hover:bg-red-700');
        btn.classList.add('bg-purple-600', 'hover:bg-purple-700');

        return;
    }

    fsAiUtterance = new SpeechSynthesisUtterance(
        currentCustomLesson.eng
    );

    fsAiUtterance.lang =
        currentCustomLesson.lang || 'en-US';

    fsAiUtterance.rate = 0.9; 
    
    fsAiUtterance.onend = () => {

        btn.innerHTML =
            '🤖 <span class="hidden sm:inline">AI音声</span>';

        btn.classList.remove('bg-red-600', 'hover:bg-red-700');
        btn.classList.add('bg-purple-600', 'hover:bg-purple-700');
    };

    window.speechSynthesis.speak(fsAiUtterance);

    btn.innerHTML =
        '⏹ <span class="hidden sm:inline">AI停止</span>';

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

        aiBtn.innerHTML =
            '🤖 <span class="hidden sm:inline">AI音声</span>';

        aiBtn.classList.remove('bg-red-600', 'hover:bg-red-700');
        aiBtn.classList.add('bg-purple-600', 'hover:bg-purple-700');
    }

    if (isFsAudioPlaying) {

        audioPlayer.pause();

        btn.innerHTML =
            '▶️ <span class="hidden sm:inline">お手本再生</span>';

        btn.classList.remove('bg-red-600', 'hover:bg-red-700');
        btn.classList.add('bg-blue-600', 'hover:bg-blue-700');

        isFsAudioPlaying = false;

    } else {

        audioPlayer.play();

        btn.innerHTML =
            '⏹ <span class="hidden sm:inline">再生停止</span>';

        btn.classList.remove('bg-blue-600', 'hover:bg-blue-700');
        btn.classList.add('bg-red-600', 'hover:bg-red-700');

        isFsAudioPlaying = true;
        
        audioPlayer.onended = () => {

            btn.innerHTML =
                '▶️ <span class="hidden sm:inline">お手本再生</span>';

            btn.classList.remove('bg-red-600', 'hover:bg-red-700');
            btn.classList.add('bg-blue-600', 'hover:bg-blue-700');

            isFsAudioPlaying = false;
        };
    }
}


// ==========================================
// ★追加・改修: 未発話語彙リストと個別発音練習機能（爆速判定・サウンド・大文字維持 対応版）
// ==========================================

// 🌟 1. 心地よい正解サウンドを生成する関数
function playMwSuccessSound() {

    try {

        const AudioContext =
            window.AudioContext ||
            window.webkitAudioContext;

        if (!AudioContext) return;

        const ctx =
            new AudioContext();
        
        // ピロン♪ という明るい和音（A5, C#6, E6）を鳴らす
        [880, 1108.73, 1318.51].forEach((freq, i) => { 

            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'sine';
            osc.frequency.value = freq;

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(ctx.currentTime + i * 0.05);

            gain.gain.setValueAtTime(
                0.2,
                ctx.currentTime + i * 0.05
            );

            gain.gain.exponentialRampToValueAtTime(
                0.001,
                ctx.currentTime + i * 0.05 + 0.5
            );

            osc.stop(
                ctx.currentTime + i * 0.05 + 0.5
            );
        });

    } catch (e) {

        console.log("Audio not supported");
    }
}

let currentMissingWords = [];
let currentMissingWordIndex = 0;
let mwRecognition = null;
let isMissingWordRecording = false;


// ==========================================
// 未発話リスト専用SpeechRecognition
// ==========================================
if (
    typeof window.SpeechRecognition === 'function' ||
    typeof window.webkitSpeechRecognition === 'function'
) {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

    mwRecognition =
        new SpeechRecognition();

    mwRecognition.continuous = false;
    
    // 【レスポンス高速化】途中経過をリアルタイムで取得する
    mwRecognition.interimResults = true; 

    mwRecognition.onresult = (event) => {

        const targetWord =
            currentMissingWords[
                currentMissingWordIndex
            ].toLowerCase();

        const feedbackEl =
            document.getElementById('mwFeedback');

        const wordDisplayEl =
            document.getElementById('mwTargetWord');

        // 🌟 同音異義語（文脈なしの単語発音時にAIが誤変換しやすい語）の救済リスト
        const homophones = {

            "to": ["two", "too", "to"],
            "two": ["to", "too", "two"],
            "too": ["to", "two", "too"],

            "for": ["four", "for"],
            "four": ["for", "four"],

            "there": ["their", "they're", "there"],
            "their": ["there", "they're", "their"],
            "they're": ["there", "their", "they're"],

            "i": ["eye", "i"],
            "eye": ["i", "eye"],

            "be": ["bee", "be"],
            "bee": ["be", "bee"],

            "know": ["no", "know"],
            "no": ["know", "no"],

            "here": ["hear", "here"],
            "hear": ["here", "hear"],

            "right": ["write", "right"],
            "write": ["right", "write"],

            "sea": ["see", "sea"],
            "see": ["sea", "see"],

            "sun": ["son", "sun"],
            "son": ["sun", "son"],

            "one": ["won", "one"],
            "won": ["one", "won"],

            "a": ["uh", "ah", "a"]
        };

        // ターゲット単語が救済リストにあればその配列を、
        // なければターゲット単語のみを許可リストとする
        const acceptableWords =
            homophones[targetWord] ||
            [targetWord];

        // 話している途中のテキストも含めてリアルタイムで判定ループ
        for (
            let i = event.resultIndex;
            i < event.results.length;
            i++
        ) {

            const rawTranscript =
                event.results[i][0]
                    .transcript
                    .toLowerCase();
            
            // 🌟 修正ポイント:
            // \s を追加してスペースを消さずに残し、
            // 単語ごとに配列に分割する
            const spokenWords =
                rawTranscript
                    .replace(
                        /[^a-z0-9\u00C0-\u017F\u0900-\u097F\s']/gi,
                        ''
                    )
                    .split(/\s+/)
                    .filter(w => w);

            // 「部分一致」ではなく独立単語として完全一致
            const isMatch =
                spokenWords.some(
                    w =>
                        acceptableWords.includes(w)
                );

            if (isMatch) {

                mwRecognition.stop(); 

                playMwSuccessSound();
                
                feedbackEl.innerHTML =
                    `<span class="text-emerald-600 text-2xl font-black inline-block">✨ CLEAR!</span> <span class="text-xs text-stone-400 block mt-1">(Recognized: ${rawTranscript})</span>`;
                
                if (wordDisplayEl) {

                    wordDisplayEl.classList.add(
                        'text-emerald-600'
                    );

                    wordDisplayEl.style.transform =
                        "scale(1.2)";

                    setTimeout(() => {
                        wordDisplayEl.style.transform =
                            "scale(1)";
                    }, 300);
                }

                isMissingWordRecording = false;

                updateMwMicBtnUI();

                return;

            } else if (event.results[i].isFinal) {

                feedbackEl.innerHTML =
                    `<span class="text-orange-500 text-lg">❌ Close...</span> <span class="text-xs text-stone-400 block mt-1">(Recognized: ${rawTranscript})</span>`;

                isMissingWordRecording = false;

                updateMwMicBtnUI();
            }
        }
    };

    mwRecognition.onerror = (event) => {

        const feedbackEl =
            document.getElementById('mwFeedback');

        if (feedbackEl) {
            feedbackEl.innerHTML =
                `<span class="text-red-500">エラーが発生しました</span>`;
        }

        isMissingWordRecording = false;

        updateMwMicBtnUI();
    };

    mwRecognition.onend = () => {

        isMissingWordRecording = false;

        updateMwMicBtnUI();
    };
}

function openMissingWordsModal() {

    const oldModal =
        document.getElementById(
            'missingWordsModal'
        );

    if (oldModal) {
        oldModal.remove();
    }

    if (
        !currentCustomLesson ||
        !currentCustomLesson.eng
    ) {
        return;
    }

    // 🌟 【大文字・小文字の維持】
    const originalWords =
        currentCustomLesson.eng
            .replace(
                /[^a-zA-Z0-9\u00C0-\u017F\u0900-\u097F\s']/g,
                ''
            )
            .split(/\s+/)
            .filter(w => w);

    // 認識された音声テキストを抽出
    const recDisplay =
        document.getElementById(
            'recognizedTextDisplay'
        );

    const spokenText =
        (
            recDisplay &&
            !recDisplay.innerText.includes('※')
        )
            ? recDisplay.innerText
                .toLowerCase()
                .replace(
                    /[^a-z0-9\u00C0-\u017F\u0900-\u097F\s']/gi,
                    ''
                )
            : '';

    const spokenWords =
        spokenText
            .split(/\s+/)
            .filter(w => w);

    // 小文字同士で比較しつつ、表示用には元の単語を残す
    const missingWords =
        originalWords.filter(
            word =>
                !spokenWords.includes(
                    word.toLowerCase()
                )
        );
    
    // 大文字小文字の違いによる重複を防ぐ
    const uniqueMap =
        new Map();

    missingWords.forEach(w => {

        if (!uniqueMap.has(w.toLowerCase())) {
            uniqueMap.set(
                w.toLowerCase(),
                w
            );
        }
    });

    currentMissingWords =
        Array.from(
            uniqueMap.values()
        );

    const modal =
        document.createElement(
            'div'
        );

    modal.id =
        'missingWordsModal';

    modal.className =
        'fixed inset-0 z-[10000] bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in';

    document.body.appendChild(
        modal
    );

    renderMissingWordsListView();
}


// ==========================================
// リスト表示モード
// ==========================================
function renderMissingWordsListView() {

    const modal =
        document.getElementById(
            'missingWordsModal'
        );

    if (!modal) return;

    let listHtml = '';

    if (
        currentMissingWords.length === 0
    ) {

        listHtml =
            `<p class="text-sm text-emerald-600 font-bold py-8 text-center">🎉 素晴らしい！すべての単語が完璧に認識されています。</p>`;

    } else {

        listHtml =
            `<div class="flex flex-wrap gap-2 max-h-[35vh] overflow-y-auto p-1 border border-stone-100 bg-stone-50 rounded-sm p-3 text-left">`;

        currentMissingWords.forEach(
            (word, index) => {

                listHtml +=
                    `<span onclick="startMissingWordPractice(${index})" class="px-2.5 py-1.5 bg-white border border-stone-300 rounded-sm text-xs font-bold text-stone-700 shadow-sm cursor-pointer hover:bg-emerald-50 hover:border-emerald-400 hover:text-emerald-800 transition-colors active:scale-95 flex items-center gap-1" title="タップして練習する">🎯 ${word}</span>`;
            }
        );

        listHtml +=
            `</div>`;
    }

    modal.innerHTML = `
        <div class="bg-white rounded-sm max-w-md w-full p-6 flex flex-col shadow-xl border border-stone-300 transform scale-100 transition-transform">

            <div class="flex justify-between items-center mb-3 border-b border-stone-200 pb-2 text-left">

                <h3 class="font-black text-base md:text-lg text-orange-800 flex items-center gap-1.5">
                    ⚠️ 未発話・認識されなかった語彙
                </h3>

                <button onclick="closeMissingWordsModal()" class="text-stone-400 hover:text-stone-600 text-lg font-bold">
                    ✕
                </button>

            </div>

            <p class="text-[11px] text-stone-500 mb-4 text-left leading-relaxed">
                スクリプト内には存在しますが、今回の音声認識で聞き取れなかった単語です（計 ${currentMissingWords.length} 語）。<br>
                <strong class="text-emerald-700 bg-emerald-50 px-1 mt-1 inline-block">
                    💡 単語をタップすると個別発音練習ができます。
                </strong>
            </p>
            
            ${listHtml}
            
            <button onclick="closeMissingWordsModal()" class="mt-5 w-full py-2.5 bg-stone-800 hover:bg-stone-900 text-white font-bold rounded-sm text-xs transition shadow-sm">
                閉じる
            </button>

        </div>
    `;
}


// ==========================================
// ドリル練習モード開始
// ==========================================
function startMissingWordPractice(index) {

    currentMissingWordIndex =
        index;

    renderMissingWordPracticeView();
}


// ==========================================
// ドリル練習モードUI
// ==========================================
function renderMissingWordPracticeView() {

    const modal =
        document.getElementById(
            'missingWordsModal'
        );

    if (!modal) return;

    const word =
        currentMissingWords[
            currentMissingWordIndex
        ];

    const escapedWord =
        word.replace(
            /'/g,
            "\\'"
        );

    const isFirst =
        currentMissingWordIndex === 0;

    const isLast =
        currentMissingWordIndex ===
        currentMissingWords.length - 1;

    modal.innerHTML = `
        <div class="bg-white rounded-sm max-w-md w-full p-6 flex flex-col shadow-xl border border-stone-300">

            <div class="flex justify-between items-center mb-4 border-b border-stone-200 pb-2">

                <button onclick="renderMissingWordsListView()" class="text-stone-500 hover:text-stone-800 font-bold text-xs flex items-center gap-1">
                    ◀ リストへ戻る
                </button>

                <span class="text-xs font-bold text-stone-400 tracking-widest">
                    ${currentMissingWordIndex + 1} / ${currentMissingWords.length}
                </span>

                <button onclick="closeMissingWordsModal()" class="text-stone-400 hover:text-stone-600 text-lg font-bold">
                    ✕
                </button>

            </div>

            <div class="text-center py-6">

                <p class="text-[10px] text-stone-400 font-bold tracking-widest uppercase mb-1">
                    Target Word
                </p>

                <h3 class="text-4xl md:text-5xl font-black text-stone-800 mb-6 serif-font tracking-tight transition-all duration-300" id="mwTargetWord">
                    ${word}
                </h3>

                <div class="flex justify-center gap-3 md:gap-4 mb-4">

                    <button onclick="speakWord('${escapedWord}')" class="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold rounded-full transition text-sm flex items-center gap-1.5 border border-stone-300 shadow-sm">
                        🔊 お手本
                    </button>

                    <button onclick="toggleMissingWordMic()" id="mwMicBtn" class="px-6 py-2.5 bg-stone-800 hover:bg-stone-700 text-white font-bold rounded-full transition text-sm flex items-center gap-1.5 shadow-md">
                        🎤 発音する
                    </button>

                </div>

                <div id="mwFeedback" class="h-12 flex flex-col items-center justify-center text-sm font-bold text-stone-500">
                    マイクボタンを押して発音してください
                </div>

            </div>

            <div class="flex justify-between mt-2 pt-4 border-t border-stone-100">

                <button onclick="navMissingWord(-1)" class="px-5 py-2.5 bg-stone-100 text-stone-600 font-bold rounded-sm text-xs transition ${isFirst ? 'opacity-30 cursor-not-allowed' : 'hover:bg-stone-200'}" ${isFirst ? 'disabled' : ''}>
                    ◀ 前の単語
                </button>

                <button onclick="navMissingWord(1)" class="px-5 py-2.5 bg-emerald-600 text-white font-bold rounded-sm text-xs transition shadow-sm ${isLast ? 'opacity-30 cursor-not-allowed' : 'hover:bg-emerald-700'}" ${isLast ? 'disabled' : ''}>
                    次の単語 ▶
                </button>

            </div>

        </div>
    `;
}

function navMissingWord(dir) {

    if (isMissingWordRecording) {
        toggleMissingWordMic();
    }

    currentMissingWordIndex +=
        dir;

    if (currentMissingWordIndex < 0) {
        currentMissingWordIndex = 0;
    }

    if (
        currentMissingWordIndex >=
        currentMissingWords.length
    ) {
        currentMissingWordIndex =
            currentMissingWords.length - 1;
    }

    renderMissingWordPracticeView();
}

function toggleMissingWordMic() {

    if (!mwRecognition) {

        alert(
            "このブラウザは音声認識に対応していません。"
        );

        return;
    }

    if (isMissingWordRecording) {

        mwRecognition.stop();

    } else {

        const feedbackEl =
            document.getElementById(
                'mwFeedback'
            );

        const wordDisplayEl =
            document.getElementById(
                'mwTargetWord'
            );

        // 再録音時に文字の色とアニメーションを元に戻す
        if (wordDisplayEl) {
            wordDisplayEl.classList.remove(
                'text-emerald-600'
            );

            wordDisplayEl.style.transform =
                "scale(1)";
        }
        
        if (feedbackEl) {
            feedbackEl.innerHTML =
                `<span class="text-blue-500 animate-pulse text-lg">Listening...</span>`;
        }
        
        if (
            currentCustomLesson &&
            currentCustomLesson.lang
        ) {

            mwRecognition.lang =
                currentCustomLesson.lang;

        } else {

            mwRecognition.lang =
                'en-US';
        }
        
        try {

            mwRecognition.start();

            isMissingWordRecording =
                true;

        } catch (e) {

            isMissingWordRecording =
                false;
        }
    }

    updateMwMicBtnUI();
}

function updateMwMicBtnUI() {

    const btn =
        document.getElementById(
            'mwMicBtn'
        );

    if (!btn) return;

    if (isMissingWordRecording) {

        btn.innerHTML =
            `⏹ 停止する`;

        btn.classList.replace(
            'bg-stone-800',
            'bg-red-600'
        );

        btn.classList.replace(
            'hover:bg-stone-700',
            'hover:bg-red-700'
        );

    } else {

        btn.innerHTML =
            `🎤 発音する`;

        btn.classList.replace(
            'bg-red-600',
            'bg-stone-800'
        );

        btn.classList.replace(
            'hover:bg-red-700',
            'hover:bg-stone-700'
        );
    }
}

function closeMissingWordsModal() {

    if (isMissingWordRecording) {

        try {
            mwRecognition.stop();
        } catch (e) {}

        isMissingWordRecording =
            false;
    }

    const modal =
        document.getElementById(
            'missingWordsModal'
        );

    if (modal) {
        modal.remove();
    }
}

function speakWord(word) {

    if ('speechSynthesis' in window) {

        window.speechSynthesis.cancel();

        const utterance =
            new SpeechSynthesisUtterance(
                word
            );

        utterance.lang =
            (
                currentCustomLesson &&
                currentCustomLesson.lang
            )
                ? currentCustomLesson.lang
                : 'en-US';

        utterance.rate =
            0.9;

        window.speechSynthesis.speak(
            utterance
        );
    }
}


// ==========================================
// ★追加: 録音を途中でキャンセルして結果を残さずに戻る機能
// ==========================================
window.historyLengthBeforeCancel = 0; 

function cancelRecording() {

    window.isCopeakCanceling =
        true;

    window.historyLengthBeforeCancel =
        (
            currentCustomLesson &&
            currentCustomLesson.history
        )
            ? currentCustomLesson.history.length
            : 0;

    if (typeof toggleRecording === 'function') {
        toggleRecording(); 
    }

    if (typeof resetLearningState === 'function') {
        resetLearningState();
    }
}


// ==========================================
// ★追加: Sound Questからの引き継ぎデータ（Transfer）を受け取る
// ==========================================
window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {

        const sqDataStr =
            sessionStorage.getItem(
                'copeak_sq_transfer'
            );

        if (sqDataStr) {

            sessionStorage.removeItem(
                'copeak_sq_transfer'
            );
            
            try {

                const sqData =
                    JSON.parse(
                        sqDataStr
                    );

                const pseudoLesson = {
                    id: "sq_" + Date.now(),
                    title: sqData.title,
                    eng: sqData.eng,
                    jpn: sqData.jpn,
                    lang: "en-US",
                    target: "custom"
                };
                
                currentCustomLesson =
                    pseudoLesson;

                if (
                    typeof openLearningScreen ===
                    'function'
                ) {

                    openLearningScreen(
                        pseudoLesson
                    );

                    if (
                        typeof showMsg ===
                        'function'
                    ) {

                        showMsg(
                            "🎯 Sound Questの発音課題を引き継ぎました！"
                        );
                    }
                }

            } catch (e) {

                console.error(
                    "Sound Quest 連携エラー:",
                    e
                );
            }
        }

    }, 800); 
});

// quickshare.js: Copeak Quick Share (Appwrite) Phase 1
// テキスト教材を24時間だけクラウド共有し、失敗時は従来共有へ戻す
// ==========================================

const COPEAK_QUICK_SHARE_API = 'https://starter-function-u3jy.sgp.appwrite.run';

// ui.js にある従来の長いURL共有を保存しておく
const generateLegacyShareLink = (typeof window.generateShareLink === 'function')
    ? window.generateShareLink
    : null;

function buildQuickSharePayload(lesson) {
    const savedFormUrl = localStorage.getItem('copeak_teacher_form_url');
    const formUrl = lesson.formUrl || savedFormUrl || '';

    return {
        title: String(lesson.title || 'Shared Lesson').replace(/^🔗\s*/, ''),
        eng: lesson.eng || '',
        jpn: lesson.jpn || '',
        lang: lesson.lang || 'en-US',
        type: lesson.type || 'standard',
        dialogue: Array.isArray(lesson.dialogue) ? lesson.dialogue : [],
        formUrl
    };
}

async function createQuickShare(lesson) {
    const response = await fetch(`${COPEAK_QUICK_SHARE_API}/api/share`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(buildQuickSharePayload(lesson))
    });

    let data = null;

    try {
        data = await response.json();
    } catch (e) {
        throw new Error('Quick Share APIの応答を読み取れませんでした');
    }

    if (!response.ok || !data || data.ok !== true || !data.id) {
        const reason = data && data.reason
            ? data.reason
            : `HTTP ${response.status}`;

        throw new Error(reason);
    }

    return data;
}

async function fetchQuickShareLesson(shareId) {
    const safeId = String(shareId || '').trim();

    if (!safeId) {
        throw new Error('共有IDがありません');
    }

    const response = await fetch(
        `${COPEAK_QUICK_SHARE_API}/api/share/${encodeURIComponent(safeId)}`,
        {
            method: 'GET'
        }
    );

    let data = null;

    try {
        data = await response.json();
    } catch (e) {
        throw new Error('Quick Share APIの応答を読み取れませんでした');
    }

    if (
        response.status === 410 ||
        (data && data.reason === 'expired')
    ) {
        const err = new Error('expired');
        err.code = 'expired';
        throw err;
    }

    if (
        response.status === 404 ||
        (data && data.reason === 'not_found')
    ) {
        const err = new Error('not_found');
        err.code = 'not_found';
        throw err;
    }

    if (
        !response.ok ||
        !data ||
        data.ok !== true ||
        !data.lesson
    ) {
        const reason = data && data.reason
            ? data.reason
            : `HTTP ${response.status}`;

        throw new Error(reason);
    }

    return data.lesson;
}

function buildQuickShareUrl(shareId) {
    const baseUrl = window.location.origin + window.location.pathname;

    return `${baseUrl}?l=${encodeURIComponent(shareId)}`;
}

async function copyTextSafely(text) {
    if (
        navigator.clipboard &&
        window.isSecureContext
    ) {
        try {
            await navigator.clipboard.writeText(text);
            return true;

        } catch (e) {
            // Safari等では非同期通信後に
            // Clipboard権限を失うことがあるためfallbackへ
        }
    }

    try {
        const textarea = document.createElement('textarea');

        textarea.value = text;
        textarea.setAttribute('readonly', '');

        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        textarea.style.opacity = '0';

        document.body.appendChild(textarea);

        textarea.select();
        textarea.setSelectionRange(
            0,
            textarea.value.length
        );

        const copied = document.execCommand('copy');

        textarea.remove();

        return copied;

    } catch (e) {
        return false;
    }
}

function showQuickShareLinkFallback(url) {
    const old = document.getElementById(
        'quickShareLinkModal'
    );

    if (old) {
        old.remove();
    }

    const modal = document.createElement('div');

    modal.id = 'quickShareLinkModal';

    modal.className =
        'fixed inset-0 z-[30000] bg-black/60 ' +
        'flex items-center justify-center p-4 backdrop-blur-sm';

    modal.innerHTML = `
        <div
            class="
                bg-white
                w-full
                max-w-lg
                rounded-sm
                border-2
                border-stone-800
                shadow-2xl
                p-5
                md:p-6
            "
        >
            <div
                class="
                    flex
                    items-center
                    justify-between
                    gap-4
                    mb-4
                "
            >
                <h3
                    class="
                        font-black
                        text-stone-800
                        text-lg
                    "
                >
                    🔗 Quick Share Link
                </h3>

                <button
                    id="quickShareCloseBtn"
                    class="
                        text-stone-400
                        hover:text-stone-700
                        text-xl
                        font-bold
                    "
                >
                    ✕
                </button>
            </div>

            <p
                class="
                    text-xs
                    text-stone-500
                    mb-3
                "
            >
                自動コピーできなかったため、
                下のリンクを長押し／選択してコピーしてください。
            </p>

            <textarea
                id="quickShareLinkText"
                readonly
                class="
                    w-full
                    min-h-24
                    p-3
                    text-sm
                    border
                    border-stone-300
                    rounded-sm
                    bg-stone-50
                    text-stone-800
                    break-all
                "
            >${url}</textarea>

            <button
                id="quickShareCopyBtn"
                class="
                    mt-4
                    w-full
                    py-3
                    bg-emerald-700
                    hover:bg-emerald-800
                    text-white
                    font-bold
                    rounded-sm
                    transition
                "
            >
                リンクをコピー
            </button>
        </div>
    `;

    document.body.appendChild(modal);

    const close = () => {
        modal.remove();
    };

    document.getElementById(
        'quickShareCloseBtn'
    ).onclick = close;

    modal.addEventListener(
        'click',
        (e) => {
            if (e.target === modal) {
                close();
            }
        }
    );

    document.getElementById(
        'quickShareCopyBtn'
    ).onclick = async () => {
        const copied = await copyTextSafely(url);

        if (copied) {
            if (typeof showMsg === 'function') {
                showMsg(
                    '🔗 Quick Shareリンクをコピーしました！'
                );
            }

            close();
        }
    };
}

async function generateQuickShareLink() {
    if (!currentCustomLesson) {
        return;
    }

    if (typeof showMsg === 'function') {
        showMsg(
            '☁️ Quick Shareリンクを作成しています…'
        );
    }

    try {
        const result = await createQuickShare(
            currentCustomLesson
        );

        const shortUrl = buildQuickShareUrl(
            result.id
        );

        const copied = await copyTextSafely(
            shortUrl
        );

        if (copied) {
            if (typeof showMsg === 'function') {
                showMsg(
                    '⚡ Quick Shareリンクをコピーしました！（24時間有効）'
                );
            }

        } else {
            showQuickShareLinkFallback(
                shortUrl
            );
        }

        return result;

    } catch (err) {
        console.warn(
            'Quick Share failed. Falling back to Classic Share:',
            err
        );

        if (typeof showMsg === 'function') {
            showMsg(
                '⚠️ Quick Shareに失敗したため、通常共有に切り替えます'
            );
        }

        if (generateLegacyShareLink) {
            return generateLegacyShareLink();
        }

        throw err;
    }
}

// 既存の SHARE ボタンは
// onclick="generateShareLink()"
// のまま使える
window.generateShareLink =
    generateQuickShareLink;

window.createQuickShare =
    createQuickShare;

window.fetchQuickShareLesson =
    fetchQuickShareLesson;

window.buildQuickShareUrl =
    buildQuickShareUrl;

const teacherAppwrite = new Appwrite.Client()
    .setEndpoint('https://sgp.cloud.appwrite.io/v1')
    .setProject('copeak-quick-share');

const teacherAccount = new Appwrite.Account(teacherAppwrite);

function connectTeacherGoogle() {
    const base = location.origin + location.pathname;

    teacherAccount.createOAuth2Session(
        'google',
        `${base}?teacherGoogle=ok`,
        `${base}?teacherGoogle=error`,
        ['https://www.googleapis.com/auth/drive.file']
    );
}

async function checkTeacherGoogleConnection() {
    const params = new URLSearchParams(location.search);
    if (!params.has('teacherGoogle')) return;

    try {
        if (params.get('teacherGoogle') !== 'ok') throw new Error('OAuth failed');

        const user = await teacherAccount.get();
        const session = await teacherAccount.getSession('current');

        const el = document.getElementById('teacherGoogleStatus');
        const btn = document.getElementById('teacherGoogleConnectBtn');

        if (el) {
            el.textContent = `✅ Google接続済み：${user.email}`;
            el.classList.remove('hidden');
        }

        if (btn) {
            btn.textContent = 'Google再接続';
            btn.classList.remove('bg-blue-600', 'hover:bg-blue-700');
            btn.classList.add('bg-stone-500', 'hover:bg-stone-600');
        }

        console.log('Google OAuth OK', {
            email: user.email,
            googleAccessToken: !!session.providerAccessToken
        });

    } catch (e) {
        console.error('Google OAuth error:', e);
        if (typeof showMsg === 'function') showMsg('⚠️ Google接続に失敗しました');
    }

    history.replaceState({}, document.title, location.pathname);
}

document.addEventListener('DOMContentLoaded', checkTeacherGoogleConnection);

// ==========================================
// rewards-config.js
// Copeak Rewards 設定
// SP・ガチャ確率などはここだけで調整する
// ==========================================

window.COPEAK_REWARDS_CONFIG = {

    version: 1,

    // --------------------------------------
    // 1. 保存
    // --------------------------------------

    storageKey: "copeak_rewards_v1",


    // --------------------------------------
    // 2. 有効な音読の条件
    // --------------------------------------
    // 0 / 0 や音声認識失敗をReward対象から除外
    // 実際の判定処理は rewards.js が担当する
    // --------------------------------------

    validReading: {

        minAccuracy: 0.1,

        minWpm: 1,

        requireTranscript: true,

        minTranscriptLength: 1

    },


    // --------------------------------------
    // 3. SP
    // --------------------------------------

    sp: {

        // 正常な音読1回
        validReading: 10,


        // 同じ教材を繰り返した努力
        milestones: {

            5: 15,

            10: 35,

            20: 75

        },


        // Accuracy自己ベスト
        accuracyPersonalBest: {

            points: 5,

            // 3ポイント以上更新した場合
            minImprovementPoints: 3

        },


        // WPM自己ベスト
        wpmPersonalBest: {

            points: 5,

            // 5%以上更新した場合
            minImprovementRate: 0.05

        },


        // 1回の音読でもらえる
        // PBボーナスの最大値
        maxGrowthBonusPerReading: 10,


        // Copeak Levelの新しい段階を
        // 初めて達成した場合
        levelFirstAchievement: 10

    },


    // --------------------------------------
    // 4. World Capsule
    // --------------------------------------

    capsule: {

        // 1回のガチャに必要なSP
        costSP: 100,


        // ----------------------------------
        // 第1抽選
        // ----------------------------------

        // Country Card
        countryCardRate: 0.85,

        // カード以外の小さなReward
        miniRewardRate: 0.15,


        // ----------------------------------
        // Country Cardに当選した場合
        // ----------------------------------
        //
        // 60%：
        // まだ持っていない国から抽選
        //
        // 40%：
        // 197か国すべてから抽選
        // → 重複カードも発生
        //
        // ----------------------------------

        newCountryBoostRate: 0.60

    },


    // --------------------------------------
    // 5. Mini Reward
    // --------------------------------------
    // Country Cardが出なかった場合でも
    // 完全な「0」にはしない
    //
    // weightは相対的な抽選比率
    // --------------------------------------

    miniRewards: [

        {
            type: "sp",
            amount: 10,
            weight: 50
        },

        {
            type: "sp",
            amount: 20,
            weight: 35
        },

        {
            type: "sp",
            amount: 30,
            weight: 15
        }

    ],


    // --------------------------------------
    // 6. Collection
    // --------------------------------------

    collection: {

    totalCountries: 197,

    // 大容量の国データはVercelではなくjsDelivr CDNから取得
    countryDataPath:
        "https://cdn.jsdelivr.net/gh/nakacy0919-Git/copeak@501a89a588d4d781c095086abd494eabe6e6f468/countries.json",

    regions: [
        "Africa",
        "Americas",
        "Asia",
        "Europe",
        "Oceania"
    ]

},

    // --------------------------------------
    // 7. Debug
    // --------------------------------------
    // 開発中のみ true にすると、
    // rewards.js から詳細ログを出せる
    // 本番では false
    // --------------------------------------

    debug: false

};
// ==========================================
// rewards-storage.js
// Copeak Rewards 専用ローカル保存
// ※ Copeak本体の storage.js とは完全に分離
// ==========================================

(function () {
    "use strict";

    const DEFAULT_STORAGE_KEY = "copeak_rewards_v1";

    function getStorageKey() {
        return window.COPEAK_REWARDS_CONFIG?.storageKey || DEFAULT_STORAGE_KEY;
    }

    function createDefaultRewardsData() {
        const now = new Date().toISOString();

        return {
            version: 1,

            // SP
            spBalance: 0,       // 現在使えるSP
            lifetimeSP: 0,      // 今まで獲得した累計SP

            // 努力・成長
            totalReads: 0,
            explorerLevel: 1,
            lessonStats: {},

            // 過去練習ボーナス
            pastPracticeBonusImported: false,
            pastPracticeReads: 0,
            pastPracticeBonusSP: 0,
            pastPracticeImportedAt: null,

            // World Collection
            countries: {},
            capsulesOpened: 0,
            discoveryFragments: 0,
            discoveryTickets: 0,

            createdAt: now,
            updatedAt: now
        };
    }

    function normalizeRewardsData(raw) {
        const base = createDefaultRewardsData();

        if (!raw || typeof raw !== "object") {
            return base;
        }

        // 以前の試作データで totalSP を使っていた場合の互換処理
        const legacySP =
            Number.isFinite(Number(raw.totalSP))
                ? Math.max(0, Number(raw.totalSP))
                : 0;

        const spBalance =
            Number.isFinite(Number(raw.spBalance))
                ? Math.max(0, Number(raw.spBalance))
                : legacySP;

        const lifetimeSP =
            Number.isFinite(Number(raw.lifetimeSP))
                ? Math.max(0, Number(raw.lifetimeSP))
                : Math.max(spBalance, legacySP);

        return {
            ...base,
            ...raw,

            version: 1,
            spBalance,
            lifetimeSP,

            totalReads:
                Number.isFinite(Number(raw.totalReads))
                    ? Math.max(0, Math.floor(Number(raw.totalReads)))
                    : 0,

            explorerLevel:
                Number.isFinite(Number(raw.explorerLevel))
                    ? Math.max(1, Math.floor(Number(raw.explorerLevel)))
                    : 1,

            capsulesOpened:
                Number.isFinite(Number(raw.capsulesOpened))
                    ? Math.max(0, Math.floor(Number(raw.capsulesOpened)))
                    : 0,

            discoveryFragments:
                Number.isFinite(Number(raw.discoveryFragments))
                    ? Math.max(0, Math.floor(Number(raw.discoveryFragments)))
                    : 0,

            discoveryTickets:
                Number.isFinite(Number(raw.discoveryTickets))
                    ? Math.max(0, Math.floor(Number(raw.discoveryTickets)))
                    : 0,

            lessonStats:
                raw.lessonStats &&
                typeof raw.lessonStats === "object" &&
                !Array.isArray(raw.lessonStats)
                    ? raw.lessonStats
                    : {},

            countries:
                raw.countries &&
                typeof raw.countries === "object" &&
                !Array.isArray(raw.countries)
                    ? raw.countries
                    : {}
        };
    }

    function loadRewards() {
        try {
            const raw = localStorage.getItem(getStorageKey());

            if (!raw) {
                return createDefaultRewardsData();
            }

            return normalizeRewardsData(
                JSON.parse(raw)
            );

        } catch (error) {
            console.error(
                "[Copeak Rewards] load failed:",
                error
            );

            return createDefaultRewardsData();
        }
    }

    function saveRewards(data) {
        try {
            const normalized =
                normalizeRewardsData(data);

            normalized.updatedAt =
                new Date().toISOString();

            localStorage.setItem(
    getStorageKey(),
    JSON.stringify(normalized)
);

window.dispatchEvent(
    new CustomEvent(
        "copeak:rewards-updated",
        {
            detail: normalized
        }
    )
);

return normalized;

        } catch (error) {
            console.error(
                "[Copeak Rewards] save failed:",
                error
            );

            return null;
        }
    }

    function updateRewards(mutator) {
        if (typeof mutator !== "function") {
            return loadRewards();
        }

        const current =
            loadRewards();

        try {
            const next =
                mutator(current) || current;

            return saveRewards(next);

        } catch (error) {
            console.error(
                "[Copeak Rewards] update failed:",
                error
            );

            return null;
        }
    }

    function getSnapshot() {
        const data =
            loadRewards();

        if (
            typeof structuredClone ===
            "function"
        ) {
            return structuredClone(data);
        }

        return JSON.parse(
            JSON.stringify(data)
        );
    }

    // ==========================================
// 過去の音読履歴 → SP
// 初回のみ実行
// ==========================================

async function importPastPracticeBonus(
    db,
    storeName = "CustomLessons"
) {

    if (!db) {
        console.warn(
            "[Copeak Rewards] IndexedDB is not ready."
        );

        return null;
    }


    const current =
        loadRewards();


    // すでに移行済み
    if (
        current.pastPracticeBonusImported ===
        true
    ) {

        return {
            imported: false,
            reason: "already_imported",
            reads:
                Number(
                    current.pastPracticeReads ||
                    0
                ),
            bonusSP:
                Number(
                    current.pastPracticeBonusSP ||
                    0
                )
        };
    }


    // ======================================
    // Libraryの全教材を取得
    // ======================================

    const lessons =
        await new Promise(
            (resolve, reject) => {

                try {

                    const transaction =
                        db.transaction(
                            [storeName],
                            "readonly"
                        );


                    const store =
                        transaction
                            .objectStore(
                                storeName
                            );


                    const request =
                        store.getAll();


                    request.onsuccess =
                        () => {

                            resolve(
                                Array.isArray(
                                    request.result
                                )
                                    ? request.result
                                    : []
                            );
                        };


                    request.onerror =
                        () => {

                            reject(
                                request.error
                            );
                        };

                } catch (error) {

                    reject(
                        error
                    );
                }
            }
        );


    // ======================================
    // history.length を全部合計
    // ======================================

    const historyReads =
        lessons.reduce(
            (total, lesson) => {

                const history =
                    Array.isArray(
                        lesson?.history
                    )
                        ? lesson.history
                        : [];


                return (
                    total +
                    history.length
                );
            },
            0
        );


    /*
     * Rewards導入後にすでに音読した分が
     * historyにも入っている場合の二重計上防止。
     */
    const alreadyRewardedReads =
        Math.max(
            0,
            Math.floor(
                Number(
                    current.totalReads ||
                    0
                )
            )
        );


    const pastReads =
        Math.max(
            0,
            historyReads -
            alreadyRewardedReads
        );


    const bonusSP =
        pastReads * 10;


    // ======================================
    // 一度だけ付与
    // ======================================

    const saved =
        updateRewards(
            data => {

                // 二重実行防止
                if (
                    data.pastPracticeBonusImported ===
                    true
                ) {
                    return data;
                }


                data.spBalance =
                    Number(
                        data.spBalance ||
                        0
                    ) +
                    bonusSP;


                data.lifetimeSP =
                    Number(
                        data.lifetimeSP ||
                        0
                    ) +
                    bonusSP;


                data.pastPracticeBonusImported =
                    true;


                data.pastPracticeReads =
                    pastReads;


                data.pastPracticeBonusSP =
                    bonusSP;


                data.pastPracticeImportedAt =
                    new Date()
                        .toISOString();


                return data;
            }
        );


    if (!saved) {
        return null;
    }


    console.log(
        "[Copeak Rewards] Past Practice Bonus:",
        {
            historyReads,
            alreadyRewardedReads,
            pastReads,
            bonusSP
        }
    );


    return {
        imported: true,
        historyReads,
        pastReads,
        bonusSP
    };
}

    function resetRewards() {
        const fresh =
            createDefaultRewardsData();

        return saveRewards(fresh);
    }

    window.CopeakRewardsStorage = {
    load: loadRewards,
    save: saveRewards,
    update: updateRewards,
    snapshot: getSnapshot,
    reset: resetRewards,
    createDefault: createDefaultRewardsData,
    importPastPracticeBonus: importPastPracticeBonus
};

})();
// ==========================================
// rewards.js
// Copeak Rewards メインエンジン
// ==========================================

(function () {
    "use strict";

    // ------------------------------------------
    // 設定取得
    // ------------------------------------------

    function getConfig() {
        return window.COPEAK_REWARDS_CONFIG || {};
    }

    function getStorage() {
        return window.CopeakRewardsStorage || null;
    }


    // ------------------------------------------
    // 数値を安全に変換
    // ------------------------------------------

    function toNumber(value) {

        const num = Number(value);

        return Number.isFinite(num)
            ? num
            : 0;
    }


    // ------------------------------------------
    // 有効な音読か判定
    // 0 / 0・音声認識失敗などはReward対象外
    // ------------------------------------------

    function isValidReading(result) {

        const config =
            getConfig().validReading || {};

        const accuracy =
            toNumber(result?.accuracy);

        const wpm =
            toNumber(result?.wpm);

        const transcript =
            typeof result?.transcript === "string"
                ? result.transcript.trim()
                : "";


        if (
            accuracy <
            (config.minAccuracy ?? 0.1)
        ) {
            return false;
        }


        if (
            wpm <
            (config.minWpm ?? 1)
        ) {
            return false;
        }


        if (
            config.requireTranscript === true &&
            transcript.length <
            (config.minTranscriptLength ?? 1)
        ) {
            return false;
        }


        return true;
    }


    // ------------------------------------------
    // 教材ID
    // ------------------------------------------

    function getLessonKey(result) {

        return String(
            result?.lessonKey ||
            result?.lessonId ||
            ""
        ).trim();
    }


    // ------------------------------------------
    // 教材ごとの初期データ
    // ------------------------------------------

    function createLessonStats() {

        return {

            reads: 0,

            bestAccuracy: 0,

            bestWpm: 0,

            achievedLevels: [],

            lastReadAt: null

        };
    }


    // ------------------------------------------
    // Milestone SP
    // ------------------------------------------

    function getMilestoneBonus(
        reads,
        milestones
    ) {

        if (
            !milestones ||
            typeof milestones !== "object"
        ) {
            return 0;
        }

        const value =
            milestones[String(reads)] ??
            milestones[reads];

        return toNumber(value);
    }


    // ------------------------------------------
    // Level 初達成判定
    // ------------------------------------------

    function checkLevelAchievement(
        lessonStats,
        level
    ) {

        if (
            level === undefined ||
            level === null ||
            level === ""
        ) {
            return false;
        }


        const levelKey =
            String(level);


        if (
            lessonStats.achievedLevels.includes(
                levelKey
            )
        ) {
            return false;
        }


        lessonStats.achievedLevels.push(
            levelKey
        );

        return true;
    }


    // ==========================================
    // 音読結果をRewardへ反映
    // ==========================================

    function processReading(result) {

        const config =
            getConfig();

        const storage =
            getStorage();


        // Rewardファイル未読込
        if (!storage) {

            console.warn(
                "[Copeak Rewards] rewards-storage.js が読み込まれていません"
            );

            return null;
        }


        // --------------------------------------
        // 無効な音読
        // --------------------------------------

        if (!isValidReading(result)) {

            if (config.debug) {
                console.log(
                    "[Copeak Rewards] Invalid reading",
                    result
                );
            }


            return {

                valid: false,

                earnedSP: 0,

                reason: "invalid_reading",

                message:
                    "音声認識が正常に確認できなかったため、SPは加算されませんでした。"

            };
        }


        // --------------------------------------
        // 教材ID確認
        // --------------------------------------

        const lessonKey =
            getLessonKey(result);


        if (!lessonKey) {

            console.warn(
                "[Copeak Rewards] lessonId がありません"
            );

            return {

                valid: false,

                earnedSP: 0,

                reason: "missing_lesson_id"

            };
        }


        const accuracy =
            toNumber(result.accuracy);

        const wpm =
            toNumber(result.wpm);


        const spConfig =
            config.sp || {};


        let rewardResult = null;


        // ======================================
        // Storage更新
        // ======================================

        const saved =
            storage.update(data => {


                // --------------------------------
                // Lesson Stats
                // --------------------------------

                if (
                    !data.lessonStats[lessonKey]
                ) {

                    data.lessonStats[lessonKey] =
                        createLessonStats();
                }


                const stats =
                    data.lessonStats[lessonKey];


                // 古いデータ互換
                if (
                    !Array.isArray(
                        stats.achievedLevels
                    )
                ) {
                    stats.achievedLevels = [];
                }


                const previousBestAccuracy =
                    toNumber(
                        stats.bestAccuracy
                    );

                const previousBestWpm =
                    toNumber(
                        stats.bestWpm
                    );


                // --------------------------------
                // 今回のReward内訳
                // --------------------------------

                const breakdown = [];

                let earnedSP = 0;


                // =================================
                // 1. 基本努力点
                // =================================

                const baseSP =
                    toNumber(
                        spConfig.validReading
                    );


                earnedSP +=
                    baseSP;


                breakdown.push({

                    type: "reading",

                    label:
                        "Reading Complete",

                    sp: baseSP

                });


                // =================================
                // 2. 音読回数
                // =================================

                stats.reads =
                    toNumber(stats.reads) + 1;


                data.totalReads =
                    toNumber(data.totalReads) + 1;


                const currentReads =
                    stats.reads;


                // =================================
                // 3. Milestone
                // =================================

                const milestoneSP =
                    getMilestoneBonus(
                        currentReads,
                        spConfig.milestones
                    );


                if (milestoneSP > 0) {

                    earnedSP +=
                        milestoneSP;


                    breakdown.push({

                        type: "milestone",

                        label:
                            `${currentReads} Reads Milestone`,

                        sp:
                            milestoneSP

                    });
                }


                // =================================
                // 4. Accuracy Personal Best
                // =================================

                let accuracyPB =
                    false;


                // 初回はPBボーナス対象外
                if (
                    previousBestAccuracy > 0
                ) {

                    const improvement =
                        accuracy -
                        previousBestAccuracy;


                    const required =
                        toNumber(
                            spConfig
                                .accuracyPersonalBest
                                ?.minImprovementPoints
                        );


                    if (
                        improvement >=
                        required
                    ) {

                        accuracyPB = true;
                    }
                }


                if (
                    accuracy >
                    previousBestAccuracy
                ) {

                    stats.bestAccuracy =
                        accuracy;
                }


                // =================================
                // 5. WPM Personal Best
                // =================================

                let wpmPB =
                    false;


                // 初回はPBボーナス対象外
                if (
                    previousBestWpm > 0
                ) {

                    const improvementRate =
                        (
                            wpm -
                            previousBestWpm
                        ) /
                        previousBestWpm;


                    const requiredRate =
                        Number(
                            spConfig
                                .wpmPersonalBest
                                ?.minImprovementRate ??
                            0.05
                        );


                    if (
                        improvementRate >=
                        requiredRate
                    ) {

                        wpmPB = true;
                    }
                }


                if (
                    wpm >
                    previousBestWpm
                ) {

                    stats.bestWpm =
                        wpm;
                }


                // =================================
                // 6. Growth Bonus
                // =================================

                let growthSP = 0;


                if (accuracyPB) {

                    growthSP +=
                        toNumber(
                            spConfig
                                .accuracyPersonalBest
                                ?.points
                        );


                    breakdown.push({

                        type:
                            "accuracy_pb",

                        label:
                            "Accuracy Personal Best",

                        sp:
                            toNumber(
                                spConfig
                                    .accuracyPersonalBest
                                    ?.points
                            )

                    });
                }


                if (wpmPB) {

                    growthSP +=
                        toNumber(
                            spConfig
                                .wpmPersonalBest
                                ?.points
                        );


                    breakdown.push({

                        type:
                            "wpm_pb",

                        label:
                            "WPM Personal Best",

                        sp:
                            toNumber(
                                spConfig
                                    .wpmPersonalBest
                                    ?.points
                            )

                    });
                }


                // Growth Bonusの上限
                const growthLimit =
                    toNumber(
                        spConfig
                            .maxGrowthBonusPerReading
                    );


                if (
                    growthLimit > 0 &&
                    growthSP > growthLimit
                ) {

                    earnedSP +=
                        growthLimit;

                } else {

                    earnedSP +=
                        growthSP;
                }


                // =================================
                // 7. Copeak Level 初達成
                // =================================

                const levelAchieved =
                    checkLevelAchievement(
                        stats,
                        result.level
                    );


                if (levelAchieved) {

                    const levelSP =
                        toNumber(
                            spConfig
                                .levelFirstAchievement
                        );


                    earnedSP +=
                        levelSP;


                    breakdown.push({

                        type:
                            "level",

                        label:
                            `Level ${result.level} First Achievement`,

                        sp:
                            levelSP

                    });
                }


                // =================================
                // 8. SP保存
                // =================================

                data.spBalance =
                    toNumber(
                        data.spBalance
                    ) +
                    earnedSP;


                data.lifetimeSP =
                    toNumber(
                        data.lifetimeSP
                    ) +
                    earnedSP;


                stats.lastReadAt =
                    new Date().toISOString();


                // =================================
                // 今回結果
                // =================================

                rewardResult = {

                    valid: true,

                    lessonKey,

                    reads:
                        currentReads,

                    accuracy,

                    wpm,

                    accuracyPB,

                    wpmPB,

                    levelAchieved,

                    earnedSP,

                    breakdown,

                    spBalance:
                        data.spBalance,

                    lifetimeSP:
                        data.lifetimeSP,

                    bestAccuracy:
                        stats.bestAccuracy,

                    bestWpm:
                        stats.bestWpm

                };


                return data;
            });


        // 保存失敗
        if (!saved) {

            return {

                valid: false,

                earnedSP: 0,

                reason:
                    "storage_error"

            };
        }


        if (config.debug) {

    console.log(
        "[Copeak Rewards]",
        rewardResult
    );
}


// ==========================================
// Reward UIへ通知
// ==========================================
if (
    rewardResult &&
    rewardResult.valid
) {

    window.dispatchEvent(
        new CustomEvent(
            "copeak:reading-reward",
            {
                detail:
                    rewardResult
            }
        )
    );
}


return rewardResult;
    }

        // ==========================================
    // Country Data
    // ==========================================

    let cachedCountries = null;


    async function loadCountries() {

        if (cachedCountries) {
            return cachedCountries;
        }


        const config =
            getConfig();


        const path =
            config.collection?.countryDataPath ||
            "countries.json";


        try {

            const response =
                await fetch(path);


            if (!response.ok) {

                throw new Error(
                    `countries.json load failed: ${response.status}`
                );
            }


            const json =
                await response.json();


            if (
                !json ||
                !Array.isArray(json.countries)
            ) {

                throw new Error(
                    "countries.json format error"
                );
            }


            cachedCountries =
                json.countries;


            return cachedCountries;


        } catch (error) {

            console.error(
                "[Copeak Rewards] countries.json load failed:",
                error
            );


            return [];
        }
    }



    // ==========================================
    // Country取得回数
    // ==========================================

    function getCountryCount(
        countries,
        countryId
    ) {

        const value =
            countries?.[countryId];


        if (
            typeof value === "number"
        ) {

            return value;
        }


        if (
            value &&
            typeof value === "object"
        ) {

            return toNumber(
                value.count
            );
        }


        return 0;
    }



    // ==========================================
    // Random Pick
    // ==========================================

    function randomPick(array) {

        if (
            !Array.isArray(array) ||
            array.length === 0
        ) {

            return null;
        }


        const index =
            Math.floor(
                Math.random() *
                array.length
            );


        return array[index];
    }



    // ==========================================
    // Weighted Mini Reward
    // ==========================================

    function pickMiniReward(
        rewards
    ) {

        if (
            !Array.isArray(rewards) ||
            rewards.length === 0
        ) {

            return null;
        }


        const totalWeight =
            rewards.reduce(
                (sum, item) =>
                    sum +
                    Math.max(
                        0,
                        toNumber(
                            item.weight
                        )
                    ),
                0
            );


        if (
            totalWeight <= 0
        ) {

            return randomPick(
                rewards
            );
        }


        let roll =
            Math.random() *
            totalWeight;


        for (
            const reward
            of rewards
        ) {

            roll -=
                Math.max(
                    0,
                    toNumber(
                        reward.weight
                    )
                );


            if (
                roll <= 0
            ) {

                return reward;
            }
        }


        return rewards[
            rewards.length - 1
        ];
    }



    // ==========================================
    // WORLD CAPSULE
    // ==========================================

    async function openWorldCapsule() {

        const config =
            getConfig();


        const storage =
            getStorage();


        if (!storage) {

            return {

                success: false,

                reason:
                    "storage_unavailable"

            };
        }


        const capsuleConfig =
            config.capsule || {};


        const costSP =
            toNumber(
                capsuleConfig.costSP
            );


        const countries =
            await loadCountries();


        if (
            countries.length === 0
        ) {

            return {

                success: false,

                reason:
                    "country_data_unavailable"

            };
        }


        let capsuleResult =
            null;


        const saved =
            storage.update(
                data => {


                    // ==========================
                    // SP不足
                    // ==========================

                    if (
                        toNumber(
                            data.spBalance
                        ) <
                        costSP
                    ) {

                        capsuleResult = {

                            success:
                                false,

                            reason:
                                "not_enough_sp",

                            requiredSP:
                                costSP,

                            currentSP:
                                toNumber(
                                    data.spBalance
                                )

                        };


                        return data;
                    }



                    // ==========================
                    // SP消費
                    // ==========================

                    data.spBalance =
                        toNumber(
                            data.spBalance
                        ) -
                        costSP;


                    data.capsulesOpened =
                        toNumber(
                            data.capsulesOpened
                        ) +
                        1;



                    // ==========================
                    // 第1抽選
                    // Country Card / Mini Reward
                    // ==========================

                    const countryRate =
                        Number(
                            capsuleConfig
                                .countryCardRate ??
                            0.85
                        );


                    const isCountryCard =
                        Math.random() <
                        countryRate;



                    // ==========================
                    // COUNTRY CARD
                    // ==========================

                    if (
                        isCountryCard
                    ) {

                        const owned =
                            data.countries ||
                            {};


                        const unownedCountries =
                            countries.filter(
                                country =>
                                    getCountryCount(
                                        owned,
                                        country.id
                                    ) === 0
                            );


                        const newCountryBoostRate =
                            Number(
                                capsuleConfig
                                    .newCountryBoostRate ??
                                0.60
                            );


                        let pool =
                            countries;


                        let usedDiscoveryBoost =
                            false;


                        if (
                            unownedCountries.length >
                                0 &&
                            Math.random() <
                                newCountryBoostRate
                        ) {

                            pool =
                                unownedCountries;


                            usedDiscoveryBoost =
                                true;
                        }


                        const selectedCountry =
                            randomPick(
                                pool
                            );


                        if (
                            !selectedCountry
                        ) {

                            capsuleResult = {

                                success:
                                    false,

                                reason:
                                    "country_draw_failed"

                            };


                            // 抽選失敗時のみSPを返す
                            data.spBalance +=
                                costSP;


                            data.capsulesOpened -=
                                1;


                            return data;
                        }


                        const previousCount =
                            getCountryCount(
                                owned,
                                selectedCountry.id
                            );


                        const newCount =
                            previousCount +
                            1;


                        data.countries[
                            selectedCountry.id
                        ] =
                            newCount;


                        capsuleResult = {

                            success:
                                true,

                            type:
                                "country",

                            costSP,

                            country:
                                selectedCountry,

                            countryId:
                                selectedCountry.id,

                            isNew:
                                previousCount ===
                                0,

                            previousCount,

                            count:
                                newCount,

                            usedDiscoveryBoost,

                            spBalance:
                                data.spBalance,

                            collectedCountries:
                                Object.keys(
                                    data.countries
                                )
                                .filter(
                                    id =>
                                        getCountryCount(
                                            data.countries,
                                            id
                                        ) >
                                        0
                                )
                                .length

                        };


                        return data;
                    }



                    // ==========================
                    // MINI REWARD
                    // ==========================

                    const miniReward =
                        pickMiniReward(
                            config.miniRewards
                        );


                    if (
                        !miniReward
                    ) {

                        capsuleResult = {

                            success:
                                true,

                            type:
                                "mini",

                            reward:
                                null,

                            costSP,

                            spBalance:
                                data.spBalance

                        };


                        return data;
                    }


                    if (
                        miniReward.type ===
                        "sp"
                    ) {

                        const rewardSP =
                            toNumber(
                                miniReward.amount
                            );


                        // Mini Rewardは
                        // ガチャによる返却SPなので
                        // lifetimeSPには加算しない
                        data.spBalance +=
                            rewardSP;
                    }


                    capsuleResult = {

                        success:
                            true,

                        type:
                            "mini",

                        reward:
                            {
                                ...miniReward
                            },

                        costSP,

                        spBalance:
                            data.spBalance

                    };


                    return data;
                }
            );


        if (!saved) {

            return {

                success: false,

                reason:
                    "storage_error"

            };
        }


        if (
            config.debug
        ) {

            console.log(
                "[Copeak World Capsule]",
                capsuleResult
            );
        }


        return capsuleResult;
    }
    // ==========================================
    // SP残高取得
    // ==========================================

    function getRewardSummary() {

        const storage =
            getStorage();


        if (!storage) {
            return null;
        }


        const data =
            storage.load();


        return {

            spBalance:
                toNumber(
                    data.spBalance
                ),

            lifetimeSP:
                toNumber(
                    data.lifetimeSP
                ),

            totalReads:
                toNumber(
                    data.totalReads
                ),

            explorerLevel:
                toNumber(
                    data.explorerLevel
                ),

            collectedCountries:
                Object.keys(
                    data.countries || {}
                ).length,

            capsulesOpened:
                toNumber(
                    data.capsulesOpened
                )

        };
    }


    // ==========================================
    // 外部公開
    // ==========================================

    window.CopeakRewards = {

    processReading,

    isValidReading,

    getSummary:
        getRewardSummary,

    openCapsule:
        openWorldCapsule,

    loadCountries:
        loadCountries

};


    // speech.js から簡単に呼べる入口
    window.processCopeakReward =
        processReading;

})();
// ==========================================
// rewards-ui.js
// Copeak World Collection UI
// ==========================================

(function () {
    "use strict";
        let capsuleOpening = false;


    // ==========================================
    // HTML Escape
    // ==========================================

    function escapeHtml(value) {

        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }


    // ==========================================
    // Number
    // ==========================================

    function formatNumber(value) {

        const num =
            Number(value);


        if (
            !Number.isFinite(num)
        ) {

            return "—";
        }


        return new Intl
            .NumberFormat("en-US")
            .format(num);
    }

　　    // ==========================================
    // Country Mini Map
    // ==========================================

    function buildCountryMapUrl(country) {

        const lat =
            Number(
                country
                    ?.geography
                    ?.coordinates
                    ?.lat
            );

        const lng =
            Number(
                country
                    ?.geography
                    ?.coordinates
                    ?.lng
            );


        if (
            !Number.isFinite(lat) ||
            !Number.isFinite(lng)
        ) {
            return "";
        }


        const latSpan = 5;
        const lngSpan = 8;


        const south =
            Math.max(
                -85,
                lat - latSpan
            );

        const north =
            Math.min(
                85,
                lat + latSpan
            );

        const west =
            Math.max(
                -180,
                lng - lngSpan
            );

        const east =
            Math.min(
                180,
                lng + lngSpan
            );


        const params =
            new URLSearchParams({

                bbox:
                    `${west},${south},${east},${north}`,

                layer:
                    "mapnik",

                marker:
                    `${lat},${lng}`

            });


        return (
            "https://www.openstreetmap.org/export/embed.html?" +
            params.toString()
        );
    }
    // ==========================================
    // Modal
    // ==========================================

    function ensureModal() {

        let overlay =
            document.getElementById(
                "copeakRewardOverlay"
            );


        if (overlay) {
            return overlay;
        }


        overlay =
            document.createElement(
                "div"
            );


        overlay.id =
            "copeakRewardOverlay";


        overlay.className =
            "copeak-reward-overlay is-hidden";


        overlay.innerHTML = `
            <div
                class="copeak-reward-modal"
                id="copeakRewardModal"
            >
                <button
                    class="copeak-reward-close"
                    type="button"
                    aria-label="Close"
                >
                    ×
                </button>

                <div
                    id="copeakRewardContent"
                ></div>
            </div>
        `;


        document.body.appendChild(
            overlay
        );


        overlay
            .querySelector(
                ".copeak-reward-close"
            )
            ?.addEventListener(
                "click",
                closeModal
            );


        overlay.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    overlay
                ) {

                    closeModal();
                }
            }
        );


        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key ===
                    "Escape"
                ) {

                    closeModal();
                }
            }
        );


        return overlay;
    }


    function closeModal() {

        const overlay =
            document.getElementById(
                "copeakRewardOverlay"
            );


        if (overlay) {

            overlay.classList.add(
                "is-hidden"
            );
        }
    }


    function openModal(html) {

        const overlay =
            ensureModal();


        const content =
            overlay.querySelector(
                "#copeakRewardContent"
            );


        content.innerHTML =
            html;


        overlay.classList.remove(
            "is-hidden"
        );


        bindReadingTabs(
            overlay
        );
    }


    // ==========================================
    // Read Aloud Toggle
    // ==========================================

    function bindReadingTabs(
        root
    ) {

        const tabs =
            root.querySelectorAll(
                ".cr-reading-tab"
            );


        tabs.forEach(
            tab => {

                tab.addEventListener(
                    "click",
                    () => {

                        const lang =
                            tab.dataset.lang;


                        root
                            .querySelectorAll(
                                ".cr-reading-tab"
                            )
                            .forEach(
                                item =>
                                    item
                                        .classList
                                        .remove(
                                            "is-active"
                                        )
                            );


                        tab.classList.add(
                            "is-active"
                        );


                        root
                            .querySelectorAll(
                                ".cr-reading-text"
                            )
                            .forEach(
                                item => {

                                    item
                                        .classList
                                        .toggle(
                                            "is-hidden",
                                            item
                                                .dataset
                                                .lang !==
                                            lang
                                        );
                                }
                            );
                    }
                );
            }
        );
    }


    // ==========================================
    // Helpers
    // ==========================================

    function getLanguageText(
        country
    ) {

        return (
            country.languages ||
            []
        )
            .map(
                item =>
                    item.ja ||
                    item.en
            )
            .filter(Boolean);
    }


    function getCurrencyText(
        country
    ) {

        return (
            country.currencies ||
            []
        )
            .map(
                item =>
                    item.ja ||
                    item.en ||
                    item.code
            )
            .filter(Boolean);
    }


    function getReligionText(
        country
    ) {

        return (
            country
                .religion
                ?.majorTraditions ||
            []
        )
            .map(
                item =>
                    item.ja ||
                    item.en
            )
            .filter(Boolean);
    }


    function getEconomyText(
        country
    ) {

        return (
            country
                .economy
                ?.learningHighlights ||
            []
        )
            .map(
                item =>
                    item.ja ||
                    item.en
            )
            .filter(Boolean);
    }


    // ==========================================
    // Country Card HTML
    // ==========================================

    function buildCountryCard(
        country,
        options = {}
    ) {

        const isNew =
            options.isNew === true;


        const count =
            Number(
                options.count || 1
            );


        const nameEn =
            country.name?.en ||
            country.id;


        const nameJa =
            country.name?.ja ||
            "";


        const regionEn =
            country
                .geography
                ?.region
                ?.en ||
            "";


        const regionJa =
            country
                .geography
                ?.region
                ?.ja ||
            "";


        const subregionEn =
            country
                .geography
                ?.subregion
                ?.en ||
            "";


        const capitalEn =
            country
                .geography
                ?.capital
                ?.en ||
            "—";


        const capitalJa =
            country
                .geography
                ?.capital
                ?.ja ||
            capitalEn;


        const population =
            country
                .population
                ?.value;


        const area =
            country
                .geography
                ?.areaKm2;
        
        const mapUrl =
    buildCountryMapUrl(
        country
    );


        const summaryEn =
            country
                .summary
                ?.en ||
            "";


        const summaryJa =
            country
                .summary
                ?.ja ||
            "";


        const readingEn =
            country
                .readAloud
                ?.full
                ?.en ||
            "";


        const readingJa =
            country
                .readAloud
                ?.full
                ?.ja ||
            "";


        const languages =
            getLanguageText(
                country
            );


        const currencies =
            getCurrencyText(
                country
            );


        const religions =
            getReligionText(
                country
            );


        const economy =
            getEconomyText(
                country
            );


        const facts =
            Array.isArray(
                country.facts
            )
                ? country.facts
                : [];


        const statusText =
            isNew
                ? "✦ NEW DISCOVERY"
                : `COLLECTED ×${count}`;


        return `
            <section
                class="cr-hero"
            >

                <div
                    class="cr-status"
                >
                    ${escapeHtml(
                        statusText
                    )}
                </div>


                <div
                    class="cr-hero-main"
                >

                    <div
    class="cr-flag"
>
    <img
        src="https://flagcdn.com/${escapeHtml(
            (country.code2 || "").toLowerCase()
        )}.svg"
        alt="${escapeHtml(nameEn)} flag"
        class="cr-flag-image"
    >
</div>


                    <div>

                        <h2
                            class="cr-country-name"
                        >
                            ${escapeHtml(
                                nameEn
                            )}
                        </h2>


                        <div
                            class="cr-country-ja"
                        >
                            ${escapeHtml(
                                nameJa
                            )}
                        </div>


                        <div
                            class="cr-region"
                        >
                            ${escapeHtml(
                                regionEn
                            )}

                            ${subregionEn
                                ? " · " +
                                  escapeHtml(
                                      subregionEn
                                  )
                                : ""
                            }

                            ${regionJa
                                ? " / " +
                                  escapeHtml(
                                      regionJa
                                  )
                                : ""
                            }
                        </div>

                    </div>

                </div>

            </section>


            <section
                class="cr-content"
            >

                <div
                    class="cr-data-grid"
                >

                    <div
                        class="cr-data"
                    >
                        <div
                            class="cr-data-label"
                        >
                            CAPITAL
                        </div>

                        <div
                            class="cr-data-value"
                        >
                            ${escapeHtml(
                                capitalEn
                            )}
                            <br>
                            ${escapeHtml(
                                capitalJa
                            )}
                        </div>
                    </div>


                    <div
                        class="cr-data"
                    >
                        <div
                            class="cr-data-label"
                        >
                            POPULATION
                        </div>

                        <div
                            class="cr-data-value"
                        >
                            ${formatNumber(
                                population
                            )}
                        </div>
                    </div>


                    <div
                        class="cr-data"
                    >
                        <div
                            class="cr-data-label"
                        >
                            AREA
                        </div>

                        <div
                            class="cr-data-value"
                        >
                            ${formatNumber(
                                area
                            )}
                            km²
                        </div>
                    </div>


                    <div
                        class="cr-data"
                    >
                        <div
                            class="cr-data-label"
                        >
                            CURRENCY
                        </div>

                        <div
                            class="cr-data-value"
                        >
                            ${escapeHtml(
                                currencies[0] ||
                                "—"
                            )}
                        </div>
                    </div>

                </div>

                ${
                    mapUrl
                        ? `
                            <div
                                class="cr-section"
                            >

                                <div
                                    class="cr-section-title"
                                >
                                    📍 World Location
                                </div>


                                <div
                                    class="cr-map-wrap"
                                >

                                    <iframe
                                        class="cr-map-frame"
                                        src="${escapeHtml(mapUrl)}"
                                        loading="lazy"
                                        title="${escapeHtml(nameEn)} location map"
                                    ></iframe>


                                    <div
                                        class="cr-map-caption"
                                    >
                                        ${escapeHtml(
                                            nameEn
                                        )}
                                        ·
                                        ${escapeHtml(
                                            subregionEn
                                        )}
                                    </div>

                                </div>

                            </div>
                        `
                        : ""
                }
                <div
                    class="cr-section"
                >

                    <div
                        class="cr-section-title"
                    >
                        ◇ Country Profile
                    </div>


                    <div
                        class="cr-summary"
                    >

                        <div
                            class="cr-summary-en"
                        >
                            ${escapeHtml(
                                summaryEn
                            )}
                        </div>


                        <div
                            class="cr-summary-ja"
                        >
                            ${escapeHtml(
                                summaryJa
                            )}
                        </div>

                    </div>

                </div>


                <div
                    class="cr-section"
                >

                    <div
                        class="cr-section-title"
                    >
                        🗣 Languages
                    </div>


                    <div
                        class="cr-chips"
                    >

                        ${
                            languages
                                .map(
                                    item =>
                                        `<span class="cr-chip">${escapeHtml(item)}</span>`
                                )
                                .join("")
                        }

                    </div>

                </div>


                <div
                    class="cr-section"
                >

                    <div
                        class="cr-section-title"
                    >
                        🌏 Religion & Culture
                    </div>


                    <div
                        class="cr-chips"
                    >

                        ${
                            religions
                                .map(
                                    item =>
                                        `<span class="cr-chip">${escapeHtml(item)}</span>`
                                )
                                .join("")
                        }

                    </div>

                </div>


                <div
                    class="cr-section"
                >

                    <div
                        class="cr-section-title"
                    >
                        ⚙ Economy
                    </div>


                    <div
                        class="cr-chips"
                    >

                        ${
                            economy
                                .map(
                                    item =>
                                        `<span class="cr-chip">${escapeHtml(item)}</span>`
                                )
                                .join("")
                        }

                    </div>

                </div>


                <div
                    class="cr-section"
                >

                    <div
                        class="cr-section-title"
                    >
                        📖 Read This Country
                    </div>


                    <div
                        class="cr-reading"
                    >

                        <div
                            class="cr-reading-tabs"
                        >

                            <button
                                class="cr-reading-tab is-active"
                                data-lang="en"
                                type="button"
                            >
                                English
                            </button>


                            <button
                                class="cr-reading-tab"
                                data-lang="ja"
                                type="button"
                            >
                                日本語
                            </button>

                        </div>


                        <div
                            class="cr-reading-text"
                            data-lang="en"
                        >
                            ${escapeHtml(
                                readingEn
                            )}
                        </div>


                        <div
                            class="cr-reading-text is-hidden"
                            data-lang="ja"
                        >
                            ${escapeHtml(
                                readingJa
                            )}
                        </div>
                        <div
    class="cr-read-action"
>
    <button
        type="button"
        class="cr-read-in-copeak"
        onclick="CopeakRewardsUI.startCountryReading('${escapeHtml(country.id)}')"
    >
        <span class="cr-read-button-icon">
            🎙️
        </span>

        <span>
            <strong>
                READ IN COPEAK
            </strong>

            <small>
                この英文をCopeakで音読する
            </small>
        </span>

        <span class="cr-read-button-arrow">
            →
        </span>
    </button>
</div>
                    </div>

                </div>


                <div
                    class="cr-section"
                >

                    <div
                        class="cr-section-title"
                    >
                        ✦ Country Facts
                    </div>


                    <div
                        class="cr-facts"
                    >

                        ${
                            facts
                                .slice(
                                    0,
                                    6
                                )
                                .map(
                                    fact => `
                                        <div
                                            class="cr-fact"
                                        >

                                            <div
                                                class="cr-fact-en"
                                            >
                                                ${escapeHtml(
                                                    fact.en ||
                                                    ""
                                                )}
                                            </div>


                                            <div
                                                class="cr-fact-ja"
                                            >
                                                ${escapeHtml(
                                                    fact.ja ||
                                                    ""
                                                )}
                                            </div>

                                        </div>
                                    `
                                )
                                .join("")
                        }

                    </div>

                </div>

            </section>
        `;
    }


    // ==========================================
    // Mini Reward
    // ==========================================

    function showMiniReward(
        result
    ) {

        const amount =
            result.reward?.amount ||
            0;


        openModal(`
            <div
                class="cr-mini-reward"
            >

                <div
                    class="cr-mini-icon"
                >
                    🎁
                </div>


                <div
                    class="cr-mini-title"
                >
                    MINI REWARD
                </div>


                <div
                    class="cr-mini-value"
                >
                    +${escapeHtml(
                        amount
                    )} SP
                </div>


                <p>
                    Keep reading.
                    Your next country
                    may be waiting.
                </p>

            </div>
        `);
    }


    // ==========================================
    // Show Country
    // ==========================================

    function showCountry(
        country,
        options = {}
    ) {

        if (!country) {
            return;
        }


        openModal(
            buildCountryCard(
                country,
                options
            )
        );
    }


    // ==========================================
    // Country IDから表示
    // SPを消費しない
    // ==========================================

    async function showCountryById(
        countryId
    ) {

        if (
            !window.CopeakRewards
        ) {
            return;
        }


        const countries =
            await window
                .CopeakRewards
                .loadCountries();


        const country =
            countries.find(
                item =>
                    item.id ===
                    countryId
            );


        if (!country) {

            console.warn(
                "[Copeak Rewards UI] Country not found:",
                countryId
            );

            return;
        }


        const stored =
            window
                .CopeakRewardsStorage
                ?.load();


        const count =
            Number(
                stored
                    ?.countries
                    ?.[countryId] ||
                0
            );


        showCountry(
            country,
            {
                isNew: false,
                count:
                    Math.max(
                        1,
                        count
                    )
            }
        );
    }
    
        // ==========================================
    // Country Card → Copeak Reading
    // ==========================================

    async function startCountryReading(
        countryId
    ) {

        if (
            !countryId ||
            !window.CopeakRewards
        ) {
            return;
        }


        const countries =
            await window
                .CopeakRewards
                .loadCountries();


        const country =
            countries.find(
                item =>
                    item.id ===
                    countryId
            );


        if (!country) {

            console.warn(
                "[Copeak Rewards UI] Country not found:",
                countryId
            );

            return;
        }


        const readingEn =
            country
                .readAloud
                ?.full
                ?.en ||
            "";


        if (!readingEn.trim()) {

            alert(
                "この国の英語音読データがありません。"
            );

            return;
        }


        const nameEn =
            country.name?.en ||
            country.id;


        const nameJa =
            country.name?.ja ||
            "";


        // Libraryには保存しない一時教材
        const lesson = {

            id:
                `world_country_${country.id}`,

            title:
                `🌍 ${nameEn}`,

            eng:
                readingEn,

            jpn:
                country
                    .readAloud
                    ?.full
                    ?.ja ||
                "",

            lang:
                "en-US",

            langName:
                "🇺🇸 English (US)",

            type:
                "standard",

            dialogue:
                [],

            history:
                [],

            audioBlob:
                null,

            audioUrl:
                null,

            memoImage:
                null,

            isWorldCountry:
                true,

            countryId:
                country.id,

            countryNameEn:
                nameEn,

            countryNameJa:
                nameJa

        };


        closeModal();


        // 既存Copeakの教材開始処理をそのまま利用
        if (
            typeof startCustomLesson ===
            "function"
        ) {

            startCustomLesson(
                lesson
            );

            return;
        }


        // 念のためのfallback
        if (
            typeof openLearningScreen ===
            "function"
        ) {

            if (
                typeof currentCustomLesson !==
                "undefined"
            ) {

                currentCustomLesson =
                    lesson;
            }


            openLearningScreen(
                lesson
            );
        }
    }
    // ==========================================
// Capsule Result
// ==========================================

function showCapsuleResult(
    result
) {

    if (
        !result ||
        result.success !== true
    ) {
        return;
    }


    if (
        result.type ===
        "country"
    ) {

        showCountry(
            result.country,
            {
                isNew:
                    result.isNew,

                count:
                    result.count
            }
        );


        if (
            result.isNew
        ) {

            setTimeout(
                celebrateDiscovery,
                250
            );
        }

        return;
    }


    if (
        result.type ===
        "mini"
    ) {

        showMiniReward(
            result
        );
    }
}


const CR_GACHA_CAPSULE_PALETTE = [
    "#ff6b6b",
    "#ffd43b",
    "#4dabf7",
    "#63e6be",
    "#b197fc",
    "#ffa94d",
    "#f783ac",
    "#38d9a9",
    "#748ffc",
    "#ffd8a8"
];

function getRandomCapsuleColor() {
    return CR_GACHA_CAPSULE_PALETTE[
        Math.floor(Math.random() * CR_GACHA_CAPSULE_PALETTE.length)
    ];
}

// ==========================================
// World Gashapon Machine
// ==========================================

function showGashaponMachine() {

    if (
        !window.CopeakRewards ||
        !window.CopeakRewardsStorage
    ) {
        return;
    }


    const cost =
        Number(
            window
                .COPEAK_REWARDS_CONFIG
                ?.capsule
                ?.costSP ||
            150
        );


    const data =
        window
            .CopeakRewardsStorage
            .load();


    const sp =
        Number(
            data.spBalance ||
            0
        );


    if (sp < cost) {

        alert(
            `あと ${cost - sp} SP必要です。`
        );

        return;
    }


    // ======================================
    // ドーム内のカプセル
    // Talk Gacha風に毎回少し配置を変える
    // ======================================

    const colors = [
    "#ff4d4f", // Red
    "#ff85a1", // Pink
    "#ff9f43", // Orange
    "#ffd43b", // Yellow
    "#73d13d", // Green
    "#38d9a9", // Mint
    "#22b8cf", // Cyan
    "#4dabf7", // Blue
    "#748ffc", // Indigo
    "#b197fc", // Purple
    "#e64980", // Deep Pink
    "#a9e34b"  // Lime
];


const rowBases = [82, 74, 67];
const balls =
    Array.from(
        { length: 36 },
        (_, i) => {
            const row =
                Math.floor(Math.random() * rowBases.length);

            const left =
                6 + Math.random() * 88;

            const top =
                rowBases[row] + Math.random() * 4;

            const rotate =
                -55 + Math.random() * 110;

            const scale =
                row === 0 ? 1.02 + Math.random() * 0.08 :
                row === 1 ? 0.94 + Math.random() * 0.08 :
                row === 2 ? 0.86 + Math.random() * 0.08 :
                            0.78 + Math.random() * 0.08;

            const opacity =
                row === 0 ? 0.98 :
                row === 1 ? 0.92 :
                row === 2 ? 0.88 :
                            0.84;

            const color =
                colors[
                    Math.floor(
                        Math.random() * colors.length
                    )
                ];

            return `
                <span
                    class="cr-gacha2-ball"
                    style="
                        left:${left.toFixed(1)}%;
                        top:${top.toFixed(1)}%;
                        --cr-ball-color:${color};
                        opacity:${opacity.toFixed(2)};
                        transform:
                            translate(-50%,-50%)
                            rotate(${rotate.toFixed(0)}deg)
                            scale(${scale.toFixed(2)});
                        z-index:${Math.round(top * 10)};
                    "
                ></span>
            `;
        }
    )
    .join("");


    openModal(`
        <div class="cr-gacha2-screen">

            <div class="cr-gacha2-eyebrow">
                COPEAK WORLD CAPSULE
            </div>

            <div class="cr-gacha2-title">
                TURN THE HANDLE
            </div>

            <div class="cr-gacha2-sub">
                ハンドルを右に1回転させて、
                世界へのカプセルを取り出そう。
            </div>


            <div class="cr-gacha2-stage">

                <div
                    class="cr-gacha2-machine"
                    id="crGacha2Machine"
                >

                    <!-- Glass Dome -->
                    <div class="cr-gacha2-dome">

                        <div class="cr-gacha2-inventory">
                            ${balls}
                        </div>

                        <div class="cr-gacha2-world">
                            🌍
                        </div>

                        <div class="cr-gacha2-glass-shine"></div>

                    </div>


                    <!-- Control Body -->
                    <div class="cr-gacha2-body">

                        <div class="cr-gacha2-price">

                            <small>
                                WORLD CAPSULE
                            </small>

                            <strong>
                                ${cost} SP
                            </strong>

                        </div>


                        <div class="cr-gacha2-handle-zone">

                            <div
                                class="cr-gacha2-handle"
                                id="crGacha2Handle"
                                role="button"
                                tabindex="0"
                                aria-label="Turn the gacha handle"
                            >

                                <span class="cr-gacha2-handle-ring"></span>

                                <span
                                    class="
                                        cr-gacha2-handle-arm
                                        is-horizontal
                                    "
                                ></span>

                                <span
                                    class="
                                        cr-gacha2-handle-arm
                                        is-vertical
                                    "
                                ></span>

                                <span class="cr-gacha2-handle-hub">
                                    ↻
                                </span>

                            </div>

                            <div class="cr-gacha2-turn">
                                TURN RIGHT →
                            </div>

                        </div>


                        <div class="cr-gacha2-chute">

                            <small>
                                CAPSULE
                            </small>

                            <div>
                                ▼
                            </div>

                        </div>

                    </div>

                </div>

            </div>


            <div
                class="cr-gacha2-status"
                id="crGacha2Status"
            >
                HANDLE READY
            </div>


            <div
                class="cr-gacha2-status-ja"
                id="crGacha2StatusJa"
            >
                ハンドルをつかんで右に回してください
            </div>


            <!-- Capsule Reveal -->
            <div
                class="cr-gacha2-reveal"
                id="crGacha2Reveal"
            >

                <div class="cr-gacha2-rays"></div>


                <button
                    type="button"
                    class="cr-gacha2-big-capsule"
                    id="crGacha2Capsule"
                    aria-label="Open capsule"
                >

                    <span class="cr-gacha2-capsule-world">
                        🌍
                    </span>

                    <span class="cr-gacha2-tap-badge">
                        TAP!
                    </span>

                </button>


                <div class="cr-gacha2-reveal-title">
                    CAPSULE DISPENSED!
                </div>

                <div class="cr-gacha2-reveal-ja">
                    カプセルをタップして世界を開こう
                </div>

            </div>


            <div
                class="cr-gacha2-flash"
                id="crGacha2Flash"
            ></div>

        </div>
    `);


    const machine =
        document.getElementById(
            "crGacha2Machine"
        );


    const handle =
        document.getElementById(
            "crGacha2Handle"
        );


    const status =
        document.getElementById(
            "crGacha2Status"
        );


    const statusJa =
        document.getElementById(
            "crGacha2StatusJa"
        );


    const reveal =
        document.getElementById(
            "crGacha2Reveal"
        );


    const capsule =
        document.getElementById(
            "crGacha2Capsule"
        );
    const turnSfx = new Audio('./gatch.mp3');
    const openSfx = new Audio('./bright.mp3');

    turnSfx.preload = 'auto';
    openSfx.preload = 'auto';

    function playSfx(audio) {
        if (!audio) return;
        try {
            audio.currentTime = 0;
            audio.play();
        } catch (e) {
            console.warn('SFX play error:', e);
        }
    }

    let dragging = false;

    let dispensed = false;

    let opening = false;

    let rotation = 0;

    let cumulativeRotation = 0;

    let lastAngle = 0;

    let lastTick = 0;

    let turnSfxPlayed = false;


    // ======================================
    // Pointer角度
    // ======================================

    function getAngle(event) {

        const rect =
            handle.getBoundingClientRect();


        const centerX =
            rect.left +
            rect.width / 2;


        const centerY =
            rect.top +
            rect.height / 2;


        return (
            Math.atan2(
                event.clientY - centerY,
                event.clientX - centerX
            ) *
            180 /
            Math.PI
        );
    }


    // ======================================
    // Capsule排出
    // ======================================

    function dispenseCapsule() {

        if (dispensed) {
            return;
        }


        dispensed = true;

        dragging = false;


        handle.classList.remove(
            "is-dragging"
        );


        handle.classList.add(
            "is-complete"
        );


        machine.classList.add(
            "is-rumbling"
        );


        status.textContent =
            "GACHA... GACHA...";


        statusJa.textContent =
            "カプセルを取り出しています";


        if (
            navigator.vibrate
        ) {

            navigator.vibrate(
                [80, 40, 100]
            );
        }


        setTimeout(
            () => {

                machine.classList.remove(
                    "is-rumbling"
                );


                reveal.classList.add(
                    "is-visible"
                );


                status.textContent =
                    "CAPSULE DISPENSED!";


                statusJa.textContent =
                    "カプセルをタップして開けよう！";

            },
            850
        );
    }


    // ======================================
    // Start Drag
    // ======================================

    handle.addEventListener(
        "pointerdown",
        event => {

            if (dispensed) {
                return;
            }


            dragging = true;
            turnSfxPlayed = false;


            lastAngle =
                getAngle(
                    event
                );


            handle.classList.add(
                "is-dragging"
            );


            try {

                handle.setPointerCapture(
                    event.pointerId
                );

            } catch (_) {}


            event.preventDefault();
        }
    );


    // ======================================
    // Turn Handle
    // ======================================

    handle.addEventListener(
        "pointermove",
        event => {

            if (
                !dragging ||
                dispensed
            ) {
                return;
            }
                        if (!turnSfxPlayed) {
                playSfx(turnSfx);
                turnSfxPlayed = true;
            }

            const currentAngle =
                getAngle(
                    event
                );


            let delta =
                currentAngle -
                lastAngle;


            // -180 / 180 の境界補正
            if (delta > 180) {
                delta -= 360;
            }

            if (delta < -180) {
                delta += 360;
            }


            rotation +=
                delta;


            cumulativeRotation =
                Math.max(
                    0,
                    cumulativeRotation +
                    delta
                );


            lastAngle =
                currentAngle;


            handle.style.setProperty(
                "--cr-gacha2-rotation",
                `${rotation}deg`
            );


            const progress =
                Math.min(
                    100,
                    Math.round(
                        cumulativeRotation /
                        360 *
                        100
                    )
                );


            status.textContent =
                `TURN RIGHT → ${progress}%`;


            statusJa.textContent =
                progress < 100
                    ? "そのまま右へ回そう"
                    : "OK!";


            // Talk Gachaと同じ感覚で
            // 約60度ごとに小さく振動
            const tick =
                Math.floor(
                    cumulativeRotation /
                    60
                );


            if (
                tick >
                lastTick
            ) {

                lastTick =
                    tick;


                machine.classList.add(
                    "is-ticking"
                );


                setTimeout(
                    () => {

                        machine
                            .classList
                            .remove(
                                "is-ticking"
                            );

                    },
                    70
                );


                if (
                    navigator.vibrate
                ) {

                    navigator.vibrate(
                        6
                    );
                }
            }


            if (
                cumulativeRotation >=
                360
            ) {

                dispenseCapsule();
            }


            event.preventDefault();
        }
    );


    // ======================================
    // End Drag
    // ======================================

    function stopDragging(
        event
    ) {

        dragging = false;


        handle.classList.remove(
            "is-dragging"
        );


        if (
            event &&
            event.pointerId !==
            undefined
        ) {

            try {

                handle.releasePointerCapture(
                    event.pointerId
                );

            } catch (_) {}
        }
    }


    handle.addEventListener(
        "pointerup",
        stopDragging
    );


    handle.addEventListener(
        "pointercancel",
        stopDragging
    );


    // ======================================
    // Keyboard fallback
    // ======================================

    handle.addEventListener(
        "keydown",
        event => {

            if (
                dispensed ||
                (
                    event.key !==
                    "Enter" &&
                    event.key !==
                    " "
                )
            ) {
                return;
            }


            event.preventDefault();

            playSfx(turnSfx);

            handle.classList.add(
                "is-auto-turning"
            );


            status.textContent =
                "TURNING...";


            statusJa.textContent =
                "ハンドルを回しています";


            setTimeout(
                dispenseCapsule,
                950
            );
        }
    );


    // ======================================
    // Open Capsule
    // ======================================

    capsule.addEventListener(
        "click",
        async () => {

            if (
                !dispensed ||
                opening
            ) {
                return;
            }


            opening = true;


            capsule.disabled =
                true;
            
            playSfx(openSfx);

            status.textContent =
                "OPENING...";


            statusJa.textContent =
                "世界を開いています";


            const result =
                await window
                    .CopeakRewards
                    .openCapsule();


            if (
                !result ||
                result.success !== true
            ) {

                alert(
                    "World Capsuleを開けませんでした。"
                );


                showCollection();

                return;
            }


            capsule.classList.add(
                "is-opening"
            );


            document
                .getElementById(
                    "crGacha2Flash"
                )
                ?.classList
                .add(
                    "is-active"
                );


            if (
                navigator.vibrate
            ) {

                navigator.vibrate(
                    [60, 30, 120]
                );
            }


            setTimeout(
                () => {

                    showCapsuleResult(
                        result
                    );

                },
                700
            );
        }
    );
}
        // ==========================================
    // Capsule Opening Animation
    // ==========================================

    function showCapsuleOpening() {

    return new Promise(
        resolve => {

            openModal(`
                <div class="cr-capsule-opening">

                    <div class="cr-capsule-space">

                        <div class="cr-capsule-ring ring-1"></div>
                        <div class="cr-capsule-ring ring-2"></div>
                        <div class="cr-capsule-ring ring-3"></div>

                        <div class="cr-capsule-rays"></div>

                        <div class="cr-capsule-orb">

                            <div class="cr-capsule-top">
                                🌍
                            </div>

                            <div class="cr-capsule-line"></div>

                            <div class="cr-capsule-bottom">
                                COPEAK
                            </div>

                        </div>

                    </div>


                    <div
                        class="cr-capsule-status"
                        id="crCapsuleStatus"
                    >
                        WORLD SIGNAL SEARCHING...
                    </div>


                    <div
                        class="cr-capsule-status-ja"
                        id="crCapsuleStatusJa"
                    >
                        世界からシグナルを探しています
                    </div>


                    <div class="cr-capsule-scan">

                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>

                    </div>


                    <div
                        class="cr-capsule-flash"
                        id="crCapsuleFlash"
                    ></div>

                </div>
            `);


            const orb =
                document.querySelector(
                    ".cr-capsule-orb"
                );

            const status =
                document.getElementById(
                    "crCapsuleStatus"
                );

            const statusJa =
                document.getElementById(
                    "crCapsuleStatusJa"
                );


            // Stage 1
            setTimeout(
                () => {

                    if (status) {
                        status.textContent =
                            "SIGNAL DETECTED";
                    }

                    if (statusJa) {
                        statusJa.textContent =
                            "シグナルを発見しました";
                    }

                    orb?.classList.add(
                        "is-charging"
                    );

                },
                900
            );


            // Stage 2
            setTimeout(
                () => {

                    if (status) {
                        status.textContent =
                            "LOCKING WORLD COORDINATES...";
                    }

                    if (statusJa) {
                        statusJa.textContent =
                            "世界の座標を特定しています";
                    }

                    orb?.classList.add(
                        "is-shaking"
                    );

                },
                1800
            );


            // Stage 3
            setTimeout(
                () => {

                    if (status) {
                        status.textContent =
                            "DISCOVERY READY";
                    }

                    if (statusJa) {
                        statusJa.textContent =
                            "新しい発見が目前です";
                    }

                    orb?.classList.add(
                        "is-critical"
                    );

                    if (
                        navigator.vibrate
                    ) {
                        navigator.vibrate(
                            [40, 40, 80]
                        );
                    }

                },
                2700
            );


            // Burst
            setTimeout(
                () => {

                    if (status) {
                        status.textContent =
                            "OPEN!";
                    }

                    if (statusJa) {
                        statusJa.textContent =
                            "";
                    }

                    orb?.classList.add(
                        "is-opening"
                    );


                    document
                        .getElementById(
                            "crCapsuleFlash"
                        )
                        ?.classList
                        .add(
                            "is-active"
                        );

                },
                3300
            );


            // Result
            setTimeout(
                resolve,
                3900
            );

        }
    );
}


    // ==========================================
    // New Country Celebration
    // ==========================================

    function celebrateDiscovery() {

        if (
            typeof window.confetti !==
            "function"
        ) {
            return;
        }


        window.confetti({

            particleCount: 90,

            spread: 75,

            origin: {
                y: 0.55
            }

        });
    }
    // ==========================================
    // Capsuleを開いて結果表示
    // ==========================================

        async function openCapsule() {

        if (
            capsuleOpening ||
            !window.CopeakRewards
        ) {
            return;
        }


        capsuleOpening =
            true;


        try {

            // ======================================
            // まず抽選
            // ======================================

            const result =
                await window
                    .CopeakRewards
                    .openCapsule();


            if (!result) {
                return;
            }


            // ======================================
            // SP不足など
            // ======================================

            if (
                result.success !==
                true
            ) {

                if (
                    result.reason ===
                    "not_enough_sp"
                ) {

                    alert(
                        `SPが足りません。\n\n必要：${result.requiredSP} SP\n現在：${result.currentSP} SP`
                    );

                    return;
                }


                alert(
                    "World Capsuleを開けませんでした。"
                );


                return;
            }


            // ======================================
            // Opening Animation
            // ======================================

            await showCapsuleOpening();


            showCapsuleResult(
    result
);


        } finally {

            capsuleOpening =
                false;
        }
    }
    
    // ==========================================
// World Collection Map
// ==========================================

function initCollectionWorldMap(
    countries,
    owned
) {

    const container =
        document.getElementById(
            "crWorldCollectionMap"
        );


    if (!container) {
        return;
    }


    const VectorMap =
        window.jsVectorMap;


    if (
        typeof VectorMap !==
        "function"
    ) {

        container.innerHTML = `
            <div class="cr-world-map-error">
                World Mapを読み込めませんでした。
            </div>
        `;

        return;
    }


    // ======================================
    // ISO2コード → countryデータ
    // ======================================

    const countryByCode =
        new Map();


    const ownedCodes =
        new Set();


    countries.forEach(
        country => {

            const code =
                String(
                    country.code2 ||
                    ""
                )
                .trim()
                .toUpperCase();


            if (!code) {
                return;
            }


            countryByCode.set(
                code,
                country
            );


            const count =
                Number(
                    owned[
                        country.id
                    ] ||
                    0
                );


            if (count > 0) {

                ownedCodes.add(
                    code
                );
            }
        }
    );


    // ======================================
    // Map
    // ======================================

    new VectorMap({

        selector:
            "#crWorldCollectionMap",

        map:
            "world",

        backgroundColor:
            "transparent",

        draggable:
            true,

        zoomButtons:
            true,

        zoomOnScroll:
            false,

        showTooltip:
            true,


        regionStyle: {

            initial: {

                fill:
                    "#182333",

                stroke:
                    "#4b586a",

                strokeWidth:
                    0.35,

                fillOpacity:
                    1
            },

            hover: {

                fillOpacity:
                    1
            }
        },


        // ==================================
        // 描画後に獲得済み国へclass追加
        // ==================================

        onLoaded() {

            container
                .querySelectorAll(
                    ".jvm-region"
                )
                .forEach(
                    region => {

                        const code =
                            String(
                                region.getAttribute(
                                    "data-code"
                                ) ||
                                ""
                            )
                            .toUpperCase();


                        const isOwned =
                            ownedCodes.has(
                                code
                            );


                        region.classList.toggle(
                            "cr-map-owned",
                            isOwned
                        );


                        region.classList.toggle(
                            "cr-map-locked",
                            !isOwned
                        );

                    }
                );
        },


        // ==================================
        // 国をクリック
        // ==================================

        onRegionClick(
            event,
            code
        ) {

            const normalizedCode =
                String(
                    code ||
                    ""
                )
                .toUpperCase();


            // 未取得国は反応しない
            if (
                !ownedCodes.has(
                    normalizedCode
                )
            ) {
                return;
            }


            const country =
                countryByCode.get(
                    normalizedCode
                );


            if (!country) {
                return;
            }


            showCountryById(
                country.id
            );
        }

    });
}
        // ==========================================
    // World Collection
    // ==========================================

    async function showCollection(
        selectedRegion = "ALL"
    ) {

        if (
            !window.CopeakRewards ||
            !window.CopeakRewardsStorage
        ) {
            return;
        }


        const countries =
            await window
                .CopeakRewards
                .loadCountries();


        const rewardData =
            window
                .CopeakRewardsStorage
                .load();


        const owned =
            rewardData.countries ||
            {};


        const ownedCount =
            countries.filter(
                country =>
                    Number(
                        owned[country.id] ||
                        0
                    ) > 0
            ).length;


        const total =
            countries.length;


        const progress =
            total > 0
                ? (
                    ownedCount /
                    total
                ) * 100
                : 0;


        const spBalance =
            Number(
                rewardData.spBalance ||
                0
            );
        const capsuleCost =
    Number(
        window
            .COPEAK_REWARDS_CONFIG
            ?.capsule
            ?.costSP ||
        150
    );


const canOpenCapsule =
    spBalance >=
    capsuleCost;

        const regions = [
            "ALL",
            "Asia",
            "Europe",
            "Africa",
            "Americas",
            "Oceania"
        ];


        const filtered =
            selectedRegion === "ALL"
                ? countries
                : countries.filter(
                    country =>
                        country
                            .geography
                            ?.region
                            ?.en ===
                        selectedRegion
                );


        const tiles =
            filtered
                .map(
                    country => {

                        const count =
                            Number(
                                owned[
                                    country.id
                                ] ||
                                0
                            );


                        const isOwned =
                            count > 0;


                        if (
                            !isOwned
                        ) {

                            return `
                                <div
                                    class="
                                        cr-country-tile
                                        is-locked
                                    "
                                >

                                    <div
                                        class="
                                            cr-tile-locked
                                        "
                                    >
                                        🔒
                                    </div>


                                    <div
                                        class="
                                            cr-tile-name
                                        "
                                    >
                                        ???
                                    </div>


                                    <div
                                        class="
                                            cr-tile-ja
                                        "
                                    >
                                        未発見
                                    </div>


                                    <div
                                        class="
                                            cr-tile-region
                                        "
                                    >
                                        UNKNOWN
                                    </div>

                                </div>
                            `;
                        }


                        const code =
                            String(
                                country.code2 ||
                                ""
                            )
                            .toLowerCase();


                        return `
                            <div
                                class="
                                    cr-country-tile
                                    is-owned
                                "

                                data-country-id="${escapeHtml(country.id)}"
                            >

                                <div
                                    class="
                                        cr-tile-count
                                    "
                                >
                                    ×${count}
                                </div>


                                <div
                                    class="
                                        cr-tile-flag
                                    "
                                >
                                    <img
                                        src="
                                            https://flagcdn.com/${escapeHtml(
                                                code
                                            )}.svg
                                        "

                                        alt="
                                            ${escapeHtml(
                                                country
                                                    .name
                                                    ?.en ||
                                                ""
                                            )}
                                        "
                                    >
                                </div>


                                <div
                                    class="
                                        cr-tile-name
                                    "
                                >
                                    ${escapeHtml(
                                        country
                                            .name
                                            ?.en ||
                                        country.id
                                    )}
                                </div>


                                <div
                                    class="
                                        cr-tile-ja
                                    "
                                >
                                    ${escapeHtml(
                                        country
                                            .name
                                            ?.ja ||
                                        ""
                                    )}
                                </div>


                                <div
                                    class="
                                        cr-tile-region
                                    "
                                >
                                    ${escapeHtml(
                                        country
                                            .geography
                                            ?.region
                                            ?.en ||
                                        ""
                                    )}
                                </div>

                            </div>
                        `;
                    }
                )
                .join("");


        const tabs =
            regions
                .map(
                    region => `
                        <button
                            type="button"

                            class="
                                cr-region-tab
                                ${
                                    selectedRegion ===
                                    region
                                        ? "is-active"
                                        : ""
                                }
                            "

                            data-region="${escapeHtml(region)}"
                        >
                            ${escapeHtml(
                                region
                            )}
                        </button>
                    `
                )
                .join("");


        openModal(`
            <div
                class="
                    cr-collection
                "
            >

                <div
                    class="
                        cr-collection-header
                    "
                >

                    <div>

                        <div
                            class="
                                cr-collection-eyebrow
                            "
                        >
                            COPEAK REWARDS
                        </div>


                        <h2
                            class="
                                cr-collection-title
                            "
                        >
                            🌍 World Collection
                        </h2>

                    </div>


                    <div
                        class="
                            cr-collection-stats
                        "
                    >

                        <div
                            class="
                                cr-stat-box
                            "
                        >

                            <div
                                class="
                                    cr-stat-label
                                "
                            >
                                COLLECTED
                            </div>

                            <div
                                class="
                                    cr-stat-number
                                "
                            >
                                ${ownedCount}
                                /
                                ${total}
                            </div>

                        </div>


                        <div
                            class="
                                cr-stat-box
                            "
                        >

                            <div
                                class="
                                    cr-stat-label
                                "
                            >
                                YOUR SP
                            </div>

                            <div
                                class="
                                    cr-stat-number
                                "
                            >
                                ${spBalance}
                            </div>

                        </div>

                    </div>

                </div>


                <div
                    class="
                        cr-progress
                    "
                >
                    <div
                        class="
                            cr-progress-bar
                        "

                        style="
                            width:
                            ${progress}%;
                        "
                    ></div>
                </div>
<div class="cr-collection-guide">

    <div class="cr-guide-copy">

        <div class="cr-guide-kicker">
            READ · EARN · DISCOVER
        </div>

        <div class="cr-guide-title">
            音読して、世界を集めよう。
        </div>

        <div class="cr-guide-text">
            Copeakで音読するとSPがたまります。
            100SPでWorld Capsuleを1回開けて、
            世界197カ国のCountry Cardを集めることができます。
            手に入れたカードでは、その国について学び、
            英文をそのままCopeakで音読できます。
        </div>

    </div>


    <div class="cr-guide-steps">

        <div class="cr-guide-step">
            <span class="cr-guide-number">1</span>
            <span class="cr-guide-icon">🎙️</span>
            <strong>READ</strong>
            <small>Copeakで音読</small>
        </div>

        <div class="cr-guide-arrow">
            →
        </div>

        <div class="cr-guide-step">
            <span class="cr-guide-number">2</span>
            <span class="cr-guide-icon">✨</span>
            <strong>EARN</strong>
            <small>SPをためる</small>
        </div>

        <div class="cr-guide-arrow">
            →
        </div>

        <div class="cr-guide-step">
            <span class="cr-guide-number">3</span>
            <span class="cr-guide-icon">🌍</span>
            <strong>DISCOVER</strong>
            <small>世界を発見</small>
        </div>

    </div>


    <div class="cr-guide-note">
        ※ 同じ国が出ることもあります。新しい国を発見するとCollectionが増えます。
    </div>

<div class="cr-capsule-area">

    <button
        type="button"
        class="cr-capsule-button ${canOpenCapsule ? "is-ready" : "is-locked"}"
        id="crOpenCapsuleBtn"
        ${canOpenCapsule ? "" : "disabled"}
    >

        <span>
            🎁 OPEN WORLD CAPSULE · ${capsuleCost} SP
        </span>

        <small>
            ${
                canOpenCapsule
                    ? "READY! TURN THE HANDLE"
                    : `あと ${capsuleCost - spBalance} SP`
            }
        </small>

    </button>

</div>
<section class="cr-world-map-panel">

    <div class="cr-world-map-header">

        <div>

            <div class="cr-world-map-kicker">
                DISCOVERY MAP
            </div>

            <div class="cr-world-map-title">
                あなたが発見した世界
            </div>

        </div>


        <div class="cr-world-map-legend">

            <span>
                <i class="cr-map-dot is-owned"></i>
                獲得済み
            </span>

            <span>
                <i class="cr-map-dot is-locked"></i>
                未発見
            </span>

        </div>

    </div>


    <div
        id="crWorldCollectionMap"
        class="cr-world-map-canvas"
    ></div>


    <div class="cr-world-map-hint">
        ✦ 色のついた国をクリックすると、
        Country Cardを見ることができます。
    </div>

</section>

                <div
                    class="
                        cr-region-tabs
                    "
                >
                    ${tabs}
                </div>


                <div
                    class="
                        cr-collection-grid
                    "
                >
                    ${tiles}
                </div>

            </div>
        `);

        initCollectionWorldMap(
        countries,
        owned
    );

        const overlay =
            document.getElementById(
                "copeakRewardOverlay"
            );


        // Region切替
        overlay
            ?.querySelectorAll(
                ".cr-region-tab"
            )
            .forEach(
                button => {

                    button.addEventListener(
                        "click",
                        () => {

                            const region =
                                button.dataset
                                    .region ||
                                "ALL";


                            showCollection(
                                region
                            );
                        }
                    );
                }
            );


        // Country Card
        overlay
            ?.querySelectorAll(
                ".cr-country-tile.is-owned"
            )
            .forEach(
                tile => {

                    tile.addEventListener(
                        "click",
                        () => {

                            const id =
                                tile.dataset
                                    .countryId;


                            if (id) {

                                showCountryById(
                                    id
                                );
                            }
                        }
                    );
                }
            );


        // Capsule
overlay
    ?.querySelector(
        "#crOpenCapsuleBtn"
    )
    ?.addEventListener(
        "click",
        () => {

            showGashaponMachine();

        }
    );
    }
        // ==========================================
    // Header SP
    // ==========================================

    function updateRewardHeader() {

        const el =
            document.getElementById(
                "worldCollectionSp"
            );

        if (
            !el ||
            !window.CopeakRewardsStorage
        ) {
            return;
        }

        const data =
            window.CopeakRewardsStorage
                .load();

        el.textContent =
            `${Number(
                data.spBalance || 0
            )} SP`;
    }


    window.addEventListener(
        "copeak:rewards-updated",
        updateRewardHeader
    );


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            updateRewardHeader
        );

    } else {

        updateRewardHeader();
    }
        // ==========================================
    // Reading Reward Toast
    // ==========================================

    function showReadingRewardToast(
        reward
    ) {

        if (
            !reward ||
            reward.valid !== true
        ) {
            return;
        }


        const oldToast =
            document.getElementById(
                "copeakReadingRewardToast"
            );


        if (oldToast) {
            oldToast.remove();
        }


        const toast =
            document.createElement(
                "div"
            );


        toast.id =
            "copeakReadingRewardToast";


        toast.className =
            "cr-reward-toast";


        const breakdown =
            Array.isArray(
                reward.breakdown
            )
                ? reward.breakdown
                : [];


        const bonusHtml =
            breakdown
                .filter(
                    item =>
                        item.type !==
                        "reading"
                )
                .map(
                    item => `
                        <div
                            class="cr-reward-toast-bonus"
                        >
                            <span>
                                ${escapeHtml(
                                    item.label
                                )}
                            </span>

                            <strong>
                                +${Number(
                                    item.sp || 0
                                )} SP
                            </strong>
                        </div>
                    `
                )
                .join("");


        toast.innerHTML = `
            <div
                class="cr-reward-toast-head"
            >
                <span>
                    ✓ READING COMPLETE
                </span>

                <span
                    class="cr-reward-toast-read"
                >
                    READ #${Number(
                        reward.reads || 0
                    )}
                </span>
            </div>


            <div
                class="cr-reward-toast-points"
            >
                +${Number(
                    reward.earnedSP || 0
                )}
                <span>SP</span>
            </div>


            ${
                bonusHtml
                    ? `
                        <div
                            class="cr-reward-toast-breakdown"
                        >
                            ${bonusHtml}
                        </div>
                    `
                    : ""
            }


            <div
                class="cr-reward-toast-balance"
            >
                TOTAL
                <strong>
                    ${Number(
                        reward.spBalance || 0
                    )} SP
                </strong>
            </div>
        `;


        document.body.appendChild(
            toast
        );


        requestAnimationFrame(
            () => {

                toast.classList.add(
                    "is-visible"
                );
            }
        );


        setTimeout(
            () => {

                toast.classList.remove(
                    "is-visible"
                );


                setTimeout(
                    () => {
                        toast.remove();
                    },
                    350
                );

            },
            4200
        );
    }


    window.addEventListener(
        "copeak:reading-reward",
        event => {

            showReadingRewardToast(
                event.detail
            );
        }
    );
    // ==========================================
    // Public
    // ==========================================

   window.CopeakRewardsUI = {

    openCapsule,

    showCountry,

    showCountryById,

    showCollection,
    
    showGashaponMachine,

    startCountryReading,

    updateHeader:
        updateRewardHeader,

    close:
        closeModal

};

})();


// ==========================================
// speech.js: 文字起こし、照合、および内容理解度とSLAフィードバック
// ==========================================

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let mainRecognition = null;
let isMainRecording = false;
let accumulatedTranscript = '';
let currentInterim = '';
let recordStartTime = 0;

// ★ 音声認識の安定化用
let recognitionBase = '';
let recognitionFinishing = false;
let recognitionFinalized = false;
let recognitionRecovering = false;
let recognitionHasResult = false;
let recognitionRetryCount = 0;
let recognitionPassiveRestartCount = 0;
let recognitionStartTimer = null;
let recognitionSpeechTimer = null;
let recognitionFinishTimer = null;
// iPhone Mic Check start() 監視用
let micCheckStartWatchdogTimer = null;
let iPhoneMicCheckRecoveryAttempts = 0;
// Mic Checkと本番で同じSpeechRecognitionを使うため、
// 本番ではMic Check分のresultを読み飛ばす。
let recognitionResultStartIndex = 0;

const RECOGNITION_START_TIMEOUT_MS = 8000;
const RECOGNITION_SPEECH_TIMEOUT_MS = 5000;
const RECOGNITION_FINISH_WAIT_MS = 1500;
const MAX_RECOGNITION_RETRIES = 2;
const MAX_PASSIVE_RESTARTS = 3;
// iPhoneだけMic Check開始を監視
const IPHONE_MIC_CHECK_START_WATCHDOG_MS = 4500;
const IPHONE_MIC_RESTART_DELAY_MS = 500;
const MAX_IPHONE_MIC_CHECK_RECOVERIES = 1;


// ==========================================
// ★ 多言語対応: 音声認識結果・教材本文の共通分割 / 正規化
// ==========================================
function getCurrentLessonLang() {
    return (typeof currentCustomLesson !== 'undefined' && currentCustomLesson && currentCustomLesson.lang)
        ? currentCustomLesson.lang
        : 'en-US';
}

function normalizeSpeechToken(token, lang = 'en-US') {
    if (!token) return '';

    let normalized = token.normalize('NFKC');

    try {
        normalized = normalized.toLocaleLowerCase(lang);
    } catch (e) {
        normalized = normalized.toLowerCase();
    }

    // Unicodeの文字・結合文字・数字のみを判定対象にする。
    // apostrophe / hyphen は英語等でASR表記揺れが起こりやすいため比較時には除去。
    normalized = normalized
        .replace(/[’'\-‐-‒–—―]/g, '')
        .replace(/[^\p{L}\p{M}\p{N}]/gu, '');

    return normalized;
}

function segmentSpeechText(text, lang = 'en-US') {
    const sourceText = String(text || '');
    if (!sourceText) return [];

    // 現行ブラウザでは Intl.Segmenter を第一選択。
    // 日本語・中国語・韓国語・タイ語など、空白で単語が分かれない言語にも対応する。
    if (typeof Intl !== 'undefined' && typeof Intl.Segmenter === 'function') {
        try {
            const segmenter = new Intl.Segmenter(lang, { granularity: 'word' });
            return Array.from(segmenter.segment(sourceText)).map(item => ({
                text: item.segment,
                isWord: item.isWordLike === true,
                normalized: item.isWordLike === true ? normalizeSpeechToken(item.segment, lang) : ''
            }));
        } catch (e) {
            console.warn('Intl.Segmenter fallback:', e);
        }
    }

    // fallback: 日本語・中国語・韓国語・タイ語は1文字単位、それ以外は空白単位。
    const hasNoSpaceScript = /[\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af\u0e00-\u0e7f]/u.test(sourceText);

    if (hasNoSpaceScript) {
        return Array.from(sourceText).map(char => {
            const normalized = normalizeSpeechToken(char, lang);
            return {
                text: char,
                isWord: normalized !== '',
                normalized
            };
        });
    }

    return sourceText.split(/(\s+)/).map(part => {
        const normalized = normalizeSpeechToken(part, lang);
        return {
            text: part,
            isWord: normalized !== '',
            normalized
        };
    });
}

// ==========================================
// ★ 英語の数字・序数表現を共通化
// 9th = ninth
// 2012 = two thousand twelve = twenty twelve
// ==========================================

const ENGLISH_SMALL_NUMBERS = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19
};


const ENGLISH_TENS = {
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90
};


const ENGLISH_ORDINALS = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5,
    sixth: 6,
    seventh: 7,
    eighth: 8,
    ninth: 9,
    tenth: 10,
    eleventh: 11,
    twelfth: 12,
    thirteenth: 13,
    fourteenth: 14,
    fifteenth: 15,
    sixteenth: 16,
    seventeenth: 17,
    eighteenth: 18,
    nineteenth: 19,
    twentieth: 20,
    thirtieth: 30,
    fortieth: 40,
    fiftieth: 50,
    sixtieth: 60,
    seventieth: 70,
    eightieth: 80,
    ninetieth: 90
};


function parseEnglishSmallNumber(
    words,
    startIndex
) {

    const first =
        words[startIndex]
            ?.normalized;


    if (!first) {
        return null;
    }


    if (
        Object.prototype.hasOwnProperty.call(
            ENGLISH_SMALL_NUMBERS,
            first
        )
    ) {

        return {
            value:
                ENGLISH_SMALL_NUMBERS[first],

            consumed:
                1
        };
    }


    if (
        Object.prototype.hasOwnProperty.call(
            ENGLISH_TENS,
            first
        )
    ) {

        let value =
            ENGLISH_TENS[first];


        const second =
            words[startIndex + 1]
                ?.normalized;


        if (
            second &&
            Object.prototype.hasOwnProperty.call(
                ENGLISH_SMALL_NUMBERS,
                second
            ) &&
            ENGLISH_SMALL_NUMBERS[second] >= 1 &&
            ENGLISH_SMALL_NUMBERS[second] <= 9
        ) {

            value +=
                ENGLISH_SMALL_NUMBERS[
                    second
                ];


            return {
                value,
                consumed: 2
            };
        }


        return {
            value,
            consumed: 1
        };
    }


    return null;
}


function parseEnglishUnderThousand(
    words,
    startIndex
) {

    const first =
        words[startIndex]
            ?.normalized;


    const second =
        words[startIndex + 1]
            ?.normalized;


    if (
        first &&
        second === 'hundred' &&
        ENGLISH_SMALL_NUMBERS[first] >= 1 &&
        ENGLISH_SMALL_NUMBERS[first] <= 9
    ) {

        let value =
            ENGLISH_SMALL_NUMBERS[first] *
            100;


        let position =
            startIndex + 2;


        if (
            words[position]
                ?.normalized ===
            'and'
        ) {

            position++;
        }


        const rest =
            parseEnglishSmallNumber(
                words,
                position
            );


        if (rest) {

            value +=
                rest.value;


            return {
                value,

                consumed:
                    (
                        position -
                        startIndex
                    ) +
                    rest.consumed
            };
        }


        return {
            value,
            consumed: 2
        };
    }


    return parseEnglishSmallNumber(
        words,
        startIndex
    );
}


function getEnglishNumberComparisonUnit(
    words,
    startIndex
) {

    const current =
        words[startIndex];


    if (!current) {
        return null;
    }


        const rawSource =
        String(
            current.text || ''
        )
        .normalize('NFKC')
        .toLowerCase()
        .replace(/,/g, '')
        .replace(/’/g, "'")
        .trim();


    // ======================================
    // 小数表記
    // 3.5 / 1.25 / 2.0 など
    // ======================================
    const digitDecimal =
        rawSource.match(
            /^(\d+)\.(\d+)$/
        );


    if (digitDecimal) {

        return {
            token:
                `__decimal_${Number(
                    digitDecimal[1]
                )}_${digitDecimal[2]}__`,

            consumed:
                1,

            sourceWordIndexes: [
                current.wordIndex
            ]
        };
    }


    const raw =
        rawSource.replace(
            /[^\p{L}\p{N}']/gu,
            ''
        );


    // ======================================
    // 9th / 21st / 3rd など
    // ======================================
    const digitOrdinal =
        raw.match(
            /^(\d+)(st|nd|rd|th)$/
        );


    if (digitOrdinal) {

        return {
            token:
                `__ord_${Number(
                    digitOrdinal[1]
                )}__`,

            consumed:
                1,

            sourceWordIndexes: [
                current.wordIndex
            ]
        };
    }


    // ======================================
    // 数字そのもの
    // 2012 / 25 / 100 など
    // ======================================
    if (/^\d+$/.test(raw)) {

        return {
            token:
                `__num_${Number(raw)}__`,

            consumed:
                1,

            sourceWordIndexes: [
                current.wordIndex
            ]
        };
    }


    // ======================================
    // ninth / twentieth など
    // ======================================
    if (
        Object.prototype.hasOwnProperty.call(
            ENGLISH_ORDINALS,
            current.normalized
        )
    ) {

        return {
            token:
                `__ord_${
                    ENGLISH_ORDINALS[
                        current.normalized
                    ]
                }__`,

            consumed:
                1,

            sourceWordIndexes: [
                current.wordIndex
            ]
        };
    }


    // ======================================
    // twenty first / thirty second など
    // ======================================
    if (
        Object.prototype.hasOwnProperty.call(
            ENGLISH_TENS,
            current.normalized
        )
    ) {

        const next =
            words[startIndex + 1];


        if (
            next &&
            Object.prototype.hasOwnProperty.call(
                ENGLISH_ORDINALS,
                next.normalized
            ) &&
            ENGLISH_ORDINALS[
                next.normalized
            ] >= 1 &&
            ENGLISH_ORDINALS[
                next.normalized
            ] <= 9
        ) {

            const value =
                ENGLISH_TENS[
                    current.normalized
                ] +
                ENGLISH_ORDINALS[
                    next.normalized
                ];


            return {
                token:
                    `__ord_${value}__`,

                consumed:
                    2,

                sourceWordIndexes: [
                    current.wordIndex,
                    next.wordIndex
                ]
            };
        }
    }

    // ======================================
    // 小数の読み
    // three point five → 3.5
    // one point two five → 1.25
    // ======================================
    const decimalInteger =
        parseEnglishUnderThousand(
            words,
            startIndex
        );


    if (decimalInteger) {

        const pointIndex =
            startIndex +
            decimalInteger.consumed;


        if (
            words[pointIndex]
                ?.normalized ===
            'point'
        ) {

            let position =
                pointIndex + 1;

            let fractionDigits =
                '';


            while (
                position <
                words.length
            ) {

                const digitWord =
                    words[position]
                        ?.normalized;


                if (
                    !Object.prototype
                        .hasOwnProperty.call(
                            ENGLISH_SMALL_NUMBERS,
                            digitWord
                        )
                ) {
                    break;
                }


                const digitValue =
                    ENGLISH_SMALL_NUMBERS[
                        digitWord
                    ];


                if (
                    digitValue < 0 ||
                    digitValue > 9
                ) {
                    break;
                }


                fractionDigits +=
                    String(
                        digitValue
                    );


                position++;
            }


            if (fractionDigits) {

                const consumed =
                    position -
                    startIndex;


                return {
                    token:
                        `__decimal_${decimalInteger.value}_${fractionDigits}__`,

                    consumed,

                    sourceWordIndexes:
                        words
                            .slice(
                                startIndex,
                                startIndex +
                                    consumed
                            )
                            .map(
                                word =>
                                    word.wordIndex
                            )
                };
            }
        }
    }


    // ======================================
    // 2012 → two thousand twelve
    // 1999 → one thousand nine hundred...
    // ======================================
    const thousandLead =
        ENGLISH_SMALL_NUMBERS[
            current.normalized
        ];


    if (
        thousandLead >= 1 &&
        thousandLead <= 9 &&
        words[startIndex + 1]
            ?.normalized ===
            'thousand'
    ) {

        let value =
            thousandLead *
            1000;


        let position =
            startIndex + 2;


        if (
            words[position]
                ?.normalized ===
            'and'
        ) {

            position++;
        }


        const rest =
            parseEnglishUnderThousand(
                words,
                position
            );


        let consumed;


        if (rest) {

            value +=
                rest.value;


            consumed =
                (
                    position -
                    startIndex
                ) +
                rest.consumed;

        } else {

            consumed =
                2;
        }


        const indexes =
            words
                .slice(
                    startIndex,
                    startIndex +
                        consumed
                )
                .map(
                    word =>
                        word.wordIndex
                );


        return {
            token:
                `__num_${value}__`,

            consumed,

            sourceWordIndexes:
                indexes
        };
    }


    // ======================================
    // 年号読み
    // nineteen ninety nine → 1999
    // twenty twelve → 2012
    // ======================================
    const yearPrefixMap = {
        seventeen: 17,
        eighteen: 18,
        nineteen: 19,
        twenty: 20
    };


    const yearPrefix =
        yearPrefixMap[
            current.normalized
        ];


    if (yearPrefix) {

        const rest =
            parseEnglishSmallNumber(
                words,
                startIndex + 1
            );


        if (
            rest &&
            rest.value >= 10 &&
            rest.value <= 99
        ) {

            const value =
                (
                    yearPrefix *
                    100
                ) +
                rest.value;


            const consumed =
                1 +
                rest.consumed;


            return {
                token:
                    `__num_${value}__`,

                consumed,

                sourceWordIndexes:
                    words
                        .slice(
                            startIndex,
                            startIndex +
                                consumed
                        )
                        .map(
                            word =>
                                word.wordIndex
                        )
            };
        }
    }


    // ======================================
    // one hundred twenty / twenty five 等
    // ======================================
    const cardinal =
        parseEnglishUnderThousand(
            words,
            startIndex
        );


    if (cardinal) {

        return {
            token:
                `__num_${cardinal.value}__`,

            consumed:
                cardinal.consumed,

            sourceWordIndexes:
                words
                    .slice(
                        startIndex,
                        startIndex +
                            cardinal.consumed
                    )
                    .map(
                        word =>
                            word.wordIndex
                    )
        };
    }


    return null;
}
// ==========================================
// ★ 英語の短縮形・展開形を同一として比較
// I'm = I am
// can't = can not / cannot
// he's = he is / he has など
// ==========================================
function buildSpeechComparisonUnits(
    text,
    lang = 'en-US'
) {

    const segments =
        segmentSpeechText(
            text,
            lang
        );


    const words = [];

    let wordIndex = 0;


    segments.forEach(
        segment => {

            if (
                segment.isWord &&
                segment.normalized
            ) {

                words.push({
                    text: segment.text,
                    normalized:
                        segment.normalized,
                    wordIndex
                });

                wordIndex++;
            }
        }
    );


    // 英語以外は従来どおり
    if (
        !/^en(?:-|$)/i.test(lang)
    ) {

        return words.map(
            word => ({
                token:
                    word.normalized,

                sourceWordIndexes: [
                    word.wordIndex
                ]
            })
        );
    }


    const normalizeRaw =
        value =>
            String(value || '')
                .normalize('NFKC')
                .toLowerCase()
                .replace(/’/g, "'");


    // ======================================
    // 短縮形そのもの
    // ======================================
    const contractionAliases = {

        "i'm": "__i_am__",
        "you're": "__you_are__",
        "we're": "__we_are__",
        "they're": "__they_are__",

        "he's": "__he_s__",
        "she's": "__she_s__",
        "it's": "__it_s__",
        "that's": "__that_s__",
        "there's": "__there_s__",
        "what's": "__what_s__",
        "who's": "__who_s__",

        "i'll": "__i_will__",
        "you'll": "__you_will__",
        "he'll": "__he_will__",
        "she'll": "__she_will__",
        "we'll": "__we_will__",
        "they'll": "__they_will__",

        "i've": "__i_have__",
        "you've": "__you_have__",
        "we've": "__we_have__",
        "they've": "__they_have__",

        "i'd": "__i_d__",
        "you'd": "__you_d__",
        "he'd": "__he_d__",
        "she'd": "__she_d__",
        "we'd": "__we_d__",
        "they'd": "__they_d__",

        "can't": "__can_not__",
        "couldn't": "__could_not__",
        "won't": "__will_not__",
        "wouldn't": "__would_not__",
        "shouldn't": "__should_not__",

        "don't": "__do_not__",
        "doesn't": "__does_not__",
        "didn't": "__did_not__",

        "isn't": "__is_not__",
        "aren't": "__are_not__",
        "wasn't": "__was_not__",
        "weren't": "__were_not__",

        "haven't": "__have_not__",
        "hasn't": "__has_not__",
        "hadn't": "__had_not__",

        "mustn't": "__must_not__",

        "let's": "__let_us__"
    };


    // ======================================
    // SpeechRecognitionが展開して返した場合
    // ======================================
    const phraseAliases = {

        "i am": "__i_am__",
        "you are": "__you_are__",
        "we are": "__we_are__",
        "they are": "__they_are__",

        "he is": "__he_s__",
        "he has": "__he_s__",
        "she is": "__she_s__",
        "she has": "__she_s__",
        "it is": "__it_s__",
        "it has": "__it_s__",

        "that is": "__that_s__",
        "that has": "__that_s__",
        "there is": "__there_s__",
        "there has": "__there_s__",
        "what is": "__what_s__",
        "what has": "__what_s__",
        "who is": "__who_s__",
        "who has": "__who_s__",

        "i will": "__i_will__",
        "you will": "__you_will__",
        "he will": "__he_will__",
        "she will": "__she_will__",
        "we will": "__we_will__",
        "they will": "__they_will__",

        "i have": "__i_have__",
        "you have": "__you_have__",
        "we have": "__we_have__",
        "they have": "__they_have__",

        "i would": "__i_d__",
        "i had": "__i_d__",
        "you would": "__you_d__",
        "you had": "__you_d__",
        "he would": "__he_d__",
        "he had": "__he_d__",
        "she would": "__she_d__",
        "she had": "__she_d__",
        "we would": "__we_d__",
        "we had": "__we_d__",
        "they would": "__they_d__",
        "they had": "__they_d__",

        "can not": "__can_not__",
        "could not": "__could_not__",
        "will not": "__will_not__",
        "would not": "__would_not__",
        "should not": "__should_not__",

        "do not": "__do_not__",
        "does not": "__does_not__",
        "did not": "__did_not__",

        "is not": "__is_not__",
        "are not": "__are_not__",
        "was not": "__was_not__",
        "were not": "__were_not__",

        "have not": "__have_not__",
        "has not": "__has_not__",
        "had not": "__had_not__",

                "must not": "__must_not__",

        "let us": "__let_us__"
    };


    // ==========================================
    // ★ 主語 + 否定短縮形の重なり対策
    // I won't = I will not
    // He hasn't = He has not
    // We aren't = We are not
    // ==========================================
    const negativeContractionAuxAliases = {

        "can't": "can",
        "couldn't": "could",
        "won't": "will",
        "wouldn't": "would",
        "shouldn't": "should",

        "don't": "do",
        "doesn't": "does",
        "didn't": "did",

        "isn't": "is",
        "aren't": "are",
        "wasn't": "was",
        "weren't": "were",

        "haven't": "have",
        "hasn't": "has",
        "hadn't": "had",

        "mustn't": "must"
    };


    const units = [];


    for (
        let i = 0;
        i < words.length;
        i++
    ) {

        const current =
            words[i];


                const raw =
            normalizeRaw(
                current.text
            );
        // ======================================
        // ★ 数字 + 1文字の英字
        // 3D = three d / 3 d
        // 4K = four k
        // 5G = five g
        // ======================================
        const numberLetter =
            raw.match(
                /^(\d+)([a-z])$/
            );


        if (numberLetter) {

            units.push({
                token:
                    `__num_${Number(
                        numberLetter[1]
                    )}__`,

                sourceWordIndexes: [
                    current.wordIndex
                ]
            });


            units.push({
                token:
                    numberLetter[2],

                sourceWordIndexes: [
                    current.wordIndex
                ]
            });


            continue;
        }

        // ======================================
        // ★ 主語 + 否定短縮形を
        // 主語 + 助動詞 + not と同一化
        //
        // I won't
        // → __i_will__ + not
        //
        // I will not
        // → __i_will__ + not
        // ======================================
        const nextWord =
            words[i + 1];


        const nextRaw =
            nextWord
                ? normalizeRaw(
                    nextWord.text
                )
                : '';


        const expandedAux =
            negativeContractionAuxAliases[
                nextRaw
            ];


        const subjectAuxPhrase =
            expandedAux
                ? `${current.normalized} ${expandedAux}`
                : '';


        if (
            nextWord &&
            expandedAux &&
            phraseAliases[
                subjectAuxPhrase
            ]
        ) {

            units.push({
                token:
                    phraseAliases[
                        subjectAuxPhrase
                    ],

                sourceWordIndexes: [
                    current.wordIndex,
                    nextWord.wordIndex
                ]
            });


            units.push({
                token:
                    'not',

                sourceWordIndexes: [
                    nextWord.wordIndex
                ]
            });


            i++;

            continue;
        }


        const numberUnit =
    getEnglishNumberComparisonUnit(
        words,
        i
    );


if (numberUnit) {

    units.push({
        token:
            numberUnit.token,

        sourceWordIndexes:
            numberUnit
                .sourceWordIndexes
    });


    i +=
        numberUnit.consumed -
        1;


    continue;
}

        // 短縮形そのもの
        if (
            contractionAliases[raw]
        ) {

            units.push({
                token:
                    contractionAliases[raw],

                sourceWordIndexes: [
                    current.wordIndex
                ]
            });

            continue;
        }


        // 2語の展開形
        if (
            i + 1 <
            words.length
        ) {

            const next =
                words[i + 1];


            const phrase =
                `${current.normalized} ${next.normalized}`;


            if (
                phraseAliases[phrase]
            ) {

                units.push({
                    token:
                        phraseAliases[phrase],

                    sourceWordIndexes: [
                        current.wordIndex,
                        next.wordIndex
                    ]
                });

                i++;

                continue;
            }
        }


        // cannot は can't と同一扱い
        const token =
            current.normalized ===
                'cannot'
                ? '__can_not__'
                : current.normalized;


        units.push({
            token,

            sourceWordIndexes: [
                current.wordIndex
            ]
        });
    }


    return units;
}

function getLessonTargetTokens() {

    if (
        typeof currentCustomLesson ===
            'undefined' ||
        !currentCustomLesson
    ) {
        return [];
    }


    const lang =
        getCurrentLessonLang();


    const tokens = [];


    if (
        currentCustomLesson.type ===
            'dialogue' &&
        Array.isArray(
            currentCustomLesson.dialogue
        )
    ) {

        currentCustomLesson.dialogue
            .forEach(
                line => {

                    buildSpeechComparisonUnits(
                        line && line.text
                            ? line.text
                            : '',
                        lang
                    )
                    .forEach(
                        unit =>
                            tokens.push(
                                unit.token
                            )
                    );
                }
            );

    } else {

        buildSpeechComparisonUnits(
            currentCustomLesson.eng || '',
            lang
        )
        .forEach(
            unit =>
                tokens.push(
                    unit.token
                )
        );
    }


    return tokens;
}

function refreshRecognitionTargetTextArray() {

    // ==========================================
    // ★ 採点用ターゲットは現在教材から直接生成する
    //
    // targetTextArray は UI 側の通常トークンとして保持し、
    // __i_am__ / __num_2012__ などの
    // 採点専用内部トークンでは上書きしない。
    // ==========================================
    return getLessonTargetTokens();
}

function escapeSpeechHtml(text) {
    return String(text || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}


// ==========================================
// ★ 音声認識の安定化 / 0点事故防止
// ==========================================
function setRecognitionHealth(state, message = '') {
    if (typeof window.updateMicHealthSensor === 'function') {
        window.updateMicHealthSensor(state, message);
    }
}

function joinTranscript(...parts) {
    return parts
        .map(v => String(v || '').trim())
        .filter(Boolean)
        .join(' ')
        .replace(/\s+/g, ' ')
        .trim();
}

// ==========================================
// ★ Android SpeechRecognition 重複対策
// ==========================================
function isAndroidSpeechRecognition() {
    return /Android/i.test(
        navigator.userAgent || ''
    );
}


// ==========================================
// ★ iPhone SpeechRecognition 判定
//
// iPhoneだけに限定する。
// iPadはここには含めない。
// Chrome on iPhoneもWebKitを使用するため対象。
// ==========================================
function isIPhoneSpeechRecognition() {

    return /iPhone|iPod/i.test(
        navigator.userAgent || ''
    );
}


function mergeAndroidRecognitionChunk(
    baseText,
    nextText
) {
    const base =
        String(baseText || '')
            .replace(/\s+/g, ' ')
            .trim();

    const next =
        String(nextText || '')
            .replace(/\s+/g, ' ')
            .trim();

    if (!base) return next;
    if (!next) return base;

    const lang =
        getCurrentLessonLang();

    const toWords = text =>
        segmentSpeechText(
            text,
            lang
        )
        .filter(
            item =>
                item.isWord &&
                item.normalized
        )
        .map(
            item =>
                item.normalized
        );

    const baseWords =
        toWords(base);

    const nextWords =
        toWords(next);

    if (
        baseWords.length === 0 ||
        nextWords.length === 0
    ) {
        return joinTranscript(
            base,
            next
        );
    }

    const startsWith =
        (full, prefix) => {

            if (
                prefix.length >
                full.length
            ) {
                return false;
            }

            return prefix.every(
                (word, index) =>
                    full[index] ===
                    word
            );
        };

    // 完全に同じ結果が再送された
    if (
        baseWords.length ===
            nextWords.length &&
        baseWords.every(
            (word, index) =>
                word ===
                nextWords[index]
        )
    ) {
        return base;
    }

    // Androidの典型例
    // "the"
    // → "the sustainable"
    // → "the sustainable development"
    if (
        startsWith(
            nextWords,
            baseWords
        )
    ) {
        return next;
    }

    // 古い短い結果が後から再送された
    if (
        startsWith(
            baseWords,
            nextWords
        )
    ) {
        return base;
    }

    return joinTranscript(
        base,
        next
    );
}

function mergeRecognitionChunk(
    baseText,
    nextText
) {
    if (
        !isAndroidSpeechRecognition()
    ) {
        return joinTranscript(
            baseText,
            nextText
        );
    }

    return mergeAndroidRecognitionChunk(
        baseText,
        nextText
    );
}

// ==========================================
// ★ SpeechRecognition 再接続境界の重複対策
// Android / Safari / Chrome / Edge 共通
// 前の認識結果の末尾と、新しい認識結果の先頭が
// 2語以上重複した場合に重複部分を除去する
// ==========================================
function mergeRecognitionBoundary(
    baseText,
    nextText
) {

    const base =
        String(baseText || '')
            .replace(/\s+/g, ' ')
            .trim();

    const next =
        String(nextText || '')
            .replace(/\s+/g, ' ')
            .trim();


    if (!base) return next;
    if (!next) return base;


    // 完全一致・累積結果などを先に処理
    const simpleMerged =
        mergeAndroidRecognitionChunk(
            base,
            next
        );


    const plainMerged =
        joinTranscript(
            base,
            next
        );


    if (
        simpleMerged !==
        plainMerged
    ) {

        return simpleMerged;
    }


    const lang =
        getCurrentLessonLang();


    const toWords = text =>
        segmentSpeechText(
            text,
            lang
        )
        .filter(
            item =>
                item.isWord &&
                item.normalized
        )
        .map(
            item =>
                item.normalized
        );


    const baseWords =
        toWords(base);


    const nextWords =
        toWords(next);


    let overlap =
        0;


    const maxOverlap =
        Math.min(
            baseWords.length,
            nextWords.length
        );


    // 前回結果の末尾と
    // 新しい結果の先頭が
    // 2語以上一致する場合だけ重複除去
    for (
        let size = maxOverlap;
        size >= 2;
        size--
    ) {

        const matched =
            baseWords
                .slice(-size)
                .every(
                    (word, index) =>
                        word ===
                        nextWords[index]
                );


        if (matched) {

            overlap =
                size;

            break;
        }
    }


    if (!overlap) {

        return plainMerged;
    }


    const segments =
        segmentSpeechText(
            next,
            lang
        );


    let skip =
        overlap;


    let remainder =
        '';


    for (
        const segment
        of segments
    ) {

        if (skip > 0) {

            if (
                segment.isWord &&
                segment.normalized
            ) {

                skip--;
            }

            continue;
        }


        remainder +=
            segment.text;
    }


    return joinTranscript(
        base,
        remainder
    );
}

function clearRecognitionTimer(type) {
    const timers = {
        start: recognitionStartTimer,
        speech: recognitionSpeechTimer,
        finish: recognitionFinishTimer
    };

    if (timers[type]) clearTimeout(timers[type]);

    if (type === 'start') recognitionStartTimer = null;
    if (type === 'speech') recognitionSpeechTimer = null;
    if (type === 'finish') recognitionFinishTimer = null;
}

function clearRecognitionTimers() {
    clearRecognitionTimer('start');
    clearRecognitionTimer('speech');
    clearRecognitionTimer('finish');
}
function clearMicCheckStartWatchdog() {

    if (
        micCheckStartWatchdogTimer
    ) {

        clearTimeout(
            micCheckStartWatchdogTimer
        );

        micCheckStartWatchdogTimer =
            null;
    }
}

// ==========================================
// ★ SpeechRecognition生成
// ==========================================
function createMainRecognition() {

    if (
        !window.SpeechRecognition
    ) {
        return null;
    }


    const rec =
        new window.SpeechRecognition();


    // ==========================================
    // ★ Recognition設定
    //
    // iPhone / iPad / desktopを同じ処理にする。
    //
    // AndroidのみinterimResultsで
    // 重複しやすいためfalse。
    // ==========================================
    rec.interimResults =
        !isAndroidSpeechRecognition();


    rec.continuous =
        true;


    rec.lang =
        getCurrentLessonLang();


    // ==========================================
    // Recognition START
    // ==========================================
    rec.onstart = () => {

        if (
            rec !== mainRecognition
        ) {
            return;
        }


        clearRecognitionTimer(
            'start'
        );


        recognitionBase =
            accumulatedTranscript.trim();


        recognitionHasResult =
            false;


        setRecognitionHealth(
            'ready',
            'マイク接続OK・音読を始めてください'
        );
    };


    // ==========================================
    // マイク入力開始
    // ==========================================
    rec.onaudiostart = () => {

        if (
            rec !== mainRecognition
        ) {
            return;
        }


        setRecognitionHealth(
            'ready',
            'マイク入力を確認しました'
        );
    };


    // ==========================================
    // 音を検出
    // ==========================================
    rec.onsoundstart = () => {

        if (
            rec !== mainRecognition ||
            recognitionHasResult
        ) {
            return;
        }


        setRecognitionHealth(
            'voice',
            '音声を検出しました'
        );
    };


    // ==========================================
    // 人の声を検出
    // ==========================================
    rec.onspeechstart = () => {

        if (
            rec !== mainRecognition
        ) {
            return;
        }


        recognitionHasResult =
            false;


        setRecognitionHealth(
            'voice',
            '声を検出しました'
        );


        clearRecognitionTimer(
            'speech'
        );


        // ==========================================
        // AndroidはinterimResults=falseなので
        // 発話途中でタイムアウトさせない
        // ==========================================
        if (
            isAndroidSpeechRecognition()
        ) {
            return;
        }


        recognitionSpeechTimer =
            setTimeout(() => {

                if (
                    rec !== mainRecognition ||
                    !isMainRecording ||
                    recognitionFinishing ||
                    recognitionHasResult
                ) {
                    return;
                }


                setRecognitionHealth(
                    'warning',
                    '声は届いていますが認識結果が返っていません。再接続します…'
                );


                recoverRecognition(
                    'speech-timeout',
                    true
                );

            }, RECOGNITION_SPEECH_TIMEOUT_MS);
    };


    // ==========================================
    // 音声認識結果
    // ==========================================
    rec.onresult = event => {

        if (
            rec !== mainRecognition
        ) {
            return;
        }


        let finalText =
            '';


        let interimText =
            '';


        const resultStartIndex =
    Math.min(
        recognitionResultStartIndex,
        event.results.length
    );


for (
    let i = resultStartIndex;
    i < event.results.length;
    i++
) {

            const result =
                event.results[i];


            const transcript =
                result?.[0]
                    ?.transcript || '';


            if (
                !transcript.trim()
            ) {
                continue;
            }


            if (
                result.isFinal
            ) {

                finalText =
                    mergeRecognitionChunk(
                        finalText,
                        transcript
                    );

            } else {

                interimText =
                    mergeRecognitionChunk(
                        interimText,
                        transcript
                    );
            }
        }


        // ==========================================
        // 再接続以前の確定結果と
        // 今回の確定結果を結合
        // ==========================================
        accumulatedTranscript =
            mergeRecognitionBoundary(
                recognitionBase,
                finalText
            );


        currentInterim =
            interimText;


        const liveText =
            mergeRecognitionChunk(
                accumulatedTranscript,
                currentInterim
            );


        if (
            !liveText.trim()
        ) {
            return;
        }


        recognitionHasResult =
            true;


        recognitionRetryCount =
            0;


        recognitionPassiveRestartCount =
            0;


        clearRecognitionTimer(
            'speech'
        );


        // ==========================================
        // FINISH中は表示更新を行わない。
        // 最終採点はfinalizeRecognition()で行う。
        // ==========================================
        if (
            recognitionFinishing
        ) {
            return;
        }


        setRecognitionHealth(
            'recognizing',
            '音声を認識しています ✓'
        );


        processSpeechMatch(
            liveText,
            false
        );
    };


    // ==========================================
    // Recognition ERROR
    // ==========================================
    rec.onerror = event => {

        if (
            rec !== mainRecognition ||
            recognitionFinishing
        ) {
            return;
        }


        const error =
            event?.error || 'unknown';


        console.warn(
            '[Copeak SpeechRecognition]',
            error,
            event
        );


        if (
            error === 'not-allowed' ||
            error === 'denied' ||
            error ===
                'service-not-allowed'
        ) {

            failRecognition(
                '⚠️ マイクの使用が許可されていません。ブラウザのマイク設定を確認してください。'
            );

            return;
        }


        if (
            error === 'audio-capture'
        ) {

            failRecognition(
                '⚠️ マイク入力を取得できません。端末やブラウザのマイク設定を確認してください。'
            );

            return;
        }


        if (
            error ===
                'language-not-supported'
        ) {

            failRecognition(
                '⚠️ この言語は現在のブラウザの音声認識に対応していません。'
            );

            return;
        }


        if (
            error === 'no-speech'
        ) {

            setRecognitionHealth(
                'warning',
                '声を待っています…'
            );

            return;
        }


        if (
            error !== 'aborted'
        ) {

            recoverRecognition(
                error,
                true
            );
        }
    };


    // ==========================================
// Recognition END
// ==========================================
rec.onend = () => {

    // ==========================================
    // ★ Recognitionが正常に終了したことを記録
    //
    // iPhoneでは終了済みRecognitionへ
    // さらにabort()を重ねないために使用する。
    // PC / iPadでは判定に使用しない。
    // ==========================================
    rec.__copeakEnded =
        true;


    if (
        rec !== mainRecognition
    ) {
        return;
    }


        // ==========================================
        // FINISH操作による終了
        // ==========================================
        if (
            recognitionFinishing
        ) {

            // stop()直後の最後のonresultが
            // 反映される余裕を持たせる
            setTimeout(
                finalizeRecognition,
                100
            );

            return;
        }


        // ==========================================
        // ブラウザ側が勝手に終了した場合
        // ==========================================
        if (
            isMainRecording
        ) {

            recoverRecognition(
                'unexpected-end',
                false
            );
        }
    };


    return rec;
}

// ==========================================
// ★ Recognitionを新しく生成して開始
// ==========================================
function startRecognitionEngine() {

    const oldRec =
    mainRecognition;


mainRecognition =
    null;


// ==========================================
// ★ iPhone終了済みRecognitionの二重abort防止
//
// iPhoneでonendまで正常終了している場合は
// ここで再度abort()を実行しない。
//
// iPad / PC / Androidは従来どおりabort()する。
// またiPhoneでもonend前にfinalizeされた場合は
// 従来どおりabort()して確実に終了させる。
// ==========================================
if (
    oldRec &&
    !(
        isIPhoneSpeechRecognition() &&
        oldRec.__copeakEnded ===
            true
    )
) {

    try {

        oldRec.abort();

    } catch (e) {}
}


    const rec =
        createMainRecognition();


    if (!rec) {
        return false;
    }


    mainRecognition =
        rec;


    recognitionBase =
        accumulatedTranscript.trim();


    recognitionHasResult =
        false;
// 新しいRecognitionを作った場合はresult番号が0から始まる
recognitionResultStartIndex =
    0;

    try {

        rec.start();

        clearRecognitionTimer(
            'start'
        );


        // ==========================================
        // 初回のマイク許可操作にも余裕を持たせ、
        // onstartを最大8秒待つ。
        // ==========================================
        recognitionStartTimer =
            setTimeout(() => {

                if (
                    rec !== mainRecognition ||
                    !isMainRecording ||
                    recognitionFinishing
                ) {
                    return;
                }


                setRecognitionHealth(
                    'warning',
                    '音声認識を開始できません。再接続します…'
                );


                recoverRecognition(
                    'start-timeout',
                    true
                );

            }, RECOGNITION_START_TIMEOUT_MS);


        return true;


    } catch (e) {

        console.warn(
            '[Copeak] SpeechRecognition.start() failed:',
            e
        );


        if (
            mainRecognition === rec
        ) {
            mainRecognition = null;
        }


        return false;
    }
}


// ==========================================
// ★ SpeechRecognition自動復旧
// ==========================================
function recoverRecognition(
    reason = 'unknown',
    countAsFailure = true
) {

    if (
        !isMainRecording ||
        recognitionFinishing ||
        recognitionRecovering
    ) {
        return;
    }


    // ==========================================
    // 本当のRecognition失敗
    // ==========================================
    if (countAsFailure) {

        if (
            recognitionRetryCount >=
            MAX_RECOGNITION_RETRIES
        ) {

            failRecognition(
                '⚠️ 音声認識が安定しないため、今回の結果は保存していません。もう一度STARTしてください。'
            );

            return;
        }


        recognitionRetryCount++;


    } else {

        // ==========================================
        // continuous=trueでもブラウザ都合で
        // Recognitionが終了する場合がある。
        //
        // ただし無限再起動にはしない。
        // ==========================================
        if (
            recognitionPassiveRestartCount >=
            MAX_PASSIVE_RESTARTS
        ) {

            failRecognition(
                '⚠️ 音声認識が途中で停止したため、今回の結果は保存していません。もう一度STARTしてください。'
            );

            return;
        }


        recognitionPassiveRestartCount++;
    }


    recognitionRecovering =
        true;


    clearRecognitionTimer(
        'start'
    );

    clearRecognitionTimer(
        'speech'
    );


    // ==========================================
    // 再接続直前のInterim結果を失わない
    // ==========================================
    if (
        currentInterim.trim()
    ) {

        accumulatedTranscript =
            mergeRecognitionChunk(
                accumulatedTranscript,
                currentInterim
            );

        currentInterim =
            '';
    }


    setRecognitionHealth(
        'reconnecting',
        '音声認識を再接続しています…'
    );


    const oldRec =
        mainRecognition;


    mainRecognition =
        null;


    if (oldRec) {

        try {
            oldRec.abort();
        } catch (e) {}
    }


    // ==========================================
    // 少し待って新しいRecognitionを作る
    // ==========================================
    setTimeout(() => {

        recognitionRecovering =
            false;


        if (
            !isMainRecording ||
            recognitionFinishing
        ) {
            return;
        }


        if (
            !startRecognitionEngine()
        ) {

            recoverRecognition(
                `${reason}:start-failed`,
                true
            );
        }

    }, 300);
}


// ==========================================
// ★ Paced / Shadowing停止
// ==========================================
function stopReadingMedia() {

    if (
        typeof stopPacedReading ===
            'function'
    ) {

        stopPacedReading();
    }


    const audioPlayer =
        document.getElementById(
            'audioPlayer'
        );


    // ==========================================
    // 停止済みのaudioへ
    // 不要なpause()を発行しない
    // ==========================================
    if (
        audioPlayer &&
        !audioPlayer.paused
    ) {

        audioPlayer.pause();
    }
}

// ==========================================
// ★ Recognition完全失敗
// ==========================================
function failRecognition(message) {

    clearRecognitionTimers();


    isMainRecording =
        false;


    recognitionFinishing =
        false;


    recognitionFinalized =
        true;


    recognitionRecovering =
        false;


    recognitionHasResult =
        false;


    const oldRec =
        mainRecognition;


    mainRecognition =
        null;


    if (oldRec) {

        try {
            oldRec.abort();
        } catch (e) {}
    }


    stopReadingMedia();


    // ==========================================
    // Recognition障害は生徒の0点として保存しない
    // ==========================================
    accumulatedTranscript =
        '';


    currentInterim =
        '';


    recordStartTime =
        0;


    updateMicButtonUI();


    setRecognitionHealth(
        'error',
        message
    );


    if (
        typeof resetLearningState ===
        'function'
    ) {

        resetLearningState();

    } else if (
        typeof showPreReadingState ===
        'function'
    ) {

        showPreReadingState();
    }


    if (
        typeof showMsg ===
        'function'
    ) {

        showMsg(
            message
        );
    }
}


// ==========================================
// ★ FINISH後の最終確定
// ==========================================
function finalizeRecognition() {

    // 二重採点防止
    if (
        recognitionFinalized
    ) {
        return;
    }


    recognitionFinalized =
        true;


    recognitionFinishing =
        false;


    recognitionRecovering =
        false;


    clearRecognitionTimers();


    // ==========================================
    // 最後のInterim結果を救済
    // ==========================================
    if (
        currentInterim.trim()
    ) {

        accumulatedTranscript =
            mergeRecognitionChunk(
                accumulatedTranscript,
                currentInterim
            );

        currentInterim =
            '';
    }


    const recognizedWords =
        segmentSpeechText(
            accumulatedTranscript,
            getCurrentLessonLang()
        ).filter(
            segment =>
                segment.isWord &&
                segment.normalized
        );


        const oldRec =
        mainRecognition;


    mainRecognition =
        null;


    if (
        oldRec
    ) {

        try {

            oldRec.abort();

        } catch (e) {}
    }


    // ==========================================
    // SpeechRecognitionを完全に切り離した後に
    // Paced / Shadowing音声を停止する
    // ==========================================
    stopReadingMedia();


    // ==========================================
    // ★ 異常な認識結果は採点・保存しない
    // ==========================================

    const targetWordCount =
        getLessonTargetTokens()
            .length;

    const elapsedSeconds =
        recordStartTime > 0
            ? (
                Date.now() -
                recordStartTime
            ) / 1000
            : 0;

    const estimatedWpm =
        elapsedSeconds > 0
            ? Math.round(
                recognizedWords.length *
                60 /
                elapsedSeconds
            )
            : 0;

    const tooManyRecognizedWords =
        targetWordCount > 0 &&
        recognizedWords.length >
            Math.max(
                Math.ceil(
                    targetWordCount *
                    2.2
                ),
                targetWordCount +
                    25
            );

    const impossibleEnglishWpm =
        /^en(?:-|$)/i.test(
            getCurrentLessonLang()
        ) &&
        targetWordCount >= 20 &&
        recognizedWords.length >= 10 &&
        estimatedWpm > 500;


    if (
        tooManyRecognizedWords ||
        impossibleEnglishWpm
    ) {

        console.warn(
            '[Copeak] Abnormal speech result rejected',
            {
                recognizedWords:
                    recognizedWords.length,

                targetWordCount,

                estimatedWpm
            }
        );

        accumulatedTranscript =
            '';

        currentInterim =
            '';

        recordStartTime =
            0;

        setRecognitionHealth(
            'error',
            '音声認識の重複を検出しました'
        );

        if (
            typeof resetLearningState ===
            'function'
        ) {
            resetLearningState();

        } else if (
            typeof showPreReadingState ===
            'function'
        ) {
            showPreReadingState();
        }

        if (
            typeof showMsg ===
            'function'
        ) {
            showMsg(
                '⚠️ 音声認識結果が重複したため、今回は採点・保存していません。もう一度お試しください。'
            );
        }

        return;
    }

    // ==========================================
    // ★ 1語も認識できなかった場合
    // 「0点」ではなく「測定失敗」
    // ==========================================
    if (
        recognizedWords.length ===
        0
    ) {

        accumulatedTranscript =
            '';


        currentInterim =
            '';


        recordStartTime =
            0;


        setRecognitionHealth(
            'error',
            '音声を認識できませんでした'
        );


        if (
            typeof resetLearningState ===
            'function'
        ) {

            resetLearningState();

        } else if (
            typeof showPreReadingState ===
            'function'
        ) {

            showPreReadingState();
        }


        if (
            typeof showMsg ===
            'function'
        ) {

            showMsg(
                '⚠️ 音声を認識できなかったため、結果は保存していません。もう一度お試しください。'
            );
        }


        return;
    }


    // ==========================================
    // ★ 正常に認識できた場合だけ採点
    // ==========================================
    setRecognitionHealth(
        'done',
        '音声認識完了 ✓'
    );


    processSpeechMatch(
        accumulatedTranscript,
        true
    );


    if (
        typeof showResultState ===
        'function'
    ) {

        showResultState();
    }
}


// ==========================================
// ★ FINISH
// ==========================================
function finishRecordingSession() {

    isMainRecording =
        false;


    recognitionFinishing =
        true;


    recognitionFinalized =
        false;


    recognitionRecovering =
        false;


    clearRecognitionTimer(
        'start'
    );


    clearRecognitionTimer(
        'speech'
    );


    updateMicButtonUI();


    // ==========================================
    // 左上の✕によるキャンセル
    // ==========================================
    if (
        window.isCopeakCanceling ===
            true
    ) {

        const oldRec =
            mainRecognition;


        mainRecognition =
            null;


        if (
            oldRec
        ) {

            try {

                oldRec.abort();

            } catch (e) {}
        }


        stopReadingMedia();


        recognitionFinishing =
            false;


        recognitionFinalized =
            true;


        if (
            typeof showResultState ===
                'function'
        ) {

            showResultState();
        }


        return;
    }


    setRecognitionHealth(
        'finalizing',
        '音声を確定しています…'
    );


    // ==========================================
    // ★重要
    //
    // audioPlayer.pause()より先に
    // SpeechRecognition.stop()を行う。
    //
    // SpeechRecognitionから最後のresultを
    // 受け取ってから音声プレイヤーを止める。
    // ==========================================
    try {

        if (
            mainRecognition
        ) {

            mainRecognition.stop();

        } else {

            finalizeRecognition();

            return;
        }

    } catch (e) {

        console.warn(
            '[Copeak] SpeechRecognition.stop() failed:',
            e
        );


        finalizeRecognition();

        return;
    }


    clearRecognitionTimer(
        'finish'
    );


    // ==========================================
    // Safari等でonendが返らない場合の保険
    // ==========================================
    recognitionFinishTimer =
        setTimeout(
            finalizeRecognition,
            RECOGNITION_FINISH_WAIT_MS
        );
}

// ==========================================
// ★ START
// ==========================================
function startRecordingSession(
    reuseExistingRecognition = false
) {

    accumulatedTranscript =
        '';


    currentInterim =
        '';


    // ★ 既存CopeakのWPM仕様を維持
    recordStartTime =
        Date.now();


    recognitionBase =
        '';


    recognitionFinishing =
        false;


    recognitionFinalized =
        false;


    recognitionRecovering =
        false;


    recognitionHasResult =
        false;


    recognitionRetryCount =
        0;


    recognitionPassiveRestartCount =
        0;


    clearRecognitionTimers();
if (
    !reuseExistingRecognition
) {

    recognitionResultStartIndex =
        0;
}

    const recDisplay =
        document.getElementById(
            'recognizedTextDisplay'
        );


    if (recDisplay) {

        recDisplay.innerHTML =
            'Listening... (話してください)';


        recDisplay.style.color =
            '#292524';
    }


    isMainRecording =
        true;


    setRecognitionHealth(
        'checking',
        'マイクを確認しています…'
    );


    if (
        typeof showRecordingState ===
        'function'
    ) {

        showRecordingState();
    }


    // ==========================================
    // Paced Reading
    // ==========================================
    if (
        typeof startPacedReading ===
            'function' &&
        currentMode ===
            'paced'
    ) {

        startPacedReading();
    }


    // 多言語ターゲット更新
    refreshRecognitionTargetTextArray();


    const audioPlayer =
        document.getElementById(
            'audioPlayer'
        );


    const hasAudio =
        currentCustomLesson &&
        (
            currentCustomLesson.audioBlob ||
            currentCustomLesson.audioUrl
        );


    const startEngine = () => {

    if (
        !isMainRecording ||
        recognitionFinishing
    ) {
        return;
    }


    // ==========================================
    // ★ Mic Checkで起動したRecognitionを
    // そのまま本番へ引き継ぐ
    // ==========================================
    if (
        reuseExistingRecognition
    ) {

        if (
            !mainRecognition
        ) {

            failRecognition(
                '⚠️ 音声認識の接続が失われました。もう一度STARTしてください。'
            );

            return;
        }


        setRecognitionHealth(
            'ready',
            '音声認識OK・本文を最初から読んでください'
        );


        updateMicButtonUI();


        processSpeechMatch(
            '',
            false
        );


        return;
    }


    // ==========================================
    // 通常開始・自動復旧時のみ
    // 新しいRecognitionを作る
    // ==========================================
    if (
        !startRecognitionEngine()
    ) {

        recoverRecognition(
            'start-failed',
            true
        );

        return;
    }


    updateMicButtonUI();


    processSpeechMatch(
        '',
        false
    );
};


    // ==========================================
    // Shadowing
    // ==========================================
    if (
        currentMode ===
            'shadowing' &&
        hasAudio &&
        audioPlayer
    ) {

        audioPlayer.currentTime =
            0;


        audioPlayer
            .play()
            .then(() => {

                setTimeout(
                    startEngine,
                    300
                );

            })
            .catch(() => {

                startEngine();
            });


    } else {

        startEngine();
    }
}


// ==========================================
// ★ START / FINISH
// ==========================================
function toggleRecording() {

    if (
        !window.SpeechRecognition
    ) {

        if (
            typeof showMsg ===
            'function'
        ) {

            showMsg(
                'お使いのブラウザは音声認識に非対応です'
            );
        }


        return;
    }


    // ==========================================
    // 本番音読中 → FINISH
    // ==========================================
    if (
        isMainRecording
    ) {

        finishRecordingSession();
        return;
    }


    // ==========================================
    // ★ 毎回、本番前に実際の音声認識を確認する
    // ==========================================
    startMicCheck();
}

// ==========================================
// ★ Mic Button UI
// ==========================================
function updateMicButtonUI() {
    const btn = document.getElementById('micBtn');
    const txt = document.getElementById('micBtnText');
    if (!btn || !txt) return;

    if (isMainRecording) {
        btn.classList.remove('bg-emerald-800');
        btn.classList.add('bg-stone-800', 'animate-pulse');
        txt.innerText = "FINISH (終了して結果を見る)";
    } else {
        btn.classList.remove('bg-stone-800', 'animate-pulse');
        btn.classList.add('bg-emerald-800');
        
        if (currentMode === 'shadowing') {
            txt.innerText = accumulatedTranscript.trim() ? "RETRY SHADOWING" : "START SHADOWING";
        } else if (currentMode === 'memo') {
            txt.innerText = accumulatedTranscript.trim() ? "RETRY VANISH" : "START VANISH";
        } else if (currentMode === 'paced') {
            txt.innerText = accumulatedTranscript.trim() ? "RETRY PACED" : "START PACED";
        } else {
            txt.innerText = accumulatedTranscript.trim() ? "RETRY READING" : "START READING";
        }
    }
}

// ==========================================
// ★ 音声認識結果と教材本文を順序を保って最適照合
// 認識抜け・途中開始・余分な認識があっても
// 後半で正常に再同期できるようにする
// ==========================================
function alignSpeechTokens(spokenWords, targetWords) {

    const spokenLength = spokenWords.length;
    const targetLength = targetWords.length;

    if (
        spokenLength === 0 ||
        targetLength === 0
    ) {
        return {
            matchCount: 0,
            matchedSpokenIndexes: new Set()
        };
    }

    // LCS (Longest Common Subsequence)
    // 音読教材程度の長さなら十分軽量
    const dp = Array.from(
        { length: spokenLength + 1 },
        () => new Uint16Array(targetLength + 1)
    );

    for (
        let i = spokenLength - 1;
        i >= 0;
        i--
    ) {

        for (
            let j = targetLength - 1;
            j >= 0;
            j--
        ) {

            if (
                spokenWords[i] ===
                targetWords[j]
            ) {

                dp[i][j] =
                    dp[i + 1][j + 1] + 1;

            } else {

                dp[i][j] =
                    Math.max(
                        dp[i + 1][j],
                        dp[i][j + 1]
                    );
            }
        }
    }

    const matchedSpokenIndexes =
        new Set();

    let spokenIndex = 0;
    let targetIndex = 0;

    while (
        spokenIndex < spokenLength &&
        targetIndex < targetLength
    ) {

        if (
            spokenWords[spokenIndex] ===
            targetWords[targetIndex]
        ) {

            matchedSpokenIndexes.add(
                spokenIndex
            );

            spokenIndex++;
            targetIndex++;

        } else if (
            dp[spokenIndex + 1][targetIndex] >=
            dp[spokenIndex][targetIndex + 1]
        ) {

            spokenIndex++;

        } else {

            targetIndex++;
        }
    }

    return {
        matchCount:
            matchedSpokenIndexes.size,

        matchedSpokenIndexes
    };
}

// ==========================================
// ★ 音声照合・採点
// ==========================================
function processSpeechMatch(spokenText, isFinalResult = false) {
    const recDisplay = document.getElementById('recognizedTextDisplay');
    if (!recDisplay) return;

    const lang = getCurrentLessonLang();

    // ★ ui.js側の旧targetTextArrayに依存せず、現在教材から毎回安全に取得する
    //    取得できない場合のみ既存targetTextArrayへフォールバックする。
    let scoringTargetArray = getLessonTargetTokens();

    if (
        scoringTargetArray.length === 0 &&
        typeof targetTextArray !==
            'undefined'
    ) {

        scoringTargetArray =
            targetTextArray
                .map(
                    token =>
                        normalizeSpeechToken(
                            token,
                            lang
                        )
                )
                .filter(Boolean);
    }


    if (
        scoringTargetArray.length ===
        0
    ) {
        return;
    }


    if (
        !spokenText &&
        isMainRecording
    ) {
        return;
    }


    // ==========================================
    // ★ 多言語対応：認識結果を分割
    // ==========================================
    const spokenSegments =
        segmentSpeechText(
            spokenText,
            lang
        );


    const spokenWordSegments =
        spokenSegments.filter(
            segment =>
                segment.isWord &&
                segment.normalized
        );

    // ==========================================
    // ★ 教材本文との最適照合
    // ==========================================

    const spokenComparisonUnits =
    buildSpeechComparisonUnits(
        spokenText,
        lang
    );


const spokenWords =
    spokenComparisonUnits.map(
        unit =>
            unit.token
    );


    const alignment =
        alignSpeechTokens(
            spokenWords,
            scoringTargetArray
        );


    const matchCount =
        alignment.matchCount;


    const matchedComparisonIndexes =
    alignment.matchedSpokenIndexes;


const matchedSpokenIndexes =
    new Set();


spokenComparisonUnits.forEach(
    (unit, index) => {

        if (
            !matchedComparisonIndexes.has(
                index
            )
        ) {
            return;
        }


        unit.sourceWordIndexes
            .forEach(
                wordIndex =>
                    matchedSpokenIndexes.add(
                        wordIndex
                    )
            );
    }
);


    let htmlOutput =
        [];


    let spokenWordIndex =
        0;


    spokenSegments.forEach(
        segment => {

            // 空白・句読点等はそのまま表示
            if (
                !segment.isWord ||
                !segment.normalized
            ) {

                htmlOutput.push(
                    escapeSpeechHtml(
                        segment.text
                    )
                );

                return;
            }


            const isMatched =
                matchedSpokenIndexes.has(
                    spokenWordIndex
                );


            spokenWordIndex++;


            const safeOriginal =
                escapeSpeechHtml(
                    segment.text
                );


            if (
                isMatched
            ) {

                htmlOutput.push(
                    `<span class="matched-word">${safeOriginal}</span>`
                );

            } else {

                htmlOutput.push(
                    `<span class="unmatched-word">${safeOriginal}</span>`
                );
            }
        }
    );
    // 日本語・中国語なども
    // 元の空白・句読点配置を維持して表示
    recDisplay.innerHTML =
        htmlOutput.join('');


    if (
        isMainRecording ||
        isFinalResult
    ) {

        recDisplay.scrollTop =
            recDisplay.scrollHeight;
    }


    // ==========================================
    // Accuracy
    // ==========================================
    const validTargetWordCount =
        scoringTargetArray.length;


    const percentage =
        validTargetWordCount ===
            0
            ? 0
            : Math.round(
                (
                    matchCount /
                    validTargetWordCount
                ) *
                100
            );


    const currentAccuracy =
        percentage > 100
            ? 100
            : percentage;


    // ==========================================
    // WPM
    // ==========================================
    // 英語では従来どおり word/minute。
    // 空白区切りでない言語では Intl.Segmenter の
    // word-like unit/minute として内部計算する。
    let currentWpm =
        0;


    if (
        recordStartTime >
            0 &&
        spokenWordSegments.length >
            0
    ) {

        let elapsedMinutes =
            (
                Date.now() -
                recordStartTime
            ) /
            60000;


        if (
            elapsedMinutes <
            0.01
        ) {

            elapsedMinutes =
                0.01;
        }


        currentWpm =
            Math.round(
                spokenWordSegments.length /
                elapsedMinutes
            );
    }


    let targetWpmToUse =
        (
            typeof targetWpm !==
            'undefined'
        )
            ? targetWpm
            : 130;


    let wpmRatio =
        Math.min(
            currentWpm /
                targetWpmToUse,
            1.0
        );


    let comprehensionScore =
        Math.round(
            (
                currentAccuracy *
                0.6
            ) +
            (
                wpmRatio *
                100 *
                0.4
            )
        );


    if (
        comprehensionScore >
        100
    ) {

        comprehensionScore =
            100;
    }


    // ==========================================
    // Final Result
    // ==========================================
    if (
        isFinalResult
    ) {

        document
            .getElementById(
                'bigAccValue'
            )
            .innerText =
                `${currentAccuracy}%`;


        document
            .getElementById(
                'bigWpmValue'
            )
            .innerText =
                currentWpm;


        const compEl =
            document.getElementById(
                'bigCompValue'
            );


        compEl.innerText =
            `${comprehensionScore}%`;


        if (
            comprehensionScore >=
            80
        ) {

            compEl.className =
                "text-5xl md:text-6xl font-bold text-yellow-400 serif-font";

        } else if (
            comprehensionScore >=
            50
        ) {

            compEl.className =
                "text-5xl md:text-6xl font-bold text-amber-500 serif-font";

        } else {

            compEl.className =
                "text-5xl md:text-6xl font-bold text-red-400 serif-font";
        }

        // ==========================================
        // Copeak Rewards
        // ==========================================
        if (
            typeof window.processCopeakReward === 'function' &&
            currentCustomLesson
        ) {
            window.processCopeakReward({
                lessonId: currentCustomLesson.id,
                accuracy: currentAccuracy,
                wpm: currentWpm,
                transcript: spokenText
            });
        }
        // ==========================================
        // 履歴保存
        // ==========================================
        if (
            currentCustomLesson &&
            !currentCustomLesson.isQuest &&
            !currentCustomLesson.skipLocalHistory
        ) {

            const todayStr =
                new Date()
                    .toLocaleDateString();


            const logData = {

                date:
                    todayStr,

                mode:
                    currentMode,

                score:
                    currentAccuracy,

                wpm:
                    currentWpm,

                comp:
                    comprehensionScore,

                timestamp:
                    new Date()
                        .getTime()
            };


            if (
                typeof savePracticeLog ===
                'function'
            ) {

                savePracticeLog(
                    currentCustomLesson.id,
                    logData,
                    () => {

                        updateHistoryUI();
                    }
                );

            } else {

                updateHistoryUI();
            }
        }


        // ==========================================
        // 共同モード
        // ==========================================
        if (
            typeof sendMyResultToPartner ===
            'function'
        ) {

            sendMyResultToPartner(
                currentAccuracy,
                currentWpm
            );
        }


        // ==========================================
        // Quest
        // ==========================================
        if (
            typeof evaluateQuestResult ===
            'function'
        ) {

            evaluateQuestResult(
                currentAccuracy,
                currentWpm
            );
        }
    }
}


// ==========================================
// ★ 学習履歴UI
// ==========================================
function updateHistoryUI() {

    if (
        !currentCustomLesson
    ) {
        return;
    }


    let history =
        currentCustomLesson.history ||
        [];


    let totalReads =
        history.length;


    const iconsHtml =
        history
            .map(log => {

                let icon =
                    '📖';


                let titleText =
                    '音読';


                if (
                    log.mode ===
                    'shadowing'
                ) {

                    icon =
                        '🎧';

                    titleText =
                        'シャドーイング';
                }


                if (
                    log.mode ===
                    'memo'
                ) {

                    icon =
                        '🧠';

                    titleText =
                        '暗記';
                }


                if (
                    log.mode ===
                    'paced'
                ) {

                    icon =
                        '⚡️';

                    titleText =
                        'ペース音読';
                }


                return (
                    `<span class="text-2xl drop-shadow-md" title="${titleText}">${icon}</span>`
                );
            })
            .join('');


    const iconContainer =
        document.getElementById(
            'practiceIconsContainer'
        );


    if (
        iconContainer
    ) {

        iconContainer.innerHTML =
            iconsHtml;
    }


    let isConsecutive =
        false;


    let daysSinceLastPractice =
        0;


    if (
        totalReads >
        1
    ) {

        const lastLog =
            history[
                totalReads -
                2
            ];


        const lastDate =
            new Date(
                lastLog.timestamp
            );


        const todayDate =
            new Date();


        const diffTime =
            Math.abs(
                todayDate -
                lastDate
            );


        daysSinceLastPractice =
            Math.ceil(
                diffTime /
                (
                    1000 *
                    60 *
                    60 *
                    24
                )
            );


        if (
            daysSinceLastPractice ===
                1 ||
            daysSinceLastPractice ===
                0
        ) {

            isConsecutive =
                true;
        }
    }


    // challenge.html等で
    // 辞書がない環境でクラッシュを防止
    if (
        typeof dynamicDict ===
        'undefined'
    ) {

        return;
    }


    const langKey =
        window.currentAppLang ||
        'ja';


    const dict =
        dynamicDict[
            langKey
        ];


    if (
        !dict
    ) {

        return;
    }


    let adviceMsg =
        `<strong class="text-emerald-800 text-base">${dict.fb_count.replace('{n}', totalReads)}</strong><br>`;


    if (
        totalReads <
        5
    ) {

        adviceMsg +=
            dict.fb_under5.replace(
                '{n}',
                5 -
                totalReads
            );

    } else if (
        totalReads >=
            5 &&
        isConsecutive
    ) {

        adviceMsg +=
            dict.fb_good;

    } else {

        if (
            daysSinceLastPractice >
            1
        ) {

            adviceMsg +=
                dict.fb_done_days.replace(
                    '{n}',
                    daysSinceLastPractice
                );

        } else {

            adviceMsg +=
                dict.fb_done_today;
        }
    }


    const adviceContainer =
        document.getElementById(
            'slaAdviceText'
        );


    if (
        adviceContainer
    ) {

        adviceContainer.innerHTML =
            adviceMsg;
    }
}
// ==========================================
// ★ Copeak Speech Recognition Check
// 本番前に教材冒頭を実際に読んで音声認識を確認
// ==========================================

let micCheckPassed = false;
let micCheckPassedLang = '';
let micCheckTimer = null;

const MIC_CHECK_WORDS = 5;
const MIC_CHECK_PASS_RATIO = 0.6;
const MIC_CHECK_TIMEOUT = 10000;


// ==========================================
// ★ 教材冒頭からMic Check用短文を取得
// ==========================================
function getMicCheckTargetText() {

    if (
        typeof currentCustomLesson ===
            'undefined' ||
        !currentCustomLesson
    ) {

        return '';
    }


    let source = '';


    if (
        currentCustomLesson.type ===
            'dialogue' &&
        Array.isArray(
            currentCustomLesson.dialogue
        )
    ) {

        const first =
            currentCustomLesson.dialogue.find(
                line =>
                    line &&
                    line.text &&
                    line.text.trim()
            );


        source =
            first
                ? first.text
                : '';

    } else {

        source =
            currentCustomLesson.eng || '';
    }


    const segments =
        segmentSpeechText(
            source.trim(),
            getCurrentLessonLang()
        );


    let count = 0;
    let result = '';


    for (
        const segment
        of segments
    ) {

        result +=
            segment.text;


        if (
            segment.isWord &&
            segment.normalized
        ) {

            count++;
        }


        if (
            count >=
                MIC_CHECK_WORDS
        ) {

            break;
        }
    }


    return result.trim();
}


// ==========================================
// ★ リハーサル音声との一致率
// 本番と同じ正規化・照合ロジックを使用
// ==========================================
function getMicCheckMatchRatio(
    target,
    spoken
) {

    const lang =
        getCurrentLessonLang();


    const targetTokens =
        buildSpeechComparisonUnits(
            target,
            lang
        )
        .map(
            unit =>
                unit.token
        );


    const spokenTokens =
        buildSpeechComparisonUnits(
            spoken,
            lang
        )
        .map(
            unit =>
                unit.token
        );


    if (
        targetTokens.length === 0 ||
        spokenTokens.length === 0
    ) {

        return 0;
    }


    const alignment =
        alignSpeechTokens(
            spokenTokens,
            targetTokens
        );


    return (
        alignment.matchCount /
        targetTokens.length
    );
}


// ==========================================
// ★ Mic Check UI
// ==========================================
function ensureMicCheckUI() {

    let modal =
        document.getElementById(
            'micCheckModal'
        );


    if (
        modal
    ) {

        return modal;
    }


    modal =
        document.createElement(
            'div'
        );


    modal.id =
        'micCheckModal';


    modal.className =
        'hidden fixed inset-0 z-[30000] ' +
        'bg-black/40 flex items-center justify-center p-4';


    modal.innerHTML = `
        <div class="
            w-full
            max-w-md
            bg-white
            rounded-2xl
            shadow-2xl
            p-6
            text-center
        ">

            <div class="text-4xl mb-2">
                🎙️
            </div>

            <h2 class="
                text-xl
                font-black
                text-stone-800
                mb-1
            ">
                音声チェック
            </h2>

            <p class="
                text-sm
                text-stone-500
                mb-5
            ">
                下の部分を声に出して読んでください
            </p>

            <div
                id="micCheckTarget"
                class="
                    bg-stone-50
                    border
                    border-stone-200
                    rounded-xl
                    p-4
                    text-lg
                    font-bold
                    text-stone-800
                    leading-relaxed
                    mb-4
                "
            ></div>

            <div
                id="micCheckStatus"
                class="
                    text-sm
                    font-bold
                    text-blue-600
                    min-h-[24px]
                    mb-5
                "
            >
                🎙️ 聞いています…
            </div>

            <div
                id="micCheckActions"
                class="hidden"
            >

                <button
                    id="micCheckStartBtn"
                    type="button"
                    onclick="beginReadingAfterMicCheck()"
                    class="
                        hidden
                        w-full
                        py-3
                        rounded-xl
                        bg-emerald-700
                        hover:bg-emerald-800
                        text-white
                        font-black
                        mb-2
                    "
                >
                    音読を始める
                </button>

                <button
                    id="micCheckRetryBtn"
                    type="button"
                    onclick="startMicCheck()"
                    class="
                        hidden
                        w-full
                        py-3
                        rounded-xl
                        bg-stone-200
                        hover:bg-stone-300
                        text-stone-700
                        font-bold
                        mb-2
                    "
                >
                    もう一度確認する
                </button>

                <button
                    type="button"
                    onclick="cancelMicCheck()"
                    class="
                        text-sm
                        text-stone-400
                        hover:text-stone-600
                    "
                >
                    キャンセル
                </button>

            </div>

        </div>
    `;


    document.body.appendChild(
        modal
    );


    return modal;
}


// ==========================================
// ★ Mic Check ステータス
// ==========================================
function setMicCheckStatus(
    type,
    message
) {

    const el =
        document.getElementById(
            'micCheckStatus'
        );


    if (
        !el
    ) {

        return;
    }


    el.textContent =
        message;


    const colors = {

        listening:
            'text-blue-600',

        success:
            'text-emerald-700',

        error:
            'text-red-600'
    };


    el.className =
        'text-sm font-bold min-h-[24px] mb-5 ' +
        (
            colors[type] ||
            'text-stone-500'
        );
}

// ==========================================
// ★ iPhone Mic Check 自動復旧
//
// start()後にイベントが返らない場合だけ実行。
// iPad / PC / Androidでは呼ばれない。
// ==========================================
async function recoverIPhoneMicCheckStart(
    staleRec
) {

    if (
        !isIPhoneSpeechRecognition() ||
        staleRec !==
            mainRecognition ||
        micCheckPassed
    ) {

        return;
    }


    clearMicCheckStartWatchdog();


    // ==========================================
    // ★ 無限再起動防止
    // 1回だけ自動復旧を許可する
    // ==========================================
    if (
        iPhoneMicCheckRecoveryAttempts >=
            MAX_IPHONE_MIC_CHECK_RECOVERIES
    ) {

        showMicCheckFailure(
            'iPhoneの音声認識を再接続できませんでした。もう一度お試しください。'
        );

        return;
    }


    iPhoneMicCheckRecoveryAttempts++;


    if (
        micCheckTimer
    ) {

        clearTimeout(
            micCheckTimer
        );

        micCheckTimer =
            null;
    }


    // ==========================================
    // ★ 古いRecognitionを先に切り離す
    // ==========================================
    mainRecognition =
        null;


    // 遅れてイベントが届いても
    // 新しいRecognitionへ干渉させない
    staleRec.onstart =
        null;

    staleRec.onaudiostart =
        null;

    staleRec.onresult =
        null;

    staleRec.onerror =
        null;

    staleRec.onend =
        null;


    try {

        staleRec.abort();

    } catch (e) {}


    setMicCheckStatus(
        'listening',
        '🎙️ iPhoneのマイクを再接続しています…'
    );


    setRecognitionHealth(
        'reconnecting',
        'iPhoneの音声認識を再接続しています…'
    );


    // ==========================================
    // ★ iPhoneの音声入力セッションを
    // 一度起こして、すぐ解放する
    // ==========================================
    if (
        navigator.mediaDevices &&
        typeof navigator.mediaDevices
            .getUserMedia ===
            'function'
    ) {

        try {

            const stream =
                await navigator
                    .mediaDevices
                    .getUserMedia({
                        audio: true
                    });


            stream
                .getTracks()
                .forEach(
                    track =>
                        track.stop()
                );

        } catch (e) {

            console.warn(
                '[Copeak] iPhone mic reset failed:',
                e
            );
        }
    }


    // ==========================================
    // ★ WebKitに少し解放時間を与えてから
    // 新しいRecognitionを作る
    // ==========================================
    setTimeout(
        () => {

            if (
                mainRecognition ||
                micCheckPassed
            ) {

                return;
            }


            startMicCheck(
                true
            );

        },
        IPHONE_MIC_RESTART_DELAY_MS
    );
}
// ==========================================
// ★ Mic Check開始
// 本番と同じSpeechRecognitionを使用する
// ==========================================
function startMicCheck(
    isIPhoneRecovery = false
) {
    clearMicCheckStartWatchdog();


    // 生徒が通常STARTした場合だけ
    // 自動復旧回数をリセットする
    if (
        !isIPhoneRecovery
    ) {

        iPhoneMicCheckRecoveryAttempts =
            0;
    }
    if (
        !window.SpeechRecognition
    ) {

        if (
            typeof showMsg ===
                'function'
        ) {

            showMsg(
                'お使いのブラウザは音声認識に対応していません'
            );
        }

        return;
    }


    const target =
        getMicCheckTargetText();


    // 教材本文が取得できない場合のみ
    // 通常の本番開始へフォールバック
    if (
        !target
    ) {

        startRecordingSession();
        return;
    }


    // ==========================================
    // 前回のRecognitionが残っていた場合は破棄
    // ==========================================
    const oldRec =
        mainRecognition;


    mainRecognition =
        null;


    if (
        oldRec
    ) {

        try {

            oldRec.abort();

        } catch (e) {}
    }


    if (
        micCheckTimer
    ) {

        clearTimeout(
            micCheckTimer
        );


        micCheckTimer =
            null;
    }


    clearRecognitionTimers();


    micCheckPassed =
        false;


    micCheckPassedLang =
        '';


    recognitionResultStartIndex =
        0;


    accumulatedTranscript =
        '';


    currentInterim =
        '';


    recognitionBase =
        '';


    recognitionFinishing =
        false;


    recognitionRecovering =
        false;


    recognitionHasResult =
        false;


    const modal =
        ensureMicCheckUI();


    modal.classList.remove(
        'hidden'
    );


    const targetEl =
        document.getElementById(
            'micCheckTarget'
        );


    const actions =
        document.getElementById(
            'micCheckActions'
        );


    const startBtn =
        document.getElementById(
            'micCheckStartBtn'
        );


    const retryBtn =
        document.getElementById(
            'micCheckRetryBtn'
        );


    if (
        targetEl
    ) {

        targetEl.textContent =
            target;
    }


    actions?.classList.add(
        'hidden'
    );


    startBtn?.classList.add(
        'hidden'
    );


    retryBtn?.classList.add(
        'hidden'
    );


    setMicCheckStatus(
        'listening',
        '🎙️ 表示された部分を読んでください'
    );


    setRecognitionHealth(
        'checking',
        '音声認識を確認しています…'
    );


    // ==========================================
    // ★ 本番と同じRecognition生成処理を使う
    // ==========================================
    const rec =
        createMainRecognition();


    if (
        !rec
    ) {

        showMicCheckFailure(
            '音声認識を開始できませんでした。'
        );

        return;
    }


    mainRecognition =
        rec;


    // ==========================================
// 本番用handlerを保存
// ==========================================
const mainOnStart =
    rec.onstart;


const mainOnAudioStart =
    rec.onaudiostart;


const mainOnResult =
    rec.onresult;


const mainOnError =
    rec.onerror;


const mainOnEnd =
    rec.onend;


// ==========================================
// ★ Mic Checkが本当に開始されたら
// iPhone Watchdogを解除する
// ==========================================
const markMicCheckStarted =
    () => {

        clearMicCheckStartWatchdog();
    };


rec.onstart =
    () => {

        markMicCheckStarted();

        if (
            typeof mainOnStart ===
                'function'
        ) {

            mainOnStart();
        }
    };


rec.onaudiostart =
    () => {

        markMicCheckStarted();

        if (
            typeof mainOnAudioStart ===
                'function'
        ) {

            mainOnAudioStart();
        }
    };


    // ==========================================
    // Mic Check中だけonresultを差し替える
    // ==========================================
    rec.onresult =
    event => {

        markMicCheckStarted();


        if (
            rec !==
                mainRecognition
        ) {

                return;
            }


            let spoken =
                '';


            let hasFinalResult =
                false;


            for (
                let i = 0;
                i < event.results.length;
                i++
            ) {

                const result =
                    event.results[i];


                const transcript =
                    result?.[0]
                        ?.transcript || '';


                if (
                    !transcript.trim()
                ) {

                    continue;
                }


                spoken =
                    joinTranscript(
                        spoken,
                        transcript
                    );


                if (
                    result.isFinal
                ) {

                    hasFinalResult =
                        true;
                }
            }


            if (
                !spoken.trim()
            ) {

                return;
            }


            setMicCheckStatus(
                'listening',
                `聞き取っています：${spoken}`
            );


            const ratio =
                getMicCheckMatchRatio(
                    target,
                    spoken
                );


            // ======================================
            // Final結果が返り、60%以上一致したら成功
            // ======================================
            if (
                !hasFinalResult ||
                ratio <
                    MIC_CHECK_PASS_RATIO
            ) {

                return;
            }


            micCheckPassed =
                true;


            micCheckPassedLang =
                getCurrentLessonLang();


            if (
                micCheckTimer
            ) {

                clearTimeout(
                    micCheckTimer
                );


                micCheckTimer =
                    null;
            }


            // ======================================
            // ★ Mic Check分のresult番号を記録
            //
            // ここより前は本番採点から除外する。
            // ======================================
            recognitionResultStartIndex =
                event.results.length;


            // ======================================
            // ★ stop()しない
            //
            // 同じRecognitionをそのまま本番用handlerへ戻す。
            // ======================================
            rec.onstart =
    mainOnStart;


rec.onaudiostart =
    mainOnAudioStart;


rec.onresult =
    mainOnResult;


rec.onerror =
    mainOnError;


rec.onend =
    mainOnEnd;


            setMicCheckStatus(
                'success',
                '✓ 音声認識OK'
            );


            setRecognitionHealth(
                'done',
                '音声認識チェックOK ✓'
            );


            // ======================================
            // Apple端末でRecognitionを切らないため
            // 成功した瞬間に同じセッションで本番へ移る
            // ======================================
            beginReadingAfterMicCheck();
        };


    // ==========================================
    // Mic Check中のERROR
    // ==========================================
    rec.onerror =
    event => {

        clearMicCheckStartWatchdog();

            if (
                rec !==
                    mainRecognition
            ) {

                return;
            }


            const error =
                event?.error || '';


            if (
                error ===
                    'aborted'
            ) {

                return;
            }


            if (
                error ===
                    'not-allowed' ||
                error ===
                    'denied' ||
                error ===
                    'service-not-allowed'
            ) {

                showMicCheckFailure(
                    'マイクの使用を許可してください。'
                );

                return;
            }


            if (
                error ===
                    'audio-capture'
            ) {

                showMicCheckFailure(
                    'マイク入力を確認できませんでした。'
                );

                return;
            }


            if (
                error ===
                    'no-speech'
            ) {

                setMicCheckStatus(
                    'listening',
                    '🎙️ 声を待っています…'
                );

                return;
            }


            showMicCheckFailure(
                '音声認識に失敗しました。もう一度お試しください。'
            );
        };


    // ==========================================
    // Mic Check中にRecognitionが終了した場合
    // ==========================================
    rec.onend =
        () => {

            if (
                rec !==
                    mainRecognition
            ) {

                return;
            }


            if (
                micCheckPassed
            ) {

                return;
            }


            showMicCheckFailure(
                '音声認識が途中で終了しました。もう一度お試しください。'
            );
        };


    micCheckTimer =
        setTimeout(
            () => {

                if (
                    rec !==
                        mainRecognition ||
                    micCheckPassed
                ) {

                    return;
                }


                showMicCheckFailure(
                    '声を確認できませんでした。表示された部分をもう一度読んでください。'
                );

            },
            MIC_CHECK_TIMEOUT
        );


    try {

    rec.start();


    // ==========================================
    // ★ iPhoneだけ start() の実起動を監視
    //
    // PC / iPad / Androidでは一切実行しない。
    // ==========================================
    if (
        isIPhoneSpeechRecognition()
    ) {

        clearMicCheckStartWatchdog();


        micCheckStartWatchdogTimer =
            setTimeout(
                () => {

                    if (
                        rec !==
                            mainRecognition ||
                        micCheckPassed
                    ) {

                        return;
                    }


                    console.warn(
    '[Copeak] iPhone Mic Check start timeout'
);


recoverIPhoneMicCheckStart(
    rec
);

                },
                IPHONE_MIC_CHECK_START_WATCHDOG_MS
            );
    }

} catch (e) {

    clearMicCheckStartWatchdog();


    showMicCheckFailure(
        '音声認識を開始できませんでした。もう一度お試しください。'
    );
}
}


// ==========================================
// ★ Mic Check失敗
// ==========================================
function showMicCheckFailure(
    message
) {

    clearMicCheckStartWatchdog();


    micCheckPassed =
        false;


    micCheckPassedLang =
        '';


    if (
        micCheckTimer
    ) {

        clearTimeout(
            micCheckTimer
        );


        micCheckTimer =
            null;
    }


    const rec =
        mainRecognition;


    mainRecognition =
        null;


    if (
        rec
    ) {

        try {

            rec.abort();

        } catch (e) {}
    }


    recognitionResultStartIndex =
        0;


    setMicCheckStatus(
        'error',
        `⚠ ${message}`
    );


    const actions =
        document.getElementById(
            'micCheckActions'
        );


    const startBtn =
        document.getElementById(
            'micCheckStartBtn'
        );


    const retryBtn =
        document.getElementById(
            'micCheckRetryBtn'
        );


    actions?.classList.remove(
        'hidden'
    );


    startBtn?.classList.add(
        'hidden'
    );


    retryBtn?.classList.remove(
        'hidden'
    );


    setRecognitionHealth(
        'error',
        message
    );
}


// ==========================================
// ★ Mic Check成功 → 同じRecognitionで本番
// ==========================================
function beginReadingAfterMicCheck() {
clearMicCheckStartWatchdog();


iPhoneMicCheckRecoveryAttempts =
    0;
    if (
        !micCheckPassed ||
        !mainRecognition
    ) {

        return;
    }


    document
        .getElementById(
            'micCheckModal'
        )
        ?.classList.add(
            'hidden'
        );


    // ==========================================
    // Mic Checkの文字列を本番へ持ち込まない
    // ==========================================
    accumulatedTranscript =
        '';


    currentInterim =
        '';


    recognitionBase =
        '';


    recordStartTime =
        0;


    // ==========================================
    // Togetherモードだけは
    // ここでRecognitionを解放してREADY通知
    // ==========================================
    if (
        window.copeakMicCheckReadyOnly ===
            true
    ) {

        const callback =
            window.copeakMicCheckReadyCallback;


        window.copeakMicCheckReadyOnly =
            false;


        window.copeakMicCheckReadyCallback =
            null;


        const rec =
            mainRecognition;


        mainRecognition =
            null;


        if (
            rec
        ) {

            try {

                rec.abort();

            } catch (e) {}
        }


        recognitionResultStartIndex =
            0;


        if (
            typeof callback ===
                'function'
        ) {

            callback();
        }


        return;
    }


    // ==========================================
    // ★ TRUE = 新しいRecognitionを作らない
    // ==========================================
    startRecordingSession(
        true
    );
}


// ==========================================
// ★ Mic Checkキャンセル
// ==========================================
function cancelMicCheck() {
 clearMicCheckStartWatchdog();


    iPhoneMicCheckRecoveryAttempts =
        0;
    if (
        micCheckTimer
    ) {

        clearTimeout(
            micCheckTimer
        );


        micCheckTimer =
            null;
    }


    const rec =
        mainRecognition;


    mainRecognition =
        null;


    if (
        rec
    ) {

        try {

            rec.abort();

        } catch (e) {}
    }


    micCheckPassed =
        false;


    micCheckPassedLang =
        '';


    recognitionResultStartIndex =
        0;


    document
        .getElementById(
            'micCheckModal'
        )
        ?.classList.add(
            'hidden'
        );


    window.copeakMicCheckReadyOnly =
        false;


    window.copeakMicCheckReadyCallback =
        null;


    setRecognitionHealth(
        'idle',
        '音読開始前です'
    );
}

// ==========================================
// ★ 本番Recognition障害時
// 次回STARTでは必ずMic Checkからやり直す
// ==========================================
const originalFailRecognitionForMicCheck =
    failRecognition;


failRecognition =
    function(message) {

        micCheckPassed =
            false;


        micCheckPassedLang =
            '';


        return originalFailRecognitionForMicCheck(
            message
        );
    };


// ==========================================
// ★ 外部から使用
// ==========================================
window.toggleRecording =
    toggleRecording;


window.startMicCheck =
    startMicCheck;


window.beginReadingAfterMicCheck =
    beginReadingAfterMicCheck;


window.cancelMicCheck =
    cancelMicCheck;


// ==========================================
// 動的テキスト用 翻訳辞書（Dynamic Translations）
// ==========================================
window.currentAppLang = 'ja'; // 初期言語

const dynamicDict = {
    ja: {
        // 目標ランク (Target Scores)
        lv1_desc: "【音声化の第1歩】まずは英語の「音」を恐れずに声に出す段階です。1秒に1単語のペースで、ゆっくり確実に文字を音に変えていきましょう！",
        lv2_desc: "【つながる英語脳】文字と意味が少しずつ結びついてくる段階です。ブツブツ途切れてもOK。まずは単語の塊（チャンク）を意識してみよう！",
        lv3_desc: "【脱・ひっくり返し読み】英語の並び順のまま、左から右へリズムよく読み進める段階です。共通テストや英検の長文を読み切る基礎体力がつきます。",
        lv4_desc: "【脳の省エネモード】発音の処理が自動化され、脳のスタミナが残る段階です。試験本番で初めて見る英文に出会っても、焦らずスラスラ意味が頭に入ります。",
        lv5_desc: "【直読直解の極致】共通テストを時間内に余裕で解き切り、見直しの時間が10分余るレベルのスピードです。返り読み一切なしの「一生モノの英語脳」の完成！",
        
        // SLA 脳内処理解説 (SLA Slides)
        sla1_title: "音韻符号化の起動フェーズ",
        sla1_desc: "英語の音読に強い苦手意識を持つ生徒向けのスタートライン。脳内では目から入った文字を「音」に変換する処理だけでメモリが一杯になっています。<br>ここでは文法や意味を考える余裕がないため、まずは点数やスピードを気にせず「声を出すこと」で脳の言語回路を起動させることがミッションです。",
        sla2_title: "形式-意味マッピングの初期フェーズ",
        sla2_desc: "単語の「文字・音」と「意味」が脳内で少しずつリンクし始める段階です。1語ずつではなく、短い「意味の塊（チャンク）」として英語を捉え始めます。<br>多少発音がつっかえたり、意味が曖昧でも立ち止まらずに、次の塊へと進む「英語の波に乗る感覚」を養います。",
        sla3_title: "直線的言語処理への移行フェーズ",
        sla3_desc: "「日本語の語順にひっくり返して訳していては間に合わない速度」の入り口です。英語を語順のまま処理する回路が動き始めます。<br>視線を強制的に前へと進めることで、脳から「返り読みの癖」を引き剥がし、実戦的な読解スピードの土台を固めます。",
        sla4_title: "低次処理の自動化フェーズ",
        sla4_desc: "単語識別や構文解析といった「低次処理」が無意識化（自動化）され、脳のワーキングメモリに大きな空きスペースが生まれます。<br>空いたメモリを「深い意味理解」に回せるため、共通テストなどの長文を時間内にしっかり読み解き、得点力が爆発的に伸び始めます。",
        sla5_title: "ワーキングメモリ完全解放フェーズ",
        sla5_desc: "初見の英文であっても、まるで日本語のニュースを読んでいるかのように自然に意味が流れ込んでくる領域です。<br>返り読み一切なしで長文を余裕で解き切るだけでなく、リスニング力もネイティブスピーカーの会話についていける「一生モノの英語脳」が完成します。",

        // フィードバック (Feedback)
        fb_count: "現在 {n}回目 の練習です！",
        fb_under5: "SLA（第二言語習得論）の研究では、同じ文章を <strong>5〜7回</strong> 反復することで脳内の神経回路が繋がり、「自動化」が始まると言われています。あと <strong>{n}回</strong> 繰り返すと、英語を英語のまま処理する感覚が掴めてきます！",
        fb_good: "🔥 素晴らしい反復です！「分散学習（Spacing Effect）」の効果により、脳内でこの回路がスムーズに動き、長期記憶に定着し始めています。",
        fb_done_days: "すでに脳内で回路は構築されています！（前回から{n}日ぶりですね）少し日数が空いてから「思い出す」プロセスを入れることで、記憶はより強固なものになります。",
        fb_done_today: "すでに脳内で回路は構築されています！少し日数が空いてから「思い出す」プロセスを入れることで、記憶はより強固なものになります。"
    },
    en: {
        // Target Scores
        lv1_desc: "[Step 1: Vocalization] Don't be afraid to vocalize English sounds. Read at a slow pace of 1 word per second, steadily converting letters into sounds!",
        lv2_desc: "[Connecting the Brain] Letters and meanings are starting to connect. It's okay to stumble. Focus on reading in 'chunks' of words!",
        lv3_desc: "[No More Backwards Reading] Read rhythmically from left to right in the English word order. This builds the stamina needed for long reading tests.",
        lv4_desc: "[Brain Energy Saving] Pronunciation is automated, saving your brain's stamina. You can easily grasp the meaning of unseen texts without panicking.",
        lv5_desc: "[Ultimate Direct Reading] Speed to easily finish long tests with 10 minutes to spare. A lifelong 'English Brain' with zero backwards reading!",
        
        // SLA Slides
        sla1_title: "Phonological Encoding Activation",
        sla1_desc: "The starting line. The brain's memory is fully occupied just converting visual letters into 'sounds'.<br>Since there's no room to process grammar or deep meaning yet, the mission here is simply to activate the brain's language circuit by 'speaking out loud', ignoring scores or speed.",
        sla2_title: "Initial Form-Meaning Mapping",
        sla2_desc: "Letters/sounds and 'meanings' begin to link in the brain. You start grasping English in short 'chunks' rather than word-by-word.<br>Even if pronunciation is slightly off or meanings are vague, you develop the sense of 'riding the English wave' without stopping.",
        sla3_title: "Transition to Linear Processing",
        sla3_desc: "Entering the speed where translating backwards into your native language isn't fast enough. The circuit to process English in its original word order activates.<br>By forcing your eyes forward, you break the habit of reading backwards, solidifying the foundation for practical reading speed.",
        sla4_title: "Automation of Lower-Level Processing",
        sla4_desc: "Lower-level processing like word identification is automated, freeing up massive space in your brain's working memory.<br>This freed memory can be allocated to 'deep reading comprehension', explosively improving your ability to read and solve long passages in time.",
        sla5_title: "Complete Release of Working Memory",
        sla5_desc: "The realm where meaning flows naturally into your mind, even with unseen texts, as if reading news in your native language.<br>You gain a lifelong 'English Brain' that can not only breeze through long readings with zero backwards reading, but also keep up with native speakers in listening.",

        // Feedback
        fb_count: "This is your {n}th practice!",
        fb_under5: "SLA research suggests repeating the same text <strong>5-7 times</strong> helps connect neural pathways and starts 'automation'. Just <strong>{n} more times</strong> to get the feel of processing English as English!",
        fb_good: "🔥 Excellent repetition! Thanks to the 'Spacing Effect', this pathway is working smoothly and settling into your long-term memory.",
        fb_done_days: "The neural pathways are already built! (It's been {n} days since last time) Recalling it after a few days makes the memory even stronger.",
        fb_done_today: "The neural pathways are already built! Recalling it after a few days makes the memory even stronger."
    }
};

// 言語切替時のイベントフック
function updateDynamicTranslations(lang) {
    window.currentAppLang = dynamicDict[lang] ? lang : 'en'; // ja以外は一旦enにフォールバック
    
    // 現在のレベルのテキストと画像を更新
    if (typeof switchTargetLevel === 'function') switchTargetLevel(window.currentPreviewLevel || 1);
    
    // SLAスライドのテキストを更新
    if (typeof updateSlaModalTexts === 'function') updateSlaModalTexts();
}

// ==========================================
// ★ Copeak 多言語化辞書データ (i18n)
// ==========================================
const i18n = {
    // 🇯🇵 日本語（デフォルト）
    "ja": {
        "head_title": "Copeak - 英語音読・シャドーイング練習ツール",
        "nav_my_library": "My Library",
        "warning_title": "データの保存に関する重要なお願い",
        "warning_ipad_bold": "iPad / スマホの方:",
        "warning_ipad_desc": "最初にブラウザのメニューから「ホーム画面に追加」を行い、必ずそのアイコンからアプリを開いてください。",
        "warning_pc_bold": "PCの方:",
        "warning_pc_desc": "ブックマークに登録し、常に同じブラウザを使用してください。",
        "teacher_title": "教員専用設定：成績回収システムの準備",
        "teacher_desc": "全国の先生方がこのシステムを使うための2ステップです。一度設定すれば、以後は共有リンクに自動で成績送信機能が付与されます。",
        "teacher_step1_title": "フォームの複製",
        "teacher_step1_desc": "以下のボタンから成績回収用のGoogleフォーム（ひな形）をご自身のGoogleドライブにコピーしてください。（※質問項目は変更しないでください）",
        "teacher_step1_btn": "マスターフォームをコピー",
        "teacher_step2_title": "URLの登録",
        "teacher_step2_desc": "コピーしたフォームを送信モードにし、回答用のURL（.../viewform）を下に貼り付けて保存します。",
        "teacher_step2_btn": "保存",
        "teacher_placeholder_url": "https://docs.google.com/forms/...",
        "form_title": "Create / Edit Material",
        "form_label_title": "Title",
        "form_placeholder_title": "例: Steve Jobs Speech",
        "form_label_language": "Language",
        "form_label_audio": "Audio File (Optional)",
        "form_audio_saved": "音声はすでに保存されています",
        "form_label_text": "Target Text (学習テキスト)",
        "form_placeholder_eng": "英語などのスクリプトを貼り付け",
        "form_label_translation": "Translation (日本語訳など)",
        "form_placeholder_jpn": "母語での訳を貼り付け (任意)",
        "form_btn_cancel": "Cancel",
        "form_btn_save": "Save to Library",
        "playlist_title": "Playlist",
        "footer_picspeak": "PicSpeak (スピーキング)",
        "footer_vocadash": "VocaDash (単語学習)",
        "footer_guide": "活用ガイド",
        "footer_dev": "開発者について",
        "footer_teacher": "教員用メニュー",
        "footer_terms": "利用規約",
        "footer_privacy": "プライバシーポリシー",
        "learn_back": "Back",
        "learn_share": "共有",
        "tab_read": "Read",
        "tab_paced": "Paced",
        "tab_vanish": "Vanish",
        "tab_shadow": "Shadow",
        "btn_ai_voice": "AI音声を再生",
        "score_accuracy": "Accuracy",
        "score_wpm": "WPM",
        "score_comp": "Comprehension",
        "score_feedback": "Learning Feedback",
        "btn_submit_score": "先生に成績を提出する（振り返り入力へ）",
        "label_your_voice": "Your Voice",
        "msg_press_start": "※Press START to begin",
        "label_target_text": "Target Text",
        "btn_show_translation": "訳を表示",
        "label_blank_level": "Blank Level (空欄の割合)",
        "label_target_wpm": "目標WPM設定",
        "label_translation": "Translation",
        "btn_start_text": "START",
        "sidebar_playlist": "Playlist",
        "chart_title": "Learning Progress",
        "chart_desc": "※日々の反復がスコアアップの鍵です！",
        "profile_title": "プロフィール登録",
        "profile_desc": "成績を送信するために、あなたの情報を登録してください。（この端末に保存されます）",
        "profile_class": "クラス",
        "profile_placeholder_class": "例: 1-A",
        "profile_num": "出席番号",
        "profile_placeholder_num": "例: 15",
        "profile_name": "氏名",
        "profile_placeholder_name": "例: 岡崎 太郎",
        "profile_save": "保存して始める",
        "ref_title": "先生に成績を送信",
        "ref_desc": "今日の練習の振り返り（工夫した点、難しかった点など）",
        "ref_placeholder_text": "例: イントネーションを意識してシャドーイングしました。",
        "ref_cancel": "キャンセル",
        "ref_submit": "この内容で送信する",
        "wpm_guide_title": "WPMの目安",
        "wpm_guide_desc": "※WPM (Words Per Minute) ＝ 1分間に読む単語数",
        "wpm_80": "ゆっくり (初心者)",
        "wpm_100": "標準的 (中学生レベル)",
        "wpm_120": "流暢 (高校生・日常会話)",
        "wpm_150": "速い (ニュース・TOEIC)",
        "wpm_180": "超特急 (ネイティブの早口)",
        "btn_close": "閉じる",
        "mode_guide_title": "Copeak 4-Step Learning Guide",
        "mode_guide_warning": "いきなり「Paced」や「Vanish」を行っても学習効果はありません。英文の内容を完全に理解し、Step 1 から順番に負荷を上げていきましょう。",
        "mode_tag_1": "導入・意味理解",
        "mode_sla": "🔬 SLA科学的根拠:",
        "mode_desc_1": "「Form-Meaning Mapping（形式と意味の結びつけ）」。文字と音声、そして「意味」を脳内で連結させる最初の土台作りです。",
        "mode_check": "🤔 内省チェック:",
        "mode_check_1": "「英文の意味を100%理解し、つっかえずにスラスラ読めているか？」",
        "mode_tag_2": "流暢さ・自動化",
        "mode_desc_2": "「Automatization（自動化）」。強制的なペースで「返り読み」を物理的に防ぎ、英語を英語の語順のまま処理するスピードを鍛えます。",
        "mode_check_2": "「日本語に訳さず理解できているか？スピードに焦って発音が雑になっていないか？」",
        "mode_tag_3": "記憶定着・内在化",
        "mode_desc_3": "「Retrieval Practice（検索練習）」。文字という視覚ヒントを奪い、ワーキングメモリに負荷をかけることで長期記憶への定着を促します。",
        "mode_check_3": "「単なる丸暗記ではなく、文脈や文法ルールから次の単語を予測して発話できているか？」",
        "mode_tag_4": "音韻処理の極致",
        "mode_desc_4": "「Phonological Loop（音韻ループ）の強化」。ネイティブのプロソディ（抑揚・リズム）を完全に模倣し、音声処理を極限まで自動化させます。",
        "mode_check_4": "「手本と声が完全に重なっているか？音声に集中しながら意味も頭に浮かんでいるか？」",
        "btn_start_learning": "理解して学習を始める"
    },

    // 🇺🇸 英語
    "en": {
        "head_title": "Copeak - English Shadowing & Reading Tool",
        "nav_my_library": "My Library",
        "warning_title": "Important Notice for Saving Data",
        "warning_ipad_bold": "iPad / Mobile users:",
        "warning_ipad_desc": "Please tap 'Add to Home Screen' from your browser menu first, and always open the app from that icon.",
        "warning_pc_bold": "PC users:",
        "warning_pc_desc": "Please bookmark this page and always use the same browser.",
        "teacher_title": "Teacher Settings: Score Collection Setup",
        "teacher_desc": "2 steps to set up the system. Once configured, a score submission feature will be automatically added to your shared links.",
        "teacher_step1_title": "Duplicate Form",
        "teacher_step1_desc": "Click the button below to copy the master Google Form to your Drive. (*Please do not edit the questions)",
        "teacher_step1_btn": "Copy Master Form",
        "teacher_step2_title": "Register URL",
        "teacher_step2_desc": "Open the copied form in 'Send' mode, paste the response URL (.../viewform) below, and save.",
        "teacher_step2_btn": "Save",
        "teacher_placeholder_url": "https://docs.google.com/forms/...",
        "form_title": "Create / Edit Material",
        "form_label_title": "Title",
        "form_placeholder_title": "e.g., Steve Jobs Speech",
        "form_label_language": "Language",
        "form_label_audio": "Audio File (Optional)",
        "form_audio_saved": "Audio is already saved",
        "form_label_text": "Target Text",
        "form_placeholder_eng": "Paste the target script here",
        "form_label_translation": "Translation",
        "form_placeholder_jpn": "Paste the translation (Optional)",
        "form_btn_cancel": "Cancel",
        "form_btn_save": "Save to Library",
        "playlist_title": "Playlist",
        "footer_picspeak": "PicSpeak (Speaking)",
        "footer_vocadash": "VocaDash (Vocabulary)",
        "footer_guide": "User Guide",
        "footer_dev": "About Developer",
        "footer_teacher": "Teacher Menu",
        "footer_terms": "Terms of Use",
        "footer_privacy": "Privacy Policy",
        "learn_back": "Back",
        "learn_share": "Share",
        "tab_read": "Read",
        "tab_paced": "Paced",
        "tab_vanish": "Vanish",
        "tab_shadow": "Shadow",
        "btn_ai_voice": "Play AI Voice",
        "score_accuracy": "Accuracy",
        "score_wpm": "WPM",
        "score_comp": "Comprehension",
        "score_feedback": "Learning Feedback",
        "btn_submit_score": "Submit Score to Teacher (Reflection)",
        "label_your_voice": "Your Voice",
        "msg_press_start": "*Press START to begin",
        "label_target_text": "Target Text",
        "btn_show_translation": "Show Translation",
        "label_blank_level": "Blank Level",
        "label_target_wpm": "Target WPM",
        "label_translation": "Translation",
        "btn_start_text": "START",
        "sidebar_playlist": "Playlist",
        "chart_title": "Learning Progress",
        "chart_desc": "*Daily practice is the key to a higher score!",
        "profile_title": "Profile Registration",
        "profile_desc": "Please register your information to submit scores. (Saved locally on this device)",
        "profile_class": "Class",
        "profile_placeholder_class": "e.g., 1-A",
        "profile_num": "Student Number",
        "profile_placeholder_num": "e.g., 15",
        "profile_name": "Name",
        "profile_placeholder_name": "e.g., John Doe",
        "profile_save": "Save and Start",
        "ref_title": "Submit Score",
        "ref_desc": "Reflection on today's practice (What went well, what was difficult, etc.)",
        "ref_placeholder_text": "e.g., I focused on my intonation while shadowing...",
        "ref_cancel": "Cancel",
        "ref_submit": "Submit Now",
        "wpm_guide_title": "WPM Guide",
        "wpm_guide_desc": "*WPM (Words Per Minute)",
        "wpm_80": "Slow (Beginner)",
        "wpm_100": "Standard (Intermediate)",
        "wpm_120": "Fluent (Daily Conversation)",
        "wpm_150": "Fast (News/TOEIC)",
        "wpm_180": "Super Fast (Native speed)",
        "btn_close": "Close",
        "mode_guide_title": "Copeak 4-Step Learning Guide",
        "mode_guide_warning": "Jumping straight to 'Paced' or 'Vanish' won't be effective. Understand the text perfectly first, then increase the load step by step.",
        "mode_tag_1": "Introduction / Meaning",
        "mode_sla": "🔬 SLA Basis:",
        "mode_desc_1": "'Form-Meaning Mapping'. The foundation of connecting text, sound, and meaning in your brain.",
        "mode_check": "🤔 Reflection Check:",
        "mode_check_1": "'Do I understand the meaning 100% and can I read it smoothly without stumbling?'",
        "mode_tag_2": "Fluency / Automatization",
        "mode_desc_2": "'Automatization'. A forced visual pace prevents regression, training your brain to process English in its natural word order.",
        "mode_check_2": "'Am I understanding it in English without translating? Is my pronunciation getting sloppy due to speed?'",
        "mode_tag_3": "Retention / Internalization",
        "mode_desc_3": "'Retrieval Practice'. By removing visual hints, we force your working memory to recall words, cementing them into long-term memory.",
        "mode_check_3": "'Am I predicting the next word from context/grammar, rather than just rote memorization?'",
        "mode_tag_4": "Ultimate Phonological Loop",
        "mode_desc_4": "'Phonological Loop Enhancement'. Mimicking the native prosody fully automates your speech perception, boosting both speaking and listening.",
        "mode_check_4": "'Is my voice perfectly overlapping with the model? Am I imagining the meaning while focusing on the sound?'",
        "btn_start_learning": "I understand, let's start"
    },

    // 🇹🇼 台湾語（繁体字）
    "zh-TW": {
        "head_title": "Copeak - 英語跟讀與朗讀練習工具",
        "nav_my_library": "我的素材庫",
        "warning_title": "關於資料保存的重要通知",
        "warning_ipad_bold": "iPad / 手機用戶:",
        "warning_ipad_desc": "請先從瀏覽器選單點擊「加入主畫面」，並且務必從該圖示開啟應用程式。",
        "warning_pc_bold": "電腦用戶:",
        "warning_pc_desc": "請將此頁面加入書籤，並始終使用相同的瀏覽器。",
        "teacher_title": "教師專用：成績收集系統設定",
        "teacher_desc": "設定系統只需兩個步驟。設定完成後，您的分享連結將自動附帶成績提交功能。",
        "teacher_step1_title": "複製表單",
        "teacher_step1_desc": "點擊下方按鈕將成績收集用的 Google 表單複製到您的雲端硬碟。（※請勿修改問題項目）",
        "teacher_step1_btn": "複製主表單",
        "teacher_step2_title": "註冊 URL",
        "teacher_step2_desc": "以「傳送」模式打開複製的表單，將回覆用的 URL（.../viewform）貼在下方並保存。",
        "teacher_step2_btn": "保存",
        "teacher_placeholder_url": "https://docs.google.com/forms/...",
        "form_title": "創建 / 編輯素材",
        "form_label_title": "標題",
        "form_placeholder_title": "例: 賈伯斯演講",
        "form_label_language": "語言",
        "form_label_audio": "音檔 (選填)",
        "form_audio_saved": "音檔已保存",
        "form_label_text": "學習文本",
        "form_placeholder_eng": "在此貼上英語講稿",
        "form_label_translation": "翻譯",
        "form_placeholder_jpn": "在此貼上母語翻譯 (選填)",
        "form_btn_cancel": "取消",
        "form_btn_save": "保存至素材庫",
        "playlist_title": "播放清單",
        "footer_picspeak": "PicSpeak (口說)",
        "footer_vocadash": "VocaDash (單字)",
        "footer_guide": "使用指南",
        "footer_dev": "關於開發者",
        "footer_teacher": "教師選單",
        "footer_terms": "服務條款",
        "footer_privacy": "隱私政策",
        "learn_back": "返回",
        "learn_share": "分享",
        "tab_read": "朗讀",
        "tab_paced": "配速",
        "tab_vanish": "消失",
        "tab_shadow": "跟讀",
        "btn_ai_voice": "播放 AI 語音",
        "score_accuracy": "準確度",
        "score_wpm": "WPM",
        "score_comp": "理解度",
        "score_feedback": "學習反饋",
        "btn_submit_score": "將成績提交給老師（填寫反思）",
        "label_your_voice": "您的語音",
        "msg_press_start": "※按 START 開始",
        "label_target_text": "目標文本",
        "btn_show_translation": "顯示翻譯",
        "label_blank_level": "挖空難度",
        "label_target_wpm": "目標 WPM 設定",
        "label_translation": "翻譯",
        "btn_start_text": "START",
        "sidebar_playlist": "播放清單",
        "chart_title": "學習進度",
        "chart_desc": "※每天的反覆練習是提高分數的關鍵！",
        "profile_title": "註冊個人資料",
        "profile_desc": "請註冊您的資訊以提交成績。（資料將保存在此設備上）",
        "profile_class": "班級",
        "profile_placeholder_class": "例: 1-A",
        "profile_num": "座號",
        "profile_placeholder_num": "例: 15",
        "profile_name": "姓名",
        "profile_placeholder_name": "例: 王小明",
        "profile_save": "保存並開始",
        "ref_title": "提交成績給老師",
        "ref_desc": "今日練習的反思（做得好的地方、困難的地方等）",
        "ref_placeholder_text": "例: 練習跟讀時，我特別注意了語調...",
        "ref_cancel": "取消",
        "ref_submit": "確認提交",
        "wpm_guide_title": "WPM 參考指標",
        "wpm_guide_desc": "※WPM (Words Per Minute) ＝ 每分鐘閱讀字數",
        "wpm_80": "緩慢 (初學者)",
        "wpm_100": "標準 (國中程度)",
        "wpm_120": "流利 (高中/日常對話)",
        "wpm_150": "快速 (新聞/多益)",
        "wpm_180": "極快 (母語人士語速)",
        "btn_close": "關閉",
        "mode_guide_title": "Copeak 4步驟學習指南",
        "mode_guide_warning": "直接進行「配速」或「消失」模式是無效的。請先完全理解文本，然後循序漸進地增加難度。",
        "mode_tag_1": "導入與理解",
        "mode_sla": "🔬 SLA 科學依據:",
        "mode_desc_1": "「形義連結」。在腦中將文字、聲音與意義建立連結的基礎步驟。",
        "mode_check": "🤔 反思檢查:",
        "mode_check_1": "「我是否 100% 理解意思，並且能流暢閱讀而不卡頓？」",
        "mode_tag_2": "流利度與自動化",
        "mode_desc_2": "「自動化」。強制性的視覺配速可防止回視，訓練大腦以英語的自然語序處理資訊。",
        "mode_check_2": "「我是否能直接用英語理解而不需要翻譯？發音是否因為速度變快而變得模糊？」",
        "mode_tag_3": "記憶與內化",
        "mode_desc_3": "「檢索練習」。藉由移除視覺提示，強迫工作記憶回想單字，進而鞏固至長期記憶。",
        "mode_check_3": "「我是根據上下文和文法規則預測下一個字，還是只是死記硬背？」",
        "mode_tag_4": "終極語音處理",
        "mode_desc_4": "「強化語音迴路」。完全模仿母語人士的韻律，讓語音處理達到極致自動化。",
        "mode_check_4": "「我的聲音是否與示範音檔完全重合？專注於聲音的同時，腦海中是否浮現了句意？」",
        "btn_start_learning": "我明白了，開始學習"
    },

    // 🇻🇳 ベトナム語
    "vi": {
        "head_title": "Copeak - Công cụ luyện đọc và Shadowing tiếng Anh",
        "nav_my_library": "Thư viện của tôi",
        "warning_title": "Lưu ý quan trọng về việc lưu dữ liệu",
        "warning_ipad_bold": "Người dùng iPad / Điện thoại:",
        "warning_ipad_desc": "Vui lòng chọn 'Thêm vào Màn hình chính' từ menu trình duyệt trước, và luôn mở ứng dụng từ biểu tượng đó.",
        "warning_pc_bold": "Người dùng PC:",
        "warning_pc_desc": "Vui lòng đánh dấu (bookmark) trang này và luôn sử dụng cùng một trình duyệt.",
        "teacher_title": "Cài đặt cho giáo viên: Thu thập điểm số",
        "teacher_desc": "2 bước để thiết lập hệ thống. Sau khi thiết lập, tính năng gửi điểm sẽ tự động được thêm vào liên kết chia sẻ của bạn.",
        "teacher_step1_title": "Sao chép Biểu mẫu",
        "teacher_step1_desc": "Nhấp vào nút bên dưới để sao chép Google Form thu thập điểm vào Drive của bạn. (*Vui lòng không chỉnh sửa các câu hỏi)",
        "teacher_step1_btn": "Sao chép Biểu mẫu Gốc",
        "teacher_step2_title": "Đăng ký URL",
        "teacher_step2_desc": "Mở biểu mẫu đã sao chép ở chế độ 'Gửi', dán URL phản hồi (.../viewform) xuống dưới và lưu lại.",
        "teacher_step2_btn": "Lưu",
        "teacher_placeholder_url": "https://docs.google.com/forms/...",
        "form_title": "Tạo / Chỉnh sửa Bài học",
        "form_label_title": "Tiêu đề",
        "form_placeholder_title": "VD: Bài phát biểu của Steve Jobs",
        "form_label_language": "Ngôn ngữ",
        "form_label_audio": "Tệp âm thanh (Tùy chọn)",
        "form_audio_saved": "Âm thanh đã được lưu",
        "form_label_text": "Văn bản Mục tiêu",
        "form_placeholder_eng": "Dán kịch bản tiếng Anh vào đây",
        "form_label_translation": "Bản dịch",
        "form_placeholder_jpn": "Dán bản dịch tiếng mẹ đẻ (Tùy chọn)",
        "form_btn_cancel": "Hủy",
        "form_btn_save": "Lưu vào Thư viện",
        "playlist_title": "Danh sách phát",
        "footer_picspeak": "PicSpeak (Nói)",
        "footer_vocadash": "VocaDash (Từ vựng)",
        "footer_guide": "Hướng dẫn sử dụng",
        "footer_dev": "Về nhà phát triển",
        "footer_teacher": "Menu Giáo viên",
        "footer_terms": "Điều khoản sử dụng",
        "footer_privacy": "Chính sách bảo mật",
        "learn_back": "Quay lại",
        "learn_share": "Chia sẻ",
        "tab_read": "Đọc",
        "tab_paced": "Đọc theo nhịp",
        "tab_vanish": "Ẩn chữ",
        "tab_shadow": "Shadowing",
        "btn_ai_voice": "Phát giọng AI",
        "score_accuracy": "Độ chính xác",
        "score_wpm": "WPM",
        "score_comp": "Mức độ hiểu",
        "score_feedback": "Phản hồi học tập",
        "btn_submit_score": "Gửi điểm cho Giáo viên (Kèm đánh giá)",
        "label_your_voice": "Giọng của bạn",
        "msg_press_start": "*Nhấn START để bắt đầu",
        "label_target_text": "Văn bản Mục tiêu",
        "btn_show_translation": "Hiện Bản dịch",
        "label_blank_level": "Mức độ Ẩn",
        "label_target_wpm": "Mục tiêu WPM",
        "label_translation": "Bản dịch",
        "btn_start_text": "START",
        "sidebar_playlist": "Danh sách phát",
        "chart_title": "Tiến độ Học tập",
        "chart_desc": "*Thực hành hàng ngày là chìa khóa để điểm cao hơn!",
        "profile_title": "Đăng ký Hồ sơ",
        "profile_desc": "Vui lòng đăng ký thông tin của bạn để gửi điểm. (Được lưu cục bộ trên thiết bị này)",
        "profile_class": "Lớp",
        "profile_placeholder_class": "VD: 1-A",
        "profile_num": "Số báo danh",
        "profile_placeholder_num": "VD: 15",
        "profile_name": "Họ và tên",
        "profile_placeholder_name": "VD: Nguyễn Văn A",
        "profile_save": "Lưu và Bắt đầu",
        "ref_title": "Gửi Điểm số",
        "ref_desc": "Đánh giá buổi luyện tập hôm nay (Điều gì tốt, điều gì khó khăn...)",
        "ref_placeholder_text": "VD: Em đã tập trung vào ngữ điệu khi shadowing...",
        "ref_cancel": "Hủy",
        "ref_submit": "Gửi ngay",
        "wpm_guide_title": "Hướng dẫn về WPM",
        "wpm_guide_desc": "*WPM (Words Per Minute) = Số từ trên phút",
        "wpm_80": "Chậm (Người mới)",
        "wpm_100": "Tiêu chuẩn (Trung học)",
        "wpm_120": "Trôi chảy (Giao tiếp hàng ngày)",
        "wpm_150": "Nhanh (Tin tức/TOEIC)",
        "wpm_180": "Rất nhanh (Tốc độ bản xứ)",
        "btn_close": "Đóng",
        "mode_guide_title": "Hướng dẫn Học 4 Bước Copeak",
        "mode_guide_warning": "Bắt đầu ngay bằng 'Đọc theo nhịp' hoặc 'Ẩn chữ' sẽ không hiệu quả. Hãy hiểu bài 100% trước, sau đó tăng độ khó từng bước.",
        "mode_tag_1": "Giới thiệu / Ý nghĩa",
        "mode_sla": "🔬 Cơ sở Khoa học SLA:",
        "mode_desc_1": "'Ánh xạ Hình thức - Ý nghĩa'. Nền tảng để kết nối chữ viết, âm thanh và ý nghĩa trong não bộ.",
        "mode_check": "🤔 Tự kiểm tra:",
        "mode_check_1": "'Tôi đã hiểu 100% ý nghĩa và có thể đọc trôi chảy không vấp váp chưa?'",
        "mode_tag_2": "Trôi chảy / Tự động hóa",
        "mode_desc_2": "'Tự động hóa'. Tốc độ trực quan bắt buộc ngăn bạn đọc ngược, rèn luyện não xử lý tiếng Anh theo trật tự từ tự nhiên.",
        "mode_check_2": "'Tôi có đang hiểu bằng tiếng Anh mà không cần dịch không? Phát âm của tôi có bị mờ do đọc nhanh không?'",
        "mode_tag_3": "Ghi nhớ / Nội tâm hóa",
        "mode_desc_3": "'Thực hành Gợi nhớ'. Bằng cách loại bỏ gợi ý hình ảnh, trí nhớ làm việc phải chủ động nhớ lại từ, giúp củng cố trí nhớ dài hạn.",
        "mode_check_3": "'Tôi có đang dự đoán từ tiếp theo từ ngữ cảnh/ngữ pháp thay vì chỉ học thuộc lòng không?'",
        "mode_tag_4": "Xử lý Ngữ âm Tối ưu",
        "mode_desc_4": "'Tăng cường Vòng lặp Ngữ âm'. Việc bắt chước hoàn toàn ngữ điệu bản xứ giúp tự động hóa nhận thức âm thanh, tăng cường cả nói và nghe.",
        "mode_check_4": "'Giọng tôi có khớp hoàn toàn với mẫu không? Tôi có đang hình dung ý nghĩa trong khi tập trung vào âm thanh không?'",
        "btn_start_learning": "Tôi đã hiểu, bắt đầu thôi"
    },

    // 🇮🇩 インドネシア語
    "id": {
        "head_title": "Copeak - Alat Latihan Membaca & Shadowing Bahasa Inggris",
        "nav_my_library": "Perpustakaan Saya",
        "warning_title": "Pemberitahuan Penting Penyimpanan Data",
        "warning_ipad_bold": "Pengguna iPad / HP:",
        "warning_ipad_desc": "Silakan ketuk 'Tambahkan ke Layar Utama' dari menu browser Anda terlebih dahulu, dan selalu buka aplikasi dari ikon tersebut.",
        "warning_pc_bold": "Pengguna PC:",
        "warning_pc_desc": "Harap bookmark halaman ini dan selalu gunakan browser yang sama.",
        "teacher_title": "Pengaturan Guru: Sistem Pengumpulan Nilai",
        "teacher_desc": "2 langkah untuk menyiapkan sistem. Setelah diatur, fitur pengiriman nilai akan otomatis ditambahkan ke tautan yang Anda bagikan.",
        "teacher_step1_title": "Salin Formulir",
        "teacher_step1_desc": "Klik tombol di bawah untuk menyalin Google Form utama ke Drive Anda. (*Harap jangan mengedit pertanyaan)",
        "teacher_step1_btn": "Salin Formulir Utama",
        "teacher_step2_title": "Daftarkan URL",
        "teacher_step2_desc": "Buka formulir yang disalin dalam mode 'Kirim', tempel URL respons (.../viewform) di bawah ini, dan simpan.",
        "teacher_step2_btn": "Simpan",
        "teacher_placeholder_url": "https://docs.google.com/forms/...",
        "form_title": "Buat / Edit Materi",
        "form_label_title": "Judul",
        "form_placeholder_title": "Cth: Pidato Steve Jobs",
        "form_label_language": "Bahasa",
        "form_label_audio": "File Audio (Opsional)",
        "form_audio_saved": "Audio sudah tersimpan",
        "form_label_text": "Teks Target",
        "form_placeholder_eng": "Tempel naskah bahasa Inggris di sini",
        "form_label_translation": "Terjemahan",
        "form_placeholder_jpn": "Tempel terjemahan bahasa asli (Opsional)",
        "form_btn_cancel": "Batal",
        "form_btn_save": "Simpan ke Perpustakaan",
        "playlist_title": "Daftar Putar",
        "footer_picspeak": "PicSpeak (Berbicara)",
        "footer_vocadash": "VocaDash (Kosakata)",
        "footer_guide": "Panduan Pengguna",
        "footer_dev": "Tentang Pengembang",
        "footer_teacher": "Menu Guru",
        "footer_terms": "Syarat Penggunaan",
        "footer_privacy": "Kebijakan Privasi",
        "learn_back": "Kembali",
        "learn_share": "Bagikan",
        "tab_read": "Membaca",
        "tab_paced": "Beri Jeda",
        "tab_vanish": "Menghilang",
        "tab_shadow": "Shadowing",
        "btn_ai_voice": "Putar Suara AI",
        "score_accuracy": "Akurasi",
        "score_wpm": "WPM",
        "score_comp": "Pemahaman",
        "score_feedback": "Umpan Balik Belajar",
        "btn_submit_score": "Kirim Nilai ke Guru (Refleksi)",
        "label_your_voice": "Suara Anda",
        "msg_press_start": "*Tekan START untuk memulai",
        "label_target_text": "Teks Target",
        "btn_show_translation": "Tampilkan Terjemahan",
        "label_blank_level": "Tingkat Kosong",
        "label_target_wpm": "Target WPM",
        "label_translation": "Terjemahan",
        "btn_start_text": "START",
        "sidebar_playlist": "Daftar Putar",
        "chart_title": "Kemajuan Belajar",
        "chart_desc": "*Latihan setiap hari adalah kunci untuk skor yang lebih tinggi!",
        "profile_title": "Pendaftaran Profil",
        "profile_desc": "Silakan daftarkan informasi Anda untuk mengirim nilai. (Disimpan secara lokal di perangkat ini)",
        "profile_class": "Kelas",
        "profile_placeholder_class": "Cth: 1-A",
        "profile_num": "Nomor Absen",
        "profile_placeholder_num": "Cth: 15",
        "profile_name": "Nama",
        "profile_placeholder_name": "Cth: Budi Santoso",
        "profile_save": "Simpan dan Mulai",
        "ref_title": "Kirim Nilai",
        "ref_desc": "Refleksi latihan hari ini (Apa yang berjalan baik, apa yang sulit, dll.)",
        "ref_placeholder_text": "Cth: Saya fokus pada intonasi saat shadowing...",
        "ref_cancel": "Batal",
        "ref_submit": "Kirim Sekarang",
        "wpm_guide_title": "Panduan WPM",
        "wpm_guide_desc": "*WPM (Kata per Menit)",
        "wpm_80": "Lambat (Pemula)",
        "wpm_100": "Standar (Menengah)",
        "wpm_120": "Lancar (Percakapan sehari-hari)",
        "wpm_150": "Cepat (Berita/TOEIC)",
        "wpm_180": "Sangat Cepat (Kecepatan penutur asli)",
        "btn_close": "Tutup",
        "mode_guide_title": "Panduan Belajar 4 Langkah Copeak",
        "mode_guide_warning": "Langsung ke mode 'Beri Jeda' atau 'Menghilang' tidak akan efektif. Pahami teksnya 100% terlebih dahulu, lalu tingkatkan beban langkah demi langkah.",
        "mode_tag_1": "Pengenalan / Makna",
        "mode_sla": "🔬 Dasar SLA:",
        "mode_desc_1": "'Pemetaan Bentuk-Makna'. Dasar untuk menghubungkan teks, suara, dan makna di otak Anda.",
        "mode_check": "🤔 Cek Refleksi:",
        "mode_check_1": "'Apakah saya 100% memahami maknanya dan dapat membacanya dengan lancar tanpa tersendat?'",
        "mode_tag_2": "Kelancaran / Otomatisasi",
        "mode_desc_2": "'Otomatisasi'. Kecepatan visual yang dipaksakan mencegah Anda membaca mundur, melatih otak untuk memproses bahasa Inggris dalam urutan kata yang alami.",
        "mode_check_2": "'Apakah saya memahaminya dalam bahasa Inggris tanpa menerjemahkan? Apakah pelafalan saya menjadi tidak jelas karena kecepatan?'",
        "mode_tag_3": "Retensi / Internalisasi",
        "mode_desc_3": "'Latihan Mengingat'. Dengan menghilangkan petunjuk visual, kita memaksa memori kerja untuk mengingat kata, menanamkannya ke dalam memori jangka panjang.",
        "mode_check_3": "'Apakah saya menebak kata berikutnya dari konteks/tata bahasa, bukan hanya menghafal mati?'",
        "mode_tag_4": "Pemrosesan Fonologis Puncak",
        "mode_desc_4": "'Peningkatan Putaran Fonologis'. Meniru prosodi penutur asli sepenuhnya mengotomatiskan persepsi suara Anda, meningkatkan kemampuan berbicara dan mendengarkan.",
        "mode_check_4": "'Apakah suara saya tumpang tindih sempurna dengan model? Apakah saya membayangkan maknanya sambil fokus pada suara?'",
        "btn_start_learning": "Saya mengerti, mari mulai"
    },

    // 🇵🇭 タガログ語（フィリピン）
    "tl": {
        "head_title": "Copeak - English Shadowing & Reading Tool",
        "nav_my_library": "Aking Library",
        "warning_title": "Mahalagang Paunawa sa Pag-save ng Data",
        "warning_ipad_bold": "Mga gumagamit ng iPad / Mobile:",
        "warning_ipad_desc": "Paki-tap muna ang 'Add to Home Screen' mula sa menu ng iyong browser, at laging buksan ang app mula sa icon na iyon.",
        "warning_pc_bold": "Mga gumagamit ng PC:",
        "warning_pc_desc": "I-bookmark ang pahinang ito at laging gamitin ang parehong browser.",
        "teacher_title": "Teacher Settings: Pag-setup ng Pagkolekta ng Iskor",
        "teacher_desc": "2 hakbang para i-set up ang sistema. Kapag na-configure na, awtomatikong idaragdag ang feature na pagsumite ng iskor sa mga ibinahaging link.",
        "teacher_step1_title": "Kopyahin ang Form",
        "teacher_step1_desc": "I-click ang button sa ibaba para kopyahin ang master Google Form sa iyong Drive. (*Huwag i-edit ang mga tanong)",
        "teacher_step1_btn": "Kopyahin ang Master Form",
        "teacher_step2_title": "Irehistro ang URL",
        "teacher_step2_desc": "Buksan ang kinopyang form sa 'Send' mode, i-paste ang response URL (.../viewform) sa ibaba, at i-save.",
        "teacher_step2_btn": "I-save",
        "teacher_placeholder_url": "https://docs.google.com/forms/...",
        "form_title": "Gumawa / Mag-edit ng Materyal",
        "form_label_title": "Pamagat",
        "form_placeholder_title": "Hal. Steve Jobs Speech",
        "form_label_language": "Wika",
        "form_label_audio": "Audio File (Opsyonal)",
        "form_audio_saved": "Naka-save na ang audio",
        "form_label_text": "Target na Teksto",
        "form_placeholder_eng": "I-paste ang English script dito",
        "form_label_translation": "Pagsasalin",
        "form_placeholder_jpn": "I-paste ang pagsasalin (Opsyonal)",
        "form_btn_cancel": "Kanselahin",
        "form_btn_save": "I-save sa Library",
        "playlist_title": "Playlist",
        "footer_picspeak": "PicSpeak (Pagsasalita)",
        "footer_vocadash": "VocaDash (Bokabularyo)",
        "footer_guide": "Gabay ng Gumagamit",
        "footer_dev": "Tungkol sa Developer",
        "footer_teacher": "Menu ng Guro",
        "footer_terms": "Mga Tuntunin sa Paggamit",
        "footer_privacy": "Patakaran sa Privacy",
        "learn_back": "Bumalik",
        "learn_share": "I-share",
        "tab_read": "Magbasa",
        "tab_paced": "May Bilis",
        "tab_vanish": "Nawawala",
        "tab_shadow": "Shadowing",
        "btn_ai_voice": "I-play ang AI Voice",
        "score_accuracy": "Katumpakan",
        "score_wpm": "WPM",
        "score_comp": "Pag-unawa",
        "score_feedback": "Feedback sa Pag-aaral",
        "btn_submit_score": "Isumite ang Iskor sa Guro (Pagninilay)",
        "label_your_voice": "Iyong Boses",
        "msg_press_start": "*I-press ang START para magsimula",
        "label_target_text": "Target na Teksto",
        "btn_show_translation": "Ipakita ang Pagsasalin",
        "label_blank_level": "Antas ng Blangko",
        "label_target_wpm": "Target na WPM",
        "label_translation": "Pagsasalin",
        "btn_start_text": "START",
        "sidebar_playlist": "Playlist",
        "chart_title": "Pag-unlad ng Pag-aaral",
        "chart_desc": "*Ang araw-araw na pagsasanay ang susi sa mas mataas na iskor!",
        "profile_title": "Pagpaparehistro ng Profile",
        "profile_desc": "Pakirehistro ang iyong impormasyon para makapagsumite ng iskor. (Naka-save sa device na ito)",
        "profile_class": "Seksyon/Klase",
        "profile_placeholder_class": "Hal. 1-A",
        "profile_num": "Numero ng Estudyante",
        "profile_placeholder_num": "Hal. 15",
        "profile_name": "Pangalan",
        "profile_placeholder_name": "Hal. Juan Dela Cruz",
        "profile_save": "I-save at Magsimula",
        "ref_title": "Isumite ang Iskor",
        "ref_desc": "Pagninilay sa pagsasanay ngayon (Ano ang naging maganda, ano ang naging mahirap, atbp.)",
        "ref_placeholder_text": "Hal. Nag-focus ako sa aking intonasyon habang nagsha-shadowing...",
        "ref_cancel": "Kanselahin",
        "ref_submit": "Isumite Ngayon",
        "wpm_guide_title": "Gabay sa WPM",
        "wpm_guide_desc": "*WPM (Words Per Minute)",
        "wpm_80": "Mabagal (Beginner)",
        "wpm_100": "Standard (Intermediate)",
        "wpm_120": "Matatas (Pang-araw-araw na pag-uusap)",
        "wpm_150": "Mabilis (Balita/TOEIC)",
        "wpm_180": "Napakabilis (Bilis ng Native)",
        "btn_close": "Isara",
        "mode_guide_title": "Gabay sa Pag-aaral ng Copeak (4 na Hakbang)",
        "mode_guide_warning": "Hindi epektibo ang pagtalon agad sa 'Paced' o 'Vanish'. Intindihin muna ang teksto nang 100%, saka dagdagan ang hirap nang paunti-unti.",
        "mode_tag_1": "Panimula / Kahulugan",
        "mode_sla": "🔬 Basehan sa SLA:",
        "mode_desc_1": "'Form-Meaning Mapping'. Ang pundasyon ng pagkonekta ng teksto, tunog, at kahulugan sa iyong utak.",
        "mode_check": "🤔 Pagninilay:",
        "mode_check_1": "'Naiintindihan ko ba ang kahulugan ng 100% at nababasa ko ba ito nang maayos na walang pag-utal?'",
        "mode_tag_2": "Pagiging Matatas / Automation",
        "mode_desc_2": "'Automatization'. Ang pilit na bilis ay pumipigil sa pagbabasa nang pabalik, at sinasanay ang utak na i-proseso ang Ingles sa natural nitong ayos.",
        "mode_check_2": "'Naiintindihan ko ba ito sa Ingles nang hindi isinasalin sa isip? Pumapangit ba ang bigkas ko dahil sa bilis?'",
        "mode_tag_3": "Pagtatanda / Internalization",
        "mode_desc_3": "'Retrieval Practice'. Sa pagtanggal ng visual hints, pinipilit nating alalahanin ng ating isip ang mga salita para mapunta ito sa long-term memory.",
        "mode_check_3": "'Hinuhulaan ko ba ang susunod na salita mula sa konteksto/grammar, kaysa sa pilit na pagmemorya lamang?'",
        "mode_tag_4": "Ultimate Phonological Loop",
        "mode_desc_4": "'Phonological Loop Enhancement'. Ang paggaya sa prosody ng native speaker ay awtomatikong nagpapa-improve sa iyong pagsasalita at pakikinig.",
        "mode_check_4": "'Sumasabay ba ang boses ko nang perpekto sa audio? Naiisip ko ba ang kahulugan habang naka-focus sa tunog?'",
        "btn_start_learning": "Naiintindihan ko, magsimula na tayo"
    },

    // 🇮🇳 ヒンディー語
    "hi": {
        "head_title": "Copeak - इंग्लिश शैडोइंग और रीडिंग टूल",
        "nav_my_library": "मेरी लाइब्रेरी",
        "warning_title": "डेटा सेव करने के लिए महत्वपूर्ण सूचना",
        "warning_ipad_bold": "iPad / मोबाइल यूज़र्स:",
        "warning_ipad_desc": "कृपया पहले अपने ब्राउज़र मेन्यू से 'Add to Home Screen' पर टैप करें, और हमेशा उसी आइकन से ऐप खोलें।",
        "warning_pc_bold": "PC यूज़र्स:",
        "warning_pc_desc": "कृपया इस पेज को बुकमार्क करें और हमेशा एक ही ब्राउज़र का उपयोग करें।",
        "teacher_title": "टीचर सेटिंग्स: स्कोर कलेक्शन सेटअप",
        "teacher_desc": "सिस्टम सेटअप करने के 2 कदम। एक बार सेट होने के बाद, आपके शेयर किए गए लिंक में स्कोर सबमिशन फीचर अपने आप जुड़ जाएगा।",
        "teacher_step1_title": "फॉर्म कॉपी करें",
        "teacher_step1_desc": "मास्टर Google Form को अपने Drive में कॉपी करने के लिए नीचे दिए गए बटन पर क्लिक करें। (*कृपया प्रश्नों को एडिट न करें)",
        "teacher_step1_btn": "मास्टर फॉर्म कॉपी करें",
        "teacher_step2_title": "URL रजिस्टर करें",
        "teacher_step2_desc": "कॉपी किए गए फॉर्म को 'Send' मोड में खोलें, रिस्पॉन्स URL (.../viewform) नीचे पेस्ट करें, और सेव करें।",
        "teacher_step2_btn": "सेव करें",
        "teacher_placeholder_url": "https://docs.google.com/forms/...",
        "form_title": "मटीरियल बनाएँ / एडिट करें",
        "form_label_title": "शीर्षक (Title)",
        "form_placeholder_title": "उदा. Steve Jobs Speech",
        "form_label_language": "भाषा",
        "form_label_audio": "ऑडियो फाइल (वैकल्पिक)",
        "form_audio_saved": "ऑडियो पहले से सेव है",
        "form_label_text": "टारगेट टेक्स्ट",
        "form_placeholder_eng": "इंग्लिश स्क्रिप्ट यहाँ पेस्ट करें",
        "form_label_translation": "अनुवाद (Translation)",
        "form_placeholder_jpn": "मातृभाषा में अनुवाद पेस्ट करें (वैकल्पिक)",
        "form_btn_cancel": "रद्द करें",
        "form_btn_save": "लाइब्रेरी में सेव करें",
        "playlist_title": "प्लेलिस्ट",
        "footer_picspeak": "PicSpeak (स्पीकिंग)",
        "footer_vocadash": "VocaDash (शब्दावली)",
        "footer_guide": "यूज़र गाइड",
        "footer_dev": "डेवलपर के बारे में",
        "footer_teacher": "टीचर मेन्यू",
        "footer_terms": "उपयोग की शर्तें",
        "footer_privacy": "प्राइवेसी पॉलिसी",
        "learn_back": "वापस",
        "learn_share": "शेयर करें",
        "tab_read": "पढ़ें (Read)",
        "tab_paced": "पेस्ड (Paced)",
        "tab_vanish": "वैनिश (Vanish)",
        "tab_shadow": "शैडोइंग (Shadowing)",
        "btn_ai_voice": "AI आवाज़ चलाएँ",
        "score_accuracy": "सटीकता (Accuracy)",
        "score_wpm": "WPM",
        "score_comp": "समझ (Comprehension)",
        "score_feedback": "लर्निंग फीडबैक",
        "btn_submit_score": "टीचर को स्कोर भेजें (रिफ्लेक्शन)",
        "label_your_voice": "आपकी आवाज़",
        "msg_press_start": "*शुरू करने के लिए START दबाएँ",
        "label_target_text": "टारगेट टेक्स्ट",
        "btn_show_translation": "अनुवाद दिखाएँ",
        "label_blank_level": "ब्लैंक लेवल",
        "label_target_wpm": "टारगेट WPM",
        "label_translation": "अनुवाद",
        "btn_start_text": "START",
        "sidebar_playlist": "प्लेलिस्ट",
        "chart_title": "लर्निंग प्रोग्रेस",
        "chart_desc": "*रोज़ाना प्रैक्टिस ही अच्छे स्कोर की कुंजी है!",
        "profile_title": "प्रोफाइल रजिस्ट्रेशन",
        "profile_desc": "स्कोर भेजने के लिए कृपया अपनी जानकारी दर्ज करें। (यह इसी डिवाइस में सेव होगी)",
        "profile_class": "क्लास",
        "profile_placeholder_class": "उदा. 1-A",
        "profile_num": "रोल नंबर",
        "profile_placeholder_num": "उदा. 15",
        "profile_name": "नाम",
        "profile_placeholder_name": "उदा. राहुल शर्मा",
        "profile_save": "सेव करें और शुरू करें",
        "ref_title": "स्कोर सबमिट करें",
        "ref_desc": "आज की प्रैक्टिस पर विचार (क्या अच्छा रहा, क्या मुश्किल था, आदि)",
        "ref_placeholder_text": "उदा. मैंने शैडोइंग के दौरान अपने इंटोनेशन पर ध्यान दिया...",
        "ref_cancel": "रद्द करें",
        "ref_submit": "अभी भेजें",
        "wpm_guide_title": "WPM गाइड",
        "wpm_guide_desc": "*WPM (प्रति मिनट शब्द)",
        "wpm_80": "धीमा (शुरुआती)",
        "wpm_100": "सामान्य (इंटरमीडिएट)",
        "wpm_120": "धाराप्रवाह (रोज़मर्रा की बातचीत)",
        "wpm_150": "तेज़ (न्यूज़/TOEIC)",
        "wpm_180": "बहुत तेज़ (नेटिव स्पीड)",
        "btn_close": "बंद करें",
        "mode_guide_title": "Copeak 4-स्टेप लर्निंग गाइड",
        "mode_guide_warning": "सीधे 'Paced' या 'Vanish' पर जाना असरदार नहीं होगा। पहले टेक्स्ट को 100% समझें, फिर धीरे-धीरे कठिनाई बढ़ाएँ।",
        "mode_tag_1": "परिचय / अर्थ",
        "mode_sla": "🔬 SLA आधार:",
        "mode_desc_1": "'फॉर्म-मीनिंग मैपिंग'। दिमाग में टेक्स्ट, ध्वनि और अर्थ को जोड़ने की नींव।",
        "mode_check": "🤔 रिफ्लेक्शन चेक:",
        "mode_check_1": "'क्या मैं अर्थ 100% समझता हूँ और बिना अटके आसानी से पढ़ सकता हूँ?'",
        "mode_tag_2": "प्रवाह / ऑटोमेशन",
        "mode_desc_2": "'ऑटोमेटाइज़ेशन'। एक निश्चित गति आपको पीछे मुड़कर पढ़ने से रोकती है, दिमाग को इंग्लिश के असली क्रम में सोचने की ट्रेनिंग देती है।",
        "mode_check_2": "'क्या मैं बिना अनुवाद किए इंग्लिश में ही समझ रहा हूँ? क्या जल्दबाज़ी में मेरा उच्चारण खराब हो रहा है?'",
        "mode_tag_3": "याद रखना / इंटरनलाइज़ेशन",
        "mode_desc_3": "'रिट्रीवल प्रैक्टिस'। विज़ुअल हिंट्स हटाकर, हम वर्किंग मेमोरी को शब्द याद करने के लिए मजबूर करते हैं, जिससे वे लॉन्ग-टर्म मेमोरी में चले जाते हैं।",
        "mode_check_3": "'क्या मैं सिर्फ रटने के बजाय संदर्भ/ग्रामर से अगले शब्द का अनुमान लगा रहा हूँ?'",
        "mode_tag_4": "अल्टीमेट फोनोलॉजिकल लूप",
        "mode_desc_4": "'फोनोलॉजिकल लूप एन्हांसमेंट'। नेटिव स्पीकर की आवाज़ की नकल करने से आपकी बोलने और सुनने की क्षमता अपने आप बेहतर हो जाती है।",
        "mode_check_4": "'क्या मेरी आवाज़ मॉडल के साथ बिल्कुल मेल खा रही है? क्या मैं आवाज़ पर ध्यान देते हुए अर्थ की कल्पना कर रहा हूँ?'",
        "btn_start_learning": "मैं समझ गया, चलिए शुरू करते हैं"
    }
};

// ==========================================
// ★ 翻訳実行・言語切り替えエンジン
// ==========================================

// 選択された言語を画面全体に適用する関数
function changeAppLanguage(langCode) {
    if (!i18n[langCode]) return; // 辞書にない言語が選ばれたら何もしない
    
    // 1. 選んだ言語をブラウザ（localStorage）に記憶させる
    localStorage.setItem('copeak_lang', langCode);

    // 2. data-i18n（通常のテキスト）の入れ替え
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[langCode][key]) {
            el.innerText = i18n[langCode][key];
        }
    });

    // 3. data-i18n-placeholder（入力枠の薄い文字）の入れ替え
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (i18n[langCode][key]) {
            el.setAttribute('placeholder', i18n[langCode][key]);
        }
    });

    // 4. ★追加：動的コンテンツ（画像・説明文・フィードバック）の切り替えを発動させる
    updateDynamicTranslations(langCode);

    console.log(`Copeak UI Language switched to: ${langCode}`);
}

// ページが読み込まれた時に一番最初に動く処理
window.addEventListener('DOMContentLoaded', () => {
    // 以前保存した言語があるかチェック（なければ日本語 'ja'）
    let savedLang = localStorage.getItem('copeak_lang');
    
    if (!savedLang) {
        // もし保存された言語がなければ、ブラウザの基本言語設定をチェックして自動判定する
        const userLang = navigator.language || navigator.userLanguage; 
        if (userLang.startsWith('en')) savedLang = 'en';
        else if (userLang.startsWith('zh')) savedLang = 'zh-TW';
        else if (userLang.startsWith('vi')) savedLang = 'vi';
        else if (userLang.startsWith('id')) savedLang = 'id';
        else if (userLang.startsWith('tl')) savedLang = 'tl';
        else if (userLang.startsWith('hi')) savedLang = 'hi';
        else savedLang = 'ja'; // その他は全部日本語
    }

    // セレクトボックス（ドロップダウン）の表示を、選択中の言語に合わせる
    const langSelector = document.getElementById('appLangSelector');
    if (langSelector) {
        langSelector.value = savedLang;
    }

    // 実際に文字を切り替える関数を発動
    changeAppLanguage(savedLang);
});

// ==========================================
// multiplay.js: 共同音読 (Synchro Reading) 通信制御ロジック
// ==========================================

let peer = null;
let myConnection = null; 
let hostConnections = []; 
let isHost = false;
let currentRoomId = "";

// スコア同期のためのデータ保持変数
let myLatestResult = null;
let partnerResults = {};
let isSyncModeActive = false;

let myPlayerSlot = 1;
let roomPlayersState = [];
let myMicReady = false;

let currentRunId = "";
let expectedRunPlayers = [];

let lessonBeforeMultiplay = null;
// ------------------------------------------
// 1. UI制御（ロビー画面を開く）
// ------------------------------------------
function openMultiplaySetup() {
    if (!currentCustomLesson) {
        if (typeof showMsg === 'function') showMsg("⚠️ まずはプレイリストから読む教材を選択してください");
        return;
    }
    
    document.querySelectorAll('.screen').forEach(el => {
        el.style.display = 'none';
        el.classList.remove('active');
    });
    const lobby = document.getElementById('multiplayLobbyScreen');
    if (lobby) {
        lobby.style.display = 'flex';
        lobby.classList.add('active');
    }
    lessonBeforeMultiplay =
    currentCustomLesson;
    resetLobbyUI();
}

function resetLobbyUI() {

    document.getElementById('host-id-display').classList.add('hidden');
    document.getElementById('btn-create-room').disabled = false;
    document.getElementById('btn-create-room').innerText = "🔑 ルームを作成してIDを発行";
    document.getElementById('btn-join-room').disabled = false;
    document.getElementById('btn-join-room').innerText = "接続する";
    document.getElementById('input-room-id').disabled = false;

    myLatestResult = null;
    partnerResults = {};
    roomPlayersState = [];
    myMicReady = false;
    currentRunId = "";
    expectedRunPlayers = [];

    updatePlayerListUI();

    const startBtn = document.getElementById('btn-sync-start');

    if (startBtn) {
        startBtn.disabled = true;
        startBtn.className = "w-full mt-4 py-3.5 bg-stone-800 text-stone-500 font-bold text-sm rounded-sm tracking-widest uppercase cursor-not-allowed border border-stone-700 transition-all text-center";
        startBtn.innerText = "メンバーの接続を待っています";
    }

    // ★ Together Mic Checkも毎回初期化
    const micBtn = document.getElementById('btn-together-mic-check');

    if (micBtn) {
        micBtn.disabled = true;
        micBtn.innerText = "🎙 接続後にマイク確認";
        micBtn.className = "w-full py-3 bg-stone-800 text-stone-500 font-bold text-sm rounded-sm border border-stone-700 cursor-not-allowed";
    }
}
function getHostRoomState() {

    if (!isHost || !peer) return roomPlayersState;

    const players = [{
        id: peer.id,
        slot: 1,
        micReady: myMicReady
    }];

    hostConnections.forEach(conn => {

        if (conn.open) {

            players.push({
                id: conn.peer,
                slot: conn._playerSlot,
                micReady: !!conn._micReady
            });
        }
    });

    return players;
}

function broadcastRoomState() {

    if (!isHost) return;

    roomPlayersState = getHostRoomState();

    broadcast({
        type: 'ROOM_STATE',
        players: roomPlayersState
    });

    updatePlayerListUI();
}

function canStartTogether() {

    const players = getHostRoomState();

    return (
         isHost &&
        currentRunId === "" &&
        players.length >= 2 &&
        players.length <= 3 &&
        players.every(p => p.micReady)
    );
}

function startMultiplayMicCheck() {

    window.copeakMicCheckReadyOnly = true;
    window.copeakMicCheckReadyCallback = markMultiplayMicReady;

    if (typeof startMicCheck === 'function') {
        startMicCheck();
    }
}

function markMultiplayMicReady() {

    myMicReady = true;

    if (isHost) {

        broadcastRoomState();

    } else if (myConnection && myConnection.open) {

        roomPlayersState = roomPlayersState.map(p =>
            p.id === peer.id
                ? { ...p, micReady: true }
                : p
        );

        updatePlayerListUI();

        myConnection.send({
            type: 'MIC_READY'
        });
    }

    const btn = document.getElementById('btn-together-mic-check');

    if (btn) {
        btn.disabled = true;
        btn.innerText = "✅ マイク確認完了 / READY";
        btn.className = "w-full py-3 bg-emerald-700 text-white font-bold text-sm rounded-sm";
    }
}

function getMultiplayLessonPayload() {

    return {
        title: currentCustomLesson.title || '',
        eng: currentCustomLesson.eng || '',
        jpn: currentCustomLesson.jpn || '',
        lang: currentCustomLesson.lang || 'en-US',
        type: currentCustomLesson.type || 'standard',
        dialogue: Array.isArray(currentCustomLesson.dialogue)
            ? currentCustomLesson.dialogue
            : [],
        formUrl: currentCustomLesson.formUrl || null
    };
}

// ------------------------------------------
// 2. ホスト（部屋を作る側）の処理
// ------------------------------------------
function createMultiplayRoom() {
    const btn = document.getElementById('btn-create-room');
    btn.disabled = true;
    btn.innerText = "⏳ 作成中...";

    currentRoomId = Math.floor(1000 + Math.random() * 9000).toString();
    const peerId = `copeak-room-${currentRoomId}`;

    peer = new Peer(peerId);

    peer.on('open', (id) => {

    isHost = true;
    myPlayerSlot = 1;

    document.getElementById('host-id-display').classList.remove('hidden');
    document.getElementById('my-room-id').innerText = currentRoomId;
    btn.innerText = "✅ ルーム作成完了";
    document.getElementById('connection-role').innerText = "HOST";

    // ★ Host自身をPlayer 1としてLobbyへ反映
    updatePlayerListUI();

    // ★ 教材名表示
    const togetherTitle =
        document.getElementById('together-lesson-title');

    if (togetherTitle && currentCustomLesson) {
        togetherTitle.innerText =
            currentCustomLesson.title;
    }

    if (typeof showMsg === 'function') {
        showMsg("🔑 ルームを作成しました！仲間に番号を伝えてください。");
    }
});

    peer.on('connection', (conn) => {

    if (hostConnections.length >= 2) {

        conn.on('open', () => {

            conn.send({
                type: 'ERROR',
                message: 'ルームは満員です'
            });

            setTimeout(() => conn.close(), 500);
        });

        return;
    }

    conn._playerSlot = hostConnections.length + 2;
    conn._micReady = false;

    hostConnections.push(conn);

    setupConnectionEvents(conn);
});

    peer.on('error', (err) => {
        console.error(err);
        btn.disabled = false;
        btn.innerText = "🔑 ルームを作成してIDを発行";
        if (typeof showMsg === 'function') showMsg("⚠️ ルーム作成に失敗しました。再試行してください。");
    });
}

// ------------------------------------------
// 3. ゲスト（部屋に入る側）の処理
// ------------------------------------------
function joinMultiplayRoom() {
    const inputId = document.getElementById('input-room-id').value.trim();
    if (inputId.length !== 4) {
        if (typeof showMsg === 'function') showMsg("⚠️ 4桁のIDを入力してください");
        return;
    }

    const btn = document.getElementById('btn-join-room');
    btn.disabled = true;
    document.getElementById('input-room-id').disabled = true;
    btn.innerText = "⏳ 接続中...";

    peer = new Peer();

    peer.on('open', (id) => {
        isHost = false;
        const targetPeerId = `copeak-room-${inputId}`;
        myConnection = peer.connect(targetPeerId);
        setupConnectionEvents(myConnection);
    });

    peer.on('error', (err) => {
        console.error(err);
        btn.disabled = false;
        document.getElementById('input-room-id').disabled = false;
        btn.innerText = "接続する";
        if (typeof showMsg === 'function') showMsg("⚠️ 接続に失敗しました。IDを確認してください。");
    });
}

// ------------------------------------------
// 4. 通信イベントの共通処理
// ------------------------------------------
function setupConnectionEvents(conn) {

    conn.on('open', () => {

        if (isHost) {

            conn.send({
                type: 'INIT_ROOM',
                slot: conn._playerSlot,
                lesson: getMultiplayLessonPayload(),
                players: getHostRoomState()
            });

            broadcastRoomState();

            if (typeof showMsg === 'function') {
                showMsg(`🤝 Player ${conn._playerSlot} が接続しました`);
            }

        } else {

            document.getElementById('btn-join-room').innerText = "✅ 接続完了";
            document.getElementById('connection-role').innerText = "GUEST";
        }
    });


    conn.on('data', data => {

        if (!data || !data.type) return;


        // Host教材をGuestへ同期
        if (data.type === 'INIT_ROOM' && !isHost) {

            myPlayerSlot = data.slot;

            currentCustomLesson = {
                id: `multiplay_${Date.now()}`,
                ...data.lesson,
                history: [],
                isMultiplayTemporary: true,
                skipLocalHistory: true
            };

            roomPlayersState = data.players || [];

            const title =
                document.getElementById('together-lesson-title');

            if (title) {
                title.innerText = currentCustomLesson.title;
            }

            const micBtn =
                document.getElementById('btn-together-mic-check');

            if (micBtn) {
                micBtn.disabled = false;
                micBtn.innerText = "🎙 マイクを確認してREADY";
            }

            updatePlayerListUI();

            return;
        }


        // Player状態同期
        if (data.type === 'ROOM_STATE' && !isHost) {

            roomPlayersState = data.players || [];
            updatePlayerListUI();

            return;
        }


        // GuestのMIC READY
        if (data.type === 'MIC_READY' && isHost) {

            conn._micReady = true;
            broadcastRoomState();

            return;
        }


        // 同時START
        if (data.type === 'START_SYNCHRO') {

            currentRunId = data.runId;
            expectedRunPlayers = data.players || [];

            executeSyncStart();

            return;
        }


        // Guest → Host 結果
        if (data.type === 'SYNC_RESULT' && isHost) {

            handlePartnerResult(data, conn);

            return;
        }


        // Host → 全員 結果一覧
        if (data.type === 'SYNC_RESULT_STATE' && !isHost) {

            partnerResults = {};

            (data.results || []).forEach(result => {
                partnerResults[result.id] = result;
            });

            checkSynchroResults();
        }
    });


    conn.on('close', () => {

        if (isHost) {

            hostConnections =
                hostConnections.filter(c => c !== conn);

            broadcastRoomState();

            if (typeof showMsg === 'function') {
                showMsg("⚠️ メンバーが退出しました");
            }

        } else {

            exitMultiplayMode(true);

            if (typeof showMsg === 'function') {
                showMsg("⚠️ ホストとの通信が切断されました");
            }
        }
    });
}

function broadcast(data) {
    if (!isHost) return;
    hostConnections.forEach(conn => {
        if (conn.open) conn.send(data);
    });
}

// ------------------------------------------
// 5. プレイヤーリストUIの更新
// ------------------------------------------
function updatePlayerListUI() {

    const players =
        isHost
            ? getHostRoomState()
            : roomPlayersState;


    for (let slot = 1; slot <= 3; slot++) {

        const player =
            players.find(p => p.slot === slot);

        const name =
            document.getElementById(`p${slot}-name`);

        const status =
            document.getElementById(`p${slot}-status`);

        const row =
            document.getElementById(`p${slot}-row`);

        const dot =
            document.getElementById(`p${slot}-dot`);


        if (!name || !status) continue;


        if (player) {

            name.innerText =
                peer &&
                player.id === peer.id
                    ? "あなた"
                    : `Player ${slot}`;


            if (dot) {
                dot.innerText =
                    player.micReady
                        ? "🟢"
                        : "🟡";
            }


            status.innerText =
                player.micReady
                    ? "MIC OK"
                    : "MIC CHECK";


            status.className =
                player.micReady
                    ? "text-[10px] text-emerald-400 font-bold tracking-wider"
                    : "text-[10px] text-yellow-400 font-bold tracking-wider";


            if (row) {

                row.classList.remove(
                    'opacity-40',
                    'border-dashed'
                );
            }


        } else {

            name.innerText =
                `Player ${slot} を待機中...`;

            if (dot) {
                dot.innerText = "⚪️";
            }

            status.innerText =
                "WAITING";

            status.className =
                "text-[10px] font-bold tracking-wider";

            if (row) {
                row.classList.add(
                    'opacity-40',
                    'border-dashed'
                );
            }
        }
    }


    const micBtn =
        document.getElementById(
            'btn-together-mic-check'
        );


    if (
    micBtn &&
    peer
) {

    const me =
        players.find(
            p => p.id === peer.id
        );

    if (me) {

        if (me.micReady) {

            micBtn.disabled = true;
            micBtn.innerText =
                "✅ マイク確認完了 / READY";

            micBtn.className =
                "w-full py-3 bg-emerald-700 text-white font-bold text-sm rounded-sm";

        } else {

            micBtn.disabled = false;
            micBtn.innerText =
                "🎙 マイクを確認してREADY";

            micBtn.className =
                "w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-sm transition";
        }
    }
}


    const startBtn =
        document.getElementById(
            'btn-sync-start'
        );


    if (!startBtn) return;


    if (!isHost) {

        startBtn.disabled =
            true;

        startBtn.innerText =
            "⏳ ホストのSTARTを待っています";

        return;
    }


    if (canStartTogether()) {

        startBtn.disabled =
            false;

        startBtn.className =
            "w-full mt-3 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base rounded-sm tracking-widest shadow-lg";

        startBtn.innerText =
            `🚀 START TOGETHER (${players.length}人)`;


    } else {

        startBtn.disabled =
            true;

        startBtn.className =
            "w-full mt-3 py-3.5 bg-stone-800 text-stone-500 font-bold text-sm rounded-sm border border-stone-700 cursor-not-allowed";


        if (
            players.length <
            2
        ) {

            startBtn.innerText =
                "メンバーの接続を待っています";

        } else {

            startBtn.innerText =
                "🎙 全員のMIC READYを待っています";
        }
    }
}

// ------------------------------------------
// 6. 同期音読 (Synchro Reading) の開始プロセス
// ------------------------------------------
function triggerSyncStart() {

    if (!canStartTogether()) {

        if (typeof showMsg === 'function') {
            showMsg("⚠️ 全員のMIC READYを確認してください");
        }

        return;
    }


    currentRunId =
        `run_${Date.now()}`;

    expectedRunPlayers =
        getHostRoomState()
            .map(p => ({
                id: p.id,
                slot: p.slot
            }));

    partnerResults = {};
    myLatestResult = null;


    broadcast({
        type: 'START_SYNCHRO',
        runId: currentRunId,
        players: expectedRunPlayers
    });


    executeSyncStart();
}

function executeSyncStart() {
    isSyncModeActive = true; // ★共同モード状態をON
    myLatestResult = null;
    partnerResults = {};

    // 前回のカスタムリザルトUIがあれば消す
    const customBoard = document.getElementById('sync-custom-board');
    if (customBoard) customBoard.remove();

    if (
    typeof openLearningScreen === 'function' &&
    currentCustomLesson
) {

    openLearningScreen(
        currentCustomLesson
    );

} else {

    switchScreen(
        'learningScreen'
    );
}

if (
    typeof setLearningMode === 'function'
) {
    setLearningMode(
        'reading'
    );
}
    
    const overlay = document.getElementById('sync-countdown-overlay');
    const numberEl = document.getElementById('countdown-number');
    
    if (overlay && numberEl) {
        overlay.classList.remove('hidden');
        numberEl.innerText = "3";
        numberEl.classList.remove('scale-75');
        numberEl.classList.add('scale-100');

        let count = 3;
        const countInterval = setInterval(() => {
            count--;
            numberEl.classList.remove('scale-100');
            numberEl.classList.add('scale-75');
            
            setTimeout(() => {
                if (count > 0) {
                    numberEl.innerText = count.toString();
                    numberEl.classList.remove('scale-75');
                    numberEl.classList.add('scale-100');
                } else if (count === 0) {
                    numberEl.innerText = "GO!";
                    numberEl.classList.remove('scale-75');
                    numberEl.classList.add('scale-100', 'text-yellow-400');
                } else {
                    clearInterval(countInterval);
                    overlay.classList.add('hidden');
                    
                    if (typeof startRecordingSession === 'function') {

                        startRecordingSession();

                    } else if (typeof window.originalToggleRecording === 'function') {

                        window.originalToggleRecording();
                    }
                }
            }, 100); 
        }, 1000);
    }
}

// ------------------------------------------
// 7. シンクロ判定 (スコアの送受信と並列UI表示)
// ------------------------------------------

function sendMyResultToPartner(
    myAccuracy,
    myWpm
) {

    if (
        !isSyncModeActive ||
        !currentRunId ||
        !peer
    ) return;


    const result = {

        id:
            peer.id,

        slot:
            myPlayerSlot,

        accuracy:
            myAccuracy,

        wpm:
            myWpm
    };


    myLatestResult =
        result;


    if (isHost) {

        partnerResults[
            peer.id
        ] =
            result;

        publishSynchroResults();


    } else if (
        myConnection &&
        myConnection.open
    ) {

        myConnection.send({

            type:
                'SYNC_RESULT',

            runId:
                currentRunId,

            accuracy:
                myAccuracy,

            wpm:
                myWpm
        });
    }
}


function handlePartnerResult(
    data,
    conn
) {

    if (
        data.runId !==
        currentRunId
    ) return;


    partnerResults[
        conn.peer
    ] = {

        id:
            conn.peer,

        slot:
            conn._playerSlot,

        accuracy:
            data.accuracy,

        wpm:
            data.wpm
    };


    publishSynchroResults();
}


function publishSynchroResults() {

    if (!isHost) return;


    const results =
        Object.values(
            partnerResults
        );


    broadcast({

        type:
            'SYNC_RESULT_STATE',

        runId:
            currentRunId,

        results:
            results
    });


    checkSynchroResults();
}


function checkSynchroResults() {

    const results =
        Object.values(
            partnerResults
        );


    if (
        results.length !==
        expectedRunPlayers.length
    ) {

        return;
    }


    showSynchroResultUI(
        results
            .sort(
                (
                    a,
                    b
                ) =>
                    a.slot -
                    b.slot
            )
    );
    currentRunId = "";
}



function showSynchroResultUI(
    results
) {

    if (
        !results ||
        results.length <
        2
    ) return;


    const resultContainer =
        document.getElementById(
            'resultScoreBoard'
        );


    if (!resultContainer) return;


    Array.from(
        resultContainer.children
    ).forEach(child => {

        if (
            child.id !==
            'sync-custom-board'
        ) {

            child.style.display =
                'none';

            child.classList.add(
                'sync-hidden-elem'
            );
        }
    });


    document
        .getElementById(
            'sync-custom-board'
        )
        ?.remove();


    const accuracyAvg =
        Math.round(

            results.reduce(
                (
                    total,
                    r
                ) =>
                    total +
                    r.accuracy,
                0
            ) /

            results.length
        );


    const wpms =
        results.map(
            r =>
                r.wpm
        );


    const maxWpm =
        Math.max(
            ...wpms
        );


    const minWpm =
        Math.min(
            ...wpms
        );


    const paceMatch =
        maxWpm >
        0
            ? Math.round(
                minWpm /
                maxWpm *
                100
            )
            : 0;


    const teamScore =
        Math.round(
            accuracyAvg *
            0.7 +
            paceMatch *
            0.3
        );


    const cards =
        results
            .map(
                result => {

                    const label =
                        peer &&
                        result.id ===
                            peer.id
                            ? 'あなた'
                            : `Player ${result.slot}`;


                    return `
                        <div class="flex-1 bg-white p-4 rounded-xl border-2 border-stone-200 text-center">
                            <div class="text-xs font-black text-stone-500">
                                ${label}
                            </div>

                            <div class="text-3xl font-black text-emerald-700 mt-2">
                                ${result.accuracy}%
                            </div>

                            <div class="text-xs font-bold text-stone-500">
                                ${result.wpm} WPM
                            </div>
                        </div>
                    `;
                }
            )
            .join(
                ''
            );


    resultContainer.insertAdjacentHTML(

        'afterbegin',

        `
        <div id="sync-custom-board" class="w-full flex flex-col gap-4">

            <div class="p-6 border-4 border-yellow-400 bg-yellow-50 rounded-xl text-center">

                <div class="text-xs font-black text-yellow-700 tracking-widest">
                    TOGETHER SCORE
                </div>

                <div class="text-7xl font-black text-yellow-500">
                    ${teamScore}
                </div>

                <div class="flex justify-center gap-4 text-xs font-bold text-stone-600 mt-2">
                    <span>Accuracy ${accuracyAvg}%</span>
                    <span>Pace Match ${paceMatch}%</span>
                </div>

            </div>

            <div class="flex flex-col sm:flex-row gap-3">
                ${cards}
            </div>

            <button
                onclick="exitMultiplayMode()"
                class="w-full py-3 bg-stone-200 text-stone-600 font-bold rounded-lg">

                ❌ 共同モードを終了

            </button>

        </div>
        `
    );


    if (
        typeof window.updateMicButtonUI ===
        'function'
    ) {

        window.updateMicButtonUI();
    }
}
// ------------------------------------------
// 8. 共同モードの解除と後片付け
// ------------------------------------------
function exitMultiplayMode(isForce = false) {
    if (myConnection) { myConnection.close(); myConnection = null; }
    if (isHost) {
        hostConnections.forEach(c => c.close());
        hostConnections = [];
        if (peer) {
    peer.destroy();
    peer = null;
}
    }
    
    isSyncModeActive = false; // フラグOFF
    isHost = false;
    myMicReady = false;
    myPlayerSlot = 1;
    roomPlayersState = [];
    partnerResults = {};
    currentRunId = "";
    expectedRunPlayers = [];
    if (
    currentCustomLesson &&
    currentCustomLesson.isMultiplayTemporary &&
    lessonBeforeMultiplay
) {
    currentCustomLesson =
        lessonBeforeMultiplay;
}
    
    // 隠していたソロ用UIを復活させる
    const resultContainer = document.getElementById('resultScoreBoard');
    if (resultContainer) {
        Array.from(resultContainer.children).forEach(child => {
            if(child.classList.contains('sync-hidden-elem')) {
                child.style.display = '';
                child.classList.remove('sync-hidden-elem');
            }
        });
        const customBoard = document.getElementById('sync-custom-board');
        if (customBoard) customBoard.remove();
    }
    
    // マイクボタンの色・文字を通常に戻す
    if (typeof window.updateMicButtonUI === 'function') window.updateMicButtonUI();
    
    if (!isForce && typeof showMsg === 'function') showMsg("共同モードを解除しました");
}

// ==========================================
// ★魔法のパッチ：既存の関数を上書きハイジャックして、ボタンの動きを共同モード仕様に変える
// ==========================================

// 1. マイクボタン（スタート/リトライボタン）の見た目をハイジャック
if (typeof window.updateMicButtonUI === 'function') {
    window.originalUpdateMicButtonUI = window.updateMicButtonUI; // 元の関数を保存
    
    window.updateMicButtonUI = function() {
        window.originalUpdateMicButtonUI(); // まず通常の更新を走らせる
        
        // もし「共同モード中」かつ「録音中ではない（=待機中・リザルト画面）」なら上書き！
        if (isSyncModeActive && typeof isMainRecording !== 'undefined' && !isMainRecording) {
            const btn = document.getElementById('micBtn');
            const txt = document.getElementById('micBtnText');
            if (btn && txt) {
                if (isHost) {
                    // ホスト専用：黄金の連続リトライボタン
                    btn.className = "w-full max-w-md mx-auto py-4 md:py-5 rounded-full font-black text-white text-base md:text-lg tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(234,179,8,0.4)] bg-yellow-500 hover:bg-yellow-400 hover:scale-105 active:scale-95";
                    txt.innerText = "🚀 RETRY SYNCHRO (ホストとして再開)";
                } else {
                    // ゲスト専用：グレーの待機ボタン
                    btn.className = "w-full max-w-md mx-auto py-4 md:py-5 rounded-full font-black text-stone-400 text-base md:text-lg tracking-widest transition-all duration-300 border-2 border-stone-600 bg-stone-800 cursor-not-allowed";
                    txt.innerText = "⏳ ホストの再開操作を待機中...";
                }
            }
        }
    };
}

// 2. マイクボタンを押した時の「動作」をハイジャック
if (typeof window.toggleRecording === 'function') {
    window.originalToggleRecording = window.toggleRecording; // 元の関数を保存
    
    window.toggleRecording = function() {
        // もし「共同モード中」かつ「これからスタートしようとしている」なら、ソロ開始をブロックする
        if (isSyncModeActive && typeof isMainRecording !== 'undefined' && !isMainRecording) {
            if (isHost) {
                triggerSyncStart(); // ホストが押したら、全員に合図を飛ばしてカウントダウン開始
            } else {
                if (typeof showMsg === 'function') showMsg("⚠️ ホストが「RETRY SYNCHRO」を押すのをお待ちください");
            }
            return; // ここで処理を止めて、元のソロ用スタートは実行させない
        }
        
        // それ以外（ソロモード、または共同モードの録音を「FINISH」する時）は通常通り動かす
        window.originalToggleRecording();
    };
}