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
      <div id="sc01" className={"c-contents pdt10 pdt10s pdb5 pdb10s"}>
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
                src="/images/Lp/sc01.png"
                alt="悩む男女" 
                width={408} 
                height={217}
              />
            </div>
          </div>
        </div>
      </div>
      {/* お悩みを解決するためには？ */}
      <div id="sc02" className={"c-contents -bg-white pdt5 pdt10s pdb5 pdb5s"}>
        <div className="c-contents--inner">
          <h2 className="c-contents--title -b-btm -c01 mgb5 mgb10s">マネーリペアを導入することで<br />そのお悩みを解決できます</h2>
          <p className="s-M -b -center -ls-2 -lh-2 -ws-n mgb5 mgb10s">
            従業員の「金融リテラシー向上」をご支援し、<br />
            給料を上げずに、1人当たりの所得を<br className="sp" />月々<span className="s-ML -kome -b -color02 pdr1 pdr1s">150,000円</span>高めることが可能です！
          </p>
          <ul className={"c-flex -col3 -flow -h-cen -jc-sb mgb5 mgb5s"}>
            <li className={"flexItem"}>
              <div className="c-card -lp -lp02">
                <div className="c-card--inner">
                  <p className="s-M -s10 -b -ls-2 -ls-1_s -lh-2 -ws-n">社員に対して<br className="sp" />金融教育セミナーを実施</p>
                  <div className="imgBox">
                    <Image
                      src="/images/Lp/sc02-A.png"
                      alt="金融セミナーを受けている様子"
                      width={414}
                      height={231}
                    />
                  </div>
                </div>
              </div>
            </li>
            <li className={"flexItem"}>
              <div className="c-card -lp -lp02">
                <div className="c-card--inner">
                  <p className="s-M -s10 -b -ls-2 -ls-1_s -lh-2 -ws-n">従業員満足度が<br className="sp" />すごく高まる</p>
                  <div className="imgBox">
                    <Image
                      src="/images/Lp/sc02-B.png"
                      alt="従業員が満足している様子"
                      width={414}
                      height={231}
                    />
                  </div>
                </div>
              </div>
            </li>
            <li className={"flexItem"}>
              <div className="c-card -lp -lp02">
                <div className="c-card--inner">
                  <p className="s-M -s10 -b -ls-2 -ls-1_s -lh-2 -ws-n">離職率の低下<br className="sp" />採用競争力の向上</p>
                  <div className="imgBox">
                    <Image
                      src="/images/Lp/sc02-C.png"
                      alt="喜んでいる様子"
                      width={414}
                      height={231}
                    />
                  </div>
                </div>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </main>
  );
}
