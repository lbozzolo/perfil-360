import Link from 'next/link';
const directorioUrl = process.env.NEXT_PUBLIC_DIRECTORIO_URL || 'https://directorio.perfil360.com.ar';
import { Search, ShieldCheck, User, CheckCircle2 } from 'lucide-react';

export default function DirectoryBanner() {
  return (
    <section className="py-20 bg-connection-teal text-white border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div className="flex-1 max-w-2xl relative z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-360-yellow text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
            <Search size={14} />
            Buscador Público
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Directorio de trabajadores capacitados
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Accedé al directorio público para buscar personas por nombre, DNI o empresa y verificar en segundos si tienen Perfil 360 activo y documentación al día.
          </p>
          
          <Link 
            href={directorioUrl}
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 bg-360-yellow text-perfil-blue font-bold rounded-full hover:bg-yellow-400 transition-all shadow-lg shadow-yellow-500/20 hover:-translate-y-1"
          >
            <Search size={20} />
            Verificar perfil laboral
          </Link>
        </div>
        
        {/* Graphic / Illustration */}
        <div className="relative shrink-0 w-full max-w-md lg:w-[450px] h-[280px] flex items-center justify-center">
          {/* Decorative background blob */}
          <div className="absolute inset-0 bg-gradient-to-tr from-connection-teal/20 to-360-yellow/20 rounded-full blur-3xl opacity-60 animate-pulse" />
          
          {/* Card 1 (Back) */}
          <div className="absolute top-0 right-8 w-full max-w-[320px] bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-white/50 shadow-sm transform rotate-6 scale-90 opacity-60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full" />
              <div className="space-y-2 flex-1">
                <div className="h-3 bg-gray-200 rounded w-3/4" />
                <div className="h-2 bg-gray-200 rounded w-1/2" />
              </div>
            </div>
          </div>

          {/* Card 2 (Middle) */}
          <div className="absolute top-4 right-4 w-full max-w-[320px] bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-white/50 shadow-md transform rotate-3 scale-95 opacity-80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full" />
              <div className="space-y-2 flex-1">
                <div className="h-3 bg-gray-200 rounded w-3/4" />
                <div className="h-2 bg-gray-200 rounded w-1/2" />
              </div>
            </div>
          </div>

          {/* Main Card (Front) */}
          <div className="absolute top-8 right-0 w-full max-w-[340px] bg-white p-5 rounded-2xl border border-white shadow-xl transform hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-perfil-blue border-2 border-white shadow-sm">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-perfil-blue">Roberto Gómez</h4>
                  <p className="text-xs text-text-gray">Operador de Maquinaria</p>
                </div>
              </div>
              <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 uppercase tracking-wide">
                <ShieldCheck size={12} /> Verificado
              </div>
            </div>
            
            <div className="space-y-2 bg-bg-light p-3 rounded-xl border border-gray-100">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 text-xs">Empresa actual</span>
                <span className="font-bold text-perfil-blue text-xs">Constructora Norte</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 text-xs">Última capacitación</span>
                <span className="font-bold text-connection-teal text-xs flex items-center gap-1">
                  <CheckCircle2 size={12} /> Seguridad Vial
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
