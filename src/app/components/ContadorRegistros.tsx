import { TRABAJADORES_REGISTRADOS } from '@/lib/site';

/**
 * Prueba de adopción del punto 2 de la propuesta: cantidad de trabajadores
 * con certificaciones laborales registradas.
 */
export default function ContadorRegistros() {
  const formateado = new Intl.NumberFormat('es-AR').format(
    TRABAJADORES_REGISTRADOS
  );

  return (
    <div className="inline-flex items-baseline gap-3 flex-wrap justify-center lg:justify-start">
      <span className="text-4xl md:text-5xl font-bold text-360-yellow tabular-nums">
        +{formateado}
      </span>
      <span className="text-base text-white/90 font-medium">
        trabajadores con certificaciones laborales registradas
      </span>
    </div>
  );
}
