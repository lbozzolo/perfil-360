/**
 * Genera el contorno de Argentina que usa src/app/components/MapaPresencia.tsx,
 * ya proyectado con la misma función que ubica los puntos de presencia.
 *
 * Se corre a mano, solo si hay que cambiar el recorte o el tamaño del viewBox.
 * Sus dependencias no quedan instaladas para no cargar cada build de Vercel con
 * los ~10 MB de world-atlas por un archivo que es estático:
 *
 *   npm i -D world-atlas topojson-client
 *   node scripts/generar-mapa-argentina.mjs > /tmp/arg-path.txt
 *   npm uninstall world-atlas topojson-client
 *
 * Después, pegar el resultado en ARGENTINA_PATH dentro de src/lib/argentina.ts.
 * Fuente: Natural Earth 1:50m, dominio público.
 */
import { feature } from 'topojson-client';
import topo from 'world-atlas/countries-50m.json' with { type: 'json' };

const B = { norte: -21.5, sur: -55.5, oeste: -74, este: -53 };
const W = 200, H = 412;
const proj = ([lon, lat]) => [
  ((lon - B.oeste) / (B.este - B.oeste)) * W,
  ((B.norte - lat) / (B.norte - B.sur)) * H,
];

const fc = feature(topo, topo.objects.countries);
const arg = fc.features.find((f) => f.properties.name === 'Argentina');

// area aproximada en unidades del viewBox, para descartar islotes
const area = (ring) => {
  let a = 0;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++)
    a += ring[j][0] * ring[i][1] - ring[i][0] * ring[j][1];
  return Math.abs(a / 2);
};

const polys = arg.geometry.type === 'MultiPolygon' ? arg.geometry.coordinates : [arg.geometry.coordinates];
let d = '';
let usados = 0, descartados = 0;
for (const poly of polys) {
  const ring = poly[0].map(proj);
  if (area(ring) < 3) { descartados++; continue; }
  // simplifica: descarta puntos a menos de 0.5 unidades del anterior
  const simple = [ring[0]];
  for (let i = 1; i < ring.length - 1; i++) {
    const [px, py] = simple[simple.length - 1];
    if (Math.hypot(ring[i][0] - px, ring[i][1] - py) >= 0.5) simple.push(ring[i]);
  }
  simple.push(ring[ring.length - 1]);
  usados++;
  d += 'M' + simple.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join('L') + 'Z';
}
console.error(`poligonos usados=${usados} descartados=${descartados} chars=${d.length}`);
process.stdout.write(d);
