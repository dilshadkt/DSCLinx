"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export const NAV_LINKS = [
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
    sub: [
      { title: "Hood Installation", link: "services/hood-installation" },
      { title: "Architecture Drawing", link: "services/architecture-drawing" },
      { title: "Commercial Reno", link: "services/commercial-reno" },
      { title: "Retail Remodeling", link: "services/retail-remodeling" },
      { title: "Electrical Services", link: "services/electrical-services" },
      { title: "Plumbing Services", link: "services/plumbing-services" },
      {
        title: "Commercial Accessible Construction",
        link: "services/commercial-accessible-construction",
      },
      { title: "Home Renovation", link: "services/home-renovation" },
      { title: "Supplies", link: "servicessupplies" },
      { title: "Your Request?", link: "services/your-request" },
    ],
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

export default function DesktopNavbar() {
  const pathname = usePathname();
  const isActive = (link) => pathname.startsWith(link);

  return (
    <NavigationMenu className="flex mx-auto">
      <NavigationMenuList>
        {NAV_LINKS.map((columns, key) => (
          <NavigationMenuItem key={key}>
            {columns.sub?.length > 0 ? (
              <Link href={columns.link}>
                <NavigationMenuTrigger
                  className={cn(
                    "font-normal !text-base",
                    isActive(columns.link) && "text-[#004363] font-semibold"
                  )}
                >
                  {columns.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex mx-auto">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {columns.sub.map((item, key) => (
                      <ListItem
                        key={key}
                        title={item.title}
                        href={item.link}
                      ></ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </Link>
            ) : (
              <Link href={columns.link} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "font-normal !text-base",
                    pathname === columns.link && "text-[#004363] font-semibold"
                  )}
                >
                  {columns.title}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
