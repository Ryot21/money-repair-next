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
  // interviewCategories: { contents: Category[] };
  informationCategories: { contents: Category[] };
};

// クライアントコンポーネントとしてHeaderを実装
export default function Header({
  // interviewCategories,
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
                    alt="福利厚生で金融教育するならマネリペ"
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
                          <button
                            className={`c-hnav--btn -triangle 
                            ${isActive("/service") ? "-active" : ""}
                            ${activeDropdown === "service" ? "-checked" : ""}`}
                            onClick={() => toggleDropdown("service")}
                          >
                            <span>マネリペとは</span>
                          </button>
                          <div
                            className={`c-hnav--dropdown ${
                              activeDropdown === "service" ? "-checked" : ""
                            }`}
                          >
                            <div className="c-hnav--dropdown--inner">
                              <ul className="c-flex -col1_2 -pc2_1 -h-top -jc-sb">
                                <li className="flexItem">
                                  <p className="c-hnav--dropdown--title">
                                    サービス内容
                                  </p>
                                  <p className="c-hnav--dropdown--text">
                                    マネリペは、従業員の金融リテラシー向上を支援し、お金の不安を解消するサービスです。税金、不動産、保険、有価証券の専門家が、税負担の軽減や可処分所得UPなど包括的なアドバイスを提供し、従業員の経済的安定と企業の活性化に貢献します。
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
                                    マネリペを導入していただいた企業の『リアルな声』を集めました。実際に導入していただいた現場のお話を通じて、どのように金融知識が深まり、経済的な安心が得られたのかをご紹介します。ぜひマネリペが提供する価値をご確認ください。
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
                          <button
                            className={`c-hnav--btn -triangle 
                            ${isActive("/information") ? "-active" : ""}
                            ${
                              activeDropdown === "information" ? "-checked" : ""
                            }`}
                            onClick={() => toggleDropdown("information")}
                          >
                            <span>お役立ち情報</span>
                          </button>
                          {/* ドロップダウンメニュー */}
                          <div
                            className={`c-hnav--dropdown ${
                              activeDropdown === "information" ? "-checked" : ""
                            }`}
                          >
                            <div className="c-hnav--dropdown--inner">
                              <ul className="c-flex -col1_2 -pc2_1 -h-top -jc-sb">
                                <li className="flexItem">
                                  <p className="c-hnav--dropdown--title">
                                    お役立ち情報
                                  </p>
                                  <p className="c-hnav--dropdown--text">
                                    金融リテラシーが身に付くとライフプランに合わせた資金作りや家計のやりくり、節約などのお金の管理を合理的にできるようになります。
                                    お金の管理が適切にできると「経済的に自立する」ことにつながります。
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
                  <li className={"navItem"}>
                    <Iconbutton
                      href="/contact?type=download"
                      customClass="cvBtn -navy"
                    >
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
                  {/* お問い合せ */}
                  <li className={"navItem"}>
                    <Iconbutton
                      href="/contact?type=contact"
                      customClass="cvBtn -red"
                    >
                      <span className="pc">お問い合わせ</span>
                      <Image
                        src="/images/SVG/mail-white.svg"
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
      {/* オーバーレイ */}
      {activeDropdown && (
        <div className="c-hnav__overlay" onClick={handleOverlayClick}></div>
      )}
    </>
  );
}
