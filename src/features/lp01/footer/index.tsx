import Image from "next/image";
import Link from "next/link";

export default function LpFooter() {
  return (
    <footer id="footer" className={"c-footer -bg-color02 pdt2 pdt5s"}>
      <div className={"c-footer-wrapper"}>
        {/* サイト内リンク */}
        <nav className={"c-fnav mgb3 mgb2s"}>
          <ul className={"c-fnav--lists__lp"}>
            {/* #sc02 */}
            <li className={"LpnavItem"}>
              <Link
                href="/lp#sc02"
                className={`c-fnav--link s-M -b -white -ls-2 -ws-n`}
              >
                マネリペとは
              </Link>
            </li>
            {/* #sc03 */}
            <li className={"LpnavItem"}>
              <Link
                href="/lp#sc03"
                className={`c-fnav--link -archive s-M -b -white -ls-2 -ws-n`}
              >
                サービス内容
              </Link>
            </li>
            {/* #sc04 */}
            <li className={"LpnavItem"}>
              <Link
                href="/lp#sc04"
                className={`c-fnav--link s-M -b -white -ls-2 -ws-n`}
              >
                選ばれる理由
              </Link>
            </li>
            {/* #sc07 */}
            {/* <li className={"LpnavItem"}>
                            <Link href="/lp#sc07" className={`c-fnav--link s-M -b -white -ls-2 -ws-n`}>
                                導入事例
                            </Link>
                        </li> */}
            {/* #Q&A */}
            <li className={"LpnavItem"}>
              <Link
                href="/lp#Q&A"
                className={`c-fnav--link s-M -b -white -ls-2 -ws-n`}
              >
                Q&A
              </Link>
            </li>
          </ul>
        </nav>
        {/* ロゴ */}
        <div className={"logo -lp mgb3 mgb5s"}>
          <Link href="/lp#top" className={"c-link -img"}>
            <Image
              src="/images/logo/mp/money-repair-logo_w.svg"
              alt="福利厚生で金融教育するならマネリペ"
              width={200}
              height={50}
              priority
            />
          </Link>
        </div>
      </div>
      <div className={"c-footer-copyright"}>
        <p className={"s-S -center -white -ls-2"}>
          <small>© 2016-2025 株式会社インプレーム All rights reserved.</small>
        </p>
      </div>
    </footer>
  );
}
