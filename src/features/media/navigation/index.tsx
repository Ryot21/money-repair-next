"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
// import type { Category } from "@/types/microcms";

// Props型を定義
// type HamburgerNavProps = {
  // interviewCategories: { contents: Category[] };
  // informationCategories: { contents: Category[] };
// };

export default function Navigation({
  // interviewCategories,
  // informationCategories,
// }: HamburgerNavProps) {
}) {
  // 現在のパスとクエリパラメータを取得
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // メニューの開閉状態を管理
  const [isOpen, setIsOpen] = useState(false);

  // リンクがアクティブかどうかを判定する関数
  const isActive = (href: string) => {
    // クエリパラメータを含むURLの場合
    if (href.includes("?")) {
      const [path, query] = href.split("?");
      const [key, value] = query.split("=");
      return pathname === path && searchParams.get(key) === value;
    }
    // 通常のURLの場合
    return pathname === href || pathname.startsWith(href + "/");
  };

  // リンククリック時の処理
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={"c-hb-nav sp"}>
      <input
        className={"c-hb-nav__cheakbox"}
        id="c-hb-nav__checkbox"
        type="checkbox"
        checked={isOpen}
        onChange={(e) => setIsOpen(e.target.checked)}
      />
      <label className={"c-hb-nav__button"} htmlFor="c-hb-nav__checkbox">
        <span className={"s-SS -b -center -white"}>MENU</span>
      </label>
      <label
        className={"c-hb-nav__cheakbox c-hb-nav__close"}
        htmlFor="c-hb-nav__checkbox"
      ></label>
      <div className={"c-hb-nav__content"}>
        <ul className={"c-hb-nav__lists"}>
          {/* TOP */}
          <li className={"hbNavItem"}>
            <Link
              className={`c-link -text -ws-n ${isActive("/") ? "-active" : ""}`}
              href="/"
              onClick={handleLinkClick}
            >
              <span className={"s-ML -s18 -b -ls-2 pdr5 pdr4s"}>TOP</span>
            </Link>
          </li>
          {/* マネリペとは */}
          <li className={"hbNavItem "}>
            <Link
              className={`c-link -text -ws-n mgb2s ${isActive("/service") ? "-active" : ""}`}
              href="/service"
              onClick={handleLinkClick}
            >
              <span className={"s-ML -s18 -b -ls-2 pdr5 pdr4s"}>
                マネリペとは
              </span>
            </Link>
            <p className="c-hb-nav__text">
            マネーリペアは、従業員の金融リテラシー向上を支援し、お金の不安を解消するサービスです。
            </p>
          </li>
          {/* マネリペ情報 */}
          <li className={"hbNavItem "}>
            <Link
              className={`c-link -text -ws-n mgb2s ${isActive("/maneripe") ? "-active" : ""}`}
              href="/maneripe"
              onClick={handleLinkClick}
            >
              <span className={"s-ML -s18 -b -ls-2 pdr5 pdr4s"}>
                マネリペ情報
              </span>
            </Link>
            <p className="c-hb-nav__text">
            マネリペ情報は、ご利用者の声や相談事例・よくある質問を掲載し、利用方法、必要書類、相談後の流れを具体的に紹介しています。
            </p>
          </li>
          {/* ご利用者の声 */}
          {/* <li className={"hbNavItem "}>
            <Link
              className={`c-link -text -ws-n mgb2s ${
                isActive("/interview") ? "-active" : ""
              }`}
              href="/interview"
              onClick={handleLinkClick}
            >
              <span className={"s-ML -s18 -b -ls-2 pdr5 pdr4s"}>
                ご利用者の声
              </span>
            </Link>
            <p className="c-hb-nav__text mgb5s">
              マネーリペアを導入していただいた企業の『リアルな声』を集めました。
            </p>
          </li> */}
          {/* お役立ち情報 */}
          <li className={"hbNavItem"}>
            <Link
              className={`c-link -text -ws-n mgb2s ${
                isActive("/information") ? "-active" : ""
              }`}
              href="/information"
              onClick={handleLinkClick}
            >
              <span className={"s-ML -s18 -b -ls-2 pdr5 pdr4s"}>
                お役立ち情報
              </span>
            </Link>
            <p className="c-hb-nav__text mgb5s">
              金融リテラシーが身に付くとライフプランに合わせたお金の管理を合理的にできるようになります。
            </p>
            {/* <ul className={"c-flex -col2 -jc-st"}>
              {informationCategories.contents.map((category: Category) => (
                <li
                  key={category.id}
                  className={"hbNavCategoryItem flexItem mgb5 mgb5s"}
                >
                  <Link
                    className={`s-M -s14 -b -left pdl7s ${
                      isActive(`/information/category/${category.id}`)
                        ? "-active"
                        : ""
                    }`}
                    href={`/information/category/${category.id}`}
                    onClick={handleLinkClick}
                  >
                    <span className={"s-S -s14 -b -white -left pdl7s"}>
                      {category.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul> */}
          </li>
          {/* お知らせ */}
          <li className={"hbNavItem"}>
            <Link
              className={`c-link -text -ws-n mgb2s ${isActive("/news") ? "-active" : ""}`}
              href="/news"
              onClick={handleLinkClick}
            >
              <span className={"s-ML -s18 -b -ls-2 pdr5 pdr4s"}>お知らせ</span>
            </Link>
          </li>
          {/* 資料ダウンロード */}
          {/* <li className={"hbNavItem"}>
            <Link
              className={`c-link -text -ws-n mgb2s ${isActive("/contact?type=download") ? "-active" : ""}`}
              href="/contact?type=download"
              onClick={handleLinkClick}
            >
              <span className={"s-ML -s18 -b -ls-2 pdr5 pdr4s"}>
                資料ダウンロード
              </span>
            </Link>
          </li> */}
          {/* お問い合わせ */}
          <li className={"hbNavItem"}>
            <Link
              className={`c-link -text -ws-n mgb2s ${isActive("/contact?type=contact") ? "-active" : ""}`}
              href="/contact?type=contact"
              onClick={handleLinkClick}
            >
              <span className={"s-ML -s18 -b -ls-2 pdr5 pdr4s"}>
                お問い合わせ
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
