# NEW HORIZON 2 — additional source reconciliation (2026-11-08)

**Status: source crosscheck advanced, NOT a 100% textbook vocabulary certification.**

The user's original image-only NEW HORIZON 2 Word List was reopened for a targeted manual pass on printed pp.116–123 and p.127. The private, on-device vocabulary JSON gained **122 source-visible headwords/phrases/forms**, taking Grade 2 from 1,264 to **1,386 unique registered items**. This count is not the full printed book lexicon or the sum of each Unit's New Words.

## Private dataset counts

| Category | Records |
|---|---:|
| Ordinary words | 1,186 |
| Phrases / expressions | 143 |
| Inflected forms | 29 |
| Contractions | 28 |
| **Total** | **1,386** |

Source association: **838** records with numeric printed body-page references, **153** prior-learning-marker-only records and **395** records whose usage-page reference remains unmapped. The last two groups must not be automatically attributed to a Unit, and numbers are **never** added to the official New Words count.

## Examples of corrections

- p.116: `cut`, `do`, `does`, `effort`, `elementary school`, `enough`.
- p.117: `exciting`, `felt`, `find`, `forward`.
- p.119–123: `important`, `join`, `my`, `open`, `read` and other individually checked words / phrases.
- p.127: `Tuesday`, `uncle`, `under`, `wash`, `Wednesday`, `whose`.

The entry-level provenance and editorial Japanese glosses are retained exclusively in a **private conversation ZIP**, not in the public GitHub repository. The private export includes per-page source coverage, item additions, Unit reference mappings and a Japanese limitation report.

## UI change

The Grade-2 private Word List manager, on JSON import, now shows (a) registered entries, (b) number with explicit numeric body-page references, and (c) entries with missing/non-numeric references. The UI continues to mark the complete textbook count as unknown. This does not reset learning history.

## QA performed

- Unique headwords/IDs for all three grade datasets; no duplicates.
- Printed Grade-2 Word List page numbers restricted to 114–128.
- Numerically referenced entries have nonempty integer body-page references.
- Private JSON size ~1MB, below app import maximum 3.5MB.
- Cross-linked Unit map checks printed referenced pages only; these are **not** official Unit new-vocabulary totals.
- 56 Small Talk prompts, 7 Unit Activity Plus groups, 14 reading summaries and 10 original comprehension questions structurally checked; 27 numbered Key Sentences and 61 irregular verb entries remain.

## Not yet verified

1. Full two-person, line-by-line inspection of all printed Word List entries, especially remaining pp.124–126, and every sense/word family.
2. Missing Unit/Part usage-page references for 548 marker-only/unmapped words.
3. Full original textbook reading/grammar passages, Unit Activity Plus task text and all question-to-sentence alignment.
4. Real iPad Safari audio, import, offline local storage and single-screen test.

**Keep PR #39 in draft. No deployment to production until explicit approval.**
