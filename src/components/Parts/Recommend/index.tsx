
import type { Route } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import type { Information } from "@/libs/microcms";
import Date from "@/components/Parts/Date";

type Props = {
  data : Information;
}

export default function Recommend({ data }: Props) {
  // recommendフィールドが存在しない場合は何も表示しない
  if (!data.recommend) {
    return null;
  }
  return (
    <div className={"c-card -t02"}>
        <Link href={`/information/${data.recommend.id}` as Route} className="">
          <ul className={"c-card-lists"}>
              <li className={"c-card-item"}>
                  <div className={"c-thumbnail -news mgb3 mgb3s"}>
                      <div className={"imgBox"}>
                          <Image
                              src="/images/item/news/news-thumbnail.png"
                              alt="企業1"
                              width={241}
                              height={135}
                          />
                      </div>
                      <div className={"c-thumbnail--mark"}>
                          <Image
                              src="/images/item/news/news-mark.svg"
                              alt="マネーリペア | ご利用者インタビュー"
                              width={181}
                              height={20}
                          />
                      </div>
                      <div className={"c-thumbnail--picter"}>
                        {data.recommend.thumbnail ? (
                          <Image
                            src={data.recommend.thumbnail.url}
                            alt={data.recommend.mainTitle}
                            width={241}
                            height={160}
                          />
                        ) : (
                          // サムネイルが存在しない場合のフォールバック
                          <Image
                            src="/images/item/480-320.png"
                            alt="お客様との写真"
                            width={241}
                            height={160}
                          />
                        )}
                      </div>
                  </div>
              </li>
              <li className={"c-card-item"}>
                  <Date date={data.recommend.publishedAt || data.recommend.createdAt}/>
                  <h5>{data.recommend?.mainTitle}</h5>
                  <div className={"c-card--intro"} dangerouslySetInnerHTML={{__html: data.recommend?.read || ""}}></div>
              </li>
          </ul>
        </Link>
    </div>
  )
}