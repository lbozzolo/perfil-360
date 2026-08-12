/**
 * Fuente única de verdad para URLs externas y copy de marca.
 * Antes estaban duplicadas literalmente en Hero, Header, Footer y DirectoryBanner.
 */

export const URLS = {
  directorio:
    process.env.NEXT_PUBLIC_DIRECTORIO_URL || 'https://directorio.certired.com.ar',
  registro:
    process.env.NEXT_PUBLIC_REGISTRO_URL || 'https://registro.certired.com.ar',
  login: process.env.NEXT_PUBLIC_LOGIN_URL || 'https://app.certired.com.ar/',
};

/** Cantidad de trabajadores con certificaciones registradas (prueba de adopción). */
export const TRABAJADORES_REGISTRADOS = Number(
  process.env.NEXT_PUBLIC_TRABAJADORES_COUNT || 970
);

export const BRAND = {
  tagline: 'Registro digital de certificaciones laborales.',
  claimCorto:
    'Certificaciones laborales registradas. Simples de mostrar. Fáciles de consultar.',
  claimLargo:
    'CertiRed conecta las certificaciones emitidas por centros de capacitación con los trabajadores que las reciben y las empresas que necesitan consultarlas.',
  recorrido: 'El centro registra · El trabajador muestra · La empresa consulta',
};
