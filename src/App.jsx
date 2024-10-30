import React from 'react';
import Hero from './components/Hero';
import Products from './components/Products';
import Sustainability from './components/Sustainability';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-stone-50">
      <Hero />
      <Products />
      <Sustainability />
      <Footer />
    </div>
  );
}

export default App;