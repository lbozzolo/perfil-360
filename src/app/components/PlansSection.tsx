import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

export default function PlansSection() {
  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-6 tracking-tight">
            Planes simples para sumarte al ecosistema
          </h2>
          <p className="text-lg text-text-gray font-medium">
            Empezás con un uso gratuito por tipo de actor y, cuando necesitás más volumen o herramientas avanzadas, activás un Plan Plus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto mb-16">
          {/* CECAP */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-border-gray flex flex-col hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-yellow-50 text-360-yellow text-xs font-bold uppercase tracking-wider mb-4">
                Educación
              </span>
              <h3 className="text-2xl font-bold text-deep-blue mb-2">CECAP</h3>
              <p className="text-text-gray text-sm font-medium">Para centros de formación</p>
            </div>
            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>
                <p className="text-sm text-text-gray">Perfil institucional gratuito</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-perfil-blue/10 flex items-center justify-center text-perfil-blue shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>
                <p className="text-sm text-text-gray">Plan Plus para instructores</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-perfil-blue/10 flex items-center justify-center text-perfil-blue shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>
                <p className="text-sm text-text-gray">Licitaciones e informes avanzados</p>
              </div>
            </div>
            <button className="w-full py-3 rounded-full border-2 border-border-gray text-perfil-blue font-bold hover:border-perfil-blue hover:bg-perfil-blue hover:text-white transition-all">
              Ver detalles
            </button>
          </div>

          {/* Empresas */}
          <div className="bg-white p-8 rounded-3xl shadow-card border-2 border-perfil-blue flex flex-col relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-perfil-blue text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
              Más popular
            </div>
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-perfil-blue text-xs font-bold uppercase tracking-wider mb-4">
                Corporativo
              </span>
              <h3 className="text-2xl font-bold text-deep-blue mb-2">Empresas</h3>
              <p className="text-text-gray text-sm font-medium">Para gestión de personal</p>
            </div>
            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>
                <p className="text-sm text-text-gray">Gestión básica de staff gratuita</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-perfil-blue/10 flex items-center justify-center text-perfil-blue shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>
                <p className="text-sm text-text-gray">Plan Plus para supervisión</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-perfil-blue/10 flex items-center justify-center text-perfil-blue shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>
                <p className="text-sm text-text-gray">Inspecciones y reportes</p>
              </div>
            </div>
            <button className="w-full py-3 rounded-full bg-perfil-blue text-white font-bold hover:bg-deep-blue transition-all shadow-lg shadow-perfil-blue/20">
              Empezar ahora
            </button>
          </div>

          {/* ART */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-border-gray flex flex-col hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-connection-teal text-xs font-bold uppercase tracking-wider mb-4">
                Aseguradoras
              </span>
              <h3 className="text-2xl font-bold text-deep-blue mb-2">ART</h3>
              <p className="text-text-gray text-sm font-medium">Para control de riesgos</p>
            </div>
            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>
                <p className="text-sm text-text-gray">Consulta gratuita de perfiles</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-perfil-blue/10 flex items-center justify-center text-perfil-blue shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>
                <p className="text-sm text-text-gray">Integrar inspecciones</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-perfil-blue/10 flex items-center justify-center text-perfil-blue shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>
                <p className="text-sm text-text-gray">Gestionar capacitaciones</p>
              </div>
            </div>
            <button className="w-full py-3 rounded-full border-2 border-border-gray text-perfil-blue font-bold hover:border-perfil-blue hover:bg-perfil-blue hover:text-white transition-all">
              Ver detalles
            </button>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="#" 
            className="inline-flex items-center gap-2 text-perfil-blue font-bold hover:text-connection-teal transition-colors"
          >
            Ver tabla comparativa completa
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
