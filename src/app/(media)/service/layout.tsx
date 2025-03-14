import Sheet from "@/features/media/sheet";

export const metadata = {
  title: "マネーリペアの特徴",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }:Props ) {
    return (
        <Sheet title="マネリペとは" mvClass="-service">
            {children}
        </Sheet>
    );
}