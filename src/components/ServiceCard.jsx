import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function ServiceCard({ name, desc, image, color }) {
  return (
    <div>
      <Card className="card1 rounded-none bg-transparent relative overflow-hidden p-5 ">
        <div className="justify-between items-center flex p-6 max-sm:p-2">
          <div className="flex justify-center items-center bg-[#E0EFF6] w-[65px] h-[65px]">
            <Image
              width={100}
              height={100}
              src={image}
              alt=""
              className="w-11"
            />
          </div>
        </div>
        <CardHeader className="gap-2 max-sm:p-2">
          <CardTitle className={cn("text-3xl max-sm:text-2xl", color)}>
            {name}
          </CardTitle>
          <CardDescription className={cn("text-[16px]", color)}>
            {desc}
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
