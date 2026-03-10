import React from 'react';

const Philosophy = () => {
  return (
    <section className="bg-antique-white py-32 px-6 relative overflow-hidden text-antique-dark">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        
        {/* Left Side: Overlapping Image Collage */}
        <div className="w-full lg:w-1/2 relative min-h-[500px] flex justify-center items-center">
          {/* Decorative Background Element */}
          <div className="absolute top-10 -left-10 w-64 h-64 bg-antique-gold/10 rounded-full blur-3xl"></div>
          
          {/* Main Image */}
          <div className="relative z-20 w-3/4 max-w-[400px] shadow-2xl overflow-hidden group border border-antique-gold/30">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" 
              alt="Vintage Decor Setup" 
              className="w-full h-auto aspect-[4/5] object-cover sepia-[.3] group-hover:scale-105 transition-transform duration-1000"
            />
            {/* Inner Gold Border Ring */}
            <div className="absolute inset-4 border border-antique-gold/20 pointer-events-none"></div>
          </div>

          {/* Overlapping Secondary Image */}
          <div className="absolute -bottom-12 right-0 w-2/3 max-w-[300px] shadow-xl z-30 overflow-hidden group border-4 border-antique-white">
            <img 
              src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?auto=format&fit=crop&q=80&w=600" 
              alt="Antique Details" 
              className="w-full h-auto aspect-[4/3] object-cover sepia-[.4] group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
          
          {/* Accent Graphic */}
          <div className="absolute top-2 right-10 text-9xl font-serif text-antique-gold/20 select-none z-10 font-bold leading-none italic pointer-events-none">
            A
          </div>
        </div>

        {/* Right Side: Editorial Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-16 lg:mt-0">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-antique-gold"></span>
            <span className="uppercase tracking-widest text-antique-gold text-xs font-bold">The Heritage</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 text-antique-dark leading-tight drop-shadow-sm">
            Our <i className="text-antique-gold italic font-light">Philosophy</i>
          </h2>
          
          <div className="relative">
            {/* Large Decorative Quote */}
            <span className="absolute -top-12 -left-6 text-8xl text-antique-gold/10 font-serif leading-none select-none">"</span>
            
            <p className="text-antique-dark/80 font-light text-lg md:text-xl leading-relaxed mb-6 first-letter:text-6xl first-letter:font-serif first-letter:text-antique-gold first-letter:float-left first-letter:mr-3 first-letter:-mt-1">
              We find profound beauty in the whispers of history. At Aura Boutique, every piece curated is a deliberate nod to the unparalleled craftsmanship of the past, tailored impeccably for the discerning taste of the modern collector.
            </p>
            
            <p className="text-antique-dark/80 font-light text-lg md:text-xl leading-relaxed mb-10">
              Golden hues, rich tactile textures, and enduring quality are not just design choices—they are a testament to our belief that true elegance never fades. It simply waits to be worn again.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-8">
            <div className="border-l-2 border-antique-gold pl-6 text-left">
              <h4 className="font-serif text-xl text-antique-dark">Eleanor Vance</h4>
              <p className="text-antique-gold text-sm tracking-widest uppercase font-bold mt-1">Founder & Curator</p>
            </div>
            {/* Signature Graphic Mock */}
            <div className="opacity-70 text-antique-dark font-serif text-3xl italic">
              E. Vance
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Philosophy;
