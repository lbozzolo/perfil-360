'use client';

import { Check, Star } from 'lucide-react';

export default function PlansCentros() {
  return (
    <section id="planes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          
          {/* Plan Basico (Cargo por uso) */}
          <div className="relative bg-white rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-deep-blue mb-2">Costo por vincular certificaciones</h3>
            <div className="text-xl font-medium text-gray-500 mb-6 uppercase tracking-wider">(Cargo por uso)</div>
            <div className="text-4xl font-bold text-deep-blue mb-2">${process.env.NEXT_PUBLIC_PRICE_CERTIFICATION} ARS</div>
            <p className="text-gray-500 mb-8 font-bold">(IVA incluido) por certificación vinculada</p>
            <p className="text-gray-600 leading-relaxed">
              Cuando tu centro da de alta / vincula una certificación y esa certificación impacta en el perfil del alumno, se genera un cargo al centro de capacitación.
            </p>
          </div>

          {/* Nueva tarjeta: Digitalización de antecedentes */}
          <div className="relative bg-white rounded-3xl border border-360-yellow p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-360-yellow mb-2">Digitalización de antecedentes</h3>
            <div className="text-xl font-medium text-gray-500 mb-6 uppercase tracking-wider">(Cargo por uso)</div>
            <div className="text-4xl font-bold text-360-yellow mb-2">$5.000 ARS</div>
            <p className="text-gray-500 mb-2 font-bold">(IVA incluido) por cada certificación digitalizada</p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Permite registrar en el Perfil Laboral de una persona las certificaciones y capacitaciones emitidas por tu centro, para que queden visibles, descargables y verificables dentro de Perfil 360.
            </p>
            <ul className="text-xs text-gray-400 space-y-2 mt-4">
              <li>• Cada centro solo puede digitalizar certificaciones propias.</li>
              <li>• Si una persona posee certificaciones de otros centros, deberá solicitar la digitalización en cada centro correspondiente.</li>
              <li>• La digitalización no modifica ni actualiza el vencimiento original de la certificación.</li>
            </ul>
          </div>

          {/* Plan Pro */}
          <div className="relative bg-deep-blue rounded-3xl p-8 shadow-2xl text-white">
            
            <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
              Plan Plus <Star className="fill-current text-360-yellow w-5 h-5"/>
            </h3>
             <div className="text-xl font-medium text-gray-400 mb-6 uppercase tracking-wider">(Suscripción)</div>

            <div className="text-4xl font-bold mb-6 text-360-yellow">
                ${process.env.NEXT_PUBLIC_PRICE_PLAN_PLUS} ARS <span className="text-lg text-white font-normal"> (IVA incluido)</span>
            </div>
            
             <p className="text-gray-300 mb-8 font-medium">
              El Plan Plus se solicita desde dentro del sistema (Configuración del perfil del centro), luego de registrarte en el plan gratuito.
            </p>

            <ul className="space-y-4">
              {[
                "Descarga de base de datos de certificaciones.",
                "Vinculación de instructores para evaluaciones de campo.",
                "Acceso a licitaciones.",
                "Acceso a certificaciones vencidas de los alumnos."
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="bg-white/10 p-0.5 rounded-full">
                    <Check className="w-4 h-4 text-360-yellow flex-shrink-0" />
                  </div>
                  <span className="text-gray-100">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Botón único exterior */}
        <div className="flex justify-center">
          <a
            href={process.env.NEXT_PUBLIC_REGISTRO_URL || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-4 text-lg bg-deep-blue text-white font-bold rounded-full hover:bg-perfil-blue transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
          >
            Registrarme gratis
          </a>
        </div>

      </div>
    </section>
  );
}
