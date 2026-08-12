import { track } from '@vercel/analytics';

/**
 * Eventos del embudo del Home (punto 10.6 de la propuesta).
 *
 * El KPI principal que pide el documento —cantidad de certificaciones
 * registradas— sale de la base de la plataforma, no del sitio. Desde acá se
 * mide lo que alimenta ese número: las tres acciones que el Home propone.
 *
 * El Directorio y el Registro son apps externas, así que esto mide el clic de
 * salida, no si la persona completó la consulta o el alta del otro lado.
 */
export type EventoCta =
  /** Alguien fue a consultar certificaciones al Directorio. */
  | 'directorio_consulta'
  /** Alguien fue a crear su perfil de trabajador. */
  | 'registro_trabajador'
  /** Alguien fue a registrar un centro de capacitación. */
  | 'registro_centro';

/**
 * `origen` identifica desde qué punto del sitio se disparó, para poder
 * comparar el rendimiento de cada bloque (ej. 'hero' vs 'buscador').
 */
export function registrarCta(evento: EventoCta, origen: string) {
  track(evento, { origen });
}
