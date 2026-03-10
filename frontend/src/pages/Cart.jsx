import React from 'react';
import { useShop } from '../context/ShopContext';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useShop();

  const subtotal = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return total + price * item.quantity;
  }, 0);

  return (
    <div className="bg-antique-white min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="relative h-[60vh] min-h-[300px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/356170/pexels-photo-356170.jpeg?auto=format&fit=crop&q=80&w=2000" 
            alt="Shopping Bag Background" 
            className="w-full h-full object-cover object-top sepia-[.3]"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 drop-shadow-lg">
            Shopping <span className="text-antique-gold italic font-light">Bag</span>
          </h1>
          <p className="text-gray-200 uppercase tracking-[0.3em] text-sm">Review your selections</p>
        </div>
      </div>

      <main className="flex-grow py-16 px-6 md:px-12 max-w-7xl mx-auto w-full">

        {cartItems.length === 0 ? (
          <div className="text-center py-20 bg-white/50 rounded-2xl border border-antique-gold/10 shadow-sm">
            <ShoppingBag className="w-16 h-16 mx-auto mb-6 text-antique-gold opacity-50" />
            <h2 className="text-2xl font-serif text-antique-dark mb-4">Your bag is empty</h2>
            <p className="text-antique-brown mb-8 italic">It seems you haven't added any treasures yet.</p>
            <Link 
              to="/collections" 
              className="inline-flex items-center bg-antique-dark text-antique-white px-8 py-3 uppercase tracking-widest text-sm font-bold hover:bg-antique-gold transition-colors shadow-lg"
            >
              Start Shopping <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-8">
              {cartItems.map((item) => (
                <div key={item.cartItemId} className="flex gap-6 bg-white p-6 rounded-xl shadow-sm border border-antique-gold/5 group">
                  <div className="w-24 h-32 md:w-32 md:h-40 flex-shrink-0 overflow-hidden rounded-lg border border-antique-gold/10">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover sepia-[.1] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg md:text-xl font-serif text-antique-dark">{item.name}</h3>
                        <button 
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-antique-brown hover:text-red-500 transition-colors p-1"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                      
                      {/* Show Selected Attributes */}
                      <div className="flex flex-col gap-1 mb-3">
                        <p className="text-antique-brown text-sm">
                          <span className="font-bold">Size:</span> {item.selectedSize || 'Standard'}
                        </p>
                        {item.color && (
                          <div className="flex items-center gap-2">
                            <span className="text-antique-brown text-sm font-bold">Color:</span>
                            <span className="text-antique-brown text-sm">{item.selectedColor || item.color}</span>
                          </div>
                        )}
                      </div>

                      <p className="text-antique-gold font-bold mb-4">{item.price}</p>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="flex items-center border border-antique-gold/30 rounded-md">
                        <button 
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="p-2 hover:bg-antique-gold/10 transition-colors text-antique-dark"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-10 text-center font-bold text-antique-dark border-x border-antique-gold/20">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="p-2 hover:bg-antique-gold/10 transition-colors text-antique-dark"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-antique-dark p-8 rounded-2xl text-antique-white shadow-xl border border-antique-gold/20 sticky top-32">
                <h2 className="text-2xl font-serif text-antique-gold mb-8 italic">Order Summary</h2>
                
                <div className="space-y-4 mb-8 border-b border-antique-gold/20 pb-8">
                  <div className="flex justify-between text-antique-white/80">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-antique-white/80">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>

                <div className="flex justify-between text-xl font-serif mb-8 text-antique-gold">
                  <span>Estimated Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <Link 
                  to="/checkout"
                  className="block w-full bg-antique-gold text-antique-dark py-4 text-center rounded-md uppercase tracking-widest font-bold hover:bg-white transition-all shadow-lg text-sm"
                >
                  Proceed to Checkout
                </Link>
                
                <p className="mt-6 text-xs text-antique-white/50 text-center italic">
                  Taxes and shipping calculated in the next step.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
