import Image from "next/image";
import { SERVICES } from "./content";

export default function ServicesSection() {
  return (
    <section className="bg-black relative overflow-hidden">
      <Image
        src="/footer.jpg"
        alt=""
        width={1200}
        height={700}
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="container relative z-10 py-[80px] max-md:py-[50px] text-white">
        <h2 className="text-center tracking-[-.42px] leading-[120%] text-[42px] font-bold max-md:text-[30px] max-sm:text-[24px]">
          {SERVICES.heading}
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-8 items-stretch max-md:grid-cols-1 max-md:mt-8">
          <div className="relative min-h-[420px] max-md:order-first max-md:min-h-[260px]">
            <Image
              src={SERVICES.image}
              alt={SERVICES.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <ul className="flex flex-col gap-3">
            {SERVICES.items.map((item) => (
              <li
                key={item.title}
                className="bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-4"
              >
                <h3 className="text-[20px] max-sm:text-[17px] font-semibold leading-[130%]">
                  {item.title}
                </h3>
                <p className="mt-1 text-gray-300 leading-[150%] max-sm:text-[14px]">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
