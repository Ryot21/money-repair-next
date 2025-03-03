import Image from "next/image";
import Link from "next/link";
import { getPosterList } from "@/features/media/api/microcms/getPosterList";


export default async function Page(){

    const data = await getPosterList();

    return(
        <>
            {data.contents.length === 0 ? (
                <p>メンバーが登録されていません...</p>
            ) : (
                <ul>
                    {data.contents.map((member) => (
                        <li key={member.id} className="">
                            {/* 投稿者 */}
                            <div className={"c-card -t01 mgb10 mgb10s"}>
                                <ul className={"c-card-lists"}>
                                    {/* プロフィール画像 */}
                                    <li className={"c-card-item"}>
                                        <div className="imgBox">
                                            <Image 
                                                src={member.image.url}
                                                alt={member.name}
                                                width={150}
                                                height={150}
                                            />
                                            
                                        </div>
                                    </li>
                                    {/* 詳細情報 */}
                                    <li className={"c-card-item"}>
                                        <span className={"postman"}>この記事を書いた人</span>
                                        <p className={"name"}>{member.name}
                                            <br className={"sp"} />
                                            <span className={"jobTitle"}>{member.officialPosition}</span>
                                        </p>
                                        <p>{member.description}</p>
                                        <Link href={`${member.url}`} className={"c-link -logo"}>{member.url}</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}