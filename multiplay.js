// ==========================================
// multiplay.js: 共同音読 (Synchro Reading) 通信制御ロジック
// ==========================================

let peer = null;
let myConnection = null; // ゲストとしての接続
let hostConnections = []; // ホストとしての接続リスト
let isHost = false;
let currentRoomId = "";

// スコア同期のためのデータ保持変数
let myLatestResult = null;
let partnerLatestResult = null;

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
    resetLobbyUI();
}

function resetLobbyUI() {
    document.getElementById('host-id-display').classList.add('hidden');
    document.getElementById('btn-create-room').disabled = false;
    document.getElementById('btn-create-room').innerText = "🔑 ルームを作成してIDを発行";
    document.getElementById('btn-join-room').disabled = false;
    document.getElementById('btn-join-room').innerText = "接続する";
    document.getElementById('input-room-id').disabled = false;
    
    // スコアデータの初期化
    myLatestResult = null;
    partnerLatestResult = null;
    
    updatePlayerListUI(1); 
    
    const startBtn = document.getElementById('btn-sync-start');
    if (startBtn) {
        startBtn.disabled = true;
        startBtn.className = "w-full mt-4 py-3.5 bg-stone-800 text-stone-500 font-bold text-sm rounded-sm tracking-widest uppercase cursor-not-allowed border border-stone-700 transition-all text-center";
        startBtn.innerText = "メンバーの接続を待っています";
    }
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
        document.getElementById('host-id-display').classList.remove('hidden');
        document.getElementById('my-room-id').innerText = currentRoomId;
        btn.innerText = "✅ ルーム作成完了";
        document.getElementById('connection-role').innerText = "HOST";
        if (typeof showMsg === 'function') showMsg("🔑 ルームを作成しました！仲間に番号を伝えてください。");
    });

    peer.on('connection', (conn) => {
        if (hostConnections.length >= 2) {
            conn.send({ type: 'ERROR', message: 'ルームは満員です' });
            setTimeout(() => conn.close(), 500);
            return;
        }
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
        if (!isHost) {
            document.getElementById('btn-join-room').innerText = "✅ 接続完了";
            document.getElementById('connection-role').innerText = "GUEST";
            if (typeof showMsg === 'function') showMsg("🤝 ルームに接続しました！ホストのスタートを待機中...");
        } else {
            if (typeof showMsg === 'function') showMsg("🤝 メンバーが接続しました！");
            broadcast({ type: 'UPDATE_PLAYERS', count: hostConnections.length + 1 });
        }
        updatePlayerListUI(isHost ? hostConnections.length + 1 : 2);
    });

    conn.on('data', (data) => {
        if (data.type === 'UPDATE_PLAYERS' && !isHost) {
            updatePlayerListUI(data.count);
        }
        if (data.type === 'START_SYNCHRO') {
            executeSyncStart(); 
        }
        if (data.type === 'SYNC_RESULT') {
            handlePartnerResult(data); // 相手のスコアデータを受信
        }
    });

    conn.on('close', () => {
        if (typeof showMsg === 'function') showMsg("⚠️ 通信が切断されました");
        if (isHost) {
            hostConnections = hostConnections.filter(c => c.peer !== conn.peer);
            updatePlayerListUI(hostConnections.length + 1);
            broadcast({ type: 'UPDATE_PLAYERS', count: hostConnections.length + 1 });
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
function updatePlayerListUI(playerCount) {
    const p2Row = document.getElementById('p2-row');
    const p2Name = document.getElementById('p2-name');
    const p2Status = document.getElementById('p2-status');
    const p2Dot = document.getElementById('p2-dot');
    
    if (playerCount >= 2) {
        p2Row.classList.remove('opacity-40', 'border-dashed', 'border-stone-800');
        p2Row.classList.add('bg-stone-800/60', 'border-stone-800');
        p2Name.innerText = "Player 2";
        p2Name.classList.add('text-stone-200');
        p2Dot.innerText = "🟢";
        p2Status.innerText = "READY";
        p2Status.className = "text-[10px] text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded-sm border border-emerald-900/30 font-bold tracking-wider";
    } else {
        p2Row.className = "flex items-center justify-between text-stone-600 text-sm font-bold border border-dashed border-stone-800 p-2.5 rounded-sm opacity-40 transition-all duration-300";
        p2Name.innerText = "Player 2 を待機中...";
        p2Name.classList.remove('text-stone-200');
        p2Dot.innerText = "⚪️";
        p2Status.innerText = "WAITING";
        p2Status.className = "text-[10px] font-bold tracking-wider";
    }

    if (isHost) {
        const startBtn = document.getElementById('btn-sync-start');
        if (playerCount >= 2) {
            startBtn.disabled = false;
            startBtn.className = "w-full mt-4 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base rounded-sm tracking-widest uppercase shadow-lg transition-all text-center animate-pulse";
            startBtn.innerText = "🚀 SYNC START (同期音読を開始)";
        } else {
            startBtn.disabled = true;
            startBtn.className = "w-full mt-4 py-3.5 bg-stone-800 text-stone-500 font-bold text-sm rounded-sm tracking-widest uppercase cursor-not-allowed border border-stone-700 transition-all text-center";
            startBtn.innerText = "メンバーの接続を待っています";
        }
    }
}

// ------------------------------------------
// 6. 同期音読 (Synchro Reading) の開始プロセス
// ------------------------------------------
function triggerSyncStart() {
    if (!isHost) return;
    broadcast({ type: 'START_SYNCHRO' }); 
    executeSyncStart(); 
}

function executeSyncStart() {
    switchScreen('learningScreen');
    
    // ★修正: 'paced' から 'reading' モード(通常のRead)に切り替えます
    if (typeof setLearningMode === 'function') {
        setLearningMode('reading');
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
                    
                    if (typeof toggleRecording === 'function') {
                        toggleRecording(); 
                    }
                }
            }, 100); 
        }, 1000);
    }
}

