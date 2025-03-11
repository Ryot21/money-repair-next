// UIレンダリングとインタラクションを管理するクライアントコンポーネント
"use client";

import Image from "next/image";
import Link from "next/link";
import Iconbutton from "@/components/elements/button/IconButton";
import HeaderScroll from "./HeaderScroll";


// クライアントコンポーネントとしてHeaderを実装
export default function LpHeader(){

  return (
    <>
      <HeaderScroll />
      <header id="js-header" className="c-header -c-color02">
        <div className={"c-header-wrapper"}>
          <ul className={"c-header-lists -jc-sb -h-cen"}>
            {/* Header > ロゴ */}
            <li className={"headerItem flexItem -logoArea"}>
              <div className={"logo"}>
                <Link href="/lp#top" className={"c-link -img"}>
                  <Image
                    src="/images/logo/mp/money-repair-logo_w.svg"
                    alt="福利厚生で金融教育するならマネーリペア"
                    width={200}
                    height={50}
                    priority
                  />
                </Link>
              </div>
            </li>
            {/* Header > ナビゲーション */}
            <li className={"headerItem flexItem -navArea tb-pc"}>
              <div className={"c-navAreaBox"}>
                <ul className={"c-navlists"}>
                  {/* サイト内リンク */}
                  <li className={"navItem -pageLink"}>
                    <nav className={"c-hnav"}>
                      <ul className={"c-hnav-lists"}>
                        {/* #sc02 */}
                        <li className={"hnavItem"}>
                          <Link href="#sc02" className={`c-hnav--link s-M -b -white -ls-2 -ws-n`}>
                            マネーリペアとは
                          </Link>
                        </li>
                        {/* #sc03 */}
                        <li className={"hnavItem"}>
                          <Link href="#sc03" className={`c-hnav--link s-M -b -white -ls-2 -ws-n`}>
                            サービス内容
                          </Link>
                        </li>
                        {/* #sc04 */}
                        <li className={"hnavItem"}>
                          <Link href="#sc04" className={`c-hnav--link s-M -b -white -ls-2 -ws-n`}>
                            選ばれる理由
                          </Link>
                        </li>
                        {/* #sc07 */}
                        <li className={"hnavItem"}>
                          <Link href="#sc07" className={`c-hnav--link s-M -b -white -ls-2 -ws-n`}>
                            導入事例
                          </Link>
                        </li>
                        {/* #Q&A */}
                        <li className={"hnavItem"}>
                          <Link href="#Q&A" className={`c-hnav--link s-M -b -white -ls-2 -ws-n`}>
                            Q&A
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </li>
                  {/* お問い合せ */}
                  <li className={"navItem -cvBtn -cv03"}>
                    <Iconbutton href="#cta">
                      お問い合わせ
                      <svg
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 39.69 39.69"
                      >
                        <path
                          className={"c-link -svg"}
                          d="M.96,6.87h37.81c.5,0,.92.41.92.92v24.06c0,.55-.41.96-.92.96H.96C.41,32.81,0,32.4,0,31.85V7.79C0,7.29.41,6.87.96,6.87h0ZM25.07,22.59c-.46-.32-.5-.92-.18-1.33.32-.41.87-.5,1.28-.18l11.64,8.89V9.53l-17.41,11.04c-.28.23-.73.27-1.05.05L1.88,9.44v20.62l11.82-8.98c.41-.32,1.01-.23,1.33.18s.23,1.01-.18,1.33L3.85,30.93h32.12l-10.91-8.34ZM4.31,8.75l15.53,9.94,15.67-9.94H4.31Z"
                        />
                      </svg>
                    </Iconbutton>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}
