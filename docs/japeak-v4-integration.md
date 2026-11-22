# Japeak V4 integration notes (development branch only)

Base: `feat/japeak-stage3-experience-20261122` (PR #86–#88). Draft review: PR #89.

## Integration
- `japeak-top.html`: keeps the Stage 3 welcome copy/links/QR/share features and adds a responsive `picture` and category dialog.
- `japeak-menu.html`: keeps existing Stage 3 lesson search, favorite IDs, recent lessons, learning flow, guide and info modals. V4 only overlays grouped navigation.
- `js/japeak-v4-taxonomy.js`: non-destructive display grouping; B2 items nested in B1 are correctly reclassified.
- `js/japeak-v4-i18n.js`: adds nine language options beyond the original twenty. **These are English fallback options, not completed translations of all lessons.**
- `js/japeak-v4-ui.js`: dialog controls, focus handling, reduced-motion atmosphere. Delegates lesson selection to the Stage 3 functions.
- `css/japeak-v4.css`: viewport-safe desktop/tablet/phone layouts and internal dialog scrolling.

## Missing binary assets
The following image files are present in the standalone review ZIP supplied with the chat, but **cannot be uploaded to this branch via the available GitHub text-file connector**:

- `assets/japeak-bg-landscape.webp` (1672×941; SHA-256: df5f5caf574ae7e549185932d03e90f03ec1733ee66587c9b5110039c7197b4f)
- `assets/japeak-bg-portrait.webp` (1024×1536; SHA-256: 3aeb74dfc6151f16e797a72558f4575b0e654835e3ad00103162fa78724e5dcc)

Do not merge or deploy until both exact files are added and the live pages are visually tested. In their absence, the original Stage 3 illustration is shown as a safe visual fallback.

## Validation
1. Local standalone preview: 1440×900, 1024×768, 768×1024, 390×844, 375×667; no outer page overflow; dialog works; 29 language choices visible; B2 yields 2 situations.
2. Source-preservation: Stage1–3 app/speech/search/history and their three original test files are unchanged by blob SHA.
3. 33 pre-existing and V4 test callbacks passed in a V8 harness with Node-compatible shims. This is **not a native Node CI run**.
4. `node --test tests/japeak-stage{1,2,3}.test.cjs tests/japeak-v4.test.cjs` is configured in a GitHub Actions workflow; obtain a completed run before merge.
