import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Exotic wood background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Texas Exotic Woods</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto">
          Discover the extraordinary beauty of sustainable exotic hardwoods
        </p>
      </motion.div>
    </div>
  );
}