import Image from "next/image";
// import Link from "next/link";
import type { Interview } from "@/libs/microcms";
import Date from "@/components/Parts/Date";
import CategoryLink from "@/components/Parts/Category/Link";
import Client from "@/components/Parts/Client";

type Props = {
    data : Interview;
}

export default function Article ({ data }: Props) {
    return (
        <>
            {/* バナー */}
            <div className="c-contents--banner -ver01">
                <div className="c-thumbnail -interview mgb10 mgb10s">
                    <div className="imgBox">
                        <Image
                            src="/images/item/interview/interview-thumbnail.png"
                            alt="企業1"
                            width={678}
                            height={381}
                        />
                    </div>
                    <div className="c-thumbnail--mark">
                        <Image
                            src="/images/item/interview/interview-mark.svg"
                            alt="マネーリペア | ご利用者インタビュー"
                            width={339}
                            height={30}
                        />
                    </div>
                    <div className="c-thumbnail--picter">
                        <Image
                            src={data.thumbnail.url}
                            alt="お客様との写真"
                            width={678}
                            height={452}
                        />
                    </div>
                    <p className="c-thumbnail--title"><span className="s-LL -s18 -b -color03 -ls-1">{data.mainTitle}</span></p>
                    <p className="c-thumbnail--subTitle s-L -s16 -b -color03 -ls-1">{data.subTitle}</p>
                </div>
            </div>
            {/* 記事詳細 */}
            <div className="c-contents--inner -bg-white -card ">
                {/* タイトルエリア */}
                <div className="p-single--title">
                    {/* 日付 */}
                    <ul className="c-flex -category -jc-st -h-cen mgb1 mgb2s">
                        <li className="categoryItem"></li>
                        <li className="categoryItem mgr3 mgr3s">
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
                    <Date date={data.publishedAt || data.createdAt}/>
                </div>
                {/* 詳細エリア */}
                <div className="p-single--detail mgb5">

                    {/* 写真１枚目 */}
                    <div className="imgBox -right -w100s">
                        <Image
                            src={data.article1Image.url}
                            alt="インタビュー風景"
                            width={480}
                            height={320}
                        />
                    </div>
                    <div className="detail01" dangerouslySetInnerHTML={{__html: data.article1Body}}>
                    </div>

                    {/* 写真２枚目 */}
                    <div className="imgBox -left -w100s">
                        <Image
                            src={data.article2Image.url}
                            alt="インタビュー風景"
                            width={480}
                            height={320}
                        />
                    </div>
                    <div className="detail02">
                        <h2><span>{data.article2Title}</span></h2>
                        <div dangerouslySetInnerHTML={{__html: data.article2Body}}>
                        </div>
                    </div>

                    {/* 写真３枚目 */}
                    {data.article3Title && data.article3Body && (
                        <div className="detail03">
                            <h2><span>{data.article3Title}</span></h2>
                            <div dangerouslySetInnerHTML={{__html: data.article3Body}}>
                            </div>
                        </div>
                    )}
                </div>
                {/* 投稿者 */}
                <Client client={data.client} />
            </div>

        </>
    );
}
