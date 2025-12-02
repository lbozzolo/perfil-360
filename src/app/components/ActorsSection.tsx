import { Building2, GraduationCap, ShieldCheck, UserCheck, CheckCircle2, ArrowRight } from 'lucide-react';

const actors = [
  {
    title: "Empresas",
    icon: <Building2 size={56} />,
    color: "text-perfil-blue",
    bg: "bg-blue-50",
    bullets: [
      "Crear su perfil y sus sucursales.",
      "Agregar trabajadores al staff y ver su historial.",
      "Asignar supervisores y registrar inspecciones.",
      "Iniciar licitaciones de capacitación."
    ]
  },
  {
    title: "Centros de capacitación",
    icon: <GraduationCap size={56} />,
    color: "text-360-yellow",
    bg: "bg-yellow-50",
    bullets: [
      "Crear perfil institucional y publicar cursos.",
      "Vincular alumnos y registrar resultados.",
      "Cargar certificados y carnets al Perfil 360.",
      "Postularse a licitaciones de empresas."
    ]
  },
  {
    title: "ART",
    icon: <ShieldCheck size={56} />,
    color: "text-connection-teal",
    bg: "bg-teal-50",
    bullets: [
      "Registrar perfil y staff técnico.",
      "Ver estado de capacitación de asegurados.",
      "Integrar informes de inspección.",
      "Publicar requerimientos de capacitación."
    ]
  },
  {
    title: "Trabajadores",
    icon: <UserCheck size={56} />,
    color: "text-perfil-blue",
    bg: "bg-gray-100",
    bullets: [
      "Acceder siempre gratis a su Perfil 360.",
      "Ver capacitaciones vigentes y experiencia.",
      "Actualizar datos personales y foto.",
      "Compartir perfil mediante enlace seguro."
    ]
  }
];

export default function ActorsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4 tracking-tight">
            Qué puede hacer cada actor en Perfil 360
          </h2>
          <p className="text-lg text-text-gray">
            Funciones concretas para empresas, centros de capacitación, ART y trabajadores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {actors.map((actor, index) => (
            <div key={index} className={`group ${actor.bg} rounded-3xl border border-transparent p-6 flex flex-col h-full hover:shadow-soft hover:-translate-y-1 transition-all duration-300`}>
              <div className={`w-24 h-24 rounded-full bg-white ${actor.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                {actor.icon}
              </div>
              <h3 className="text-xl font-bold text-deep-blue mb-4">{actor.title}</h3>
              <ul className="space-y-4 flex-grow mb-6">
                {actor.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-text-gray font-medium">
                    <CheckCircle2 size={18} className="text-connection-teal mt-0.5 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-black/5 mt-auto">
                <button className="text-sm font-bold text-perfil-blue flex items-center gap-2 group-hover:gap-3 transition-all">
                  Ver más <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
