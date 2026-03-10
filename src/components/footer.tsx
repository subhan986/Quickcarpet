import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { locations } from '@/lib/data';

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.65 4.28 1.7.03 1.31-.02 2.62-.01 3.93-.68.07-1.35.16-2.02.27-1.03.16-2.02.42-2.99.81-.99.4-1.93.95-2.79 1.61-1.04.8-1.97 1.77-2.79 2.84-.81 1.06-1.5 2.23-2.07 3.49-.57 1.25-1.02 2.59-1.35 3.94-.34 1.36-.54 2.77-.61 4.18-.07 1.4-.04 2.81.04 4.21-.68.07-1.35.16-2.02.27-1.03.16-2.02.42-2.99.81-.99.4-1.93.95-2.79 1.61-1.04.8-1.97 1.77-2.79 2.84-.81 1.06-1.5 2.23-2.07 3.49-.57 1.25-1.02 2.59-1.35 3.94-.34 1.36-.54 2.77-.61 4.18-.07 1.4-.04 2.81.04 4.21h-3.9V.02h3.9v7.71c.51-1.01 1.14-1.93 1.88-2.76.73-.82 1.58-1.5 2.5-2.06.92-.56 1.93-1 3-1.33.16-.05.33-.1.49-.15.42-.12.85-.22 1.28-.31.42-.08.85-.15 1.28-.21.42-.06.84-.1 1.27-.15.01 0 .01-.01.02-.01z" />
    </svg>
);

const Logo = () => (
    <Link href="/" className="flex flex-col items-center text-center md:items-start md:text-left" prefetch={false}>
      <div className="w-20 h-20 flex items-center justify-center">
          <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 10 C 20 25, 20 75, 50 90" stroke="hsl(var(--primary))" strokeWidth="6"/>
              <path d="M50 10 C 80 25, 80 75, 50 90" stroke="hsl(var(--primary))" strokeWidth="6" />
              <text x="50" y="62" textAnchor="middle" fontSize="36" fontWeight="bold" fill="hsl(var(--primary))">N&amp;S</text>
          </svg>
      </div>
      <span className="text-2xl font-bold text-white">N&S</span>
      <p className="text-sm text-gray-400 tracking-widest -mt-1">CLEANING SERVICE</p>
    </Link>
);


export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-800 text-gray-300 border-t border-border/20">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-4 text-center md:text-left">
          <div className="space-y-4 md:col-span-1">
            <Logo />
          </div>
          <div className="space-y-4">
             <h4 className="text-lg font-semibold text-primary">About</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#about" className="hover:text-primary">About Us</Link></li>
                <li><Link href="#services" className="hover:text-primary">Services & Pricing</Link></li>
                <li><Link href="#contact" className="hover:text-primary">Contact</Link></li>
              </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Cleaning Area</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {locations.map(location => (
                <li key={location}><Link href="#" className="hover:text-primary">{location}</Link></li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Contact Details</h4>
            <div className="flex space-x-2 justify-center md:justify-start">
              <Button variant="ghost" size="icon" asChild>
                <a href="#"><Facebook className="h-5 w-5 text-primary" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#"><TikTokIcon className="h-5 w-5 text-primary" /></a>
              </Button>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
               <li className="flex items-center justify-center md:justify-start gap-2"><Clock size={16} className="text-primary"/> <span>Mon to Sat - 9am to 7pm</span></li>
               <li className="flex items-center justify-center md:justify-start gap-2"><Phone size={16} className="text-primary"/> <a href="tel:07856525815" className="hover:text-primary">078 5652 5815</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-muted-foreground">
          <p>Copyright &copy; {new Date().getFullYear()} N&S Cleaning Service | Powered by Matysiewicz Studio</p>
        </div>
      </div>
    </footer>
  );
}
