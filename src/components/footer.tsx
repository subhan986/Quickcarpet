import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from './ui/button';

export default function Footer() {
  return (
    <footer id="contact" className="border-t bg-background">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h4 className="font-headline text-lg font-semibold">FreshStep Clean</h4>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for professional carpet cleaning. We bring a fresh feel to your home.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="mailto:contact@freshstep.com" className="hover:text-primary">contact@freshstep.com</a></li>
              <li><a href="tel:+1234567890" className="hover:text-primary">(123) 456-7890</a></li>
              <li>123 Clean St, Fresh City, 12345</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline text-lg font-semibold">Operating Hours</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Mon - Fri: 9:00 AM - 6:00 PM</li>
              <li>Sat: 10:00 AM - 4:00 PM</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="#"><Twitter className="h-5 w-5" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#"><Facebook className="h-5 w-5" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#"><Instagram className="h-5 w-5" /></a>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FreshStep Clean. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
