import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { CheckCircle, CreditCard, Home, Mail, User, Phone, MapPin, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Checkout = () => {
  const { cartItems, clearCart } = useShop();
  const navigate = useNavigate();
  const [isOrdered, setIsOrdered] = useState(false);

  const subtotal = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return total + price * item.quantity;
  }, 0);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setIsOrdered(true);
    clearCart();
    setTimeout(() => {
      navigate('/');
    }, 5000);
  };

  if (isOrdered) {
    return (
      <div className="bg-antique-white min-h-screen flex flex-col justify-center items-center px-6">
        <CheckCircle className="w-24 h-24 text-antique-gold mb-8 animate-bounce" />
        <h1 className="text-4xl md:text-5xl font-serif text-antique-dark mb-4 text-center">Order Placed Successfully!</h1>
        <p className="text-antique-brown text-xl mb-12 italic text-center">Thank you for choosing Minnaram Boutique. Your treasures will arrive soon.</p>
        <Link 
          to="/" 
          className="bg-antique-dark text-antique-white px-10 py-4 uppercase tracking-widest text-sm font-bold hover:bg-antique-gold transition-colors shadow-xl"
        >
          Return Home
        </Link>
        <p className="mt-8 text-antique-brown/50 text-sm">Redirecting to home in a few seconds...</p>
      </div>
    );
  }

  return (
    <div className="bg-antique-white min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/5632346/pexels-photo-5632346.jpeg?auto=format&fit=crop&q=80&w=2000" 
            alt="Checkout Background" 
            className="w-full h-full object-cover object-center sepia-[.2]"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 drop-shadow-lg">
            Secure <span className="text-antique-gold italic font-light">Checkout</span>
          </h1>
          <p className="text-gray-200 uppercase tracking-[0.3em] text-sm">Complete your purchase</p>
        </div>
      </div>

      <main className="flex-grow py-16 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="mb-8">
          <Link to="/cart" className="inline-flex items-center text-antique-brown hover:text-antique-gold transition-colors font-serif italic text-lg">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Shopping Bag
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Checkout Form */}
          <form onSubmit={handlePlaceOrder} className="space-y-10">
            <div>
              <h2 className="text-2xl font-serif text-antique-dark mb-6 flex items-center italic">
                <User className="w-5 h-5 mr-3 text-antique-gold" /> Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  required 
                  type="text" 
                  placeholder="First Name" 
                  className="bg-white border border-antique-gold/20 p-4 rounded-md focus:outline-none focus:border-antique-gold transition-colors text-antique-dark placeholder:text-antique-brown/30"
                />
                <input 
                  required 
                  type="text" 
                  placeholder="Last Name" 
                  className="bg-white border border-antique-gold/20 p-4 rounded-md focus:outline-none focus:border-antique-gold transition-colors text-antique-dark placeholder:text-antique-brown/30"
                />
              </div>
              <div className="mt-6">
                <input 
                  required 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-white border border-antique-gold/20 p-4 rounded-md focus:outline-none focus:border-antique-gold transition-colors text-antique-dark placeholder:text-antique-brown/30"
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-antique-dark mb-6 flex items-center italic">
                <MapPin className="w-5 h-5 mr-3 text-antique-gold" /> Shipping Address
              </h2>
              <div className="space-y-6">
                <input 
                  required 
                  type="text" 
                  placeholder="Address Line 1" 
                  className="w-full bg-white border border-antique-gold/20 p-4 rounded-md focus:outline-none focus:border-antique-gold transition-colors text-antique-dark placeholder:text-antique-brown/30"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <input 
                    required 
                    type="text" 
                    placeholder="City" 
                    className="bg-white border border-antique-gold/20 p-4 rounded-md focus:outline-none focus:border-antique-gold transition-colors text-antique-dark placeholder:text-antique-brown/30"
                  />
                  <input 
                    required 
                    type="text" 
                    placeholder="Zip Code" 
                    className="bg-white border border-antique-gold/20 p-4 rounded-md focus:outline-none focus:border-antique-gold transition-colors text-antique-dark placeholder:text-antique-brown/30"
                  />
                  <input 
                    required 
                    type="text" 
                    placeholder="Country" 
                    className="bg-white border border-antique-gold/20 p-4 rounded-md focus:outline-none focus:border-antique-gold transition-colors text-antique-dark placeholder:text-antique-brown/30"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-antique-dark mb-6 flex items-center italic">
                <CreditCard className="w-5 h-5 mr-3 text-antique-gold" /> Payment
              </h2>
              <div className="bg-antique-dark text-antique-white/80 p-6 rounded-xl border border-antique-gold/20">
                <p className="italic text-sm">Payment processing is in demonstration mode. Direct bank transfer will be simulated on order placement.</p>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-antique-dark text-antique-white py-5 text-lg uppercase tracking-widest font-bold hover:bg-antique-gold transition-all shadow-xl hover:-translate-y-1 duration-300"
            >
              Place Order - ${subtotal.toFixed(2)}
            </button>
          </form>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-antique-gold/10 sticky top-32">
              <h2 className="text-2xl font-serif text-antique-dark mb-8 border-b border-antique-gold/10 pb-4">In Your Bag</h2>
              
              <div className="max-h-[400px] overflow-y-auto pr-2 space-y-6 mb-8 custom-scrollbar">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center bg-antique-white/30 p-3 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-16 h-20 overflow-hidden rounded-md border border-antique-gold/10 mr-4">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="text-sm font-serif text-antique-dark">{item.name}</h3>
                        <p className="text-xs text-antique-brown">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="text-antique-gold font-bold text-sm">{item.price}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-4 border-t border-antique-gold/20">
                <div className="flex justify-between text-antique-brown">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-antique-brown">
                  <span>Shipping</span>
                  <span className="text-green-600 font-bold uppercase text-xs tracking-widest">Free</span>
                </div>
                <div className="pt-4 flex justify-between text-2xl font-serif text-antique-dark">
                  <span>Total</span>
                  <span className="text-antique-dark">${subtotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
