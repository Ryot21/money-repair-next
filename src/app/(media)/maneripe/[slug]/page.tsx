import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getManeripeDetail } from "@/features/media/api/microcms/getManeripe";
import Article from "@/features/media/maneripe/Article";

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

    const data = await getManeripeDetail(slug, {
        draftKey,
    }).catch(notFound);

    return {
        title: data.mainTitle,
        description: data.read,
        // その他のメタデータ
        openGraph: {
            title: data.mainTitle,
            description: data.read,
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
    
    const data = await getManeripeDetail(slug, {
        draftKey,
    }).catch(notFound);
    
    return <Article data={data} />;
}