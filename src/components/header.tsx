"use client";

import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Phone, Clock, ArrowRight, ChevronDown } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { locations } from "@/lib/data";


const Logo = () => (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <div className="w-12 h-12 flex items-center justify-center">
             <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 10 C 20 25, 20 75, 50 90" stroke="hsl(var(--primary))" strokeWidth="6"/>
                <path d="M50 10 C 80 25, 80 75, 50 90" stroke="hsl(var(--primary))" strokeWidth="6" />
                <text x="50" y="62" textAnchor="middle" fontSize="36" fontWeight="bold" fill="#2B3A4F">N&S</text>
            </svg>
        </div>
        <div>
            <span className="text-xl font-bold text-gray-800">N&S</span>
            <p className="text-xs text-gray-500 tracking-wide">CLEANING SERVICE</p>
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
    { href: "#contact", label: "ABOUT US" },
    { href: "#services", label: "SERVICES & PRICING" },
    { href: "#contact", label: "CONTACT" },
  ];

  return (
    <>
    <div className="bg-[#2B3A4F] text-white py-2 text-sm">
      <div className="container mx-auto flex justify-center sm:justify-end items-center gap-6 px-4 md:px-6">
        <div className="flex items-center gap-2">
            <Clock size={16}/>
            <span>Mon to Sat - 9am to 7pm</span>
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center text-gray-600 transition-colors hover:text-primary text-sm font-medium">
                  CLEANING AREA
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {locations.map(location => (
                  <DropdownMenuItem key={location}>{location}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
        </nav>
        <div className="hidden md:flex w-1/4 justify-end">
          <Button asChild className="font-semibold">
            <Link href="#quote">REQUEST A QUOTE</Link>
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
               <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold">CLEANING AREA</Link>
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
