import { notFound } from "next/navigation";
import { getInterviewsDetail } from "@/libs/microcms";
import Article from "@/features/Article/Interview";

type Props = {
    params: {
        slug: string;
    };
    searchParams: {
        dk?: string;
    };
};

export default async function Page({ params, searchParams }: Props ) {
    const data = await getInterviewsDetail(params.slug, {
        draftKey: searchParams.dk,
    }).catch(notFound);
    
    return (
        <Article data={data} />
    );
}