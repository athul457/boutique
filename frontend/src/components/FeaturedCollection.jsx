import React, { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import { useShop } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const FeaturedCollection = () => {
  const { addToCart } = useShop();
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const itemWidth = scrollRef.current.clientWidth;
      const newIndex = Math.round(scrollPosition / itemWidth);
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-serif mb-3 inline-block relative text-antique-dark">
            Golden Era
            <span className="absolute -bottom-2 left-0 w-2/3 h-0.5 bg-antique-gold"></span>
          </h2>
          <p className="text-antique-brown mt-4 font-light">Our most treasured antique-inspired pieces.</p>
        </div>
        <Link to="/collections" className="hidden md:flex text-sm uppercase tracking-widest border-b border-antique-brown pb-1 hover:text-antique-gold hover:border-antique-gold transition-colors items-center text-antique-brown">
          View Treasury <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>

      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 border-t border-antique-gold/20 pt-8 pb-4 snap-x snap-mandatory hide-scroll-bar -mx-6 px-6 sm:mx-0 sm:px-0"
      >
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer min-w-full sm:min-w-0 snap-center">
            <div className="relative overflow-hidden mb-4 bg-antique-white border border-antique-gold/10 aspect-[3/4] shadow-sm group-hover:shadow-md transition-shadow">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 sepia-[.2]"
              />
              <div className="absolute inset-0 bg-antique-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <button 
                  onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                  className="w-full bg-antique-dark text-antique-white py-3 text-sm uppercase tracking-widest hover:bg-antique-gold hover:text-white transition-colors shadow-lg"
                >
                  Quick Add
                </button>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-base font-serif mb-1 group-hover:text-antique-gold transition-colors text-antique-dark">{product.name}</h3>
              <p className="text-antique-brown text-sm font-light italic">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination dots (Mobile only) */}
      <div className="flex justify-center items-center space-x-2 mt-4 sm:hidden">
        {products.map((_, index) => (
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

export default FeaturedCollection;
