import { NextResponse } from 'next/server';

// ============================================================
//  Recepción de leads → envía correo a aflores@cr-artel.com
//  Usa Resend (https://resend.com) vía API REST, sin dependencias.
//  Configura en .env.local:  RESEND_API_KEY, LEAD_TO_EMAIL, LEAD_FROM_EMAIL
//  Si no hay API key, el lead se registra en consola y el formulario
//  sigue funcionando (útil para pruebas / demo).
// ============================================================

export const runtime = 'nodejs';

type Lead = Record<string, string | undefined>;

function esc(s = '') {
  return s.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function row(label: string, value?: string) {
  if (!value) return '';
  return `<tr>
    <td style="padding:6px 12px;color:#64748b;font-size:13px;white-space:nowrap;vertical-align:top">${label}</td>
    <td style="padding:6px 12px;color:#0f172a;font-size:14px">${esc(value)}</td>
  </tr>`;
}

export async function POST(req: Request) {
  let data: Lead;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  // Anti-spam mínimo (honeypot opcional) + validación básica
  if (data.company_website) {
    return NextResponse.json({ ok: true }); // bot: descartar silenciosamente
  }
  const hasContact = data.email || data.phone;
  if (!hasContact) {
    return NextResponse.json({ ok: false, error: 'missing_contact' }, { status: 400 });
  }

  const to = process.env.LEAD_TO_EMAIL || 'aflores@cr-artel.com';
  const from = process.env.LEAD_FROM_EMAIL || 'ARTEL Web <onboarding@resend.dev>';
  const apiKey = process.env.RESEND_API_KEY;

  const subject = `Nuevo lead ARTEL — ${data.interest || 'Solicitud'}${
    data.company ? ' · ' + data.company : ''
  }`;

  const html = `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:auto;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden">
    <div style="background:#0B0E14;padding:20px 24px">
      <span style="color:#33C878;font-weight:bold;letter-spacing:2px;font-size:18px">ARTEL</span>
      <span style="color:#94a3b8;font-size:13px"> · Nuevo lead desde el sitio web</span>
    </div>
    <table style="width:100%;border-collapse:collapse;padding:12px">
      ${row('Área de interés', data.interest)}
      ${row('Alcance', data.scope)}
      ${row('Detalle', data.scopeDetail)}
      ${row('Nombre', data.name)}
      ${row('Empresa', data.company)}
      ${row('Cargo', data.role)}
      ${row('Correo', data.email)}
      ${row('Teléfono', data.phone)}
      ${row('Ubicación', data.location)}
      ${row('Mensaje', data.message)}
      ${row('Origen', data.source)}
    </table>
    <div style="padding:12px 24px;background:#f8fafc;color:#64748b;font-size:12px">
      Responde directamente a este correo para contactar al prospecto${
        data.email ? ` (${esc(data.email)})` : ''
      }.
    </div>
  </div>`;

  // Sin API key: modo demo. Registra y responde OK para no romper el formulario.
  if (!apiKey) {
    console.log('[LEAD] (sin RESEND_API_KEY, modo demo):', JSON.stringify(data));
    return NextResponse.json({ ok: true, demo: true });
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        html,
        reply_to: data.email || undefined,
      }),
    });
    if (!res.ok) {
      const t = await res.text();
      console.error('[LEAD] Resend error', res.status, t);
      return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('[LEAD] exception', e);
    return NextResponse.json({ ok: false, error: 'exception' }, { status: 500 });
  }
}
