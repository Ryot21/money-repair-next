import Link from "next/link";
import Image from "next/image";

// コンポーネント
import LpMainVisual from "@/features/lp01/mainVisual";
// import Button from "@/components/elements/button";
import LpCta from "@/features/lp01/cta";
// import LpCtaBottom from "@/features/lp01/cta/LpBottom";

// 投稿関係
// import LogoContents from "@/components/slider/logo/LogoContents";

// Q&A関係
import Accordion from "@/components/accordion";
import type { AccordionItem } from "@/types/accordion";

const faqItems: AccordionItem[] = [
  {
    id: "01",
    question: "お問い合わせや相談時に金額が発生しますか？",
    answer:
      "お問い合わせや相談までは無料ですので、お気軽にお問い合わせください！",
  },
  {
    id: "02",
    question: "調査に使われた個人情報はどのように取り扱われますか？",
    answer: "プライバシーポリシーに遵守して管理していますのでご安心ください。",
  },
  {
    id: "03",
    question: "しつこい営業の電話はありますか？",
    answer:
      "執拗な勧誘は一切行いません。お客様のご要望にあわせてご案内しております。",
  },
  {
    id: "04",
    question: "初心者なのでちょっとした事でも優しく教えて欲しいです。",
    answer:
      "もちろん大丈夫です！弊社専属のファイナンシャルプランナーがどんな些細な事でもお答えします。",
  },
  {
    id: "05",
    question: "お問い合わせや相談前に用意しておく物はありますか？",
    answer:
      "保険証券と保険契約書などの保険の内容がわかる書類があればスムーズご相談可能です。※上記の書類をなくされた場合でも相談可能です。",
  },
];

// ISR
export const revalidate = 3600;

