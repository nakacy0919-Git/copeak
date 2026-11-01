# Copeak Japanese sentence translations — coverage and QA status

## Coverage (2026-11-01)
- Study examples: **5,000 / 5,000** contain `example_ja`.
- Diagnostic examples: **800 / 800** match source English and contain `example_ja`.
- Original editorial drafts retained: **41**, not yet certified by a teacher.
- Machine generated drafts: **4,960 unique English sentences**, including **759 diagnostic items**.
- Highlight mapping: **693/5,000** study examples and **163/800** diagnostic examples have a directly alignable `focus_ja`. The others need focused review.
- One diagnostic English sentence (CK7-153) intentionally differs from the original 5,000-example bank.

## Important: not approved for learner-facing production
The offline translation pass met data-coverage checks but failed editorial spot checks. Examples of machine mistranslation:
- CK1-001: “Our class begins at nine” was mistranslated as “授業は9つで始まります”.
- CK1-005: “Nice to meet you, Maria” was mistranslated literally as “あなたを満たすためにニース, マリア”.
- CK4-066: “in place of paper worksheets” lost “の代わりに”.
- CK7-003: “call into question” was treated as literal “call / question”.
- CK8-006: “tantamount to” was rendered “タンタル”.
- CK8-007: “argument” was rendered “引数” instead of “議論”.
An elementary heuristic found **35 especially suspicious translations**, but subtle errors are not counted. This is NOT the number of total mistranslations.

## Review gates before production
1. Replace mistranslated draft sentences with natural, faithful Japanese; prioritize diagnostic 800 and idioms at levels 6–8.
2. Ensure the underlined English chunk corresponds to an accurately positioned Japanese `focus_ja`; do not artificially claim alignment.
3. Verify punctuation, tense, negation, subject, objects, idioms and school-appropriate diction.
4. Run `node tests/ja_translations_5000.test.mjs`, `node tests/v8_2_results.test.mjs` and `node tests/v8_4_review.test.mjs`.
5. Do not manually promote this draft-only commit to Vercel production prior to completion of semantic QA.

The translation job is a one-off source backfill. The `translation_status` is a quality label, not a statement of instructional correctness.
