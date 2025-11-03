import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const SOCIALS = [
  {
    name: "Instagram",
    icon: <Instagram />,
    link: "https://www.instagram.com/dsclinx_canada/?hl=en",
  },
  {
    name: "Facebook",
    icon: <Facebook />,
    link: "https://www.facebook.com/people/DSC-LINX-Canada/61582771291991/",
  },
  {
    name: "Linkedin",
    icon: <Linkedin />,
    link: "https://www.linkedin.com/in/dsclinx/?originalSubdomain=ca",
  },
  {
    name: "Whatsapp ",
    icon: <FaWhatsapp className="w-6 h-6" />,
    link: "https://wa.me/+14168863145",
  },
];

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className=" bg-black text-white relative">
        <div className="mx-auto relative z-20 w-full max-w-screen-xl pt-5">
          <div className="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3 sm:grid-cols-2">
            <div>
              <div className="mb-5 w-40 ">
                <Image
                  src={"/footer_logo.png"}
                  width={100}
                  height={100}
                  quality={100}
                  className="w-full h-full scale-150 -translate-x-6 object-cover"
                  alt="Logo"
                />
              </div>

              <p className="mb-4 tracking-tight	leading-7">
                {
                  " Join the journey, We are here to bring up the world's finest Architectural Renovation, Repositioning and Establishment Projects."
                }
              </p>

              <div className="flex mt-4 md:mt-0 space-x-5 rtl:space-x-reverse">
                {SOCIALS.map((social, key) => (
                  <Link
                    key={key}
                    href={social.link}
                    target="_blank"
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
                  <Link href="/about">About</Link>
                </li>
                <li className="mb-4">
                  <Link href="/services">Services</Link>
                </li>
                <li className="mb-4">
                  <Link href="/projects">Projects</Link>
                </li>
                <li className="mb-4">
                  <Link href="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-2xl font-semibold ext-white-900 dark:text-white">
                Contact Us
              </h2>
              <ul className="text-white">
                <li className="mb-4">
                  <Link
                    target="_blank"
                    href="https://maps.app.goo.gl/TATuCdijyyUCVcF17"
                  >
                    168 Oakdale Rd unit 6, North York, ON M3N 1V9, Canada
                  </Link>
                </li>
                <li className="mb-4">
                  <Link target="_blank" href="tel:+1 (416)886-3145">
                    +1 416 886-3145
                  </Link>
                </li>
                <li className="mb-4">
                  <Link target="_blank" href="mailto:Info@dsclinx.com">
                    Info@dsclinx.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="px-4 py-6 border-t-2 dark:bg-gray-700 flex
          border-slate-700 justify-between items-center max-md:flex-col"
          >
            <span className="">Copyright ©{currentYear} by DSCLINX</span>
            <div className="">
              <Link target="_blank" href="https://www.moonleyinteractive.com/">
                {" "}
                Powered by MoonleyInteractive{" "}
              </Link>
            </div>
          </div>
        </div>
        <Image
          src={"/footer.jpg"}
          width={1200}
          height={700}
          alt="footer"
          className="absolute bottom-0 right-0 opacity-45 top-0 left-0 w-full h-full object-cover"
        />
      </footer>
    </>
  );
}
