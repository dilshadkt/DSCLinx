import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function SiteLayout({ children }) {
  return (
    <>
      <Header />
      <div className="relative">
        <Image
          src="/bg_illustraion.jpg"
          alt="bg illustration"
          width={1200}
          height={1200}
          quality={100}
          priority
          className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover"
        />
        <div className="relative z-20 bg-white/70">{children}</div>
      </div>
      <Footer />
    </>
  );
}
