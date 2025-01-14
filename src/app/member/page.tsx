import Image from "next/image";
import Link from "next/link";

// コンポーネント
// import LogoSlider from "@/components/Slider/Logo";
// import ContactBottom from "@/components/Contact/Bottom";

const data = {
    contents: [
        {
            id: "1",
            name: "江本 一郎",
            officialPosition: "代表取締役社長",
            description: "皆さまの価値観に合ったライフデザインを提供し、人生100年の時代をより豊かに過ごせるよう、お子様、お孫様へと世代を超えた金融のトータルサポートを提供していきます。",
            profilePicture: "/images/profile/emoto-20241219.png",
            url: "https://impreme.jp/",
        },
        {
            id: "2",
            name: "石橋 拓也",
            officialPosition: "保険事業部",
            description: "前職にて保険活用のノウハウを学び、現在は税務の知識も加えたオリジナルのご提案で、お客様の「オカネの悩み」に応えます。",
            profilePicture: "/images/profile/ishibashi-20241219.png",
            url: "https://impreme.jp/"
        },
        {
            id: "3",
            name: "関根 大輔",
            officialPosition: "不動産事業部",
            description: "不動産部門ではマイホームから投資用不動産など土地や建物の売買などを行なっております。結婚、出産、相続などライフステージの変化に合わせて不動産売却、購入のサポートを致します。",
            profilePicture: "/images/profile/sekine-20241219.png",
            url: "https://impreme.jp/",
        },
        {
            id: "4",
            name: "マエダ リョウタ",
            officialPosition: "マーケティング事業部",
            description: "都内のWEB制作会社でキャリアをスタートし、不動産会社のLPやポータルサイト開発を経て、2024年10月より株式会社インプレームでフロントエンジニア兼WEBマーケターとして勤務しています。多彩な経験を活かし、ビジネスニーズに応じた効果的なWEB戦略を提案し、ユーザーに響くデザインを制作。お客様のビジネスをさらに輝かせるお手伝いをいたします。",
            profilePicture: "/images/profile/maeda-20241219.png",
            url: "https://impreme.jp/",
        },
    ],
}

export default function Page(){
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
                                                src={member.profilePicture}
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
                    ))};
                </ul>
            )};
        </>
    );
}