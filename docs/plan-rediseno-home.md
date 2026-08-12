# Plan de rediseño — CertiRed (redefinición del Home)

> Basado en: `CertiRed_Redefinicion_Home_Web (1).pdf` (propuesta del cliente)
> Repo: `perfil-360` — Next.js 16 (App Router) + Tailwind v4
> Fecha: 2026-08-11

---

## 0. Resumen ejecutivo

El cliente **no pide un rediseño visual**: pide un **reposicionamiento de producto y de mensaje**.
El eje pasa de "ecosistema integral de trazabilidad laboral" a una sola frase:

> **El centro registra → el trabajador muestra → la empresa consulta.**

Consecuencias prácticas para el sitio:

1. El **Directorio** deja de ser un banner al final del Home y pasa a ser **la acción principal** (bloque 2, arriba de todo).
2. **Empresas deja de ser un actor operativo** en el Home (nada de staff, sucursales, supervisores, licitaciones, reportes, ART).
3. **Planes Free/Plus se ocultan** durante esta etapa de adquisición.
4. Se **unifica la terminología**: se elimina "verificar / verificado / competencias verificadas" en todo el sitio y se reemplaza por "**certificaciones laborales registradas**" y "**consultar**".
5. Nada se borra del código: **se oculta**, no se destruye (el cliente lo pide explícitamente).

**Estimación total: ~5 a 7 jornadas de trabajo**, repartidas en 7 fases.

### Estado de ejecución (rama `rediseno/home-v2`)

| Fase | Estado |
|---|---|
| 0 · Preparación | ✅ (faltan los screenshots antes/después) |
| 1 · Hero | ✅ |
| 2 · Directorio | ✅ con contador y mapa |
| 3 · Cómo funciona | ✅ |
| 4 · Bloques y limpieza del Home | ✅ |
| 5 · Navegación y footer | ✅ |
| 6 · Terminología | ✅ en las páginas visibles (`/empresas` quedó oculta, no se tocó) |
| 7 · Páginas internas | ✅ salvo el QA final |
| KPIs (sección 4) | ✅ 11 puntos instrumentados |
| **QA final (sección 3, Fase 7)** | ⬜ **lo único que queda** |

---

## 1. Estado actual del código (diagnóstico)

### Home (`src/app/page.tsx`)

| Orden | Componente | Qué comunica hoy | Destino |
|---|---|---|---|
| 1 | `Hero.tsx` | "Capacitación, trabajo y empresas en un mismo lugar" + video YouTube + mockup | **Reescribir** |
| 2 | `EcosystemSection.tsx` | Rueda con Capacitaciones / **Supervisiones** / **Empresa y puesto** | **Reemplazar** por "Cómo funciona" (3 pasos) |
| 3 | `ActorsSection.tsx` | 4 actores: Empresas (staff, supervisores, licitaciones), Centros, **ART**, Trabajadores | **Reemplazar** por 2 bloques (Trabajadores / Centros) |
| 4 | `FeaturesSection.tsx` | Supervisores, **Licitaciones**, **Indicadores y reportes** | **Ocultar** |
| 5 | `PlansSection.tsx` | Plan Free / Plan Plus con precios | **Ocultar** |
| 6 | `DirectoryBanner.tsx` | Banner del directorio, al final, con copy "Verificar perfil laboral" | **Promover a bloque 2 + reescribir** |
| 7 | `TestimonialsSection.tsx` | ya comentado | Sin cambios |

### Navegación

- **Header** (`components/Header.tsx`): Inicio · Trabajadores · **Empresas** · Centros · Contacto + "Iniciar sesión" + botón **"Verificar perfil laboral"**.
  → Debe quedar: Trabajadores · Centros · Directorio · (Contacto) + Ingresar + **"Consultar certificaciones"**.
- **Footer** (`components/Footer.tsx`): 3 columnas + redes + CTA "Verificar perfil laboral" + tagline "plataforma integral para el ecosistema laboral".
  → Simplificar al footer del punto 8 del PDF.

### Deuda de terminología

- **66 apariciones** de la raíz `verific*` en **34 archivos**.
- **`licitaci*`** en 13 archivos (Home + Empresas + Centros).
- **ART** mencionada en 8 lugares.
- Copy "competencias verificadas" / "cursos verificados" presente en Home, `/empresas` y `/centros`.

