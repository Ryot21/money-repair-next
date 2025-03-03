import { notFound } from "next/navigation";
import {
  getInformationList,
  getInformationCategoryDetail,
  getInformationCategoryList,
} from "@/features/media/api/microcms/getInformation";
import InformationList from "@/features/media/information/PostList";
import SearchField from "@/components/elements/searchField";
import CategoryLists from "@/components/elements/category/CategoryLists";
import Pagination from "@/components/elements/pagination";
import { INFORMATION_PAGE_LIST_LIMIT } from "@/constants";

type Props = {
  params: Promise<{
    id: string;
    current: string;
  }>;
};

export default async function Page({ params }: Props) {
  // paramsを非同期で取得
  const { id, current: currentParam } = await params;

  const current = parseInt(currentParam, 10);

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  const category = await getInformationCategoryDetail(id).catch(notFound);
  const categories = await getInformationCategoryList();

  const { contents: information, totalCount } = await getInformationList({
    filters: `category[equals]${category.id}`,
    limit: INFORMATION_PAGE_LIST_LIMIT,
    offset: INFORMATION_PAGE_LIST_LIMIT * (current - 1),
  });

  if (information.length === 0) {
    notFound();
  }

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
      {/* article = information or interview */}
      <CategoryLists
        article="information"
        currentCategoryId={category.id}
        categories={categories}
      />
      {/* 記事一覧 */}
      <div className="c-contents pdt5 pdt10s pdb2">
        <InformationList contents={information} />
      </div>
      {/* ページネーション */}
      <Pagination
        totalCount={totalCount}
        current={current}
        basePath={`/information/category/${category.id}`}
      />
    </>
  );
}
