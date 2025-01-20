import { notFound } from "next/navigation";
import { getInformationDetail } from "@/libs/microcms";
import Article from "@/features/Article/Information";
// import Styles from "./page.module.scss";
import type { Params } from "@/libs/microcms";

type Props = {
    params: Params;
};

export default async function Page({ params }: Props ) {
    const data = await getInformationDetail(params.slug).catch(notFound);
    return (
        <Article data={data} />
    );
}