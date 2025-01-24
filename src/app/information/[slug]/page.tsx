import { notFound } from "next/navigation";
import { getInformationDetail } from "@/libs/microcms";
import Article from "@/features/Article/Information";

type Props = {
    params: {
        slug: string;
    };
    searchParams: {
        dk?: string;
    };
};

export default async function Page({ params, searchParams }: Props ) {
    const data = await getInformationDetail(params.slug, {
        draftKey: searchParams.dk,
    }).catch(notFound);
    return (
        <Article data={data} />
    );
}