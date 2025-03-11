// 投稿リスト > ご利用者の声
import Thumbnail from "@/components/thumbnail";

import LpClient from "@/features/lp/client";
import type { Interview } from "@/types/microcms";

type Props = {
  contents: Interview[];
};

export default function LpInterviewList({ contents }: Props) {
  if (contents.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul className={`c-post--lists c-flex -col2M1_3 -jc-st -h-top`}>
      {contents.map((article) => (
        <li key={article.id} className={"c-post--item flexItem_M mgb3 mgb5s"}>
        {/* <Link href={`/interview/${article.id}`} className={"c-post--link"}> */}
          {/* サムネイルコンポーネント | 2025/03/10追加 */}
          <Thumbnail
            type="lp"
            thumbnail={{
              url: article.thumbnail.url,
              alt: article.thumbnailAlt,
            }}
          />
          {/* テキストエリア */}
          <LpClient client={article.client} />
        {/* </Link> */}
      </li>
      ))}
    </ul>
  );
}
