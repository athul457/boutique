import React, { useState } from 'react';
import { Search, ShoppingBag, Heart, User, Menu, X } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { cartCount } = useShop();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="absolute top-0 w-full z-20 px-4 md:px-12 py-6 flex justify-between items-center bg-transparent">
        {/* Left side: Logo & Navigation */}
        <div className="flex items-center">
          {/* Mobile menu icon */}
          <button onClick={toggleMobileMenu} className="md:hidden cursor-pointer hover:text-antique-gold transition-colors text-white mr-3">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          {/* Logo */}
          <Link to="/" className="text-lg font-serif tracking-widest uppercase cursor-pointer text-antique-gold font-bold mr-4 md:mr-8 leading-tight">
            Minnaram <br className="hidden sm:block" />Boutique
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-bold text-white">
            <Link to="/" className="hover:text-antique-gold transition-colors">Home</Link>
            <Link to="/collections" className="hover:text-antique-gold transition-colors">Collections</Link>
            <a href="/#new-arrivals" className="hover:text-antique-gold transition-colors">New Arrivals</a>
            <a href="/#customization" className="hover:text-antique-gold transition-colors">Customization</a>
            <Link to="/contact" className="hover:text-antique-gold transition-colors">Contact</Link>
          </div>
        </div>

        {/* Right side: Actions */}
        <div className="flex items-center space-x-3 md:space-x-5 text-white">
          <div className="hidden sm:flex items-center space-x-2 border-b border-transparent hover:border-antique-gold transition-colors pb-1 cursor-text group">
            <Search className="w-4 h-4 text-gray-300 group-hover:text-antique-gold transition-colors" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent border-none outline-none w-20 md:w-32 text-sm text-white placeholder-gray-400 focus:w-40 transition-all duration-300"
            />
          </div>
          
          <Search className="sm:hidden w-5 h-5 cursor-pointer hover:text-antique-gold transition-colors" />
          <User className="hidden sm:block w-5 h-5 cursor-pointer hover:text-antique-gold transition-colors" />
          
          <Link to="/cart" className="relative cursor-pointer hover:text-antique-gold transition-colors pl-2">
            <ShoppingBag className="w-6 h-6 sm:w-5 sm:h-5" />
            <span className="absolute -top-1 -right-2 sm:-top-2 sm:-right-2 bg-antique-gold text-antique-dark text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Dropdown & Backdrop */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 z-10 backdrop-blur-md bg-black/30 md:hidden animate-in fade-in duration-300 pointer-events-auto"
            onClick={toggleMobileMenu}
          ></div>
          <div className="absolute top-20 left-0 w-full bg-antique-dark z-20 border-b border-antique-gold/20 shadow-xl md:hidden animate-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col px-6 py-4 space-y-4 text-sm uppercase tracking-widest font-bold text-white">
            <Link to="/" onClick={toggleMobileMenu} className="hover:text-antique-gold transition-colors py-2 border-b border-white/10">Home</Link>
            <Link to="/collections" onClick={toggleMobileMenu} className="hover:text-antique-gold transition-colors py-2 border-b border-white/10">Collections</Link>
            <a href="/#new-arrivals" onClick={toggleMobileMenu} className="hover:text-antique-gold transition-colors py-2 border-b border-white/10">New Arrivals</a>
            <a href="/#customization" onClick={toggleMobileMenu} className="hover:text-antique-gold transition-colors py-2 border-b border-white/10">Customization</a>
            <Link to="/contact" onClick={toggleMobileMenu} className="hover:text-antique-gold transition-colors py-2 border-b border-white/10">Contact</Link>
            <div className="flex items-center space-x-4 py-2 pt-4">
              <User className="w-5 h-5 cursor-pointer hover:text-antique-gold transition-colors" />
              <span className="text-gray-300">Account</span>
            </div>
          </div>
        </div>
        </>
      )}
    </>
  );
};

export default Navbar;
