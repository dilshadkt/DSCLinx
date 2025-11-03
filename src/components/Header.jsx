"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, Phone, X, Instagram, Facebook, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { usePathname } from "next/navigation";
import DesktopNavbar from "./DesktopNavbar";

const links = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "Contact Us",
    link: "/contact-us",
  },
];

const SOCIALS = [
  {
    name: "Instagram",
    icon: <Instagram />,
    link: "https://www.instagram.com/linxdsc/",
  },
  {
    name: "Facebook",
    icon: <Facebook />,
    link: "https://www.facebook.com/dsc.linx.7",
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

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="border-b-2 border-solid relative bg-black z-50 border-[#c7c7c7]">
      <div className="relative container py-2 gap-8 flex items-center justify-between ">
        <div className="relative">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-x-2"
          >
            <Image
              src={"/logo.jpg"}
              width={128}
              height={33}
              className=" w-12 md:w-14"
              alt="Logo"
            />
            <Image
              src={"/logo-2.png"}
              width={128}
              height={33}
              className=" w-[68px]"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="items-center justify-between text-text xl:basis-3/5 md:basis-4/5 text-lg hidden md:flex">
          <DesktopNavbar />
          <Link onClick={() => setOpen(false)} href="tel:+1 (416)886-3145">
            <Button className="bg-white text-black rounded-none text-lg px-6 py-6 hidden md:flex gap-4">
              <Phone /> +1 (416) 886-3145
            </Button>
          </Link>
        </div>
        {/* mobile */}
        <Menu
          onClick={() => setOpen(true)}
          className="md:hidden text-white cursor-pointer"
          size={40}
        />
        {open && (
          <div className="fixed z-20 inset-0 bg-black animate-reveal">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="flex items-center gap-x-2 fixed top-5 left-8 z-[2]">
                <Image
                  src={"/logo.jpg"}
                  width={128}
                  height={33}
                  className=" w-12 md:w-14"
                  alt="Logo"
                />
                <Image
                  src={"/logo-2.png"}
                  width={115}
                  height={97}
                  className="w-23 "
                  alt="Logo"
                />
              </div>
              <X
                onClick={() => setOpen(false)}
                className="md:hidden text-secondary cursor-pointer fixed top-5 right-4 z-[2]"
                size={40}
              />
              <div className="flex mt-16 flex-col items-center justify-center gap-8">
                <div className="text-white text-3xl flex flex-col items-center justify-center gap-8">
                  {links.map((item) => (
                    <Link
                      onClick={() => setOpen(false)}
                      href={item.link}
                      key={item.link}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                <div className="flex gap-6 mt-8">
                  {SOCIALS.map((social, key) => (
                    <Link
                      key={key}
                      href={social.link}
                      target="_blank"
                      className="text-white hover:text-secondary transition-colors"
                    >
                      {social.icon}
                      <span className="sr-only">{social.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
