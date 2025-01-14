// import styles from "@/app/service/page.module.scss";

import Sheet from "@/components/Sheet";

type Props = {
    children: React.ReactNode;
}

export default function RootLayout({ children }:Props ) {
    return (
        <Sheet title="マネーリペアの特徴" customClass="-service">
            {children}
        </Sheet>
    );
}