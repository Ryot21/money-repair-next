import Sheet from "@/components/Sheet";

export const metadata = {
  title: "マネーリペアの特徴",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }:Props ) {
    return (
        <Sheet title="マネーリペアの特徴" mvClass="-service">
            {children}
        </Sheet>
    );
}