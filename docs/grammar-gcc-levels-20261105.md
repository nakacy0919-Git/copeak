# Grammar read-aloud: GCC levels and bounded microphone recovery

Applies only to grammar-training.html: junior, senior and entrance exam reading.
The regular Copeak speech.js and vocabulary-reading.js are unchanged.

## Findings

The existing controller already matched GCC's language, continuous/interim settings,
250ms automatic reconnect and explicit End & Score with a 1600ms fallback. That
parity did not resolve the user's physical iPad report. The previous mock tests
supplied a result to every start, so did not establish that Safari captures sound
on the second or third attempt.

GCC also opens/resumes a Web Audio context for button feedback. Grammar training
had no corresponding audio feedback. Tones are not a microphone switch and their
addition is not proof of a native capture fix.

WebKit reports relevant audio-session failures, including repeated sessions which
send start/audiostart but no result:
- https://bugs.webkit.org/show_bug.cgi?id=321436
- https://bugs.webkit.org/show_bug.cgi?id=317741

These reports support a possible browser/service cause, not a confirmed diagnosis
of the user's device. No OS/version assumption is made.

## Changes

- A fresh recognizer is still used for each recording/reconnection.
- If no transcription has arrived after 8 seconds, abort the unresponsive instance
  and retry once after 500ms. Ignore stale callbacks. A second 8-second failure
  releases the controller and shows a user-gesture retry. No concurrent getUserMedia
  capture, continuous permission requests or infinite retry loop is introduced.
- Restore visible status/recovery messages, previously visually hidden by CSS.
- Grammar-only scoring matches GCC's normalized word edit distance, including
  insertions, deletions and substitutions. Ordinary vocabulary scoring is untouched.
- Level 1–5 use thresholds 80/90/90/95/100 and GCC's deterministic word masking.
  Keep the earned score for 2 seconds before advancing after a pass. Starting a
  deliberate repeat or navigating cancels the pending transition.
- Save best scores per level alongside existing best/cleared progress.
- Add gentle Web Audio sine tones for start/stop, gauge rise, next level and results;
  no HTML audio elements. An ON/OFF button stores the grammar sound preference.
  Existing Aurora gauge animation and >=90% confetti remain authoritative visuals.

## Validation and limits

Nine grammar test files pass, including 5 consecutive levels using the real scorer
through all three entry points, silent-service recovery, bounded failures, stale
callbacks, explicit stop, timeout fallback and navigation/page boundaries. Independent
edit-distance reference tests cover scoring; audio mocks check bounded volume, mute
and failure isolation. Syntax and diff checks pass.

Physical iPad microphone input remains unverified. Synthetic callbacks validate
controller behavior, not native audio capture. Public UI checks likewise cannot
prove the microphone failure is resolved on the user's iPad.
