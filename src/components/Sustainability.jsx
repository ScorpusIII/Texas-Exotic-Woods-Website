import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Sustainability() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section className="bg-stone-100 py-24">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4"
      >
        <h2 className="text-5xl font-bold text-center mb-16">Our Commitment to Sustainability</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-stone-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.16 4.16a9.5 9.5 0 0112.68 0 9.5 9.5 0 010 12.68 9.5 9.5 0 01-12.68 0 9.5 9.5 0 010-12.68zm1.41 1.41a7.5 7.5 0 009.86 0 7.5 7.5 0 00-9.86 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Responsible Sourcing</h3>
            <p className="text-gray-700">We partner with certified suppliers who follow sustainable forestry practices.</p>
          </div>
          <div className="text-center">
            <div className="bg-stone-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Reforestation</h3>
            <p className="text-gray-700">For every tree harvested, we ensure multiple new ones are planted in its place.</p>
          </div>
          <div className="text-center">
            <div className="bg-stone-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Zero Waste</h3>
            <p className="text-gray-700">We utilize every part of the wood, turning remnants into beautiful smaller products.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Sustainability;