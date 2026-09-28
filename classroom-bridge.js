// ==========================================
// Copeak Classroom Bridge
// Copeakの採点結果をClassroomへ返す
// ==========================================

(() => {

  // ========================================
  // 起動時URLのClassroom情報
  // ========================================
  const params =
    new URLSearchParams(
      window.location.search
    );


  const initialAssignmentId =
    params.get(
      'classroom_assignment'
    );


  const initialSource =
    params.get(
      'source'
    );


  const initialRequestedOrigin =
    params.get(
      'classroom_origin'
    );


  // ========================================
  // Classroomドメイン設定
  // ========================================
  const DEFAULT_CLASSROOM_ORIGIN =
    'https://cc.pic-speak-story.com';


  const allowedOrigins =
    new Set([
      DEFAULT_CLASSROOM_ORIGIN,
      'https://copeak-classroom.vercel.app'
    ]);


  function resolveClassroomOrigin(
    requestedOrigin
  ) {

    return allowedOrigins.has(
      requestedOrigin
    )
      ? requestedOrigin
      : DEFAULT_CLASSROOM_ORIGIN;
  }


  // ========================================
  // 起動時のClassroom Context
  // ========================================
  const initialContext =
    (
      initialAssignmentId &&
      initialSource ===
        'copeak-classroom'
    )
      ? {
          assignmentId:
            initialAssignmentId,

          classroomOrigin:
            resolveClassroomOrigin(
              initialRequestedOrigin
            )
        }
      : null;


  // ========================================
  // 現在開いている教材の
  // Classroom Contextを取得
  //
  // startCustomLesson() が
  // window.__copeakClassroomContext を
  // 更新する
  // ========================================
  function getActiveClassroomContext() {

    // startCustomLesson() が一度でも
    // Contextを設定した後はこちらを優先する
    const hasRuntimeContext =
      Object.prototype
        .hasOwnProperty
        .call(
          window,
          '__copeakClassroomContext'
        );


    if (
      hasRuntimeContext
    ) {

      const runtimeContext =
        window
          .__copeakClassroomContext;


      // 普通の教材ならnull
      if (
        !runtimeContext ||
        !runtimeContext.assignmentId
      ) {
        return null;
      }


      return {

        assignmentId:
          runtimeContext.assignmentId,

        classroomOrigin:
          resolveClassroomOrigin(
            runtimeContext.classroomOrigin
          )

      };
    }


    // startCustomLesson() が動く前は
    // 起動時URLの情報を使用
    return initialContext;
  }


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

    // ======================================
    // 現在の教材が
    // Classroom課題か確認
    // ======================================
    const context =
      getActiveClassroomContext();


    // 普通の教材なら送信しない
    if (
      !context
    ) {
      return;
    }


    const assignmentId =
      context.assignmentId;


    const classroomOrigin =
      context.classroomOrigin;


    // ======================================
    // 呼び出し元Classroomが存在するか
    // ======================================
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
    //
    // assignmentIdも含めることで
    // 別の課題で同じ点数だった場合に
    // 誤って送信を止めない
    // ======================================
    const signature =
      `${assignmentId}|${accuracy}|${wpm}|${comprehension}`;


    const now =
      Date.now();


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
  //
  // 音声認識ロジック自体は変更しない
  // 採点終了を検知するだけ
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

          // Copeakが
          // Accuracy/WPM/Compを
          // 画面へ描画するのを待つ
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
  //
  // ★ 通常のCopeak起動時でも
  // Bridgeを終了させない
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


          // 約3秒待っても
          // processSpeechMatchが見つからなければ
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

      const context =
        getActiveClassroomContext();


      if (
        !context
      ) {
        return;
      }


      if (
        event.origin !==
        context.classroomOrigin
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
          context.assignmentId
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


  console.log(
    '[Copeak Classroom] bridge initialized'
  );

})();