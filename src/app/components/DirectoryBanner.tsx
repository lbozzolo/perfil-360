import Link from 'next/link';
import { Search } from 'lucide-react';

export default function DirectoryBanner() {
  return (
    <section className="py-16 bg-connection-teal/10 border-y border-connection-teal/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-perfil-blue mb-3">
            Directorio de trabajadores capacitados
          </h2>
          <p className="text-text-gray text-lg">
            Accedé al directorio público para buscar personas por nombre, DNI o empresa y verificar en segundos si tienen Perfil 360.
          </p>
        </div>
        
        <div className="shrink-0">
          <Link 
            href="#" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-360-yellow text-perfil-blue font-bold rounded-lg hover:bg-yellow-400 transition-colors shadow-md"
          >
            <Search size={20} />
            Ver directorio de trabajadores
          </Link>
        </div>
      </div>
    </section>
  );
}
