import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInformationDetail } from "@/features/media/api/microcms/getInformation";
import Article from "@/features/media/information/Article";
import Breadcrumb from "@/features/media/breadcrumb";

// SSR（microcms.tsに記述　通常時ISR＋プレビュー時SSR）

// 型定義
type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ dk?: string }>;
};

// メタデータの生成
export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  // paramsとsearchParamsを非同期で取得
  const { slug } = await params;
  const { dk: draftKey } = await searchParams;

  const data = await getInformationDetail(slug, {
    draftKey,
  }).catch(notFound);

  return {
    title: `ご利用者の声 | ${data.mainTitle}`,
    description: data.read.replace(/<[^>]+>/g, ""),
    // その他のメタデータ
    openGraph: {
      title: `ご利用者の声 | ${data.mainTitle}`,
      description: data.read.replace(/<[^>]+>/g, ""),
      images: [data.thumbnail.url],
    },
  };
}

// Pageコンポーネント
export default async function Page({ params, searchParams }: Props) {
  // paramsとsearchParamsを非同期で取得
  const { slug } = await params;
  const { dk: draftKey } = await searchParams;

  const data = await getInformationDetail(slug, {
    draftKey,
  }).catch(notFound);

  return (
    <>
      {/* パンくずリスト */}
      <Breadcrumb articleTitle={data.mainTitle} />

      {/* コンテンツ */}
      <div className={`c-contents pdt5 pdt15s pdb5 pdb10s `}>
        <div className="c-contents--inner">
          <Article data={data} />
        </div>
      </div>
    </>
  );
}
