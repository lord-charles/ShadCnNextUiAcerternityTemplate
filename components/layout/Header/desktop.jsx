"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { ModeToggle } from "@/components/modeToggle";
import { DropdownMenuHeader } from "./DropdownHeader.jsx";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Image from "next/image.js";

export default function DesktopNav() {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Patient Portal", href: "/patient" },
    { name: "Telemedicine", href: "/telemedicine" },
    { name: "News", href: "/news" },
  ];

  const isActive = (href) => pathname === href;
  return (
    <div
      className="fixed top-0 left-0 right-0  w-screen z-[99] py-4 "
      style={{
        backgroundColor: theme === "light" ? "white" : "rgba(0, 0, 0, 0.8)",
      }}
    >
      <div className=" flex items-center container  justify-between">
        {/* logo  */}
        <div className="relative left-[-33px] ">
          {currentTheme === "light" ? (
            <Link href="/">
              <Image
                src="/assets/icons/logo-dark.svg"
                alt="logo"
                width={200}
                height={200}
                className="object-contain"
              />
            </Link>
          ) : (
            <Link href="/">
              <Image
                src="/assets/icons/logo-full.svg"
                alt="logo"
                width={200}
                height={200}
                className="object-contain"
              />
            </Link>
          )}
        </div>

        {/* items  */}
        <div className="flex space-x-2">
          {menuItems.map((item, index) => (
            <div key={`${item.name}-${index}`}>
              <Link
                href={item.href}
                className={`${
                  isActive(item.href)
                    ? "font-bold font-serif text-[19px] transition-all duration-300"
                    : "font-serif text-[18px] transition-all duration-300"
                }`}
                color="foreground"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>

        {/* end  */}
        <div className="flex space-x-2 relative left-[28px]">
          <div className="space-x-2 flex items-center ]">
            <ModeToggle />
            <Link
              href="https://twitter.com"
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground  h-8 w-8 "
            >
              <svg
                class="h-4 w-4 fill-current"
                height="23"
                viewBox="0 0 1200 1227"
                width="23"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"></path>
              </svg>
              <span class="sr-only">Twitter</span>
            </Link>
          </div>
          <div>
            <Button
              as={Link}
              color="primary"
              href="/emergency"
              variant="shadow"
            >
              Emergency
            </Button>
          </div>
          <div>
            <DropdownMenuHeader />
          </div>
        </div>
      </div>
    </div>
  );
}
