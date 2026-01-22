'use client';

import { Book, Lock } from 'lucide-react';

export default function ManualSupportCentros() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-blue-100 flex flex-col items-center text-center gap-6">
            
            <div className="w-16 h-16 bg-perfil-blue/10 rounded-full flex items-center justify-center mb-2">
                <Book className="w-8 h-8 text-perfil-blue"/>
            </div>

            <h2 className="text-3xl font-bold text-deep-blue">
                Manual de usuario incluido <br/><span className="text-lg font-normal text-gray-500">(acceso interno)</span>
            </h2>
            
            <p className="text-gray-600 leading-relaxed max-w-2xl">
                Perfil 360 cuenta con manual de usuario para centros de capacitación. Por seguridad y para cuidar la operación, el manual no es público: se accede desde dentro del sistema, una vez que el centro está registrado.
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
                <Lock size={14} /> Acceso restringido a usuarios registrados
            </div>

        </div>

      </div>
    </section>
  );
}
