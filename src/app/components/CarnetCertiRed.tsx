import { Check, Nfc, QrCode, Smartphone } from 'lucide-react';
import CarnetFlip from './CarnetFlip';

/**
 * Punto 8 de la propuesta. Presenta las dos versiones del carnet físico.
 * Es un bloque puramente informativo: no lleva CTA ni botones, la conversión
 * sigue ocurriendo en los bloques de trabajadores y centros.
 *
 * Las tres credenciales son los renders de diseño recortados de la pieza
 * original (public/images/carnet-*.webp), con las esquinas ya redondeadas
 * en el propio archivo. El carnet plástico se muestra en una sola pieza que
 * gira para revelar el dorso (ver CarnetFlip).
 */

const carnetPlastico = {
  frente: {
    src: '/images/carnet-frente.webp',
    alt: 'Frente del carnet plástico de CertiRed con foto, nombre e ID',
  },
  dorso: {
    src: '/images/carnet-dorso.webp',
    alt: 'Dorso del carnet plástico de CertiRed con el QR de verificación',
  },
  ancho: 272,
  alto: 361,
};

const beneficiosPlastico = [
  'QR de verificación',
  'Mostrá tus cursos vinculados',
  'Carnet sin vencimiento',
  'Incluye porta credencial y correa',
];

const beneficiosNfc = [
  { texto: 'Chip NFC (acercá tu celular)', destacado: true },
  { texto: 'QR de verificación', destacado: false },
  { texto: 'Mostrá tus cursos vinculados', destacado: false },
  { texto: 'Carnet sin vencimiento', destacado: false },
  { texto: 'Incluye porta credencial y correa', destacado: false },
];

const comoSeUsa = [
  {
    icono: QrCode,
    titulo: 'Escaneá el QR',
    texto: 'Funciona en cualquier celular, sin necesidad de apps.',
  },
  {
    icono: Nfc,
    titulo: 'Acercá tu celular',
    texto: 'Solo en la versión NFC. Rápido y práctico.',
  },
  {
    icono: Smartphone,
    titulo: 'Siempre actualizado',
    texto: 'Tu perfil se actualiza en CertiRed, sin cambiar el carnet.',
  },
];

export default function CarnetCertiRed() {
  return (
    <section id="carnet" className="py-24 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-deep-blue tracking-tight mb-4">
            Tu Carnet <span className="text-perfil-blue">Certi</span>
            <span className="text-360-yellow">Red</span>
          </h2>
          <p className="text-lg text-text-gray leading-relaxed">
            Elegí la opción que mejor se adapte a vos y llevá tus certificaciones
            siempre con vos.
          </p>
        </div>

        {/* Opciones */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">

          {/* Opción 1: carnet plástico */}
          <div className="rounded-3xl border border-border-gray bg-bg-light/60 p-6 md:p-8">
            <span className="inline-block px-3 py-1 rounded-full bg-white text-perfil-blue text-xs font-bold uppercase tracking-wider mb-5">
              Opción 1
            </span>

            <h3 className="text-2xl md:text-3xl font-bold text-deep-blue tracking-tight">
              Carnet plástico
            </h3>
            <p className="text-base text-text-gray mb-8">Con QR de verificación</p>

            <div className="mb-8">
              <CarnetFlip {...carnetPlastico} />
            </div>

            {/* En sm+ se leen por columna, como en el diseño de referencia. */}
            <ul className="grid sm:grid-cols-2 sm:grid-rows-[auto_auto] sm:grid-flow-col items-start gap-x-6 gap-y-3">
              {beneficiosPlastico.map((beneficio) => (
                <li
                  key={beneficio}
                  className="flex items-start gap-2.5 text-base text-text-gray font-medium"
                >
                  <span className="w-5 h-5 rounded-full bg-perfil-blue flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-white" strokeWidth={3} />
                  </span>
                  <span>{beneficio}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Opción 2: carnet NFC */}
          <div className="rounded-3xl border-2 border-360-yellow bg-360-yellow/5 p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <span className="inline-block px-3 py-1 rounded-full bg-360-yellow text-deep-blue text-xs font-bold uppercase tracking-wider">
                Opción 2
              </span>
              <span className="inline-block px-3 py-1 rounded-full bg-360-yellow text-deep-blue text-xs font-bold uppercase tracking-wider">
                Más práctico
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-deep-blue tracking-tight">
              Carnet plástico NFC
            </h3>
            <p className="text-base text-text-gray mb-8">Con QR y chip NFC</p>

            <img
              src="/images/carnet-nfc.webp"
              alt="Carnet plástico NFC de CertiRed con foto, QR y chip sin contacto"
              width={440}
              height={269}
              loading="lazy"
              className="w-full max-w-[440px] mx-auto h-auto block rounded-2xl shadow-card mb-8"
            />

            <ul className="space-y-3">
              {beneficiosNfc.map(({ texto, destacado }) => (
                <li
                  key={texto}
                  className="flex items-start gap-2.5 text-base text-text-gray font-medium"
                >
                  <span className="w-5 h-5 rounded-full bg-360-yellow flex items-center justify-center shrink-0 mt-0.5">
                    {destacado ? (
                      <Nfc size={12} className="text-deep-blue" strokeWidth={3} />
                    ) : (
                      <Check size={12} className="text-deep-blue" strokeWidth={3} />
                    )}
                  </span>
                  <span className={destacado ? 'text-deep-blue font-bold' : undefined}>
                    {texto}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Cómo se usa */}
        <div className="mt-6 lg:mt-8 rounded-3xl border border-border-gray bg-bg-light/60 p-6 md:p-10">
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {comoSeUsa.map(({ icono: Icono, titulo, texto }) => (
              <div key={titulo} className="flex items-start gap-4">
                <span className="w-12 h-12 rounded-2xl bg-white border border-border-gray flex items-center justify-center text-perfil-blue shrink-0">
                  <Icono size={24} />
                </span>
                <div>
                  <h4 className="text-base font-bold text-deep-blue mb-1">{titulo}</h4>
                  <p className="text-sm text-text-gray leading-relaxed">{texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
