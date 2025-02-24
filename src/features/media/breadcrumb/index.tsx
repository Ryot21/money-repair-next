"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import type { Category } from "@/types/microcms";

// カテゴリー情報を含むプロップスの型定義
type BreadcrumbProps = {
  categories?: {
    interview?: Category[]; // インタビューカテゴリーの配列
    information?: Category[]; // お役立ち情報カテゴリーの配列
  };
};

// パンくずリストの各項目の型定義
type BreadcrumbItem = {
  label: string; // 表示テキスト
  path: string; // リンク先のパス
};

export default function Breadcrumb({ categories }: BreadcrumbProps) {
  // 現在のパスとクエリパラメータを取得
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // パスを「/」で分割して配列化（空の要素は除外）
  const paths = pathname.split("/").filter(Boolean);

  // パンくずリストの項目を生成
  const breadcrumbs: BreadcrumbItem[] = paths.reduce(
    (acc: BreadcrumbItem[], path, index) => {
      // カテゴリーページの場合はスキップ
      if (path === "category") return acc;

      // 現在のパスまでのURLを構築
      let url = `/${paths.slice(0, index + 1).join("/")}`;
      let label = "";

      // カテゴリーIDの場合の処理
      if (index > 0 && paths[index - 1] === "category") {
        const section = paths[index - 2]; // information または interview セクションを取得
        // セクションに応じたカテゴリーリストを選択
        const categoryList =
          section === "interview"
            ? categories?.interview
            : categories?.information;

        // カテゴリーIDに一致する名前を検索
        const category = categoryList?.find((cat) => cat.id === path);
        if (category) {
          label = category.name;
        } else {
          return acc; // カテゴリーが見つからない場合はスキップ
        }
      } else {
        // 通常のパスの場合、パスに応じてラベルを設定
        switch (path) {
          case "service":
            label = "特徴";
            break;
          case "interview":
            label = "ご利用者の声";
            break;
          case "information":
            label = "お役立ち情報";
            break;
          case "contact":
            // contactの場合はクエリパラメータで表示を分岐
            const type = searchParams.get("type");
            if (type === "contact") {
              label = "お問い合わせ";
            } else if (type === "download") {
              label = "資料ダウンロード";
            } else {
              label = "お問い合わせ"; // デフォルト値
            }
            // クエリパラメータをURLに含める
            url = `${url}?type=${type}`;
            break;
          case "confirm":
            label = "内容確認";
            break;
          case "thanks":
            label = "お問い合わせ完了";
            break;
          case "search":
            label = "検索結果";
            break;
          case "page":
            label = "ページ";
            break;
          default:
            label = path;
        }
      }

      // パンくずリストに項目を追加
      acc.push({
        label,
        path: url,
      });

      return acc;
    },
    []
  );

  // パンくずリストが空の場合（トップページの場合）は何も表示しない
  if (breadcrumbs.length === 0) return null;

  // パンくずリストのレンダリング
  return (
    <div className={"c-contents--inner"}>
      <nav className="c-breadcrumb" aria-label="パンくずリスト">
        <ol className="c-breadcrumb__lists">
          {/* TOPページへのリンクを常に最初に表示 */}
          <li className="c-breadcrumb__item">
            <Link href="/" className="c-breadcrumb__link">
              TOP
            </Link>
          </li>
          {/* 生成したパンくずリストの項目を表示 */}
          {breadcrumbs.map((item, index) => (
            <li key={item.path} className="c-breadcrumb__item">
              {/* 最後の項目はリンクではなくテキストとして表示 */}
              {index === breadcrumbs.length - 1 ? (
                <span className="c-breadcrumb__text">{item.label}</span>
              ) : (
                <Link href={item.path} className="c-breadcrumb__link">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
