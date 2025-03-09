import Image from "next/image";

// コンポーネント
import TopMainVisual from "@/features/media/mainVisual/top";
import ContactBottom from "@/features/media/contact/bottom";
import Button from "@/components/elements/button";

// 投稿関係
import LogoContents from "@/components/slider/logo/LogoContents";
// import InterviewArea from "@/features/media/interview/Content";
import InformationArea from "@/features/media/information/Content";

// ISR
export const revalidate = 600;

export default async function Home() {
  return (
    <main>
      {/* メインビジュアル */}
      <TopMainVisual />

      {/* 導入企業ロゴ */}
      <LogoContents />

      {/* マネーリペアとは */}
      <div id="sc01" className={"c-contents pdt10 pdt10s mgb5s"}>
        <div className={"c-contents--inner"}>
          <ul className={"c-flex -col1_2 -jc-sb -h-cen"}>
            <li className={"flexItem mgb10s"}>
              <h2 className={"s-L -s30 -left -b mgl0 mgl0s mgb3 mgb3s"}>
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
                <Button href="/service" customClass="-maru -blue">マネーリペアについて</Button>
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
      {/* <InterviewArea /> */}

      {/* お役立ち情報 */}
      <InformationArea />

      {/* お問い合わせ */}
      <ContactBottom />
    </main>
  );
}
