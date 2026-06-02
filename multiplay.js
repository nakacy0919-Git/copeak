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
let partnerLatestResult = null;
let isSyncModeActive = false; // ★追加: 共同モード中かどうかを判定するフラグ

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
            handlePartnerResult(data); 
        }
    });

    conn.on('close', () => {
        exitMultiplayMode(true); // 通信が切れたら強制解除
        if (typeof showMsg === 'function') showMsg("⚠️ パートナーとの通信が切断されました");
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
    isSyncModeActive = true; // ★共同モード状態をON
    myLatestResult = null;
    partnerLatestResult = null;

    // 前回のカスタムリザルトUIがあれば消す
    const customBoard = document.getElementById('sync-custom-board');
    if (customBoard) customBoard.remove();

    switchScreen('learningScreen');
    if (typeof setLearningMode === 'function') setLearningMode('reading');
    
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
                        // 既に録音中なら一度止めてから（一応の安全策）、スタートする
                        if(typeof isMainRecording !== 'undefined' && isMainRecording) {
                            window.originalToggleRecording();
                        }
                        window.originalToggleRecording(); // ★ハイジャック前の元の関数を直接呼んで録音開始！
                    }
                }
            }, 100); 
        }, 1000);
    }
}

// ------------------------------------------
// 7. シンクロ判定 (スコアの送受信と並列UI表示)
// ------------------------------------------

function sendMyResultToPartner(myAccuracy, myWpm) {
    if (!isSyncModeActive) return; // 共同モードじゃなければ送らない

    myLatestResult = { accuracy: myAccuracy, wpm: myWpm };

    if (!myConnection && !isHost) return; 
    if (hostConnections.length === 0 && isHost) return;

    const myResultData = { type: 'SYNC_RESULT', accuracy: myAccuracy, wpm: myWpm };

    if (isHost) broadcast(myResultData);
    else myConnection.send(myResultData);
    
    if (partnerLatestResult) showSynchroResultUI();
}

function handlePartnerResult(data) {
    partnerLatestResult = { accuracy: data.accuracy, wpm: data.wpm };
    if (myLatestResult) showSynchroResultUI();
}

// ★修正: リザルトボードを上書きして、Team Synchroを上に、個人のスコアを小さく横に並べる
function showSynchroResultUI() {
    if (!myLatestResult || !partnerLatestResult) return;

    const resultContainer = document.getElementById('resultScoreBoard');
    if (!resultContainer) return;

    // 1. 通常のソロ用スコアボード（子要素）を一旦隠す
    Array.from(resultContainer.children).forEach(child => {
        if(child.id !== 'sync-custom-board') {
            child.style.display = 'none';
            child.classList.add('sync-hidden-elem'); // 復元用の目印
        }
    });

    // 既に表示されていれば消す
    const existingSync = document.getElementById('sync-custom-board');
    if (existingSync) existingSync.remove();

    const synchroRate = Math.round((myLatestResult.accuracy + partnerLatestResult.accuracy) / 2);

    // 2. 完全に新しい「共同モード専用のリザルトHTML」を作成
    const syncHtml = `
        <div id="sync-custom-board" class="w-full flex flex-col gap-4 animate-fadeIn">
            <div class="p-6 md:p-8 border-4 border-yellow-400 bg-yellow-50 rounded-xl text-center shadow-lg relative overflow-hidden">
                <div class="absolute -top-10 -right-10 text-9xl opacity-10 select-none">🤝</div>
                <h3 class="text-sm md:text-base font-black text-yellow-600 tracking-[0.2em] uppercase mb-2">Team Synchro Rate</h3>
                <div class="text-7xl md:text-8xl font-black text-yellow-500 serif-font drop-shadow-md">${synchroRate}<span class="text-4xl">%</span></div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 w-full">
                <div class="flex-1 bg-white p-4 rounded-xl border-2 border-emerald-400 shadow-sm text-center relative mt-3 sm:mt-0">
                    <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-400 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">あなた</div>
                    <div class="mt-2 text-3xl md:text-4xl font-bold text-emerald-600 serif-font">${myLatestResult.accuracy}%</div>
                    <div class="text-xs text-stone-500 font-bold mt-1">${myLatestResult.wpm} WPM</div>
                </div>
                
                <div class="flex-1 bg-white p-4 rounded-xl border-2 border-blue-400 shadow-sm text-center relative mt-3 sm:mt-0 opacity-90">
                    <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-400 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">パートナー</div>
                    <div class="mt-2 text-3xl md:text-4xl font-bold text-blue-600 serif-font">${partnerLatestResult.accuracy}%</div>
                    <div class="text-xs text-stone-500 font-bold mt-1">${partnerLatestResult.wpm} WPM</div>
                </div>
            </div>

            <button onclick="exitMultiplayMode()" class="mt-4 w-full py-3 bg-stone-200 hover:bg-stone-300 text-stone-600 font-bold text-sm rounded-lg transition-all border border-stone-300">
                ❌ 共同モードを終了してソロに戻る
            </button>
        </div>
    `;

    // コンテナの「一番上」に挿入
    resultContainer.insertAdjacentHTML('afterbegin', syncHtml);
    
    // UIの強制更新（黄金のRetryボタンに切り替えるため）
    if (typeof window.updateMicButtonUI === 'function') window.updateMicButtonUI();
}

// ------------------------------------------
// 8. 共同モードの解除と後片付け
// ------------------------------------------
function exitMultiplayMode(isForce = false) {
    if (myConnection) { myConnection.close(); myConnection = null; }
    if (isHost) {
        hostConnections.forEach(c => c.close());
        hostConnections = [];
        if(peer) peer.destroy();
    }
    
    isSyncModeActive = false; // フラグOFF
    
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