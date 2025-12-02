import { GraduationCap, Building2, ClipboardCheck, User, Eye, Award, Briefcase, ArrowRight } from 'lucide-react';

export default function EcosystemSection() {
  return (
    <section className="py-20 bg-bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-perfil-blue mb-4">
            Cada actor carga datos.<br/> El trabajador conserva su historial.
          </h2>
          <p className="text-lg text-text-gray max-w-2xl mx-auto">
            Un solo Perfil 360 se alimenta con información de empresas, CECAP y ART.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto min-h-[600px] flex flex-col lg:block items-center justify-center">
          
          {/* Circular Arrows SVG (Desktop Only) */}
          <svg className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none z-0" viewBox="0 0 800 800">
            <defs>
               <marker id="arrow-head" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
                 <path d="M0,0 L12,6 L0,12 L3,6 z" fill="#E2E8F0" />
               </marker>
            </defs>
            
            {/* Circle Path connecting the items */}
            <path
              d="M400, 100 A 300, 300 0 1, 1 399, 100"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="2"
              strokeDasharray="12 12"
              className="animate-spin-slow"
              style={{ transformOrigin: 'center', animationDuration: '60s' }}
            />
            
            {/* Decorative Arcs */}
            <path d="M400 120 A 280 280 0 0 1 642 260" fill="none" stroke="#FFC52A" strokeWidth="4" strokeLinecap="round" className="opacity-20" />
            <path d="M642 540 A 280 280 0 0 1 158 540" fill="none" stroke="#007A7B" strokeWidth="4" strokeLinecap="round" className="opacity-20" />
            <path d="M158 260 A 280 280 0 0 1 400 120" fill="none" stroke="#1F455B" strokeWidth="4" strokeLinecap="round" className="opacity-20" />
          </svg>

          {/* Central Phone Mockup - Faded Bottom */}
          <div className="relative z-10 w-[240px] h-[480px] bg-white rounded-[2rem] border-[6px] border-white shadow-2xl overflow-hidden ring-1 ring-gray-200/50 mx-auto lg:absolute lg:left-1/2 lg:top-[120px] lg:-translate-x-1/2 [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-white rounded-b-lg z-20 shadow-sm" />
              
              {/* Screen Content */}
              <div className="w-full h-full bg-bg-light pt-8 pb-4 px-3 flex flex-col">
                {/* Profile Header */}
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full mb-2 border-4 border-white shadow-card overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                      <User size={28} />
                    </div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>
                  <h3 className="text-perfil-blue font-bold text-base leading-tight">Juan Pérez</h3>
                  <p className="text-text-gray text-[10px] font-medium">Operario de Montaje</p>
                  <div className="mt-2 px-2 py-1 bg-green-100 text-green-700 text-[9px] font-bold rounded-full uppercase tracking-wide flex items-center gap-1">
                    <Award size={10} /> Habilitado
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 text-center">
                    <span className="block text-[9px] text-gray-400 font-bold uppercase">Experiencia</span>
                    <span className="block text-xs font-bold text-perfil-blue">8 años</span>
                  </div>
                  <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 text-center">
                    <span className="block text-[9px] text-gray-400 font-bold uppercase">Cursos</span>
                    <span className="block text-xs font-bold text-perfil-blue">12</span>
                  </div>
                </div>

                {/* List Items */}
                <div className="space-y-2 flex-1">
                  <div className="bg-white p-2.5 rounded-lg shadow-sm border border-gray-100 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-perfil-blue shrink-0">
                      <Award size={12} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9px] text-gray-400 font-medium truncate">Última capacitación</p>
                      <p className="text-[10px] font-bold text-perfil-blue truncate">Seguridad en Altura</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-2.5 rounded-lg shadow-sm border border-gray-100 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-teal-50 flex items-center justify-center text-connection-teal shrink-0">
                      <Briefcase size={12} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9px] text-gray-400 font-medium truncate">Empleo Actual</p>
                      <p className="text-[10px] font-bold text-perfil-blue truncate">Constructora Andina</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          {/* Item 1: Capacitaciones (Top Center) */}
          <div className="mt-12 lg:mt-0 lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2 max-w-[320px] z-20">
            <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 text-center relative">
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-360-yellow rounded-full flex items-center justify-center text-perfil-blue shadow-lg border-4 border-white">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-lg font-bold text-deep-blue mb-2">Capacitaciones</h3>
              <p className="text-sm text-text-gray leading-relaxed mb-2">
                Los centros de capacitación registran cursos, resultados y certificados.
              </p>
            </div>
          </div>

          {/* Item 2: Supervisiones (Bottom Right) */}
          <div className="mt-8 lg:mt-0 lg:absolute lg:top-[220px] lg:right-[5%] max-w-[320px] z-20">
            <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 text-left relative">
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-connection-teal rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white">
                <Eye size={24} />
              </div>
              <div className="pl-4">
                <h3 className="text-lg font-bold text-deep-blue mb-2">Supervisiones</h3>
                <p className="text-sm text-text-gray leading-relaxed">
                  Supervisores internos y externos documentan observaciones y vigencias.
                </p>
              </div>
            </div>
          </div>

          {/* Item 3: Empresa y puesto (Bottom Left) */}
          <div className="mt-8 lg:mt-0 lg:absolute lg:top-[220px] lg:left-[5%] max-w-[320px] z-20">
            <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 text-right relative">
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-perfil-blue rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white">
                <Building2 size={24} />
              </div>
              <div className="pr-4">
                <h3 className="text-lg font-bold text-deep-blue mb-2">Empresa y puesto</h3>
                <p className="text-sm text-text-gray leading-relaxed">
                  Las empresas vinculan al trabajador a sucursales, puestos y áreas.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
