"use client";

import { Button } from "@/components/ui/button";
import { scrollToForm } from "./scrollToForm";

export default function CtaButton({ children, location, className = "" }) {
  return (
    <Button
      type="button"
      onClick={() => scrollToForm(location)}
      className={`rounded-none text-lg px-8 py-6 cont ${className}`}
    >
      <span>{children}</span>
    </Button>
  );
}
