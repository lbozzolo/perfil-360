'use client';

import { ShieldCheck } from 'lucide-react';

export default function IntegrationCentros() {
  return (
    <section className="py-20 bg-gray-900 text-white overflow-hidden relative">
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
            
            <div className="w-full lg:w-1/2">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                    <ShieldCheck className="w-8 h-8 text-green-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Tu certificación deja de ser un archivo. Se vuelve verificable.
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    Cuando una empresa opera con Perfil 360, puede consultar perfiles, verificar vigencias y acceder a evidencia sin depender de reenvíos. Para tu centro eso significa menos reemisiones, menos discusiones y más reputación como emisor confiable.
                </p>
            </div>

            {/* Visual Abstract: Verification Flow */}
            <div className="w-full lg:w-1/2 relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-green-500/5 rounded-full blur-3xl pointer-events-none"></div>
                
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 shadow-2xl relative z-10 flex flex-col gap-4">
                     {/* Step 1: Center issues */}
                     <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-700/50 border border-gray-600 opacity-50">
                        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold">C</div>
                        <div className="h-2 w-24 bg-gray-500 rounded"></div>
                        <div className="ml-auto text-xs text-gray-400">Emisión</div>
                     </div>
                     
                     {/* Arrow */}
                     <div className="mx-auto w-0.5 h-6 bg-gray-600"></div>

                     {/* Step 2: System */}
                     <div className="flex items-center justify-center p-4 bg-deep-blue border border-gray-600 rounded-xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-green-500/10 animate-pulse"></div>
                        <span className="font-bold tracking-widest text-white relative z-10">PERFIL 360</span>
                     </div>

                      {/* Arrow */}
                     <div className="mx-auto w-0.5 h-6 bg-gray-600"></div>

                     {/* Step 3: Verified by Company */}
                     <div className="flex items-center gap-4 p-4 rounded-xl bg-green-900/20 border border-green-500/30">
                        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-deep-blue"><ShieldCheck size={20}/></div>
                        <div>
                            <div className="text-green-400 font-bold text-sm">Verificado</div>
                            <div className="text-gray-400 text-xs">Empresa Cliente</div>
                        </div>
                     </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}
