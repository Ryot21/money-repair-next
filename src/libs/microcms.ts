import { createClient } from "microcms-js-sdk";
import type {
    MicroCMSQueries,
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
    thumbnail?:  MicroCMSImage;
    mainTitle:   string;
    read?:       string;
    url:         string;
    publishedAt: string;
    createdAt:   string;
} & MicroCMSListContent;

export type Interview = {// ご利用者インタビュー
    id:             string;        // ID
    company:        string;        // 企業名
    date:           string;        // 更新日（yyyy/mm/dd）
    thumbnail:      MicroCMSImage; // サムネイル
    mainTitle:      string;        // メインタイトル
    subTitle:       string;        // サブタイトル
    category:       Category;      // カテゴリー
    client:         Client;        // 取引先情報
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
    read?:            string;   // 導入文
    article:          string;   // 本文
    recommend?:       Recommend;// 合わせて読みたい記事
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
// カテゴリー > お役立ち情報
export const getInformationCategoryList = async (queries?: MicroCMSQueries) => {// 一覧
  const listData = await client.getList<Category>({
    endpoint: "information_categories",
    queries,
  });
  return listData;
};
export const getInformationCategoryDetail = async (// 詳細
    contentId: string,
    queries?: MicroCMSQueries
) => {
    const detailData = await client.getListDetail<Category>({
        endpoint: "information_categories",
        contentId,
        queries,
        customRequestInit: {
            next: {
                revalidate: queries?.draftKey === undefined ? 60 : 0,
            },
        },
    });
    return detailData;
}
// カテゴリー > ご利用者の声
export const getInterviewCategoryList = async (queries?: MicroCMSQueries) => {// 一覧
    const listData = await client.getList<Category>({
      endpoint: "interview_categories",
      queries,
    });
    return listData;
};
export const getInterviewCategoryDetail = async (// 詳細
    contentId: string,
    queries?: MicroCMSQueries
) => {
    const detailData = await client.getListDetail<Category>({
        endpoint: "interview_categories",
        contentId,
        queries,
        customRequestInit: {
            next: {
                revalidate: queries?.draftKey === undefined ? 60 : 0,
            },
        },
    });
    return detailData;
}
// お役立ち情報
export const getInformationList = async (queries?: MicroCMSQueries) => {// 一覧
    const listData = await client.getList<Information>({
        endpoint: "information",
        queries,
    });
    return listData;
}
export const getInformationDetail = async (// 詳細
    contentId: string,
    queries?: MicroCMSQueries
) => {
    const detailData = await client.getListDetail<Information>({
        endpoint: "information",
        contentId,
        queries,
        customRequestInit: {
            next: {
                revalidate: queries?.draftKey === undefined ? 60 : 0,
            },
        },
    });
    return detailData;
};
export const getInformationsByCategory = async (categoryId: string, currentId: string) => {// カテゴリーに関する記事
    const response = await client.getList<Information>({
        endpoint: "information",
        queries: {
            limit: 2,
            filters: `category[equals]${categoryId}[and]id[not_equals]${currentId}`,
            orders: '-updatedAt,-publishedAt', // 更新日時が新しい順、次に公開日時が新しい順
        },
    });
    return response.contents;
};
// ご利用者の声
export const getInterviewsList = async (queries?: MicroCMSQueries) => {// 一覧
    const listData = await client.getList<Interview>({
        endpoint: "interview",
        queries,
    });
    return listData;
};
export const getInterviewsDetail = async (// 詳細
    contentId: string,
    queries?: MicroCMSQueries
) => {
    const detailData = await client.getListDetail<Interview>({
        endpoint: "interview",
        contentId,
        queries,
        customRequestInit: {
            next: {
                revalidate: queries?.draftKey === undefined ? 60 : 0,
            },
        },
    });
    return detailData;
};
// 投稿者_リスト
export const getPosterList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<Poster>({
        endpoint: "poster",
        queries,
    });
    return listData;
}
// 取引先_リスト
export const getClientList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<Client>({
        endpoint: "clients",
        queries,
    });
    return listData;
}

// 【 サイトマップ 】
// お役立ち情報_全記事
export const getAllInformationSitemap = async () => {
    const listData = await client.getAllContents<Information>({
        endpoint: "information",
    });
    return listData;
}
// お役立ち情報_カテゴリー_全記事
export const getAllInformationCategorySitemap = async () => {
    const listData = await client.getAllContents<Category>({
        endpoint: "information_categories",
    });
    return listData;
}
// ご利用者の声_全記事
export const getAllInterviewSitemap = async () => {
    const listData = await client.getAllContents<Interview>({
        endpoint: "interview",
    });
    return listData;
}
// ご利用者の声_カテゴリー_全記事
export const getAllInterviewCategorySitemap = async () => {
    const listData = await client.getAllContents<Category>({
        endpoint: "interview_categories",
    });
    return listData;
}