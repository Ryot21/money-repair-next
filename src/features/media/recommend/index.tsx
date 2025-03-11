
import type { Route } from 'next'
import Link from 'next/link'
import type { Information } from "@/types/microcms";
import Date from "@/components/elements/date";
import Thumbnail from "@/components/thumbnail";

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
                {/* サムネイルコンポーネント | 2025/03/10追加 */}
                <Thumbnail
                  type="information"
                  thumbnail={{
                    url: data.recommend.thumbnail.url,
                    alt: data.recommend.thumbnailAlt,
                  }}
                />
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