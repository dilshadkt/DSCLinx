"use client";
import AutoScroll from "embla-carousel-auto-scroll";
import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BottomBanner from "@/components/BottomBanner";
import Banner from "@/components/Banner";
import Faq from "@/components/Faq";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CLIENTS } from "@/components/OurClient";

export default function page() {
  return (
    <>
      {/* Banner section Start*/}

      <Banner
        head={"About"}
        desc={
          "DSCLINX proud to offer a complete range of construction services made possible by our professional team."
        }
      />

      {/* Banner section End*/}

      {/* About Start*/}
      <section className="container py-[70px] overflow-hidden max-lg:py-[40px] max-md:py-[40px] max-sm:py-[40px]">
        <div className="w-full flex max-lg:flex-col">
          <div className="w-full max-w-[700px] pr-0 max-lg:max-w-full max-lg:flex-row max-lg:grid-cols-[1fr] max-lg:pt-0 max-lg:flex">
            <div className="max-lg:w-full max-md:w-full">
              <div className="pb-[42px] relative max-lg:mb-[40px] max-lg:pb-0 max-lg:pl-0 max-md:mt-[30px]">
                <div className="mb-[15px]">
                  <div className="gap-x-[15px] gap-y-[5px] items-center flex overflow-hidden max-lg:justify-center">
                    <div className="w-[20px] h-px bg-[#000] max-lg:hidden"></div>
                    <div className="sub-title text-[#004363] uppercase text-[18px] font-semibold leading-[150%]">
                      About us
                    </div>
                  </div>
                </div>
                <div className="h-full overflow-hidden">
                  <h2 className="mb-[10px] ml-auto mr-auto text-[42px] tracking-[-1.8px] font-semibold leading-[115%] max-lg:max-w-[465px] max-lg:text-center max-lg:mb-[10px] max-lg:ml-auto max-lg:mr-auto max-lg:text-[48px] max-md:max-w-[390px] max-md:mb-[8px] max-md:text-[36px]  max-sm:text-[27px]">
                    We are a design and renovation company
                  </h2>
                </div>
                <div className="h-full overflow-hidden max-lg:max-w-[664px] max-lg:text-center max-lg:ml-auto max-lg:mr-auto max-lg:text-[17px] max-sm:max-w-[390px] max-sm:text-[16px]">
                  <p className="text-[18px] font-normal leading-[150%]">
                    {
                      "There is no job too big or too small for us. We are a professional yet affordable design and renovation company. Trusted to deliver quality work, on time &, on budget. Get your professional new look for your establishment started on today."
                    }
                  </p>
                </div>

                <div className="px-[50px] py-[55px] bg-[#E0EFF6] mt-7 max-sm:px-[30px] max-sm:py-[30px] ">
                  <div className="gap-x-[40px] justify-between flex relative max-sm:flex-col max-sm:gap-5">
                    <div className="w-full max-w-[260px]">
                      <Image
                        src={"/icons/architecture.png"}
                        width={100}
                        height={100}
                        className="w-20"
                        alt="Logo"
                      />
                      <h5 className="text-[22px] font-medium tracking-[-0.56px] leading-[133.6%] mt-2">
                        Architecture Drawing
                      </h5>
                      <p className="mt-2">
                        There is no job too big or too small for us. We are a
                        professional yet affordable d{" "}
                      </p>
                    </div>
                    <div className="w-px bg-[rgba(13,_38,_35,_.3)]"></div>
                    <div className="w-full max-w-[260px]">
                      <Image
                        src={"/icons/commercial-reno.png"}
                        width={100}
                        height={100}
                        className="w-20"
                        alt="Logo"
                      />
                      <h5 className="text-[22px] font-medium tracking-[-0.56px] leading-[133.6%] mt-2">
                        Commercial Reno
                      </h5>
                      <p className="mt-2">
                        There is no job too big or too small for us. We are a
                        professional yet affordable d{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[775px] relative max-md:max-w-full max-md:overflow-hidden">
            <Image
              src="/abouthome.png"
              width={700}
              height={300}
              alt="about"
              className=" h-full w-full object-cover"
            />
            <div className="absolute top-auto bottom-[0%] left-auto">
              <div className="inline-block relative">
                <div className="-mb-px pt-[30px] pr-[34px] pb-[32px] pl-[31px] relative max-lg:pt-[30px] max-md:px-[30px] py-[20px] bg-[#004363] max-sm:px-[24px] max-sm:py-[18px]">
                  <div className="gap-x-[10px] gap-y-[10px] flex-row items-center flex">
                    <h2 className="tracking-[-3.95px] text-[70px] leading-[86px] text-white font-semibold max-lg:text-[64px] max-lg:leading-[70px] max-md:text-[64px] max-md:leading-[70px] max-sm:text-[30px] max-sm:leading-[30px] max-sm:tracking-[normal]">
                      4.9
                    </h2>
                    <Image
                      width={34}
                      height={34}
                      src="/icons/star.png"
                      loading="lazy"
                      alt="star"
                      className="customer-rating-star"
                    />
                  </div>
                  <div className="tracking-[-.21px] text-[22px] font-normal leading-[120%] text-[#fff] max-lg:text-[22px] max-md:text-[20px] max-sm:text-[18px] max-sm:mt-2">
                    Customer Rating
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About End*/}
      {/* Our work Start*/}
      <section className="container py-[70px] overflow-hidden max-lg:py-[40px] max-md:py-[40px] max-sm:py-[40px]">
        <div className="flex justify-between items-center max-lg:flex-col max-lg:text-center">
          <div className="w-full max-w-[556px] max-lg:max-w-[665px]">
            <h2 className="tracking-[-.42px] mb-[16px] leading-[120%] text-[42px] font-semibold max-lg:mb-[10px] max-lg:ml-auto max-lg:mr-auto max-lg:text-[48px] max-md:text-[36px] max-sm:text-[27px]">
              Discover Our Story The Heart And Craft Behind Our Work
            </h2>
          </div>

          <div className="w-full max-w-[521px] max-lg:max-w-[651px]">
            <p>
              {
                "Unlocking our suite of services is designed for utmost ease. With streamlined process that emphasizes user-friendly interaction  family, united by the shared love for the game Join us on this incredible journey."
              }
            </p>
          </div>
        </div>

        <div className="gap-x-[20px] gap-y-[20px] grid-rows-[350px_350px] grid-cols-[1fr_minmax(520px,_auto)_1fr] auto-cols-[1fr] mt-[64px] grid max-lg:grid-cols-[1fr_1fr] max-lg:mt-[50px] max-md:mt-[40px] max-sm:grid-cols-[1fr] max-sm:mt-[20px]">
          <div className="border-[1px] border-[#004363] overflow-hidden">
            <Image
              src={"/ourwork/ourw1.png"}
              width={386}
              height={323}
              className="w-[100%] h-[100%] object-cover"
              alt="ourwork"
            />
          </div>

          <div className="border-[1px] border-[#004363] overflow-hidden [grid-area:span_2_/_span_1_/_span_2_/_span_1]">
            <Image
              src={"/ourwork/ourw3.png"}
              width={640}
              height={534}
              className="w-[100%] h-[100%] object-cover"
              alt="ourwork"
            />
          </div>

          <div className="border-[1px] border-[#004363] overflow-hidden">
            <Image
              src={"/ourwork/ourw4.png"}
              width={386}
              height={272}
              className="w-[100%] h-[100%] object-cover"
              alt="ourwork"
            />
          </div>

          <div className="border-[1px] border-[#004363] overflow-hidden">
            <Image
              src={"/ourwork/ourw2.png"}
              width={384}
              height={320}
              className="w-[100%] h-[100%] object-cover"
              alt="ourwork"
            />
          </div>

          <div className="border-[1px] border-[#004363] overflow-hidden">
            <Image
              src={"/ourwork/ourw5.png"}
              width={384}
              height={320}
              className="w-[100%] h-[100%] object-cover"
              alt="ourwork"
            />
          </div>
        </div>
      </section>
      {/* Our work End*/}
      {/* Experience Start*/}
      <section className="container py-[70px] overflow-hidden max-lg:py-[40px] max-md:py-[40px] max-sm:py-[40px]">
        <div className="w-full max-w-full flex overflow-hidden text-white max-lg:flex-col">
          <div
            className="w-full max-w-[480px] bg-[50%] bg-cover p-[80px] relative max-lg:max-w-full max-sm:p-[40px]"
            style={{ backgroundImage: 'url("/experience-img.png")' }}
          >
            <div className="overflow-hidden">
              <div className="gap-x-[15px] gap-y-[15px] justify-center items-end mb-[14px] flex overflow-hidden">
                <h2 className="capitalize text-[110px] font-bold leading-[100%] max-md: max-sm:text-[41px]">
                  20
                </h2>
                <div>
                  <h5 className="mb-[20px] text-[38px] font-semibold leading-[68.421%] max-sm:text-[20px] max-sm:mb-[5px]">
                    years
                  </h5>
                  <p className="text-[24px] font-medium leading-[108.333%] max-sm:text-[16px]">
                    of Experience
                  </p>
                </div>
              </div>
              <p className="mt-5 max-lg:text-center">
                Bilge rat main shet bilge water nipper fluke to go on account
                heave down clap you get the system is up and running.
              </p>
            </div>
            <div className="w-full max-w-[260.298px] bg-[#f6f7f8] px-[43px] py-[18px] absolute sm:top-[35px] bottom-auto -left-[70px] right-auto -rotate-45 max-sm:py-[10px] max-sm:left-[-92px] top-[19px]">
              <h2 className="text-center text-black font-semibold text-[22px] tracking-[-0.56px] leading-[133.6%] max-lg:text-[20px] max-sm:text-[16px]">
                Since 2004
              </h2>
            </div>
          </div>
          <div className="w-full bg-[#E0EFF6] p-[68px] text-black max-lg:p-[50px] max-sm:p-[30px]">
            <div className="border-b-2 border-b-black pb-10 max-sm:pb-4">
              <div className="gap-x-[15px] gap-y-[15px] items-center mb-[12px] flex overflow-hidden">
                <h4 className="text-[29px] font-semibold tracking-[-0.56px] leading-[133.6%] max-sm:text-[22px] max-sm:leading-[120.6%]">
                  Our Trusted Partners
                </h4>
                <div className="w-[80px] h-px rounded-[5px] bg-black"></div>
              </div>
              <div className="items-center flex overflow-hidden">
                <p className="max-sm:text-[16px]">world wide 50K+ companies collaborate with us!</p>
              </div>
            </div>

            <div className="pt-9 overflow-hidden flex items-center max-sm:pt-4">
              <div className="flex w-full">
                <Carousel
                  opts={{
                    loop: true,
                  }}
                  plugins={[
                    AutoScroll({
                      stopOnInteraction: false,
                    }),
                  ]}
                  className="w-full"
                >
                  <CarouselContent>
                    {CLIENTS.map((item, i) => (
                      <CarouselItem key={i} className="basis-1/5 max-sm:basis-1/4">
                        <Image
                          width={130}
                          height={130}
                          src={item.image}
                          className="!h-[111px] w-full !object-contain"
                          alt=""
                          //  style={{height: '111px', width: '100%', objectFit: 'contain'}}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Experience End*/}
      {/* Projects Start*/}
      <section className="container py-[70px] overflow-hidden max-lg:py-[40px] max-md:py-[40px] max-sm:py-[40px]">
        <div className="flex justify-between items-center max-xl:flex-col-reverse max-xl:gap-10">
          <div className="max-w-[588px] max-xl:w-full">
            <div className="w-full max-w-[588px] relative max-xl:w-full">
              <div>
                <Image src={"/ourmission.png"} width={518} height={300} />
              </div>
              <div className="absolute top-auto bottom-[0%] left-auto -right-[50px] overflow-hidden max-lg:-right-[74px] max-md:-right-[17px] max-sm:-right-[12px] !max-sm:max-w-[110px]">
                <Image
                  src={"/ourmission-sub.png"}
                  width={256}
                  height={260}
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>

          <div>
            <Tabs defaultValue="mission" className="w-[600px] max-xl:w-full">
              <TabsList className="grid w-full grid-cols-3 bg-[#E0EFF6] h-14">
                <TabsTrigger
                  className="py-3 text-[18px] max-sm:text-[16px] data-[state=active]:bg-[#004363] data-[state=active]:text-white"
                  value="mission"
                >
                  Our mission
                </TabsTrigger>
                <TabsTrigger
                  className="py-3 text-[18px] max-sm:text-[16px] data-[state=active]:bg-[#004363] data-[state=active]:text-white"
                  value="vision"
                >
                  Our vision
                </TabsTrigger>
                <TabsTrigger
                  className="py-3 text-[18px] max-sm:text-[16px] data-[state=active]:bg-[#004363] data-[state=active]:text-white"
                  value="goal"
                >
                  Our goal
                </TabsTrigger>
              </TabsList>
              <TabsContent value="mission" className="mt-10">
                <h2 className="tracking-[-.42px] mb-[16px] leading-[120%] text-[42px] font-semibold max-lg:mb-[10px] max-lg:ml-auto max-lg:mr-auto max-lg:text-[48px] max-md:text-[36px] max-sm:text-[27px]">
                  Our Team Tackles Projects With Utmost Professionalism
                </h2>
                <p>
                  {
                    "Courses for new lessons on your favorite technologies Unlock the secrets to selecting the ideal  with insights from industry experts. family, united by the shared love Check back our"
                  }
                </p>
              </TabsContent>
              <TabsContent value="vision" className="mt-10">
                <h2 className="tracking-[-.42px] mb-[16px] leading-[120%] text-[42px] font-semibold max-lg:mb-[10px] max-lg:ml-auto max-lg:mr-auto max-lg:text-[48px] max-md:text-[36px] max-sm:text-[27px]">
                  Our Team Tackles Projects With Utmost Professionalism
                </h2>
                <p>
                  {
                    "Courses for new lessons on your favorite technologies Unlock the secrets to selecting the ideal  with insights from industry experts. family, united by the shared love Check back our"
                  }
                </p>
              </TabsContent>
              <TabsContent value="goal" className="mt-10">
                <h2 className="tracking-[-.42px] mb-[16px] leading-[120%] text-[42px] font-semibold max-lg:mb-[10px] max-lg:ml-auto max-lg:mr-auto max-lg:text-[48px] max-md:text-[36px] max-sm:text-[27px]">
                  Our Team Tackles Projects With Utmost Professionalism
                </h2>
                <p>
                  {
                    "Courses for new lessons on your favorite technologies Unlock the secrets to selecting the ideal  with insights from industry experts. family, united by the shared love Check back our"
                  }
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      {/* Projects End*/}

      {/* Faq Start*/}

      <section className="container py-[70px] overflow-hidden max-lg:py-[100px] max-md:py-[80px] max-sm:py-[40px]">
        <Faq />
      </section>

      {/* Faq End*/}

      {/* Upcoming Start*/}

      <BottomBanner />

      {/* Upcoming End*/}
    </>
  );
}