export default async function Home() {
  return (
    <main>
      {/* メインビジュアル */}
      <LpMainVisual />

      <div className="c-contents -bg-white">
        {/* 導入企業ロゴ */}
        {/* <LogoContents /> */}
        {/* こんなお悩みはありませんか？ */}
        <div id="sc01" className={"c-contents pdt7 pdt5s pdb7 pdb15s"}>
          <div className={"c-contents--inner"}>
            <h2 className={"c-contents--LpMainTitle -b-btm -c03 mgb5 mgb10s"}>
              経営者・総務・人事<span className="-b">の</span>皆さん
              <br />
              <span className="-b">こういう</span>お悩み
              <span className="-b">は</span>ありませんか？
            </h2>
            <ul className={"c-flex -col2_4 -h-cen -jc-sb mgb2 mgb5s"}>
              <li className={"flexItem mgb5s"}>
                <div className="c-card -lp -lp01">
                  <div className="c-card--inner">
                    <p className="s-M -b -ls-2 -lh-2 -ws-n">
                      社員の定着率や
                      <br />
                      従業員満足度が
                      <br />
                      低く定着しない
                    </p>
                  </div>
                </div>
              </li>
              <li className={"flexItem mgb5s"}>
                <div className="c-card -lp -lp01">
                  <div className="c-card--inner">
                    <p className="s-M -b -ls-2 -lh-2 -ws-n">
                      従業員満足度につながる
                      <br />
                      ユニークな福利厚生が
                      <br />
                      提供できていない
                    </p>
                  </div>
                </div>
              </li>
              <li className={"flexItem mgb5s"}>
                <div className="c-card -lp -lp01">
                  <div className="c-card--inner">
                    <p className="s-M -b -ls-2 -lh-2 -ws-n">
                      社員の給料を
                      <br />
                      アップさせる余裕がない
                    </p>
                  </div>
                </div>
              </li>
              <li className={"flexItem mgb5s"}>
                <div className="c-card -lp -lp01">
                  <div className="c-card--inner">
                    <p className="s-M -b -ls-2 -lh-2 -ws-n">
                      採用において
                      <br />
                      魅力的な福利厚生による
                      <br />
                      差別化ができていない
                    </p>
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
        <div
          id="sc02"
          className={"c-contents -bg-color01 pdt7 pdt15s pdb7 pdb15s"}
        >
          {/* メリット */}
          <div className="c-contents--inner mgb10 mgb20s">
            <h2 className="c-contents--LpMainTitle -b-btm -c03 mgb5 mgb10s">
              <span className="-kana -b">マネリペ</span>
              <span className="-b">を</span>導入
              <span className="-b">することで</span>
              <br />
              <span className="-b">その</span>お悩み
              <span className="-b">を</span>解決
              <span className="-b">できます</span>
            </h2>
            <p className="s-M -b -center -ls-2 -lh-2 -ws-n mgb5 mgb10s">
              従業員の「金融リテラシー向上」をご支援し、
              <br />
              給料を上げずに、1人当たりの所得を
              <br className="sp" />
              年間約
              <span className="s-ML -kome -b -color02 pdr1 pdr1s">
                150,000円
              </span>
              高めることが可能です！<span className="s-SS">*個人差あります</span>
            </p>
            <ul className={"c-flex -col3 -flow -h-cen -jc-sb mgb5 mgb5s"}>
              <li className={"flexItem"}>
                <div className="c-card -lp -lp02">
                  <div className="c-card--inner">
                    <p className="s-M -s10 -b -ls-2 -ls-1_s -lh-2 -ws-n">
                      社員に対して
                      <br className="sp" />
                      金融教育セミナーを実施
                    </p>
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
                    <p className="s-M -s10 -b -ls-2 -ls-1_s -lh-2 -ws-n">
                      従業員満足度が
                      <br className="sp" />
                      すごく高まる
                    </p>
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
                    <p className="s-M -s10 -b -ls-2 -ls-1_s -lh-2 -ws-n">
                      離職率の低下
                      <br className="sp" />
                      採用競争力の向上
                    </p>
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
          {/* マネリペとは */}
          <div className="c-contents--inner mgb5 mgb10s">
            <h2 className="c-contents--LpMainTitle -b-btm -c03 mgb5 mgb10s">
              <span className="-kana -b">マネリペ</span>
              <span className="-b">とは</span>
            </h2>
            <ul className={"c-flex -col1_2 -pc2_1 -h-top -jc-sb"}>
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
                  企業の従業員様向けに金融・投資・税務の教育を
                  <br className="pc" />
                  実施する福利厚生プログラム
                </h3>
                <p className="s-M -ls-2 -ls-1_5_s -lh-2 mgb1 mgb3s">
                  企業にとって社員の方々はとても『大切な財産』です。しかし、急激な物価高騰の波に対応できず、大切な社員を流出させてしまうかも知れません。個々の社員の金融リテラシーを上げることにより、限られた給与でも『可処分所得』を上げる事ができます。
                </p>
                <p className="s-M -ls-2 -ls-1_5_s -lh-2">
                  マネリペとは、大切な社員の『将来に向けたお金の不安』を解決するためのサービスです。長年続いたデフレにより凝り固まった誤ったお金の知識を修復し、正しい金融知識を身につけご自身で適切な判断ができるようにすることが大切なのです。
                </p>
              </li>
            </ul>
          </div>
          {/* 何ができる？ */}
          <div className="c-contents--inner ">
            <div className="c-card -lp -lp03">
              <div className="c-card--inner">
                <h2
                  className={
                    "c-contents--LpMainTitle -b-btm -lp -c03 mgb5 mgb10s"
                  }
                >
                  金融リテラシー<span className="-b">を</span>習得
                  <span className="-b">して</span>
                  <br />
                  純資産<span className="-b">を</span>増
                  <span className="-b">やすことが</span>可能
                  <span className="-b">に</span>
                </h2>
                <p className="s-M -s10 -center -ls-2 -lh-2 mgb5 mgb10s">
                  バランスシートに置き換えて考えるとわかりやすいですが、
                  <br />
                  金融リテラシーという知的財産を付けることにより、
                  <br />
                  可処分所得を増やすことが出来ると同時に、
                  <br />
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
        {/* マネリペで出来ること */}
        <div
          id="sc03"
          className={"c-contents -bg-white pdt7 pdt15s pdb5 pdb5s"}
        >
          <div className="c-contents--inner">
            <h2 className="c-contents--LpMainTitle -b-btm -c03 mgb7 mgb10s">
              <span className="-kana -b">マネリペ</span>
              <span className="-b">で</span>出来<span className="-b">る</span>事
              <span className="-b"></span>
            </h2>
            <div className="mgb10 mgb10s">
              {/* 1. 金融勉強会 */}
              <ul className={"c-flex -col1_2 -h-top -jc-sb mgb10 mgb15s"}>
                <li className={"flexItem mgb5s"}>
                  <h3 className="c-contents--LpTitle mgb4 mgb5s">
                    金融勉強会で知識の習得と
                    <br />
                    金融知識を当たり前に
                  </h3>
                  <p className="s-M -ls-2 -ls-1_5_s -lh-2 mgb1 mgb3s">
                    金融知識の「当たり前」を学ぶ環境をご提供いたします。
                    <br />
                    【勉強会の一例】
                    <br />
                    ・源泉徴収票の読み取り方、節税
                    <br />
                    ・経済動向、情報の取方、ニュースの見方
                    <br />
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
                    個別相談も可能！
                    <br className="tb-pc" />
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
                    家計管理も可能！
                    <br />
                    資産管理システムの提供
                  </h3>
                  <p className="s-M -ls-2 -ls-1_5_s -lh-2 mgb1 mgb3s">
                    運用している有価証券、不動産、保険などあらゆる金融商品を一括管理でき、<span className="-b -red">キャッシュフローを可視化する</span>ことが出来ます。ライフプランシミュレーションを作成することも可能です
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
        <div id="sc04" className={"c-contents pdt7 pdt20s pdb5 pdb10s"}>
          <div className={"c-contents--inner"}>
            <h2 className={"c-contents--LpMainTitle -b-btm -c03 mgb5 mgb10s"}>
              <span className="-kana -b">マネリペ</span>
              <span className="-b">が</span>選<span className="-b">ばれる</span>
              理由
            </h2>
            <ul className={"c-flex -col1_3 -h-top -jc-st mgb2 mgb5s"}>
              {/* 1. 金融リテラシーを向上させる福利厚生プログラムです。 */}
              <li className={"flexItem mgb10s"}>
                <div className="c-card -lp -No -No01">
                  <div className="c-card--inner">
                    <h3 className="s-ML -s18 -b -ls-2 -lh-1_5 mgb4 mgb5s">
                      従業員の可処分所得の増加
                      <br />
                      モチベーションを高める！
                    </h3>
                    <div className="imgBox">
                      <Image
                        src="/images/Lp/sc04-B.png"
                        alt="マネリペを説明する図"
                        width={480}
                        height={320}
                      />
                    </div>
                  </div>
                </div>
              </li>
              {/* 2. 個別相談がつくことで精度の高い提案で削減事例多数 */}
              <li className={"flexItem mgb10s"}>
                <div className="c-card -lp -No -No02">
                  <div className="c-card--inner">
                    <h3 className="s-ML -s16 -b -ls-2 -lh-1_5 mgb4 mgb5s">
                      従業員の経済的不安を解消し、
                      <br />
                      仕事への集中を促します！
                    </h3>
                    <div className="imgBox">
                      <Image
                        src="/images/Lp/sc04-A.png"
                        alt="お金が溜まっている様子"
                        width={480}
                        height={320}
                      />
                    </div>
                  </div>
                </div>
              </li>
              {/* 3. 従業員の定着率UP、採用率UPにつながります！ */}
              <li className={"flexItem"}>
                <div className="c-card -lp -No -No03">
                  <div className="c-card--inner">
                    <h3 className="s-ML -s16 -b -ls-2 -lh-1_5 mgb4 mgb5s">
                      従業員の定着率UP、
                      <br />
                      採用率UPにつながります！
                    </h3>
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
        <div
          id="sc04-02"
          className={
            "c-contents -bg-color01 -triangle pdt7 pdt20s pdb7 pdb10s pdb20s"
          }
        >
          <div className={"c-contents--inner"}>
            <div className="c-card -lp -lp04 -Profile">
              <div className="c-card--inner">
                <ul className={"c-flex -col1_2 -pc2_1 -h-top -jc-sb"}>
                  <li className={"flexItem mgb10s"}>
                    <div
                      className="imgBox"
                      style={{
                        borderRadius: "5px",
                        border: "1px solid lightgray",
                      }}
                    >
                      <Image
                        src="/images/Lp/sc04-D.png"
                        alt="石橋が説明する内容"
                        width={320}
                        height={320}
                      />
                    </div>
                  </li>
                  <li className={"flexItem mgb15s"}>
                    <h3 className="c-contents--LpMainTitle -b -left -ls-2 -lh-1_5 mgb4 mgb5s">
                      「離職率減少」<span className="-b">と</span>
                      <br className="" />
                      「社員モチベーションアップ」<span className="-b">に</span>
                      効果<span className="-b">を</span>発揮
                      <span className="-b">します。</span>
                    </h3>
                    <p className="s-M -left -ls-2 -lh-2 mgb5 mgb5s">
                    企業が金融教育を導入することは従業員への福利厚生としてだけでなく、企業の持続的な成長にも繋がる様々なメリットをもたらします。また金融勉強会を通じて、従業員は経済的な不安から解放され、<span className="-b -red">仕事に集中できる</span>ようになります。
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* 考えられる問題 */}
        <div
          id="sc05"
          className={"c-contents -bg-color07 pdt7 pdt20s pdb7 pdb15s"}
        >
          <div className={"c-contents--inner"}>
            <h2 className={"c-contents--LpMainTitle -b-btm -c03 mgb5 mgb10s"}>
              <span className="-kana -b">マネリペ</span>
              <span className="-b">で</span>解決
              <span className="-b">できる</span>
              <br className="" />
              様々<span className="-b">な</span>お金
              <span className="-b">の</span>問題
            </h2>
            <ul className={"c-flex -col1_3 -h-top -jc-st mgb2 mgb5s"}>
              <li className={"flexItem mgb2 mgb5s"}>
                <div className="c-card -lp -lp05">
                  <div className="c-card--inner">
                    <h3 className="s-ML -s14 -b -center -ls-2 -lh-1_5 mgb4 mgb5s">
                      企業の固定費の削減
                    </h3>
                    <p className="s-SS -left -ls-2 -lh-2 mgb5 mgb5s">
                    弊社サービスで固定費を抑えつつ、社員満足度も向上にも繋がります。コストをかけずに選ばれる会社へのお手伝いします。
                    </p>
                  </div>
                </div>
              </li>
              <li className={"flexItem mgb2 mgb5s"}>
                <div className="c-card -lp -lp05">
                  <div className="c-card--inner">
                    <h3 className="s-ML -s14 -b -center -ls-2 -lh-1_5 mgb4 mgb5s">
                      採用問題
                    </h3>
                    <p className="s-SS -left -ls-2 -lh-2 mgb5 mgb5s">
                      採用力を強化するなら福利厚生の充実が鍵。弊社サービス導入で、働きやすさをPRし、他社と差がつく採用ブランディングを実現します。
                    </p>
                  </div>
                </div>
              </li>
              <li className={"flexItem mgb2 mgb5s"}>
                <div className="c-card -lp -lp05">
                  <div className="c-card--inner">
                    <h3 className="s-ML -s14 -b -center -ls-2 -lh-1_5 mgb4 mgb5s">
                      退職金制度の導入
                    </h3>
                    <p className="s-SS -left -ls-2 -lh-2 mgb5 mgb5s">
                    人材定着と企業の信頼性向上へ、退職金制度の導入をサポートします。最適な設計で、安心と満足を提供する仕組みづくりをお手伝いします。
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* マネリペを導入すると */}
        <div id="sc06" className={"c-contents pdt7 pdt20s pdb7 pdb15s"}>
          <div className={"c-contents--inner"}>
            <h2 className={"c-contents--LpMainTitle -b-btm -c03 mgb5 mgb10s"}>
              <span className="-kana -b">マネリペ</span>
              <span className="-b">を</span>導入
              <span className="-b">することで</span>
              <br className="" />
              従業員の満足度<span className="-b">や</span>企業の魅力が向上
              <span className="-b">し、</span>離職率の低下
              <span className="-b">につながります。</span>
            </h2>
            <ul className={"c-flex -col3 -h-top -jc-sb mgb2 mgb5s"}>
              <li className={"flexItem mgb5s"}>
                <p className="s-M -s10 -b -center -ls-2 -lh-1_5 mgb5 mgb5s">
                  社員とご家族の
                  <br className="tb-pc" />
                  金融リテラシーの向上
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
                  新入社員採用時の
                  <br className="tb-pc" />
                  アピールポイント
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
                  社員の会社満足度の向上、
                  <br className="tb-pc" />
                  離職率低下
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
        {/* cta */}
        <LpCta />
        {/* 導入実績 */}
        
        {/* 申し込みから導入までの流れ */}
        <div id="sc08" className={"c-contents -bg-img-sc08 -support pdt7 pdt20s pdb7 pdb15s"}>
          <div className={"c-contents--inner"}>
            <h2 className={"c-contents--LpMainTitle -b-btm -c03 mgb5 mgb10s"}>
              申し込み<span className="-b">から</span>導入
              <span className="-b">までの</span>流れ
            </h2>
            <ul className={"c-flex -col1_3 -h-top -jc-st mgb2 mgb5s"}>
              {/* 1. WEBサイトからお問い合わせ */}
              <li className={"flexItem mgb5 mgb10s"}>
                <div className="c-card -lp -lp05">
                  <div className="c-card--inner">
                    <h3 className="s-ML -s18 -b -center -ls-2 -lh-1_5 mgb4 mgb5s">
                      1. WEBサイトからお問い合わせ
                    </h3>
                    <div className="imgBox">
                      <Image
                        src="/images/Lp/sc08-A.png"
                        alt="申し込みの様子"
                        className="mgb5 mgb5s"
                        width={480}
                        height={320}
                      />
                    </div>
                    <p className="s-S -s16 -b -left -ls-2 -lh-1_5 mgb5 mgb5s">
                      サイト内の
                      <Link href="#contact" className="c-link -b -red">
                        申し込みフォーム
                      </Link>
                      からお問い合わせください。
                    </p>
                  </div>
                </div>
              </li>
              {/* 2. お見積り */}
              <li className={"flexItem mgb5 mgb10s"}>
                <div className="c-card -lp -lp05">
                  <div className="c-card--inner">
                    <h3 className="s-ML -s18 -b -center -ls-2 -lh-1_5 mgb4 mgb5s">
                      2. お見積り
                    </h3>
                    <div className="imgBox">
                      <Image
                        src="/images/Lp/sc08-B.png"
                        alt="打ち合わせの様子"
                        className="mgb5 mgb5s"
                        width={480}
                        height={320}
                      />
                    </div>
                    <p className="s-S -s16 -b -left -ls-2 -lh-1_5 mgb5 mgb5s">
                      従業員数に応じて、工数やお見積りをお出しします。
                    </p>
                  </div>
                </div>
              </li>
              {/* 3. お申し込み + 導入後の打ち合わせ */}
              <li className={"flexItem mgb5 mgb10s"}>
                <div className="c-card -lp -lp05">
                  <div className="c-card--inner">
                    <h3 className="s-ML -s18 -b -center -ls-2 -lh-1_5 mgb4 mgb5s">
                      3. 従業員様への導入説明会
                    </h3>
                    <div className="imgBox">
                      <Image
                        src="/images/Lp/sc08-C.png"
                        alt="導入説明会を実施している様子"
                        className="mgb5 mgb5s"
                        width={480}
                        height={320}
                      />
                    </div>
                    <p className="s-S -s16 -b -left -ls-2 -lh-1_5 mgb5 mgb5s">
                      ご契約を行い、従業員様の悩み事をヒアリングし、年間のコーチング計画の打ち合わせを行います。
                    </p>
                  </div>
                </div>
              </li>
              {/* 4. 相談予約アプリ */}
              <li className={"flexItem mgb10s"}>
                <div className="c-card -lp -lp05">
                  <div className="c-card--inner">
                    <h3 className="s-ML -s18 -b -center -ls-2 -lh-1_5 mgb4 mgb5s">
                      4. 相談予約アプリの導入
                    </h3>
                    <div className="imgBox">
                      <Image
                        src="/images/Lp/sc08-D.png"
                        alt="相談予約アプリを導入している様子"
                        className="mgb5 mgb5s"
                        width={480}
                        height={320}
                      />
                    </div>
                    <p className="s-S -s16 -b -left -ls-2 -lh-1_5 mgb5 mgb5s">
                      個別相談なども可能ですので、相談予約の出来るアプリを導入します。
                    </p>
                  </div>
                </div>
              </li>
              {/* 5. コーチングや相談の開始 */}
              <li className={"flexItem mgb10s"}>
                <div className="c-card -lp -lp05">
                  <div className="c-card--inner">
                    <h3 className="s-ML -s18 -b -center -ls-2 -lh-1_5 mgb4 mgb5s">
                      5. コーチングや相談の開始
                    </h3>
                    <div className="imgBox">
                      <Image
                        src="/images/Lp/sc08-E.png"
                        alt="コーチングを実施している様子"
                        className="mgb5 mgb5s"
                        width={480}
                        height={320}
                      />
                    </div>
                    <p className="s-S -s16 -b -left -ls-2 -lh-1_5 mgb5 mgb5s">
                      年間計画を元にコーチングを行います。
                    </p>
                  </div>
                </div>
              </li>
              {/* 6. フィードバック */}
              <li className={"flexItem mgb5s"}>
                <div className="c-card -lp -lp05">
                  <div className="c-card--inner">
                    <h3 className="s-ML -s18 -b -center -ls-2 -lh-1_5 mgb4 mgb5s">
                      6. フィードバック
                    </h3>
                    <div className="imgBox">
                      <Image
                        src="/images/Lp/sc08-F.png"
                        alt="フィードバックを行っている様子"
                        className="mgb5 mgb5s"
                        width={480}
                        height={320}
                      />
                    </div>
                    <p className="s-S -s16 -b -left -ls-2 -lh-1_5 mgb5 mgb5s">
                      従業員様の反応や、経済効果の測定をし、フィードバックを行います。
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Q&A */}
        <div id="Q&A" className={"c-contents pdt7 pdt20s pdb7 pdb15s"}>
          <div className={"c-contents--inner"}>
            <h2 className={"c-contents--LpMainTitle -b-btm -c03 mgb5 mgb10s"}>
              よくある質問
            </h2>
            <Accordion items={faqItems} />
          </div>
        </div>
        {/* cta */}
        <LpCta />
      </div>
    </main>
  );
}
