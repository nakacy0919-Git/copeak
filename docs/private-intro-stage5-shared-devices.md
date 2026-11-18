# Copeak Stage 5 — shared-device privacy and private lesson storage

**Status:** Development branch only. Not deployed, not merged, not tested with live students.

## What changed

Copeak now keeps personalized Classroom self-introduction English **in memory while the lesson is open**, instead of writing the original English paragraph to `CopeakDB / CustomLessons`.

To preserve the existing practice history and Direct Sync architecture, a **metadata-only shell** is stored under the assignment and authenticated student identifiers. It keeps scores, timestamps, Direct Sync credentials/queued result status and class assignment metadata; it does not contain the lesson English, translation, model audio or attached picture. The sender always sends individualized text through the verified cross-origin browser-message handshake created in Stage 4.

- `private-intro-storage.js`: `storedLesson`, `restoreRuntimeLesson`, `scrubExisting`, `publicLibraryLessons` and reopening guard.
- `private-intro-receiver.js`: verifies a matching Classroom account/assignment/nonce before accepting the `copeak-classroom-intro-end` logout message. Copeak then clears its in-memory lesson content and returns to a clean page. Unrelated Copeak tabs are not affected.
- `app-bundle.js`: save private shells instead of English, refuse opening empty shells from Library, keep active text in memory during score saves, scrub old private text before Library loads, show an End Practice button and clear memory on `pagehide`. Personal speech transcripts are also omitted from Copeak Rewards data for these lessons.
- `classroom-sync.js`: preserve the active in-memory paragraph when a Direct Sync credential updates the database shell; retain score queue/history.
- `copeak-library.js`: hide private shells from the separate Library importer.
- `index.html`: load the private storage guard before the main bundle.
- `tests/private-intro-storage.test.cjs`: tests metadata-only persistence, preserving score history, cross-student isolation, startup scrub, and source-level regression.

## Release prerequisites (all mandatory)

1. Review and run tests manually: `node --test tests/private-intro-storage.test.cjs tests/private-intro-receiver.test.cjs`. Confirm there are no test failures. These tests have been added but **GitHub CI has not yet been run for this branch**.
2. Run the Classroom test suite independently, including the new logout test and the staged RLS test fixture. Test on a disposable PostgreSQL/Supabase project, never the production database.
3. In a real browser with test accounts, verify teacher assignment creation, student enrollment, private intro save + reopen, browser refresh, two students on the same iPad, explicit logout, and all Read/Paced/Vanish/Shadow modes.
4. Verify history and Direct Sync (including offline queue and subsequent reconnect), Safari popup/opening behavior, and back-forward browser cache cleanup.
5. Approve separately the exact database migration, the two repository merges and the deployment steps. **Receiver first, database when verified, Classroom sender last**.

## Remaining limits

- This change removes the **English lesson body** from Copeak's main IndexedDB record; it does not clear the student's authenticated Supabase draft, nor should it.
- A metadata-only IndexedDB record, score history, student/assignment UUIDs, and Direct Sync retry records still exist locally. These must be treated as potentially identifiable on a shared device.
- Browser speech recognition may transmit audio to the browser vendor; no claim of fully offline/private speech recognition is made.
- Clearing app memory and local HTML on pagehide and providing End Practice reduce accidental shoulder-surfing, but do **not** provide an operating-system-level multi-user isolation boundary. Shared-device staff should use separate browser profiles or clear site data between users.
- Unsaved speech score sync should be tested before release; the queue persists independently of the personal English passage.

## Deployment lock

Both repositories retain `vercel.json` with `git.deploymentEnabled=false`. No branch deploy, production deploy, SQL DDL, main merge or live-student migration is part of this work.
