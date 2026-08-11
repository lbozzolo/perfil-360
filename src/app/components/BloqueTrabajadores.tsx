import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { URLS } from '@/lib/site';

const beneficios = [
  'Perfil gratuito.',
  'Certificaciones reunidas en un solo lugar.',
  'Información fácil de compartir con empresas.',
];

export default function BloqueTrabajadores() {
  return (
    <section id="trabajadores" className="py-24 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          <div className="flex-1 max-w-xl text-center lg:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-bg-light text-perfil-blue text-xs font-bold uppercase tracking-wider mb-4">
              Trabajadores
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4 tracking-tight">
              Llevá tus certificaciones con vos
            </h2>

            <p className="text-lg text-text-gray leading-relaxed mb-8">
              Tus cursos y certificaciones pueden quedar reunidos en un único
              perfil. Cuando un centro registrado carga una certificación a tu
              nombre, queda disponible en CertiRed para que puedas consultarla y
              compartirla.
            </p>

            <ul className="space-y-4 mb-10 inline-block text-left">
              {beneficios.map((beneficio) => (
                <li
                  key={beneficio}
                  className="flex items-start gap-3 text-base text-text-gray font-medium"
                >
                  <CheckCircle2
                    size={20}
                    className="text-connection-teal mt-0.5 shrink-0"
                  />
                  <span>{beneficio}</span>
                </li>
              ))}
            </ul>

            <div>
              <Link
                href={URLS.registro}
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-4 bg-perfil-blue text-white font-bold rounded-full hover:bg-deep-blue transition-all shadow-lg shadow-perfil-blue/20 hover:-translate-y-1"
              >
                Crear mi perfil gratis
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg">
            <div className="relative rounded-3xl overflow-hidden shadow-soft aspect-[4/3]">
              <img
                src="/images/persona-mostrando-celular-con-perfil.webp"
                alt="Trabajador mostrando sus certificaciones desde el perfil de CertiRed"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
