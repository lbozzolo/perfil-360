import { ChevronRight, ExternalLink, FileText, ShieldCheck } from 'lucide-react';

/**
 * Inscripción de ATRACTOR TECH SAS como Prestador Integral en el Registro de
 * Prestadores 4.0 de la SRT (Nota NO-2026-93415994-APN-SITAP#SRT). Es un
 * bloque de confianza: el sello y la nota oficial respaldan el texto, así que
 * el único enlace es al documento.
 *
 * El número de registro va como etiqueta y no como botón: no lleva a ningún
 * lado y en la pieza de referencia se leía como un segundo CTA.
 */

const DOCUMENTO_OFICIAL = '/recursos/srt-registro-prestador-integral-pr-012-pi.pdf';

export default function PrestadorIntegralSRT() {
  return (
    <section id="srt" className="py-20 bg-bg-light scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border-gray bg-white shadow-soft">

          {/* Fondo: onda suave y grilla de puntos, como en la pieza original. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 w-[520px] h-[520px] rounded-full bg-connection-teal/5"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -bottom-40 w-[420px] h-[420px] rounded-full bg-perfil-blue/5"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-8 top-8 hidden md:grid grid-cols-6 gap-3"
          >
            {Array.from({ length: 18 }).map((_, i) => (
              <span key={i} className="w-1 h-1 rounded-full bg-perfil-blue/15" />
            ))}
          </div>

          <div className="relative grid lg:grid-cols-[1fr_auto] items-center gap-10 lg:gap-0 p-8 md:p-12">

            {/* Texto */}
            <div className="lg:pr-12 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg-light text-connection-teal text-xs font-bold uppercase tracking-wider mb-5">
                <ShieldCheck size={14} />
                Plataforma registrada
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-deep-blue tracking-tight">
                Prestador Integral
              </h2>
              <p className="text-2xl md:text-3xl font-semibold text-connection-teal tracking-tight mt-1 mb-6">
                Ecosistema Prevención 4.0
              </p>

              <p className="text-lg text-text-gray leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
                ATRACTOR TECH SAS, plataforma operadora de{' '}
                <strong className="text-deep-blue">CertiRed</strong>, se encuentra
                inscripta como Prestador Integral en el Ecosistema Prevención 4.0
                de la Superintendencia de Riesgos del Trabajo de la República
                Argentina.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6">
                <span className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-deep-blue text-white font-bold">
                  <FileText size={20} />
                  Registro N.º PR-012-PI
                </span>

                <a
                  href={DOCUMENTO_OFICIAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl border-2 border-deep-blue text-deep-blue font-bold hover:bg-deep-blue hover:text-white transition-colors"
                >
                  <ExternalLink size={20} />
                  Ver documento oficial
                  <ChevronRight size={18} className="transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>

              <p className="text-sm text-text-gray/80">
                Superintendencia de Riesgos del Trabajo – República Argentina
              </p>
            </div>

            {/* Sello */}
            <div className="flex justify-center lg:pl-12 lg:border-l lg:border-border-gray">
              <img
                src="/images/sello-ecosistema-prevencion-4-0.jpg"
                alt="Sello Ecosistema Prevención 4.0 de la Superintendencia de Riesgos del Trabajo"
                width={307}
                height={307}
                loading="lazy"
                className="w-56 md:w-64 h-auto rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
