'use client';

import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function ValidityPersonas() {
  return (
    <section className="py-20 bg-deep-blue text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    ¿Tenés un carnet vencido? En Perfil 360 se ve, y se actualiza cuando renovás.
                </h2>
                <div className="space-y-6 text-gray-300">
                    <p>
                        En Perfil 360, un “carnet vencido” se refleja como una capacitación vencida. Vas a ver claramente la fecha de emisión, la fecha de vencimiento y el estado.
                    </p>
                    <div className="bg-white/10 p-6 rounded-xl border border-white/10">
                        <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                            <RefreshCw className="text-360-yellow" size={20} />
                            ¿Qué pasa cuando renovás?
                        </h4>
                        <p className="text-sm">
                            Cuando realizás la renovación o actualización (por ejemplo, una capacitación anual obligatoria), el centro de capacitación que te la dicta registra la nueva certificación y tu perfil se actualiza con la vigencia correspondiente. Si vuelve a vencer, tu perfil también lo mostrará en el estado.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="flex-1 w-full flex justify-center">
                {/* Visual representation of expired/valid */}
                <div className="w-full max-w-sm space-y-4">
                    <div className="bg-white rounded-lg p-4 flex items-center justify-between border-l-4 border-red-500 opacity-90">
                        <div>
                            <p className="text-gray-800 font-bold">Trabajo en Altura</p>
                            <p className="text-red-600 text-sm font-bold">Vencido: 12/10/2023</p>
                        </div>
                        <AlertTriangle className="text-red-500" />
                    </div>
                     <div className="bg-white rounded-lg p-4 flex items-center justify-between border-l-4 border-green-500 shadow-xl">
                        <div>
                            <p className="text-gray-800 font-bold">Manejo Defensivo</p>
                            <p className="text-green-600 text-sm font-bold">Vigente hasta 05/2026</p>
                        </div>
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
