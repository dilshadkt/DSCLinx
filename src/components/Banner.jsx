import React from "react";
import Image from "next/image";
export default function Banner({ head, desc }) {
  return (
    <div
      className="flex-col gap-4 text-white  bg-black bg-[50%] bg-cover justify-center
     text-center items-center p-[100px] mb-10 flex relative top-auto bottom-[0%]
      left-auto right-[0%] max-sm:p-[30px]"
    >
      <h3 className="text-[50px] relative z-20 font-semibold tracking-[-1.56px] leading-[120.6%] w-full max-lg:text-[42px] max-md:text-[42px]  max-sm:text-[32px]">
        {head}
      </h3>
      <p className="w-[550px] relative z-20 max-md:w-full">{desc}</p>
      <Image
        src={"/footer.jpg"}
        alt="banner"
        width={1200}
        height={700}
        className="absolute left-0 right-0 top-0 opacity-45 bottom-0 w-full h-full object-cover"
      />
    </div>
  );
}
