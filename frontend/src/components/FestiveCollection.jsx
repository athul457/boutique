import React from 'react';
import { ArrowRight } from 'lucide-react';

const FestiveCollection = () => {
  return (
    <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto mb-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif text-antique-dark mb-4 drop-shadow-sm">Festive Glow Collection</h2>
        <p className="text-antique-brown font-serif italic text-lg opacity-90">
          Bright, bold and beautiful styles made for celebrations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-[600px]">
        {/* Left Large Column - New Arrivals */}
        <div className="relative rounded-2xl overflow-hidden group h-[400px] md:h-full border border-antique-gold/10 shadow-lg">
          <img 
            src="https://images.pexels.com/photos/2802786/pexels-photo-2802786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="New Arrivals" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 sepia-[.1]"
          />
          {/* Content gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-antique-white/95 via-antique-white/30 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 p-8 w-full md:w-3/4 z-10">
            <h3 className="text-4xl font-serif text-antique-dark mb-4 lowercase tracking-wide drop-shadow-sm">new arrivals</h3>
            <p className="text-antique-brown text-sm md:text-base font-medium mb-6 leading-relaxed max-w-xs drop-shadow-sm border-l-2 border-antique-gold pl-3">
              Explore our curated selection of outerwear and knits for the colder months.
            </p>
            <a href="#" className="inline-flex items-center text-antique-dark font-bold text-sm tracking-widest uppercase hover:text-antique-gold transition-colors">
              View more <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>

        {/* Right Column - Split into top (2 images) and bottom (banner) */}
        <div className="flex flex-col gap-6 h-[600px] md:h-full">
          
          {/* Top Row - 2 Images */}
          <div className="grid grid-cols-2 gap-6 h-1/2">
            <div className="rounded-2xl overflow-hidden group border border-antique-gold/10 shadow-md">
               <img 
                src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800" 
                alt="Yellow Dress" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 sepia-[.2]"
              />
            </div>
            <div className="rounded-2xl overflow-hidden group border border-antique-gold/10 shadow-md">
               <img 
                src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800" 
                alt="White Dress" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 sepia-[.2]"
              />
            </div>
          </div>

          {/* Bottom Row - Promo Banner */}
          <div className="bg-antique-dark rounded-2xl h-1/2 flex flex-col items-center justify-center p-8 text-center text-antique-white relative overflow-hidden shadow-xl border border-antique-gold/20">
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/floral-motif.png')]"></div>
             
             <div className="relative z-10">
              <h3 className="text-4xl font-serif mb-4 shadow-sm text-antique-gold">Exclusive offer</h3>
              <p className="text-gray-300 font-light text-lg mb-8 tracking-wide">
                Past season favorites at significant reductions
              </p>
              <button className="bg-antique-gold text-antique-dark px-10 py-3 rounded-md uppercase tracking-widest text-xs font-bold hover:bg-antique-goldDark hover:text-white transition-colors shadow-lg">
                Explore Sale
              </button>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FestiveCollection;
