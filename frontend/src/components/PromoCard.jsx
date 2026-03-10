import React from 'react';
import { BadgePercent } from 'lucide-react';
import { Link } from 'react-router-dom';

const PromoCard = () => {
  return (
    <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto mb-12">
      <div className="bg-antique-dark rounded-2xl flex flex-col items-center justify-center py-20 px-4 md:px-8 text-center text-antique-white border border-antique-gold/20 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="text-antique-gold mb-6">
            <BadgePercent className="w-12 h-12" strokeWidth={1.5} />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif mb-6 drop-shadow-sm font-medium text-antique-gold">
            Exclusive Style, Crafted for You
          </h2>
          
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mb-12 font-light tracking-wide leading-relaxed">
            Be the first to explore new arrivals, curated collections, and<br className="hidden md:block" /> limited edition pieces.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
            <a 
              href="/#new-arrivals" 
              className="px-8 py-4 rounded border border-antique-gold text-antique-white uppercase tracking-widest text-xs font-bold hover:bg-antique-gold hover:text-antique-dark transition-colors shadow-sm w-full sm:w-auto inline-block text-center"
            >
              Explore New Arrivals
            </a>
            
            <Link 
              to="/collections" 
              className="px-10 py-4 rounded bg-antique-gold text-antique-dark uppercase tracking-widest text-xs font-bold hover:bg-antique-goldDark hover:text-white transition-colors shadow-lg w-full sm:w-auto inline-block text-center"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoCard;
