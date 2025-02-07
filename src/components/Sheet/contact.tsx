// 共通レイアウト
import ContactMainVisual from "@/components/MainVisual/single/contact";

type Props = {
    children: React.ReactNode;
    mvClass?: string;
    customClass?: string;
    contentClass?: string;
}

export default function ContactSheet({ children, mvClass, customClass, contentClass }: Props) {


    
    return (
        <main>
            {/* メインビジュアル */}
            <ContactMainVisual mvClass={mvClass} customClass={customClass}/>

            {/* コンテンツ */}
            <div className={`c-contents pdt5 pdt10s pdb5 pdb10s ${contentClass || ''} `} >
                <div className="c-contents--inner">
                    {children}
                </div>
            </div>
        </main>
    );
}