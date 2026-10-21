import Image from "next/image";
import Link from "next/link";
import { ADDRESS, EMAIL, PHONE } from "./content";

// Contact details and copyright only. No site navigation links.
export default function LandingFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white relative overflow-hidden pb-16">
      <Image
        src="/footer.jpg"
        alt=""
        width={1200}
        height={700}
        className="absolute inset-0 w-full h-full object-cover opacity-45"
      />
      <div className="relative z-10 container py-10">
        <div className="flex items-start justify-between gap-8 max-md:flex-col">
          <div className="w-40">
            <Image
              src="/footer_logo.png"
              width={100}
              height={100}
              className="w-full h-auto"
              alt="DSC Linx"
            />
          </div>
          <ul className="flex flex-col gap-3 md:text-right">
            <li>
              <Link href={PHONE.href}>{PHONE.label}</Link>
            </li>
            <li>
              <Link href={`mailto:${EMAIL}`}>{EMAIL}</Link>
            </li>
            <li>{ADDRESS}</li>
          </ul>
        </div>
        <div className="mt-8 border-t-2 border-slate-700 pt-6 text-sm">
          Copyright ©{year} by DSCLINX
        </div>
      </div>
    </footer>
  );
}
