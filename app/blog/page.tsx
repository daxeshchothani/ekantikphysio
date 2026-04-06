import type { Metadata } from "next";
import BlogPageContent from "@/components/sections/shared/BlogPageContent";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Physiotherapy advice, recovery strategies, and expert guidance from Ekantik Physio clinicians.",
};

export default function BlogPage() {
  return <BlogPageContent />;
}
