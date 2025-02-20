import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInformationDetail } from "@/libs/microcms";
import Article from "@/features/Article/Information";

// SSR（microcms.tsに記述　通常時ISR＋プレビュー時SSR）

// 型定義
type Props = {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ dk?: string }>;
};

// メタデータの生成
export async function generateMetadata({ 
    params, 
    searchParams 
}: Props): Promise<Metadata> {
    // paramsとsearchParamsを非同期で取得
    const { slug } = await params;
    const { dk: draftKey } = await searchParams;

    const data = await getInformationDetail(slug, {
        draftKey,
    }).catch(notFound);

    return {
        title: data.mainTitle,
        description: data.subTitle,
        // その他のメタデータ
        openGraph: {
            title: data.mainTitle,
            description: data.subTitle,
            images: [data.thumbnail?.url ?? ""],
        },
    };
}

// Pageコンポーネント
export default async function Page({ 
    params,
    searchParams,
}: Props) {
    // paramsとsearchParamsを非同期で取得
    const { slug } = await params;
    const { dk: draftKey } = await searchParams;
    
    const data = await getInformationDetail(slug, {
        draftKey,
    }).catch(notFound);
    
    return <Article data={data} />;
}
