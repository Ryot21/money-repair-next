import Image from "next/image";
import LogoMark from "@/components/lottie/LogoMark";

export default function Page() {
  return (
    <div>
      {/* マネリペとは */}
      <div className={"c-contents--introduction  pdt5s mgb5s"}>
        {/* ロゴ */}
        <LogoMark />
        <h2 className={"c-contents--title -center -b-btm -ls-2 mgb5 mgb10s"}>
          {/* マネリペ<span>とは</span> */}
          <div className="imgBox c-img -logo">
            <Image
              src="/images/logo/mp/money-repair-logo_b03.svg"
              alt="マネリペ"
              width={210}
              height={60}
            />
          </div>
          <span className="s-ML -left -b -ls-2 pdl1 pdl2s">とは</span>

        </h2>
        <p className={"s-ML -s12 -center -ls-2 -lh-2"}>
          金融のプロが貴社の従業員に対して
          <br className={"sp"} />
          <span className={"s-ML -s14 -b"}>金融リテラシーの向上</span>を支援し、
          <br className={"tb-pc"} />
          将来に向けた
          <br className={"sp"} />
          <span className={"s-ML -s14 -b"}>お金の不安を解決するサービス</span>
          です！！
        </p>
      </div>
      {/* POINT */}
      <div className={"c-contents pdt10 pdt20s mgb5s"}>
        <h2 className={"c-contents--title -center -en-color03 -b-btm -ls-2 mgb5 mgb10s"}>
          金融リテラシー<span>を</span>習得
          <span>して</span>
          <br />
          純資産<span>を</span>増やすこと
          <span>が</span>可能
          <span>に</span>
        </h2>
        <p className={"s-ML -s12 -center -ls-2 -lh-2"}>
          金融リテラシーという知的財産を付けることにより、
          <br />
          <span className={"s-ML -s14 -b"}>可処分所得を増やすことが出来る</span>
          と同時に、
          <br />
          有価証券などで運用する事で
          <br className={"sp"} />
          <span className={"s-ML -s14 -b"}>
            純資産を伸ばすことが期待できます。
          </span>
        </p>
      </div>
      {/* テーブル */}
      <div className={"c-contents pdt10 pdt10s mgb5s"}>
        <div className={"c-contents--inner"}>
          <table className={"c-table"}>
            <thead>
              <tr className={"head"}>
                <th></th>
                <th>
                  <Image
                    className={"w70 w100s"}
                    src="/images/logo/mp/money-repair-logo_w.svg"
                    alt="マネリペ"
                    width={202}
                    height={42}
                  />
                </th>
                <th className={"s-ML -s12 -b -ls-1 -lh-1_5"}>
                  他社類似
                  <br className={"sp"} />
                  サービス
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={"s-ML -s12 -b -ls-1"}>節税に関する相談</td>
                <td className={"s-M -s10 -b -ls-1 -lh-1_5"}>
                  税理士法人を使った
                  <br className={"tb-pc"} />
                  <span className={"s-ML -s10 -b -color03"}>
                    即効性のある手取りUP
                  </span>
                </td>
                <td className={"s-M -s10 -b -ls-1 -lh-1_5"}>
                  4つ全てをカバーしている
                  <br className={"tb-pc"} />
                  サービスはなく、
                  <br className={"tb-pc"} />
                  問題解決手段が乏しい
                </td>
              </tr>
              <tr>
                <td className={"s-ML -s12 -b -ls-1"}>
                  トータル
                  <br className={"sp"} />
                  サポート
                </td>
                <td className={"s-M -s10 -b -ls-1 -lh-1_5"}>
                  有資格者による
                  <br className={"tb-pc"} />
                  税金・不動産・保険・有価証券の
                  <br className={"tb-pc"} />
                  <span className={"s-ML -s10 -b -color03"}>
                    ワンストップ相談
                  </span>
                  が可能！
                </td>
                <td className={"s-M -s10 -b -ls-1 -lh-1_5"}>
                  税理士法人がいないため
                  <br className={"tb-pc"} />
                  税金相談ができない
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* サービス内容一覧 */}
      <div className={"c-contents pdt15 pdt20s mgb10 mgb5s"}>
        <div className={"c-contents--inner"}>
          {/* 01 */}
          <div className={"c-contents -serviceBox -item01"}>
            <h2 className={"titleArea s-L -b -ls-3 -ls-2_s"}>
              SERVICE<span className={"s-LL -b pdl5 pdl3s"}>1</span>
            </h2>
            <div className={"textArea"}>
              <h3
                className={"c-service--title s-L -b -left -ls-2 mgb10 mgb10s"}
              >
                年4回<span className={"s-ML -b"}>の</span>金融勉強会
              </h3>
              <p className={"s-M -b -left -ls-2 -lh-1_5 mgb5 mgb5s"}>
                弊社専属ファイナンシャルプランナーが金融の基礎知識について、貴社に伺い
                <span className={"s-M -b -color03"}>『勉強会』</span>
                を行います。勉強会は3回が必修、4回目はオーダーメイド式で開催します。
              </p>
              <p className={"s-M -b -left -ls-2 -lh-1_5"}>
                2年目以降はアンケート調査を行い、
                <span className={"s-M -b -color03"}>
                  ご要望の多かったコンテンツ
                </span>
                について勉強会を開催します。
              </p>
            </div>
            <div className={"picArea"}>
              <div className={"imgBox c-img -radius -right -p02"}>
                <Image
                  src="/images/mv/mv-04.jpg"
                  alt="金融勉強会の実際の画像"
                  width={1000}
                  height={667}
                />
              </div>
            </div>
          </div>
          {/* 02 */}
          <div className={"c-contents -serviceBox -item02 mgt10 mgt20s"}>
            <h2 className={"titleArea s-L -b -ls-3 -ls-2_s"}>
              SERVICE<span className={"s-LL -b pdl5 pdl3s"}>2</span>
            </h2>
            <div className={"textArea"}>
              <h3
                className={"c-service--title s-L -b -left -ls-2 mgb10 mgb10s"}
              >
                専属FP<span className={"s-ML -b"}>の</span>相談窓口
              </h3>
              <p className={"s-M -b -left -ls-2 -lh-1_5 mgb5 mgb5s"}>
                弊社専属ファイナンシャルプランナーを担当としてお付けするので、どんなタイミングでも
                <span className={"s-M -b -color03"}>24時間365日</span>
                お気軽にご相談いただけます。
              </p>
              <p className={"s-M -b -left -ls-2 -lh-1_5"}>
                また、従業員様の2親等までのご家族様まで、
                <span className={"s-M -b -color03"}>無料</span>
                でご相談いただけます。
              </p>
            </div>
            <div className={"picArea"}>
              <div className={"imgBox c-img -radius -right -p03"}>
                <Image
                  src="/images/mv/mv-05.jpg"
                  alt="実際の相談風景"
                  width={1000}
                  height={667}
                />
              </div>
            </div>
          </div>
          {/* 03 */}
          <div className={"c-contents -serviceBox -item03 mgt10 mgt20s"}>
            <h2 className={"titleArea s-L -b -ls-3 -ls-2_s"}>
              SERVICE<span className={"s-LL -b pdl5 pdl3s"}>3</span>
            </h2>
            <div className={"textArea"}>
              <h3
                className={"c-service--title s-L -b -left -ls-2 mgb10 mgb10s"}
              >
                資産管理システム<span className={"s-ML -b"}>の</span>ご提供
              </h3>
              <p className={"s-M -b -left -ls-2 -lh-1_5 mgb5 mgb5s"}>
                収支表の可視化、学習塾の費用や学費など、豊富なデータが搭載されているライフシミュレーションシステムを従業員様のみ
                <span className={"s-M -b -color03"}>全員無料</span>
                で発行いたします。
              </p>
              <p className={"s-SS -b -left -ls-2 -lh-1_5"}>
                ※個別契約の場合、1アカウントにつき別途5,000円かかります。
              </p>
            </div>
            <div className={"picArea"}>
              <div className={"imgBox c-img -radius -right -p05"}>
                <Image
                  src="/images/mv/mv-13.png"
                  alt="資産管理システムを紹介している画像"
                  width={1000}
                  height={667}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
