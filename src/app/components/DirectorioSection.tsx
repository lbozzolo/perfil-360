'use client';

import { useState } from 'react';
import { Search, ShieldCheck, User, CheckCircle2, ExternalLink } from 'lucide-react';
import { buildDirectorioUrl } from '@/lib/site';
import ContadorRegistros from './ContadorRegistros';

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

        {/* Tarjeta de ejemplo */}
        <div className="relative shrink-0 w-full max-w-md lg:w-[450px] h-[280px] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-connection-teal/20 to-360-yellow/20 rounded-full blur-3xl opacity-60" />

          {/* Tarjeta de fondo */}
          <div className="absolute top-0 right-8 w-full max-w-[320px] bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-white/50 shadow-sm transform rotate-6 scale-90 opacity-60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full" />
              <div className="space-y-2 flex-1">
                <div className="h-3 bg-gray-200 rounded w-3/4" />
                <div className="h-2 bg-gray-200 rounded w-1/2" />
              </div>
            </div>
          </div>

          {/* Tarjeta del medio */}
          <div className="absolute top-4 right-4 w-full max-w-[320px] bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-white/50 shadow-md transform rotate-3 scale-95 opacity-80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full" />
              <div className="space-y-2 flex-1">
                <div className="h-3 bg-gray-200 rounded w-3/4" />
                <div className="h-2 bg-gray-200 rounded w-1/2" />
              </div>
            </div>
          </div>

          {/* Tarjeta principal */}
          <div className="absolute top-8 right-0 w-full max-w-[340px] bg-white p-5 rounded-2xl border border-white shadow-xl">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-perfil-blue border-2 border-white shadow-sm">
                  <User size={24} />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-perfil-blue">Roberto Gómez</h3>
                  <p className="text-xs text-text-gray">Operador de maquinaria</p>
                </div>
              </div>
              <div className="bg-teal-50 text-connection-teal px-2 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 uppercase tracking-wide text-center leading-tight">
                <ShieldCheck size={12} className="shrink-0" /> Registrada
              </div>
            </div>

            <div className="space-y-2 bg-bg-light p-3 rounded-xl border border-gray-100">
              <div className="flex items-center justify-between gap-2 text-sm">
                <span className="text-gray-500 text-xs">Centro emisor</span>
                <span className="font-bold text-perfil-blue text-xs text-right">
                  CECAP Córdoba
                </span>
              </div>
              <div className="flex items-center justify-between gap-2 text-sm">
                <span className="text-gray-500 text-xs">Certificación</span>
                <span className="font-bold text-connection-teal text-xs flex items-center gap-1 text-right">
                  <CheckCircle2 size={12} className="shrink-0" /> Seguridad vial
                </span>
              </div>
              <div className="flex items-center justify-between gap-2 text-sm">
                <span className="text-gray-500 text-xs">Vigencia</span>
                <span className="font-bold text-perfil-blue text-xs">
                  Hasta 03/2027
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
