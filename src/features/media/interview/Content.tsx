// TOPページ > ご利用者の声エリア
import InterviewList from "@/features/media/interview/PostList";
import Button from "@/components/elements/button";
// 投稿関係
import { getInterviewsList } from "@/features/media/api/microcms/getInterview";
import { INTERVIEW_TOP_LIST_LIMIT } from "@/constants";

export default async function InterviewArea() {
  // 表示件数を絞る
  const interviewData = await getInterviewsList({
    limit: INTERVIEW_TOP_LIST_LIMIT,
  });

  return (
    <div id="sc02" className={"c-contents pdt10 pdt20s mgb5s"}>
      <div className={"c-contents--inner"}>
        {/* タイトル */}
        <h2
          className={
            "c-contents--title -interview -ls-1 -en-color03 pdb5 pdb5s"
          }
        >
          ご利用者インタビュー
        </h2>

        {/* 投稿リスト */}
        <div className={"c-post mgb2 mgb10s"}>
          <InterviewList contents={interviewData.contents} />
        </div>

        {/* ボタン */}
        <div className={"c-contents--btnArea"}>
          <Button href="/interview" customClass="-maru -blue">すべて見る</Button>
        </div>
      </div>
    </div>
  );
}
