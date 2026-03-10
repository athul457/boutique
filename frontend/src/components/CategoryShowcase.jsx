import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CategoryShowcase = () => {
  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bridals */}
        <Link to="/collections?category=Bridals" className="group relative h-[500px] md:h-[600px] overflow-hidden rounded-xl shadow-lg border border-antique-gold/10">
          <img 
            src="https://images.pexels.com/photos/14683783/pexels-photo-14683783.jpeg?auto=format&fit=crop&q=80&w=1000" 
            alt="Bridals Collection" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 sepia-[.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-antique-dark/95 via-antique-dark/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-10 w-full text-center z-10">
            <h3 className="text-4xl md:text-5xl font-serif text-antique-gold mb-4 drop-shadow-md">Bridals</h3>
            <p className="text-antique-white/90 font-light mb-8 max-w-sm mx-auto tracking-wide">
              Exquisite gowns and accessories crafted for your unforgettable moments.
            </p>
            <span className="inline-flex items-center text-sm uppercase tracking-widest text-antique-white border-b border-antique-white pb-1 group-hover:text-antique-gold group-hover:border-antique-gold transition-colors">
              Discover Bridals <ArrowRight className="w-4 h-4 ml-2" />
            </span>
          </div>
        </Link>
        
        {/* Party Wares */}
        <Link to="/collections?category=Party Wares" className="group relative h-[500px] md:h-[600px] overflow-hidden rounded-xl shadow-lg border border-antique-gold/10 mt-8 md:mt-12">
          <img 
            src="https://images.pexels.com/photos/1193942/pexels-photo-1193942.jpeg?auto=format&fit=crop&q=80&w=1000" 
            alt="Party Wares Collection" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 sepia-[.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-antique-dark/95 via-antique-dark/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-10 w-full text-center z-10">
            <h3 className="text-4xl md:text-5xl font-serif text-antique-gold mb-4 drop-shadow-md">Party Wears</h3>
            <p className="text-antique-white/90 font-light mb-8 max-w-sm mx-auto tracking-wide">
              Make a bold statement with our curated evening and gala collections.
            </p>
            <span className="inline-flex items-center text-sm uppercase tracking-widest text-antique-white border-b border-antique-white pb-1 group-hover:text-antique-gold group-hover:border-antique-gold transition-colors">
              Shop Party Wears <ArrowRight className="w-4 h-4 ml-2" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CategoryShowcase;
