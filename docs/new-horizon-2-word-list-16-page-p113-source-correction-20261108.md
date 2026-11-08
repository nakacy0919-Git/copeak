# NEW HORIZON 2 — correction: Word List begins on p.113 (2026-11-08)

## Source evidence

The user-provided original scanned textbook **`2年生.pdf`**, PDF leaf **59** (zero-indexed 58), contains printed p.112 on the left and printed **p.113** on the right. Printed p.113 clearly begins the section **"2 Word List"**, including A/a entries from `a` through `artist`. The next printed page, p.114, begins with `as`.

**The actual Word List range is p.113–128 (16 pages).** Earlier documentation and application limits of **p.114–128 (15 pages)** were incorrect and must not be treated as a certified complete audit.

## Private (on-device) data changes

- Added **64 standalone headword entries** and **7 separate source-derived phrase entries** from printed p.113 to the private user import JSON.
- Corrected source index location for already existing `and so on`: printed p.122 → **p.113** (subentry under `and`).
- Previous Grade 2 private entries: **1,437** → **1,508** after correction. Grades 1 and 3 were preserved without modification.
- The resulting 1,508 entries have **915 numeric book-text index refs**, **198 printed prior-learning-symbol-only** or other unnumbered source entries, and **395 entries with source-page occurrence not yet resolved**.
- These are **registered words/expressions**, NOT the schoolbook's official new-vocabulary total.
- The source file, added 71-row CSV, source-page counts and Unit/Part numeric-index-match impact report are delivered only via user-private ZIP, not included in this public GitHub repository.

## App correction

- `new-horizon-wordlist.html`: Grade 2 accepted printed Word List range changed **[114,128] → [113,128]**; warn after importing an outdated Grade 2 JSON that contains no p.113 entries.
- `new-horizon-2.html`: private Grade 2 Word List reference loader now accepts entries with source printed_page >= **113**.
- No existing grade 1 / 3 data, official textbook New Words box counts, or saved Copeak scores were altered.

## Additional audit results

- All **27 numbered Key Sentences** have a matching central example in the Grade 2 Unit catalog; there are additional verified official variants in Keys 1, 13, 14, 20, 21, 22 and 25.
- Added p.113 numeric index references now make previously missing reading/practice crosslinks available, e.g. `advice` / `any` in Unit 4 Part 1; `answer` in Unit 4 Read and Think 2; `accessible` / `adjustable` for Unit 5 Part 1.
- There are still **593** records without numeric book-text index refs (198 marked known / 395 unresolved), which must **not** be automatically assigned to an arbitrary Unit.

## Critical unresolved work

1. This was a single-pass visual transcription of p.113 and audit of existing source crosslinks, not a second-reader proof of all 16 pages' subordinate examples, glosses and variants.
2. Need exact sentence-level coverage and text-to-question mapping for all original reading passages, textbook practice, Let's Read and Further Reading.
3. Need to verify pronunciation/handwriting and end-to-end import/quiz behavior on an actual iPad Safari device.
4. No full-text copyrighted page images or bulk private Word List contents were published to GitHub.
5. **Do not claim 100% textbook coverage; previous "all 15 pages" claims are superseded by the 16-page source correction.**

**Release status:** Development Draft PR only. No merge to `main` and no production Vercel release without explicit approval.
