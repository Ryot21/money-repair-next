import StaticSheet from "@/features/media/sheet/Static";

export const metadata = {
  title: "プライバシーポリシー",
};

type Props = {
    children: React.ReactNode;
}

// 【animationType】の選択
// “rotate" or "slide" or "svg" or "company"

export default function RootLayout({ children } : Props) {
    return (
        <StaticSheet title="プライバシーポリシー" mvClass="-privacyPolicy" contentClass="" animationType="company">
            {children}
        </StaticSheet>
    )
}