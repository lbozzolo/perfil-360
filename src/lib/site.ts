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

export const BRAND = {
  tagline: 'Registro digital de certificaciones laborales.',
  claimCorto:
    'Certificaciones laborales registradas. Simples de mostrar. Fáciles de consultar.',
  claimLargo:
    'CertiRed conecta las certificaciones emitidas por centros de capacitación con los trabajadores que las reciben y las empresas que necesitan consultarlas.',
  etiquetaHero: 'Transformación digital · Industria 4.0',
};
