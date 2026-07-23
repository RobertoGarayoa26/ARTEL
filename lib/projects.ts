// ============================================================
//  Proyectos / Casos de éxito
//  >> Para agregar un proyecto, copia un bloque y edita <<
//  category debe ser uno de: 'Micromovilidad' | 'Telecom' | 'HVAC' | 'Energía'
// ============================================================

export type ProjectCategory = 'Micromovilidad' | 'Telecom' | 'HVAC' | 'Energía';

export type Project = {
  title: string;
  category: ProjectCategory;
  image: string;
  location: string;
  summary: string;
  tags: string[];
};

export const projectCategories: ProjectCategory[] = [
  'Micromovilidad',
  'Telecom',
  'HVAC',
  'Energía',
];

export const projects: Project[] = [
  {
    title: 'Centro de carga para flota de última milla',
    category: 'Micromovilidad',
    image: '/media/micromovilidad-3.webp',
    location: 'Culiacán',
    summary:
      'Fabricación e instalación de un centro de carga a la medida con bahías dedicadas y protecciones eléctricas para una flota de e-bikes.',
    tags: ['Fabricación', 'Diseño eléctrico', 'NOM-001'],
  },
  {
    title: 'Mantenimiento a gabinetes de radiobases',
    category: 'Telecom',
    image: '/media/telecom-1.webp',
    location: 'Nacional',
    summary:
      'Rutina preventiva sobre planta de fuerza DC, banco de baterías y climatización del gabinete con reporte de parámetros.',
    tags: ['Planta DC', 'Baterías', 'SLA'],
  },
  {
    title: 'Mantenimiento HVAC a CACs',
    category: 'HVAC',
    image: '/media/hvac-1.webp',
    location: 'Nacional',
    summary:
      'Programa de mantenimiento preventivo a equipos de climatización en centros de atención a clientes.',
    tags: ['Preventivo', 'Multimarca'],
  },
  {
    title: 'Servicio a sistema de climatización comercial',
    category: 'HVAC',
    image: '/media/hvac-2.webp',
    location: 'Estado de México',
    summary:
      'Servicio de mantenimiento a climatización a plaza comercial para reducir consumo eléctrico.',
    tags: ['Eficiencia', 'Correctivo'],
  },
  {
    title: 'Instalación de paneles solares',
    category: 'Energía',
    image: '/media/solar-1.webp',
    location: 'México',
    summary:
      'Servicio de mantenimiento e instalación de paneles solares en radiobases de telecomunicaciones.',
    tags: ['Fotovoltaico', 'Ahorro'],
  },
  {
    title: 'Instalación de cargador EV con adecuación eléctrica',
    category: 'Energía',
    image: '/media/ev-1.webp',
    location: 'Monterrey',
    summary:
      'Instalación de cargador EV con la adecuación de infraestructura eléctrica necesaria.',
    tags: ['EV', 'Electromovilidad'],
  },
  {
    title: 'Mantenimiento a subestación eléctrica',
    category: 'Energía',
    image: '/media/subestaciones-1.webp',
    location: 'Instalación industrial',
    summary:
      'Mantenimiento preventivo a subestación para asegurar la continuidad del suministro eléctrico.',
    tags: ['Subestación', 'CFE / NOM'],
  },
  {
    title: 'Revisión de equipo de media tensión',
    category: 'Energía',
    image: '/media/subestaciones-2.webp',
    location: 'Instalación industrial',
    summary:
      'Inspección y correctivo de componentes de media tensión con enfoque en seguridad.',
    tags: ['Media tensión', 'Seguridad'],
  },
];
