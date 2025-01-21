import type { Category } from "@/libs/microcms";
import "@/styles/globals.scss";

type CategoryProps = {
    category: Category
}

// 【カテゴリ表示】
export default function Category({ category } : CategoryProps) {
    return <span># {category.name}</span>
}