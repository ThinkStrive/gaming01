import React, { useEffect } from 'react';
import { MessageCircle, Mail, Code, Rocket, Clock, Package } from 'lucide-react';

const PromoModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const modal = document.getElementById('business_modal');
    if (isOpen) {
      modal.showModal();
    } else {
      modal.close();
    }
  }, [isOpen]);

  const handleClose = () => {
    localStorage.setItem('promoModalShown', 'true');
    onClose();
  };

  return (
    <dialog 
      id="business_modal" 
      className="modal modal-bottom sm:modal-middle"
      style={{ zIndex: 9999 }}
    >
      <div 
        className="modal-box h-[90vh] sm:h-auto max-h-[90vh] max-w-[95vw] w-full lg:max-w-[85vw] xl:max-w-[1200px] p-0 overflow-y-auto bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fixed Header Banner */}
        <div className="sticky top-0 z-30 relative bg-black p-4 sm:p-6 text-white">
      <button 
        className="btn btn-sm btn-circle btn-ghost bg-slate-300 absolute right-1 top-1 z-40 text-black font-bold hover:bg-white/20" 
        onClick={handleClose}
      >
        ✕
      </button>
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M45.7,-58.9C59.9,-48.8,72.4,-34.6,77.1,-17.5C81.9,-0.4,78.9,19.5,69.5,34.8C60.1,50.1,44.3,60.8,27.3,65.6C10.3,70.4,-7.9,69.3,-25.7,64.1C-43.5,58.9,-60.9,49.7,-69.5,34.8C-78.1,19.9,-77.9,-0.7,-71.2,-18.5C-64.5,-36.3,-51.2,-51.3,-36.4,-61.1C-21.6,-70.9,-5.2,-75.5,9.6,-72.8C24.5,-70.1,31.5,-69,45.7,-58.9Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="text-center space-y-2">
        <h2 className="relative z-10">
          <span className="
            text-xl 
            sm:text-2xl 
            md:text-3xl 
            lg:text-4xl 
            font-extrabold
            block 
            mb-2 
            uppercase 
            bg-gradient-to-r 
            from-purple-300 
            to-purple-800 
            bg-clip-text 
            text-transparent 
            hover:scale-110 
            transition-all 
            duration-300 
            transform 
            hover:cursor-pointer
            animate-fade-in-down
          ">
            Web and Mobile Applications
          </span>
        </h2>

        <h2 className="text-md sm:text-md md:text-md lg:text-lg font-bold mb-2 relative z-10">
          We are a team dedicated to building innovative solutions tailored to elevate your business.
        </h2>

        <p className="text-base sm:text-lg md:text-xl relative z-10">
          💡 Transform your vision with cutting-edge{' '}
          <span className="font-semibold bg-purple-900 px-2 py-1 rounded">
            web & mobile solutions
          </span>
        </p>

        {/* Contact Links Section */}
        <div className="flex justify-center items-center space-x-4 mt-6 relative z-10">
          <a 
            href="https://t.me/rouletterisee" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-ghost btn-sm normal-case gap-2 hover:bg-purple-900/20"
          >
            <svg 
              className="w-5 h-5 fill-current " 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.37-.49 1.03-.74 4.03-1.75 6.72-2.91 8.07-3.48 3.85-1.63 4.64-1.91 5.17-1.92.11 0 .37.03.54.18.17.15.21.36.23.5-.01.06.01.24-.01.38z"/>
            </svg>
            Telegram
          </a>

          <a 
            href="mailto:rouletterise@gmail.com" 
            className="btn btn-ghost btn-sm normal-case gap-2 hover:bg-purple-900/20"
          >
            <svg 
              className="w-5 h-5 fill-current" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            Email Us
          </a>
        </div>
      </div>
    </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-4 sm:p-6 md:p-8 ">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 mb-6">
            {/* Feature Cards */}
            {[
              {
                icon: <Rocket className="w-6 h-6 text-primary" />,
                title: "Perfect Solution ✨",
                description: "Custom-crafted solutions aligned perfectly with your business needs and goals."
              },
              {
                icon: <Code className="w-6 h-6 text-secondary" />,
                title: "Affordable Pricing 💰",
                description: "Premium solutions at competitive rates. Value without compromising quality."
              },
              {
                icon: <Clock className="w-6 h-6 text-accent" />,
                title: "Continuous Services 🔧",
                description: "24/7 support and maintenance to keep your business running smoothly."
              },
              {
                icon: <Package className="w-6 h-6 text-primary" />,
                title: "One Stop Solution 🔄",
                description: "Your complete technology partner from development to maintenance."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="card bg-base-500 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="card-body flex flex-row items-start p-4 sm:p-6">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    {feature.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="card-title text-base text-purple-700 sm:text-lg">{feature.title}</h3>
                    <p className="text-base-content/80 text-sm sm:text-base text-slate-700">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Buttons */}
          <div className="sticky bottom-0 bg-base-200 p-4 sm:p-6 rounded-lg mt-4 sm:mt-6">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {/* Email Button */}
            <a 
                href="mailto:rouletterise@gmail.com" 
                className="btn btn-primary bg-white btn-md sm:btn-lg flex items-center gap-2 hover:scale-110 transition-transform duration-300 w-full sm:w-auto rounded-full shadow-lg hover:shadow-xl"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact via Email
            </a>

            {/* Telegram Button */}
            <a 
                href="https://t.me/rouletterisee" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-md sm:btn-lg flex bg-gradient-to-r 
            from-purple-900 
            to-purple-500  text-white font-bold items-center gap-2 hover:scale-110 transition-transform duration-300 w-full sm:w-auto rounded-full shadow-lg hover:shadow-xl"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z" />
                </svg>
                Chat on Telegram
            </a>
            </div>
          </div>
        </div>

        {/* Modal Close Button - Fixed Position */}
        
      </div>

      {/* Backdrop click handler */}
      <form method="dialog" className="modal-backdrop">
        <button onClick={handleClose}>close</button>
      </form>
    </dialog>
  );
};

export default PromoModal;