// 共通レイアウト
import SingleMainVisual from "@/features/media/mainVisual/single";
import ContactBottom from "@/features/media/contact/bottom";

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
            <SingleMainVisual title={title} mvClass={mvClass} animationType="svg"/>

            {/* コンテンツ */}
            <div className={`c-contents pdt5 pdt10s pdb5 pdb10s ${contentClass || ''} `} >
                <div className="c-contents--inner">
                    {children}
                </div>
            </div>

            {/* お問い合わせ */}
            <ContactBottom />
        </main>
    );
}