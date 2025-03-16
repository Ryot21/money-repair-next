import Sheet from "@/features/media/sheet";

export const metadata = {
    title: "ご利用者の声",
};

type Props = {
    children: React.ReactNode;
};

// ISR（Interview関連に適用）
export const revalidate = 600;

// 【animationType】の選択
// “rotate" or "slide" or "svg" or "company"

export default function RootLayout({ children }: Props) {
    return (
        <Sheet title="ご利用者の声" mvClass="-interview" contentClass="" animationType="svg">
            {children}
        </Sheet>
    )
}