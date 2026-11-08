# NEW HORIZON Grade 2 — 15-page Word List visual reconciliation (2026-11-08)

## Source and verification

Original user-provided scanned PDF: `BRW58CDC94D53DD_000719.pdf`. We rendered all **printed Word List pages p.114–128** in the correct orientation at enlarged resolution, manually enumerated candidate headwords on every page, and checked each against the private Grade-2 JSON by normalized spelling **and printed Word List page**.

| Printed page | Visually checked candidate rows | Newly missing in prior DB |
|---|---:|---:|
| 114 | 98 | 1 |
| 115 | 98 | 0 |
| 116 | 111 | 2 |
| 117 | 87 | 0 |
| 118 | 87 | 4 |
| 119 | 69 | 0 |
| 120 | 78 | 0 |
| 121 | 91 | 2 |
| 122 | 77 | 3 |
| 123 | 109 | 8 |
| 124 | 110 | 11 |
| 125 | 100 | 8 |
| 126 | 78 | 10 |
| 127 | 84 | 2 |
| 128 | 72 | 0 |
| **Total** | **1,349** | **51** |

The 1,349 source candidate rows are a manually curated visual check, not a formally exhaustive inventory of all subordinate phrases, glosses or all word senses. **Zero of these checked candidates remain unmatched after the correction**, but this does *not* certify 100% textbook coverage.

## Change to private teaching dataset

- Previous Grade 2 private word-list dataset: **1,386 registered entries**.
- Added **51** source-confirmed missing headword/phrase/form entries: `buy`, `due`, `eleven`, `grandparent`, `hallway`, `hard`, `he`, `meter`, `mother`, `not`, `pancake`, `put`, `reading`, `scientist`, `sent`, `something`, `traditional`, `vendor`, and others. The full 51-row list with page refs is in the user's **private** CSV/JSON package, not in the public repository.
- Updated Grade 2 private total: **1,437**, divided by source association:
  - **862** entries have explicit numeric references to printed textbook pages;
  - **180** entries have marker-based prior-curriculum status without usable numeric body-page reference;
  - **395** entries have unresolved usage-page mapping.
- Among the 51 added items, **24** have checked numeric textbook-page references; **27** are held without inferred Unit placement.
- Grade 1 (228) and Grade 3 (153) private word-list records remain unchanged. No original learning-progress IDs were altered.

## Validation

- Grade-wise unique headword spellings and stable IDs: pass; no duplicate.
- Printed Word List page numbers (Grade 2 114–128): pass.
- Numeric body-page references have valid integer structure: pass.
- Every one of the manually enumerated 1,349 candidates matched a source-page-aligned record after update: pass.
- Personal JSON is ~1.03 MB, under the browser import cap of 3.5 MB.
- Existing app can import the JSON into `new-horizon-wordlist.html?grade=2` in iPad Safari using the existing schema. **An actual iPad Safari test has not been conducted**.
- Bulk copyrighted index data and scanned pages are excluded from this public GitHub commit.

## Critical limitations — do not claim complete textbook coverage

1. Printed headword source candidate review does not establish all subordinate fixed phrases, word senses, vocabulary examples, irregular forms and pronunciation entries.
2. Hundreds of headwords remain unlinked to exact Unit/Part/Let's Read appearances; do not infer a Unit from the alphabetic index alone.
3. Verify sentence-level alignment of original reading passages, Key Sentences, Unit Activity Plus, Small Talk and comprehension questions separately.
4. Imported local JSON must be reimported on each browser/device; update will not overwrite existing saved scores or magically update pre-existing indexed wordlists.
5. iPad Safari performance, import, audio and no-page-scroll behavior still require real-device QA.

**Deployment decision:** This is a development-branch audit only. Keep PR #39 in draft; do not promote or merge to production until the user requests it.
