import Image from "next/image";

// コンポーネント
import TopMainVisual from "@/components/MainVisual/Top";
import LogoSlider from "@/components/Slider/Logo";
import ContactBottom from "@/features/Contact/Bottom";
import PageButtonLink from "@/components/Parts/Button/PageButton";

// 投稿関係
import { getInterviewsList, getInformationList } from "@/libs/microcms";
import { INTERVIEW_TOP_LIST_LIMIT, INFORMATION_TOP_LIST_LIMIT } from "@/constants";
import InterviewList from "@/features/PostList/Interview";
import InformationList from "@/features/PostList/Information";

// ISR
export const revalidate = 600;

export default async function Home() {

  // 表示件数を絞る
  const interviewData = await getInterviewsList({
    limit: INTERVIEW_TOP_LIST_LIMIT,
  });
  const informationData = await getInformationList({
    limit: INFORMATION_TOP_LIST_LIMIT,
  });

  return (
    <main>
      {/* メインビジュアル */}
      <TopMainVisual />

      {/* 導入企業ロゴ */}
      <div id="logoSection" className={"c-contents pdt5 pdt10s mgb5s"}>
        <div className={"c-contents--inner"}>
          <h2 className={"s-L -center -b pdb3 pdb3s"}>
            多くのお客様にご好評いただいております
          </h2>
        </div>
        <div className={"swiper swiper-Logo -right mgb1 mgb3s"}>
          <LogoSlider />
        </div>
        <div className={"swiper swiper-Logo -left"}>
          <LogoSlider />
        </div>
      </div>

      {/* マネーリペアとは */}
      <div id="sc01" className={"c-contents pdt10 pdt10s mgb5s"}>
        <div className={"c-contents--inner"}>
          <ul className={"c-flex -col1_2 -jc-sb -h-cen"}>
            <li className={"flexItem mgb10s"}>
              <h2 className={"s-L -s24 -left -b mgl0 mgl0s mgb3 mgb1s"}>
                {/* <h2 className={"w50 mgl0 mgl0s mgb3 mgb3s"}> */}
                マネーリペア<span className={"s-ML -b"}>とは</span>
                {/* <img src="images/SVG/money-repair-toha.svg" alt="マネーリペアとは"> */}
              </h2>
              <h3 className={"s-ML -s14 -left -ls-2 -lh-1_5 mgb3 mgb3s"}>
                企業の従業員様向けに金融・投資・税務の教育を
                <br className={"tb-pc"} />
                実施する福利厚生プログラム
              </h3>
              <p className={"s-S -s12 -left -ls-2 -lh-1_5 mgb5 mgb10s"}>
                金融は分野によって知識が偏りがちなので、金融知識という知的財産を身につけ、自分たちで適切な判断ができるようにすることが必要だと感じます。金融リテラシーを上げることにより「将来に向けたお金の不安を解決する」サービスです。
              </p>
              <div className={"c-contents--btnArea -left"}>
                <PageButtonLink href="/service">
                  マネーリペアについて
                </PageButtonLink>
              </div>
            </li>
            <li className={"flexItem"}>
              <div className={"imgBox c-img -borderBox -solid"}>
                <Image
                  src="/images/item/service/top-service.png"
                  alt="実際の導入説明会の写真"
                  width={480}
                  height={320}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* ご利用者インタビュー */}
      <div id="sc02" className={"c-contents pdt10 pdt20s mgb5s"}>
        <div className={"c-contents--inner"}>
          {/* タイトル */}
          <h2 className={"c-contents--title -interview -ls-1 -en-color03 pdb3 pdb5s"}>
            ご利用者インタビュー
          </h2>

          {/* 投稿リスト */}
          <div className={"c-post mgb5 mgb10s"}>
            <InterviewList contents={interviewData.contents} />
          </div>

          {/* ボタン */}
          <div className={"c-contents--btnArea"}>
            <PageButtonLink href="/interview">すべて見る</PageButtonLink>
          </div>
        </div>
      </div>

      {/* お役立ち情報 */}
      <div id="sc03" className={"c-contents pdt10 pdt20s mgb10 mgb20s"}>
        <div className={"c-contents--inner"}>
          {/* タイトル */}
          <h2
            className={"c-contents--title -news -ls-1 -en-color03 pdb3 pdb5s"}
          >
            お役立ち情報
          </h2>

          {/* 投稿リスト */}
          <div className={"c-post mgb3 mgb10s"}>
            <InformationList contents={informationData.contents} />
          </div>

          {/* ボタン */}
          <div className={"c-contents--btnArea"}>
            <PageButtonLink href="/information">すべて見る</PageButtonLink>
          </div>
        </div>
      </div>

      {/* お問い合わせ */}
      <ContactBottom />
    </main>
  );
}
