import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

export default function ProjectCard({ link, image, name }) {
  return (
    <>
      <Link
        href={link ? `/projects${link}` : ""}
        className="group rounded-[10px] overflow-hidden relative cursor-pointer	"
      >
        <Image
          width={900}
          height={800}
          alt=""
          loading="lazy"
          src={image}
          className="w-full h-full relative top-[0%] bottom-[0%] left-[0%] right-[0%] group-hover:brightness-110 group-hover:scale-105 transition-all duration-300 ease-in-out"
        />
        <div className="h-full rounded-[10px] overflow-hidden">
          <div className="h-full rounded-[10px] flex-col justify-end items-center flex absolute top-[0%] bottom-[0%] left-[0%] right-[0%] overflow-hidden">
            <div className="bg-gradient-to-t from-black to-none absolute top-[0%] bottom-[0%] left-[0%] right-[0%] group-hover:opacity-0 transition-opacity duration-300 ease-in-out"></div>
            <div className="pb-[40px] pl-[40px] pr-[40px] absolute top-auto bottom-[0%] left-[0%] right-[0%] max-lg:pb-[20px] max-lg:pl-[20px] max-lg:pr-[20px]">
              <div className="flex items-center justify-between">
                <h4 className="text-[28px] font-semibold text-[#fff] max-lg:mt-[10px] max-lg:mb-[15px] max-lg:text-[19px] max-md:text-[26px] max-sm:text-[22px] leading-[34px] max-sm:leading-[27px] max-sm:w-[70%]">
                  {name}
                </h4>
                <p className="flex justify-center items-center w-[55px] h-[55px] border-[2px] border-[#fff] rounded-[100%] max-lg:w-[52px] max-lg:h-[52px] max-lg:top-[20px] max-lg:right-[20px] max-md:w-[40px] max-md:h-[40px]">
                  <GoArrowUpRight className="group-hover:rotate-45 text-[24px] text-white transition-transform duration-300 ease-in-out" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
