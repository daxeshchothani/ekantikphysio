import type { Metadata } from "next";
import TeamPageContent from "@/components/sections/shared/TeamPageContent";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the Ekantik Physio team of HCPC-registered specialists delivering evidence-based physiotherapy in London.",
};

export default function TeamPage() {
  return <TeamPageContent />;
}
