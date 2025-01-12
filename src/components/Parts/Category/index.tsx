
import type { Category } from "@/libs/microcms";
import "@/styles/globals.scss";

type Props = {
    category: Category;
}

export default function Category({ category } : Props) {
    return (
            <a href="">#{category.name}</a>
    );
}