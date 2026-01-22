'use client';

import { HardHat, Factory, Utensils, Briefcase, ShieldAlert, Users, CheckCircle2 } from 'lucide-react';

export default function TargetAudienceEmpresas() {
  const industries = [
    {
      icon: <Factory size={24} />,
      title: "Industrias de alto requerimiento",
      desc: "Construcción, minería, petróleo y gas, industria, logística, portuaria, automotriz.",
    },
    {
      icon: <Utensils size={24} />,
      title: "Otras industrias y servicios",
      desc: "Papeleras, alimenticias, gastronómicas, retail, salud, oficinas y operaciones administrativas.",
    },
    {
      icon: <Briefcase size={24} />,
      title: "Consultoras",
      desc: "Trazabilidad y verificación de competencias de equipos propios o asignados.",
    },
    {
      icon: <ShieldAlert size={24} />,
      title: "ART / Aseguradoras / HyS",
      desc: "Supervisión externa sobre empresas clientes, con inspecciones e informes trazables.",
    },
    {
      icon: <Users size={24} />,
      title: "Contratistas y proveedores",
      desc: "Evidencia verificable para auditorías y cumplimiento ante empresas madre.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-3xl font-bold text-deep-blue mb-6">
                Sirve para cualquier empresa que quiera controlar capacitación y competencias.
            </h2>
            <p className="text-lg text-text-gray font-medium">
                Perfil 360 está pensado para organizaciones que necesitan visibilidad, orden y verificación sobre la formación de su gente. Funciona tanto para capacitaciones reglamentarias como para capacitaciones complementarias, en cualquier sector.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {industries.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="bg-white p-3 rounded-lg h-fit text-perfil-blue shadow-sm shrink-0">
                        {item.icon}
                    </div>
                    <div>
                        <h3 className="font-bold text-deep-blue mb-2">{item.title}</h3>
                        <p className="text-sm text-text-gray leading-relaxed">{item.desc}</p>
                    </div>
                </div>
            ))}
             <div className="flex gap-4 p-6 bg-perfil-blue/5 rounded-xl border border-perfil-blue/20">
                    <div className="bg-white p-3 rounded-lg h-fit text-deep-blue shadow-sm shrink-0">
                        <CheckCircle2 size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-deep-blue mb-2">Más allá del cumplimiento legal</h3>
                        <p className="text-sm text-deep-blue/80 leading-relaxed">
                            No se trata solo de cumplir la ley: Perfil 360 también sirve para demostrar profesionalismo, preparación y desarrollo de tus equipos ante clientes y auditores.
                        </p>
                    </div>
            </div>
        </div>

      </div>
    </section>
  );
}
