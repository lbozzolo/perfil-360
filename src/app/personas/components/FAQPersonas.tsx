'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQPersonas() {
  const faqs = [
    {
      question: "¿Puedo abrir mi perfil si mi empresa o centro todavía no está?",
      answer: "Sí. Podés solicitar el alta de tu perfil personal. Luego, para que tus cursos y certificaciones figuren como verificables, deberán ser cargados por el centro o la empresa correspondiente."
    },
    {
      question: "¿Puedo cargar mis certificados yo mismo?",
      answer: "No. Para que sea verificable, la carga la realizan empresas o centros registrados, y cada uno carga únicamente lo propio."
    },
    {
      question: "Tengo una capacitación/carnet vencido, ¿qué pasa?",
      answer: "En tu perfil va a figurar como vencida con fechas. Cuando renovás con un centro, el centro registra la nueva certificación y tu perfil se actualiza."
    },
    {
      question: "¿La app es gratis, pero por qué podría haber un costo?",
      answer: "El perfil es gratuito. Si un centro cobra por la emisión/digitalización y registro de una certificación, es un arancel del centro que la valida y carga."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-deep-blue mb-12 text-center">Preguntas frecuentes</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
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
        className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-bg-light transition-colors"
      >
        <span className="font-bold text-deep-blue">{question}</span>
        {isOpen ? <ChevronUp className="text-perfil-blue" /> : <ChevronDown className="text-gray-400" />}
      </button>
      {isOpen && (
        <div className="p-6 pt-0 text-text-gray bg-white border-t border-gray-100">
          <p className="pt-4">{answer}</p>
        </div>
      )}
    </div>
  );
}
