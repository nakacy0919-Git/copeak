# GCC Practice English vs Copeak Grammar Training — speech recognition comparison

Date: 2026-11-05

## Verified active GCC implementation

GCC route imports and binds \`src/pages/public/PracticePageV170.js\` from \`src/app.js\`. The working Practice English recorder uses:

- \`recognition.continuous = true\`, \`interimResults = true\`, \`maxAlternatives = 1\`.
- A logical recording session (\`recording\` / \`ending\`) separate from each Web Speech API recognition instance.
- \`onend\` re-creates the recognition instance after 250 ms when the learner has **not** pressed End & Score.
- \`segments[]\` accumulates finalized transcript fragments using the event's \`resultIndex\`; interim text is shown live.
- **Only** an explicit End & Score ends the logical recording and triggers scoring, with a 1.6 s final-result fallback.

Source: \`src/pages/public/PracticePageV170.js\`, functions \`begin\`, \`listen\`, \`updateLive\`, \`finish\` and End handler.

## Copeak defects before the patch

- iPad deliberately set \`continuous=false\`, unlike GCC.
- Its recognizer \`onend\` immediately finalized the reading, even when no End & Score click occurred.
- Its result handler replaced the finalized transcript with each event's current full results, with no accumulation across newly instantiated recognizers.
- Its 3-second end watchdog was useful for hanging \`stop()\`, but did not cover ordinary browser auto-end on silence and did not keep a multi-recognizer reading session open.

## Patched Copeak behavior

- Use GCC's \`continuous=true\`, \`interimResults=true\`, \`maxAlternatives=1\` across iPad Safari, iPad Chrome, and desktop.
- Keep the user's logical recording open across recognizer \`onend\` callbacks, auto-restarting a new instance after 250 ms unless the learner explicitly ended the reading.
- Keep cumulative finalized transcript and show the current interim text without duplicating repeated finalized result indices.
- Permit End & Score during the brief restart gap; cancel pending reconnect timers during navigation and when the learner stops.
- Score exactly once following explicit End & Score; a 1.6-second watchdog preserves available transcript if WebKit omits its final \`onend\`.
- Preserve the prior mic/event diagnostics, gentle Stop-button pulse, iPad no-result warning, manual reconnect, local progress and five-stage Accuracy thresholds.
- Bump \`grammar-training.js\` URL version to prevent stale Safari browser caching.

## Verification and limitation

Simulated iPad/WebKit and standard Web Speech API lifecycles: three continuous readings; browser auto-end / restart / further speech / explicit stop; repeated \`resultIndex\` events without duplication; no-speech recovery; stop in restart gap; missing \`onend\`; timeout; stale event protection; new-stage capture; and standalone microphone check.

**Real-device iPad Safari and Chrome speech-capture testing remains necessary.** This patch aligns Copeak with the currently working GCC implementation, but cannot repair a WebKit engine that stops emitting all speech recognition events.
