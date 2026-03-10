import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import NewArrivals from '../components/NewArrivals';
import FeaturedCollection from '../components/FeaturedCollection';
import PromoCard from '../components/PromoCard';
import FestiveCollection from '../components/FestiveCollection';
import CategoryShowcase from '../components/CategoryShowcase';
import Testimonials from '../components/Testimonials';
import Philosophy from '../components/Philosophy';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-antique-white text-antique-dark font-sans">
      <Navbar />
      <Hero />
      <FeaturedCollection />
      <PromoCard />
      <NewArrivals />
      {/* <FestiveCollection /> */}
      <CategoryShowcase />
      <Testimonials />
      <Philosophy />
      <Footer />
    </div>
  );
};

export default Home;
