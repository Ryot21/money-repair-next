// 投稿リスト > ご利用者の声
import Image from "next/image";
import Link from "next/link";

import Date from "@/components/elements/date";
import Category from "@/components/elements/category";
import type { Interview } from "@/types/microcms";

type Props = {
  contents: Interview[];
};

export default function InterviewList({ contents }: Props) {
  if (contents.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul className={`c-post--lists c-flex -col2M1_3 -jc-st -h-top`}>
      {contents.map((article) => (
        <li key={article.id} className={"c-post--item flexItem_M mgb3 mgb10s"}>
          <Link href={`/interview/${article.id}`} className={"c-post--link"}>
            {/* バナー画像 */}
            <div className={"c-thumbnail -interview"}>
              <div className={"imgBox"}>
                <Image
                  src="/images/item/interview/interview-thumbnail.png"
                  alt="企業1"
                  width={480}
                  height={320}
                />
              </div>
              <div className={"c-thumbnail--cover"}>
                <span className={"c-thumbnail--cover__text"}>詳細を見る</span>
              </div>
              <div className={"c-thumbnail--mark"}>
                <Image
                  src="/images/item/interview/interview-mark.svg"
                  alt="マネーリペア | ご利用者インタビュー"
                  width={186}
                  height={16}
                />
              </div>
              <div className={"c-thumbnail--picter"}>
                {article.thumbnail ? (
                  <Image
                    src={article.thumbnail.url}
                    alt={article.mainTitle}
                    width={480}
                    height={320}
                  />
                ) : (
                  <Image
                    src="/images/item/480-320.png"
                    alt="お客様との写真"
                    width={480}
                    height={320}
                  />
                )}
              </div>
              <p className={"c-thumbnail--title s-ML -s16 -b -color03 -ls-1"}>
                {article.mainTitle}
              </p>
              <p className={"c-thumbnail--subTitle s-SS -s10 -b -color03 -ls-1"}>
                {article.subTitle}
              </p>
            </div>
            {/* テキストエリア */}
            <div className={"c-post--data"}>
              <div className={"c-date mgb2 mgb1s"}>
                <ul className={"c-date__lists c-flex -col2"}>
                  <li className={"c-date__item"}>
                    <Date date={article.publishedAt || article.createdAt} />
                  </li>
                  <li className={"c-date__item"}>
                    <ul className={"c-post--category__lists c-flex -h-cen"}>
                      <li className={"c-post--category__item"}>
                        <Category category={article.category} />
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <h3 className={"c-post--title s-ML -s16 -left -b -ls-2 -lh-1_5"}>
                {article.mainTitle}
              </h3>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
