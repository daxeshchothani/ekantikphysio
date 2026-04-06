import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/ui/ScrollToTop";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ekantikphysio.co.uk"),
  title: {
    default: "Ekantik Physio",
    template: "Ekantik Physio | %s",
  },
  description:
    "Ekantik Physio delivers evidence-based physiotherapy in London for sports injuries, post-surgical recovery, chronic pain, neurological rehabilitation, and falls prevention.",
  keywords: [
    "physiotherapy London",
    "sports injury rehabilitation",
    "post-surgical physiotherapy",
    "neurological physiotherapy",
    "chronic pain management",
    "Harley Street physiotherapist",
  ],
  openGraph: {
    title: "Ekantik Physio",
    description:
      "Feel Better. Move Freely. Live Fully. Trusted physiotherapists in Marylebone, London.",
    type: "website",
    locale: "en_GB",
    siteName: "Ekantik Physio",
    url: "https://www.ekantikphysio.co.uk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfairDisplay.variable} h-full`}>
      <body className="min-h-full bg-surface text-dark">
        <Navbar />
        <main className="min-h-[calc(100vh-200px)]">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
