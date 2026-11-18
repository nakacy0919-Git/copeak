# Private Self-Introduction Handoff — Copeak receiver

Implemented in `app-bundle.js` on the isolated branch `feature/classroom-private-intro-handoff-20261118`.

## Behavior
- Receives `self_intro_handoff=1` launch metadata from Copeak Classroom, but **no student-written English in the URL**.
- After IndexedDB initializes, validates `window.opener`, allowed Classroom origin, assignment UUID, student UUID, and a one-time nonce.
- Announces readiness only to the expected Classroom origin.
- Accepts a single `copeak-classroom-intro-payload` message from that opener, and validates the same origin/IDs/nonce and maximum 6,000-character text.
- Reuses the existing Classic Share text import flow by passing an **in-memory `URLSearchParams` object**; no location change includes the private passage.
- Sends an ACK only when the existing import flow completes.
- Removes teacher sample audio and sample Japanese translation when reusing an existing personalized introduction.
- Leaves the legacy Text/Dialogue flows and Direct Sync score bridge in place.

## Testing
`node --test tests/private_intro_handoff.test.mjs` checks security-related receiver code contracts. An end-to-end in-browser test still needs both corresponding branches checked out together.

## Release blockers
The imported text is still persisted as a lesson in Copeak's **local IndexedDB**. On a shared school device that could expose the passage to a later user. Address local data isolation/cleanup, especially for minors, before using real student details. Classroom's Supabase draft migration is staged but not applied. Do not deploy one repository without the other.

Both repositories keep `vercel.json` with `git.deploymentEnabled: false`. Production deployment is not authorized.
