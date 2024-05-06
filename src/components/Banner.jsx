import React from "react";

export default function Banner({ head, desc }) {
  return (
    <div
      className="flex-col gap-4 text-white  bg-[50%] bg-cover justify-center text-center items-center p-[100px] mb-10 flex relative top-auto bottom-[0%] left-auto right-[0%] max-sm:p-[30px]"
      style={{ backgroundImage: 'url("/b1.png")', height: "450px" }}
    >
      <h3 className="text-[50px] font-semibold tracking-[-1.56px] leading-[120.6%] w-[600px] max-md:w-full max-lg:text-[42px] max-md:text-[42px]  max-sm:text-[32px]">
        {head}
      </h3>
      <p className="w-[550px] max-md:w-full">{desc}</p>
    </div>
  );
}
