import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HomeServicesCard from "./components/HomeServicesCard";
import HomeProjectCard from "./components/HomeProjectCard";
import OurClient from "@/components/OurClient";
import Faq from "@/components/Faq";
import Testimonials from "@/components/Testimonials";
import BottomBanner from "@/components/BottomBanner";
import HeroSwipper from "@/components/HeroSwipper";
import Counter from "@/components/Counter";

export default function home() {
  return (
    <>
      {/* start of hero */}
      <HeroSwipper />
      {/* end of hero slider */}

      {/* Counter section Start*/}

      <div className="gap-x-[61px] gap-y-[61px] items-start flex max-lg:gap-x-[0px] max-lg:gap-y-[0px] max-lg:flex-col max-lg:-mt-[156px] max-md:-mt-[110px] max-lg:container">
        <div className="w-full max-w-[684px] justify-between items-center py-[44px] pl-[90px] max-lg:pl-0 flex max-lg:max-w-full max-lg:text-white max-lg:gap-[20px] max-lg:flex-row max-lg:justify-center max-lg:items-center max-lg:mb-[40px] max-lg:py-0 max-lg:flex max-lg:relative max-md:gap-[15px] max-sm:gap-[10px]">
          {/* <div>
            <div className="text-[48px] font-bold h-[62px] justify-start items-center flex overflow-hidden max-md:h-[46px] max-sm:h-[48px]">
              <h2 className="max-lg:text-[40px] max-md:text-[36px] max-sm:text-[30px]">20</h2>
              <p>+</p>
            </div>
            <h4>Years of experience</h4>
          </div> */}
          <Counter text="Years of experience" number={20} />

          <div className="w-px h-[50px] bg-[#1d3c37] max-lg:-mt-[24px] max-lg:bg-[#ffffffcc] max-sm:h-[37px] max-sm:-mt-[54px]"></div>

          <Counter text="Successful Projects" number={640} step={10} />

          <div className="w-px h-[50px] bg-[#1d3c37] max-lg:-mt-[24px] max-lg:bg-[#ffffffcc] max-sm:h-[37px] max-sm:-mt-[54px]"></div>

          <Counter text="Happy Clients" number={256} step={5} />
        </div>
        <div className="w-full z-10">
          <div className="p-[70px] max-lg:p-[45px] relative max-lg:static bottom-[120px] bg-[#004363] text-white">
            <div>
              <div className="h-full overflow-hidden">
                <div className="tracking-[.3px] capitalize mt-0 mb-[16px] text-[34px] font-semibold leading-[120%] max-w-[554px] max-md:text-[34px] max-sm:text-[20px]">
                  {
                    " ”In The Heart Of The Town, DSCLINX Stands Unparalleled In Excellence.” "
                  }
                </div>
              </div>
            </div>
            <div className="justify-between items-center flex overflow-hidden">
              <div className="w-[295px] h-[2px] bg-[rgba(255,_255,_255,_.5)] rounded-[5px] ml-[17px] max-md:w-[213px] max-sm:w-[100px]"></div>
              <div className="text-right">
                <h4 className="mb-[3px] text-[18px] font-medium leading-[150%] max-md:text-[16px] max-sm:mb-[2px] max-sm:text-[14px]">
                  ALEY KHALIL
                </h4>
                <h6>CEO, OMASH</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Counter section End*/}

      {/* About Us Start*/}

      <section className="container py-[70px] pt-0 overflow-hidden max-lg:py-[100px] max-md:py-[80px] max-sm:py-[40px]">
        <div className="w-full flex max-lg:flex-col-reverse gap-10 max-sm:gap-5">
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
                <div className="h-full overflow-hidden max-lg:max-w-[664px] max-lg:text-center max-lg:ml-auto max-lg:mr-auto max-lg:text-[17px] max-sm:max-w-[390px] max-sm:text-[16px]">
                  <p className="text-[18px] font-normal leading-[150%]">
                    {
                      "There is no job too big or too small for us. We are a professional yet affordable design and renovation company.Trusted to deliver quality work, on time &, on budget. Get your professional new look for your establishment started on today.There is no job too big or too small for us. We are a professional yet affordable design and renovation company. Trusted to deliver quality work, on time &, on budget.Get your professional new look for your establishment started on today.There is no job too big or too small for us. We are a professional yet affordable design and renovation company.There is no job too big or too small for us. We are a professional yet affordable design and renovation company. Trusted to deliver quality work, on time &, on budget. Get your professional new look for your establishment started on today.There is no job too big or too small for us. We are a professional yet affordable design and renovation company."
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us End*/}

      {/* Projects Start*/}

      <section className="container py-[70px] overflow-hidden max-lg:py-[100px] max-md:py-[80px] max-sm:py-[40px]">
        <div className="relative z-10">
          <div className="text-center">
            <div className="h-full overflow-hidden">
              <h2 className="tracking-[-.42px] mb-[16px] leading-[120%] text-[42px] font-semibold max-lg:max-w-[486px] max-lg:mb-[10px] max-lg:ml-auto max-lg:mr-auto max-lg:text-[48px] max-md:max-w-[352px] max-md:text-[36px] max-sm:text-[27px]">
                Discover Our Latest Projects Showcase
              </h2>
            </div>
            <div className="h-full overflow-hidden">
              <p className="max-w-[890px] ml-auto mr-auto text-[18px] leading-[150%] max-lg:max-w-[552px] max-lg:text-[17px] max-md:max-w-[443px] max-md:text-[16px] max-sm:max-w-[290px] max-sm:text-[16px]">
                Unlocking our suite of services is designed for utmost ease.
                With a streamlined process that emphasizes user-friendly
                interaction. Unlocking our suite of services is designed.
              </p>
            </div>
          </div>
          <div className="mt-[52px] mb-[52px] max-lg:mt-[40px] max-lg:mb-[40px] max-md:mb-[40px] max-sm:mt-[40px]">
            <div className="gap-x-[24px] gap-y-[24px] grid-rows-[auto_auto] grid-cols-[1fr_1fr] auto-cols-[1fr] grid max-md:grid-cols-[1fr]">
              <HomeProjectCard />
            </div>
          </div>

          <div className="mt-[20px] flex justify-center items-center">
            <Link href="/projects">
              <Button className="bg-[#004363] rounded-none	text-lg px-8 py-6 md:flex cont hover:bg-transparent hover:border-2 border-[#004363] hover:text-[#004363]">
                <span>View all Projects</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects End*/}

      {/* Our Team Approach Start*/}

      <section className="container py-[70px] overflow-hidden max-lg:py-[100px] max-md:py-[80px] max-sm:py-[40px]">
        <div className="text-center">
          <div className="h-full overflow-hidden">
            <h2 className="tracking-[-.42px] mb-[16px] leading-[120%] text-[42px] font-semibold max-lg:max-w-[486px] max-lg:mb-[10px] max-lg:ml-auto max-lg:mr-auto max-lg:text-[48px] max-md:max-w-[352px] max-md:text-[36px]  max-sm:text-[27px]">
              Our Team Approach Projects Professionally
            </h2>
          </div>
          <div className="h-full overflow-hidden">
            <p className="max-w-[890px] ml-auto mr-auto text-[18px] leading-[150%] max-lg:max-w-[552px] max-lg:text-[17px] max-md:max-w-[443px] max-md:text-[16px] max-sm:max-w-[290px] max-sm:text-[16px]">
              {
                "Choose DSCLINX, where professional precision converges with design passion. Dive into a transformative experience, ensuring your space mirrors your vision.  Discover the breadth and depth of our offerings solutions."
              }
            </p>
          </div>
        </div>

        <div className="mt-[20px]">
          <div className="flex justify-between gap-5 mt-10 max-lg:flex-col">
            <div className="bg-[#E0EFF6]">
              <div className="p-[30px] border-solid border-2 border-b-[#969696]">
                <div className="flex items-center gap-5 max-lg:flex-col max-lg:items-baseline">
                  <div className="flex justify-center items-center bg-[#004363] w-[65px] h-[65px]">
                    <Image
                      width={100}
                      height={100}
                      src="/icons/quality-excellence.png"
                      alt=""
                      className="w-11"
                    />
                  </div>
                  <h4 className="font-semibold tracking-tight text-3xl max-sm:text-2xl">
                    Quality Excellence
                  </h4>
                </div>
                <p className="mt-[16px] text-[18px] font-normal leading-[150%]">
                  Dive into the realm of Quality Excellence with Zaiwall. Our
                  commitment is not just to color, but to a standard.
                </p>
              </div>

              <div className="pl-[30px] pr-[50px] py-[30px] border-solid border-2 border-b-[#969696]">
                <div className="flex items-center gap-5 max-lg:flex-col max-lg:items-baseline">
                  <div className="flex justify-center items-center bg-[#004363] w-[65px] h-[65px]">
                    <Image
                      width={100}
                      height={100}
                      src="/icons/expert-consultation.png"
                      alt=""
                      className="w-11"
                    />
                  </div>
                  <h4 className="font-semibold tracking-tight text-3xl max-sm:text-2xl">
                    Expert Consultation Assurance
                  </h4>
                </div>
                <p className="mt-[16px] text-[18px] font-normal leading-[150%]">
                  Dive into the realm of Quality Excellence with Zaiwall. Our
                  commitment is not just to color, but to a standard.
                </p>
              </div>

              <div className="pl-[30px] pr-[50px] py-[30px]">
                <div className="flex items-center gap-5 max-lg:flex-col max-lg:items-baseline">
                  <div className="flex justify-center items-center bg-[#004363] w-[65px] h-[65px]">
                    <Image
                      width={100}
                      height={100}
                      src="/icons/certified-guarantee.png"
                      alt=""
                      className="w-11"
                    />
                  </div>
                  <h4 className="font-semibold tracking-tight text-3xl max-sm:text-2xl">
                    Certified Guarantee
                  </h4>
                </div>
                <p className="mt-[16px] text-[18px] font-normal leading-[150%]">
                  Dive into the realm of Quality Excellence with Zaiwall. Our
                  commitment is not just to color, but to a standard.
                </p>
              </div>
            </div>

            <div className="w-full max-w-full max-md:overflow-hidden">
              <Image
                width={710}
                height={672}
                src="/team-approach.png"
                alt=""
                className="w-full h-full max-w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Approach End*/}

      {/* Our Flow start*/}

      <section className="container py-[70px] overflow-hidden max-lg:py-[100px] max-md:py-[80px] max-sm:py-[40px]">
        <div className="container max-w-[792px]">
          <div className="text-center flex justify-center items-center flex-col gap-4 ">
            <div className="h-full overflow-hidden">
              <h2 className="tracking-[-.42px] mb-[16px] leading-[120%] text-[42px] font-semibold max-lg:max-w-[486px] max-lg:mb-[10px] max-lg:ml-auto max-lg:mr-auto max-lg:text-[48px] max-md:max-w-[352px] max-md:text-[36px]  max-sm:text-[27px]">
                Unlock Our Offerings In Just Three Straight Forward Steps
              </h2>
            </div>
            <div className="h-full overflow-hidden">
              <p className="max-w-[890px] ml-auto mr-auto text-[18px] leading-[150%] max-lg:max-w-[552px] max-lg:text-[17px] max-md:max-w-[443px] max-md:text-[16px] max-sm:max-w-[290px] max-sm:text-[16px]">
                Begin a transformation journey with DSCLINX effortlessly. Unlock
                our premium offerings through three straightforward steps. Dive
                in, and experience a hassle-free approach to achievement.
              </p>
            </div>
            <Link href="/contact-us">
              <Button className="bg-[#004363] rounded-none	text-lg px-8 py-6 md:flex cont hover:bg-transparent hover:border-2 border-[#004363] hover:text-[#004363]">
                <span>Contact us</span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-[52px] relative">
          <div className="relative">
            <div className="gap-x-[66px] grid-rows-[auto] grid-cols-[1fr_minmax(360px,_auto)_1fr] auto-cols-[1fr] grid max-lg:gap-x-[0px] max-lg:grid-cols-[1fr_1fr_1fr] max-md:gap-x-[30px] max-md:gap-y-[30px] max-md:grid-cols-[1fr] max-sm:gap-x-[24px] max-sm:gap-y-[24px]">
              <div className="text-center">
              <div className="w-[90px] h-[90px] bg-[#004363] rounded-[100%] justify-center items-center mb-[32px] ml-auto mr-auto flex max-lg:w-[60px]  max-lg:h-[60px] max-md:mb-[20px] max-sm:w-[55px] max-sm:h-[55px] max-sm:mb-[10px]">
                  <h4 className="text-[#fff] mt-0 mb-0 text-[36px] font-semibold leading-[120%] max-lg:text-[22px] max-sm:text-[22px]">
                    01
                  </h4>
                </div>
                <h4 className="text-black capitalize mt-0 mb-[16px] text-[28px] font-semibold leading-[130%] max-lg:mb-[8px] max-lg:text-[22px] max-md:mb-[5px] max-sm:text-[22px]">
                  request your service
                </h4>
                <p className="text-[18px] font-normal leading-[150%] text-[rgba(32,_32,_32,_.8)] max-lg:text-[16px] max-md:max-w-[366px] max-md:ml-auto max-md:mr-auto max-sm:text-[16px] max-sm:leading-[130%]">
                  Taking the first step towards a transformative experience has
                  never been easier.
                </p>
              </div>
              <div className="max-w-[360px] ml-auto mr-auto pt-[128px] text-center max-lg:max-w-[273px] max-lg:pt-[85px] max-md:w-full max-md:max-w-full max-md:p-[30px]">
              <div className="w-[90px] h-[90px] bg-[#004363] rounded-[100%] justify-center items-center mb-[32px] ml-auto mr-auto flex max-lg:w-[60px]  max-lg:h-[60px] max-md:mb-[20px] max-sm:w-[55px] max-sm:h-[55px] max-sm:mb-[10px]">
                  <h4 className="text-[#fff] mt-0 mb-0 text-[36px] font-semibold leading-[120%] max-lg:text-[22px] max-sm:text-[22px]">
                    02
                  </h4>
                </div>
                <h4 className="text-black capitalize mt-0 mb-[16px] text-[28px] font-semibold leading-[130%] max-lg:mb-[8px] max-lg:text-[22px] max-md:mb-[5px] max-sm:text-[22px]">
                  Schedule Your Service
                </h4>
                <p className="text-[18px] font-normal leading-[150%] text-[rgba(32,_32,_32,_.8)] max-lg:text-[16px] max-md:max-w-[366px] max-md:ml-auto max-md:mr-auto max-sm:text-[16px] max-sm:leading-[130%]">
                  Ready for a transformation? Schedule your service with DSCLINX
                  today.
                </p>
              </div>
              <div className="text-center">
                <div className="w-[90px] h-[90px] bg-[#004363] rounded-[100%] justify-center items-center mb-[32px] ml-auto mr-auto flex max-lg:w-[60px]  max-lg:h-[60px] max-md:mb-[20px] max-sm:w-[55px] max-sm:h-[55px] max-sm:mb-[10px]">
                  <h4 className="text-[#fff] mt-0 mb-0 text-[36px] font-semibold leading-[120%] max-lg:text-[22px] max-sm:text-[22px]">
                    03
                  </h4>
                </div>
                <h4 className="text-black capitalize mt-0 mb-[16px] text-[28px] font-semibold leading-[130%] max-lg:mb-[8px] max-lg:text-[22px] max-md:mb-[5px] max-sm:text-[22px]">
                  Pay And Enjoy
                </h4>
                <p className="text-[18px] font-normal leading-[150%] text-[rgba(32,_32,_32,_.8)] max-lg:text-[16px] max-md:max-w-[366px] max-md:ml-auto max-md:mr-auto max-sm:text-[16px] max-sm:leading-[130%]">
                  Seamless transactions, striking transformations. Make your
                  payment.
                </p>
              </div>
            </div>
            <div className="w-full max-w-[800px] ml-auto mr-auto absolute top-[45px] bottom-auto left-[0%] right-[0%] max-lg:z-0 max-lg:max-w-[534px] max-lg:top-[29px] max-md:hidden">
              <Image
                width={800}
                height={131}
                src="https://assets-global.website-files.com/652634ecbd538012cac6bff1/652d3dfca68c55a2ee29cac1_xdf.png"
                loading="lazy"
                alt=""
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Flow End*/}

      {/* Services End*/}

      <section className="bg-[#004363]">
        <div className="container py-[70px] overflow-hidden max-lg:py-[100px] max-md:py-[80px] max-sm:py-[40px]">
          <div className="text-center text-white mt-10">
            <div className="h-full overflow-hidden">
              <h2 className="tracking-[-.42px] mb-[16px] leading-[120%] text-[42px] font-semibold max-lg:max-w-[486px] max-lg:mb-[10px] max-lg:ml-auto max-lg:mr-auto max-lg:text-[48px] max-md:max-w-[352px] max-md:text-[36px]  max-sm:text-[27px]">
                Explore Our Range Of Offering Services
              </h2>
            </div>
            <div className="h-full overflow-hidden">
              <p className="max-w-[890px] ml-auto mr-auto text-[18px] leading-[150%] max-lg:max-w-[552px] max-lg:text-[17px] max-md:max-w-[443px] max-md:text-[16px] max-sm:max-w-[290px] max-sm:text-[16x]">
                {
                  "Discover the breadth and depth of our offerings. From bespoke solutions to standard services, we're here to cater to your need. Experience the brilliance of Digital Foiling."
                }
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
            <HomeServicesCard />
          </div>
          <Link href="/services" className="flex justify-center mt-20">
            <Button
              variant="secondary"
              className="bg-[#fff] rounded-none text-lg px-8 py-6 md:flex cont hover:bg-transparent hover:border-2 border-[#fff] hover:text-white"
            >
              <span>View all Services</span>
            </Button>
          </Link>
        </div>
      </section>

      {/* Services End*/}

      {/* Our Client Start*/}

      <section className="container py-[70px] overflow-hidden max-lg:py-[100px] max-md:py-[80px] max-sm:py-[40px]">
        <h3 className="tracking-[-.42px] mb-[36px] leading-[120%] text-[42px] font-semibold max-lg:mb-[10px] max-lg:ml-auto max-lg:mr-auto max-lg:text-[48px] max-md:text-[36px] max-sm:text-[27px] max-sm:mb-[30px]">
          Companies we worked with
        </h3>
        <OurClient />
      </section>

      {/* Our Client End*/}

      {/* Testimonials Start*/}

      <section className="container py-[70px] overflow-hidden max-lg:py-[100px] max-md:py-[80px] max-sm:py-[40px]">
        <div className="text-center">
          <div className="h-full overflow-hidden">
            <h2 className="tracking-[-.42px] mb-[16px] leading-[120%] text-[42px] font-semibold max-lg:max-w-[486px] max-lg:mb-[10px] max-lg:ml-auto max-lg:mr-auto max-lg:text-[48px] max-md:max-w-[352px] max-md:text-[36px] max-sm:text-[27px]">
              {"Feedback From Our Client's Experiences"}
            </h2>
          </div>
          <div className="h-full overflow-hidden">
            <p className="max-w-[890px] ml-auto mr-auto text-[18px] leading-[150%] max-lg:max-w-[552px] max-lg:text-[17px] max-md:max-w-[443px] max-md:text-[16px] max-sm:max-w-[330px] max-sm:text-[16px]">
              {
                "Dive into authentic reflections from those we've proudly served. Their testimonials, echoing our commitment and expertise. Unlocking our suite of services is designed for utmost ease. With a streamlined."
              }
            </p>
          </div>
        </div>
        <div className="mt-10">
          <Testimonials />
        </div>
      </section>

      {/* Testimonials End*/}

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
