# Money-Repair Project

株式会社インプレームの「マネーリペア」のサービスサイト兼オウンドメディアサイトです。
キャッシュ方法としてオンデマンド再検証を採用する。


## Getting Started

money-repair.jpディレクトリ
```
1. DockerDesktopを起動
2. docker-compose up （docker起動 + 開発開始）
3. control + c        (docker停止 + 開発中止)
```

## ルーティング設計とプロジェクト配置
Bulletproof-Reactの基礎とディレクトリ構成

src/
|
+---- 1.app          # アプリケーション全体のルーティングを管理
|
|
+---- 2.components   # アプリケーション全体のグローバルコンポーネント（共有）
|
|
+---- 3.features     # ドメイン固有の機能を管理するレイヤー
|        |
|        +- 1.components   # ドメイン固有のコンポーネントを管理するレイヤー
|        |
|        +- 2.api          # ドメイン固有のAPIを管理するレイヤー
|        |
|        +- 3.hooks        # ドメイン固有の数字や文字を加工、日時操作など
|        |
|        +- 4.constants    # ドメイン固有のすべての設定、環境変数など
|        |
|        +- 5.styles       # ドメイン固有のスタイル
|        |
|        +- 6.types        # ドメイン固有の型定義
|
|
+---- 4.constants    # アプリケーション全体の設定、環境変数など
|
|
+---- 5.hooks        # アプリケーション全体のボタンの非活性化制御や検索ワードによるルーターの遷移管理など
|
|
+---- 6.stores       # グローバルな状態管理
|
|
+---- 7.styles       # アプリケーション全体のスタイル
|
|
+---- 8.types        # アプリケーション全体で使用される型定義
|
|
+---- 9.utils        # 共通のユーティリティ
|
|
+---- 10.config      # アプリケーション全体の設定
|
|
public/ # 11. 画像やフォントなどの静的ファイルをすべて入れることができます。

参考：https://note.com/ryohei_wada/n/n2e3e7a66e758#34f8e1dc-c0af-4d51-88b2-3fd6fbcd7900

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Technology Used

-HTML
-CSS
-SCSS
-React v19.0.0
-Next.js v15.1.2
-microCMS
-Vercel（デプロイ）