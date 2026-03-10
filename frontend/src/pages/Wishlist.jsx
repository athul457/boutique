import React, { useRef, useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Heart, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart } = useShop();
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
    <div className="bg-antique-white min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg" 
            alt="Wishlist Background" 
            className="w-full h-full object-cover sepia-[.3]"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 drop-shadow-lg">
            My <span className="text-antique-gold italic font-light">Treasures</span>
          </h1>
          <p className="text-gray-200 uppercase tracking-[0.3em] text-sm font-bold">Your Saved Collection</p>
        </div>
      </div>

      <main className="flex-grow py-16 px-6 md:px-12 max-w-7xl mx-auto w-full">
        {wishlist.length === 0 ? (
          <div className="text-center py-20 bg-white/50 rounded-sm border border-antique-gold/10 shadow-sm">
            <Heart className="w-16 h-16 mx-auto mb-6 text-antique-gold opacity-50" />
            <h2 className="text-2xl font-serif text-antique-dark mb-4 text-antique-gold">Your wishlist is empty</h2>
            <p className="text-antique-brown mb-8 italic">You haven't saved any treasures to your wishlist yet.</p>
            <Link 
              to="/collections" 
              className="inline-flex items-center bg-antique-dark text-antique-white px-8 py-3 uppercase tracking-widest text-sm font-bold hover:bg-antique-gold transition-colors shadow-lg"
            >
              Discover Collections <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        ) : (
          <div className="flex flex-col">
            <div 
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-4 gap-6 snap-x snap-mandatory hide-scroll-bar -mx-6 px-6 md:mx-0 md:px-0"
            >
              {wishlist.map((item) => (
                <div key={item.id} className="min-w-full md:min-w-0 snap-center">
                  <div className="group bg-white border border-antique-gold/10 rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col h-full">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 sepia-[.2]" 
                      />
                      <button 
                        onClick={() => removeFromWishlist(item.id)}
                        className="absolute top-3 right-3 bg-white/90 p-1.5 text-red-500 hover:bg-red-500 hover:text-white transition-colors shadow-md rounded-full z-10"
                        title="Remove from wishlist"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <div className="mb-3">
                        <h3 className="text-sm font-serif text-antique-dark line-clamp-1">{item.name}</h3>
                        <p className="text-antique-gold text-xs font-light tracking-wider italic">{item.price}</p>
                      </div>
                      <div className="mt-auto flex flex-col gap-2">
                        <Link 
                          to={`/product/${item.id}`}
                          className="w-full text-center text-[9px] uppercase tracking-widest font-bold border border-antique-gold/30 py-2 hover:bg-antique-gold/5 transition-colors"
                        >
                          View Details
                        </Link>
                        <button 
                          onClick={() => addToCart({ ...item, selectedSize: item.sizes[0], selectedColor: item.color })}
                          className="w-full bg-antique-dark text-antique-white text-[9px] uppercase tracking-widest font-bold py-2 hover:bg-antique-gold transition-colors"
                        >
                          Add to Bag
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination dots (Mobile only) */}
            <div className="flex justify-center items-center space-x-2 mt-4 md:hidden">
              {wishlist.map((_, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-300 rounded-full ${
                    index === activeIndex ? 'w-6 h-1.5 bg-antique-gold' : 'w-1.5 h-1.5 bg-antique-gold/30'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Wishlist;
