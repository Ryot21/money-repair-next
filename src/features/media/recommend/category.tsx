import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import type { Information } from "@/types/microcms";
import Date from "@/components/elements/date";
import CategoryLink from "@/components/elements/category/categoryLink";

type Props = {
  currentArticle: Information;
  relatedArticles: Information[];
};

export default function Category({ currentArticle, relatedArticles }: Props) {
  if (!relatedArticles || relatedArticles.length === 0) {
    return null;
  }

  return (
    <div className={"p-single--articleArea"}>
      <h2>
        <CategoryLink
          category={currentArticle.category}
          article="information"
        />
        に関する記事はこちら
      </h2>
      <ul className={"c-flex -article-lists -jc-sb"}>
        {relatedArticles.map((article) => (
          <li key={article.id} className={"articleItem"}>
            <Link
              href={`/information/${article.id}` as Route}
              className={"c-post--link"}
            >
              <div className={"c-thumbnail -news mgb3 mgb3s"}>
                <div className={"imgBox"}>
                  <Image
                    src="/images/item/news/news-thumbnail.png"
                    alt="企業1"
                    width={415}
                    height={233}
                  />
                </div>
                <div className={"c-thumbnail--cover"}>
                  <span className={"c-thumbnail--cover__text"}>詳細を見る</span>
                </div>
                <div className={"c-thumbnail--mark"}>
                  <Image
                    src="/images/item/news/news-mark.svg"
                    alt="マネーリペア | ご利用者インタビュー"
                    width={207}
                    height={24}
                  />
                </div>
                <div className={"c-thumbnail--picter"}>
                  {article.thumbnail ? (
                    <Image
                      src={article.thumbnail.url}
                      alt={article.mainTitle}
                      width={415}
                      height={277}
                    />
                  ) : (
                    <Image
                      src="/images/item/480-320.png"
                      alt="お客様との写真"
                      width={415}
                      height={277}
                    />
                  )}
                </div>
              </div>
              {/* テキストエリア */}
              <div className={"c-post--data"}>
                <div className={"c-date mgb2 mgb4s"}>
                  <ul className={"c-date__lists c-flex -col2"}>
                    <li className={"c-date__item"}>
                      <Date date={article.publishedAt || article.createdAt} />
                    </li>
                    <li className={"c-date__item mgt4s"}>
                      <ul className={"c-post--category__lists c-flex -h-cen"}>
                        <li className={"c-post--category__item"}>
                          <p>#{article.category.name}</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <h3 className={"c-post--title s-M -s12 -left -b -ls-1 -lh-1_5"}>
                  {article.mainTitle}
                </h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
