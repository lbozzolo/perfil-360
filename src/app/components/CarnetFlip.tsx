'use client';

import { useEffect, useRef, useState } from 'react';
import { RotateCw } from 'lucide-react';

type Cara = {
  src: string;
  alt: string;
};

/**
 * Credencial que gira para mostrar el dorso. Se controla con el cursor o
 * con un toque, y hace un giro de presentación la primera vez que entra en
 * pantalla para que se entienda que es interactiva.
 *
 * Respeta prefers-reduced-motion: si el usuario pidió menos movimiento no
 * hay giro de presentación y el cambio de cara es instantáneo.
 */
export default function CarnetFlip({
  frente,
  dorso,
  ancho,
  alto,
}: {
  frente: Cara;
  dorso: Cara;
  ancho: number;
  alto: number;
}) {
  const [girado, setGirado] = useState(false);
  const contenedor = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const nodo = contenedor.current;
    if (!nodo) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const pendientes = timers.current;

    const observer = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return;
        observer.disconnect();

        // Muestra el dorso un momento y vuelve al frente.
        pendientes.push(
          window.setTimeout(() => setGirado(true), 600),
          window.setTimeout(() => setGirado(false), 2400),
        );
      },
      { threshold: 0.6 },
    );

    observer.observe(nodo);

    return () => {
      observer.disconnect();
      pendientes.forEach(window.clearTimeout);
    };
  }, []);

  return (
    <div ref={contenedor} className="w-full max-w-[248px] mx-auto">
      <button
        type="button"
        aria-pressed={girado}
        aria-label={
          girado ? 'Ver el frente del carnet' : 'Ver el dorso del carnet'
        }
        onClick={() => setGirado((estado) => !estado)}
        onMouseEnter={() => setGirado(true)}
        onMouseLeave={() => setGirado(false)}
        className="group block w-full cursor-pointer rounded-2xl [perspective:1200px] focus:outline-none focus-visible:ring-2 focus-visible:ring-perfil-blue focus-visible:ring-offset-4 focus-visible:ring-offset-bg-light"
      >
        <span
          className="relative block w-full transition-transform duration-700 ease-out [transform-style:preserve-3d] motion-reduce:transition-none"
          style={{
            aspectRatio: `${ancho} / ${alto}`,
            transform: girado ? 'rotateY(180deg)' : undefined,
          }}
        >
          <img
            src={frente.src}
            alt={frente.alt}
            width={ancho}
            height={alto}
            className="absolute inset-0 w-full h-full rounded-2xl shadow-card [backface-visibility:hidden]"
          />
          <img
            src={dorso.src}
            alt={dorso.alt}
            width={ancho}
            height={alto}
            aria-hidden={!girado}
            className="absolute inset-0 w-full h-full rounded-2xl shadow-card [backface-visibility:hidden] [transform:rotateY(180deg)]"
          />
        </span>
      </button>

      <p className="mt-4 flex items-center justify-center gap-1.5 text-[10px] font-bold tracking-[0.14em] text-text-gray/70 uppercase">
        <RotateCw size={12} className="shrink-0" />
        {girado ? 'Dorso' : 'Girá para ver el dorso'}
      </p>
    </div>
  );
}
