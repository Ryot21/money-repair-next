import Image from "next/image";
import type { Information } from "@/types/microcms";
import Date from "@/components/elements/date";
import CategoryLink from "@/components/elements/category/CategoryLink";
import Poster from "@/features/media/poster";
import SearchField from "@/components/elements/searchField";
import TableOfContents from "@/features/media/tableOfContents";
import Recommend from "@/features/media/recommend";
import { getInformationsByCategory } from "@/features/media/api/microcms/getInformation";
import RecommendCategory from "@/features/media/recommend/Category";
import ContactSidebar from "@/features/media/contact/sidebar";

type Props = {
  data: Information;
};

export default async function Article({ data }: Props) {
  // 別記事紹介 データ取得部分
  const relatedArticles = await getInformationsByCategory(
    data.category.id,
    data.id
  );

  return (
    <ul className={"c-flex -single-lists -jc-sb"}>
      {/* 記事コンテンツ */}
      <li className={"singleItem mgb10s"}>
        {/* 1. タイトルエリア */}
        <div className={"p-single--title"}>
          {/* 日付 */}
          <ul className={"c-flex -category -jc-st -h-cen mgb1 mgb2s"}>
            <li className={"categoryItem"}></li>
            <li className={"categoryItem mgr1 mgr3s"}>
              <span className={"-ws-n pdr1 pdr1s"}>株式会社インプレーム</span>
            </li>
            {/* カテゴリー */}
            <li className={"categoryItem"}>
              <CategoryLink
                article="information"
                category={data.category}
                customClass="p-single--category"
              />
            </li>
          </ul>
          {/* タイトル */}
          <h1>{data.mainTitle}</h1>
          <Date date={data.publishedAt || data.createdAt} />
        </div>
        {/* 2. バナー */}
        <div className={"c-thumbnail -news"}>
          <div className={"imgBox"}>
            <Image
              src="/images/item/news/news-thumbnail.png"
              alt="サムネイル"
              width={856}
              height={481}
            />
          </div>
          <div className={"c-thumbnail--cover"}>
            <span className={"c-thumbnail--cover__text"}>詳細を見る</span>
          </div>
          <div className={"c-thumbnail--mark"}>
            <Image
              src="/images/item/news/news-mark.svg"
              alt="マネーリペア | お役立ち情報"
              width={428}
              height={48}
            />
          </div>
          <div className={"c-thumbnail--picter"}>
            <Image
              src={data.thumbnail.url}
              alt={data.thumbnailAlt}
              width={856}
              height={570}
            />
          </div>
        </div>
        {/* 3. お悩み */}
        <div className={"c-card -t04 mgt15 mgt15s"}>
          {data.captionLists && (
            <ul className={"c-card-lists"}>
              <li className={"c-card-item"}>
                <p className={"c-link -check s-M -s12 -b -ls-1 -lh-1_5"}>
                  {data.captionLists.captionTitle01}
                </p>
              </li>
              {data.captionLists.captionTitle02 && (
                <li className={"c-card-item"}>
                  <p className={"c-link -check s-M -s12 -b -ls-1 -lh-1_5"}>
                    {data.captionLists.captionTitle02}
                  </p>
                </li>
              )}
              {data.captionLists.captionTitle03 && (
                <li className={"c-card-item"}>
                  <p className={"c-link -check s-M -s12 -b -ls-1 -lh-1_5"}>
                    {data.captionLists.captionTitle03}
                  </p>
                </li>
              )}
              {data.captionLists.captionTitle04 && (
                <li className={"c-card-item"}>
                  <p className={"c-link -check s-M -s12 -b -ls-1 -lh-1_5"}>
                    {data.captionLists.captionTitle04}
                  </p>
                </li>
              )}
              {data.captionLists.captionTitle05 && (
                <li className={"c-card-item"}>
                  <p className={"c-link -check s-M -s12 -b -ls-1 -lh-1_5"}>
                    {data.captionLists.captionTitle05}
                  </p>
                </li>
              )}
            </ul>
          )}
        </div>
        {/* 4. 導入文 */}
        <div
          className={"p-single--intro"}
          dangerouslySetInnerHTML={{ __html: data.read || "" }}
        ></div>
        {/* 5. 目次 */}
        <TableOfContents content={data.article} />
        {/* 6. コンテンツ */}
        <div
          className={"p-single--detail -info"}
          dangerouslySetInnerHTML={{ __html: data.article || "" }}
        ></div>
        {/* 7. 投稿者 */}
        <Poster poster={data.poster} />
        {/* 8. ピックアップ */}
        <Recommend data={data} />
        {/* 9. 同カテゴリー > 別記事紹介 */}
        <RecommendCategory
          currentArticle={data}
          relatedArticles={relatedArticles}
        />
      </li>
      {/* サイドバー */}
      <li className={"singleItem c-sideber"}>
        {/* 検索窓 */}
        <SearchField />
        {/* 固定エリア */}
        <div className={"c-sideber--sticky"}>
          {/* 目次 */}
          <TableOfContents content={data.article} isSidebar={true} />
          {/* cta */}
          <ContactSidebar />
        </div>
      </li>
    </ul>
  );
}
