# Copeak Study — NEW HORIZON Grade 2 problem expansion (2026-11-08)

## Scope and objective
All 35 Grade 2 study sections: Unit 0 (review), Unit 1–7 (Part 1, Part 2, Read and Think 1/2), and Let's Read 1–3 (two parts each).

This change is **not a bulk transcription of textbook passages**. Added questions are original practice aligned to textbook grammar topics / reading themes; any publisher-specific printed English remains separately sourced and unchanged.

## New items
- 70 original example sentences (two per study section).
- Each sentence generates one grammar blank, one ordering, one meaning, one TTS listening and one reading-aloud task.
- 35 original mini-passages (one per section); each has two answerable 3-choice content questions.
- **420 new task IDs** across six skill categories:

| Category | Added |
|---|---:|
| Grammar (文法・表現) | 70 |
| Ordering (並び替え) | 70 |
| Meaning (英文の意味) | 70 |
| Listening (リスニング) | 70 |
| Reading aloud (音読) | 70 |
| Content comprehension (内容理解) | 70 |
| **Total** | **420** |

Vocab and spelling source inventories were not duplicated or inflated; prior lexical work and private Word List imports are preserved.

### Examples of corrected sparsity
Unit 5 Read and Think 2 had 0 grammar, meaning, listening, ordering and speaking items. Those are now 2 each; content comprehension is 1 → 3. Unit 4 Read and Think 2 grammar 1 → 3 and comprehension 2 → 4. Let's Read 1 (first half) grammar/listening/meaning/ordering/speaking 0 → 2 each, comprehension 3 → 5 in the section data.

## Implementation
- `new-horizon-2-extra-sentences.js`: original bilingual sentences with one validated grammar focus, and two distractors per blank.
- `new-horizon-2-extra-reading.js`: original short reading passages with two nonduplicated 3-way comprehension items per section.
- `new-horizon-2.html`: loads both packs before the section data, adds supplements to the existing `SECTION_PRACTICE` with nonoverlapping IDs `g2x-20261108-...`. Lesson and Unit-level views both include the new task IDs; Unit 0 and Let's Read aggregated Unit views were explicitly corrected so new tasks are not invisible. Their progress is stored under existing per-device progress logic without rewriting old IDs. Original items get a compact “自作練習” label; reading records are tagged `sourceQuestion:false`, so the app shows them as original text rather than publisher passage questions.

## Verification
- 35/35 textbook-aligned sections include 2 sentences and 2 reading questions.
- All six categories have exactly +2 per section.
- 420 new stable IDs, no collisions with existing Section Practice IDs.
- Grammar focus blank and multiple-choice key format checks passed; 3 distractor choices distinct.
- Ordering tile token arrays contain real words and punctuation; content questions marked as original.
- Inline JavaScript syntax checks passed.
- Existing progress metadata and import format unchanged. Grade 2 reader/word list remain in separate development changes.
- Vercel preview build / real iPad Safari device test: report separately; do not call actual iPad test completed without running it.

## Accuracy caveats
The supplemental material is original teacher-authored practice, *not* direct text from the publisher's book. Full source-text-to-question alignment is not claimed; earlier textbook Word List audits remain incomplete. A 100% score in the current app should not be interpreted as proof of 100% textbook coverage.

**Release:** Development Draft PR only; no main merge or production deployment unless explicitly requested.
