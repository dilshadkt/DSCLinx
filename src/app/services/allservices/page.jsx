import React from "react";
import NavCard from "./NavCard";
import Banner from "@/components/Banner";
import Image from "next/image";

export default function page() {
  return (
    <>
      <Banner />
      <div className="container mt-9">
        <div className="flex flex-row max-md:flex-col gap-9">
            <div className="basis-5/12">
            <NavCard />
            </div>
            <div className="basis-full">
                <Image 
                  src="/banners/b1.jpg" 
                  alt="services" 
                  className="w-auto h-700"
                  width={1600}
                  height={871}
                />

              <p className="pt-7">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
              </p>

              
              <h6 className="font-bold text-xl my-3 ">Every time we clean, we’ll provide services that include the following:</h6>
              <Image 
                  src="/banners/b1.jpg" 
                  alt="services" 
                  className="w-auto h-700"
                  width={1600}
                  height={871}
                />

              <p className="py-7">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
        </div>
      </div>
    </>
  );
}
