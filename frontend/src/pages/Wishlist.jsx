import React from 'react';
import { useShop } from '../context/ShopContext';
import { Heart, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart } = useShop();

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {wishlist.map((item) => (
              <div key={item.id} className="group bg-white border border-antique-gold/10 rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 sepia-[.2]" 
                  />
                  <button 
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-4 right-4 bg-white/90 p-2 text-red-500 hover:bg-red-500 hover:text-white transition-colors shadow-md rounded-full"
                    title="Remove from wishlist"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-serif text-antique-dark">{item.name}</h3>
                      <p className="text-antique-gold font-light tracking-wider italic">{item.price}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <Link 
                      to={`/product/${item.id}`}
                      className="flex-grow text-center text-[10px] uppercase tracking-widest font-bold border border-antique-gold/30 py-3 hover:bg-white transition-colors"
                    >
                      View Details
                    </Link>
                    <button 
                      onClick={() => addToCart({ ...item, selectedSize: item.sizes[0], selectedColor: item.color })}
                      className="flex-grow bg-antique-dark text-antique-white text-[10px] uppercase tracking-widest font-bold py-3 hover:bg-antique-gold transition-colors"
                    >
                      Add to Bag
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Wishlist;
