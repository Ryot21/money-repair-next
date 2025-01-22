"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function LogoSwiper() {
  // ブレイクポイントに基づいて1つのスライドに表示するスライドの数を指定
  // const slideSettings = {
  //     0: {
  //         slidesPerView: 3,
  //         spaceBetween: 10,
  //     },
  //     1024: {
  //         slidesPerView: 5,
  //         spaceBetween: 10,
  //     },
  // };
  return (
    <Swiper
      modules={[Autoplay]} // モジュールを指定
      // breakpoints={slideSettings} // slidesPerViewを指定
      // spaceBetween={20}
      slidesPerView={"auto"} // ハイドレーションエラー対策
      centeredSlides={true} // スライドを中央に配置
      loop={true} // スライドをループさせる
      speed={6000} // スライドが切り替わる時の速度
      allowTouchMove={false} // スワイプ無効
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        // reverseDirection: true,  // 逆方向のスライダーにする
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <Image
          src="/images/slider/logo/sample.png"
          alt="企業1"
          width={210}
          height={60}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/slider/logo/sample.png"
          alt="企業1"
          width={210}
          height={60}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/slider/logo/sample.png"
          alt="企業1"
          width={210}
          height={60}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/slider/logo/sample.png"
          alt="企業1"
          width={210}
          height={60}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/slider/logo/sample.png"
          alt="企業1"
          width={210}
          height={60}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/slider/logo/sample.png"
          alt="企業1"
          width={210}
          height={60}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/slider/logo/sample.png"
          alt="企業1"
          width={210}
          height={60}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/slider/logo/sample.png"
          alt="企業1"
          width={210}
          height={60}
        />
      </SwiperSlide>
    </Swiper>
  );
}
