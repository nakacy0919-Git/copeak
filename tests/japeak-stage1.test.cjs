'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const app = fs.readFileSync(path.join(root, 'js/japeak-app.js'), 'utf8');
const menu = fs.readFileSync(path.join(root, 'js/japeak-menu-main.js'), 'utf8');
const html = fs.readFileSync(path.join(root, 'japeak.html'), 'utf8');

test('Japeak application and menu scripts parse as JavaScript', () => {
  assert.doesNotThrow(() => new vm.Script(app));
  assert.doesNotThrow(() => new vm.Script(menu));
});

test('recognized speech is rendered as plain text, never as HTML', () => {
  assert.match(app, /voiceOutput\.textContent = (?:currentText|latestTranscriptText)/);
  assert.doesNotMatch(app, /voiceOutput\.innerHTML\s*=\s*(?:currentText|latestTranscriptText)/);
});

test('spoken text and URL language selection use safe code paths', () => {
  assert.match(app, /Object\.prototype\.hasOwnProperty\.call\(langCodeMap, urlLang\)/);
  assert.match(app, /encodeURIComponent\(currentLesson\.id\)/);
  assert.match(app, /encodeURIComponent\(currentLang\)/);
});

test('duplicate B1 prevention lessons are registered once', () => {
  const matches = app.match(/allJapeakData = allJapeakData\.concat\(japeakB1PreventIllnessData\)/g) || [];
  assert.equal(matches.length, 1);
});

test('previous and next navigation is limited to the selected category', () => {
  assert.match(app, /return allJapeakData\.filter\(item => item\.category === currentLesson\.category\)/);
  assert.match(app, /const nextLesson = categoryLessons\[position \+ direction\]/);
  assert.match(app, /button\.disabled = disabled/);
});

test('moving to another lesson cancels active recognition and audio', () => {
  assert.match(app, /recognition\.abort\(\)/);
  assert.match(app, /currentAudio\.pause\(\)/);
  assert.match(app, /stopCurrentPractice\(\);[\s\S]*?currentLesson = nextLesson/);
});

test('Japanese is supported consistently in menu and practice selection', () => {
  assert.match(html, /<option value="ja">日本語<\/option>/);
  assert.match(html, /code: 'ja', native: '日本語'/);
  assert.match(app, /ja:'ja-JP'/);
  assert.match(menu, /menuLang === 'ja'/);
});

test('microphone errors provide specific user guidance', () => {
  for (const error of ['not-allowed', 'service-not-allowed', 'audio-capture', 'no-speech', 'network', 'language-not-supported']) {
    assert.ok(app.includes(`'${error}':`), `Missing message for ${error}`);
  }
});
