import {
  getInterviewsList,
  getInterviewCategoryList,
} from "@/features/media/api/microcms/getInterview";
import { INTERVIEW_PAGE_LIST_LIMIT } from "@/constants";
import InterviewList from "@/features/media/interview/PostList";
import CategoryLists from "@/components/elements/category/CategoryLists";
import Pagination from "@/components/elements/pagination";
import Breadcrumb from "@/features/media/breadcrumb";
export default async function Page() {
  // 表示件数を絞る
  const { contents: interview, totalCount } = await getInterviewsList({
    limit: INTERVIEW_PAGE_LIST_LIMIT,
  });
  const categories = await getInterviewCategoryList();

  return (
    <>
      {/* パンくずリスト */}
      <Breadcrumb />

      {/* コンテンツ */}
      <div className={`c-contents pdt5 pdt15s pdb5 pdb10s `} >
        <div className="c-contents--inner">

        {/* 導入部分 */}
        <div className={"c-contents pdt2 pdb5 pdb10s"}>
          <div className={"c-contents--inner"}>
            <p className={"s-M -s12 -center -ls-2 -lh-2"}>
              マネーリペアをご利用された方々の
              <span className={"s-M -s12 -b -ls-2"}>率直な体験談</span>
              を集めました。
              <br className={"tb-pc"} />
              実際の体験を通じて、
              <span className={"s-M -s12 -b -ls-2"}>
                どのように金融知識が深まり、
              </span>
              <br className={"tb-pc"} />
              <span className={"s-M -s12 -b -ls-2"}>
                経済的な安心が得られたのかをご紹介します。
              </span>
              <br className={"tb-pc"} />
              ぜひマネーリペアが提供する価値をご確認ください。
            </p>
          </div>
        </div>
        {/* カテゴリ一覧 */}
        <CategoryLists article="interview" categories={categories} />
        {/* 記事一覧 */}
        <div className="c-contents pdt5 pdt10s pdb2">
          <InterviewList contents={interview} />
        </div>
          {/* ページネーション */}
          <Pagination totalCount={totalCount} basePath={`/interview`} />
        </div>
      </div>
    </>
  );
}
