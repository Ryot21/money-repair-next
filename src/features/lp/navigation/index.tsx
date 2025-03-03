"use client";

import { useState } from "react";
import Link from "next/link";


export default function LpNavigation() {
  const [isOpen, setIsOpen] = useState(false);

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
          {/* マネーリペアとは */}
          <li className={"hbNavItem"}>
            <Link href="#sc01" onClick={handleLinkClick}>
              <span className={"s-ML -s18 -b -ls-2 pdr5 pdr4s"}>
                マネーリペアとは
              </span>
            </Link>
          </li>
          {/* サービス内容 */}
          <li className={"hbNavItem"}>
            <Link href="#sc02" onClick={handleLinkClick}>
              <span className={"s-ML -s18 -b -ls-2 pdr5 pdr4s"}>
                サービス内容
              </span>
            </Link>
          </li>
          {/* 選ばれる理由 */}
          <li className={"hbNavItem"}>
            <Link href="#sc03" onClick={handleLinkClick}>
              <span className={"s-ML -s18 -b -ls-2 pdr5 pdr4s"}>
                選ばれる理由
              </span>
            </Link>
          </li>
          {/* 導入事例 */}
          <li className={"hbNavItem"}>
            <Link href="#sc04" onClick={handleLinkClick}>
              <span className={"s-ML -s18 -b -ls-2 pdr5 pdr4s"}>
                導入事例
              </span>
            </Link>
          </li>
          {/* Q&A */}
          <li className={"hbNavItem"}>
            <Link href="#sc05" onClick={handleLinkClick}>
              <span className={"s-ML -s18 -b -ls-2 pdr5 pdr4s"}>
                Q&A
              </span>
            </Link>
          </li>
          {/* お問い合わせ */}
          <li className={"hbNavItem"}>
            <Link href="#contact" onClick={handleLinkClick}>
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
