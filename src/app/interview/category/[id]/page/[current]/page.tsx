import { notFound } from "next/navigation";
import {
  getInterviewCategoryDetail,
  getInterviewsList,
  getInterviewCategoryList,
} from "@/libs/microcms";
import InterviewList from "@/features/PostList/Interview";
import CategoryList from "@/components/Parts/Category/List";
import Pagination from "@/components/Parts/pagination";
import { INTERVIEW_PAGE_LIST_LIMIT } from "@/constants";

type Props = {
  params: Promise<{
    id: string;
    current: string;
  }>;
};

export default async function Page({ params }: Props) {
  // paramsを非同期で取得
  const { id, current: currentParam } = await params;

  const current = parseInt(currentParam, 10);

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  const category = await getInterviewCategoryDetail(id).catch(notFound);
  const categories = await getInterviewCategoryList();

  const { contents: interview, totalCount } = await getInterviewsList({
    filters: `category[equals]${category.id}`,
    limit: INTERVIEW_PAGE_LIST_LIMIT,
    offset: INTERVIEW_PAGE_LIST_LIMIT * (current - 1),
  });

  if (interview.length === 0) {
    notFound();
  }

  return (
    <>
      {/* 導入部分 */}
      <div className={"c-contents pdt2 pdt10s pdb5 pdb10s"}>
        <div className={"c-contents--inner"}>
          <p className={"s-ML -s14 -center -ls-2 -lh-2"}>
            マネーリペアに関連する
            <span className={"s-ML -s14 -b -ls-2"}>資産形成</span>
            に役立つ記事を発信しています。
            <br className={"tb-pc"} />
            従業員の
            <span className={"s-ML -s14 -b -ls-2"}>
              経済力向上や福利厚生強化
            </span>
            に向けた知識を
            <br className={"tb-pc"} />
            様々な情報を活用して、より豊かな未来を目指しましょう。
          </p>
        </div>
      </div>
      {/* カテゴリ一覧 */}
      {/* article = information or interview */}
      <CategoryList
        article="interview"
        currentCategoryId={category.id}
        categories={categories}
      />
      {/* 記事一覧 */}
      <div className="c-contents pdt5 pdt10s pdb2">
        <InterviewList contents={interview} />
      </div>
      {/* ページネーション */}
      <Pagination
        totalCount={totalCount}
        current={current}
        basePath={`/interview/category/${category.id}`}
      />
    </>
  );
}