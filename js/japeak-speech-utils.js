/* Japeak speech utilities: deterministic, browser-independent scoring helpers. */
(function (root) {
    'use strict';

    const DIGITS = ['ぜろ', 'いち', 'に', 'さん', 'よん', 'ご', 'ろく', 'なな', 'はち', 'きゅう'];
    const COUNTERS = {
        '1人': 'ひとり', '2人': 'ふたり',
        '1つ': 'ひとつ', '2つ': 'ふたつ', '3つ': 'みっつ',
        '4つ': 'よっつ', '5つ': 'いつつ', '6つ': 'むっつ',
        '7つ': 'ななつ', '8つ': 'やっつ', '9つ': 'ここのつ'
    };
    const SPELLING_ALIASES = [
        ['有難う', 'ありがとう'], ['有り難う', 'ありがとう'],
        ['御座います', 'ございます'], ['宜しく', 'よろしく'],
        ['済みません', 'すみません'], ['すいません', 'すみません'],
        ['御免なさい', 'ごめんなさい'], ['下さい', 'ください'],
        ['分かる', 'わかる'], ['解る', 'わかる'], ['判る', 'わかる'],
        ['今日', 'きょう'], ['明日', 'あした'], ['昨日', 'きのう'],
        ['一緒', 'いっしょ'], ['私', 'わたし'], ['僕', 'ぼく'],
        ['何', 'なに'], ['行く', 'いく'], ['来る', 'くる'],
        ['食べる', 'たべる'], ['飲む', 'のむ'], ['言う', 'いう'],
        ['話す', 'はなす'], ['見る', 'みる'], ['聞く', 'きく'],
        ['先生', 'せんせい'], ['良い', 'いい'], ['無い', 'ない'],
        ['有る', 'ある'], ['お願いします', 'おねがいします'],
        ['お願いいたします', 'おねがいいたします']
    ];

    function stripRubyMarkup(text) {
        return String(text ?? '')
            .replace(/<rt\b[^>]*>[\s\S]*?<\/rt\s*>/gi, '')
            .replace(/<[^>]*>/g, '');
    }

    function readUnderTenThousand(value) {
        const n = Number(value);
        if (n <= 0) return '';
        let result = '';
        const thousands = Math.floor(n / 1000);
        const hundreds = Math.floor(n % 1000 / 100);
        const tens = Math.floor(n % 100 / 10);
        const ones = n % 10;
        if (thousands === 1) result += 'せん';
        else if (thousands === 3) result += 'さんぜん';
        else if (thousands === 8) result += 'はっせん';
        else if (thousands) result += DIGITS[thousands] + 'せん';
        if (hundreds === 1) result += 'ひゃく';
        else if (hundreds === 3) result += 'さんびゃく';
        else if (hundreds === 6) result += 'ろっぴゃく';
        else if (hundreds === 8) result += 'はっぴゃく';
        else if (hundreds) result += DIGITS[hundreds] + 'ひゃく';
        if (tens === 1) result += 'じゅう';
        else if (tens) result += DIGITS[tens] + 'じゅう';
        if (ones) result += DIGITS[ones];
        return result;
    }

    function readJapaneseNumber(raw) {
        const digits = String(raw ?? '');
        if (!/^\d{1,12}$/.test(digits)) return digits;
        if (digits.length > 1 && digits.startsWith('0')) {
            return [...digits].map(ch => DIGITS[Number(ch)]).join('');
        }
        const value = Number(digits);
        if (value === 0) return 'ぜろ';
        const groups = ['', 'まん', 'おく'];
        let result = '';
        for (let i = 0; i < groups.length; i++) {
            const group = Math.floor(value / (10000 ** i)) % 10000;
            if (group) {
                const reading = readUnderTenThousand(group);
                result = (i && group === 1 ? 'いち' : reading) + groups[i] + result;
            }
        }
        return result;
    }

    function normalizeKana(text) {
        return String(text ?? '')
            .normalize('NFKC')
            .replace(/[\u30a1-\u30f6]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0x60));
    }

    function rubyReadingPairs(rubyHtml) {
        const pairs = [];
        const regex = /<ruby\b[^>]*>([\s\S]*?)<\/ruby\s*>/gi;
        let match;
        while ((match = regex.exec(String(rubyHtml ?? ''))) !== null) {
            const reading = [...match[1].matchAll(/<rt\b[^>]*>([\s\S]*?)<\/rt\s*>/gi)]
                .map(entry => stripRubyMarkup(entry[1])).join('');
            const base = stripRubyMarkup(match[1]);
            if (base && reading && base !== reading) pairs.push([normalizeKana(base), normalizeKana(reading)]);
        }
        return pairs.sort((a, b) => b[0].length - a[0].length);
    }

    function normalizeJapaneseText(text, rubyHint = '') {
        let normalized = normalizeKana(stripRubyMarkup(text));
        // Resolve thousands separators before parsing digits (e.g. 10,000).
        normalized = normalized.replace(/\d{1,3}(?:,\d{3})+\b/g, number => number.replace(/,/g, ''));
        // Handle common counters before general number conversion.
        normalized = normalized.replace(/\d+(?:人|つ)/g, token => COUNTERS[token] || token);
        normalized = normalized.replace(/\d+/g, token => readJapaneseNumber(token));

        // Ruby readings are lesson-specific; they avoid guessing ambiguous kanji.
        for (const [base, reading] of rubyReadingPairs(rubyHint)) {
            normalized = normalized.split(base).join(reading);
        }
        for (const [base, reading] of SPELLING_ALIASES) {
            normalized = normalized.split(base).join(reading);
        }
        // Keep phonetic long marks and small kana; these affect the spoken wording.
        return normalized
            .replace(/[\s。、！？!?「」『』（）()\[\]【】・,.:：；;…"'‘’“”]/g, '')
            .toLowerCase();
    }

    function levenshteinDistance(a, b) {
        const x = String(a ?? '');
        const y = String(b ?? '');
        if (!x.length) return y.length;
        if (!y.length) return x.length;
        // Two rows: O(min(n,m)) memory, rather than a full matrix.
        const long = x.length >= y.length ? x : y;
        const short = x.length >= y.length ? y : x;
        let prev = Array.from({ length: short.length + 1 }, (_, i) => i);
        let next = new Array(short.length + 1);
        for (let i = 1; i <= long.length; i++) {
            next[0] = i;
            for (let j = 1; j <= short.length; j++) {
                next[j] = Math.min(
                    prev[j] + 1,
                    next[j - 1] + 1,
                    prev[j - 1] + (long.charAt(i - 1) === short.charAt(j - 1) ? 0 : 1)
                );
            }
            [prev, next] = [next, prev];
        }
        return prev[short.length];
    }

    function similarityPercent(spoken, target) {
        if (!spoken || !target) return 0;
        const maxLength = Math.max(spoken.length, target.length);
        return Math.max(0, Math.round((1 - levenshteinDistance(spoken, target) / maxLength) * 100));
    }

    function splitJapaneseSentencesFromHtml(source) {
        const pieces = [];
        const input = String(source ?? '').replace(/<br\s*\/?>/gi, '\n');
        let current = '';
        let inReading = false;
        const tokens = input.match(/<[^>]*>|[^<]+/g) || [];
        function flush() {
            if (stripRubyMarkup(current).trim()) pieces.push(current.trim());
            current = '';
        }
        for (const token of tokens) {
            if (token.startsWith('<')) {
                if (/^<rt\b/i.test(token)) inReading = true;
                if (/^<\/rt\b/i.test(token)) inReading = false;
                current += token;
                continue;
            }
            for (const ch of token) {
                if (ch === '\n' && !inReading) {
                    flush();
                } else {
                    current += ch;
                    if (!inReading && /[。！？!?]/.test(ch)) flush();
                }
            }
        }
        flush();
        return pieces;
    }

    function splitTranslatedSentences(text) {
        const raw = String(text ?? '').trim();
        if (!raw) return [];
        const lines = raw.split(/\n|<br\s*\/?>/i).map(s => s.trim()).filter(Boolean);
        if (lines.length > 1) return lines;
        return (raw.match(/[^.!?。！？]+[.!?。！？]*/g) || [raw])
            .map(s => s.trim()).filter(Boolean);
    }

    const api = {
        normalizeJapaneseText, stripRubyMarkup, readJapaneseNumber,
        similarityPercent, levenshteinDistance,
        splitJapaneseSentencesFromHtml, splitTranslatedSentences
    };
    root.JapeakSpeechUtils = api;
    if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
