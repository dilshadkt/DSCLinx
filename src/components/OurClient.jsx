import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {Card} from "@/components/ui/card";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export const CLIENTS = [
  {
    image: "/client/esso.png",
    name: "Esso",
  },
  {
    image: "/client/Pizza Hut.png",
    name: "Pizza Hut",
  },
  {
    image: "/client/Subway.png",
    name: "Subway",
  },
  {
    image: "/client/Circlek.png",
    name: "Circlek",
  },
  {
    image: "/client/ButterChickenRoti.png",
    name: "Butter Chicken Roti",
  },
  {
    image: "/client/Hastymarket.png",
    name: "Hastymarket",
  },
  {
    image: "/client/Gulf.png",
    name: "Gulf",
  },
  {
    image: "/client/Dickeys.png",
    name: "Dickeys",
  },
  {
    image: "/client/Daisy-Mart.png",
    name: "Daisy Mart",
  },
  {
    image: "/client/tacorito.png",
    name: "Tacorito",
  },
  {
    image: "/client/Colaba Junction.png",
    name: "Colaba Junction",
  },
  {
    image: "/client/Hurry Curry.png",
    name: "Hurry Curry",
  },
  {
    image: "/client/BeaverTails.png",
    name: "BeaverTails",
  },
  {
    image: "/client/Patro Canada.png",
    name: "Patro Canada",
  },
  {
    image: "/client/Tokyo Smoke.png",
    name: "Tokyo Smoke ",
  },
];

export default function OurClient() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        {CLIENTS.map((client, key) => (
          <SwiperSlide key={key}>
            <Card className="p-6 rounded border-2 border-[#515151]">
              <div className="flex justify-center items-center p-10">
              <Image
                width={130}
                height={130}
                src={client.image}
                className="!h-[111px] w-full !object-contain"
                alt=""
              //  style={{height: '111px', width: '100%', objectFit: 'contain'}} 
              />
              </div>
              <p className="text-left">{client.name}</p>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
