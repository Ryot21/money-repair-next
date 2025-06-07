import Image from "next/image";

type ThumbnailType = "interview" | "news" | "information" | "maneripe" | "lp";

interface ThumbnailProps {
  type: ThumbnailType;
  thumbnail: {
    url: string;
    alt: string;
  };
  title?: string;
  subTitle?: string;
}

export default function Thumbnail({
  type,
  thumbnail,
  title,
  subTitle,
}: ThumbnailProps) {
  return (
    <div className={`c-thumbnail -${type}`}>
      <div className={"imgBox"}>
        {type === "lp" ? (
          <Image
            src={thumbnail.url}
            alt={thumbnail.alt}
            width={480}
            height={320}
          />
        ) : (
          <Image
            src={`/images/thumbnail/${type}-cover.png`}
            alt="サムネイルの表面"
            width={480}
            height={320}
          />
        )}
      </div>
      {/* LPはカバーを表示しない */}
      {type !== "lp" && (
        <div className={"c-thumbnail--cover"}>
          <span className={"c-thumbnail--cover__text"}>詳細を見る</span>
        </div>
      )}
      {/* LPとお役立ち情報はマークを表示しない */}
      {type !== "lp" && type !== "information" && (
        <div className={"c-thumbnail--mark"}>
          <Image
            src={`/images/thumbnail/${type}-mark.svg`}
            alt={`マネリペ | ${
              type === "interview"
                ? "ご利用者の声"
                : type === "news"
                ? "ニュース"
                : "お役立ち情報"
            }`}
            width={186}
            height={16}
          />
        </div>
      )}
      <div className={"c-thumbnail--title"}>{title}</div>
      <div className={"c-thumbnail--subTitle"}>{subTitle}</div>
      {/* LPは画像を表示しない */}
      {type !== "lp" && (
        <div className={"c-thumbnail--picter"}>
          <Image
            src={thumbnail.url}
            alt={thumbnail.alt}
            width={480}
            height={320}
          />
        </div>
      )}
    </div>
  );
}
