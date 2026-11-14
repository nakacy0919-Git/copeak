# Reading exam workbench

Based on 995c22c3ec0d8c5573d153164e6680543d674883. No deployment.

- Fixed command bar and independent scroll areas; paragraph/question jumps, review flags, elimination marks, deselect, two-step incomplete submission.
- Optional countdown; no auto-submit, elapsed wall time includes suspension/exit. Drafts persist answers, flags, elimination, timing and scroll positions locally. Existing answer-only drafts remain readable.
- Exam-specific ink, persistent palette, black/blue/highlighter, eraser/undo. Pen priority over finger scroll. Hide mismatched strokes after layout change until original geometry returns. Old shared study ink remains accessible in study; not migrated. Freehand coordinates are not text-anchored. No Apple Pencil double-tap integration.
- Results include elapsed time, score, missing answers and mistake navigation; evidence after grading only. Non-comprehension question subprompts restored. No study grades changed.
- Pending real iPad/Safari Pencil tests, storage stress tests, full regression. No preview or production deploy.
