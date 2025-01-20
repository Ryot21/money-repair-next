import { Category, getCategoryList } from "@/libs/microcms";
import Link from "next/link";
import "@/styles/globals.scss";

type Props = {
    category?: Category[],
    article?: string,
    customClass?: string
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
export async function CategoryList({ article }: Props) {
    const data = await getCategoryList();
    return (
        <>
            {data.contents.length === 0 ? (
                <p>記事がありません...</p>
            ) : (
                <div className={"c-category"}>
                    <ul className="c-category__box">
                        <li className={"titleArea"}><span>カテゴリー</span></li>
                        <li className={"itemArea"}>
                            <ul className={"c-category__lists"}>
                                {data.contents.map((category) => (
                                    <li key={category.id} className={"c-category__item"}>
                                        <Link href={`/${article}/${category.id}`} className={""} >
                                            #{category.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}
