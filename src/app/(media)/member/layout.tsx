import Sheet from "@/features/media/sheet";

export const metadata = {
  title: "メンバーリスト",
};

type Props = {
    children: React.ReactNode;
}

// 【animationType】の選択
// “rotate" or "slide" or "svg" or "company"

export default function RootLayout({ children }: Props) {
    return (
        <main>
            <Sheet title="メンバー" mvClass="-member" animationType="rotate">
                {children}
            </Sheet>
        </main>
    )
}