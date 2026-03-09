"use client";

import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Mail, Phone, Droplet } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

// Simple approximation of the logo
const Logo = () => (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <span className="text-2xl font-bold text-white">FIBRE</span>
        <div className="relative flex items-center">
            <span className="text-2xl font-bold text-primary">RINSE</span>
            <Droplet className="absolute -right-6 top-1 h-5 w-5 text-primary fill-current" />
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
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
    <div className="bg-[#0A182E] text-white py-2">
      <div className="container mx-auto flex justify-between items-center text-xs px-4 md:px-6">
        <div className="flex items-center gap-4">
           <div className="flex items-center gap-2">
            <Phone size={14}/>
            <span>0412 345 678</span>
          </div>
           <div className="flex items-center gap-2">
            <Mail size={14}/>
            <span>info@fibrerinse.com.au</span>
          </div>
        </div>
        <div>
          {/* Social Icons can go here */}
        </div>
      </div>
    </div>
    <header className={cn(`sticky top-0 z-50 w-full transition-all`, isScrolled ? 'bg-[#0A182E]/95 backdrop-blur' : 'bg-[#0A182E]')}>
      <div className="container flex h-20 items-center px-4 md:px-6">
        <Logo />
        <nav className="hidden flex-1 items-center justify-end space-x-6 text-sm font-medium md:flex">
          {navLinks.map(link => (
             <Link
              key={link.href}
              href={link.href}
              className="text-white transition-colors hover:text-primary"
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild>
            <Link href="#quote">Get Quote</Link>
          </Button>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="ml-auto md:hidden bg-transparent border-primary text-primary hover:bg-primary hover:text-black">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#0A182E] text-white border-l-primary">
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
                <Button asChild className="mt-4">
                    <Link href="#quote">Get Quote</Link>
                </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
    </>
  );
}
