// 共通レイアウト
import LpOtherMainVisual from "@/features/lp/mainVisual/Others";

type Props = {
    children: React.ReactNode;
    contentClass?: string;
    mvClass?: string;
}

export default function LpContactSheet({ children, contentClass, mvClass }: Props) {


    
    return (
        <main>
            {/* メインビジュアル */}
            <LpOtherMainVisual
                title="資料ダウンロード"
                mvClass={mvClass}
            />

            {/* コンテンツ */}
            <div className={`c-contents pdt5 pdt10s pdb5 pdb10s ${contentClass || ''} `} >
                <div className="c-contents--inner">
                    {children}
                </div>
            </div>
        </main>
    );
}