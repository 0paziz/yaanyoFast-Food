'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function MenuCard({ item }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="group w-[18rem] sm:w-[20rem] bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
    >
      <img
        loading="lazy" 
        className="w-full h-[14rem] object-cover"
        src={item.image}
        alt={item.name}
      />
      <div className="p-5">
        <h2 className="text-2xl font-semibold mb-1 group-hover:text-rose-600">
          {item.name}
        </h2>
        <p className="text-gray-700 mb-4">{item.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-yellow-500 font-bold text-lg">⭐ {item.rating}</span>
          <span className="text-rose-600 font-semibold">${item.price}</span>
        </div>
        <button className="w-full py-2 border border-rose-600 text-rose-700 rounded-full uppercase font-bold transition duration-300 cursor-pointer hover:bg-rose-600 hover:text-white">
          Order now
        </button>
      </div>
    </motion.div>
  );
}
