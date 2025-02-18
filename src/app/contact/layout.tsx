import ContactSheet from "@/components/Sheet/contact";

export const metadata = {
  title: "お問い合わせ",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return <ContactSheet mvClass="-contact">{children}</ContactSheet>;
}
