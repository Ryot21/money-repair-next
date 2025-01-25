import { notFound } from "next/navigation";
import { getInterviewsDetail } from "@/libs/microcms";
import Article from "@/features/Article/Interview";

type Props = {
    params: Promise<{
        slug: string;
    }>;
    searchParams: Promise<{
        dk?: string;
    }>;
};

export default async function Page({ params, searchParams }: Props) {
    // paramsとsearchParamsを非同期で取得
    const { slug } = await params;
    const { dk: draftKey } = await searchParams;
    
    const data = await getInterviewsDetail(slug, {
        draftKey,
    }).catch(notFound);
    
    return (
        <Article data={data} />
    );
}