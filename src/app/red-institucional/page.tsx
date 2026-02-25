import Header from "../components/Header";
import Footer from "../components/Footer";
import { Building2, Globe, Cpu } from "lucide-react";

export default function RedInstitucionalPage() {
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
                  Red Institucional
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
                  Organizaciones que articulan el <span className="text-360-yellow">estándar de trazabilidad laboral</span> junto a Perfil360.
                </h1>
                <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed mb-2">
                  Perfil360 impulsa un modelo colaborativo de trazabilidad y verificación de competencias laborales.
                </p>
                <p className="text-base text-gray-400 max-w-2xl leading-relaxed mb-2">
                  Nuestra Red Institucional reúne actores estratégicos que contribuyen al desarrollo, integración y consolidación del estándar en distintos sectores.
                </p>
              </div>
              {/* Columna derecha: imagen */}
              <div className="w-full lg:w-[42%] flex flex-col items-center relative mt-12 lg:mt-0 lg:mb-[-50px] z-20" style={{ perspective: '1000px' }}>
                <div className="relative w-[115%] rounded-2xl overflow-hidden shadow-2xl bg-white aspect-[4/3] flex items-center justify-center" style={{ transform: 'rotateY(-8deg)', transformStyle: 'preserve-3d' }}>
                  {/* Imagen principal del hero */}
                  <img 
                    src="/images/red.webp"
                    alt="Red Institucional Perfil 360"
                    className="object-cover w-full h-full"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ALIANZAS ESTRATÉGICAS ─────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="mb-14 text-center max-w-2xl mx-auto">
              
              <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
                Alianzas Estratégicas
              </h2>
              <div className="w-20 h-1 bg-360-yellow mx-auto rounded-full" />
              <p className="text-gray-500 mt-6">
                Organizaciones con representación sectorial significativa y compromiso activo en la implementación y expansión del estándar de trazabilidad laboral.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col items-center text-center"
                >
                  <div className="w-24 h-24 bg-deep-blue rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="w-10 h-10 text-360-yellow" />
                  </div>
                  <div className="text-lg font-bold text-deep-blue mb-1">Nombre Institucional</div>
                  <div className="text-xs font-semibold text-perfil-blue uppercase tracking-wide mb-3">
                    Alcance: Nacional / Sectorial / Público
                  </div>
                  <a href="#" className="text-sm text-perfil-blue underline hover:text-360-yellow transition-colors mt-auto">
                    Ver ficha institucional
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INSTITUCIONES ASOCIADAS ───────────────────────────────── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="mb-14 text-center max-w-2xl mx-auto">
              {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-perfil-blue font-bold text-sm uppercase tracking-wide mb-4">
                Instituciones Asociadas
              </div> */}
              <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
                Instituciones Asociadas
              </h2>
              <div className="w-20 h-1 bg-360-yellow mx-auto rounded-full" />
              <p className="text-gray-500 mt-6">
                Entidades que integran formalmente el estándar dentro de sus redes, promoviendo su adopción y articulación operativa.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-gray-100 shadow hover:shadow-md transition-all duration-300 p-5 flex flex-col items-center text-center group hover:-translate-y-0.5"
                >
                  <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-3 group-hover:bg-deep-blue transition-colors duration-300">
                    <Building2 className="w-7 h-7 text-gray-400 group-hover:text-360-yellow transition-colors duration-300" />
                  </div>
                  <div className="text-xs font-semibold text-gray-600 text-center">Nombre Inst.</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PLATAFORMAS INTEGRADAS ────────────────────────────────── */}
        <section className="py-20 bg-deep-blue text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="mb-14 text-center max-w-2xl mx-auto">
              {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm uppercase tracking-wide mb-4">
                Plataformas Integradas
              </div> */}
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Plataformas Integradas
              </h2>
              <div className="w-20 h-1 bg-360-yellow mx-auto rounded-full" />
              <p className="text-gray-400 mt-6">
                Sistemas y soluciones tecnológicas complementarias que interoperan con Perfil360, fortaleciendo el ecosistema operativo.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {[
                { nombre: "Portal de empleo", icon: <Globe className="w-8 h-8 text-360-yellow" /> },
                { nombre: "Plataformas de inspección", icon: <Cpu className="w-8 h-8 text-360-yellow" /> },
                { nombre: "Software complementario", icon: <Cpu className="w-8 h-8 text-360-yellow" /> },
              ].map((p, i) => (
                <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1">
                  <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    {p.icon}
                  </div>
                  <div className="text-lg font-bold text-white">{p.nombre}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="bg-deep-blue rounded-3xl p-10 md:p-16 text-center text-white mb-12 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-perfil-blue blur-[60px]" />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  ¿Querés formar parte de la{" "}
                  <span className="text-360-yellow">Red Institucional?</span>
                </h3>
                <p className="text-gray-300 mb-8 max-w-xl mx-auto text-lg leading-relaxed">
                  Perfil360 evalúa integraciones institucionales y tecnológicas que aporten valor estructural al ecosistema.
                </p>
                <a
                  href="#"
                  className="inline-block px-10 py-4 bg-360-yellow text-deep-blue font-bold rounded-full hover:bg-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-base"
                >
                  Solicitar evaluación institucional
                </a>
              </div>
            </div>

            {/* ── CRITERIOS ────────────────────────────────────────── */}
            <div className="max-w-3xl mx-auto">
              <div className="mb-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-perfil-blue font-bold text-sm uppercase tracking-wide mb-4">
                  Criterios
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-deep-blue mb-2">Criterios de Integración Institucional</h4>
                <div className="w-16 h-1 bg-360-yellow mx-auto rounded-full" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Nivel de representatividad sectorial o territorial",
                  "Compromiso formal de articulación",
                  "Integración operativa o tecnológica",
                  "Aporte estructural al ecosistema",
                  "Proyección de impacto en la red",
                ].map((criterio, i) => (
                  <div key={i} className="flex items-start gap-3 p-5 rounded-2xl bg-white border border-gray-100 shadow hover:shadow-md transition-all duration-300">
                    <div className="w-8 h-8 bg-deep-blue rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-360-yellow font-bold text-sm">{i + 1}</span>
                    </div>
                    <p className="text-gray-700 font-medium text-sm leading-relaxed">{criterio}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-sm text-center mt-8">
                Cada caso se analiza de manera particular según su alcance y naturaleza.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
