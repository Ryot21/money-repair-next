import Sheet from "@/features/media/sheet";

export const metadata = {
  title: "マネリペの特徴",
};

type Props = {
  children: React.ReactNode;
};

// 【animationType】の選択
// “rotate" or "slide" or "svg" or "company"

export default function RootLayout({ children }:Props ) {
    return (
        <Sheet title="マネリペとは" mvClass="-service" animationType="svg">
            {children}
        </Sheet>
    );
}