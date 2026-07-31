// ============================================================
//  Proyectos / Casos de éxito
//  >> Para agregar un proyecto, copia un bloque y edita <<
//  category debe ser uno de: 'Micromovilidad' | 'Telecom' | 'HVAC' | 'Energía'
// ============================================================

export type ProjectCategory = 'Micromovilidad' | 'Telecom' | 'HVAC' | 'Energía' | 'Fibra Óptica' | 'Consultoría';

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
  'Fibra Óptica',
  'Consultoría',
];

export const projects: Project[] = [
  {
    title: 'Centro de carga para flota de e-bikes',
    category: 'Micromovilidad',
    image: '/media/micromovilidad-3.webp',
    location: 'Culiacán',
    summary:
      'fabricación, instalación y mantenimiento de centros de carga para flotas de vehiculos eléctricos.',
    tags: ['Fabricación', 'Diseño eléctrico', 'NOM-001'],
  },
  {
    title: 'Mantenimiento a gabinetes de transmisión',
    category: 'Telecom',
    image: '/media/telecom-1.webp',
    location: 'Nacional',
    summary:
      'Programa de mantenimiento preventivo a gabinetes de transmisión para una empresa de telecomunicaciones.',
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
    title: 'Servicio a sistema HVAC comercial',
    category: 'HVAC',
    image: '/media/hvac-2.webp',
    location: 'Estado de México',
    summary:
      'Servicio de mantenimiento preventivo de aire acondicionado para plazas comerciales para reducir consumo eléctrico.',
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
    title: 'Instalación de cargadores para EV',
    category: 'Energía',
    image: '/media/ev-1.webp',
    location: 'Monterrey',
    summary:
      'Instalación de cargadores para autos eléctricos, gestionando con CFE la adecuación eléctrica necesaria.',
    tags: ['EV', 'Electromovilidad'],
  },
  {
    title: 'Mantenimiento a planta de fuerza eléctrica',
    category: 'Energía',
    image: '/media/solar-4.webp',
    location: 'Instalación industrial',
    summary:
      'Mantenimiento preventivo y correctivo a planta de fuerza en el metro de la Ciudad de México.',
    tags: ['Alta tensión', 'Planta de fuerza', 'CFE / NOM'],
  },
  {
    title: 'Revisión de equipo de media tensión y planta de fuerza',
    category: 'Energía',
    image: '/media/subestaciones-2.webp',
    location: 'Instalación industrial',
    summary:
      'Inspección y correctivo de componentes de media tensión y planta de fuerza con enfoque en seguridad.',
    tags: ['Media tensión', 'Planta de fuerza', 'Seguridad'],
  },
];
