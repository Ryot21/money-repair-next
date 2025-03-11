import { notFound } from "next/navigation";
import {
  getNewsList,
  // getNewsCategoryList,
} from "@/features/media/api/microcms/getNews";
import NewsList from "@/features/media/news/PostList";
import { NEWS_PAGE_LIST_LIMIT } from "@/constants";
// import CategoryLists from "@/components/elements/category/CategoryLists";
import Pagination from "@/components/elements/pagination";

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

  // const categories = await getNewsCategoryList();

  return (
    <>
      {/* 導入部分 */}
      <div className={"c-contents pdt2 pdb5 pdb10s"}>
        <div className={"c-contents--inner"}>
          <p className={"s-M -s12 -center -ls-2 -lh-2"}>
            マネーリペアをご利用された方々の
            <span className={"s-M -s12 -b -ls-2"}>率直な体験談</span>
            を集めました。
            <br className={"tb-pc"} />
            実際の体験を通じて、
            <span className={"s-M -s12 -b -ls-2"}>
              どのように金融知識が深まり、
            </span>
            <br className={"tb-pc"} />
            <span className={"s-M -s12 -b -ls-2"}>
              経済的な安心が得られたのかをご紹介します。
            </span>
            <br className={"tb-pc"} />
            ぜひマネーリペアが提供する価値をご確認ください。
          </p>
        </div>
      </div>
      {/* カテゴリ一覧 */}
      {/* <CategoryLists article="interview" categories={categories} /> */}
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
    </>
  );
}
