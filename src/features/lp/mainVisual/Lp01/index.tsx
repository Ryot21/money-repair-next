"use client";

import Image from "next/image";
import styles from "./index.module.scss";
import CardContactForm from "@/components/elements/form/Card";
export default function Lp01MainVisual() {

    return (
        <div id="js-parallaxArea" className={styles.parallaxArea}>
            <div className={`c-contents -imgBg -fv -lp01`}>
                <div className={"c-contents--inner"}>
                    {/* 背景の切り替えができる */}
                    <div className={"imgBox"}></div>
                    {/* ================= 注釈 ================= */}
                    <div className={"c-contentsBox -comments01"}>
                        {/* ピックアップ */}
                        <p className="pickup">
                            <span>社員の金融リテラシー向上</span>が、会社の競争力を支える未来の投資に。
                        </p>
                        {/* タイトル */}
                        <div className="title mgb2 mgb2s">
                            <p className="a-typing -blue -ls-2">
                                仕事に集中できる<br />
                                <span>職場環境</span>を整える。
                            </p>
                        </div>
                        {/* 注釈 */}
                        <p className="text -blue -ls-2">企業向け金融リテラシーコーチング型サービス</p>
                    </div>
                    {/* ================= cv ================= */}
                    <div className="c-contentsBox -cta">
                        <CardContactForm customClass="-card" />
                    </div>
                </div>
                {/* ================= 画像 ================= */}
                <div className="c-contentsBox -en">{/* 英字 */}
                    <Image
                        src="/images/SVG/Lp/Let's-find-a-new-future-together..svg"
                        alt="Let's find a new future together"
                        width={648}
                        height={119}
                    />
                </div>
                <div className="c-contentsBox -landscape">{/* 風景 */}
                    <Image
                        src="/images/SVG/Lp/landscape-city.svg"
                        alt="ビジネル街の風景"
                        width={1000}
                        height={1000}
                    />
                </div>
                <div className="c-contentsBox -man">{/* 男性 */}
                    <Image
                        src="/images/SVG/Lp/man.svg"
                        alt="先輩の男性"
                        width={351}
                        height={671}
                    />
                </div>
                <div className="c-contentsBox -woman">{/* 女性 */}
                    <Image
                        src="/images/SVG/Lp/woman.svg"
                        alt="後輩の女性"
                        width={446}
                        height={559}
                    />
                </div>
            </div>
        </div>
    );
}
