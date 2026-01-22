'use client';

import { Check } from 'lucide-react';

export default function PlansEmpresas() {
  return (
    <section id="planes" className="py-24 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-6 tracking-tight">
            Planes y precios
          </h2>
          <p className="text-lg text-text-gray font-medium">
             Comenzá gratis para ordenar tu estructura. Activá funciones avanzadas cuando necesites operación en campo y licitaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto mb-12 max-w-5xl">
          {/* Plan Free */}
          <div className="bg-bg-light p-8 rounded-3xl shadow-sm border border-border-gray flex flex-col hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider mb-4">
                Para comenzar
              </span>
              <h3 className="text-2xl font-bold text-deep-blue mb-2">Plan Gratuito</h3>
              <p className="text-text-gray text-sm font-medium">
                Ideal para registro, vinculación de staff y verificación administrativa.
              </p>
            </div>
            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>
                <p className="text-sm text-text-gray">Crear 1 sucursal.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>
                <p className="text-sm text-text-gray">Vincular personas al staff.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>
                <p className="text-sm text-text-gray">Verificar competencias/capacitaciones desde administración.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>
                <p className="text-sm text-text-gray">Gestión administrativa básica (informes sin inspector en campo).</p>
              </div>
            </div>
            <button className="w-full py-3 rounded-full border-2 border-green-600 text-green-700 font-bold hover:bg-green-600 hover:text-white transition-all">
              Registrar mi empresa
            </button>
          </div>

          {/* Plan Plus */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-perfil-blue flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
             
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-perfil-blue text-xs font-bold uppercase tracking-wider mb-4">
                Operación Completa
              </span>
              <div className="flex items-baseline justify-between flex-wrap gap-2">
                <h3 className="text-2xl font-bold text-deep-blue mb-2">Plan Plus</h3>
                <p className="text-3xl font-extrabold text-deep-blue">${process.env.NEXT_PUBLIC_PRICE_PLAN_PLUS || '35.000'} <span className="text-sm font-normal text-text-gray">ARS / mes</span></p>
              </div>
               <p className="text-xs text-text-gray mb-2 font-medium">IVA incluido.</p>
            </div>
            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-perfil-blue/10 flex items-center justify-center text-perfil-blue shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>
                <p className="text-sm text-text-gray"><strong>Vincular inspectores/supervisores</strong> para inspección en campo.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-perfil-blue/10 flex items-center justify-center text-perfil-blue shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>
                <p className="text-sm text-text-gray"><strong>Vincular gerencia/mandos medios</strong> como observadores.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-perfil-blue/10 flex items-center justify-center text-perfil-blue shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>
                <p className="text-sm text-text-gray">Ver y gestionar informes con circuitos por rol.</p>
              </div>
               <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-perfil-blue/10 flex items-center justify-center text-perfil-blue shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>
                <p className="text-sm text-text-gray"><strong>Licitaciones de capacitación:</strong> solicitar, comparar y gestionar.</p>
              </div>
               <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-perfil-blue/10 flex items-center justify-center text-perfil-blue shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>
                <p className="text-sm text-text-gray">Constancia de inscripción.</p>
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl text-center text-xs text-text-gray border border-gray-100">
                Se activa desde la configuración una vez registrada la empresa.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
