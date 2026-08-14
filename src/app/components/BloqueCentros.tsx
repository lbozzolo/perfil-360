import { Check, ArrowRight } from 'lucide-react';
import { URLS } from '@/lib/site';
import CtaLink from './CtaLink';
import SliderCentros from './SliderCentros';

const capacidades = [
  'Registrar trabajadores.',
  'Crear y administrar sus cursos.',
  'Cargar certificaciones y vigencias.',
  'Validar las certificaciones registradas.',
  'Mantener presencia dentro del Directorio de centros registrados.',
];

export default function BloqueCentros() {
  return (
    <section
      id="centros"
      className="py-24 bg-deep-blue text-white relative overflow-hidden scroll-mt-28"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[700px] h-[700px] bg-perfil-blue/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-connection-teal/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">

          <div className="flex-1 max-w-xl text-center lg:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/10 text-360-yellow text-xs font-bold uppercase tracking-wider mb-4">
              Centros de capacitación
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Dale respaldo digital a las certificaciones que emitís
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Registrá tus cursos y las certificaciones de tus alumnos o
              trabajadores en CertiRed. Cada persona puede conservarlas en su
              perfil y las empresas pueden consultar la información registrada
              por tu centro.
            </p>

            <p className="font-bold text-white mb-4">Con CertiRed tu centro puede:</p>

            <ul className="space-y-3 mb-10 inline-block text-left">
              {capacidades.map((capacidad) => (
                <li
                  key={capacidad}
                  className="flex items-start gap-3 text-base text-gray-300 font-medium"
                >
                  <span className="w-5 h-5 rounded-full bg-360-yellow/20 flex items-center justify-center text-360-yellow shrink-0 mt-0.5">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span>{capacidad}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <CtaLink
                href={URLS.registro}
                evento="registro_centro"
                origen="bloque_centros"
                className="inline-flex items-center gap-2 px-8 py-4 bg-360-yellow text-deep-blue font-bold rounded-full hover:bg-white transition-all shadow-lg shadow-360-yellow/20 hover:-translate-y-1"
              >
                Registrar centro de capacitación
                <ArrowRight size={20} />
              </CtaLink>
              <span className="text-sm font-bold text-360-yellow">
                Registro gratuito.
              </span>
            </div>
          </div>

          {/* Pesa más que la columna de texto para que el slider se lleve la
              parte ancha del reparto en desktop. */}
          <div className="flex-1 lg:flex-[1.25] w-full max-w-2xl">
            <SliderCentros />
          </div>

        </div>
      </div>
    </section>
  );
}
