"use client";
import { motion } from 'framer-motion';

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.44 1.28 4.91L2 22l5.09-1.34c1.47.81 3.12 1.3 4.91 1.3h.01c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.43 12.01c-.13.27-.47.43-.98.5-1.09.15-2.27-.19-3.23-1.1l-.01-.01c-1.3-1.23-2.1-2.9-2.16-3.13-.06-.23.47-.36.47-.36s.25-.11.41-.11c.16 0 .3.04.44.33.14.29.47.96.47.96s.09.21.04.36c-.05.15-.11.23-.23.35-.12.12-.26.26-.39.39-.13.13-.26.28-.15.52.11.24.69.96 1.52 1.76.67.65 1.27.99 1.82 1.1.25.06.39.04.53-.06.14-.1.45-.53.58-.7.13-.17.26-.15.41-.13s.92.43 1.08.51c.16.08.27.12.3.18.03.06.02.36-.11.63z"/>
    </svg>
);


export default function ChatWidget() {
    return (
        <motion.div 
            className="fixed bottom-5 right-5 z-40"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5, type: 'spring', stiffness: 120 }}
        >
          <a href="https://wa.me/447806997720" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-white shadow-lg transition-transform hover:scale-105">
              <WhatsappIcon className="w-6 h-6" />
              <span className="font-semibold hidden md:inline">How can I help you?</span>
          </a>
        </motion.div>
    )
}
