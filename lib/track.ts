// Envía eventos a GA4 y a GTM (dataLayer). Seguro si no hay analítica configurada.
export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;
  // GTM dataLayer
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push({ event, ...params });
  // GA4 gtag
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', event, params);
  }
}