### Lo que hoy NO existe y hay que construir

- ❌ **Contador de trabajadores registrados** (+970). No hay ningún componente ni endpoint.
- ❌ **Mapa de presencia territorial**. No existe (el único "mapa" del repo es el de Google Maps en `/contacto`, hoy oculto).
- ❌ **Input de DNI en el Home** que dispare la consulta al Directorio. Hoy solo hay un link a `NEXT_PUBLIC_DIRECTORIO_URL`.

---

## 1 bis. Estado de los pendientes

| Pendiente | Estado |
|---|---|
| **Contador: ¿348 o 970?** | ✅ **Cerrado el 2026-08-12: va 970**, el número de la propuesta. El de la plataforma (348) mide las capacitaciones validadas, no el total de trabajadores registrados. |
| **Lista de provincias del mapa** | ✅ **Cerrada el 2026-08-12.** El cliente dio por buena la lista tomada del mapa de la plataforma: las 24 jurisdicciones. Se edita en `src/lib/presencia.ts`. |
| **Terminología del contador dentro de Glide** | ⚠️ **Abierto, fuera de este repo.** El cartel de la plataforma dice "capacitaciones **validadas**" y el Directorio se describe como "Identidad Laboral Verificable": dos términos que el punto 6 pide reemplazar. Lo tiene que cambiar el cliente en Glide. |
| `NEXT_PUBLIC_TRABAJADORES_COUNT` en Vercel | ⚠️ **Abierto.** Cargar la env var en Preview y Production. Mientras tanto usa el fallback 970, que es el valor correcto, así que no es bloqueante. |
| **"Consultar" vs "verificar"** | ⚠️ **Avisado.** En sus definiciones el cliente escribió "consultar y verificar", pero su propio documento pide evitar "verificar". El sitio quedó con "consultar". |

---

## 2. Decisiones del cliente (todas cerradas)

| # | Pregunta | Resolución |
|---|---|---|
| D1 | ¿Qué pasa con `/empresas`? | ✅ **2026-08-12: ocultarla, no eliminarla.** Las empresas dejan de tener página propia como perfil operativo; su mensaje queda concentrado en el Home (consultan el Directorio). La carpeta pasó a `src/app/_empresas`, fuera del árbol de rutas. |
| D2 | ¿El buscador puede precargar el DNI en el Directorio? | ✅ **No.** El Directorio es una app **Glide** y Glide no soporta precargar por querystring (deep links solo por Row ID). Se probó copiando el documento al portapapeles, pero en la revisión del cliente (2026-08-12) el recorrido se leyó como roto: había que escribir el número dos veces. **El campo se eliminó: queda solo el botón**, que abre el Directorio en una pestaña nueva. |
| D3 | ¿El contador es fijo o sale de una API? | ✅ **Fijo por ENV** (`NEXT_PUBLIC_TRABAJADORES_COUNT`), en 970. Cablear una API queda para más adelante. |
| D4 | ¿Mapa estático o interactivo? | ✅ **SVG propio.** Contorno de Natural Earth 1:50m y puntos por coordenadas reales de capitales, con la misma proyección. Sin dependencias ni API keys en runtime. |
| D5 | ¿Los planes se ocultan solo en el Home? | ✅ **2026-08-12: en todo el sitio.** En `/centros` queda únicamente el cargo por certificación registrada ($7.500 por persona). |
| D6 | ¿`/red-institucional` y `/centro-de-recursos` siguen en línea? | Publicadas y fuera del menú. El cliente no las mencionó; no se tocaron. |
| D7 | ¿Se comunican los cursos autodeclarados? | ✅ **2026-08-12: no, en ningún lugar público.** Tampoco se dice que solo los centros pueden cargar. La web no debe condicionar la definición interna, que sigue pendiente. |

---

## 3. Fases de ejecución

Cada fase es un commit (o un grupo pequeño de commits) y es verificable por separado.
Trabajar en una rama: `git checkout -b rediseno/home-v2`.

---

### FASE 0 — Preparación (0.5 j)

