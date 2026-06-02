// ==========================================
// multiplay.js: 共同音読 (Synchro Reading) 通信制御ロジック
// ==========================================

let peer = null;
let myConnection = null; // ゲストとしての接続
let hostConnections = []; // ホストとしての接続リスト（最大2人まで追加可能）
let isHost = false;
let currentRoomId = "";

// ------------------------------------------
// UI制御（ロビー画面を開く）
// ------------------------------------------
function openMultiplaySetup() {
    // 現在のレッスンが選択されていない場合は警告
    if (!currentCustomLesson) {
        if (typeof showMsg === 'function') showMsg("⚠️ まずはプレイリストから読む教材を選択してください");
        return;
    }
    
    // 待合室（ロビー）画面を開く
    document.querySelectorAll('.screen').forEach(el => {
        el.style.display = 'none';
        el.classList.remove('active');
    });
    const lobby = document.getElementById('multiplayLobbyScreen');
    if (lobby) {
        lobby.style.display = 'flex';
        lobby.classList.add('active');
    }
    
    // UIの初期化
    resetLobbyUI();
}

function resetLobbyUI() {
    document.getElementById('host-id-display').classList.add('hidden');
    document.getElementById('btn-create-room').disabled = false;
    document.getElementById('btn-create-room').innerText = "🔑 ルームを作成してIDを発行";
    document.getElementById('btn-join-room').disabled = false;
    document.getElementById('btn-join-room').innerText = "接続する";
    document.getElementById('input-room-id').disabled = false;
    
    updatePlayerListUI(1); // 自分1人の状態
    
    const startBtn = document.getElementById('btn-sync-start');
    if (startBtn) {
        startBtn.disabled = true;
        startBtn.className = "w-full mt-4 py-3.5 bg-stone-800 text-stone-500 font-bold text-sm rounded-sm tracking-widest uppercase cursor-not-allowed border border-stone-700 transition-all text-center";
        startBtn.innerText = "メンバーの接続を待っています";
    }
}

// ------------------------------------------
// ホスト（部屋を作る側）の処理
// ------------------------------------------
function createMultiplayRoom() {
    const btn = document.getElementById('btn-create-room');
    btn.disabled = true;
    btn.innerText = "⏳ 作成中...";

    // 4桁のランダムな数字を生成
    currentRoomId = Math.floor(1000 + Math.random() * 9000).toString();
    // 確実な接続のため、接頭辞をつける
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

    // ゲストからの接続要求を待ち受け
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
// ゲスト（部屋に入る側）の処理
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

    // 自分用のランダムなPeerIDを発行
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
// 通信イベントの共通処理
// ------------------------------------------
function setupConnectionEvents(conn) {
    conn.on('open', () => {
        if (!isHost) {
            document.getElementById('btn-join-room').innerText = "✅ 接続完了";
            document.getElementById('connection-role').innerText = "GUEST";
            if (typeof showMsg === 'function') showMsg("🤝 ルームに接続しました！ホストのスタートを待機中...");
        } else {
            if (typeof showMsg === 'function') showMsg("🤝 メンバーが接続しました！");
            // ホストからゲストへ、現在の参加人数を通知
            broadcast({ type: 'UPDATE_PLAYERS', count: hostConnections.length + 1 });
        }
        
        // UIの参加人数表示を更新
        updatePlayerListUI(isHost ? hostConnections.length + 1 : 2);
    });

    conn.on('data', (data) => {
        if (data.type === 'UPDATE_PLAYERS' && !isHost) {
            updatePlayerListUI(data.count);
        }
        if (data.type === 'START_SYNCHRO') {
            executeSyncStart(); // ホストからのスタート合図を受信！
        }
        
        // 👇👇👇 これを追加 👇👇👇
        if (data.type === 'SYNC_RESULT') {
            handlePartnerResult(data);
        }
        // 👆👆👆 追加ここまで 👆👆👆
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

// データを全員に送信するヘルパー関数（ホスト専用）
function broadcast(data) {
    if (!isHost) return;
    hostConnections.forEach(conn => {
        if (conn.open) conn.send(data);
    });
}

// ------------------------------------------
// プレイヤーリストUIの更新
// ------------------------------------------
function updatePlayerListUI(playerCount) {
    const p2Row = document.getElementById('p2-row');
    const p2Name = document.getElementById('p2-name');
    const p2Status = document.getElementById('p2-status');
    const p2Dot = document.getElementById('p2-dot');

    const p3Row = document.getElementById('p3-row');
    
    // Player 2の表示更新
    if (playerCount >= 2) {
        p2Row.classList.remove('opacity-40', 'border-dashed', 'border-stone-800');
        p2Row.classList.add('bg-stone-800/60', 'border-stone-800');
        p2Name.innerText = "Player 2";
        p2Name.classList.add('text-stone-200');
        p2Dot.innerText = "🟢";
        p2Status.innerText = "READY";
        p2Status.className = "text-[10px] text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded-sm border border-emerald-900/30 font-bold tracking-wider";
    } else {
        // リセット
        p2Row.className = "flex items-center justify-between text-stone-600 text-sm font-bold border border-dashed border-stone-800 p-2.5 rounded-sm opacity-40 transition-all duration-300";
        p2Name.innerText = "Player 2 を待機中...";
        p2Name.classList.remove('text-stone-200');
        p2Dot.innerText = "⚪️";
        p2Status.innerText = "WAITING";
        p2Status.className = "text-[10px] font-bold tracking-wider";
    }

    // ホスト用のSTARTボタン制御（2人以上揃ったら押せるようにする）
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
// 同期音読 (Synchro Reading) の開始プロセス
// ------------------------------------------

// ホストが「START」を押した時の処理
function triggerSyncStart() {
    if (!isHost) return;
    
    // 全ゲストにスタートの合図を発射！
    broadcast({ type: 'START_SYNCHRO' });
    
    // 自分の画面でもスタート処理を実行
    executeSyncStart();
}

// 実際にカウントダウンと音読画面を起動する処理（全員同時に走る）
function executeSyncStart() {
    // 1. まず学習画面 (Pacedモード) にこっそり切り替えて裏で準備する
    switchScreen('learningScreen');
    if (typeof setLearningMode === 'function') {
        setLearningMode('paced'); // Synchro Reading用にPacedモードを強制選択
    }
    
    // 2. カウントダウンオーバーレイを表示
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
            
            // アニメーション用に一度縮小させる
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
                    // カウントダウン終了！
                    clearInterval(countInterval);
                    overlay.classList.add('hidden');
                    
                    // 3. マイクをオンにして、Paced（カラオケバー）を全員同時にスタート！
                    if (typeof toggleRecording === 'function') {
                        // STARTボタンを押したのと同じ挙動を引き起こす
                        toggleRecording(); 
                    }
                }
            }, 100); // 縮小アニメーションのためのわずかなタメ
            
        }, 1000);
    }
}
// ------------------------------------------
// 7. シンクロ判定 (スコアとタイムスタンプの送受信)
// ------------------------------------------

