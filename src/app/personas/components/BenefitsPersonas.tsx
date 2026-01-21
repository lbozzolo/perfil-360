'use client';

import { FileX, ShieldCheck, Clock, Share2, UserCheck } from 'lucide-react';

export default function BenefitsPersonas() {
  const cards = [
    {
      icon: <FileX size={32} className="text-perfil-blue" />,
      title: "Todo en un solo lugar",
      text: "Tu perfil concentra cursos, certificaciones y datos profesionales relevantes, sin carpetas ni PDFs dispersos.",
    },
    {
      icon: <ShieldCheck size={32} className="text-perfil-blue" />,
      title: "Verificable por empresas",
      text: "Lo que figura en tu perfil no es “autodeclarado”: está cargado por el centro o la empresa correspondiente.",
    },
    {
      icon: <Clock size={32} className="text-perfil-blue" />,
      title: "Vigencias claras",
      text: "Ves tus cursos y certificados con estado vigente / por vencer / vencido, para saber dónde estás parado sin adivinar.",
    },
    {
      icon: <Share2 size={32} className="text-perfil-blue" />,
      title: "Compartí cuando convenga",
      text: "Podés compartir el enlace de tu perfil y, si necesitás evidencia puntual, descargar certificados.",
    },
    {
      icon: <UserCheck size={32} className="text-perfil-blue" />,
      title: "Perfil personal",
      text: "Es tuyo. Te acompaña aunque cambies de proyecto, empresa o provincia.",
    }
  ];

  return (
    <section className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Problema y promesa */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-6">
            Se terminó el “¿dónde quedó el certificado?”
          </h2>
          <p className="text-xl text-text-gray">
            El papel tiene un superpoder: desaparecer justo cuando lo necesitás. <strong>Perfil 360</strong> lo neutraliza. Tus capacitaciones quedan <strong>registradas y ordenadas</strong>, con vigencias claras y respaldo institucional.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="p-8 bg-bg-light rounded-2xl md:hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-deep-blue mb-4">{card.title}</h3>
              <p className="text-text-gray leading-relaxed">{card.text}</p>
            </div>
          ))}

          {/* Image Card - Matching Home Layout */}
          <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden group shadow-lg border border-gray-100">
            <img 
              src="/images/4.1.webp" 
              alt="Seguridad laboral" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/90 via-deep-blue/20 to-transparent flex items-end p-8">
               <p className="text-white font-bold text-xl leading-tight">
                 Tu documentación segura y disponible 24/7
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
