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
        <div className="mb-4 w-[calc(100vw-4rem)] max-w-[260px] md:w-64 bg-white rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-[#075E54] p-2 text-white flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <img 
                  src="/heroImage.png" 
                  alt="Minnaram" 
                  className="w-6 h-6 rounded-full object-cover border border-white/20"
                />
                <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 border-2 border-[#075E54] rounded-full"></span>
              </div>
              <h3 className="font-bold text-[11px]">Minnaram</h3>
            </div>
            <button onClick={toggleChat} className="hover:bg-white/10 p-1 rounded-full transition-colors">
              <X size={14} />
            </button>
          </div>

          {/* Body */}
          <div className="h-36 bg-[#E5DDD5] p-2 overflow-y-auto relative">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')]"></div>
            
            <div className="relative z-10 flex flex-col space-y-2">
              <div className="bg-white p-2 rounded-lg rounded-tl-none shadow-sm max-w-[95%] self-start relative">
                <p className="text-[10px] text-gray-800 leading-tight">
                  Hi! How can we help?
                </p>
              </div>
            </div>
          </div>

          {/* Footer / CTA */}
          <div className="p-2 bg-white border-t border-gray-100 text-center">
            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-1.5 rounded-full font-bold text-[10px] flex items-center justify-center space-x-1 transition-all shadow-md active:scale-95"
            >
              <i className="fa-brands fa-whatsapp text-sm"></i>
              <span>Chat Now</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button 
        onClick={toggleChat}
        className={`${
          isOpen ? 'bg-gray-200 text-gray-600' : 'bg-[#25D366] text-white'
        } w-11 h-11 md:w-13 md:h-13 flex items-center justify-center rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 group relative`}
        aria-label="Contact us on WhatsApp"
      >
        {!isOpen && (
          <>
            <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </>
        )}
        {isOpen ? <X size={18} className="md:w-5 md:h-5" /> : <i className="fa-brands fa-whatsapp text-xl md:text-2xl"></i>}
      </button>
    </div>
  );
};

export default WhatsAppFloating;
