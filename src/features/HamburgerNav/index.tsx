import Link from "next/link";

export default function HamburgerNav() {
    return (
        <nav className={"c-hb-nav sp"}>
            <input className={"c-hb-nav__cheakbox"} id="c-hb-nav__checkbox" type="checkbox"/>
            <label className={"c-hb-nav__button"}  htmlFor="c-hb-nav__checkbox">
                <span className={"s-SS -b -center -white"}>MENU</span>
            </label>
            <label className={"c-hb-nav__cheakbox c-hb-nav__close"} htmlFor="c-hb-nav__checkbox"></label>
            <div className={"c-hb-nav__content"}>
                <ul className={"c-hb-nav__lists"}>
                    <li className={"hbNavItem "}>
                        <Link className={"-active"} href="/"><span className={"s-ML -s20 -b -white -ls-2 pdr5 pdr4s"}>TOP</span></Link>
                    </li>
                    <li className={"hbNavItem "}>
                        <Link className={""} href="/service"><span className={"s-ML -s20 -b -white -ls-2 pdr5 pdr4s"}>マネーリペアの特徴</span></Link>
                    </li>
                    <li className={"hbNavItem c-borderBtm -dotted "}>
                        <Link className={"mgb5 mgb5s"} href="/interview"><span className={"s-ML -s20 -b -white -ls-2 pdr5 pdr4s"}>ご利用者の声</span></Link>
                        <ul className={"c-flex -col2 -jc-end"}>
                            <li className={"flexItem mgb5 mgb5s"}><Link className={"s-M -s14 -b -white -center"} href="">カテゴリー01</Link></li>
                            <li className={"flexItem mgb5 mgb5s"}><Link className={"s-M -s14 -b -white -center"} href="">カテゴリー01</Link></li>
                            <li className={"flexItem mgb5 mgb5s"}><Link className={"s-M -s14 -b -white -center"} href="">カテゴリー01</Link></li>
                            <li className={"flexItem mgb5 mgb5s"}><Link className={"s-M -s14 -b -white -center"} href="">カテゴリー01</Link></li>
                            <li className={"flexItem mgb5 mgb5s"}><Link className={"s-M -s14 -b -white -center"} href="">カテゴリー01</Link></li>
                            <li className={"flexItem mgb5 mgb5s"}><Link className={"s-M -s14 -b -white -center"} href="">カテゴリー01</Link></li>
                        </ul>
                    </li>
                    <li className={"hbNavItem c-borderBtm -dotted "}>
                        <Link className={"mgb5 mgb5s"} href="/information"><span className={"s-ML -s20 -b -white -ls-2 pdr5 pdr4s"}>お役立ち情報</span></Link>
                        <ul className={"c-flex -col2 -jc-end"}>
                            <li className={"flexItem mgb5 mgb5s"}><Link className={"s-M -s14 -b -white -center"} href="">カテゴリー01</Link></li>
                            <li className={"flexItem mgb5 mgb5s"}><Link className={"s-M -s14 -b -white -center"} href="">カテゴリー01</Link></li>
                            <li className={"flexItem mgb5 mgb5s"}><Link className={"s-M -s14 -b -white -center"} href="">カテゴリー01</Link></li>
                            <li className={"flexItem mgb5 mgb5s"}><Link className={"s-M -s14 -b -white -center"} href="">カテゴリー01</Link></li>
                            <li className={"flexItem mgb5 mgb5s"}><Link className={"s-M -s14 -b -white -center"} href="">カテゴリー01</Link></li>
                            <li className={"flexItem mgb5 mgb5s"}><Link className={"s-M -s14 -b -white -center"} href="">カテゴリー01</Link></li>
                        </ul>
                    </li>
                    <li className={"hbNavItem "}>
                        <Link className={""} href="/download">
                            <span className={"s-ML -s20 -b -white -ls-2 pdr5 pdr4s"}>資料請求</span>
                        </Link>
                    </li>
                    <li className={"hbNavItem "}>
                        <Link className={""} href="/contact">
                            <span className={"s-ML -s20 -b -white -ls-2 pdr5 pdr4s"}>お問い合わせ</span>
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
}