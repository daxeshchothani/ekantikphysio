"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

const checks = [
  "Restoring Movement & Mobility",
  "Rebuilding Confidence & Strength",
  "Treating the Whole Person, Not Just the Injury",
];

const progressBars = [
  { label: "Patient Satisfaction", value: 98 },
  { label: "Treatment Success Rate", value: 94 },
  { label: "NHS-Standard Care", value: 100 },
];

export default function AboutSnapshot() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="bg-surface py-24"
    >
      <div className="container-shell grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=700&q=80"
              alt="Neurological physiotherapy session"
              width={700}
              height={520}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="absolute -left-4 top-4 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-dark shadow-lg">
            ✓ CSP Registered Clinic
          </div>

          <div className="absolute right-4 top-4 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg">
            12+ Years in London
          </div>

          <div className="absolute -bottom-8 -right-8 hidden overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:block">
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80"
              alt="Post-surgical rehabilitation"
              width={280}
              height={210}
              className="h-auto w-full object-cover"
              sizes="280px"
            />
          </div>
        </div>

        <div>
          <SectionLabel label="About Ekantik Physio" />
          <h2 className="mt-5 text-dark">Science-Backed Treatment. Personalised Recovery. Results That Last.</h2>
          <p className="mt-4 text-muted">
            Ekantik Physio was founded to combine world-class clinical standards with deeply personal care.
            Every treatment plan begins with a detailed understanding of your lifestyle, responsibilities,
            and recovery goals, so your progress translates directly into real life.
          </p>
          <p className="mt-4 text-muted">
            Located on Harley Street in Marylebone, we support Londoners from all walks of life, including
            athletes, professionals, post-surgical patients, and older adults. Our multidisciplinary mindset
            helps you recover faster while building long-term resilience.
          </p>

          <div className="mt-6 space-y-3">
            {checks.map((text) => (
              <div key={text} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                <p className="font-semibold text-dark">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            {progressBars.map((bar, index) => (
              <div key={bar.label}>
                <div className="mb-1 flex items-center justify-between text-sm font-semibold">
                  <span className="text-dark">{bar.label}</span>
                  <span className="text-primary">{bar.value}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-white">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${bar.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.12 }}
                    className="h-full rounded-full bg-primary"
                  />
                </div>
              </div>
            ))}
          </div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="mt-8 inline-flex">
            <Link
              href="/about"
              className="inline-flex items-center rounded-full border-2 border-primary px-8 py-4 font-semibold text-primary transition hover:bg-primary hover:text-white"
            >
              Learn More About Us →
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
