
import Image from "next/image";
import Link from "next/link";
import type { Information } from "@/libs/microcms";
import Date from "@/components/Parts/Date";
import { CategoryLink } from "@/components/Parts/Category";
import Poster from "@/components/Parts/Poster";

type Props = {
    data : Information;
}

export default function Article ({ data }: Props) {
    return (
        <ul className={"c-flex -single-lists -jc-sb"}>
            {/* 記事コンテンツ */}
            <li className={"singleItem mgb10s"}>
                {/* 1. タイトルエリア */}
                <div className={"p-single--title"}>
                    {/* 日付 */}
                    <ul className={"c-flex -category -jc-st -h-cen mgb1 mgb2s"}>
                        <li className={"categoryItem"}></li>
                        <li className={"categoryItem mgr3 mgr3s"}>
                            <span className={"-ws-n pdr1 pdr1s"}>株式会社インプレーム</span>
                        </li>
                        {/* カテゴリー */}
                        <li className={"categoryItem"}>
                            <CategoryLink
                                article="information"
                                category={data.category}
                                customClass="p-single--category"
                            />
                        </li>
                    </ul>
                    {/* タイトル */}
                    <h1>{data.mainTitle}</h1>
                    <Date date={data.publishedAt || data.createdAt}/>
                </div>
                {/* 2. バナー */}
                <div className={"c-thumbnail -news"}>
                    <div className={"imgBox"}>
                        <Image
                            src="/images/item/news/news-thumbnail.png"
                            alt="サムネイル"
                            width={856}
                            height={481}
                        />
                    </div>
                    <div className={"c-thumbnail--cover"}>
                        <span className={"c-thumbnail--cover__text"}>詳細を見る</span>
                    </div>
                    <div className={"c-thumbnail--mark"}>
                        <Image
                            src="/images/item/news/news-mark.svg"
                            alt="マネーリペア | ご利用者インタビュー"
                            width={428}
                            height={48}
                        />
                    </div>
                    <div className={"c-thumbnail--picter"}>
                        {data.thumbnail && (
                            <Image
                                src={data.thumbnail?.url}
                                alt="お客様との写真"
                                width={856}
                                height={570}
                            />
                        )}

                    </div>
                    <p className={"c-thumbnail--title"}>
                        <span className={"s-L -b -color03 -ls-1"}>{data.mainTitle}</span></p>
                    <p className={"c-thumbnail--subTitle s-M -b -color03 -ls-1"}>{data.subTitle}</p>
                </div>
                {/* 3. お悩み */}
                <div className={"c-card -t04 mgt10 mgt15s"}>
                    {data.captionLists &&
                        <ul className={"c-card-lists"}>
                            <li className={"c-card-item"}>
                                <Link href="#detail01" className={"c-link -check s-M -s12 -b -ls-1 -lh-1_5"}>{data.captionLists.captionTitle01}</Link>
                            </li>
                            {data.captionLists.captionTitle02 && 
                                <li className={"c-card-item"}>
                                    <Link href="#detail02" className={"c-link -check s-M -s12 -b -ls-1 -lh-1_5"}>{data.captionLists.captionTitle02}</Link>
                                </li>
                            }
                            {data.captionLists.captionTitle03 && 
                                <li className={"c-card-item"}>
                                    <Link href="#detail03" className={"c-link -check s-M -s12 -b -ls-1 -lh-1_5"}>{data.captionLists.captionTitle03}</Link>
                                </li>
                            }
                            {data.captionLists.captionTitle04 && 
                                <li className={"c-card-item"}>
                                    <Link href="#detail04" className={"c-link -check s-M -s12 -b -ls-1 -lh-1_5"}>{data.captionLists.captionTitle04}</Link>
                                </li>
                            }
                            {data.captionLists.captionTitle05 && 
                                <li className={"c-card-item"}>
                                    <Link href="#detail05" className={"c-link -check s-M -s12 -b -ls-1 -lh-1_5"}>{data.captionLists.captionTitle05}</Link>
                                </li>
                            }
                        </ul>
                    }
                </div>
                {/* 4. 導入文 */}
                <div
                    className={"p-single--intro"}
                    dangerouslySetInnerHTML={{__html: data.read}}
                >
                </div>
                {/* 5. 目次 */}
                <div className={"sp c-card -t03 mgb10 mgb10s"}>
                    <h2>目次</h2>
                    {data.captionLists &&
                        <ul className={"c-card-lists -h2-lists"}>
                            <li className={"c-card-item"}>
                                <Link href="#detail01" className={"c-link -mokuji -b -ls-1 -lh-1_5"}>{data.captionLists.captionTitle01}</Link>
                            </li>
                            {data.captionLists.captionTitle02 && 
                                <li className={"c-card-item"}>
                                    <Link href="#detail02" className={"c-link -mokuji -b -ls-1 -lh-1_5"}>{data.captionLists.captionTitle02}</Link>
                                    {/* 表示されたリッチエディタ内に「h3」がある場合に表示させたい */}
                                    {/* <ul className={"c-card-lists -h3-lists"}>
                                        <li className={"c-card-item"}>
                                            <Link href="#detail02-01" className={"c-link -mokuji -ls-1 -lh-1_5"}>h3タグh3タグh3タグh3タグh3タグh3タグh3タグh3タグ</Link>
                                        </li>
                                        <li className={"c-card-item"}>
                                            <Link href="#detail02-02" className={"c-link -mokuji -ls-1 -lh-1_5"}>h3タグh3タグh3タグ</Link>
                                        </li>
                                    </ul> */}
                                </li>
                            }
                            {data.captionLists.captionTitle03 && 
                                <li className={"c-card-item"}>
                                    <Link href="#detail03" className={"c-link -mokuji -b -ls-1 -lh-1_5"}>{data.captionLists.captionTitle03}</Link>
                                </li>
                            }
                            {data.captionLists.captionTitle04 && 
                                <li className={"c-card-item"}>
                                    <Link href="#detail04" className={"c-link -mokuji -b -ls-1 -lh-1_5"}>{data.captionLists.captionTitle04}</Link>
                                </li>
                            }
                            {data.captionLists.captionTitle05 && 
                                <li className={"c-card-item"}>
                                    <Link href="#detail05" className={"c-link -mokuji -b -ls-1 -lh-1_5"}>{data.captionLists.captionTitle05}</Link>
                                </li>
                            }
                        </ul>
                    }
                </div>
                {/* 6. コンテンツ */}
                <div
                    className={"p-single--detail -info"}
                    dangerouslySetInnerHTML={{__html: data.article}}
                >
                </div>
                {/* 7. 投稿者 */}
                <Poster poster={data.poster} />
                {/* 8. 内部リンク */}
                <div className={"c-card -t02"}>
                    <Link href="" className="">
                        <ul className={"c-card-lists"}>
                            <li className={"c-card-item"}>
                                <div className={"c-thumbnail -news mgb3 mgb3s"}>
                                    <div className={"imgBox"}>
                                        <Image
                                            src="/images/item/news/news-thumbnail.png"
                                            alt="企業1"
                                            width={241}
                                            height={135}
                                        />
                                    </div>
                                    <div className={"c-thumbnail--mark"}>
                                        <Image
                                            src="/images/item/news/news-mark.svg"
                                            alt="マネーリペア | ご利用者インタビュー"
                                            width={181}
                                            height={20}
                                        />
                                    </div>
                                    <div className={"c-thumbnail--picter"}>
                                        <Image
                                            src="/images/item/480-320.png"
                                            alt="お客様との写真"
                                            width={241}
                                            height={160}
                                        />
                                    </div>
                                </div>
                            </li>
                            <li className={"c-card-item"}>
                                <time dateTime="">2024/12/16</time>
                                <h5>記事タイトル記事タイトル記事タイトル</h5>
                                <p>導入文はここに入ります。導入文はここに入ります。導入文はここに入ります。導入文はここに入ります。導入文はここに入ります。導入文はここに入ります。導入文はここに入ります。導入文はここに入ります。導入文はここに入ります。導入文はここに入ります。導入文はここに入ります。導入文はここに入ります。</p>
                            </li>
                        </ul>
                    </Link>
                </div>
                {/* 9. 別記事紹介 */}
                <div className={"p-single--articleArea"}>
                    <h2><CategoryLink category={data.category} />に関する記事はこちら</h2>
                    <ul className={"c-flex -article-lists -jc-sb"}>
                        <li className={"articleItem"}>
                            <Link href="single-information.html" className={"c-post--link"}>
                                {/* バナー風画像 */}
                                <div className={"c-thumbnail -news mgb3 mgb3s"}>
                                    <div className={"imgBox"}>
                                        <Image
                                            src="/images/item/news/news-thumbnail.png"
                                            alt="企業1"
                                            width={415}
                                            height={233}
                                        />
                                    </div>
                                    <div className={"c-thumbnail--cover"}>
                                        <span className={"c-thumbnail--cover__text"}>詳細を見る</span>
                                    </div>
                                    <div className={"c-thumbnail--mark"}>
                                        <Image
                                            src="/images/item/news/news-mark.svg"
                                            alt="マネーリペア | ご利用者インタビュー"
                                            width={207}
                                            height={24}
                                        />
                                    </div>
                                    <div className={"c-thumbnail--picter"}>
                                        <Image
                                            src="/images/item/480-320.png"
                                            alt="お客様との写真"
                                            width={415}
                                            height={277}
                                        />
                                    </div>
                                    <p className={"c-thumbnail--title"}>
                                        <span className={"s-M -b -color03 -ls-1"}>タイトルタイトルタイトルタイトル</span>
                                    </p>
                                    <p className={"c-thumbnail--subTitle s-SS -b -color03 -ls-1"}>サブタイトルサブタイトル</p>
                                </div>
                                {/* テキストエリア */}
                                <div className={"c-date mgb2 mgb1s"}>
                                    <ul className={"c-date__lists c-flex -col2"}>
                                        <li className={"c-date__item"}>
                                            <p className="s-M -s16 -left -b -ls-2">2024.11.18</p>
                                        </li>
                                        <li className={"c-date__item"}>
                                            <ul className={"c-post--category__lists c-flex -h-cen"}>
                                                <li className={"c-post--category__item"}>
                                                    <p>#カテゴリー01</p>
                                                </li>
                                                <li className={"c-post--category__item"}>
                                                    <p>#カテゴリー01</p>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <h3 className={"c-post--title s-M -s14 -left -b -ls-1"}>こんな福利厚生今までなかった...</h3>
                            </Link>
                        </li>
                        <li className={"articleItem"}>
                            <Link href="single-information.html" className={"c-post--link"}>
                                {/* バナー風画像 */}
                                <div className={"c-thumbnail -news mgb3 mgb3s"}>
                                    <div className={"imgBox"}>
                                        <Image
                                            src="/images/item/news/news-thumbnail.png"
                                            alt="企業1"
                                            width={415}
                                            height={233}
                                        />
                                    </div>
                                    <div className={"c-thumbnail--cover"}>
                                        <span className={"c-thumbnail--cover__text"}>詳細を見る</span>
                                    </div>
                                    <div className={"c-thumbnail--mark"}>
                                        <Image
                                            src="/images/item/news/news-mark.svg"
                                            alt="マネーリペア | ご利用者インタビュー"
                                            width={207}
                                            height={24}
                                        />
                                    </div>
                                    <div className={"c-thumbnail--picter"}>
                                        <Image
                                            src="/images/item/480-320.png"
                                            alt="お客様との写真"
                                            width={415}
                                            height={277}
                                        />
                                    </div>
                                    <p className={"c-thumbnail--title"}>
                                        <span className={"s-M -b -color03 -ls-1"}>タイトルタイトルタイトルタイトル</span>
                                    </p>
                                    <p className={"c-thumbnail--subTitle s-SS -b -color03 -ls-1"}>サブタイトルサブタイトル</p>
                                </div>
                                {/* テキストエリア */}
                                <div className={"c-date mgb2 mgb1s"}>
                                    <ul className={"c-date__lists c-flex -col2"}>
                                        <li className={"c-date__item"}>
                                            <p className="s-M -s16 -left -b -ls-2">2024.11.18</p>
                                        </li>
                                        <li className={"c-date__item"}>
                                            <ul className={"c-post--category__lists c-flex -h-cen"}>
                                                <li className={"c-post--category__item"}>
                                                    <p>#カテゴリー01</p>
                                                </li>
                                                <li className={"c-post--category__item"}>
                                                    <p>#カテゴリー01</p>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <h3 className={"c-post--title s-M -s14 -left -b -ls-1"}>こんな福利厚生今までなかった...</h3>
                            </Link>
                        </li>
                    </ul>
                </div>
            </li>
            {/* サイドバー */}
            <li className={"singleItem"}>
                <div className={"c-sideber"}>
                    {/* 検索窓 */}
                    {/* <div className={"c-sideber--search"}>
                        <form method="get" id="search" action="">
                            <input  id="sbox1" name="search" type="text" placeholder="キーワードを入力" />
                            <button id="sbtn1" type="submit" value="検索">検索</button>
                        </form>
                    </div> */}
                    {/* 目次 */}
                    <div className={"tb-pc c-card -t03 mgb10 mgb10s"}>
                        <h2>目次</h2>
                        <ul className={"c-card-lists -h2-lists"}>
                            <li className={"c-card-item"}>
                                <Link href="#detail01" className={"c-link -mokuji -b -ls-1 -lh-1_5"}>h2タグh2タグh2タグh2タグ</Link>
                            </li>
                            <li className={"c-card-item"}>
                                <Link href="#detail02" className={"c-link -mokuji -b -ls-1 -lh-1_5"}>h2タグh2タグh2タグh2タグh2タグ</Link>
                                <ul className={"c-card-lists -h3-lists"}>
                                    <li className={"c-card-item"}>
                                        <Link href="#detail02-01" className={"c-link -mokuji -ls-1 -lh-1_5"}>h3タグh3タグh3タグh3タグh3タグh3タグh3タグh3タグ</Link>
                                    </li>
                                    <li className={"c-card-item"}>
                                        <Link href="#detail02-02" className={"c-link -mokuji -ls-1 -lh-1_5"}>h3タグh3タグh3タグ</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className={"c-card-item"}>
                                <Link href="#detail03" className={"c-link -mokuji -b -ls-1 -lh-1_5"}>h2タグh2タグh2タグ</Link>
                            </li>
                            <li className={"c-card-item"}>
                                <Link href="#detail03" className={"c-link -mokuji -b -ls-1 -lh-1_5"}>h2タグh2タグh2タグ</Link>
                            </li>
                        </ul>
                    </div>
                    {/* cta */}
                    <div className={"c-sideber--ctaArea mgb15 mgt7s mgb10s"}>
                        <h2 className={"c-sideber--title -contact -en-color03 -b-btm mgb5"}>
                            資料請求&お問い合わせ
                        </h2>
                        {/* <form action="" className={"c-form -sideber"}> */}
                            <table className={"mgb5 mgb5s"}>
                                <tbody>
                                    <tr>{/* 会社名 */}
                                        {/* <th className={"required s-M -s14 -b -ls-2"}><span>会社名</span></th>
                                        <td><input id="company" type="text" name="company" value="" placeholder="株式会社インプレーム" />
                                        </td> */}
                                    </tr>
                                    <tr>{/* ご担当者名 */}
                                        {/* <th className={"required s-M -s14 -b -ls-2"}><span>ご担当者名</span></th>
                                        <td><input id="name" type="text" name="name" value="" placeholder="インプレーム 太郎"/>
                                        </td> */}
                                    </tr>
                                    <tr>{/* 電話番号  */}
                                        {/* <th className={"required s-M -s14 -b -ls-2"}><span>電話番号</span></th>
                                        <td><input id="tel" type="text" name="tel" value="" placeholder="03-1234-5678" />
                                        </td> */}
                                    </tr>
                                    <tr>{/* メールアドレス */}
                                        {/* <th className={"required s-M -s14 -b -ls-2"}><span>メールアドレス</span></th>
                                        <td><input id="email" type="text" name="email" value="" placeholder="sample@impreme.jp" />
                                        </td> */}
                                    </tr>
                                    <tr>{/* お問い合わせ内容 */}
                                        {/* <th className={"required s-M -s14 -b -ls-2 -lh-1_5"}><span>お問い合わせやご質問など</span></th>
                                        <td><textarea id="message" name="contact" cols="30" rows="10" placeholder="お問い合わせ内容を入力してください。"></textarea>
                                        </td> */}
                                    </tr>
                                </tbody>
                            </table>
                            {/* 個人情報の取り扱いについて */}
                            {/* <h2 className={"s-S -b -ls-2 mgb1 mgb2s"}>個人情報の取り扱いについて</h2> */}
                            {/* <p  className={"s-S -lh-1_5 mgb2 mgb5s"}>以下の個人情報保護方針によくお読みになり、同意の上、お問い合わせに進んでください。</p> */}
                            
                            <div className={"c-form--privacyPolicy"}>
                                <h3 className={"s-ML -b -left -ls-2"}>プライバシーポリシー</h3>
                                <div className={"c-form--inner"}>
                                    <p className={"mgb3 mgb3s"}>　当社は、個人情報保護の重要性に鑑み、また、保険代理業に対する社会の信頼をより向上させるため、個人情報の保護に関する法律（個人情報保護法）その他の関連法令・ガイドライン等を遵守して、個人情報を適正に取り扱うとともに、安全管理について適切な措置を講じます。</p>
                                    <p className={"mgb3 mgb3s"}>　当社は、個人情報の取扱いが適正に行われるように従業者への教育・指導を徹底し、適正な取扱いが行われるよう取組んでまいります。また、個人情報の取扱いに関する苦情・相談に迅速に対応し、当社の個人情報の取扱い及び安全管理に係る適切な措置については、適宜見直し改善いたします。</p>
                                    <div className={"c-form--privacyPolicy__detail"}>
                                        <h4>１.個人情報の取得・利用</h4>
                                        <p>　当社は、業務上必要な範囲内かつ、適法で公正な手段により個人情報（氏名・生年月日・住所・性別・電話番号・職業・健康状態等）を取得・利用します。主な取得方法には、記入いただいた書面による取得の他、電話・その他通信媒体等を通じた取得があります。</p>										
                                    </div>
                                    <div className={"c-form--privacyPolicy__detail"}>
                                        <h4>２.個人情報の利用目的</h4>
                                        <p>
                                            <span className={"-lh-1_5 mgb3 mgb3s"}>　当社は、取得した個人情報を、保険会社より委託を受けた保険募集業務の遂行に必要な範囲で利用します。また、それら以外の当社他業務にて利用する場合にはご本人の同意を取得いたします。当社における具体的な個人情報の利用目的は次のとおりです。</span>
                                            <span className={"-lh-1_5 mgb3 mgb3s"}>　なお、この利用目的の達成に必要な範囲を超えて個人情報を取扱う場合、および個人情報を第三者へ提供する場合は、法令で定める場合を除き、原則として書面によりご本人の同意をいただいたうえで行います。</span>
                                            <span className={"-lh-1_5 mgb3 mgb3s"}>
                                                ・当社が委託を受ける保険会社の各種商品やサービスの案内・提供･維持管理<br />
                                                ・その他、上記に付随して保険会社より委託を受けた業務<br />
                                                ・当社のその他の業務に付随するもの
                                            </span>
                                            <span className={"-lh-1_5 mgb3 mgb3s"}>　上記の利用目的を変更する場合には、その内容をご本人に対し、原則として書面等により通知し、またはホームページ（アドレス）等により公表します。当社に対し保険募集業務の委託を行う保険会社の利用目的は、それぞれの会社のホームページ（下記）に記載してあります。</span>
                                            <span className={"-lh-1_5 mgb3 mgb3s"}>
                                                ■　オリックス生命保険株式会社　<br className={"sp"} /><Link href="https://www.orixlife.co.jp/" target="_blank">https://www.orixlife.co.jp/</Link><br /><br className={"sp"} />
                                                ■　第一生命保険株式会社　<br className={"sp"} /><Link href="https://www.dai-ichi-life.co.jp/" target="_blank">https://www.dai-ichi-life.co.jp/</Link><br /><br className={"sp"} />
                                                ■　ネオファースト生命保険株式会社　<br className={"sp"} /><Link href="https://neofirst.co.jp/" target="_blank">https://neofirst.co.jp/</Link><br /><br className={"sp"} />
                                                ■　第一フロンティア生命保険株式会社　<br className={"sp"} /><Link href="https://www.d-frontier-life.co.jp/" target="_blank">https://www.d-frontier-life.co.jp/</Link><br /><br className={"sp"} />
                                                ■　日本生命保険相互会社　<br className={"sp"} /><Link href="https://www.nissay.co.jp/" target="_blank">https://www.nissay.co.jp/</Link><br /><br className={"sp"} />
                                                ■　はなさく生命保険株式会社　<br className={"sp"} /><Link href="https://www.life8739.co.jp/" target="_blank">https://www.life8739.co.jp/</Link><br /><br className={"sp"} />
                                                ■　明治安田生命保険相互会社　<br className={"sp"} /><Link href="https://www.meijiyasuda.co.jp/" target="_blank">https://www.meijiyasuda.co.jp/</Link><br /><br className={"sp"} />
                                                ■　エヌエヌ生命保険株式会社　<br className={"sp"} /><Link href="https://www.nnlife.co.jp/" target="_blank">https://www.nnlife.co.jp/</Link><br /><br className={"sp"} />
                                                ■　マニュライフ生命保険会社　<br className={"sp"} /><Link href="https://www.manulife.co.jp" target="_blank">https://www.manulife.co.jp</Link><br /><br className={"sp"} />
                                                ■　ジブラルタ生命保険株式会社　<br className={"sp"} /><Link href="https://www.gib-life.co.jp/" target="_blank">https://www.gib-life.co.jp/</Link><br /><br className={"sp"} />
                                                ■　FWD生命保険株式会社　<br className={"sp"} /><Link href="https://www.fwdlife.co.jp/" target="_blank">https://www.fwdlife.co.jp/</Link><br /><br className={"sp"} />
                                                ■　アクサ生命保険株式会社　<br className={"sp"} /><Link href="https://www.axa.co.jp/" target="_blank">https://www.axa.co.jp/</Link><br /><br className={"sp"} />
                                                ■　チューリッヒ生命保険株式会社　<br className={"sp"} /><Link href="https://www.zurichlife.co.jp/" target="_blank">https://www.zurichlife.co.jp/</Link><br /><br className={"sp"} />
                                                ■　ソニー生命保険株式会社　<br className={"sp"} /><Link href="https://www.sonylife.co.jp/" target="_blank">https://www.sonylife.co.jp/</Link><br /><br className={"sp"} />
                                                ■　あいおいニッセイ同和損害保険株式会社　<br className={"sp"} /><Link href="https://www.aioinissaydowa.co.jp/" target="_blank">https://www.aioinissaydowa.co.jp/</Link>
                                            </span>
                                        </p>
                                    </div>
                                    <div className={"c-form--privacyPolicy__detail"}>
                                        <h4>３.個人データの安全管理措置</h4>
                                        <p>当社は、取り扱う個人データの漏えい、滅失または毀損の防止その他の個人データの安全管理のため、安全管理に関する取扱規程等の整備および実施体制の整備等、十分なセキュリティ対策を講じるとともに、利用目的の達成に必要とされる正確性・最新性を確保するために適切な措置を講じています。</p>
                                    </div>
                                    <div className={"c-form--privacyPolicy__detail"}>
                                        <h4>４.個人データの第三者への提供</h4>
                                        <p>
                                            当社は、以下の場合を除き、ご本人の同意なく第三者に個人データを提供しません。<br /><br />
                                            ①法令に基づく場合<br />
                                            ②人の生命、身体又は財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき。<br />
                                            ③公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき。<br />
                                            ④国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼす恐れがあるとき。<br />
                                            ⑤「2.個人情報の利用目的」に定める目的の達成に必要な範囲において、委託先に提供する場合
                                        </p>
                                    </div>
                                    <div className={"c-form--privacyPolicy__detail"}>
                                        <h4>５.個人情報の取扱いの委託先管理</h4>
                                        <p>当社では、よりよいサービスをご提供するために、個人情報の取扱いを委託する場合があります。委託先の選定に際しては、委託先における個人情報の管理、秘密保持、再委託の制限、個人情報の漏えい防止等に関して、適切な取扱いがなされているかについて基準を定めて慎重に評価しています。また、委託先における個人情報の安全管理措置の実施状況を定期的に確認し、問題が認められる場合には改善を指導しています。</p>
                                    </div>
                                    <div className={"c-form--privacyPolicy__detail"}>
                                        <h4>６.個人情報の保存期間</h4>
                                        <p>当社は、「2.個人情報の利用目的」に定める目的を達成するために合理的に必要とされる期間、または法令に基づいて必要な期間、個人情報を保持します。個人情報が不要になった場合は、速やかに削除します。</p>
                                    </div>
                                    <div className={"c-form--privacyPolicy__detail"}>
                                        <h4>７.当社の保有個人データに対する請求等の手続きについて</h4>
                                        <p>当社は、ご本人に関する保有個人データの開示・訂正等・利用停止等のご請求があった場合は、ご本人であることの確認を行った上で、適切に対応させていただきます。具体的な請求手続につきましては、以下のお問い合わせ先までご連絡ください。</p>
                                    </div>
                                    <div className={"c-form--privacyPolicy__detail"}>
                                        <h4>８.当社に対するご照会</h4>
                                        <p>個人情報の開示・訂正・追加・削除・利用の停止等に関するご請求や、当社の安全管理措置の内容、その他個人情報の取扱いに関する各種お問合せは、下記窓口にお問い合せください。また保険事故に関するご照会については下記お問い合わせ窓口のほか、保険会社の窓口にお問い合せください。ご照会者がご本人であることをご確認させていただいたうえで、対応させていただきますので、あらかじめご了承願います。</p>
                                    </div>
                                    <div className={"c-form--privacyPolicy__detail"}>
                                        <h4>９.事業者の名称、住所、代表者の氏名</h4>
                                        <p>
                                            株式会社インプレーム<br />
                                            代表取締役社長 江本一郎<br />
                                            東京都千代田区岩本町2-19-9 丸栄5F<br />
                                            03-6264-7047<br />
                                            （受付時間：月曜日～土曜日 10時～19時）
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* 同意 */}
                            {/* <div id="chk_policy" className={"c-form--consent"}>
                                <p id="error">同意するにチェックを入れてください。</p>
                                <div className={"policyBox"}>
                                    <input type="checkbox" id="chkbox4" name="policy_doui" value="1" />
                                    <label className={"required"} htmlFor="chkbox4"><span>同意する</span></label>
                                </div>
                                <p className={"mgb5 mgb10s"}>入力内容をご確認のうえ、次の画面へ進んでください。</p>
                                <div className={"c-form--btn"}>
                                    <button type="submit" value="送信する" className={""} id="submit">内容確認画面へ</button>
                                </div>
                            </div> */}
        
                        {/* </form> */}
                    </div>
                </div>
            </li>
        </ul>
    )
}