// ------------------------------------------
// 7. シンクロ判定 (スコアの送受信と結合)
// ------------------------------------------

function sendMyResultToPartner(myAccuracy, myWpm) {
    // 自分の最新結果をメモリに保持
    myLatestResult = { accuracy: myAccuracy, wpm: myWpm };

    if (!myConnection && !isHost) return; 
    if (hostConnections.length === 0 && isHost) return;

    const myResultData = {
        type: 'SYNC_RESULT',
        accuracy: myAccuracy,
        wpm: myWpm
    };

    if (isHost) {
        broadcast(myResultData);
    } else {
        myConnection.send(myResultData);
    }
    
    // 相手のデータが先に届いていれば、このタイミングで描画
    if (partnerLatestResult) {
        showSynchroResultUI();
    }
}

function handlePartnerResult(data) {
    // 相手の最新結果をメモリに保持
    partnerLatestResult = { accuracy: data.accuracy, wpm: data.wpm };
    
    // 自分のデータも既に確定していれば、このタイミングで描画
    if (myLatestResult) {
        showSynchroResultUI();
    }
}

function showSynchroResultUI() {
    if (!myLatestResult || !partnerLatestResult) return;

    // ui.jsに定義されている結果画面の黒板コンテナを指定
    const resultContainer = document.getElementById('resultScoreBoard');
    if (!resultContainer) return;

    // 既に二重で表示されていたら一度消去
    const existingSync = document.getElementById('sync-score-display');
    if (existingSync) existingSync.remove();

    // 2人のAccuracyの平均からシンクロ率を算出
    const synchroRate = Math.round((myLatestResult.accuracy + partnerLatestResult.accuracy) / 2);

    // スコアボードの下部にきれいに収まるHTMLコンポーネント
    const syncHtml = `
        <div id="sync-score-display" class="mt-6 p-5 border-2 border-emerald-500 bg-stone-800 rounded-xl text-center w-full col-span-full shadow-inner relative overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-right from-emerald-500 to-teal-400"></div>
            <h3 class="text-xs font-bold text-emerald-400 tracking-[0.2em] uppercase mb-1">🤝 Team Synchro Rate</h3>
            <div class="text-5xl font-black text-yellow-400 serif-font my-2 tracking-wide">${synchroRate}%</div>
            <div class="flex justify-center gap-6 mt-3 pt-3 border-t border-stone-700/60 text-xs text-stone-300 font-medium">
                <div>あなた: <span class="text-emerald-400 font-bold">${myLatestResult.accuracy}%</span> (${myLatestResult.wpm} WPM)</div>
                <div class="border-l border-stone-600 h-4"></div>
                <div>パートナー: <span class="text-emerald-400 font-bold">${partnerLatestResult.accuracy}%</span> (${partnerLatestResult.wpm} WPM)</div>
            </div>
        </div>
    `;

    // 黒板UIの末尾に結合
    resultContainer.insertAdjacentHTML('beforeend', syncHtml);
}