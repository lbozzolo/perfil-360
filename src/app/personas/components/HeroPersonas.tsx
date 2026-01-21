'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroPersonas() {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-12 bg-360-yellow text-deep-blue">
      {/* Decorative background elements - subtle to not interfere with text */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 opacity-10 pointer-events-none">
         <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-white blur-[80px]" />
         <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-white blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-left">
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left Column */}
            <div className="flex-1">
                <div className="inline-block px-6 py-3 bg-deep-blue text-white font-extrabold rounded-full text-base tracking-wide mb-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                ★ GRATIS PARA PERSONAS. 100%.
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-[0.95] tracking-tight text-deep-blue max-w-4xl">
                Llegó la digitalización de tus capacitaciones. <br className="hidden md:block"/>
                <span className="text-white drop-shadow-sm">Todas en un solo lugar.</span>
                </h1>
                
                <p className="text-lg md:text-xl text-deep-blue/80 mb-8 max-w-2xl font-medium leading-relaxed">
                Tu Perfil 360 reúne tu información y certificaciones para que no dependas más del papel ni de archivos sueltos o aislados. Todo queda en un solo lugar, es verificable por empresas y se completa con registros cargados por centros de capacitación y empleadores.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-start">
                <Link 
                    href="#" 
                    className="w-full sm:w-auto px-8 py-3 bg-deep-blue text-white font-bold rounded-full hover:bg-white hover:text-deep-blue transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 transform hover:-translate-y-0.5 text-base"
                >
                    Solicitar mi alta en Perfil 360 <ArrowRight size={20} />
                </Link>
                <Link 
                    href="#crecimiento" 
                    className="w-full sm:w-auto px-8 py-3 border-2 border-deep-blue text-deep-blue font-bold rounded-full hover:bg-deep-blue hover:text-white transition-all flex items-center justify-center transform hover:-translate-y-0.5 text-base"
                >
                    Mi empresa o centro aún no está
                </Link>
                </div>
            </div>

            {/* Right Column (Image & Microcopy) */}
            <div className="w-full lg:w-1/3 flex flex-col items-center relative mt-12 lg:mt-0 lg:mb-[-100px] z-20">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                     <img 
                        src="/images/4.1.webp" 
                        alt="Trabajador utilizando Perfil 360" 
                        className="w-full h-auto object-contain"
                     />
                     <div className="absolute inset-0 bg-deep-blue/5"></div>
                </div>

                 <div className="w-[110%] -mt-12 relative z-10 bg-white p-6 rounded-xl border border-deep-blue/10 shadow-xl">
                    <p className="text-xs md:text-sm text-deep-blue/90 italic border-l-4 border-deep-blue pl-3 leading-relaxed font-medium">
                    “Podés solicitar la apertura de tu perfil personal por este medio. Para mantener la confiabilidad, los cursos, certificaciones y vínculos laborales se cargan únicamente por instituciones registradas (empresas y centros), y cada una carga lo que le corresponde.”
                    </p>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
}
