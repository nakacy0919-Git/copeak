# Copeak Study — NEW HORIZON 2 question expansion (2026-11-08)

## Scope and educational intent

The latest Grade 2 exercise set previously had only **0–1 grammar problems per section**, and generally 0–2 sentence-ordering items. Unit 5 Read and Think 2 had no grammar, meaning, listening, ordering or reading-aloud questions, and Let's Read 1–3 had little non-vocabulary practice.

**This change adds 420 independently keyed practice items** across all 35 section entries: Unit 0; Unit 1–7 (Part 1, Part 2, Read and Think 1, Read and Think 2); and Let's Read 1–3 (two reading sections each). The existing vetted Word List, sidebar vocabulary and progress IDs are retained unchanged.

## Exact additions

| Category | New items |
|---|---:|
| Grammar / expression 4-choice | 70 |
| Sentence ordering / word tile | 70 |
| English sentence meaning | 70 |
| Listening with browser speech synthesis | 70 |
| Reading aloud | 70 |
| Reading comprehension (original mini-passages) | 70 |
| **Total** | **420** |

**Per section:** 2 editorial sentences produce 2 each of grammar, ordering, meaning, listening and reading-aloud questions. One short original passage supplies 2 reading comprehension questions. **12 additional questions per section**, with 35 sections = 420.

Unit 1–7: **48 added per Unit** (4 sections × 12). Unit 0: 12. Let's Read 1–3: 24 each (2 sections × 12).

The original sentence bank uses age-appropriate grammar and the textbook's *unit topic* and matches section page references, but these sentences and short passages are **original practice**, not publisher textbook text or reproductions of the official reading passages. In particular, success on an original reading question must not be represented as proof that a student understood all sentences of the publisher's text.

## Product integrity
- Stable new IDs prefixed `g2x-20261108-` preserve all existing learning history.
- 70 original grammar questions show the Japanese interpretation to disambiguate potentially grammatical alternatives (e.g. *when/if*, *must/may*, *which/whose*).
- Grammar feedback contains the answer and the Unit's target grammar.
- Meaning and listening items share the same original sentence, but are independently scored skills. The options are deterministic and shuffled on screen.
- Sentence-ordering answers are tokenized from the original sentence; all 70 examples validated and at most 10 tokens long.
- Original reading passages have 2 specific content questions each, rather than generic vocabulary glosses.
- No new bulk copyrighted Word List or textbook original passages are added to the public repository.
- The Grade 2 user's private imported lexicon remains a separate feature; existing New Words counts are not inflated by these new questions.

## Files
- `new-horizon-2-extra-sentences.js` — 70 edited sentences with Japanese readings and target grammar token / distractors.
- `new-horizon-2-extra-reading.js` — 35 original passages and 70 specific comprehension questions.
- `new-horizon-2.html` — loads the two datasets before the main course script and merges them into section-specific practices.

## QA results

- Every one of the 35 existing textbook sections has exactly 2 sentence records and 2 reading comprehension questions.
- 420 new question IDs are all unique and have no collisions with the existing section practice IDs.
- Every grammar question has one blank and three distinct answer choices, every comprehension and meaning/listening item has unique options with one defined answer.
- Every ordering task produces the original answer sentence; maximum 10 word/punctuation tiles.
- Existing source data, Grade 2 progress database identity, New Words count and iPad responsive CSS are unchanged.
- Actual iPad Safari pronunciation accuracy, microphone permissions, external speech voice availability and device-local JSON import should be checked after deployment to preview.

**Status: development preview only; do not merge PR #39 or deploy the branch to production without explicit user approval.**
