"use client";

import { useEffect, useRef, useState } from "react";

// Light fade-up as a section scrolls into view.
// SEO/no-JS safe: the content is fully visible in the server HTML. The hidden
// state is only applied after hydration, and only to elements that start below
// the fold, so nothing flashes and crawlers/no-JS users always see the content.
// Uses opacity/transform only, so it causes no layout shift.
export default function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [state, setState] = useState("visible"); // visible | hidden | shown

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }
    // Already on screen at load: leave it alone (no animation, no flicker).
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    setState("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stateClass =
    state === "hidden"
      ? "opacity-0 translate-y-6"
      : "opacity-100 translate-y-0";

  return (
    <div
      ref={ref}
      style={state === "visible" ? undefined : { transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,transform] duration-700 ease-out ${stateClass} ${className}`}
    >
      {children}
    </div>
  );
}
