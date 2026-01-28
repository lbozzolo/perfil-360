'use client';

import { CheckCircle2, Crown } from 'lucide-react';

export default function FeaturesCentros() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
            Qué podés hacer dentro de Perfil 360
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">
            
            {/* Plan Gratuito */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gray-200 rounded-lg">
                        <CheckCircle2 className="w-6 h-6 text-gray-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-deep-blue">Plan gratuito <br/><span className="text-lg font-normal text-gray-500">(para empezar)</span></h3>
                </div>
                <ul className="space-y-4">
                    {[
                        "Registro del centro y configuración del perfil institucional.",
                        "Gestión del directorio de alumnos.",
                        "Gestión interna de cursos (reglamentarios o complementarios).",
                        "Alta/vinculación de certificaciones al perfil del alumno (genera cargo por certificación; ver precios).",
                        "Panel operativo de seguimiento de certificaciones y vencimientos."
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-perfil-blue mt-2.5 flex-shrink-0"></span>
                            <span className="text-gray-700 leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Plan Plus */}
            <div className="bg-deep-blue rounded-2xl p-8 border border-deep-blue shadow-xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-360-yellow/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
                
                <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div className="p-2 bg-360-yellow rounded-lg">
                        <Crown className="w-6 h-6 text-deep-blue" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Plan Plus <br/><span className="text-lg font-normal text-gray-300">(desde dentro del sistema)</span></h3>
                </div>
                <ul className="space-y-4 relative z-10">
                    {[
                        "Vincular instructores para evaluaciones de campo.",
                        "Descarga de base de datos de certificaciones.",
                        "Descarga de constancia de inscripción en Perfil 360.",
                        "Acceso a licitaciones / participación en oportunidades y contratos.",
                        "Acceso a certificaciones vencidas de los alumnos."
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-360-yellow mt-2.5 flex-shrink-0"></span>
                            <span className="text-gray-200 leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
      </div>
    </section>
  );
}
