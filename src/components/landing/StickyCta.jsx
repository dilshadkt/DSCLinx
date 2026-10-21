"use client";

import { useEffect, useState } from "react";
import { scrollToForm } from "./scrollToForm";
import { CTA } from "./content";

// Fixed bottom bar on desktop and mobile. Hidden while a lead form is on screen
// so it never covers the form it points to.
export default function StickyCta() {
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const forms = Array.from(document.querySelectorAll("[data-lead-form]"));
    if (!forms.length || !("IntersectionObserver" in window)) return;

    const visible = new Set();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      });
      setFormVisible(visible.size > 0);
    });
    forms.forEach((f) => observer.observe(f));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-40 transition-transform duration-300 ${
        formVisible ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <button
        type="button"
        onClick={() => scrollToForm("sticky")}
        tabIndex={formVisible ? -1 : 0}
        className="cont w-full h-16 bg-black text-white border-t-2 border-white text-lg font-semibold max-sm:text-base hover:bg-white hover:text-black transition-colors"
      >
        <span>{CTA.sticky}</span>
      </button>
    </div>
  );
}
