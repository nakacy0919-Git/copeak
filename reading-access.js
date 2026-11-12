/* Copeak entrance reading development gate.
   UI access control for a shared four-digit PIN; not a security boundary for public files. */
(() => {
  'use strict';
  const storageKey = 'copeak-reading-dev-authorized-v1';
  const gate = document.getElementById('readingGate');
  const app = document.getElementById('readingApp');
  const form = document.getElementById('readingAccessForm');
  const pin = document.getElementById('readingAccessPin');
  const message = document.getElementById('readingAccessError');
  const submit = document.getElementById('readingAccessSubmit');
  if (!gate || !app || !form || !pin || !message || !submit) return;

  let loading = false;
  const loadScript = src => new Promise((resolve, reject) => {
    const el = document.createElement('script');
    el.src = src;
    el.onload = resolve;
    el.onerror = () => reject(new Error('教材の読み込みに失敗しました。'));
    document.body.appendChild(el);
  });

  async function revealStudio() {
    if (loading) return;
    loading = true;
    submit.disabled = true;
    gate.hidden = true;
    app.hidden = false;
    try {
      // The reading data and learning interface are requested only after PIN entry.
      await loadScript('grammar-print-core.js?v=20261112-1');
      await loadScript('reading-entrance.js?v=20261112-desk2');
    } catch (error) {
      app.hidden = true;
      gate.hidden = false;
      message.textContent = '教材の読み込みに失敗しました。画面を再読み込みしてください。';
      loading = false;
      submit.disabled = false;
    }
  }

  form.addEventListener('submit', event => {
    event.preventDefault();
    if (pin.value.trim() !== '9999') {
      message.textContent = 'パスワードが違います。もう一度入力してください。';
      pin.value = '';
      pin.focus();
      return;
    }
    message.textContent = '';
    try { sessionStorage.setItem(storageKey, '1'); } catch (_) {}
    revealStudio();
  });
  pin.addEventListener('input', () => { message.textContent = ''; });
  let authorized = false;
  try { authorized = sessionStorage.getItem(storageKey) === '1'; } catch (_) {}
  if (authorized) revealStudio();
  else { gate.hidden = false; app.hidden = true; }
})();
