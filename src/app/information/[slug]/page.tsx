import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInformationDetail } from "@/libs/microcms";
import Article from "@/features/Article/Information";

// 型定義
type Props = {
  params: { slug: string };
  searchParams: { dk?: string };
};

// メタデータの生成
export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const data = await getInformationDetail(params.slug, {
    draftKey: searchParams.dk,
  }).catch(notFound);

  return {
    title: data.mainTitle,
    // その他のメタデータ
  };
}

// Pageコンポーネント
export default async function Page({ params, searchParams }: Props) {
  const data = await getInformationDetail(params.slug, {
    draftKey: searchParams.dk,
  }).catch(notFound);

  return <Article data={data} />;
}

// 動的レンダリングを強制
export const dynamic = "force-dynamic";
