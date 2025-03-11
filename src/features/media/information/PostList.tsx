// 投稿リスト > お役立ち情報
import Link from "next/link";
import Date from "@/components/elements/date";
import Category from "@/components/elements/category";
import type { Information } from "@/types/microcms";
import Thumbnail from "@/components/thumbnail";

type Props = {
  contents: Information[];
};


export default function InformationList({ contents }: Props) {
  if (contents.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul className={`c-post--lists c-flex -col2M1_3 -jc-st -h-top`}>
      {contents.map((article) => (
        <li key={article.id} className={"c-post--item -card flexItem_M mgb3 mgb10s"}>
          <Link href={`/information/${article.id}`} className={"c-post--link"}>
            {/* バナー画像 */}
            <Thumbnail
              type="information"
              thumbnail={{
                url: article.thumbnail.url,
                alt: article.thumbnailAlt,
              }}
              // title={article.mainTitle}
              // subTitle={article.subTitle}
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
