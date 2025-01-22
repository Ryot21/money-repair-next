import { notFound } from "next/navigation";
import { getInformationList } from "@/libs/microcms";
import InformationList from "@/features/PostList/Information";
import { INFORMATION_PAGE_LIST_LIMIT } from "@/constants"
import CategoryList from "@/components/Parts/Category/List";
import Pagination from "@/components/Parts/pagination";

type Props = {
    params: {
        current: string;
    }
}

export default async function Page({ params }: Props) {
    const current = parseInt(params.current, 10);

    if (Number.isNaN(current) || current < 1) {
        notFound();
    }

    const { contents: information, totalCount } = await getInformationList({
        limit: INFORMATION_PAGE_LIST_LIMIT,
        offset: INFORMATION_PAGE_LIST_LIMIT * (current -1),
    });

    if (information.length === 0){
        notFound();
    }

    return (

        <>
            {/* 導入部分 */}
            <div className={"c-contents pdt2 pdt10s pdb5 pdb10s"}>
                <div className={"c-contents--inner"}>
                    <p className={"s-ML -s14 -center -ls-2 -lh-2"}>
                        マネーリペアに関連する<span className={"s-ML -s14 -b -ls-2"}>資産形成</span>に役立つ記事を発信しています。<br className={"tb-pc"} />
                        従業員の<span className={"s-ML -s14 -b -ls-2"}>経済力向上や福利厚生強化</span>に向けた知識を<br className={"tb-pc"} />
                        様々な情報を活用して、より豊かな未来を目指しましょう。
                    </p>
                </div>
            </div>
            {/* カテゴリ一覧 */}
            <CategoryList article="information" />
            {/* 記事一覧 */}
            <div className="c-contents pdt5 pdt10s pdb5 pdb10s">
                <InformationList contents={ information }/>
            </div>
            {/* ページネーション */}
            <Pagination
                totalCount={totalCount}
                current={current}
                basePath={`/information`}
            />
        </>
    )
}