"use client";

import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Image,
} from "@nextui-org/react";
import { ModeToggle } from "@/components/modeToggle";
import { useTheme } from "next-themes";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState("");

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      className="fixed top-0 left-0 right-0"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
        <NavbarBrand>
          {currentTheme === "light" ? (
            <Link href="/">
              <Image src="/assets/icons/logo-dark.svg" alt="logo" />
            </Link>
          ) : (
            <Link href="/">
              <Image src="/assets/icons/logo-full.svg" alt="logo" />
            </Link>
          )}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/about" aria-current="page">
            About Us
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="/telemedicine">
            Telemedicine
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ModeToggle />
        </NavbarItem>

        <NavbarItem>
          <Button as={Link} color="primary" href="/auth/login" variant="flat">
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Patient Portal", href: "/patient" },
  { name: "Telemedicine", href: "/telemedicine" },
  { name: "Prescriptions", href: "/patient/prescriptions" },
  { name: "Appointments", href: "/patient/appointments" },
  { name: "Medical Records", href: "/patient/records" },
  { name: "Billing", href: "/billing" },
  { name: "News and updates", href: "/news" },
  { name: "Emergency", href: "/emergency" },
  { name: "Notifications", href: "/notifications" },
  { name: "Help & Support", href: "/support" },
  { name: "Settings", href: "/settings" },
  { name: "Log Out", href: "/" },
];
