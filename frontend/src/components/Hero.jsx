import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[100vh] min-h-[350px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/heroImage.png" 
          alt="Golden Architecture" 
          className="w-full h-full object-cover object-top object-center animate-ken-burns transition-transform duration-[20000ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60"></div>
      </div>
      
      <div className="relative z-10 px-4 max-w-4xl pt-20 text-center">
        <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-[1.1] drop-shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Rediscover <br/> 
          <span className="text-antique-gold font-light italic">Classical</span> Elegance
        </h1>
        <p className="text-antique-white/90 text-lg md:text-xl mb-12 font-light tracking-[0.2em] uppercase max-w-2xl mx-auto drop-shadow-md animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
          A Curation of Timeless Luxury & Golden Warmth
        </p>
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <Link to="/collections" className="group relative bg-antique-gold text-antique-white px-10 py-5 uppercase tracking-[0.3em] text-xs hover:bg-antique-goldDark transition-all duration-500 inline-flex items-center space-x-3 shadow-2xl overflow-hidden">
            <span className="relative z-10">Explore Collection</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
            <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
