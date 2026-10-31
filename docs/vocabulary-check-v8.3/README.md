# Copeak Vocabulary Check v8.3 — Copeak-style read-aloud review

Production change scope: Vocabulary Check only. The rest of Copeak and Copeak Classroom stay unchanged.

## Learner changes
- Results page: two tabs (Result / Review & read), with no anonymous pilot CSV export UI and no technical diagnostics tab.
- Level summary shows **Lv.1–8** plus a concise **school-stage / Eiken-equivalent** label. The word "equivalent" is important: these are provisional learning descriptors, not earned Eiken grades.
- Review tab: **tap the English example or speaker icon to hear the example** via the browser's speech synthesis.
- Tap **Start reading**, speak the **whole English example**, and see live recognized English. LCS word-order alignment, based on Copeak's `speech.js` scoring pattern, highlights matched words green and additional/unmatched words red. A semicircle shows the recognized-word match percent out of 100.
- Speech service and microphone support depend on the browser. Never invent a match score if speech is not recognized or unavailable.
- The Japanese meaning of the highlighted expression always appears. A vetted matching full-sentence Japanese translation appears where available (the existing 40 draft sentence translations); the remainder is not silently translated.
- No user-facing recording download/replay or automatic pilot CSV export. Web Speech recognition may use the browser/provider's speech service, but no transcript is deliberately sent to CopeakDB/Classroom by this module.

## Validation
```sh
node tests/v8_1_quality.test.mjs
node tests/v8_1_landing.test.mjs
node tests/v8_1_pop_landing.test.mjs
node tests/v8_2_results.test.mjs
node tests/v8_3_reading.test.mjs
```

Deployment is manual; Vercel auto-deployment remains disabled in `vercel.json`.
