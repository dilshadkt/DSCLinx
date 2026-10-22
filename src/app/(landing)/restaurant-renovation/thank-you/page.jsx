import { Suspense } from "react";
import Image from "next/image";
import ThankYou from "@/components/landing/ThankYou";

export const metadata = {
  title: "Thank You | DSC Linx",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="relative bg-black overflow-hidden min-h-screen flex items-center">
      <Image
        src="/footer.jpg"
        alt=""
        width={1200}
        height={700}
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="container relative z-10 py-[80px]">
        <Suspense fallback={null}>
          <ThankYou />
        </Suspense>
      </div>
    </section>
  );
}
