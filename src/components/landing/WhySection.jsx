import Image from "next/image";
import { Check } from "lucide-react";
import { WHY } from "./content";

export default function WhySection() {
  return (
    <section className="container py-[70px] max-md:py-[50px] max-sm:py-[40px]">
      <h2 className="text-center tracking-[-.42px] leading-[120%] text-[42px] font-semibold max-md:text-[30px] max-sm:text-[24px]">
        {WHY.heading}
      </h2>

      <div className="mt-12 grid grid-cols-2 gap-10 items-center max-md:grid-cols-1 max-md:mt-8 max-md:gap-6">
        <div className="relative aspect-[4/3] bg-gray-100">
          <Image
            src={WHY.image}
            alt={WHY.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <ul className="flex flex-col gap-5">
          {WHY.points.map((point) => (
            <li key={point} className="flex items-start gap-4">
              <span className="mt-[2px] flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-white">
                <Check className="h-4 w-4" />
              </span>
              <span className="text-[18px] leading-[140%] max-sm:text-[15px]">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Proof bar: rendered only once rating/reviews/WSIB/insurance are verified. */}
      {WHY.proof.length > 0 ? (
        <ul className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-3 border-y border-gray-200 py-5 text-[16px] font-semibold">
          {WHY.proof.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
