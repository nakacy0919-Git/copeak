# Copeak Vocabulary Check v8 — 診断精度向上（GitHub版）

## 概要
- 学習用チャンク候補は5,000件。元のv7データの問題内容・順序を保持し、GitHub転送用に8ファイル（各625件）に分割しています。
- `data/chunks-v7-manifest.json` に復元順序を記録。診断ページのJavaScriptが読み込み時に再構築します。
- 診断専用800問（8段階×100問）は未査読の候補です。教員査読、出典確認、学習者パイロット、難易度校正は未完了です。
- Quick 25問 / Deep 70問。広い難易度探索、表現ファミリーの重複防止、仮のレベル推定、弱点・診断根拠の表示、本人操作での匿名CSV出力に対応します。
- 英検・CEFR・学年相当は参考指標であり、公式判定や合格予測には使用できません。

## 主要ファイル
- `vocabulary-check.html` — 診断画面
- `vocabulary-check.css` / `vocabulary-check.js` — 表示と診断ロジック
- `data/v8-diagnostic-800.json` — 診断候補800問
- `data/chunks-v7-manifest.json` + `data/chunks-v7-level-1.json` 〜 `level-8.json` — 既存5,000候補の再構築用データ
- `copeak-vocab-home.js` — ホームとの連携用（**未有効化**。レイアウト承認後にindex.htmlから読み込む）
- `tests/v8_quality.test.mjs` — データ・出題・診断テスト
- `docs/vocabulary-check-v8/DIAGNOSTIC_800_TEACHER_REVIEW.csv` — 教員査読候補
- `docs/vocabulary-check-v8/Copeak_Vocabulary_Check_v8_Quality_Local.zip` — 元のv8ローカルパッケージ。全5,000件監査CSVと品質レポートを同梱

## 検証
```bash
node tests/v8_quality.test.mjs
```

## 公開について
GitHubのソースを登録する目的のコミットです。`vercel.json` にあるGit連携の自動デプロイ無効設定は変更しません。Vercel本番の更新は別操作で行ってください。
