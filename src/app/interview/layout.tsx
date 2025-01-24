import Sheet from "@/components/Sheet"

type Props = {
    children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
    return (
        <Sheet title="ご利用者の声" mvClass="-interview" contentClass="">
            {children}
        </Sheet>
    )
}