'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="relative flex items-center justify-center text-white text-center px-6 bg-center min-h-[70vh]">
      {/* Content */}
      <div className="relative z-10 p-8 rounded-xl max-w-2xl mt-20">
        {/* Animated Heading */}
        <motion.h1
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          Welcome to Yaanyo Fast Food
        </motion.h1>

        {/* Rest is static */}
        <p className="text-lg md:text-xl mb-6">
          Bold flavors. Fast service. Local love. Enjoy your favorite meals made fresh every day.
        </p>
        <button className="bg-rose-600 hover:bg-rose-700 text-white font-semibold px-10 py-3 rounded-full transition">
          <a href="/menu">Order Now</a>
        </button>
      </div>
    </div>
  );
}
