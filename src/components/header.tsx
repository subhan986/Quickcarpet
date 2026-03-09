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
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -right-5 top-1 h-5 w-5 text-primary"
            >
                <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                    fill="currentColor"
                />
                <path d="M12 11.5C11.34 11.5 10.73 11.75 10.29 12.19L13.71 15.61C14.15 15.17 14.4 14.56 14.4 13.9C14.4 12.63 13.37 11.6 12.2 11.6L12 11.5Z" fill="currentColor"/>
                <path d="M7.5 12C7.5 14.48 9.52 16.5 12 16.5C12.79 16.5 13.54 16.28 14.19 15.9L15.61 17.33C14.55 18 13.3 18.2 12 18.2C8.59 18.2 5.8 15.41 5.8 12C5.8 10.7 6 9.45 6.7 8.39L8.1 9.81C7.72 10.46 7.5 11.21 7.5 12Z" fill="currentColor"/>
            </svg>
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
