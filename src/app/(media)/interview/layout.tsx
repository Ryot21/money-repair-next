import ArticleSheet from "@/features/media/sheet/Article";

export const metadata = {
  title: "ご利用者の声",
};

type Props = {
    children: React.ReactNode;
};

// ISR（Interview関連に適用）
export const revalidate = 600;

// 【animationType】の選択
// “rotate" or "slide" or "svg" or "company"

export default function RootLayout({ children }: Props) {
    return (
        <ArticleSheet title="ご利用者の声" mvClass="-interview" animationType="svg">
            {children}
        </ArticleSheet>
    )
}