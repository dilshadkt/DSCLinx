"use client";

import React from "react";
import { Swiper, useSwiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
          <img src="/banners/banner001.png" alt="banner1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banners/banner001.png" alt="banner1" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
