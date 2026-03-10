import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { collections } from '../data/collections';
import { useShop } from '../context/ShopContext';

const Collections = () => {
  const { addToCart } = useShop();
  const location = useLocation();

  // Parse query parameters
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || 'All';

  const [filter, setFilter] = useState(initialCategory);
  const [colorFilter, setColorFilter] = useState('All Colors');
  const [sizeFilter, setSizeFilter] = useState('All Sizes');
  const [sortBy, setSortBy] = useState('Featured');

  // Update filter if URL changes
  useEffect(() => {
    const currentCategory = new URLSearchParams(location.search).get('category') || 'All';
    setFilter(currentCategory);
  }, [location.search]);

  const categories = ['All', 'Party Wares', 'Bridals', 'Casuals'];
  const colors = ['All Colors', ...new Set(collections.map(item => item.color))];
  const sizes = ['All Sizes', ...new Set(collections.flatMap(item => item.sizes))];
  
  const handleCategoryClick = (category) => {
    if (category === 'Customization') {
      window.open('https://wa.me/917306793976', '_blank');
      return;
    }
    setFilter(category);
  };

  let filteredCollections = collections;

  if (filter !== 'All') filteredCollections = filteredCollections.filter(item => item.category === filter);
  if (colorFilter !== 'All Colors') filteredCollections = filteredCollections.filter(item => item.color === colorFilter);
  if (sizeFilter !== 'All Sizes') filteredCollections = filteredCollections.filter(item => item.sizes.includes(sizeFilter));

  filteredCollections = [...filteredCollections].sort((a, b) => {
    if (sortBy === 'Price: Low to High') return a.priceValue - b.priceValue;
    if (sortBy === 'Price: High to Low') return b.priceValue - a.priceValue;
    if (sortBy === 'Newest') return new Date(b.newest) - new Date(a.newest);
    if (sortBy === 'Popularity') return b.popularity - a.popularity;
    return 0; 
  });

  return (
    <div className="min-h-screen bg-antique-white text-antique-dark font-sans flex flex-col">
      {/* Background Header */}
      <div className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg" 
            alt="Collections Background" 
            className="w-full h-full object-cover object-center sepia-[.2]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <Navbar />
        
        <div className="relative z-10 text-center mt-20 px-6">
          <h1 className="text-4xl md:text-6xl font-serif text-antique-gold drop-shadow-md mb-4 tracking-wide">The Collections</h1>
          <p className="text-white font-light text-lg md:text-xl max-w-2xl mx-auto tracking-wide drop-shadow-md leading-relaxed">
            Explore our curated gallery of exquisite pieces, designed to embody the elegance of a golden era.
          </p>
        </div>
      </div>

      <main className="flex-grow py-20 px-6 max-w-7xl mx-auto w-full">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {[...categories, 'Customization'].map(category => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-6 py-2 uppercase tracking-widest text-xs font-bold transition-colors ${
                filter === category 
                  ? 'bg-antique-gold text-antique-dark shadow-md' 
                  : 'bg-transparent text-antique-brown hover:text-antique-gold border border-antique-gold/30 hover:border-antique-gold'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Sorting and Filters Toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 border-t border-b border-antique-gold/20 py-4">
          <div className="flex gap-4 w-full sm:w-auto">
            <select 
              className="bg-antique-white border border-antique-gold/30 text-antique-dark text-sm p-3 outline-none focus:border-antique-gold truncate w-1/2 sm:w-auto"
              value={colorFilter}
              onChange={(e) => setColorFilter(e.target.value)}
            >
              {colors.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            
            <select 
              className="bg-antique-white border border-antique-gold/30 text-antique-dark text-sm p-3 outline-none focus:border-antique-gold truncate w-1/2 sm:w-auto"
              value={sizeFilter}
              onChange={(e) => setSizeFilter(e.target.value)}
            >
              {sizes.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          
          <div className="w-full sm:w-auto">
            <select 
              className="bg-antique-white border border-antique-gold/30 text-antique-dark text-sm p-3 outline-none focus:border-antique-gold w-full sm:w-auto"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="Featured">Sort By: Featured</option>
              <option value="Price: Low to High">Sort By: Price (Low to High)</option>
              <option value="Price: High to Low">Sort By: Price (High to Low)</option>
              <option value="Newest">Sort By: Newest</option>
              <option value="Popularity">Sort By: Popularity</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCollections.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4 bg-antique-white border border-antique-gold/10 aspect-[3/4] shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 sepia-[.2]"
                />
                
                <div className="absolute top-4 left-4 bg-antique-white/90 px-3 py-1 text-[10px] uppercase tracking-widest text-antique-dark font-bold shadow-sm">
                  {item.category}
                </div>

                <div className="absolute inset-0 bg-antique-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button 
                    onClick={(e) => { e.stopPropagation(); addToCart(item); }}
                    className="w-full bg-antique-dark text-antique-white py-3 text-sm uppercase tracking-widest hover:bg-antique-gold hover:text-white transition-colors shadow-lg"
                  >
                    Quick Add
                  </button>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-base font-serif mb-1 group-hover:text-antique-gold transition-colors text-antique-dark truncate px-2">{item.name}</h3>
                <p className="text-antique-brown text-sm font-light italic">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Collections;
