"use client";
import { motion } from 'framer-motion';

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.46 3.49 1.32 4.95L2 22l5.25-1.38c1.41.81 3.02 1.24 4.7 1.24h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zM16.9 14.8c-.22-.11-.76-.38-.88-.42-.12-.04-.21-.06-.3.11-.1.17-.33.42-.41.51-.08.09-.16.1-.3.04-.14-.06-.59-.22-1.13-.69s-.9-1.03-1.02-1.21c-.12-.17-.01-.26.09-.36.09-.09.2-.24.3-.36.1-.12.13-.21.2-.36s.01-.27-.04-.37c-.05-.1-.3-.71-.41-.97-.11-.26-.22-.22-.3-.22h-.28c-.1 0-.24.03-.36.17-.12.14-.47.46-.47.92s.48 1.07.55 1.15c.07.08.95 1.45 2.3 2.02.32.13.57.21.77.27.35.1.65.09.89-.06.27-.15.76-.31.87-.61s.11-.56.08-.61c-.03-.06-.11-.1-.22-.16z"/>
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
