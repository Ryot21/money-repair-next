import Image from "next/image";
import Link from "next/link";
import type { Client } from "@/libs/microcms";

type Props = {
    client: Client[];
}

export default function Client({ client }: Props) {
    return (
        <div className={"c-card -t01 w50 w100s -right"}>
            {client.map((item, index) => (
                <ul key={index} className={"c-card-lists"}>
                    {/* プロフィール画像 */}
                    <li className={"c-card-item"}>
                        <div className={"imgBox"}>
                            {item && (
                                <Image 
                                    src={item.icon.url}
                                    alt={item.name}
                                    width={150}
                                    height={150}
                                />
                            )}
                        </div>
                    </li>
                    {/* 詳細情報 */}
                    <li className={"c-card-item"}>
                        <span className={"postman"}>導入先企業</span>
                        <p className={"name"}>{item.name}</p>
                        <p>{item.description}</p>
                        <Link href={`${item.url}`} className={"c-link -logo"}>{item.url}</Link>
                    </li>
                </ul>
            ))}
        </div>
    );
}