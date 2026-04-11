import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Contacto – Comunicate con Certired",
  description:
    "¿Tenés consultas o querés sumar tu organización a Certired? Contactanos por email, teléfono o redes sociales. Estamos en Av. Hipólito Yrigoyen 146, Córdoba, Argentina.",
  openGraph: {
    title: "Contacto – Comunicate con Certired",
    description:
      "¿Tenés consultas o querés sumar tu organización? Contactanos por email, teléfono o redes sociales.",
    url: "https://www.certired.com.ar/contacto",
  },
};
import { MapPin, Mail, Phone, Facebook, Linkedin, Instagram, Youtube } from "lucide-react";

const address =
  process.env.NEXT_PUBLIC_ADDRESS ||
  "Av. Hipólito Yrigoyen 146, Piso 15. Ciudad de Córdoba (CP 5000), Argentina";
const email = process.env.NEXT_PUBLIC_EMAIL || "contacto@certired.com.ar";
const phone = process.env.NEXT_PUBLIC_PHONE || "+54 351 000-0000";
const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;
const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL;
const youtubeUrl = process.env.NEXT_PUBLIC_YOUTUBE_URL;

export default function ContactoPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        {/* Dos columnas: info + imagen */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 items-stretch">
              {/* Columna izquierda — título, bajada y datos de contacto */}
              <div className="flex flex-col">
                <div className="inline-block self-start px-5 py-2.5 bg-perfil-blue/10 text-perfil-blue font-extrabold rounded-full text-sm uppercase tracking-wider mb-6">
                  Contacto
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-[1.1] tracking-tight text-deep-blue">
                  Estamos para <span className="text-connection-teal">ayudarte</span>
                </h1>
                <p className="text-lg text-text-gray mb-10 leading-relaxed">
                  Si tenés consultas, querés sumar tu organización o necesitás soporte, escribinos. Nuestro equipo responde a la brevedad.
                </p>

                <ul className="space-y-6 mb-10">
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-perfil-blue/10 text-perfil-blue flex items-center justify-center">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-deep-blue uppercase tracking-wider mb-1">
                        Dirección
                      </h3>
                      <p className="text-base text-text-gray leading-relaxed">{address}</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-perfil-blue/10 text-perfil-blue flex items-center justify-center">
                      <Mail size={22} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-deep-blue uppercase tracking-wider mb-1">
                        Email
                      </h3>
                      <a
                        href={`mailto:${email}`}
                        className="text-base text-text-gray hover:text-perfil-blue transition-colors"
                      >
                        {email}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-perfil-blue/10 text-perfil-blue flex items-center justify-center">
                      <Phone size={22} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-deep-blue uppercase tracking-wider mb-1">
                        Teléfono
                      </h3>
                      <a
                        href={`tel:${phone.replace(/\s|-/g, "")}`}
                        className="text-base text-text-gray hover:text-perfil-blue transition-colors"
                      >
                        {phone}
                      </a>
                    </div>
                  </li>
                </ul>

                <div>
                  <h3 className="text-sm font-bold text-deep-blue uppercase tracking-wider mb-4">
                    Seguinos
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="w-11 h-11 rounded-full bg-perfil-blue/10 text-perfil-blue flex items-center justify-center hover:bg-perfil-blue hover:text-white transition-all"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="w-11 h-11 rounded-full bg-perfil-blue/10 text-perfil-blue flex items-center justify-center hover:bg-perfil-blue hover:text-white transition-all"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href={youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                      className="w-11 h-11 rounded-full bg-perfil-blue/10 text-perfil-blue flex items-center justify-center hover:bg-perfil-blue hover:text-white transition-all"
                    >
                      <Youtube size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Columna derecha — imagen vertical completa */}
              <div className="w-full min-h-[500px] lg:min-h-0">
                <div className="relative w-full h-full min-h-[500px] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/images/edificio-certired.webp"
                    alt="Edificio Certired"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mapa */}
        <section className="pb-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-deep-blue mb-8 text-center">
              ¿Dónde estamos?
            </h2>
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-xl border border-border-gray">
              <iframe
                src={mapSrc}
                title="Ubicación Certired"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
