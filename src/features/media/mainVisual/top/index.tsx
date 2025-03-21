"use client";

import Image from "next/image";
// import Script from "next/script";
import styles from "./index.module.scss";
import { useEffect } from "react";

export default function TopMainVisual() {
  useEffect(() => {
    // マウスの動きに応じてパララックス効果を適用する関数
    const handleMouseMove = (e: MouseEvent) => {
      // パララックス効果を適用する要素をすべて取得
      const parallaxItems = document.querySelectorAll(".js-parallax");
      // ビューポートの中心座標を計算（マウスの移動量の基準点）
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      // 現在のマウス座標
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // 各パララックス要素に対して処理を実行
      parallaxItems.forEach((item) => {
        let movement;
        // 要素のZ軸位置（奥行き）に応じて移動量を設定
        if (item.classList.contains(styles.item01)) {
          movement = 16; // 最前面の要素（最も大きく動く）
        } else if (item.classList.contains(styles.item02)) {
          movement = 30; // 前面の要素
        } else if (item.classList.contains(styles.item03)) {
          movement = 50; // 中間の要素
        } else if (item.classList.contains(styles.item04)) {
          movement = 70; // 最背面の要素（最も小さく動く）
        } else {
          movement = 40; // デフォルト値
        }

        // マウスの移動量から要素の移動量を計算
        // movementで割ることで奥行きに応じた移動量の違いを表現
        // 1.5を掛けることで移動量を調整
        const moveX = ((mouseX - centerX) / movement) * 1.5;
        const moveY = ((mouseY - centerY) / movement) * 1.5;

        // 要素の回転量を計算
        // 前面の要素（movement < 40）は大きく、背面の要素は小さく回転
        const rotateMultiplier = movement < 40 ? 0.008 : 0.004;
        const rotateX = (mouseY - centerY) * rotateMultiplier; // X軸回転（上下の傾き）
        const rotateY = (mouseX - centerX) * -rotateMultiplier; // Y軸回転（左右の傾き）

        // 影の設定を計算
        // マウスと逆方向に影をつけることで立体感を強調
        const shadowX = (centerX - mouseX) * 0.01; // 影のX方向のオフセット
        const shadowY = (centerY - mouseY) * 0.01; // 影のY方向のオフセット
        // 影のぼかし具合を計算（マウスの移動距離に応じて変化）
        const shadowBlur =
          Math.abs(Math.sqrt(shadowX * shadowX + shadowY * shadowY)) * 2;
        // 影の不透明度を計算（最小0.1、マウスの移動に応じて濃くなる）
        const shadowOpacity = 0.1 + shadowBlur * 0.01;

        // 計算した値を使って要素のスタイルを更新
        // translate3dでGPUアクセラレーションを有効化し、パフォーマンスを向上
        (
          item as HTMLElement
        ).style.transform = `translate3d(${moveX}px, ${moveY}px, 0) 
           rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        // 動的な影を適用（shadowBlur * 0.75で影のぼかしを調整）
        (
          item as HTMLElement
        ).style.filter = `drop-shadow(${shadowX}px ${shadowY}px ${
          shadowBlur * 0.75
        }px rgba(0, 0, 0, ${shadowOpacity}))`;
      });
    };

    // マウス移動イベントのリスナーを登録
    window.addEventListener("mousemove", handleMouseMove);

    // コンポーネントのアンマウント時にイベントリスナーを解除（メモリリーク防止）
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // 空の依存配列で初回レンダリング時のみ実行

  return (
    <>
      <div id="js-parallaxArea" className={`${styles.parallaxArea}`}>
        <div className={`c-mainVisual -top`}>
          {/* 背景の切り替えができる */}
          <div className={"imgBox -wave"}></div>

          {/* ================= 画像 ================= */}
          {/* 中央 > フェードイン */}
          <div className={"c-mainVisual--box -pic16_9 -pic3_4_s -pic-01"}>
            <div className={`js-parallax ${styles.parallaxItem} ${styles.item01}`}>
              <div className="a-fviewInImg -tm05 -sp05">
                <Image
                  src="/images/mv/mv-05.jpg"
                  alt=""
                  width={1000}
                  height={667}
                  priority
                />
              </div>
            </div>
          </div>
          {/* 右下 > フェードイン */}
          <div className={"tb-pc c-mainVisual--box -pic4_3 -pic4_3_s -pic-02"}>
            <div className={`js-parallax ${styles.parallaxItem} ${styles.item01}`}>
              <div className="a-fviewInImg -tm05 -sp1">
                <Image
                  src="/images/mv/mv-12.png"
                  alt=""
                  width={1000}
                  height={667}
                />
              </div>
            </div>
          </div>
          {/* 中央上 > フェードアウト① */}
          <div className={"c-mainVisual--box -pic4_3 -blur-b02 -blur-b03s -pic-03"}>
            <div className={`js-parallax ${styles.parallaxItem} ${styles.item02}`}>
              <div className="a-fviewOutImg -tm05 -sp15">
                <Image
                  src="/images/mv/mv-01.jpg"
                  alt=""
                  width={480}
                  height={320}
                />
              </div>
            </div>
          </div>
          {/* 左上 > フェードイン */}
          <div className={"tb-pc c-mainVisual--box -pic4_3 -pic4_3_s -pic-04"}>
            <div className={`js-parallax ${styles.parallaxItem} ${styles.item03}`}>
              <div className="a-fviewInImg -tm1 -sp05">
                <Image
                  src="/images/mv/mv-10.jpg"
                  alt=""
                  width={480}
                  height={320}
                />
              </div>
            </div>
          </div>
          {/* 左下 > フェードイン */}
          <div className="c-mainVisual--box -pic4_3 -blur-b01 -pic-05">
            <div className={`js-parallax ${styles.parallaxItem} ${styles.item04}`}>
              <div className="a-fviewInImg -tm1 -sp1">
                <Image
                  src="/images/mv/mv-02.jpg"
                  alt=""
                  width={480}
                  height={320}
                />
              </div>
            </div>
          </div>
          {/* 右上 > フェードイン */}
          <div className="c-mainVisual--box -pic4_3 -pic-06">
            <div className={`js-parallax ${styles.parallaxItem} ${styles.item04}`}>
              <div className="a-fviewInImg -tm1 -sp15">
                <Image
                  src="/images/mv/mv-03.jpg"
                  alt=""
                  width={480}
                  height={320}
                />
              </div>
            </div>
          </div>
          {/* 中央下 > フェードアウト② */}
          <div className="c-mainVisual--box -pic4_3 -blur-b02 -blur-b02s -pic-07">
            <div className={`js-parallax ${styles.parallaxItem} ${styles.item04}`}>
              <div className="a-fviewOutImg -tm05 -sp2">
                <Image
                  src="/images/mv/mv-04.jpg"
                  alt=""
                  width={480}
                  height={320}
                />
              </div>
            </div>
          </div>

          {/* ================= キーワード ================= */}
          <div className={"c-mainVisual--box -catchCopy01"}>{/* キーワード1 */}
            <div className="wrapper a-fade -tm25 -sp05">
              <p>
                <span className="big">人材育成</span>
                <span className="small">から</span>人的資産形成
                <span className="small">へ</span>
              </p>
            </div>
          </div>
          <div className={"c-mainVisual--box -catchCopy02"}>{/* キーワード2 */}
            <div className="wrapper a-fade -tm25 -sp1">
              <p>
                金融教育<span className="small">で</span><span className="big">企業価値</span><span className="small">を</span>高<span className="small">める。</span>
              </p>
            </div>
          </div>

          {/* ================= 注釈 ================= */}
          {/* <Script src="/js/typing.js" /> */}
          <div className={"c-mainVisual--box -comments01"}>
            <div className="a-fade -tm15 -sp05">{/* ピックアップ */}
              <p className="pickup">
                <span>社員の金融リテラシー向上</span>が、
                <br className="tb" />
                会社の競争力を支える未来の投資に。
              </p>
            </div>
            <div className="a-fade -tm1 -sp15">{/* タイトル */}
              <div className="title mgb2 mgb2s">
                <p className="a-typing -blue -ls-2">
                  仕事に集中できる
                  <br />
                  <span>職場環境</span>を整える。
                </p>
              </div>
            </div>
            <div className="a-fade -tm15 -sp1">{/* 注釈 */}
              <p className="text -blue -ls-2">
                企業向け金融リテラシーコーチング型サービス
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