- [ ] Crear rama `rediseno/home-v2`.
- [ ] Crear `src/lib/site.ts` con **una única fuente de verdad** para URLs y copy de marca:
  ```ts
  export const URLS = {
    directorio: process.env.NEXT_PUBLIC_DIRECTORIO_URL ?? 'https://directorio.certired.com.ar',
    registro:   process.env.NEXT_PUBLIC_REGISTRO_URL ?? '',
    login:      process.env.NEXT_PUBLIC_LOGIN_URL ?? '',
  };
  export const BRAND = {
    tagline: 'Registro digital de certificaciones laborales.',
    claimCorto: 'Certificaciones laborales registradas. Simples de mostrar. Fáciles de consultar.',
    claimLargo: 'CertiRed conecta las certificaciones emitidas por centros de capacitación con los trabajadores que las reciben y las empresas que necesitan consultarlas.',
  };
  ```
  *Por qué:* hoy `directorioUrl` está duplicado literal en 4+ archivos.
- [ ] Agregar a `.env.local` y a Vercel:
  ```
  NEXT_PUBLIC_TRABAJADORES_COUNT=970
  ```
- [ ] Sacar screenshots del Home actual (antes/después para presentar al cliente).

---

### FASE 1 — Bloque 1: Hero (1 j) ⭐ prioridad 1 del PDF

**Archivo:** `src/app/components/Hero.tsx`

- [ ] Reemplazar el H1 y el párrafo:
  - **H1:** `Tus certificaciones laborales, <span>en un solo lugar.</span>`
  - **Bajada:** "Los centros de capacitación registran las certificaciones. Los trabajadores las muestran. Las empresas las consultan desde CertiRed."
- [ ] Cambiar el badge superior: `Ecosistema de trazabilidad laboral` → **`El centro registra · El trabajador muestra · La empresa consulta`**.
- [ ] Agregar la botonera (hoy está comentada):
  - **Primario:** `Consultar certificaciones` → `URLS.directorio` (o scroll al bloque 2).
  - **Secundario:** `Crear mi perfil` → `URLS.registro`.
  - **Link terciario:** "¿Sos un centro de capacitación? **Registrar mi centro**" → `URLS.registro`.
- [ ] Bajar el video de YouTube: sale del Hero (compite con los CTAs). Reubicarlo más abajo o en `/trabajadores`.
- [ ] Mantener el mockup de celular a la derecha.
- [ ] Limpiar el código muerto (bloques comentados de líneas 69–106, imports sin usar: `User`, `Briefcase`, `Award`).

**Verificación:** el Hero se lee en 3 segundos y tiene exactamente 2 botones + 1 link.

---

### FASE 2 — Bloque 2: Directorio como protagonista (1.5 j) ⭐ prioridad 1 del PDF

**Archivo nuevo:** `src/app/components/DirectorioSection.tsx` (reemplaza a `DirectoryBanner.tsx`)

- [ ] **Moverlo al segundo lugar** del Home (hoy es el anteúltimo).
- [ ] Contenido:
  - **H2:** "Consultá una certificación laboral"
  - **Bajada:** "Ingresá el número de documento de un trabajador y consultá las certificaciones laborales registradas en CertiRed."
  - **Input de DNI + botón "Consultar en el Directorio"** → submit a `URLS.directorio` (según D2).
  - **Prueba de adopción:** "+970 trabajadores con certificaciones laborales registradas" (leer de `NEXT_PUBLIC_TRABAJADORES_COUNT`).
  - **Mapa de presencia territorial** (según D4).
- [ ] Reescribir el copy: fuera "verificar en segundos si tienen Certired activo", fuera el badge "Verificado" verde de la tarjeta mockup → reemplazar por "**Certificación registrada**".
- [ ] Quitar de la tarjeta mockup el campo "**Empresa actual**" (es dato de RR.HH., no de certificación) → reemplazar por "**Centro emisor**".

**Componentes nuevos de apoyo:**
- [ ] `components/ContadorRegistros.tsx` — número + label, sin animación innecesaria.
- [ ] `components/MapaPresencia.tsx` — SVG de Argentina con puntos por provincia.

**Verificación:** desde el Home, en 2 clics una empresa puede consultar un DNI.

---

### FASE 3 — Bloque 3: "Cómo funciona" (1 j)

**Archivo nuevo:** `src/app/components/ComoFunciona.tsx` (reemplaza a `EcosystemSection.tsx`)

