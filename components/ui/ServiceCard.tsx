"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Brain,
  Dumbbell,
  Hand,
  Heart,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Service } from "@/types";

const iconMap = {
  Dumbbell,
  Activity,
  Heart,
  Brain,
  Shield,
  Hands: Hand,
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Activity;

  return (
    <Link href={`/services/${service.slug}`} className="group block">
      <motion.article
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden rounded-2xl border-t-4 border-transparent bg-white shadow-lg transition group-hover:border-primary"
      >
        <div className="relative aspect-[4/3]">
          <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        </div>
        <div className="p-6">
          <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="text-dark">{service.title}</h3>
          <p className="mt-3 text-muted">{service.shortDesc}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:text-primary-light">
            Read More
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </motion.article>
    </Link>
  );
}
