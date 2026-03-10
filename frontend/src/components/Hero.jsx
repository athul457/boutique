import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&q=80&w=2000" 
          alt="Golden Architecture" 
          className="w-full h-full object-cover opacity-90 sepia-[.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-antique-white/80"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl pt-20">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-lg">
          Rediscover <br/> <span className="text-antique-gold italic font-light">Antique</span> Elegance
        </h1>
        <p className="text-gray-100 text-lg md:text-xl mb-10 font-light tracking-wide max-w-2xl mx-auto drop-shadow-md">
          Step into a world of timeless luxury. Curated collections infused with golden warmth and classic silhouettes.
        </p>
        <Link to="/collections" className="bg-antique-gold text-antique-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-antique-goldDark transition-colors duration-300 inline-flex items-center mx-auto space-x-2 shadow-lg">
          <span>Explore Collection</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
