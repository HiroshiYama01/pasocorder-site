# PASOCORDER — 液体クロマトグラフィー波形処理装置

有限会社シマムラテックの製品サイト（元 Wix サイト: https://mybe352.wixsite.com/pasocorder ）を、
静的HTML/CSS/JSで再構築したものです。GitHub Pages でそのまま公開できます。

## ファイル構成

```
my-webPage/
├── index.html   本体（構成・文章）
├── style.css    デザイン（配色・レイアウト・アニメーション）
├── script.js    記録ペンのアニメーション、フッター年号など
└── README.md    このファイル
```

## GitHub Pages で公開する手順

1. GitHub で新しいリポジトリを作成する（例: `pasocorder-site`）
2. このフォルダの中身（index.html / style.css / script.js）をリポジトリのルートに置く
3. コミットしてプッシュする

```bash
cd my-webPage
git init
git add .
git commit -m "PASOCORDER site"
git branch -M main
git remote add origin https://github.com/<あなたのユーザー名>/pasocorder-site.git
git push -u origin main
```

4. GitHub のリポジトリページ → **Settings → Pages** を開く
5. **Source** で `Deploy from a branch` を選び、ブランチを `main` / フォルダを `/(root)` に設定して **Save**
6. 数分後、`https://<あなたのユーザー名>.github.io/pasocorder-site/` で公開されます

## お問い合わせフォームについて

現在のフォームは `mailto:` を使った簡易送信（送信するとメールソフトが起動します）です。
実際にサーバー経由で送信したい場合は、[Formspree](https://formspree.io/) や
[Google Forms](https://www.google.com/forms/about/) などの無料フォームサービスと連携することをおすすめします。

## カスタマイズのヒント

- 配色は `style.css` の先頭 `:root{ ... }` にまとめてあります（`--amber` がメインカラー）
- 製品写真を追加したい場合は `images/` フォルダを作り、`index.html` 内の該当箇所に `<img>` タグを追加してください
- 会社情報・連絡先は `index.html` の `#contact` セクションと `<footer>` 内にあります
