import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

export default function ServicesCard({ name, desc, image}) {
  return (
    <div>
      <Card className="card1 rounded-none bg-transparent text-white relative overflow-hidden p-5 ">
      <div className="justify-between items-center flex p-6 max-sm:p-2">
          {/* <Link
            href=""
            className="capitalize text-[17px] leading-[28px] flex items-center gap-4 view-m"
          >
            view more
            <FaArrowRightLong />
          </Link> */}
          <div className="flex justify-center items-center bg-[#E0EFF6] w-[65px] h-[65px]">
            <Image width={100} height={100} src={image} alt="" className="w-11" />
          </div>
        </div>
        <CardHeader className="gap-2 max-sm:p-2">
          <CardTitle className="text-3xl max-sm:text-2xl">{name}</CardTitle>
          <CardDescription className="text-white text-[16px]">
            {desc}
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
