'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import { nav, site, waLink } from '@/lib/site';
import { track } from '@/lib/track';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [linesOpen, setLinesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? 'bg-ink/90 backdrop-blur-md ring-1 ring-white/5' : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-center gap-2" aria-label="ARTEL — Inicio">
          <span className="rounded-md bg-white px-2 py-1.5">
            <Image
              src="/media/logo-artel.png"
              alt="ARTEL"
              width={92}
              height={28}
              priority
              className="h-8 w-auto"
            />
          </span>
        </Link>

        {/* Nav escritorio */}
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setLinesOpen(true)}
                onMouseLeave={() => setLinesOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-steel-200 hover:text-white">
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
                {linesOpen && (
                  <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3">
                    <div className="card overflow-hidden p-2 shadow-2xl shadow-black/40">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block rounded-lg px-3 py-2.5 text-sm text-steel-200 hover:bg-white/5 hover:text-white"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-steel-200 hover:text-white"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={waLink('Hola ARTEL, quiero información sobre sus servicios.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('whatsapp_click', { location: 'header' })}
            className="btn btn-secondary"
          >
            WhatsApp
          </a>
          <Link href="/contacto" className="btn btn-primary">
            Cotizar
          </Link>
        </div>

        {/* Botón móvil */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden">
          <div className="container-x border-t border-white/10 bg-ink pb-6 pt-2">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="py-2">
                  <p className="px-1 pb-1 text-xs font-semibold uppercase tracking-wider text-steel-400">
                    {item.label}
                  </p>
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-1 py-2.5 text-[15px] text-steel-200 hover:text-white"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-1 py-3 text-[15px] font-medium text-white"
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={waLink('Hola ARTEL, quiero información sobre sus servicios.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('whatsapp_click', { location: 'mobile_menu' })}
                className="btn btn-secondary w-full"
              >
                WhatsApp directo
              </a>
              <Link href="/contacto" onClick={() => setOpen(false)} className="btn btn-primary w-full">
                Cotizar ahora
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
