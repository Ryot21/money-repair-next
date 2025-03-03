import { notFound } from 'next/navigation';

/**
 * メディアサイト用のキャッチオールページ
 * - 定義されていないルートパターンへのアクセスをキャッチする
 * - 例：/information001111（正しくは/information/001111）
 * 
 * 役割：
 * 1. 不正なURLパターンをキャッチ
 * 2. notFound()を呼び出してカスタム404ページを表示
 * 3. メディアサイト用のnot-found.tsxにルーティング
 */
export default function CatchAll() {
  notFound();
} 