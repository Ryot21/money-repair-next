
import Image  from "next/image";

import MainVisual from "@/components/MainVisual";
import LogoSwiper from "@/components/Swiper/Logo";
import ContactBottom from "@/components/Contact/Bottom"


export default function Home() {
  return (
    <main>

      {/* メインビジュアル */}
      <MainVisual />

      {/* 導入企業ロゴ */}
      <div id="logoSection" className={"c-contents pdt5 pdt10s mgb5s"}>
            <div className={"c-contents--inner"}>
                <h2 className={"s-L -center -b pdb3 pdb3s"}>多くのお客様にご好評いただいております</h2>
            </div>
            <div className={"swiper swiper-Logo -right mgb1 mgb3s"}>
              <LogoSwiper />
            </div>
            <div className={"swiper swiper-Logo -left"}>
              <LogoSwiper />
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
                    <h3 className={"s-ML -s14 -left -ls-2 -lh-1_5 mgb3 mgb3s"}>企業の従業員様向けに金融・投資・税務の教育を<br className={"tb-pc"} />実施する福利厚生プログラム</h3>
                    <p className={"s-S -s12 -left -ls-2 -lh-1_5 mgb5 mgb10s"}>
                        金融は分野によって知識が偏りがちなので、金融知識という知的財産を身につけ、自分たちで適切な判断ができるようにすることが必要だと感じます。金融リテラシーを上げることにより「将来に向けたお金の不安を解決する」サービスです。
                    </p>
                    <div className={"c-contents--btnArea -left"}>
                        <a className={"c-link -btn -center s-M -s14 -b -ls-2"} href="">マネーリペアについて</a>
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
              <h2 className={"c-contents--title -interview -ls-1 -en-color03 pdb3 pdb5s"}>ご利用者インタビュー</h2>
              <div className={"c-post mgb3 mgb10s"}>
                  <ul className={"c-flex -col2M1_3 -jc-sb -h-top"}>
                      {/* 1 */}
                      <li className={"flexItem_M mgb10s"}>
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
                                      <span className={"c-thumbnail--cover__text"}>詳細を見る</span>
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
                                  <p className={"c-thumbnail--title"}><span className={"s-M -s20 -b -color03 -ls-1"}>タイトルタイトルタイトルタイトル</span></p>
                                  <p className={"c-thumbnail--subTitle s-SS -s16 -b -color03 -ls-1"}>サブタイトルサブタイトル</p>
                              </div>
                              {/* テキストエリア */}
                              <div className={"c-date mgb2 mgb1s"}>
                                  <ul className={"c-date__lists c-flex -col2"}>
                                      <li className={"c-date__item"}><p className={"s-M -s16 -left -b -ls-2"}>2024.11.18</p></li>
                                      <li className={"c-date__item"}>
                                          <ul className={"c-post--category__lists c-flex -h-cen"}>
                                              <li className={"c-post--category__item"}><p>#カテゴリー01</p></li>
                                              <li className={"c-post--category__item"}><p>#カテゴリー01</p></li>
                                          </ul>
                                      </li>
                                  </ul>
                              </div>
                              <h3 className={"c-post--title s-M -s16 -left -b -ls-1"}>こんな福利厚生今までなかったこんな福利厚生今までなかったこんな福利厚生今までなかったこんな福利厚生今までなかった</h3>
                          </a>
                      </li>
                      {/* 2 */}
                      <li className={"flexItem"}>
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
                                      <span className={"c-thumbnail--cover__text"}>詳細を見る</span>
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
                                  <p className={"c-thumbnail--title"}><span className={"s-M -b -color03 -ls-1"}>タイトルタイトルタイトルタイトル</span></p>
                                  <p className={"c-thumbnail--subTitle s-SS -b -color03 -ls-1"}>サブタイトルサブタイトル</p>
                              </div>
                              {/* テキストエリア */}
                              <div className={"c-date mgb2 mgb1s"}>
                                  <ul className={"c-date__lists c-flex -col2"}>
                                      <li className={"c-date__item"}><p className={"s-M -s16 -left -b -ls-2"}>2024.11.18</p></li>
                                      <li className={"c-date__item"}>
                                          <ul className={"c-post--category__lists c-flex -h-cen"}>
                                              <li className={"c-post--category__item"}><p>#カテゴリー01</p></li>
                                              <li className={"c-post--category__item"}><p>#カテゴリー01</p></li>
                                          </ul>
                                      </li>
                                  </ul>
                              </div>
                              <h3 className={"c-post--title s-M -s16 -left -b -ls-1"}>こんな福利厚生今までなかったこんな福利厚生今までなかったこんな福利厚生今までなかったこんな福利厚生今までなかった</h3>
                          </a>
                      </li>
                      {/* 3 */}
                      <li className={"flexItem"}>
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
                                      <span className={"c-thumbnail--cover__text"}>詳細を見る</span>
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
                                  <p className={"c-thumbnail--title"}><span className={"s-M -b -color03 -ls-1"}>タイトルタイトルタイトルタイトル</span></p>
                                  <p className={"c-thumbnail--subTitle s-SS -b -color03 -ls-1"}>サブタイトルサブタイトル</p>
                              </div>
                              {/* テキストエリア */}
                              <div className={"c-date mgb2 mgb1s"}>
                                  <ul className={"c-date__lists c-flex -col2"}>
                                      <li className={"c-date__item"}><p className={"s-M -s16 -left -b -ls-2"}>2024.11.18</p></li>
                                      <li className={"c-date__item"}>
                                          <ul className={"c-post--category__lists c-flex -h-cen"}>
                                              <li className={"c-post--category__item"}><p>#カテゴリー01</p></li>
                                              <li className={"c-post--category__item"}><p>#カテゴリー01</p></li>
                                          </ul>
                                      </li>
                                  </ul>
                              </div>
                              <h3 className={"c-post--title s-M -s16 -left -b -ls-1"}>こんな福利厚生今までなかったこんな福利厚生今までなかったこんな福利厚生今までなかったこんな福利厚生今までなかった</h3>
                          </a>
                      </li>

                  </ul>
              </div>
              <div className={"c-contents--btnArea"}>
                  <a className={"c-link -btn -center s-M -s14 -b -ls-2"} href="">すべて見る</a>
              </div>
          </div>
      </div>

      {/* お役立ち情報 */}
      <div id="sc03" className={"c-contents pdt10 pdt20s mgb10 mgb20s"}>
          <div className={"c-contents--inner"}>
              <h2 className={"c-contents--title -news -ls-1 -en-color03 pdb3 pdb5s"}>お役立ち情報</h2>
              <div className={"c-post mgb3 mgb10s"}>
                  <ul className={"c-flex -col2M1_3 -jc-sb -h-top"}>
                      {/* 1 */}
                      <li className={"flexItem_M mgb10s"}>
                          <a className={"c-post--link"} href="">
                              {/* バナー画像 */}
                              <div className={"c-thumbnail -interview mgb3 mgb3s"}>
                                  <div className={"imgBox"}>
                                    <Image
                                      src="/images/item/news/news-thumbnail.png"
                                      alt="企業1"
                                      width={480}
                                      height={320}
                                    />
                                  </div>
                                  <div className={"c-thumbnail--cover"}>
                                      <span className={"c-thumbnail--cover__text"}>詳細を見る</span>
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
                                  <p className={"c-thumbnail--title"}><span className={"s-M -s20 -b -color03 -ls-1"}>タイトルタイトルタイトルタイトル</span></p>
                                  <p className={"c-thumbnail--subTitle s-SS -s16 -b -color03 -ls-1"}>サブタイトルサブタイトル</p>
                              </div>
                              {/* テキストエリア */}
                              <div className={"c-date mgb2 mgb1s"}>
                                  <ul className={"c-date__lists c-flex -col2"}>
                                      <li className={"c-date__item"}><p className={"s-M -s16 -left -b -ls-2"}>2024.11.18</p></li>
                                      <li className={"c-date__item"}>
                                          <ul className={"c-post--category__lists c-flex -h-cen"}>
                                              <li className={"c-post--category__item"}><p>#カテゴリー01</p></li>
                                              <li className={"c-post--category__item"}><p>#カテゴリー01</p></li>
                                          </ul>
                                      </li>
                                  </ul>
                              </div>
                              <h3 className={"c-post--title s-M -s16 -left -b -ls-1"}>こんな福利厚生今までなかったこんな福利厚生今までなかったこんな福利厚生今までなかったこんな福利厚生今までなかった</h3>
                          </a>
                      </li>
                      {/* 2 */}
                      <li className={"flexItem"}>
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
                                      <span className={"c-thumbnail--cover__text"}>詳細を見る</span>
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
                                  <p className={"c-thumbnail--title"}><span className={"s-M -b -color03 -ls-1"}>タイトルタイトルタイトルタイトル</span></p>
                                  <p className={"c-thumbnail--subTitle s-SS -b -color03 -ls-1"}>サブタイトルサブタイトル</p>
                              </div>
                              {/* テキストエリア */}
                              <div className={"c-date mgb2 mgb1s"}>
                                  <ul className={"c-date__lists c-flex -col2"}>
                                      <li className={"c-date__item"}><p className={"s-M -s16 -left -b -ls-2"}>2024.11.18</p></li>
                                      <li className={"c-date__item"}>
                                          <ul className={"c-post--category__lists c-flex -h-cen"}>
                                              <li className={"c-post--category__item"}><p>#カテゴリー01</p></li>
                                              <li className={"c-post--category__item"}><p>#カテゴリー01</p></li>
                                          </ul>
                                      </li>
                                  </ul>
                              </div>
                              <h3 className={"c-post--title s-M -s16 -left -b -ls-1"}>こんな福利厚生今までなかったこんな福利厚生今までなかったこんな福利厚生今までなかったこんな福利厚生今までなかった</h3>
                          </a>
                      </li>
                      {/* 3 */}
                      <li className={"flexItem"}>
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
                                      <span className={"c-thumbnail--cover__text"}>詳細を見る</span>
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
                                  <p className={"c-thumbnail--title"}><span className={"s-M -b -color03 -ls-1"}>タイトルタイトルタイトルタイトル</span></p>
                                  <p className={"c-thumbnail--subTitle s-SS -b -color03 -ls-1"}>サブタイトルサブタイトル</p>
                              </div>
                              {/* テキストエリア */}
                              <div className={"c-date mgb2 mgb1s"}>
                                  <ul className={"c-date__lists c-flex -col2"}>
                                      <li className={"c-date__item"}><p className={"s-M -s16 -left -b -ls-2"}>2024.11.18</p></li>
                                      <li className={"c-date__item"}>
                                          <ul className={"c-post--category__lists c-flex -h-cen"}>
                                              <li className={"c-post--category__item"}><p>#カテゴリー01</p></li>
                                              <li className={"c-post--category__item"}><p>#カテゴリー01</p></li>
                                          </ul>
                                      </li>
                                  </ul>
                              </div>
                              <h3 className={"c-post--title s-M -s16 -left -b -ls-1"}>こんな福利厚生今までなかったこんな福利厚生今までなかったこんな福利厚生今までなかったこんな福利厚生今までなかった</h3>
                          </a>
                      </li>

                  </ul>
              </div>
              <div className={"c-contents--btnArea"}>
                  <a className={"c-link -btn -center s-M -s14 -b -ls-2"} href="">すべて見る</a>
              </div>
          </div>
      </div>

      {/* お問い合わせ */}
      <ContactBottom />

    </main>
  );
}
