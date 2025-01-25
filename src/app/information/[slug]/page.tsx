import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInformationDetail } from "@/libs/microcms";
import Article from "@/features/Article/Information";

// メタデータの生成
export async function generateMetadata({ 
    params, 
    searchParams 
}: {
    params: { slug: string };
    searchParams: { dk?: string };
}): Promise<Metadata> {
    const data = await getInformationDetail(params.slug, {
        draftKey: searchParams.dk,
    }).catch(notFound);

    return {
        title: data.mainTitle,
        // その他のメタデータ
    };
}

// Pageコンポーネントの型定義を直接インラインで行う
export default async function Page({ 
    params,
    searchParams,
}: {
    params: { slug: string };
    searchParams: { dk?: string };
}) {
    const { slug } = params;
    const { dk: draftKey } = searchParams;
    
    const data = await getInformationDetail(slug, {
        draftKey,
    }).catch(notFound);
    
    return (
        <Article data={data} />
    );
}