- [ ] Tres pasos numerados, en horizontal, con la flecha del recorrido:
  1. **El centro registra** — "El centro de capacitación carga los cursos, certificaciones y vigencias que emite a sus trabajadores o alumnos."
  2. **El trabajador muestra** — "Cada trabajador reúne sus certificaciones laborales en su perfil CertiRed y puede compartirlas fácilmente."
  3. **La empresa consulta** — "Cualquier empresa puede consultar el Directorio y revisar las certificaciones registradas, sin necesidad de crear una cuenta."
- [ ] `EcosystemSection.tsx` **no se borra**: se deja el archivo y se saca el import del Home (el cliente pidió no destruir trabajo).
- [ ] Se elimina de la comunicación: Supervisiones, Empresa y puesto, ART.

**Verificación:** ningún texto del bloque menciona supervisores, sucursales, puestos ni ART.

---

### FASE 4 — Bloques Trabajadores y Centros + limpieza del Home (1 j)

**Archivo nuevo:** `src/app/components/BloqueTrabajadores.tsx`
- [ ] H2: "Llevá tus certificaciones con vos"
- [ ] Texto y 3 beneficios exactos del punto 5 del PDF (perfil gratuito / certificaciones reunidas / fácil de compartir).
- [ ] CTA: **Crear mi perfil gratis** → `URLS.registro`.

**Archivo nuevo:** `src/app/components/BloqueCentros.tsx`
- [ ] H2: "Dale respaldo digital a las certificaciones que emitís"
- [ ] Los 5 bullets del punto 6 del PDF (registrar trabajadores / crear cursos / cargar certificaciones y vigencias / validar certificaciones declaradas / presencia en el Directorio).
- [ ] CTA: **Registrar centro de capacitación** + leyenda "Registro gratuito".

**Bloque de confianza** (punto 7 del PDF) — texto corto, sin protagonismo:
- [ ] "CertiRed permite consultar información registrada por centros de capacitación. Cada centro es responsable por las certificaciones que emite o valida. CertiRed aporta registro, trazabilidad y acceso a la información, sin reemplazar al organismo emisor."

**Limpieza de `page.tsx`:**
- [ ] Comentar `<FeaturesSection />` (licitaciones, supervisores, reportes).
- [ ] Comentar `<PlansSection />` (planes Free/Plus).
- [ ] Comentar `<ActorsSection />` (ART + empresas operativas).
- [ ] Actualizar `metadata` del Home:
  - title: `CertiRed – Certificaciones laborales registradas`
  - description: el claim largo del punto 9.

**Orden final del Home:**
```
Header
├── Hero                    (Bloque 1)
├── DirectorioSection       (Bloque 2) ← contador + mapa
├── ComoFunciona            (Bloque 3)
├── BloqueTrabajadores      (punto 5)
├── BloqueCentros           (punto 6)
├── QueSignificaRegistrada  (punto 7)
Footer
```

---

### FASE 5 — Navegación y Footer (0.5 j) ⭐ prioridad 3 del PDF

**`components/Header.tsx`:**
- [ ] Nav: **Trabajadores · Centros de capacitación · Directorio** (+ Contacto).
- [ ] Sacar **Empresas** del menú (según D1). El archivo y la ruta se mantienen.
- [ ] Botón principal: `Verificar perfil laboral` → **`Consultar certificaciones`**.
- [ ] Botón secundario: `Iniciar sesión` → **`Ingresar`**.
- [ ] Bug a corregir de paso: el menú mobile hardcodea `https://app.certired.com.ar/` (línea 174) en vez de usar `NEXT_PUBLIC_LOGIN_URL` como el desktop.
- [ ] Bug a corregir: el breakpoint del botón hamburguesa es `md:hidden` pero el nav desktop es `lg:flex` → entre 768px y 1024px **no se ve ningún menú**.

**`components/Footer.tsx`:**
- [ ] Tagline: "Dando memoria, visibilidad y justicia…" → **"Registro digital de certificaciones laborales."**
- [ ] Links: Trabajadores · Centros de capacitación · Directorio · Crear perfil · Ingresar.
- [ ] Legal: Términos · Privacidad · Contacto.
- [ ] Redes sociales: se mantienen en el sitio institucional (este sitio) — según el PDF solo se quitan de las apps de Registro/Directorio.
- [ ] CTA final: `Verificar perfil laboral` → **`Consultar certificaciones`**.

---

### FASE 6 — Unificación de terminología en todo el sitio (1 j) ⭐ prioridad 4 del PDF

