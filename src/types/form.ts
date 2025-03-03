// コンポーネントのプロップス型定義
export type Props = {
  customClass: string;
};

// フォームの状態管理用の型定義
export type ContactState = {
  status: "success" | "error";
  message: string;
} | null;

// フォームステップの型定義（入力・確認・完了）
export type FormStep = "input" | "confirm" | "thanks";

// フォームデータの型定義
export type FormData = {
  purpose: string;
  company: string;
  name: string;
  phone: string;
  email: string;
  message: string;
};

// フォームエラーの型定義
export type FormErrors = {
  phone: string;
  email: string;
};
