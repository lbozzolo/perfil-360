'use client';

import { FileX, ShieldCheck, Zap } from 'lucide-react';

export default function ProblemPromiseCentros() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        <div className="flex justify-center gap-6 mb-8 text-perfil-blue/30">
            <FileX size={40} className="stroke-[1.5]" />
            <ShieldCheck size={40} className="stroke-[1.5]" />
            <Zap size={40} className="stroke-[1.5]" />
        </div>

        <h2 className="text-3xl lg:text-5xl font-bold text-deep-blue mb-6 leading-tight">
          Menos “archivos sueltos”. Más evidencia verificable y trazable.
        </h2>
        
        <p className="text-xl text-gray-600 leading-relaxed mb-6">
          En la práctica, los certificados se mueven por correo, WhatsApp y carpetas: se duplican, se pierden, se vencen y nadie lo ve a tiempo. <strong>Perfil 360</strong> ordena el ciclo completo: tu centro deja constancia institucional, el alumno conserva su perfil personal y las empresas verifican vigencias y evidencia sin perseguir documentos.
        </p>

        <p className="text-xl text-deep-blue font-semibold leading-relaxed">
          El PDF se reenvía mil veces. La competencia queda registrada una sola vez.
        </p>
      </div>
    </section>
  );
}
