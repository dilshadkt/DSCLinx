import React from "react";
import NavCard from "./NavCard";
import Banner from "@/components/Banner";
import Image from "next/image";
import { getServices } from "@/lib/services";

export default function page({ params }) {
  const service = getServices(params.slug);
  return (
    <>
      <Banner head={service.title} desc={service.description} />
      <div className="container mt-9">
        <div className="flex flex-row max-md:flex-col gap-9">
          <div className="basis-5/12">
            <NavCard active={params.slug} />
          </div>
          <div className="basis-full">
            <Image
              src={service.image_one}
              alt="services"
              className="w-auto h-700"
              width={1600}
              height={871}
            />

            <p className="pt-7">{service.section_one}</p>
            <p>{service.section_two}</p>

            <h6 className="font-bold text-xl my-3 ">{service.section_head}</h6>
            <Image
              src={service.image_one}
              alt="services"
              className="w-auto h-700"
              width={1600}
              height={871}
            />

            <p className="py-7">{service.section_three}</p>
          </div>
        </div>
      </div>
    </>
  );
}
