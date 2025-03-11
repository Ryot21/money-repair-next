// 投稿リスト > ご利用者の声
import Link from "next/link";
import Date from "@/components/elements/date";
import Category from "@/components/elements/category";
import type { Interview } from "@/types/microcms";
import Thumbnail from "@/components/thumbnail";

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
            {/* サムネイルコンポーネント | 2025/03/10追加 */}
            <Thumbnail
              type="interview"
              thumbnail={{
                url: article.thumbnail.url,
                alt: article.thumbnailAlt,
              }}
              title={article.mainTitle}
              subTitle={article.subTitle}
            />
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
