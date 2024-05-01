"use client";

import Image from "next/image";
import SwiperTest from "@/components/SwiperTest";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";



export default function Home() {
  useEffect(() => {
    console.log("Initializing Swiper");
    const interleaveOffset = 0.5;
    const swiperOptions = {
      loop: true,
      speed: 1000,
      parallax: true,
      autoplay: {
        delay: 6500,
        disableOnInteraction: false,
      },
      watchSlidesProgress: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        progress: function () {
          const swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            const slideProgress = swiper.slides[i].progress;
            const innerOffset = swiper.width * interleaveOffset;
            const innerTranslate = slideProgress * innerOffset;
            swiper.slides[i].querySelector(".slide-inner").style.transform =
              "translate3d(" + innerTranslate + "px, 0, 0)";
          }
        },
        touchStart: function () {
          const swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = "";
          }
        },
        setTransition: function (speed) {
          const swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = speed + "ms";
            swiper.slides[i].querySelector(".slide-inner").style.transition =
              speed + "ms";
          }
        },
      },
    };

    const swiper = new Swiper(".swiper-container", swiperOptions);
    console.log("Swiper initialized");

    // DATA BACKGROUND IMAGE
    const sliderBgSetting = document.querySelectorAll(".slide-bg-image");
    sliderBgSetting.forEach(function (slider) {
      if (slider.getAttribute("data-background")) {
        slider.style.backgroundImage =
          "url(" + slider.getAttribute("data-background") + ")";
      }
    });

    return () => {
      console.log("Destroying Swiper");
      // Clean up Swiper instance
      swiper.destroy();
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <>
      {/* <SwiperTest /> */}

      <>
        {/* start of hero */}
        <section className="hero-slider hero-style">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div
                  className="slide-inner slide-bg-image"
                  data-background="/banners/banner001.png">
                  <div className="container">
                    <div data-swiper-parallax={300} className="slide-title">
                      <h2>Elegant Wall Painting Solutions For Your Home</h2>
                    </div>
                    <div data-swiper-parallax={400} className="slide-text">
                      <p>Elevate your living spaces with unparalleled wall painting solutions. Experience artistry, durability, and charm in every brushstroke, tailored perfectly for your home.</p>
                    </div>
                    <div className="clearfix" />
                    <div data-swiper-parallax={500} className="slide-btns">
                    <Button className="bg-[#004363] rounded-none	 text-lg px-8 py-6 hidden md:flex" >Contact us</Button>
                    </div>
                  </div>
                </div>
                {/* end slide-inner */}
              </div>
              {/* end swiper-slide */}
              <div className="swiper-slide">
                <div
                  className="slide-inner slide-bg-image"
                  data-background="/banners/banner001.png">
                  <div className="container">
                    <div data-swiper-parallax={300} className="slide-title">
                      <h2>Elegant Wall Painting Solutions For Your Home</h2>
                    </div>
                    <div data-swiper-parallax={400} className="slide-text">
                      <p>Elevate your living spaces with unparalleled wall painting solutions. Experience artistry, durability, and charm in every brushstroke, tailored perfectly for your home.</p>
                    </div>
                    <div className="clearfix" />
                    <div data-swiper-parallax={500} className="slide-btns">
                    <Button className="bg-[#004363] rounded-none	text-lg px-8 py-6 hidden md:flex" >Contact us</Button>
                  </div>
                  </div>
                </div>
                {/* end slide-inner */}
              </div>
              {/* end swiper-slide */}
            </div>
            {/* end swiper-wrapper */}
            {/* swipper controls */}
          </div>
        </section>
        {/* end of hero slider */}
      </>

      <section className="container py-[70px] overflow-hidden max-lg:py-[100px] max-md:py-[80px] max-sm:py-[60px]">
        <div className="w-full flex max-lg:flex-col-reverse gap-8">
          <div className="w-full max-w-[700px] pr-0 max-lg:max-w-full max-lg:flex-row max-lg:grid-cols-[1fr] max-lg:pt-0 max-lg:flex">
            <div className="max-lg:w-full max-md:w-full">
              <div className="pb-[42px] relative max-lg:mb-[40px] max-lg:pb-0 max-lg:pl-0 max-md:mb-[30px]">
                <div className="mb-[15px]">
                  <div className="gap-x-[15px] gap-y-[5px] items-center flex overflow-hidden max-lg:justify-center">
                    <div className="w-[20px] h-px bg-[#000] max-lg:hidden"></div>
                    <div className="sub-title text-[#004363] uppercase text-[18px] font-semibold leading-[150%]">About us</div>
                  </div>
                </div>
                <div className="h-full overflow-hidden">
                  <h2 className="mb-[10px] ml-auto mr-auto text-[48px] tracking-[-1.8px] font-semibold leading-[115%] max-lg:max-w-[465px] max-lg:text-center max-lg:mb-[10px] max-lg:ml-auto max-lg:mr-auto max-lg:text-[48px] max-md:max-w-[390px] max-md:mb-[8px] max-md:text-[36px]">
                  We are a design and renovation company
                  </h2>
                </div>
                <div className="h-full overflow-hidden max-lg:max-w-[664px] max-lg:text-center max-lg:ml-auto max-lg:mr-auto max-lg:text-[17px] max-sm:max-w-[390px] max-sm:text-[15px]">
                  <p className="text-[18px] font-normal leading-[150%]">
                  There is no job too big or too small for us. We are a professional yet affordable design and renovation company. Trusted to deliver quality work, on time &, on budget.
                   Get your professional new look for your establishment started on today.There is no job too big or too small for us. We are a professional yet affordable design and 
                   renovation company. Trusted to deliver quality work, on time &, on budget. Get your professional new look for your establishment started on today.There is no job too 
                   big or too small for us. We are a professional yet affordable design and renovation company. Trusted to deliver quality work, on time &, on budget. Get your professional 
                   new look for your establishment started on today.There is no job too big or too small for us. We are a professional yet affordable design and renovation company. Trusted to deliver quality work, on time &, on budget.
                   Get your professional new look for your establishment started on today.There is no job too big or too small for us. We are a professional yet affordable design and 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[775px] relative max-md:max-w-full max-md:overflow-hidden">
            <img src="/about-h.png" alt="" className="w-full h-full max-w-full object-cover" />
            <div className="absolute top-auto bottom-[0%] left-auto">
              <div className="inline-block relative">
                <div className="-mb-px pt-[50px] pr-[34px] pb-[32px] pl-[31px] relative max-lg:pt-[30px] max-md:px-[30px] py-[20px] bg-[#004363]">
                  <div className="gap-x-[10px] gap-y-[10px] flex-row items-center flex">
                    <h2 className="tracking-[-3.95px] text-[79px] leading-[86px] text-white font-semibold max-lg:text-[64px] max-lg:leading-[70px] max-md:text-[64px] max-md: leading-[70px];">4.9</h2>
                    <img
                      src="https://assets-global.website-files.com/652634ecbd538012cac6bff1/6527818e2dea9c0952b294e8_Star.png"
                      loading="lazy"
                      alt=""
                      className="customer-rating-star"
                    />
                  </div>
                  <div className="tracking-[-.21px] text-[22px] font-normal leading-[120%] text-[#fff] max-lg:text-[22px] max-md:text-[20px]">Customer Rating</div>
                </div>
                <img
                  src="https://assets-global.website-files.com/652634ecbd538012cac6bff1/652784272dea9c0952b5b9cc_Ratinh%20Shape.png"
                  loading="lazy"
                  data-w-id="40b08e1e-b274-ff13-7faf-68968a352d40"
                  alt=""
                  className="absolute -top-[8px] bottom-auto left-auto -right-[24px] max-md:max-w-[57px] max-md:-right-[2px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="container py-[70px] overflow-hidden max-lg:py-[100px] max-md:py-[80px] max-sm:py-[60px]">
        <div className="container">
            <div className="relative z-10">
                <div className="text-center">
                  <div className="h-full overflow-hidden">
                    <h2 className="tracking-[-.42px] mb-[16px] leading-[120%] text-[48px] font-semibold max-lg:max-w-[486px] max-lg:mb-[10px] max-lg:ml-auto max-lg:mr-auto max-lg:text-[48px] max-md:max-w-[352px] max-md:text-[36px]">
                    Discover Our Latest Projects Showcase
                    </h2>
                  </div>
                  <div className="h-full overflow-hidden">
                    <p className="max-w-[890px] ml-auto mr-auto text-[18px] leading-[150%] max-lg:max-w-[552px] max-lg:text-[17px] max-md:max-w-[443px] max-md:text-[16px] max-sm:max-w-[290px] max-sm:text-[15px]">
                    Unlocking our suite of services is designed for utmost ease. With a streamlined process that emphasizes user-friendly interaction. Unlocking our suite of services is designed.
                    </p>
                  </div>
                </div>
                <div className="mt-[52px] mb-[52px] max-lg:mt-[40px] max-lg:mb-[40px] max-md:mb-[40px] max-sm:mt-[40px]">
                    <div className="gap-x-[24px] gap-y-[24px] grid-rows-[auto_auto] grid-cols-[1fr_1fr] auto-cols-[1fr] grid max-md:grid-cols-[1fr]">
                        <div className="rounded-[10px] overflow-hidden relative">
                        <Link href="#" className="w-full h-full">
                                <img alt="" loading="lazy" src="https://assets-global.website-files.com/65267f913028387e5d28a6ce/653a3e964e6b39d63b4d0e0c_Project%20B6.png" className="w-full h-full relative top-[0%] bottom-[0%] left-[0%] right-[0%]"/>
                                </Link>
                          <div className="h-full rounded-[10px] overflow-hidden">
                            <div className="h-full rounded-[10px] flex-col justify-end items-center flex absolute top-[0%] bottom-[0%] left-[0%] right-[0%] overflow-hidden">
                                <div className="bg-[linear-gradient(29deg,_rgba(13,_38,_35,_.92)_31.14%,_rgba(13,_38,_35,_.29)_86.54%)] absolute top-[0%] bottom-[0%] left-[0%] right-[0%]"></div>
                                <div className="pb-[40px] pl-[40px] pr-[40px] absolute top-auto bottom-[0%] left-[0%] right-[0%] max-lg:pb-[20px] max-lg:pl-[20px] max-lg:pr-[20px]">
                                    <Link href="#" className="flex items-center justify-between">
                                      <h4 className="text-[28px] font-semibold text-[#fff] max-lg:mt-[10px] max-lg:mb-[15px] max-lg:text-[19px] max-md:text-[26px] max-sm:text-[17px]">
                                      Pizza Hut – Richmond Hill
                                      </h4>
                                      <p className="flex justify-center items-center w-[55px] h-[55px] border-[2px] border-[solid] border-[#fff] rounded-[100%] max-lg:w-[52px] max-lg:h-[52px] max-lg:top-[20px] max-lg:right-[20px] max-md:w-[40px] max-md:h-[40px]">
                                      <GoArrowUpRight className="text-[24px] text-white" />
                                      </p>
                                    </Link>
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>

                <div className="mt-[20px] flex justify-center items-center">
                  <Link href=''>
                  <Button className="bg-[#004363] rounded-none	 text-lg px-8 py-6 hidden md:flex" >View all Projects</Button>
                  </Link>
                </div>
            </div>
          </div>
        </section>
    </>
  );
}
