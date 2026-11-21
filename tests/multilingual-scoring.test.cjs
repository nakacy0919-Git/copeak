'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const scoring = require('../js/multilingual-scoring.js');

function tokens(text, lang) {
    return scoring.buildComparisonUnits(text, lang).map(unit => unit.token);
}

for (const [lang, source, transcript] of [
    ['ko-KR', '안녕하세요 저는 한국어를 공부하고 있습니다.', '안녕하세요저는한국어를공부하고있습니다'],
    ['ja-JP', 'わたしは日本語を勉強しています。', 'わたし は 日本語を 勉強しています'],
    ['zh-CN', '我喜欢学习中文。', '我 喜欢 学习 中文'],
    ['th-TH', 'ฉันชอบเรียนภาษาไทย', 'ฉัน ชอบ เรียน ภาษาไทย']
]) {
    test(lang + ': whitespace differences do not change comparison', () => {
        assert.deepEqual(tokens(source, lang), tokens(transcript, lang));
        assert.equal(scoring.usesGraphemeAlignment(lang), true);
    });
}

test('non-English, space-delimited languages keep their existing word scorer', () => {
    for (const lang of ['es-ES', 'pt-PT', 'fr-FR', 'de-DE', 'ar-SA', 'hi-IN']) {
        assert.equal(scoring.usesGraphemeAlignment(lang), false);
    }
});

test('English recognition and mic-check thresholds remain unchanged', () => {
    for (const lang of ['en-US', 'en-GB']) {
        assert.equal(scoring.usesGraphemeAlignment(lang), false);
        assert.equal(scoring.micCheckPassRatio(lang, .60), .60);
    }
});

test('non-English readiness thresholds are distinct', () => {
    for (const lang of ['ko-KR', 'ja-JP', 'es-ES']) {
        assert.equal(scoring.micCheckPassRatio(lang, .60), .50);
    }
});

test('NFKC folds full-width Latin characters', () => {
    assert.deepEqual(tokens('ＡＩが好き', 'ja-JP'), tokens('AIが好き', 'ja-JP'));
});

test('a different spoken phrase is not considered identical', () => {
    assert.notDeepEqual(tokens('한국어를 공부합니다', 'ko-KR'), tokens('영어를 공부합니다', 'ko-KR'));
});

test('transcript spacing is retained for display while punctuation is unscored', () => {
    assert.equal(scoring.segmentForDisplay('한 국!', 'ko-KR').map(x => x.text).join(''), '한 국!');
    assert.equal(tokens('한 국!', 'ko-KR').length, 2);
});
