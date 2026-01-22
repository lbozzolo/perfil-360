'use client';

import { FileCheck, Users, Clock, RefreshCw, AlertOctagon, Briefcase } from 'lucide-react';

export default function BenefitsCentros() {
  const benefits = [
    {
      icon: <FileCheck className="w-8 h-8 text-360-yellow" />,
      title: "Digitalización verificable",
      subtitle: "(no solo documentos)",
      description: "Convertís cada capacitación en evidencia trazable: emitida por tu centro, vinculada al alumno y verificable por terceros."
    },
    {
      icon: <Users className="w-8 h-8 text-360-yellow" />,
      title: "Instructores integrados al centro",
      subtitle: "(Plan Plus)",
      description: "Tus instructores se vinculan al centro y operan desde su perfil: buscan alumnos del directorio del centro, seleccionan el curso correspondiente y evalúan con trazabilidad."
    },
    {
      icon: <Clock className="w-8 h-8 text-360-yellow" />,
      title: "Certificaciones con estado y vigencias claras",
      description: "Vigente, por vencer o vencida: el estado se ve y se gestiona. Menos dudas, más control operativo."
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-360-yellow" />,
      title: "Renovaciones",
      subtitle: "(servicio recurrente, ordenado)",
      description: "Cuando corresponde, renovás la capacitación y el perfil del alumno se actualiza con nueva vigencia y nueva evidencia."
    },
    {
      icon: <AlertOctagon className="w-8 h-8 text-360-yellow" />,
      title: "Panel de certificaciones vencidas",
      description: "Detectás vencimientos, filtrás, contactás y ofrecés renovación; y si corresponde, podés alertar a la empresa vinculada para prevenir riesgos operativos."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-360-yellow" />,
      title: "Canal comercial por demanda real",
      subtitle: "(Plan Plus)",
      description: "Perfil 360 no es una vidriera pública de cursos. Las oportunidades aparecen cuando una empresa abre una necesidad: licitaciones y cotizaciones."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16 text-center max-w-3xl mx-auto">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-perfil-blue font-bold text-sm uppercase tracking-wide mb-4">
               Beneficios
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
              Potenciá tu institución educativa
            </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 h-full"
            >
              <div className="w-14 h-14 bg-deep-blue rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-deep-blue mb-1 group-hover:text-perfil-blue transition-colors">
                {item.title}
              </h3>
              {item.subtitle && (
                <span className="text-sm font-semibold text-perfil-blue mb-3 block">{item.subtitle}</span>
              )}
              <p className="text-gray-600 leading-relaxed text-sm mt-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
