import React from 'react'

const BAN = [
    {
      head: "About",
      para: "DSCLINX  proud to offer a complete range of construction services made possible by our professional team.",
    },
  ];

export default function Banner() {
  return (
    <>
    {BAN.map((banner, key) => (
    <div key={key} className='flex-col gap-4 text-white  bg-[50%] bg-cover justify-center text-center items-center p-[100px] mb-10 flex relative top-auto bottom-[0%] left-auto right-[0%] max-sm:p-[30px]'
    style={{backgroundImage: 'url("/b1.png")',   height: "450px",}}
    >
      <h3 className='text-[50px] font-semibold tracking-[-1.56px] leading-[120.6%] w-[600px] max-md:w-full max-lg:text-[42px] max-md:text-[42px]  max-sm:text-[32px]'>
        {banner.head}
     </h3>
     <p className='w-[550px] max-md:w-full'>
        {banner.para}
    </p>
    </div>
    ))}
    </>

  )
}
