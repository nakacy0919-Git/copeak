// Copeak standalone Quick Share repair (2026-11).
// Loaded after app-bundle.js so ?l= reception and the SHARE button use one working endpoint.
// Existing legacy Appwrite share IDs remain readable through the previous loader.
(function installReliableQuickShare() {
  'use strict';

  const API = 'https://sxcbudhcxiblpdzpgfep.supabase.co/functions/v1/copeak-quick-share';
  const oldReader = typeof window.fetchQuickShareLesson === 'function'
    ? window.fetchQuickShareLesson
    : null;

  function payload(lesson) {
    let savedFormUrl = '';
    try { savedFormUrl = localStorage.getItem('copeak_teacher_form_url') || ''; } catch {}
    return {
      title: String(lesson.title || 'Shared Lesson').replace(/^🔗\s*/, ''),
      eng: lesson.eng || '',
      jpn: lesson.jpn || '',
      lang: lesson.lang || 'en-US',
      type: lesson.type || 'standard',
      dialogue: Array.isArray(lesson.dialogue) ? lesson.dialogue : [],
      formUrl: lesson.formUrl || savedFormUrl || ''
    };
  }

  async function requestJson(url, options = {}) {
    const timeout = new AbortController();
    const timer = setTimeout(() => timeout.abort(), 15000);
    try {
      const response = await fetch(url, {
        ...options,
        signal: timeout.signal,
        headers: { Accept: 'application/json', ...(options.headers || {}) }
      });
      let data = null;
      try { data = await response.json(); } catch {}
      if (!response.ok || !data || data.ok !== true) {
        const reason = data?.reason || ('HTTP_' + response.status);
        const error = new Error(reason);
        error.code = reason;
        throw error;
      }
      return data;
    } finally {
      clearTimeout(timer);
    }
  }

  async function createLessonShare(lesson) {
    if (!lesson || typeof lesson !== 'object') throw new Error('invalid_lesson');
    return requestJson(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload(lesson))
    });
  }

  async function readLessonShare(shareId) {
    const id = String(shareId || '').trim();
    if (!id) throw new Error('not_found');
    if (/^s_[A-Za-z0-9_-]{11}$/.test(id)) {
      const result = await requestJson(API + '/' + encodeURIComponent(id));
      return result.lesson;
    }
    // Old Appwrite 24-hour links keep their original handling where available.
    if (oldReader) return oldReader(id);
    throw new Error('not_found');
  }

  async function copyLink(url) {
    if (navigator.clipboard && window.isSecureContext) {
      try { await navigator.clipboard.writeText(url); return true; } catch {}
    }
    try {
      const box = document.createElement('textarea');
      box.value = url;
      box.setAttribute('readonly', '');
      box.style.cssText = 'position:fixed;left:-9999px;opacity:0;';
      document.body.appendChild(box);
      box.select();
      const result = document.execCommand('copy');
      box.remove();
      return !!result;
    } catch {
      return false;
    }
  }

  function status(message) {
    if (typeof window.showMsg === 'function') window.showMsg(message);
  }

  async function generateShare() {
    const lesson = (typeof currentCustomLesson !== 'undefined') ? currentCustomLesson : null;
    if (!lesson) {
      status('共有する教材を選んでください。');
      return null;
    }
    status('☁️ 短縮リンクを作成しています…');
    try {
      const result = await createLessonShare(lesson);
      const shortUrl = window.location.origin + window.location.pathname +
        '?l=' + encodeURIComponent(result.id);
      const copied = await copyLink(shortUrl);
      if (copied) {
        status('🔗 短縮リンクをコピーしました！（24時間有効）');
      } else if (typeof window.showQuickShareLinkFallback === 'function') {
        window.showQuickShareLinkFallback(shortUrl);
      } else {
        window.prompt('短縮リンクをコピーしてください', shortUrl);
      }
      return result;
    } catch (error) {
      console.error('[Copeak Quick Share] short link creation failed:', error);
      let label = '短縮リンクを作成できませんでした。通信状態を確認して再度お試しください。';
      if (error?.code === 'payload_too_large' || error?.code === 'invalid_lesson') {
        label = '教材の容量や入力内容を確認してください。';
      } else if (error?.code === 'rate_limited') {
        label = '短時間に多くのリンクが作成されました。少し時間をおいてお試しください。';
      }
      status('⚠️ ' + label);
      return null;
    }
  }

  window.createQuickShare = createLessonShare;
  window.fetchQuickShareLesson = readLessonShare;
  window.generateShareLink = generateShare;
  window.generateQuickShareLink = generateShare;
})();
