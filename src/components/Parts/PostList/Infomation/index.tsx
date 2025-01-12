import Image from "next/image";
import "@/styles/globals.scss";
import { Information } from "@/libs/microcms";

type Props = {
    information: Information[];
};

export default function InformationList({ information }: Props) {
  if (information.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul className={"c-flex -col2M1_3 -jc-sb -h-top"}>
        {information.map((article) => (
            <li key={article.id} className={"flexItem_M mgb5 mgb10s"}>
                <a className={"c-post--link"} href="">
                    {/* バナー画像 */}
                    <div className={"c-thumbnail -news mgb3 mgb3s"}>
                        <div className={"imgBox"}>
                        <Image
                            src="/images/item/news/news-thumbnail.png"
                            alt="企業1"
                            width={480}
                            height={320}
                        />
                        </div>
                        <div className={"c-thumbnail--cover"}>
                        <span className={"c-thumbnail--cover__text"}>
                            詳細を見る
                        </span>
                        </div>
                        <div className={"c-thumbnail--mark"}>
                        <Image
                            src="/images/item/news/news-mark.svg"
                            alt="マネーリペア | お役立ち情報"
                            width={186}
                            height={16}
                        />
                        </div>
                        <div className={"c-thumbnail--picter"}>
                        <Image
                            src="/images/item/480-320.png"
                            alt="お客様との写真"
                            width={480}
                            height={320}
                        />
                        </div>
                        <p className={"c-thumbnail--title"}>
                        <span className={"s-M -s20 -b -color03 -ls-1"}>
                            {article.mainTitle}
                        </span>
                        </p>
                        <p
                        className={
                            "c-thumbnail--subTitle s-SS -s16 -b -color03 -ls-1"
                        }
                        >
                        {article.subTitle}
                        </p>
                    </div>
                    {/* テキストエリア */}
                    <div className={"c-date mgb2 mgb1s"}>
                        <ul className={"c-date__lists c-flex -col2"}>
                        <li className={"c-date__item"}>
                            <p className={"s-M -s16 -left -b -ls-2"}>
                            {article.date}
                            </p>
                        </li>
                        <li className={"c-date__item"}>
                            <ul
                            className={"c-post--category__lists c-flex -h-cen"}
                            >
                            <li className={"c-post--category__item"}>
                                <p>#{article.category.name}</p>
                            </li>
                            </ul>
                        </li>
                        </ul>
                    </div>
                    <h3 className={"c-post--title s-M -s16 -left -b -ls-1"}>
                        {article.mainTitle}
                    </h3>
                </a>
            </li>
        ))}
    </ul>
  );
}
