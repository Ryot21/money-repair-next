import ContactSheet from "@/features/media/sheet/Contact";

export const metadata = {
  title: "お問い合わせ",
};

type Props = {
  children: React.ReactNode;
};

// 【animationType】の選択
// “rotate" or "slide" or "svg" or "company"

export default function RootLayout({ children }: Props) {
  return <ContactSheet animationType="company" mvClass="-contact">{children}</ContactSheet>;
}
