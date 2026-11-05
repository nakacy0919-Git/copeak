# GCC Practice English and Copeak Grammar Training — recognition lifecycle parity

Updated: 2026-11-05

## Reference implementation

GCC routes Practice English to `src/pages/public/PracticePageV170.js`, imported through `src/app.js`. Its microphone lifecycle is: begin -> cancel speech synthesis -> start recognizer -> show live transcript -> onend automatically starts a new recognizer after 250 ms while the student is still recording -> **only End & Score** finishes the logical recording and evaluates the combined transcript. Web Speech API settings: `lang='en-US'`, `continuous=true`, `interimResults=true`, `maxAlternatives=1`. End & Score has a 1600ms fallback for missing `onend`.

## Current Copeak implementation

`grammar-training.js` now follows this exact sequence for iPad Safari, iPad Chrome and desktop. The learner's logical session (`state.recording`) is separate from each new `SpeechRecognition` instance (`state.recognition`). A browser-initiated `onend` does **not** score; if the learner has not pressed End & Score, the next recognizer is scheduled after 250 ms. The logical session accumulates finalized segments across restarts; each recognizer’s current result snapshot replaces its own portion of the transcript, preventing duplicate cumulative results while accepting corrections. Interim-only words are retained when a recognizer automatically ends, and their use is disclosed after scoring.

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

## Follow-up investigation: 2026-11-05

Compared Copeak main `fc4042f` with GCC's active `src/pages/public/PracticePageV170.js`.
The previously ported controller already uses the same start, language, continuous/interim,
250 ms restart, explicit stop and 1600 ms fallback. Replacing these again is not a
supported fix for the reported device-level failure.

Confirmed code defects addressed in this follow-up:

- Interim text received before an automatic recognizer end was overwritten by the next
  recognizer's first result. Retain it at the boundary and mark the score as using
  unconfirmed text. Example: interim `I am`, end/restart, final `a student` now scores
  `I am a student`, rather than only `a student`.
- An append-only Set of accepted final indices ignored revised finals. Rebuild the
  current recognizer's contribution from its complete result snapshot. Previously
  confirmed recognizers remain unchanged. Removal of interim entries is reflected too.
- `onstart` incorrectly lit the audio badge. It means the recognition service started;
  only `onaudiostart` or observed speech/results now confirms the audio badge.

GCC's tone function creates Web Audio sine oscillators. Button and score tones are
feedback; the code does not use tones to switch the recognition microphone. Their
absence in Copeak does not establish why a device supplies no transcription.

Regression tests exercise actual controller event callbacks and assert the complete
text passed to scoring (in addition to retries, stale events, fallback and cleanup).
All grammar test files and JavaScript syntax checks passed after updating the script
cache version expectation.

Limits: microphone input on a physical iPad was not available. These confirmed
transcript defects explain missing words across reconnections, but do not prove the
cause of a session that receives no results at all. Permission, OS/service behavior,
embedded browser context and cached deployed code remain unverified. The main app's
speech controller and vocabulary review controller are separate and were not changed.
No production deployment or main-branch merge is included in this follow-up.
