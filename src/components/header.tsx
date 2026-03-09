"use client";

import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Sparkles } from "lucide-react";
import React from "react";

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
    { href: "#quote", label: "Instant Quote" },
    { href: "#gallery", label: "Gallery" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#booking", label: "Book Now" },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-all ${isScrolled ? 'bg-background/95 backdrop-blur' : 'bg-background'}`}>
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="#" className="mr-6 flex items-center gap-2" prefetch={false}>
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-semibold">FreshStep Clean</span>
        </Link>
        <nav className="hidden flex-1 items-center justify-end space-x-6 text-sm font-medium md:flex">
          {navLinks.map(link => (
             <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="ml-auto md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <Link href="#" className="mr-6 flex items-center gap-2" prefetch={false}>
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="font-headline text-lg font-semibold">FreshStep Clean</span>
            </Link>
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
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
