import {
  getInterviewCategoryList,
  getInformationCategoryList,
} from "@/libs/microcms";
import HamburgerNavContent from "./HamburgerNavContent";

// このコンポーネントはサーバーサイドでデータを取得し、
// クライアントコンポーネントであるHamburgerNavContentにデータを渡す役割を持ちます
export default async function HamburgerNav() {
  // microCMSからカテゴリー情報を取得
  const interviewCategories = await getInterviewCategoryList();
  const informationCategories = await getInformationCategoryList();

  return (
    <HamburgerNavContent
      interviewCategories={interviewCategories}
      informationCategories={informationCategories}
    />
  );
}
