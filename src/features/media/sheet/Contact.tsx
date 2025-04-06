// 共通レイアウト
import ContactMainVisual from "@/features/media/mainVisual/single/Contact";
import Breadcrumb from "@/features/media/breadcrumb";

type Props = {
    children       : React.ReactNode;
    animationType? : string;
    mvClass?       : string;
    customClass?   : string;
    contentClass?  : string;
}

export default function ContactSheet({ children, mvClass, customClass, contentClass, animationType }: Props) {


    
    return (
        <main>
            {/* メインビジュアル */}
            <ContactMainVisual mvClass={mvClass} customClass={customClass} animationType={animationType}/>

            {/* パンくずリスト */}
            <Breadcrumb />

            {/* コンテンツ */}
            <div className={`c-contents pdt5 pdt15s pdb5 pdb10s ${contentClass || ''} `} >
                <div className="c-contents--inner">
                    {children}
                </div>
            </div>
        </main>
    );
}