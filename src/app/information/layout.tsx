import Sheet from "@/components/Sheet"

type Props = {
    children: React.ReactNode;
}

export default function RootLayout({ children } : Props) {
    return (
        <Sheet title="お役立ち情報" mvClass="-information" contentClass="-min1200">
            {children}
        </Sheet>
    )
}