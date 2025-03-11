import type {
    MicroCMSImage,
    MicroCMSListContent,
} from "microcms-js-sdk";


// 【 型定義 】
export type Client = {// 投稿者
    name:        string;        // 取引先企業名
    icon:        MicroCMSImage; // アイコン
    address:     string;        // 住所
    description: string;        // 企業説明
    logo?:       MicroCMSImage; // ロゴ
    url:         string;        // URL
} & MicroCMSListContent;

export type Poster = {// 投稿者
    name:             string;        // お名前
    officialPosition: string;        // 部署名+役職
    description:      string;        // 説明
    image:            MicroCMSImage; // プロフィール画像
    url:              string;        // URL
} & MicroCMSListContent;

export type Category = {// カテゴリー
    name: string;
} & MicroCMSListContent;

export type Recommend = {// 合わせて読みたい記事
    id:          string;
    thumbnail:  MicroCMSImage;
    thumbnailAlt: string;
    mainTitle:   string;
    read?:       string;
    url:         string;
    publishedAt: string;
    createdAt:   string;
} & MicroCMSListContent;

export type Interview = {// ご利用者インタビュー
    id:             string;        // ID
    company:        string;        // 企業名
    client:         Client;        // 取引先情報
    category:       Category;      // カテゴリー
    thumbnail:      MicroCMSImage; // サムネイル
    thumbnailAlt:   string;        // サムネイル_alt
    mainTitle:      string;        // メインタイトル
    subTitle:       string;        // サブタイトル
    article1Body:   string;        // 本文1
    article1Image:  MicroCMSImage; // 本文1
    article2Title:  string;        // 本文2_見出し
    article2Body:   string;        // 本文2
    article2Image:  MicroCMSImage; // 本文2
    article3Title?: string;        // 本文3_見出し
    article3Body?:  string;        // 本文3
    publishedAt:    string;        // 更新日
    createdAt:      string;        // 作成日
} & MicroCMSListContent;

export type Information = {// お役立ち情報
    id:               string;        // ID
    mainTitle:        string;        // メインタイトル
    thumbnail:        MicroCMSImage; // サムネイル
    thumbnailAlt:     string;        // サムネイル_alt
    category:         Category;      // カテゴリー
    captionLists: {                  // 見出しリスト
        captionTitle01: string;
        captionTitle02: string;
        captionTitle03: string;
        captionTitle04: string;
        captionTitle05: string;
    };
    poster:           Poster;   // 投稿者
    read?:            string;   // 導入文
    article:          string;   // 本文
    recommend?:       Recommend;// 合わせて読みたい記事
    ctaOnOff:         boolean;  // CTA切り替え

    publishedAt:      string;   // 更新日
    createdAt:        string;   // 作成日
} & MicroCMSListContent;

export type Maneripe = {// マネリペ情報
    id: string;
    mainTitle:        string;        // メインタイトル
    thumbnail:        MicroCMSImage; // サムネイル
    thumbnailAlt:     string;        // サムネイル_alt
    captionLists: {                  // 見出しリスト
        captionTitle01: string;
        captionTitle02: string;
        captionTitle03: string;
        captionTitle04: string;
        captionTitle05: string;
    };
    read:             string;   // 導入文
    article:          string;   // 本文
    poster:           Poster;   // 投稿者
    recommend?:       Recommend;// 合わせて読みたい記事
    publishedAt:      string;   // 更新日
    createdAt:        string;   // 作成日

} & MicroCMSListContent;

export type News = {// お知らせ
    id: string;
    title:        string;   // タイトル
    article:      string;   // 本文
    publishedAt:  string;   // 更新日
    createdAt:    string;   // 作成日

} & MicroCMSListContent;