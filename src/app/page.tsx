import Image from "next/image";
import MainVisual from "@/components/MainVisual";
import LogoSlider from "@/components/Slider/Logo";
import ContactBottom from "@/components/Contact/Bottom";
import PageButtonLink from "@/components/Parts/Button/PageButton";

// 型定義
type Interview = {
  id: string; // ID
  company: string; // 企業名
  date: string; // 更新日（yyyy/mm/dd）
  mainTitle: string; // メインタイトル
  subTitle: string; // サブタイトル

  category: {
    // カテゴリー
    name: string;
  };

  client: {
    // 取引先情報
    name: string; // __取引先名
    address: string; // __住所
    logo: string; // __企業ロゴ
    link: string; // __URL
  };

  article: string; // 本文
  publishedAt: string; // 更新日
  createdAt: string; // 作成日
};
type Information = {
  id: string; // ID
  date: string; // 更新日（yyyy/mm/dd）
  mainTitle: string; // メインタイトル
  subTitle: string; // サブタイトル
  category: {
    name: string; // カテゴリー
  };
  captionLists: {
    // 見出しリスト
    captionTitle01: string;
    captionTitle02: string;
    captionTitle03: string;
    captionTitle04: string;
    captionTitle05: string;
  };
  poster: {
    // 投稿者
    name: string;
    officialPosition: string;
    description: string;
    profilePicture: string;
    url: string;
  };
  read: string; // 導入文
  article: string; // 本文
  ctaOnOff: boolean; // CTA切り替え

  publishedAt: string; // 更新日
  createdAt: string; // 作成日
};

// ダミーデータ
const interviewData: { contents: Interview[] } = {
  contents: [
    {
      id: "1",
      company: "株式会社1",
      date: "2025/01/11",
      mainTitle: "メインタイトル01メインタイトル01メインタイトル01",
      subTitle: "サブタイトル01サブタイトル01サブタイトル01",
      category: {
        name: "カテゴリー01",
      },
      client: {
        name: "株式会社1",
        address: "東京都千代田区",
        logo: "string",
        link: "https://~~~",
      },
      article: "本文",

      publishedAt: "2025/01/11",
      createdAt: "2025/01/11",
    },
    {
      id: "2",
      company: "株式会社2",
      date: "2025/01/11",
      mainTitle: "メインタイトル02メインタイトル02メインタイトル02",
      subTitle: "サブタイトル02サブタイトル02サブタイトル02",
      category: {
        name: "カテゴリー02",
      },
      client: {
        name: "株式会社2",
        address: "東京都千代田区",
        logo: "string",
        link: "https://~~~",
      },
      article: "本文",

      publishedAt: "2025/01/11",
      createdAt: "2025/01/11",
    },
    {
      id: "3",
      company: "株式会社3",
      date: "2025/01/11",
      mainTitle: "メインタイトル03メインタイトル03メインタイトル03",
      subTitle: "サブタイトル03サブタイトル03サブタイトル03",
      category: {
        name: "カテゴリー03",
      },
      client: {
        name: "株式会社1",
        address: "東京都千代田区",
        logo: "string",
        link: "https://~~~",
      },
      article: "本文",

      publishedAt: "2025/01/11",
      createdAt: "2025/01/11",
    },
  ],
};
const informationwData: { contents: Information[] } = {
  contents: [
    {
      id: "1",
      date: "2025/01/11",
      mainTitle: "メインタイトル01メインタイトル01メインタイトル01",
      subTitle: "サブタイトル01サブタイトル01サブタイトル01",
      category: {
        name: "カテゴリー01",
      },
      captionLists: {
        captionTitle01: "見出しタイトル01見出しタイトル01",
        captionTitle02: "見出しタイトル02見出しタイトル02",
        captionTitle03: "見出しタイトル03見出しタイトル03",
        captionTitle04: "見出しタイトル04見出しタイトル04",
        captionTitle05: "見出しタイトル05見出しタイトル05",
      },
      poster: {
        name: "投稿者01",
        officialPosition: "代表取締役社長",
        description: "説明文が入ります。説明文が入ります。説明文が入ります。",
        profilePicture: "画像URL",
        url: "https://~~~",
      },
      read: "リード文",
      article: "本文",
      ctaOnOff: true,

      publishedAt: "2025/01/11",
      createdAt: "2025/01/11",
    },
    {
      id: "2",
      date: "2025/01/11",
      mainTitle: "メインタイトル02メインタイトル02メインタイトル02",
      subTitle: "サブタイトル02サブタイトル02サブタイトル02",
      category: {
        name: "カテゴリー02",
      },
      captionLists: {
        captionTitle01: "見出しタイトル01見出しタイトル01",
        captionTitle02: "見出しタイトル02見出しタイトル02",
        captionTitle03: "見出しタイトル03見出しタイトル03",
        captionTitle04: "見出しタイトル04見出しタイトル04",
        captionTitle05: "見出しタイトル05見出しタイトル05",
      },
      poster: {
        name: "投稿者02",
        officialPosition: "保険事業部",
        description: "説明文が入ります。説明文が入ります。説明文が入ります。",
        profilePicture: "画像URL",
        url: "https://~~~",
      },
      read: "リード文",
      article: "本文",
      ctaOnOff: true,

      publishedAt: "2025/01/11",
      createdAt: "2025/01/11",
    },
    {
      id: "3",
      date: "2025/01/11",
      mainTitle: "メインタイトル03メインタイトル03メインタイトル03",
      subTitle: "サブタイトル03サブタイトル03サブタイトル03",
      category: {
        name: "カテゴリー03",
      },
      captionLists: {
        captionTitle01: "見出しタイトル01見出しタイトル01",
        captionTitle02: "見出しタイトル02見出しタイトル02",
        captionTitle03: "見出しタイトル03見出しタイトル03",
        captionTitle04: "見出しタイトル04見出しタイトル04",
        captionTitle05: "見出しタイトル05見出しタイトル05",
      },
      poster: {
        name: "投稿者03",
        officialPosition: "不動産事業部",
        description: "説明文が入ります。説明文が入ります。説明文が入ります。",
        profilePicture: "画像URL",
        url: "https://~~~",
      },
      read: "リード文",
      article: "本文",
      ctaOnOff: true,

      publishedAt: "2025/01/11",
      createdAt: "2025/01/11",
    },
  ],
};

