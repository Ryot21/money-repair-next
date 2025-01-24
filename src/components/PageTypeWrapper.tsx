"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function PageTypeWrapper({
  children,
  initialPageType,
}: {
  children: React.ReactNode;
  initialPageType: string;
}) {
  const pathname = usePathname();

  useEffect(() => {
    let pageType = "top";
    const archivePaths = ["/information", "/interview"];

    if (archivePaths.some((path) => pathname.startsWith(path))) {
      // パスを分割して解析
      const pathSegments = pathname.split("/").filter(Boolean);
      const section = pathSegments[0]; // 'information' または 'interview'

      // カテゴリーページまたはページネーションを含むパスかチェック
      if (pathSegments[1] === "category" || pathname.includes("/page/") || (pathname.startsWith("/information/search"))) {
        // カテゴリーページ、ページネーション、または検索ページの場合
        pageType = "archive";
      } else if (pathSegments.length === 2) {
        // 記事詳細ページの場合（例：/information/123）
        pageType = `single -${section}`; // 例：'single -information'
      } else {
        // それ以外のケース
        pageType = "archive";
      }
    } else if (pathname.startsWith("/contact")) {
      pageType = "contact";
    } else if (pathname === "/") {
      pageType = "top";
    }

    document.body.className = `p-${pageType} is-scroll`;
  }, [pathname]);

  return <>{children}</>;
}
