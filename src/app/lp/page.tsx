import Image from "next/image";

// コンポーネント
import Lp01MainVisual from "@/features/lp/mainVisual/Lp01";
// import Button from "@/components/elements/button";

// 投稿関係
import LogoContents from "@/components/slider/logo/LogoContents";

// ISR
export const revalidate = 600;

export default async function Home() {
  return (
    <main id="top">
      {/* メインビジュアル */}
      <Lp01MainVisual />
      {/* 導入企業ロゴ */}
      <LogoContents />

      {/* こんなお悩みはありませんか？ */}
      <div id="sc01" className={"c-contents pdt10 pdt10s pdb10 pdb10s mgb5s"}>
        <div className={"c-contents--inner"}>
          <h2 className={"c-contents--title -b-btm -c01 mgb5 mgb10s"}>経営者・総務・人事の皆さん<br />こういうお悩みはありませんか？</h2>
          <ul className={"c-flex -col2_4 -h-cen -jc-sb mgb2 mgb5s"}>
            <li className={"flexItem mgb5s"}>
              <div className="c-card -lp -lp01">
                <div className="c-card--inner">
                  <p className="s-M -b -ls-2 -lh-2 -ws-n">社員の定着率や<br />従業員満足度が<br />低く定着しない</p>
                </div>
              </div>
            </li>
            <li className={"flexItem mgb5s"}>
              <div className="c-card -lp -lp01">
                <div className="c-card--inner">
                  <p className="s-M -b -ls-2 -lh-2 -ws-n">従業員満足度につながる<br />ユニークな福利厚生が<br />提供できていない</p>
                </div>
              </div>
            </li>
            <li className={"flexItem"}>
              <div className="c-card -lp -lp01">
                <div className="c-card--inner">
                  <p className="s-M -b -ls-2 -lh-2 -ws-n">社員の給料を<br />アップさせる余裕がない</p>
                </div>
              </div>
            </li>
            <li className={"flexItem"}>
              <div className="c-card -lp -lp01">
                <div className="c-card--inner">
                  <p className="s-M -b -ls-2 -lh-2 -ws-n">採用において<br />魅力的な福利厚生による<br />差別化ができていない</p>
                </div>
              </div>
            </li>
          </ul>
          <div className="c-contents">
            <div className="imgBox w30 w75s">
              <Image
                src="/images/Lp/nayamu.png"
                alt="悩む男女" 
                width={408} 
                height={217}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
