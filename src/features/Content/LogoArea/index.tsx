import { Suspense } from "react";
import LogoAreaContainer from "@/features/Content/LogoArea/LogoAreaContainer";

// ロゴスライダーを表示するエリアのコンポーネント
export default function LogoArea() {
  return (
    // ロゴセクションのメインコンテナ
    <div id="logoSection" className={"c-contents pdt5 pdt10s mgb5s"}>
        {/* セクションタイトル */}
        <div className={"c-contents--inner"}>
            <h2 className={"c-logo--title pdb3 pdb3s"}>
                <span>多くのお客様にご好評いただいております！！</span>
            </h2>

            {/* 右方向に流れるスライダー */}
            <div className={"swiper swiper-Logo -right mgb1 mgb3s"}>
                <Suspense fallback={<div>Loading...</div>}>
                <LogoAreaContainer />
                </Suspense>
            </div>
            <div className={"swiper swiper-Logo -right"}>
                <Suspense fallback={<div>Loading...</div>}>
                <LogoAreaContainer />
                </Suspense>
            </div>
        </div>
    </div>
  );
}
