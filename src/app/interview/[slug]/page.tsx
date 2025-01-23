import { notFound } from "next/navigation";
import { getInterviewsDetail } from "@/libs/microcms";
import Article from "@/features/Article/Interview";

type Props = {
    params: {
        slug: string;
    }
};

export default async function Page({ params }: Props ) {
    const data = await getInterviewsDetail(params.slug).catch(notFound);
    return (
        <Article data={data} />
    );
}