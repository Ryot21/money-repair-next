import type { Category } from "@/libs/microcms";
import Link from "next/link";
import "@/styles/globals.scss";

type Props = {
    category: Category[],
    article: string,
    customClass: string
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

export function CategoryLink({ category, article, customClass } : Props) {
    return (
        <>
            { category.map((item, index) => (
                <Link
                    key={index}
                    href={`/${article}/${item.name}`}
                    className={customClass}
                >
                    # {item.name}
                </Link>
            ))}
        </>
    );
}
