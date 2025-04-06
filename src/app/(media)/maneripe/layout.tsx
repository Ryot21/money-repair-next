import ArticleSheet from "@/features/media/sheet/Article";

export const metadata = {
    title: "マネリペ情報",
};

type Props = {
    children: React.ReactNode;
};

// ISR（Information関連に適用）
export const revalidate = 600;

// 【animationType】の選択
// “rotate" or "slide" or "svg" or "company"

export default function RootLayout({ children } : Props) {
    return (
        <ArticleSheet title="マネリペ情報" mvClass="-maneripe" animationType="svg">
            {children}
        </ArticleSheet>
    )
}