import { GraduationCap, UserCheck, Search, ArrowRight } from 'lucide-react';

const pasos = [
  {
    numero: '1',
    titulo: 'El centro registra',
    texto:
      'El centro de capacitación carga los cursos, certificaciones y vigencias que emite a sus trabajadores o alumnos.',
    icono: GraduationCap,
    acento: 'bg-360-yellow text-perfil-blue',
  },
  {
    numero: '2',
    titulo: 'El trabajador muestra',
    texto:
      'Cada trabajador reúne sus certificaciones laborales en su perfil CertiRed y puede compartirlas fácilmente.',
    icono: UserCheck,
    acento: 'bg-connection-teal text-white',
  },
  {
    numero: '3',
    titulo: 'La empresa consulta',
    texto:
      'Cualquier empresa puede consultar el Directorio y revisar las certificaciones registradas, sin necesidad de crear una cuenta.',
    icono: Search,
    acento: 'bg-perfil-blue text-white',
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-24 bg-bg-light scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4 tracking-tight">
            Cómo funciona CertiRed
          </h2>
          <p className="text-lg text-text-gray">
            Tres pasos, tres actores. Nada más.
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-4 items-stretch">
          {pasos.map((paso, index) => {
            const Icono = paso.icono;
            return (
              <li key={paso.numero} className="relative flex lg:gap-4">
                <div className="bg-white rounded-3xl shadow-sm border border-border-gray p-8 flex flex-col h-full w-full hover:shadow-soft hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 shadow-sm ${paso.acento}`}
                    >
                      <Icono size={30} />
                    </div>
                    <span
                      className="text-6xl font-bold text-border-gray leading-none"
                      aria-hidden="true"
                    >
                      {paso.numero}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-deep-blue mb-3">
                    {paso.titulo}
                  </h3>
                  <p className="text-base text-text-gray leading-relaxed">
                    {paso.texto}
                  </p>
                </div>

                {/* Flecha de recorrido entre pasos (solo desktop) */}
                {index < pasos.length - 1 && (
                  <div
                    className="hidden lg:flex items-center justify-center shrink-0 text-border-gray"
                    aria-hidden="true"
                  >
                    <ArrowRight size={28} />
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
