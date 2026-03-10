import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { collections } from '../data/collections';
import { useShop } from '../context/ShopContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { ChevronRight, Star, Truck, ShieldCheck, RotateCcw, Minus, Plus, Heart } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const { wishlist, addToCart, addToWishlist, removeFromWishlist } = useShop();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const isWishlisted = product ? wishlist.some(item => item.id === product.id) : false;

  const toggleWishlist = (e) => {
    e.preventDefault();
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const itemWidth = scrollRef.current.clientWidth;
      const newIndex = Math.round(scrollPosition / itemWidth);
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    const foundProduct = collections.find(item => item.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedSize(foundProduct.sizes[0]);
      setSelectedColor(foundProduct.color);
    }
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-antique-white">
        <div className="text-antique-dark font-serif text-2xl animate-pulse">Loading Treasury...</div>
      </div>
    );
  }

  const relatedProducts = collections
    .filter(item => item.category === product.category && item.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-antique-white text-antique-dark font-sans flex flex-col">
      {/* Top Header Section for Navbar Contrast */}
      <div className="relative h-64 bg-antique-dark">
        <div className="absolute inset-0 z-0 opacity-40 overflow-hidden">
          <img 
            src={product.image} 
            alt="" 
            className="w-full h-full object-cover blur-sm sepia-[.5]"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col">
          <Navbar />
          <div className="flex-grow flex items-center justify-center">
            <h2 className="text-antique-gold font-serif text-2xl uppercase tracking-[0.3em] opacity-80 mt-8">Product Detail</h2>
          </div>
        </div>
      </div>
      
      {/* Breadcrumbs */}
      <div className="py-6 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <nav className="flex items-center space-x-2 text-xs uppercase tracking-widest text-antique-brown">
          <Link to="/" className="hover:text-antique-gold transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/collections" className="hover:text-antique-gold transition-colors">Collections</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-antique-gold font-bold">{product.name}</span>
        </nav>
      </div>

      <main className="flex-grow px-6 md:px-12 max-w-7xl mx-auto w-full pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Image Gallery */}
          <div className="flex justify-center flex-col relative">
            <div className="aspect-[4/5] max-w-sm md:max-w-md w-full overflow-hidden bg-white border border-antique-gold/10 rounded-sm shadow-sm group mx-auto relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover sepia-[.1] group-hover:scale-105 transition-transform duration-1000"
              />
              
              {/* Wishlist Toggle Heart */}
              <button 
                onClick={toggleWishlist}
                className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:scale-110 transition-all duration-300 group/heart"
              >
                <Heart 
                  className={`w-6 h-6 transition-colors duration-300 ${
                    isWishlisted ? 'fill-red-500 text-red-500' : 'text-antique-brown group-hover/heart:text-red-400'
                  }`} 
                />
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-8 border-b border-antique-gold/20 pb-8">
              <h1 className="text-3xl md:text-5xl font-serif mb-4 leading-tight">{product.name}</h1>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-light text-antique-gold tracking-wider">{product.price}</span>
                <div className="h-4 w-px bg-antique-gold/30"></div>
                <div className="flex items-center gap-1 text-antique-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3 h-3 ${i < 4 ? 'fill-current' : 'opacity-30'}`} />
                  ))}
                  <span className="text-[10px] text-antique-brown ml-1 uppercase tracking-tighter">4.8 (24 Reviews)</span>
                </div>
              </div>
              <p className="text-antique-brown leading-relaxed font-light italic">
                {product.description}
              </p>
            </div>

            {/* Options */}
            <div className="space-y-8 mb-10">
              {/* Size Selection */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs uppercase tracking-[0.2em] font-bold">Select Size</span>
                  <button className="text-[10px] uppercase tracking-widest border-b border-antique-brown/40 pb-0.5 hover:text-antique-gold hover:border-antique-gold transition-colors">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 flex items-center justify-center border text-xs transition-all duration-300 ${
                        selectedSize === size 
                          ? 'bg-antique-gold border-antique-gold text-white shadow-md' 
                          : 'border-antique-gold/20 text-antique-brown hover:border-antique-gold'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <span className="text-xs uppercase tracking-[0.2em] font-bold block mb-4">Color: <span className="text-antique-gold italic font-normal">{selectedColor}</span></span>
                <div className="flex gap-3">
                  <button 
                    onClick={() => setSelectedColor(product.color)}
                    className={`w-8 h-8 rounded-full border-2 transition-all p-0.5 ${
                      selectedColor === product.color ? 'border-antique-gold' : 'border-transparent'
                    }`}
                  >
                    <div className="w-full h-full rounded-full bg-antique-gold shadow-inner"></div>
                  </button>
                </div>
              </div>

                {/* Quantity and Add to Cart */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center border border-antique-gold/30 rounded-sm overflow-hidden h-14 bg-white">
                    <button 
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      className="w-12 h-full flex items-center justify-center hover:bg-antique-gold/5 transition-colors text-antique-brown"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center text-sm font-bold border-x border-antique-gold/10">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(q => q + 1)}
                      className="w-12 h-full flex items-center justify-center hover:bg-antique-gold/5 transition-colors text-antique-brown"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="flex flex-col flex-grow gap-3">
                    <button 
                      onClick={() => addToCart({ ...product, selectedSize, selectedColor, quantity })}
                      className="w-full bg-antique-dark text-antique-white h-14 uppercase tracking-[0.3em] text-xs font-bold hover:bg-antique-gold hover:text-white transition-all duration-500 shadow-xl active:scale-[0.98]"
                    >
                      Induct into Wardrobe
                    </button>
                    <Link 
                      to="/cart"
                      className="w-full border border-antique-dark text-antique-dark h-12 flex items-center justify-center uppercase tracking-widest text-[10px] font-bold hover:bg-antique-dark hover:text-white transition-all duration-300"
                    >
                      View Shopping Bag
                    </Link>
                  </div>
                </div>
            </div>

            {/* Product Tabs */}
            <div className="mt-4">
              <div className="flex border-b border-antique-gold/10 mb-6 gap-8">
                {['description', 'details', 'shipping'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-2 text-[10px] uppercase tracking-widest font-bold transition-all relative ${
                      activeTab === tab ? 'text-antique-gold' : 'text-antique-brown/50 hover:text-antique-brown'
                    }`}
                  >
                    {tab}
                    {activeTab === tab && <div className="absolute bottom-[-1px] left-0 w-full h-px bg-antique-gold"></div>}
                  </button>
                ))}
              </div>
              
              <div className="text-sm font-light text-antique-brown leading-relaxed min-h-[100px]">
                {activeTab === 'description' && (
                  <p>{product.description} Crafted with heritage mindsets and modern comfort in focus.</p>
                )}
                {activeTab === 'details' && (
                  <ul className="list-disc pl-4 space-y-2">
                    {product.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}
                {activeTab === 'shipping' && (
                  <p>Complimentary premium shipping on all treasury orders above $500. Standard delivery within 5-7 business days. All items are shipped in our signature boutique packaging.</p>
                )}
              </div>
            </div>

            {/* Service Icons */}
            <div className="grid grid-cols-3 gap-4 mt-12 py-8 border-t border-antique-gold/10">
              <div className="flex flex-col items-center text-center gap-2">
                <Truck className="w-5 h-5 text-antique-gold opacity-70" />
                <span className="text-[9px] uppercase tracking-widest text-antique-brown">Global Delivery</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <RotateCcw className="w-5 h-5 text-antique-gold opacity-70" />
                <span className="text-[9px] uppercase tracking-widest text-antique-brown">Luxury Returns</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <ShieldCheck className="w-5 h-5 text-antique-gold opacity-70" />
                <span className="text-[9px] uppercase tracking-widest text-antique-brown">Authentic Design</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-32 pt-20 border-t border-antique-gold/20">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif text-antique-dark mb-4 italic">You might also treasure</h2>
              <div className="w-20 h-px bg-antique-gold mx-auto opacity-40"></div>
            </div>
            
            <div 
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 snap-x snap-mandatory hide-scroll-bar -mx-6 px-6 sm:mx-0 sm:px-0"
            >
              {relatedProducts.map((item) => (
                <div key={item.id} className="min-w-full sm:min-w-0 snap-center">
                  <ProductCard item={item} addToCart={addToCart} />
                </div>
              ))}
            </div>

            {/* Pagination dots (Mobile only) */}
            <div className="flex justify-center items-center space-x-2 mt-4 sm:hidden">
              {relatedProducts.map((_, index) => (
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

export default ProductDetails;
