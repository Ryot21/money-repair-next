import { Suspense } from "react";
import LogoWrapper from "@/components/slider/logo/LogoWrapper";

// ロゴスライダーを表示するエリアのコンポーネント
export default function LogoContents() {
  return (
    // ロゴセクションのメインコンテナ
    <div id="logoSection" className={"c-contents pdt5 pdt10s pdb5 pdb10s"}>
        {/* セクションタイトル */}
        <div className={"c-contents--inner"}>
            <h2 className={"c-logo--title pdb3 pdb3s"}>
                <span>多くのお客様にご好評いただいております！！</span>
            </h2>

            {/* 右方向に流れるスライダー */}
            <div className="c-contents -logoArea">
                <div className={"swiper swiper-Logo -right mgb1 mgb3s"}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <LogoWrapper />
                    </Suspense>
                </div>
                <div className={"swiper swiper-Logo -right"}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <LogoWrapper />
                    </Suspense>
                </div>
            </div>
        </div>
    </div>
  );
}
