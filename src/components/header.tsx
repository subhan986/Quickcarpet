"use client";

import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ArrowRight } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

const Logo = () => (
    <Link href="/" className="flex items-center" prefetch={false}>
        <div className="w-16 h-16 flex items-center justify-center">
             <Image src="/LOGO.png" alt="Quick Step Logo" width={80} height={80} />
        </div>
    </Link>
);


export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/about", label: "ABOUT US" },
    { href: "/services", label: "SERVICES & PRICING" },
    { href: "/cleaning-area", label: "CLEANING AREA" },
    { href: "/#contact", label: "CONTACT" },
  ];

  return (
    <header className={cn(`sticky top-0 z-50 w-full bg-secondary transition-shadow`, isScrolled && 'shadow-md')}>
      <div className="container flex h-16 items-center px-4 md:px-6">
        <div className="md:w-1/4">
          <Logo />
        </div>
        <nav className="hidden flex-1 items-center justify-center space-x-8 text-sm font-medium md:flex">
          {navLinks.map(link => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-600 transition-colors hover:text-primary"
                prefetch={false}
              >
                {link.label}
              </Link>
          ))}
        </nav>
        <div className="hidden md:flex w-1/4 justify-end">
          <Button asChild className="font-semibold">
            <Link href="/#quote">REQUEST A QUOTE</Link>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="ml-auto md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-secondary text-foreground">
            <div className="py-6">
             <Logo />
            </div>
            <div className="grid gap-4 py-6">
              {navLinks.map(link => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex w-full items-center py-2 text-lg font-semibold"
                    prefetch={false}
                  >
                    {link.label}
                  </Link>
              ))}
                <Button asChild className="mt-4 font-semibold">
                    <Link href="/#quote">REQUEST A QUOTE <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
