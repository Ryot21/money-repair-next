"use client";

import Image from "next/image";
import styles from "./index.module.scss";
import CardContactForm from "@/components/elements/form/Card02";


export default function LpMainVisual() {

    return (
        <div id="js-parallaxArea" className={styles.parallaxArea}>
            <div className={`c-mainVisual -LP -LP02`}>
                <div className={"imgBox"}>
                    <Image
                        src="/images/Lp/ver02/mv-bg.png"
                        alt="背景"
                        className="tb-pc"
                        width={1240}
                        height={692}
                    />
                    <Image
                        src="/images/Lp/ver02/mv-bg_s.png"
                        alt="背景"
                        className="sp"
                        width={375}
                        height={964}
                    />
                </div>
                {/* ================= 注釈 ================= */}
                <div className={"c-contentsBox -comments01"}>
                    <Image
                        src="/images/Lp/ver02/mv-text.png"
                        // src="/images/SVG/Lp/ver02/mv-text.svg"
                        alt="支援実績500社以上 定着率アップを実現する 金融教育福利厚生プログラム 金融教育で辞めたくない会社へ"
                        className="tb-pc"
                        width={1644}
                        height={1154}
                    />
                    <Image
                        src="/images/Lp/ver02/mv-text_s.png"
                        // src="/images/SVG/Lp/ver02/mv-text_s.svg"
                        alt="支援実績500社以上 定着率アップを実現する 金融教育福利厚生プログラム 金融教育で辞めたくない会社へ"
                        className="sp"
                        width={1000}
                        height={1000}
                    />
                </div>

                {/* ================= cv ================= */}
                <div className="c-contentsBox -cta">
                    <CardContactForm customClass="-card" />
                </div>
            </div>
        </div>
    );
}
