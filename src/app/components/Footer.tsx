import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-deep-blue text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-360-yellow rounded-full flex items-center justify-center text-perfil-blue font-bold text-xl">
                P
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-bold text-white tracking-tight">PERFIL 360</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Trazabilidad laboral</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-8">
              Dando memoria, visibilidad y justicia al esfuerzo de cada trabajador. Una plataforma integral para el ecosistema laboral.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-bold text-white mb-6">Plataforma</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-360-yellow transition-colors">Cómo funciona</Link></li>
              <li><Link href="#" className="hover:text-360-yellow transition-colors">Casos de uso</Link></li>
              <li><Link href="#" className="hover:text-360-yellow transition-colors">Planes y precios</Link></li>
              <li><Link href="#" className="hover:text-360-yellow transition-colors">Directorio público</Link></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-bold text-white mb-6">Soporte</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-360-yellow transition-colors">Preguntas frecuentes</Link></li>
              <li><Link href="#" className="hover:text-360-yellow transition-colors">Centro de ayuda</Link></li>
              <li><Link href="#" className="hover:text-360-yellow transition-colors">Contacto</Link></li>
              <li><Link href="#" className="hover:text-360-yellow transition-colors">Ingresar</Link></li>
            </ul>
          </div>

          {/* Newsletter / Legal */}
          <div>
            <h4 className="font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-400 mb-8">
              <li><Link href="#" className="hover:text-360-yellow transition-colors">Términos y condiciones</Link></li>
              <li><Link href="#" className="hover:text-360-yellow transition-colors">Política de privacidad</Link></li>
            </ul>
            
            <h4 className="font-bold text-white mb-4">Suscribite</h4>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-360-yellow w-full"
              />
              <button className="bg-360-yellow text-perfil-blue px-4 py-2 rounded-r-lg font-bold text-sm hover:bg-yellow-400 transition-colors">
                OK
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Perfil 360. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>Hecho con</span>
            <span className="text-red-500">❤</span>
            <span>en Argentina</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
