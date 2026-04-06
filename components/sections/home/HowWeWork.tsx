"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";

const steps = [
  {
    title: "Initial Assessment & Diagnosis",
    description:
      "We conduct a full movement and clinical assessment to identify root causes and recovery priorities.",
  },
  {
    title: "Personalised Treatment Plan",
    description:
      "Your therapist designs a targeted plan around your goals, schedule, and physical demands.",
  },
  {
    title: "Hands-On Therapy & Guided Exercises",
    description:
      "Treatment combines manual techniques with progressive exercise to restore function and confidence.",
  },
  {
    title: "Progress Tracking & Long-Term Wellness",
    description:
      "We re-evaluate regularly, adapt your plan, and equip you with strategies for lasting results.",
  },
];

export default function HowWeWork() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="bg-primary-dark py-24 text-white"
    >
      <div className="container-shell grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-[0_0_60px_rgba(46,125,90,0.35)]">
            <Image
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&q=80"
              alt="Physiotherapist guiding patient exercises"
              width={700}
              height={520}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-4 py-3 text-sm font-semibold text-dark shadow-2xl"
          >
            ★★★★★ Rated 5/5 on Google — 200+ Reviews
          </motion.div>
        </div>

        <div>
          <SectionLabel label="How We Work" className="text-accent" />
          <h2 className="mt-5 text-white">From Assessment to Recovery — We Guide Every Step</h2>

          <div className="mt-8 space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-16"
              >
                <div className="absolute left-0 top-0 font-display text-5xl text-accent">
                  {String(index + 1).padStart(2, "0")}
                </div>
                {index < steps.length - 1 ? (
                  <div className="absolute left-4 top-14 h-[72px] border-l-2 border-primary-light" />
                ) : null}
                <h3 className="text-white">{step.title}</h3>
                <p className="mt-1 text-white/70">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
