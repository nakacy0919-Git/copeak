// ==========================================
// Copeak Classroom Bridge
// Copeakの採点結果をClassroomへ返す
// ==========================================

(() => {

  const params =
    new URLSearchParams(
      window.location.search
    );


  const assignmentId =
    params.get(
      'classroom_assignment'
    );


  const source =
    params.get(
      'source'
    );


  // ========================================
  // Copeak Classroom経由でなければ何もしない
  // ========================================
  if (
    !assignmentId ||
    source !==
      'copeak-classroom'
  ) {
    return;
  }


  const DEFAULT_CLASSROOM_ORIGIN =
    'https://cc.pic-speak-story.com';


  const requestedOrigin =
    params.get(
      'classroom_origin'
    );


  // ========================================
  // 許可するClassroomドメイン
  // ========================================
  const allowedOrigins =
    new Set([
      DEFAULT_CLASSROOM_ORIGIN,
      'https://copeak-classroom.vercel.app'
    ]);


  const classroomOrigin =
    allowedOrigins.has(
      requestedOrigin
    )

      ? requestedOrigin

      : DEFAULT_CLASSROOM_ORIGIN;


  let lastSignature =
    '';


  let lastSentAt =
    0;


  let wrapperInstalled =
    false;


  let observerStarted =
    false;


  // ========================================
  // 表示されているスコアを取得
  // ========================================
  function readNumber(
    id
  ) {

    const element =
      document.getElementById(
        id
      );


    if (!element) {
      return NaN;
    }


    const value =
      String(
        element.textContent ||
        ''
      )
        .replace(
          /[^\d.-]/g,
          ''
        );


    return Number(
      value
    );
  }


  // ========================================
  // 結果ID
  // ========================================
  function makeResultId() {

    if (
      window.crypto &&
      typeof
        window.crypto
          .randomUUID ===
        'function'
    ) {

      return window
        .crypto
        .randomUUID();
    }


    return (
      `copeak-${Date.now()}-` +
      Math.random()
        .toString(
          36
        )
        .slice(
          2
        )
    );
  }


  // ========================================
  // Classroomへ送信
  // ========================================
  function sendResultToClassroom() {

    // 呼び出し元Classroomが存在しない
    if (
      !window.opener ||
      window.opener.closed
    ) {

      console.warn(
        '[Copeak Classroom] opener not available'
      );

      return;
    }


    // ======================================
    // Copeak結果表示から値取得
    // ======================================
    const accuracy =
      readNumber(
        'bigAccValue'
      );


    const wpm =
      readNumber(
        'bigWpmValue'
      );


    const comprehension =
      readNumber(
        'bigCompValue'
      );


    // ======================================
    // 数値確認
    // ======================================
    if (
      !Number.isFinite(
        accuracy
      ) ||
      !Number.isFinite(
        wpm
      ) ||
      !Number.isFinite(
        comprehension
      )
    ) {
      return;
    }


    if (
      accuracy < 0 ||
      accuracy > 100 ||
      wpm < 0 ||
      comprehension < 0 ||
      comprehension > 100
    ) {
      return;
    }


    // ======================================
    // 二重送信防止
    // ======================================
    const signature =
      `${accuracy}|${wpm}|${comprehension}`;


    const now =
      Date.now();


    // DOMが連続更新されても1回だけ送る
    // 数秒後に同じスコアを再挑戦した場合は許可
    if (
      signature ===
        lastSignature &&
      now -
        lastSentAt <
        1800
    ) {
      return;
    }


    lastSignature =
      signature;


    lastSentAt =
      now;


    // ======================================
    // Classroomへ渡す結果
    // ======================================
    const payload = {

      type:
        'copeak-classroom-result',

      resultId:
        makeResultId(),

      assignmentId,

      accuracy,

      wpm,

      comprehension,

      submittedAt:
        new Date()
          .toISOString()
    };


    // ======================================
    // postMessage
    // ======================================
    window.opener.postMessage(
      payload,
      classroomOrigin
    );


    console.log(
      '[Copeak Classroom] result sent',
      payload
    );
  }


  // ========================================
  // processSpeechMatchを包む
  // ========================================
  function installProcessSpeechMatchWrapper() {

    const original =
      window.processSpeechMatch;


    if (
      typeof original !==
      'function'
    ) {
      return false;
    }


    if (
      original
        .__copeakClassroomBridge ===
      true
    ) {

      wrapperInstalled =
        true;

      return true;
    }


    const wrapped =
      function(
        ...args
      ) {

        const result =
          original.apply(
            this,
            args
          );


        const isFinalResult =
          args[1] ===
          true;


        if (
          isFinalResult
        ) {

          // Copeakが画面へ
          // Accuracy/WPM/Compを描画するのを待つ
          setTimeout(
            sendResultToClassroom,
            80
          );
        }


        return result;
      };


    wrapped
      .__copeakClassroomBridge =
      true;


    wrapped
      .__copeakClassroomOriginal =
      original;


    window.processSpeechMatch =
      wrapped;


    wrapperInstalled =
      true;


    console.log(
      '[Copeak Classroom] processSpeechMatch bridge ready'
    );


    return true;
  }


  // ========================================
  // 万一processSpeechMatchが取得できない時
  // DOM変更を監視
  // ========================================
  function startDomFallbackObserver() {

    if (
      observerStarted ||
      wrapperInstalled
    ) {
      return;
    }


    const scoreIds = [
      'bigAccValue',
      'bigWpmValue',
      'bigCompValue'
    ];


    const nodes =
      scoreIds
        .map(
          id =>
            document.getElementById(
              id
            )
        )
        .filter(
          Boolean
        );


    if (
      nodes.length !==
      scoreIds.length
    ) {
      return;
    }


    observerStarted =
      true;


    const observer =
      new MutationObserver(
        () => {

          setTimeout(
            sendResultToClassroom,
            100
          );
        }
      );


    nodes.forEach(
      node => {

        observer.observe(
          node,
          {
            childList:
              true,

            characterData:
              true,

            subtree:
              true
          }
        );
      }
    );


    console.log(
      '[Copeak Classroom] DOM fallback bridge ready'
    );
  }


  // ========================================
  // Bridge開始
  // ========================================
  if (
    !installProcessSpeechMatchWrapper()
  ) {

    let tries =
      0;


    const timer =
      setInterval(
        () => {

          tries++;


          if (
            installProcessSpeechMatchWrapper()
          ) {

            clearInterval(
              timer
            );

            return;
          }


          // 約3秒待っても見つからなければ
          // DOM監視方式へ
          if (
            tries >=
            30
          ) {

            clearInterval(
              timer
            );

            startDomFallbackObserver();
          }

        },
        100
      );
  }


  // ========================================
  // Classroom側の保存成功を受信
  // ========================================
  window.addEventListener(
    'message',
    event => {

      if (
        event.origin !==
        classroomOrigin
      ) {
        return;
      }


      const data =
        event.data;


      if (
        !data ||
        data.type !==
          'copeak-classroom-saved' ||
        data.assignmentId !==
          assignmentId
      ) {
        return;
      }


      // ====================================
      // Copeak画面にも成功表示
      // ====================================
      if (
        typeof
          window.showMsg ===
        'function'
      ) {

        window.showMsg(
          '✅ Copeak Classroomに提出しました'
        );
      }


      console.log(
        '[Copeak Classroom] submission saved'
      );
    }
  );

})();