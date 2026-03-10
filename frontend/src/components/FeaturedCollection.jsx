import React, { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { collections } from '../data/collections';
import { useShop } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const FeaturedCollection = () => {
  const { addToCart } = useShop();
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Get featured products (e.g., those with high popularity or specifically tagged)
  // For now, let's take items with IDs 1, 4, 8, 13 (as originally in products.js)
  const featuredIds = [1, 4, 8, 13];
  const featuredProducts = collections.filter(item => featuredIds.includes(item.id));

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
        {featuredProducts.map((item) => (
          <ProductCard key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>

      {/* Pagination dots (Mobile only) */}
      <div className="flex justify-center items-center space-x-2 mt-4 sm:hidden">
        {featuredProducts.map((_, index) => (
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
