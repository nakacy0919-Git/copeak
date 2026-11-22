'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const utils = require('../js/japeak-speech-utils.js');
const root = path.resolve(__dirname, '..');
const app = fs.readFileSync(path.join(root, 'js/japeak-app.js'), 'utf8');
const html = fs.readFileSync(path.join(root, 'japeak.html'), 'utf8');

test('stage 2 JavaScript parses and utilities load before application', () => {
    assert.doesNotThrow(() => new vm.Script(app));
    const utilsTag = html.indexOf('src="js/japeak-speech-utils.js"');
    const appTag = html.indexOf('src="js/japeak-app.js"');
    assert.ok(utilsTag >= 0 && appTag > utilsTag);
});

test('NFKC input, katakana, spelling and ruby normalize consistently', () => {
    assert.equal(utils.normalizeJapaneseText('コンニチハ'), 'こんにちは');
    assert.equal(utils.normalizeJapaneseText('有難うございます'), 'ありがとうございます');
    assert.equal(utils.normalizeJapaneseText('すいません'), 'すみません');
    assert.equal(
        utils.normalizeJapaneseText('一緒に学校へ行きます',
            '<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>学校<rt>がっこう</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きます'),
        'いっしょにがっこうへいきます'
    );
});

test('number readings, leading zeroes and common counters are correct', () => {
    assert.equal(utils.normalizeJapaneseText('10000'), 'いちまん');
    assert.equal(utils.normalizeJapaneseText('10,000'), 'いちまん');
    assert.equal(utils.normalizeJapaneseText('１２３４５'), 'いちまんにせんさんびゃくよんじゅうご');
    assert.equal(utils.normalizeJapaneseText('090'), 'ぜろきゅうぜろ');
    assert.equal(utils.normalizeJapaneseText('1人と2人'), 'ひとりとふたり');
    assert.equal(utils.normalizeJapaneseText('3つ'), 'みっつ');
});

test('sentence units preserve ruby annotations and split Japanese punctuation', () => {
    const pieces = utils.splitJapaneseSentencesFromHtml('こんにちは。<ruby>学校<rt>がっこう</rt></ruby>へ行きます！<br>お元気ですか？');
    assert.equal(pieces.length, 3);
    assert.equal(utils.stripRubyMarkup(pieces[1]), '学校へ行きます！');
    assert.equal(pieces[2], 'お元気ですか？');
});

test('string similarity scores exact matches, rejects mismatches, and handles long passages', () => {
    assert.equal(utils.similarityPercent('こんにちは', 'こんにちは'), 100);
    assert.ok(utils.similarityPercent('こんにちは', 'まったく違う') < 50);
    assert.equal(utils.levenshteinDistance('abc', 'axc'), 1);
    assert.equal(utils.similarityPercent('あ'.repeat(1000), 'あ'.repeat(1000)), 100);
});

test('focused practice and speech results use explicit mode and safe rendering', () => {
    assert.match(app, /function getPracticeUnits/);
    assert.match(app, /function setSentenceMode/);
    assert.match(app, /function chooseSentence/);
    assert.match(app, /const unit = sentenceMode \? practiceUnits\[selectedSentenceIndex\] : null/);
    assert.match(app, /voiceOutput\.textContent = latestTranscriptText/);
    assert.doesNotMatch(app, /voiceOutput\.innerHTML\s*=\s*latestTranscriptText/);
    assert.match(app, /finalTranscriptText\.trim\(\) \|\| recentSpeechText\.trim\(\)/);
});

test('mobile recognition uses short sessions and reports recognition failures', () => {
    assert.match(app, /recognition\.continuous = !sentenceMode && !mobileBrowser/);
    assert.match(app, /recognitionFailed = true/);
    assert.match(app, /'language-not-supported'/);
    assert.match(app, /function setRecognitionStatus/);
    assert.match(html, /id="japeak-recognition-status"/);
});

test('accuracy display describes what is actually measured', () => {
    assert.match(html, /認識一致率/);
    assert.match(html, /発音そのものを判定するものではありません/);
    assert.match(html, /id="sentence-practice-tools"/);
});