Aplicar la tabla del punto 6 del PDF **en las 4 páginas** (`/`, `/trabajadores`, `/centros`, `/empresas`) y en los metadatos.

| Evitar | Usar |
|---|---|
| Competencias verificadas | Certificaciones laborales registradas |
| Cursos verificados | Cursos / certificaciones registradas |
| Verificación de certificados | Consulta de certificaciones laborales |
| Centros adheridos | Centros registrados |
| Operario / Alumno / Persona | Trabajador |
| CertiRed valida | El centro emisor valida / registra |

- [ ] Auditar las **66 apariciones** de `verific*`:
  ```bash
  grep -rniE "verific|competencias|adherid|operario|alumno" src
  ```
- [ ] Revisar caso por caso (⚠️ **no hacer un find/replace masivo**: en `/terminos` y `/privacidad` el término puede ser jurídicamente correcto y ahí se deja).
- [ ] Actualizar `metadata` (title + description + openGraph) de las 4 páginas.
- [ ] Renombrar el label del componente `BusquedaLaboralEmpresas` y similares si el copy queda inconsistente.
- [ ] Revisar el nombre del `alt` de imágenes y los `aria-label`.

**Verificación:** `grep -riE "competencias verificadas|cursos verificados" src` devuelve 0 resultados fuera de legales.

---

### FASE 7 — Páginas internas, QA y cierre (1 j)

**`/empresas`** (según D1):
- [ ] Reescribir a versión corta: hero + "cómo consulta una empresa" (3 pasos) + CTA al Directorio.
- [ ] Ocultar `RolesEmpresas`, `BusquedaLaboralEmpresas`, `PlansEmpresas` (staff, supervisores, licitaciones, planes).

**`/centros`:**
- [ ] Aplicar el copy del punto 6 en `HeroCentros`.
- [ ] Ocultar `PlansCentros` → reemplazar por la leyenda "Registro gratuito" (D5).
- [ ] Sacar menciones a licitaciones en `BenefitsCentros`, `FeaturesCentros`, `HowItWorksCentros`.

**`/trabajadores`:**
- [ ] Aplicar el copy del punto 5 en `HeroPersonas`.
- [ ] Confirmar que se mantiene visible la carga de **certificaciones autodeclaradas** (el PDF pide conservarla explícitamente).

**QA final:**
- [ ] `npm run build` sin errores ni warnings nuevos.
- [ ] `npm run lint`.
- [ ] Responsive: 375px / 768px / 1024px / 1440px (ojo el bug de breakpoint de la Fase 5).
- [ ] Todos los CTAs apuntan a la URL correcta (Directorio / Registro / Login).
- [ ] Lighthouse del Home ≥ 90 en Performance y Accesibilidad.
- [ ] Revisar que no queden imports huérfanos de los componentes ocultos.
- [ ] Screenshots antes/después para presentar al cliente.

---

## 4. KPIs a instrumentar (punto 10.6 del PDF)

Ya está `@vercel/analytics` instalado. Agregar eventos custom:

- [ ] `directorio_consulta` — submit del buscador de DNI del Home. **KPI principal.**
- [ ] `registro_trabajador` — clic en "Crear mi perfil".
- [ ] `registro_centro` — clic en "Registrar mi centro".
- [ ] Métrica de negocio a pedirle al cliente: **cantidad de certificaciones laborales registradas** (no está en el sitio, sale de la app).

---

## 5. Principio rector para cualquier duda durante la ejecución

> **Si una función no ayuda a registrar, mostrar o consultar una certificación, no necesita protagonismo en esta etapa.**

Y la regla del cliente sobre el código: **ocultar, no borrar**. Todo componente que sale del Home se comenta o se deja sin importar, pero el archivo se conserva.

---

## 6. Orden sugerido de entrega al cliente

1. **Entrega 1 (Fases 1–3):** Home nuevo — Hero + Directorio + Cómo funciona. Es el 80% del impacto.
2. **Entrega 2 (Fases 4–5):** Bloques Trabajadores/Centros + navegación y footer.
3. **Entrega 3 (Fases 6–7):** Terminología unificada + páginas internas + QA.

Mostrarle la Entrega 1 antes de seguir: si el reposicionamiento del Hero y el Directorio no lo convence, el resto cambia.
