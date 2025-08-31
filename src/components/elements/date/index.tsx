import Image from "next/image";
import { formatDate, isSameDate } from "@/utils/date";

type Props = {
  publishedAt?: string;
  createdAt: string;
  updatedAt?: string;
};

export default function Date({ publishedAt, createdAt, updatedAt }: Props) {
  // 表示する日付とラベルを決定
  let displayDate: string;
  let displayLabel: string;

  if (updatedAt && publishedAt && !isSameDate(updatedAt, publishedAt)) {
    // 最終更新日が公開日と異なる場合：最終更新日を表示
    displayDate = updatedAt;
    displayLabel = "最終更新日";
  } else if (publishedAt) {
    // 公開日がある場合：公開日を表示
    displayDate = publishedAt;
    displayLabel = "投稿日";
  } else {
    // 公開日がない場合：作成日を表示
    displayDate = createdAt;
    displayLabel = "作成日";
  }

  return (
    <div className="date-container">
      <time dateTime={formatDate(displayDate)} className={"time"}>
        <Image src="/images/SVG/clock.svg" alt="時計" width={12} height={12} />
        <span className={"s-SS -s10 -left -b -ls-2"}>
          {displayLabel}：{formatDate(displayDate)}
        </span>
      </time>
    </div>
  );
}
