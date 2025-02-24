import type { MicroCMSQueries } from "microcms-js-sdk";
import type { Client } from "@/types/microcms";
import { client } from "./client";

// 投稿者_リスト
export const getClientList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<Client>({
        endpoint: "clients",
        queries,
    });
    return listData;
}