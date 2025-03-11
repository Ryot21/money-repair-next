// TOPページ > お役立ち情報エリア
import InformationList from "@/features/media/information/PostList";
import Button from "@/components/elements/button";
// 投稿関係
import { getInformationList } from "@/features/media/api/microcms/getInformation";
import { INFORMATION_TOP_LIST_LIMIT } from "@/constants";

export default async function InterviewArea() {
  // 表示件数を絞る
  const informationData = await getInformationList({
    limit: INFORMATION_TOP_LIST_LIMIT,
  });

  return (
    <div id="sc03" className={"c-contents pdt10 pdt20s mgb10 mgb20s"}>
      <div className={"c-contents--inner"}>
        {/* タイトル */}
        <h2 className={"c-contents--title -news -ls-1 -en-color03 pdb5 pdb5s"}>
          お役立ち情報
        </h2>

        {/* 投稿リスト */}
        <div className={"c-post mgb2 mgb10s"}>
          <InformationList contents={informationData.contents} />
        </div>

        {/* ボタン */}
        <div className={"c-contents--btnArea"}>
          <Button href="/information" customClass="-maru -blue">すべて見る</Button>
        </div>
      </div>
    </div>
  );
}
