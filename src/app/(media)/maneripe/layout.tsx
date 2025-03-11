import Sheet from "@/features/media/sheet";

export const metadata = {
    title: "マネリペ情報",
};

type Props = {
    children: React.ReactNode;
};

// ISR（Information関連に適用）
export const revalidate = 600;

export default function RootLayout({ children } : Props) {
    return (
        <Sheet title="マネリペ情報" mvClass="-maneripe" contentClass="">
            {children}
        </Sheet>
    )
}