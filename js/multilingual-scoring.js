/* Copeak non-English text matching. This module never replaces English scoring. */
(function (root) {
    'use strict';

    // These languages can be written without reliable word-separating spaces.
    // SpeechRecognition may add or remove spaces without changing the utterance.
    const GRAPHEME_LANGUAGES = /^(?:ko|ja|zh|th)(?:-|$)/i;
    const ENGLISH = /^en(?:-|$)/i;

    function isEnglishLanguage(lang) {
        return ENGLISH.test(String(lang || 'en-US'));
    }

    function usesGraphemeAlignment(lang) {
        return GRAPHEME_LANGUAGES.test(String(lang || ''));
    }

    function normalizeComparisonPart(value, lang) {
        let text = String(value == null ? '' : value).normalize('NFKC');
        try {
            text = text.toLocaleLowerCase(lang || 'en-US');
        } catch (_) {
            text = text.toLowerCase();
        }
        return text
            .replace(/[’'\-‐-‒–—―]/g, '')
            .replace(/[^\p{L}\p{M}\p{N}]/gu, '');
    }

    function splitGraphemes(value, lang) {
        const source = String(value == null ? '' : value);
        if (!source) return [];
        if (typeof Intl !== 'undefined' && typeof Intl.Segmenter === 'function') {
            try {
                return Array.from(
                    new Intl.Segmenter(lang || 'en-US', { granularity: 'grapheme' }).segment(source),
                    item => item.segment
                );
            } catch (_) {
                // Continue with the conservative Unicode code-point fallback.
            }
        }
        const points = Array.from(source);
        const result = [];
        for (const point of points) {
            if (/\p{M}/u.test(point) && result.length) {
                result[result.length - 1] += point;
            } else {
                result.push(point);
            }
        }
        return result;
    }

    // Keep punctuation and original spacing for the transcript display.
    // For Korean, Japanese, Chinese and Thai, a scored unit is a grapheme.
    function segmentForDisplay(value, lang) {
        return splitGraphemes(value, lang).map(text => {
            const normalized = normalizeComparisonPart(text, lang);
            return {
                text,
                isWord: normalized.length > 0,
                normalized
            };
        });
    }

    function buildComparisonUnits(value, lang) {
        const units = [];
        let displayWordIndex = 0;
        for (const segment of segmentForDisplay(value, lang)) {
            if (!segment.isWord) continue;
            const sourceIndex = displayWordIndex++;
            // NFKC can expand a single displayed symbol into multiple units.
            for (const part of splitGraphemes(segment.normalized, lang)) {
                const token = normalizeComparisonPart(part, lang);
                if (token) {
                    units.push({ token, sourceWordIndexes: [sourceIndex] });
                }
            }
        }
        return units;
    }

    function micCheckPassRatio(lang, englishRatio) {
        // The check verifies ASR readiness, not pronunciation quality.
        return isEnglishLanguage(lang) ? englishRatio : 0.50;
    }

    const api = Object.freeze({
        isEnglishLanguage,
        usesGraphemeAlignment,
        segmentForDisplay,
        buildComparisonUnits,
        micCheckPassRatio
    });
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = api;
    }
    if (root) root.CopeakMultilingualScoring = api;
})(typeof window !== 'undefined' ? window : globalThis);
