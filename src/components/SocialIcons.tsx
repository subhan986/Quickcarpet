"use client";
import { motion } from 'framer-motion';
import { Facebook, Instagram } from 'lucide-react';

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
          <a href="#" className="p-3 text-white transition-opacity hover:opacity-90" style={{background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'}}>
            <Instagram size={20} />
            <span className="sr-only">Instagram</span>
          </a>
        </motion.div>
    )
}
