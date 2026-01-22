'use client';

import { useState } from 'react';
import { Plus, Minus, BookOpen } from 'lucide-react';

export default function FAQEmpresas() {
  const faqs = [
    {
      question: "¿Esto es solo para minería/construcción?",
      answer: "No. Es para cualquier empresa que quiera controlar y verificar capacitación y competencias, tanto reglamentarias como complementarias, en cualquier industria."
    },
    {
      question: "¿Qué puedo hacer con el Plan Gratuito?",
      answer: "Podés crear 1 sucursal, vincular personas al staff y verificar competencias desde la administración, además de gestionar informes básicos sin inspectores en campo."
    },
    {
      question: "¿Cuándo necesito Plan Plus?",
      answer: "Cuando querés realizar inspecciones en campo con inspectores designados, dar acceso a mandos medios o gerencia, emitir constancias organizacionales y gestionar licitaciones de capacitación."
    },
    {
      question: "¿El Plan Plus cuánto cuesta?",
      answer: `El valor es de $${process.env.NEXT_PUBLIC_PRICE_PLAN_PLUS || '35.000'} ARS final (IVA incluido) por mes.`
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-deep-blue mb-12 text-center">Preguntas Frecuentes</h2>

        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* Manual Note */}
        <div className="bg-bg-light rounded-2xl p-8 border border-gray-200 flex flex-col md:flex-row gap-6 items-center">
             <div className="h-14 w-14 bg-deep-blue text-white rounded-full flex items-center justify-center shrink-0">
                <BookOpen size={24} />
             </div>
             <div className="text-center md:text-left">
                <h3 className="text-lg font-bold text-deep-blue mb-2">Manual de usuario incluido</h3>
                <p className="text-text-gray text-sm">
                    Perfil 360 cuenta con un manual de usuario completo para empresas. Por seguridad operativa, el manual no es público: se accede directamente desde dentro del sistema una vez que tu empresa está registrada.
                </p>
             </div>
        </div>

      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-bold text-deep-blue text-lg">{question}</span>
        {isOpen ? (
          <Minus className="text-perfil-blue shrink-0" />
        ) : (
          <Plus className="text-perfil-blue shrink-0" />
        )}
      </button>
      <div
        className={`bg-gray-50 px-6 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-48 py-6 opacity-100' : 'max-h-0 py-0 opacity-0'
        }`}
      >
        <p className="text-text-gray leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}
