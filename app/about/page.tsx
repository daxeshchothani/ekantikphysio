import type { Metadata } from "next";
import AboutPageContent from "@/components/sections/shared/AboutPageContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Ekantik Physio, our Harley Street clinical philosophy, and the specialist team trusted across London.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
