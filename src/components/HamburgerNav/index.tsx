import "@/styles/globals.scss";

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
                        <a className={"-active"} href="/"><span className={"s-ML -s20 -b -white -ls-2 pdr5 pdr4s"}>TOP</span></a>
                    </li>
                    <li className={"hbNavItem "}>
                        <a className={""} href="service.html"><span className={"s-ML -s20 -b -white -ls-2 pdr5 pdr4s"}>マネーリペアの特徴</span></a>
                    </li>
                    <li className={"hbNavItem c-borderBtm -dotted "}>
                        <a className={"mgb5 mgb5s"} href="archive-interview.html"><span className={"s-ML -s20 -b -white -ls-2 pdr5 pdr4s"}>ご利用者の声</span></a>
                        <ul className={"c-flex -col2 -jc-end"}>
                            <li className={"flexItem mgb5 mgb5s"}><a className={"s-M -s14 -b -white -center"} href="">カテゴリー01</a></li>
                            <li className={"flexItem mgb5 mgb5s"}><a className={"s-M -s14 -b -white -center"} href="">カテゴリー01</a></li>
                            <li className={"flexItem mgb5 mgb5s"}><a className={"s-M -s14 -b -white -center"} href="">カテゴリー01</a></li>
                            <li className={"flexItem mgb5 mgb5s"}><a className={"s-M -s14 -b -white -center"} href="">カテゴリー01</a></li>
                            <li className={"flexItem mgb5 mgb5s"}><a className={"s-M -s14 -b -white -center"} href="">カテゴリー01</a></li>
                            <li className={"flexItem mgb5 mgb5s"}><a className={"s-M -s14 -b -white -center"} href="">カテゴリー01</a></li>
                        </ul>
                    </li>
                    <li className={"hbNavItem c-borderBtm -dotted "}>
                        <a className={"mgb5 mgb5s"} href="archive-information.html"><span className={"s-ML -s20 -b -white -ls-2 pdr5 pdr4s"}>お役立ち情報</span></a>
                        <ul className={"c-flex -col2 -jc-end"}>
                            <li className={"flexItem mgb5 mgb5s"}><a className={"s-M -s14 -b -white -center"} href="">カテゴリー01</a></li>
                            <li className={"flexItem mgb5 mgb5s"}><a className={"s-M -s14 -b -white -center"} href="">カテゴリー01</a></li>
                            <li className={"flexItem mgb5 mgb5s"}><a className={"s-M -s14 -b -white -center"} href="">カテゴリー01</a></li>
                            <li className={"flexItem mgb5 mgb5s"}><a className={"s-M -s14 -b -white -center"} href="">カテゴリー01</a></li>
                            <li className={"flexItem mgb5 mgb5s"}><a className={"s-M -s14 -b -white -center"} href="">カテゴリー01</a></li>
                            <li className={"flexItem mgb5 mgb5s"}><a className={"s-M -s14 -b -white -center"} href="">カテゴリー01</a></li>
                        </ul>
                    </li>
                    <li className={"hbNavItem "}>
                        <a className={""} href="contact.html">
                            <span className={"s-ML -s20 -b -white -ls-2 pdr5 pdr4s"}>資料請求</span>
                        </a>
                    </li>
                    <li className={"hbNavItem "}>
                        <a className={""} href="contact.html">
                            <span className={"s-ML -s20 -b -white -ls-2 pdr5 pdr4s"}>お問い合わせ</span>
                        </a>
                    </li>

                </ul>
            </div>
        </nav>
    );
}