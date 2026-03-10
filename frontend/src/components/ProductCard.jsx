import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ item, addToCart }) => {
  const [selectedSize, setSelectedSize] = useState(item.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(item.color);

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
        
        {/* Selection & Add to Cart Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-[120%] group-hover:translate-y-0 transition-transform duration-300 bg-white/95 backdrop-blur-sm border-t border-antique-gold/20 flex flex-col gap-3 z-10">
          <div className="flex gap-2 w-full">
            <select 
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              className="w-1/2 bg-antique-white border border-antique-gold/30 text-antique-dark text-[10px] p-2 outline-none focus:border-antique-gold rounded-sm appearance-none cursor-pointer"
              title="Select Size"
            >
              {item.sizes.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            
            <select 
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              className="w-1/2 bg-antique-white border border-antique-gold/30 text-antique-dark text-[10px] p-2 outline-none focus:border-antique-gold rounded-sm appearance-none cursor-pointer truncate"
              title="Select Color"
            >
              <option value={item.color}>{item.color}</option>
            </select>
          </div>

          <button 
            onClick={(e) => { 
              e.preventDefault();
              e.stopPropagation(); 
              addToCart({ ...item, selectedSize, selectedColor }); 
            }}
            className="w-full bg-antique-dark text-antique-white py-3 text-[10px] uppercase tracking-widest font-bold hover:bg-antique-gold hover:text-white transition-colors shadow-lg active:scale-95"
          >
            Quick Add
          </button>
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
