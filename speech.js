// ==========================================
// speech.js: 文字起こし、照合、および内容理解度とSLAフィードバック
// ==========================================

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let mainRecognition = null;
let isMainRecording = false;
let accumulatedTranscript = '';
let currentInterim = '';
let recordStartTime = 0;

// ★ 音声認識の安定化用
let recognitionBase = '';
let recognitionFinishing = false;
let recognitionFinalized = false;
let recognitionRecovering = false;
let recognitionHasResult = false;
let recognitionRetryCount = 0;
let recognitionPassiveRestartCount = 0;
let recognitionStartTimer = null;
let recognitionSpeechTimer = null;
let recognitionFinishTimer = null;

const RECOGNITION_START_TIMEOUT_MS = 8000;
const RECOGNITION_SPEECH_TIMEOUT_MS = 15000;
const RECOGNITION_FINISH_WAIT_MS = 1500;
const MAX_RECOGNITION_RETRIES = 2;
const MAX_PASSIVE_RESTARTS = 3;


// ==========================================
// ★ 多言語対応: 音声認識結果・教材本文の共通分割 / 正規化
// ==========================================
function getCurrentLessonLang() {
    return (typeof currentCustomLesson !== 'undefined' && currentCustomLesson && currentCustomLesson.lang)
        ? currentCustomLesson.lang
        : 'en-US';
}

function normalizeSpeechToken(token, lang = 'en-US') {
    if (!token) return '';

    let normalized = token.normalize('NFKC');

    try {
        normalized = normalized.toLocaleLowerCase(lang);
    } catch (e) {
        normalized = normalized.toLowerCase();
    }

    // Unicodeの文字・結合文字・数字のみを判定対象にする。
    // apostrophe / hyphen は英語等でASR表記揺れが起こりやすいため比較時には除去。
    normalized = normalized
        .replace(/[’'\-‐-‒–—―]/g, '')
        .replace(/[^\p{L}\p{M}\p{N}]/gu, '');

    return normalized;
}

function segmentSpeechText(text, lang = 'en-US') {
    const sourceText = String(text || '');
    if (!sourceText) return [];

    // 現行ブラウザでは Intl.Segmenter を第一選択。
    // 日本語・中国語・韓国語・タイ語など、空白で単語が分かれない言語にも対応する。
    if (typeof Intl !== 'undefined' && typeof Intl.Segmenter === 'function') {
        try {
            const segmenter = new Intl.Segmenter(lang, { granularity: 'word' });
            return Array.from(segmenter.segment(sourceText)).map(item => ({
                text: item.segment,
                isWord: item.isWordLike === true,
                normalized: item.isWordLike === true ? normalizeSpeechToken(item.segment, lang) : ''
            }));
        } catch (e) {
            console.warn('Intl.Segmenter fallback:', e);
        }
    }

    // fallback: 日本語・中国語・韓国語・タイ語は1文字単位、それ以外は空白単位。
    const hasNoSpaceScript = /[\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af\u0e00-\u0e7f]/u.test(sourceText);

    if (hasNoSpaceScript) {
        return Array.from(sourceText).map(char => {
            const normalized = normalizeSpeechToken(char, lang);
            return {
                text: char,
                isWord: normalized !== '',
                normalized
            };
        });
    }

    return sourceText.split(/(\s+)/).map(part => {
        const normalized = normalizeSpeechToken(part, lang);
        return {
            text: part,
            isWord: normalized !== '',
            normalized
        };
    });
}

// ==========================================
// ★ 英語の数字・序数表現を共通化
// 9th = ninth
// 2012 = two thousand twelve = twenty twelve
// ==========================================

const ENGLISH_SMALL_NUMBERS = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19
};


const ENGLISH_TENS = {
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90
};


const ENGLISH_ORDINALS = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5,
    sixth: 6,
    seventh: 7,
    eighth: 8,
    ninth: 9,
    tenth: 10,
    eleventh: 11,
    twelfth: 12,
    thirteenth: 13,
    fourteenth: 14,
    fifteenth: 15,
    sixteenth: 16,
    seventeenth: 17,
    eighteenth: 18,
    nineteenth: 19,
    twentieth: 20,
    thirtieth: 30,
    fortieth: 40,
    fiftieth: 50,
    sixtieth: 60,
    seventieth: 70,
    eightieth: 80,
    ninetieth: 90
};


function parseEnglishSmallNumber(
    words,
    startIndex
) {

    const first =
        words[startIndex]
            ?.normalized;


    if (!first) {
        return null;
    }


    if (
        Object.prototype.hasOwnProperty.call(
            ENGLISH_SMALL_NUMBERS,
            first
        )
    ) {

        return {
            value:
                ENGLISH_SMALL_NUMBERS[first],

            consumed:
                1
        };
    }


    if (
        Object.prototype.hasOwnProperty.call(
            ENGLISH_TENS,
            first
        )
    ) {

        let value =
            ENGLISH_TENS[first];


        const second =
            words[startIndex + 1]
                ?.normalized;


        if (
            second &&
            Object.prototype.hasOwnProperty.call(
                ENGLISH_SMALL_NUMBERS,
                second
            ) &&
            ENGLISH_SMALL_NUMBERS[second] >= 1 &&
            ENGLISH_SMALL_NUMBERS[second] <= 9
        ) {

            value +=
                ENGLISH_SMALL_NUMBERS[
                    second
                ];


            return {
                value,
                consumed: 2
            };
        }


        return {
            value,
            consumed: 1
        };
    }


    return null;
}


function parseEnglishUnderThousand(
    words,
    startIndex
) {

    const first =
        words[startIndex]
            ?.normalized;


    const second =
        words[startIndex + 1]
            ?.normalized;


    if (
        first &&
        second === 'hundred' &&
        ENGLISH_SMALL_NUMBERS[first] >= 1 &&
        ENGLISH_SMALL_NUMBERS[first] <= 9
    ) {

        let value =
            ENGLISH_SMALL_NUMBERS[first] *
            100;


        let position =
            startIndex + 2;


        if (
            words[position]
                ?.normalized ===
            'and'
        ) {

            position++;
        }


        const rest =
            parseEnglishSmallNumber(
                words,
                position
            );


        if (rest) {

            value +=
                rest.value;


            return {
                value,

                consumed:
                    (
                        position -
                        startIndex
                    ) +
                    rest.consumed
            };
        }


        return {
            value,
            consumed: 2
        };
    }


    return parseEnglishSmallNumber(
        words,
        startIndex
    );
}


