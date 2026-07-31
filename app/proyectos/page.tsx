import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { ProjectsGallery } from '@/components/ProjectsGallery';
import { WaButton } from '@/components/WaButton';

export const metadata: Metadata = {
  title: 'Proyectos y casos de éxito',
  description:
    'Galería técnica de proyectos ejecutados por ARTEL en micromovilidad, telecomunicaciones, HVAC industrial y energía. Fabricación, mantenimiento e integración de infraestructura.',
  alternates: { canonical: '/proyectos' },
};

export default function ProyectosPage() {
  return (
    <>
      <section className="section-fade pt-28 pb-12 md:pt-36">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Casos de éxito</span>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">
              Proyectos que respaldan nuestra ingeniería
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-steel-300">
              Desde 2020, más de 10,000 mantenimientos y 50,000 instalaciones de fibra óptica en todo el país.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x">
          <ProjectsGallery />
        </div>
      </section>

      <section className="border-t border-black/10 py-16">
        <div className="container-x flex flex-col items-start justify-between gap-6 rounded-2xl bg-ink-800 p-8 ring-1 ring-black/10 shadow-sm sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl">¿Tienes un proyecto similar?</h2>
            <p className="mt-2 text-steel-300">Cuéntanos el alcance y te preparamos una propuesta.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/contacto" className="btn btn-primary">
              Cotizar proyecto <ArrowRight className="h-4 w-4" />
            </Link>
            <WaButton
              location="proyectos_cta"
              message="Hola ARTEL, vi sus proyectos y quiero cotizar uno similar."
              className="btn btn-whatsapp"
            >
              WhatsApp
            </WaButton>
          </div>
        </div>
      </section>
    </>
  );
}
