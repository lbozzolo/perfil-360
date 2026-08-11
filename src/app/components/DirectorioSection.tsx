'use client';

import { useState } from 'react';
import { Search, CheckCircle2, ExternalLink } from 'lucide-react';
import { buildDirectorioUrl } from '@/lib/site';
import ContadorRegistros from './ContadorRegistros';
import MapaPresencia from './MapaPresencia';

export default function DirectorioSection() {
  const [documento, setDocumento] = useState('');
  const [copiado, setCopiado] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const limpio = documento.replace(/\D/g, '');

    // El Directorio (Glide) no acepta el documento por querystring, así que lo
    // dejamos en el portapapeles para que se pegue de una en su buscador.
    if (limpio) {
      try {
        await navigator.clipboard.writeText(limpio);
        setCopiado(true);
      } catch {
        // Sin permiso de portapapeles: seguimos igual, solo abrimos el Directorio.
      }
    }

    window.open(buildDirectorioUrl(limpio), '_blank', 'noopener,noreferrer');
  }

  return (
    <section
      id="directorio"
      className="py-20 bg-connection-teal text-white border-y border-white/10 overflow-hidden scroll-mt-28"
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
            Ingresá el número de documento de un trabajador y consultá las
            certificaciones laborales registradas en CertiRed.
          </p>

          <form onSubmit={handleSubmit} className="mb-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="documento" className="sr-only">
                Número de documento
              </label>
              <input
                id="documento"
                name="documento"
                type="text"
                inputMode="numeric"
                autoComplete="off"
                placeholder="Número de documento"
                value={documento}
                onChange={(e) => {
                  setDocumento(e.target.value);
                  setCopiado(false);
                }}
                className="flex-1 px-6 py-4 rounded-full bg-white text-deep-blue placeholder:text-gray-400 font-medium outline-none ring-2 ring-transparent focus:ring-360-yellow transition-all"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-360-yellow text-perfil-blue font-bold rounded-full hover:bg-yellow-400 transition-all shadow-lg shadow-yellow-500/20 hover:-translate-y-1 flex items-center justify-center gap-2 shrink-0"
              >
                <Search size={20} />
                Consultar en el Directorio
              </button>
            </div>

            <p className="mt-3 text-sm text-white/80 flex items-center justify-center lg:justify-start gap-1.5">
              {copiado ? (
                <>
                  <CheckCircle2 size={15} className="text-360-yellow shrink-0" />
                  Copiamos el documento: pegalo en el buscador del Directorio.
                </>
              ) : (
                <>
                  <ExternalLink size={15} className="shrink-0" />
                  El Directorio se abre en una pestaña nueva. La consulta es
                  gratuita y no requiere crear una cuenta.
                </>
              )}
            </p>
          </form>

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
