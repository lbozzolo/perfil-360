import Header from "../components/Header";
import Footer from "../components/Footer";
import { ShieldCheck, Download, BookOpen, Eye, ArrowDownToLine, AlertCircle } from "lucide-react";

export default function CentroDeRecursosPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-grow">

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="relative pt-16 pb-20 bg-deep-blue text-white overflow-hidden">
          <div className="absolute inset-0 overflow-hidden z-0 opacity-10 pointer-events-none">
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-perfil-blue blur-[80px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-perfil-blue blur-[80px]" />
          </div>
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Columna izquierda: texto */}
              <div className="w-full lg:w-3/5 text-left">
                <div className="inline-block px-6 py-2 bg-white/10 text-white font-bold rounded-full text-sm uppercase tracking-wider mb-6 shadow-lg backdrop-blur-md border border-white/20">
                  Acceso exclusivo · Centros de Capacitación
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
                  Centro de Recursos Oficial – <span className="text-360-yellow">Perfil 360</span>
                </h1>
                <p className="text-lg md:text-3xl text-gray-200 font-semibold mb-4 leading-relaxed">
                  Espacio exclusivo para Centros de Capacitación registrados en la plataforma.
                </p>
                <p className="text-base text-gray-400 max-w-2xl leading-relaxed mb-2">
                  En este espacio encontrará los lineamientos de uso de marca, recursos oficiales de comunicación e instructivos operativos para la correcta utilización de Perfil 360.
                </p>
                <p className="text-sm text-gray-500 max-w-xl mt-4 italic">
                  El acceso y uso de estos materiales implica la aceptación de las condiciones aquí establecidas.
                </p>
              </div>
              {/* Columna derecha: imagen */}
              <div className="w-full lg:w-[42%] flex flex-col items-center relative mt-12 lg:mt-0 lg:mb-[-50px] z-20" style={{ perspective: '1000px' }}>
                <div className="relative w-[115%] rounded-2xl overflow-hidden shadow-2xl bg-white aspect-[4/3] flex items-center justify-center" style={{ transform: 'rotateY(-8deg)', transformStyle: 'preserve-3d' }}>
                  {/* Imagen principal del hero */}
                  <img 
                    src="/images/recursos.webp"
                    alt="Centro de Recursos Perfil 360"
                    className="object-cover w-full h-full"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BLOQUE 1: USO DE MARCA ────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="mb-10 text-center">
                
                <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
                  Uso de Marca y Lineamientos Institucionales
                </h2>
                <div className="w-20 h-1 bg-360-yellow mx-auto rounded-full" />
              </div>

              <div className="p-8 md:p-10 rounded-2xl bg-white border border-gray-100 shadow-lg flex flex-col md:flex-row items-start md:items-center gap-8">
                <div className="w-16 h-16 bg-deep-blue rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <ShieldCheck className="w-8 h-8 text-360-yellow" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Antes de utilizar el nombre o logotipo de Perfil 360 en sus comunicaciones,
                    consulte las condiciones oficiales de uso de marca.
                  </p>
                  <a
                      href="/recursos/acuerdo-de-utilizacion-de-marca-y-comunicacion.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-8 py-3 bg-deep-blue text-white font-bold rounded-full hover:bg-perfil-blue transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm uppercase tracking-wide"
                  >
                    Ver Acuerdo de Utilización de Marca
                  </a>
                  <p className="text-xs text-gray-400 mt-3">
                    El uso del logo y material institucional implica la aceptación del acuerdo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BLOQUE 2: RECURSOS OFICIALES ─────────────────────────── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="mb-10 text-center">
                
                <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
                  Logos y Material Gráfico Oficial
                </h2>
                <div className="w-20 h-1 bg-360-yellow mx-auto rounded-full" />
              </div>

              <div className="p-8 md:p-10 rounded-2xl bg-white border border-gray-100 shadow-lg flex flex-col md:flex-row items-start md:items-center gap-8">
                <div className="w-16 h-16 bg-deep-blue rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <Download className="w-8 h-8 text-360-yellow" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Descargue aquí los recursos oficiales para comunicar correctamente su integración
                    con Perfil 360 y promocionar el beneficio de trazabilidad laboral para sus alumnos.
                  </p>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-deep-blue text-white font-bold rounded-full hover:bg-perfil-blue transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm uppercase tracking-wide"
                  >
                    <ArrowDownToLine className="w-4 h-4" />
                    Descargar Logos y Material Oficial
                  </a>
                  <p className="text-xs text-gray-400 mt-3">
                    Utilizar exclusivamente las versiones oficiales sin modificaciones de color,
                    proporción o diseño.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BLOQUE 3: INSTRUCTIVOS OPERATIVOS ────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="mb-14 text-center max-w-2xl mx-auto">
              
              <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
                Instructivos de Uso de la Plataforma
              </h2>
              <div className="w-20 h-1 bg-360-yellow mx-auto rounded-full" />
              <p className="text-gray-500 mt-6 leading-relaxed">
                Guías paso a paso para operar correctamente en Perfil 360: creación de cursos,
                registro de alumnos, carga de certificaciones, facturación y gestión de vencimientos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

              {/* Sub-bloque 1 */}
              <div className="rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 overflow-hidden flex flex-col">
                {/* Portada PDF simulada */}
                <div className="bg-deep-blue p-8 flex flex-col justify-between min-h-[180px] relative overflow-hidden">
                  <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                  <div className="relative z-10">
                    <div className="inline-block px-3 py-1 bg-360-yellow text-deep-blue font-bold text-xs rounded-full uppercase tracking-wide mb-4">
                      Etapa 1 – Operación Inicial
                    </div>
                    <BookOpen className="w-10 h-10 text-white/30 absolute top-4 right-6 group-hover:text-white/50 transition-colors duration-300" />
                  </div>
                  <div className="relative z-10 space-y-1 mt-4">
                    <div className="h-2 bg-white/20 rounded w-4/5" />
                    <div className="h-2 bg-white/10 rounded w-3/5" />
                    <div className="h-2 bg-white/10 rounded w-2/3 mt-3" />
                    <div className="h-2 bg-white/10 rounded w-1/2" />
                  </div>
                </div>
                {/* Info */}
                <div className="p-6 flex flex-col flex-1 bg-white">
                  <h3 className="text-2xl font-bold text-deep-blue mb-2">
                    Guía Inicial de Carga y Vinculación de Alumnos
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                    Creación de cursos, registro de personas, carga de certificaciones y evaluación
                    con instructores.
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="/recursos/instructivo-inicial-para-centros-de-capacitacion.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-deep-blue text-white font-bold rounded-full hover:bg-perfil-blue transition-all text-sm shadow hover:shadow-md"
                    >
                      <Eye className="w-4 h-4" /> Ver
                    </a>
                    <a
                      href="/recursos/instructivo-inicial-para-centros-de-capacitacion.pdf"
                      download
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-deep-blue text-deep-blue font-bold rounded-full hover:bg-deep-blue hover:text-white transition-all text-sm"
                    >
                      <ArrowDownToLine className="w-4 h-4" /> Descargar
                    </a>
                  </div>
                </div>
              </div>

              {/* Sub-bloque 2 */}
              <div className="rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 overflow-hidden flex flex-col">
                {/* Portada PDF simulada */}
                <div className="bg-deep-blue p-8 flex flex-col justify-between min-h-[180px] relative overflow-hidden">
                  <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                  <div className="relative z-10">
                    <div className="inline-block px-3 py-1 bg-white/20 text-white font-bold text-xs rounded-full uppercase tracking-wide mb-4 border border-white/30">
                      Etapa 2 – Gestión y Continuidad
                    </div>
                    <BookOpen className="w-10 h-10 text-white/30 absolute top-4 right-6 group-hover:text-white/50 transition-colors duration-300" />
                  </div>
                  <div className="relative z-10 space-y-1 mt-4">
                    <div className="h-2 bg-white/20 rounded w-4/5" />
                    <div className="h-2 bg-white/10 rounded w-3/5" />
                    <div className="h-2 bg-white/10 rounded w-2/3 mt-3" />
                    <div className="h-2 bg-white/10 rounded w-1/2" />
                  </div>
                </div>
                {/* Info */}
                <div className="p-6 flex flex-col flex-1 bg-white">
                  <h3 className="text-2xl font-bold text-deep-blue mb-2">
                    Guía de Gestión Administrativa y Seguimiento
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                    Registros, facturación, carga de antecedentes y control de certificaciones vencidas.
                  </p>
                  <div className="flex gap-3">
                    <a
                       href="/recursos/instructivo-segunda-etapa-para-centros-de-capacitacion.pdf"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-deep-blue text-white font-bold rounded-full hover:bg-perfil-blue transition-all text-sm shadow hover:shadow-md"
                    >
                      <Eye className="w-4 h-4" /> Ver
                    </a>
                    <a
                       href="/recursos/instructivo-segunda-etapa-para-centros-de-capacitacion.pdf"
                       download
                       className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-deep-blue text-deep-blue font-bold rounded-full hover:bg-deep-blue hover:text-white transition-all text-sm"
                    >
                      <ArrowDownToLine className="w-4 h-4" /> Descargar
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── PIE INSTITUCIONAL ─────────────────────────────────────── */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
            
            <div className="space-y-3 text-sm text-gray-400 leading-relaxed border border-white/10 rounded-2xl p-8 bg-white/5">
              <p className="font-semibold text-gray-300 text-lg">
                Perfil 360 es una herramienta tecnológica de trazabilidad laboral digital.
              </p>
              <p>
                No certifica cursos ni avala contenidos académicos.
              </p>
              <p>
                Cada Centro es responsable exclusivo de sus programas, evaluaciones y certificaciones emitidas.
              </p>
              <div className="border-t border-white/10 pt-4 mt-4">
                <p className="text-gray-500">
                  Le recomendamos guardar este enlace en sus favoritos, ya que se trata de un espacio
                  exclusivo para centros registrados y no es visible desde la página pública.
                </p>
                <p className="text-gray-500 mt-2">
                  En caso de necesitar nuevamente el acceso, puede solicitarlo escribiendo a{" "}
                  <a
                    href="mailto:soporte@perfil360.com.ar"
                    className="text-360-yellow underline hover:text-white transition-colors"
                  >
                    soporte@perfil360.com.ar
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
