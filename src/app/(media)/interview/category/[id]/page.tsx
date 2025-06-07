import {
  getInterviewsList,
  getInterviewCategoryDetail,
  getInterviewCategoryList,
} from "@/features/media/api/microcms/getInterview";
import { INTERVIEW_PAGE_LIST_LIMIT } from "@/constants";
import { notFound } from "next/navigation";
import InterviewList from "@/features/media/interview/PostList";
import CategoryLists from "@/components/elements/category/CategoryLists";
import Pagination from "@/components/elements/pagination";
import Breadcrumb from "@/features/media/breadcrumb";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: Props) {
  // paramsを非同期で取得
  const { id } = await params;

  const category = await getInterviewCategoryDetail(id).catch(notFound);
  const categories = await getInterviewCategoryList();

  const { contents: interview, totalCount } = await getInterviewsList({
    filters: `category[equals]${category.id}`,
    limit: INTERVIEW_PAGE_LIST_LIMIT,
  });

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
                  マネリペに関連する
                  <span className={"s-M -s12 -b -ls-2"}>資産形成</span>
                  に役立つ記事を発信しています。
                  <br className={"tb-pc"} />
                  従業員の
                  <span className={"s-M -s12 -b -ls-2"}>
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
            <CategoryLists
              article="interview"
              currentCategoryId={id}
              categories={categories}
            />

            {/* 記事一覧 */}
            <div className="c-contents pdt5 pdt10s pdb2">
              <InterviewList contents={interview} />
            </div>

            {/* ページネーション */}
            <Pagination
              totalCount={totalCount}
              basePath={`/interview/category/${category.id}`}
            />
        </div>
      </div>
    </>
  );
}
