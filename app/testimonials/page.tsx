import type { Metadata } from "next";
import TestimonialsPageContent from "@/components/sections/shared/TestimonialsPageContent";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read verified patient stories and outcomes from Ekantik Physio clients across London.",
};

export default function TestimonialsPage() {
  return <TestimonialsPageContent />;
}
