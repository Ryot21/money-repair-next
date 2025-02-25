import StaticSheet from "@/components/sheet/Static";

export const metadata = {
  title: "プライバシーポリシー",
};

type Props = {
    children: React.ReactNode;
}

export default function RootLayout({ children } : Props) {
    return (
        <StaticSheet title="プライバシーポリシー" mvClass="-privacyPolicy" contentClass="">
            {children}
        </StaticSheet>
    )
}