// TOPページ > マネリペ情報エリア
import ManeripeList from "@/features/media/maneripe/PostList";
import Button from "@/components/elements/button";
// 投稿関係
import { getManeripeList } from "@/features/media/api/microcms/getManeripe";
import { MANERIPE_TOP_LIST_LIMIT } from "@/constants";

export default async function InterviewArea() {
  // 表示件数を絞る
  const maneripeData = await getManeripeList({
    limit: MANERIPE_TOP_LIST_LIMIT,
  });

  return (
    <div id="sc04" className={"c-contents pdt20s mgb10 mgb5s"}>
      {/* タイトル */}
      <h2 className={"c-contents--title -maneripe -left -ls-2 -en-color03"}>
        マネリペ情報
      </h2>

      {/* 投稿リスト */}
      <div className={"c-post pdt5 pdt5s mgb5 mgb5s"}>
        <ManeripeList contents={maneripeData.contents} />
      </div>

      {/* ボタン */}
      <Button href="/maneripe" customAreaClass="-right" customClass="-text">マネリペ一覧はコチラ</Button>
    </div>
  );
}
