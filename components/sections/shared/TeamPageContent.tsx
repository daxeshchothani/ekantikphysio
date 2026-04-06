"use client";

import { motion } from "framer-motion";
import BookingCTA from "@/components/ui/BookingCTA";
import PageHero from "@/components/ui/PageHero";
import TeamCard from "@/components/ui/TeamCard";
import { TEAM } from "@/lib/data";

const beliefs = [
  "Evidence-led care with measurable goals",
  "Human-first communication and compassion",
  "Collaborative recovery that builds confidence",
];

export default function TeamPageContent() {
  return (
    <>
      <PageHero
        title="Meet Our Team"
        subtitle="Five specialist physiotherapists, one shared mission."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Team", href: "/team" },
        ]}
      />

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-white py-20"
      >
        <div className="container-shell mx-auto max-w-3xl text-center text-muted">
          Every member of the Ekantik Physio team is HCPC registered, CSP certified, and passionate about your recovery.
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-surface py-24"
      >
        <div className="container-shell grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-primary-dark py-14 text-white"
      >
        <div className="container-shell">
          <h3 className="text-center text-white">We believe in...</h3>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {beliefs.map((belief) => (
              <motion.div key={belief} whileHover={{ y: -4, scale: 1.01 }} className="rounded-2xl bg-white/10 p-5 text-center">
                {belief}
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
        className="bg-white py-16"
      >
        <div className="container-shell text-center">
          <h3 className="text-dark">Are you a qualified physiotherapist? We'd love to hear from you.</h3>
          <a href="mailto:info@ekantikphysio.co.uk" className="mt-3 inline-block font-semibold text-primary hover:text-primary-light">
            info@ekantikphysio.co.uk
          </a>
        </div>
      </motion.section>

      <BookingCTA />
    </>
  );
}
