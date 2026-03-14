'use client';

import { Check } from 'lucide-react';

export default function FeaturesPersonas() {
  const features = [
    {
      title: "Mi perfil profesional",
      items: [
        "Experiencia formativa",
        "Historial laboral (si aplica)",
        "Diferencia entre capacitación reglamentaria y complementaria",
        "Roles visibles si tenés otros permisos (Instructor / Inspector)"
      ]
    },
    {
      title: "Mis cursos y mis certificados",
      items: [
        "Listado de cursos realizados",
        "Detalle del curso (carga horaria, fecha, número de certificación Perfil 360, calificaciones/observaciones)",
        "Descarga de certificado"
      ]
    },
    {
      title: "Visibilidad y compartir",
      items: [
        "Activar/desactivar visibilidad pública",
        "Compartir enlace del perfil",
        "Compartir evidencia descargando certificados"
      ]
    },
    {
      title: "Si te falta un curso o hay un error",
      items: [
        "Podés iniciar una solicitud para que la institución correspondiente lo revise y lo cargue correctamente."
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-deep-blue mb-12 text-center">Qué podés ver en tu app</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
            {features.map((section, idx) => (
                <div key={idx} className="bg-bg-light p-8 rounded-2xl border border-gray-100">
                    <h3 className="text-xl font-bold text-perfil-blue mb-6 border-b border-gray-200 pb-2">{section.title}</h3>
                    <ul className="space-y-4">
                        {section.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-text-gray">
                                <Check size={20} className="text-360-yellow mt-0.5 shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
