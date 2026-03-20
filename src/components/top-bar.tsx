import { Clock, Phone } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-center md:justify-end items-center px-4 md:px-6 h-10 text-sm">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Mon to Sun - 8am to 8pm</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <a href="tel:07806997720" className="hover:underline">07806997720</a>
          </div>
        </div>
      </div>
    </div>
  );
}
