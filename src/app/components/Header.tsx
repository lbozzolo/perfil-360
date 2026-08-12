"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { URLS } from "@/lib/site";
import { registrarCta } from "@/lib/analytics";

/**
 * Navegación simplificada (punto 10.3 de la propuesta): Trabajadores, Centros,
 * Directorio, Registro e Ingreso. Empresas sale del menú principal; la página
 * sigue publicada y accesible por URL.
 */
const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/trabajadores", label: "Trabajadores" },
  { href: "/centros", label: "Centros" },
  { href: URLS.directorio, label: "Directorio", external: true },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-border-gray">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/logo_certired_r.webp"
            alt="CertiRed"
            width={240}
            height={80}
            className="h-20 w-auto object-contain"
            priority
            unoptimized
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1 pl-8 border-l border-border-gray h-10 ml-8">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={`px-3 py-2 text-sm font-bold transition-colors rounded-lg ${
                !item.external && pathname === item.href
                  ? "text-perfil-blue bg-bg-light"
                  : "text-text-gray hover:text-perfil-blue hover:bg-bg-light"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3 ml-auto">
          <a
            href={URLS.login}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 text-sm font-bold text-perfil-blue border-2 border-border-gray rounded-full hover:border-perfil-blue hover:bg-perfil-blue hover:text-white transition-all"
          >
            Ingresar
          </a>

          <Link
            href={URLS.directorio}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 text-sm font-bold text-white bg-perfil-blue rounded-full hover:bg-deep-blue transition-all shadow-lg shadow-perfil-blue/20 flex items-center gap-2"
            onClick={() => registrarCta("directorio_consulta", "header")}
          >
            <Search size={18} />
            Consultar certificaciones
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-text-gray hover:text-perfil-blue"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-24 left-0 w-full bg-white border-b border-border-gray shadow-xl p-6 flex flex-col gap-6 animate-in slide-in-from-top-5">
          <nav className="flex flex-col gap-4">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={`text-lg font-bold ${
                  !item.external && pathname === item.href
                    ? "text-perfil-blue"
                    : "text-text-gray hover:text-perfil-blue"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-6 border-t border-border-gray">
            <a
              href={URLS.registro}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-6 py-3 text-sm font-bold text-perfil-blue border-2 border-border-gray rounded-full hover:border-perfil-blue hover:bg-perfil-blue hover:text-white transition-all"
              onClick={() => registrarCta("registro_trabajador", "header_mobile")}
            >
              Crear mi perfil
            </a>
            <a
              href={URLS.login}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-6 py-3 text-sm font-bold text-perfil-blue border-2 border-border-gray rounded-full hover:border-perfil-blue hover:bg-perfil-blue hover:text-white transition-all"
            >
              Ingresar
            </a>
            <Link
              href={URLS.directorio}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-6 py-3 text-sm font-bold text-white bg-perfil-blue rounded-full shadow-lg shadow-perfil-blue/20 flex items-center justify-center gap-2"
              onClick={() => {
                registrarCta("directorio_consulta", "header_mobile");
                setIsMenuOpen(false);
              }}
            >
              <Search size={18} />
              Consultar certificaciones
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
