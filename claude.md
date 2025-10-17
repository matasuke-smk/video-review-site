# DMMアフィリエイト審査用サイト 要求仕様書

## プロジェクト概要

- **目的**: DMMアフィリエイト審査通過のための簡易サイト構築
- **公開先**: GitHub Pages
- **技術スタック**: HTML/CSS/JavaScript（静的サイト）
- **開発期間**: 1-2時間
- **URL**: `https://[username].github.io/video-review-site/`

## サイト基本情報

- **サイト名**: 動画レビューナビ
- **コンセプト**: 動画作品の情報提供とレビューを行うメディアサイト
- **ターゲット**: 動画コンテンツを探している一般ユーザー

## ディレクトリ構造

```
video-review-site/
├── index.html          # トップページ
├── about.html          # サイトについて
├── privacy.html        # プライバシーポリシー
├── articles/
│   ├── article1.html   # 記事1: 2025年注目の動画作品
│   ├── article2.html   # 記事2: ジャンル別おすすめ動画
│   └── article3.html   # 記事3: 動画サービスの選び方
├── css/
│   └── style.css       # スタイルシート
└── js/
    └── main.js         # メインスクリプト
```

## ページ仕様

### 1. トップページ (index.html)

#### 必須要素
- ヘッダー（サイトロゴ、ナビゲーションメニュー）
- ヒーローセクション（サイト説明文）
- 最新記事一覧（3記事分のカード表示）
- カテゴリー一覧（ダミー5カテゴリー）
- フッター（コピーライト、リンク）

#### コンテンツ
- ヒーローテキスト: "最新の動画作品情報をお届け"
- 説明文: "話題の動画作品レビューと詳細情報を提供します"
- カテゴリー: アクション, ドラマ, コメディ, ドキュメンタリー, アニメ

### 2. 記事ページ (articles/article*.html)

#### 記事1: 2025年注目の動画作品10選
- 500文字以上の本文
- 作品リスト（タイトルのみ）
- 公開日表示

#### 記事2: ジャンル別おすすめ動画ガイド
- 各ジャンルの特徴説明
- 選び方のポイント
- 500文字以上

#### 記事3: 動画配信サービスの選び方
- サービス比較の観点
- 料金プランの考え方
- 500文字以上

### 3. About ページ (about.html)

#### 必須項目
- サイト運営目的
- 運営者情報（ハンドルネーム可）
- お問い合わせ方法
- 更新頻度

#### テンプレート文言
```
サイト名: 動画レビューナビ
運営目的: 最新の動画作品情報とレビューを通じて、ユーザーの作品選びをサポート
運営者: VideoNaviAdmin
連絡先: contact@example.com
開設: 2025年1月
```

### 4. プライバシーポリシー (privacy.html)

#### 必須項目
- 個人情報の取り扱い
- Cookieの使用について
- アフィリエイトについての記載
- 免責事項

## デザイン仕様

### カラースキーム
```css
主色: #2563eb (ブルー)
副色: #f3f4f6 (ライトグレー)
文字: #1f2937 (ダークグレー)
背景: #ffffff (ホワイト)
```

### レイアウト
- レスポンシブ対応（モバイルファースト）
- 最大幅: 1200px（中央寄せ）
- フォント: システムフォント

### スタイル要件
- クリーンでモダンなデザイン
- 読みやすいタイポグラフィ
- 適切な余白設定

## 技術要件

### HTML
- セマンティックHTML5
- メタタグ設定（OGP含む）
- 構造化データ（JSON-LD）

### CSS
- Flexbox/Grid使用
- CSS変数活用
- アニメーション最小限

### JavaScript
- Vanilla JS使用
- 軽量な実装
- プログレッシブエンハンスメント

## GitHub設定

### リポジトリ名
`video-review-site`

### GitHub Pages設定
1. Settings → Pages
2. Source: Deploy from a branch
3. Branch: main / root
4. 公開URL確認

## 納品物

1. ソースコード一式
2. README.md（サイト説明）
3. GitHub Pages公開URL

## 実装優先順位

1. **必須** - 基本HTML構造
2. **必須** - 3記事以上のコンテンツ
3. **必須** - About/Privacy ページ
4. **推奨** - レスポンシブCSS
5. **任意** - JavaScriptインタラクション

## 注意事項

- アダルト関連の直接的な表現は避ける
- 著作権に配慮した一般的な内容
- 実在の作品名は使用しない
- プロフェッショナルな印象を維持

## ClaudeCode実装手順

1. このファイル（claude.md）をプロジェクトルートに配置
2. ClaudeCodeで以下のコマンドを実行:
   ```bash
   # プロジェクト構造の作成
   mkdir -p video-review-site/{articles,css,js}
   
   # 各HTMLファイルの生成
   # index.html, about.html, privacy.htmlの作成
   # articles/article1.html, article2.html, article3.htmlの作成
   
   # CSSファイルの生成
   # css/style.cssの作成
   
   # JSファイルの生成
   # js/main.jsの作成
   
   # GitHubリポジトリ初期化
   git init
   git add .
   git commit -m "Initial commit: DMM affiliate review site"
   
   # GitHubにプッシュ
   git remote add origin https://github.com/[username]/video-review-site.git
   git push -u origin main
   ```
3. GitHubリポジトリの作成とプッシュ
4. GitHub Pages有効化

## 実装のポイント

### 審査通過のための重要事項
- サイトが実際に動作していること
- コンテンツが充実していること（空ページNG）
- 運営者情報が明記されていること
- プライバシーポリシーがあること

### 将来の拡張性
- 審査通過後、本格的なTikTok風UIに改修予定
- DMM API連携機能の追加
- 動的コンテンツ生成機能の実装
