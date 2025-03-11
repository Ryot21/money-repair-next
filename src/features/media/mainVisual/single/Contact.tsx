"use client";

import { useSearchParams, usePathname } from 'next/navigation';
import Breadcrumb from "@/features/media/breadcrumb";


type Props = {
    mvClass?: string;
    customClass?: string;
}

export default function ContactMainVisual({ mvClass, customClass = '' }: Props) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const type = searchParams.get('type');

    const getTitle = () => {
        if (pathname === '/contact/thanks') {
            return 'お問い合わせありがとうございます！';
        }

        switch (type) {
            case 'download':
                return '資料ダウンロード';
            case 'contact':
                return 'お問い合わせ';
            default:
                return 'お問い合わせ';
        }
    };

    return (
        <div className={`c-contents -imgBg -fv -single -bg-color06 ${customClass}`}>
            <div className={"imgBox -slide"}></div>
            <div className={"c-contentsBox -center"}>
                {/* ページタイトル */}
                <h1 className={`c-page-title s-L -s18 -ws-n -center -b -ls-2 ${mvClass || ''} `}>{getTitle()}</h1>
            </div>
            {/* パンくず */}
            <div className={"c-contentsBox -breadcrumb"}>
                <Breadcrumb />
            </div>
        </div>
    );
}