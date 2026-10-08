// Direct Sync is event-driven: no polling, heartbeat or Classroom session copy.
(() => {
  'use strict';
  const endpoint = 'https://sxcbudhcxiblpdzpgfep.supabase.co/functions/v1/classroom-submit';
  const classroomOrigins = new Set([
    'https://cc.pic-speak-story.com', 'https://copeak-classroom.vercel.app'
  ]);
  const params = new URLSearchParams(location.search);
  const launch = {
    assignmentId: params.get('classroom_assignment'),
    studentId: params.get('classroom_student'),
    nonce: params.get('classroom_launch'),
    origin: params.get('classroom_origin')
  };
  const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  let activeLesson = null;
  let receivedCredential = null;
  let draining = false;
  let drainAgain = false;
  let forceAgain = false;
  let startupPromise;
  let syncDatabase;

  function openSyncDb() {
    if (!syncDatabase) syncDatabase = new Promise((resolve, reject) => {
      const request = indexedDB.open('CopeakClassroomSync', 1);
      request.onupgradeneeded = () => {
        request.result.createObjectStore('credentials', { keyPath: 'id' });
        request.result.createObjectStore('results', { keyPath: 'resultId' });
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
      request.onblocked = () => reject(new Error('Sync storage is blocked'));
    });
    return syncDatabase;
  }

  async function dbOperation(store, mode, action) {
    const database = await openSyncDb();
    return new Promise((resolve, reject) => {
      const tx = database.transaction(store, mode);
      const request = action(tx.objectStore(store));
      tx.oncomplete = () => resolve(request?.result);
      tx.onerror = tx.onabort = () => reject(tx.error || new Error('Sync storage failed'));
    });
  }

  async function updateQueue(row) {
    const database = await openSyncDb();
    return new Promise((resolve, reject) => {
      const tx = database.transaction('results', 'readwrite');
      const store = tx.objectStore('results');
      let savedRow = row;
      const request = store.get(row.resultId);
      request.onsuccess = () => {
        const existing = request.result;
        // Preserve acknowledgements and renewed credentials across concurrent tabs.
        if (existing && row.status !== 'synced' &&
            (existing.status === 'synced' || existing.credentialId !== row.credentialId)) {
          savedRow = existing;
          return;
        }
        if (existing && row.status === 'synced') {
          savedRow = { ...existing, status: 'synced', error: null };
        }
        store.put(savedRow);
      };
      tx.oncomplete = () => resolve(savedRow);
      tx.onerror = tx.onabort = () => reject(tx.error);
    });
  }

  function updateLesson(lessonId, change) {
    if (typeof db === 'undefined' || !db) return Promise.resolve();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('CustomLessons', 'readwrite');
      const store = tx.objectStore('CustomLessons');
      const request = store.get(lessonId);
      request.onsuccess = () => {
        const lesson = request.result;
        if (!lesson) return;
        change(lesson);
        store.put(lesson);
        if (activeLesson?.id === lessonId) Object.assign(activeLesson, lesson);
        if (typeof currentCustomLesson !== 'undefined' && currentCustomLesson?.id === lessonId) {
          Object.assign(currentCustomLesson, lesson);
        }
      };
      tx.oncomplete = resolve;
      tx.onerror = tx.onabort = () => reject(tx.error);
    });
  }

  function showStatus(message) {
    if (typeof window.showMsg === 'function') window.showMsg(message);
  }

  function refreshLibrary() {
    if (typeof db !== 'undefined' && db && typeof loadSavedLessons === 'function') loadSavedLessons();
  }

  function isClassroomLesson(lesson) {
    return lesson?.classroomSource === true && uuid.test(lesson.classroomAssignmentId || '');
  }

  async function attachCredential(lesson, credential) {
    if (!isClassroomLesson(lesson) || lesson.classroomAssignmentId !== credential.assignmentId ||
        (lesson.classroomStudentId && lesson.classroomStudentId !== credential.studentId)) return;
    const apply = item => {
      item.classroomStudentId = credential.studentId;
      item.classroomCredentialId = credential.id;
      item.classroomPracticePolicy = credential.practicePolicy;
    };
    apply(lesson);
    await updateLesson(lesson.id, apply);
    if (activeLesson?.id === lesson.id) window.CopeakClassroomPractice?.applyPolicy(credential.practicePolicy);
    refreshLibrary();
    await resumeCredentialResults(credential);
  }

  async function resumeCredentialResults(credential) {
    if (Date.parse(credential.expiresAt) <= Date.now()) return;
    // Include pending journals whose first queue write was interrupted.
    await recover();
    const database = await openSyncDb();
    const resumed = await new Promise((resolve, reject) => {
      const tx = database.transaction('results', 'readwrite');
      const store = tx.objectStore('results');
      const rows = [];
      const request = store.getAll();
      request.onsuccess = () => {
        for (const row of request.result) {
          if (row.transport !== 'direct' || row.studentId !== credential.studentId ||
              row.result.assignmentId !== credential.assignmentId ||
              row.credentialId === credential.id ||
              !(row.status === 'pending' ||
                (row.status === 'blocked' && row.error === 'credential_expired'))) continue;
          const updated = { ...row, credentialId: credential.id,
            status: 'pending', error: null, attempts: 0, nextAttemptAt: 0 };
          store.put(updated);
          rows.push(updated);
        }
      };
      tx.oncomplete = () => resolve(rows);
      tx.onerror = tx.onabort = () => reject(tx.error);
    });
    for (const row of resumed) await saveOutcome(row, 'pending');
    if (resumed.length) await flush(true);
  }

  function prepareResult(lesson, log) {
    if (!isClassroomLesson(lesson)) return;
    const practice = log.classroomPractice || {};
    const result = {
      resultId: crypto.randomUUID(),
      assignmentId: lesson.classroomAssignmentId,
      accuracy: Number(log.score),
      wpm: Number(log.wpm),
      comprehension: Number(log.comp),
      practiceMode: practice.practiceMode || (log.mode === 'memo' ? 'vanish' : log.mode || 'reading'),
      pacedTargetWpm: practice.pacedTargetWpm ?? null,
      vanishLevel: practice.vanishLevel ?? null
    };
    // Commit this journal with local history before any network call.
    // Recovery reads only explicitly marked new results.
    log.classroomSync = {
      result,
      credentialId: lesson.classroomCredentialId || null,
      studentId: lesson.classroomStudentId || null,
      transport: lesson.classroomCredentialId ? 'direct' : 'legacy',
      status: 'pending'
    };
  }

  async function onHistorySaved(lessonId, log) {
    const journal = log.classroomSync;
    if (!journal) return;
    if (journal.transport === 'direct') {
      await updateQueue({
        ...journal,
        resultId: journal.result.resultId,
        lessonId,
        attempts: 0,
        nextAttemptAt: 0
      });
      refreshLibrary();
      await flush(true);
      return;
    }
    const lesson = activeLesson;
    if (lesson?.id === lessonId && classroomOrigins.has(lesson.classroomOrigin) &&
        window.opener && !window.opener.closed) {
      window.opener.postMessage({
        type: 'copeak-classroom-result',
        ...journal.result,
        submittedAt: new Date(log.timestamp).toISOString()
      }, lesson.classroomOrigin);
    } else {
      await updateLesson(lessonId, item => {
        const entry = item.history?.find(h => h.classroomSync?.result.resultId === journal.result.resultId);
        if (entry) entry.classroomSync.status = 'reconnect';
      });
      showStatus('⚠ Classroomからこの課題を一度開き直すと、次の音読から自動同期できます');
      refreshLibrary();
    }
  }

  async function saveOutcome(row, status, error) {
    const updated = { ...row, status, error: error || null };
    if (status === 'pending') {
      updated.attempts = (row.attempts || 0) + 1;
      updated.nextAttemptAt = Date.now() + Math.min(300000, 2000 * 2 ** Math.min(updated.attempts, 7));
    }
    const saved = await updateQueue(updated);
    await updateLesson(saved.lessonId, lesson => {
      const log = lesson.history?.find(h => h.classroomSync?.result.resultId === saved.resultId);
      if (log && (log.classroomSync.status !== 'synced' || saved.status === 'synced')) {
        log.classroomSync.status = saved.status;
        log.classroomSync.error = saved.error || null;
        log.classroomSync.credentialId = saved.credentialId;
      }
    });
    refreshLibrary();
  }

  async function flush(force = false) {
    if (draining) { drainAgain = true; forceAgain ||= force; return; }
    if (navigator.onLine === false) return;
    draining = true;
    try {
      const rows = await dbOperation('results', 'readonly', store => store.getAll());
      for (const row of rows) {
        if (row.status !== 'pending' || (!force && row.nextAttemptAt > Date.now())) continue;
        const credential = await dbOperation('credentials', 'readonly', store => store.get(row.credentialId));
        if (!credential || credential.assignmentId !== row.result.assignmentId || credential.studentId !== row.studentId) {
          await saveOutcome(row, 'blocked', 'credential_missing');
          continue;
        }
        let response;
        let body;
        try {
          response = await fetch(endpoint, {
            method: 'POST', signal: AbortSignal.timeout(15000), credentials: 'omit',
            headers: { 'Content-Type': 'application/json', 'x-copeak-submission-token': credential.token },
            body: JSON.stringify(row.result)
          });
          body = await response.json();
        } catch {
          await saveOutcome(row, 'pending', 'network_error');
          showStatus('⚠ 音読結果を端末に保存しました。通信復旧時に同期します');
          break;
        }
        if (response.ok && body.status === 'synced' && body.resultId === row.resultId) {
          await saveOutcome(row, 'synced');
          if (activeLesson?.id === row.lessonId) showStatus('✓ Classroom Synced');
          if (window.opener && !window.opener.closed && classroomOrigins.has(launch.origin)) {
            window.opener.postMessage({
              type: 'copeak-classroom-direct-synced',
              assignmentId: row.result.assignmentId,
              resultId: row.resultId,
              nonce: launch.nonce
            }, launch.origin);
          }
        } else if (response.status === 401 && body.error === 'credential_expired') {
          await saveOutcome(row, 'blocked', 'credential_expired');
          if (activeLesson?.id === row.lessonId) {
            showStatus('⚠ 同期の認証情報が期限切れです。Classroomからこの課題を開き直してください');
          }
        } else if ([400, 401, 403, 409, 413].includes(response.status)) {
          await saveOutcome(row, 'blocked', body.error || 'submission_rejected');
          if (activeLesson?.id === row.lessonId) showStatus('⚠ 同期できません。Classroomで期限と課題設定を確認してください');
        } else {
          await saveOutcome(row, 'pending', body.error || 'service_unavailable');
          break;
        }
      }
    } finally {
      draining = false;
      if (drainAgain) {
        const retryForce = forceAgain;
        drainAgain = false;
        forceAgain = false;
        void flush(retryForce).catch(reportStorageError);
      }
    }
  }

  async function recover() {
    if (typeof db === 'undefined' || !db) return;
    const lessons = await new Promise((resolve, reject) => {
      const tx = db.transaction('CustomLessons', 'readonly');
      const request = tx.objectStore('CustomLessons').getAll();
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    for (const lesson of lessons) {
      for (const log of lesson.history || []) {
        const journal = log.classroomSync;
        if (journal?.transport !== 'direct' || journal.status !== 'pending') continue;
        const existing = await dbOperation('results', 'readonly', store => store.get(journal.result.resultId));
        if (existing) {
          if (existing.status !== 'pending') await saveOutcome(existing, existing.status, existing.error);
          continue;
        }
        await updateQueue({
          ...journal,
          resultId: journal.result.resultId,
          lessonId: lesson.id,
          attempts: 0,
          nextAttemptAt: 0
        });
      }
    }
  }

  function reportStorageError() {
    showStatus('⚠ Classroom同期用データを保存できません。端末の空き容量を確認してください');
  }

  async function onLessonOpened(lesson) {
    activeLesson = lesson;
    if (isClassroomLesson(lesson)) {
      if (receivedCredential && lesson.classroomAssignmentId === launch.assignmentId &&
          (!launch.studentId || lesson.classroomStudentId === launch.studentId)) {
        await attachCredential(lesson, receivedCredential);
      }
      if (lesson.classroomPracticePolicy) {
        window.CopeakClassroomPractice?.applyPolicy(lesson.classroomPracticePolicy);
      } else {
        window.CopeakClassroomPractice?.clearPolicy();
      }
    } else {
      window.CopeakClassroomPractice?.clearPolicy();
    }
    // Recover a history commit interrupted before queue creation.
    if (!startupPromise) startupPromise = recover();
    await startupPromise;
    await flush();
  }

  window.addEventListener('message', async event => {
    if (event.source !== window.opener || !classroomOrigins.has(event.origin) ||
        event.origin !== launch.origin) return;
    const message = event.data;
    if (message?.type === 'copeak-classroom-credential' &&
        message.nonce === launch.nonce && launch.nonce) {
      const credential = message.credential;
      if (!credential || credential.assignmentId !== launch.assignmentId ||
          credential.studentId !== launch.studentId || !uuid.test(credential.id || '') ||
          !/^[0-9a-f]{64}$/.test(credential.token || '') ||
          !Number.isFinite(Date.parse(credential.expiresAt))) return;
      try {
        await dbOperation('credentials', 'readwrite', store => store.put(credential));
        receivedCredential = credential;
        if (activeLesson) await attachCredential(activeLesson, credential);
        window.opener.postMessage({
          type: 'copeak-classroom-credential-received',
          nonce: launch.nonce,
          assignmentId: launch.assignmentId
        }, event.origin);
      } catch {
        reportStorageError();
      }
    } else if (message?.type === 'copeak-classroom-saved' && uuid.test(message.resultId || '')) {
      // Update only the matching legacy result.
      if (activeLesson?.classroomAssignmentId !== message.assignmentId) return;
      try {
        await updateLesson(activeLesson.id, lesson => {
          const log = lesson.history?.find(h => h.classroomSync?.result.resultId === message.resultId);
          if (log?.classroomSync.transport === 'legacy') log.classroomSync.status = 'synced';
        });
        refreshLibrary();
      } catch {
        reportStorageError();
      }
    }
  });

  if (launch.nonce && uuid.test(launch.assignmentId || '') &&
      classroomOrigins.has(launch.origin) && window.opener && !window.opener.closed) {
    window.opener.postMessage({
      type: 'copeak-classroom-sync-ready',
      assignmentId: launch.assignmentId,
      nonce: launch.nonce
    }, launch.origin);
  }

  window.addEventListener('online', () => void flush(true).catch(reportStorageError));
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') void flush().catch(reportStorageError);
  });
  window.addEventListener('copeak-storage-ready', () => {
    if (!startupPromise) startupPromise = recover();
    void startupPromise.then(() => flush()).catch(reportStorageError);
  });

  window.CopeakDirectSync = { prepareResult, onHistorySaved, onLessonOpened, flush };
})();
