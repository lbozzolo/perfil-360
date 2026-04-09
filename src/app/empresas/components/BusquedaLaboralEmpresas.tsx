'use client';

import Image from 'next/image';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const registroUrl = process.env.NEXT_PUBLIC_REGISTRO_URL || 'https://registro.perfil360.com.ar';

export default function BusquedaLaboralEmpresas() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left Column - Text & CTA */}
          <div className="flex-1 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-6 leading-tight">
              ¿Estás buscando trabajadores capacitados?
            </h2>
            <p className="text-lg md:text-xl text-text-gray mb-8 max-w-xl leading-relaxed">
              Iniciá una búsqueda laboral hoy y recibí postulaciones de trabajadores capacitados.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={22} className="text-green-600 shrink-0" />
                <span className="text-deep-blue font-semibold">Competencias verificadas</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={22} className="text-green-600 shrink-0" />
                <span className="text-deep-blue font-semibold">Búsqueda por especialidad</span>
              </div>
            </div>

            <a
              href={registroUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-360-yellow text-deep-blue font-bold rounded-full hover:bg-deep-blue hover:text-white transition-all shadow-md hover:shadow-lg text-lg transform hover:-translate-y-0.5"
            >
              Registrá tu empresa <ArrowRight size={20} />
            </a>
          </div>

          {/* Right Column - Image */}
          <div className="w-full lg:w-[55%]">
            <Image
              src="/images/buscar-trabajador.webp"
              alt="Búsqueda de trabajadores capacitados - Plataforma Certired"
              width={800}
              height={800}
              className="w-full h-auto rounded-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
