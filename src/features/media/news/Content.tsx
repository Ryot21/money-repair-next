// TOPページ > お知らせエリア
import NewsList from "@/features/media/news/PostList";
import Button from "@/components/elements/button";
// 投稿関係
import { getNewsList } from "@/features/media/api/microcms/getNews";
import { NEWS_TOP_LIST_LIMIT } from "@/constants";

export default async function InterviewArea() {
  // 表示件数を絞る
  const newsData = await getNewsList({
    limit: NEWS_TOP_LIST_LIMIT,
  });

  return (
    <div id="sc05" className={"c-contents pdt20s mgb10 mgb20s"}>
      {/* タイトル */}
      <h2 className={"c-contents--title -news -left -ls-2 -en-color03"}>
        お知らせ
      </h2>

      {/* 投稿リスト */}
      <div className={"c-post pdt5 pdt5s mgb5 mgb5s"}>
        <NewsList contents={newsData.contents} />
      </div>

      {/* ボタン */}
      <div className={"c-contents--btnArea"}>
        <Button href="/news" customAreaClass="-right" customClass="-text">お知らせ一覧はコチラ</Button>
      </div>

    </div>
  );
}
