import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const products = [
  {
    name: 'Ipe',
    description: 'Known as "Brazilian Walnut," Ipe is renowned for its exceptional strength, resistance to weather, and striking deep brown hue. Ideal for outdoor decks, patios, and long-lasting constructions.',
    image: '/images/ipe.jpg'
  },
  {
    name: 'Purple Heart',
    description: 'This vibrant wood is celebrated for its stunning natural purple color, making it a perfect choice for high-end furniture, cabinetry, and decorative accents.',
    image: '/images/purple-heart.jpg'
  },
  {
    name: 'Guyanese Rosewood',
    description: 'A rare and exquisite hardwood with deep, rich tones and remarkable grain patterns. Perfect for luxurious interiors, flooring, and custom woodworking projects.',
    image: '/images/rosewood.jpg'
  }
];

function ProductCard({ product, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="flex flex-col md:flex-row items-center gap-8 py-16"
    >
      <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[400px] object-cover rounded-lg shadow-xl"
        />
      </div>
      <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
        <h2 className="text-4xl font-bold mb-4">{product.name}</h2>
        <p className="text-lg text-gray-700 leading-relaxed">{product.description}</p>
      </div>
    </motion.div>
  );
}

function Products() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-5xl font-bold text-center mb-16">Our Collection</h2>
      <div className="space-y-16">
        {products.map((product, index) => (
          <ProductCard key={product.name} product={product} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Products;