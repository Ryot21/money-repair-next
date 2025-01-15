import { createClient } from "microcms-js-sdk";

import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";



// 【 型定義 】
export type Client = {// 投稿者
  name:        string;        // 取引先企業名
  address:     string;        // 住所
  description: string;        // 企業説明
  logo:        MicroCMSImage; // ロゴ
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

export type Interview = {// ご利用者インタビュー
  id:          string;   // ID
  company:     string;   // 企業名
  date:        string;   // 更新日（yyyy/mm/dd）
  thumbnail?:  MicroCMSImage; // サムネイル
  mainTitle:   string;   // メインタイトル
  subTitle:    string;   // サブタイトル
  category:    Category; // カテゴリー
  client:      Client;   // 取引先情報
  article:     string;   // 本文
  publishedAt: string;   // 更新日
  createdAt:   string;   // 作成日
} & MicroCMSListContent;

export type Information = {// お役立ち情報
  id:               string;   // ID
  date:             string;   // 更新日（yyyy/mm/dd）
  thumbnail?:       MicroCMSImage; // サムネイル
  mainTitle:        string;   // メインタイトル
  subTitle:         string;   // サブタイトル
  category:         Category; // カテゴリー
  captionLists: {             // 見出しリスト
    captionTitle01: string;
    captionTitle02: string;
    captionTitle03: string;
    captionTitle04: string;
    captionTitle05: string;
  };
  poster:           Poster;   // 投稿者
  read:             string;   // 導入文
  article:          string;   // 本文
  ctaOnOff:         boolean;  // CTA切り替え

  publishedAt:      string;   // 更新日
  createdAt:        string;   // 作成日
} & MicroCMSListContent;



// 【 参照エラーチェック 】
if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}
if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

// 
const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey:        process.env.MICROCMS_API_KEY
});

// 【 データ取得 】
// ご利用者の声リスト
export const getInterviewsList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Interview>({
    endpoint: "interview",
    queries,
  });
  return listData;
};
// お役立ち情報リスト
export const getInformationList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Information>({
    endpoint: "information",
    queries,
  });
  return listData;
}
// 投稿者リスト
export const getPosterList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Poster>({
    endpoint: "poster",
    queries,
  });
  return listData;
}