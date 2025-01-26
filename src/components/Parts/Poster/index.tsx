import Image from "next/image";
import Link from "next/link";
import type { Poster } from "@/libs/microcms";

type PosterProps = {
    poster: Poster | Poster[];  // 単一のオブジェクトまたは配列を受け入れる
};

export default function Poster({ poster }: PosterProps) {
    const posters = Array.isArray(poster) ? poster : [poster];
    return (
        <>
           {posters.map((poster, index) => (
                <div key={index} className={"c-card -t01 mgb10 mgb10s"}>
                    <ul className={"c-card-lists"}>
                        <li className={"c-card-item"}>
                            <div className="imgBox">
                                {poster && (
                                    <Image 
                                        src={poster.image.url}
                                        alt={poster.name}
                                        width={150}
                                        height={150}
                                    />
                                )}
                            </div>
                        </li>
                        <li className={"c-card-item"}>
                            <span className={"postman"}>この記事を書いた人</span>
                            <p className={"name"}>{poster.name}
                                <br className={"sp"} />
                                <span className={"jobTitle"}>{poster.officialPosition}</span>
                            </p>
                            <p>{poster.description}</p>
                            <Link href={`${poster.url}`} className={"c-link -logo"}>{poster.url}</Link>
                        </li>
                    </ul>
                </div>
            ))}
        </>
    )
}