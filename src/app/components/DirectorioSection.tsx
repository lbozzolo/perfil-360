import { Search } from 'lucide-react';
import { URLS } from '@/lib/site';
import CtaLink from './CtaLink';
import ContadorRegistros from './ContadorRegistros';
import MapaPresencia from './MapaPresencia';

/**
 * El bloque tenía un campo de documento que copiaba el número al portapapeles
 * antes de abrir el Directorio, porque Glide no acepta precargarlo por
 * querystring. En la prueba con el cliente el recorrido se leyó como roto: la
 * persona escribía el documento y tenía que volver a escribirlo del otro lado.
 * Queda solo el botón, que es honesto sobre lo que hace.
 */
export default function DirectorioSection() {
  return (
    <section
      id="directorio"
      className="pt-32 md:pt-52 pb-20 bg-connection-teal text-white border-y border-white/10 overflow-hidden scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Buscador y prueba de adopción */}
        <div className="flex-1 max-w-2xl relative z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-360-yellow text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
            <Search size={14} />
            Directorio público
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Consultá una certificación laboral
          </h2>

          <p className="text-gray-100 text-lg mb-8 leading-relaxed">
            Buscá a un trabajador por su número de documento y consultá las
            certificaciones laborales que tiene registradas en CertiRed.
          </p>

          <div className="mb-4">
            <CtaLink
              href={URLS.directorio}
              evento="directorio_consulta"
              origen="bloque_directorio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-360-yellow text-perfil-blue font-bold rounded-full hover:bg-yellow-400 transition-all shadow-lg shadow-yellow-500/20 hover:-translate-y-1"
            >
              <Search size={20} />
              Consultar en el Directorio
            </CtaLink>

            <p className="mt-4 text-sm text-white/80">
              La consulta es gratuita y no requiere crear una cuenta.
            </p>
          </div>

          <div className="pt-8 mt-8 border-t border-white/20">
            <ContadorRegistros />
          </div>
        </div>

        {/* Presencia territorial */}
        <div className="relative shrink-0 w-full max-w-md lg:w-[420px] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-connection-teal/20 to-360-yellow/20 rounded-full blur-3xl opacity-60" />
          <div className="relative z-10">
            <MapaPresencia />
          </div>
        </div>

      </div>
    </section>
  );
}
