import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.scss";
import "@/styles/globals.scss";
import Header from "@/components/Header";
import HamburgerNav from "@/components/HamburgerNav";
import Footer from "@/components/Footer";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "マネーリペア",
  description: "金融は分野によって知識が偏りがちなので、金融知識という知的財産を身につけ、自分たちで適切な判断ができるようにすることが必要だと感じます。金融リテラシーを上げることにより「将来に向けたお金の不安を解決する」サービスです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" type="image/png" href="images/sns/apple-touch-icon-impreme.jpg" />
      </head>
      {/* <body className={`${geistSans.variable} ${geistMono.variable}`}> */}
      <body className={"p-top is-scroll"}>

        {/* ヘッダー */}
        <Header />

        {/* ハンバーガーメニュー */}
        <HamburgerNav />

        {children}

        {/* フッター */}
        <Footer />

      </body>
    </html>
  );
}
