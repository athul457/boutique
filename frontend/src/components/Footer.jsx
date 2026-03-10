import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1C1814] text-antique-white py-16 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/floral-motif.png')]"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div>
          <span className="text-3xl font-serif tracking-widest uppercase mb-6 block text-antique-gold">Minnaram Boutique</span>
          <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
            Curating the finest antique-inspired fashion, blending golden eras with modern sensibilities.
          </p>
          <div className="flex space-x-6">
            <a 
              href="https://www.instagram.com/minnaram_designer_boutique/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-antique-gold transition-colors hover:scale-110 transform duration-300"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
            <a 
              href="https://wa.me/917306793976" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-antique-gold transition-colors hover:scale-110 transform duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle size={22} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest mb-6 text-antique-gold font-bold">The Treasury</h4>
          <ul className="space-y-3 text-gray-400 text-sm font-light">
            <li><a href="/collections" className="hover:text-antique-gold transition-colors">New Arrivals</a></li>
            <li><a href="/collections?category=Bridals" className="hover:text-antique-gold transition-colors">Bridals</a></li>
            <li><a href="/collections?category=Party Wares" className="hover:text-antique-gold transition-colors">Party Wares</a></li>
            {/* <li><a href="#" className="hover:text-antique-gold transition-colors">The Archive</a></li> */}
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest mb-6 text-antique-gold font-bold">Concierge</h4>
          <ul className="space-y-3 text-gray-400 text-sm font-light">
            <li><a href="#" className="hover:text-antique-gold transition-colors">Bespoke Inquiries</a></li>
            <li><a href="#" className="hover:text-antique-gold transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-antique-gold transition-colors">Size Guide</a></li>
            <li><a href="/contact" className="hover:text-antique-gold transition-colors">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest mb-6 text-antique-gold font-bold">The Journal</h4>
          <p className="text-gray-400 text-sm font-light mb-4">Subscribe for notes on antique sourcing, new collections, and exclusive previews.</p>
          <div className="flex border-b border-gray-600 pb-2 focus-within:border-antique-gold transition-colors">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent px-0 py-2 w-full text-sm focus:outline-none text-antique-white placeholder-gray-500"
            />
            <button className="uppercase text-xs tracking-widest ml-4 text-antique-gold hover:text-white transition-colors font-bold">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 text-xs text-gray-500 flex justify-between uppercase tracking-wider relative z-10 font-bold">
        <p>&copy; 2026 Minnaram Boutique. All rights reserved.</p>
        <div className="space-x-4">
          <a href="#" className="hover:text-antique-gold transition-colors">Terms</a>
          <a href="#" className="hover:text-antique-gold transition-colors">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
