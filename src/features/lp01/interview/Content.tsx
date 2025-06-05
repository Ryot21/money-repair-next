// LP > ご利用者の声エリア
import LpInterviewList from "@/features/lp01/interview/PostList";

// 投稿関係
import { getInterviewsList } from "@/features/media/api/microcms/getInterview";
import { INTERVIEW_TOP_LIST_LIMIT } from "@/constants";

export default async function LpInterviewArea() {
  // 表示件数を絞る
  const interviewData = await getInterviewsList({
    limit: INTERVIEW_TOP_LIST_LIMIT,
  });

  return (
    <div id="sc07" className={"c-contents pdt10 pdt20s pdb5 pdb0s"}>
      <div className={"c-contents--inner"}>
        {/* タイトル */}
        <h2 className={"c-contents--LpMainTitle -b-btm -c01 mgb5 mgb10s"}>
          導入<span className="-b">いただいた</span>企業様<span className="-b">の</span>声
        </h2>

        {/* 投稿リスト */}
        <div className={"c-post mgb2 mgb10s"}>
          <LpInterviewList contents={interviewData.contents} />
        </div>

      </div>
    </div>
  );
}
