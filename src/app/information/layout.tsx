import Sheet from "@/components/Sheet"

type Props = {
    children: React.ReactNode;
}

// ISR（Information関連に適用）
export const revalidate = 600;

export default function RootLayout({ children } : Props) {
    return (
        <Sheet title="お役立ち情報" mvClass="-information" contentClass="">
            {children}
        </Sheet>
    )
}