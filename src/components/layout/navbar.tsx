"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import Logo from "./logo";
import GetStartedButton from "../home-sections/get-started";

const links = [
  {
    name: "Email Templates",
    href: "/",
  },
  {
    name: "AI Insights",
    href: "/",
  },
  {
    name: "Schedule Emails",
    href: "/",
  },
];

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-gray-700 hover:text-black darktext-white transition-colors"
  >
    {children}
  </Link>
);

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-white shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {links.map((link, index) => (
              <NavLink key={index} href={link.href}>
                {link.name}
              </NavLink>
            ))}
            <GetStartedButton variant="outline" />
            <Button className="col-span-3">Login</Button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden absolute z-50 left-0 right-0 border-t dark:bg-primary bg-white dark:text-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 grid grid-rows-2 grid-cols-3 place-items-center ">
            {links.map((link, index) => (
              <Link key={index} href={link.href} className="text-center">
                {link.name}
              </Link>
            ))}
            <GetStartedButton
              className="col-span-3 dark:bg-transparent "
              variant={"outline"}
            />
          </div>
        </div>
      )}
    </nav>
  );
}
