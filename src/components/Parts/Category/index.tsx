
import type { Category } from "@/libs/microcms";
import "@/styles/globals.scss";

type Props = {
    category: Category[];
}

export default function Category({ category } : Props) {
    // console.log(category[0].name)

    return (
        // <p>#{category.name}</p>
        <>
            { category.map((item, index) => (
                <p key={index}># {item.name}</p>
            ))}
        </>
    );
}