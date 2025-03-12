// 投稿リスト > お知らせ
import Link from "next/link";
import Date from "@/components/elements/date";
import type { News } from "@/types/microcms";

type Props = {
  contents: News[];
};


export default function NewsList({ contents }: Props) {
  if (contents.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul className={`c-post--lists`}>
      {contents.map((article) => (
        <li key={article.id} className={"c-post--item mgb1 mgb2s"}>
          <Link href={`/news/${article.id}`} className={"c-post--link"}>

            {/* テキストエリア */}
            <div className={"c-post--data"}>
              <div className={"c-date mgb1 mgb1s"}>
                <ul className={"c-date__lists c-flex -col2"}>
                  <li className={"c-date__item"}>
                    <Date date={article.publishedAt || article.createdAt} />
                  </li>
                  <li className={"c-date__item"}>
                  </li>
                </ul>
              </div>
              <h3 className={"c-post--title s-ML -s16 -left -b -ls-2 -lh-1_5"}>
                {article.title}
              </h3>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
