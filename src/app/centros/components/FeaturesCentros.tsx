import { CheckCircle2 } from 'lucide-react';

/**
 * La tarjeta del Plan Plus se retiró el 2026-08-12 por decisión del cliente:
 * durante esta etapa no se comunican planes. Queda una sola columna con lo que
 * el centro puede hacer.
 */
const funciones = [
  'Registro del centro y configuración del perfil institucional.',
  'Gestión del directorio de trabajadores.',
  'Gestión interna de cursos (reglamentarios o complementarios).',
  'Alta y vinculación de certificaciones al perfil del trabajador (genera cargo por certificación; ver precios).',
  'Panel operativo de seguimiento de certificaciones y vencimientos.',
];

export default function FeaturesCentros() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
            Qué podés hacer dentro de CertiRed
          </h2>
        </div>

        <div className="bg-bg-light rounded-3xl p-8 md:p-10 border border-border-gray">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-white rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-connection-teal" />
            </div>
            <h3 className="text-xl font-bold text-deep-blue">
              Con tu centro registrado
            </h3>
          </div>

          <ul className="space-y-4">
            {funciones.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-perfil-blue mt-2.5 shrink-0"></span>
                <span className="text-text-gray leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
