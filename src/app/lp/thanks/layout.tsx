import LpContactSheet from "@/features/lp/sheet/Contact";

export const metadata = {
  title: "マネーリペア | 資料ダウンロード",
  description: "資料ダウンロードありがとうございました。",
};

type Props = {
  children: React.ReactNode;
};

// 【animationType】の選択
// “rotate" or "slide" or "svg" or "company"

export default function RootLayout({ children }: Props) {
  return <LpContactSheet animationType="svg" mvClass="-contact">{children}</LpContactSheet>;
}
