import Image from "next/image";

// コンポーネント
import Lp01MainVisual from "@/features/lp/mainVisual/Lp01";
// import Button from "@/components/elements/button";
import LpCta from "@/features/lp/cta";

// 投稿関係
import LogoContents from "@/components/slider/logo/LogoContents";

// ISR
export const revalidate = 600;

export default async function Home() {
  return (
    <main>
      {/* メインビジュアル */}
      <Lp01MainVisual />

      <div className="c-contents -bg-white">
        {/* 導入企業ロゴ */}
        <LogoContents />
        {/* こんなお悩みはありませんか？ */}
        <div id="sc01" className={"c-contents pdt5 pdt5s pdb7 pdb15s"}>
          <div className={"c-contents--inner"}>
            <h2 className={"c-contents--LpMainTitle -b-btm -c01 mgb5 mgb10s"}>経営者・総務・人事<span className="-b">の</span>皆さん<br /><span className="-b">こういう</span>お悩み<span className="-b">は</span>ありませんか？</h2>
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
        <div id="sc02" className={"c-contents -bg-color01 pdt7 pdt15s pdb10 pdb15s"}>
          <div className="c-contents--inner">
            {/* メリット */}
            <div className="c-contents--inner mgb15 mgb20s">
              <h2 className="c-contents--LpMainTitle -b-btm -c01 mgb5 mgb10s"><span className="-kana -b">マネーリペア</span><span className="-b">を</span>導入<span className="-b">することで</span><br /><span className="-b">その</span>お悩み<span className="-b">を</span>解決<span className="-b">できます</span></h2>
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
            {/* マネーリペアとは */}
            <div className="c-contents--inner mgb10 mgb10s">
              <h2 className="c-contents--LpMainTitle -b-btm -c01 mgb5 mgb10s">
                <span className="-kana -b">マネーリペア</span><span className="-b">とは</span>
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
                    <h3 className="c-contents--LpTitle mgb4 mgb5s">
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
            {/* 何ができる？ */}
            <div className="c-contents--inner ">
              <div className="c-card -lp -lp03">
                <div className="c-card--inner">
                  <h2 className={"c-contents--LpMainTitle -b-btm -lp -c01 mgb5 mgb10s"}>金融リテラシー<span className="-b">を</span>習得<span className="-b">して</span><br />純資産<span className="-b">を</span>増<span className="-b">やすことが</span>可能<span className="-b">に</span></h2>
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
        {/* マネーリペアで出来ること */}
        <div id="sc03" className={"c-contents -bg-white pdt7 pdt15s pdb5 pdb5s"}>
          <div className="c-contents--inner">
            <h2 className="c-contents--LpMainTitle -b-btm -c01 mgb7 mgb10s"><span className="-kana -b">マネーリペア</span><span className="-b">で</span>出来<span className="-b">る</span>事<span className="-b"></span></h2>
            <div className="mgb10 mgb10s">
              {/* 1. 金融勉強会 */}
              <ul className={"c-flex -col1_2 -h-top -jc-sb mgb10 mgb15s"}>
                <li className={"flexItem mgb5s"}>
                  <h3 className="c-contents--LpTitle mgb4 mgb5s">
                    金融勉強会で知識の習得と<br />
                    金融知識を当たり前に
                  </h3>
                  <p className="s-M -ls-2 -ls-1_5_s -lh-2 mgb1 mgb3s">
                    金融知識の「当たり前」を学ぶ環境をご提供いたします。<br />
                    【勉強会の一例】<br />
                    ・源泉徴収票の読み取り方、節税<br />
                    ・経済動向、情報の取方、ニュースの見方<br />
                    ・四季報、財務諸表、株式分析
                  </p>
                  
                </li>
                <li className={"flexItem"}>
                  <div className="imgBox">
                    <Image
                      src="/images/Lp/sc03-A.png"
                      alt="金融勉強会の様子"
                      width={480}
                      height={320}
                    />
                  </div>
                </li>
              </ul>
              {/* 2. 個別相談 */}
              <ul className={"c-flex -col1_2 -r -h-top -jc-sb mgb10 mgb15s"}>
                <li className={"flexItem mgb5s"}>
                  <h3 className="c-contents--LpTitle mgb4 mgb5s">
                    個別相談も可能！<br className="tb-pc" />
                    専属FP相談窓口の提供
                  </h3>
                  <p className="s-M -ls-2 -ls-1_5_s -lh-2 mgb1 mgb3s">
                    NISA、iDeCo、ふるさと納税などあらゆる相談が可能です。ライフサイクルによって、教育資金、住宅、老後資金など不安になるようなイベントも多くありますので、専門家によるアドバイスが可能です。
                  </p>
                  
                </li>
                <li className={"flexItem"}>
                  <div className="imgBox">
                    <Image
                      src="/images/Lp/sc03-B.png"
                      alt="個人相談の様子"
                      width={480}
                      height={320}
                    />
                  </div>
                </li>
              </ul>
              {/* 3. 家計管理 */}
              <ul className={"c-flex -col1_2 -h-top -jc-sb mgb10 mgb15s"}>
                <li className={"flexItem mgb5s"}>
                  <h3 className="c-contents--LpTitle mgb4 mgb5s">
                    家計管理も可能！<br />
                    資産管理システムの提供
                  </h3>
                  <p className="s-M -ls-2 -ls-1_5_s -lh-2 mgb1 mgb3s">
                    運用している有価証券、不動産、保険などあらゆる金融商品を一括管理でき、キャッシュフローを可視化することが出来ます。ライフプランシミュレーションを作成することも可能です
                  </p>
                </li>
                <li className={"flexItem"}>
                  <div className="imgBox">
                    <Image
                      src="/images/Lp/sc03-C.png"
                      alt="家計管理ができて喜んでいる様子"
                      width={480}
                      height={320}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* cta */}
        <LpCta />
        {/* 選ばれる理由 */}
        <div id="sc04" className={"c-contents pdt10 pdt20s pdb5 pdb10s"}>
          <div className={"c-contents--inner"}>
            <h2 className={"c-contents--LpMainTitle -b-btm -c01 mgb5 mgb10s"}><span className="-kana -b">マネーリペア</span><span className="-b">が</span>選<span className="-b">ばれる</span>理由</h2>
            <ul className={"c-flex -col1_3 -h-cen -jc-sb mgb2 mgb5s"}>
              <li className={"flexItem mgb10s"}>
                <div className="c-card -lp -No -No01">
                  <div className="c-card--inner">
                    <h3 className="s-ML -s18 -b -ls-2 -lh-1_5 mgb4 mgb5s">
                      1人当たり月500円といった<br />圧倒的なコストパフォーマンス
                    </h3>
                    <p className="s-S -b -left -ls-2 -lh-1_5 mgb5 mgb5s">説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。</p>
                    <div className="imgBox">
                      <Image
                        src="/images/Lp/sc04-A.png"
                        alt="マネーリペアを説明する図"
                        width={480}
                        height={320}
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li className={"flexItem mgb10s"}>
                <div className="c-card -lp -No -No02">
                  <div className="c-card--inner">
                    <h3 className="s-ML -s16 -b -ls-2 -lh-1_5 mgb4 mgb5s">
                      個別相談がつくことで<br />
                      精度の高い提案で削減事例多数
                    </h3>
                    <p className="s-S -b -left -ls-2 -lh-1_5 mgb5 mgb5s">説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。</p>
                    <div className="imgBox">
                      <Image
                        src="/images/Lp/sc04-B.png"
                        alt="お金が溜まっている様子"
                        width={480}
                        height={320}
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li className={"flexItem"}>
                <div className="c-card -lp -No -No03">
                  <div className="c-card--inner">
                    <h3 className="s-ML -s16 -b -ls-2 -lh-1_5 mgb4 mgb5s">
                      従業員へのアンケートを<br />
                      元にしたカリキュラム作成
                    </h3>
                    <p className="s-S -b -left -ls-2 -lh-1_5 mgb5 mgb5s">説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。</p>
                    <div className="imgBox">
                      <Image
                        src="/images/Lp/sc04-C.png"
                        alt="従業員が喜んでいる様子"
                        width={480}
                        height={320}
                      />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* 石橋 > 説明 */}
        <div id="sc04-02" className={"c-contents -bg-color01 -triangle pdt10 pdt20s pdb10 pdb10s pdb20s"}>
          <div className={"c-contents--inner"}>
            <div className="c-card -lp -lp04 -Profile">
              <div className="c-card--inner">
                <ul className={"c-flex -col1_2 -pc2_1 -h-top -jc-sb"}>
                  <li className={"flexItem mgb10s"}>
                    <div className="imgBox" style={{borderRadius: "5px", border: "1px solid lightgray"}}>
                      <Image
                        src="/images/Lp/sc04-D.png"
                        alt="石橋が説明する内容"
                        width={320}
                        height={320}
                      />
                    </div>
                  </li>
                  <li className={"flexItem mgb15s"}>
                    <h3 className="s-L -s16 -b -left -ls-2 -lh-1_5 mgb4 mgb5s">
                      「離職率減少」と<br className="tb-pc" />
                      「社員モチベーションアップ」に効果を発揮します。
                    </h3>
                    <p className="s-M -b -left -ls-2 -lh-2 mgb5 mgb5s">説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* 考えられる問題 */}
        <div id="sc05" className={"c-contents -bg-color07 pdt10 pdt20s pdb5 pdb10s pdb15s"}>
          <div className={"c-contents--inner"}>
            <h2 className={"c-contents--LpMainTitle -b-btm -c01 mgb5 mgb10s"}>
              <span className="-kana -b">マネーリペア</span><span className="-b">で</span>解決<span className="-b">できる</span><br className="" />
              様々<span className="-b">な</span>お金<span className="-b">の</span>問題
            </h2>
            <ul className={"c-flex -col2_4 -h-top -jc-st mgb2 mgb5s"}>
              <li className={"flexItem mgb2 mgb5s"}>
                <div className="c-card -lp -lp05">
                  <div className="c-card--inner">
                    <h3 className="s-ML -s14 -b -center -ls-2 -lh-1_5 mgb4 mgb5s">税金の適正化/節税</h3>
                    <p className="s-SS -left -ls-2 -lh-1_5 mgb5 mgb5s">説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。</p>
                  </div>
                </div>
              </li>
              <li className={"flexItem mgb2 mgb5s"}>
                <div className="c-card -lp -lp05">
                  <div className="c-card--inner">
                    <h3 className="s-ML -s14 -b -center -ls-2 -lh-1_5 mgb4 mgb5s">生命保険の見直し</h3>
                    <p className="s-SS -left -ls-2 -lh-1_5 mgb5 mgb5s">説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。</p>
                  </div>
                </div>
              </li>
              <li className={"flexItem mgb2 mgb5s"}>
                <div className="c-card -lp -lp05">
                  <div className="c-card--inner">
                    <h3 className="s-ML -s14 -b -center -ls-2 -lh-1_5 mgb4 mgb5s">資産運用</h3>
                    <p className="s-SS -left -ls-2 -lh-1_5 mgb5 mgb5s">説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。</p>
                  </div>
                </div>
              </li>
              <li className={"flexItem mgb2 mgb5s"}>
                <div className="c-card -lp -lp05">
                  <div className="c-card--inner">
                    <h3 className="s-ML -s14 -b -center -ls-2 -lh-1_5 mgb4 mgb5s">投資信託</h3>
                    <p className="s-SS -left -ls-2 -lh-1_5 mgb5 mgb5s">説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。</p>
                  </div>
                </div>
              </li>
              <li className={"flexItem mgb2 mgb5s"}>
                <div className="c-card -lp -lp05">
                  <div className="c-card--inner">
                    <h3 className="s-ML -s14 -b -center -ls-2 -lh-1_5 mgb4 mgb5s">NISA</h3>
                    <p className="s-SS -left -ls-2 -lh-1_5 mgb5 mgb5s">説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。</p>
                  </div>
                </div>
              </li>
              <li className={"flexItem mgb2 mgb5s"}>
                <div className="c-card -lp -lp05">
                  <div className="c-card--inner">
                    <h3 className="s-ML -s14 -b -center -ls-2 -lh-1_5 mgb4 mgb5s">iDeco</h3>
                    <p className="s-SS -left -ls-2 -lh-1_5 mgb5 mgb5s">説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。</p>
                  </div>
                </div>
              </li>
              <li className={"flexItem mgb5s"}>
                <div className="c-card -lp -lp05">
                  <div className="c-card--inner">
                    <h3 className="s-ML -s14 -b -center -ls-2 -lh-1_5 mgb4 mgb5s">ふるさと納税</h3>
                    <p className="s-SS -left -ls-2 -lh-1_5 mgb5 mgb5s">説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。</p>
                  </div>
                </div>
              </li>
              <li className={"flexItem mgb5s"}>
                <div className="c-card -lp -lp05">
                  <div className="c-card--inner">
                    <h3 className="s-ML -s14 -b -center -ls-2 -lh-1_5 mgb4 mgb5s">年金</h3>
                    <p className="s-SS -left -ls-2 -lh-1_5 mgb5 mgb5s">説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* マネーリペアを導入すると */}
        <div id="sc06" className={"c-contents pdt10 pdt20s pdb5 pdb10s pdb15s"}>
          <div className={"c-contents--inner"}>
            <h2 className={"c-contents--LpMainTitle -b-btm -c01 mgb5 mgb10s"}>
              <span className="-kana -b">マネーリペア</span><span className="-b">を</span>導入<span className="-b">することで</span><br className="" />
              従業員の満足度<span className="-b">や</span>企業の魅力が向上<span className="-b">し、</span>離職率の低下<span className="-b">につながります。</span>
            </h2>
            <ul className={"c-flex -col3 -h-top -jc-sb mgb2 mgb5s"}>
              <li className={"flexItem mgb5s"}>
                <p className="s-M -s10 -b -center -ls-2 -lh-1_5 mgb5 mgb5s">
                  社員とご家族の<br className="tb-pc" />金融リテラシーの向上
                </p>
                <div className="imgBox">
                  <Image
                    src="/images/Lp/sc06-A.png"
                    alt="ご家族が悩んでいる様子"
                    width={480}
                    height={320}
                  />
                </div>
              </li>
              <li className={"flexItem mgb5s"}>
                <p className="s-M -s10 -b -center -ls-2 -lh-1_5 mgb5 mgb5s">
                  新入社員採用時の<br className="tb-pc" />アピールポイント
                </p>
                <div className="imgBox">
                  <Image
                    src="/images/Lp/sc06-B.png"
                    alt="ビジネス街の写真"
                    width={480}
                    height={320}
                  />
                </div>
              </li>
              <li className={"flexItem mgb5s"}>
                <p className="s-M -s10 -b -center -ls-2 -lh-1_5 mgb5 mgb5s">
                  社員の会社満足度の向上、<br className="tb-pc" />離職率低下
                </p>
                <div className="imgBox">
                  <Image
                    src="/images/Lp/sc06-C.png"
                    alt="従業員が話し合っている様子"
                    width={480}
                    height={320}
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
