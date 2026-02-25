import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TerminosPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-16 text-justify text-gray-800 flex-grow">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">TÉRMINOS Y CONDICIONES DE USO – PERFIL 360</h1>
        <p className="mb-2 text-sm text-gray-500">Última actualización: 09 de febrero del 2026</p>
        <p className="mb-6">Al registrarse, acceder o utilizar la plataforma Perfil 360, el usuario declara haber leído, comprendido y aceptado expresamente los presentes Términos y Condiciones de Uso, los cuales regulan el acceso, utilización y permanencia en la plataforma.</p>
        <h2 className="text-lg font-bold mt-8 mb-2">1. Descripción del servicio</h2>
        <p className="mb-4">Perfil 360 es una plataforma digital privada de trazabilidad laboral y formativa, destinada a la gestión, registro, visualización y vinculación de información relacionada con:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>capacitaciones,</li>
          <li>certificaciones,</li>
          <li>competencias laborales,</li>
          <li>evaluaciones,</li>
          <li>y relaciones entre trabajadores, empresas, centros de capacitación y otros actores del ecosistema laboral.</li>
        </ul>
        <p className="mb-4">La información registrada tiene una finalidad informativa, operativa y documental, y puede ser utilizada como soporte de respaldo en procesos de control, auditoría, supervisión, verificación o cumplimiento normativo por parte de empresas, centros de capacitación, aseguradoras de riesgos del trabajo (ART), organismos de control u otros terceros interesados.<br/>Perfil 360 no constituye un registro público oficial, ni reemplaza registros estatales, administrativos o gubernamentales, ni sustituye resoluciones, habilitaciones, licencias o dictámenes emitidos por autoridades competentes.<br/>www.perfil360.com.ar</p>
        <h2 className="text-lg font-bold mt-8 mb-2">2. Actores de la plataforma</h2>
        <p className="mb-4">La plataforma se encuentra orientada a los siguientes actores:</p>
        <h3 className="font-bold mt-4 mb-2">2.1. Trabajadores</h3>
        <p className="mb-4">Personas titulares de su perfil laboral y formativo, quienes pueden visualizar y compartir la información registrada conforme a las funcionalidades del sistema.</p>
        <h3 className="font-bold mt-4 mb-2">2.2. Centros de capacitación</h3>
        <p className="mb-4">Organizaciones responsables de cargar capacitaciones, certificaciones y evaluaciones, garantizando la legitimidad, veracidad y trazabilidad de la información registrada.</p>
        <h3 className="font-bold mt-4 mb-2">2.3. Empresas</h3>
        <p className="mb-4">Organizaciones que acceden a la verificación de perfiles laborales y a la vinculación de personas con roles o funciones laborales, exclusivamente para fines legítimos.</p>
        <h3 className="font-bold mt-4 mb-2">2.4. Otros actores habilitados</h3>
        <p className="mb-4">ART, organismos de control, supervisores, evaluadores o responsables técnicos, conforme a los permisos otorgados dentro de la plataforma.<br/>Cada actor actúa dentro de su rol y asume responsabilidad por la información que carga, vincula o utiliza.</p>
        <h2 className="text-lg font-bold mt-8 mb-2">3. Registro y veracidad de la información</h2>
        <p className="mb-4">El usuario declara que toda la información ingresada en la plataforma es veraz, completa, actualizada y de su exclusiva responsabilidad.<br/>Perfil 360 no valida de oficio la veracidad legal, técnica o normativa de los datos cargados, salvo cuando se indique expresamente lo contrario mediante procesos específicos habilitados dentro de la plataforma.<br/>Cada actor que carga información asume plena responsabilidad por los datos registrados y por las consecuencias derivadas de su utilización.<br/>www.perfil360.com.ar</p>
        <h2 className="text-lg font-bold mt-8 mb-2">4. Derecho de uso de la plataforma</h2>
        <p className="mb-4">Perfil 360 otorga a los usuarios un derecho de uso no exclusivo, no transferible y revocable para acceder y utilizar la plataforma conforme a estos Términos y Condiciones.<br/>Queda prohibido:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>utilizar la plataforma con fines ilícitos, fraudulentos o abusivos;</li>
          <li>suplantar identidades o falsear vínculos laborales o formativos;</li>
          <li>interferir, dañar o alterar el funcionamiento del sistema;</li>
          <li>realizar acciones que afecten la experiencia de otros usuarios.</li>
        </ul>
        <h2 className="text-lg font-bold mt-8 mb-2">5. Contenido, trazabilidad y responsabilidad</h2>
        <p className="mb-4">La información registrada en Perfil 360 es cargada por usuarios identificables y responsables, tales como centros de capacitación, empresas, instructores, evaluadores u otros actores habilitados.<br/>Perfil 360 no certifica oficialmente capacitaciones, competencias ni relaciones laborales, ni garantiza la exactitud, vigencia o validez legal de la información cargada.<br/>La plataforma funciona como sistema de registro, trazabilidad y visualización, y no como autoridad certificante.</p>
        <h2 className="text-lg font-bold mt-8 mb-2">6. Servicios, precios y pagos</h2>
        <p className="mb-4">La creación del perfil laboral y el acceso a la plataforma no tienen costo mensual para el trabajador.<br/>Determinados servicios pueden tener costos asociados, tales como:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>la carga de antecedentes de capacitaciones ya realizadas;</li>
          <li>servicios específicos ofrecidos a centros de capacitación o empresas.</li>
        </ul>
        <p className="mb-4">Los valores vigentes serán informados dentro de la plataforma o por los canales oficiales de Perfil 360.<br/>Los pagos realizados no son reembolsables, salvo disposición legal en contrario.<br/>www.perfil360.com.ar</p>
        <h2 className="text-lg font-bold mt-8 mb-2">7. Responsabilidad y limitaciones</h2>
        <p className="mb-4">Perfil 360 no asume responsabilidad por decisiones laborales, contractuales, legales o administrativas tomadas por terceros en base a la información visualizada en la plataforma.<br/>El uso de la información es responsabilidad exclusiva de quien la consulta o utiliza.<br/>Perfil 360 no será responsable por daños directos o indirectos derivados del uso o interpretación de los datos registrados.</p>
        <h2 className="text-lg font-bold mt-8 mb-2">8. Propiedad intelectual</h2>
        <p className="mb-4">La plataforma Perfil 360 constituye una obra de software original e inédita, protegida por las leyes de propiedad intelectual vigentes.<br/>El diseño, la arquitectura funcional, la lógica operativa, los flujos de navegación, la estructura de datos, la interfaz, los contenidos y la documentación asociada se encuentran protegidos, incluyendo su registro como obra inédita de software conforme a la normativa aplicable.<br/>Queda prohibida la reproducción total o parcial, copia, adaptación, ingeniería inversa, explotación comercial o utilización no autorizada de la plataforma o de cualquiera de sus componentes.<br/>El uso de la plataforma no otorga al usuario ningún derecho de propiedad sobre la misma.</p>
        <h2 className="text-lg font-bold mt-8 mb-2">9. Modificaciones de los términos</h2>
        <p className="mb-4">Perfil 360 podrá modificar los presentes Términos y Condiciones en cualquier momento.<br/>Las modificaciones serán publicadas en el sitio web oficial.<br/>El uso continuado de la plataforma implicará la aceptación automática de las modificaciones introducidas.<br/>www.perfil360.com.ar</p>
        <h2 className="text-lg font-bold mt-8 mb-2">10. Legislación aplicable y jurisdicción</h2>
        <p className="mb-4">Los presentes Términos y Condiciones se rigen por las leyes vigentes de la República Argentina.<br/>Cualquier controversia derivada del uso de la plataforma será sometida a la jurisdicción de los tribunales competentes, salvo disposición legal en contrario.<br/>www.perfil360.com.ar</p>
      </main>
      <Footer />
    </div>
  );
}
