import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInterviewsDetail } from "@/features/media/api/microcms/getInterview";
import Article from "@/features/media/interview/Article";
import Breadcrumb from "@/features/media/breadcrumb";
// SSR（microcms.tsに記述　通常時ISR＋プレビュー時SSR）

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

  const data = await getInterviewsDetail(slug, {
    draftKey,
  }).catch(notFound);

  return {
    title: `マネリペ | ご利用者の声 ${data.company}`,
    description: data.read,
    // その他のメタデータ
    openGraph: {
        title: `マネリペ | ご利用者の声 ${data.company}`,
        description: data.read,
      images: [data.thumbnail?.url ?? ""],
    },
  };
}

// Pageコンポーネント
export default async function Page({ params, searchParams }: Props) {
  // paramsとsearchParamsを非同期で取得
  const { slug } = await params;
  const { dk: draftKey } = await searchParams;

  const data = await getInterviewsDetail(slug, {
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
