import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

export default function ProjectCard({ link, image, name }) {
  return (
    <>
      <Link
        href={link ? link : ""}
        className="rounded-[10px] overflow-hidden relative cursor-pointer	"
      >
        <Image width={656} height={523}
          alt=""
          loading="lazy"
          src={image}
          className="w-full h-full relative top-[0%] bottom-[0%] left-[0%] right-[0%]"
        />
        <div className="h-full rounded-[10px] overflow-hidden">
          <div className="h-full rounded-[10px] flex-col justify-end items-center flex absolute top-[0%] bottom-[0%] left-[0%] right-[0%] overflow-hidden">
            <div className="bg-[linear-gradient(29deg,_rgba(13,_38,_35,_.92)_31.14%,_rgba(13,_38,_35,_.29)_86.54%)] absolute top-[0%] bottom-[0%] left-[0%] right-[0%]"></div>
            <div className="pb-[40px] pl-[40px] pr-[40px] absolute top-auto bottom-[0%] left-[0%] right-[0%] max-lg:pb-[20px] max-lg:pl-[20px] max-lg:pr-[20px]">
              <div className="flex items-center justify-between">
                <h4 className="text-[28px] font-semibold text-[#fff] max-lg:mt-[10px] max-lg:mb-[15px] max-lg:text-[19px] max-md:text-[26px] max-sm:text-[17px]">
                  {name}
                </h4>
                <p className="flex justify-center items-center w-[55px] h-[55px] border-[2px] border-[#fff] rounded-[100%] max-lg:w-[52px] max-lg:h-[52px] max-lg:top-[20px] max-lg:right-[20px] max-md:w-[40px] max-md:h-[40px]">
                  <GoArrowUpRight className="hover:animate-pulse text-[24px] text-white" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
