import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Instagram, MessageCircle, Phone, MapPin, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-antique-white text-antique-dark font-sans flex flex-col">
      {/* Background Header */}
      <div className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/27103970/pexels-photo-27103970.jpeg" 
            alt="Contact Us Background" 
            className="w-full h-full object-cover sepia-[.2]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <Navbar />
        
        <div className="relative z-10 text-center mt-20 px-6">
          <h1 className="text-4xl md:text-6xl font-serif text-antique-gold drop-shadow-lg mb-6 tracking-wide">Contact Us</h1>
          <p className="text-white font-light text-lg md:text-xl tracking-wide max-w-2xl mx-auto drop-shadow-md leading-relaxed">
            We would love to hear from you. Inquire about bespoke pieces, special orders, or just say hello.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow py-20 px-6 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Column - Contact Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-serif text-antique-dark mb-4 italic">Get in touch</h2>
          <p className="text-antique-brown font-light leading-relaxed mb-10 max-w-md">
            We value the connection with our community and are here to assist in any way we can. Feel free to reach out through the following channels:
          </p>
          
          <div className="space-y-10">
            <div className="flex items-start gap-5">
              <MapPin className="w-6 h-6 text-antique-gold mt-1 flex-shrink-0" />
              <div className="flex flex-col">
                <h3 className="text-sm uppercase tracking-widest text-antique-gold font-bold mb-3">The Atelier</h3>
                <p className="text-antique-brown font-light leading-relaxed mb-4">
                  Minnaram Designer, Pattom,<br />
                  Kerala State Housing Board Building, First Floor,<br />
                  Near SUT Hospital, Thiruvananthapuram, 695004<br />
                  <span className="text-[11px] italic opacity-80">Parking available at Vrindavan Gardens</span>
                </p>
                
                {/* Social & Map Action Icons below address */}
                <div className="flex items-center gap-6 mt-2">
                  <a 
                    href="https://maps.app.goo.gl/MKobPZS5BczRycKk7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-antique-gold/10 text-antique-gold hover:bg-antique-gold hover:text-white transition-all duration-300"
                    title="Google Maps"
                  >
                    <MapPin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://instagram.com/minnaramboutique" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-antique-gold/10 text-antique-gold hover:bg-antique-gold hover:text-white transition-all duration-300"
                    title="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://wa.me/917306793976" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-antique-gold/10 text-antique-gold hover:bg-antique-gold hover:text-white transition-all duration-300"
                    title="WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-5 border-t border-antique-gold/10 pt-8">
              <Mail className="w-5 h-5 text-antique-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-sm uppercase tracking-widest text-antique-gold font-bold mb-2">Inquiries</h3>
                <p className="text-antique-brown font-light leading-relaxed">
                  concierge@minnaramboutique.com<br />
                  <a href="tel:+917306793976" className="hover:text-antique-gold transition-colors font-medium">+91 73067 93976</a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 border-t border-antique-gold/10 pt-8">
              <Clock className="w-5 h-5 text-antique-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-sm uppercase tracking-widest text-antique-gold font-bold mb-2">The Journal Hours</h3>
                <p className="text-antique-brown font-light leading-relaxed">
                  Monday - Friday: 10:00 AM - 7:00 PM<br />
                  Saturday: 11:00 AM - 6:00 PM<br />
                  <span className="italic">Sunday: Private Appointments Only</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="bg-white p-10 rounded-xl shadow-lg border border-antique-gold/10">
          <h3 className="text-2xl font-serif text-antique-dark mb-6">Send an Inquiry</h3>
          <form className="space-y-6">
            <div>
              <label className="block text-sm uppercase tracking-widest text-antique-gold font-bold mb-2">Name</label>
              <input 
                type="text" 
                className="w-full bg-antique-white border border-antique-gold/30 rounded p-3 focus:outline-none focus:border-antique-gold transition-colors text-antique-dark"
                placeholder="Your Full Name"
              />
            </div>
            <div>
              <label className="block text-sm uppercase tracking-widest text-antique-gold font-bold mb-2">Email</label>
              <input 
                type="email" 
                className="w-full bg-antique-white border border-antique-gold/30 rounded p-3 focus:outline-none focus:border-antique-gold transition-colors text-antique-dark"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm uppercase tracking-widest text-antique-gold font-bold mb-2">Message</label>
              <textarea 
                rows="5"
                className="w-full bg-antique-white border border-antique-gold/30 rounded p-3 focus:outline-none focus:border-antique-gold transition-colors text-antique-dark resize-none"
                placeholder="How can we assist you today?"
              ></textarea>
            </div>
            <button 
              type="button"
              className="w-full bg-antique-gold text-antique-dark py-4 rounded uppercase tracking-widest text-sm font-bold hover:bg-antique-goldDark hover:text-white transition-colors shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
