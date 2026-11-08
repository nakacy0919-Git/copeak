# NEW HORIZON 2 | Word List source audit (2026-11-08)

## Verified source and scope
- User-provided scan: `BRW58CDC94D53DD_000719.pdf`, printed Word List pp.114–127, with pp.116–127 independently inspected in this review.
- The printed pages contain headwords, editorial senses, explicit usage-page references, and separate elementary/previously learned marks. **They are not a complete per-Unit vocabulary list.**
- **583 manually transcribed headword/expression rows with numeric printed textbook page references** were created from Word List pp.116–127, across 12 inspected printed pages. These rows have 719 numeric page references in total.
- The prior private seed file contained 216 entries from pp.114–115. When the user imports the updated private JSON the Grade 2 local Word List will contain **799 entries** (216 + 583); do not represent this as the complete textbook vocabulary.
- Elementary words identified only by icons (without a numeric first-reference page), all senses/inflections, and the full text's repeated occurrences are not included in the new 583 count.
- Learning-friendly Japanese glosses were edited and must not be assumed to reproduce each publisher definition word for word.

## App implementation on development branch
- The Grade 2 app can read the **private imported Word List in same-origin IndexedDB**, keyed by Grade 2, and add numerically page-linked vocabulary to the matching Unit, Part and Let's Read sections.
- Imported entries are **not reclassified as New Words**. They display and score separately from the official Unit New Words entries, preserving the old curriculum count (241 sidebar words and 39 phrases).
- Existing explicit Word List and sidebar reference indices (the small public index) remain. Private items are deduplicated per section against existing practice words and use new stable IDs so prior progress is not erased.
- Long proprietary Word List data and user-provided scans are **not published in the GitHub repository**. The user imports their private JSON once in `new-horizon-wordlist.html?grade=2` on each device/browser.

## Remaining accuracy constraints
1. Reinspect/normalize the first 216 pp.114–115 entries with exact numbered usage references; the seed predates this new reference-based format, so they do not auto-map into Unit practice. The existing small verified public list provides a partial cross-reference for those pages.
2. Validate each scanned sidebar/Key Sentence against every source page and cross-check irregular verbs, activities, Word Room, and examples.
3. Words tagged elementary-only without a numbered first-reference page need an independent page-by-page reading inventory.
4. The Word List's page numbers are **index references**, not guaranteed exhaustive occurrences in all Units.
5. On-device Safari testing is still needed to confirm the full imported dataset and layout.
6. Do not label any Unit “100% textbook vocabulary complete” until both the Word List index and all text appearances are reconciled.

## Artifacts kept local to the user
A private ZIP (not committed to GitHub) contains:
- Updated three-grade JSON import (`copeak-lexicon-local-v1`, Grade 2 now 799 entries)
- CSV of 583 newly numbered-reference rows
- CSV mapping indexed page references to Part/Read and Think/Let's Read sections
- Source scope / limitation report

**Release status: draft PR only. No Vercel production promotion.**
