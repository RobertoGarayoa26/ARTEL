// ============================================================
//  Líneas de negocio de ARTEL
//  Cada objeto alimenta la tarjeta del Home y su landing SEO.
// ============================================================

export type Ficha = {
  title: string;
  file: string; // ruta dentro de /public
  specs: { k: string; v: string }[];
};

export type Service = {
  slug: string;
  interestKey: string; // valor usado en el formulario por pasos
  icon: string; // clave de icono (ver components/Icon.tsx)
  shortName: string;
  cardTitle: string;
  cardText: string;
  // Landing
  eyebrow: string;
  title: string;
  heroSubtitle: string;
  heroImage: string;
  heroPoster?: string;
  heroVideo?: string;
  accent: 'green' | 'blue';
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  buyer: string; // a quién va dirigido
  pains: string[];
  solutions: { title: string; text: string }[];
  scopeLabel: string; // etiqueta del "alcance" en el form (ej. N° de sitios)
  process: { step: string; title: string; text: string }[];
  capabilities: string[];
  stats: { value: string; label: string }[];
  gallery: string[];
  fichas?: Ficha[];
  faq: { q: string; a: string }[];
  waMessage: string;
};

export const services: Service[] = [
  {
    slug: 'micromovilidad-centros-de-carga',
    interestKey: 'Micromovilidad / Centros de carga',
    icon: 'battery',
    shortName: 'Centros de carga',
    cardTitle: 'Micromovilidad · Centros de carga',
    cardText:
      'Fabricación e instalación de centros y estaciones de carga a la medida para flotas de e-bikes, scooters y motos eléctricas.',
    eyebrow: 'Fabricación e integración',
    title: 'Centros de carga para flotas de micromovilidad',
    heroSubtitle:
      'Diseñamos y fabricamos centros de carga a la medida para operaciones de última milla: carga segura, monitoreable y escalable para tu flota de e-bikes, scooters y motos eléctricas.',
    heroImage: '/media/micromovilidad-3.webp',
    accent: 'green',
    metaTitle: 'Centros y estaciones de carga para flotas de micromovilidad | ARTEL',
    metaDescription:
      'Fabricación e instalación de centros de carga a la medida para flotas de e-bikes, scooters y motos eléctricas de última milla. Diseño eléctrico, protecciones y monitoreo. Cotiza con ARTEL.',
    keywords: [
      'centros de carga para bicicletas eléctricas',
      'estaciones de carga scooters',
      'carga de flotas de última milla',
      'infraestructura de carga micromovilidad',
      'fabricante de centros de carga México',
    ],
    buyer: 'Gerentes de flota de última milla y operaciones de logística.',
    pains: [
      'Baterías cargando con extensiones improvisadas: riesgo de incendio y pérdidas.',
      'Tiempos muertos por falta de puntos de carga suficientes.',
      'Sin visibilidad del consumo ni control del estado de cada bahía.',
      'Crecimiento de flota sin infraestructura eléctrica que lo soporte.',
    ],
    solutions: [
      {
        title: 'Diseño a la medida de tu flota',
        text: 'Dimensionamos bahías, cargas simultáneas y demanda eléctrica según el número y tipo de vehículos de tu operación.',
      },
      {
        title: 'Fabricación propia',
        text: 'Construimos el centro de carga en taller con gabinetes, protecciones eléctricas y bahías etiquetadas listas para operar.',
      },
      {
        title: 'Seguridad eléctrica certificada',
        text: 'Protecciones diferenciales, termomagnéticos y tierras conforme a NOM-001-SEDE. Cero conexiones improvisadas.',
      },
      {
        title: 'Instalación y puesta en marcha',
        text: 'Instalamos en sitio, energizamos y entregamos operando, con capacitación básica para tu equipo.',
      },
    ],
    scopeLabel: 'Tamaño de la flota (número de vehículos / bahías)',
    process: [
      { step: '01', title: 'Diagnóstico', text: 'Visita técnica y análisis de carga eléctrica del sitio.' },
      { step: '02', title: 'Ingeniería', text: 'Diseño del centro de carga y memoria de cálculo.' },
      { step: '03', title: 'Fabricación', text: 'Construcción en taller y pruebas de calidad.' },
      { step: '04', title: 'Instalación', text: 'Montaje, energización y puesta en marcha en sitio.' },
    ],
    capabilities: [
      'Centros de carga de 4 a 100+ bahías',
      'Bahías para e-bikes, scooters y motos eléctricas',
      'Tableros y protecciones conforme a NOM',
      'Opción de medición y monitoreo por bahía',
      'Adecuación de acometida y capacidad eléctrica',
    ],
    stats: [
      { value: 'A la medida', label: 'Diseño por tipo de flota' },
      { value: 'NOM-001', label: 'Seguridad eléctrica' },
      { value: '24/7', label: 'Carga continua y segura' },
    ],
    gallery: [
      '/media/micromovilidad-1.webp',
      '/media/micromovilidad-2.webp',
      '/media/micromovilidad-3.webp',
      '/media/micromovilidad-4.webp',
    ],
    fichas: [
      {
        title: 'Centro de carga ARTEL — Ficha técnica general',
        file: '/fichas/artel-centro-de-carga-ficha-tecnica.pdf',
        specs: [
          { k: 'Configuración', v: 'Modular, 4–100+ bahías' },
          { k: 'Alimentación', v: '127/220 V · 1F/3F según demanda' },
          { k: 'Protecciones', v: 'Termomagnética + diferencial por circuito' },
          { k: 'Compatibilidad', v: 'E-bikes, scooters, motos eléctricas' },
          { k: 'Normativa', v: 'NOM-001-SEDE-2012' },
        ],
      },
    ],
    faq: [
      {
        q: '¿Fabrican el centro de carga o solo instalan?',
        a: 'Ambos. Diseñamos y fabricamos el centro de carga en nuestro taller y lo instalamos en tu sitio, entregándolo operando.',
      },
      {
        q: '¿Pueden escalar la infraestructura conforme crece la flota?',
        a: 'Sí. Diseñamos con arquitectura modular para agregar bahías o capacidad eléctrica sin rehacer la instalación.',
      },
      {
        q: '¿Cumplen normativa eléctrica?',
        a: 'Sí, todo se ejecuta conforme a la NOM-001-SEDE con memoria de cálculo y protecciones adecuadas.',
      },
    ],
    waMessage:
      'Hola ARTEL, me interesa cotizar un centro de carga para una flota de micromovilidad (e-bikes / scooters / motos).',
  },

  {
    slug: 'telecom-gabinetes',
    interestKey: 'Telecom / Gabinetes de radiobases',
    icon: 'antenna',
    shortName: 'Telecom',
    cardTitle: 'Telecom · Gabinetes de radiobases',
    cardText:
      'Mantenimiento integral a gabinetes de radiobases: plantas de fuerza DC, banco de baterías y climatización en sitio.',
    eyebrow: 'Mantenimiento de sitios',
    title: 'Mantenimiento integral a gabinetes de radiobases',
    heroSubtitle:
      'Mantenemos la infraestructura crítica de tus sitios de telecomunicaciones: plantas de fuerza DC, bancos de baterías y climatización, con tiempos de respuesta que protegen tu continuidad de servicio.',
    heroImage: '/media/telecom-1.webp',
    heroPoster: '/media/telecom-poster.webp',
    heroVideo: '/media/video/telecom.mp4',
    accent: 'blue',
    metaTitle: 'Mantenimiento a gabinetes de radiobases y sitios telecom | ARTEL',
    metaDescription:
      'Mantenimiento preventivo y correctivo a gabinetes de radiobases: plantas de fuerza DC, bancos de baterías y climatización en sitio. Cobertura y SLA para operadores e infraestructura. ARTEL.',
    keywords: [
      'mantenimiento gabinetes radiobases',
      'plantas de fuerza DC telecom',
      'mantenimiento bancos de baterías',
      'climatización sitios telecom',
      'mantenimiento infraestructura telecomunicaciones',
    ],
    buyer: 'Administradores de infraestructura de telecomunicaciones y operadores de sitios.',
    pains: [
      'Caídas de sitio por fallas en la planta de fuerza o baterías descargadas.',
      'Sobrecalentamiento de equipos por climatización deficiente.',
      'Falta de un proveedor con cobertura y tiempos de respuesta confiables.',
      'Poca trazabilidad del estado de cada sitio.',
    ],
    solutions: [
      {
        title: 'Plantas de fuerza DC',
        text: 'Revisión, ajuste y correctivo de rectificadores, tableros de distribución DC y sistemas de respaldo.',
      },
      {
        title: 'Bancos de baterías',
        text: 'Inspección, medición de impedancia, reemplazo y disposición de baterías para garantizar autonomía.',
      },
      {
        title: 'Climatización en sitio',
        text: 'Mantenimiento a equipos de aire de precisión y confort que mantienen la temperatura del gabinete.',
      },
      {
        title: 'Rutinas con evidencia',
        text: 'Reportes fotográficos y de parámetros por sitio para tu control y auditoría.',
      },
    ],
    scopeLabel: 'Número de sitios a atender',
    process: [
      { step: '01', title: 'Levantamiento', text: 'Inventario y diagnóstico del estado de cada sitio.' },
      { step: '02', title: 'Plan', text: 'Programa de mantenimiento preventivo y niveles de servicio.' },
      { step: '03', title: 'Ejecución', text: 'Rutinas preventivas y atención correctiva con evidencia.' },
      { step: '04', title: 'Reporte', text: 'Entrega de parámetros, fotos y recomendaciones por sitio.' },
    ],
    capabilities: [
      'Mantenimiento preventivo y correctivo de planta de fuerza DC',
      'Diagnóstico y reemplazo de bancos de baterías',
      'Climatización de precisión y confort en gabinete',
      'Atención con SLA y guardias 24/7',
      'Reportes con evidencia por sitio',
    ],
    stats: [
      { value: '24/7', label: 'Atención con SLA' },
      { value: 'Nacional', label: 'Cobertura de sitios' },
      { value: '100%', label: 'Rutinas con evidencia' },
    ],
    gallery: ['/media/telecom-1.webp', '/media/telecom-2.webp'],
    faq: [
      {
        q: '¿Atienden contratos con SLA por número de sitios?',
        a: 'Sí. Estructuramos programas de mantenimiento con niveles de servicio y tiempos de respuesta acordados según la criticidad de tus sitios.',
      },
      {
        q: '¿Incluyen la climatización del gabinete?',
        a: 'Sí, cubrimos aire de precisión y confort dentro del mismo contrato para mantener la temperatura de operación.',
      },
      {
        q: '¿Entregan evidencia del servicio?',
        a: 'Cada visita se documenta con parámetros medidos, fotografías y recomendaciones por sitio.',
      },
    ],
    waMessage:
      'Hola ARTEL, me interesa cotizar mantenimiento a gabinetes de radiobases (planta DC, baterías y climatización).',
  },

  {
    slug: 'hvac-industrial',
    interestKey: 'HVAC industrial',
    icon: 'wind',
    shortName: 'HVAC',
    cardTitle: 'HVAC industrial',
    cardText:
      'Mantenimiento preventivo y correctivo a sistemas de aire acondicionado comercial e industrial.',
    eyebrow: 'Climatización',
    title: 'Mantenimiento a aire acondicionado comercial e industrial',
    heroSubtitle:
      'Mantenimiento preventivo y correctivo a sistemas HVAC comerciales e industriales. Mantenemos tus equipos operando con eficiencia y evitamos paros no planeados.',
    heroImage: '/media/hvac-1.webp',
    heroPoster: '/media/hvac-poster.webp',
    heroVideo: '/media/video/hvac.mp4',
    accent: 'blue',
    metaTitle: 'Mantenimiento de aire acondicionado industrial y comercial | ARTEL',
    metaDescription:
      'Mantenimiento preventivo y correctivo de HVAC comercial e industrial: chillers, manejadoras, minisplits y sistemas centrales. Contratos con SLA para parques industriales y comerciales. ARTEL.',
    keywords: [
      'mantenimiento aire acondicionado industrial',
      'mantenimiento HVAC comercial',
      'mantenimiento preventivo chillers',
      'servicio de climatización industrial',
      'mantenimiento aires acondicionados parque industrial',
    ],
    buyer: 'Gerentes de mantenimiento industrial y administradores de parques comerciales.',
    pains: [
      'Paros de producción por fallas de climatización no previstas.',
      'Consumo eléctrico elevado por equipos sin mantenimiento.',
      'Multiplicidad de proveedores para distintos equipos y marcas.',
      'Falta de un programa preventivo real.',
    ],
    solutions: [
      {
        title: 'Preventivo programado',
        text: 'Rutinas por frecuencia sobre chillers, manejadoras, minisplits y sistemas centrales de cualquier marca.',
      },
      {
        title: 'Correctivo y diagnóstico',
        text: 'Detección de fallas, reparación y suministro de refacciones para restablecer la operación rápido.',
      },
      {
        title: 'Eficiencia energética',
        text: 'Limpieza, ajuste y balanceo para reducir consumo eléctrico y alargar la vida útil.',
      },
      {
        title: 'Un solo proveedor',
        text: 'Cubrimos todo tu parque de equipos bajo un mismo contrato y punto de contacto.',
      },
    ],
    scopeLabel: 'Capacidad instalada (toneladas de refrigeración) o N° de equipos',
    process: [
      { step: '01', title: 'Inventario', text: 'Levantamiento de equipos, marcas y capacidades.' },
      { step: '02', title: 'Programa', text: 'Plan preventivo por frecuencia y criticidad.' },
      { step: '03', title: 'Servicio', text: 'Rutinas preventivas y atención correctiva.' },
      { step: '04', title: 'Reporte', text: 'Bitácora, mediciones y recomendaciones.' },
    ],
    capabilities: [
      'Chillers, manejadoras y sistemas centrales',
      'Minisplits y equipos comerciales multimarca',
      'Preventivo por frecuencia y correctivo con refacciones',
      'Contratos con SLA para parques industriales',
      'Optimización de consumo energético',
    ],
    stats: [
      { value: 'Multimarca', label: 'Todo tu parque de equipos' },
      { value: 'SLA', label: 'Contratos preventivos' },
      { value: '−Consumo', label: 'Eficiencia energética' },
    ],
    gallery: ['/media/hvac-1.webp', '/media/hvac-2.webp'],
    faq: [
      {
        q: '¿Atienden distintas marcas de equipos?',
        a: 'Sí, damos mantenimiento a equipos de cualquier marca, desde minisplits hasta chillers y sistemas centrales.',
      },
      {
        q: '¿Manejan contratos preventivos anuales?',
        a: 'Sí, estructuramos programas preventivos por frecuencia con niveles de servicio para todo tu parque.',
      },
      {
        q: '¿Atienden emergencias?',
        a: 'Contamos con atención correctiva y guardias para contratos con SLA.',
      },
    ],
    waMessage:
      'Hola ARTEL, me interesa cotizar mantenimiento de aire acondicionado industrial/comercial.',
  },

  {
    slug: 'energia-solar-ev',
    interestKey: 'Energía solar / Subestaciones / Cargadores EV',
    icon: 'solar',
    shortName: 'Energía solar y EV',
    cardTitle: 'Energía solar · Subestaciones · EV',
    cardText:
      'Paneles solares, mantenimiento a subestaciones eléctricas y estaciones de carga para autos eléctricos.',
    eyebrow: 'Energía e infraestructura eléctrica',
    title: 'Energía solar, subestaciones y carga de vehículos eléctricos',
    heroSubtitle:
      'Generación solar, mantenimiento a subestaciones eléctricas y estaciones de carga para autos eléctricos (EV). Infraestructura eléctrica que reduce tu costo de energía y prepara tu operación para la electromovilidad.',
    heroImage: '/media/solar-1.webp',
    heroPoster: '/media/solar-poster.webp',
    heroVideo: '/media/video/solar.mp4',
    accent: 'green',
    metaTitle: 'Paneles solares, subestaciones y cargadores EV | ARTEL',
    metaDescription:
      'Instalación de paneles solares, mantenimiento a subestaciones eléctricas y estaciones de carga para autos eléctricos (EV). Ingeniería eléctrica conforme a CFE y NOM. Cotiza con ARTEL.',
    keywords: [
      'instalación de paneles solares industrial',
      'mantenimiento subestaciones eléctricas',
      'estaciones de carga para autos eléctricos',
      'cargadores EV México',
      'infraestructura eléctrica CFE',
    ],
    buyer: 'Administradores de parques industriales, comerciales e infraestructura eléctrica.',
    pains: [
      'Costo de energía eléctrica cada vez más alto.',
      'Subestaciones sin mantenimiento: riesgo de falla y paro total.',
      'Necesidad de ofrecer carga para autos eléctricos a clientes o flota.',
      'Proyectos eléctricos que requieren cumplimiento ante CFE.',
    ],
    solutions: [
      {
        title: 'Paneles solares',
        text: 'Diseño e instalación de sistemas fotovoltaicos para reducir el costo de energía de tu operación.',
      },
      {
        title: 'Subestaciones eléctricas',
        text: 'Mantenimiento preventivo y correctivo a subestaciones para asegurar la continuidad de tu suministro.',
      },
      {
        title: 'Estaciones de carga EV',
        text: 'Instalación de cargadores y estaciones de carga para autos eléctricos, con la infraestructura eléctrica adecuada.',
      },
      {
        title: 'Cumplimiento normativo',
        text: 'Ingeniería y ejecución conforme a NOM y requerimientos de CFE.',
      },
    ],
    scopeLabel: 'Alcance (kW de generación / cargadores EV / capacidad de subestación)',
    process: [
      { step: '01', title: 'Estudio', text: 'Análisis de consumo, sitio y objetivos.' },
      { step: '02', title: 'Ingeniería', text: 'Diseño eléctrico y memoria de cálculo.' },
      { step: '03', title: 'Ejecución', text: 'Instalación y cumplimiento normativo.' },
      { step: '04', title: 'Operación', text: 'Puesta en marcha y mantenimiento.' },
    ],
    capabilities: [
      'Sistemas fotovoltaicos comerciales e industriales',
      'Mantenimiento preventivo/correctivo a subestaciones',
      'Estaciones de carga para autos eléctricos (EV)',
      'Ingeniería eléctrica conforme a NOM y CFE',
      'Adecuación de acometidas y capacidad eléctrica',
    ],
    stats: [
      { value: 'CFE / NOM', label: 'Cumplimiento normativo' },
      { value: 'Ahorro', label: 'Menor costo de energía' },
      { value: 'EV-ready', label: 'Preparado para electromovilidad' },
    ],
    gallery: [
      '/media/solar-1.webp',
      '/media/solar-2.webp',
      '/media/ev-1.webp',
      
    ],
    faq: [
      {
        q: '¿Hacen el proyecto eléctrico completo ante CFE?',
        a: 'Sí, realizamos la ingeniería, memoria de cálculo y ejecución conforme a NOM y los requerimientos de CFE.',
      },
      {
        q: '¿Dan mantenimiento a subestaciones existentes?',
        a: 'Sí, ofrecemos mantenimiento preventivo y correctivo a subestaciones eléctricas para asegurar la continuidad del suministro.',
      },
      {
        q: '¿Instalan cargadores para autos eléctricos?',
        a: 'Sí, instalamos cargadores y estaciones de carga EV junto con la infraestructura eléctrica necesaria.',
      },
    ],
    waMessage:
      'Hola ARTEL, me interesa cotizar energía solar / mantenimiento de subestación / cargadores EV.',
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

// Opciones del formulario por pasos (deben coincidir con interestKey).
export const interestOptions = services.map((s) => s.interestKey);
