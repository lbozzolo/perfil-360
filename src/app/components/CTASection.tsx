import Link from 'next/link';
const directorioUrl = process.env.NEXT_PUBLIC_DIRECTORIO_URL || 'https://directorio.perfil360.com.ar';

export default function CTASection() {
  return (
    <section className="py-20 bg-connection-teal text-white text-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
          “La experiencia del trabajador deja de perderse y comienza a tener valor verificable.”
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href={directorioUrl}
            className="w-full sm:w-auto px-8 py-4 bg-360-yellow text-perfil-blue font-bold rounded-lg hover:bg-yellow-400 transition-colors shadow-lg"
          >
            Verificar perfil laboral
          </Link>
          
          <Link 
            href="https://registro.perfil360.com.ar" 
            className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
          >
            Solicitar demo y crear cuenta
          </Link>
        </div>
      </div>
    </section>
  );
}
