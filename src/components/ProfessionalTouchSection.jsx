"use client";

import { useState } from "react";
import Image from "next/image";

const panels = [
  {
    id: "best-quality",
    title: "Creating the Best Quality",
    subtitle: "Digital Art. Illustrations.",
    description:
      "Dsclinx promises you the best quality. We Guide, Research and Design your space",
    icon: "/icons/quality-excellence.png",
  },
  {
    id: "expert-consultation",
    title: "Expert Consultation Assurance",
    subtitle: "Strategic Design Solutions",
    description:
      "We design, develop and deliver solutions in this high-value segment of the Design Industry",
    icon: "/icons/expert-consultation.png",
  },
  {
    id: "certified-guarantee",
    title: "Certified Guarantee",
    subtitle: "Trusted Quality Assurance",
    description: "We guarantee with trust, accuracy and integrity.",
    icon: "/icons/certified-guarantee.png",
  },
];

export default function ProfessionalTouchSection() {
  const [expandedPanel, setExpandedPanel] = useState("best-quality");

  return (
    <section className="container py-[70px] overflow-hidden max-lg:py-[100px] max-md:py-[80px] max-sm:py-[40px]">
      <div className="text-center">
        <div className="h-full overflow-hidden">
          <h2 className="tracking-[-.42px] mb-[16px] leading-[120%] text-[42px] font-semibold max-lg:max-w-[486px] max-lg:mb-[10px] max-lg:ml-auto max-lg:mr-auto max-lg:text-[48px] max-md:max-w-[352px] max-md:text-[36px] max-sm:text-[27px]">
            We Build with a Professional touch.
          </h2>
        </div>
        <div className="h-full overflow-hidden">
          <p className="max-w-[890px] ml-auto mr-auto text-[18px] leading-[150%] max-lg:max-w-[552px] max-lg:text-[17px] max-md:max-w-[443px] max-md:text-[16px] max-sm:max-w-[290px] max-sm:text-[16px]">
            On choosing Dsclinx, We help you to Glide your space into a bright
            area. Discover the elegance with us.
          </p>
        </div>
      </div>

      <div className="mt-[60px] max-lg:mt-[40px] max-md:mt-[30px] max-sm:mt-[20px]">
        <div className="flex gap-2 overflow-hidden max-lg:flex-col max-lg:gap-4">
          {panels.map((panel) => {
            const isExpanded = expandedPanel === panel.id;
            return (
              <div
                key={panel.id}
                onClick={() => setExpandedPanel(panel.id)}
                className={`relative cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] group ${
                  isExpanded
                    ? "flex-[3] max-lg:flex-none max-lg:w-full max-lg:!h-[320px] max-sm:!h-[270px]"
                    : "flex-[1] max-lg:flex-none max-lg:w-full max-lg:!h-[120px] max-sm:!h-[100px]"
                }`}
                style={{
                  height: "600px",
                  minWidth: isExpanded ? "320px" : "150px",
                }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <Image
                    src="/projects/ChampionDonerKebab/5.png"
                    alt={panel.title}
                    fill
                    className={`object-cover transition-transform duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform ${
                      isExpanded
                        ? "scale-100"
                        : "scale-110 group-hover:scale-115"
                    }`}
                  />
                  {/* Dynamic Overlay */}
                  <div
                    className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      isExpanded
                        ? "bg-gradient-to-b from-black/50 via-black/30 to-black/60"
                        : "bg-gradient-to-r from-black/75 to-black/60"
                    }`}
                  />
                </div>

                {/* Content Container */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Expanded State Content */}
                  {isExpanded ? (
                    <>
                      {/* Title and Subtitle - Bottom Left */}
                      <div className="absolute bottom-0 left-0 p-6 max-lg:p-5 max-sm:p-4 z-20 animate-fade-in">
                        <div className="flex items-start gap-3 max-lg:gap-2">
                          {/* Icon */}
                          <div className="flex-shrink-0">
                            <svg
                              className="w-6 h-6 text-white max-lg:w-5 max-lg:h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          {/* Text Content */}
                          <div>
                            <h3 className="text-white text-2xl font-bold mb-1 max-lg:text-xl max-sm:text-lg leading-tight">
                              {panel.title}
                            </h3>
                            {panel.subtitle && (
                              <p className="text-white text-sm max-lg:text-xs font-normal opacity-90">
                                {panel.subtitle}
                              </p>
                            )}
                            <div className="  max-sm:right-4 z-20 animate-fade-in">
                              <div className=" rounded-lg  mt-3 border-white/20  max-w-lg">
                                <p className="text-white text-base leading-relaxed max-lg:text-sm max-sm:text-sm">
                                  {panel.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description Content - Upper Middle Section */}
                    </>
                  ) : (
                    /* Collapsed State - Title Centered */
                    <div className="h-full flex items-center justify-center">
                      <div className="text-center transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]">
                        <p className="text-white text-xl font-semibold tracking-wide max-lg:text-lg max-sm:text-base px-4">
                          {panel.title}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
