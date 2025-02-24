import Sheet from "@/components/sheet";

export const metadata = {
    title: "ご利用者の声",
};

type Props = {
    children: React.ReactNode;
};

// ISR（Interview関連に適用）
export const revalidate = 600;

export default function RootLayout({ children }: Props) {
    return (
        <Sheet title="ご利用者の声" mvClass="-interview" contentClass="">
            {children}
        </Sheet>
    )
}