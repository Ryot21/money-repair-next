"use client";

// import Image from "next/image";
import styles from "./index.module.scss";

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
                            <span>社員の金融リテラシー向上</span>が、<br className="tb" />会社の競争力を支える未来の投資に。
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
                    <div className="c-card">
                        <div className="c-card--inner">
                            <div className={`c-form`}>

                            </div>
                        </div>
                    </div>
                </div>
                {/* ================= 画像 ================= */}



            </div>
        </div>
    );
}
