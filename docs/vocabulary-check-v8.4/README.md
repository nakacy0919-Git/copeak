# Copeak Vocabulary Check v8.4 — review UI hotfix
- CK7-153: expanded the English sentence with realistic public-contract context.
- Transcript area and Accuracy semicircle are displayed before recording, including a 0% initial state.
- Transcript is left, Accuracy is right. Digits are larger than the percent sign; both UI languages say Accuracy.
- Full Japanese sentence translations are shown below English with matching focus phrases underlined when reviewed.
- The verified manually drafted translation set currently covers 41 of 800 diagnostic examples. Other examples explicitly label the full translation as pending and provide the Japanese meaning of the focus expression. Do not describe that fallback as a full translation.
- No recording downloads, replay buttons, backend transcript uploads, or automatic Vercel deploys were added.
- Run v8.1/v8.2/v8.3 tests and tests/v8_4_review.test.mjs before additional changes.
