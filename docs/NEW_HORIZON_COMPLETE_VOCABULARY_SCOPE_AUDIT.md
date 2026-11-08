# NEW HORIZON 1–3: Complete Vocabulary Scope Audit (2026-11-08)

## Finding

**Existing textbook-verified vocabulary is materially incomplete.** Prior counts (Grade 1: 193, Grade 2: 280, Grade 3: 203) represent selected Unit-section New Words and phrases, NOT the entire printed textbook vocabulary. They must never be presented as complete textbook inventories or used to imply 100% coverage.

### Sources inspected (uploaded image-only PDFs)

| Grade | Main scanned books | Printed Word List pages | Additional reference material |
|---|---|---|---|
| 1 | `BRW58CDC94D53DD_000740.pdf`, `000788.pdf`, `000795.pdf`, `000821.pdf` | pp. 130–139 | Word Room and Key Sentences / Key Expressions pp.152–153 |
| 2 | `2年生.pdf` and `BRW58CDC94D53DD_000719.pdf` | pp. 114–127 | Irregular verbs, Word Room, Expression List, supplementary reading |
| 3 | `BRW58CDC94D53DD_000822.pdf` | pp. 105–125 | Irregular verbs, Key Sentences / Expressions, Future Reading |

Scans cannot be mechanically treated as perfect lexical text. Source entries, glosses, location pointers and duplicates must be visually verified.

### Confirmed differences between the Word List and existing textbook-verified section data

- Grade 1 Word List examples not present in `new-horizon-audit.js`: `baseball`, `basketball`, `butterfly`.
- Grade 2 Word List examples not present in the section vocabulary / phrase inventory: `beautiful`, `bicycle`, `baseball`.
- Grade 3 Word List examples not present in `new-horizon-audit.js`: `country`, `culture`.
- These examples are indicators only, NOT an exhaustive missing-word list. A word may be used in a generic exercise without being linked to the correct textbook page.
- Grade 2 has **280** Unit 1–7 sidebar New Words / expressions; its draft Section Catalog additionally has draft entries for Let's Read 1–3. Those entries are not substitutes for the book-wide Word List.
- A page without a separate New Words box does not imply zero vocabulary: it can have previously learned words, example-sentence words, phrases or terms indexed by the Word List.

## Required scope per grade

1. Every Unit's Part 1 / Part 2 / Part 3 (where applicable) and Read and Think sections.
2. Word List **all indexed headwords**, with primary meaning, page locations and flags for previously taught / elementary vocabulary where indicated.
3. New Words sidebars, with forms, related words, phrases and proper nouns tagged separately.
4. Key Sentences, Key Expressions, Grammar and Practice example sentences, with source section + page.
5. Let's Read, Future Reading, Stage Activity and other reading texts, with independent section IDs; textbook full text should not be republished through public repo from user-provided scans.
6. Irregular verb tables, Word Room and other appendix vocabulary / expressions.

## Counting specification

Use separate counts for:
- **book_headwords**: unique lexical headword records in the source Word List (includes old/elementary words, not just new);
- **new_words**: selected / specially marked new vocabulary on each original section;
- **phrases_expressions**: stable phrase IDs;
- **word_forms**: conjugated and inflected forms linked to lemma;
- **occurrences**: placements in Unit / Part / reading / appendix, which can repeat one headword many times;
- **mastered**: progress out of a verified and versioned set, not all generic practice questions.

Do not add unique headwords + occurrences + inflections as though they are distinct textbook headwords. If the source Word List is not fully audited, display `収録照合中` and **do not claim 100% textbook coverage**.

## Acceptance gates before a complete-coverage claim

- Page-by-page audit of all Word List pages and cross-link of page numbers to textbook sections.
- All Unit/Part/Read and Think/Let's Read and supplemental activities covered by a source-map with statuses.
- All Key Sentences and Expressions correctly matched by number, page and exact English wording.
- Every question linked to source entry and an explicit competency (recognize/recall/spell/listen/read/order).
- Independent review of at least all ambiguous scans and source vs app difference lists.
- iPad Safari smoke tests; existing per-user local progress preserved or deliberately versioned.
- GitHub draft and Vercel preview until explicitly approved for production. No image-only scanned textbook content publicly deployed.

## Current state

**G1/G3 audited sidebars exist, but full Word List import does not.** G2 sidebar correction exists, but Word List and appendices are likewise not fully mapped. Full vocabulary counts remain **unknown** until audit; the earlier 193/280/203 figures are not valid complete-book counts.
