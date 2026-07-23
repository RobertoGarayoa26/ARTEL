import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ShieldCheck,
  Factory,
  Clock4,
  MapPinned,
  Gauge,
  FileCheck2,
  Users,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { WaButton } from '@/components/WaButton';

export const metadata: Metadata = {
  title: 'Nosotros · Capacidad técnica',
  description:
    'ARTEL es un fabricante e integrador de ingeniería en infraestructura eléctrica, climatización, telecom y movilidad eléctrica. Cumplimiento NOM y CFE, cobertura nacional y contratos con SLA.',
  alternates: { canonical: '/nosotros' },
};

const capabilities = [
  {
    icon: Factory,
    title: 'Fabricante, no solo instalador',
    text: 'Diseñamos y fabricamos infraestructura como centros de carga en taller propio, con control de calidad de principio a fin.',
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
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36">
        <div className="absolute inset-0 -z-10">
          <Image src="/media/subestaciones-2.webp" alt="" fill priority className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/88 to-ink" />
        </div>
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Nosotros</span>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl">
              Ingeniería e integración de infraestructura crítica
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-steel-300">
              ARTEL es un fabricante e integrador de ingeniería. Unificamos energía, climatización,
              telecomunicaciones y movilidad eléctrica bajo un mismo estándar técnico, para que
              nuestros clientes operen con menos proveedores y menos riesgo.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Métricas */}
      <section className="border-y border-white/10 bg-ink-800/40 py-12">
        <div className="container-x grid grid-cols-2 gap-8 sm:grid-cols-4">
          {[
            { v: '6', l: 'Especialidades técnicas' },
            { v: 'NOM · CFE', l: 'Cumplimiento normativo' },
            { v: '24/7', l: 'Atención con SLA' },
            { v: 'Nacional', l: 'Cobertura en México' },
          ].map((m) => (
            <Reveal key={m.l}>
              <p className="font-display text-3xl text-white">{m.v}</p>
              <p className="mt-1 text-sm text-steel-400">{m.l}</p>
            </Reveal>
          ))}
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
                <div className="h-full rounded-2xl bg-ink-800 p-6 ring-1 ring-white/10">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-artel-green/15">
                    <c.icon className="h-5 w-5 text-artel-green-400" />
                  </div>
                  <h3 className="mt-4 text-lg">{c.title}</h3>
                  <p className="mt-2 text-sm text-steel-300">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enfoque cliente */}
      <section className="border-t border-white/10 bg-ink-800/40 py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10">
              <div className="relative aspect-[4/3] w-full">
                <Image src="/media/telecom-1.webp" alt="Mantenimiento en sitio ARTEL" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex items-center gap-2 text-artel-green-400">
              <Users className="h-5 w-5" />
              <span className="eyebrow !text-artel-green-400">Nuestro compromiso</span>
            </div>
            <h2 className="mt-4 text-3xl">Un aliado técnico, no un proveedor más</h2>
            <p className="mt-5 text-steel-300">
              Acompañamos a directores de operaciones, gerentes de flota, administradores de
              infraestructura y responsables de mantenimiento con soluciones diseñadas para su
              contexto. Priorizamos la continuidad de tu operación, la seguridad eléctrica y la
              transparencia en cada entrega.
            </p>
            <Link href="/contacto" className="btn btn-primary mt-8">
              Hablemos de tu proyecto <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-x flex flex-col items-start justify-between gap-6 rounded-2xl bg-gradient-to-br from-artel-blue/20 to-artel-green/10 p-8 ring-1 ring-white/10 sm:flex-row sm:items-center">
          <h2 className="max-w-lg text-2xl">
            ¿Listo para integrar tu infraestructura con un solo aliado?
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/contacto" className="btn btn-primary">Cotizar</Link>
            <WaButton location="nosotros_cta" message="Hola ARTEL, quiero conocer más sobre su capacidad técnica." className="btn btn-secondary">
              WhatsApp
            </WaButton>
          </div>
        </div>
      </section>
    </>
  );
}
