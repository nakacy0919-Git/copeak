# Copeak Vocabulary Check v8.2 — iPad-friendly results and read-aloud review

This development branch changes only the Vocabulary Check page, not Copeak's reading or Classroom features.

## Learner experience
- The **results screen occupies one viewport** on landscape iPad/desktop. Choose between **Result**, **Review & read**, and **Details** tabs; avoid scrolling the entire result page.
- Result tab: estimated level, interval, correct counts, level-based performance, and compact learning guidance.
- Review tab: **one missed expression at a time**, previous/next controls, highlighted English example, and the stored Japanese meaning of the target expression.
- **Hear the model** uses the browser's `speechSynthesis` (English); **Record my reading** uses microphone permission and `MediaRecorder`; **Play my reading** plays that recording locally. No audio data is sent to a server. Recording is deleted when changing tabs/items or leaving the page.
- Draft **full Japanese sentence translations for 40 representative items** (five per level) are in `data/v8-2-example-ja.json` and are shown only when the English source sentence matches exactly. These are drafts awaiting teacher review. For all other review items, the verified bank's Japanese *expression meaning* remains visible. Do not confuse it with a sentence-level translation.
- Details tab contains the technical evidence, limitations, and opt-in anonymous pilot-response export.

## Regression and validation
```bash
node tests/v8_1_quality.test.mjs
node tests/v8_1_landing.test.mjs
node tests/v8_1_pop_landing.test.mjs
node tests/v8_2_results.test.mjs
```

## Quality and security notes
- 505 focused diagnostic candidates are unchanged. Existing 5,000-chunk learning bank and 800-question candidate bank remain unchanged.
- Adaptive difficulty and browser-local history key are unchanged.
- SpeechSynthesis voice selection and MediaRecorder support vary by browser/iPadOS. Mic permission is only requested after a learner taps the recording button; unsupported browsers display a clear message. No automated speech recognition or pronunciation scoring is included.
- The levels are not official Eiken or CEFR certifications. English-sentence translations and device-specific playback still require teacher and real-device review.

## Deployment
This branch is **not production**. Do not update `main` or run Vercel production deployment until approved.
