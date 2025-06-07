// UIレンダリングとインタラクションを管理するクライアントコンポーネント
"use client";

import Image from "next/image";
import Link from "next/link";
import Iconbutton from "@/components/elements/button/IconButton";
// import HeaderScroll from "./HeaderScroll";


// クライアントコンポーネントとしてHeaderを実装
export default function LpHeader(){

  return (
    <>
      {/* <HeaderScroll /> */}
      <header id="js-header" className="c-header">
        <div className={"c-header-wrapper"}>
          <ul className={"c-header-lists -jc-sb -h-cen"}>
            {/* Header > ロゴ */}
            <li className={"headerItem flexItem -logoArea"}>
              <div className={"logo"}>
                <Link href="/lp02#top" className={"c-link -img"}>
                  <Image
                    src="/images/logo/mp/money-repair-logo_b.svg"
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
                        {/* #sc04 */}
                        <li className={"hnavItem"}>
                          <Link href="/lp02#sc04" className={`c-hnav--link s-M -s13 -b -ls-1 -ws-n`}>
                            サービス内容
                          </Link>
                        </li>
                        {/* #sc08 */}
                        <li className={"hnavItem"}>
                          <Link href="/lp02#sc08" className={`c-hnav--link s-M -s13 -b -ls-1 -ws-n`}>
                            選ばれる理由
                          </Link>
                        </li>
                        {/* #interview */}
                        <li className={"hnavItem"}>
                          <Link href="/lp02#interview" className={`c-hnav--link s-M -b -s13 -ls-1 -ws-n`}>
                            導入事例
                          </Link>
                        </li>
                        {/* #Q&A */}
                        <li className={"hnavItem"}>
                          <Link href="/lp02#Q&A" className={`c-hnav--link s-M -s13 -b -ls-1 -ws-n`}>
                            よくある質問
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </li>
                  <li>
                    <nav className={"c-hnav"}>
                      <ul className={"c-hnav-lists"}>
                        
                      </ul>
                    </nav>
                  </li>
                  {/* 資料ダウンロード */}
                  <li className={"navItem"}>
                    <Iconbutton href="/lp02#cta" customClass="cvBtn -navy02">
                      <span className="pc">資料ダウンロード</span>
                      <Image
                        src="/images/SVG/download.svg"
                        className="svgIcon mgb1"
                        alt="資料ダウンロード"
                        width={18}
                        height={18}
                      />
                    </Iconbutton>
                  </li>
                  {/* お問い合わせはこちら */}
                  <li className={"navItem"}>
                    <Iconbutton href="/lp02#cta" customClass="cvBtn -lightBlue">
                      <span className="pc s-M -s13 -b -ls-1">お問い合わせはこちら</span>
                      <Image
                        src="/images/SVG/mail-blue.svg"
                        className="svgIcon mgb1"
                        alt="資料ダウンロード"
                        width={18}
                        height={18}
                      />
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
