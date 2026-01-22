'use client';

import { GraduationCap } from 'lucide-react';

export default function ProfessionalFormationEmpresas() {
  return (
    <section className="py-20 bg-deep-blue text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Content */}
            <div className="text-left relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-8 border border-white/20 shadow-lg shadow-white/5">
                    <GraduationCap size={32} className="text-360-yellow" />
                </div>
                
                <h2 className="mb-6">
                    <span className="block text-xl md:text-2xl font-medium opacity-80 mb-2">NO SOLO CAPACITACIONES</span>
                    <span className="block text-3xl md:text-5xl font-bold leading-tight">Preparación profesional verificable</span>
                </h2>
                
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    Además de cursos y certificaciones, Perfil 360 permite reflejar formación y preparación profesional (por ejemplo, estudios y títulos) dentro del perfil personal del trabajador.
                </p>

                <div className="bg-white/10 rounded-xl p-6 md:p-8 border border-white/10 backdrop-blur-sm shadow-xl">
                    <p className="font-medium text-base md:text-lg">
                        Esto ayuda a las empresas a tomar <span className="text-360-yellow font-bold">mejores decisiones de asignación, desarrollo interno y planificación de capacitación</span>. La información se presenta con criterio de verificación y evidencia según corresponda.
                    </p>
                </div>
            </div>

            {/* Right Column: Image */}
            <div className="relative mt-8 lg:mt-0">
                 {/* Decorative background glow */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-perfil-blue/20 blur-[100px] rounded-full -z-10"></div>
                 
                 <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                    <div className="absolute inset-0 bg-deep-blue/20 group-hover:bg-deep-blue/10 transition-colors duration-500 z-10"></div>
                    <img 
                        src="/images/capacitaciones.webp" 
                        alt="Formación profesional" 
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                 </div>
                 
                 {/* Floating badge or decoration */}
                 <div className="absolute -bottom-6 -right-4 bg-white text-deep-blue px-6 py-3 rounded-lg shadow-xl border border-gray-100 z-20 hidden md:block">
                     <p className="font-bold text-sm">Evidencia de Calidad</p>
                 </div>
            </div>

        </div>
      </div>
    </section>
  );
}
