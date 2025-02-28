import "@/styles/globals.scss";
import { metadata } from "./metadata";
import { headers } from "next/headers";
import PageTypeWrapper from "@/components/PageTypeWrapper";
import ScrollToTop from "@/components/ScrollToTop";
import HeaderContainer from "@/features/media/header/HeaderContainer";
import NavigationContainer from "@/features/media/navigation/NavigationContainer";
import Footer from "@/features/media/footer";

// メタデータをエクスポート
export { metadata };

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ヘッダー情報を取得
  const headersList = await headers();
  // ページタイプを取得（デフォルトは'top'）
  const initialPageType = headersList.get("x-page-type") || "top";

  return (
    // HTML言語設定とhydrationの警告を抑制
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="images/sns/apple-touch-icon-impreme.jpg"
        />
      </head>
      {/* hydrationの警告を抑制 */}
      <body suppressHydrationWarning>
        {/* ページタイプに基づくラッパー */}
        <PageTypeWrapper initialPageType={initialPageType}>
          {/* スクロールトップボタン */}
          <ScrollToTop />
          {/* ヘッダー（LPページでは/lp/layout.tsxが優先） */}
          <HeaderContainer />
          {/* ナビゲーション（LPページでは/lp/layout.tsxが優先） */}
          <NavigationContainer />
          {children}
          {/* フッター */}
          <Footer />
        </PageTypeWrapper>
      </body>
    </html>
  );
}