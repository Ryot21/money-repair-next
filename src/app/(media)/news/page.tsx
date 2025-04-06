import { getNewsList } from "@/features/media/api/microcms/getNews";
import { NEWS_PAGE_LIST_LIMIT } from "@/constants";
import NewsList from "@/features/media/news/PostList";
// import SearchField from "@/components/elements/searchField";
// import CategoryLists from "@/components/elements/category/CategoryLists";
import Pagination from "@/components/elements/pagination";
import Breadcrumb from "@/features/media/breadcrumb";

export default async function Page() {
  // 表示件数を絞る
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_PAGE_LIST_LIMIT,
  });
  // const categories = await getManeripeCategoryList();

  return (
    <>
      {/* パンくずリスト */}
      <Breadcrumb />

      {/* コンテンツ */}
      <div className={`c-contents pdt5 pdt10s pdb5 pdb10s `} >
        <div className="c-contents--inner">
        {/* 記事一覧 */}
        <div className="c-contents pdb2">
          <NewsList contents={news} />
        </div>
        {/* ページネーション */}
        <Pagination totalCount={totalCount} basePath={`/news`} />
        </div>
      </div>
    </>
  );
}
