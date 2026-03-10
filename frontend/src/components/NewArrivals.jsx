import React, { useRef, useState } from 'react';
import { useShop } from '../context/ShopContext';
import { collections } from '../data/collections';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewArrivals = () => {
  const { addToCart } = useShop();
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Get the 4 newest items
  const newArrivalsData = [...collections]
    .sort((a, b) => new Date(b.newest) - new Date(a.newest))
    .slice(0, 4);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const itemWidth = scrollRef.current.clientWidth;
      const newIndex = Math.round(scrollPosition / itemWidth);
      setActiveIndex(newIndex);
    }
  };

  return (
    <section id="new-arrivals" className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-antique-gold/20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-antique-dark mb-4 drop-shadow-sm">New Arrivals</h2>
          <p className="text-antique-brown font-serif italic text-lg opacity-90 max-w-2xl">
            Discover our latest additions, curated with impeccable taste for the modern connoisseur.
          </p>
        </div>
        <Link 
          to="/collections" 
          className="inline-flex items-center text-antique-dark font-bold text-sm tracking-widest uppercase hover:text-antique-gold transition-colors mt-6 md:mt-0"
        >
          View All <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>

      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 snap-x snap-mandatory hide-scroll-bar -mx-6 px-6 sm:mx-0 sm:px-0"
      >
        {newArrivalsData.map((item) => (
          <div key={item.id} className="group cursor-pointer min-w-full sm:min-w-0 snap-center">
            <div className="relative overflow-hidden mb-4 bg-antique-white border border-antique-gold/10 aspect-[3/4] shadow-sm hover:shadow-md transition-shadow">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 sepia-[.2]"
              />
              
              <div className="absolute top-4 left-4 bg-antique-dark text-antique-white px-3 py-1 text-[10px] uppercase tracking-widest font-bold shadow-sm">
                New
              </div>

              <div className="absolute inset-0 bg-antique-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <button 
                  onClick={(e) => { e.stopPropagation(); addToCart(item); }}
                  className="w-full bg-antique-gold text-antique-dark py-3 text-sm uppercase tracking-widest font-bold hover:bg-antique-goldDark hover:text-white transition-colors shadow-lg"
                >
                  Quick Add
                </button>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-base font-serif mb-1 group-hover:text-antique-gold transition-colors text-antique-dark truncate px-2">{item.name}</h3>
              <p className="text-antique-brown text-sm font-light italic">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination dots (Mobile only) */}
      <div className="flex justify-center items-center space-x-2 mt-4 sm:hidden">
        {newArrivalsData.map((_, index) => (
          <div 
            key={index}
            className={`transition-all duration-300 rounded-full ${
              index === activeIndex ? 'w-6 h-1.5 bg-antique-gold' : 'w-1.5 h-1.5 bg-antique-gold/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
