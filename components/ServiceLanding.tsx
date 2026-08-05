import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, AlertTriangle, CheckCircle2, Gauge } from 'lucide-react';
import type { Service } from '@/lib/services';
import { ServiceIcon } from '@/components/Icon';
import { Reveal } from '@/components/Reveal';
import { StepForm } from '@/components/StepForm';
import { WaButton } from '@/components/WaButton';
import { FichaDownload } from '@/components/FichaDownload';
import { site } from '@/lib/site';

export function ServiceLanding({ service: s }: { service: Service }) {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-16 md:pt-20">
        <div className="absolute inset-0 -z-10">
          {s.heroVideo ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={s.heroPoster || s.heroImage}
              className="h-full w-full object-cover opacity-45"
            >
              <source src={s.heroVideo} type="video/mp4" />
            </video>
          ) : (
            <Image src={s.heroImage} alt="" fill priority className="object-cover opacity-45" />
          )}
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="container-x w-full py-20 md:py-28">
          <Reveal>
            <nav className="mb-6 text-sm text-white/60">
              <Link href="/" className="hover:text-white">Inicio</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{s.shortName}</span>
            </nav>
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-inset ring-white/15">
              <ServiceIcon name={s.icon} className="h-6 w-6 text-artel-cyan" />
            </div>
            <span className="eyebrow !text-artel-cyan">{s.eyebrow}</span>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl">
              {s.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/75">{s.heroSubtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#cotizar" className="btn-accent text-base">
                Cotizar esta línea <ArrowRight className="h-4 w-4" />
              </Link>
              <WaButton location={`landing_${s.slug}_hero`} message={s.waMessage} className="btn-pill-whatsapp text-base">
                WhatsApp directo
              </WaButton>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-3">
            {s.stats.map((st, i) => (
              <Reveal key={st.label} delay={200 + i * 60}>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-inset ring-white/15">
                    <Gauge className="h-6 w-6 text-artel-cyan" />
                  </div>
                  <div>
                    <p className="text-accent font-display text-3xl font-extrabold leading-none tabular-nums sm:text-4xl">{st.value}</p>
                    <p className="mt-1.5 text-sm text-white/60">{st.label}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DOLORES → SOLUCIONES */}
      <section className="section-fade py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow"><AlertTriangle className="h-4 w-4" /> El reto</span>
            <h2 className="mt-4 text-2xl md:text-3xl">Lo que resolvemos</h2>
            <p className="mt-3 text-sm text-steel-400">Dirigido a: {s.buyer}</p>
            <ul className="mt-6 space-y-3">
              {s.pains.map((p) => (
                <li key={p} className="flex items-start gap-3 rounded-xl bg-ink-800 p-4 text-sm text-steel-200 ring-1 ring-black/5">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <span className="eyebrow"><CheckCircle2 className="h-4 w-4" /> La solución ARTEL</span>
            <h2 className="mt-4 text-2xl md:text-3xl">Cómo lo hacemos</h2>
            <div className="mt-6 grid gap-4">
              {s.solutions.map((sol) => (
                <div key={sol.title} className="rounded-xl bg-ink-800 p-5 ring-1 ring-black/5">
                  <h3 className="text-base text-steel-200">{sol.title}</h3>
                  <p className="mt-1.5 text-sm text-steel-300">{sol.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESO */}
      <section className="border-y border-black/10 bg-ink-800/40 py-20">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Cómo trabajamos</span>
            <h2 className="mt-4 text-2xl md:text-3xl">Nuestro proceso</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {s.process.map((p, i) => (
              <Reveal key={p.step} delay={i * 70}>
                {p.image ? (
                  <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-noir ring-1 ring-white/10 transition-shadow duration-300 hover:shadow-2xl hover:shadow-artel-cyan/10">
                    <div className="relative h-40 w-full shrink-0 overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <span className="text-accent font-display text-3xl font-extrabold">{p.step}</span>
                      <h3 className="mt-3 text-base text-white">{p.title}</h3>
                      <p className="mt-1.5 text-sm text-white/60">{p.text}</p>
                    </div>
                  </div>
                ) : (
                  <div className="relative h-full rounded-2xl bg-noir p-6 ring-1 ring-white/10">
                    <span className="text-accent font-display text-3xl font-extrabold">{p.step}</span>
                    <h3 className="mt-3 text-base text-white">{p.title}</h3>
                    <p className="mt-1.5 text-sm text-white/60">{p.text}</p>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CAPACIDADES + GALERÍA */}
      <section className="py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Capacidades</span>
            <h2 className="mt-4 text-2xl md:text-3xl">Alcance del servicio</h2>
            <ul className="mt-6 space-y-3">
              {s.capabilities.map((c) => (
                <li key={c} className="flex items-start gap-3 text-steel-200">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-artel-cyan" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            {s.gallery.length === 1 ? (
              <div className="relative mx-auto max-w-[360px] overflow-hidden rounded-2xl ring-1 ring-black/10 sm:max-w-[360px]">
                <div className="relative aspect-[1/1] w-full">
                  <Image
                    src={s.gallery[0]}
                    alt={s.shortName}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {s.gallery.slice(0, 4).map((g, i) => (
                  <div
                    key={g}
                    className={`relative overflow-hidden rounded-xl ring-1 ring-black/10 ${
                      i === 0 ? 'col-span-2 h-52' : 'h-36'
                    }`}
                  >
                    <Image src={g} alt={s.shortName} fill sizes="(max-width:1024px) 50vw, 25vw" className="object-cover" />
                  </div>
                ))}
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* FICHAS TÉCNICAS */}
      {s.fichas && s.fichas.length > 0 && (
        <section className="border-t border-black/10 bg-ink-800/40 py-16">
          <div className="container-x">
            <Reveal>
              <span className="eyebrow">Recursos técnicos</span>
              <h2 className="mt-4 text-2xl md:text-3xl">Fichas técnicas descargables</h2>
              <p className="mt-3 max-w-2xl text-sm text-steel-400">
                Descarga las especificaciones de los centros de carga fabricados por ARTEL.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-5">
              {s.fichas.map((f) => (
                <Reveal key={f.file}>
                  <FichaDownload ficha={f} interest={s.interestKey} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20">
        <div className="container-x max-w-3xl">
          <Reveal>
            <span className="eyebrow">Preguntas frecuentes</span>
            <h2 className="mt-4 text-2xl md:text-3xl">Dudas comunes</h2>
          </Reveal>
          <div className="mt-8 divide-y divide-black/10">
            {s.faq.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-steel-200">
                  <span className="font-medium">{f.q}</span>
                  <span className="text-artel-cyan transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-steel-300">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + FORM */}
      <section id="cotizar" className="section-fade border-t border-black/10 py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Cotización en 3 pasos</span>
            <h2 className="mt-4 text-3xl md:text-4xl">Solicita tu cotización</h2>
            <p className="mt-5 text-steel-300">
              Un ingeniero de ARTEL analizará tu caso de {s.shortName.toLowerCase()} y te contactará.
              Sin compromiso.
            </p>
            <div className="mt-8">
              <WaButton location={`landing_${s.slug}_form`} message={s.waMessage} className="btn-pill-whatsapp">
                Prefiero WhatsApp
              </WaButton>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <StepForm defaultInterest={s.interestKey} />
          </Reveal>
        </div>
      </section>

      {/* JSON-LD Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: s.title,
            serviceType: s.shortName,
            provider: { '@type': 'Organization', name: site.name, url: site.url },
            areaServed: 'MX',
            description: s.metaDescription,
            url: `${site.url}/${s.slug}`,
          }),
        }}
      />
    </>
  );
}
