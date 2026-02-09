"use client";

import Link from 'next/link';
const directorioUrl = process.env.NEXT_PUBLIC_DIRECTORIO_URL || 'https://directorio.perfil360.com.ar';
import Image from 'next/image';
import { Menu, X, Search } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-border-gray">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logo_perfil360_md.webp"
              alt="Perfil 360"
              width={240}
              height={80}
              className="h-20 w-auto object-contain"
              priority
              unoptimized // Esto ayuda a evitar el caché de optimización de Next.js durante el desarrollo
            />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 pl-8 border-l border-border-gray h-10 ml-8">
          <Link href="/" className={`px-4 py-2 text-sm font-bold transition-colors rounded-lg ${pathname === '/' ? 'text-perfil-blue bg-bg-light' : 'text-text-gray hover:text-perfil-blue hover:bg-bg-light'}`}>
            Inicio
          </Link>
          <Link href="/personas" className={`px-4 py-2 text-sm font-bold transition-colors rounded-lg ${pathname === '/personas' ? 'text-perfil-blue bg-bg-light' : 'text-text-gray hover:text-perfil-blue hover:bg-bg-light'}`}>
            Personas
          </Link>
          <Link href="/empresas" className={`px-4 py-2 text-sm font-bold transition-colors rounded-lg ${pathname === '/empresas' ? 'text-perfil-blue bg-bg-light' : 'text-text-gray hover:text-perfil-blue hover:bg-bg-light'}`}>
            Empresas
          </Link>
          <Link href="/centros" className={`px-4 py-2 text-sm font-bold transition-colors rounded-lg ${pathname === '/centros' ? 'text-perfil-blue bg-bg-light' : 'text-text-gray hover:text-perfil-blue hover:bg-bg-light'}`}>
            Centros
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3 ml-auto">
          {/* <Link 
            href="#" 
            className="px-6 py-2.5 text-sm font-bold text-perfil-blue border-2 border-border-gray rounded-full hover:border-perfil-blue hover:bg-perfil-blue hover:text-white transition-all"
          >
            Solicitar demo
          </Link> */}
          <Link 
            href={directorioUrl}
            className="px-6 py-2.5 text-sm font-bold text-white bg-perfil-blue rounded-full hover:bg-deep-blue transition-all shadow-lg shadow-perfil-blue/20"
          >
            Verificar perfil laboral
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-text-gray hover:text-perfil-blue"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-border-gray shadow-xl p-6 flex flex-col gap-6 animate-in slide-in-from-top-5">
          <nav className="flex flex-col gap-4">
            <Link href="/" className={`text-lg font-bold ${pathname === '/' ? 'text-perfil-blue' : 'text-text-gray hover:text-perfil-blue'}`} onClick={() => setIsMenuOpen(false)}>
              Inicio
            </Link>
            <Link href="/personas" className={`text-lg font-bold ${pathname === '/personas' ? 'text-perfil-blue' : 'text-text-gray hover:text-perfil-blue'}`} onClick={() => setIsMenuOpen(false)}>
              Personas
            </Link>
            <Link href="/centros" className={`text-lg font-bold ${pathname === '/centros' ? 'text-perfil-blue' : 'text-text-gray hover:text-perfil-blue'}`} onClick={() => setIsMenuOpen(false)}>
              Centros
            </Link>
            <Link href="/empresas" className={`text-lg font-bold ${pathname === '/empresas' ? 'text-perfil-blue' : 'text-text-gray hover:text-perfil-blue'}`} onClick={() => setIsMenuOpen(false)}>
              Empresas
            </Link>
          </nav>
          <div className="flex flex-col gap-3 pt-6 border-t border-border-gray">
            <Link 
              href={directorioUrl}
              className="w-full text-center px-6 py-3 text-sm font-bold text-white bg-perfil-blue rounded-full shadow-lg shadow-perfil-blue/20"
            >
              Verificar perfil laboral
            </Link>
            {/* <Link 
              href="#" 
              className="w-full text-center px-6 py-3 text-sm font-bold text-perfil-blue border-2 border-border-gray rounded-full"
            >
              Solicitar demo
            </Link> */}
          </div>
        </div>
      )}
    </header>
  );
}
