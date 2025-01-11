// "use client";

import Image  from "next/image";
import IconButtonLink from "@/components/Parts/Button/IconButton";
import "@/styles/globals.scss";


export default function Header() {
    return (
        <header id="js-header" className={"c-header -fixed"}>
            <div className={"c-header-wrapper"}>
                <ul className={"c-header-lists -jc-sb -h-cen"}>
                    {/* Header > ロゴ */}
                    <li className={"headerItem flexItem -logoArea"}>
                        <div className={"logo"}>
                            <a className={"c-link -img"} href="https://money-repair.jp">
                                <Image 
                                    src="images/logo/mp/money-repair-logo_black.svg"
                                    alt="福利厚生で金融教育するならマネーリペア"
                                    width={200}
                                    height={50}
                                />
                            </a>
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
                                            {/* 特徴 */}
                                            <li className={"hnavItem"}>
                                                <a className={"c-hnav--link s-M -b -ls-3 -ws-n"} href="service.html">特徴</a>
                                            </li>
                                            {/* ご利用者の声 */}
                                            <li className={"hnavItem archiveItem"}>
                                                <a className={"c-hnav--link -archive s-M -b -ls-3 -ws-n"} href="archive-interview.html">ご利用者の声</a>
                                                {/* ドロップダウンメニュー */}
                                                <div className={"c-hnav--dropdown"}>
                                                    <ul className={"c-hnav--archiveLists"}>
                                                        <li className={"archiveItem"}><a href="" className={"c-link s-S -b"}>#カテゴリー01</a></li>
                                                        <li className={"archiveItem"}><a href="" className={"c-link s-S -b"}>#カテゴリー01</a></li>
                                                        <li className={"archiveItem"}><a href="" className={"c-link s-S -b"}>#カテゴリー01</a></li>
                                                        <li className={"archiveItem"}><a href="" className={"c-link s-S -b"}>#カテゴリー01</a></li>
                                                        <li className={"archiveItem"}><a href="" className={"c-link s-S -b"}>#カテゴリー01</a></li>
                                                        <li className={"archiveItem"}><a href="" className={"c-link s-S -b"}>#カテゴリー01</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            {/* お役立ち情報 */}
                                            <li className={"hnavItem archiveItem"}>
                                                <a className={"c-hnav--link -archive s-M -b -ls-3 -ws-n"} href="archive-information.html">お役立ち情報</a>
                                                {/* ドロップダウンメニュー */}
                                                <div className={"c-hnav--dropdown"}>
                                                    <ul className={"c-hnav--archiveLists"}>
                                                        <li className={"archiveItem"}><a href="" className={"c-link s-S -b"}>#カテゴリー01</a></li>
                                                        <li className={"archiveItem"}><a href="" className={"c-link s-S -b"}>#カテゴリー01</a></li>
                                                        <li className={"archiveItem"}><a href="" className={"c-link s-S -b"}>#カテゴリー01</a></li>
                                                        <li className={"archiveItem"}><a href="" className={"c-link s-S -b"}>#カテゴリー01</a></li>
                                                        <li className={"archiveItem"}><a href="" className={"c-link s-S -b"}>#カテゴリー01</a></li>
                                                        <li className={"archiveItem"}><a href="" className={"c-link s-S -b"}>#カテゴリー01</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </nav>
                                </li>
                                {/* 資料請求 */}
                                <li className={"navItem -cvBtn -cv01"}>
                                    <IconButtonLink href="/download">
                                        資料請求
                                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.69 39.69">
                                            <path d="M10.35.69h19.03c.85,0,1.61.33,2.18.9l.05.05c.52.57.85,1.33.85,2.14v27.24c0,.85-.33,1.61-.9,2.18h0c-.57.57-1.33.9-2.18.9h-.62v3.94c0,.52-.43.95-1,.95-.24,0-.43-.05-.62-.19l-2.33-1.71-2.33,1.71c-.43.33-1.04.24-1.38-.19-.14-.19-.19-.38-.19-.57h0v-3.94h-10.58c-.85,0-1.66-.33-2.23-.9l-.05-.05c-.52-.57-.85-1.33-.85-2.14V3.77c0-.85.38-1.61.9-2.18h.05c.52-.57,1.33-.9,2.18-.9h0ZM11.11,5.77c-.52,0-.95-.43-.95-1,0-.52.43-.95.95-.95h19.41v-.05c0-.28-.09-.57-.28-.76l-.05-.05c-.19-.24-.47-.33-.81-.33H10.35c-.33,0-.62.09-.81.33-.24.19-.38.47-.38.81v27.24c0,.28.14.57.33.76l.05.05c.19.19.47.33.81.33h17.27c.14-.05.28,0,.38,0h1.38c.33,0,.62-.14.81-.33h0c.19-.19.33-.47.33-.81V5.77H11.11ZM26.82,34.1h-3.94v1.99l1.38-1c.33-.24.81-.28,1.19,0l1.38,1v-1.99Z"/>
                                            <rect x="10.2" y="8.08" width="21.08" height="1.95" rx=".97" ry=".97"/>
                                            <rect x="10.2" y="12.75" width="21.08" height="1.95" rx=".97" ry=".97"/>
                                            <rect x="10.2" y="17.42" width="21.08" height="1.95" rx=".97" ry=".97"/>
                                            <rect x="10.2" y="22.09" width="21.08" height="1.95" rx=".97" ry=".97"/>
                                            <rect x="10.2" y="26.77" width="21.08" height="1.95" rx=".97" ry=".97"/>
                                        </svg>
                                    </IconButtonLink>
                                </li>
                                {/* お問い合せ */}
                                <li className={"navItem -cvBtn -cv02"}>
                                    <IconButtonLink href="/contact">
                                        お問い合わせ
                                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.69 39.69">
                                            <path className={"c-link -svg"} d="M.96,6.87h37.81c.5,0,.92.41.92.92v24.06c0,.55-.41.96-.92.96H.96C.41,32.81,0,32.4,0,31.85V7.79C0,7.29.41,6.87.96,6.87h0ZM25.07,22.59c-.46-.32-.5-.92-.18-1.33.32-.41.87-.5,1.28-.18l11.64,8.89V9.53l-17.41,11.04c-.28.23-.73.27-1.05.05L1.88,9.44v20.62l11.82-8.98c.41-.32,1.01-.23,1.33.18s.23,1.01-.18,1.33L3.85,30.93h32.12l-10.91-8.34ZM4.31,8.75l15.53,9.94,15.67-9.94H4.31Z"/>
                                        </svg>
                                    </IconButtonLink>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    );
}