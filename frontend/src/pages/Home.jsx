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
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-up');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-antique-white text-antique-dark font-sans selection:bg-antique-gold selection:text-antique-white">
      <Navbar />
      <Hero />
      
      <div className="reveal-up"><FeaturedCollection /></div>
      <div className="reveal-up"><PromoCard /></div>
      <div className="reveal-up"><NewArrivals /></div>
      <div className="reveal-up"><Customization /></div>
      <div className="reveal-up"><CategoryShowcase /></div>
      <div className="reveal-up"><Testimonials /></div>
      <div className="reveal-up"><Philosophy /></div>
      
      <Footer />
    </div>
  );
};

export default Home;
