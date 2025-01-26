// import styles from "@/app/member/page.module.scss";

import Sheet from "@/components/Sheet";


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