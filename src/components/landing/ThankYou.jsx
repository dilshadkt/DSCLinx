"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FORM } from "./content";

const REDIRECT_SECONDS = 6;

export default function ThankYou() {
  const router = useRouter();
  const params = useSearchParams();
  const name = (params.get("name") || "").slice(0, 40);
  const [seconds, setSeconds] = useState(REDIRECT_SECONDS);

  useEffect(() => {
    const tick = setInterval(() => setSeconds((s) => Math.max(s - 1, 0)), 1000);
    const redirect = setTimeout(
      () => router.replace("/"),
      REDIRECT_SECONDS * 1000
    );
    return () => {
      clearInterval(tick);
      clearTimeout(redirect);
    };
  }, [router]);

  return (
    <div className="mx-auto max-w-[560px] text-center text-white">
      <CheckCircle2 className="mx-auto h-16 w-16" />
      <h1 className="mt-6 text-[36px] font-semibold leading-[120%] max-sm:text-[27px]">
        {name ? `Thanks, ${name}.` : "Thank you."}
      </h1>
      <p className="mt-3 text-[18px] leading-[150%] text-gray-200 max-sm:text-[16px]">
        We&apos;ve received your enquiry.
        {FORM.responseTime ? ` ${FORM.responseTime}` : " We'll be in touch shortly."}
      </p>
      <p className="mt-8 text-gray-400" aria-live="polite">
        Taking you to our home page in {seconds}s…
      </p>
      <Link href="/" replace className="mt-6 inline-block">
        <Button className="bg-white text-black rounded-none text-lg px-8 py-6 cont hover:bg-transparent hover:text-white border-2 border-white">
          <span>Go to home page now</span>
        </Button>
      </Link>
    </div>
  );
}
