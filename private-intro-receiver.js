/* Private Classroom -> Copeak introduction bridge.
 * The student's text is delivered by verified window messaging, never in a URL.
 * No persistence occurs here; the existing Copeak library receives the lesson.
 */
(function (root) {
  'use strict';

  const TRUSTED_CLASSROOM_ORIGINS = Object.freeze([
    'https://cc.pic-speak-story.com',
    'https://copeak-classroom.vercel.app'
  ]);
  const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  const MAX_TEXT_LENGTH = 6000;

  function parseContext(params) {
    if (!params || params.get('self_intro_handoff') !== '1' ||
        params.get('source') !== 'copeak-classroom' || params.has('eng')) {
      throw new Error('Invalid private introduction launch');
    }
    const origin = params.get('classroom_origin');
    const assignmentId = params.get('classroom_assignment');
    const studentId = params.get('classroom_student');
    const nonce = params.get('classroom_launch');
    if (!TRUSTED_CLASSROOM_ORIGINS.includes(origin) || !uuid.test(assignmentId || '') ||
        !uuid.test(studentId || '') || !uuid.test(nonce || '')) {
      throw new Error('Untrusted classroom launch metadata');
    }
    return { origin, assignmentId, studentId, nonce };
  }

  function receive({
    params,
    opener,
    events,
    onPayload,
    timeoutMs = 60000,
    schedule = setTimeout,
    unschedule = clearTimeout
  }) {
    if (!opener || typeof opener.postMessage !== 'function' ||
        !events || typeof events.addEventListener !== 'function' ||
        typeof events.removeEventListener !== 'function' ||
        typeof onPayload !== 'function') {
      return Promise.reject(new Error('Classroom window connection unavailable'));
    }
    let launch;
    try { launch = parseContext(params); }
    catch (error) { return Promise.reject(error); }

    const { origin, assignmentId, studentId, nonce } = launch;
    return new Promise((resolve, reject) => {
      let state = 'waiting';
      let timer = null;
      function cleanup() {
        events.removeEventListener('message', onMessage);
        if (timer !== null) unschedule(timer);
      }
      function onMessage(event) {
        if (state !== 'waiting' || event.source !== opener || event.origin !== origin) return;
        const data = event.data;
        if (!data || data.type !== 'copeak-classroom-intro-payload' ||
            data.nonce !== nonce || data.assignmentId !== assignmentId ||
            data.studentId !== studentId || typeof data.text !== 'string' ||
            !data.text.trim() || data.text.length > MAX_TEXT_LENGTH) return;
        // Defense in depth: student text is later rendered by the legacy HTML
        // reading view. Remove tag delimiters even if the Classroom client
        // failed to sanitize input.
        const safeText = data.text.replace(/[<>]/g, '').replace(/[\u0000-\u001f\u007f]/g, ' ');
        if (!safeText.trim()) return;
        state = 'importing';
        cleanup();
        // This promise also controls the acknowledgement:
        // ack only after Copeak's IndexedDB import resolves successfully.
        Promise.resolve().then(() => onPayload(safeText)).then(() => {
          state = 'done';
          opener.postMessage({ type: 'copeak-classroom-intro-ack', nonce, assignmentId, ok: true }, origin);
          resolve();
        }, error => {
          state = 'failed';
          try {
            opener.postMessage({ type: 'copeak-classroom-intro-ack', nonce, assignmentId, ok: false }, origin);
          } catch (_ignored) {}
          reject(error);
        });
      }
      events.addEventListener('message', onMessage);
      timer = schedule(() => {
        if (state !== 'waiting') return;
        state = 'timeout';
        cleanup();
        reject(new Error('Timed out receiving Classroom introduction'));
      }, timeoutMs);
      try {
        opener.postMessage({ type: 'copeak-classroom-intro-ready', nonce, assignmentId, studentId }, origin);
      } catch (error) {
        state = 'failed';
        cleanup();
        reject(error);
      }
    });
  }

  function listenForEnd({ params, opener, events, onEnd }) {
    const { origin, assignmentId, studentId, nonce } = parseContext(params);
    if (!opener || !events || typeof onEnd !== 'function') {
      throw new Error('Invalid private session cleanup listener');
    }
    let active = true;
    function stop() {
      if (!active) return;
      active = false;
      events.removeEventListener('message', onEndMessage);
      events.removeEventListener('pagehide', stop);
    }
    function onEndMessage(event) {
      if (!active || event.source !== opener || event.origin !== origin) return;
      const payload = event.data;
      if (!payload || payload.type !== 'copeak-classroom-intro-end' ||
          payload.nonce !== nonce || payload.assignmentId !== assignmentId ||
          payload.studentId !== studentId) return;
      stop();
      onEnd();
    }
    events.addEventListener('message', onEndMessage);
    events.addEventListener('pagehide', stop);
    return stop;
  }

  const api = { receive, parseContext, listenForEnd, TRUSTED_CLASSROOM_ORIGINS, MAX_TEXT_LENGTH };
  root.CopeakPrivateIntro = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
