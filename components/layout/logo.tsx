'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <Link href="/" className="group relative">
      <div className="flex items-center gap-3">
        {/* OBM Logo Mark */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center"
          >
            <span className="text-white font-bold text-xl tracking-tight">OBM</span>
          </motion.div>
          
          {/* Animated ring */}
          <motion.div
            className="absolute inset-0 rounded-xl border-2 border-blue-400/30"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        
        {/* Logo text - hidden on mobile, shown on desktop */}
        <div className="hidden md:block">
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight">Oussama Ben Marzouk</span>
            <span className="text-xs text-gray-400 font-medium tracking-wide">
              E-commerce & Marketing Design
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}