import Image from "next/image";
import PageButtonLink from "@/components/Parts/Button/PageButton";

export default function ContactBottom() {
  return (
    <div id="sc-contact" className={"c-contents pdb5 pdb10s"}>
      <div className={"c-contents--inner -bg-white -card"}>
        <h2
          className={"c-contents--title -contact -ls-1 -en-color03 pdb3 pdb10s"}
        >
          資料請求&お問い合わせ
        </h2>
        <p className={"c-contents--description s-S -s12 pdb3 pdb10s"}>
          貴社の<span className={"-b"}>福利厚生</span>に新たな価値を加え、
          <br />
          <span className={"b-text -y -f-gothic01 -b"}>
            従業員のご家族を含めた資産形成と経済力
          </span>
          を<br className={"sp"} />
          トータルサポートいたします。
          <br />
          <span className={"-b"}>『マネーリペア』をぜひご利用ください。</span>
        </p>
        {/* パンフレット・2024年版 */}
        <div className={"imgBox w80 w100s pdb3 pdb10s"}>
          <Image
            src="/images/item/pf-2024.png"
            alt="マネーリペア2024"
            width={1024}
            height={339}
          />
        </div>
        <div className={"c-contents--btnArea w80 w100s"}>
          <ul className={"c-flex -cvArea -jc-cen"}>
            <li className={"cvItem mgb5s"}>
              <p
                className={
                  "s-S -s12 -blur-b03 -f-gothic01 -center -ls-2 mgb2 mgb3s"
                }
              >
                <span className={"-f-gothic01 -b"}>お役立ち資料</span>はこちら
              </p>
              <PageButtonLink href="/contact?type=download">資料請求</PageButtonLink>
            </li>
            <li className={"cvItem"}>
              <p
                className={
                  "s-S -s12 -blur-b03 -f-gothic01 -center -ls-2 mgb2 mgb3s"
                }
              >
                お気軽にお問い合わせ下さい。
              </p>
              <PageButtonLink href="/contact?type=contact">お問い合わせ</PageButtonLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
