// import Link from "next/link";

export default function Page() {
    return (
        <>
            {/* 個人情報の取り扱いについて */}
            <h2 className="pITitle s-M -s14 -b -ls-2 mgb1 mgb2s">個人情報の取り扱いについて</h2>
            <p className="pIText s-S -lh-1_5 -ls-2 mgb2 mgb5s">
                以下の個人情報保護方針によくお読みになり、同意の上、お問い合わせに進んでください。
            </p>
            {/* プライバシーポリシー */}
            <div className="p-static">
                <h3 className="s-M -b -left -ls-2">プライバシーポリシーについて</h3>
                <div className="p-static__inner">
                    <div className="p-static__detail">
                    </div>
                </div>
            </div>
        </>
    )
}