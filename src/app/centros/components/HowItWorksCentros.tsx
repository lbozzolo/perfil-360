'use client';

export default function HowItWorksCentros() {
  const steps = [
    {
      num: "01",
      title: "Registrás tu centro",
      desc: "Registrás tu centro en el plan gratuito y configurás datos y operación."
    },
    {
      num: "02",
      title: "Gestionás",
      desc: "Gestionás alumnos, cursos y certificaciones con trazabilidad."
    },
    {
      num: "03",
      title: "¿Necesitás más?",
      desc: "Si necesitás funciones avanzadas (descargas, instructores/evaluaciones, licitaciones), solicitás Plan Plus desde la configuración de tu perfil dentro de Perfil 360."
    },
    {
        num: "04",
        title: "Activación",
        desc: "El sistema habilita los módulos correspondientes una vez activado."
    }
  ];

  return (
    <section className="py-20 bg-deep-blue text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Primero te registrás. Después, si lo necesitás, activás Plan Plus.
        </h2>
        <div className="w-20 h-1 bg-360-yellow mx-auto mb-16 rounded-full"></div>

        <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connector Line (Desktop) - Adjusted for 4 columns */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent z-0"></div>

          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-deep-blue border-4 border-360-yellow flex items-center justify-center text-3xl font-bold text-360-yellow mb-6 shadow-xl">
                {step.num}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
