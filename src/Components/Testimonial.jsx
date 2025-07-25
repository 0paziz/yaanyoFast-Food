import React from 'react';

const testimonials = [
  {
    name: "Sarah M.",
    comment: "Absolutely loved the burger! Super fresh and juicy. Will definitely come back.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5
  },
  {
    name: "David K.",
    comment: "The pasta was creamy and full of flavor. Great service too!",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    rating: 4
  },
  {
    name: "Emily R.",
    comment: "Best fried chicken in town. Crunchy outside, juicy inside!",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 5
  }
];

export default function Testimonial() {
  return (
    <section className="py-16 bg-[#fdfdfc] mt-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-lg text-rose-600 font-semibold mb-2">Testimonials</p>
        <h2 className="text-4xl font-serif font-bold mb-10 text-gray-900">What Our Customers Say</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-[#ffffff] shadow-md border border-gray-100 rounded-2xl p-6 text-left hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full border-2 border-rose-400"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{t.name}</h4>
                  <div className="flex text-yellow-400">
                    {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">"{t.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
