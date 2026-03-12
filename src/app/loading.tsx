"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0.5, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
        }}
        className="relative flex h-28 w-28 items-center justify-center"
      >
        <Image src="/LOGO.png" alt="Loading..." fill className="object-contain" />
      </motion.div>
    </div>
  );
}
