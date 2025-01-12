import Link from "next/link";
import type { Category } from "@/libs/microcms";
import "@/styles/globals.scss";

type Props = {
    category: Category;
}

export default function Category({ category } : Props) {
    return (
        <Link href="">#{category.name}</Link>
    );
}