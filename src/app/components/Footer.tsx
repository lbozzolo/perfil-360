import Link from 'next/link';
import { Linkedin, Youtube, Instagram, Search } from 'lucide-react';
import { URLS, BRAND } from '@/lib/site';
import CtaLink from './CtaLink';

const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/company/identidadlaboral/?viewAsMember=true';
const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/certired.oficial/';
const youtubeUrl = process.env.NEXT_PUBLIC_YOUTUBE_URL || 'https://www.youtube.com/@CertiRed';

export default function Footer() {
  return (
    <footer className="bg-[#101012] text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">

          {/* Marca */}
          <div className="col-span-1 md:col-span-2 max-w-xs md:max-w-sm">
            {/* El logo es azul sobre fondo transparente, así que sobre el
                footer oscuro va montado en una placa blanca para que se lea. */}
            <Link href="/" className="inline-block mb-6 bg-white rounded-xl px-5 py-4">
              <img
                src="/images/logo-nuevo-certired.webp"
                alt="CertiRed"
                className="w-44 h-auto object-contain"
              />
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              {BRAND.tagline}
            </p>

            <div className="flex gap-4">
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Navegación del punto 8 de la propuesta */}
          <div>
            <h2 className="font-bold text-white mb-6">Navegación</h2>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/trabajadores" className="hover:text-360-yellow transition-colors">Trabajadores</Link></li>
              <li><Link href="/centros" className="hover:text-360-yellow transition-colors">Centros de capacitación</Link></li>
              <li>
                <a href={URLS.directorio} target="_blank" rel="noopener noreferrer" className="hover:text-360-yellow transition-colors">
                  Directorio
                </a>
              </li>
              <li>
                <CtaLink href={URLS.registro} evento="registro_trabajador" origen="footer" className="hover:text-360-yellow transition-colors">
                  Crear perfil
                </CtaLink>
              </li>
              <li>
                <a href={URLS.login} target="_blank" rel="noopener noreferrer" className="hover:text-360-yellow transition-colors">
                  Ingresar
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <h2 className="font-bold text-white mb-6">Legal</h2>
            <ul className="space-y-4 text-sm text-gray-400 mb-8">
              <li><Link href="/terminos" className="hover:text-360-yellow transition-colors">Términos y condiciones</Link></li>
              <li><Link href="/privacidad" className="hover:text-360-yellow transition-colors">Política de privacidad</Link></li>
              <li><Link href="/contacto" className="hover:text-360-yellow transition-colors">Contacto</Link></li>
            </ul>

            <div className="mt-6">
              <CtaLink
                href={URLS.directorio}
                evento="directorio_consulta"
                origen="footer"
                className="inline-flex items-center justify-center px-6 py-2 text-base font-bold text-white bg-perfil-blue rounded-full hover:bg-deep-blue transition-all shadow-lg shadow-perfil-blue/20 gap-2"
              >
                <Search size={18} className="-mt-0.5" />
                Consultar certificaciones
              </CtaLink>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} CertiRed. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>Desarrollado por <a href="https://verticedigital.com.ar" target="_blank" rel="noopener noreferrer">Vértice Digital</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
