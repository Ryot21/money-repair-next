import type { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import type { Information } from "@/libs/microcms";
import Date from "@/components/Parts/Date";
import CategoryLink from "@/components/Parts/Category/Link";

type Props = {
    currentArticle: Information;
    relatedArticles: Information[];
}

// 日付を比較して新しい方を返す関数を追加
const getLatestDate = (publishedAt: string | undefined, updatedAt: string | undefined): string => {

    // nullish coalescing operatorを使用して安全にデフォルト値を設定
    const publishDate = new Date(publishedAt ?? '0');
    const updateDate = new Date(updatedAt ?? '0');
    
    // 比較して新しい方の日付を返す
    return (publishDate > updateDate ? publishedAt : updatedAt) ?? new Date().toISOString();
};

export default function RecommendCategory({ currentArticle, relatedArticles }: Props) {
    try {
        // relatedArticlesが存在しない、または空の場合に何も表示しない
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
                    <Link href={`/information/${article.id}` as Route} className={"c-post--link"}>
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
                                priority={false}
                                loading="lazy"
                                quality={75}
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
                        <p className={"c-thumbnail--title"}>
                        <span className={"s-M -b -color03 -ls-1"}>{article.mainTitle}</span>
                        </p>
                        <p className={"c-thumbnail--subTitle s-SS -b -color03 -ls-1"}>{article.subTitle}</p>
                    </div>
                    <div className={"c-date mgb2 mgb1s"}>
                        <ul className={"c-date__lists c-flex -col2"}>
                        <li className={"c-date__item"}>
                            <Date date={getLatestDate(article.publishedAt || '', article.updatedAt || '')} />
                        </li>
                        <li className={"c-date__item"}>
                            <ul className={"c-post--category__lists c-flex -h-cen"}>
                            <li className={"c-post--category__item"}>
                                <p>#{article.category.name}</p>
                            </li>
                            </ul>
                        </li>
                        </ul>
                    </div>
                    <h3 className={"c-post--title s-M -s14 -left -b -ls-1"}>{article.mainTitle}</h3>
                    </Link>
                </li>
                ))}
            </ul>
            </div>
        );
    } catch (error) {
        console.error('RecommendCategory error:', error);
        return null;
    }
}