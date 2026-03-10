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
    }, 500);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-24 px-6 md:px-12 bg-antique-white border-t border-antique-gold/20 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-antique-dark mb-4 drop-shadow-sm italic">Client Whispers</h2>
          <div className="w-24 h-px bg-antique-gold mx-auto mb-6 opacity-60"></div>
          <p className="text-antique-brown uppercase tracking-[0.3em] text-xs font-bold">What they say about Minnaram</p>
        </div>

        {/* Desktop View: Grid of Cards */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white border border-antique-gold/10 p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow relative group"
            >
              <Quote className="w-8 h-8 text-antique-gold/20 absolute top-6 right-6 group-hover:text-antique-gold/40 transition-colors" />
              
              <p className="text-antique-dark font-serif text-lg leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>
              
              <div className="mt-auto flex flex-col items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-antique-gold/30 shadow-sm sepia-[.2] mb-4"
                />
                <h4 className="text-antique-dark font-bold tracking-widest uppercase text-xs">
                  {testimonial.name}
                </h4>
                <p className="text-antique-brown text-[10px] font-light italic mt-1 uppercase tracking-wider">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet View: Carousel */}
        <div className="lg:hidden">
          <div className="max-w-xl mx-auto text-center">
            <Quote className="w-10 h-10 text-antique-gold mx-auto mb-8 opacity-40" />
            
            <div className={`transition-all duration-500 transform ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
              <h3 className="text-xl md:text-2xl font-serif text-antique-dark leading-relaxed mb-10 px-4 italic">
                "{activeTestimonial.content}"
              </h3>
              
              <div className="flex flex-col items-center">
                <img 
                  src={activeTestimonial.image} 
                  alt={activeTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-antique-gold/30 shadow-md sepia-[.2] mb-4"
                />
                <h4 className="text-antique-dark font-bold tracking-widest uppercase text-xs">
                  {activeTestimonial.name}
                </h4>
                <p className="text-antique-brown text-[10px] font-light italic mt-1 uppercase tracking-wider">
                  {activeTestimonial.role}
                </p>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-8 mt-12">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-antique-gold/20 flex items-center justify-center text-antique-dark hover:bg-antique-gold hover:text-white transition-colors group"
              >
                <ChevronLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => !isAnimating && setActiveIndex(idx)}
                    className={`transition-all duration-300 rounded-full ${
                      idx === activeIndex ? 'w-6 h-1.5 bg-antique-gold' : 'w-1.5 h-1.5 bg-antique-gold/20 hover:bg-antique-gold/40'
                    }`}
                  />
                ))}
              </div>

              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-antique-gold/20 flex items-center justify-center text-antique-dark hover:bg-antique-gold hover:text-white transition-colors group"
              >
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
