import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';
import { URLS, BRAND } from '@/lib/site';

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-16">
      <div className="absolute inset-0 bg-gradient-to-br from-deep-blue to-connection-teal overflow-hidden -z-20">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-connection-teal/20 to-360-yellow/20 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Columna izquierda: mensaje y acciones */}
          <div className="flex-1 text-center lg:text-left z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-360-yellow animate-pulse"></span>
              <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                {BRAND.recorrido}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Tus certificaciones laborales,{' '}
              <span className="text-360-yellow">en un solo lugar.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Los centros de capacitación registran las certificaciones. Los trabajadores
              las muestran. Las empresas las consultan desde CertiRed.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href={URLS.directorio}
                target="_blank"
                className="w-full sm:w-auto px-8 py-4 bg-360-yellow text-deep-blue font-bold rounded-full hover:bg-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-360-yellow/20 hover:-translate-y-1"
              >
                <Search size={20} />
                Consultar certificaciones
              </Link>

              <Link
                href={URLS.registro}
                target="_blank"
                className="w-full sm:w-auto px-8 py-4 border-2 border-white/20 text-white font-bold rounded-full hover:border-white hover:bg-white/10 transition-all text-center hover:-translate-y-1"
              >
                Crear mi perfil
              </Link>
            </div>

            <p className="mt-8 text-sm text-gray-300 font-medium">
              ¿Sos un centro de capacitación?{' '}
              <Link
                href={URLS.registro}
                target="_blank"
                className="inline-flex items-center gap-1 text-360-yellow font-bold hover:gap-2 transition-all"
              >
                Registrar mi centro <ArrowRight size={16} />
              </Link>
            </p>
          </div>

          {/* Columna derecha: mockup */}
          <div className="hidden lg:flex w-full lg:w-auto lg:flex-none justify-center lg:justify-end relative z-10">
            <div className="relative w-[300px] md:w-[340px] h-[640px] bg-gray-900 rounded-[3rem] border-[14px] border-gray-900 shadow-2xl overflow-hidden ring-1 ring-white/10 transform rotate-[5deg] hover:rotate-0 transition-transform duration-500">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-2xl z-20" />

              <div className="w-full h-full bg-bg-light overflow-y-auto relative rounded-[2.2rem] scrollbar-hide">
                <img
                  src="/images/mockup-cel-certired.webp"
                  alt="Perfil de trabajador en la app de CertiRed"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
