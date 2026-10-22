import Image from "next/image";
import CtaButton from "./CtaButton";
import LeadForm from "./LeadForm";
import { CTA, HERO, FORM } from "./content";

export default function Hero() {
  return (
    <section className="relative bg-black overflow-hidden lg:min-h-[calc(100svh-86px)] lg:flex lg:items-center">
      <Image
        src={HERO.image}
        alt={HERO.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/60"></div>

      <div className="container relative z-10 w-full py-[70px] max-md:py-[40px] grid grid-cols-[1fr_440px] gap-12 items-center max-lg:grid-cols-1 max-lg:gap-8">
        <div className="text-white max-lg:text-center">
          <h1 className="text-[56px] font-semibold leading-[110%] tracking-[-.5px] max-xl:text-[48px] max-md:text-[30px] max-sm:text-[26px]">
            {HERO.title}
          </h1>
          <p className="mt-5 text-[18px] leading-[150%] text-gray-200 max-w-[560px] max-lg:mx-auto max-sm:text-[15px]">
            Design, build and install under one team: kitchen hoods, plumbing,
            electrical and full fit-outs for restaurants across the GTA.
          </p>
          <div className="mt-8 max-lg:hidden">
            <CtaButton
              location="hero"
              className="bg-white text-black hover:bg-transparent hover:text-white border-2 border-white"
            >
              {CTA.heroButton}
            </CtaButton>
          </div>
        </div>

        <LeadForm
          id="quote-form"
          heading={HERO.formHeading}
          location="hero"
        />
      </div>
    </section>
  );
}
