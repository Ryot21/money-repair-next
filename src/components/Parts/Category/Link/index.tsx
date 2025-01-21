import type { Category } from "@/libs/microcms";
import Link from "next/link";
import "@/styles/globals.scss";

type CategoryLinkProps = {
    category: Category,
    article: string,// information or interview
    customClass: string
}

// 【リンク表示】
export default function CategoryLink({ category, article, customClass } : CategoryLinkProps) {
    return (
        <Link
            href={`/${article}/category/${category.id}`}
            className={customClass}
        >
            # {category.name}
        </Link>
    );
}