import { metadata } from "./metadata";
import { headers } from "next/headers";
import PageTypeWrapper from "@/components/PageTypeWrapper";
import ScrollToTop from "@/components/ScrollToTop";
import HeaderContainer from "@/features/media/header/HeaderContainer";
import NavigationContainer from "@/features/media/navigation/NavigationContainer";
import Footer from "@/features/media/footer";

// Google Tag Manager
import { GoogleTagManager } from "@next/third-parties/google";

/**
 * メディアサイト用のメタデータ
 * - メディアサイトのページにのみ適用される
 */
export { metadata };

/**
 * メディアサイト専用のレイアウト
 * - ルートパス（/）以下のページに適用される
 * - (media)ディレクトリはURLには影響しない（ルートグループ）
 *
 * 含まれるコンポーネント：
 * - PageTypeWrapper:     ページタイプの管理
 * - ScrollToTop:         スクロールトップボタン
 * - HeaderContainer:     メディアサイト用ヘッダー
 * - NavigationContainer: メディアサイト用ナビゲーション
 * - Footer:              フッター
 */
export default async function MediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const initialPageType = headersList.get("x-page-type") || "top";

  return (
    <PageTypeWrapper initialPageType={initialPageType}>
      <ScrollToTop />
      <HeaderContainer />
      <NavigationContainer />
      {children}
      <Footer />
      {/* メディア用 > Google Tag Manager */}
      <GoogleTagManager gtmId="GTM-MW3QDMR6" />
    </PageTypeWrapper>
    
  );
}
