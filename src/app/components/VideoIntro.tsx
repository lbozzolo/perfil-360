'use client';

import { useState } from 'react';

/**
 * Video institucional, montado a caballo entre el Hero y el Directorio.
 *
 * El solapamiento sale de los márgenes negativos en porcentaje: los márgenes
 * porcentuales se calculan sobre el ancho del contenedor, y como el video es
 * 16:9, su alto es el 56.25% de ese ancho. Con -28.125% arriba y abajo el
 * video queda partido exactamente por la mitad en cualquier resolución, sin
 * media queries ni alturas fijas, y sin ocupar alto en el flujo: el límite
 * entre las dos secciones no se mueve.
 */
export default function VideoIntro() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="relative z-20 flow-root max-w-2xl mx-auto px-4">
      <div className="relative aspect-video -mt-[28.125%] -mb-[28.125%] bg-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20">
        {!showVideo ? (
          <button
            type="button"
            onClick={() => setShowVideo(true)}
            aria-label="Reproducir el video ¿Qué es CertiRed?"
            className="absolute inset-0 w-full h-full flex items-center justify-center bg-black cursor-pointer group"
          >
            <img
              src="/images/video-imagen.webp"
              alt=""
              className="w-full h-full object-contain bg-white"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:scale-110"
              >
                <circle cx="40" cy="40" r="40" fill="rgba(0,0,0,0.5)" />
                <polygon points="32,25 60,40 32,55" fill="#fff" />
              </svg>
            </span>
          </button>
        ) : (
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/gMLuiXHoZzk?autoplay=1&si=EBtt9O_-w4CsQAQ2"
            title="¿Qué es CertiRed?"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          ></iframe>
        )}
      </div>
    </div>
  );
}
