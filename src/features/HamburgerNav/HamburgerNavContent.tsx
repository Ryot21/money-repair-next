"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import type { Category } from "@/libs/microcms";

// Props型を定義
type HamburgerNavProps = {
  interviewCategories: { contents: Category[] };
  informationCategories: { contents: Category[] };
};

export default function HamburgerNavContent({
  interviewCategories,
  informationCategories,
}: HamburgerNavProps) {
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
          <li className={"hbNavItem"}>
            <Link
              className={isActive("/") ? "-active" : ""}
              href="/"
              onClick={handleLinkClick}
            >
              <span className={"s-ML -s18 -b -ls-2 pdr5 pdr4s"}>TOP</span>
            </Link>
          </li>
          <li className={"hbNavItem"}>
            <Link
              className={isActive("/service") ? "-active" : ""}
              href="/service"
              onClick={handleLinkClick}
            >
              <span className={"s-ML -s18 -b -ls-2 pdr5 pdr4s"}>
                マネーリペアの特徴
              </span>
            </Link>
          </li>
          {/* ご利用者の声 */}
          {/* <li className={"hbNavItem c-borderBtm -dotted"}>
            <Link
              className={`mgb5 mgb5s ${
                isActive("/interview") ? "-active" : ""
              }`}
              href="/interview"
              onClick={handleLinkClick}
            >
              <span className={"s-ML -s18 -b -ls-2 pdr5 pdr4s"}>
                ご利用者の声
              </span>
            </Link>
            <ul className={"c-flex -col2 -jc-st"}>
              {interviewCategories.contents.map((category: Category) => (
                <li
                  key={category.id}
                  className={"hbNavCategoryItem flexItem mgb5 mgb5s"}
                >
                  <Link
                    className={`s-M -s14 -b -left pdl7s ${
                      isActive(`/interview/category/${category.id}`)
                        ? "-active"
                        : ""
                    }`}
                    href={`/interview/category/${category.id}`}
                    onClick={handleLinkClick}
                  >
                    <span className={"s-S -s14 -b -left pdl7s"}>
                      {category.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </li> */}
          {/* お役立ち情報 */}
          <li className={"hbNavItem c-borderBtm -dotted"}>
            <Link
              className={`mgb5 mgb5s ${
                isActive("/information") ? "-active" : ""
              }`}
              href="/information"
              onClick={handleLinkClick}
            >
              <span className={"s-ML -s18 -b -ls-2 pdr5 pdr4s"}>
                お役立ち情報
              </span>
            </Link>
            <ul className={"c-flex -col2 -jc-st"}>
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
            </ul>
          </li>
          <li className={"hbNavItem"}>
            <Link
              className={isActive("/contact?type=download") ? "-active" : ""}
              href="/contact?type=download"
              onClick={handleLinkClick}
            >
              <span className={"s-ML -s18 -b -ls-2 pdr5 pdr4s"}>
                資料ダウンロード
              </span>
            </Link>
          </li>
          <li className={"hbNavItem"}>
            <Link
              className={isActive("/contact?type=contact") ? "-active" : ""}
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
