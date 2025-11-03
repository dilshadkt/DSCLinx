import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function BottomBanner() {
  return (
    <div className="flex-col gap-9 bg-black mt-20 bg-cover justify-center text-center items-center p-[100px] mb-10 flex relative top-auto bottom-[0%] left-auto right-[0%] max-sm:p-[30px]">
      <h3 className="text-white text-[42px] relative z-20 font-semibold tracking-[-1.56px] leading-[120.6%] w-[600px] max-md:w-full max-lg:text-[42px] max-md:text-[36px]  max-sm:text-[27px]">
        {"Don't wait, start your construction today itself."}
      </h3>

      <Link href="/contact-us" className="relative z-20">
        <Button className="bg-white rounded-none text-[#004363] text-lg px-8 py-6 md:flex cont hover:bg-transparent hover:border-2 border-white hover:text-white">
          <span>Contact us</span>
        </Button>
      </Link>
      <Image
        src={"/footer.jpg"}
        alt="bg illustration"
        width={1200}
        height={700}
        className="absolute left-0 right-0 top-0 bottom-0 
        opacity-55 w-full h-full object-cover"
      />
    </div>
  );
}
