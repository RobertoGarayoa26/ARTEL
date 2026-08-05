import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ShieldCheck,
  Wrench,
  Target,
  Eye,
  HeartHandshake,
  Clock4,
  MapPinned,
  Gauge,
  FileCheck2,
  Users,
  Calendar,
  Cable,
  Sun,
  Trophy,
  Building2,
  Thermometer,
} from 'lucide-react';
import { Counter } from '@/components/Counter';
import { Reveal } from '@/components/Reveal';
import { WaButton } from '@/components/WaButton';

export const metadata: Metadata = {
  title: 'Nosotros · Capacidad técnica',
  description:
    'ARTEL es un fabricante e instalador de infraestructura eléctrica, climatización, telecom y movilidad eléctrica. Cumplimiento NOM y CFE, cobertura nacional y contratos con SLA.',
  alternates: { canonical: '/nosotros' },
};

const capabilities = [
  {
    icon: Wrench,
    title: 'Fabricante e instalador',
    text: 'Diseñamos, fabricamos e instalamos infraestructura como centros de carga, con control de calidad de principio a fin.',
  },
  {
    icon: FileCheck2,
    title: 'Cumplimiento normativo',
    text: 'Ejecutamos conforme a NOM-001-SEDE y los requerimientos de CFE, con memorias de cálculo e ingeniería documentada.',
  },
  {
    icon: Gauge,
    title: 'Ingeniería de proyecto',
    text: 'Dimensionamiento eléctrico, diseño y planeación para cada proyecto, no soluciones genéricas.',
  },
  {
    icon: Clock4,
    title: 'Tiempos de respuesta (SLA)',
    text: 'Contratos de mantenimiento con niveles de servicio y guardias 24/7 para infraestructura crítica.',
  },
  {
    icon: MapPinned,
    title: 'Cobertura nacional',
    text: 'Atendemos proyectos y sitios en toda la República Mexicana.',
  },
  {
    icon: ShieldCheck,
    title: 'Trazabilidad y evidencia',
    text: 'Reportes fotográficos y de parámetros por sitio para tu control y auditoría.',
  },
];

export default function NosotrosPage() {
  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 md:pt-36">
        <div className="absolute inset-0 -z-10">
          <Image src="/media/nosotros-oficinas.webp" alt="" fill priority className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="container-x w-full">
          <Reveal>
            <span className="eyebrow !text-artel-cyan">Nosotros</span>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl">
              ARTEL
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/75">
              En ARTEL ofrecemos servicios de ingeniería, fabricación, instalaciones, mantenimientos y consultoría de procesos, para optimizar tu negocio y aumentar la eficiencia y productividad; nuestro principal objetivo es hacer que nuestros servicios generen valor y mayor productividad para su organización.
            </p>
          </Reveal>

          {/* Métricas */}
          <Reveal delay={280}>
            <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Calendar, v: 'Desde 2020', l: 'En el mercado' },
                { icon: Trophy, v: '+100', l: 'Proyectos en nuestro portafolio' },
                { icon: Building2, v: '+100', l: 'Clientes que confían en ARTEL' },
              ].map((t, i) => (
                <Reveal key={t.l} delay={i * 60}>
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-inset ring-white/15">
                      <t.icon className="h-6 w-6 text-artel-cyan" />
                    </div>
                    <div>
                      <p className="text-accent font-display text-3xl font-extrabold leading-none tabular-nums sm:text-4xl">
                        <Counter value={t.v} />
                      </p>
                      <p className="mt-1.5 text-sm text-white/60">{t.l}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Capacidades */}
      <section className="py-20">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Capacidad técnica</span>
            <h2 className="mt-4 max-w-2xl text-3xl md:text-4xl">
              Por qué las empresas confían en ARTEL
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 60}>
                <div className="h-full rounded-2xl bg-noir p-6 ring-1 ring-white/10">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-inset ring-white/15">
                    <c.icon className="h-5 w-5 text-artel-cyan" />
                  </div>
                  <h3 className="mt-4 text-lg text-white">{c.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="border-t border-black/10 py-20">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Misión, visión y valores</span>
            <h2 className="mt-4 max-w-2xl text-3xl md:text-4xl">Lo que nos guía</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Reveal>
              <div className="h-full rounded-2xl bg-noir p-6 ring-1 ring-white/10">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-inset ring-white/15">
                  <Target className="h-5 w-5 text-artel-cyan" />
                </div>
                <h3 className="mt-4 text-lg text-white">Misión</h3>
                <p className="mt-2 text-sm text-white/60">
                  Mantener en operación continua la infraestructura de nuestros clientes, con
                  ingeniería propia, cumplimiento normativo y tiempos de respuesta que protegen su
                  operación.
                </p>
              </div>
            </Reveal>
            <Reveal delay={60}>
              <div className="h-full rounded-2xl bg-noir p-6 ring-1 ring-white/10">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-inset ring-white/15">
                  <Eye className="h-5 w-5 text-artel-cyan" />
                </div>
                <h3 className="mt-4 text-lg text-white">Visión</h3>
                <p className="mt-2 text-sm text-white/60">
                  Ser el proveedor de referencia en infraestructura en México, integrando cada
                  especialidad bajo un solo punto de contacto y un compromiso de calidad
                  constante.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-full rounded-2xl bg-noir p-6 ring-1 ring-white/10">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-inset ring-white/15">
                  <HeartHandshake className="h-5 w-5 text-artel-cyan" />
                </div>
                <h3 className="mt-4 text-lg text-white">Valores</h3>
                <p className="mt-2 text-sm text-white/60">
                  Cumplimiento normativo, trazabilidad de cada servicio, tiempos de respuesta que
                  respetamos y una relación de largo plazo con cada cliente.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Enfoque cliente */}
      <section className="border-t border-black/10 bg-ink-800/40 py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-black/10">
              <div className="relative aspect-[4/3] w-full">
                <Image src="/media/nosotros-equipo.webp" alt="Equipo ARTEL en sitio" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex items-center gap-2 text-artel-cyan">
              <Users className="h-5 w-5" />
              <span className="eyebrow">A quién atendemos</span>
            </div>
            <h2 className="mt-4 text-3xl">Un aliado técnico, no un proveedor más</h2>
            <p className="mt-5 text-steel-300">
              Somos una extensión de tu operación, no un proveedor más. Trabajamos con directores
              de operaciones, gerentes de flota, administradores de infraestructura y responsables
              de mantenimiento: empresas que no pueden permitirse un paro no planeado.
            </p>
            <Link href="/contacto" className="btn-accent mt-8">
              Hablemos de tu proyecto <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-x flex flex-col items-start justify-between gap-6 rounded-2xl bg-gradient-to-br from-artel-blue/10 to-artel-cyan/10 p-8 ring-1 ring-black/10 sm:flex-row sm:items-center">
          <h2 className="max-w-lg text-2xl">
            ¿Listo para integrar tu infraestructura con un solo aliado?
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/contacto" className="btn-accent">Cotizar</Link>
            <WaButton location="nosotros_cta" message="Hola ARTEL, quiero conocer más sobre su capacidad técnica." className="btn-pill-whatsapp">
              WhatsApp
            </WaButton>
          </div>
        </div>
      </section>
    </>
  );
}
