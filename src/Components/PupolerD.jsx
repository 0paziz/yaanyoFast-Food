'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaStar } from 'react-icons/fa';

const popularDishes = [
  {
    name: 'Zesty Beef Burger',
    description: 'Grilled beef, cheese & spicy mayo',
    image: './images/burger1.webp',
    price: '12.99',
    rating: 4.8,
    inStock: true,
    badge: 'Best Seller',
  },
  {
    name: 'Classic Shawarma',
    description: 'Marinated chicken with garlic sauce',
    image: './images/classic-shawarma.webp',
    price: '6.49',
    rating: 4.9,
    inStock: true,
    badge: 'Hot Deal',
  },
  {
    name: 'Loaded Fries',
    description: 'Topped with beef & cheese',
    image: './images/loaded-fries.webp',
    price: '4.99',
    rating: 4.7,
    inStock: false,
    badge: '',
  },
  {
    name: 'Spicy Chicken Wings',
    description: 'Crispy wings with hot sauce',
    image: './images/spicy-wings.webp',
    price: '7.25',
    rating: 4.6,
    inStock: true,
    badge: '',
  },
  {
    name: 'Creamy Pasta Box',
    description: 'Pasta with white sauce & herbs',
    image: './images/creamy-pasta.webp',
    price: '8.75',
    rating: 4.9,
    inStock: false,
    badge: 'Limited',
  },
];

export default function PopularDishes() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section className="bg-white py-12 px-6 md:px-16">
      <h2 className="text-3xl font-bold text-rose-600 mb-10 text-left">
        Popular Dishes
      </h2>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-7xl mx-auto"
      >
        {popularDishes.map((dish, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition text-center flex flex-col justify-between relative"
          >
            {dish.badge && (
              <span className="absolute top-2 left-2 bg-rose-500 text-white text-xs font-semibold px-2 py-0.5 rounded">
                {dish.badge}
              </span>
            )}

            <img
              src={dish.image}
              alt={dish.name}
              className="h-32 w-full object-cover"
    
            />

            <div className="p-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-semibold">{dish.name}</h3>
                <p className="text-xs text-gray-600 mb-2">
                  {dish.description}
                </p>
              </div>

              <div className="text-xs text-gray-500 flex items-center justify-center gap-1 mb-1">
                <FaStar className="text-yellow-400 text-sm" />
                {dish.rating} • ${dish.price}
              </div>

              <div
                className={`text-xs font-medium mb-2 ${
                  dish.inStock ? 'text-green-600' : 'text-rose-500'
                }`}
              >
                {dish.inStock ? 'In Stock' : 'Out of Stock'}
              </div>

              <button
                className={`mt-auto text-sm font-medium py-1.5 px-3 rounded-full transition ${
                  dish.inStock
                    ? 'bg-rose-600 hover:bg-rose-700 text-white cursor-pointer'
                    : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                }`}
                disabled={!dish.inStock}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
