import type { Metadata } from "next";
import FaqPageContent from "@/components/sections/shared/FaqPageContent";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Find answers to common physiotherapy questions about appointments, referrals, treatment, and recovery.",
};

export default function FaqPage() {
  return <FaqPageContent />;
}