// 自分の音読が終わった時に呼ばれる関数（speech.js等から呼び出す）
function sendMyResultToPartner(myAccuracy, myWpm) {
    if (!myConnection && !isHost) return; // 通信していなければ何もしない
    if (hostConnections.length === 0 && isHost) return;

    const myResultData = {
        type: 'SYNC_RESULT',
        accuracy: myAccuracy,
        wpm: myWpm,
        // ※ゆくゆくはここに「各単語を発音したミリ秒（タイムスタンプ）の配列」も入れます
    };

    if (isHost) {
        broadcast(myResultData);
    } else {
        myConnection.send(myResultData);
    }
    
    console.log("📤 自分のスコアを相手に送信しました:", myResultData);
}

// 相手からのスコアを受信した時の処理（setupConnectionEvents内に追記される想定の処理）
function handlePartnerResult(data) {
    console.log("📥 相手のスコアを受信しました:", data);
    
    // ここで自分のスコアと相手のスコアを比較して「Team Synchro Rate」を計算します
    // 今回は仮計算として、お互いのAccuracyの平均値をベースにします
    const partnerAccuracy = data.accuracy;
    
    // UI（リザルト画面）に相手のスコアとシンクロ率を表示する処理を呼び出す
    showSynchroResultUI(partnerAccuracy);
}

// リザルト画面にシンクロ率を描画する関数
function showSynchroResultUI(partnerAccuracy) {
    // ※この処理は ui.js のリザルト表示関数 (showResult) が呼ばれた後に実行されます
    
    // リザルト画面のどこかにシンクロ率を表示する枠を動的に作ります
    const resultContainer = document.getElementById('resultScoreBoard'); // 既存のリザルト表示エリアのIDに合わせてください
    if (!resultContainer) return;

    // 既にシンクロ表示があれば消す
    const existingSync = document.getElementById('sync-score-display');
    if (existingSync) existingSync.remove();

    // 自分の現在のAccuracyを取得（仮に画面上の要素から拾うか、グローバル変数から取得）
    const myAccText = document.getElementById('accuracyScore').innerText || "0";
    const myAccuracy = parseFloat(myAccText);

    // 簡易シンクロ率の計算（2人のAccuracyの平均）
    const synchroRate = Math.round((myAccuracy + partnerAccuracy) / 2);

    // 画面にドーンと追加するHTML
    const syncHtml = `
        <div id="sync-score-display" class="mt-6 p-4 border-2 border-yellow-400 bg-yellow-50 rounded-md text-center animate-pulse">
            <h3 class="text-sm font-bold text-yellow-600 tracking-widest uppercase mb-1">🤝 Team Synchro Rate</h3>
            <div class="text-4xl font-black text-yellow-500 serif-font">${synchroRate}%</div>
            <div class="text-xs text-stone-500 mt-2 font-bold">Partner's Accuracy: ${partnerAccuracy}%</div>
        </div>
    `;

    // リザルトエリアの下部に追加
    resultContainer.insertAdjacentHTML('beforeend', syncHtml);
}