"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarClock, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SectionLabel from "@/components/ui/SectionLabel";

const wrapper = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="relative isolate overflow-hidden bg-surface"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(27,94,66,0.16),transparent_45%),radial-gradient(circle_at_85%_18%,rgba(245,166,35,0.20),transparent_35%),linear-gradient(180deg,#f4f8f5_0%,#eef5f1_100%)]" />
      <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-8 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />

      <div className="container-shell relative z-10 py-8 sm:py-10 lg:py-12">
        <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          <motion.div
            variants={wrapper}
            initial="hidden"
            animate="show"
            className="lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-primary/15 bg-dark p-7 text-white shadow-[0_30px_80px_rgba(12,31,22,0.28)] sm:p-10 lg:p-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:14px_14px]" />
              <div className="absolute -right-20 -top-24 h-60 w-60 rounded-full bg-accent/20 blur-3xl" />

              <div className="relative z-10">
                <motion.div
                  variants={item}
                  className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/95 backdrop-blur"
                >
                  <Sparkles className="h-4 w-4 text-accent" />
                  Trusted Physiotherapy in London
                </motion.div>

                <motion.div variants={item}>
                  <SectionLabel label="Restore Motion · Reduce Pain · Return Stronger" className="text-white" />
                </motion.div>

                <motion.h1
                  variants={item}
                  className="mt-5 max-w-3xl font-display text-4xl italic leading-[1.08] text-white sm:text-[56px] lg:text-[64px]"
                >
                  Designed Recovery Plans For
                  <span className="block not-italic text-accent">Real, Lasting Results</span>
                </motion.h1>

                <motion.p variants={item} className="mt-6 max-w-2xl text-white/80">
                  From sports injuries to post-surgical rehabilitation, our evidence-based care is tailored
                  to your body, your goals, and your pace.
                </motion.p>

                <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/appointment"
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-bold text-dark transition hover:bg-accent-hover"
                    >
                      Book Assessment
                      <ArrowRight className="h-4.5 w-4.5" />
                    </Link>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
                    >
                      Explore Treatments
                    </Link>
                  </motion.div>
                </motion.div>

                <motion.div
                  variants={item}
                  className="mt-10 grid gap-4 rounded-2xl border border-white/15 bg-white/5 p-5 sm:grid-cols-3"
                >
                  <div>
                    <AnimatedCounter end={500} suffix="+" />
                    <p className="text-sm text-white/75">Patients Guided</p>
                  </div>
                  <div className="border-y border-white/15 py-4 sm:border-x sm:border-y-0 sm:px-4 sm:py-0">
                    <AnimatedCounter end={10} suffix="+" />
                    <p className="text-sm text-white/75">Years Clinical Expertise</p>
                  </div>
                  <div>
                    <AnimatedCounter end={98} suffix="%" />
                    <p className="text-sm text-white/75">Positive Outcomes</p>
                  </div>
                </motion.div>

                <motion.div variants={item} className="mt-8 grid gap-3 text-sm sm:grid-cols-2">
                  <div className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-white/85">
                    <ShieldCheck className="h-4 w-4 text-accent" />
                    HCPC & CSP standards followed
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-white/85">
                    <CalendarClock className="h-4 w-4 text-accent" />
                    Flexible appointments available
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="relative min-h-[460px] overflow-hidden rounded-[2rem] border border-primary/15 bg-white shadow-[0_20px_70px_rgba(15,61,40,0.20)] lg:col-span-5"
          >
            <Image
              src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=1200&q=85&auto=format&fit=crop"
              alt="Physiotherapist helping a patient with guided rehabilitation exercises"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/15 to-transparent" />
            <div className="absolute right-8 top-8 h-24 w-24 rounded-[40%_60%_45%_55%] bg-primary-light/70 blur-[1px]" />

            <motion.div
              whileHover={{ y: -3, scale: 1.01 }}
              className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/25 bg-white/15 p-5 text-white backdrop-blur-md"
            >
              <p className="text-xs uppercase tracking-[0.15em] text-white/80">Patient Plan Update</p>
              <p className="mt-2 text-lg font-semibold">Mobility Progress: Week 4</p>
              <p className="mt-1 text-sm text-white/85">Strength, balance, and flexibility milestones achieved on target.</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              className="absolute -left-3 top-8 z-20 w-[250px] rounded-2xl bg-white p-4 shadow-2xl sm:w-[280px]"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-dark">Today: 2:00 PM Slot Available</p>
                  <Link href="/appointment" className="mt-1 inline-block text-sm font-semibold text-accent hover:text-accent-hover">
                    Reserve Appointment →
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              className="absolute -right-3 bottom-32 z-20 rounded-xl border border-primary/10 bg-white px-4 py-3 shadow-xl"
            >
              <p className="text-xs uppercase tracking-wide text-muted">Average recovery confidence</p>
              <p className="mt-1 text-lg font-bold text-primary">98% patient satisfaction</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
