import Sheet from "@/components/sheet/static";

export const metadata = {
  title: "プライバシーポリシー",
};

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