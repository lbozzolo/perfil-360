import {
  PROVINCIAS,
  ANCHO_MAPA,
  ALTO_MAPA,
  proyectar,
} from '@/lib/presencia';

/**
 * Presencia territorial (bloque 2 de la propuesta).
 *
 * Los puntos se ubican por las coordenadas reales de cada capital provincial:
 * la distribución dibuja el país sin necesidad de un contorno ni de una
 * librería de mapas.
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
            <stop offset="0%" stopColor="#FFC52A" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FFC52A" stopOpacity="0" />
          </radialGradient>
        </defs>

        {puntos.map((punto) => (
          <g key={punto.nombre}>
            <circle cx={punto.x} cy={punto.y} r="14" fill="url(#halo-presencia)" />
            <circle
              cx={punto.x}
              cy={punto.y}
              r="4"
              fill="#FFC52A"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeOpacity="0.5"
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
