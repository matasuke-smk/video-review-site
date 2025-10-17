# 動画レビューナビ

DMMアフィリエイト審査用の動画レビューサイトです。

## サイト概要

- **サイト名**: 動画レビューナビ
- **目的**: 動画作品の情報提供とレビューを通じて、ユーザーの作品選びをサポート
- **技術**: HTML/CSS/JavaScript（静的サイト）
- **デプロイ先**: GitHub Pages

## サイト構成

```
video-review-site/
├── index.html              # トップページ
├── about.html              # サイトについて
├── privacy.html            # プライバシーポリシー
├── articles/               # 記事ディレクトリ
│   ├── article1.html       # 2025年注目の動画作品10選
│   ├── article2.html       # ジャンル別おすすめ動画ガイド
│   └── article3.html       # 動画配信サービスの選び方
├── css/
│   └── style.css           # スタイルシート
├── js/
│   └── main.js             # メインスクリプト
├── claude.md               # プロジェクト要求仕様書
└── README.md               # このファイル
```

## コンテンツ

### ページ一覧

1. **トップページ** (`index.html`)
   - ヒーローセクション
   - 最新記事3件のカード表示
   - カテゴリー一覧

2. **サイトについて** (`about.html`)
   - サイト運営目的
   - 運営者情報
   - お問い合わせ方法

3. **プライバシーポリシー** (`privacy.html`)
   - 個人情報の取り扱い
   - Cookie使用について
   - アフィリエイトプログラムについて

### 記事一覧

1. **2025年注目の動画作品10選** (`articles/article1.html`)
   - 各ジャンルから注目作品を紹介
   - 作品選びのポイント

2. **ジャンル別おすすめ動画ガイド** (`articles/article2.html`)
   - アクション、ドラマ、コメディなどのジャンル解説
   - 各ジャンルの選び方

3. **動画配信サービスの選び方** (`articles/article3.html`)
   - サービス選択のポイント
   - 料金プランの考え方

## デザイン仕様

### カラースキーム

- **主色**: #2563eb（ブルー）
- **副色**: #f3f4f6（ライトグレー）
- **文字色**: #1f2937（ダークグレー）
- **背景色**: #ffffff（ホワイト）

### 特徴

- レスポンシブデザイン対応
- モダンでクリーンなUI
- セマンティックHTML5
- アクセシビリティ配慮

## GitHub Pages デプロイ手順

### 1. GitHubリポジトリの作成

```bash
# Gitリポジトリの初期化
git init

# ファイルをステージング
git add .

# 初回コミット
git commit -m "Initial commit: DMM affiliate review site"

# GitHubリモートリポジトリを追加
git remote add origin https://github.com/[username]/video-review-site.git

# プッシュ
git push -u origin main
```

### 2. GitHub Pages の有効化

1. GitHubリポジトリページにアクセス
2. **Settings** タブをクリック
3. 左サイドバーの **Pages** をクリック
4. **Source** セクションで以下を選択：
   - Branch: `main`
   - Folder: `/ (root)`
5. **Save** をクリック

### 3. 公開URLの確認

設定後、数分でサイトが公開されます。公開URLは以下の形式になります：

```
https://[username].github.io/video-review-site/
```

## ブラウザでの確認

ローカル環境で確認する場合：

1. Visual Studio Code の Live Server 拡張機能を使用
2. または、Pythonの簡易サーバー：
   ```bash
   python -m http.server 8000
   ```
   ブラウザで `http://localhost:8000` にアクセス

## 技術詳細

### HTML

- セマンティックHTML5タグ使用
- OGPメタタグ設定
- JSON-LD構造化データ実装

### CSS

- CSS変数（カスタムプロパティ）活用
- Flexbox/Grid レイアウト
- モバイルファーストアプローチ
- スムーズなトランジション効果

### JavaScript

- Vanilla JavaScript使用
- Intersection Observer APIによるスクロールアニメーション
- アクティブナビゲーションハイライト
- 軽量かつプログレッシブエンハンスメント

## SEO対策

- 適切なメタタグ設定
- 構造化データマークアップ
- セマンティックHTML
- レスポンシブデザイン
- ページ読み込み速度最適化

## アフィリエイト対応

本サイトはDMMアフィリエイトプログラムに対応するために作成されています：

- プライバシーポリシーにアフィリエイト記載
- 運営者情報明記
- お問い合わせ先記載
- 充実したコンテンツ（3記事以上）

## 今後の拡張予定

審査通過後の拡張予定：

- TikTok風UIへの改修
- DMM API連携
- 動的コンテンツ生成機能
- ユーザーレビュー機能
- 検索機能の強化

## ライセンス

このプロジェクトは個人利用目的で作成されています。

## お問い合わせ

- 運営者: VideoNaviAdmin
- メールアドレス: contact@example.com

---

**制作日**: 2025年1月
**更新日**: 2025年1月
