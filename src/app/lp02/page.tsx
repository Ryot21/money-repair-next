import Link from "next/link";
import Image from "next/image";

// コンポーネント
import LpMainVisual from "@/features/lp02/mainVisual";
// import Button from "@/components/elements/button";
import LpCta from "@/features/lp02/cta";
// import LpCtaBottom from "@/features/lp02/cta/LpBottom";

// 投稿関係
// import LogoContents from "@/components/slider/logo/LogoContents";
// import LpInterviewArea from "@/features/lp02/interview/Content";

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
        {/* SC01 導入企業ロゴ */}
        {/* <div className="c-contents -bg-lp02-logo">
          <div className="c-contents--inner">
            <h2 className="c-contents--LpMainTitle -c01 pdt1 pdt2s pdb1 pdb2s mgb5 mgb10s">
              \ 様々な業界の企業にご利用いただいています！ /
            </h2>
          </div>
        </div> */}
        {/* <LogoContents /> */}

        {/* SC02 簡単な説明 */}
        <div id="sc02" className="c-contents -bg-lp02-sc02 pdt7 pdt15s pdb7 pdb15s">
          <div className="c-contents--inner">
            <div className="c-card -lp_02 -sc02">
              <div className="c-card--inner">
                <p className="s-ML -s14 -blue -ls-2 -lh-2 -lh-1_5_s -ws-n -center mgb1 mgb4s">
                  マネーリペアは離職率を下げて<br className="sp" />エンゲージメントを高める<br /><br className="sp" />
                  <span className="s-L -s18 -b -blue -marker pdr1 pdr0s">金融リテラシー向上をサポートする</span><br className="sp" />福利厚生です。
                </p>
                <p className="s-ML -s14 -blue -ls-2 -lh-2 -lh-1_5_s -ws-n -center">“中小・ベンチャー・<br className="sp" />中堅企業でも実績多数”</p>
              </div>
            </div>
          </div>
        </div>
        {/* SC03 導入効果 */}
        <div id="sc03" className="c-contents -bg-lp02-sc03 pdt7 pdt15s pdb7 pdb15s">
          <div className="c-contents--inner">
            <h2 className="c-contents--LpMainTitle -b-btm -c03 pdt1 pdt2s mgb7 mgb10s">
              マネリペの導入効果
            </h2>
            <ul className="c-flex -col1_3 -h-top -jc-sb mgb5 mgb5s">
              <li className="flexItem pdr5s pdl5s mgb5s">
                <Image
                  src="/images/Lp/ver02/sc03-item01.png"
                  alt="早期就職率-5%ダウンを実現"
                  width={320}
                  height={320}
                />
              </li>
              <li className="flexItem pdr5s pdl5s mgb5s">
                <Image
                  src="/images/Lp/ver02/sc03-item02.png"
                  alt="社員利用率40%以上アップ"
                  width={320}
                  height={320}
                />
              </li>
              <li className="flexItem pdr5s pdl5s ">
                <Image
                  src="/images/Lp/ver02/sc03-item03.png"
                  alt="可処分所得平均26万円アップ"
                  width={320}
                  height={320}
                />
              </li>
            </ul>
            <p className="s-Ss -s10 -blue -right -ls-2 -lh-1_5 -ws-n mgb5 mgb10s">
              ※1.マネーリペア顧客調査2025年度<br />
              ※2.マネーリペア500名のユーザーを対象とした調査に基づく
            </p>
          </div>
        </div>
        {/* SC04 マネリペで出来ること */}
        <div id="sc04" className={"c-contents -bg-white pdt7 pdt15s pdb5 pdb5s"}>
          <div className="c-contents--inner">
            <h2 className="c-contents--LpMainTitle -b-btm -c03 mgb7 mgb10s">
              マネリペで出来ること<br />
              固定費を上げずに“可処分所得”を<br className="sp" />増やす新しい福利厚生
            </h2>
            <div className="mgb10 mgb10s">
              {/* 1. 金融勉強会 */}
              <div className=" c-contents -bg-color01 pdt2 pdt5s pdb2 pdb5s pdr2 pdr5s pdl2 pdl5s mgb5 mgb10s">
                <ul className={"c-flex -col1_2 -pc2_1 -h-top -jc-sb"}>
                  <li className={"flexItem mgb5s"}>
                    <div className="imgBox">
                      <Image
                        src="/images/Lp/ver02/sc04-item01.png"
                        alt="金融勉強会の様子"
                        width={480}
                        height={320}
                      />
                    </div>
                  </li>
                  <li className={"flexItem"}>
                    <h3 className="c-contents--LpListTitle -t01 mgb1 mgb3s">
                      社内で「金融勉強会」を開催<br />
                      公式LINEにて情報発信サービスも提供
                    </h3>
                    <p className="s-M -blue -ls-2 -ls-1_5_s -lh-2 mgb1 mgb3s">
                      従業員様からのニーズに基づき、関心の高いテーマで金融勉強会を実施いたします。また、公式LINEを通じて、マーケットの動向や日々の生活に役立つ時事情報などを定期的に配信。必要な情報をタイムリーにお届けし、従業員様の金融リテラシー向上をサポートいたします。
                    </p>
                  </li>
                </ul>
              </div>
              {/* 2. 個別相談 */}
              <div className=" c-contents -bg-color01 pdt2 pdt5s pdb2 pdb5s pdr2 pdr5s pdl2 pdl5s mgb5 mgb10s">
                <ul className={"c-flex -col1_2 -pc2_1 -h-top -jc-sb mgb5 mgb10s"}>
                  <li className={"flexItem mgb5s"}>
                    <div className="imgBox">
                      <Image
                        src="/images/Lp/ver02/sc04-item02.png"
                        alt="個別相談の絵"
                        width={480}
                        height={320}
                      />
                    </div>
                  </li>
                  <li className={"flexItem"}>
                    <h3 className="c-contents--LpListTitle -t02 mgb1 mgb3s">
                      個別相談も可能！<br />
                      専属金融相談窓口の設置
                    </h3>
                    <p className="s-M -blue -ls-2 -ls-1_5_s -lh-2 mgb1 mgb3s">
                    弊社専属のファイナンシャルプランナーが最低1人御社専属の担当となり、LINEやお電話で気軽に相談ができます。従業員様の2親等までのご親族様まで、無料で相談が可能です。
                    （ご相談は基本24時間365日対応しています。）
                    </p>
                  </li>
                </ul>
              </div>
              {/* 3. 金融勉強会 */}
              <div className=" c-contents -bg-color01 pdt2 pdt5s pdb2 pdb5s pdr2 pdr5s pdl2 pdl5s">
                <ul className={"c-flex -col1_2 -pc2_1 -h-top -jc-sb"}>
                  <li className={"flexItem mgb5s"}>
                    <div className="imgBox">
                      <Image
                        src="/images/Lp/ver02/sc04-item03.png"
                        alt="システム"
                        width={480}
                        height={320}
                      />
                    </div>
                  </li>
                  <li className={"flexItem"}>
                    <h3 className="c-contents--LpListTitle -t03 mgb1 mgb3s">
                      家計管理も可能！<br />
                      資産管理システムの提供
                    </h3>
                    <p className="s-M -blue -ls-2 -ls-1_5_s -lh-2 mgb1 mgb3s">
                      従業員様向けに、通常月額3,000円～5,000円の本格的なライフプランシミュレーションシステムを無料でご提供。収支の可視化で無駄を削減し、キャッシュフローを改善。将来のライフイベント費用や老後資金の不足額を明確にし、資産形成を強力にサポートします。
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* SC05 事例 */}
        <div id="sc05" className={"c-contents -bg-color01 pdt7 pdt15s pdb5 pdb5s"}>
          <div className="c-contents--inner">
            <h2 className="c-contents--LpMainTitle -b-btm -c03 mgb7 mgb10s">
              実際にマネリペをご利用いただき<br />
              “可処分所得”が増加した事例
            </h2>
            <p className="s-ML -s12 -blue -center -ls-2 -lh-2 mgb7 mgb10s">
              過去5年分の自己申告（年末調整や確定申告）をプロの目線で確認し、<br className="tb-pc" />本来は使えていた税制優遇や控除を最大限に活用。<br className="tb-pc" />
              年間1,500人以上の相談を受けて、<br className="sp" />60%以上の方が<span className="s-L -s12 -b -blue -marker">年平均30万円</span>以上損している！？
            </p>
            <div className="c-contents -bg-color01 pdt2 pdt5s pdb2 pdb5s pdr2 pdr5s pdl2 pdl5s mgb5 mgb10s">
              <div className="c-contents--inner -lp-item mgb5 mgb5s">
                <Image
                  src="/images/Lp/ver02/sc05-item01.png"
                  alt="BeforeAfter"
                  className="tb-pc"
                  width={551}
                  height={284}
                />
                <Image
                  src="/images/Lp/ver02/sc05-item01s.png"
                  alt="BeforeAfter"
                  className="sp"
                  width={248}
                  height={631}
                />
              </div>
              <div className="mgb1 mgb1s">
                <Image
                  src="/images/Lp/ver02/sc05-item02.png"
                  alt="過去5年間で26万円税金の適正化"
                  className="tb-pc"
                  width={782}
                  height={332}
                />
                <Image
                  src="/images/Lp/ver02/sc05-item02s.png"
                  alt="過去5年間で26万円税金の適正化"
                  className="sp"
                  width={291}
                  height={520}
                />
              </div>
              <p className="s-Ss -s10 -blue -center -ls-2 -lh-1_5 mgb5 mgb10s">
                ※マネーリペアのサービスは「ASTELLA Partners 会計事務所」に監修していただいております。
              </p>
            </div>
          </div>
        </div>




        {/* cta */}
        <LpCta />
        {/* 選ばれる理由 */}
        <div id="sc04" className={"c-contents pdt7 pdt20s pdb5 pdb10s"}>
          <div className={"c-contents--inner"}>
            <h2 className={"c-contents--LpMainTitle -b-btm -c01 mgb5 mgb10s"}>
              <span className="-kana -b">マネーリペア</span>
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
                        alt="マネーリペアを説明する図"
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
            <h2 className={"c-contents--LpMainTitle -b-btm -c01 mgb5 mgb10s"}>
              <span className="-kana -b">マネーリペア</span>
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
        {/* マネーリペアを導入すると */}
        <div id="sc06" className={"c-contents pdt7 pdt20s pdb7 pdb15s"}>
          <div className={"c-contents--inner"}>
            <h2 className={"c-contents--LpMainTitle -b-btm -c01 mgb5 mgb10s"}>
              <span className="-kana -b">マネーリペア</span>
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
        {/* <LpInterviewArea /> */}
        {/* 申し込みから導入までの流れ */}
        <div id="sc08" className={"c-contents -bg-img-sc08 -support pdt7 pdt20s pdb7 pdb15s"}>
          <div className={"c-contents--inner"}>
            <h2 className={"c-contents--LpMainTitle -b-btm -c01 mgb5 mgb10s"}>
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
            <h2 className={"c-contents--LpMainTitle -b-btm -c01 mgb5 mgb10s"}>
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
