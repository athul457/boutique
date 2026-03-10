import React, { useRef, useState } from 'react';
import { useShop } from '../context/ShopContext';
import { collections } from '../data/collections';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

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
          <h2 className="text-4xl md:text-5xl font-serif text-antique-dark mb-4 drop-shadow-sm inline-block relative">
            New Arrivals
            <span className="absolute -bottom-2 left-0 w-2/3 h-0.5 bg-antique-gold"></span>
          </h2>
          <p className="text-antique-brown font-serif italic text-lg opacity-90 max-w-2xl mt-6">
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
        className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 border-t border-antique-gold/20 pt-8 pb-4 snap-x snap-mandatory hide-scroll-bar -mx-6 px-6 sm:mx-0 sm:px-0"
      >
        {newArrivalsData.map((item) => (
          <ProductCard key={item.id} item={item} addToCart={addToCart} />
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
