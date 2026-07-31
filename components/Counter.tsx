'use client';

import { useEffect, useRef, useState } from 'react';

// Anima un número (ej. "+50,000", "Desde 2020", "+10,000 kW") de 0 a su valor final
// cuando entra en el viewport. Conserva prefijo/sufijo de texto alrededor del número.
export function Counter({
  value,
  duration = 1600,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const match = value.match(/[\d,]+/);
  const [display, setDisplay] = useState(() => {
    if (!match) return value;
    return `${value.slice(0, match.index)}0${value.slice((match.index ?? 0) + match[0].length)}`;
  });

  useEffect(() => {
    if (!match) return;
    const target = parseInt(match[0].replace(/,/g, ''), 10);
    const prefix = value.slice(0, match.index);
    const suffix = value.slice((match.index ?? 0) + match[0].length);

    const el = ref.current;
    if (!el) return;
    let started = false;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started) {
          started = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);
            setDisplay(`${prefix}${current.toLocaleString('es-MX')}${suffix}`);
            if (progress < 1) requestAnimationFrame(tick);
            else setDisplay(value);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  return <span ref={ref}>{display}</span>;
}
