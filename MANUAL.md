# ARTEL — Sitio web corporativo · Manual de administración

Sitio de generación de leads B2B construido con **Next.js 14 (App Router) + TypeScript + Tailwind CSS**.
Este manual explica cómo poner el sitio en línea y cómo actualizar su contenido sin ser programador.

---

## 1. Requisitos previos

- **Node.js 18.18 o superior** (recomendado Node 20 LTS). Descárgalo en https://nodejs.org
- Un editor de texto (recomendado: VS Code).
- Una terminal (PowerShell en Windows).

---

## 2. Puesta en marcha (primera vez)

Abre una terminal dentro de la carpeta del proyecto (`ARTEL WEB`) y ejecuta:

```bash
npm install       # instala dependencias (2-4 min la primera vez)
npm run dev        # arranca el sitio en modo desarrollo
```

Luego abre en tu navegador: **http://localhost:3000**

> Si al hacer `npm install` ves errores por una carpeta `node_modules` incompleta,
> bórrala y vuelve a ejecutar `npm install`. En Windows: elimina la carpeta `node_modules`
> desde el Explorador de archivos y repite el comando.

Para generar la versión de producción y probarla:

```bash
npm run build      # compila el sitio optimizado
npm start          # sirve la versión de producción en http://localhost:3000
```

---

## 3. Configuración (variables de entorno)

Copia el archivo `.env.example` y renómbralo a **`.env.local`**. Rellena estos valores:

| Variable | Para qué sirve |
|---|---|
| `RESEND_API_KEY` | Clave para enviar los leads por correo (ver sección 4). |
| `LEAD_TO_EMAIL` | Correo que **recibe** los leads. Ya viene como `aflores@cr-artel.com`. |
| `LEAD_FROM_EMAIL` | Remitente del correo (dominio verificado en Resend). |
| `NEXT_PUBLIC_GA4_ID` | ID de Google Analytics 4 (`G-XXXXXXX`). Opcional. |
| `NEXT_PUBLIC_GTM_ID` | ID de Google Tag Manager (`GTM-XXXXXXX`). Opcional. |
| `NEXT_PUBLIC_WHATSAPP` | Número de WhatsApp en formato internacional **sin “+”** (ej. `5215512345678`). |
| `NEXT_PUBLIC_SITE_URL` | URL final del sitio (ej. `https://www.cr-artel.com`). |

> Las variables que empiezan con `NEXT_PUBLIC_` son visibles en el navegador; el resto son privadas.

---

## 4. Correo de leads (formulario) — configurar Resend

