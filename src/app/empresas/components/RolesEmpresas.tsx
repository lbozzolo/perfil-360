'use client';

import { Shield, UserCog, Binoculars, Lock, CheckCircle2 } from 'lucide-react';

export default function RolesEmpresas() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deep-blue/5 text-deep-blue text-sm font-bold mb-6">
            <Lock size={16} /> CONTROL DE ACCESO
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-6">
            Un gatekeeper y permisos por rol
          </h2>
          <p className="text-lg text-text-gray max-w-2xl mx-auto">
            Definí quién opera, quién inspecciona y quién verifica. Perfil 360 ordena la seguridad de tu información con roles claros.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Card 1: Administrador (The Owner) */}
            <div className="group bg-white rounded-2xl p-0 shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mt-4 lg:mt-0">
                {/* ID Header */}
                <div className="h-3 bg-deep-blue w-full"></div>
                <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                        <div className="h-16 w-16 bg-deep-blue rounded-xl flex items-center justify-center text-white shadow-lg shadow-deep-blue/20">
                            <UserCog size={32} />
                        </div>
                        <span className="px-3 py-1 bg-deep-blue text-white text-[10px] font-bold uppercase tracking-wider rounded-md">
                            Acceso Total
                        </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-deep-blue mb-1">Administrador</h3>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-6">RR.HH. / H&S / Admin</p>
                    
                    <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                            <p className="text-xs font-bold text-gray-400 uppercase mb-2">En Plan Gratuito</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-sm text-gray-700">
                                    <CheckCircle2 size={16} className="text-deep-blue mt-0.5 shrink-0" />
                                    <span>Crear una sucursal.</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-700">
                                    <CheckCircle2 size={16} className="text-deep-blue mt-0.5 shrink-0" />
                                    <span>Vincular trabajadores al staff.</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-700">
                                    <CheckCircle2 size={16} className="text-deep-blue mt-0.5 shrink-0" />
                                    <span>Verificar competencias desde admin.</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-700">
                                    <CheckCircle2 size={16} className="text-deep-blue mt-0.5 shrink-0" />
                                    <span>Gestionar informes de inspección.</span>
                                </li>
                            </ul>
                        </div>
                         <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                            <p className="text-xs font-bold text-perfil-blue uppercase mb-2">En Plan Plus</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-sm text-gray-700">
                                    <CheckCircle2 size={16} className="text-perfil-blue mt-0.5 shrink-0" />
                                    <span>Habilitar roles y accesos avanzados.</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-700">
                                    <CheckCircle2 size={16} className="text-perfil-blue mt-0.5 shrink-0" />
                                    <span>Operar licitaciones y constancias.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card 2: Inspector (The Operator) */}
            <div className="group bg-white rounded-2xl p-0 shadow-lg border border-gray-100 overflow-visible hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative mt-4 lg:mt-0">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="px-4 py-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-xs font-bold rounded-full shadow-md border border-yellow-300 tracking-wider">PLAN PLUS</span>
                </div>
                {/* ID Header */}
                <div className="h-3 bg-360-yellow w-full rounded-t-2xl"></div>
                
                <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                        <div className="h-16 w-16 bg-360-yellow rounded-xl flex items-center justify-center text-deep-blue shadow-lg shadow-yellow-500/20">
                            <Shield size={32} />
                        </div>
                        <span className="px-3 py-1 bg-yellow-50 text-yellow-700 border border-yellow-100 text-[10px] font-bold uppercase tracking-wider rounded-md">
                            Operativo
                        </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-deep-blue mb-1">Inspector</h3>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-6">Supervisor de Campo</p>
                    
                     <div className="bg-yellow-50/50 p-4 rounded-xl border border-yellow-100 mb-2"> 
                         <p className="text-xs font-bold text-yellow-700 uppercase mb-2">Enfoque: Evidencia</p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-sm text-gray-700">
                                <CheckCircle2 size={16} className="text-360-yellow mt-0.5 shrink-0" />
                                <span>Accede a sucursal(es) y staff asignado.</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-gray-700">
                                <CheckCircle2 size={16} className="text-360-yellow mt-0.5 shrink-0" />
                                <span>Ingresa a trabajadores, revisa competencias.</span>
                            </li>
                             <li className="flex items-start gap-3 text-sm text-gray-700">
                                <CheckCircle2 size={16} className="text-360-yellow mt-0.5 shrink-0" />
                                <span><strong>Realiza inspecciones en campo</strong> y genera informes.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Card 3: Gerencia (The Viewer) */}
            <div className="group bg-white rounded-2xl p-0 shadow-lg border border-gray-100 overflow-visible hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative mt-4 lg:mt-0">
                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="px-4 py-1.5 bg-gradient-to-r from-gray-500 to-gray-600 text-white text-xs font-bold rounded-full shadow-md border border-gray-400 tracking-wider">PLAN PLUS</span>
                </div>
                {/* ID Header */}
                <div className="h-3 bg-gray-400 w-full rounded-t-2xl"></div>
                
                <div className="p-8">
                     <div className="flex justify-between items-start mb-6">
                        <div className="h-16 w-16 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 shadow-inner">
                            <Binoculars size={32} />
                        </div>
                         <span className="px-3 py-1 bg-gray-50 text-gray-500 border border-gray-200 text-[10px] font-bold uppercase tracking-wider rounded-md">
                            Visualizador
                        </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-deep-blue mb-1">Gerencia</h3>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-6">Mandos Medios / Directivos</p>
                    
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <p className="text-xs font-bold text-gray-400 uppercase mb-2">Visibilidad</p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-sm text-gray-600">
                                <CheckCircle2 size={16} className="text-gray-400 mt-0.5 shrink-0" />
                                <span>Ver sucursal(es) asignada(s).</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-gray-600">
                                <CheckCircle2 size={16} className="text-gray-400 mt-0.5 shrink-0" />
                                <span>Ver listado de trabajadores asignados.</span>
                            </li>
                             <li className="flex items-start gap-3 text-sm text-gray-600">
                                <CheckCircle2 size={16} className="text-gray-400 mt-0.5 shrink-0" />
                                <span>Revisar competencias/certificaciones.</span>
                            </li>
                             <li className="flex items-start gap-3 text-sm text-gray-600">
                                <CheckCircle2 size={16} className="text-gray-400 mt-0.5 shrink-0" />
                                <span>Ver informes de inspección del staff.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}
