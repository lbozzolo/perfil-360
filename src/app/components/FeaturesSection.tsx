import { Cloud, ShieldCheck, Users, Gavel, BarChart3 } from 'lucide-react';

const features = [
  {
    title: "Digitalización en la nube",
    icon: <Cloud size={24} />,
    text: "Registros de capacitación, empleos e inspecciones en un único sistema digital. Acceso desde cualquier dispositivo."
  },
  {
    title: "Verificación pública y segura",
    icon: <ShieldCheck size={24} />,
    text: "Directorio público para verificar trabajadores en segundos. Datos sensibles resguardados."
  },
  {
    title: "Supervisores integrados",
    icon: <Users size={24} />,
    text: "Instructores y supervisores cargan evaluaciones desde su perfil. Cada supervisión deja huella."
  },
  {
    title: "Licitaciones claras",
    icon: <Gavel size={24} />,
    text: "Empresas inician búsquedas y los centros cotizan en un entorno trazable y transparente."
  },
  {
    title: "Indicadores y reportes",
    icon: <BarChart3 size={24} />,
    text: "Paneles de vigencias por empresa. Informes exportables para auditorías y licitaciones."
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-deep-blue text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-perfil-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-connection-teal/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Funciones clave de Perfil 360
          </h2>
          <p className="text-lg text-gray-300 font-medium">
            Herramientas diseñadas para simplificar la gestión y potenciar la transparencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-360-yellow rounded-full flex items-center justify-center text-perfil-blue mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-yellow-500/20">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed font-medium">
                {feature.text}
              </p>
            </div>
          ))}

          {/* Image Card */}
          <div className="relative h-full min-h-[300px] rounded-3xl overflow-hidden group shadow-lg border border-white/10">
            <img 
              src="/images/persona-mostrando-celular-con-perfil.webp" 
              alt="Seguridad laboral" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/90 via-deep-blue/20 to-transparent flex items-end p-8">
               <p className="text-white font-bold text-xl leading-tight">
                 Construyendo un futuro más seguro
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
