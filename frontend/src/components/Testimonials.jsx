import React from 'react';
import { testimonials } from '../data/testimonials';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-antique-white border-t border-antique-gold/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-antique-dark mb-4 drop-shadow-sm">
            Voices of Elegance
          </h2>
          <p className="text-antique-brown font-light italic max-w-2xl mx-auto text-lg opacity-90">
            Read what our cherished clients have to say about their Aura Boutique experience.
          </p>
          <div className="flex justify-center mt-6">
            <span className="h-px w-24 bg-antique-gold/50 block"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-antique-gold/10 relative mt-8 md:mt-0 flex flex-col"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-antique-white rounded-full p-2 border border-antique-gold/20 shadow-sm">
                <Quote className="w-6 h-6 text-antique-gold" fill="currentColor" />
              </div>
              
              <div className="flex-grow mt-6 mb-8 text-center">
                <p className="text-antique-dark font-serif italic text-lg leading-relaxed px-2">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-antique-gold/50 sepia-[.2]" 
                />
                <div className="text-left">
                  <h4 className="text-antique-dark font-bold text-sm tracking-wide">{testimonial.name}</h4>
                  <p className="text-antique-brown text-xs uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
