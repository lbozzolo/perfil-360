'use client';

import { useState } from 'react';

/**
 * Video institucional "¿Qué es CertiRed?".
 * Salió del Hero en la Fase 1 del rediseño para no competir con los CTAs.
 * Carga el iframe de YouTube recién al hacer clic sobre el preview.
 */
export default function VideoIntro() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="py-16 bg-bg-light">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-deep-blue text-center mb-8">
          ¿Qué es CertiRed?
        </h2>

        <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
          {!showVideo ? (
            <button
              type="button"
              onClick={() => setShowVideo(true)}
              aria-label="Reproducir el video ¿Qué es CertiRed?"
              className="absolute inset-0 w-full h-full flex items-center justify-center bg-black cursor-pointer"
            >
              <img
                src="/images/video-imagen.webp"
                alt=""
                className="w-full h-full object-contain bg-white rounded-xl"
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              className="absolute inset-0 w-full h-full rounded-xl"
            ></iframe>
          )}
        </div>
      </div>
    </section>
  );
}