El formulario por pasos y las descargas de fichas envían el lead al correo definido en `LEAD_TO_EMAIL`.
Usamos **Resend** (https://resend.com), que tiene plan gratuito:

1. Crea una cuenta en Resend.
2. En **Domains**, agrega y verifica tu dominio `cr-artel.com` (Resend te da unos registros DNS que debes poner en tu proveedor de dominio).
3. En **API Keys**, crea una clave y cópiala en `RESEND_API_KEY` dentro de `.env.local`.
4. Pon `LEAD_FROM_EMAIL=leads@cr-artel.com` (o el remitente que prefieras, del dominio verificado).

**Mientras no configures la clave**, el formulario sigue funcionando en modo demo: el lead se
registra en la consola del servidor y el usuario ve el mensaje de éxito, pero **no se envía correo**.

> ¿Prefieres otro método? El envío está aislado en `app/api/lead/route.ts`. Se puede cambiar por
> Formspree, un webhook a tu CRM (HubSpot, Zoho, etc.) o SMTP sin tocar el resto del sitio.

---

## 5. Analítica (GA4 y GTM) y eventos

Pon tus IDs en `.env.local` (`NEXT_PUBLIC_GA4_ID` y/o `NEXT_PUBLIC_GTM_ID`) y la analítica se
activa automáticamente. El sitio ya envía estos **eventos** (a GA4 y a la capa de datos de GTM):

| Evento | Cuándo ocurre |
|---|---|
| `whatsapp_click` | Clic en cualquier botón de WhatsApp (incluye la ubicación). |
| `generate_lead` | El usuario envía el formulario o pide una ficha. |
| `form_submit_success` | El lead se envió correctamente. |
| `form_submit_error` | Falló el envío del lead. |
| `file_download` | Se descargó una ficha técnica. |

---

## 6. Cómo editar el contenido

Todo el contenido editable está en la carpeta **`lib/`**. No necesitas tocar el diseño.

### 6.1 Datos de contacto  → `lib/site.ts`
Edita el bloque `contact`: correo, WhatsApp, teléfono, **dirección**, coordenadas del mapa,
horario y cobertura. Los valores actuales son **de ejemplo (PLACEHOLDER)** — reemplázalos por los reales.
También ahí van tus redes sociales (`social`).

> Las coordenadas `geo: { lat, lng }` controlan el pin del mapa en la página de Contacto.
> Búscalas en Google Maps (clic derecho sobre tu ubicación → copiar coordenadas).

### 6.2 Líneas de negocio  → `lib/services.ts`
Cada línea (micromovilidad, telecom, HVAC, energía) es un objeto con su texto, imágenes,
capacidades, proceso, preguntas frecuentes y mensaje de WhatsApp. Edita el texto entre comillas.

### 6.3 Proyectos / casos de éxito  → `lib/projects.ts`
Para **agregar un proyecto**, copia un bloque existente y edítalo:

```ts
{
  title: 'Nombre del proyecto',
  category: 'Micromovilidad', // o 'Telecom' | 'HVAC' | 'Energía'
  image: '/media/mi-nueva-foto.webp',
  location: 'Ciudad, México',
  summary: 'Descripción breve del proyecto.',
  tags: ['Etiqueta 1', 'Etiqueta 2'],
},
```

Los filtros de la página `/proyectos` se generan solos según la `category`.

---

## 7. Imágenes y videos

Van en la carpeta **`public/media/`**. Usa formato **WebP** para imágenes (ligero y rápido).

Para agregar una imagen nueva:
1. Convierte tu foto a WebP (herramientas como https://squoosh.app) y súbela a `public/media/`.
2. Referénciala en `lib/services.ts` o `lib/projects.ts` como `/media/nombre.webp`.

Los videos de fondo (`public/media/video/*.mp4`) ya están comprimidos para web. Si reemplazas alguno,
mantenlo por debajo de ~3 MB y en 720p para no afectar la velocidad de carga.

> Las fotos originales sin comprimir quedaron en la carpeta `assets/` por si las necesitas.

---

## 8. Fichas técnicas (PDF)

Están en **`public/fichas/`**. Para reemplazar o agregar una:
1. Coloca el PDF en `public/fichas/`.
2. En `lib/services.ts`, dentro de la línea correspondiente, edita el arreglo `fichas`
   (título, `file: '/fichas/tu-archivo.pdf'` y las especificaciones que se muestran).

La descarga pide el correo del prospecto antes de entregar el archivo (lead magnet) y registra el lead.

---

## 9. Número de WhatsApp y mensajes

- El **número** se controla con `NEXT_PUBLIC_WHATSAPP` (o en `lib/site.ts`, campo `whatsapp`).
- Cada botón envía un **mensaje pre-cargado según la sección** (ej. la landing de centros de carga
  abre WhatsApp con “…me interesa cotizar un centro de carga…”). Esos textos están en el campo
  `waMessage` de cada línea en `lib/services.ts`.

---

## 10. SEO

- **Títulos y descripciones** por página: en cada `page.tsx` (o en `lib/services.ts` para las landings,
  campos `metaTitle` y `metaDescription`).
- **Open Graph** (previsualización al compartir en LinkedIn/WhatsApp): imagen en
  `public/media/og-default.jpg`. Cámbiala por una propia de 1200×630 px si lo deseas.
- **Datos estructurados** (Schema.org): `Organization` en `app/layout.tsx`, `LocalBusiness` en
  `app/contacto/page.tsx`, `Service` en cada landing. Se llenan solos con los datos de `lib/site.ts`.
- **Sitemap** y **robots**: se generan automáticamente en `/sitemap.xml` y `/robots.txt`.

> Recuerda actualizar `NEXT_PUBLIC_SITE_URL` con tu dominio final para que los enlaces canónicos
> y el sitemap sean correctos.

---

## 11. Publicar el sitio (deploy)

La forma más sencilla es **Vercel** (creadores de Next.js, tiene plan gratuito):

1. Sube el proyecto a un repositorio de GitHub.
2. Entra a https://vercel.com, conecta el repositorio e impórtalo.
3. En **Settings → Environment Variables**, agrega las mismas variables de tu `.env.local`.
4. Vercel construye y publica automáticamente. Cada vez que cambies el código, se actualiza solo.
5. En **Settings → Domains**, conecta `cr-artel.com`.

Alternativas: **Netlify** funciona igual. Cualquier hosting con Node.js 18+ sirve
(`npm run build` y `npm start`).

---

## 12. Estructura del proyecto (referencia rápida)

```
ARTEL WEB/
├─ app/                     Páginas y rutas
│  ├─ page.tsx              Home
│  ├─ layout.tsx            Estructura global (header, footer, SEO, analítica)
│  ├─ micromovilidad-centros-de-carga/   Landing
│  ├─ telecom-gabinetes/                  Landing
│  ├─ hvac-industrial/                    Landing
│  ├─ energia-solar-ev/                   Landing
│  ├─ nosotros/  proyectos/  contacto/    Páginas
│  ├─ api/lead/route.ts     Recepción y envío de leads
│  ├─ sitemap.ts  robots.ts SEO técnico
├─ components/              Piezas reutilizables (formulario, header, etc.)
├─ lib/                     >>> CONTENIDO EDITABLE <<<
│  ├─ site.ts               Contacto, navegación, WhatsApp
│  ├─ services.ts           Las 4 líneas de negocio
│  └─ projects.ts           Proyectos / casos de éxito
├─ public/media/            Imágenes (WebP), videos, logo, OG
├─ public/fichas/           Fichas técnicas en PDF
├─ assets/                  Fotos y videos originales (sin comprimir)
└─ .env.example             Plantilla de configuración
```

---

## 13. Checklist antes de salir a producción

- [ ] Reemplazar los datos de contacto PLACEHOLDER en `lib/site.ts` (dirección, teléfono, coordenadas).
- [ ] Poner el número real de WhatsApp (`NEXT_PUBLIC_WHATSAPP`).
- [ ] Configurar Resend y verificar el dominio para recibir leads por correo.
- [ ] Probar el formulario de principio a fin (llega el correo a `aflores@cr-artel.com`).
- [ ] Crear la propiedad de GA4 / GTM y poner los IDs.
- [ ] Revisar los textos de cada línea de negocio y agregar proyectos reales.
- [ ] Confirmar `NEXT_PUBLIC_SITE_URL` con el dominio final.
- [ ] Reemplazar la imagen `og-default.jpg` si se desea una propia.

---

¿Dudas técnicas? Todo el contenido vive en `lib/`. El diseño y la lógica no requieren mantenimiento
para operar el sitio día a día.
