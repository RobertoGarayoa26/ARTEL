'use client';

import { useState } from 'react';
import Image from 'next/image';
import { projects, projectCategories, type ProjectCategory } from '@/lib/projects';

type Filter = 'Todos' | ProjectCategory;

export function ProjectsGallery() {
  const [filter, setFilter] = useState<Filter>('Todos');
  const filters: Filter[] = ['Todos', ...projectCategories];
  const shown = filter === 'Todos' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              filter === f
                ? 'bg-artel-green text-white'
                : 'bg-white/5 text-steel-300 ring-1 ring-inset ring-white/10 hover:bg-white/10'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <div key={p.title} className="group overflow-hidden rounded-2xl ring-1 ring-white/10">
            <div className="relative h-52 w-full overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width:1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15">
                {p.category}
              </span>
            </div>
            <div className="bg-ink-800 p-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-base">{p.title}</h3>
              </div>
              <p className="mt-1.5 text-sm text-steel-400">{p.summary}</p>
              <p className="mt-3 text-xs text-steel-500">{p.location}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-steel-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
