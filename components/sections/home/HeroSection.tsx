"use client";

import { motion } from "framer-motion";
import { CheckCircle2, PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SectionLabel from "@/components/ui/SectionLabel";

const container = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="relative min-h-screen overflow-hidden"
    >
      <div className="absolute left-10 top-10 h-96 w-96 animate-float rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-20 left-40 h-64 w-64 animate-float rounded-full bg-accent/10 blur-3xl" />

      <div className="grid min-h-screen lg:grid-cols-5">
        <div className="relative overflow-hidden bg-dark px-6 py-12 sm:px-10 lg:col-span-3 lg:px-14 lg:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:14px_14px]" />

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative z-10 flex h-full flex-col"
          >
            <motion.div
              variants={item}
              transition={{ delay: 0 }}
              className="mb-8 inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur"
            >
              <motion.span
                animate={{ scale: [1, 1.06, 1], opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY }}
                className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-accent"
              />
              🇬🇧 London's Trusted Physio Clinic
            </motion.div>

            <motion.div variants={item} transition={{ delay: 0.1 }}>
              <SectionLabel label="Feel Better · Move Freely · Live Fully" className="text-white" />
            </motion.div>

            <motion.h1
              variants={item}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-3xl font-display text-5xl italic text-white sm:text-[60px] sm:leading-[1.05]"
            >
              Reclaim Your Strength With Expert Physiotherapy
              <span className="block text-accent not-italic">in London</span>
            </motion.h1>

            <motion.p
              variants={item}
              transition={{ delay: 0.3 }}
              className="mt-6 max-w-2xl text-white/75"
            >
              Personalised, evidence-based treatment to help you recover faster, move better,
              and live pain-free — from our Harley Street clinic.
            </motion.p>

            <motion.div
              variants={item}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/appointment"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-bold text-dark transition hover:bg-accent-hover"
                >
                  Book Appointment →
                </Link>
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-white/35 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                <PlayCircle className="h-5 w-5" />
                Watch How We Work
              </motion.button>
            </motion.div>

            <motion.div
              variants={item}
              transition={{ delay: 0.5 }}
              className="mt-12 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 sm:grid-cols-3"
            >
              <div>
                <AnimatedCounter end={500} suffix="+" />
                <p className="text-sm text-white/75">Patients Treated</p>
              </div>
              <div className="border-y border-white/15 py-4 sm:border-x sm:border-y-0 sm:px-4 sm:py-0">
                <AnimatedCounter end={10} suffix="+" />
                <p className="text-sm text-white/75">Years Experience</p>
              </div>
              <div>
                <AnimatedCounter end={98} suffix="%" />
                <p className="text-sm text-white/75">Satisfaction Rate</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative min-h-[460px] lg:col-span-2 lg:min-h-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=85"
            alt="Physiotherapy consultation at Ekantik Physio"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />

          <div className="absolute right-8 top-8 h-24 w-24 rounded-[40%_60%_45%_55%] bg-primary-light/70 blur-[1px]" />

          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            className="absolute -left-10 bottom-8 z-20 w-[290px] rounded-2xl bg-white p-5 shadow-2xl"
          >
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
              <div>
                <p className="font-semibold text-dark">Next Available: Today at 2:00 PM</p>
                <Link href="/appointment" className="mt-1 inline-block text-sm font-semibold text-accent hover:text-accent-hover">
                  Book Now →
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
