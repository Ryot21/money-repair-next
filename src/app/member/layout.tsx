// import styles from "@/app/member/page.module.scss";

import Sheet from "@/components/Sheet";


type Props = {
    children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
    return (
        <Sheet title="メンバー" customClass="-member">
            {children}
        </Sheet>
    );
}