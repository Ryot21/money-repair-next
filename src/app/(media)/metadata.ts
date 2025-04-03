import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://money-repair.jp"),
  title: {
    template: "%s | 役立つ金融知識をお届けするメディアサイト",
    default: "マネーリペア | 役立つ金融知識をお届けするメディアサイト",
  },
  description:
    "金融は分野によって知識が偏りがちなので、金融知識という知的財産を身につけ、自分たちで適切な判断ができるようにすることが必要だと感じます。金融リテラシーを上げることにより「将来に向けたお金の不安を解決する」サービスです。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "マネーリペア",
    title: "マネーリペア | 役立つ金融知識をお届けするメディアサイト",
    description:
      "金融は分野によって知識が偏りがちなので、金融知識という知的財産を身につけ、自分たちで適切な判断ができるようにすることが必要だと感じます。金融リテラシーを上げることにより「将来に向けたお金の不安を解決する」サービスです。",
    images: ["/images/sns/ogp_1200_630.jpg"],
  },
  // alternates: {
  //   canonical: "https://money-repair.jp",
  // },
};
