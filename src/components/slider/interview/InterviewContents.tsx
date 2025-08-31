import { Suspense } from "react";
import InterviewWrraper from "@/components/slider/interview/InterviewWrraper";

// ロゴスライダーを表示するエリアのコンポーネント
export default function InterviewContents() {
  return (
    <div id="interview" className={"c-contents pdt10 pdt20s pdb5 pdb0s"}>
      <h2 className="c-contents--LpMainTitle -b-btm -c03 mgb7 mgb10s">
        導入いただいた企業様の声
      </h2>
      <div className={"c-contents--inner"}>
        <div className="c-contents mgb1 mgb5s">
          <div className={"swiper swiper-Interview -right mgb1 mgb3s"}>
            <Suspense fallback={<div>Loading...</div>}>
              <InterviewWrraper />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
