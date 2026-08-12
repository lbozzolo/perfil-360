'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { registrarCta, type EventoCta } from '@/lib/analytics';

type Props = {
  href: string;
  evento: EventoCta;
  origen: string;
  children: ReactNode;
  className?: string;
  target?: string;
};

/**
 * Enlace que registra el clic antes de navegar.
 *
 * Existe para que los bloques del Home puedan seguir siendo server components:
 * el único pedazo que necesita ejecutarse en el navegador es este.
 */
export default function CtaLink({
  href,
  evento,
  origen,
  children,
  className,
  target = '_blank',
}: Props) {
  return (
    <Link
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className={className}
      onClick={() => registrarCta(evento, origen)}
    >
      {children}
    </Link>
  );
}
