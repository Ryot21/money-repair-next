import { getInformationCategoryList } from "@/libs/microcms";
import Link from "next/link";
import "@/styles/globals.scss";

type CategoryListProps = {
    article: string,// information or interview
    // selectedCategoryId?: string,
}

// 【カテゴリーリスト表示】
export default async function CategoryList({ article }: CategoryListProps) {
    const categories = await getInformationCategoryList();

    if (!categories || categories.contents.length === 0) {
        return <p>カテゴリーがありません。</p>;
    }
    return (
        <div className={"c-category"}>
            <ul className="c-category__box">
                <li className={"titleArea"}><span>カテゴリー</span></li>
                <li className={"itemArea"}>
                    <ul className={"c-category__lists"}>
                        {categories.contents.map((item) => (
                            <li key={item.id} className={"c-category__item"}>
                                <Link href={`/${article}/category/${item.id}`}>
                                    #{item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
}