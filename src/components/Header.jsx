'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  {
    title: "Home",
    link: "/"
  },
  {
    title: "About",
    link: "/about"
  },
  {
    title: "Services",
    link: "/services"
  },
  {
    title: "Projects",
    link: "/projects"
  },
  {
    title: "Contact Us",
    link: "/contact-us"
  },
]

export default function Header() {

  const [open, setOpen] = useState(false)

  return (
    <div className='border-b-2 border-solid border-[#c7c7c7]'>
      <div className="relative container py-2 gap-8 flex items-center justify-between ">
      <div className="relative">
        <Image
          src={"/logo.png"}
          width={115}
          height={97}
          className='w-23'
          alt='Logo'
        />
      </div>
      <div className="items-center justify-between text-text xl:basis-3/5 md:basis-4/5 text-lg hidden md:flex">
        {links.map(item => (
          <Link href={item.link} key={item.link}>{item.title}</Link>
        ))}
        <Button className="bg-[#004363] rounded-none	 text-lg px-8 py-6 hidden md:flex" >+1 (416) 886-3145</Button>
      </div>
      {/* mobile */}
      <Menu onClick={() => setOpen(true)} className='md:hidden cursor-pointer' size={40} />
      {open &&
        <div className="fixed z-10 inset-0 bg-[#004363] animate-reveal">
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={"/logo-2.png"}
              width={115}
              height={97}
              className='w-23 fixed top-2 left-8 z-[2]'
              alt='Logo'
            />
            <X onClick={() => setOpen(false)} className='md:hidden text-secondary cursor-pointer fixed top-2 right-4 z-[2]' size={40} />
            <div className="flex mt-16 flex-col items-center justify-center gap-8 text-white text-3xl hover:underline">
              {links.map(item => (
                <Link href={item.link} key={item.link}>{item.title}</Link>
              ))}
            </div>
          </div>
        </div>}
      </div>

    </div>
  )
}
