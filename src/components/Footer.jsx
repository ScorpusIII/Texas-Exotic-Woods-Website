import React from 'react';

function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Texas Exotic Woods</h3>
            <p className="text-stone-400">Bringing sustainable exotic hardwoods to your projects.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Contact</h4>
            <p className="text-stone-400">Email: info@texasexoticwoods.com</p>
            <p className="text-stone-400">Phone: (555) 123-4567</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Location</h4>
            <p className="text-stone-400">123 Hardwood Lane</p>
            <p className="text-stone-400">Austin, TX 78701</p>
          </div>
        </div>
        <div className="border-t border-stone-700 mt-12 pt-8 text-center text-stone-400">
          <p>&copy; {new Date().getFullYear()} Texas Exotic Woods. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;