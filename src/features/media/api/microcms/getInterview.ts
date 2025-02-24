import type { MicroCMSQueries } from "microcms-js-sdk";
import type { Category, Interview } from "@/types/microcms";
import { client } from "./client";

// ご利用者の声
export const getInterviewsList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<Interview>({
        endpoint: "interview",
        queries,
    });
    return listData;
};
export const getInterviewsDetail = async (
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

// カテゴリー > ご利用者の声
export const getInterviewCategoryList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<Category>({
        endpoint: "interview_categories",
        queries,
    });
    return listData;
};
export const getInterviewCategoryDetail = async (
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
};
// ご利用者の声 > 全記事
export const getAllInterviewSitemap = async () => {
    const listData = await client.getAllContents<Interview>({
        endpoint: "interview",
    });
    return listData;
};
// ご利用者の声 > カテゴリー > 全記事
export const getAllInterviewCategorySitemap = async () => {
    const listData = await client.getAllContents<Category>({
        endpoint: "interview_categories",
    });
    return listData;
};
