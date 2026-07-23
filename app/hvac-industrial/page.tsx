import type { Metadata } from 'next';
import { getService } from '@/lib/services';
import { ServiceLanding } from '@/components/ServiceLanding';

const service = getService('hvac-industrial')!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  keywords: service.keywords,
  alternates: { canonical: `/${service.slug}` },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: `/${service.slug}`,
    images: [{ url: service.heroImage, width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <ServiceLanding service={service} />;
}
