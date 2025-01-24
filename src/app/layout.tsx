import { headers } from "next/headers";
import type { Metadata } from "next";

import "@/styles/globals.scss";
import PageTypeWrapper from "@/components/PageTypeWrapper"
import ScrollToTop from "@/components/ScrollToTop";
import Header from "@/features/Header";
import HamburgerNav from "@/features/HamburgerNav";
import Footer from "@/features/Footer";

export const metadata: Metadata = {
  title: "マネーリペア",
  description: "金融は分野によって知識が偏りがちなので、金融知識という知的財産を身につけ、自分たちで適切な判断ができるようにすることが必要だと感じます。金融リテラシーを上げることにより「将来に向けたお金の不安を解決する」サービスです。",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // ミドルウェアで設定されたヘッダーを取得
  const headersList = await headers();
  const initialPageType = headersList.get('x-page-type') || 'top';

  // ページタイプに基づいてクラスを設定
  const bodyClass = `p-${initialPageType}`;

  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" type="image/png" href="images/sns/apple-touch-icon-impreme.jpg" />
      </head>
      <body className={`${bodyClass} is-scroll`}>
        <PageTypeWrapper initialPageType={initialPageType}>
          <ScrollToTop />
          {/* ヘッダー */}
          <Header />
          {/* ハンバーガーメニュー */}
          <HamburgerNav />
          {children}
          {/* フッター */}
          <Footer />
        </PageTypeWrapper>
      </body>
    </html>
  );
}
