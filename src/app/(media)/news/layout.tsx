import Sheet from "@/features/media/sheet";

export const metadata = {
    title: "お知らせ",
};

type Props = {
    children: React.ReactNode;
};

// ISR（Information関連に適用）
export const revalidate = 600;

export default function RootLayout({ children } : Props) {
    return (
        <Sheet title="お知らせ" mvClass="-news" contentClass="">
            {children}
        </Sheet>
    )
}