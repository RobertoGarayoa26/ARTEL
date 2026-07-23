'use client';

import { useState } from 'react';
import { Download, FileText, Loader2, Check } from 'lucide-react';
import type { Ficha } from '@/lib/services';
import { track } from '@/lib/track';

// Descarga de ficha técnica con captura previa de correo (lead magnet).
export function FichaDownload({ ficha, interest }: { ficha: Ficha; interest: string }) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle');

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  async function handle(e: React.FormEvent) {
    e.preventDefault();
    if (!emailValid) return;
    setStatus('sending');
    track('generate_lead', { interest, type: 'ficha', asset: ficha.file });
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          interest,
          email,
          company,
          source: 'ficha_download',
          message: `Descarga de ficha técnica: ${ficha.title}`,
        }),
      });
    } catch {
      /* la descarga procede igualmente */
    }
    setStatus('done');
    track('file_download', { asset: ficha.file });
    // Dispara la descarga
    const a = document.createElement('a');
    a.href = ficha.file;
    a.download = '';
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  return (
    <div className="card p-5">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-artel-blue/20">
          <FileText className="h-6 w-6 text-artel-blue-400" />
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="text-base text-white">{ficha.title}</h4>
          <ul className="mt-2 grid gap-1 text-xs text-steel-400 sm:grid-cols-2">
            {ficha.specs.map((s) => (
              <li key={s.k}>
                <span className="text-steel-300">{s.k}:</span> {s.v}
              </li>
            ))}
          </ul>

          {!open && status !== 'done' && (
            <button onClick={() => setOpen(true)} className="btn btn-primary mt-4">
              <Download className="h-4 w-4" /> Descargar ficha (PDF)
            </button>
          )}

          {open && status !== 'done' && (
            <form onSubmit={handle} className="mt-4 grid gap-2 sm:grid-cols-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Correo corporativo*"
                className="ficha-input"
              />
              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Empresa"
                className="ficha-input"
              />
              <button
                type="submit"
                disabled={!emailValid || status === 'sending'}
                className="btn btn-primary sm:col-span-2 disabled:opacity-40"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Preparando…
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4" /> Enviar y descargar
                  </>
                )}
              </button>
            </form>
          )}

          {status === 'done' && (
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-artel-green-400">
              <Check className="h-4 w-4" /> Descarga iniciada. ¡Gracias!
            </p>
          )}
        </div>
      </div>

      <style jsx>{`
        :global(.ficha-input) {
          border-radius: 0.55rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.03);
          padding: 0.6rem 0.75rem;
          font-size: 0.85rem;
          color: white;
          outline: none;
        }
        :global(.ficha-input:focus) {
          border-color: #1f9e57;
        }
        :global(.ficha-input::placeholder) {
          color: #6b7280;
        }
      `}</style>
    </div>
  );
}
