"use client";

// import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,  EffectFade } from "swiper/modules";

import Thumbnail from "@/components/thumbnail";
import LpClient from "@/features/lp02/client";
import type { Interview } from "@/types/microcms";

type Props = {
  contents: Interview[];
};

// クライアントから受け取ったデータを表示するSwiperコンポーネント
export default function ClientInterviewSwiper({ contents }: Props) {

  // レスポンシブ対応のためのブレイクポイント設定
  const slideSettings = {
    0: {
      slidesPerView: 1,
      // spaceBetween: 10,
    },
    500: {
      slidesPerView: 1,
      // spaceBetween: 10,
    },
    1000: {
      slidesPerView: 1,
      // spaceBetween: 10,
    },
  };

    if (contents.length === 0) {
    return <p>記事がありません。</p>;
  }

  return (
    <Swiper
      effect="fade"
      modules={[Autoplay, EffectFade]} // 自動スライド機能を有効化
      breakpoints={slideSettings} // レスポンシブ設定を適用
      // spaceBetween={20} // スライド間の余白
      slidesPerView={"auto"} // SSRとCSRの差異によるハイドレーションエラー対策
      centeredSlides={true} // スライドを中央寄せに
      loop={true} // 無限ループを有効化
      speed={1000} // スライドのアニメーション速度（ミリ秒）
      allowTouchMove={false} // タッチ・スワイプ操作を無効化
      autoplay={{
        delay: 10000, // スライド切り替えの待ち時間をなしに
        disableOnInteraction: false, // ユーザー操作後も自動再生を継続
      }}
    >
      {/* クライアントデータを元にスライドを生成 */}
      {contents.map((article) => (
        <SwiperSlide key={article.id}>
          <li key={article.id} className={"c-post--item c-card"}>
            <div className="c-post--thumbnailBox">
              <div className="c-post--thumbnailBox__inner">
                <ul className="c-flex -col1_2 -pc2_1 -lp -jc-sb">
                  <li className="flexItem mgb5s">
                    <Thumbnail
                      type="lp"
                      thumbnail={{
                        url: article.thumbnail.url,
                        alt: article.thumbnailAlt,
                      }}
                    />
                  </li>
                  <li className="flexItem">
                    <p className="s-M -s10 -white -b -left -ls-2 -lh-1_5 -wb-k mgb1 mgb1s w75">{article.article1Title}</p>
                    <h3 className="s-LL -s20 -yellow -b -left -ls-2 -lh-1_3 mgb2 mgb2s">{article.mainTitle}</h3>
                    <p className="s-L -s10 -white -b -right -ls-4 -lh-1_5">{article.company}</p>

                  </li>
                </ul>
              </div>
            </div>
            {/* テキストエリア */}
            <LpClient client={article.client} />
          </li>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
