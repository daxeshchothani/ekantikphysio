"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import { TeamMember } from "@/types";

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="group rounded-2xl bg-white p-6 text-center shadow-lg"
    >
      <div className="relative mx-auto aspect-square w-full max-w-[210px] overflow-hidden rounded-full">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 210px, 210px"
        />
      </div>
      <div className="mt-5">
        <h3 className="text-dark">{member.name}</h3>
        <p className="mt-1 text-sm font-semibold text-muted">{member.title}</p>
        <p className="mt-3 text-muted">{member.bio}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {member.specialties.map((specialty) => (
            <span
              key={specialty}
              className="inline-flex rounded-full bg-surface px-3 py-1 text-xs font-semibold text-primary"
            >
              {specialty}
            </span>
          ))}
        </div>

        <a
          href={member.linkedin}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary opacity-0 transition group-hover:opacity-100 hover:text-primary-light"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn Profile
        </a>
      </div>
    </motion.article>
  );
}
