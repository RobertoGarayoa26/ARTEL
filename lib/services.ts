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
  process: { step: string; title: string; text: string; image?: string }[];
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
    slug: 'micromovilidad',
    interestKey: 'Micromovilidad / Centros de carga',
    icon: 'battery',
    shortName: 'Centros de carga',
    cardTitle: 'Micromovilidad · Centros de carga',
    cardText:
      'Fabricación e instalación de centros de carga a la medida para flotas de e-bikes, scooters y motos eléctricas.',
    eyebrow: 'Centros de carga para flotas de micromovilidad',
    title: 'Fabricación e instalación de infraestructura para micromovilidad',
    heroSubtitle:
      'Garantizamos la seguridad, eficiencia y escalabilidad de tu flota. Diseñamos, fabricamos e instalamos infraestructura de carga baterías a la medida.',
    heroImage: '/media/micromovilidad-3.webp',
    heroPoster: '/media/micromovilidad-poster.webp',
    heroVideo: '/media/video/micromovilidad.mp4',
    accent: 'green',
    metaTitle: 'Centros de carga para flotas de micromovilidad | ARTEL',
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
      '/media/micromovilidad-6.webp',
    ],
    fichas: [
      {
        title: 'FleetCharge X80 — Ficha técnica',
        file: '/fichas/artel-fleetcharge-x80-ficha-tecnica.pdf',
        specs: [
          { k: 'Material', v: 'Lámina de aluminio o CRS' },
          { k: 'Alto', v: '1.850 m' },
          { k: 'Hermeticidad', v: 'No' },
          { k: 'Garantía', v: '1 año en componentes eléctricos · 5 años en estructura y pintura' },
          { k: 'Normativa', v: 'NOM-001-SEDE' },
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
    slug: 'telecom',
    interestKey: 'Telecom / Gabinetes de radiobases / Fibra Óptica',
    icon: 'antenna',
    shortName: 'Telecom',
    cardTitle: 'Telecom · Gabinetes de transmisión · Fibra óptica',
    cardText:
      'Instalación y mantenimiento de gabinetes de transmisión, fibra óptica y cableado estructurado.',
    eyebrow: 'Instalación y mantenimiento de infraestructura de telecomunicaciones',
    title: 'Instalación y mantenimiento de gabinetes de transmisión, fibra óptica y cableado estructurado.',
    heroSubtitle:
      'Ayudamos a empresas de telecomunicaciones a mantener sus gabinetes de transmisión en funcionamiento, instalar líneas de fibra óptica y cableado estructurado a nivel nacional.',
    heroImage: '/media/telecom-1.webp',
    heroPoster: '/media/telecom-poster.webp',
    heroVideo: '/media/video/telecom.mp4',
    accent: 'blue',
    metaTitle: 'Instalación y mantenimiento a gabinetes de radiobases y transmisión | ARTEL',
    metaDescription:
      'Instalación y mantenimiento preventivo y correctivo a gabinetes de radiobases y transmisión: planta de fuerza DC, baterías, climatización, fibra óptica y cableado estructurado. Cotiza con ARTEL.',
    keywords: [
      'mantenimiento gabinetes radiobases',
      'mantenimiento gabinetes de transmisión',
      'plantas de fuerza DC telecom',
      'mantenimiento bancos de baterías',
      'climatización sitios telecom',
      'instalación de fibra óptica',
      'cableado estructurado',
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
        title: 'Instalaciones y mantenimiento de fibra óptica',
        text: 'Tendido, empalme, certificación y mantenimiento de enlaces de fibra óptica para la conectividad de tu sitio. Más de 50,000 instalaciones ejecutadas a nivel nacional.',
      },
      {
        title: 'Instalaciones de cableado estructurado',
        text: 'Diseño, tendido y certificación de cableado estructurado para redes de datos y telecomunicaciones en sitio.',
      },
      {
        title: 'Gabinetes de transmisión',
        text: 'Mantenimiento preventivo y correctivo a gabinetes de transmisión, con el mismo estándar que aplicamos en radiobases.',
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
      'Mantenimiento preventivo y correctivo a gabinetes de transmisión',
      'Instalación y mantenimiento de fibra óptica',
      'Instalación de cableado estructurado',
      'Reportes con evidencia por sitio',
    ],
    stats: [
      { value: '+50,000', label: 'Instalaciones de fibra óptica' },
      { value: '+10,000', label: 'Mantenimientos ejecutados' },
      { value: '+7,000', label: 'Sitios visitados' },
    ],
    gallery: [
      '/media/telecom-gabinetes-4.webp',
      '/media/telecom-fo-1.webp',
      '/media/telecom-fo-3.webp',
    ],
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
      {
        q: '¿Instalan fibra óptica y cableado estructurado además del mantenimiento de gabinetes?',
        a: 'Sí. Hemos ejecutado más de 50,000 instalaciones de fibra óptica en sitios de telecomunicaciones a nivel nacional, y también instalamos cableado estructurado para redes de datos.',
      },
      {
        q: '¿También dan mantenimiento a gabinetes de transmisión?',
        a: 'Sí, damos mantenimiento preventivo y correctivo a gabinetes de transmisión con el mismo estándar que aplicamos en radiobases.',
      },
    ],
    waMessage:
      'Hola ARTEL, me interesa cotizar instalación y mantenimiento a gabinetes de radiobases/transmisión, fibra óptica o cableado estructurado.',
  },

  /* ---- HVAC ---- */
  {
    slug: 'aires-hvac',
    interestKey: 'HVAC industrial y comercial',
    icon: 'wind',
    shortName: 'HVAC',
    cardTitle: 'HVAC industrial y comercial',
    cardText:
      'Mantenimiento preventivo y correctivo a sistemas de aire acondicionado industriales y comerciales.',
    eyebrow: 'Mantenimiento de infraestructura HVAC',
    title: 'Mantenimiento preventivo y correctivo a aire acondicionado industrial y comercial',
    heroSubtitle:
      'Realizamos servicios de mantenimiento de aire acondicionado a centros de atención a clientes, parques industriales y plazas comerciales, reduciendo consumos de energía y costos de operación.',
    heroImage: '/media/hvac-4.webp',
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
      { value: 'Desde 2020', label: 'Años de experiencia' },
      { value: 'Cobertura nacional', label: 'Presencia en todo el país' },
      { value: '+5,000 ton', label: 'Toneladas ejecutadas' },
    ],
    gallery: ['/media/hvac-6.webp', '/media/hvac-4.webp', '/media/hvac-gallery-2.webp'],
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
    interestKey: 'Energía solar / Plantas de fuerza / Cargadores EV',
    icon: 'solar',
    shortName: 'Energía solar y EV',
    cardTitle: 'Energía solar · Plantas de fuerza · EV',
    cardText:
      'Paneles solares, mantenimiento a plantas de fuerza, subestaciones y estaciones de carga para autos eléctricos.',
    eyebrow: 'Energía e infraestructura eléctrica',
    title: 'Paneles solares, plantas de fuerza, subestaciones y cargadores EV',
    heroSubtitle:
      'Cambiarte y mantener la energía limpia en tu hogar, oficina o centro de distribución, ahora es más fácil con ARTEL. Recupera tu inversión en menos de 3 años y seguirás ahorrando para siempre.',
    heroImage: '/media/solar-4.webp',
    heroPoster: '/media/solar-poster.webp',
    heroVideo: '/media/video/solar.mp4',
    accent: 'green',
    metaTitle: 'Paneles solares, plantas de fuerza y cargadores EV | ARTEL',
    metaDescription:
      'Instalación de paneles solares, mantenimiento a plantas de fuerza y estaciones de carga EV. Ingeniería conforme a NOM-001-SEDE y CFE. Cotiza con ARTEL.',
    keywords: [
      'instalación de paneles solares industrial',
      'mantenimiento plantas de fuerza eléctricas',
      'estaciones de carga para autos eléctricos',
      'cargadores EV México',
      'infraestructura eléctrica CFE',
    ],
    buyer: 'Administradores de Infraestructura Eléctrica, Directores de Operaciones y Administradores de Parques Industriales y Comerciales.',
    pains: [
      'Costo de energía eléctrica cada vez más alto, que reduce el margen de tu operación mes a mes.',
      'Plantas de fuerza y sitios remotos sin mantenimiento documentado: riesgo de falla, paro total y observaciones en auditorías eléctricas.',
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
        text: 'Diseño e instalación de sistemas fotovoltaicos con respaldo de batería. Hemos instalado más de 10,000 kilowatts en sitios de telecomunicaciones a nivel nacional.',
      },
      {
        title: 'Plantas de fuerza eléctricas',
        text: 'Mantenimiento preventivo y correctivo documentado, que respalda tus auditorías y asegura la continuidad de tu suministro.',
      },
      {
        title: 'Estaciones de carga EV',
        text: 'Instalación de cargadores para autos eléctricos con la misma ingeniería eléctrica que respalda nuestros proyectos de energía desde 2020.',
      },
      {
        title: 'Cumplimiento normativo',
        text: 'Ingeniería y ejecución conforme a la NOM-001-SEDE y los requerimientos de interconexión de CFE, para evitar rechazos o retrasos en tu proyecto.',
      },
    ],
    scopeLabel: 'Alcance (kW de generación; capacidad de planta de fuerza; cargadores EV)',
    process: [
      { step: '01', title: 'Levantamiento y diagnóstico', text: 'Análisis de consumo, sitio y objetivos.' },
      { step: '02', title: 'Ingeniería', text: 'Diseño eléctrico y memoria de cálculo.' },
      { step: '03', title: 'Ejecución', text: 'Instalación y cumplimiento normativo.' },
      { step: '04', title: 'Operación y mantenimiento', text: 'Puesta en marcha y mantenimiento continuo.' },
    ],
    capabilities: [
      'Sistemas fotovoltaicos comerciales e industriales',
      'Soluciones de banco de baterías con carga solar para sitios remotos',
      'Mantenimiento preventivo y correctivo a plantas de fuerza',
      'Estaciones de carga para autos eléctricos (EV)',
      'Ingeniería eléctrica conforme a NOM-001-SEDE y requerimientos de CFE',
    ],
    stats: [
      { value: 'Menos de 3 años', label: 'Recuperación de tu inversión' },
      { value: '+90%', label: 'Reducción en tu recibo de luz' },
      { value: '30 años', label: 'Garantía ARTEL' },
    ],
    gallery: [
      '/media/solar-4.webp',
      '/media/solar-5.webp',
      '/media/hev-2-solar.webp',
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
        a: 'Es nuestra línea más reciente, pero aplicamos la misma ingeniería eléctrica y cumplimiento normativo que respalda más de 10,000 kilowatts instalados en proyectos de energía desde 2020.',
      },
    ],
    waMessage:
      'Hola ARTEL, me interesa cotizar energía solar; mantenimiento de planta de fuerza; cargadores EV.',
  },

  /* ---- CONSULTORÍA ---- */
  {
    slug: 'consultoria-negocios',
    interestKey: 'Consultoría de negocios',
    icon: 'consulting',
    shortName: 'Consultoría',
    cardTitle: 'Consultoría de negocios',
    cardText:
      'Consultoría de procesos, ingeniería, operación, digitalización y optimización',
    eyebrow: 'Consultoría de Negocios',
    title: 'Consultoría de procesos, ingeniería y operación para optimizar tu negocio',
    heroSubtitle:
      'Optimiza tus procesos operativos y administrativos a través de rediseño, la digitalización e integración tecnológica. En ARTEL conectamos la estrategia con la operación, mejorando la eficiencia y la productividad.',
    heroImage: '/media/consultoria-2.webp',
    heroPoster: '/media/consultoria-poster.webp',
    heroVideo: '/media/video/consultoria.mp4',
    accent: 'blue',
    metaTitle: 'Consultoría empresarial | ARTEL',
    metaDescription:
      'Consultoría en ingeniería eléctrica, desarrollo de proyectos eléctricos y automatización de procesos industriales, conforme a NOM. Cotiza con ARTEL.',
    keywords: [
      'consultoría eléctrica industrial',
      'desarrollo de proyectos eléctricos',
      'automatización de procesos industriales',
      'ingeniería eléctrica México',
      'estudios de factibilidad eléctrica',
    ],
    buyer:
      'Directores de Operaciones, Gerentes de Ingeniería y Administradores de Infraestructura.',
    pains: [
      'Proyectos eléctricos que arrancan sin un estudio de factibilidad, con sobrecostos y retrabajos.',
      'Procesos manuales que limitan la capacidad de tu operación y aumentan el margen de error.',
      'Decisiones de inversión en infraestructura eléctrica sin respaldo de ingeniería documentada.',
      'Proyectos detenidos por falta de memoria de cálculo o cumplimiento normativo ante CFE.',
    ],
    solutions: [
      {
        title: 'Estudios de factibilidad',
        text: 'Evaluamos viabilidad técnica y normativa antes de que tu proyecto arranque.',
      },
      {
        title: 'Consultoría procesos',
        text: 'Diagnóstico y recomendaciones sobre tu infraestructura actual.',
      },
      {
        title: 'Desarrollo de proyectos de infraestructura',
        text: 'Ingeniería de detalle, memoria de cálculo y planos para proyectos nuevos o ampliaciones.',
      },
      {
        title: 'Automatización de procesos',
        text: 'Análisis y diseño de automatización para procesos industriales, reduciendo intervención manual y margen de error.',
      },
    ],
    scopeLabel: 'Alcance del proyecto (estudio, ingeniería de detalle, automatización)',
    process: [
      { step: '01', title: 'Diagnóstico inicial', text: 'Levantamiento de información y objetivos del proyecto.', image: '/media/consultoria-proceso-1.webp' },
      { step: '02', title: 'Estudio y propuesta', text: 'Análisis técnico y propuesta de solución.', image: '/media/consultoria-proceso-2.webp' },
      { step: '03', title: 'Ingeniería de detalle', text: 'Memoria de cálculo, planos y especificaciones.', image: '/media/consultoria-proceso-3.webp' },
      { step: '04', title: 'Acompañamiento', text: 'Seguimiento durante ejecución y cumplimiento normativo.', image: '/media/consultoria-proceso-4.webp' },
    ],
    capabilities: [
      'Estudios de factibilidad técnica y normativa',
      'Consultoría en ingeniería de procesos industriales y comerciales',
      'Desarrollo de proyectos de infraestructura',
      'Automatización y control de procesos',
    ],
    stats: [
      { value: '+5 años', label: 'Expertos en consultoría de procesos' },
      { value: '+100', label: 'Clientes que confían en ARTEL' },
    ],
    gallery: [
      '/media/consultoria-1.webp',
    ],
    faq: [
      {
        q: '¿Qué incluye la consultoría de negocios?',
        a: 'Diagnóstico de tus procesos e infraestructura actual, recomendaciones técnicas y, si se requiere, desarrollo de ingeniería de detalle para tu proyecto.',
      },
      {
        q: '¿Hacen el proyecto ejecutivo completo?',
        a: 'Sí, desarrollamos ingeniería de detalle, memoria de cálculo y planos listos para ejecución.',
      },
      {
        q: '¿También ejecutan el proyecto o solo consultoría?',
        a: 'Podemos acompañarte solo en la etapa de consultoría, o continuar con la instalación y mantenimiento a través de nuestras otras líneas de negocio.',
      },
      {
        q: '¿Trabajan automatización de procesos?',
        a: 'Sí, analizamos y diseñamos soluciones de automatización para procesos industriales que buscan reducir la intervención manual.',
      },
    ],
    waMessage:
      'Hola ARTEL, me interesa cotizar consultoría de negocios / desarrollo de proyecto / automatización de procesos.',
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

// Opciones del formulario por pasos (deben coincidir con interestKey).
export const interestOptions = services.map((s) => s.interestKey);
