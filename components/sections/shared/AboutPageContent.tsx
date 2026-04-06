"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Microscope, ShieldCheck, Stethoscope } from "lucide-react";
import Image from "next/image";
import BookingCTA from "@/components/ui/BookingCTA";
import PageHero from "@/components/ui/PageHero";
import TeamCard from "@/components/ui/TeamCard";
import { TEAM } from "@/lib/data";

const values = [
  {
    icon: Stethoscope,
    title: "Evidence-Based Practice",
    description: "Every treatment decision is grounded in current research and measurable clinical outcomes.",
  },
  {
    icon: HeartHandshake,
    title: "Patient-First Always",
    description: "Your goals, schedule, and comfort guide every stage of rehabilitation and recovery.",
  },
  {
    icon: ShieldCheck,
    title: "Compassionate Care",
    description: "We combine clinical precision with empathy to support confidence at every session.",
  },
  {
    icon: Microscope,
    title: "Clinically Transparent",
    description: "Clear progress tracking and open communication keep you informed and in control.",
  },
];

const timeline = [
  "2012: Founded by Dr. Sarah Mitchell",
  "2015: Moved to Harley Street",
  "2018: Expanded to 6 specialist services",
  "2021: 100+ 5-star Google reviews",
  "2024: 500+ patients treated",
];

const accreditations = [
  "Chartered Society of Physiotherapy",
  "Health & Care Professions Council",
  "HCPC Registered",
  "Bupa Recognised",
  "AXA Health Partner",
  "Vitality Health Partner",
];

export default function AboutPageContent() {
  return (
    <>
      <PageHero
        title="About Ekantik Physio"
        subtitle="Learn who we are, what we believe, and why London trusts us."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
        ]}
      />

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-white py-24"
      >
        <div className="container-shell grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80"
              alt="Physiotherapist consulting patient"
              width={700}
              height={520}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-dark">We Don't Just Treat Injuries — We Restore Lives</h2>
            <p className="mt-4 text-muted">
              Ekantik Physio is built around one principle: meaningful recovery requires both clinical
              excellence and personal understanding. We take time to identify not only your diagnosis,
              but also the daily demands that shape your movement and health.
            </p>
            <p className="mt-4 text-muted">
              Our team follows NHS-standard private care pathways with detailed assessments, measurable
              milestones, and evidence-led interventions across musculoskeletal, neurological, and
              post-surgical rehabilitation.
            </p>
            <p className="mt-4 text-muted">
              Based at 14 Harley Street in Marylebone, we support London professionals, athletes,
              families, and older adults with personalised plans that improve strength, confidence,
              and long-term wellbeing.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-surface py-24"
      >
        <div className="container-shell grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <motion.article
              key={value.title}
              whileHover={{ y: -4, scale: 1.01 }}
              className="rounded-2xl bg-white p-6 shadow-lg"
            >
              <value.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-dark">{value.title}</h3>
              <p className="mt-2 text-sm text-muted">{value.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-white py-24"
      >
        <div className="container-shell max-w-4xl">
          <h2 className="text-center text-dark">Our Journey</h2>
          <div className="mt-10 space-y-7 border-l-2 border-primary/20 pl-8">
            {timeline.map((item) => (
              <motion.div key={item} whileHover={{ y: -4, scale: 1.01 }} className="relative">
                <span className="absolute -left-[42px] top-2 h-4 w-4 rounded-full bg-primary" />
                <p className="text-lg font-semibold text-dark">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-surface py-24"
      >
        <div className="container-shell">
          <h2 className="text-center text-dark">Our Team</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-white py-14"
      >
        <div className="container-shell overflow-x-auto">
          <div className="flex min-w-max gap-3">
            {accreditations.map((item) => (
              <div key={item} className="rounded-full border border-primary/20 bg-surface px-5 py-2 text-sm font-semibold text-primary">
                {item}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <BookingCTA />
    </>
  );
}
