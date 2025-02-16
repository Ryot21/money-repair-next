// 共通レイアウト
import SingleMainVisual from "@/features/MainVisual/single";

type Props = {
    children: React.ReactNode;
    title: string;
    mvClass?: string;
    contentClass?: string;
}

export default function Sheet({ children, title, mvClass, contentClass }: Props) {
    return (
        <main>
            {/* メインビジュアル */}
            <SingleMainVisual title={title} mvClass={mvClass}/>

            {/* コンテンツ */}
            <div className={`c-contents pdt5 pdt10s pdb5 pdb10s ${contentClass || ''} `} >
                <div className="c-contents--inner -bg-white -card">
                    {children}
                </div>
            </div>
        </main>
    );
}