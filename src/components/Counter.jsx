"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({ number, text, step }) {
  const [metric, setMetric] = useState(0);
  const container = useRef();

  useEffect(() => {
    let timer = null;
    let observer = null;
    if (metric < number) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            timer = setInterval(() => {
              metric < number && setMetric((prev) => prev + (step || 1));
            }, 10);
          }
        },
        { threshold: 1.0 }
      );
      observer.observe(container.current);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
      if (observer) {
        observer.disconnect();
      }
    };
  }, [metric]);

  return (
    <div
      ref={container}
      className="flex flex-col items-center md:justify-center"
    >
      <div
        className="text-[48px] font-bold h-[62px] justify-start items-center flex 
       overflow-hidden max-md:h-[46px] max-sm:h-[48px]"
      >
        <h2 className="max-lg:text-[40px] max-md:text-[36px] max-sm:text-[30px]">
          {metric}
        </h2>
        <p>+</p>
      </div>
      <h4 className="text-center">{text}</h4>
    </div>
  );
}
