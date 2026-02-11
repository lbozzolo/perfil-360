import Link from 'next/link';

import { ArrowRight, Check } from 'lucide-react';

const registerUrl = typeof window !== 'undefined' ? process.env.NEXT_PUBLIC_REGISTRO_URL : process.env.NEXT_PUBLIC_REGISTRO_URL;

export default function PlansSection() {
  // fallback para entorno cliente
  const url = process.env.NEXT_PUBLIC_REGISTRO_URL;
  const finalUrl = url || registerUrl || '#';
  return (
    <section id="planes" className="py-24 bg-bg-light scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-6 tracking-tight">
            Acceso y planes de uso
          </h2>
          <p className="text-lg text-text-gray font-medium">
Perfil 360 es una plataforma de uso gratuito y acceso público que permite registrar, consultar y compartir información laboral en un entorno integrado, con funciones avanzadas disponibles según la necesidad de gestión.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto mb-16 max-w-5xl">
          {/* Plan Free */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-border-gray flex flex-col hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider mb-4">
                Acceso al ecosistema
              </span>
              <h3 className="text-2xl font-bold text-deep-blue mb-2">Plan Free</h3>
              <p className="text-text-gray text-sm font-medium">
                Los perfiles de personas se crean a través de una organización registrada (empresa o centro de capacitación).
              </p>
            </div>
            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>
                <p className="text-sm text-text-gray">Registro de personas dentro de Perfil 360.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>
                <p className="text-sm text-text-gray">Vinculación de personas a staff de la organización o a capacitaciones.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>
                <p className="text-sm text-text-gray">Verificación de información laboral actualizada.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>
                <p className="text-sm text-text-gray">Consulta del historial laboral integral de las personas.</p>
              </div>
              {/* <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>
                <p className="text-sm text-text-gray">Descarga de constancia de inscripción en Perfil 360 como herramienta de gestión y calidad.</p>
              </div> */}
            </div>
            <a
              href={finalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center py-3 rounded-full border-2 border-green-600 text-green-700 font-bold hover:bg-green-600 hover:text-white transition-all"
            >
              👉 Empezar gratis
            </a>
          </div>

          {/* Plan Plus */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border-2 border-perfil-blue flex flex-col hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-perfil-blue text-xs font-bold uppercase tracking-wider mb-4">
                Gestión y trazabilidad avanzada
              </span>
              <h3 className="text-2xl font-bold text-deep-blue mb-2">Plan Plus</h3>
              <p className="text-text-gray text-sm font-medium">Para organizaciones que requieren herramientas avanzadas de gestión.</p>
            </div>
            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-perfil-blue/10 flex items-center justify-center text-perfil-blue shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>
                <p className="text-sm text-text-gray">Licitaciones de capacitación.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-perfil-blue/10 flex items-center justify-center text-perfil-blue shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>
                <p className="text-sm text-text-gray">Vinculación de instructores, supervisores e inspectores.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-perfil-blue/10 flex items-center justify-center text-perfil-blue shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>
                <p className="text-sm text-text-gray">Evaluaciones, auditorías y reportes.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-perfil-blue/10 flex items-center justify-center text-perfil-blue shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>
                <p className="text-sm text-text-gray">Descarga de informes y documentación.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-perfil-blue/10 flex items-center justify-center text-perfil-blue shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>
                <p className="text-sm text-text-gray">Paneles de control y seguimiento de vigencias.</p>
              </div>
            </div>
            {/* <div className="flex flex-col gap-3">
              <button className="w-full py-3 rounded-full bg-perfil-blue text-white font-bold hover:bg-deep-blue transition-all shadow-lg shadow-perfil-blue/20">
                👉 Activar Plan Plus
              </button>
              <button className="w-full py-3 rounded-full border-2 border-perfil-blue text-perfil-blue font-bold hover:bg-blue-50 transition-all">
                👉 Solicitar demo
              </button>
            </div> */}
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-text-gray font-medium">
            La verificación de perfiles es pública.<br />
            La gestión avanzada se realiza dentro de la plataforma.
          </p>
        </div>
      </div>
    </section>
  );
}
