import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNewsDetail } from "@/features/media/api/microcms/getNews";
import Article from "@/features/media/news/Article";
import Breadcrumb from "@/features/media/breadcrumb";
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
        title: `お知らせ | ${data.title}`,
        description: data.article,
        // その他のメタデータ
        openGraph: {
            title: `お知らせ | ${data.title}`,
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
    
    return (
        <>
          {/* パンくずリスト */}
          <Breadcrumb articleTitle={data.title} />
    
          {/* コンテンツ */}
          <div className={`c-contents pdt5 pdt15s pdb5 pdb10s `}>
            <div className="c-contents--inner">
                <Article data={data} />
            </div>
          </div>
        </>
      );
}