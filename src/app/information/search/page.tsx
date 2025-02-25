import {
  getInformationList,
  getInformationCategoryList,
} from "@/features/media/api/microcms/getInformation";
import { INFORMATION_PAGE_LIST_LIMIT } from "@/constants";
import InformationList from "@/features/media/information/PostList";
import SearchField from "@/components/elements/searchField";
import CategoryLists from "@/components/elements/category/CategoryLists";
import Pagination from "@/components/elements/pagination";

// SSR
export const dynamic = "force-dynamic";

type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function Page({ searchParams }: Props) {
  // searchParamsを非同期で取得
  const { q } = await searchParams;

  const { contents: information, totalCount } = await getInformationList({
    limit: INFORMATION_PAGE_LIST_LIMIT,
    q, // 非同期で取得したqを使用
  });

  const categories = await getInformationCategoryList();

  return (
    <>
      {/* 導入部分 */}
      <div className={"c-contents pdt2 pdb5 pdb10s"}>
        <div className={"c-contents--inner"}>
          <p className={"s-M -s12 -center -ls-2 -lh-2"}>
            マネーリペアに関連する
            <span className={"s-M -s12 -b -ls-2"}>資産形成</span>
            に役立つ記事を発信しています。
            <br className={"tb-pc"} />
            従業員の
            <span className={"s-M -s12 -b -ls-2"}>
              経済力向上や福利厚生強化
            </span>
            に向けた知識を
            <br className={"tb-pc"} />
            様々な情報を活用して、より豊かな未来を目指しましょう。
          </p>
        </div>
      </div>
      {/* 検索フォーム */}
      <SearchField />
      {/* カテゴリ一覧 */}
      <CategoryLists article="information" categories={categories} />
      {/* 記事一覧 */}
      <div className="c-contents pdt5 pdt10s pdb2">
        <InformationList contents={information} />
      </div>
      {/* ページネーション */}
      <Pagination totalCount={totalCount} basePath={`/information/search`} />
    </>
  );
}
