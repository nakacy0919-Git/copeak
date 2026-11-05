# GCC Practice English and Copeak Grammar Training — recognition lifecycle parity

Updated: 2026-11-05

## Reference implementation

GCC routes Practice English to `src/pages/public/PracticePageV170.js`, imported through `src/app.js`. Its microphone lifecycle is: begin -> cancel speech synthesis -> start recognizer -> show live transcript -> onend automatically starts a new recognizer after 250 ms while the student is still recording -> **only End & Score** finishes the logical recording and evaluates the combined transcript. Web Speech API settings: `lang='en-US'`, `continuous=true`, `interimResults=true`, `maxAlternatives=1`. End & Score has a 1600ms fallback for missing `onend`.

## Current Copeak implementation

`grammar-training.js` now follows this exact sequence for iPad Safari, iPad Chrome and desktop. The learner's logical session (`state.recording`) is separate from each new `SpeechRecognition` instance (`state.recognition`). A browser-initiated `onend` does **not** score; if the learner has not pressed End & Score, the next recognizer is scheduled after 250 ms. The logical session accumulates finalized segments across restarts; final-result indices are deduplicated per recognizer to prevent repeating earlier text.

Starting the session cancels speech synthesis unconditionally, matching GCC. A user-triggered End & Score stops the active recognizer, cancels a pending restart, and scores on `onend` or after 1600 ms. End & Score is available immediately after the user starts a recording, including during the brief auto-restart gap. Navigating away or pressing a different stage cancels and detaches recognition without scoring.

**Removed competing Copeak-only mic control:** startup watchdog, fabricated ready-state timeout, 7-second missing-transcript timer, 18-second silence timer, browser-specific `continuous=false` handling and automatic cancellation on `visibilitychange`. UI signal badges are purely observational; independent mic-volume test remains separate. No changes to the main Copeak `speech.js` or vocabulary-check's recognition controller.

Copeak's `vocabulary-reading.js` only evaluates the recognized text; its existing Accuracy, five-stage pass requirements, per-learner progress and saved attempts are unchanged. `grammar-training.html` cache-busts the replacement controller.

## Verification

- Five repeated iPad-style reads with GCC-compatible synthesis reset, button states, explicit scoring and transcript display.
- Browser automatic `onend` / 250ms restart / cumulative final fragments, without unintended scoring or duplicate final results.
- Explicit stop during the 250ms restart gap and synchronous `onend` handling.
- Next-stage recording, timeout fallback, stale event protection and fatal-mic-error reset.
- Independent microphone diagnostic safely releases tracks and AudioContext.
- The Copeak grammar page loads a standalone controller; `index.html`'s bundled primary speech and `speech-debug.js` are **not** loaded on this page.

**Limit:** these are simulated event tests. Real iPad Safari and Chrome microphone input must still be verified. GCC-style controller parity cannot guarantee successful transcription if the browser service itself returns no speech result.
