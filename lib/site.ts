// ============================================================
//  Configuración global del sitio ARTEL
//  >> EDITA AQUÍ los datos de contacto cuando los tengas <<
//  Los valores marcados con "PLACEHOLDER" son de ejemplo.
// ============================================================

export const site = {
  name: 'ARTEL',
  legalName: 'ARTEL — Consultoría, Ingeniería, Fabricación, Mantenimiento e Instalaciones',
  // URL canónica (usada para SEO/Open Graph). Cambia si tu dominio final difiere.
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cr-artel.com',
  tagline: 'Ingeniería e infraestructura, integradas en un solo aliado.',
  description:
    'ARTEL mantiene infraestructura eléctrica, climatización, telecomunicaciones y movilidad eléctrica para operaciones industriales y comerciales en México. Un solo proveedor para energía, HVAC, telecom, consultoría y carga de vehículos.',

  // ---- CONTACTO (PLACEHOLDER — reemplazar por datos reales) ----
  contact: {
    email: 'aflores@cr-artel.com', // correo que recibe cotizaciones
    // WhatsApp en formato internacional SIN "+". PLACEHOLDER.
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '5215580308420',
    phoneDisplay: '+52 55 8030 8420', // PLACEHOLDER
    phoneHref: '+525580308420', // PLACEHOLDER
    // Dirección real — usada en el mapa y en el schema LocalBusiness.
    address: {
      street: 'C. Ópalo 78, Hab. Miraflores',
      city: 'Tlalnepantla de Baz',
      state: 'Méx.',
      zip: '54160',
      country: 'MX',
    },
    // Coordenadas APROXIMADAS de Tlalnepantla de Baz — ajusta si tienes las exactas de la sede.
    geo: { lat: 19.529246, lng: -99.180666 },
    hours: 'Lun–Vie 8:00–18:00',
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
      { label: 'Consultoría de negocios', href: '/consultoria-negocios' },
      { label: 'Telecom · Gabinetes · Fibra óptica', href: '/telecom' },
      { label: 'Micromovilidad · Centros de carga', href: '/micromovilidad' },
      { label: 'HVAC · Industrial · Comercial', href: '/aires-hvac' },
      { label: 'Energía solar · Plantas de fuerza · EV', href: '/energia-solar-ev' },
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
