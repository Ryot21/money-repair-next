// データフェッチを行うコンテナコンポーネント
import {
  getInterviewCategoryList,
  getInformationCategoryList,
} from "@/libs/microcms";
import Header from "./index";

// このコンポーネントはサーバーサイドでデータを取得し、
// クライアントコンポーネントであるHeaderにデータを渡す役割を持ちます
export default async function HeaderContainer() {
  // マイクロCMSからカテゴリー情報を取得
  const interviewCategories = await getInterviewCategoryList();
  const informationCategories = await getInformationCategoryList();

  return (
    <Header
      interviewCategories={interviewCategories}
      informationCategories={informationCategories}
    />
  );
}
