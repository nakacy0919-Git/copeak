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