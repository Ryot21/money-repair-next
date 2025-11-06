"use client";

import dynamic from "next/dynamic";

// 離脱防止ポップアップ（パフォーマンス最適化のため動的インポート）
const ExitIntentPopup = dynamic(() => import("./index"), {
  ssr: false, // クライアントサイドでのみレンダリング
});

export default function ExitIntentPopupWrapper() {
  return <ExitIntentPopup />;
}
