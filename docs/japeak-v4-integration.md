# Japeak V4 release and integration notes

Source: `feat/japeak-v4-responsive-categories-20261122`, based on `feat/japeak-stage3-experience-20261122` (PR #86–#88).
Review PR: #89.

## Included
- Stage 1–3 security, audio recognition and sentence-level practice, lesson search, favorites and recent history (unchanged).
- Responsive photo-based home screen: PC/tablet landscape and smartphone/tablet portrait, CSS cherry blossom petals and drifting light.
- School/life entry cards directly link to the selected menu mode; **no duplicate category popups**.
- Menu category dialog selects scene/level/domain; existing oversized category grids are visually hidden and only the chosen lesson area is shown.
- Language menu shows 29 choices. The nine new choices deliberately state **English fallback** until reviewed translations are available.
- Reduced-motion preference, Escape and focus management for category modal.

## Real background assets committed
- `assets/japeak-bg-landscape.webp` 1672×941, 281864 bytes, original photo provided in this conversation.
- `assets/japeak-bg-portrait.webp` 1024×1536, 153718 bytes, original photo provided in this conversation.

Both WebP files exist in the GitHub source and have an automated format/presence test.

## Validation
- Stage1–4 regression suites: GitHub Actions workflow `Japeak v4 regression (development only)` completed successfully (36 tests).
- Vercel preview build of integrated source: checked separately before production.
- Standalone graphic preview tested at PC/tablet/phone resolutions; production deployment verification is a separate step.

## Language completeness
Selection options are 29, but **complete 29-language lesson translation has not been implemented**. The nine added languages use English interface/lesson fallback. Do not advertise 29 complete translated curricula until translations are checked.
