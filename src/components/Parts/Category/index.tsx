import Link from "next/link";
import type { Category } from "@/libs/microcms";
import "@/styles/globals.scss";

type Props = {
    category: Category[],
    article: string
}

export function Category({ category } : Props) {
    return (
        <>
            { category.map((item, index) => (
                <p key={index}># {item.name}</p>
            ))}
        </>
    );
}

export function CategoryLink({ category, article } : Props) {
    return (
        <>
            { category.map((item, index) => (
                <Link key={index} href={`/${article}/${item.name}`} className="p-single--category"># {item.name}</Link>
            ))}
        </>
    );
}