'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Slide = {
  src: string;
  titulo: string;
  alt: string;
};

const slides: Slide[] = [
  {
    src: '/images/directorio.webp',
    titulo: 'Directorio',
    alt: 'Búsqueda de un trabajador por número de documento dentro del panel de CertiRed',
  },
  {
    src: '/images/estadisticas.webp',
    titulo: 'Estadísticas',
    alt: 'Gráfico de rendimiento mensual de certificaciones registradas por el centro',
  },
  {
    src: '/images/cursos.webp',
    titulo: 'Cursos',
    alt: 'Listado de cursos con tareas de riesgo administrados por el centro de capacitación',
  },
  {
    src: '/images/perfil-unico.webp',
    titulo: 'Perfil único',
    alt: 'Perfil de un trabajador con sus cursos validados por el centro',
  },
];

const INTERVALO_AUTOPLAY = 5000;

export default function SliderCentros() {
  const [actual, setActual] = useState(0);
  // Punto de contacto inicial del gesto táctil, para detectar el swipe.
  const [inicioTouch, setInicioTouch] = useState<number | null>(null);
  const [pausado, setPausado] = useState(false);

  const ir = (indice: number) => setActual((indice + slides.length) % slides.length);

  // El avance automático se frena mientras el puntero está encima y se
  // reinicia con cada cambio de slide, para no cortar un avance manual.
  useEffect(() => {
    if (pausado) return;
    const id = setTimeout(
      () => setActual((previo) => (previo + 1) % slides.length),
      INTERVALO_AUTOPLAY,
    );
    return () => clearTimeout(id);
  }, [actual, pausado]);

  const alSoltar = (fin: number) => {
    if (inicioTouch === null) return;
    const distancia = inicioTouch - fin;
    if (Math.abs(distancia) > 50) ir(actual + (distancia > 0 ? 1 : -1));
    setInicioTouch(null);
  };

  return (
    <div className="w-full">
      <div
        className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 aspect-[16/9] bg-deep-blue"
        onMouseEnter={() => setPausado(true)}
        onMouseLeave={() => setPausado(false)}
        onTouchStart={(e) => setInicioTouch(e.touches[0].clientX)}
        onTouchEnd={(e) => alSoltar(e.changedTouches[0].clientX)}
      >
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${actual * 100}%)` }}
        >
          {slides.map((slide) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              loading="lazy"
              className="w-full h-full shrink-0 object-cover"
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => ir(actual - 1)}
          aria-label="Imagen anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-deep-blue/70 text-white flex items-center justify-center border border-white/20 hover:bg-360-yellow hover:text-deep-blue transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={() => ir(actual + 1)}
          aria-label="Imagen siguiente"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-deep-blue/70 text-white flex items-center justify-center border border-white/20 hover:bg-360-yellow hover:text-deep-blue transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <p
        aria-live="polite"
        className="mt-4 text-center text-base font-bold text-white"
      >
        {slides[actual].titulo}
      </p>

      <div className="mt-3 flex items-center justify-center gap-2">
        {slides.map((slide, indice) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => ir(indice)}
            aria-label={`Ver ${slide.titulo}`}
            aria-current={indice === actual}
            className={`h-2 rounded-full transition-all ${
              indice === actual
                ? 'w-6 bg-360-yellow'
                : 'w-2 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
