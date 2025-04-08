"use client";

import Image from "next/image";
import styles from "./index.module.scss";
import CardContactForm from "@/components/elements/form/Card";


export default function Lp01MainVisual() {

    return (
        <div id="js-parallaxArea" className={styles.parallaxArea}>
            <div className={`c-mainVisual -LP`}>
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
                            <h1 className="a-typing -b -blue -ls-2">
                                仕事に集中できる<br />
                                <span>職場環境</span>を整える。
                            </h1>
                        </div>
                        {/* 注釈 */}
                        <p className="text -blue -ls-2">金融リテラシーコーチング福利厚生サービス</p>
                    </div>
                    {/* ================= cv ================= */}
                    <div className="c-contentsBox -cta">
                        <CardContactForm customClass="-card" />
                    </div>
                    {/* ================= サービス内容 ================= */}
                    <div className="c-contentsBox -service">
                        <div className={"c-card -t06"}>
                            <h2 className="c-card--title -point">
                                <span>ここが<br />ポイント!</span>コーチングで金融リテラシー向上!!
                            </h2>
                            <div className="c-card--inner">
                                <ul className={"c-card-lists"}>
                                    <li className={"c-card-item"}>{/* いいね その1 */}
                                        <p className={"c-link -good s-ML -s12 -b -color03 -left -ls-2 -lh-1_5 -f-gothic02"}>
                                            <span className="No1"><i></i></span>専属FP相談窓口の提供
                                        </p>
                                    </li>
                                    <li className={"c-card-item"}>{/* いいね その2 */}
                                        <p className={"c-link -good s-ML -s12 -b -color03 -ls-2 -lh-1_5 -f-gothic02"}>
                                            <span className="No2"><i></i></span>金融勉強会の実施
                                        </p>
                                    </li>
                                    <li className={"c-card-item"}>{/* いいね その3 */}
                                        <p className={"c-link -good s-ML -s12 -b -color03 -ls-2 -lh-1_5 -f-gothic02"}>
                                            <span className="No3"><i></i></span>資産管理システムの提供
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
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
