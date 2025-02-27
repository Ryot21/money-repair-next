import Sheet from "@/features/media/sheet";

export const metadata = {
  title: "メンバーリスト",
};

type Props = {
    children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
    return (
        <main>
            <Sheet title="メンバー" mvClass="-member">
                {children}
            </Sheet>
        </main>
    )
}