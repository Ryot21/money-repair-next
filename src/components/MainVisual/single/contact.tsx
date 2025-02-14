"use client";

import { useSearchParams } from 'next/navigation';

type Props = {
    mvClass?: string;
    customClass?: string;
}

export default function ContactMainVisual({ mvClass, customClass = '' }: Props) {
    const searchParams = useSearchParams();
    const type = searchParams.get('type');

    const getTitle = () => {
        switch (type) {
            case 'download':
                return '資料ダウンロード';
            case 'contact':
                return 'お問い合わせ';
        }
    };

    return (
        <div className={`c-contents -imgBg -fv -single ${customClass}`}>
            <div className={"imgBox"}></div>
            <div className={"c-contentsBox -center"}>
                {/* ページタイトル */}
                <h1 className={`c-page-title s-L -s20 -center -b -ls-2 ${mvClass || ''} `}>{getTitle()}</h1>
                {/* パンくず 今後実装予定 */}

            </div>
        </div>
    );
}