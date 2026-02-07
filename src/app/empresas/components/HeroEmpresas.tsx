'use client';

import Link from 'next/link';
const registroUrl = process.env.NEXT_PUBLIC_REGISTRO_URL || 'https://registro.perfil360.com.ar';
import { ArrowRight } from 'lucide-react';

export default function HeroEmpresas() {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-12 bg-connection-teal text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 opacity-10 pointer-events-none">
         <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-white blur-[80px]" />
         <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-white blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-left">
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left Column */}
            <div className="flex-1">
                <div className="inline-block px-6 py-3 bg-white/20 text-white font-extrabold rounded-full text-sm uppercase tracking-wider mb-6 shadow-lg backdrop-blur-md">
                Control de Competencias 360°
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 leading-[1.1] tracking-tight text-white">
                Digitalizá las competencias de tus trabajadores y gestioná capacitaciones <span className="text-360-yellow drop-shadow-sm">con evidencia operativa.</span>
                </h1>
                
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl font-medium leading-relaxed">
                Perfil 360 transforma certificaciones, vigencias e inspecciones en registros verificables. Empezá con una estructura simple (sucursal + staff) y escalá a una operación completa con roles y licitaciones cuando tu organización lo requiera.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-start">
                <Link 
                  href={registroUrl}
                  className="w-full sm:w-auto px-8 py-3 bg-360-yellow text-deep-blue font-bold rounded-full hover:bg-white hover:text-connection-teal transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 transform hover:-translate-y-0.5 text-base"
                >
                  Registrar mi empresa (Gratis) <ArrowRight size={20} />
                </Link>
                <Link 
                  href={process.env.NEXT_PUBLIC_CONTACTO_EMPRESAS_CENTROS_URL || 'https://wkf.ms/4rpQ3Ml'}
                  className="w-full sm:w-auto px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-connection-teal transition-all flex items-center justify-center transform hover:-translate-y-0.5 text-base"
                  target="_blank" rel="noopener noreferrer"
                >
                  Quiero que me contacten
                </Link>
                </div>
            </div>

            {/* Right Column (Image & Microcopy) */}
            <div className="w-full lg:w-[42%] flex flex-col items-center relative mt-12 lg:mt-0 lg:mb-[-50px] z-20" style={{ perspective: '1000px' }}>
              <div className="relative w-[115%] rounded-2xl overflow-hidden shadow-2xl bg-white aspect-[4/3] flex items-center justify-center" style={{ transform: 'rotateY(-8deg)', transformStyle: 'preserve-3d' }}>
                    {/* Imagen principal del hero */}
                    <img 
                      src="/images/perfil360-01.webp"
                      alt="Dashboard de Gestión Perfil 360"
                      className="object-cover w-full h-full"
                      loading="eager"
                    />
                    {/* Gradiente de opacidad para efecto de profundidad */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                </div>

                 <div className="w-[110%] -mt-8 relative z-10 bg-white p-6 rounded-xl border border-deep-blue/10 shadow-xl">
                    <p className="text-xs md:text-sm text-deep-blue/90 border-l-4 border-deep-blue pl-3 leading-relaxed font-medium">
                    Las capacitaciones y certificaciones se sostienen con evidencia: se cargan por instituciones registradas (centros de capacitación y/o empleadores), y cada una carga lo que le corresponde.
                    </p>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
}
