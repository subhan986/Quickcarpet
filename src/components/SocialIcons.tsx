"use client";
import { motion } from 'framer-motion';
import { Facebook, Instagram } from 'lucide-react';

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.65 4.28 1.7.03 1.31-.02 2.62-.01 3.93-.68.07-1.35.16-2.02.27-1.03.16-2.02.42-2.99.81-.99.4-1.93.95-2.79 1.61-1.04.8-1.97 1.77-2.79 2.84-.81 1.06-1.5 2.23-2.07 3.49-.57 1.25-1.02 2.59-1.35 3.94-.34 1.36-.54 2.77-.61 4.18-.07 1.4-.04 2.81.04 4.21-.68.07-1.35.16-2.02.27-1.03.16-2.02.42-2.99.81-.99.4-1.93.95-2.79 1.61-1.04.8-1.97 1.77-2.79 2.84-.81 1.06-1.5 2.23-2.07 3.49-.57 1.25-1.02 2.59-1.35 3.94-.34 1.36-.54 2.77-.61 4.18-.07 1.4-.04 2.81.04 4.21h-3.9V.02h3.9v7.71c.51-1.01 1.14-1.93 1.88-2.76.73-.82 1.58-1.5 2.5-2.06.92-.56 1.93-1 3-1.33.16-.05.33-.1.49-.15.42-.12.85-.22 1.28-.31.42-.08.85-.15 1.28-.21.42-.06.84-.1 1.27-.15.01 0 .01-.01.02-.01z" />
    </svg>
);


export default function SocialIcons() {
    return (
        <motion.div 
            className="fixed top-1/2 -translate-y-1/2 right-0 z-40 hidden md:flex flex-col rounded-l-md overflow-hidden shadow-lg"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a href="#" className="p-3 text-white transition-opacity hover:opacity-90" style={{backgroundColor: '#1877F2'}}>
            <Facebook size={20} />
            <span className="sr-only">Facebook</span>
          </a>
          <a href="#" className="p-3 text-white transition-opacity hover:opacity-90" style={{backgroundColor: '#000000'}}>
            <TikTokIcon className="w-5 h-5"/>
            <span className="sr-only">TikTok</span>
          </a>
          <a href="#" className="p-3 text-white transition-opacity hover:opacity-90" style={{background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'}}>
            <Instagram size={20} />
            <span className="sr-only">Instagram</span>
          </a>
        </motion.div>
    )
}
