import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const SERVICES_LINKS = [
  { name: "Hood Installation", url: "/services/hood-installation" },
  { name: "Architecture Drawing", url: "/services/architecture-drawing" },
  { name: "Commercial Reno", url: "/services/commercial-reno" },
  { name: "Retail Remodeling", url: "/services/retail-remodeling" },
  { name: "Electrical Services", url: "/services/electrical-services" },
  { name: "Plumbing Services", url: "/services/plumbing-services" },
  {
    name: "Commercial Accessible Construction",
    url: "/services/commercial-accessible-construction",
  },
  { name: "Home Renovation", url: "/services/home-renovation" },
  { name: "Supplies", url: "/services/supplies" },
  { name: "Your Request?", url: "/services/your-request" },
];

export default function NavCard({ active }) {
  return (
    <>
      <Card className="p-10 border-[1px] border-[solid] border-[#c1c1c1] rounded-none">
        <CardHeader className="p-0">
          <CardTitle>All Services</CardTitle>
          <hr className="border-[1.5px] border-[solid] border-[#000] !mt-[18px] w-[65px]" />
        </CardHeader>
        <div className="pt-6">
          {SERVICES_LINKS.map((service, index) => (
            <div className="pt-3" key={index}>
              <Link
                href={service.url}
                className={`${
                  active === service.url.split("/").pop() &&
                  "text-[#004363] font-semibold"
                }`}
              >
                {service.name}
              </Link>
              <hr className="border-[1px] border-[solid] border-[#c1c1c1] mt-[17px] mb-[17px]" />
            </div>
          ))}
        </div>
      </Card>

      <Link href="tel:+1 (416)886-3145" target="_blank">
        <Card className="p-8 mt-10 border-[1px] border-[solid] border-[#c1c1c1] rounded-none">
          <div className="grid grid-cols-[20%_80%] gap-[20px]">
            <div>
              <Image
                src="/icons/call.png"
                alt="icon"
                className="w-16 h-auto"
                width={1600}
                height={871}
              />
            </div>
            <div>
              <h3 className="font-semibold text-2xl">Contact Us</h3>
              <p>+1 (416) 886-3145</p>
            </div>
          </div>
        </Card>
      </Link>
    </>
  );
}
