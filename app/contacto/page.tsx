import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { StepForm } from '@/components/StepForm';
import { WaButton } from '@/components/WaButton';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contacto y cotización',
  description:
    'Solicita una cotización a ARTEL para infraestructura eléctrica, HVAC, telecom o movilidad eléctrica. Formulario por pasos, WhatsApp directo y datos de contacto.',
  alternates: { canonical: '/contacto' },
};

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: site.name,
  image: `${site.url}/media/og-default.jpg`,
  url: `${site.url}/contacto`,
  email: site.contact.email,
  telephone: site.contact.phoneDisplay,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.contact.address.street,
    addressLocality: site.contact.address.city,
    addressRegion: site.contact.address.state,
    postalCode: site.contact.address.zip,
    addressCountry: site.contact.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: site.contact.geo.lat,
    longitude: site.contact.geo.lng,
  },
  areaServed: 'MX',
  openingHours: 'Mo-Fr 08:00-18:00',
};

export default function ContactoPage() {
  const { contact } = site;
  const mapSrc = `https://www.google.com/maps?q=${contact.geo.lat},${contact.geo.lng}&z=13&output=embed`;

  return (
    <>
      <section className="section-fade pt-28 pb-10 md:pt-36">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Contacto</span>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">
              Solicita tu cotización
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-steel-300">
              Completa el formulario por pasos y un ingeniero de ARTEL te contactará. Si necesitas
              respuesta inmediata, escríbenos por WhatsApp.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x grid gap-10 lg:grid-cols-5">
          {/* Datos de contacto */}
          <div className="lg:col-span-2">
            <Reveal>
              <div className="space-y-4">
                <div className="divide-y divide-black/10 overflow-hidden rounded-2xl bg-ink-800 ring-1 ring-black/10 shadow-sm">
                  <ContactSubRow icon={Mail} label="Correo" value={contact.email} href={`mailto:${contact.email}`} />
                  <ContactSubRow icon={Phone} label="Teléfono" value={contact.phoneDisplay} href={`tel:${contact.phoneHref}`} />
                </div>
                <ContactRow icon={MapPin} label="Dirección" value={`${contact.address.street}, ${contact.address.city}, ${contact.address.state}`} />
                <ContactRow icon={Clock} label="Horario" value={contact.hours} />
              </div>

              <div className="mt-6 rounded-2xl bg-artel-green/10 p-5 ring-1 ring-artel-green/20">
                <div className="flex items-center gap-2 text-artel-green-600">
                  <MessageCircle className="h-5 w-5" />
                  <span className="font-semibold">Respuesta inmediata</span>
                </div>
                <p className="mt-2 text-sm text-steel-300">
                  Para atención rápida o emergencias con SLA, escríbenos por WhatsApp.
                </p>
                <WaButton
                  location="contacto_page"
                  message="Hola ARTEL, quiero solicitar una cotización."
                  className="btn btn-whatsapp mt-4 w-full"
                >
                  Abrir WhatsApp
                </WaButton>
              </div>

              {/* Mapa */}
              <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-black/10">
                <iframe
                  title="Ubicación ARTEL"
                  src={mapSrc}
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="mt-2 text-xs text-steel-500">
                Ubicación de referencia. Cobertura de servicio: {contact.coverage}.
              </p>
            </Reveal>
          </div>

          {/* Formulario */}
          <div className="lg:col-span-3">
            <Reveal delay={120}>
              <StepForm />
            </Reveal>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl bg-ink-800 p-5 ring-1 ring-black/10 shadow-sm transition-colors hover:ring-black/20">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-artel-green/15">
        <Icon className="h-5 w-5 text-artel-green-600" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-steel-400">{label}</p>
        <p className="mt-0.5 text-steel-200">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

// Igual que ContactRow, pero sin ring/rounded/shadow propios: se usa dentro de un
// contenedor que ya agrupa varias filas (ej. correo + teléfono sin espacio entre sí).
function ContactSubRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-4 p-5 transition-colors hover:bg-black/5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-artel-green/15">
        <Icon className="h-5 w-5 text-artel-green-600" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-steel-400">{label}</p>
        <p className="mt-0.5 text-steel-200">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
