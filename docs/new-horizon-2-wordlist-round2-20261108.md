# NEW HORIZON Grade 2 — Word List and supplemental material re-audit (2026-11-08)

## Important correction

**The Word List runs from printed p.114 to p.128 (15 pages), not p.127.** The earlier range excluded the W–Z headwords and contracted forms on p.128. Do not use the previous 799-entry file as the definitive imported version.

## Source-aware data classification

- Personal JSON now contains **871** Grade 2 Word List headword/expression rows (799 previous + 72 newly checked p.128).
- **763** rows have printed numeric page references; **108** are non-numeric prior-curriculum/symbol-only rows. Symbol-only rows must not be assigned to a Unit merely because the headword appears in the Word List.
- Printed pp.114–115: 216 previously entered rows have now been checked for page-reference status: **138** with numeric text references and **78** with markers/no numeric page reference.
- Printed pp.116–127: existing **583** numeric-reference rows retained. **Symbol-only headwords on those pages are still incomplete**: 871 is NOT a complete count of all printed Word List words.
- p.128: 72 headwords/contractions checked (42 with numeric references; 30 without). Do not add contraction forms as additional headwords when reporting base-lemma totals.
- Indexed textbook page references do not list all occurrences. Unit-to-word associations based on printed page numbers are reference matches only.

## Separate appendix content reviewed from user-provided scans

| Printed pages | Category | Private data entries |
|---|---|---:|
| 129 | Comparative/superlative reference rows | 53 |
| 130–131 | Irregular verb base-form rows (past/participle/-ing retained) | 61 |
| 132 | Key Sentences | 27 numbered keys |
| 133 | Real Life Key Expressions | 7 numbered items |
| 142 | Word Room: antonyms | 28 pairs |
| 143 | Word Room: prepositions | 28 usage items |
| 144 | Word Room: clothes & belongings | 42 labelled items |

**Key Sentence source diff:** the official Key 1 affirmative statement was omitted in the old app, and three alternate word-order practice examples in Unit 2 were incorrectly displayed in the official Key list. These were reconciled in `SECTION_CATALOG` without deleting separate practice data. Page reference numbers for keys 1–27 were checked.

## Supplementary curriculum coverage (still partial)

- Further Reading “I'll Always Love You” is printed pp.110–112; its full text and questions have **not** been digitized into study data.
- Unit Activity Plus has Units 1–7 at printed pp.135–141; page map confirmed, full task-specific vocabulary not all transcribed.
- The combined “1・2年 表現のまとめ” is p.134. The Small Talk / Expression / pronunciation section spans pp.145–150. They need independent item-level checks.
- The source PDFs DO contain p.134–150. Do not characterize those pages as missing attachments; they simply remain incompletely transcribed.

## Development changes

- `new-horizon-wordlist.html` allows Grade 2 p.128 in source validation and can store the revised user-imported private appendix arrays on-device.
- `new-horizon-appendix.js` adds a device-local “📘 資料編” viewer with inside-panel scrolling. It contains no bundled textbook word list.
- `new-horizon-2.html` permits p.128 references when connecting the imported Word List to Units / Parts / Let's Read, and official Key Sentence display has been corrected.
- **Private JSON and bulk textbook-derived indexes are in the user's downloadable ZIP, not the public GitHub repo.**
- Existing score records keep their original item IDs. This update does not reset prior progress.

## Remaining QA before calling it complete

1. Add and source-check symbol-only/previously learned words omitted from printed pp.116–127.
2. Audit full textbook text appearances (including unseen repetitions), grammar practice, Unit Activity Plus, Further Reading, and Small Talk item by item.
3. Second-pass source check of every Japanese gloss, form, phrase and printed numeral.
4. Perform actual iPad Safari import, viewport, quiz, pronunciation and offline storage tests.
5. Until then, NEVER label 871 as 'all textbook words' or Unit progress as '100% textbook coverage'.

**Release policy:** Draft PR only; production is unchanged pending explicit user approval.
