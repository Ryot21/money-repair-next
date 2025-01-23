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
    const archivePaths = ["/information", "/interview", "/news"];
    
    if (archivePaths.some(path => pathname.startsWith(path))) {
      // パスを分割して解析
      const pathSegments = pathname.split('/').filter(Boolean);
      
      // カテゴリーページまたはページネーションを含むパスかチェック
      if (pathSegments[1] === 'category' || pathname.includes('/page/')) {
        // カテゴリーページまたはページネーションページの場合
        pageType = "archive";
      } else if (pathSegments.length === 2) {
        // 記事詳細ページの場合（例：/information/123）
        pageType = "single";
      } else {
        // それ以外のケース（トップページなど）
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
