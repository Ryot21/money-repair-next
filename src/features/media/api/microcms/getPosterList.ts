import type { MicroCMSQueries } from "microcms-js-sdk";
import type { Poster } from "@/types/microcms";
import { client } from "./client";

// 投稿者_リスト
export const getPosterList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<Poster>({
        endpoint: "poster",
        queries,
    });
    return listData;
}