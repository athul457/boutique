import React, { createContext, useContext, useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [toastMessage, setToastMessage] = useState(null);

  // Auto-hide toast after 3 seconds
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);
  const addToCart = (product) => {
    if (!product) return;
    
    const cartItemId = `${product.id}-${product.selectedSize || 'default'}-${product.selectedColor || 'default'}`;
    
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.cartItemId === cartItemId);
      if (existingItem) {
        return prevItems.map(item =>
          item.cartItemId === cartItemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, cartItemId, quantity: 1 }];
    });
    
    // Trigger toast notification
    setToastMessage(`Added ${product.name} to your bag`);
  };

  const removeFromCart = (cartItemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(cartItemId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.cartItemId === cartItemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };


  const clearCart = () => setCartItems([]);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const addToWishlist = (product) => {
    if (!product) return;
    setWishlist(prev => {
      if (prev.find(item => item.id === product.id)) {
        setToastMessage(`${product.name} is already in your wishlist`);
        return prev;
      }
      setToastMessage(`Added ${product.name} to wishlist`);
      return [...prev, product];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist(prev => prev.filter(item => item.id !== id));
  };

  const wishlistCount = wishlist.length;

  return (
    <ShopContext.Provider value={{ 
      cartItems, cartCount, addToCart, removeFromCart, updateQuantity, clearCart,
      wishlist, wishlistCount, addToWishlist, removeFromWishlist
    }}>
      {children}
      
      {/* Global Toast Notification */}
      <div 
        className={`fixed bottom-32 md:bottom-8 left-1/2 transform -translate-x-1/2 z-[100] transition-all duration-500 pointer-events-none flex items-center gap-3 bg-antique-dark text-antique-white px-6 py-4 rounded-sm shadow-2xl border border-antique-gold/30 ${
          toastMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <ShoppingBag className="w-5 h-5 text-antique-gold" />
        <span className="text-sm font-bold tracking-wide">{toastMessage}</span>
      </div>
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);
