// 共通レイアウト
import SingleMainVisual from "@/features/media/mainVisual/single";

type Props = {
    children       : React.ReactNode;
    animationType? : string;
    title          : string;
    mvClass?       : string;
    contentClass?  : string;
}

export default function StaticSheet({ children, title, mvClass, contentClass, animationType }: Props) {
    return (
        <main>
            {/* メインビジュアル */}
            <SingleMainVisual title={title} mvClass={mvClass} animationType={animationType} />

            {/* コンテンツ */}
            <div className={`c-contents pdt5 pdt10s pdb5 pdb10s ${contentClass || ''} `} >
                <div className="c-contents--inner -bg-white -card">
                    {children}
                </div>
            </div>
        </main>
    );
}