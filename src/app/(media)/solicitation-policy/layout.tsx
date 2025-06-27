import StaticSheet from "@/features/media/sheet/Static";

export const metadata = {
  title: "勧誘方針",
};

type Props = {
    children: React.ReactNode;
}

// 【animationType】の選択
// “rotate" or "slide" or "svg" or "company"

export default function RootLayout({ children } : Props) {
    return (
        <StaticSheet title="勧誘方針" mvClass="-solicitationPolicy" contentClass="" animationType="company">
            {children}
        </StaticSheet>
    )
}