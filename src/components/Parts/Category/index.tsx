import type { Category } from "@/libs/microcms";

type Props = {
  category: Category;
};

// 【カテゴリ表示】
export default function Category({ category }: Props) {
  return <span># {category.name}</span>;
}
