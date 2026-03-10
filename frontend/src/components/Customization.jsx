import React from 'react';
import { ArrowRight } from 'lucide-react';

const Customization = () => {
  return (
    <section id="customization" className="py-24 px-6 md:px-12 bg-white overflow-hidden relative border-y border-antique-gold/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Image Content */}
        <div className="w-full md:w-1/2 relative flex justify-center md:block">
          <div className="aspect-[3/4] md:aspect-[4/5] w-[65%] md:w-[70%] max-w-sm md:max-w-none md:mx-auto overflow-hidden rounded-sm shadow-2xl relative z-10 border border-antique-gold/20">
            <img 
              src="/customization.jpg" 
              alt="Tailoring & Customization" 
              className="w-full h-full object-cover sepia-[.15] hover:scale-105 transition-transform duration-1000"
            />
          </div>
          {/* Decorative Back Element */}
          <div className="absolute top-2 left-6 w-[65%] max-w-sm h-full border-2 border-antique-gold/10 -z-0 md:-top-6 md:left-[15%] md:w-[70%] md:max-w-none md:border-2"></div>
          <div className="absolute -bottom-10 -right-10 text-9xl font-serif text-antique-gold/5 select-none pointer-events-none">
            Bespoke
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <span className="uppercase tracking-[0.4em] text-antique-gold text-xs font-bold mb-6 block">Made to Measure</span>
          
          <h2 className="text-4xl md:text-6xl font-serif text-antique-dark mb-8 leading-tight">
            Your Vision, <br />
            <span className="italic text-antique-gold font-light">Customized</span> by Us
          </h2>
          
          <p className="text-antique-brown text-lg font-light leading-relaxed mb-10 max-w-lg">
            Experience the luxury of truly personal fashion. From intricate bridal embroideries to bespoke evening wear, our artisans bring your dream silhouettes to life with unparalleled precision and heritage craftsmanship.
          </p>

          <div className="space-y-8 w-full max-w-md">
            <div className="border-l-2 border-antique-gold pl-6 py-2">
              <h4 className="text-antique-dark font-serif text-xl">Private Appointments</h4>
              <p className="text-antique-brown text-sm font-light italic mt-1">Consult with our lead designers for a tailored experience.</p>
            </div>

            <a 
              href="https://wa.me/917306793976?text=Hi%20Minnaram,%20I'm%20interested%20in%20customizing%20an%20outfit."
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center overflow-hidden bg-antique-dark text-antique-white px-10 py-5 uppercase tracking-widest text-sm font-bold shadow-xl hover:shadow-antique-gold/20 transition-all duration-300 w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-antique-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
              <i className="fa-brands fa-whatsapp text-lg mr-3 relative z-10 group-hover:text-antique-dark transition-colors"></i>
              <span className="relative z-10 group-hover:text-antique-dark transition-colors">Inquire Now</span>
              <ArrowRight className="w-4 h-4 ml-3 relative z-10 group-hover:text-antique-dark transition-colors group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customization;
