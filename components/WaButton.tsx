'use client';

import { waLink } from '@/lib/site';
import { track } from '@/lib/track';

// Botón/enlace de WhatsApp con tracking y mensaje contextual.
export function WaButton({
  message,
  location,
  className = 'btn btn-whatsapp',
  children = 'WhatsApp directo',
}: {
  message?: string;
  location: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track('whatsapp_click', { location })}
      className={className}
    >
      {children}
    </a>
  );
}
