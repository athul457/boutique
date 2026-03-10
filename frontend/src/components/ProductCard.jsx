import React from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

const ProductCard = ({ item }) => {
  const { addToWishlist } = useShop();
  
  return (
    <div className="group cursor-pointer flex flex-col h-full rounded-[10px] overflow-hidden border border-antique-gold/10 hover:border-antique-gold/30 transition-all duration-500 min-w-full sm:min-w-0 snap-center">
      <Link to={`/product/${item.id}`} className="relative overflow-hidden bg-antique-white aspect-[3/4] shadow-sm flex-grow block">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 sepia-[.2]"
        />
        
        <div className="absolute top-4 left-4 bg-antique-white/90 px-3 py-1 text-[10px] uppercase tracking-widest text-antique-dark font-bold shadow-sm">
          {item.category}
        </div>

        <div className="absolute inset-0 bg-antique-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 bg-antique-dark/20 backdrop-blur-[2px]">
          <div className="flex flex-col gap-3 w-3/4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <div className="bg-white/95 backdrop-blur-sm px-4 py-3 border border-antique-gold/30 text-antique-dark text-[10px] uppercase tracking-[0.2em] font-bold shadow-xl text-center hover:bg-antique-gold hover:text-white transition-colors duration-300">
              View Details
            </div>
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addToWishlist(item);
              }}
              className="bg-antique-dark/95 text-antique-white px-4 py-3 border border-white/10 text-[10px] uppercase tracking-[0.2em] font-bold shadow-xl hover:bg-antique-gold transition-colors duration-300 active:scale-95"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </Link>
      
      <Link to={`/product/${item.id}`} className="p-4 text-center mt-auto block hover:bg-antique-gold/5 transition-colors">
        <h3 className="text-sm font-serif mb-1 group-hover:text-antique-gold transition-colors text-antique-dark truncate px-2">{item.name}</h3>
        <p className="text-antique-brown text-xs font-light italic">{item.price}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
