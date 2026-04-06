import type { Metadata } from "next";
import AppointmentPageContent from "@/components/sections/shared/AppointmentPageContent";

export const metadata: Metadata = {
  title: "Book Appointment",
  description:
    "Book your physiotherapy appointment at Ekantik Physio and choose the specialist service that fits your recovery goals.",
};

export default function AppointmentPage() {
  return <AppointmentPageContent />;
}
