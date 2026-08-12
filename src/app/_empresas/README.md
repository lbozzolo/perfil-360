# Página de Empresas — oculta

Oculta el 2026-08-12 por decisión del cliente: las empresas dejan de tener
página propia como perfil operativo. La información dirigida a ellas queda
concentrada en el Home, explicando que pueden consultar el Directorio.

**No está eliminada.** El prefijo `_` es la convención de Next.js para carpetas
privadas: quedan fuera del árbol de rutas, así que `/empresas` ya no existe y
tampoco se indexa, pero todo el código se conserva intacto.

Para volver a publicarla, alcanza con renombrar la carpeta a `empresas` y
sumar el enlace en `components/Header.tsx` y `components/Footer.tsx`.
