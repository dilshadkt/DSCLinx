import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {Card} from "@/components/ui/card";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const CLIENTS = [
  {
    image: "/client/circlek.png",
    name: "Circlek",
  },
  {
    image: "/client/circlek.png",
    name: "Circlek",
  },
  {
    image: "/client/circlek.png",
    name: "Circlek",
  },
  {
    image: "/client/circlek.png",
    name: "Circlek",
  },
  {
    image: "/client/circlek.png",
    name: "Circlek",
  },
  {
    image: "/client/circlek.png",
    name: "Circlek",
  },
  {
    image: "/client/circlek.png",
    name: "Circlek",
  },
  {
    image: "/client/circlek.png",
    name: "Circlek",
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
                alt=""
               style={{height: '100%', width: '100%'}} 
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
