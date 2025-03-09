// 投稿リスト > ご利用者の声
import Image from "next/image";
// import Link from "next/link";

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
          {/* バナー画像 */}
          <div className={"imgBox mgb2 mgb2s"}>
            <Image
              src={article.thumbnail.url}
              alt={article.mainTitle}
              width={480}
              height={320}
            />
          </div>
          {/* テキストエリア */}
          <LpClient client={article.client} />
        {/* </Link> */}
      </li>
      ))}
    </ul>
  );
}
