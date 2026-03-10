import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, Footprints, Clock } from 'lucide-react';
import { Button } from './ui/button';

// Simple approximation of the logo
const Logo = () => (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <span className="text-2xl font-bold text-white">QUICK</span>
        <div className="relative flex items-center">
            <span className="text-2xl font-bold text-primary">STEP</span>
            <Footprints className="absolute -right-7 top-1 h-6 w-6 text-primary fill-current" />
        </div>
    </Link>
);

export default function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-border/20">
      <div className="container mx-auto px-4 py-12 md:px-6">
         <div className="text-center space-y-2 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">CONTACT US</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
              Ready to experience the Quick Step difference? Get in touch with us today!
            </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Carpets & Upholstery Dry Cleaning for Melbourne and surrounding suburbs.
            </p>
             <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="#"><Twitter className="h-5 w-5 text-primary" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#"><Facebook className="h-5 w-5 text-primary" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#"><Instagram className="h-5 w-5 text-primary" /></a>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Contact Details</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Phone size={16} className="text-primary"/> <a href="tel:0412345678" className="hover:text-primary">0412 345 678</a></li>
              <li className="flex items-center gap-2"><Mail size={16} className="text-primary"/> <a href="mailto:info@quickstep.com.au" className="hover:text-primary">info@quickstep.com.au</a></li>
               <li className="flex items-center gap-2"><Clock size={16} className="text-primary"/> <span>Monday to Sunday</span></li>
            </ul>
          </div>
          <div className="space-y-4">
             <h4 className="text-lg font-semibold text-primary">Service Area</h4>
             <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                Map Placeholder
             </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border/20 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Quick Step. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
