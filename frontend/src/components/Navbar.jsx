import React from 'react';
import { Search, ShoppingBag, Heart, User, Menu } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { cartCount } = useShop();

  return (
    <nav className="absolute top-0 w-full z-10 px-6 md:px-12 py-6 flex justify-between items-center bg-transparent">
      {/* Left side: Logo & Navigation */}
      <div className="flex items-center">
        {/* Mobile menu icon */}
        <Menu className="md:hidden w-6 h-6 cursor-pointer hover:text-antique-gold transition-colors text-white mr-4" />
        
        {/* Logo */}
        <Link to="/" className="text-3xl font-serif tracking-widest uppercase cursor-pointer text-antique-gold font-bold mr-8">
          Aura
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-bold text-white">
          <Link to="/" className="hover:text-antique-gold transition-colors">Home</Link>
          <Link to="/collections" className="hover:text-antique-gold transition-colors">Collections</Link>
          <a href="/#new-arrivals" className="hover:text-antique-gold transition-colors">New Arrivals</a>
          <Link to="/contact" className="hover:text-antique-gold transition-colors">Contact</Link>
        </div>
      </div>

      {/* Right side: Actions */}
      <div className="flex items-center space-x-5 text-white">
        <div className="flex items-center space-x-2 border-b border-transparent hover:border-antique-gold transition-colors pb-1 cursor-text group">
          <Search className="w-4 h-4 text-gray-300 group-hover:text-antique-gold transition-colors" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent border-none outline-none w-20 md:w-32 text-sm text-white placeholder-gray-400 focus:w-40 transition-all duration-300"
          />
        </div>
        
        <User className="w-5 h-5 cursor-pointer hover:text-antique-gold transition-colors" />
        
        {/* <Heart className="w-5 h-5 cursor-pointer hover:text-antique-gold transition-colors" /> */}
        
        <Link to="/cart" className="relative cursor-pointer hover:text-antique-gold transition-colors">
          <ShoppingBag className="w-5 h-5" />
          <span className="absolute -top-2 -right-2 bg-antique-gold text-antique-dark text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
            {cartCount}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
