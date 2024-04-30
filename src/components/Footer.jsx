import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const SOCIALS = [
  {
    name: "Instagram",
    icon: <Instagram />,
    link: "ht",
  },
  {
    name: "Facebook",
    icon: <Facebook />,
    link: "ht",
  },
  {
    name: "Linkedin",
    icon: <Linkedin />,
    link: "ht",
  },
  {
    name: "Whatsapp ",
    icon: <FaWhatsapp className="w-6 h-6" />,
    link: "ht",
  },
];

export default function Home() {
  return (
    <>
      <footer className=" bg-[#171D29] text-white">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3 sm:grid-cols-2">
            <div>
              <div className="mb-5">
                <Image
                  src={"/logo-2.png"}
                  width={115}
                  height={97}
                  className="w-23"
                  alt="Logo"
                />
              </div>

              <p className="mb-4 tracking-tight	leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum. Duis cursus, mi quis
                viverra ornare, eros dolor.
              </p>

              <div className="flex mt-4 md:mt-0 space-x-5 rtl:space-x-reverse">
                {SOCIALS.map((social, key) => (
                  <Link
                    key={key}
                    href={social.link}
                    className="text-gray-400 hover:text-white-900 dark:hover:text-white"
                  >
                    {social.icon}
                    <span className="sr-only">{social.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-2xl font-semibold text-white-900 dark:text-white">
                Useful Links
              </h2>
              <ul className="text-white">
                <li className="mb-4">
                  <Link href="#">
                    About
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#">
                    Services
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#">
                    Projects
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-2xl font-semibold ext-white-900 dark:text-white">
                Contact Us
              </h2>
              <ul className="text-white">
                <li className="mb-4">
                  <Link target="_blank" href="https://maps.app.goo.gl/TATuCdijyyUCVcF17">
                    168 Oakdale Rd unit 6, North York, ON M3N 1V9, Canada
                  </Link>
                </li>
                <li className="mb-4">
                  <Link target="_blank" href="tel:+1 (416)886-3145">
                    +1 416 886-3145
                  </Link>
                </li>
                <li className="mb-4">
                  <Link target="_blank" href="mailto:info@dsclinx.com">
                    info@dsclinx.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-4 py-6 border-t-2 dark:bg-gray-700 md:flex md:items-center md:justify-between sm:justify-center">
            <span className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            Copyright ©2024 by DSCLINX 
            </span>
            <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              <Link target="_blank" href="https://www.moonleyinteractive.com/">
                {" "}
                Powered by Moonleyinteractive.com{" "}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
