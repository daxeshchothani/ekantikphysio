import type { Metadata } from "next";
import ContactPageContent from "@/components/sections/shared/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Ekantik Physio in Marylebone, London for appointments, service questions, and patient support.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
