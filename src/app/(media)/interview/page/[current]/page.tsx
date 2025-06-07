import { notFound } from "next/navigation";
import {
  getInterviewsList,
  getInterviewCategoryList,
} from "@/features/media/api/microcms/getInterview";
import InterviewList from "@/features/media/interview/PostList";
import { INTERVIEW_PAGE_LIST_LIMIT } from "@/constants";
import CategoryLists from "@/components/elements/category/CategoryLists";
import Pagination from "@/components/elements/pagination";
import Breadcrumb from "@/features/media/breadcrumb";

type Props = {
  params: Promise<{
    current: string;
  }>;
};

export default async function Page({ params }: Props) {
  // paramsを非同期で取得
  const { current: currentParam } = await params;
  const current = parseInt(currentParam, 10);

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  const { contents: interview, totalCount } = await getInterviewsList({
    limit: INTERVIEW_PAGE_LIST_LIMIT,
    offset: INTERVIEW_PAGE_LIST_LIMIT * (current - 1),
  });

  if (interview.length === 0) {
    notFound();
  }

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
                  マネリペをご利用された方々の
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
                  ぜひマネリペが提供する価値をご確認ください。
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
            <Pagination
              totalCount={totalCount}
              current={current}
              basePath={`/interview`}
            />
        </div>
      </div>
    </>
  );
}
