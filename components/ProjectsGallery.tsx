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
                ? 'bg-artel-cyan text-noir'
                : 'bg-black/5 text-steel-300 ring-1 ring-inset ring-black/10 hover:bg-black/10'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <div key={p.title} className="group flex h-full flex-col overflow-hidden rounded-2xl bg-noir ring-1 ring-white/10 transition-shadow duration-300 hover:shadow-2xl hover:shadow-artel-cyan/10">
            <div className="relative h-72 w-full shrink-0 overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-full bg-noir/80 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15">
                {p.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg text-white">{p.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm text-white/60">{p.summary}</p>
              <p className="mt-3 text-xs text-white/40">{p.location}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tags.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-white/10 px-2 py-0.5 text-[11px] text-white/70"
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
