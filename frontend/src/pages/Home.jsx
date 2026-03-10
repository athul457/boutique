import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import NewArrivals from '../components/NewArrivals';
import FeaturedCollection from '../components/FeaturedCollection';
import PromoCard from '../components/PromoCard';
import FestiveCollection from '../components/FestiveCollection';
import CategoryShowcase from '../components/CategoryShowcase';
import Testimonials from '../components/Testimonials';
import Philosophy from '../components/Philosophy';
import Customization from '../components/Customization';
import Footer from '../components/Footer';

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Find the element via the hash, minus the '#' character
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        // Small timeout to ensure the page has drawn components
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0); // Scroll to top if no hash
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-antique-white text-antique-dark font-sans">
      <Navbar />
      <Hero />
      <FeaturedCollection />
      <PromoCard />
      <NewArrivals />
      <Customization />
      {/* <FestiveCollection /> */}
      <CategoryShowcase />
      <Testimonials />
      <Philosophy />
      <Footer />
    </div>
  );
};

export default Home;
