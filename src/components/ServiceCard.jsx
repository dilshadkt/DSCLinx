import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import * as FaIcons from "react-icons/fa";
import * as HiIcons from "react-icons/hi2";
import * as MdIcons from "react-icons/md";

const iconMap = {
  ...FaIcons,
  ...HiIcons,
  ...MdIcons,
};

export default function ServiceCard({ name, desc, icon, color, link }) {
  const IconComponent = iconMap[icon] || FaIcons.FaQuestionCircle;

  return (
    <div>
      <Link href={link}>
        <Card className="card1 rounded-none bg-transparent relative overflow-hidden p-5 ">
          <div className="justify-between items-center flex p-6 max-sm:p-2">
            <div
              className="flex justify-center items-center
             rounded-lg bg-black w-[65px] h-[65px]"
            >
              <IconComponent className="w-6 h-6 text-white" />
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
      </Link>
    </div>
  );
}
