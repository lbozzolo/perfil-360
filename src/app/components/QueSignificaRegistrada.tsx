import { FileCheck } from 'lucide-react';

/**
 * Punto 7 de la propuesta. Aclara el alcance de CertiRed sin darle
 * protagonismo: es una nota de confianza, no un bloque comercial.
 */
export default function QueSignificaRegistrada() {
  return (
    <section className="py-16 bg-bg-light">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="bg-white rounded-3xl border border-border-gray p-8 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-full bg-bg-light flex items-center justify-center text-connection-teal shrink-0">
              <FileCheck size={20} />
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-deep-blue">
              Qué significa una certificación registrada
            </h2>
          </div>

          <p className="text-base text-text-gray leading-relaxed mb-4">
            CertiRed permite consultar información registrada por centros de
            capacitación. Cada centro es responsable por las certificaciones que
            emite o valida dentro de la plataforma.
          </p>

          <p className="text-base text-text-gray leading-relaxed">
            CertiRed aporta registro, trazabilidad y acceso a la información, sin
            reemplazar al organismo o institución emisora de cada certificación.
          </p>
        </div>
      </div>
    </section>
  );
}
