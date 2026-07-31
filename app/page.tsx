import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ShieldCheck,
  Calendar,
  Cable,
  Sun,
  Thermometer,
  MapPinned,
  Wrench,
  CircuitBoard,
} from 'lucide-react';
import { services } from '@/lib/services';
import { projects } from '@/lib/projects';
import { ServiceIcon } from '@/components/Icon';
import { Reveal } from '@/components/Reveal';
import { StepForm } from '@/components/StepForm';
import { WaButton } from '@/components/WaButton';
import { Counter } from '@/components/Counter';

const clientLogos = [
  { name: 'Telcel', src: '/media/clients/telcel.webp', w: 953 },
  { name: 'Telmex', src: '/media/clients/telmex.webp', w: 1366 },
  { name: 'IASA', src: '/media/clients/iasa.webp', w: 383 },
  { name: 'Infrasim', src: '/media/clients/infrasim.webp', w: 233 },
  { name: 'Culiacán', src: '/media/clients/culiacan.webp', w: 433 },
  { name: 'Codere', src: '/media/clients/codere.webp', w: 843 },
];

export default function HomePage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-16 md:pt-20">
        <div className="absolute inset-0 -z-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover opacity-45"
          >
            <source src="/media/video/inicio.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="container-x w-full py-20 md:py-28">
          <Reveal>
            <span className="eyebrow">
              <CircuitBoard className="h-4 w-4" /> Consultoría · Ingeniería · Fabricación · Mantenimiento · Instalaciones
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl">
              Un solo aliado para tu <span className="text-artel-green-400">infraestructura</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-2xl text-lg text-white/75">
              ARTEL mantiene tu infraestructura eléctrica, climatización, telecomunicaciones y
              movilidad eléctrica, con una alta disponibilidad para tus clientes y operaciones.
            </p>
          </Reveal>
          <Reveal delay={170}>
            <ul className="mt-5 max-w-2xl space-y-2.5">
              {[
                'Ingeniería de alto nivel, cumplimiento normativo y tiempos de respuesta que protegen tu operación.',
                'Integramos soluciones de distintas especialidades para atender tus necesidades.',
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-white/75">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-artel-green-400" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contacto" className="btn btn-primary text-base">
                Cotizar mi proyecto <ArrowRight className="h-4 w-4" />
              </Link>
              <WaButton
                location="hero"
                message="Hola ARTEL, me interesa cotizar un proyecto de infraestructura."
                className="btn btn-whatsapp text-base"
              >
                WhatsApp directo
              </WaButton>
            </div>
          </Reveal>

          {/* Cifras clave */}
          <Reveal delay={280}>
            <div className="mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
              {[
                { icon: Calendar, v: 'Desde 2020', l: 'En el mercado' },
                { icon: Cable, v: '+50,000', l: 'Instalaciones de fibra óptica' },
                { icon: Wrench, v: '+10,000', l: 'Mantenimientos ejecutados' },
                { icon: Sun, v: '+10,000 kW', l: 'Instalados en paneles solares' },
                { icon: MapPinned, v: '+7,000', l: 'Sitios visitados' },
                { icon: Thermometer, v: '+5,000 ton', l: 'Ejecutadas en HVAC' },
              ].map((t) => (
                <div key={t.l} className="flex items-start gap-3">
                  <t.icon className="mt-0.5 h-5 w-5 text-artel-green-400" />
                  <div>
                    <p className="font-display text-lg text-white">
                      <Counter value={t.v} />
                    </p>
                    <p className="text-xs text-white/60">{t.l}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= LÍNEAS DE NEGOCIO ================= */}
      <section className="section-fade py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow"><Wrench className="h-4 w-4" /> Líneas de negocio</span>
            <h2 className="mt-4 max-w-2xl text-3xl md:text-4xl">
              Cinco líneas de ingeniería, un mismo estándar
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <Link
                  href={`/${s.slug}`}
                  className="group relative block overflow-hidden rounded-2xl ring-1 ring-black/10"
                >
                  <div className="relative h-56 w-full">
                    <Image
                      src={s.heroImage}
                      alt={s.cardTitle}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/70 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div
                      className={`mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl ${
                        s.accent === 'green' ? 'bg-artel-green/20' : 'bg-artel-blue/25'
                      }`}
                    >
                      <ServiceIcon
                        name={s.icon}
                        className={`h-5 w-5 ${
                          s.accent === 'green' ? 'text-artel-green-400' : 'text-artel-blue-400'
                        }`}
                      />
                    </div>
                    <h3 className="text-xl text-white">{s.cardTitle}</h3>
                    <p className="mt-2 max-w-md text-sm text-white/75">{s.cardText}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-artel-green-400">
                      Ver línea <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ONE-STOP-SHOP ================= */}
      <section className="border-y border-black/10 bg-ink-800/50 py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Propuesta de valor</span>
            <h2 className="mt-4 text-3xl md:text-4xl">
              Un solo proveedor para toda tu infraestructura
            </h2>
            <p className="mt-5 text-steel-300">
              En lugar de coordinar múltiples proveedores para energía, climatización, telecom y
              carga eléctrica, ARTEL integra todo bajo un mismo estándar de ingeniería, un solo
              contrato y un solo punto de contacto. Menos proveedores, menos riesgo, más control.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Ingeniería y fabricación propia, no solo instalación de terceros.',
                'Cumplimiento normativo NOM y ante CFE.',
                'Contratos de mantenimiento con SLA y evidencia.',
                'Un solo interlocutor para todas tus líneas.',
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-steel-200">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-artel-green-600" />
                  {p}
                </li>
              ))}
            </ul>
            <Link href="/nosotros" className="btn btn-secondary mt-8">
              Conocer nuestra capacidad técnica <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-black/10">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/media/propuesta-valor-1.webp"
                  alt="Instalación de infraestructura ARTEL"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= PROYECTOS PREVIEW ================= */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="flex items-end justify-between gap-4">
            <Reveal>
              <span className="eyebrow">Prueba social</span>
              <h2 className="mt-4 text-3xl md:text-4xl">Proyectos ejecutados</h2>
            </Reveal>
            <Link href="/proyectos" className="hidden shrink-0 text-sm font-semibold text-artel-green-600 hover:underline sm:inline-flex sm:items-center sm:gap-1.5">
              Ver todos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div className="group overflow-hidden rounded-2xl ring-1 ring-black/10">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-noir/80 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15">
                      {p.category}
                    </span>
                  </div>
                  <div className="bg-ink-800 p-5">
                    <h3 className="text-base">{p.title}</h3>
                    <p className="mt-1.5 text-sm text-steel-400">{p.summary}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EMPRESAS QUE CONFÍAN EN NOSOTROS ================= */}
      <section className="border-y border-black/10 bg-ink-800/40 py-16">
        <div className="container-x">
          <Reveal>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-steel-400">
              Empresas que confían en nosotros
            </p>
          </Reveal>
        </div>
        <div className="mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-16 hover:[animation-play-state:paused]">
            {[...clientLogos, ...clientLogos].map((c, i) => (
              <div key={`${c.name}-${i}`} className="relative h-10 w-28 shrink-0 sm:h-12 sm:w-32">
                <Image
                  src={c.src}
                  alt={c.name}
                  fill
                  sizes="140px"
                  className="object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LEAD FORM ================= */}
      <section id="cotizar" className="section-fade border-t border-black/10 py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Cotización en 3 pasos</span>
            <h2 className="mt-4 text-3xl md:text-4xl">
              Cotiza tu proyecto con nosotros
            </h2>
            <p className="mt-5 text-steel-300">
              Responde tres pasos rápidos y un ingeniero de ARTEL analizará tu caso. Si prefieres, escríbenos directo por WhatsApp.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { n: '1', t: 'Selecciona tu área de interés' },
                { n: '2', t: 'Indícanos el alcance estimado' },
                { n: '3', t: 'Déjanos tus datos de contacto' },
              ].map((s) => (
                <div key={s.n} className="flex items-center gap-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-artel-green/15 font-display text-artel-green-600">
                    {s.n}
                  </span>
                  <span className="text-steel-200">{s.t}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <WaButton
                location="home_form_section"
                message="Hola ARTEL, me interesa cotizar un proyecto de infraestructura."
                className="btn btn-whatsapp"
              >
                Prefiero WhatsApp
              </WaButton>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <StepForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
