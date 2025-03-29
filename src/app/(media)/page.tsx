import Image from "next/image";

// コンポーネント
import TopMainVisual from "@/features/media/mainVisual/top";
import ContactBottom from "@/features/media/contact/bottom";
import Button from "@/components/elements/button";

// 投稿関係
// import LogoContents from "@/components/slider/logo/LogoContents";
// import InterviewArea from "@/features/media/interview/Content";
import InformationArea from "@/features/media/information/Content";
import ManeripeArea from "@/features/media/maneripe/Content";
import NewsArea from "@/features/media/news/Content";
// import LatestNewsBer from "@/features/media/news/newsBer/Content";
import NewsContents from "@/components/slider/news/NewsContents";
// ISR
export const revalidate = 600;

export default async function Home() {
  return (
    <main>
      {/* メインビジュアル */}
      <div className="c-contents -imgBg -fv -top">
        <div className="imgBox">
          <TopMainVisual />
        </div>
        {/* 最新のお知らせ */}
        <NewsContents />
      </div>

      {/* 導入企業ロゴ */}
      {/* <LogoContents /> */}

      {/* マネーリペアとは */}
      <div id="sc01" className={"c-contents pdt10 pdt10s"}>
        <div className={"c-contents--inner"}>
          <ul className={"c-flex -col1_2 -pc1_2 -jc-sb -h-top"}>
            <li className={"flexItem mgb10s"}>
              <h2 className={"s-L -s30 -left -b mgl0 mgl0s mgb2 mgb3s"}>マネーリペアとは</h2>
              <h3 className={"s-ML -s14 -b -left -lh-1_5 -ls-2 mgb2 mgb3s"}>
                企業の従業員様向けに金融・投資・税務の教育を<br/>
                実施する福利厚生プログラム
              </h3>
              <p className={"s-M -s12 -left -ls-2 -lh-2 mgb3 mgb5s"}>
                金融は分野によって知識が偏りがちなので、金融知識という知的財産を身につけ、自分たちで適切な判断ができるようにすることが必要だと感じます。金融リテラシーを上げることにより「将来に向けたお金の不安を解決する」サービスです。
              </p>
              <div className={"c-contents--btnArea -left"}>
                <Button href="/service" customAreaClass="-left" customClass="-btn -maru -blue">詳細を見る</Button>
              </div>
            </li>
            <li className={"flexItem"}>
              <div className={"imgBox c-img -borderBox -solid"}>
                <Image
                  // src="/images/item/service/top-service.png"
                  src="/images/mv/mv-02.jpg"
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

      {/* マネリペ情報 / お知らせ */}
      <div className={"c-contents pdt10 mgb5 mgb5s"}>
        <div className={"c-contents--inner"}>
          <ul className={"c-flex -col1_2 -jc-sb -h-top"}>
            <li className={"flexItem"}>
              <ManeripeArea />
            </li>
            <li className={"flexItem"}>
              <NewsArea />
            </li>
          </ul>
        </div>
      </div>

      {/* お問い合わせ */}
      <ContactBottom />
    </main>
  );
}
