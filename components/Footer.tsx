'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { site, waLink } from '@/lib/site';
import { services } from '@/lib/services';
import { track } from '@/lib/track';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-noir">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link href="/" aria-label="ARTEL — Inicio">
            <Image
              src="/media/logo-artel-blanco.png"
              alt="ARTEL"
              width={119}
              height={30}
              className="h-14 w-auto"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm text-white/70">
            Consultor, fabricante e instalador de infraestructura eléctrica, climatización, telecom y movilidad
            eléctrica. {site.contact.coverage}.
          </p>
          <a
            href={waLink('Hola ARTEL, quiero información sobre sus servicios.')}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escríbenos por WhatsApp"
            onClick={() => track('whatsapp_click', { location: 'footer' })}
            className="mt-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 ring-1 ring-inset ring-white/20 transition-colors hover:bg-white/20"
          >
            <svg viewBox="0 0 32 32" className="h-5 w-5 fill-white" aria-hidden="true">
              <path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.46 1.73 6.4L3.2 28.8l6.57-1.72a12.74 12.74 0 006.23 1.62h.01c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.33-6.63-3.75-9.05a12.7 12.7 0 00-9.06-3.65zm0 23.3h-.01a10.6 10.6 0 01-5.4-1.48l-.39-.23-3.9 1.02 1.04-3.8-.25-.4a10.56 10.56 0 01-1.62-5.63c0-5.86 4.77-10.63 10.64-10.63 2.84 0 5.5 1.11 7.51 3.12a10.55 10.55 0 013.11 7.52c0 5.86-4.77 10.62-10.64 10.62zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.03-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.5.14-.66.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.99-2.37-.26-.62-.52-.54-.72-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.14 3.08 1.3 3.29.16.21 2.25 3.44 5.46 4.82.76.33 1.36.53 1.82.68.77.24 1.46.21 2.01.13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37z" />
            </svg>
          </a>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Líneas de negocio</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="text-white/70 hover:text-white">
                  {s.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Empresa</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/nosotros" className="text-white/70 hover:text-white">Nosotros</Link></li>
            <li><Link href="/proyectos" className="text-white/70 hover:text-white">Proyectos</Link></li>
            <li><Link href="/contacto" className="text-white/70 hover:text-white">Contacto / Cotizar</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Contacto</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-artel-cyan" />
              <a href={`mailto:${site.contact.email}`} className="hover:text-white">
                {site.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-artel-cyan" />
              <a href={`tel:${site.contact.phoneHref}`} className="hover:text-white">
                {site.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-artel-cyan" />
              <span>
                {site.contact.address.street}, {site.contact.address.city}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 text-artel-cyan" />
              <span>{site.contact.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.legalName}. Todos los derechos reservados.</p>
          <p>Ingeniería · Fabricación · Mantenimiento · Instalaciones · {site.contact.coverage}</p>
        </div>
      </div>
    </footer>
  );
}
