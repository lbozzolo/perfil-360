import { Check } from 'lucide-react';
import { URLS } from '@/lib/site';
import CtaLink from '@/app/components/CtaLink';

/**
 * Esquema de cobro vigente. El Plan Plus se retiró el 2026-08-12 por decisión
 * del cliente: durante esta etapa solo se comunica el cargo por certificación
 * registrada, para no poner barreras a la incorporación de centros.
 */
const incluido = [
  'Registro del centro sin costo.',
  'Alta de trabajadores y creación de cursos.',
  'Carga de certificaciones y vigencias.',
  'Presencia en el Directorio de centros registrados.',
];

export default function PlansCentros() {
  const precio = Number(
    process.env.NEXT_PUBLIC_PRICE_CERTIFICATION || 7500
  ).toLocaleString('es-AR');

  return (
    <section id="planes" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4 tracking-tight">
            Registro gratuito
          </h2>
          <p className="text-lg text-text-gray">
            Tu centro se registra sin costo. Solo se cobra por cada
            certificación que quede registrada en el perfil de un trabajador.
          </p>
        </div>

        <div className="bg-bg-light rounded-3xl border border-border-gray p-8 md:p-10 mb-10">
          <div className="text-center pb-8 mb-8 border-b border-border-gray">
            <p className="text-sm font-bold text-perfil-blue uppercase tracking-wider mb-3">
              Costo por certificación registrada
            </p>
            <p className="text-5xl font-bold text-deep-blue mb-2">
              ${precio}
              <span className="text-xl font-medium text-text-gray"> ARS</span>
            </p>
            <p className="text-sm text-text-gray font-medium">
              IVA incluido, por certificación registrada por persona.
            </p>
          </div>

          <p className="text-base text-text-gray leading-relaxed mb-8">
            Aplica tanto para nuevas certificaciones como para la carga de
            antecedentes. Cuando tu centro registra una certificación y esta
            queda en el perfil del trabajador, se genera el cargo.
          </p>

          <p className="font-bold text-deep-blue mb-4">Sin costo:</p>
          <ul className="space-y-3">
            {incluido.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base text-text-gray">
                <span className="w-5 h-5 rounded-full bg-connection-teal/10 flex items-center justify-center text-connection-teal shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <CtaLink
            href={URLS.registro}
            evento="registro_centro"
            origen="centros_planes"
            className="px-12 py-4 text-lg bg-deep-blue text-white font-bold rounded-full hover:bg-perfil-blue transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-center"
          >
            Registrar mi centro gratis
          </CtaLink>
          <a
            href="/aranceles1.26.pdf"
            download
            className="text-xs text-perfil-blue underline hover:text-360-yellow transition-colors mt-1"
          >
            Ver aranceles
          </a>
        </div>

      </div>
    </section>
  );
}
