(() => {
    'use strict';

    // ==========================================
    // Copeak Library
    // ==========================================
    // 音声認識機能には一切触れません。
    //
    // JSON:
    // ./data/copeak-library.json
    //
    // IndexedDB:
    // CopeakDB / CustomLessons
    // ==========================================

    const LIBRARY_URL = './data/copeak-library.json';

    const DB_NAME = 'CopeakDB';
    const STORE_NAME = 'CustomLessons';

    const FOLDERS_KEY = 'copeak_library_folders';

    // ==========================================
    // Copeak Original 親フォルダ
    // ==========================================

    const COPEAK_ROOT_FOLDER = {
        id: '__copeak_original__',
        name: '📚 Copeak Original教材',
        system: true
    };

    let copeakNestedViewPatched = false;


    // ==========================================
    // Libraryフォルダを既存Libraryへ追加
    // ==========================================

    function mergeLibraryFolders(folders) {

        let current = [];

        try {

            current = JSON.parse(
                localStorage.getItem(
                    FOLDERS_KEY
                ) || '[]'
            );

            if (!Array.isArray(current)) {
                current = [];
            }

        } catch (error) {

            current = [];

        }


        const byId = new Map(
            current.map(
                folder => [
                    folder.id,
                    folder
                ]
            )
        );


        for (const folder of folders || []) {

            byId.set(
                folder.id,
                {
                    ...(byId.get(folder.id) || {}),
                    ...folder,
                    system: true
                }
            );

        }


        localStorage.setItem(
            FOLDERS_KEY,
            JSON.stringify(
                [...byId.values()]
            )
        );

    }



    // ==========================================
    // Copeak Original教材
    // 親フォルダ → ジャンル の2階層表示
    // ==========================================

    function installCopeakNestedFolderView(library) {

        if (copeakNestedViewPatched) {
            return;
        }

        if (
            typeof renderHomeLibrary !== 'function' ||
            typeof openLibraryFolder !== 'function'
        ) {
            console.warn(
                '📚 Copeak nested folder view: Library functions are not ready.'
            );
            return;
        }


        const childFolders =
            Array.isArray(library.folders)
                ? library.folders
                : [];


        const childFolderIds =
            new Set(
                childFolders.map(
                    folder => folder.id
                )
            );


        const originalRenderHomeLibrary =
            renderHomeLibrary;


        // --------------------------------------
        // Folderカード生成
        // --------------------------------------

        function createCopeakFolderCard(
            folder,
            lessons
        ) {

            const count =
                lessons.filter(
                    lesson =>
                        lesson.folderId ===
                        folder.id
                ).length;


            const card =
                document.createElement('div');


            card.className =
                'p-5 bg-white border border-stone-200 hover:border-emerald-700 rounded-sm cursor-pointer shadow-sm hover:shadow-md transition flex items-center justify-between gap-3';


            card.innerHTML = `
                <div class="flex items-center gap-4 min-w-0">

                    <div class="text-4xl shrink-0">
                        📁
                    </div>

                    <div class="min-w-0">

                        <h3 class="font-extrabold text-base md:text-lg text-stone-800 truncate">
                            ${escapeLibraryHtml(folder.name)}
                        </h3>

                        <p class="text-xs text-stone-400 mt-1">
                            ${count} 教材
                        </p>

                    </div>

                </div>

                <div class="text-xl text-stone-300 font-bold">
                    ›
                </div>
            `;


            card.onclick =
                () => {

                    openLibraryFolder(
                        folder.id
                    );

                };


            return card;

        }


        // --------------------------------------
        // 親フォルダ内部を表示
        // --------------------------------------

        function renderCopeakCategoryFolders(
            lessons,
            homeList
        ) {

            const title =
                document.getElementById(
                    'libraryViewTitle'
                );

            const hint =
                document.getElementById(
                    'libraryViewHint'
                );

            const backBtn =
                document.getElementById(
                    'libraryBackBtn'
                );


            if (title) {
                title.textContent =
                    'Copeak Original教材';
            }


            if (hint) {
                hint.textContent =
                    'ジャンルを選んで教材を開きます';
            }


            if (backBtn) {

                backBtn.classList.remove(
                    'hidden'
                );

                backBtn.classList.add(
                    'flex'
                );

                backBtn.onclick =
                    () => {

                        openLibraryRoot();

                    };

            }


            homeList.innerHTML = '';


            childFolders.forEach(
                folder => {

                    homeList.appendChild(
                        createCopeakFolderCard(
                            folder,
                            lessons
                        )
                    );

                }
            );

        }


        // --------------------------------------
        // Root画面
        // 9ジャンルを隠して親フォルダ1個にまとめる
        // --------------------------------------

        function cleanRootFolderView(
            homeList
        ) {

            if (!homeList) {
                return;
            }


            const cards =
                Array.from(
                    homeList.children
                );


            let parentCard = null;


            cards.forEach(card => {

                const heading =
                    card.querySelector('h3');

                if (!heading) {
                    return;
                }


                const name =
                    heading.textContent.trim();


                const childFolder =
                    childFolders.find(
                        folder =>
                            folder.name ===
                            name
                    );


                if (childFolder) {

                    card.remove();

                    return;

                }


                if (
                    name ===
                    COPEAK_ROOT_FOLDER.name
                ) {

                    parentCard =
                        card;

                    const countText =
                        parentCard.querySelector('p');

                    if (countText) {
                        countText.textContent =
                            `${(library.items || []).length} 教材`;
                    }

                }

            });


            // 親フォルダは編集・削除させない
            if (parentCard) {

                parentCard
                    .querySelectorAll('button')
                    .forEach(
                        button =>
                            button.remove()
                    );

            }

        }


        // --------------------------------------
        // 既存renderHomeLibraryをラップ
        // --------------------------------------

        window.renderHomeLibrary =
            function (
                lessons,
                homeList
            ) {

                // 親フォルダを開いた場合
                if (
                    currentLibraryFolderId ===
                    COPEAK_ROOT_FOLDER.id
                ) {

                    renderCopeakCategoryFolders(
                        lessons,
                        homeList
                    );

                    return;

                }


                // 通常Library描画
                originalRenderHomeLibrary(
                    lessons,
                    homeList
                );


                // Rootなら9ジャンルを隠す
                if (
                    currentLibraryFolderId ===
                    null
                ) {

                    cleanRootFolderView(
                        homeList
                    );

                    return;

                }


                // 子ジャンルなら戻る先を親フォルダへ
                if (
                    childFolderIds.has(
                        currentLibraryFolderId
                    )
                ) {

                    const backBtn =
                        document.getElementById(
                            'libraryBackBtn'
                        );


                    if (backBtn) {

                        backBtn.onclick =
                            () => {

                                openLibraryFolder(
                                    COPEAK_ROOT_FOLDER.id
                                );

                            };

                    }

                }

            };


        copeakNestedViewPatched =
            true;


        console.info(
            '📚 Copeak nested folder view enabled'
        );

    }


    // ==========================================
    // IndexedDBを開く
    // ==========================================

    function openLibraryDb() {

        return new Promise(
            (resolve, reject) => {

                const request =
                    indexedDB.open(
                        DB_NAME,
                        1
                    );


                request.onupgradeneeded =
                    event => {

                        const database =
                            event.target.result;


                        if (
                            !database.objectStoreNames.contains(
                                STORE_NAME
                            )
                        ) {

                            database.createObjectStore(
                                STORE_NAME,
                                {
                                    keyPath: 'id',
                                    autoIncrement: true
                                }
                            );

                        }

                    };


                request.onsuccess =
                    event => {

                        resolve(
                            event.target.result
                        );

                    };


                request.onerror =
                    () => {

                        reject(
                            request.error
                        );

                    };

            }
        );

    }


    // ==========================================
    // 既存教材を取得
    // ==========================================

    function getAllLessons(database) {

        return new Promise(
            (resolve, reject) => {

                const transaction =
                    database.transaction(
                        [STORE_NAME],
                        'readonly'
                    );


                const store =
                    transaction.objectStore(
                        STORE_NAME
                    );


                const request =
                    store.getAll();


                request.onsuccess =
                    () => {

                        resolve(
                            request.result || []
                        );

                    };


                request.onerror =
                    () => {

                        reject(
                            request.error
                        );

                    };

            }
        );

    }


    // ==========================================
    // Copeak Library教材を保存
    // ==========================================

    function saveLessons(
        database,
        lessons
    ) {

        return new Promise(
            (resolve, reject) => {

                const transaction =
                    database.transaction(
                        [STORE_NAME],
                        'readwrite'
                    );


                const store =
                    transaction.objectStore(
                        STORE_NAME
                    );


                for (const lesson of lessons) {

                    if (lesson.id) {

                        store.put(
                            lesson
                        );

                    } else {

                        store.add(
                            lesson
                        );

                    }

                }


                transaction.oncomplete =
                    resolve;


                transaction.onerror =
                    () => {

                        reject(
                            transaction.error
                        );

                    };


                transaction.onabort =
                    () => {

                        reject(
                            transaction.error
                        );

                    };

            }
        );

    }


    // ==========================================
    // 既存Library画面を更新
    // ==========================================

    async function refreshExistingLibraryUi() {

        // app-bundle.js側のDB初期化が
        // 完了していない可能性があるため少し待つ

        for (
            let attempt = 0;
            attempt < 10;
            attempt += 1
        ) {

            try {

                if (
                    typeof loadSavedLessons ===
                    'function'
                ) {

                    loadSavedLessons();

                    console.info(
                        '📚 Copeak Library UI refreshed'
                    );

                    return;

                }

            } catch (error) {

                // まだ本体側DB準備前の場合は
                // 少し待って再試行

            }


            await new Promise(
                resolve => {

                    setTimeout(
                        resolve,
                        150
                    );

                }
            );

        }


        console.info(
            '📚 Copeak Library installed. UI will refresh on next Library open.'
        );

    }


    // ==========================================
    // Copeak Library本体
    // ==========================================

    async function installCopeakLibrary() {

        try {

            console.info(
                '📚 Loading Copeak Library...'
            );


            // ==================================
            // JSON取得
            // ==================================

            const response =
                await fetch(
                    LIBRARY_URL,
                    {
                        cache: 'no-store'
                    }
                );


            if (!response.ok) {

                throw new Error(
                    `Library JSON load failed: ${response.status}`
                );

            }


            const library =
                await response.json();


            // ==================================
            // フォルダ追加
            // ==================================

            mergeLibraryFolders(
                [
                    COPEAK_ROOT_FOLDER,
                    ...(library.folders || [])
                ]
            );


            // ==================================
            // Copeak Original教材
            // 親 → ジャンル の2階層表示
            // ==================================

            installCopeakNestedFolderView(
                library
            );


            // ==================================
            // IndexedDB
            // ==================================

            const database =
                await openLibraryDb();


            const existingLessons =
                await getAllLessons(
                    database
                );


            // ==================================
            // 既存Copeak Library教材
            // ==================================

            const existingBySourceId =
                new Map(

                    existingLessons

                        .filter(
                            lesson =>
                                lesson.copeakLibrary &&
                                lesson.sourceId
                        )

                        .map(
                            lesson => [
                                lesson.sourceId,
                                lesson
                            ]
                        )

                );


            // ==================================
            // JSON教材 → Copeak教材形式
            // ==================================

            const prepared =
                (
                    library.items || []
                ).map(
                    item => {

                        const existing =
                            existingBySourceId.get(
                                item.sourceId
                            );


                        return {

                            ...(existing || {}),


                            // ----------------------
                            // Library識別
                            // ----------------------

                            sourceId:
                                item.sourceId,

                            copeakLibrary:
                                true,

                            isPreset:
                                true,


                            // ----------------------
                            // 基本情報
                            // ----------------------

                            title:
                                item.title,

                            eng:
                                item.eng || '',

                            jpn:
                                item.jpn || '',


                            // ----------------------
                            // 言語
                            // ----------------------

                            lang:
                                item.lang ||
                                'en-US',

                            langName:
                                item.langName ||
                                '🇺🇸 English (US)',


                            // ----------------------
                            // Folder
                            // ----------------------

                            folderId:
                                item.folderId ||
                                null,


                            // ----------------------
                            // 教材タイプ
                            // ----------------------

                            type:
                                item.type ||
                                'standard',

                            dialogue:
                                Array.isArray(
                                    item.dialogue
                                )
                                    ? item.dialogue
                                    : [],


                            // ----------------------
                            // 音声
                            // ----------------------
                            // audioEnabled=falseなら
                            // 音声は使用しない
                            //
                            // 音声認識とは完全に別機能
                            // ----------------------

                            audioBlob:
                                existing?.audioBlob ||
                                null,

                            audioUrl:
                                (
                                    library.audioEnabled ===
                                        true &&
                                    item.audioPath
                                )
                                    ? item.audioPath
                                    : null,


                            // ----------------------
                            // 画像
                            // ----------------------

                            memoImage:
                                existing?.memoImage ||
                                null,


                            // ----------------------
                            // 学習履歴
                            // ----------------------

                            history:
                                existing?.history ||
                                [],

                            lastPracticed:
                                existing?.lastPracticed ||
                                null,

                            createdAt:
                                existing?.createdAt ||
                                Date.now(),


                            // ----------------------
                            // Copeak Library情報
                            // ----------------------

                            levelLabel:
                                item.levelLabel ||
                                '',

                            cefr:
                                item.cefr ||
                                '',

                            schoolLevel:
                                item.schoolLevel ||
                                '',

                            wordCount:
                                item.wordCount ||
                                0,

                            targetWpm:
                                item.targetWpm ||
                                0,

                            tags:
                                Array.isArray(
                                    item.tags
                                )
                                    ? item.tags
                                    : []

                        };

                    }
                );


            // ==================================
            // IndexedDB保存
            // ==================================

            await saveLessons(
                database,
                prepared
            );


            database.close();


            console.info(
                `📚 Copeak Library ready: ${prepared.length} materials`
            );


            // ==================================
            // Library表示更新
            // ==================================

            await refreshExistingLibraryUi();


        } catch (error) {

            console.error(
                '❌ Copeak Library initialization failed:',
                error
            );

        }

    }


    // ==========================================
    // 起動
    // ==========================================

    if (
        document.readyState ===
        'loading'
    ) {

        document.addEventListener(
            'DOMContentLoaded',
            installCopeakLibrary,
            {
                once: true
            }
        );

    } else {

        installCopeakLibrary();

    }

})();