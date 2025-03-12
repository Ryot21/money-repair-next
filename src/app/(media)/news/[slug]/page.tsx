import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNewsDetail } from "@/features/media/api/microcms/getNews";
import Article from "@/features/media/news/Article";

// SSR（microcms.tsに記述　通常時ISR＋プレビュー時SSR）

type Props = {
    params: Promise<{slug: string;}>;
    searchParams: Promise<{dk?: string;}>;
};

// メタデータの生成
export async function generateMetadata({ 
    params, 
    searchParams 
}: Props): Promise<Metadata> {
    // paramsとsearchParamsを非同期で取得
    const { slug } = await params;
    const { dk: draftKey } = await searchParams;

    const data = await getNewsDetail(slug, {
        draftKey,
    }).catch(notFound);

    return {
        title: data.title,
        description: data.article,
        // その他のメタデータ
        openGraph: {
            title: data.title,
            description: data.article,
            // images: [data.thumbnail?.url ?? ""],
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
    
    const data = await getNewsDetail(slug, {
        draftKey,
    }).catch(notFound);
    
    return <Article data={data} />;
}