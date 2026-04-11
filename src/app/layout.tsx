import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";


const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.certired.com.ar"),
  title: {
    default: "Certired – Plataforma de trazabilidad laboral",
    template: "%s | Certired",
  },
  description:
    "Certired conecta trabajadores, empresas y centros de capacitación en un ecosistema de trazabilidad laboral verificada. Gestioná capacitaciones, certificaciones y competencias en un solo lugar.",
  keywords: [
    "trazabilidad laboral",
    "certificaciones laborales",
    "capacitaciones verificadas",
    "perfil laboral digital",
    "gestión de competencias",
    "Certired",
    "Argentina",
  ],
  authors: [{ name: "Certired" }],
  creator: "Certired",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.certired.com.ar",
    siteName: "Certired",
    title: "Certired – Plataforma de trazabilidad laboral",
    description:
      "Conectamos trabajadores, empresas y centros de capacitación en un ecosistema de información laboral verificada.",
    images: [
      {
        url: "/images/og-image-certired.webp",
        width: 1200,
        height: 630,
        alt: "Certired – Plataforma de trazabilidad laboral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Certired – Plataforma de trazabilidad laboral",
    description:
      "Conectamos trabajadores, empresas y centros de capacitación en un ecosistema de información laboral verificada.",
    images: ["/images/og-image-certired.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />

      </body>
    </html>
  );
}
