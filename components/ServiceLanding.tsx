import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, AlertTriangle, CheckCircle2 } from 'lucide-react';
import type { Service } from '@/lib/services';
import { ServiceIcon } from '@/components/Icon';
import { Reveal } from '@/components/Reveal';
import { StepForm } from '@/components/StepForm';
import { WaButton } from '@/components/WaButton';
import { FichaDownload } from '@/components/FichaDownload';
import { site } from '@/lib/site';

export function ServiceLanding({ service: s }: { service: Service }) {
  const accentText = s.accent === 'green' ? 'text-artel-green-400' : 'text-artel-blue-400';
  const accentBg = s.accent === 'green' ? 'bg-artel-green/15' : 'bg-artel-blue/20';

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-16 md:pt-20">
        <div className="absolute inset-0 -z-10">
          {s.heroVideo ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={s.heroPoster || s.heroImage}
              className="h-full w-full object-cover opacity-30"
            >
              <source src={s.heroVideo} type="video/mp4" />
            </video>
          ) : (
            <Image src={s.heroImage} alt="" fill priority className="object-cover opacity-30" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/85 to-ink" />
        </div>

        <div className="container-x py-20 md:py-28">
          <Reveal>
            <nav className="mb-6 text-sm text-steel-400">
              <Link href="/" className="hover:text-white">Inicio</Link>
              <span className="mx-2">/</span>
              <span className="text-steel-200">{s.shortName}</span>
            </nav>
            <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${accentBg}`}>
              <ServiceIcon name={s.icon} className={`h-6 w-6 ${accentText}`} />
            </div>
            <span className="eyebrow">{s.eyebrow}</span>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl">
              {s.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-steel-300">{s.heroSubtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#cotizar" className="btn btn-primary text-base">
                Cotizar esta línea <ArrowRight className="h-4 w-4" />
              </Link>
              <WaButton location={`landing_${s.slug}_hero`} message={s.waMessage} className="btn btn-secondary text-base">
                WhatsApp directo
              </WaButton>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-14 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
              {s.stats.map((st) => (
                <div key={st.label}>
                  <p className="font-display text-2xl text-white">{st.value}</p>
                  <p className="text-sm text-steel-400">{st.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
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
                <li key={p} className="flex items-start gap-3 rounded-xl bg-ink-800 p-4 text-sm text-steel-200 ring-1 ring-white/5">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400/80" />
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
                <div key={sol.title} className="rounded-xl bg-ink-800 p-5 ring-1 ring-white/5">
                  <h3 className="text-base text-white">{sol.title}</h3>
                  <p className="mt-1.5 text-sm text-steel-300">{sol.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESO */}
      <section className="border-y border-white/10 bg-ink-800/40 py-20">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Cómo trabajamos</span>
            <h2 className="mt-4 text-2xl md:text-3xl">Nuestro proceso</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {s.process.map((p, i) => (
              <Reveal key={p.step} delay={i * 70}>
                <div className="relative rounded-2xl bg-ink p-6 ring-1 ring-white/10">
                  <span className={`font-display text-3xl ${accentText}`}>{p.step}</span>
                  <h3 className="mt-3 text-base">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-steel-400">{p.text}</p>
                </div>
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
                  <Check className={`mt-0.5 h-5 w-5 shrink-0 ${accentText}`} />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-2 gap-3">
              {s.gallery.slice(0, 4).map((g, i) => (
                <div
                  key={g}
                  className={`relative overflow-hidden rounded-xl ring-1 ring-white/10 ${
                    s.slug === 'telecom-gabinetes'
                      ? 'col-span-2 h-52'
                      : i === 0
                        ? 'col-span-2 h-52'
                        : 'h-36'
                  }`}
                >
                  <Image src={g} alt={s.shortName} fill sizes="(max-width:1024px) 50vw, 25vw" className="object-cover" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FICHAS TÉCNICAS */}
      {s.fichas && s.fichas.length > 0 && (
        <section className="border-t border-white/10 bg-ink-800/40 py-16">
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
          <div className="mt-8 divide-y divide-white/10">
            {s.faq.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-white">
                  <span className="font-medium">{f.q}</span>
                  <span className="text-artel-green-400 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-steel-300">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + FORM */}
      <section id="cotizar" className="section-fade border-t border-white/10 py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Cotización en 3 pasos</span>
            <h2 className="mt-4 text-3xl md:text-4xl">Solicita tu cotización</h2>
            <p className="mt-5 text-steel-300">
              Un ingeniero de ARTEL analizará tu caso de {s.shortName.toLowerCase()} y te contactará.
              Sin compromiso.
            </p>
            <div className="mt-8">
              <WaButton location={`landing_${s.slug}_form`} message={s.waMessage} className="btn btn-secondary">
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
