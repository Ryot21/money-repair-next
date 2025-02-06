// 共通レイアウト
import SingleMainVisual from "@/components/MainVisual/single";

type Props = {
    children: React.ReactNode;
    title: string;
    mvClass?: string;
    contentClass?: string;
}

export default function ContactSheet({ children, title, mvClass, contentClass }: Props) {
    return (
        <main>
            {/* メインビジュアル */}
            <SingleMainVisual title={title} mvClass={mvClass}/>

            {/* コンテンツ */}
            <div className={`c-contents pdt5 pdt10s pdb5 pdb10s ${contentClass || ''} `} >
                <div className="c-contents--inner">
                    {children}
                </div>
            </div>
        </main>
    );
}