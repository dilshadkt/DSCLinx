"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Card } from "@/components/ui/card";

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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-6 max-w-6xl mx-auto">
      {CLIENTS.map((client, key) => (
        <div
          key={key}
          className="flex items-center justify-center p-8 border-2 border-gray-200 rounded-lg hover:border-[#004363] transition-colors bg-white"
        >
          <Image
            width={130}
            height={130}
            src={client.image}
            className="w-full h-24 object-contain grayscale hover:grayscale-0 transition-all"
            alt={client.name}
          />
        </div>
      ))}
    </div>
  );
}
