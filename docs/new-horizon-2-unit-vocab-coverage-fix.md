# NEW HORIZON Grade 2 — Unit vocabulary coverage correction

**Status: partial, source-verified development correction; NOT a complete-book lexicon.**

## Root cause

The grade-2 app's `SECTION_CATALOG` contains vocabulary copied from the **New Words boxes** in Parts and Read and Think, while the book's **Word List** also indexes already-learned words and reading/context words by printed page. Reporting the first group as the total words needed for a Unit is misleading.

## New Words boxes currently registered

| Unit | New Words box entries | Phrases and expressions | Total |
|:---:|---:|---:|---:|
| 1 | 28 | 2 | 30 |
| 2 | 32 | 7 | 39 |
| 3 | 40 | 6 | 46 |
| 4 | 29 | 10 | 39 |
| 5 | 40 | 4 | 44 |
| 6 | 29 | 5 | 34 |
| 7 | 43 | 5 | 48 |
| **Total** | **241** | **39** | **280** |

**These are source-verified sidebar counts, NOT full-book vocabulary counts.** This excludes independently indexed known words, Word Room, grammar example words, proper nouns counted separately, and many Let's Read / Word List-only entries. Avoid labeling this as the textbook's total number of words.

## Supplement now introduced in development

The grade-2 app uses a separate **Word List cross-reference** list (67 individually verified Word List page references plus 6 sidebar reference terms from printed Word List pp.114–115, entries A–C). Items already in the same Part's New Words quiz are deduplicated. Remaining entries are added to vocabulary recognition and single-word spelling with their own stable IDs and tagged with source page and usage page. They appear **separately** from the New Words count as `巻末から追加` / `既習・関連語`.

After deduplication against the corresponding Part quiz:

| Unit | Supplementary entries not already in Part quiz |
|---|---:|
| 1 | 8 |
| 2 | 4 |
| 3 | 3 |
| 4 | 5 |
| 5 | 2 |
| 6 | 5 |
| 7 | 7 |

**Do not call these numbers complete.** Printed Word List pp.116–127 and the remaining textbook sections / supplements have NOT yet been fully cross-linked. The complete Unit study-vocabulary count is unknown. The cross-reference list includes a small set of checked entries for Let's Read 1–3 as well. Six common nouns/expressions previously misclassified among proper-name references (e.g., contractions, `sweet corn`, `rooibos`) are kept in a distinct supplementary practice group, not relabeled as textbook New Words. The seven Units contain 34 supplemental practice entries after deduplication.

## Examples of omitted existing words

- Unit 4 p.52: `bored`, `bed` are indexed in the Word List, but not part of the New Words box on the original Part.
- Unit 6 pp.70–72: `basketball`, `baseball` indexed in the Word List.
- Unit 7 p.92: `beautiful` indexed in the Word List.

## Acceptance criteria for full re-audit

1. Finish visual checking the remaining twelve Grade 2 Word List pages (116–127), and connect every checked headword and page reference to the relevant Unit/Part/Let's Read/Stage Activity.
2. Compare right-column New Words, phrases, related word forms and proper nouns with `SECTION_CATALOG` for all Unit sections.
3. Avoid double-counting different inflections and duplicate occurrences of one headword in Unit totals.
4. Keep `New Words`, `known / in-text words`, `phrases`, `forms`, `proper nouns` distinct. Only verified entries should enter graded quizzes.
5. Do not represent app progress among registered questions as the percent of all textbook content learned while any source sections remain unchecked.
6. Keep Word List full-source data private on the user's device. Only a modest page-reference index with editorial glosses goes in this public repo.
7. Test iPad viewport, Unit selection, progress saving and quiz presentation before release.

## Release policy

Changes are committed to `fix/nh2-unit-vocabulary-coverage-20261108` for review. The public production branch remains unchanged until approved.
