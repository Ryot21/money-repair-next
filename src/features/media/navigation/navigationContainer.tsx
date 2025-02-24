import { getInterviewCategoryList } from "@/features/media/api/microcms/getInterview";
import { getInformationCategoryList } from "@/features/media/api/microcms/getInformation";
import Navigation from ".";

// このコンポーネントはサーバーサイドでデータを取得し、
// クライアントコンポーネントであるHamburgerNavContentにデータを渡す役割を持ちます
export default async function NavigationContainer() {
  // microCMSからカテゴリー情報を取得
  const interviewCategories = await getInterviewCategoryList();
  const informationCategories = await getInformationCategoryList();

  return (
    <Navigation
      interviewCategories={interviewCategories}
      informationCategories={informationCategories}
    />
  );
}
