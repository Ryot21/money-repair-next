import { notFound } from "next/navigation";
import { getInformationDetail } from "@/libs/microcms";
import Article from "@/features/Article/Information";

type Props = {
    params: {
        slug: string;
    }
};

export default async function Page({ params }: Props ) {
    const data = await getInformationDetail(params.slug).catch(notFound);
    return (
        <Article data={data} />
    );
}