function getEnglishNumberComparisonUnit(
    words,
    startIndex
) {

    const current =
        words[startIndex];


    if (!current) {
        return null;
    }


    const raw =
        String(
            current.text || ''
        )
        .normalize('NFKC')
        .toLowerCase()
        .replace(/,/g, '')
        .replace(/’/g, "'")
        .replace(
            /[^\p{L}\p{N}']/gu,
            ''
        );


    // ======================================
    // 9th / 21st / 3rd など
    // ======================================
    const digitOrdinal =
        raw.match(
            /^(\d+)(st|nd|rd|th)$/
        );


    if (digitOrdinal) {

        return {
            token:
                `__ord_${Number(
                    digitOrdinal[1]
                )}__`,

            consumed:
                1,

            sourceWordIndexes: [
                current.wordIndex
            ]
        };
    }


    // ======================================
    // 数字そのもの
    // 2012 / 25 / 100 など
    // ======================================
    if (/^\d+$/.test(raw)) {

        return {
            token:
                `__num_${Number(raw)}__`,

            consumed:
                1,

            sourceWordIndexes: [
                current.wordIndex
            ]
        };
    }


    // ======================================
    // ninth / twentieth など
    // ======================================
    if (
        Object.prototype.hasOwnProperty.call(
            ENGLISH_ORDINALS,
            current.normalized
        )
    ) {

        return {
            token:
                `__ord_${
                    ENGLISH_ORDINALS[
                        current.normalized
                    ]
                }__`,

            consumed:
                1,

            sourceWordIndexes: [
                current.wordIndex
            ]
        };
    }


    // ======================================
    // twenty first / thirty second など
    // ======================================
    if (
        Object.prototype.hasOwnProperty.call(
            ENGLISH_TENS,
            current.normalized
        )
    ) {

        const next =
            words[startIndex + 1];


        if (
            next &&
            Object.prototype.hasOwnProperty.call(
                ENGLISH_ORDINALS,
                next.normalized
            ) &&
            ENGLISH_ORDINALS[
                next.normalized
            ] >= 1 &&
            ENGLISH_ORDINALS[
                next.normalized
            ] <= 9
        ) {

            const value =
                ENGLISH_TENS[
                    current.normalized
                ] +
                ENGLISH_ORDINALS[
                    next.normalized
                ];


            return {
                token:
                    `__ord_${value}__`,

                consumed:
                    2,

                sourceWordIndexes: [
                    current.wordIndex,
                    next.wordIndex
                ]
            };
        }
    }


    // ======================================
    // 2012 → two thousand twelve
    // 1999 → one thousand nine hundred...
    // ======================================
    const thousandLead =
        ENGLISH_SMALL_NUMBERS[
            current.normalized
        ];


    if (
        thousandLead >= 1 &&
        thousandLead <= 9 &&
        words[startIndex + 1]
            ?.normalized ===
            'thousand'
    ) {

        let value =
            thousandLead *
            1000;


        let position =
            startIndex + 2;


        if (
            words[position]
                ?.normalized ===
            'and'
        ) {

            position++;
        }


        const rest =
            parseEnglishUnderThousand(
                words,
                position
            );


        let consumed;


        if (rest) {

            value +=
                rest.value;


            consumed =
                (
                    position -
                    startIndex
                ) +
                rest.consumed;

        } else {

            consumed =
                2;
        }


        const indexes =
            words
                .slice(
                    startIndex,
                    startIndex +
                        consumed
                )
                .map(
                    word =>
                        word.wordIndex
                );


        return {
            token:
                `__num_${value}__`,

            consumed,

            sourceWordIndexes:
                indexes
        };
    }


    // ======================================
    // 年号読み
    // nineteen ninety nine → 1999
    // twenty twelve → 2012
    // ======================================
    const yearPrefixMap = {
        seventeen: 17,
        eighteen: 18,
        nineteen: 19,
        twenty: 20
    };


    const yearPrefix =
        yearPrefixMap[
            current.normalized
        ];


    if (yearPrefix) {

        const rest =
            parseEnglishSmallNumber(
                words,
                startIndex + 1
            );


        if (
            rest &&
            rest.value >= 10 &&
            rest.value <= 99
        ) {

            const value =
                (
                    yearPrefix *
                    100
                ) +
                rest.value;


            const consumed =
                1 +
                rest.consumed;


            return {
                token:
                    `__num_${value}__`,

                consumed,

                sourceWordIndexes:
                    words
                        .slice(
                            startIndex,
                            startIndex +
                                consumed
                        )
                        .map(
                            word =>
                                word.wordIndex
                        )
            };
        }
    }


    // ======================================
    // one hundred twenty / twenty five 等
    // ======================================
    const cardinal =
        parseEnglishUnderThousand(
            words,
            startIndex
        );


    if (cardinal) {

        return {
            token:
                `__num_${cardinal.value}__`,

            consumed:
                cardinal.consumed,

            sourceWordIndexes:
                words
                    .slice(
                        startIndex,
                        startIndex +
                            cardinal.consumed
                    )
                    .map(
                        word =>
                            word.wordIndex
                    )
        };
    }


    return null;
}
// ==========================================
// ★ 英語の短縮形・展開形を同一として比較
// I'm = I am
// can't = can not / cannot
// he's = he is / he has など
// ==========================================
function buildSpeechComparisonUnits(
    text,
    lang = 'en-US'
) {

    const segments =
        segmentSpeechText(
            text,
            lang
        );


    const words = [];

    let wordIndex = 0;


    segments.forEach(
        segment => {

            if (
                segment.isWord &&
                segment.normalized
            ) {

                words.push({
                    text: segment.text,
                    normalized:
                        segment.normalized,
                    wordIndex
                });

                wordIndex++;
            }
        }
    );


    // 英語以外は従来どおり
    if (
        !/^en(?:-|$)/i.test(lang)
    ) {

        return words.map(
            word => ({
                token:
                    word.normalized,

                sourceWordIndexes: [
                    word.wordIndex
                ]
            })
        );
    }


    const normalizeRaw =
        value =>
            String(value || '')
                .normalize('NFKC')
                .toLowerCase()
                .replace(/’/g, "'");


    // ======================================
    // 短縮形そのもの
    // ======================================
    const contractionAliases = {

        "i'm": "__i_am__",
        "you're": "__you_are__",
        "we're": "__we_are__",
        "they're": "__they_are__",

        "he's": "__he_s__",
        "she's": "__she_s__",
        "it's": "__it_s__",
        "that's": "__that_s__",
        "there's": "__there_s__",
        "what's": "__what_s__",
        "who's": "__who_s__",

        "i'll": "__i_will__",
        "you'll": "__you_will__",
        "he'll": "__he_will__",
        "she'll": "__she_will__",
        "we'll": "__we_will__",
        "they'll": "__they_will__",

        "i've": "__i_have__",
        "you've": "__you_have__",
        "we've": "__we_have__",
        "they've": "__they_have__",

        "i'd": "__i_d__",
        "you'd": "__you_d__",
        "he'd": "__he_d__",
        "she'd": "__she_d__",
        "we'd": "__we_d__",
        "they'd": "__they_d__",

        "can't": "__can_not__",
        "couldn't": "__could_not__",
        "won't": "__will_not__",
        "wouldn't": "__would_not__",
        "shouldn't": "__should_not__",

        "don't": "__do_not__",
        "doesn't": "__does_not__",
        "didn't": "__did_not__",

        "isn't": "__is_not__",
        "aren't": "__are_not__",
        "wasn't": "__was_not__",
        "weren't": "__were_not__",

        "haven't": "__have_not__",
        "hasn't": "__has_not__",
        "hadn't": "__had_not__",

        "mustn't": "__must_not__",

        "let's": "__let_us__"
    };


    // ======================================
    // SpeechRecognitionが展開して返した場合
    // ======================================
    const phraseAliases = {

        "i am": "__i_am__",
        "you are": "__you_are__",
        "we are": "__we_are__",
        "they are": "__they_are__",

        "he is": "__he_s__",
        "he has": "__he_s__",
        "she is": "__she_s__",
        "she has": "__she_s__",
        "it is": "__it_s__",
        "it has": "__it_s__",

        "that is": "__that_s__",
        "that has": "__that_s__",
        "there is": "__there_s__",
        "there has": "__there_s__",
        "what is": "__what_s__",
        "what has": "__what_s__",
        "who is": "__who_s__",
        "who has": "__who_s__",

        "i will": "__i_will__",
        "you will": "__you_will__",
        "he will": "__he_will__",
        "she will": "__she_will__",
        "we will": "__we_will__",
        "they will": "__they_will__",

        "i have": "__i_have__",
        "you have": "__you_have__",
        "we have": "__we_have__",
        "they have": "__they_have__",

        "i would": "__i_d__",
        "i had": "__i_d__",
        "you would": "__you_d__",
        "you had": "__you_d__",
        "he would": "__he_d__",
        "he had": "__he_d__",
        "she would": "__she_d__",
        "she had": "__she_d__",
        "we would": "__we_d__",
        "we had": "__we_d__",
        "they would": "__they_d__",
        "they had": "__they_d__",

        "can not": "__can_not__",
        "could not": "__could_not__",
        "will not": "__will_not__",
        "would not": "__would_not__",
        "should not": "__should_not__",

        "do not": "__do_not__",
        "does not": "__does_not__",
        "did not": "__did_not__",

        "is not": "__is_not__",
        "are not": "__are_not__",
        "was not": "__was_not__",
        "were not": "__were_not__",

        "have not": "__have_not__",
        "has not": "__has_not__",
        "had not": "__had_not__",

        "must not": "__must_not__",

        "let us": "__let_us__"
    };


    const units = [];


    for (
        let i = 0;
        i < words.length;
        i++
    ) {

        const current =
            words[i];


        const raw =
            normalizeRaw(
                current.text
            );

        const numberUnit =
    getEnglishNumberComparisonUnit(
        words,
        i
    );


if (numberUnit) {

    units.push({
        token:
            numberUnit.token,

        sourceWordIndexes:
            numberUnit
                .sourceWordIndexes
    });


    i +=
        numberUnit.consumed -
        1;


    continue;
}

        // 短縮形そのもの
        if (
            contractionAliases[raw]
        ) {

            units.push({
                token:
                    contractionAliases[raw],

                sourceWordIndexes: [
                    current.wordIndex
                ]
            });

            continue;
        }


        // 2語の展開形
        if (
            i + 1 <
            words.length
        ) {

            const next =
                words[i + 1];


            const phrase =
                `${current.normalized} ${next.normalized}`;


            if (
                phraseAliases[phrase]
            ) {

                units.push({
                    token:
                        phraseAliases[phrase],

                    sourceWordIndexes: [
                        current.wordIndex,
                        next.wordIndex
                    ]
                });

                i++;

                continue;
            }
        }


        // cannot は can't と同一扱い
        const token =
            current.normalized ===
                'cannot'
                ? '__can_not__'
                : current.normalized;


        units.push({
            token,

            sourceWordIndexes: [
                current.wordIndex
            ]
        });
    }


    return units;
}

function getLessonTargetTokens() {

    if (
        typeof currentCustomLesson ===
            'undefined' ||
        !currentCustomLesson
    ) {
        return [];
    }


    const lang =
        getCurrentLessonLang();


    const tokens = [];


    if (
        currentCustomLesson.type ===
            'dialogue' &&
        Array.isArray(
            currentCustomLesson.dialogue
        )
    ) {

        currentCustomLesson.dialogue
            .forEach(
                line => {

                    buildSpeechComparisonUnits(
                        line && line.text
                            ? line.text
                            : '',
                        lang
                    )
                    .forEach(
                        unit =>
                            tokens.push(
                                unit.token
                            )
                    );
                }
            );

    } else {

        buildSpeechComparisonUnits(
            currentCustomLesson.eng || '',
            lang
        )
        .forEach(
            unit =>
                tokens.push(
                    unit.token
                )
        );
    }


    return tokens;
}

function refreshRecognitionTargetTextArray() {
    const multilingualTargets = getLessonTargetTokens();

    // ui.js の targetTextArray が存在する場合は同じ配列へ反映する。
    // これにより旧来の英語用生成処理が残っていても、録音開始時に正しい多言語配列へ更新される。
    if (typeof targetTextArray !== 'undefined') {
        targetTextArray = multilingualTargets;
    }

    return multilingualTargets;
}

function escapeSpeechHtml(text) {
    return String(text || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}


// ==========================================
// ★ 音声認識の安定化 / 0点事故防止
// ==========================================
function setRecognitionHealth(state, message = '') {
    if (typeof window.updateMicHealthSensor === 'function') {
        window.updateMicHealthSensor(state, message);
    }
}

function joinTranscript(...parts) {
    return parts
        .map(v => String(v || '').trim())
        .filter(Boolean)
        .join(' ')
        .replace(/\s+/g, ' ')
        .trim();
}

// ==========================================
// ★ Android SpeechRecognition 重複対策
// ==========================================
function isAndroidSpeechRecognition() {
    return /Android/i.test(
        navigator.userAgent || ''
    );
}

function mergeAndroidRecognitionChunk(
    baseText,
    nextText
) {
    const base =
        String(baseText || '')
            .replace(/\s+/g, ' ')
            .trim();

    const next =
        String(nextText || '')
            .replace(/\s+/g, ' ')
            .trim();

    if (!base) return next;
    if (!next) return base;

    const lang =
        getCurrentLessonLang();

    const toWords = text =>
        segmentSpeechText(
            text,
            lang
        )
        .filter(
            item =>
                item.isWord &&
                item.normalized
        )
        .map(
            item =>
                item.normalized
        );

    const baseWords =
        toWords(base);

    const nextWords =
        toWords(next);

    if (
        baseWords.length === 0 ||
        nextWords.length === 0
    ) {
        return joinTranscript(
            base,
            next
        );
    }

    const startsWith =
        (full, prefix) => {

            if (
                prefix.length >
                full.length
            ) {
                return false;
            }

            return prefix.every(
                (word, index) =>
                    full[index] ===
                    word
            );
        };

    // 完全に同じ結果が再送された
    if (
        baseWords.length ===
            nextWords.length &&
        baseWords.every(
            (word, index) =>
                word ===
                nextWords[index]
        )
    ) {
        return base;
    }

    // Androidの典型例
    // "the"
    // → "the sustainable"
    // → "the sustainable development"
    if (
        startsWith(
            nextWords,
            baseWords
        )
    ) {
        return next;
    }

    // 古い短い結果が後から再送された
    if (
        startsWith(
            baseWords,
            nextWords
        )
    ) {
        return base;
    }

    return joinTranscript(
        base,
        next
    );
}

function mergeRecognitionChunk(
    baseText,
    nextText
) {
    if (
        !isAndroidSpeechRecognition()
    ) {
        return joinTranscript(
            baseText,
            nextText
        );
    }

    return mergeAndroidRecognitionChunk(
        baseText,
        nextText
    );
}

// ==========================================
// ★ SpeechRecognition 再接続境界の重複対策
// Android / Safari / Chrome / Edge 共通
// 前の認識結果の末尾と、新しい認識結果の先頭が
// 2語以上重複した場合に重複部分を除去する
// ==========================================
function mergeRecognitionBoundary(
    baseText,
    nextText
) {

    const base =
        String(baseText || '')
            .replace(/\s+/g, ' ')
            .trim();

    const next =
        String(nextText || '')
            .replace(/\s+/g, ' ')
            .trim();


    if (!base) return next;
    if (!next) return base;


    // 完全一致・累積結果などを先に処理
    const simpleMerged =
        mergeAndroidRecognitionChunk(
            base,
            next
        );


    const plainMerged =
        joinTranscript(
            base,
            next
        );


    if (
        simpleMerged !==
        plainMerged
    ) {

        return simpleMerged;
    }


    const lang =
        getCurrentLessonLang();


    const toWords = text =>
        segmentSpeechText(
            text,
            lang
        )
        .filter(
            item =>
                item.isWord &&
                item.normalized
        )
        .map(
            item =>
                item.normalized
        );


    const baseWords =
        toWords(base);


    const nextWords =
        toWords(next);


    let overlap =
        0;


    const maxOverlap =
        Math.min(
            baseWords.length,
            nextWords.length
        );


    // 前回結果の末尾と
    // 新しい結果の先頭が
    // 2語以上一致する場合だけ重複除去
    for (
        let size = maxOverlap;
        size >= 2;
        size--
    ) {

        const matched =
            baseWords
                .slice(-size)
                .every(
                    (word, index) =>
                        word ===
                        nextWords[index]
                );


        if (matched) {

            overlap =
                size;

            break;
        }
    }


    if (!overlap) {

        return plainMerged;
    }


    const segments =
        segmentSpeechText(
            next,
            lang
        );


    let skip =
        overlap;


    let remainder =
        '';


    for (
        const segment
        of segments
    ) {

        if (skip > 0) {

            if (
                segment.isWord &&
                segment.normalized
            ) {

                skip--;
            }

            continue;
        }


        remainder +=
            segment.text;
    }


    return joinTranscript(
        base,
        remainder
    );
}

function clearRecognitionTimer(type) {
    const timers = {
        start: recognitionStartTimer,
        speech: recognitionSpeechTimer,
        finish: recognitionFinishTimer
    };

    if (timers[type]) clearTimeout(timers[type]);

    if (type === 'start') recognitionStartTimer = null;
    if (type === 'speech') recognitionSpeechTimer = null;
    if (type === 'finish') recognitionFinishTimer = null;
}

function clearRecognitionTimers() {
    clearRecognitionTimer('start');
    clearRecognitionTimer('speech');
    clearRecognitionTimer('finish');
}


// ==========================================
// ★ SpeechRecognition生成
// ==========================================
function createMainRecognition() {
    if (!window.SpeechRecognition) return null;

    const rec = new window.SpeechRecognition();

    rec.interimResults =
    !isAndroidSpeechRecognition();
    rec.continuous = true;
    rec.lang = getCurrentLessonLang();


    // ==========================================
    // Recognition START
    // ==========================================
    rec.onstart = () => {
        if (rec !== mainRecognition) return;

        clearRecognitionTimer('start');

        recognitionBase = accumulatedTranscript.trim();
        recognitionHasResult = false;

        setRecognitionHealth(
            'ready',
            'マイク接続OK・音読を始めてください'
        );
    };


    // ==========================================
    // マイク入力開始
    // ==========================================
    rec.onaudiostart = () => {
        if (rec !== mainRecognition) return;

        setRecognitionHealth(
            'ready',
            'マイク入力を確認しました'
        );
    };


    // ==========================================
    // 音を検出
    // ==========================================
    rec.onsoundstart = () => {
        if (
            rec !== mainRecognition ||
            recognitionHasResult
        ) {
            return;
        }

        setRecognitionHealth(
            'voice',
            '音声を検出しました'
        );
    };


    // ==========================================
    // 人の声を検出
    // ==========================================
    rec.onspeechstart = () => {
        if (rec !== mainRecognition) return;

        // 前の発話ですでに認識できていても、
        // 今回の新しい発話に認識結果が返るか監視する。
        recognitionHasResult = false;

        setRecognitionHealth(
            'voice',
            '声を検出しました'
        );

        clearRecognitionTimer('speech');

        // AndroidはinterimResults=falseのため、
        // 読み続けている最中にタイムアウトさせない
        if (
            isAndroidSpeechRecognition()
        ) {
            return;
        }

        recognitionSpeechTimer = setTimeout(() => {

            if (
                rec !== mainRecognition ||
                !isMainRecording ||
                recognitionFinishing ||
                recognitionHasResult
            ) {
                return;
            }

            setRecognitionHealth(
                'warning',
                '声は届いていますが認識結果が返っていません。再接続します…'
            );

            recoverRecognition(
                'speech-timeout',
                true
            );

        }, RECOGNITION_SPEECH_TIMEOUT_MS);
    };


    // ==========================================
    // 音声認識結果
    // ==========================================
    rec.onresult = (e) => {
        if (rec !== mainRecognition) return;

        let finalText = '';
        let interimText = '';

        for (let i = 0; i < e.results.length; i++) {

            const transcript =
                e.results[i][0]?.transcript || '';

            if (!transcript.trim()) continue;

            if (e.results[i].isFinal) {

                finalText =
    mergeRecognitionChunk(
        finalText,
        transcript
    );

            } else {

                interimText =
    mergeRecognitionChunk(
        interimText,
        transcript
    );
            }
        }


        // ==========================================
        // 確定結果 + 再接続以前の結果
        // ==========================================
        accumulatedTranscript =
    mergeRecognitionBoundary(
        recognitionBase,
        finalText
    );

        currentInterim =
            interimText;


        const liveText =
    mergeRecognitionChunk(
        accumulatedTranscript,
        currentInterim
    );

        if (!liveText) return;


        recognitionHasResult = true;

        // 正常に認識できたため、
        // エラー・再接続回数をリセット
        recognitionRetryCount = 0;
        recognitionPassiveRestartCount = 0;

        clearRecognitionTimer('speech');


        // FINISH後は最後のRecognition結果だけ保存し、
        // 画面更新はfinalizeRecognitionで行う。
        if (
            !recognitionFinishing
        ) {

            setRecognitionHealth(
                'recognizing',
                '音声を認識しています ✓'
            );

            processSpeechMatch(
                liveText,
                false
            );
        }
    };


    // ==========================================
    // Recognition ERROR
    // ==========================================
    rec.onerror = (e) => {
        if (
            rec !== mainRecognition ||
            recognitionFinishing
        ) {
            return;
        }

        const error =
            e?.error || 'unknown';

        console.warn(
            '[Copeak SpeechRecognition]',
            error,
            e
        );


        // ==========================================
        // マイク権限なし
        // ==========================================
        if (
            error === 'not-allowed' ||
            error === 'denied' ||
            error === 'service-not-allowed'
        ) {

            failRecognition(
                '⚠️ マイクの使用が許可されていません。ブラウザのマイク設定を確認してください。'
            );

            return;
        }


        // ==========================================
        // マイク取得失敗
        // ==========================================
        if (
            error === 'audio-capture'
        ) {

            failRecognition(
                '⚠️ マイク入力を取得できません。端末やブラウザのマイク設定を確認してください。'
            );

            return;
        }


        // ==========================================
        // 言語非対応
        // ==========================================
        if (
            error ===
            'language-not-supported'
        ) {

            failRecognition(
                '⚠️ この言語は現在のブラウザの音声認識に対応していません。'
            );

            return;
        }


        // ==========================================
        // 無音
        // ==========================================
        if (
            error === 'no-speech'
        ) {

            setRecognitionHealth(
                'warning',
                '声を待っています…'
            );

            return;
        }


        // ==========================================
        // abortは自動復旧時にも発生するため無視
        // ==========================================
        if (
            error !== 'aborted'
        ) {

            recoverRecognition(
                error,
                true
            );
        }
    };


    // ==========================================
    // Recognition END
    // ==========================================
    rec.onend = () => {
        if (rec !== mainRecognition) return;


        // ==========================================
        // FINISH後
        // ==========================================
        if (
            recognitionFinishing
        ) {

            // 最後のonresultが反映される余裕を少し持たせる
            setTimeout(
                finalizeRecognition,
                100
            );

            return;
        }


        // ==========================================
        // continuous=trueでも、
        // Safari / Chrome側で終了する場合がある
        // ==========================================
        if (
            isMainRecording
        ) {

            recoverRecognition(
                'unexpected-end',
                false
            );
        }
    };


    return rec;
}


// ==========================================
// ★ Recognitionを新しく生成して開始
// ==========================================
function startRecognitionEngine() {

    const oldRec =
        mainRecognition;

    // 古いRecognitionから遅延イベントが来ても
    // 新しいセッションへ混ざらないように先に切り離す。
    mainRecognition =
        null;


    if (oldRec) {

        try {
            oldRec.abort();
        } catch (e) {}
    }


    const rec =
        createMainRecognition();


    if (!rec) {
        return false;
    }


    mainRecognition =
        rec;


    recognitionBase =
        accumulatedTranscript.trim();


    recognitionHasResult =
        false;


    try {

        rec.start();

        clearRecognitionTimer(
            'start'
        );


        // ==========================================
        // 初回のマイク許可操作にも余裕を持たせ、
        // onstartを最大8秒待つ。
        // ==========================================
        recognitionStartTimer =
            setTimeout(() => {

                if (
                    rec !== mainRecognition ||
                    !isMainRecording ||
                    recognitionFinishing
                ) {
                    return;
                }


                setRecognitionHealth(
                    'warning',
                    '音声認識を開始できません。再接続します…'
                );


                recoverRecognition(
                    'start-timeout',
                    true
                );

            }, RECOGNITION_START_TIMEOUT_MS);


        return true;


    } catch (e) {

        console.warn(
            '[Copeak] SpeechRecognition.start() failed:',
            e
        );


        if (
            mainRecognition === rec
        ) {
            mainRecognition = null;
        }


        return false;
    }
}


// ==========================================
// ★ SpeechRecognition自動復旧
// ==========================================
function recoverRecognition(
    reason = 'unknown',
    countAsFailure = true
) {

    if (
        !isMainRecording ||
        recognitionFinishing ||
        recognitionRecovering
    ) {
        return;
    }


    // ==========================================
    // 本当のRecognition失敗
    // ==========================================
    if (countAsFailure) {

        if (
            recognitionRetryCount >=
            MAX_RECOGNITION_RETRIES
        ) {

            failRecognition(
                '⚠️ 音声認識が安定しないため、今回の結果は保存していません。もう一度STARTしてください。'
            );

            return;
        }


        recognitionRetryCount++;


    } else {

        // ==========================================
        // continuous=trueでもブラウザ都合で
        // Recognitionが終了する場合がある。
        //
        // ただし無限再起動にはしない。
        // ==========================================
        if (
            recognitionPassiveRestartCount >=
            MAX_PASSIVE_RESTARTS
        ) {

            failRecognition(
                '⚠️ 音声認識が途中で停止したため、今回の結果は保存していません。もう一度STARTしてください。'
            );

            return;
        }


        recognitionPassiveRestartCount++;
    }


    recognitionRecovering =
        true;


    clearRecognitionTimer(
        'start'
    );

    clearRecognitionTimer(
        'speech'
    );


    // ==========================================
    // 再接続直前のInterim結果を失わない
    // ==========================================
    if (
        currentInterim.trim()
    ) {

        accumulatedTranscript =
            mergeRecognitionChunk(
                accumulatedTranscript,
                currentInterim
            );

        currentInterim =
            '';
    }


    setRecognitionHealth(
        'reconnecting',
        '音声認識を再接続しています…'
    );


    const oldRec =
        mainRecognition;


    mainRecognition =
        null;


    if (oldRec) {

        try {
            oldRec.abort();
        } catch (e) {}
    }


    // ==========================================
    // 少し待って新しいRecognitionを作る
    // ==========================================
    setTimeout(() => {

        recognitionRecovering =
            false;


        if (
            !isMainRecording ||
            recognitionFinishing
        ) {
            return;
        }


        if (
            !startRecognitionEngine()
        ) {

            recoverRecognition(
                `${reason}:start-failed`,
                true
            );
        }

    }, 300);
}


// ==========================================
// ★ Paced / Shadowing停止
// ==========================================
function stopReadingMedia() {

    if (
        typeof stopPacedReading ===
        'function'
    ) {

        stopPacedReading();
    }


    const audioPlayer =
        document.getElementById(
            'audioPlayer'
        );


    if (audioPlayer) {
        audioPlayer.pause();
    }
}


// ==========================================
// ★ Recognition完全失敗
// ==========================================
function failRecognition(message) {

    clearRecognitionTimers();


    isMainRecording =
        false;


    recognitionFinishing =
        false;


    recognitionFinalized =
        true;


    recognitionRecovering =
        false;


    recognitionHasResult =
        false;


    const oldRec =
        mainRecognition;


    mainRecognition =
        null;


    if (oldRec) {

        try {
            oldRec.abort();
        } catch (e) {}
    }


    stopReadingMedia();


    // ==========================================
    // Recognition障害は生徒の0点として保存しない
    // ==========================================
    accumulatedTranscript =
        '';


    currentInterim =
        '';


    recordStartTime =
        0;


    updateMicButtonUI();


    setRecognitionHealth(
        'error',
        message
    );


    if (
        typeof resetLearningState ===
        'function'
    ) {

        resetLearningState();

    } else if (
        typeof showPreReadingState ===
        'function'
    ) {

        showPreReadingState();
    }


    if (
        typeof showMsg ===
        'function'
    ) {

        showMsg(
            message
        );
    }
}


// ==========================================
// ★ FINISH後の最終確定
// ==========================================
function finalizeRecognition() {

    // 二重採点防止
    if (
        recognitionFinalized
    ) {
        return;
    }


    recognitionFinalized =
        true;


    recognitionFinishing =
        false;


    recognitionRecovering =
        false;


    clearRecognitionTimers();


    // ==========================================
    // 最後のInterim結果を救済
    // ==========================================
    if (
        currentInterim.trim()
    ) {

        accumulatedTranscript =
            mergeRecognitionChunk(
                accumulatedTranscript,
                currentInterim
            );

        currentInterim =
            '';
    }


    const recognizedWords =
        segmentSpeechText(
            accumulatedTranscript,
            getCurrentLessonLang()
        ).filter(
            segment =>
                segment.isWord &&
                segment.normalized
        );


    const oldRec =
        mainRecognition;


    mainRecognition =
        null;


    if (oldRec) {

        try {
            oldRec.abort();
        } catch (e) {}
    }

    // ==========================================
    // ★ 異常な認識結果は採点・保存しない
    // ==========================================

    const targetWordCount =
        getLessonTargetTokens()
            .length;

    const elapsedSeconds =
        recordStartTime > 0
            ? (
                Date.now() -
                recordStartTime
            ) / 1000
            : 0;

    const estimatedWpm =
        elapsedSeconds > 0
            ? Math.round(
                recognizedWords.length *
                60 /
                elapsedSeconds
            )
            : 0;

    const tooManyRecognizedWords =
        targetWordCount > 0 &&
        recognizedWords.length >
            Math.max(
                Math.ceil(
                    targetWordCount *
                    2.2
                ),
                targetWordCount +
                    25
            );

    const impossibleEnglishWpm =
        /^en(?:-|$)/i.test(
            getCurrentLessonLang()
        ) &&
        targetWordCount >= 20 &&
        recognizedWords.length >= 10 &&
        estimatedWpm > 500;


    if (
        tooManyRecognizedWords ||
        impossibleEnglishWpm
    ) {

        console.warn(
            '[Copeak] Abnormal speech result rejected',
            {
                recognizedWords:
                    recognizedWords.length,

                targetWordCount,

                estimatedWpm
            }
        );

        accumulatedTranscript =
            '';

        currentInterim =
            '';

        recordStartTime =
            0;

        setRecognitionHealth(
            'error',
            '音声認識の重複を検出しました'
        );

        if (
            typeof resetLearningState ===
            'function'
        ) {
            resetLearningState();

        } else if (
            typeof showPreReadingState ===
            'function'
        ) {
            showPreReadingState();
        }

        if (
            typeof showMsg ===
            'function'
        ) {
            showMsg(
                '⚠️ 音声認識結果が重複したため、今回は採点・保存していません。もう一度お試しください。'
            );
        }

        return;
    }

    // ==========================================
    // ★ 1語も認識できなかった場合
    // 「0点」ではなく「測定失敗」
    // ==========================================
    if (
        recognizedWords.length ===
        0
    ) {

        accumulatedTranscript =
            '';


        currentInterim =
            '';


        recordStartTime =
            0;


        setRecognitionHealth(
            'error',
            '音声を認識できませんでした'
        );


        if (
            typeof resetLearningState ===
            'function'
        ) {

            resetLearningState();

        } else if (
            typeof showPreReadingState ===
            'function'
        ) {

            showPreReadingState();
        }


        if (
            typeof showMsg ===
            'function'
        ) {

            showMsg(
                '⚠️ 音声を認識できなかったため、結果は保存していません。もう一度お試しください。'
            );
        }


        return;
    }


    // ==========================================
    // ★ 正常に認識できた場合だけ採点
    // ==========================================
    setRecognitionHealth(
        'done',
        '音声認識完了 ✓'
    );


    processSpeechMatch(
        accumulatedTranscript,
        true
    );


    if (
        typeof showResultState ===
        'function'
    ) {

        showResultState();
    }
}


// ==========================================
// ★ FINISH
// ==========================================
function finishRecordingSession() {

    isMainRecording =
        false;


    recognitionFinishing =
        true;


    recognitionFinalized =
        false;


    recognitionRecovering =
        false;


    clearRecognitionTimer(
        'start'
    );

    clearRecognitionTimer(
        'speech'
    );


    stopReadingMedia();


    updateMicButtonUI();


    // ==========================================
    // ★ 左上の✕は採点せずキャンセル
    // ==========================================
    if (
        window.isCopeakCanceling ===
        true
    ) {

        const oldRec =
            mainRecognition;


        mainRecognition =
            null;


        if (oldRec) {

            try {
                oldRec.abort();
            } catch (e) {}
        }


        recognitionFinishing =
            false;


        recognitionFinalized =
            true;


        if (
            typeof showResultState ===
            'function'
        ) {

            showResultState();
        }


        return;
    }


    setRecognitionHealth(
        'finalizing',
        '音声を確定しています…'
    );


    try {

        if (
            mainRecognition
        ) {

            // ==========================================
            // ★重要
            // stop()後に返る最後の
            // onresult / onendを待ってから採点
            // ==========================================
            mainRecognition.stop();

        } else {

            finalizeRecognition();

            return;
        }


    } catch (e) {

        console.warn(
            '[Copeak] SpeechRecognition.stop() failed:',
            e
        );


        finalizeRecognition();

        return;
    }


    clearRecognitionTimer(
        'finish'
    );


    // ==========================================
    // Safari等でonendが来ない場合の保険
    // ==========================================
    recognitionFinishTimer =
        setTimeout(
            finalizeRecognition,
            RECOGNITION_FINISH_WAIT_MS
        );
}


// ==========================================
// ★ START
// ==========================================
function startRecordingSession() {

    accumulatedTranscript =
        '';


    currentInterim =
        '';


    // ★ 既存CopeakのWPM仕様を維持
    recordStartTime =
        Date.now();


    recognitionBase =
        '';


    recognitionFinishing =
        false;


    recognitionFinalized =
        false;


    recognitionRecovering =
        false;


    recognitionHasResult =
        false;


    recognitionRetryCount =
        0;


    recognitionPassiveRestartCount =
        0;


    clearRecognitionTimers();


    const recDisplay =
        document.getElementById(
            'recognizedTextDisplay'
        );


    if (recDisplay) {

        recDisplay.innerHTML =
            'Listening... (話してください)';


        recDisplay.style.color =
            '#292524';
    }


    isMainRecording =
        true;


    setRecognitionHealth(
        'checking',
        'マイクを確認しています…'
    );


    if (
        typeof showRecordingState ===
        'function'
    ) {

        showRecordingState();
    }


    // ==========================================
    // Paced Reading
    // ==========================================
    if (
        typeof startPacedReading ===
            'function' &&
        currentMode ===
            'paced'
    ) {

        startPacedReading();
    }


    // 多言語ターゲット更新
    refreshRecognitionTargetTextArray();


    const audioPlayer =
        document.getElementById(
            'audioPlayer'
        );


    const hasAudio =
        currentCustomLesson &&
        (
            currentCustomLesson.audioBlob ||
            currentCustomLesson.audioUrl
        );


    const startEngine = () => {

        if (
            !isMainRecording ||
            recognitionFinishing
        ) {
            return;
        }


        if (
            !startRecognitionEngine()
        ) {

            recoverRecognition(
                'start-failed',
                true
            );

            return;
        }


        updateMicButtonUI();


        processSpeechMatch(
            '',
            false
        );
    };


    // ==========================================
    // Shadowing
    // ==========================================
    if (
        currentMode ===
            'shadowing' &&
        hasAudio &&
        audioPlayer
    ) {

        audioPlayer.currentTime =
            0;


        audioPlayer
            .play()
            .then(() => {

                setTimeout(
                    startEngine,
                    300
                );

            })
            .catch(() => {

                startEngine();
            });


    } else {

        startEngine();
    }
}


// ==========================================
// ★ START / FINISH
// ==========================================
function toggleRecording() {

    if (
        !window.SpeechRecognition
    ) {

        if (
            typeof showMsg ===
            'function'
        ) {

            showMsg(
                'お使いのブラウザは音声認識に非対応です'
            );
        }


        return;
    }


    if (
        isMainRecording
    ) {

        finishRecordingSession();

    } else {

        startRecordingSession();
    }
}


// ==========================================
// ★ Mic Button UI
// ==========================================
function updateMicButtonUI() {
    const btn = document.getElementById('micBtn');
    const txt = document.getElementById('micBtnText');
    if (!btn || !txt) return;

    if (isMainRecording) {
        btn.classList.remove('bg-emerald-800');
        btn.classList.add('bg-stone-800', 'animate-pulse');
        txt.innerText = "FINISH (終了して結果を見る)";
    } else {
        btn.classList.remove('bg-stone-800', 'animate-pulse');
        btn.classList.add('bg-emerald-800');
        
        if (currentMode === 'shadowing') {
            txt.innerText = accumulatedTranscript.trim() ? "RETRY SHADOWING" : "START SHADOWING";
        } else if (currentMode === 'memo') {
            txt.innerText = accumulatedTranscript.trim() ? "RETRY VANISH" : "START VANISH";
        } else if (currentMode === 'paced') {
            txt.innerText = accumulatedTranscript.trim() ? "RETRY PACED" : "START PACED";
        } else {
            txt.innerText = accumulatedTranscript.trim() ? "RETRY READING" : "START READING";
        }
    }
}

// ==========================================
// ★ 音声認識結果と教材本文を順序を保って最適照合
// 認識抜け・途中開始・余分な認識があっても
// 後半で正常に再同期できるようにする
// ==========================================
function alignSpeechTokens(spokenWords, targetWords) {

    const spokenLength = spokenWords.length;
    const targetLength = targetWords.length;

    if (
        spokenLength === 0 ||
        targetLength === 0
    ) {
        return {
            matchCount: 0,
            matchedSpokenIndexes: new Set()
        };
    }

    // LCS (Longest Common Subsequence)
    // 音読教材程度の長さなら十分軽量
    const dp = Array.from(
        { length: spokenLength + 1 },
        () => new Uint16Array(targetLength + 1)
    );

    for (
        let i = spokenLength - 1;
        i >= 0;
        i--
    ) {

        for (
            let j = targetLength - 1;
            j >= 0;
            j--
        ) {

            if (
                spokenWords[i] ===
                targetWords[j]
            ) {

                dp[i][j] =
                    dp[i + 1][j + 1] + 1;

            } else {

                dp[i][j] =
                    Math.max(
                        dp[i + 1][j],
                        dp[i][j + 1]
                    );
            }
        }
    }

    const matchedSpokenIndexes =
        new Set();

    let spokenIndex = 0;
    let targetIndex = 0;

    while (
        spokenIndex < spokenLength &&
        targetIndex < targetLength
    ) {

        if (
            spokenWords[spokenIndex] ===
            targetWords[targetIndex]
        ) {

            matchedSpokenIndexes.add(
                spokenIndex
            );

            spokenIndex++;
            targetIndex++;

        } else if (
            dp[spokenIndex + 1][targetIndex] >=
            dp[spokenIndex][targetIndex + 1]
        ) {

            spokenIndex++;

        } else {

            targetIndex++;
        }
    }

    return {
        matchCount:
            matchedSpokenIndexes.size,

        matchedSpokenIndexes
    };
}

// ==========================================
// ★ 音声照合・採点
// ==========================================
function processSpeechMatch(spokenText, isFinalResult = false) {
    const recDisplay = document.getElementById('recognizedTextDisplay');
    if (!recDisplay) return;

    const lang = getCurrentLessonLang();

    // ★ ui.js側の旧targetTextArrayに依存せず、現在教材から毎回安全に取得する
    //    取得できない場合のみ既存targetTextArrayへフォールバックする。
    let scoringTargetArray = getLessonTargetTokens();

    if (
        scoringTargetArray.length === 0 &&
        typeof targetTextArray !==
            'undefined'
    ) {

        scoringTargetArray =
            targetTextArray
                .map(
                    token =>
                        normalizeSpeechToken(
                            token,
                            lang
                        )
                )
                .filter(Boolean);
    }


    if (
        scoringTargetArray.length ===
        0
    ) {
        return;
    }


    if (
        !spokenText &&
        isMainRecording
    ) {
        return;
    }


    // ==========================================
    // ★ 多言語対応：認識結果を分割
    // ==========================================
    const spokenSegments =
        segmentSpeechText(
            spokenText,
            lang
        );


    const spokenWordSegments =
        spokenSegments.filter(
            segment =>
                segment.isWord &&
                segment.normalized
        );

    // ==========================================
    // ★ 教材本文との最適照合
    // ==========================================

    const spokenComparisonUnits =
    buildSpeechComparisonUnits(
        spokenText,
        lang
    );


const spokenWords =
    spokenComparisonUnits.map(
        unit =>
            unit.token
    );


    const alignment =
        alignSpeechTokens(
            spokenWords,
            scoringTargetArray
        );


    const matchCount =
        alignment.matchCount;


    const matchedComparisonIndexes =
    alignment.matchedSpokenIndexes;


const matchedSpokenIndexes =
    new Set();


spokenComparisonUnits.forEach(
    (unit, index) => {

        if (
            !matchedComparisonIndexes.has(
                index
            )
        ) {
            return;
        }


        unit.sourceWordIndexes
            .forEach(
                wordIndex =>
                    matchedSpokenIndexes.add(
                        wordIndex
                    )
            );
    }
);


    let htmlOutput =
        [];


    let spokenWordIndex =
        0;


    spokenSegments.forEach(
        segment => {

            // 空白・句読点等はそのまま表示
            if (
                !segment.isWord ||
                !segment.normalized
            ) {

                htmlOutput.push(
                    escapeSpeechHtml(
                        segment.text
                    )
                );

                return;
            }


            const isMatched =
                matchedSpokenIndexes.has(
                    spokenWordIndex
                );


            spokenWordIndex++;


            const safeOriginal =
                escapeSpeechHtml(
                    segment.text
                );


            if (
                isMatched
            ) {

                htmlOutput.push(
                    `<span class="matched-word">${safeOriginal}</span>`
                );

            } else {

                htmlOutput.push(
                    `<span class="unmatched-word">${safeOriginal}</span>`
                );
            }
        }
    );
    // 日本語・中国語なども
    // 元の空白・句読点配置を維持して表示
    recDisplay.innerHTML =
        htmlOutput.join('');


    if (
        isMainRecording ||
        isFinalResult
    ) {

        recDisplay.scrollTop =
            recDisplay.scrollHeight;
    }


    // ==========================================
    // Accuracy
    // ==========================================
    const validTargetWordCount =
        scoringTargetArray.length;


    const percentage =
        validTargetWordCount ===
            0
            ? 0
            : Math.round(
                (
                    matchCount /
                    validTargetWordCount
                ) *
                100
            );


    const currentAccuracy =
        percentage > 100
            ? 100
            : percentage;


    // ==========================================
    // WPM
    // ==========================================
    // 英語では従来どおり word/minute。
    // 空白区切りでない言語では Intl.Segmenter の
    // word-like unit/minute として内部計算する。
    let currentWpm =
        0;


    if (
        recordStartTime >
            0 &&
        spokenWordSegments.length >
            0
    ) {

        let elapsedMinutes =
            (
                Date.now() -
                recordStartTime
            ) /
            60000;


        if (
            elapsedMinutes <
            0.01
        ) {

            elapsedMinutes =
                0.01;
        }


        currentWpm =
            Math.round(
                spokenWordSegments.length /
                elapsedMinutes
            );
    }


    let targetWpmToUse =
        (
            typeof targetWpm !==
            'undefined'
        )
            ? targetWpm
            : 130;


    let wpmRatio =
        Math.min(
            currentWpm /
                targetWpmToUse,
            1.0
        );


    let comprehensionScore =
        Math.round(
            (
                currentAccuracy *
                0.6
            ) +
            (
                wpmRatio *
                100 *
                0.4
            )
        );


    if (
        comprehensionScore >
        100
    ) {

        comprehensionScore =
            100;
    }


    // ==========================================
    // Final Result
    // ==========================================
    if (
        isFinalResult
    ) {

        document
            .getElementById(
                'bigAccValue'
            )
            .innerText =
                `${currentAccuracy}%`;


        document
            .getElementById(
                'bigWpmValue'
            )
            .innerText =
                currentWpm;


        const compEl =
            document.getElementById(
                'bigCompValue'
            );


        compEl.innerText =
            `${comprehensionScore}%`;


        if (
            comprehensionScore >=
            80
        ) {

            compEl.className =
                "text-5xl md:text-6xl font-bold text-yellow-400 serif-font";

        } else if (
            comprehensionScore >=
            50
        ) {

            compEl.className =
                "text-5xl md:text-6xl font-bold text-amber-500 serif-font";

        } else {

            compEl.className =
                "text-5xl md:text-6xl font-bold text-red-400 serif-font";
        }

        // ==========================================
        // Copeak Rewards
        // ==========================================
        if (
            typeof window.processCopeakReward === 'function' &&
            currentCustomLesson
        ) {
            window.processCopeakReward({
                lessonId: currentCustomLesson.id,
                accuracy: currentAccuracy,
                wpm: currentWpm,
                transcript: spokenText
            });
        }
        // ==========================================
        // 履歴保存
        // ==========================================
        if (
            currentCustomLesson &&
            !currentCustomLesson.isQuest &&
            !currentCustomLesson.skipLocalHistory
        ) {

            const todayStr =
                new Date()
                    .toLocaleDateString();


            const logData = {

                date:
                    todayStr,

                mode:
                    currentMode,

                score:
                    currentAccuracy,

                wpm:
                    currentWpm,

                comp:
                    comprehensionScore,

                timestamp:
                    new Date()
                        .getTime()
            };


            if (
                typeof savePracticeLog ===
                'function'
            ) {

                savePracticeLog(
                    currentCustomLesson.id,
                    logData,
                    () => {

                        updateHistoryUI();
                    }
                );

            } else {

                updateHistoryUI();
            }
        }


        // ==========================================
        // 共同モード
        // ==========================================
        if (
            typeof sendMyResultToPartner ===
            'function'
        ) {

            sendMyResultToPartner(
                currentAccuracy,
                currentWpm
            );
        }


        // ==========================================
        // Quest
        // ==========================================
        if (
            typeof evaluateQuestResult ===
            'function'
        ) {

            evaluateQuestResult(
                currentAccuracy,
                currentWpm
            );
        }
    }
}


// ==========================================
// ★ 学習履歴UI
// ==========================================
function updateHistoryUI() {

    if (
        !currentCustomLesson
    ) {
        return;
    }


    let history =
        currentCustomLesson.history ||
        [];


    let totalReads =
        history.length;


    const iconsHtml =
        history
            .map(log => {

                let icon =
                    '📖';


                let titleText =
                    '音読';


                if (
                    log.mode ===
                    'shadowing'
                ) {

                    icon =
                        '🎧';

                    titleText =
                        'シャドーイング';
                }


                if (
                    log.mode ===
                    'memo'
                ) {

                    icon =
                        '🧠';

                    titleText =
                        '暗記';
                }


                if (
                    log.mode ===
                    'paced'
                ) {

                    icon =
                        '⚡️';

                    titleText =
                        'ペース音読';
                }


                return (
                    `<span class="text-2xl drop-shadow-md" title="${titleText}">${icon}</span>`
                );
            })
            .join('');


    const iconContainer =
        document.getElementById(
            'practiceIconsContainer'
        );


    if (
        iconContainer
    ) {

        iconContainer.innerHTML =
            iconsHtml;
    }


    let isConsecutive =
        false;


    let daysSinceLastPractice =
        0;


    if (
        totalReads >
        1
    ) {

        const lastLog =
            history[
                totalReads -
                2
            ];


        const lastDate =
            new Date(
                lastLog.timestamp
            );


        const todayDate =
            new Date();


        const diffTime =
            Math.abs(
                todayDate -
                lastDate
            );


        daysSinceLastPractice =
            Math.ceil(
                diffTime /
                (
                    1000 *
                    60 *
                    60 *
                    24
                )
            );


        if (
            daysSinceLastPractice ===
                1 ||
            daysSinceLastPractice ===
                0
        ) {

            isConsecutive =
                true;
        }
    }


    // challenge.html等で
    // 辞書がない環境でクラッシュを防止
    if (
        typeof dynamicDict ===
        'undefined'
    ) {

        return;
    }


    const langKey =
        window.currentAppLang ||
        'ja';


    const dict =
        dynamicDict[
            langKey
        ];


    if (
        !dict
    ) {

        return;
    }


    let adviceMsg =
        `<strong class="text-emerald-800 text-base">${dict.fb_count.replace('{n}', totalReads)}</strong><br>`;


    if (
        totalReads <
        5
    ) {

        adviceMsg +=
            dict.fb_under5.replace(
                '{n}',
                5 -
                totalReads
            );

    } else if (
        totalReads >=
            5 &&
        isConsecutive
    ) {

        adviceMsg +=
            dict.fb_good;

    } else {

        if (
            daysSinceLastPractice >
            1
        ) {

            adviceMsg +=
                dict.fb_done_days.replace(
                    '{n}',
                    daysSinceLastPractice
                );

        } else {

            adviceMsg +=
                dict.fb_done_today;
        }
    }


    const adviceContainer =
        document.getElementById(
            'slaAdviceText'
        );


    if (
        adviceContainer
    ) {

        adviceContainer.innerHTML =
            adviceMsg;
    }
}
// ==========================================
// ★ Copeak Simple Mic Check
// 音読開始前に1回だけ音声認識を確認
// ==========================================

let micCheckRecognition = null;
let micCheckPassed = false;
let micCheckPassedLang = '';
let micCheckTimer = null;

const MIC_CHECK_WORDS = 5;
const MIC_CHECK_PASS_RATIO = 0.6;
const MIC_CHECK_TIMEOUT = 10000;


// ==========================================
// ★ 教材冒頭からMic Check用短文を取得
// ==========================================
function getMicCheckTargetText() {

    if (
        typeof currentCustomLesson === 'undefined' ||
        !currentCustomLesson
    ) {
        return '';
    }

    let source = '';

    if (
        currentCustomLesson.type === 'dialogue' &&
        Array.isArray(currentCustomLesson.dialogue)
    ) {

        const first =
            currentCustomLesson.dialogue.find(
                line =>
                    line &&
                    line.text &&
                    line.text.trim()
            );

        source =
            first
                ? first.text
                : '';

    } else {

        source =
            currentCustomLesson.eng || '';
    }


    const segments =
        segmentSpeechText(
            source.trim(),
            getCurrentLessonLang()
        );


    let count = 0;
    let result = '';


    for (const segment of segments) {

        result += segment.text;

        if (
            segment.isWord &&
            segment.normalized
        ) {
            count++;
        }

        if (
            count >= MIC_CHECK_WORDS
        ) {
            break;
        }
    }


    return result.trim();
}


// ==========================================
// ★ 読み上げた内容との一致率
// ==========================================
function getMicCheckMatchRatio(
    target,
    spoken
) {

    const lang =
        getCurrentLessonLang();


    const toTokens = text =>
        segmentSpeechText(
            text,
            lang
        )
        .filter(
            item =>
                item.isWord &&
                item.normalized
        )
        .map(
            item =>
                item.normalized
        );


    const targetTokens =
        toTokens(target);

    const spokenTokens =
        toTokens(spoken);


    if (
        targetTokens.length === 0 ||
        spokenTokens.length === 0
    ) {
        return 0;
    }


    let matched = 0;
    let position = 0;


    for (const spokenWord of spokenTokens) {

        for (
            let i = position;
            i < targetTokens.length;
            i++
        ) {

            if (
                spokenWord ===
                targetTokens[i]
            ) {

                matched++;
                position = i + 1;
                break;
            }
        }
    }


    return (
        matched /
        targetTokens.length
    );
}


// ==========================================
// ★ シンプルなMic Check画面
// ==========================================
function ensureMicCheckUI() {

    let modal =
        document.getElementById(
            'micCheckModal'
        );


    if (modal) {
        return modal;
    }


    modal =
        document.createElement('div');


    modal.id =
        'micCheckModal';


    modal.className =
        'hidden fixed inset-0 z-[30000] ' +
        'bg-black/40 flex items-center justify-center p-4';


    modal.innerHTML = `
        <div class="
            w-full
            max-w-md
            bg-white
            rounded-2xl
            shadow-2xl
            p-6
            text-center
        ">

            <div class="text-4xl mb-2">
                🎙️
            </div>

            <h2 class="
                text-xl
                font-black
                text-stone-800
                mb-1
            ">
                音声チェック
            </h2>

            <p class="
                text-sm
                text-stone-500
                mb-5
            ">
                下の部分を声に出して読んでください
            </p>

            <div
                id="micCheckTarget"
                class="
                    bg-stone-50
                    border
                    border-stone-200
                    rounded-xl
                    p-4
                    text-lg
                    font-bold
                    text-stone-800
                    leading-relaxed
                    mb-4
                "
            ></div>

            <div
                id="micCheckStatus"
                class="
                    text-sm
                    font-bold
                    text-blue-600
                    min-h-[24px]
                    mb-5
                "
            >
                🎙️ 聞いています…
            </div>

            <div
                id="micCheckActions"
                class="hidden"
            >

                <button
                    id="micCheckStartBtn"
                    type="button"
                    onclick="beginReadingAfterMicCheck()"
                    class="
                        hidden
                        w-full
                        py-3
                        rounded-xl
                        bg-emerald-700
                        hover:bg-emerald-800
                        text-white
                        font-black
                        mb-2
                    "
                >
                    音読を始める
                </button>

                <button
                    id="micCheckRetryBtn"
                    type="button"
                    onclick="startMicCheck()"
                    class="
                        hidden
                        w-full
                        py-3
                        rounded-xl
                        bg-stone-200
                        hover:bg-stone-300
                        text-stone-700
                        font-bold
                        mb-2
                    "
                >
                    もう一度確認する
                </button>

                <button
                    type="button"
                    onclick="cancelMicCheck()"
                    class="
                        text-sm
                        text-stone-400
                        hover:text-stone-600
                    "
                >
                    キャンセル
                </button>

            </div>

        </div>
    `;


    document.body.appendChild(
        modal
    );


    return modal;
}


// ==========================================
// ★ ステータス表示
// ==========================================
function setMicCheckStatus(
    type,
    message
) {

    const el =
        document.getElementById(
            'micCheckStatus'
        );


    if (!el) return;


    el.textContent =
        message;


    const colors = {

        listening:
            'text-blue-600',

        success:
            'text-emerald-700',

        error:
            'text-red-600'
    };


    el.className =
        'text-sm font-bold min-h-[24px] mb-5 ' +
        (
            colors[type] ||
            'text-stone-500'
        );
}

// ==========================================
// ★ Mic Check完全終了後に成功UIを表示
// ==========================================
function completeMicCheckSuccess(
    rec,
    actions,
    startBtn,
    retryBtn
) {

    if (
        rec !==
        micCheckRecognition
    ) {
        return;
    }


    micCheckRecognition =
        null;


    setMicCheckStatus(
        'success',
        '✓ 音声認識OK'
    );


    actions?.classList.remove(
        'hidden'
    );


    startBtn?.classList.remove(
        'hidden'
    );


    retryBtn?.classList.add(
        'hidden'
    );


    setRecognitionHealth(
        'done',
        '音声認識チェックOK ✓'
    );
}

// ==========================================
// ★ Mic Check開始
// ==========================================
function startMicCheck() {

    if (
        !window.SpeechRecognition
    ) {

        if (
            typeof showMsg === 'function'
        ) {

            showMsg(
                'お使いのブラウザは音声認識に対応していません'
            );
        }

        return;
    }


    const target =
        getMicCheckTargetText();


    // Mic Check用の文章が作れない場合は
    // 従来どおりそのまま音読開始
    if (!target) {

        startRecordingSession();
        return;
    }


    // ------------------------------------------
    // 古いMic Checkを停止
    // ------------------------------------------
    if (micCheckRecognition) {

        const oldRec =
            micCheckRecognition;

        micCheckRecognition =
            null;

        try {
            oldRec.abort();
        } catch (e) {}
    }


    if (micCheckTimer) {

        clearTimeout(
            micCheckTimer
        );

        micCheckTimer = null;
    }


    micCheckPassed =
        false;


    // ------------------------------------------
    // UI
    // ------------------------------------------
    const modal =
        ensureMicCheckUI();


    modal.classList.remove(
        'hidden'
    );


    const targetEl =
        document.getElementById(
            'micCheckTarget'
        );


    const actions =
        document.getElementById(
            'micCheckActions'
        );


    const startBtn =
        document.getElementById(
            'micCheckStartBtn'
        );


    const retryBtn =
        document.getElementById(
            'micCheckRetryBtn'
        );
        if (startBtn) {
    startBtn.innerText =
        window.copeakMicCheckReadyOnly === true
            ? '✅ READYにする'
            : '音読を始める';
}


    if (targetEl) {

        targetEl.textContent =
            target;
    }


    actions?.classList.add(
        'hidden'
    );


    startBtn?.classList.add(
        'hidden'
    );


    retryBtn?.classList.add(
        'hidden'
    );


    setMicCheckStatus(
        'listening',
        '🎙️ 聞いています…'
    );


    setRecognitionHealth(
        'checking',
        '音声を確認しています…'
    );


    // ------------------------------------------
    // 本番とは別のSpeechRecognition
    // ------------------------------------------
    const rec =
        new window.SpeechRecognition();


    rec.lang =
        getCurrentLessonLang();


    rec.interimResults =
        true;


    rec.continuous =
        true;


    micCheckRecognition =
        rec;


    // ======================================
    // Recognition結果
    // ======================================
    rec.onresult =
        event => {

            if (
                rec !==
                micCheckRecognition
            ) {
                return;
            }


            let spoken =
                '';


            for (
                let i = 0;
                i < event.results.length;
                i++
            ) {

                const transcript =
                    event.results[i][0]
                        ?.transcript || '';


                if (
                    transcript.trim()
                ) {

                    spoken =
                        joinTranscript(
                            spoken,
                            transcript
                        );
                }
            }


            if (
                !spoken.trim()
            ) {
                return;
            }


            setMicCheckStatus(
                'listening',
                '聞き取っています…'
            );


            const ratio =
                getMicCheckMatchRatio(
                    target,
                    spoken
                );


            // ==================================
            // 成功
            // ==================================
            if (
    ratio >=
    MIC_CHECK_PASS_RATIO
) {

    micCheckPassed =
        true;


    micCheckPassedLang =
        getCurrentLessonLang();


    if (micCheckTimer) {

        clearTimeout(
            micCheckTimer
        );

        micCheckTimer =
            null;
    }


    // ======================================
    // Mic Check Recognitionが
    // 完全終了するまでSTARTさせない
    // ======================================
    setMicCheckStatus(
        'listening',
        '✓ 音声認識OK・終了処理中…'
    );


    actions?.classList.add(
        'hidden'
    );


    try {

        rec.stop();

    } catch (e) {

        completeMicCheckSuccess(
            rec,
            actions,
            startBtn,
            retryBtn
        );
    }
}
        };
// ======================================
// Mic Check Recognition完全終了
// ======================================
rec.onend = () => {

    if (
        rec !==
        micCheckRecognition
    ) {
        return;
    }


    if (
        micCheckPassed
    ) {

        completeMicCheckSuccess(
            rec,
            actions,
            startBtn,
            retryBtn
        );
    }
};
    // ======================================
    // Recognition ERROR
    // ======================================
    rec.onerror =
        event => {

            if (
                rec !==
                micCheckRecognition
            ) {
                return;
            }


            const error =
                event?.error || '';


            if (
                error === 'aborted'
            ) {
                return;
            }


            if (
                error === 'not-allowed' ||
                error === 'denied' ||
                error ===
                    'service-not-allowed'
            ) {

                showMicCheckFailure(
                    'マイクの使用を許可してください。'
                );

                return;
            }


            if (
                error ===
                'audio-capture'
            ) {

                showMicCheckFailure(
                    'マイクを確認できませんでした。端末のマイク設定を確認してください。'
                );

                return;
            }


            // no-speechは10秒タイマーに任せる
            if (
                error === 'no-speech'
            ) {
                return;
            }


            showMicCheckFailure(
                '声を確認できませんでした。もう一度お試しください。'
            );
        };


    // ======================================
    // 10秒間確認できなかった場合
    // ======================================
    micCheckTimer =
        setTimeout(() => {

            if (
                !micCheckPassed
            ) {

                showMicCheckFailure(
                    '声を確認できませんでした。マイクに向かって、もう一度読んでみてください。'
                );
            }

        }, MIC_CHECK_TIMEOUT);


    // ======================================
    // START
    // ======================================
    try {

        rec.start();

    } catch (e) {

        showMicCheckFailure(
            '音声認識を開始できませんでした。もう一度お試しください。'
        );
    }
}


// ==========================================
// ★ Mic Check失敗
// ==========================================
function showMicCheckFailure(
    message
) {

    micCheckPassed =
        false;


    if (micCheckTimer) {

        clearTimeout(
            micCheckTimer
        );

        micCheckTimer =
            null;
    }


    if (micCheckRecognition) {

        const rec =
            micCheckRecognition;


        micCheckRecognition =
            null;


        try {

            rec.abort();

        } catch (e) {}
    }


    setMicCheckStatus(
        'error',
        `⚠ ${message}`
    );


    const actions =
        document.getElementById(
            'micCheckActions'
        );


    const startBtn =
        document.getElementById(
            'micCheckStartBtn'
        );


    const retryBtn =
        document.getElementById(
            'micCheckRetryBtn'
        );


    actions?.classList.remove(
        'hidden'
    );


    startBtn?.classList.add(
        'hidden'
    );


    retryBtn?.classList.remove(
        'hidden'
    );


    setRecognitionHealth(
        'error',
        message
    );
}


// ==========================================
// ★ Mic Check成功後
// ユーザーが押してから本番開始
// ==========================================
function beginReadingAfterMicCheck() {

    if (
        !micCheckPassed
    ) {
        return;
    }


    document
        .getElementById(
            'micCheckModal'
        )
        ?.classList.add(
            'hidden'
        );


    // ======================================
    // Mic Checkの認識内容を
    // 本番スコアへ絶対に持ち込まない
    // ======================================
    accumulatedTranscript =
        '';


    currentInterim =
        '';


    recordStartTime =
    0;

// ★ Togetherモードではここで本番を開始せずREADYだけ通知
if (window.copeakMicCheckReadyOnly === true) {

    const callback =
        window.copeakMicCheckReadyCallback;

    window.copeakMicCheckReadyOnly = false;
    window.copeakMicCheckReadyCallback = null;

    if (typeof callback === 'function') {
        callback();
    }

    return;
}

startRecordingSession();
}


// ==========================================
// ★ キャンセル
// ==========================================
function cancelMicCheck() {

    if (micCheckTimer) {

        clearTimeout(
            micCheckTimer
        );

        micCheckTimer =
            null;
    }


    if (micCheckRecognition) {

        const rec =
            micCheckRecognition;


        micCheckRecognition =
            null;


        try {

            rec.abort();

        } catch (e) {}
    }


    document
        .getElementById(
            'micCheckModal'
        )
        ?.classList.add(
            'hidden'
        );

    window.copeakMicCheckReadyOnly = false;
    window.copeakMicCheckReadyCallback = null;

    setRecognitionHealth(
        'idle',
        '音読開始前です'
    );
}


// ==========================================
// ★ 本番Recognition障害時
// 次回はMic Checkをやり直す
// ==========================================
const originalFailRecognitionForMicCheck =
    failRecognition;


failRecognition =
    function(message) {

        micCheckPassed =
            false;


        micCheckPassedLang =
            '';


        return originalFailRecognitionForMicCheck(
            message
        );
    };


// ==========================================
// ★ START / FINISH
// ==========================================
toggleRecording =
    function() {

        if (
            !window.SpeechRecognition
        ) {

            if (
                typeof showMsg ===
                'function'
            ) {

                showMsg(
                    'お使いのブラウザは音声認識に対応していません'
                );
            }

            return;
        }


        // ======================================
        // 録音中 → FINISH
        // ======================================
        if (
            isMainRecording
        ) {

            finishRecordingSession();
            return;
        }


        // ======================================
        // 同じセッション・同じ言語で
        // Mic Check済みなら省略
        // ======================================
        if (
            micCheckPassed &&
            micCheckPassedLang ===
                getCurrentLessonLang()
        ) {

            startRecordingSession();
            return;
        }


        // ======================================
        // 初回
        // ======================================
        startMicCheck();
    };


// ==========================================
// ★ 外部からも使用可能にする
// ==========================================
window.toggleRecording =
    toggleRecording;

window.startMicCheck =
    startMicCheck;

window.beginReadingAfterMicCheck =
    beginReadingAfterMicCheck;

window.cancelMicCheck =
    cancelMicCheck;