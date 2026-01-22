'use client';

import { ShieldAlert, BookOpen } from 'lucide-react';

export default function TrainingTypesCentros() {
  return (
    <section className="py-20 bg-deep-blue text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Dos categorías para que la trazabilidad sea real
            </h2>
            {/* <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                (y se entienda en auditorías)
            </p> */}
             <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
                Perfil 360 permite clasificar cursos de dos maneras: <br/>capacitaciones reglamentarias y capacitaciones complementarias.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Reglamentarias */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                    <div className="bg-red-500/20 p-4 rounded-2xl">
                         <ShieldAlert className="w-10 h-10 text-red-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Capacitaciones reglamentarias <br/><span className="text-red-400 text-lg font-medium">(con vigencia)</span></h3>
                </div>
                
                <div className="space-y-6">
                    <div>
                        <h4 className="text-360-yellow font-bold uppercase text-sm tracking-wider mb-2">Qué son:</h4>
                        <p className="text-gray-300 leading-relaxed">
                            Capacitaciones exigidas por normativa o por sistemas de higiene y seguridad laboral, asociadas a tareas de riesgo o requisitos periódicos (no necesariamente anuales).
                        </p>
                    </div>
                    <div>
                        <h4 className="text-360-yellow font-bold uppercase text-sm tracking-wider mb-2">Cómo se gestionan:</h4>
                        <ul className="text-gray-300 space-y-2 list-disc pl-5">
                            <li>Se marca el curso como <strong>Reglamentaria</strong>.</li>
                            <li>Se define una vigencia eligiendo un período entre 1 y 12 meses, según la exigencia aplicable.</li>
                            <li>En el perfil del alumno se ve: fecha de emisión, fecha de vencimiento y estado.</li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="text-360-yellow font-bold uppercase text-sm tracking-wider mb-2">Documentación adicional:</h4>
                        <p className="text-gray-300 leading-relaxed text-sm italic border-l-2 border-white/20 pl-3">
                            Aunque tenga vencimiento, podés adjuntar documentación que queda asociada al registro (certificado, informe técnico, carnet adicional, etc.). La vigencia se renueva cuando corresponde; la evidencia histórica queda.
                        </p>
                    </div>
                </div>
            </div>

             {/* Complementarias */}
             <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                    <div className="bg-green-500/20 p-4 rounded-2xl">
                         <BookOpen className="w-10 h-10 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Capacitaciones complementarias <br/><span className="text-green-400 text-lg font-medium">(sin vencimiento)</span></h3>
                </div>
                
                <div className="space-y-6">
                    <div>
                        <h4 className="text-360-yellow font-bold uppercase text-sm tracking-wider mb-2">Qué son:</h4>
                        <p className="text-gray-300 leading-relaxed">
                            Formación que aporta valor profesional pero no responde a una exigencia periódica por tareas de alto riesgo (ej.: informática, talleres complementarios, etc.).
                        </p>
                    </div>
                    <div>
                        <h4 className="text-360-yellow font-bold uppercase text-sm tracking-wider mb-2">Cómo se gestionan:</h4>
                        <ul className="text-gray-300 space-y-2 list-disc pl-5">
                            <li>Se marca como <strong>Complementaria</strong>.</li>
                            <li>Se registra sin fecha de vencimiento.</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

         <div className="mt-12 text-center p-6 bg-perfil-blue/20 rounded-xl border border-perfil-blue/30 max-w-3xl mx-auto">
            <p className="text-xl font-bold text-white">
                Reglamentaria = vigencia y renovación. <br className="md:hidden"/> Complementaria = registro permanente sin vencimiento.
            </p>
        </div>

      </div>
    </section>
  );
}
