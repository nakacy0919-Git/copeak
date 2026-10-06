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
  // CLASSROOM PRACTICE POLICY PARAMETERS
  // ========================================

  const rawInitialPracticeMode =
    String(
      params.get(
        'practice_mode'
      ) ||
      'free'
    )
      .toLowerCase();


  const initialPracticeMode =
    [
      'free',
      'reading',
      'paced',
      'vanish',
      'shadowing'
    ]
      .includes(
        rawInitialPracticeMode
      )

      ? rawInitialPracticeMode

      : 'free';


  const initialModeLocked =
    (
      initialPracticeMode !==
        'free' &&
      params.get(
        'mode_locked'
      ) ===
        '1'
    );


  const parsedInitialPacedTargetWpm =
    Number(
      params.get(
        'paced_target_wpm'
      )
    );


  const initialPacedTargetWpm =
    (
      Number.isInteger(
        parsedInitialPacedTargetWpm
      ) &&
      parsedInitialPacedTargetWpm >=
        40 &&
      parsedInitialPacedTargetWpm <=
        300
    )

      ? parsedInitialPacedTargetWpm

      : null;


  const parsedInitialVanishLevel =
    Number(
      params.get(
        'vanish_level'
      )
    );


  const initialVanishLevel =
    (
      Number.isInteger(
        parsedInitialVanishLevel
      ) &&
      parsedInitialVanishLevel >=
        1 &&
      parsedInitialVanishLevel <=
        5
    )

      ? parsedInitialVanishLevel

      : null;


  const initialPracticePolicy = {

    practiceMode:
      initialPracticeMode,

    modeLocked:
      initialModeLocked,

    pacedTargetWpm:
      initialPacedTargetWpm,

    vanishLevel:
      initialVanishLevel

  };


  function applyInitialPracticePolicy(
    lesson
  ) {

    const isMatchingClassroomLesson =
      (
        initialSource ===
          'copeak-classroom' &&
        initialAssignmentId &&
        lesson?.classroomSource ===
          true &&
        lesson?.classroomAssignmentId ===
          initialAssignmentId
      );


    if (
      !isMatchingClassroomLesson
    ) {

      const practiceApi =
        window
          .CopeakClassroomPractice;


      if (
        practiceApi &&
        typeof practiceApi.clearPolicy ===
          'function'
      ) {

        practiceApi.clearPolicy();
      }


      return;
    }


    const api =
      window
        .CopeakClassroomPractice;


    if (
      !api ||
      typeof api.applyPolicy !==
        'function'
    ) {

      console.warn(
        '[Copeak Classroom] Practice Policy API not ready'
      );

      return;
    }


    const state =
      api.applyPolicy(
        initialPracticePolicy
      );


    console.log(
      '[Copeak Classroom] practice policy applied',
      state
    );
  }

  // ========================================
  // Copeak Classroom Support Image Bridge
  // ========================================

  const initialImageUrl =
    params.get(
      'image_url'
    );


  async function fetchSupportImageDataUrl(
    imageUrl
  ) {

    if (!imageUrl) {
      return null;
    }


    try {

      const response =
        await fetch(
          imageUrl,
          {
            cache: 'no-store'
          }
        );


      if (!response.ok) {
        throw new Error(
          `Image download failed (${response.status})`
        );
      }


      const blob =
        await response.blob();


      if (
        !blob ||
        blob.size <= 0 ||
        !String(
          blob.type || ''
        ).startsWith(
          'image/'
        )
      ) {

        throw new Error(
          'Invalid image response.'
        );
      }


      return await new Promise(
        (
          resolve,
          reject
        ) => {

          const reader =
            new FileReader();


          reader.onload =
            () =>
              resolve(
                reader.result
              );


          reader.onerror =
            () =>
              reject(
                reader.error
              );


          reader.readAsDataURL(
            blob
          );
        }
      );

    } catch (error) {

      console.warn(
        '[Copeak Classroom] support image cache failed:',
        error
      );


      return null;
    }
  }


  function persistSupportImageLesson(
    lesson
  ) {

    if (
      !lesson ||
      lesson.id === undefined ||
      lesson.id === null
    ) {
      return;
    }


    try {

      const request =
        indexedDB.open(
          'CopeakDB'
        );


      request.onsuccess =
        () => {

          const database =
            request.result;


          if (
            !database
              .objectStoreNames
              .contains(
                'CustomLessons'
              )
          ) {

            database.close();
            return;
          }


          const tx =
            database.transaction(
              ['CustomLessons'],
              'readwrite'
            );


          tx
            .objectStore(
              'CustomLessons'
            )
            .put(
              lesson
            );


          tx.oncomplete =
            () =>
              database.close();


          tx.onerror =
            () =>
              database.close();


          tx.onabort =
            () =>
              database.close();
        };


      request.onerror =
        () => {

          console.warn(
            '[Copeak Classroom] support image DB open failed'
          );
        };

    } catch (error) {

      console.warn(
        '[Copeak Classroom] support image save failed:',
        error
      );
    }
  }


  function refreshSupportImageUi(
    lesson
  ) {

    const image =
      document.getElementById(
        'lessonSupportImage'
      );


    if (
      image &&
      lesson?.memoImage
    ) {

      image.src =
        lesson.memoImage;
    }
  }


  function installSupportImageBridge() {

    const original =
      window.startCustomLesson;


    if (
      typeof original !==
      'function'
    ) {
      return false;
    }


    if (
      original
        .__copeakClassroomImageBridge
    ) {
      return true;
    }


    const wrapped =
      function(
        lesson,
        ...args
      ) {

        const isClassroomLesson =
          (
            initialSource ===
              'copeak-classroom' &&
            initialAssignmentId &&
            lesson
          );


        if (
          !isClassroomLesson
        ) {

          return original.call(
            this,
            lesson,
            ...args
          );
        }


        // Classroom????????
        // ????URL????????????
        // ???????????????????
        lesson.memoImage =
          initialImageUrl ||
          null;


        const result =
          original.call(
            this,
            lesson,
            ...args
          );


        // ====================================
        // Classroom Practice Mode
        // 教材画面を開いた後に適用する
        // ====================================

        applyInitialPracticePolicy(
          lesson
        );

        if (
          !initialImageUrl
        ) {

          persistSupportImageLesson(
            lesson
          );


          return result;
        }


        // ????URL?Data URL???
        // IndexedDB??????
        void fetchSupportImageDataUrl(
          initialImageUrl
        )
          .then(
            dataUrl => {

              if (
                !dataUrl
              ) {
                return;
              }


              lesson.memoImage =
                dataUrl;


              persistSupportImageLesson(
                lesson
              );


              refreshSupportImageUi(
                lesson
              );


              console.log(
                '[Copeak Classroom] support image cached'
              );
            }
          );


        return result;
      };


    wrapped
      .__copeakClassroomImageBridge =
      true;


    wrapped
      .__copeakClassroomImageOriginal =
      original;


    window.startCustomLesson =
      wrapped;


    console.log(
      '[Copeak Classroom] support image bridge ready'
    );


    return true;
  }


  if (
    !installSupportImageBridge()
  ) {

    let tries =
      0;


    const timer =
      setInterval(
        () => {

          tries++;


          if (
            installSupportImageBridge() ||
            tries >= 40
          ) {

            clearInterval(
              timer
            );
          }

        },
        50
      );
  }



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
    // ======================================
    // ACTUAL PRACTICE MODE RESULT
    // ======================================

    const practiceApi =
      window
        .CopeakClassroomPractice;


    const practiceState =
      (
        practiceApi &&
        typeof practiceApi.getState ===
          'function'
      )

        ? practiceApi.getState()

        : null;


    const actualPracticeMode =
      (
        practiceState &&
        [
          'reading',
          'paced',
          'vanish',
          'shadowing'
        ]
          .includes(
            practiceState.practiceMode
          )
      )

        ? practiceState.practiceMode

        : 'reading';


    const pacedValue =
      Number(
        practiceState
          ?.pacedTargetWpm
      );


    const actualPacedTargetWpm =
      (
        actualPracticeMode ===
          'paced' &&
        Number.isInteger(
          pacedValue
        ) &&
        pacedValue >= 40 &&
        pacedValue <= 300
      )

        ? pacedValue

        : null;


    const vanishValue =
      Number(
        practiceState
          ?.vanishLevel
      );


    const actualVanishLevel =
      (
        actualPracticeMode ===
          'vanish' &&
        Number.isInteger(
          vanishValue
        ) &&
        vanishValue >= 1 &&
        vanishValue <= 5
      )

        ? vanishValue

        : null;

    const signature =
      [
        assignmentId,
        actualPracticeMode,
        actualPacedTargetWpm ?? '',
        actualVanishLevel ?? '',
        accuracy,
        wpm,
        comprehension
      ]
        .join('|');

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

      practiceMode:
        actualPracticeMode,

      pacedTargetWpm:
        actualPacedTargetWpm,

      vanishLevel:
        actualVanishLevel,
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