import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Header />
      <main className="flex-grow max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-perfil-blue">POLÍTICA DE PRIVACIDAD – PERFIL 360</h1>
        <p className="mb-2 text-sm text-gray-500">Última actualización: 09 de febrero del 2026</p>
        <p className="mb-6 text-gray-700">La presente Política de Privacidad describe la forma en que Perfil 360 recopila, utiliza, almacena, protege y trata los datos personales de los usuarios que acceden y utilizan la plataforma, en cumplimiento de la legislación vigente en la República Argentina.<br/>El uso de la plataforma implica el conocimiento y aceptación de esta Política de Privacidad.</p>
        <h2 className="text-xl font-bold mt-8 mb-2">1. Marco legal aplicable</h2>
        <p className="mb-4 text-gray-700">Perfil 360 cumple con lo establecido en la Ley N.º 25.326 de Protección de los Datos Personales, su decreto reglamentario y las normas complementarias dictadas por la Agencia de Acceso a la Información Pública (AAIP).<br/>Dicha normativa tiene por objeto la protección integral de los datos personales asentados en archivos, registros, bancos o bases de datos, garantizando el derecho al honor y a la intimidad de las personas.</p>
        <h2 className="text-xl font-bold mt-8 mb-2">2. Datos personales recolectados</h2>
        <p className="mb-4 text-gray-700">Perfil 360 podrá recolectar y tratar, según el rol del usuario y las funcionalidades utilizadas, los siguientes datos personales:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>datos identificatorios (nombre, apellido, tipo y número de documento);</li>
          <li>datos de contacto (correo electrónico, teléfono);</li>
          <li>datos laborales y formativos (capacitaciones, certificaciones, evaluaciones, historial formativo);</li>
          <li>datos de vinculación institucional (empresa, centro de capacitación, rol, función);</li>
          <li>datos de uso de la plataforma (accesos, interacciones, registros operativos).</li>
        </ul>
        <p className="mb-4 text-gray-700">La información es suministrada directamente por el usuario o por actores habilitados dentro del sistema, conforme a los roles definidos en la plataforma.<br/>www.perfil360.com.ar</p>
        <h2 className="text-xl font-bold mt-8 mb-2">3. Finalidad del tratamiento de los datos</h2>
        <p className="mb-4 text-gray-700">Los datos personales son tratados exclusivamente para las siguientes finalidades:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>permitir el funcionamiento de la plataforma Perfil 360;</li>
          <li>crear, administrar y mantener perfiles laborales y formativos;</li>
          <li>registrar y visualizar capacitaciones, certificaciones y evaluaciones;</li>
          <li>facilitar procesos de verificación, trazabilidad y consulta;</li>
          <li>cumplir con requerimientos operativos, contractuales o normativos;</li>
          <li>mejorar la experiencia de uso y la calidad del servicio.</li>
        </ul>
        <p className="mb-4 text-gray-700">En ningún caso los datos serán utilizados para finalidades distintas o incompatibles con las aquí descriptas.</p>
        <h2 className="text-xl font-bold mt-8 mb-2">4. Consentimiento del titular de los datos</h2>
        <p className="mb-4 text-gray-700">El titular de los datos personales presta su consentimiento libre, expreso e informado para el tratamiento de su información al:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>registrarse en la plataforma,</li>
          <li>utilizar los servicios de Perfil 360,</li>
          <li>o autorizar la carga de información por terceros habilitados.</li>
        </ul>
        <p className="mb-4 text-gray-700">El consentimiento podrá ser revocado en cualquier momento, sin efectos retroactivos, conforme a la legislación vigente.</p>
        <h2 className="text-xl font-bold mt-8 mb-2">5. Almacenamiento y seguridad de la información</h2>
        <p className="mb-4 text-gray-700">Perfil 360 adopta medidas técnicas y organizativas razonables para proteger los datos personales contra:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>accesos no autorizados,</li>
          <li>pérdida,</li>
          <li>alteración,</li>
          <li>divulgación indebida,</li>
          <li>o destrucción.</li>
        </ul>
        <p className="mb-4 text-gray-700">La información es almacenada en infraestructura tecnológica en la nube, provista por servicios de backend y hosting de nivel empresarial, que cumplen con estándares internacionales de seguridad, disponibilidad y resiliencia, incluyendo:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>cifrado de datos en tránsito y en reposo,</li>
          <li>control de accesos y autenticación,</li>
          <li>monitoreo de actividad,</li>
          <li>copias de seguridad periódicas,</li>
          <li>y mecanismos de alta disponibilidad.</li>
        </ul>
        <p className="mb-4 text-gray-700">Perfil 360 no comercializa ni cede datos personales a terceros ajenos al ecosistema de la plataforma.</p>
        <h2 className="text-xl font-bold mt-8 mb-2">6. Acceso y visualización de la información</h2>
        <p className="mb-4 text-gray-700">El acceso a los datos personales se encuentra limitado conforme a:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>el rol del usuario,</li>
          <li>los permisos otorgados,</li>
          <li>y las configuraciones de visibilidad definidas dentro de la plataforma.</li>
        </ul>
        <p className="mb-4 text-gray-700">Determinada información puede ser visualizada por terceros habilitados (empresas, centros de capacitación, ART u organismos), únicamente con fines de verificación, trazabilidad o control, y siempre dentro del entorno de Perfil 360.</p>
        <h2 className="text-xl font-bold mt-8 mb-2">7. Derechos del titular de los datos</h2>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>acceder a sus datos;</li>
          <li>solicitar su rectificación, actualización o supresión;</li>
          <li>oponerse al tratamiento de los mismos;</li>
          <li>solicitar información sobre el uso de sus datos.</li>
        </ul>
        <p className="mb-4 text-gray-700">Estos derechos podrán ejercerse conforme al procedimiento establecido por la Ley 25.326, mediante los canales de contacto habilitados por Perfil 360.<br/>La Agencia de Acceso a la Información Pública, en su carácter de órgano de control de la Ley 25.326, tiene la atribución de atender denuncias y reclamos relacionados con el incumplimiento de las normas sobre protección de datos personales.<br/>www.perfil360.com.ar</p>
        <h2 className="text-xl font-bold mt-8 mb-2">8. Conservación de los datos</h2>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>exista una relación activa con la plataforma,</li>
          <li>sea necesario para cumplir con las finalidades para las cuales fueron recolectados,</li>
          <li>o exista una obligación legal o contractual que lo requiera.</li>
        </ul>
        <p className="mb-4 text-gray-700">Una vez cumplida dicha finalidad, los datos podrán ser eliminados o anonimizados, según corresponda.</p>
        <h2 className="text-xl font-bold mt-8 mb-2">9. Modificaciones de la Política de Privacidad</h2>
        <p className="mb-4 text-gray-700">Perfil 360 podrá modificar la presente Política de Privacidad en cualquier momento.<br/>Las modificaciones serán publicadas en el sitio web oficial.<br/>El uso continuado de la plataforma implicará la aceptación de las modificaciones introducidas.</p>
        <h2 className="text-xl font-bold mt-8 mb-2">10. Contacto</h2>
        <p className="mb-4 text-gray-700">Para ejercer derechos, realizar consultas o solicitar información relacionada con esta Política de Privacidad, el usuario podrá comunicarse a través de los canales oficiales informados en el sitio web de Perfil 360.<br/>www.perfil360.com.ar</p>
      </main>
      <Footer />
    </div>
  );
}
