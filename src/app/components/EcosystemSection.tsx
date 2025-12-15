'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Building2, ClipboardCheck, User, Eye, Award, Briefcase, ArrowRight } from 'lucide-react';

export default function EcosystemSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="como-funciona" ref={sectionRef} className="py-20 bg-bg-light overflow-hidden scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-perfil-blue mb-4">
            Cada organización carga datos.<br/> El trabajador conserva su historial.
          </h2>
          <p className="text-lg text-text-gray max-w-2xl mx-auto">
            Un solo Perfil 360 se alimenta con información de empresas, CECAP y ART.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto min-h-[600px] flex flex-col lg:block items-center justify-center">
          
          {/* Circular Arrows SVG (Desktop Only) */}
          <svg className={`hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none z-0 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} viewBox="0 0 800 800">
            <defs>
               <marker id="arrow-head" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
                 <path d="M0,0 L12,6 L0,12 L3,6 z" fill="#E2E8F0" />
               </marker>
            </defs>
            
            {/* Circle Path connecting the items */}
            <path
              d="M400, 100 A 300, 300 0 1, 1 399, 100"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="2"
              strokeDasharray="12 12"
              className="animate-spin-slow"
              style={{ transformOrigin: 'center', animationDuration: '60s' }}
            />
            
            {/* Decorative Arcs */}
            <path d="M400 120 A 280 280 0 0 1 642 260" fill="none" stroke="#FFC52A" strokeWidth="4" strokeLinecap="round" className="opacity-20" />
            <path d="M642 540 A 280 280 0 0 1 158 540" fill="none" stroke="#007A7B" strokeWidth="4" strokeLinecap="round" className="opacity-20" />
            <path d="M158 260 A 280 280 0 0 1 400 120" fill="none" stroke="#1F455B" strokeWidth="4" strokeLinecap="round" className="opacity-20" />
          </svg>

          {/* Central Phone Mockup - Faded Bottom */}
          <div className={`relative z-10 w-[280px] h-[560px] mx-auto lg:absolute lg:left-1/2 lg:top-[200px] lg:-translate-x-1/2 [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="absolute inset-0 border-[12px] border-gray-900 rounded-[2.5rem] z-20 pointer-events-none shadow-2xl"></div>
            <Image
              src="/images/celular.webp"
              alt="Perfil 360 App"
              fill
              className="object-cover rounded-[2rem]"
              priority
            />
          </div>

          {/* Item 1: Capacitaciones (Top Center) */}
          <div className="mt-12 lg:mt-0 lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2 max-w-[320px] z-20">
            <div className={`bg-white p-6 rounded-3xl shadow-xl border border-gray-100 text-center relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-360-yellow rounded-full flex items-center justify-center text-perfil-blue shadow-lg border-4 border-white">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-xl font-bold text-deep-blue mb-2 mt-4">Capacitaciones</h3>
              <p className="text-base text-text-gray leading-relaxed mb-2">
                Los centros de capacitación registran cursos, resultados y certificados.
              </p>
            </div>
          </div>

          {/* Item 2: Supervisiones (Bottom Right) */}
          <div className="mt-8 lg:mt-0 lg:absolute lg:top-[220px] lg:right-[5%] max-w-[320px] z-20">
            <div className={`bg-white p-6 rounded-3xl shadow-xl border border-gray-100 text-right relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <div className="absolute -top-8 right-6 w-16 h-16 bg-connection-teal rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white">
                <Eye size={32} />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-deep-blue mb-2">Supervisiones</h3>
                <p className="text-base text-text-gray leading-relaxed">
                  Supervisores internos y externos documentan observaciones y vigencias.
                </p>
              </div>
            </div>
          </div>

          {/* Item 3: Empresa y puesto (Bottom Left) */}
          <div className="mt-8 lg:mt-0 lg:absolute lg:top-[220px] lg:left-[5%] max-w-[320px] z-20">
            <div className={`bg-white p-6 rounded-3xl shadow-xl border border-gray-100 text-left relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              <div className="absolute -top-8 left-6 w-16 h-16 bg-perfil-blue rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white">
                <Building2 size={32} />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-deep-blue mb-2">Empresa y puesto</h3>
                <p className="text-base text-text-gray leading-relaxed">
                  Las empresas vinculan al trabajador a sucursales, puestos y áreas.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
