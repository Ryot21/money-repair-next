"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function LpNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  // リンククリック時の処理
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={"c-hb-nav -LP sp"}>
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
        {/* ロゴ */}
        <div className={"c-hb-nav__logo"}>
          <Link
            href="/lp02#top"
            className={"c-link -img"}
            onClick={handleLinkClick}
          >
            <Image
              src="/images/logo/mp/money-repair-logo_b.svg"
              alt="福利厚生で金融教育するならマネリペ"
              width={200}
              height={50}
              priority
            />
          </Link>
        </div>
        {/* ナビゲーション */}
        <ul className={"c-hb-nav__lists"}>
          {/* サービス内容 */}
          <li className={"hbNavItem -center"}>
            <Link href="/lp02#sc03" onClick={handleLinkClick}>
              <span className={"s-ML -s18 -b -ls-2 pdr5"}>サービス内容</span>
            </Link>
          </li>
          {/* 選ばれる理由 */}
          <li className={"hbNavItem -center"}>
            <Link href="/lp02#sc04" onClick={handleLinkClick}>
              <span className={"s-ML -s18 -b -ls-2 pdr5"}>選ばれる理由</span>
            </Link>
          </li>
          {/* 導入事例 */}
          <li className={"hbNavItem -center"}>
            <Link href="/lp02#sc07" onClick={handleLinkClick}>
              <span className={"s-ML -s18 -b -ls-2 pdr5"}>導入事例</span>
            </Link>
          </li>
          {/* Q&A */}
          <li className={"hbNavItem -center"}>
            <Link href="/lp02#Q&A" onClick={handleLinkClick}>
              <span className={"s-ML -s18 -b -ls-2 pdr5"}>よくある質問</span>
            </Link>
          </li>
        </ul>
        {/* ctaボタン */}
        <ul className={"c-hb-nav__contact"}>
          <li className={"contactItem"}>
            <Link
              href="/lp02#cta"
              className={"c-link -img"}
              onClick={handleLinkClick}
            >
              <Image
                src="/images/SVG/Lp/ver02/download.svg"
                alt="資料ダウンロード"
                width={334}
                height={40}
              />
            </Link>
          </li>
          <li className={"contactItem"}>
            <Link
              href="/lp02#cta"
              className={"c-link -img"}
              onClick={handleLinkClick}
            >
              <Image
                src="/images/SVG/Lp/ver02/contact.svg"
                alt="お問い合わせ"
                width={334}
                height={40}
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
