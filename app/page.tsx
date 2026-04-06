import type { Metadata } from "next";
import AboutSnapshot from "@/components/sections/home/AboutSnapshot";
import BlogPreview from "@/components/sections/home/BlogPreview";
import HeroSection from "@/components/sections/home/HeroSection";
import HowWeWork from "@/components/sections/home/HowWeWork";
import Newsletter from "@/components/sections/home/Newsletter";
import ServicesGrid from "@/components/sections/home/ServicesGrid";
import StatsBar from "@/components/sections/home/StatsBar";
import TeamPreview from "@/components/sections/home/TeamPreview";
import TestimonialsSlider from "@/components/sections/home/TestimonialsSlider";
import BookingCTA from "@/components/ui/BookingCTA";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Ekantik Physio offers evidence-based physiotherapy in London for injury recovery, pain management, and long-term mobility.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <AboutSnapshot />
      <ServicesGrid />
      <HowWeWork />
      <TeamPreview />
      <TestimonialsSlider />
      <BlogPreview />
      <Newsletter />
      <BookingCTA />
    </>
  );
}
