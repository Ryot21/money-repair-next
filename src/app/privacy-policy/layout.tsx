import Sheet from "@/components/Sheet/static";

type Props = {
    children: React.ReactNode;
}

export default function RootLayout({ children } : Props) {
    return (
        <Sheet title="プライバシーポリシー" mvClass="-privacyPolicy" contentClass="">
            {children}
        </Sheet>
    )
}