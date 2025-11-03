import React from "react";
import Banner from "@/components/Banner";
import ServicesCard from "./ServicesCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BottomBanner from "@/components/BottomBanner";
import Faq from "@/components/Faq";
export default function page() {
  return (
    <>
      {/* Banner section Start*/}
      <Banner
        head={"Services"}
        desc={
          "We've hand-touched a lot of projects and made everyone adore their space. Check out wide range of services"
        }
      />
      <section className="container py-[70px] overflow-hidden max-lg:py-[100px] max-md:py-[80px] max-sm:py-[40px]">
        <div className="gap-x-[243px] justify-center mb-[60px] flex max-lg:flex-col max-lg:text-center">
          <h2 className="mb-[10px] ml-auto mr-auto text-[42px] tracking-[-1.8px] font-semibold leading-[115%] max-lg:text-center max-lg:mb-[10px] max-lg:ml-auto max-lg:mr-auto max-lg:text-[48px] max-md:mb-[8px] max-md:text-[36px] max-sm:text-[27px]">
            Discover The Variety Of Services We Offer
          </h2>
          <div>
            <p>
              Unlocking our suite of services is designed for utmost ease. With
              a streamlined process that emphasizes user-friendly
            </p>
            <Link
              href="/contact-us"
              className=" max-lg:flex max-lg:justify-center"
            >
              <Button className="mt-5 bg-black rounded-none	text-lg px-8 py-6 md:flex cont hover:bg-transparent hover:border-2 border-[#004363] hover:text-[#004363]">
                <span>Contact us</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
          <ServicesCard />
        </div>
      </section>
      {/* Banner section End*/}

      {/* Upcoming Start*/}

      <BottomBanner />

      {/* Upcoming End*/}

      <section className="container py-[70px] overflow-hidden max-lg:py-[100px] max-md:py-[80px] max-sm:py-[40px]">
        <Faq />
      </section>
    </>
  );
}
