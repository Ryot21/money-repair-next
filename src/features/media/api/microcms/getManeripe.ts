import type { MicroCMSQueries } from "microcms-js-sdk";
import type { Maneripe } from "@/types/microcms";
import { client } from "./client";

// マネリペ情報
export const getManeripeList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<Maneripe>({
        endpoint: "maneripe",
        queries,
    });
    return listData;
}
export const getManeripeDetail = async (// 詳細
    contentId: string,
    queries?: MicroCMSQueries
) => {
    const detailData = await client.getListDetail<Maneripe>({
        endpoint: "maneripe",
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