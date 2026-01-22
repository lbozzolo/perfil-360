'use client';

import Link from 'next/link';
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

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight text-white">
                Digitalizá las competencias de tus trabajadores y gestioná capacitaciones <span className="text-360-yellow drop-shadow-sm">con evidencia operativa.</span>
                </h1>
                
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl font-medium leading-relaxed">
                Perfil 360 transforma certificaciones, vigencias e inspecciones en registros verificables. Empezá con una estructura simple (sucursal + staff) y escalá a una operación completa con roles y licitaciones cuando tu organización lo requiera.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-start">
                <Link 
                    href="#registro" 
                    className="w-full sm:w-auto px-8 py-3 bg-360-yellow text-deep-blue font-bold rounded-full hover:bg-white hover:text-connection-teal transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 transform hover:-translate-y-0.5 text-base"
                >
                    Registrar mi empresa (Gratis) <ArrowRight size={20} />
                </Link>
                <Link 
                    href="#contacto" 
                    className="w-full sm:w-auto px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-connection-teal transition-all flex items-center justify-center transform hover:-translate-y-0.5 text-base"
                >
                    Quiero que me contacten
                </Link>
                </div>
            </div>

            {/* Right Column (Image & Microcopy) */}
            <div className="w-full lg:w-1/3 flex flex-col items-center relative mt-12 lg:mt-0 lg:mb-[-50px] z-20">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-white aspect-[4/3] flex items-center justify-center">
                     {/* Placeholder for business functionality image */}
                     <div className="text-center p-8">
                        <div className="w-16 h-16 bg-deep-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 text-deep-blue font-bold text-2xl">
                          360
                        </div>
                        <p className="font-bold text-deep-blue">Dashboard de Gestión</p>
                        <p className="text-sm text-gray-500 mt-2">Vista de sucursales, staff y estado de cumplimiento.</p>
                     </div>
                     <div className="absolute inset-0 bg-deep-blue/5"></div>
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
