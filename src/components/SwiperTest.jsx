"use client";

import React from "react";
import { Swiper, useSwiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function SwiperTest() {
  return (
    <div className="relative">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper absolute"
      >
        <SwiperSlide>
          <Image width={100} height={100} src="/banners/banner001.png" alt="banner1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={100} height={100} src="/banners/banner001.png" alt="banner1" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
