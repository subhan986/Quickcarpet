"use client";

import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Mail, Phone, Clock, ArrowRight } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

const Logo = () => (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <div className="w-12 h-12 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-10 h-10">
                <circle cx="50" cy="50" r="48" fill="hsl(var(--primary))" />
                <path d="M 25 50 Q 37.5 30, 50 50 T 75 50" stroke="white" strokeWidth="5" fill="none" />
                <path d="M 25 55 Q 37.5 35, 50 55 T 75 55" stroke="white" strokeWidth="5" fill="none" />
            </svg>
        </div>
        <div>
            <span className="text-3xl font-extrabold text-gray-800">Quick Step</span>
            <p className="text-xs text-gray-500 tracking-widest -mt-1">CARPETS & UPHOLSTERY</p>
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
    { href: "#about", label: "ABOUT US" },
    { href: "#services", label: "SERVICES & PRICING" },
    { href: "#contact", label: "CONTACT" },
  ];

  return (
    <>
    <div className="bg-[#2B3A4F] text-white py-2 text-sm">
      <div className="container mx-auto flex justify-center sm:justify-end items-center gap-6 px-4 md:px-6">
        <div className="flex items-center gap-2">
            <Clock size={16}/>
            <span>Open Monday to Sunday</span>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <Phone size={16}/>
          <span>078 5652 5815</span>
        </div>
      </div>
    </div>
    <header className={cn(`sticky top-0 z-50 w-full bg-white transition-shadow`, isScrolled && 'shadow-md')}>
      <div className="container flex h-24 items-center px-4 md:px-6">
        <div className="md:w-1/4">
          <Logo />
        </div>
        <nav className="hidden flex-1 items-center justify-center space-x-8 text-sm font-medium md:flex">
          {navLinks.map(link => (
             <Link
              key={link.href}
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
            <Link href="#quote">REQUEST A QUOTE <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="ml-auto md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white text-gray-800">
            <div className="py-6">
             <Logo />
            </div>
            <div className="grid gap-4 py-6">
              {navLinks.map(link => (
                 <Link
                  key={link.href}
                  href={link.href}
                  className="flex w-full items-center py-2 text-lg font-semibold"
                  prefetch={false}
                >
                  {link.label}
                </Link>
              ))}
                <Button asChild className="mt-4 font-semibold">
                    <Link href="#quote">REQUEST A QUOTE <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
    </>
  );
}
