/* Copeak Vocabulary Check v7 — optional home shortcut.
   Uses browser-only localStorage; does not call Classroom or external services. */
(function () {
  'use strict';
  const KEY = 'copeak_chunk_diagnosis_v1';
  function currentLanguage() {
    return document.getElementById('appLangSelector')?.value || 'ja';
  }
  function latestResult() {
    try {
      const arr = JSON.parse(localStorage.getItem(KEY) || '[]');
      return Array.isArray(arr) ? arr.find(x => x?.version === 1 &&
        ['copeak-chunks-prototype-2026-10', 'copeak-chunks-context-2026-10'].includes(x.bank) &&
        Number.isInteger(x.level) && x.level >= 1 && x.level <= 8) : null;
    } catch (_) { return null; }
  }
  function update() {
    const hub = document.getElementById('copeakHomeHub');
    if (!hub) return false;
    const lang = currentLanguage();
    const ja = lang === 'ja';
    const result = latestResult();
    const metrics = hub.querySelector('.cp-home-extras .cp-record-metrics');
    if (metrics) {
      let cell = metrics.querySelector('.cp-vocab-stat');
      if (!cell) {
        cell = document.createElement('div');
        cell.className = 'cp-record-stat cp-vocab-stat';
        cell.innerHTML = '<a id="cpVocabularyCheckLink" class="cp-vocab-link">' +
          '<span id="cpVocabularyLabel" class="cp-record-stat-label"></span>' +
          '<strong id="cpVocabularyLevel"></strong><small id="cpVocabularyDetail"></small></a>';
        metrics.appendChild(cell);
      }
      const a = cell.querySelector('a');
      a.href = 'vocabulary-check.html?ui=' + (ja ? 'ja' : 'en');
      a.setAttribute('aria-label', ja ? 'チャンク語彙診断を開く' : 'Open vocabulary check');
      cell.querySelector('#cpVocabularyLabel').textContent = ja ? 'CHUNK 語彙力' : 'CHUNK VOCABULARY';
      cell.querySelector('#cpVocabularyLevel').textContent = result ? 'Lv.' + result.level + ' / 8' : (ja ? '未診断' : 'Not checked');
      cell.querySelector('#cpVocabularyDetail').textContent = result ? (ja ? '暫定レベル · 再診断 ↗' : 'Provisional · Recheck ↗') : (ja ? '25問でチェック ↗' : '25-question check ↗');
      return true;
    }
    // Current production Copeak home uses cp-home-extras without cp-record-metrics.
    const extras = hub.querySelector('.cp-home-extras');
    if (!extras) return false;
    let card = extras.querySelector('.cp-extra-vocab');
    if (!card) {
      card = document.createElement('div');
      card.className = 'cp-extra cp-extra-vocab';
      const copy = document.createElement('div');
      const title = document.createElement('h3');
      const note = document.createElement('p');
      const link = document.createElement('a');
      link.className = 'cp-extra-link';
      link.id = 'cpVocabularyCheckLink';
      copy.append(title, note);
      card.append(copy, link);
      extras.appendChild(card);
    }
    card.querySelector('h3').textContent = ja ? '🧩 チャンク語彙力診断' : '🧩 Chunk Vocabulary Check';
    card.querySelector('p').textContent = result ?
      ((ja ? '前回の暫定レベル：' : 'Last provisional level: ') + 'Lv.' + result.level + '/8') :
      (ja ? '例文で英語表現を確認 · 5,000件の候補バンク' : 'Learn English in context · 5,000 candidate items');
    const link = card.querySelector('a');
    link.href = 'vocabulary-check.html?ui=' + (ja ? 'ja' : 'en');
    link.textContent = ja ? '診断を始める' : 'Start check';
    link.setAttribute('aria-label', ja ? 'チャンク語彙診断を開く' : 'Open vocabulary check');
    return true;
  }
  function boot() {
    update();
    [100, 500, 1600].forEach(ms => setTimeout(update, ms));
    window.addEventListener('pageshow', update);
    window.addEventListener('focus', update);
    window.addEventListener('copeak:vocabulary-updated', update);
    document.getElementById('appLangSelector')?.addEventListener('change', update);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, {once:true});
  else boot();
})();
