// お知らせ > 詳細ページ
import type { News } from "@/types/microcms";
import Date from "@/components/elements/date";
import Poster from "@/features/media/poster";

type Props = {
  data: News;
};

export default async function Article({ data }: Props) {

  return (
    // <div className="c-contents--inner -bg-white -card ">
    <div className="mgb5">
        {/* 1. タイトルエリア */}
        <div className={"p-single--title"}>
          {/* 日付 */}
          <ul className={"c-flex -category -jc-st -h-cen mgb1 mgb2s"}>
            <li className={"categoryItem"}></li>
            <li className={"categoryItem mgr1 mgr3s"}><span className={"-ws-n pdr1 pdr1s"}>株式会社インプレーム</span></li>
          </ul>
          {/* タイトル */}
          <h1>{data.title}</h1>
          <Date publishedAt={data.publishedAt} createdAt={data.createdAt} />
        </div>
        {/* 2. コンテンツ */}
        <div className={"p-single--detail -info mgb10 mgb20s"} dangerouslySetInnerHTML={{ __html: data.article || "" }}></div>
        {/* 3. 投稿者 */}
        <Poster poster={data.poster} />
    </div>
  );
}
