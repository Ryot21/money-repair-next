import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  customClass?: string;
};

// カスタムクラス一覧
// .-maru 丸ボタン
// .-center 中央揃え
// .-orange オレンジ
// .-red 赤
// .-gray グレー
// .-blue 青
// .-orange オレンジ
// .-icon + .-arrow →アイコンあり


export default function Button({ href, children, customClass }: Props) {
  return (
    <Link href={href} className={`c-link -btn -center s-M -s14 -b -ls-2 ${customClass}`}>
      {children}
    </Link>
  );
}
