// データフェッチを行うコンテナコンポーネント
// import { getInterviewCategoryList } from "@/features/media/api/microcms/getInterview";
import { getInformationCategoryList } from "@/features/media/api/microcms/getInformation";
import Header from "./index";

// このコンポーネントはサーバーサイドでデータを取得し、
// クライアントコンポーネントであるHeaderにデータを渡す役割を持ちます
export default async function HeaderContainer() {
  // マイクロCMSからカテゴリー情報を取得
  // const interviewCategories = await getInterviewCategoryList();
  const informationCategories = await getInformationCategoryList();

  return (
    <Header
      // interviewCategories={interviewCategories}
      informationCategories={informationCategories}
    />
  );
}
