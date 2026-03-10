import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

const WhatsAppFloating = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const whatsappNumber = "917306793976";
  const message = "Hi Minnaram, I'd like to inquire about your collections.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-[100] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[calc(100vw-2rem)] md:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-[#075E54] p-4 text-white flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img 
                  src="/heroImage.png" 
                  alt="Minnaram" 
                  className="w-10 h-10 rounded-full object-cover border border-white/20"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#075E54] rounded-full"></span>
              </div>
              <div>
                <h3 className="font-bold text-sm">Minnaram</h3>
                <p className="text-xs text-white/80">Typically replies within an hour</p>
              </div>
            </div>
            <button onClick={toggleChat} className="hover:bg-white/10 p-1 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="h-64 bg-[#E5DDD5] p-4 overflow-y-auto relative">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')]"></div>
            
            <div className="relative z-10 flex flex-col space-y-4">
              <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] self-start relative">
                <p className="text-sm text-gray-800 leading-relaxed">
                  Hi there! 👋<br/>
                  Welcome to <strong>Minnaram Boutique</strong>. How can we help you today?
                </p>
                <span className="text-[10px] text-gray-400 block text-right mt-1">
                  {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          </div>

          {/* Footer / CTA */}
          <div className="p-4 bg-white border-t border-gray-100">
            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-3 rounded-full font-bold flex items-center justify-center space-x-2 transition-all shadow-md active:scale-95"
            >
              <i className="fa-brands fa-whatsapp text-xl"></i>
              <span>Start Chat</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button 
        onClick={toggleChat}
        className={`${
          isOpen ? 'bg-gray-200 text-gray-600' : 'bg-[#25D366] text-white'
        } w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 group relative`}
        aria-label="Contact us on WhatsApp"
      >
        {!isOpen && (
          <>
            {/* Tooltip */}
            <span className="hidden md:block absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-antique-dark text-antique-white text-xs py-2 px-4 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-antique-gold/20">
              Start Conversation
              {/* Tooltip Arrow */}
              <span className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-antique-dark"></span>
            </span>
            
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
            </span>
          </>
        )}
        {isOpen ? <X size={24} className="md:w-7 md:h-7" /> : <i className="fa-brands fa-whatsapp text-2xl md:text-3xl"></i>}
      </button>
    </div>
  );
};

export default WhatsAppFloating;
