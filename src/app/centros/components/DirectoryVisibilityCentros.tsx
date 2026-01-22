'use client';

import { Building2, MapPin, Globe, Phone, Mail, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function DirectoryVisibilityCentros() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Visual Representation of Directory Profile */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 relative">
             <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-8 relative z-10 transform rotate-[-1deg] hover:rotate-0 transition-transform duration-500 max-w-md mx-auto">
                <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-6">
                    <div className="w-20 h-20 bg-perfil-blue text-white rounded-lg flex items-center justify-center font-bold text-2xl shadow-md">LOGO</div>
                    <div>
                        <h3 className="text-xl font-bold text-deep-blue">Centro de Formación Técnica SRL</h3>
                        <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                            <MapPin size={14} /> Neuquén, Argentina
                        </div>
                    </div>
                </div>

                <div className="space-y-4 text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-3">
                        <Globe size={16} className="text-gray-400"/>
                        <span>www.centroformacion.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Mail size={16} className="text-gray-400"/>
                        <span>contacto@centroformacion.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone size={16} className="text-gray-400"/>
                        <span>+54 9 299 123 4567</span>
                    </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-deep-blue mb-2 text-sm">Servicios Declarados</h4>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-white border border-gray-200 rounded text-xs text-gray-600">Manejo Defensivo</span>
                        <span className="px-2 py-1 bg-white border border-gray-200 rounded text-xs text-gray-600">Trabajo en Altura</span>
                        <span className="px-2 py-1 bg-white border border-gray-200 rounded text-xs text-gray-600">Soldadura</span>
                    </div>
                </div>
             </div>
             
             {/* Decorative element behind */}
             <div className="absolute top-10 -right-4 w-full h-full bg-perfil-blue/5 rounded-xl -z-10 rotate-[2deg] max-w-md mx-auto left-0 right-0"></div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
                Perfil institucional visible
            </h2>
             <p className="text-xl text-perfil-blue font-semibold mb-6">
                (datos concretos, servicios y contacto)
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                En el directorio, empresas y personas ven el perfil del centro (datos institucionales, servicios, contacto y referencias como tu web). No funciona como plataforma pública de venta de cursos; funciona como registro institucional y punto de verificación.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
