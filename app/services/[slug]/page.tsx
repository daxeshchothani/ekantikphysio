import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailContent from "@/components/sections/shared/ServiceDetailContent";
import { SERVICES } from "@/lib/data";

interface Params {
  slug: string;
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const service = SERVICES.find((item) => item.slug === params.slug);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested physiotherapy service could not be found.",
    };
  }

  return {
    title: service.title,
    description: service.shortDesc,
  };
}

export default function ServiceDetailPage({ params }: { params: Params }) {
  const service = SERVICES.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailContent service={service} />;
}
