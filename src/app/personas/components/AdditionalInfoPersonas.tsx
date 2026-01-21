'use client';

import Link from 'next/link';

export default function AdditionalInfoPersonas() {
  return (
    <section className="public-visibility-section">
      {/* Privacidad */}
      <div className="py-16 bg-bg-light border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-deep-blue mb-4">Privacidad bajo control</h2>
            <p className="text-text-gray">
                Tu perfil puede tener visibilidad interna (para empresas/centros) y, si lo deseás, visibilidad pública controlada. Podés activarla o desactivarla cuando quieras.
            </p>
        </div>
      </div>

       {/* Emisión y digitalización */}
      <div className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-deep-blue mb-4 text-center">
                Tu perfil es gratis. La emisión de algunas certificaciones digitales puede tener un costo.
            </h2>
            <div className="text-text-gray space-y-4 max-w-3xl mx-auto text-center">
                <p>
                    Perfil 360 es gratuito para trabajadores. Sin embargo, la emisión/digitalización de una certificación (gestión de carga, validación y registro) puede tener un arancel definido por el Centro de Capacitación que la emite. Si aplica, se informa al momento de solicitar la carga.
                </p>
                <p className="font-bold text-perfil-blue">
                    Perfil 360 no te cobra por tener tu perfil. Si existe un costo por emitir/cargar una certificación, es un servicio del centro que la valida.
                </p>
            </div>
        </div>
      </div>

      {/* Crecimiento / Invitación */}
      <div id="crecimiento" className="py-20 bg-deep-blue text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Si tu centro o tu empresa todavía no usa Perfil 360, los invitamos.</h2>
            <p className="text-xl text-gray-300 mb-8">
                Si querés que tus capacitaciones aparezcan verificadas en tu perfil, necesitás que el centro o la empresa que las emitió esté en Perfil 360. Si todavía no están, podés solicitar el alta y nos contactamos para invitarlos a sumarse.
            </p>
            <Link 
                href="#"
                className="inline-block px-8 py-4 bg-360-yellow text-deep-blue font-bold rounded-full hover:bg-white transition-all shadow-lg"
            >
                Solicitar alta de mi empresa/centro
            </Link>
        </div>
      </div>
      
       {/* Precio */}
      <div className="py-16 bg-bg-light">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-deep-blue mb-4">Costo para personas</h2>
            <p className="text-text-gray text-lg mb-2">
                Perfil 360 es <span className="font-bold text-green-600">gratuito</span> para trabajadores. Podés solicitar la apertura de tu perfil personal sin costo.
            </p>
            <p className="text-sm text-text-gray">
                Importante: la emisión/digitalización de certificaciones puede tener un arancel definido por el centro que las emite (si aplica, se informa antes).
            </p>
         </div>
      </div>
    </section>
  );
}
