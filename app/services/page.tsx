import type { Metadata } from "next";
import ServicesPageContent from "@/components/sections/shared/ServicesPageContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Ekantik Physio specialist services, from sports injury and post-surgical rehab to neurological and pain management care.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
