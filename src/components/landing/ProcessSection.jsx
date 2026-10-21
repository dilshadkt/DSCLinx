import CtaButton from "./CtaButton";
import { CTA, PROCESS } from "./content";

export default function ProcessSection() {
  return (
    <section className="bg-[#f3f4f6]">
      <div className="container py-[70px] max-md:py-[50px] max-sm:py-[40px]">
        <h2 className="text-center tracking-[-.42px] leading-[120%] text-[42px] font-semibold max-md:text-[36px] max-sm:text-[27px]">
          {PROCESS.heading} {PROCESS.headingAccent}
        </h2>

        <ol className="relative mt-14 grid grid-cols-4 gap-6 max-md:mt-10 max-md:grid-cols-1 max-md:gap-8">
          {/* connector: horizontal on desktop, vertical on mobile */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-[45px] left-[12.5%] right-[12.5%] border-t-2 border-dashed border-gray-400"
          />
          <div
            aria-hidden="true"
            className="md:hidden absolute left-[27px] top-[27px] bottom-[27px] border-l-2 border-dashed border-gray-400"
          />

          {PROCESS.steps.map((step, i) => (
            <li
              key={step}
              className="relative flex items-center gap-5 md:flex-col md:text-center"
            >
              <div className="relative z-10 flex h-[90px] w-[90px] shrink-0 items-center justify-center rounded-full bg-black text-white max-md:h-[55px] max-md:w-[55px]">
                <span className="text-[36px] font-semibold max-md:text-[22px]">
                  {i + 1}
                </span>
              </div>
              <div>
                <p className="text-[14px] font-semibold uppercase tracking-wider text-gray-500">
                  Step {i + 1}
                </p>
                <h3 className="mt-1 text-[22px] font-semibold leading-[130%] max-sm:text-[20px]">
                  {step}
                </h3>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex justify-center max-md:mt-10">
          <CtaButton
            location="process"
            className="bg-black text-white hover:bg-transparent hover:text-black border-2 border-black"
          >
            {CTA.process}
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
