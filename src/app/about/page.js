import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Banner from '@/components/Banner';


export default function page() {
  return (
    <>
        {/* Banner section Start*/}

        <Banner/>

        {/* Banner section End*/}

        {/* About Start*/}

        <section className="container py-[70px] overflow-hidden max-lg:py-[100px] max-md:py-[80px] max-sm:py-[40px]">
        <div className="w-full flex max-lg:flex-col">
          <div className="w-full max-w-[700px] pr-0 max-lg:max-w-full max-lg:flex-row max-lg:grid-cols-[1fr] max-lg:pt-0 max-lg:flex">
            <div className="max-lg:w-full max-md:w-full">
              <div className="pb-[42px] relative max-lg:mb-[40px] max-lg:pb-0 max-lg:pl-0 max-md:mb-[30px]">
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
                <div className="h-full overflow-hidden max-lg:max-w-[664px] max-lg:text-center max-lg:ml-auto max-lg:mr-auto max-lg:text-[17px] max-sm:max-w-[390px] max-sm:text-[15px]">
                  <p className="text-[18px] font-normal leading-[150%]">
                    {
                      "There is no job too big or too small for us. We are a professional yet affordable design and renovation company. Trusted to deliver quality work, on time &, on budget. Get your professional new look for your establishment started on today."
                    }
                  </p>
                </div>

                <div className='px-[50px] py-[55px] bg-[#E0EFF6] mt-7 max-sm:px-[30px] max-sm:py-[30px] '>
                    <div className='gap-x-[40px] justify-between flex relative max-sm:flex-col max-sm:gap-5'>
                        <div className='w-full max-w-[260px]'>
                        <Image
                            src={"/icons/architecture.png"}
                            width={100}
                            height={100}
                            className="w-20"
                            alt="Logo"
                          />
                          <h5 className='text-[22px] font-medium tracking-[-0.56px] leading-[133.6%] mt-2'>Architecture Drawing</h5>
                          <p className='mt-2'>There is no job too big or too small for us. We are a professional yet affordable d </p>
                        </div>
                        <div className='w-px bg-[rgba(13,_38,_35,_.3)]'></div>
                        <div className='w-full max-w-[260px]'>
                        <Image
                            src={"/icons/commercial-reno.png"}
                            width={100}
                            height={100}
                            className="w-20"
                            alt="Logo"
                          />
                          <h5 className='text-[22px] font-medium tracking-[-0.56px] leading-[133.6%] mt-2'>Commercial Reno</h5>
                          <p className='mt-2'>There is no job too big or too small for us. We are a professional yet affordable d </p>
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
              className=" h-full max-w-full object-cover"/>
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


    </>
  )
}
