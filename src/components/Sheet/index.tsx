// 共通レイアウト
import SingleMainVisual from "@/components/MainVisual/single";
import ContactBottom from "@/components/Contact/Bottom";

type Props = {
    children: React.ReactNode;
    title: string;
    customClass?: string;
}

export default function Sheet({ children, title, customClass }: Props) {
    return (
        <main>
            {/* メインビジュアル */}
            <SingleMainVisual title={title} customClass={customClass}/>

            {/* コンテンツ */}
            <div className="c-contents pdt5 pdt10s pdb5 pdb10s">
                <div className="c-contents--inner">
                    {children}
                </div>
            </div>

            {/* お問い合わせ */}
            <ContactBottom />
        </main>
    );
}