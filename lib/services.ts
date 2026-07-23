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

/* ---------- SERVICES ---------- */
/* ---- MICROMOVILIDAD ---- */
export const services: Service[] = [
  {
    slug: 'micromovilidad-centros-de-carga',
    interestKey: 'Micromovilidad / Centros de carga',
    icon: 'battery',
    shortName: 'Centros de carga',
    cardTitle: 'Micromovilidad · Centros de carga',
    cardText:
      'Fabricación e instalación de centros y estaciones de carga a la medida para flotas de e-bikes, scooters y motos eléctricas.',
    eyebrow: 'Fabricación de Infraestructura para micromovilidad',
    title: 'Centros de carga para flotas de micromovilidad',
    heroSubtitle:
      'Garantizamos la seguridad, eficiencia y escalabilidad de tu flota. Diseñamos y fabricamos infraestructura de carga a la medida de tu operación. Capacidad comprobada bajo estándares normativos.',
    heroImage: '/media/micromovilidad-3.webp',
    accent: 'green',
    metaTitle: 'Centros y estaciones de carga para flotas de micromovilidad | ARTEL',
    metaDescription:
      'Fabricación e instalación de centros de carga a la medida para flotas de e-bikes, scooters y motos eléctricas. Diseño eléctrico y protecciones certificadas. Cotiza con ARTEL.',
    keywords: [
      'centros de carga para bicicletas eléctricas',
      'estaciones de carga scooters',
      'carga de flotas de última milla',
      'infraestructura de carga micromovilidad',
      'fabricante de centros de carga México',
    ],
    buyer: 'Directores de Operaciones, Logística y Gerentes de flotas de última milla.',
    pains: [
      'Puntos de carga improvisados que ponen en riesgo tus instalaciones y anulan pólizas de seguro.',
      'Disponibilidad de flota mermada por falta de carga de tus vehículos.',
      'Sin visibilidad del consumo ni control del estado de cada cargador.',
      'Imposibilidad de escalar la operación logística porque la infraestructura eléctrica llegó a su límite.',
    ],
    solutions: [
      {
        title: 'Asesoría Técnica',
        text: 'Realizamos un análisis previo de tu proceso de recarga de vehículos para identificar puntos críticos y definir la solución óptima.',
      },
      {
        title: 'Ingeniería de Proyecto',
        text: 'Diseñamos la infraestructura de carga según las necesidades específicas de tu flota.',
      },
      {
        title: 'Fabricación Propia',
        text: 'Fabricamos el centro de carga con componentes de grado industrial a tu medida. Cumplimos con la NOM-001-SEDE, para minimizar el riesgo de fallas eléctricas y proteger tu inversión.',
      },
      {
        title: 'Implementación Llave en Mano',
        text: 'Nuestro equipo técnico ejecuta la instalación, adecuación eléctrica y puesta en marcha, asegurando que tu centro de carga opere al máximo rendimiento desde el día uno.',
      },
      {
        title: 'Mantenimiento',
        text: 'Ofrecemos mantenimiento preventivo y correctivo para asegurar la continuidad de tu operación y la vida útil de tu infraestructura de carga.',
      },
    ],
    scopeLabel: 'Tamaño de la flota (número de vehículos / bahías)',
    process: [
      { step: '01', title: 'Diagnóstico y Asesoría', text: 'Visita técnica y análisis de carga eléctrica del sitio.' },
      { step: '02', title: 'Ingeniería y Fabricación', text: 'Diseño y fabricación de la solución.' },
      { step: '03', title: 'Instalación y Pruebas', text: 'Montaje, energización, pruebas y puesta en marcha en sitio.' },
      { step: '04', title: 'Mantenimiento', text: 'Servicio de mantenimiento preventivo y correctivo.' },
    ],
    capabilities: [
      'Centros de carga desde 4 a más de 100 espacios de carga simultánea',
      'Compatibilidad multimarca con e-bikes, scooters y motos eléctricas',
      'Tableros y protecciones conforme a NOM-001-SEDE',
      'Adecuación eléctrica en sitio',
      'Integración con sistema de telemetría y monitoreo de carga',
    ],
    stats: [
      { value: 'A la medida', label: 'Diseño adaptado a tus necesidades' },
      { value: 'NOM-001-SEDE', label: 'Normativa de seguridad eléctrica' },
      { value: '24/7', label: 'Carga continua y segura' },
    ],
    gallery: [
      '/media/micromovilidad-1.webp',
      '/media/micromovilidad-2.webp',
      '/media/micromovilidad-3.webp',
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

  /* ---- TELECOM ---- */
  {
    slug: 'telecom-gabinetes',
    interestKey: 'Telecom / Gabinetes de radiobases',
    icon: 'antenna',
    shortName: 'Telecom',
    cardTitle: 'Telecom · Gabinetes de radiobases',
    cardText:
      'Mantenimiento integral a gabinetes de radiobases: plantas de fuerza DC, banco de baterías y climatización en sitio.',
    eyebrow: 'Mantenimiento de Infraestructura de Telecomunicaciones',
    title: 'Mantenimiento integral a gabinetes de radiobases',
    heroSubtitle:
      'Ayudamos a empresas mexicanas de telecomunicaciones a mantener sus gabinetes de radiobases en funcionamiento, sin comprometer la continuidad de su red. 10 años de experiencia nos respaldan como proveedor de mantenimiento.',
    heroImage: '/media/telecom-1.webp',
    heroPoster: '/media/telecom-poster.webp',
    heroVideo: '/media/video/telecom.mp4',
    accent: 'blue',
    metaTitle: 'Mantenimiento a gabinetes de radiobases y sitios telecom | ARTEL',
    metaDescription:
      'Mantenimiento preventivo y correctivo a gabinetes de radiobases: planta de fuerza DC, baterías y climatización en sitio. Cobertura nacional con SLA. Cotiza con ARTEL.',
    keywords: [
      'mantenimiento gabinetes radiobases',
      'plantas de fuerza DC telecom',
      'mantenimiento bancos de baterías',
      'climatización sitios telecom',
      'mantenimiento infraestructura telecomunicaciones',
    ],
    buyer: 'Administradores de Infraestructura de Telecomunicaciones, Directores de Operaciones y Gerentes de Mantenimiento de Sitios.',
    pains: [
      'Caídas de sitio por fallas en la planta de fuerza o baterías descargadas, con riesgo de penalizaciones contractuales y pérdida de cobertura.',
      'Sobrecalentamiento de equipos por climatización deficiente, que acorta la vida útil de tu inversión en electrónica.',
      'Depender de proveedores sin cobertura ni tiempos de respuesta confiables cuando un sitio falla fuera de horario.',
      'Poca trazabilidad del estado de cada sitio, lo que dificulta auditorías y decisiones operativas.',
    ],
    solutions: [
      {
        title: 'Plantas de fuerza DC',
        text: 'Revisión, ajuste y correctivo de rectificadores, tableros de distribución DC y sistemas de respaldo.',
      },
      {
        title: 'Bancos de baterías',
        text: 'Inspección, medición de impedancia, reemplazo y disposición de baterías para maximizar la autonomía operativa de cada sitio.',
      },
      {
        title: 'Climatización en sitio',
        text: 'Mantenimiento a equipos de aire de precisión y confort que mantienen la temperatura del gabinete.',
      },
      {
        title: 'Programas con SLA a la medida',
        text: 'Diseñamos niveles de servicio y tiempos de respuesta según la criticidad de cada sitio, con guardias disponibles para atención fuera de horario.',
      },
      {
        title: 'Obtención de evidencia',
        text: 'Reportes fotográficos y de parámetros por sitio para tu control y auditoría.',
      },
    ],
    scopeLabel: 'Número de sitios a atender',
    process: [
      { step: '01', title: 'Análisis de estado', text: 'Inventario y diagnóstico del estado de cada sitio.' },
      { step: '02', title: 'Plan de acción', text: 'Programa de mantenimiento preventivo y niveles de servicio.' },
      { step: '03', title: 'Ejecución del servicio', text: 'Rutinas preventivas y atención correctiva con evidencia.' },
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
      { value: '+300', label: 'Sitios atendidos' },
      { value: 'Cobertura Nacional', label: 'Servicio en todo el país' },
      { value: '+12,000', label: 'Servicios atendidos' },
    ],
    gallery: ['/media/telecom-1.webp', '/media/telecom-2.webp'],
    faq: [
      {
        q: '¿Atienden contratos con SLA por número de sitios?',
        a: 'Sí. Estructuramos programas de mantenimiento con niveles de servicio y tiempos de respuesta acordados según la criticidad de tus sitios.',
      },
      {
        q: '¿Qué pasa si un sitio falla fuera de horario?',
        a: 'Contamos con guardias disponibles para atención correctiva fuera de horario en los sitios cubiertos por contratos con SLA.',
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

  /* ---- HVAC ---- */
  {
    slug: 'hvac-industrial',
    interestKey: 'HVAC industrial',
    icon: 'wind',
    shortName: 'HVAC',
    cardTitle: 'HVAC industrial',
    cardText:
      'Mantenimiento preventivo y correctivo a sistemas de aire acondicionado comercial e industrial.',
    eyebrow: 'Mantenimiento de Infraestructura HVAC',
    title: 'Mantenimiento a aire acondicionado industrial y comercial',
    heroSubtitle:
      'Apoyamos a las empresas mexicanas en el mantenimiento de aire acondicionado industrial y comercial. Nuestros 10 años de experiencia y cientos de clientes satisfechos avalan la calidad de nuestro trabajo.',
    heroImage: '/media/hvac-1.webp',
    heroPoster: '/media/hvac-poster.webp',
    heroVideo: '/media/video/hvac.mp4',
    accent: 'blue',
    metaTitle: 'Mantenimiento de aire acondicionado industrial y comercial | ARTEL',
    metaDescription:
      'Mantenimiento preventivo y correctivo de HVAC industrial y comercial: chillers, manejadoras y sistemas centrales. Contratos con SLA. Cotiza con ARTEL.',
    keywords: [
      'mantenimiento aire acondicionado industrial',
      'mantenimiento HVAC comercial',
      'mantenimiento preventivo chillers',
      'servicio de climatización industrial',
      'mantenimiento aires acondicionados parque industrial',
    ],
    buyer: 'Gerentes de Mantenimiento Industrial y Administradores de Parques Comerciales e Industriales.',
    pains: [
      'Paros de producción por fallas de climatización no previstas.',
      'Consumo eléctrico elevado por equipos sin mantenimiento, que se refleja directo en tu recibo de luz.',
      'Multiplicidad de proveedores para distintos equipos y marcas.',
      'Sin un programa preventivo documentado, arriesgas la garantía de fabricante de tus equipos.',
    ],
    solutions: [
      {
        title: 'Diagnóstico y plan documentado',
        text: 'Levantamiento de tu parque de equipos y diseño de un programa preventivo documentado que protege la garantía de fabricante.',
      },
      {
        title: 'Preventivo programado',
        text: 'Rutinas por frecuencia sobre chillers, manejadoras, minisplits y sistemas centrales multimarca.',
      },
      {
        title: 'Atención correctiva ágil',
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
      { step: '01', title: 'Diagnóstico', text: 'Análisis de fallas de cada equipo.' },
      { step: '02', title: 'Plan de acción', text: 'Diseño de plan de acción para cada equipo.' },
      { step: '03', title: 'Ejecución del servicio', text: 'Atención preventiva y correctiva.' },
      { step: '04', title: 'Entrega de evidencia', text: 'Bitácora, mediciones y recomendaciones.' },
    ],
    capabilities: [
      'Chillers, manejadoras y sistemas centrales',
      'Minisplits y equipos comerciales multimarca',
      'Preventivo por frecuencia y correctivo con refacciones',
      'Contratos con SLA para parques industriales',
      'Optimización de consumo energético',
    ],
    stats: [
      { value: 'Amplia experiencia', label: 'Experiencia en equipos multimarcas' },
      { value: 'Cobertura nacional', label: 'Presencia en todo el país' },
      { value: '+5,000', label: 'Servicios atendidos' },
    ],
    gallery: ['/media/hvac-1.webp', '/media/hvac-2.webp'],
    faq: [
      {
        q: '¿Atienden distintas marcas de equipos?',
        a: 'Sí, damos mantenimiento a equipos de cualquier marca, desde minisplits hasta chillers y sistemas centrales.',
      },
      {
        q: '¿El mantenimiento preventivo protege la garantía de mis equipos?',
        a: 'Sí. Documentamos cada intervención con bitácora y mediciones, cumpliendo los requisitos de mantenimiento que exigen la mayoría de fabricantes para mantener la garantía vigente.',
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

  /* ---- ENERGY ---- */
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
      'Con 8 años de experiencia, hemos implementado más de 300 soluciones de paneles solares y banco de baterías en sitios de telecomunicaciones a nivel nacional. Hoy aplicamos esa misma ingeniería eléctrica para instalar estaciones de carga para vehículos eléctricos, preparando tu operación para la electromovilidad.',
    heroImage: '/media/solar-1.webp',
    heroPoster: '/media/solar-poster.webp',
    heroVideo: '/media/video/solar.mp4',
    accent: 'green',
    metaTitle: 'Paneles solares, subestaciones y cargadores EV | ARTEL',
    metaDescription:
      'Instalación de paneles solares, mantenimiento a subestaciones y estaciones de carga EV. Ingeniería conforme a NOM-001-SEDE y CFE. Cotiza con ARTEL.',
    keywords: [
      'instalación de paneles solares industrial',
      'mantenimiento subestaciones eléctricas',
      'estaciones de carga para autos eléctricos',
      'cargadores EV México',
      'infraestructura eléctrica CFE',
    ],
    buyer: 'Administradores de Infraestructura Eléctrica, Directores de Operaciones y Administradores de Parques Industriales y Comerciales.',
    pains: [
      'Costo de energía eléctrica cada vez más alto, que reduce el margen de tu operación mes a mes.',
      'Subestaciones y sitios remotos sin mantenimiento documentado: riesgo de falla, paro total y observaciones en auditorías eléctricas.',
      'Quedarte atrás frente a la demanda de carga para vehículos eléctricos, sin un proveedor con experiencia comprobada en infraestructura eléctrica para instalarla con seguridad.',
      'Proyectos eléctricos rechazados o retrasados por incumplimiento ante CFE o la norma NOM-001-SEDE.',
    ],
    solutions: [
      {
        title: 'Estudio y diagnóstico eléctrico',
        text: 'Analizamos tu consumo, tu sitio y tus objetivos para diseñar la solución de energía o infraestructura eléctrica adecuada.',
      },
      {
        title: 'Paneles solares y banco de baterías',
        text: 'Diseño e instalación de sistemas fotovoltaicos con respaldo de batería. Hemos implementado más de 300 de estas soluciones en sitios de telecomunicaciones a nivel nacional.',
      },
      {
        title: 'Subestaciones eléctricas',
        text: 'Mantenimiento preventivo y correctivo documentado, que respalda tus auditorías y asegura la continuidad de tu suministro.',
      },
      {
        title: 'Estaciones de carga EV',
        text: 'Instalación de cargadores para autos eléctricos con la misma ingeniería eléctrica que respalda 10 años de proyectos de energía en ARTEL.',
      },
      {
        title: 'Cumplimiento normativo',
        text: 'Ingeniería y ejecución conforme a la NOM-001-SEDE y los requerimientos de interconexión de CFE, para evitar rechazos o retrasos en tu proyecto.',
      },
    ],
    scopeLabel: 'Alcance (kW de generación / cargadores EV / capacidad de subestación)',
    process: [
      { step: '01', title: 'Estudio y diagnóstico', text: 'Análisis de consumo, sitio y objetivos.' },
      { step: '02', title: 'Ingeniería', text: 'Diseño eléctrico y memoria de cálculo.' },
      { step: '03', title: 'Ejecución', text: 'Instalación y cumplimiento normativo.' },
      { step: '04', title: 'Operación y mantenimiento', text: 'Puesta en marcha y mantenimiento continuo.' },
    ],
    capabilities: [
      'Sistemas fotovoltaicos comerciales e industriales',
      'Soluciones de banco de baterías con carga solar para sitios remotos',
      'Mantenimiento preventivo y correctivo a subestaciones',
      'Estaciones de carga para autos eléctricos (EV)',
      'Ingeniería eléctrica conforme a NOM-001-SEDE y requerimientos de CFE',
    ],
    stats: [
      { value: '8 años', label: 'Experiencia en energía e infraestructura eléctrica' },
      { value: '+300', label: 'Sitios con solución solar y banco de baterías implementada' },
      { value: 'NOM-001-SEDE', label: 'Cumplimiento normativo' },
    ],
    gallery: [
      '/media/solar-1.webp',
      '/media/subestaciones-1.webp',
      '/media/ev-1.webp',
      '/media/solar-2.webp',
    ],
    faq: [
      {
        q: '¿Hacen el proyecto eléctrico completo ante CFE?',
        a: 'Sí, realizamos la ingeniería, memoria de cálculo y ejecución conforme a NOM-001-SEDE y los requerimientos de CFE.',
      },
      {
        q: '¿Dan mantenimiento a subestaciones existentes?',
        a: 'Sí, ofrecemos mantenimiento preventivo y correctivo a subestaciones eléctricas para asegurar la continuidad del suministro.',
      },
      {
        q: '¿Tienen experiencia instalando cargadores para autos eléctricos?',
        a: 'Es nuestra línea más reciente, pero aplicamos la misma ingeniería eléctrica y cumplimiento normativo que respalda 10 años y más de 300 soluciones de energía en ARTEL.',
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
