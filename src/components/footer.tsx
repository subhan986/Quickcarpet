import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';

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

export default function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-border/20">
      <div className="container mx-auto px-4 py-12 md:px-6">
         <div className="text-center space-y-2 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">CONTACT US</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
              Ready to experience the Fibre Rinse difference? Get in touch with us today!
            </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Professional carpet and upholstery cleaning for Melbourne and surrounding suburbs.
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
              <li className="flex items-center gap-2"><Mail size={16} className="text-primary"/> <a href="mailto:info@fibrerinse.com.au" className="hover:text-primary">info@fibrerinse.com.au</a></li>
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
          <p>&copy; {new Date().getFullYear()} Fibre Rinse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
