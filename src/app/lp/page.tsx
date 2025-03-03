// import Image from "next/image";

// コンポーネント
import Lp01MainVisual from "@/features/lp/mainVisual/Lp01";
// import Button from "@/components/elements/button";

// 投稿関係
import LogoContents from "@/components/slider/logo/LogoContents";

// ISR
export const revalidate = 600;

export default async function Home() {
  return (
    <main id="top">
      {/* メインビジュアル */}
      <Lp01MainVisual />
      {/* 導入企業ロゴ */}
      <LogoContents />

      {/*  */}
      <div id="sc01" className={"c-contents pdt10 pdt10s mgb5s"}>
        <div className={"c-contents--inner"}>

        </div>
      </div>
    </main>
  );
}
