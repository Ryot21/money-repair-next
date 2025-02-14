"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type TableOfContentsProps = {
  content: string;
  isSidebar?: boolean;
};

type TocItem = {
  id: string;
  text: string;
  h3: { id: string; text: string }[];
};

export default function TableOfContents({
  content,
  isSidebar = false,
}: TableOfContentsProps) {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeH2Id, setActiveH2Id] = useState<string>("");
  const [activeH3Id, setActiveH3Id] = useState<string>("");

  useEffect(() => {
    // 目次を生成し、コンテンツの見出しにIDを付与する
    const generateToc = () => {
      // 一時的なDOMを作成してコンテンツを解析
      const div = document.createElement("div");
      div.innerHTML = content;

      // h2とh3の見出しを取得
      const headings = div.querySelectorAll("h2, h3");
      const items: TocItem[] = [];
      let currentH2: TocItem | null = null;

      // 各見出しを処理して目次アイテムを生成
      headings.forEach((heading, index) => {
        // 各見出しにユニークなIDを付与
        const id = `detail${index + 1}`;
        heading.id = id;

        if (heading.tagName === "H2") {
          // H2見出しの場合、新しい目次アイテムを作成
          currentH2 = {
            id,
            text: heading.textContent || "",
            h3: [],
          };
          items.push(currentH2);
        } else if (heading.tagName === "H3" && currentH2) {
          // H3見出しの場合、現在のH2の子要素として追加
          currentH2.h3.push({
            id,
            text: heading.textContent || "",
          });
        }
      });

      setTocItems(items);

      // 実際のコンテンツにIDを反映
      const contentDiv = document.querySelector(".p-single--detail");
      if (contentDiv) {
        contentDiv.innerHTML = div.innerHTML;
      }
    };

    generateToc();
  }, [content]);

  useEffect(() => {
    const handleScroll = () => {
      const headings = Array.from(document.querySelectorAll("h2, h3"));
      // ヘッダーの高さ分のオフセット
      const offset = 57;
      // 現在のスクロール位置（ヘッダー分を考慮）
      const scrollPosition = window.scrollY + offset;

      // 最上部より上にスクロールした場合はアクティブ状態をリセット
      if (
        scrollPosition <
        headings[0]?.getBoundingClientRect().top + window.scrollY - offset
      ) {
        setActiveH2Id("");
        setActiveH3Id("");
        return;
      }

      // 各見出しの位置をチェックして現在表示中の見出しを特定
      for (let i = 0; i < headings.length; i++) {
        const heading = headings[i];
        const nextHeading = headings[i + 1];

        // 現在の見出しの位置（オフセット考慮）
        const headingTop =
          heading.getBoundingClientRect().top + window.scrollY - offset;
        // 次の見出しの位置（最後の見出しの場合はページ末尾）
        const nextHeadingTop = nextHeading
          ? nextHeading.getBoundingClientRect().top + window.scrollY - offset
          : document.documentElement.scrollHeight;

        // 現在のスクロール位置が見出しの範囲内にある場合
        if (scrollPosition >= headingTop && scrollPosition < nextHeadingTop) {
          if (heading.tagName === "H2") {
            setActiveH2Id(heading.id);
            setActiveH3Id(""); // h2表示時はh3のアクティブ状態をクリア
          } else if (heading.tagName === "H3") {
            setActiveH3Id(heading.id);
            // h3がアクティブな場合、親のh2も特定してアクティブに
            const parentH2 = tocItems.find((item) =>
              item.h3.some((h3) => h3.id === heading.id)
            );
            if (parentH2) {
              setActiveH2Id(parentH2.id);
            }
          }
          break;
        }
      }
    };

    // スクロールイベントの監視を設定
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初期表示時にもアクティブ状態を設定

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [tocItems]);

  return (
    <div className={`c-card -t03 ${isSidebar ? "mgt7 tb-pc" : "sp"}`}>
      <h2>目次</h2>
      <ul className={"c-card-lists -h2-lists"}>
        {tocItems.map((h2Item) => (
          <li
            key={h2Item.id}
            className={`c-card-item ${
              activeH2Id === h2Item.id ? "-active" : ""
            }`}
          >
            <Link
              href={`#${h2Item.id}`}
              className={"c-link -mokuji -b -ls-1 -lh-1_5"}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(h2Item.id);
                if (element) {
                  // ヘッダー分のオフセットを考慮してスクロール
                  const offset = 57;
                  const elementPosition =
                    element.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({
                    top: elementPosition - offset,
                    behavior: "smooth",
                  });
                }
              }}
            >
              {h2Item.text}
            </Link>
            {h2Item.h3.length > 0 && (
              <ul className={"c-card-lists -h3-lists"}>
                {h2Item.h3.map((h3Item) => (
                  <li
                    key={h3Item.id}
                    className={`c-card-item ${
                      activeH3Id === h3Item.id ? "-active" : ""
                    }`}
                  >
                    <Link
                      href={`#${h3Item.id}`}
                      className={"c-link -mokuji -ls-1 -lh-1_5"}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById(h3Item.id);
                        if (element) {
                          const offset = 57;
                          const elementPosition =
                            element.getBoundingClientRect().top +
                            window.scrollY;
                          window.scrollTo({
                            top: elementPosition - offset,
                            behavior: "smooth",
                          });
                        }
                      }}
                    >
                      {h3Item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
