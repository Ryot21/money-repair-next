// import Image from "next/image";
// import Link from "next/link";

// コンポーネント
import { getInformationList } from "@/libs/microcms";
import { INFORMATION_PAGE_LIST_LIMIT } from "@/constants";
import InformationList from "@/components/PostList/Information"

export default async function Page(){

    // 表示件数を絞る
    const informationData = await getInformationList({
        limit: INFORMATION_PAGE_LIST_LIMIT,
    });

    // const { contents : information } = await getInformationList();

    return (
        <InformationList contents={ informationData.contents }/>
    )
}