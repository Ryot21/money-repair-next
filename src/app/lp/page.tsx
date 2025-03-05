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

      <div className="c-contents -bg-white">
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
        <div id="sc02" className={"c-contents -bg-color01 pdt5 pdt10s pdb5 pdb5s"}>
          <div className="c-contents--inner">
            <div className="c-contents--inner mgb10 mgb20s">
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
            <div className="c-contents--inner mgb10 mgb10s">
              <h2 className="c-contents--title -kana -b-btm -c01 mgb5 mgb10s">
                マネーリペア<span className="s-M -b -ls-1">とは</span>
              </h2>
              <div className="c-contents--inner">
                <ul className={"c-flex -col1_2 -pc2_1 -h-top -jc-sb mgb5 mgb5s"}>
                  <li className={"flexItem mgb10s"}>
                    <div className="imgBox w90s">
                      <Image
                        src="/images/Lp/sc02-D.png"
                        alt="バランスの良い金融情報の図表"
                        width={414}
                        height={231}
                      />
                    </div>
                  </li>
                  <li className={"flexItem"}>
                    <h3 className="c-section--title mgb4 mgb5s">
                      企業の従業員様向けに金融・投資・税務の教育を<br className="pc" />
                      実施する福利厚生プログラム
                    </h3>
                    <p className="s-M -ls-2 -ls-1_5_s -lh-2 mgb1 mgb3s">
                      企業にとって社員の方々はとても『大切な財産』です。しかし、急激な物価高騰の波に対応できず、大切な社員を流出させてしまうかも知れません。個々の社員の金融リテラシーを上げることにより、限られた給与でも『可処分所得』を上げる事ができます。
                    </p>
                    <p className="s-M -ls-2 -ls-1_5_s -lh-2">
                      マネーリペアとは、大切な社員の『将来に向けたお金の不安』を解決するためのサービスです。長年続いたデフレにより凝り固まった誤ったお金の知識を修復し、正しい金融知識を身につけご自身で適切な判断ができるようにすることが大切なのです。
                    </p>

                  </li>

                </ul>
              </div>
            </div>
            <div className="c-contents--inner ">
              <div className="c-card -lp -lp03">
                <div className="c-card--inner">
                  <h2 className={"c-contents--title -b-btm -lp -c01 mgb5 mgb10s"}>金融リテラシーを習得して<br className="sp" />純資産を増やすことが可能に</h2>
                  <p className="s-M -s10 -center -ls-2 -lh-2 mgb5 mgb10s">
                    バランスシートに置き換えて考えるとわかりやすいですが、<br />
                    金融リテラシーという知的財産を付けることにより、<br />
                    可処分所得を増やすことが出来ると同時に、<br />
                    有価証券などで運用し純資産を伸ばすことが期待できます。
                  </p>
                  <div className="imgBox w80 w90s">
                    <Image
                      src="/images/Lp/sc02-E.png"
                      alt="資産・負債・純資産の図式"
                      width={1014}
                      height={557}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
