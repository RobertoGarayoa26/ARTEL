import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center px-5 pt-20">
      <div className="text-center">
        <p className="font-display text-6xl text-artel-green-400">404</p>
        <h1 className="mt-4 text-2xl">Página no encontrada</h1>
        <p className="mx-auto mt-3 max-w-md text-steel-400">
          La página que buscas no existe o fue movida. Vuelve al inicio para explorar nuestras
          líneas de negocio.
        </p>
        <Link href="/" className="btn btn-primary mt-8">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
