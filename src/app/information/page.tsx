
// コンポーネント
import { getInformationList } from "@/libs/microcms";
import { INFORMATION_PAGE_LIST_LIMIT } from "@/constants";
import InformationList from "@/features/PostList/Information"
import CategoryList from "@/components/Parts/Category/List";

export default async function Page(){

    // 表示件数を絞る
    const informationData = await getInformationList({
        limit: INFORMATION_PAGE_LIST_LIMIT,
    });

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
                <InformationList contents={ informationData.contents }/>
            </div>
        </>
    )
}