'use client';

import { useState } from 'react';
import { Check, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { interestOptions } from '@/lib/services';
import { track } from '@/lib/track';

type Props = {
  defaultInterest?: string;
  compact?: boolean;
};

const STEPS = ['Área de interés', 'Alcance del proyecto', 'Tus datos'];

export function StepForm({ defaultInterest, compact }: Props) {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const [data, setData] = useState({
    interest: defaultInterest || '',
    scope: '',
    scopeDetail: '',
    name: '',
    company: '',
    role: '',
    email: '',
    phone: '',
    location: '',
    message: '',
  });

  const set = (k: keyof typeof data, v: string) => setData((d) => ({ ...d, [k]: v }));

  const canNext =
    (step === 0 && data.interest) ||
    (step === 1 && data.scope.trim().length > 0) ||
    step === 2;

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
  const canSubmit =
    data.name.trim() && data.company.trim() && emailValid && data.phone.trim();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setStatus('sending');
    track('generate_lead', { interest: data.interest });
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source: 'step_form' }),
      });
      if (!res.ok) throw new Error('bad');
      setStatus('ok');
      track('form_submit_success', { interest: data.interest });
    } catch {
      setStatus('error');
      track('form_submit_error', {});
    }
  }

  if (status === 'ok') {
    return (
      <div className="card p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-artel-green/15">
          <Check className="h-7 w-7 text-artel-green-600" />
        </div>
        <h3 className="text-xl">¡Solicitud enviada!</h3>
        <p className="mt-2 text-sm text-steel-300">
          Gracias, {data.name.split(' ')[0] || 'gracias'}. Un ingeniero de ARTEL revisará tu
          proyecto y te contactará a la brevedad.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="card p-6 sm:p-8">
      {/* Progreso */}
      <div className="mb-6 flex items-center gap-2">
        {STEPS.map((s, i) => (
          <div key={s} className="flex flex-1 items-center gap-2">
            <div
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                i < step
                  ? 'bg-artel-green text-white'
                  : i === step
                  ? 'bg-artel-green/15 text-artel-green-600 ring-2 ring-artel-green'
                  : 'bg-black/5 text-steel-400'
              }`}
            >
              {i < step ? <Check className="h-4 w-4" /> : i + 1}
            </div>
            {i < STEPS.length - 1 && (
              <div className={`h-0.5 flex-1 rounded ${i < step ? 'bg-artel-green' : 'bg-black/10'}`} />
            )}
          </div>
        ))}
      </div>
      <p className="mb-5 text-xs font-semibold uppercase tracking-wider text-steel-400">
        Paso {step + 1} de 3 · {STEPS[step]}
      </p>

      {/* Paso 1 */}
      {step === 0 && (
        <div className="grid gap-3">
          {interestOptions.map((opt) => (
            <button
              type="button"
              key={opt}
              onClick={() => {
                set('interest', opt);
                setTimeout(() => setStep(1), 150);
              }}
              className={`flex items-center justify-between rounded-xl border px-4 py-3.5 text-left text-sm transition-all ${
                data.interest === opt
                  ? 'border-artel-green bg-artel-green/10 text-steel-200'
                  : 'border-black/10 bg-black/[0.02] text-steel-200 hover:border-black/20'
              }`}
            >
              <span>{opt}</span>
              <ChevronRight className="h-4 w-4 opacity-60" />
            </button>
          ))}
        </div>
      )}

      {/* Paso 2 */}
      {step === 1 && (
        <div className="grid gap-4">
          <div>
            <label className="mb-1.5 block text-sm text-steel-200">
              Alcance estimado del proyecto
            </label>
            <input
              value={data.scope}
              onChange={(e) => set('scope', e.target.value)}
              placeholder="Ej. 40 e-bikes · 15 sitios · 20 toneladas · 100 kW"
              className="input"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm text-steel-200">
              Cuéntanos más (opcional)
            </label>
            <textarea
              value={data.scopeDetail}
              onChange={(e) => set('scopeDetail', e.target.value)}
              rows={3}
              placeholder="Contexto, ubicación, plazos, requerimientos específicos…"
              className="input resize-none"
            />
          </div>
        </div>
      )}

      {/* Paso 3 */}
      {step === 2 && (
        <div className="grid gap-3 sm:grid-cols-2">
          <Field label="Nombre*" value={data.name} onChange={(v) => set('name', v)} />
          <Field label="Empresa*" value={data.company} onChange={(v) => set('company', v)} />
          <Field label="Cargo" value={data.role} onChange={(v) => set('role', v)} />
          <Field
            label="Correo corporativo*"
            type="email"
            value={data.email}
            onChange={(v) => set('email', v)}
          />
          <Field label="Teléfono*" value={data.phone} onChange={(v) => set('phone', v)} />
          <Field
            label="Ubicación del proyecto"
            value={data.location}
            onChange={(v) => set('location', v)}
          />
          {status === 'error' && (
            <p className="sm:col-span-2 text-sm text-red-600">
              No se pudo enviar. Escríbenos por WhatsApp o inténtalo de nuevo.
            </p>
          )}
        </div>
      )}

      {/* Navegación */}
      <div className="mt-6 flex items-center justify-between gap-3">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="btn btn-ghost px-2"
          >
            <ChevronLeft className="h-4 w-4" /> Atrás
          </button>
        ) : (
          <span />
        )}

        {step < 2 ? (
          <button
            type="button"
            disabled={!canNext}
            onClick={() => setStep((s) => s + 1)}
            className="btn btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Continuar <ChevronRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="submit"
            disabled={!canSubmit || status === 'sending'}
            className="btn btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Enviando…
              </>
            ) : (
              'Solicitar cotización'
            )}
          </button>
        )}
      </div>

      <style jsx>{`
        :global(.input) {
          width: 100%;
          border-radius: 0.6rem;
          border: 1px solid rgba(0, 0, 0, 0.12);
          background: rgba(0, 0, 0, 0.015);
          padding: 0.7rem 0.85rem;
          font-size: 0.9rem;
          color: #12161f;
          outline: none;
          transition: border-color 0.15s;
        }
        :global(.input:focus) {
          border-color: #1f9e57;
        }
        :global(.input::placeholder) {
          color: #6b7280;
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  type = 'text',
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm text-steel-200">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input"
      />
    </div>
  );
}
