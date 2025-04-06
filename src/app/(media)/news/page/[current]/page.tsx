import { notFound } from "next/navigation";
import {
  getNewsList,
  // getManeripeCategoryList,
} from "@/features/media/api/microcms/getNews";
import NewsList from "@/features/media/news/PostList";
import { NEWS_PAGE_LIST_LIMIT } from "@/constants";
import Pagination from "@/components/elements/pagination";
import Breadcrumb from "@/features/media/breadcrumb";

type Props = {
  params: Promise<{
    current: string;
  }>;
};

export default async function Page({ params }: Props) {
  // paramsを非同期で取得
  const { current: currentParam } = await params;
  const current = parseInt(currentParam, 10);

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_PAGE_LIST_LIMIT,
    offset: NEWS_PAGE_LIST_LIMIT * (current - 1),
  });

  if (news.length === 0) {
    notFound();
  }

  return (
    <>
      {/* パンくずリスト */}
      <Breadcrumb />

      {/* コンテンツ */}
      <div className={`c-contents pdt5 pdt15s pdb5 pdb10s `} >
        <div className="c-contents--inner">
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
          {/* <SearchField /> */}
          {/* カテゴリ一覧 */}
          {/* <CategoryLists article="information" categories={categories} /> */}
          {/* 記事一覧 */}
          <div className="c-contents pdt5 pdt10s pdb2">
            <NewsList contents={news} />
          </div>
          {/* ページネーション */}
          <Pagination
            totalCount={totalCount}
            current={current}
            basePath={`/news`}
          />
        </div>
      </div>
    </>
  );
}
