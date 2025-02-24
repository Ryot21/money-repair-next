import type { MicroCMSQueries } from "microcms-js-sdk";
import type { Category, Information } from "@/types/microcms";
import { client } from "./client";

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
// お役立ち情報 > 全記事
export const getAllInformationSitemap = async () => {
    const listData = await client.getAllContents<Information>({
        endpoint: "information",
    });
    return listData;
}
// お役立ち情報 > カテゴリー > 全記事
export const getAllInformationCategorySitemap = async () => {
    const listData = await client.getAllContents<Category>({
        endpoint: "information_categories",
    });
    return listData;
}