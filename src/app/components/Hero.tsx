'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Play, User, Briefcase, Award, ArrowRight, X } from 'lucide-react';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-12">
      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}>
          <div className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-white/20 transition-colors"
            >
              <X size={24} />
            </button>
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/u31qwQUeGuM?autoplay=1" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-br from-deep-blue to-connection-teal overflow-hidden -z-20">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-connection-teal/20 to-360-yellow/20 rounded-full blur-3xl opacity-60" />
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-12">
          
          {/* Left Column: Text & CTAs */}
          <div className="flex-1 text-center lg:text-left z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-360-yellow animate-pulse"></span>
              <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                Ecosistema de trazabilidad laboral
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Un perfil único. <span className="text-transparent bg-clip-text bg-gradient-to-r from-360-yellow to-connection-teal">Toda la información laboral.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Plataforma digital que conecta trabajadores, empresas, centros de capacitación y ART en una sola red de información verificada.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 bg-360-yellow text-deep-blue font-bold rounded-full hover:bg-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-360-yellow/20 hover:-translate-y-1"
              >
                <Play size={20} fill="currentColor" />
                Ver video: qué es Perfil 360
              </button>
              
              <Link 
                href="#" 
                className="w-full sm:w-auto px-8 py-4 border-2 border-white/20 text-white font-bold rounded-full hover:border-white hover:bg-white/10 transition-all text-center hover:-translate-y-1"
              >
                Ver directorio
              </Link>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-white/10">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-deep-blue bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-300">
                    <User size={16} />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="font-bold text-white">+10.000 Trabajadores</p>
                <p className="text-gray-400">Ya tienen su perfil verificado</p>
              </div>
            </div>
          </div>

          {/* Right Column: Phone Mockup */}
          <div className="w-full lg:w-auto lg:flex-none flex justify-center lg:justify-end relative z-10 lg:mb-[-140px]">
            
            {/* Phone Mockup */}
            <div className="relative w-[300px] md:w-[340px] h-[640px] bg-white rounded-[3rem] border-[8px] border-white shadow-2xl overflow-hidden ring-1 ring-gray-200/50 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-white rounded-b-2xl z-20 shadow-sm" />
              
              {/* Screen Content */}
              <div className="w-full h-full bg-bg-light overflow-y-auto relative">
                <img 
                  src="/images/scroll_celular.webp" 
                  alt="Perfil 360 App" 
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
