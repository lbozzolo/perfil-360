'use client';

import { Clock, AlertTriangle } from 'lucide-react';

export default function ExpiredCertificationsCentros() {
  return (
    <section className="py-20 bg-gray-50 border-y border-gray-200">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-16">
        
        <div className="w-full md:w-1/3 flex justify-center">
             <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-red-100 rounded-full animate-pulse opacity-50"></div>
                <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center border-4 border-red-500 shadow-inner">
                    <Clock size={80} className="text-red-500" />
                </div>
                <div className="absolute bottom-0 right-0 bg-red-500 text-white p-3 rounded-full shadow-lg border-4 border-white">
                    <AlertTriangle size={32} />
                </div>
             </div>
        </div>

        <div className="w-full md:w-2/3 text-left">
            <h2 className="text-3xl font-bold text-deep-blue mb-4">
                Certificaciones vencidas: control, renovación y prevención operativa
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Perfil 360 te permite gestionar el ciclo de vida real de una competencia. Si una certificación vence, el centro puede detectarlo, accionar y renovar. Esto mejora el servicio al alumno y aporta valor a empresas, que muchas veces no detectan a tiempo vencimientos críticos.
            </p>
        </div>

      </div>
    </section>
  );
}
