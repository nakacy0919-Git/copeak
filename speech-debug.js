(() => {
    'use strict';

    // ============================================================
    // Copeak Speech Debug Logger
    //
    // ?debug=1 のときだけ有効
    //
    // 例:
    // https://copeak.pic-speak-story.com/?debug=1
    // ============================================================

    const params =
        new URLSearchParams(
            location.search
        );

    if (
        params.get('debug') !==
            '1'
    ) {
        return;
    }


    // ============================================================
    // 基本設定
    // ============================================================

    const STORAGE_KEY =
        'copeak_speech_debug_v1';

    const MAX_LINES =
        1200;


    let logs =
        [];

    let flushTimer =
        null;

    let recognitionCounter =
        0;

    let startCallCounter =
        0;

    let lastRecognitionEndAt =
        null;


    const recognitionIds =
        new WeakMap();

    const instrumented =
        new WeakSet();


    // ============================================================
    // 時刻
    // ============================================================

    function nowStamp() {

        const d =
            new Date();

        const hh =
            String(
                d.getHours()
            ).padStart(
                2,
                '0'
            );

        const mm =
            String(
                d.getMinutes()
            ).padStart(
                2,
                '0'
            );

        const ss =
            String(
                d.getSeconds()
            ).padStart(
                2,
                '0'
            );

        const ms =
            String(
                d.getMilliseconds()
            ).padStart(
                3,
                '0'
            );


        return (
            `${hh}:${mm}:${ss}.${ms}`
        );
    }


    // ============================================================
    // 保存済みログ読み込み
    // ============================================================

    function safeLoad() {

        try {

            const saved =
                JSON.parse(
                    localStorage.getItem(
                        STORAGE_KEY
                    ) ||
                    '[]'
                );


            if (
                Array.isArray(
                    saved
                )
            ) {

                logs =
                    saved.slice(
                        -MAX_LINES
                    );
            }

        } catch (e) {

            logs =
                [];
        }
    }


    // ============================================================
    // localStorage保存
    // ============================================================

    function flushNow() {

        if (
            flushTimer
        ) {

            clearTimeout(
                flushTimer
            );

            flushTimer =
                null;
        }


        try {

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(
                    logs.slice(
                        -MAX_LINES
                    )
                )
            );

        } catch (e) {}
    }


    function scheduleFlush() {

        if (
            flushTimer
        ) {
            return;
        }


        flushTimer =
            setTimeout(
                () => {

                    flushTimer =
                        null;

                    flushNow();

                },
                100
            );
    }


    // ============================================================
    // ログ画面更新
    // ============================================================

    let panel =
        null;

    let logView =
        null;


    function refreshLogView() {

        if (
            !logView
        ) {
            return;
        }


        logView.textContent =
            logs.join(
                '\n'
            );


        logView.scrollTop =
            logView.scrollHeight;
    }


    // ============================================================
    // ログ記録
    // ============================================================

    function write(
        message
    ) {

        const line =
            `${nowStamp()}  ${message}`;


        logs.push(
            line
        );


        if (
            logs.length >
            MAX_LINES
        ) {

            logs.splice(
                0,
                logs.length -
                    MAX_LINES
            );
        }


        console.log(
            '[Copeak Speech Debug]',
            line
        );


        scheduleFlush();

        refreshLogView();
    }


    // ============================================================
    // Recognition ID
    // R1 / R2 / R3...
    // ============================================================

    function getRecognitionId(
        rec
    ) {

        if (
            !recognitionIds.has(
                rec
            )
        ) {

            recognitionCounter++;

            recognitionIds.set(
                rec,
                `R${recognitionCounter}`
            );
        }


        return recognitionIds.get(
            rec
        );
    }


    // ============================================================
    // transcriptの一部をログ表示
    // ============================================================

    function previewTranscript(
        event
    ) {

        try {

            let text =
                '';

            let finalCount =
                0;


            for (
                let i = 0;
                i < event.results.length;
                i++
            ) {

                const result =
                    event.results[i];


                const transcript =
                    result?.[0]
                        ?.transcript ||
                    '';


                if (
                    result?.isFinal
                ) {

                    finalCount++;
                }


                if (
                    transcript.trim()
                ) {

                    text +=
                        `${
                            text
                                ? ' '
                                : ''
                        }${
                            transcript.trim()
                        }`;
                }
            }


            text =
                text
                    .replace(
                        /\s+/g,
                        ' '
                    )
                    .trim();


            if (
                text.length >
                100
            ) {

                text =
                    `${text.slice(
                        0,
                        100
                    )}…`;
            }


            return {
                text,
                finalCount
            };


        } catch (e) {

            return {
                text: '',
                finalCount: 0
            };
        }
    }


    // ============================================================
    // Recognitionイベントを監視
    // ============================================================

    function instrumentRecognition(
        rec
    ) {

        if (
            !rec ||
            instrumented.has(
                rec
            )
        ) {
            return;
        }


        instrumented.add(
            rec
        );


        const id =
            getRecognitionId(
                rec
            );


        write(
            `${id} CREATED ` +
            `lang=${rec.lang || '(unset)'} ` +
            `continuous=${String(
                rec.continuous
            )} ` +
            `interim=${String(
                rec.interimResults
            )}`
        );


        const eventNames = [
            'start',
            'audiostart',
            'soundstart',
            'speechstart',
            'speechend',
            'soundend',
            'audioend',
            'nomatch'
        ];


        eventNames.forEach(
            type => {

                rec.addEventListener(
                    type,
                    () => {

                        write(
                            `${id} EVENT ${type}`
                        );
                    }
                );
            }
        );


        // ========================================
        // result
        // ========================================

        rec.addEventListener(
            'result',
            event => {

                const info =
                    previewTranscript(
                        event
                    );


                write(
                    `${id} EVENT result ` +
                    `resultIndex=${event.resultIndex} ` +
                    `results=${event.results.length} ` +
                    `finals=${info.finalCount}` +
                    (
                        info.text
                            ? ` text="${info.text}"`
                            : ''
                    )
                );
            }
        );


        // ========================================
        // error
        // ========================================

        rec.addEventListener(
            'error',
            event => {

                write(
                    `${id} EVENT error ` +
                    `error=${
                        event?.error ||
                        '(unknown)'
                    } ` +
                    `message=${
                        event?.message ||
                        ''
                    }`
                );
            }
        );


        // ========================================
        // end
        // ========================================

        rec.addEventListener(
            'end',
            () => {

                lastRecognitionEndAt =
                    performance.now();


                write(
                    `${id} EVENT end`
                );
            }
        );
    }


    // ============================================================
    // SpeechRecognition.start / stop / abort を監視
    //
    // 本来の処理は変更しない
    // 前後にログを入れるだけ
    // ============================================================

    function patchSpeechRecognition() {

        const Ctor =
            window.SpeechRecognition ||
            window.webkitSpeechRecognition;


        if (
            !Ctor ||
            !Ctor.prototype
        ) {

            write(
                'ERROR SpeechRecognition constructor not found'
            );

            return;
        }


        const proto =
            Ctor.prototype;


        if (
            proto.__copeakSpeechDebugPatched
        ) {

            write(
                'SpeechRecognition prototype already patched'
            );

            return;
        }


        const originalStart =
            proto.start;

        const originalStop =
            proto.stop;

        const originalAbort =
            proto.abort;


        if (
            typeof originalStart !==
            'function'
        ) {

            write(
                'ERROR SpeechRecognition.start() not found'
            );

            return;
        }


        Object.defineProperty(
            proto,
            '__copeakSpeechDebugPatched',
            {
                value: true,
                configurable: true
            }
        );


        // ========================================
        // start()
        // ========================================

        proto.start =
            function(
                ...args
            ) {

                instrumentRecognition(
                    this
                );


                startCallCounter++;


                const id =
                    getRecognitionId(
                        this
                    );


                const sinceEnd =
                    lastRecognitionEndAt ===
                    null
                        ? 'n/a'
                        : `${
                            Math.round(
                                performance.now() -
                                lastRecognitionEndAt
                            )
                        }ms`;


                write(
                    `${id} CALL start() ` +
                    `#${startCallCounter} ` +
                    `sincePreviousEnd=${sinceEnd} ` +
                    `lang=${this.lang || '(unset)'} ` +
                    `continuous=${String(
                        this.continuous
                    )} ` +
                    `interim=${String(
                        this.interimResults
                    )}`
                );


                try {

                    const result =
                        originalStart.apply(
                            this,
                            args
                        );


                    write(
                        `${id} RETURN start()`
                    );


                    return result;


                } catch (error) {

                    write(
                        `${id} THROW start() ` +
                        `${
                            error?.name ||
                            'Error'
                        }: ${
                            error?.message ||
                            String(
                                error
                            )
                        }`
                    );


                    throw error;
                }
            };


        // ========================================
        // stop()
        // ========================================

        if (
            typeof originalStop ===
            'function'
        ) {

            proto.stop =
                function(
                    ...args
                ) {

                    instrumentRecognition(
                        this
                    );


                    const id =
                        getRecognitionId(
                            this
                        );


                    write(
                        `${id} CALL stop()`
                    );


                    try {

                        const result =
                            originalStop.apply(
                                this,
                                args
                            );


                        write(
                            `${id} RETURN stop()`
                        );


                        return result;


                    } catch (
                        error
                    ) {

                        write(
                            `${id} THROW stop() ` +
                            `${
                                error?.name ||
                                'Error'
                            }: ${
                                error?.message ||
                                String(
                                    error
                                )
                            }`
                        );


                        throw error;
                    }
                };
        }


        // ========================================
        // abort()
        // ========================================

        if (
            typeof originalAbort ===
            'function'
        ) {

            proto.abort =
                function(
                    ...args
                ) {

                    instrumentRecognition(
                        this
                    );


                    const id =
                        getRecognitionId(
                            this
                        );


                    write(
                        `${id} CALL abort()`
                    );


                    try {

                        const result =
                            originalAbort.apply(
                                this,
                                args
                            );


                        write(
                            `${id} RETURN abort()`
                        );


                        return result;


                    } catch (
                        error
                    ) {

                        write(
                            `${id} THROW abort() ` +
                            `${
                                error?.name ||
                                'Error'
                            }: ${
                                error?.message ||
                                String(
                                    error
                                )
                            }`
                        );


                        throw error;
                    }
                };
        }


        write(
            'SpeechRecognition prototype patched'
        );
    }


    // ============================================================
    // START / FINISH / NEXT系ボタンのクリックを記録
    // ============================================================

    function getButtonDescription(
        target
    ) {

        const el =
            target?.closest?.(
                'button, [role="button"], input[type="button"], input[type="submit"]'
            );


        if (
            !el
        ) {
            return null;
        }


        const id =
            el.id
                ? `#${el.id}`
                : '';


        const text =
            (
                el.innerText ||
                el.value ||
                el.getAttribute(
                    'aria-label'
                ) ||
                ''
            )
            .replace(
                /\s+/g,
                ' '
            )
            .trim()
            .slice(
                0,
                100
            );


        const interesting =
            id ===
                '#micBtn' ||

            id ===
                '#micCheckStartBtn' ||

            id ===
                '#micCheckRetryBtn' ||

            id ===
                '#micCheckCancelBtn' ||

            /start|finish|next|retry|mic|音読|終了|次へ/i
                .test(
                    text
                );


        if (
            !interesting
        ) {
            return null;
        }


        return (
            `${id || '(no-id)'} "${text}"`
        );
    }


    // ============================================================
    // UI状態
    // ============================================================

    function snapshotUiState() {

        const micText =
            document
                .getElementById(
                    'micBtnText'
                )
                ?.innerText
                ?.trim() ||
            '';


        const modal =
            document
                .getElementById(
                    'micCheckModal'
                );


        const modalVisible =
            !!modal &&
            !modal.classList.contains(
                'hidden'
            ) &&
            getComputedStyle(
                modal
            ).display !==
                'none';


        const micStatus =
            document
                .getElementById(
                    'micCheckStatus'
                )
                ?.innerText
                ?.trim() ||
            '';


        return (
            `UI mic="${
                micText.slice(
                    0,
                    80
                )
            }" ` +
            `micCheckModal=${
                modalVisible
                    ? 'visible'
                    : 'hidden'
            }` +
            (
                micStatus
                    ? ` micCheckStatus="${
                        micStatus.slice(
                            0,
                            100
                        )
                    }"`
                    : ''
            )
        );
    }


    // ============================================================
    // クリック監視
    // ============================================================

    function installClickLogger() {

        document.addEventListener(
            'click',
            event => {

                const desc =
                    getButtonDescription(
                        event.target
                    );


                if (
                    !desc
                ) {
                    return;
                }


                write(
                    `CLICK ${desc} | ${snapshotUiState()}`
                );

            },
            true
        );
    }


    // ============================================================
    // COPY
    // ============================================================

    async function copyLogs() {

        const text =
            logs.join(
                '\n'
            );


        try {

            await navigator.clipboard
                .writeText(
                    text
                );


            write(
                'DEBUG UI copied log to clipboard'
            );


            alert(
                'Debug Logをコピーしました。ChatGPTに貼り付けてください。'
            );


        } catch (e) {

            const area =
                document.createElement(
                    'textarea'
                );


            area.value =
                text;


            area.style.position =
                'fixed';

            area.style.opacity =
                '0';


            document.body.appendChild(
                area
            );


            area.focus();

            area.select();


            try {

                document.execCommand(
                    'copy'
                );


                write(
                    'DEBUG UI copied log with fallback'
                );


                alert(
                    'Debug Logをコピーしました。ChatGPTに貼り付けてください。'
                );


            } catch (e2) {

                alert(
                    'コピーできませんでした。ログを長押ししてコピーしてください。'
                );
            }


            area.remove();
        }
    }


    // ============================================================
    // CLEAR
    // ============================================================

    function clearLogs() {

        if (
            !confirm(
                'Debug Logをすべて消去しますか？'
            )
        ) {
            return;
        }


        logs =
            [];


        lastRecognitionEndAt =
            null;


        try {

            localStorage.removeItem(
                STORAGE_KEY
            );

        } catch (e) {}


        write(
            'DEBUG LOG CLEARED'
        );
    }


    // ============================================================
    // パネル
    // ============================================================

    function closePanel() {

        if (
            panel
        ) {

            panel.style.display =
                'none';
        }
    }


    function openPanel() {

        if (
            panel
        ) {

            panel.style.display =
                'flex';

            refreshLogView();
        }
    }


    function makeButton(
        label,
        onClick
    ) {

        const btn =
            document.createElement(
                'button'
            );


        btn.type =
            'button';

        btn.textContent =
            label;


        btn.addEventListener(
            'click',
            event => {

                event.stopPropagation();

                onClick();
            }
        );


        Object.assign(
            btn.style,
            {
                border:
                    '0',

                borderRadius:
                    '10px',

                padding:
                    '10px 13px',

                fontSize:
                    '13px',

                fontWeight:
                    '700',

                background:
                    '#ffffff',

                color:
                    '#111827'
            }
        );


        return btn;
    }


    // ============================================================
    // Debug UI作成
    // ============================================================

    function buildDebugUi() {

        // ========================================
        // 右下ボタン
        // ========================================

        const openBtn =
            document.createElement(
                'button'
            );


        openBtn.type =
            'button';

        openBtn.textContent =
            'DEBUG LOG';


        Object.assign(
            openBtn.style,
            {
                position:
                    'fixed',

                right:
                    '12px',

                bottom:
                    '12px',

                zIndex:
                    '2147483646',

                border:
                    '0',

                borderRadius:
                    '999px',

                padding:
                    '10px 14px',

                fontSize:
                    '12px',

                fontWeight:
                    '800',

                background:
                    '#111827',

                color:
                    '#ffffff',

                boxShadow:
                    '0 5px 18px rgba(0,0,0,.28)'
            }
        );


        openBtn.addEventListener(
            'click',
            event => {

                event.stopPropagation();

                openPanel();
            }
        );


        // ========================================
        // 全画面パネル
        // ========================================

        panel =
            document.createElement(
                'div'
            );


        Object.assign(
            panel.style,
            {
                position:
                    'fixed',

                inset:
                    '0',

                zIndex:
                    '2147483647',

                display:
                    'none',

                flexDirection:
                    'column',

                background:
                    'rgba(3,7,18,.97)',

                color:
                    '#e5e7eb',

                padding:
                    '12px',

                fontFamily:
                    'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'
            }
        );


        // ========================================
        // Header
        // ========================================

        const header =
            document.createElement(
                'div'
            );


        Object.assign(
            header.style,
            {
                display:
                    'flex',

                alignItems:
                    'center',

                justifyContent:
                    'space-between',

                gap:
                    '8px',

                padding:
                    '10px 2px'
            }
        );


        const title =
            document.createElement(
                'div'
            );


        title.textContent =
            'Copeak Speech Debug Log';


        Object.assign(
            title.style,
            {
                fontWeight:
                    '800',

                fontSize:
                    '15px'
            }
        );


        const controls =
            document.createElement(
                'div'
            );


        Object.assign(
            controls.style,
            {
                display:
                    'flex',

                gap:
                    '6px',

                flexWrap:
                    'wrap',

                justifyContent:
                    'flex-end'
            }
        );


        controls.append(
            makeButton(
                'COPY',
                copyLogs
            ),

            makeButton(
                'CLEAR',
                clearLogs
            ),

            makeButton(
                'CLOSE',
                closePanel
            )
        );


        header.append(
            title,
            controls
        );


        // ========================================
        // Log本体
        // ========================================

        logView =
            document.createElement(
                'pre'
            );


        Object.assign(
            logView.style,
            {
                flex:
                    '1',

                overflow:
                    'auto',

                whiteSpace:
                    'pre-wrap',

                wordBreak:
                    'break-word',

                WebkitOverflowScrolling:
                    'touch',

                margin:
                    '0',

                padding:
                    '12px',

                borderRadius:
                    '12px',

                background:
                    '#000000',

                color:
                    '#d1fae5',

                fontSize:
                    '11px',

                lineHeight:
                    '1.5'
            }
        );


        panel.append(
            header,
            logView
        );


        document.body.append(
            openBtn,
            panel
        );


        refreshLogView();
    }


    // ============================================================
    // 初期化
    // ============================================================

    safeLoad();


    write(
        '================================================'
    );

    write(
        'NEW PAGE SESSION'
    );


    write(
        `URL ${location.href}`
    );


    write(
        `UA ${navigator.userAgent}`
    );


    write(
        `visibility=${document.visibilityState} ` +
        `online=${String(
            navigator.onLine
        )}`
    );


    // SpeechRecognition監視開始
    patchSpeechRecognition();


    // ボタン監視
    installClickLogger();


    // Debug UI
    if (
        document.readyState ===
        'loading'
    ) {

        document.addEventListener(
            'DOMContentLoaded',
            buildDebugUi,
            {
                once: true
            }
        );

    } else {

        buildDebugUi();
    }


    // ============================================================
    // ページ状態
    // ============================================================

    document.addEventListener(
        'visibilitychange',
        () => {

            write(
                `PAGE visibilitychange -> ${document.visibilityState}`
            );
        }
    );


    window.addEventListener(
        'pagehide',
        () => {

            write(
                'PAGE pagehide'
            );

            flushNow();
        }
    );


    window.addEventListener(
        'pageshow',
        event => {

            write(
                `PAGE pageshow persisted=${String(
                    event.persisted
                )}`
            );
        }
    );


    // ============================================================
    // ネットワーク
    // ============================================================

    window.addEventListener(
        'online',
        () => {

            write(
                'NETWORK online'
            );
        }
    );


    window.addEventListener(
        'offline',
        () => {

            write(
                'NETWORK offline'
            );
        }
    );


    // ============================================================
    // JavaScriptエラー
    // ============================================================

    window.addEventListener(
        'error',
        event => {

            write(
                `WINDOW error ${
                    event?.message ||
                    '(unknown)'
                } ${
                    event?.filename ||
                    ''
                }:${
                    event?.lineno ||
                    ''
                }`
            );
        }
    );


    // ============================================================
    // Promiseエラー
    // ============================================================

    window.addEventListener(
        'unhandledrejection',
        event => {

            let reason =
                event?.reason;


            if (
                reason instanceof
                Error
            ) {

                reason =
                    `${reason.name}: ${reason.message}`;
            }


            write(
                `WINDOW unhandledrejection ${
                    String(
                        reason ||
                        '(unknown)'
                    )
                }`
            );
        }
    );


    // ============================================================
    // 必要ならConsoleからも確認可能
    // ============================================================

    window.CopeakSpeechDebug = {

        getLogs:
            () => [
                ...logs
            ],

        clear:
            clearLogs,

        open:
            openPanel,

        flush:
            flushNow
    };

})();