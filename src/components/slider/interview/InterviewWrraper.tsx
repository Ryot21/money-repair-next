import { getInterviewsList } from "@/features/media/api/microcms/getInterview";
import ClientInterviewSwiper from "@/components/slider/interview/";
import { INTERVIEW_LP_LIST_LIMIT } from "@/constants";

// メインの非同期コンポーネント
export default async function InterviewWrraper() {
  try {
    const response = await getInterviewsList({
      limit: INTERVIEW_LP_LIST_LIMIT,
    });
    if (response.contents.length === 0) {
      return <p>インタビューのデータが見つかりません...</p>;
    }
    return <ClientInterviewSwiper contents={response.contents} />;
  } catch (error) {
    console.error("インタビューのデータの取得に失敗しました:", error);
    return <p>インタビューのデータの取得に失敗しました。</p>;
  }
}
