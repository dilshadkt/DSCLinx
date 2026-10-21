import Image from "next/image";
import CtaButton from "./CtaButton";
import { CTA } from "./content";

// Logo + one button only. No site navigation.
export default function LandingHeader() {
  return (
    <header className="border-b-2 border-solid relative bg-black z-40 border-[#c7c7c7]">
      <div className="container py-2 flex items-center justify-between gap-4">
        <div className="flex items-center gap-x-2">
          <Image
            src="/logo.jpg"
            width={128}
            height={33}
            priority
            className="w-12 md:w-14 h-auto"
            alt="DSC Linx"
          />
          <Image
            src="/logo-2.png"
            width={128}
            height={33}
            priority
            className="w-[68px] h-auto"
            alt=""
          />
        </div>
        <CtaButton
          location="header"
          className="bg-white text-black hover:bg-transparent hover:text-white border-2 border-white px-6 max-sm:px-4 max-sm:py-5 max-sm:text-base"
        >
          {CTA.header}
        </CtaButton>
      </div>
    </header>
  );
}
