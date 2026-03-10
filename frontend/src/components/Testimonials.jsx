import React, { useState, useEffect } from 'react';
import { testimonials } from '../data/testimonials';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Matches transition duration
    return () => clearTimeout(timer);
  }, [activeIndex]);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-24 px-6 md:px-12 bg-antique-white border-t border-antique-gold/20 overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none flex justify-center items-center opacity-5">
        <Quote className="w-[40rem] h-[40rem] text-antique-gold transform -rotate-12" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center justify-center text-center">
        
        <div className="mb-10 flex flex-col items-center w-full">
          <Quote className="w-12 h-12 text-antique-gold mb-8 opacity-80" />
          
          <div className={`transition-all duration-500 transform ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'} w-full`}>
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif text-antique-dark leading-snug mb-10 px-4">
              "{activeTestimonial.content}"
            </h3>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
              <img 
                src={activeTestimonial.image} 
                alt={activeTestimonial.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-antique-gold/50 shadow-md sepia-[.2]"
              />
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h4 className="text-antique-dark font-bold tracking-widest uppercase text-sm md:text-base">
                  {activeTestimonial.name}
                </h4>
                <p className="text-antique-brown text-xs md:text-sm font-light italic mt-1">
                  {activeTestimonial.role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-8 mt-4">
          <button 
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full border border-antique-gold/30 flex items-center justify-center text-antique-dark hover:bg-antique-gold hover:text-white transition-colors group"
          >
            <ChevronLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
          </button>
          
          <div className="flex gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => !isAnimating && setActiveIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === activeIndex ? 'w-8 h-2 bg-antique-gold' : 'w-2 h-2 bg-antique-gold/30 hover:bg-antique-gold/60'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full border border-antique-gold/30 flex items-center justify-center text-antique-dark hover:bg-antique-gold hover:text-white transition-colors group"
          >
            <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
