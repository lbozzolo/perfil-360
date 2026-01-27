'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  Building2, 
  FileCheck, 
  ShieldCheck, 
  Users, 
  ClipboardCheck, 
  Search, 
  UserCheck, 
  Quote,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    role: "Director – Centro de Capacitación Técnica",
    quote: "Antes no teníamos una visión clara de qué capacitaciones estaban vigentes y cuáles vencían. Hoy, con Perfil 360, podemos anticiparnos, notificar a las personas y mantener los registros siempre actualizados. La trazabilidad nos permitió profesionalizar la gestión y mejorar la calidad del servicio que brindamos.",
    color: "text-perfil-blue",
    bg: "bg-blue-50",
    category: "Gestión y vigencias"
  },
  {
    id: 2,
    name: "Ana Martínez",
    role: "Responsable Académico – Centro de Formación Profesional",
    quote: "Muchas veces los trabajadores nos pedían certificados que habían perdido o deteriorado. Con la digitalización en Perfil 360, cada persona tiene un respaldo permanente de su historial de capacitación. Eso les da seguridad, y a nosotros nos posiciona como un centro más confiable y profesional frente a las empresas.",
    color: "text-360-yellow",
    bg: "bg-yellow-50",
    category: "Digitalización y respaldo"
  },
  {
    id: 3,
    name: "Javier López",
    role: "Técnico en Higiene y Seguridad Laboral",
    quote: "El mayor desafío siempre fue verificar si cada persona estaba realmente preparada para su puesto. Perfil 360 nos permite ver la formación, las evaluaciones y la vigencia de cada capacitación en un solo lugar. Eso eleva el estándar de control y mejora la prevención en el trabajo.",
    color: "text-connection-teal",
    bg: "bg-teal-50",
    category: "Control de competencia"
  },
  {
    id: 4,
    name: "María Fernández",
    role: "Gerente de Recursos Humanos – Empresa Industrial",
    quote: "La digitalización dentro de un ecosistema laboral nos dio algo clave: información confiable. Hoy podemos analizar brechas de capacitación, planificar formaciones según necesidades reales y trabajar sobre el desempeño con datos concretos, no con suposiciones.",
    color: "text-perfil-blue",
    bg: "bg-gray-100",
    category: "Planificación y desempeño"
  },
  {
    id: 5,
    name: "Roberto Sánchez",
    role: "Analista de Prevención – Aseguradora de Riesgos del Trabajo",
    quote: "La integración de nuestros inspectores a Perfil 360 nos permite ingresar a las sucursales de nuestros clientes y verificar, en el momento, la preparación del personal. Cada inspección deja un registro claro, con devoluciones concretas y reportes que fortalecen la gestión preventiva.",
    color: "text-connection-teal",
    bg: "bg-teal-50",
    category: "Inspecciones e informes"
  },
  {
    id: 6,
    name: "Laura Díaz",
    role: "Consultor en Gestión Laboral",
    quote: "Acceder a perfiles verificados cambia la forma de auditar. La información está ordenada, respaldada y disponible. Perfil 360 reduce tiempos, elimina dudas y aporta trazabilidad real a los procesos de control.",
    color: "text-360-yellow",
    bg: "bg-yellow-50",
    category: "Auditoría externa"
  },
  {
    id: 7,
    name: "Miguel Ángel Torres",
    role: "Operador de Maquinaria / Técnico de Campo",
    quote: "Antes mi experiencia quedaba en el currículum o en papeles sueltos. Hoy tengo un perfil que muestra mi formación y mi trayectoria de forma clara y verificable. Perfil 360 me da visibilidad, respaldo y más oportunidades laborales.",
    color: "text-perfil-blue",
    bg: "bg-blue-50",
    category: "Impacto profesional"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsToShow, setItemsToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(3);
      } else if (window.innerWidth >= 768) {
        setItemsToShow(2);
      } else {
        setItemsToShow(1);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = testimonials.length - itemsToShow;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, itemsToShow]);

  const maxIndex = Math.max(0, testimonials.length - itemsToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-6 tracking-tight">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-lg text-text-gray font-medium max-w-2xl mx-auto">
            Actores de todo el ecosistema ya están transformando su gestión con Perfil 360.
          </p>
        </div>

        <div className="relative px-4 md:px-12">
          {/* Navigation Buttons (Absolute positioned) */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full border border-border-gray bg-white text-text-gray hover:bg-perfil-blue hover:text-white hover:border-perfil-blue transition-all shadow-sm"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full border border-border-gray bg-white text-text-gray hover:bg-perfil-blue hover:text-white hover:border-perfil-blue transition-all shadow-sm"
            aria-label="Siguiente"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Container */}
          <div 
            className="overflow-hidden px-2 md:px-4 -mx-2 md:-mx-4"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`
              }}
            >
              {testimonials.map((item) => (
                <div 
                  key={item.id} 
                  className="flex-shrink-0 px-2 md:px-4"
                  style={{ width: `${100 / itemsToShow}%` }}
                >
                  <div className="bg-bg-light p-8 rounded-3xl h-full flex flex-col border border-border-gray hover:shadow-soft transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-100 shrink-0 bg-gray-200">
                        <img 
                          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=random&color=fff`} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-deep-blue leading-tight">
                          {item.name}
                        </h4>
                        <p className="text-xs font-medium text-perfil-blue mt-1">
                          {item.role}
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative flex-grow">
                      <span className={`inline-block px-2 py-1 rounded-md ${item.bg} ${item.color} text-[10px] font-bold uppercase tracking-wider mb-3`}>
                        {item.category}
                      </span>
                      <div className="relative">
                        <Quote className="absolute -top-2 -left-2 text-gray-200 w-8 h-8 -z-10" />
                        <p className="text-text-gray text-sm leading-relaxed italic relative z-10">
                          "{item.quote}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicators */}
          <div className="flex justify-center items-center gap-2 mt-12">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsAutoPlaying(false);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-perfil-blue w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir a diapositiva ${idx + 1}`}
              />
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <button className="px-8 py-4 bg-perfil-blue text-white font-bold rounded-full hover:bg-deep-blue transition-all shadow-lg shadow-perfil-blue/20 hover:-translate-y-1">
              Solicitar demo y crear cuenta
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
