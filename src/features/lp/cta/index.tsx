import Image from "next/image";
import Button from "@/components/elements/button";

export default function LpCta(){
    return (
        <div className="c-contents -LpCta pdt7 pdt15s pdb10 pdb15s">
            <div className="c-contents--inner">
                <ul className="c-flex -col1_2 -pc1_2 -h-top -jc-sb">
                    <li className="flexItem mgb10s" style={{zIndex: 3}}>
                        <h2 className="c-contents--LpCtaTitle -b-btm -left -c01 mgb5 mgb8s">
                            もっと詳しく知りたい方へ
                        </h2>
                        <p className="s-M -left -ls-2 -lh-2 mgb5 mgb10s">
                            マネーリペアの特徴や価格、事例に加えて、社員定着を成功に導いた豊富なノウハウをもとに、貴社に合わせたプランを実際の画面をご覧いただきながら、わかりやすくご説明・ご提案いたします。
                        </p>
                        <Button href="#contact" customAreaClass="-left" customClass="-btn -maru -orange -icon -arrow">資料ダウンロードはこちら</Button>
                    </li>
                    <li className="flexItem" style={{zIndex: 3}}>
                        <Image
                            src="/images/Lp/panf-2024.png"
                            alt="マネーリペアの冊子 2024年版"
                            width={480}
                            height={320}
                        />
                    </li>
                </ul>
            </div>
        </div>
    )
}