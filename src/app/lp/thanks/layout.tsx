import LpContactSheet from "@/features/lp/sheet/Contact";

export const metadata = {
  title: "マネーリペア | 資料ダウンロード",
  description: "資料ダウンロードありがとうございました。",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return <LpContactSheet mvClass="-contact" contentClass="-contact">{children}</LpContactSheet>;
}
