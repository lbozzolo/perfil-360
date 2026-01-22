'use client';

import { UserSearch, CalendarClock, ClipboardCheck, Building2, ShieldCheck, Gavel } from 'lucide-react';

export default function BenefitsEmpresas() {
  const cards = [
    {
      icon: <UserSearch size={32} className="text-perfil-blue" />,
      title: "Competencias visibles por trabajador",
      text: "Accedés al perfil del trabajador y verificás capacitaciones, certificaciones y estados de vigencia en tiempo real.",
    },
    {
      icon: <CalendarClock size={32} className="text-perfil-blue" />,
      title: "Control de vencimientos",
      text: "Si es reglamentaria, se ve el estado (vigente / por vencer / vencida). Si es complementaria, queda registrada sin vencimiento.",
    },
    {
      icon: <ClipboardCheck size={32} className="text-perfil-blue" />,
      title: "Evidencia operativa",
      text: "La supervisión deja registro: observaciones, hallazgos y necesidades de capacitación quedan trazadas en informes de inspección.",
    },
    {
      icon: <Building2 size={32} className="text-perfil-blue" />,
      title: "Estructura por sucursales y staff",
      text: "Creás una sucursal, vinculás staff y mantenés el acceso ordenado por sede o área operativa.",
    },
    {
      icon: <ShieldCheck size={32} className="text-perfil-blue" />,
      title: "Acceso por roles (Plus)",
      text: "Vinculás inspectores y habilitás gerencia o mandos medios como verificadores con acceso controlado y jerárquico.",
    },
    {
      icon: <Gavel size={32} className="text-perfil-blue" />,
      title: "Gestión por licitación (Plus)",
      text: "Abrís solicitudes de capacitación, recibís propuestas de centros registrados y comparás presupuestos con trazabilidad.",
    }
  ];

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Problema y promesa */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-6">
            Del “mandame el certificado” a un sistema que deja huella.
          </h2>
          <p className="text-xl text-text-gray">
            La operación no falla solo por falta de capacitación; muchas veces falla por falta de visibilidad. Certificados dispersos, vencimientos silenciosos y supervisiones que no quedan registradas. <strong className="text-deep-blue">Perfil 360 ordena el circuito:</strong> competencias verificables, vigencias claras e inspecciones con evidencia.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 md:hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-bg-light rounded-xl flex items-center justify-center shadow-inner mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-deep-blue mb-4">{card.title}</h3>
              <p className="text-text-gray leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
