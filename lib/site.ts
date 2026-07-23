// ============================================================
//  Configuración global del sitio ARTEL
//  >> EDITA AQUÍ los datos de contacto cuando los tengas <<
//  Los valores marcados con "PLACEHOLDER" son de ejemplo.
// ============================================================

export const site = {
  name: 'ARTEL',
  legalName: 'ARTEL — Ingeniería en Infraestructura',
  // URL canónica (usada para SEO/Open Graph). Cambia si tu dominio final difiere.
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cr-artel.com',
  tagline: 'Ingeniería e infraestructura crítica, integradas en un solo aliado.',
  description:
    'ARTEL fabrica e integra infraestructura eléctrica, climatización, telecomunicaciones y movilidad eléctrica para operaciones industriales y comerciales en México. Un solo proveedor para energía, HVAC, telecom y carga de vehículos.',

  // ---- CONTACTO (PLACEHOLDER — reemplazar por datos reales) ----
  contact: {
    email: 'aflores@cr-artel.com', // correo que recibe cotizaciones
    // WhatsApp en formato internacional SIN "+". PLACEHOLDER.
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '5215580308420',
    phoneDisplay: '+52 55 8030 8420', // PLACEHOLDER
    phoneHref: '+525580308420', // PLACEHOLDER
    // Dirección PLACEHOLDER — usada en el mapa y en el schema LocalBusiness.
    address: {
      street: 'Eje 3 Norte, San Isidro 680',
      city: 'Ciudad de México',
      state: 'CDMX',
      zip: '06500',
      country: 'MX',
    },
    // Coordenadas PLACEHOLDER (CDMX). Reemplaza por las de tu sede.
    geo: { lat: 19.485913, lng: -99.212966 },
    hours: 'Lun–Vie 8:00–18:00 · Guardias 24/7 para contratos con SLA',
    coverage: 'Cobertura nacional en México',
  },

  social: {
    linkedin: 'https://www.linkedin.com/company/artel', // PLACEHOLDER
    facebook: '', // opcional
    instagram: '', // opcional
  },

  analytics: {
    ga4: process.env.NEXT_PUBLIC_GA4_ID || '',
    gtm: process.env.NEXT_PUBLIC_GTM_ID || '',
  },
};

export const nav = [
  { label: 'Inicio', href: '/' },
  {
    label: 'Líneas de negocio',
    href: '#',
    children: [
      { label: 'Micromovilidad · Centros de carga', href: '/micromovilidad-centros-de-carga' },
      { label: 'Telecom · Gabinetes de radiobases', href: '/telecom-gabinetes' },
      { label: 'HVAC industrial', href: '/hvac-industrial' },
      { label: 'Energía solar · Subestaciones · EV', href: '/energia-solar-ev' },
    ],
  },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Contacto', href: '/contacto' },
];

// Genera un enlace de WhatsApp con mensaje contextual pre-cargado.
export function waLink(message?: string) {
  const base = `https://wa.me/${site.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
