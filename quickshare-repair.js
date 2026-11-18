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
        error.httpStatus = response.status;
        throw error;
      }
      return data;
    } catch (error) {
      if (error?.name === 'AbortError') error.code = 'timeout';
      else if (error instanceof TypeError && !error.code) error.code = 'network_error';
      throw error;
    } finally {
      clearTimeout(timer);
    }
  }

  async function createLessonShare(lesson) {
    if (!lesson || typeof lesson !== 'object') throw new Error('invalid_lesson');
    if (lesson.privateIntro === true) throw new Error('private_lesson');
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload(lesson))
    };
    let result;
    try {
      result = await requestJson(API, options);
    } catch (error) {
      // Retry only an explicit temporary server rejection. An interrupted
      // response may already have created a row, so do not retry it blindly.
      if (error.httpStatus !== 503 || error.code !== 'storage_unavailable') throw error;
      await new Promise(resolve => setTimeout(resolve, 500));
      result = await requestJson(API, options);
    }
    if (!/^s_[A-Za-z0-9_-]{11}$/.test(String(result.id || ''))) {
      const error = new Error('invalid_share_response');
      error.code = 'invalid_share_response';
      throw error;
    }
    return result;
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

  // The original app already imports Classic Share URLs via checkUrlParameters.
  // Keep fallback local: no third-party redirect or URL-shortening service.
  function classicShareUrl(lesson) {
    if (lesson?.privateIntro === true) return null;
    const data = payload(lesson);
    if (!data.eng && !data.dialogue.length) return null;
    const params = new URLSearchParams({
      title: data.title, eng: data.eng, lang: data.lang
    });
    if (data.jpn) params.set('jpn', data.jpn);
    if (data.formUrl) {
      if (!/^https:\/\/[^\s]+$/i.test(data.formUrl)) return null;
      params.set('form', data.formUrl);
    }
    if (lesson.audioUrl) params.set('audioUrl', lesson.audioUrl);
    if (data.type === 'dialogue') {
      params.set('type', 'dialogue');
      params.set('dialogue', JSON.stringify(data.dialogue));
    }
    if (/^[A-Za-z0-9_-]{11}$/.test(lesson.youtubeVideoId || '')) {
      params.set('youtube_id', lesson.youtubeVideoId);
      if (lesson.youtubeStartSeconds != null) params.set('youtube_start', String(lesson.youtubeStartSeconds));
      if (lesson.youtubeEndSeconds != null) params.set('youtube_end', String(lesson.youtubeEndSeconds));
      if (lesson.youtubeLoop) params.set('youtube_loop', '1');
    }
    if (Array.isArray(lesson.scoreExclusions) && lesson.scoreExclusions.length) {
      params.set('score_exclusions', JSON.stringify(lesson.scoreExclusions));
    }
    const focus = window.CopeakFocus.clean(lesson.focusRanges, lesson.eng);
    if (focus.length) params.set('focus', JSON.stringify(focus));
    const url = window.location.origin + window.location.pathname + '?' + params.toString();
    // Long request targets can be rejected by browsers, proxies or hosting.
    return url.length <= 7000 ? url : null;
  }

  function showManualLink(url, message) {
    if (typeof window.showQuickShareLinkFallback === 'function') {
      window.showQuickShareLinkFallback(url);
      const modal = document.getElementById('quickShareLinkModal');
      const heading = modal?.querySelector('h3');
      const description = modal?.querySelector('p');
      if (heading) heading.textContent = '教材共有リンク';
      if (description) description.textContent = message;
    } else {
      window.prompt(message, url);
    }
  }

  let sharing = false;
  async function generateShare() {
    const lesson = (typeof currentCustomLesson !== 'undefined') ? currentCustomLesson : null;
    if (!lesson) {
      status('共有する教材を選んでください。');
      return null;
    }
    if (lesson.privateIntro === true) {
      status('🔒 この自己紹介教材は個人用のため共有できません。');
      return null;
    }
    if (sharing) return null;
    sharing = true;
    status('☁️ 短縮リンクを作成しています…');
    try {
      const result = await createLessonShare(lesson);
      const shortUrl = window.location.origin + window.location.pathname +
        '?l=' + encodeURIComponent(result.id) + (() => { const focus = window.CopeakFocus.clean(lesson.focusRanges, lesson.eng); return focus.length ? '&focus=' + encodeURIComponent(JSON.stringify(focus)) : ''; })();
      const copied = await copyLink(shortUrl);
      if (copied) {
        status('🔗 短縮リンクをコピーしました！（24時間有効）');
      } else {
        showManualLink(shortUrl, '短縮リンク（24時間有効）をコピーしてください。');
      }
      return result;
    } catch (error) {
      const code = error?.code || 'unknown';
      console.error('[Copeak Quick Share] short link creation failed:', code, error?.httpStatus || '');
      let label = '短縮リンクを作成できませんでした。';
      if (error?.code === 'payload_too_large' || error?.code === 'invalid_lesson') {
        label = '教材の容量や入力内容を確認してください。';
      } else if (error?.code === 'rate_limited') {
        label = '短時間に多くのリンクが作成されました。少し時間をおいてお試しください。';
      }
      // Classic Share embeds the lesson in the URL and does not write to
      // storage. Do not silently attempt it for invalid lesson input.
      if (!['invalid_lesson', 'invalid_json', 'payload_too_large'].includes(code)) {
        let longUrl = null;
        try { longUrl = classicShareUrl(lesson); } catch {}
        if (longUrl) {
          const explanation = '短縮リンクが利用できないため、通常リンクを作成しました。教材内容がURLに含まれ、24時間の期限はありません。共有先にご注意ください。';
          status('⚠️ ' + explanation);
          showManualLink(longUrl, explanation + ' 下のリンクをコピーしてください。');
          return { ok: true, mode: 'classic', url: longUrl };
        }
        if (code === 'storage_unavailable') label = '共有サーバーの保存処理に失敗しました。';
        else if (code === 'timeout' || code === 'network_error') label = '共有サーバーと通信できませんでした。';
        else if (code === 'rate_limited') label = '共有回数の上限に達しました。';
        label += ' 通常リンクを作成できないため、教材を短くするか、時間をおいて再度お試しください。';
      }
      status('⚠️ ' + label);
      return null;
    } finally {
      sharing = false;
    }
  }

  window.createQuickShare = createLessonShare;
  window.fetchQuickShareLesson = readLessonShare;
  window.generateShareLink = generateShare;
  window.generateQuickShareLink = generateShare;
})();
