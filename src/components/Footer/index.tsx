
import Image  from "next/image";
import "@/styles/globals.scss";


export default function Footer() {
    return (
        <footer id="footer" className={"c-footer -bg-color03 pdt5 pdt10s pdb5 pdb5s"}>
            <div className={"c-footer-wrapper"}>
                <ul className={"c-flex -footer -jc-sb"}>
                    <li className={"flexItem -logoArea"}>
                        {/* ロゴ */}
                        <div className={"logo mgb5 mgb10s"}>
                            <a className={"c-link -img"} href="https://money-repair.jp">
                                <Image
                                    src="images/logo/mp/money-repair-logo_black.svg"
                                    alt="マネーリペア"
                                    width={250}
                                    height={100}
                                />
                            </a>
                        </div>
                        {/* サイトマップ */}
                        <nav className={"siteMap c-fnav mgb10s"}>
                            <ul className={"c-flex -jc-st -h-cen"}>
                                <li className={"navItem"}><a className={"c-fnav--link s-SS -s12 -white -ls-1 -lh-1_5"} href="https://impreme.jp/">会社概要</a></li>
                                <li className={"navItem"}><a className={"c-fnav--link s-SS -s12 -white -ls-1 -lh-1_5"} href="">個人情報の取り扱いについて</a></li>
                                <li className={"navItem"}><a className={"c-fnav--link s-SS -s12 -white -ls-1 -lh-1_5"} href="">利用条件</a></li>
                                <li className={"navItem"}><a className={"c-fnav--link s-SS -s12 -white -ls-1 -lh-1_5"} href="">個人情報保護方針</a></li>
                                <li className={"navItem"}><a className={"c-fnav--link s-SS -s12 -white -ls-1 -lh-1_5"} href="">情報セキュリティ基本方針</a></li>
                                <li className={"navItem"}><a className={"c-fnav--link s-SS -s12 -white -ls-1 -lh-1_5"} href="">プライバシーポリシー</a></li>
                            </ul>
                        </nav>
                    </li>
                    <li className={"flexItem -snsArea"}>
                        <ul className={"snsBox c-flex -sns -jc-sb mgb5 mgb10s"}>
                            <li className={"flexItem -snsLogoArea"}>
                                <a className={"c-link -img"} href="">
                                    <Image
                                        src="images/logo/sns/x.svg"
                                        alt="公式X"
                                        width={250}
                                        height={100}
                                    />
                                </a>
                            </li>
                            <li className={"flexItem -snsLogoArea"}>
                                <a className={"c-link -img"} href="">
                                    <Image
                                        src="images/logo/sns/facebook.svg"
                                        alt="公式Facebook"
                                        width={250}
                                        height={100}
                                    />
                                </a>
                            </li>
                            <li className={"flexItem -snsLogoArea"}>
                                <a className={"c-link -img"} href="">
                                    <Image
                                        src="images/logo/sns/Instagram.svg"
                                        alt="公式Instagram"
                                        width={250}
                                        height={100}
                                    />
                                </a>
                            </li>
                        </ul>
                        <p className={"copyright s-SS -s12 -white -center_s -right"}>© 2016-2024 株式会社インプレーム All rights reserved.</p>
                    </li>  
                </ul>
            </div>
        </footer>
    );
}