export default function Home() {
  // 表示件数を絞る
  const interviewDataSlice = interviewData.contents.slice(0, 1);
  const informationDataSlice = informationwData.contents.slice(0, 3);

  return (
    <main>
      {/* メインビジュアル */}
      <MainVisual />

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
          <h2
            className={
              "c-contents--title -interview -ls-1 -en-color03 pdb3 pdb5s"
            }
          >
            ご利用者インタビュー
          </h2>

          {/* 投稿リスト */}
          <div className={"c-post mgb5 mgb10s"}>
            <ul className={"c-flex -col2M1_3 -jc-sb -h-top"}>
              {interviewDataSlice.map((article) => (
                <li key={article.id} className={"flexItem_M mgb3 mgb10s"}>
                  <a className={"c-post--link"} href="">
                    {/* バナー画像 */}
                    <div className={"c-thumbnail -interview mgb3 mgb3s"}>
                      <div className={"imgBox"}>
                        <Image
                          src="/images/item/interview/interview-thumbnail.png"
                          alt="企業1"
                          width={480}
                          height={320}
                        />
                      </div>
                      <div className={"c-thumbnail--cover"}>
                        <span className={"c-thumbnail--cover__text"}>
                          詳細を見る
                        </span>
                      </div>
                      <div className={"c-thumbnail--mark"}>
                        <Image
                          src="/images/item/interview/interview-mark.svg"
                          alt="マネーリペア | ご利用者インタビュー"
                          width={186}
                          height={16}
                        />
                      </div>
                      <div className={"c-thumbnail--picter"}>
                        <Image
                          src="/images/item/480-320.png"
                          alt="お客様との写真"
                          width={480}
                          height={320}
                        />
                      </div>
                      <p className={"c-thumbnail--title"}>
                        <span className={"s-M -s20 -b -color03 -ls-1"}>
                          {article.mainTitle}
                        </span>
                      </p>
                      <p
                        className={
                          "c-thumbnail--subTitle s-SS -s16 -b -color03 -ls-1"
                        }
                      >
                        {article.subTitle}
                      </p>
                    </div>
                    {/* テキストエリア */}
                    <div className={"c-date mgb2 mgb1s"}>
                      <ul className={"c-date__lists c-flex -col2"}>
                        <li className={"c-date__item"}>
                          <p className={"s-M -s16 -left -b -ls-2"}>
                            {article.date}
                          </p>
                        </li>
                        <li className={"c-date__item"}>
                          <ul
                            className={"c-post--category__lists c-flex -h-cen"}
                          >
                            <li className={"c-post--category__item"}>
                              <p>#{article.category.name}</p>
                            </li>
                            {/* <li className={"c-post--category__item"}><p>#カテゴリー01</p></li> */}
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <h3 className={"c-post--title s-M -s16 -left -b -ls-1"}>
                      {article.mainTitle}
                    </h3>
                  </a>
                </li>
              ))}
            </ul>
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
            <ul className={"c-flex -col2M1_3 -jc-sb -h-top"}>
              {informationDataSlice.map((article) => (
                <li key={article.id} className={"flexItem_M mgb5 mgb10s"}>
                  <a className={"c-post--link"} href="">
                    {/* バナー画像 */}
                    <div className={"c-thumbnail -news mgb3 mgb3s"}>
                      <div className={"imgBox"}>
                        <Image
                          src="/images/item/news/news-thumbnail.png"
                          alt="企業1"
                          width={480}
                          height={320}
                        />
                      </div>
                      <div className={"c-thumbnail--cover"}>
                        <span className={"c-thumbnail--cover__text"}>
                          詳細を見る
                        </span>
                      </div>
                      <div className={"c-thumbnail--mark"}>
                        <Image
                          src="/images/item/news/news-mark.svg"
                          alt="マネーリペア | お役立ち情報"
                          width={186}
                          height={16}
                        />
                      </div>
                      <div className={"c-thumbnail--picter"}>
                        <Image
                          src="/images/item/480-320.png"
                          alt="お客様との写真"
                          width={480}
                          height={320}
                        />
                      </div>
                      <p className={"c-thumbnail--title"}>
                        <span className={"s-M -s20 -b -color03 -ls-1"}>
                          {article.mainTitle}
                        </span>
                      </p>
                      <p
                        className={
                          "c-thumbnail--subTitle s-SS -s16 -b -color03 -ls-1"
                        }
                      >
                        {article.subTitle}
                      </p>
                    </div>
                    {/* テキストエリア */}
                    <div className={"c-date mgb2 mgb1s"}>
                      <ul className={"c-date__lists c-flex -col2"}>
                        <li className={"c-date__item"}>
                          <p className={"s-M -s16 -left -b -ls-2"}>
                            {article.date}
                          </p>
                        </li>
                        <li className={"c-date__item"}>
                          <ul
                            className={"c-post--category__lists c-flex -h-cen"}
                          >
                            <li className={"c-post--category__item"}>
                              <p>#{article.category.name}</p>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <h3 className={"c-post--title s-M -s16 -left -b -ls-1"}>
                      {article.mainTitle}
                    </h3>
                  </a>
                </li>
              ))}
            </ul>
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
