'use client';

import { UserPlus, Building2, LayoutDashboard } from 'lucide-react';

export default function HowItWorksPersonas() {
  return (
    <section className="py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
            Tu perfil es personal. La evidencia, institucional.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden lg:block absolute top-[28px] left-[16%] right-[16%] h-0.5 bg-gray-200 -z-0"></div>

          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-deep-blue text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-deep-blue/20">
              1
            </div>
            <h3 className="text-xl font-bold text-deep-blue mb-4">Solicitud de contacto (iniciada por vos)</h3>
            <p className="text-text-gray max-w-sm">
Podés dejar una solicitud de contacto para que Perfil 360 se comunique con la empresa donde trabajás o el centro donde te capacitaste, en caso de que aún no utilicen la plataforma.            </p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-deep-blue text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-deep-blue/20">
              2
            </div>
            <h3 className="text-xl font-bold text-deep-blue mb-4">Validación y carga por instituciones</h3>
            <p className="text-text-gray max-w-sm mb-4">
              Para que la información sea confiable y verificable:
            </p>
            <ul className="text-text-gray text-sm text-left max-w-sm space-y-2 list-disc pl-5">
                <li>Las capacitaciones y certificaciones las cargan los centros que las emitieron.</li>
                <li>Los vínculos laborales los cargan las empresas donde trabajás.</li>
                <li>Cada institución carga únicamente sus propios registros.</li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-deep-blue text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-deep-blue/20">
              3
            </div>
            <h3 className="text-xl font-bold text-deep-blue mb-4">Tu uso diario</h3>
             <p className="text-text-gray max-w-sm">
               Accedés a tu perfil, consultás tus cursos y certificaciones, descargás evidencia y compartís tu enlace cuando lo necesitás.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white p-6 rounded-xl border border-gray-200 text-center max-w-3xl mx-auto shadow-sm">
            <p className="text-text-gray italic">
                <span className="font-bold text-perfil-blue">Dato:</span> Este proceso agiliza la gestión: cuando tu empresa o centro ya usa Perfil 360, la vinculación y carga de información se realiza de manera más rápida y ordenada.
            </p>
        </div>
      </div>
    </section>
  );
}
