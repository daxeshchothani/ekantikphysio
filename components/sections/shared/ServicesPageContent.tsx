"use client";

import { motion } from "framer-motion";
import { ClipboardList, MapPinned, Trophy } from "lucide-react";
import BookingCTA from "@/components/ui/BookingCTA";
import PageHero from "@/components/ui/PageHero";
import ServiceCard from "@/components/ui/ServiceCard";
import { SERVICES } from "@/lib/data";

const reasons = [
  { icon: Trophy, title: "Harley Street Location" },
  { icon: MapPinned, title: "HCPC Registered Therapists" },
  { icon: ClipboardList, title: "Personalised Treatment Plans" },
];

export default function ServicesPageContent() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Specialist physiotherapy services tailored to your needs."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-white py-20"
      >
        <div className="container-shell mx-auto max-w-3xl text-center">
          <h2 className="text-dark">Expert Treatment for Every Condition</h2>
          <p className="mt-4 text-muted">
            Ekantik Physio combines advanced clinical assessment with highly personalised treatment pathways
            across musculoskeletal, neurological, and post-operative rehabilitation.
          </p>
          <p className="mt-3 text-muted">
            Whether your goal is returning to sport, improving daily mobility, or reducing persistent pain,
            our six specialist services adapt to your needs and progression pace.
          </p>
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
          {SERVICES.map((service) => (
            <div key={service.id}>
              <ServiceCard service={service} />
              <div className="mt-3 rounded-2xl border border-primary/15 bg-white p-4">
                <p className="text-sm font-semibold text-primary">Key Benefits</p>
                <ul className="mt-2 space-y-1 text-sm text-muted">
                  {service.benefits.slice(0, 3).map((benefit) => (
                    <li key={benefit}>• {benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
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
        <div className="container-shell grid grid-cols-1 gap-4 sm:grid-cols-3">
          {reasons.map((reason) => (
            <motion.article
              key={reason.title}
              whileHover={{ y: -4, scale: 1.01 }}
              className="rounded-2xl border border-white/15 bg-white/5 p-5 text-center"
            >
              <reason.icon className="mx-auto h-7 w-7 text-accent" />
              <p className="mt-2 font-semibold">{reason.title}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <BookingCTA />
    </>
  );
}
