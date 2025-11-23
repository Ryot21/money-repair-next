"use client";
import dynamic from "next/dynamic";

// 離脱防止ポップアップ（外部リンククリック時）
// const ExitIntentPopup = dynamic(() => import("./index"), {
//   ssr: false,
// });

// ブラウザバック検知バナー（中央・画像版）
const ExitIntentCenterBanner = dynamic(() => import("./ExitIntentCenterBanner"), {
  ssr: false,
});

// ブラウザバック検知バナー（中央・画像版）
  // const ExitIntentBtmBanner = dynamic(() => import("./ExitIntentBtmBanner"), {
  //   ssr: false,
  // });

export default function ExitIntentPopupWrapper() {
  return (
    <>
      {/* 外部リンククリック時のポップアップ */}
      {/* <ExitIntentPopup /> */}
      
      {/* ブラウザバック時のバナー（中央・画像） */}
      <ExitIntentCenterBanner />

      {/* ブラウザバック時のバナー（下部・テキスト・ボタン） */}
      {/* <ExitIntentBtmBanner /> */}
    </>
  );
}