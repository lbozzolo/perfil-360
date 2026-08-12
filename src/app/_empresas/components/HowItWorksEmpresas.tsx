'use client';

export default function HowItWorksEmpresas() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
            Empezá simple. Escalá a evidencia operativa cuando lo necesites.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connector Line (Desktop) - Adjusted for 4 columns */}
            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-0.5 bg-gray-200 -z-0"></div>

          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-deep-blue text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-deep-blue/20">
              1
            </div>
            <h3 className="text-xl font-bold text-deep-blue mb-4">Registrás tu empresa</h3>
            <p className="text-text-gray text-sm">
              Comenzás con el Plan Gratuito completando los datos básicos de tu organización.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-deep-blue text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-deep-blue/20">
              2
            </div>
            <h3 className="text-xl font-bold text-deep-blue mb-4">Creás sucursal y staff</h3>
            <p className="text-text-gray text-sm">
               Creás tu primera sucursal operativa y vinculás a las personas que forman parte de tu equipo.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-deep-blue text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-deep-blue/20">
              3
            </div>
            <h3 className="text-xl font-bold text-deep-blue mb-4">Verificás competencias</h3>
            <p className="text-text-gray text-sm mr-4">
              Desde la administración, accedés al perfil de cada trabajador para chequear certificaciones y vigencias en tiempo real.
            </p>
          </div>

           {/* Step 4 */}
           <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-360-yellow text-deep-blue rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-yellow-500/20">
              4
            </div>
            <h3 className="text-xl font-bold text-deep-blue mb-4">Escalás a Plan Plus</h3>
            <p className="text-text-gray text-sm">
              Cuando necesitás inspectores en campo, acceso para mandos medios o licitaciones, activás el Plan Plus.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
