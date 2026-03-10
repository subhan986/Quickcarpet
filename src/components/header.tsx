"use client";

import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Phone, Clock, ArrowRight } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

const Logo = () => (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <div className="w-12 h-12 flex items-center justify-center">
             <Image src="/g.jpg" alt="Quick Step Logo" width={48} height={48} />
        </div>
        <div>
            <span className="text-xl font-bold text-gray-800">Quick Step</span>
            <p className="text-xs text-gray-500 tracking-wide">CARPETS & UPHOLSTERY</p>
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
    { href: "#services", label: "SERVICES & PRICING" },
    { href: "#reviews", label: "REVIEWS" },
    { href: "#contact", label: "CONTACT" },
  ];

  return (
    <header className={cn(`sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md transition-shadow`, isScrolled && 'shadow-md')}>
      <div className="container flex h-16 items-center px-4 md:px-6">
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
          <SheetContent side="right" className="bg-background text-foreground">
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
  );
}
