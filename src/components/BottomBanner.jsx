import React from 'react'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BottomBanner() {
  return (
    <div className='flex-col gap-9 bg-[50%] bg-cover justify-center text-center items-center p-[100px] mb-10 flex relative top-auto bottom-[0%] left-auto right-[0%] max-sm:p-[30px]'
    style={{backgroundImage: 'url("/upcoming.png")',   height: "450px",}}
    >
      <h3 className='text-white text-[42px] font-semibold tracking-[-1.56px] leading-[120.6%] w-[600px] max-md:w-full max-lg:text-[42px] max-md:text-[36px]  max-sm:text-[27px]'>
        Get Started on your construction project today!
        </h3>

        <Link href="">
        <Button className="bg-white rounded-none text-[#004363] text-lg px-8 py-6 md:flex cont hover:bg-transparent hover:border-2 border-white hover:text-white">
              <span>Contact us</span>
            </Button>
        </Link>
    </div>
  )
}

