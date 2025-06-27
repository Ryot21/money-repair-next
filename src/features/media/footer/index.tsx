import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="footer"
      className={"c-footer -bg-color03 pdt3 pdt10s pdb3 pdb5s"}
    >
      <div className={"c-footer-wrapper"}>
        <ul className={"c-flex -footer -jc-sb"}>
          <li className={"flexItem -logoArea"}>
            {/* ロゴ */}
            <div className={"logo mgb5 mgb10s"}>
              <Link className={"c-link -img"} href="/">
                <Image
                  src="images/logo/mp/money-repair-logo_w.svg"
                  alt="マネリペ"
                  width={250}
                  height={100}
                />
              </Link>
            </div>
            {/* サイトマップ */}
            <nav className={"siteMap c-fnav mgb10s"}>
              <ul className={"c-flex -jc-st -h-cen"}>
                <li className={"navItem"}>
                  <Link
                    className={"c-fnav--link s-SS -s12 -white -ls-1 -lh-1_5"}
                    href="/company"
                  >
                    運営会社
                  </Link>
                </li>
                <li className={"navItem"}>
                  <Link
                    className={"c-fnav--link s-SS -s12 -white -ls-1 -lh-1_5"}
                    href="/rules"
                  >
                    利用規約
                  </Link>
                </li>
                <li className={"navItem"}>
                  <Link
                    className={"c-fnav--link s-SS -s12 -white -ls-1 -lh-1_5"}
                    href="/solicitation-policy"
                  >
                    勧誘方針
                  </Link>
                </li>
                <li className={"navItem"}>
                  <Link
                    className={"c-fnav--link s-SS -s12 -white -ls-1 -lh-1_5"}
                    href="/privacy-policy"
                  >
                    プライバシーポリシー
                  </Link>
                </li>
              </ul>
            </nav>
          </li>
          <li className={"flexItem -snsArea"}>
            <ul className={"snsBox c-flex -sns -jc-sb -h-cen mgb5 mgb10s"}>
              <li className={"flexItem -snsLogoArea -x"}>
                <Link className={"c-link -img"} href="">
                  <Image
                    src="/images/logo/sns/x.svg"
                    alt="公式X"
                    width={250}
                    height={100}
                  />
                </Link>
              </li>
              <li className={"flexItem -snsLogoArea"}>
                <Link
                  className={"c-link -img"}
                  href="https://www.facebook.com/profile.php?id=61573725519762"
                >
                  <Image
                    src="/images/logo/sns/facebook.svg"
                    alt="公式Facebook"
                    width={250}
                    height={100}
                  />
                </Link>
              </li>
              <li className={"flexItem -snsLogoArea"}>
                <Link
                  className={"c-link -img"}
                  href="https://www.instagram.com/money.repair/"
                >
                  <Image
                    src="images/logo/sns/Instagram.svg"
                    alt="公式Instagram"
                    width={250}
                    height={100}
                  />
                </Link>
              </li>
              <li className={"flexItem -snsLogoArea"}>
                <Link
                  className={"c-link -img"}
                  href="https://www.youtube.com/@moneyrepair"
                >
                  <Image
                    src="/images/logo/sns/youtube.svg"
                    alt="公式YouTube"
                    width={250}
                    height={100}
                  />
                </Link>
              </li>
            </ul>
            <p className={"copyright s-SS -s12 -white -center_s -right"}>
              © 2016-2025 株式会社インプレーム All rights reserved.
            </p>
          </li>
        </ul>
      </div>
    </footer>
  );
}
