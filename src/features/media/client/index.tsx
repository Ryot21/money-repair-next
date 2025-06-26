import Image from "next/image";
import Link from "next/link";
import type { Client } from "@/types/microcms";

type Props = {
    client: Client | Client[];
};

export default function Client({ client }: Props) {
    const clients = Array.isArray(client) ? client : [client];
    
    return (
        <div className={"c-card -t01 w80 w100s"}>
            {clients.map((item, index) => (
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
                        <span className={"postman mgb1 mgb2s"}>導入先企業</span>
                        <p className={"name mgb1"}>{item.name}</p>
                        <p className={"address mgb2 mgb5s"}>{item.address}</p>
                        {/* 事業内容 追加予定 */}
                        {/* {item.businessArea && (
                            <ul>
                                <li><p className="s-S">1. {item.businessArea.business01}</p></li>
                                {item.businessArea.business02 && (<li><p className="">2. {item.businessArea.business02}</p></li>)}
                                {item.businessArea.business03 && (<li><p className="">3. {item.businessArea.business03}</p></li>)}
                                {item.businessArea.business04 && (<li><p className="">4. {item.businessArea.business04}</p></li>)}
                                {item.businessArea.business05 && (<li><p className="">5. {item.businessArea.business05}</p></li>)}
                            </ul>
                        )} */}
                        <p className="description -lh-1_5 mgb2 mgb5s">{item.description}</p>
                        <Link href={`${item.url}`} className={"c-link -logo -blue mgb2 mgb5s"}>{item.url}</Link>
                    </li>
                </ul>
            ))}
        </div>
    );
}