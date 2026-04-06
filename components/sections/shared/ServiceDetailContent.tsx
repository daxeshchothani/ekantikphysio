"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock3, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SERVICES, TESTIMONIALS } from "@/lib/data";
import { Service } from "@/types";

interface ServiceDetailContentProps {
  service: Service;
}

export default function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  const related = SERVICES.filter((item) => service.relatedSlugs.includes(item.slug));
  const testimonial = TESTIMONIALS.find((item) => {
    const condition = item.condition.toLowerCase();
    return service.title.toLowerCase().split(" ").some((word) => condition.includes(word.toLowerCase()));
  }) ?? TESTIMONIALS[0];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="bg-surface py-20"
    >
      <div className="container-shell grid gap-8 lg:grid-cols-10">
        <article className="space-y-8 lg:col-span-7">
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <div className="relative aspect-video">
              <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 70vw" />
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <p className="text-sm text-muted">Home / Services / {service.title}</p>
            <h1 className="mt-2 text-dark">{service.title}</h1>

            <div className="mt-6 space-y-5">
              <section>
                <h3 className="text-dark">What Is It?</h3>
                <p className="mt-2 text-muted">{service.fullDesc}</p>
              </section>
              <section>
                <h3 className="text-dark">Who Is It For?</h3>
                <p className="mt-2 text-muted">
                  This service is ideal for people experiencing movement limitations, pain, or performance setbacks linked to {service.title.toLowerCase()} concerns.
                </p>
              </section>
              <section>
                <h3 className="text-dark">What to Expect</h3>
                <p className="mt-2 text-muted">
                  Your sessions combine assessment, targeted treatment, and guided progression, with each review focused on measurable improvements in movement quality and confidence.
                </p>
              </section>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h3 className="text-dark">Benefits</h3>
            <ul className="mt-3 space-y-2">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2 text-muted">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h3 className="text-dark">Treatment Steps</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {service.steps.map((step, idx) => (
                <motion.div key={step} whileHover={{ y: -4, scale: 1.01 }} className="rounded-2xl border border-primary/15 p-4">
                  <p className="font-display text-3xl text-accent">{idx + 1}</p>
                  <p className="mt-1 font-semibold text-dark">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <blockquote className="rounded-2xl bg-primary-dark p-6 text-white shadow-lg">
            <p className="text-lg">“{testimonial.quote}”</p>
            <footer className="mt-3 text-white/80">{testimonial.name} — {testimonial.condition}</footer>
          </blockquote>
        </article>

        <aside className="space-y-4 lg:col-span-3 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl bg-accent p-6 text-dark shadow-2xl">
            <p className="font-semibold">Book This Service</p>
            <p className="mt-1 text-sm">{service.title}</p>
            <Link href="/appointment" className="mt-4 inline-flex rounded-full bg-dark px-5 py-2 text-sm font-semibold text-white">
              Book Now
            </Link>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <p className="font-semibold text-dark">Clinic Hours</p>
            <div className="mt-2 space-y-1 text-sm text-muted">
              <p>Monday-Friday: 8:00 AM - 7:00 PM</p>
              <p>Saturday: 9:00 AM - 5:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <p className="font-semibold text-dark">Other Services</p>
            <ul className="mt-2 space-y-1 text-sm">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/services/${item.slug}`} className="text-primary hover:text-primary-light">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg text-sm text-muted">
            <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> <a href="tel:+442079460821">+44 20 7946 0821</a></div>
            <div className="mt-2 flex items-center gap-2"><Clock3 className="h-4 w-4 text-primary" /> Same-day appointments available</div>
          </div>
        </aside>
      </div>
    </motion.section>
  );
}
