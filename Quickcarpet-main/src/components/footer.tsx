import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, Clock, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { locations } from '@/lib/data';
import Image from 'next/image';

const Logo = () => (
    <Link href="/" className="flex flex-col items-center text-center md:items-start md:text-left" prefetch={false}>
      <div className="w-24 h-24 flex items-center justify-center">
             <Image src="/LOGO.png" alt="Quick Step Logo" width={96} height={96} />
      </div>
      <span className="text-xl font-bold text-white">Quick Step</span>
      <p className="text-xs text-gray-400 tracking-widest -mt-1">CARPETS & UPHOLSTERY</p>
    </Link>
);


export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 border-t border-border/20">
      <div className="container mx-auto px-4 py-8 md:py-12 md:px-6">
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 text-center md:grid-cols-4 md:gap-8 md:text-left">
          
          <div className="col-span-2 flex flex-col items-center md:col-span-1 md:items-start">
            <Logo />
          </div>

          <div className="space-y-4">
             <h4 className="text-lg font-semibold text-primary">About</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                <li><Link href="/services" className="hover:text-primary">Services & Pricing</Link></li>
                <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
              </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Cleaning Area</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {locations.slice(0, 5).map(location => (
                <li key={location}><Link href="/cleaning-area" className="hover:text-primary">{location}</Link></li>
              ))}
               <li><Link href="/cleaning-area" className="hover:text-primary">...and more</Link></li>
            </ul>
          </div>
          <div className="col-span-2 space-y-4 md:col-span-1">
            <h4 className="text-lg font-semibold text-primary">Contact Details</h4>
            <div className="flex space-x-2 justify-center md:justify-start">
              <Button variant="ghost" size="icon" asChild>
                <a href="#"><Facebook className="h-5 w-5 text-primary" /></a>
              </Button>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
               <li className="flex items-center justify-center md:justify-start gap-2"><Clock size={16} className="text-primary"/> <span>Mon to Sun - 8am to 8pm</span></li>
               <li className="flex items-center justify-center md:justify-start gap-2"><Phone size={16} className="text-primary"/> <a href="tel:07806997720" className="hover:text-primary">07806997720</a></li>
               <li className="flex items-center justify-center md:justify-start gap-2"><Mail size={16} className="text-primary"/> <a href="mailto:info@quickstep.com" className="hover:text-primary">info@quickstep.com</a></li>
               <li className="flex items-center justify-center md:justify-start gap-2"><MapPin size={16} className="text-primary"/> <span>Suite RA01, 195-197 Wood St, London</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-muted-foreground">
          <p>
            Copyright &copy; {new Date().getFullYear()} Quick Step Carpets & Upholstery Dry Cleaning | Powered by{' '}
            <a href="https://subhan-ai.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              M.subhan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
