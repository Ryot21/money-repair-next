// UIレンダリングとインタラクションを管理するクライアントコンポーネント
"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Iconbutton from "@/components/elements/button/IconButton";
import type { Category } from "@/types/microcms";
import HeaderScroll from "./HeaderScroll";
import { useState, useEffect } from "react";

// Props型を定義
type HeaderProps = {
  interviewCategories: { contents: Category[] };
  informationCategories: { contents: Category[] };
};

// クライアントコンポーネントとしてHeaderを実装
export default function Header({
  interviewCategories,
  informationCategories,
}: HeaderProps) {
  // 現在のパスを取得
  const pathname = usePathname();
  // ドロップダウンメニューの表示状態を管理
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // リンクがアクティブかどうかを判定する関数
  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + "/");
  };

  // ドロップダウンメニューの表示/非表示を切り替える関数
  const toggleDropdown = (menuId: string) => {
    setActiveDropdown(activeDropdown === menuId ? null : menuId);
  };

  // 背景クリック時の処理
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setActiveDropdown(null);
    }
  };

  // ESCキーでのメニュー閉じる処理
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, []);

  // スクロール制御
  useEffect(() => {
    if (activeDropdown) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [activeDropdown]);

  // リンククリック時の処理
  const handleLinkClick = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <HeaderScroll />
      <header id="js-header" className="c-header">
        <div className={"c-header-wrapper"}>
          <ul className={"c-header-lists -jc-sb -h-cen"}>
            {/* Header > ロゴ */}
            <li className={"headerItem flexItem -logoArea"}>
              <div className={"logo"}>
                <Link href="/" className={"c-link -img"}>
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
                        {/* サービス内容 */}
                        <li className={"hnavItem archiveItem"}>
                          {/* アクティブ、チェック時 */}
                          <button className={`c-hnav--btn -triangle 
                            ${ isActive("/service") ? "-active" : ""}
                            ${ activeDropdown === "service" ? "-checked" : "" }`}
                            onClick={() => toggleDropdown("service")}
                          ><span>マネリペとは</span>
                          </button> 
                          <div className={`c-hnav--dropdown ${ activeDropdown === "service" ? "-checked" : "" }`}>
                            <div className="c-hnav--dropdown--inner">
                              <ul className="c-flex -col1_2 -pc2_1 -h-top -jc-sb">
                                <li className="flexItem">
                                  <p className="c-hnav--dropdown--title">
                                    サービス内容
                                  </p>
                                  <p className="c-hnav--dropdown--text">
                                    マネーリペアは、従業員の金融リテラシー向上を支援し、お金の不安を解消するサービスです。税金、不動産、保険、有価証券の専門家が、税負担の軽減や手取りUPなど包括的なアドバイスを提供し、従業員の経済的安定と企業の活性化に貢献します。
                                  </p>
                                  <Link
                                    className={"c-link s-S -b -ls-2 -text"}
                                    href="/service"
                                    onClick={handleLinkClick}
                                  >
                                    マネリペとは
                                  </Link>
                                </li>
                                <li className="flexItem">
                                  <p className="c-hnav--dropdown--title">
                                    マネリペ情報
                                  </p>
                                  <p className="c-hnav--dropdown--text">
                                    従業員の金融リテラシー向上を支援し、経済的安定を促進する福利厚生サービスです。専門家による包括的なアドバイスで、従業員のモチベーションと定着率向上、企業全体の生産性向上に貢献します。
                                  </p>
                                  <Link
                                    className={"c-link s-S -b -ls-2 -text"}
                                    href="/maneripe"
                                    onClick={handleLinkClick}
                                  >
                                    記事一覧
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        {/* ご利用者の声 */}
                        {/* <li className={"hnavItem archiveItem"}>
                          <button className={`c-hnav--btn -triangle 
                            ${ isActive("/interview") ? "-active" : ""}
                            ${ activeDropdown === "interview" ? "-checked" : "" }`}
                            onClick={() => toggleDropdown("interview")}
                          ><span>ご利用者の声</span>
                          </button>
                          <div className={`c-hnav--dropdown ${ activeDropdown === "interview" ? "-checked" : "" }`}>
                            <div className="c-hnav--dropdown--inner">
                              <ul className="c-flex -col1_2 -pc2_1 -h-top -jc-sb">
                                <li className="flexItem">
                                  <p className="c-hnav--dropdown--title">ご利用者の声</p>
                                  <p className="c-hnav--dropdown--text">
                                    マネーリペアを導入していただいた企業の『リアルな声』を集めました。実際に導入していただいた現場のお話を通じて、どのように金融知識が深まり、経済的な安心が得られたのかをご紹介します。ぜひマネーリペアが提供する価値をご確認ください。
                                  </p>
                                  <Link className={"c-link s-S -b -ls-2 -text"} href="/interview">
                                    記事一覧
                                  </Link>
                                </li>
                                <li className="flexItem">
                                  <ul className={"c-hnav--archiveLists"}>
                                    {interviewCategories.contents.map(
                                    (category: Category) => (
                                      <li key={category.id} className={"archiveItem"}>
                                        <Link
                                          href={`/interview/category/${category.id}`}
                                          className={"c-link s-S -b"}
                                        >
                                          #{category.name}
                                        </Link>
                                      </li>
                                    )
                                    )}
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li> */}
                        {/* お役立ち情報 */}
                        <li className={"hnavItem archiveItem"}>
                          {/* アクティブ、チェック時 */}
                          <button className={`c-hnav--btn -triangle 
                            ${ isActive("/information") ? "-active" : ""}
                            ${ activeDropdown === "information" ? "-checked" : "" }`}
                            onClick={() => toggleDropdown("information")}><span>お役立ち情報</span>
                          </button>
                          {/* ドロップダウンメニュー */}
                          <div className={`c-hnav--dropdown ${ activeDropdown === "information" ? "-checked" : "" }`}>
                            <div className="c-hnav--dropdown--inner">
                              <ul className="c-flex -col1_2 -pc2_1 -h-top -jc-sb">
                                <li className="flexItem">
                                  <p className="c-hnav--dropdown--title">
                                    お役立ち情報
                                  </p>
                                  <p className="c-hnav--dropdown--text">
                                  金融リテラシーが身に付くとライフプランに合わせた資金作りや家計のやりくり、節約などのお金の管理を合理的にできるようになります。 お金の管理が適切にできると「経済的に自立する」ことにつながります。
                                  </p>
                                  <Link
                                    className={"c-link s-S -b -ls-2 -text"}
                                    href="/information"
                                    onClick={handleLinkClick}
                                  >
                                    記事一覧
                                  </Link>
                                </li>
                                <li className="flexItem">
                                  <ul className={"c-hnav--archiveLists"}>
                                    {informationCategories.contents.map(
                                      (category: Category) => (
                                        <li
                                          key={category.id}
                                          className={"archiveItem"}
                                        >
                                          <Link
                                            href={`/information/category/${category.id}`}
                                            className={
                                              "c-link s-S -b -ls-2 -ws-n"
                                            }
                                            onClick={handleLinkClick}
                                          >
                                            #{category.name}
                                          </Link>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </nav>
                  </li>
                  {/* 資料請求 */}
                  <li className={"navItem -cvBtn -cv01"}>
                    <Iconbutton href="/contact?type=download">
                      資料請求
                      <svg
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 39.69 39.69"
                      >
                        <path d="M10.35.69h19.03c.85,0,1.61.33,2.18.9l.05.05c.52.57.85,1.33.85,2.14v27.24c0,.85-.33,1.61-.9,2.18h0c-.57.57-1.33.9-2.18.9h-.62v3.94c0,.52-.43.95-1,.95-.24,0-.43-.05-.62-.19l-2.33-1.71-2.33,1.71c-.43.33-1.04.24-1.38-.19-.14-.19-.19-.38-.19-.57h0v-3.94h-10.58c-.85,0-1.66-.33-2.23-.9l-.05-.05c-.52-.57-.85-1.33-.85-2.14V3.77c0-.85.38-1.61.9-2.18h.05c.52-.57,1.33-.9,2.18-.9h0ZM11.11,5.77c-.52,0-.95-.43-.95-1,0-.52.43-.95.95-.95h19.41v-.05c0-.28-.09-.57-.28-.76l-.05-.05c-.19-.24-.47-.33-.81-.33H10.35c-.33,0-.62.09-.81.33-.24.19-.38.47-.38.81v27.24c0,.28.14.57.33.76l.05.05c.19.19.47.33.81.33h17.27c.14-.05.28,0,.38,0h1.38c.33,0,.62-.14.81-.33h0c.19-.19.33-.47.33-.81V5.77H11.11ZM26.82,34.1h-3.94v1.99l1.38-1c.33-.24.81-.28,1.19,0l1.38,1v-1.99Z" />
                        <rect
                          x="10.2"
                          y="8.08"
                          width="21.08"
                          height="1.95"
                          rx=".97"
                          ry=".97"
                        />
                        <rect
                          x="10.2"
                          y="12.75"
                          width="21.08"
                          height="1.95"
                          rx=".97"
                          ry=".97"
                        />
                        <rect
                          x="10.2"
                          y="17.42"
                          width="21.08"
                          height="1.95"
                          rx=".97"
                          ry=".97"
                        />
                        <rect
                          x="10.2"
                          y="22.09"
                          width="21.08"
                          height="1.95"
                          rx=".97"
                          ry=".97"
                        />
                        <rect
                          x="10.2"
                          y="26.77"
                          width="21.08"
                          height="1.95"
                          rx=".97"
                          ry=".97"
                        />
                      </svg>
                    </Iconbutton>
                  </li>
                  {/* お問い合せ */}
                  <li className={"navItem -cvBtn -cv02"}>
                    <Iconbutton href="/contact?type=contact">
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
      {/* オーバーレイ */}
      {activeDropdown && (
        <div className="c-hnav__overlay" onClick={handleOverlayClick}></div>
      )}
    </>
  );
}
