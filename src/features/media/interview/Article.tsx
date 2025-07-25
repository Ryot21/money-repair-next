// ご利用者の声 > 詳細ページ

import Image from "next/image";
import type { Interview } from "@/types/microcms";
import Date from "@/components/elements/date";
import CategoryLink from "@/components/elements/category/CategoryLink";
import Client from "@/features/media/client";
import Thumbnail from "@/components/thumbnail";

type Props = {
  data: Interview;
};

export default function Article({ data }: Props) {
  return (
    <>

      {/* サムネイルコンポーネント | 2025/03/10追加 */}
      <div className="c-contents--banner -ver01">
        <div className="mgb5 mgb10s">
          <Thumbnail
            type="interview"
            thumbnail={{
              url: data.thumbnail.url,
              alt: data.thumbnailAlt,
            }}
            title={data.mainTitle}
            subTitle={data.subTitle}
          />
        </div>
      </div>
      {/* 記事詳細 */}
      {/* <div className="c-contents--inner -bg-white -card "> */}
      <div className="mgb5">
        {/* タイトルエリア */}
        <div className="p-single--title">
          {/* 日付 */}
          <ul className="c-flex -category -jc-st -h-cen mgb1 mgb2s">
            <li className="categoryItem"></li>
            <li className="categoryItem mgr1 mgr3s">
              <span className="-ws-n pdr1 pdr1s">{data.company}</span>
            </li>
            {/* カテゴリー */}
            <li className="categoryItem mgr3 mgr3s">
              <CategoryLink
                article="interview"
                category={data.category}
                customClass="p-single--category"
              />
            </li>
          </ul>
          {/* タイトル */}
          <h1>{data.mainTitle}</h1>
          <Date date={data.publishedAt || data.createdAt} />
        </div>
        {/* 導入文 */}
        <div className="p-single--read">
          {/* <p className="p-single--subTitle">{data.subTitle}</p> */}
          <p dangerouslySetInnerHTML={{ __html: data.read || "" }}></p>
        </div>
        {/* 詳細エリア */}
        <div className="p-single--detail mgb10">
          {/* セクション1 右寄せ */}
          <div className="imgBox -right -w100s">
            <Image
              src={data.article1Image.url}
              alt="インタビュー風景"
              width={480}
              height={320}
            />
          </div>
          <div className="detail01">
            <h2>
              <span>{data.article1Title}</span>
            </h2>
            <div
              dangerouslySetInnerHTML={{ __html: data.article1Body || "" }}
            ></div>
          </div>

          {/* セクション2 左寄せ */}
          <div className="imgBox -left -w100s">
            <Image
              src={data.article2Image.url}
              alt="インタビュー風景"
              width={480}
              height={320}
            />
          </div>
          <div className="detail02">
            <h2>
              <span>{data.article2Title}</span>
            </h2>
            <div
              dangerouslySetInnerHTML={{ __html: data.article2Body || "" }}
            ></div>
          </div>

          {/* セクション3 右寄せ */}
          {data.article3Image && (
            <div className="imgBox -right -w100s">
              <Image
                src={data.article3Image.url}
                alt="インタビュー風景"
                width={480}
                height={320}
              />
            </div>
          )}
          {data.article3Title && data.article3Body && (
            <div className="detail03">
              <h2>
                <span>{data.article3Title}</span>
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: data.article3Body || "" }}
              ></div>
            </div>
          )}

          {/* セクション4 左寄せ */}
          {data.article4Image && (
            <div className="imgBox -left -w100s">
              <Image
                src={data.article4Image.url}
                alt="インタビュー風景"
                width={480}
                height={320}
              />
            </div>
          )}
          {data.article4Title && data.article4Body && (
            <div className="detail03">
              <h2>
                <span>{data.article4Title}</span>
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: data.article4Body || "" }}
              ></div>
            </div>
          )}

          {/* セクション5 右寄せ */}
          {data.article5Image && (
            <div className="imgBox -right -w100s">
              <Image
                src={data.article5Image.url}
                alt="インタビュー風景"
                width={480}
                height={320}
              />
            </div>
          )}
          {data.article5Title && data.article5Body && (
            <div className="detail03">
              <h2>
                <span>{data.article5Title}</span>
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: data.article5Body || "" }}
              ></div>
            </div>
          )}

          {/* セクション6 左寄せ */}
          {data.article6Image && (
            <div className="imgBox -left -w100s">
              <Image
                src={data.article6Image.url}
                alt="インタビュー風景"
                width={480}
                height={320}
              />
            </div>
          )}
          {data.article6Title && data.article6Body && (
            <div className="detail03">
              <h2>
                <span>{data.article6Title}</span>
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: data.article6Body || "" }}
              ></div>
            </div>
          )}

          {/* セクション7 右寄せ */}
          {data.article7Image && (
            <div className="imgBox -right -w100s">
              <Image
                src={data.article7Image.url}
                alt="インタビュー風景"
                width={480}
                height={320}
              />
            </div>
          )}
          {data.article7Title && data.article7Body && (
            <div className="detail03">
              <h2>
                <span>{data.article7Title}</span>
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: data.article7Body || "" }}
              ></div>
            </div>
          )}

          {/* セクション8 左寄せ */}
          {data.article8Image && (
            <div className="imgBox -left -w100s">
              <Image
                src={data.article8Image.url}
                alt="インタビュー風景"
                width={480}
                height={320}
              />
            </div>
          )}
          {data.article8Title && data.article8Body && (
            <div className="detail03">
              <h2>
                <span>{data.article8Title}</span>
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: data.article8Body || "" }}
              ></div>
            </div>
          )}


        </div>
        {/* 投稿者 */}
        <Client client={data.client} />
      </div>
    </>
  );
}
