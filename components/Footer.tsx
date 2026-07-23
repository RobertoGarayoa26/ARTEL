import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { site } from '@/lib/site';
import { services } from '@/lib/services';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-900">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <span className="inline-block rounded-md bg-white px-2 py-1.5">
            <Image src="/media/logo-artel.png" alt="ARTEL" width={96} height={30} className="h-6 w-auto" />
          </span>
          <p className="mt-4 max-w-xs text-sm text-steel-400">
            Fabricante e integrador de infraestructura eléctrica, climatización, telecom y movilidad
            eléctrica. {site.contact.coverage}.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Líneas de negocio</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="text-steel-400 hover:text-white">
                  {s.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Empresa</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/nosotros" className="text-steel-400 hover:text-white">Nosotros</Link></li>
            <li><Link href="/proyectos" className="text-steel-400 hover:text-white">Proyectos</Link></li>
            <li><Link href="/contacto" className="text-steel-400 hover:text-white">Contacto / Cotizar</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Contacto</h4>
          <ul className="mt-4 space-y-3 text-sm text-steel-400">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-artel-green-400" />
              <a href={`mailto:${site.contact.email}`} className="hover:text-white">
                {site.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-artel-green-400" />
              <a href={`tel:${site.contact.phoneHref}`} className="hover:text-white">
                {site.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-artel-green-400" />
              <span>
                {site.contact.address.street}, {site.contact.address.city}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 text-artel-green-400" />
              <span>{site.contact.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-steel-400 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.legalName}. Todos los derechos reservados.</p>
          <p>Ingeniería · Fabricación · Mantenimiento con SLA · {site.contact.coverage}</p>
        </div>
      </div>
    </footer>
  );
}
