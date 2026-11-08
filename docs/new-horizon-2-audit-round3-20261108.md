# NH2 curriculum audit Round 3 (2026-11-08) — development only

Source: user-provided image-only NEW HORIZON Grade 2 textbook and reference PDF pages.

## Word List recheck
- New source-visible entries from printed pp.116–127: 412 headword candidates manually read, 19 duplicate headwords already registered, **393 additional entries**.
- The new entries have printed Word List page numbers, but **no claim that each one is symbol-only or that its first occurrence is known**. The entire group is deliberately tagged `headword_present_reference_unmapped` with empty `usage_page_refs`. Some may have numeric references not yet second-checked.
- The private Grade 2 Word List is now **1,264 unique entries**: 763 previously checked numeric source-page references, 108 prior marker-only, 393 new unmapped headwords.
- These are NOT the textbook's final distinct lemma count or all Unit New Words. Original New Words box counts remain separate.

## Additional source content indexed in private user file
- Unit Activity Plus: printed pp.135–141, 7 Unit pages, 146 selected editorial vocabulary and practice expressions, separately labelled (not in official New Words count).
- Small Talk: pp.146–149, 8 textbook question prompts in each of 7 Units, **56 questions**. Publisher response examples are not copied.
- Further Reading: pp.110–112, 14 illustrated segments summarized in original Japanese, **10 original comprehension MC questions**. Full story text is not embedded in public code.
- 1・2年 expression summary: p.134, 25 communication function labels.
- Pronunciation: pp.150–151, 30 IPA sound/example entries, 11 vowel/soft consonant reading examples, 37 spelling exceptions/example words.
- Prior source checks of comparison (53), irregular verbs (61), 27 Key Sentences, 7 Real Life expressions and Word Room remain unchanged.

## App change
- Development branch extends the private-on-device `📘 資料編` viewer with Unit Activity Plus, Small Talk audio prompts, original Further Reading comprehension and pronunciation reference tabs.
- The user imports the personal JSON into `new-horizon-wordlist.html?grade=2` on the same iPad/browser. Full scanned textbook, private word-list dataset and supplementary question prompts are **not** committed to public GitHub.
- Current Copeak Study Unit mastery/history and official New Words counts are preserved. The new tabs do NOT imply 100% textbook coverage.

## Remaining audit
1. Source-second-pass on the 393 unmapped headwords' reference numerals and some editorial Japanese glosses; find remaining printed Word List entries.
2. Full sentence-level Unit Activity Plus source, publisher model answers in Small Talk, and p.150–151 articulatory instructions.
3. Full textbook passage text including Let's Read and Further Reading sentence-to-question links.
4. Actual iPad Safari local JSON import, tab interaction and voice playback tests.

**Do not merge this draft into main / production unless explicitly approved.**
