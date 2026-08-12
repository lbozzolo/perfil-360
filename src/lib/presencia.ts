/**
 * Presencia territorial mostrada en el bloque del Directorio.
 *
 * La lista se tomó del mapa de la plataforma (Glide/Mapbox) y el cliente la dio
 * por buena el 2026-08-12. Si en algún momento cambia la cobertura real, se
 * edita el campo `presencia` de cada provincia: el texto al pie del mapa
 * ("Presencia en N provincias") se recalcula solo.
 *
 * Las coordenadas son las de la capital de cada provincia.
 */
export type Provincia = {
  nombre: string;
  lat: number;
  lon: number;
  /** Hay al menos un trabajador con certificaciones registradas. */
  presencia: boolean;
};

export const PROVINCIAS: Provincia[] = [
  { nombre: 'Jujuy', lat: -24.19, lon: -65.3, presencia: true },
  { nombre: 'Salta', lat: -24.79, lon: -65.41, presencia: true },
  { nombre: 'Formosa', lat: -26.18, lon: -58.17, presencia: true },
  { nombre: 'Tucumán', lat: -26.82, lon: -65.22, presencia: true },
  { nombre: 'Misiones', lat: -27.37, lon: -55.9, presencia: true },
  { nombre: 'Chaco', lat: -27.45, lon: -58.99, presencia: true },
  { nombre: 'Corrientes', lat: -27.47, lon: -58.83, presencia: true },
  { nombre: 'Santiago del Estero', lat: -27.8, lon: -64.26, presencia: true },
  { nombre: 'Catamarca', lat: -28.47, lon: -65.79, presencia: true },
  { nombre: 'La Rioja', lat: -29.41, lon: -66.85, presencia: true },
  { nombre: 'San Juan', lat: -31.54, lon: -68.54, presencia: true },
  { nombre: 'Córdoba', lat: -31.42, lon: -64.19, presencia: true },
  { nombre: 'Santa Fe', lat: -31.63, lon: -60.7, presencia: true },
  { nombre: 'Entre Ríos', lat: -31.73, lon: -60.53, presencia: true },
  { nombre: 'Mendoza', lat: -32.89, lon: -68.84, presencia: true },
  { nombre: 'San Luis', lat: -33.3, lon: -66.34, presencia: true },
  { nombre: 'Ciudad de Buenos Aires', lat: -34.61, lon: -58.38, presencia: true },
  { nombre: 'Buenos Aires', lat: -34.92, lon: -57.95, presencia: true },
  { nombre: 'La Pampa', lat: -36.62, lon: -64.29, presencia: true },
  { nombre: 'Neuquén', lat: -38.95, lon: -68.06, presencia: true },
  { nombre: 'Río Negro', lat: -40.81, lon: -62.99, presencia: true },
  { nombre: 'Chubut', lat: -43.3, lon: -65.1, presencia: true },
  { nombre: 'Santa Cruz', lat: -51.62, lon: -69.22, presencia: true },
  { nombre: 'Tierra del Fuego', lat: -54.8, lon: -68.3, presencia: true },
];

/** Recorte geográfico del mapa, en grados. */
export const BOUNDS = { norte: -21.5, sur: -55.5, oeste: -74, este: -53 };

export const ANCHO_MAPA = 200;
export const ALTO_MAPA = 412;

/**
 * Proyección equirectangular con corrección de aspecto por la latitud media,
 * suficiente a escala de un país y sin necesidad de una librería de mapas.
 */
export function proyectar(lat: number, lon: number) {
  const x =
    ((lon - BOUNDS.oeste) / (BOUNDS.este - BOUNDS.oeste)) * ANCHO_MAPA;
  const y =
    ((BOUNDS.norte - lat) / (BOUNDS.norte - BOUNDS.sur)) * ALTO_MAPA;
  return { x, y };
}
