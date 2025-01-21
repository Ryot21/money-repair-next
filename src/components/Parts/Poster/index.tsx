import Image from "next/image";
import Link from "next/link";
import type { Poster } from "@/libs/microcms";

type Props = {
    poster: Poster[];
}

export default function Poster({ poster } : Props) {
    return (
        <>
            { poster.map((item, index) => (
                <div key={index} className={"c-card -t01 mgb10 mgb10s"}>
                    <ul className={"c-card-lists"}>
                        <li className={"c-card-item"}>
                            <div className="imgBox">
                                {item && (
                                    <Image 
                                        src={item.image.url}
                                        alt={item.name}
                                        width={150}
                                        height={150}
                                    />
                                )}
                            </div>
                        </li>
                        <li className={"c-card-item"}>
                            <span className={"postman"}>この記事を書いた人</span>
                            <p className={"name"}>{item.name}
                                <br className={"sp"} />
                                <span className={"jobTitle"}>{item.officialPosition}</span>
                            </p>
                            <p>{item.description}</p>
                            <Link href={`${item.url}`} className={"c-link -logo"}>{item.url}</Link>
                        </li>
                    </ul>
                </div>
            ))}
        </>
    )
}