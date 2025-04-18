import { getManeripeList } from "@/features/media/api/microcms/getManeripe";
import { MANERIPE_PAGE_LIST_LIMIT } from "@/constants";
import ManeripeList from "@/features/media/maneripe/PostList";
// import SearchField from "@/components/elements/searchField";
// import CategoryLists from "@/components/elements/category/CategoryLists";
import Pagination from "@/components/elements/pagination";
import Breadcrumb from "@/features/media/breadcrumb";
export default async function Page() {
  // 表示件数を絞る
  const { contents: maneripe, totalCount } = await getManeripeList({
    limit: MANERIPE_PAGE_LIST_LIMIT,
  });
  // const categories = await getManeripeCategoryList();

  return (
    <>
      {/* パンくずリスト */}
      <Breadcrumb />

      {/* コンテンツ */}
      <div className={`c-contents pdt5 pdt15s pdb5 pdb10s `} >
        <div className="c-contents--inner">
          {/* 記事一覧 */}
          <div className="c-contents pdb2">
            <ManeripeList contents={maneripe} />
          </div>
          {/* ページネーション */}
          <Pagination totalCount={totalCount} basePath={`/maneripe`} />
        </div>
      </div>
    </>
  );
}
