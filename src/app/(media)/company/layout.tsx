import StaticSheet from "@/features/media/sheet/Static";

export const metadata = {
  title: "会社概要",
};

type Props = {
    children: React.ReactNode;
}

// 【animationType】の選択
// “rotate" or "slide" or "svg" or "company"

export default function RootLayout({ children } : Props) {
    return (
        <StaticSheet title="会社概要" animationType="company" mvClass="-company" contentClass="">
            {children}
        </StaticSheet>
    )
}