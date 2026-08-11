import {
  PROVINCIAS,
  ANCHO_MAPA,
  ALTO_MAPA,
  proyectar,
} from '@/lib/presencia';
import { ARGENTINA_PATH } from '@/lib/argentina';

/**
 * Presencia territorial (bloque 2 de la propuesta).
 *
 * El contorno del país y los puntos usan la misma proyección, así que quedan
 * alineados por construcción. Sin dependencias ni API keys en runtime.
 */
export default function MapaPresencia() {
  const conPresencia = PROVINCIAS.filter((p) => p.presencia);
  const puntos = conPresencia.map((p) => ({ ...p, ...proyectar(p.lat, p.lon) }));

  return (
    <figure className="flex flex-col items-center gap-4 m-0">
      <svg
        viewBox={`0 0 ${ANCHO_MAPA} ${ALTO_MAPA}`}
        className="w-auto h-[320px] md:h-[400px] overflow-visible"
        role="img"
        aria-label={`Mapa de presencia territorial de CertiRed: trabajadores con certificaciones registradas en ${conPresencia.length} provincias.`}
      >
        <defs>
          <radialGradient id="halo-presencia">
            <stop offset="0%" stopColor="#FFC52A" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#FFC52A" stopOpacity="0" />
          </radialGradient>
        </defs>

        <path
          d={ARGENTINA_PATH}
          fill="#ffffff"
          fillOpacity="0.14"
          stroke="#ffffff"
          strokeOpacity="0.45"
          strokeWidth="0.8"
          strokeLinejoin="round"
        />

        {puntos.map((punto) => (
          <g key={punto.nombre}>
            <circle cx={punto.x} cy={punto.y} r="12" fill="url(#halo-presencia)" />
            <circle
              cx={punto.x}
              cy={punto.y}
              r="3.5"
              fill="#FFC52A"
              stroke="#ffffff"
              strokeWidth="1.2"
              strokeOpacity="0.65"
            />
          </g>
        ))}
      </svg>

      <figcaption className="text-sm text-white/80 font-medium text-center">
        Presencia en {conPresencia.length} provincias de todo el país
      </figcaption>
    </figure>
  );
}
