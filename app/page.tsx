import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ShieldCheck,
  Factory,
  Clock4,
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

export default function HomePage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-16 md:pt-20">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/media/subestaciones-1.webp"
            alt=""
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/85 to-ink" />
          <div className="absolute inset-0 bg-grid-faint [background-size:56px_56px] opacity-40" />
        </div>

        <div className="container-x py-20 md:py-28">
          <Reveal>
            <span className="eyebrow">
              <CircuitBoard className="h-4 w-4" /> Ingeniería · Fabricación · Mantenimiento
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
              Un solo aliado para tu{' '}
              <span className="text-artel-green-400">infraestructura crítica</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-2xl text-lg text-steel-300">
              ARTEL fabrica e integra infraestructura eléctrica, climatización, telecomunicaciones y
              movilidad eléctrica. Ingeniería de alto nivel, cumplimiento normativo y tiempos de
              respuesta que protegen tu operación.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contacto" className="btn btn-primary text-base">
                Cotizar mi proyecto <ArrowRight className="h-4 w-4" />
              </Link>
              <WaButton
                location="hero"
                message="Hola ARTEL, me interesa cotizar un proyecto de infraestructura."
                className="btn btn-secondary text-base"
              >
                WhatsApp directo
              </WaButton>
            </div>
          </Reveal>

          {/* Trust strip */}
          <Reveal delay={280}>
            <div className="mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
              {[
                { icon: Factory, v: 'Fabricante', l: 'Taller e ingeniería propia' },
                { icon: ShieldCheck, v: 'NOM · CFE', l: 'Cumplimiento normativo' },
                { icon: Clock4, v: '24/7', l: 'Contratos con SLA' },
                { icon: MapPinned, v: 'Nacional', l: 'Cobertura en México' },
              ].map((t) => (
                <div key={t.v} className="flex items-start gap-3">
                  <t.icon className="mt-0.5 h-5 w-5 text-artel-green-400" />
                  <div>
                    <p className="font-display text-lg text-white">{t.v}</p>
                    <p className="text-xs text-steel-400">{t.l}</p>
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
              Cuatro líneas de ingeniería, un mismo estándar
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <Link
                  href={`/${s.slug}`}
                  className="group relative block overflow-hidden rounded-2xl ring-1 ring-white/10"
                >
                  <div className="relative h-56 w-full">
                    <Image
                      src={s.heroImage}
                      alt={s.cardTitle}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-transparent" />
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
                    <h3 className="text-xl">{s.cardTitle}</h3>
                    <p className="mt-2 max-w-md text-sm text-steel-300">{s.cardText}</p>
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
      <section className="border-y border-white/10 bg-ink-800/50 py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Propuesta de valor</span>
            <h2 className="mt-4 text-3xl md:text-4xl">
              El “one-stop-shop” de tu infraestructura
            </h2>
            <p className="mt-5 text-steel-300">
              En lugar de coordinar múltiples proveedores para energía, climatización, telecom y
              carga eléctrica, ARTEL integra todo bajo un mismo estándar de ingeniería, un solo
              contrato y un solo punto de contacto. Menos proveedores, menos riesgo, más control.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Ingeniería y fabricación propia, no solo instalación.',
                'Cumplimiento normativo NOM y ante CFE.',
                'Contratos de mantenimiento con SLA y evidencia.',
                'Un solo interlocutor para todas tus líneas.',
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-steel-200">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-artel-green-400" />
                  {p}
                </li>
              ))}
            </ul>
            <Link href="/nosotros" className="btn btn-secondary mt-8">
              Conocer nuestra capacidad técnica <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/media/micromovilidad-2.webp"
                  alt="Fabricación de infraestructura ARTEL"
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
            <Link href="/proyectos" className="hidden shrink-0 text-sm font-semibold text-artel-green-400 hover:text-artel-green sm:inline-flex sm:items-center sm:gap-1.5">
              Ver todos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div className="group overflow-hidden rounded-2xl ring-1 ring-white/10">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15">
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

      {/* ================= LEAD FORM ================= */}
      <section id="cotizar" className="section-fade border-t border-white/10 py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Cotización en 3 pasos</span>
            <h2 className="mt-4 text-3xl md:text-4xl">
              Cuéntanos tu proyecto y recibe una propuesta
            </h2>
            <p className="mt-5 text-steel-300">
              Responde tres pasos rápidos y un ingeniero de ARTEL analizará tu caso. Sin
              compromiso. Si prefieres, escríbenos directo por WhatsApp.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { n: '1', t: 'Selecciona tu área de interés' },
                { n: '2', t: 'Indícanos el alcance estimado' },
                { n: '3', t: 'Déjanos tus datos de contacto' },
              ].map((s) => (
                <div key={s.n} className="flex items-center gap-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-artel-green/15 font-display text-artel-green-400">
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
                className="btn btn-secondary"
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
