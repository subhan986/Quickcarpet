"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';


export default function ChatWidget() {
    return (
        <motion.div 
            className="fixed bottom-5 right-5 z-40"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5, type: 'spring', stiffness: 120 }}
        >
          <a href="https://wa.me/447806997720" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-white shadow-lg transition-transform hover:scale-105">
              <Image src="/whatsapp-svgrepo-com.svg" alt="WhatsApp" width={24} height={24} />
              <span className="font-semibold hidden md:inline">How can I help you?</span>
          </a>
        </motion.div>
    )
}
